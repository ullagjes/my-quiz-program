import React, { 
    useEffect, 
    useState 
} from 'react';
//NEXT
import { useRouter } from 'next/router';
//MATERIAL UI
import { 
    Grid,
    Typography
} from '@material-ui/core';
//CONTEXT
import { useAuth } from '../../../context/authContext';
//UTILS
import { 
    getQuestionData, 
    updateQuestionData 
} from '../../../utils/firebaseHelpers';
//STYLES
import { useStyles } from './styles';
//COMPONENTS
import QuestionForm from '../../../components/FormComponents/QuestionForm';
import PageContainer from '../../../components/PageComponents/PageContainer';
import { ErrorMessage } from '../../../components/BaseComponents';

//ALLOWS USER TO EDIT A SINGLE QUESTION

function editQuestion() {
    const router = useRouter();
    const { id, dynamic } = router.query;

    const classes = useStyles();

    const { user, loading, isAuthenticated } = useAuth();
    const [questionData, setQuestionData] = useState(null)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if(user){
            getSelectedQuestionData(user.uid, id, dynamic)
        }
    }, [user])

    //COLLECTS DATA FROM FIRESTORE
    //DATA IS USED AS INTIAL VALUES IN FORM
    async function getSelectedQuestionData(user, quizPin, questionId){
        const questionCollection = await getQuestionData(user, quizPin, questionId)
        setQuestionData(questionCollection)
    }

    //UPDATES FIRESTORE DATA
    async function updateQuestion(values){
        await updateQuestionData(user.uid, id, dynamic, values)
        setSuccess(true)
        router.push(`/createquiz/${id}`)
    }

    //AUTHENTICATION
    if(loading){
        return(
        <>Loading...</>
        );
    };
    
    if(isAuthenticated === false) {
        router.push('/login');
        return <ErrorMessage message={"You aren't logged in"}/>
    };

    return (
        <PageContainer title={"Update question"} user={user}>
            <Grid 
            container 
            direction="column"
            alignItems="center" 
            justify="center">
                <Grid item xs={12}>
                    <Typography variant="h3" component="h1" className={classes.title}>Edit question</Typography>
                </Grid>
                <Grid item xs={12}>
                    {questionData && 
                    <QuestionForm 
                    initialValues={{
                        title: questionData.title,
                        option_one: questionData.options.option_one,
                        option_two: questionData.options.option_two,
                        option_three: questionData.options.option_three,
                        option_four: questionData.options.option_four,
                        correctAnswers: [...questionData.correctAnswers]
                        }} 
                    onSubmit={updateQuestion}
                    feedBack={"Question updated! Please wait..."}
                    success={success}
                    />
                    } 
                </Grid>
            </Grid>
        </PageContainer>
    );
}

export default editQuestion;