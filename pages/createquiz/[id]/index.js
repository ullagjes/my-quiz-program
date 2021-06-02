import React, { useEffect, useState } from 'react';
//NEXT
import { useRouter } from 'next/router';
//MATERIAL UI
import { 
    Button, 
    Grid, 
    Paper, 
    Typography, 
    useMediaQuery
} from '@material-ui/core';
//CONTEXT
import { useAuth } from '../../../context/authContext';
//UTILS
import firebaseInstance from '../../../utils/firebase';
import { 
    addQuestionToDocument, 
    addQuizToRunningCollection, 
    addTitleToRunningQuiz, 
    countCollection,
    getQuizTitle 
} from '../../../utils/firebaseHelpers';
//STYLE
import { useStyles } from './styles';
//COMPONENTS
import { 
    SubTitle,
    ButtonComponent,
    ErrorMessage, 
} from '../../../components/BaseComponents';
import ListItem from '../../../components/PageComponents/ListItem';
import QuestionForm from '../../../components/FormComponents/QuestionForm';
import PageContainer from '../../../components/PageComponents/PageContainer';
import PageTitle from '../../../components/PageComponents/PageTitle';
import LoadingComponent from '../../../components/PageComponents/LoadingComponent';

function createQuestions () {

    const { user, loading, isAuthenticated } = useAuth();
    
    const router = useRouter();
    const { id } = router.query

    const classes = useStyles();
    const smallScreen = useMediaQuery('(max-width:600px)')
    const [toggle, setToggle] = useState(false)

    const [selectedQuizData, setSelectedQuizData] = useState(null)
    const [selectedQuizTitle, setSelectedQuizTitle] = useState([])
    const [counter, setCounter] = useState(null)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if(user){
            getSelectedQuizData(user.uid, id)
        }

        if(counter === null && user){
            getCounter(user.uid, id)
        }
    }, [id])

    //REALTIME DATA LISTENES TO EACH ADDED QUESTION DOCUMENT
    async function getSelectedQuizData(user, quizPin){
        const title = await getQuizTitle(user, quizPin)
        
        setSelectedQuizTitle(title)
        const quizCollection = await firebaseInstance
        .firestore()
        .collection('users')
        .doc(user)
        .collection('quizes')
        .doc(quizPin)
        .collection('questions')

        return quizCollection.onSnapshot((snapshot) => {
            let array = []
            snapshot.forEach(i => {
                array.push({
                    id: i.id,
                    ...i.data()
                })
            })
            setSelectedQuizData(array)
        })
    }
    
    async function getCounter(user, quizPin){
        let collectionLength = await countCollection(user, quizPin)
        setCounter(collectionLength)
    }

    //ADDS NEW QUESTION TO FIRESTORE
    async function addQuestionToFiresTore(values){        
        try {
            await addQuestionToDocument(user.uid, id, counter, values)
            setSuccess(true)
            setToggle(!toggle)
            getCounter(user.uid, id)
        } catch(error) {
            console.log('error when adding question to firestore', error)
        }
    }
    //ADDS QUIZ DATA TO RUNNING COLLECTION - STARTS QUIZ
    async function startQuiz(){
        if(selectedQuizData.length === 0){
            alert('Please add at least one question first!')
        } else {
            await addTitleToRunningQuiz(id, selectedQuizTitle)
            await addQuizToRunningCollection(id, selectedQuizData)
            router.push(`/runquiz/${id}`)
        }
    }

    //FORM COMPONENT CUSTOMIZED
    function QuestionFormComponent(){
        return(
            <QuestionForm 
            quizPin={id} 
            counter={counter} 
            onSubmit={addQuestionToFiresTore} 
            initialValues={{
                title: '',
                option_one: '',
                option_two: '',
                option_three: '',
                option_four: '',
                correctAnswers: [],
            }}
            success={success}
            feedBack={"Question added"}
            />
        )
    }

    //AUTHENTICATION
        
    if(loading){
        return <LoadingComponent />
    };

    if(isAuthenticated === false) {
        router.push('/login');
        return <ErrorMessage message={"You aren't logged in."}/>
    };
  
    return (
        <PageContainer title={"Your quiz"} user={user}>
            <Grid 
            container 
            direction="column" 
            className={classes.mainGrid}>
                <PageTitle
                title={selectedQuizTitle}
                buttonText={"Run this quiz"}
                onClick={startQuiz}
                />
                <Grid 
                item 
                container 
                justify="space-between"
                >
                    <Grid 
                    item
                    container
                    direction="column"
                    spacing={2}
                    xs={12}
                    md={8}>
                        {!smallScreen && 
                        <>
                            <Grid item>
                                <Typography className={classes.title} variant={'h4'} component={'h2'}>Add a question to your quiz</Typography>
                            </Grid>
                            <Grid item>
                                <QuestionFormComponent />
                            </Grid>
                        </>
                        }
                        {smallScreen && 
                        <>
                            <Button 
                            size={"large"} 
                            className={classes.button}
                            onClick={() => setToggle(!toggle)}>
                                {toggle ? 'Close question form' : 'Add a question to your quiz'}
                            </Button>
                            {toggle && <QuestionFormComponent/>}
                        </>
                        }
                    </Grid>
                    <Grid 
                    container
                    direction="column"
                    justify="flex-start"
                    spacing={3}
                    item 
                    xs={12} 
                    md={4}
                    >
                        <Grid item>
                        <Typography className={classes.title} variant={'h4'} component={'h2'}>Your questions</Typography>
                        </Grid>
                        <Paper className={classes.questionContainer}>
                            {selectedQuizData && selectedQuizData.length !== 0 ? 
                            <>
                                {selectedQuizData && selectedQuizData.map((i, index) => {
                                    return (
                                        <Grid item key={index}>
                                            <ListItem 
                                            component={"h3"}
                                            
                                            title={i.title}
                                            ariaLabelEdit={'Click to edit question'}
                                            handleEdit={() => router.push(`/createquiz/${id}/${i.id}`)}
                                            /> 
                                        </Grid>
                                        )
                                    })
                                }
                            </>
                            : 
                            <ListItem 
                            component={"h3"}
                            title={"You haven't added any questions yet!"}/>
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </PageContainer>
    );
}

export default createQuestions;
