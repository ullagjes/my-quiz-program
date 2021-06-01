import React, { 
    useEffect, 
    useState
} from 'react';
//NEXT
import { useRouter } from 'next/router';
//MATERIAL UI
import { 
    Button,
    Fade, 
    Grid, 
    Paper, 
    Typography
 } from '@material-ui/core';
//UTILS
import { useAuth } from '../../context/authContext';
import firebaseInstance from '../../utils/firebase';
//STYLES
import { useStyles } from './styles';
//COMPONENTS
import QuizForm from '../../components/FormComponents/QuizForm';
import PageContainer from '../../components/PageComponents/PageContainer';
import { 
    ButtonComponent, 
    SubTitle } from '../../components/BaseComponents';

function CreateNewQuiz() {
    const classes = useStyles()
    
    const router = useRouter()

    const { user, isAuthenticated, loading } = useAuth();
    const [userId, setUserId] = useState(null)

    const [newQuizPin, setNewQuizPin] = useState(null)
    
    const [toggle, setToggle] = useState(false)

    //CREATES A UNIQUE PINCODE FOR EACH QUIZ
    //USES GLOBAL COUNTER IN FIRESTORE
    useEffect(() => {
        if(user){
            setUserId(user.uid);
            const counter = firebaseInstance
            .firestore()
            .collection('globals')
            .doc('A3xMG5HOTnEpws1AASxC')

            return counter.onSnapshot((snapshot) => {
                const val = snapshot.data()
                setNewQuizPin(val.counter)
            })
        }
    }, [user])

    function handleToggle(){
        setToggle(!toggle)
    }

    //AUTHENTICATION
    if(loading){
        return(
        <>Loading...</>
        );
    };

    if(isAuthenticated === false) {
        router.push('/login');
        return <>You aren't logged in.</>
    };
  
    return (
        <PageContainer title={"Create quiz"} user={user}>
            <Grid 
            container
            justify="space-between"
            alignItems="center"
            alignContent="center"
            direction="column"
            spacing={2}
            className={classes.grid}
            >
                <Grid
                item 
                xs={10} 
                container 
                alignItems="baseline" 
                justify="center"
                className={classes.titleGrid}
                >
                    <Grid 
                    item 
                    xs={12}
                    >
                        <SubTitle component={"h1"} className={classes.title}>Create new quiz</SubTitle>
                    </Grid>
                </Grid>
                <Grid 
                item 
                xs={10} 
                spacing={2} 
                container 
                justify="space-between">
                    <Grid 
                    item 
                    xs={12} 
                    md={8}>
                        <Paper className={toggle ? classes.nonVisible : classes.paper}>
                            <Typography variant={"h4"} component={"p"}>
                                Here you can choose if you want to create your own customizable quiz, or if you're feeling less creative, you can try a premade quiz.
                            </Typography>
                        </Paper>
                        <Fade in={toggle}>
                        <Grid item xs={12}>
                            {toggle ? 
                            <QuizForm 
                            quizPin={JSON.stringify(newQuizPin)} 
                            userId={userId} 
                            />
                            : null
                            }
                        </Grid>
                    </Fade>
                    </Grid>
                    <Grid 
                    item 
                    md={4} 
                    xs={12} 
                    container
                    direction="row"
                    spacing={2}
                    justify="space-between"
                    >
                        <Grid item xs={12}>
                            <Button
                            className={`${classes.buttonVisible}`} 
                            onClick={handleToggle} size={"large"}
                            >
                            {toggle ? 'Close form' : 'Create new quiz'} 
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                            className={`${classes.buttonVisible}`} 
                            onClick={() => router.push('/createquiz/premade')} size={"large"}
                            >
                            Use a premade movie quiz
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> 
        </PageContainer>
    );
}

export default CreateNewQuiz;