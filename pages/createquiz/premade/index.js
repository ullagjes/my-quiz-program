import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import { getMovieQs } from '../../../utils/apiHelpers';

import firebaseInstance from '../../../utils/firebase';
import { createQuizPin } from '../../../utils/firebaseHelpers';

import { useAuth } from '../../../context/authContext';
import { useStyles } from './styles';
import PageContainer from '../../../components/PageComponents/PageContainer';
import { ButtonComponent, SubTitle } from '../../../components/BaseComponents';
import ListItem from '../../../components/PageComponents/ListItem';
import { Button, Grid } from '@material-ui/core';

function PreMade(props) {

    const router = useRouter();

    const { user, loading, isAuthenticated } = useAuth();

    const classes = useStyles();

    const [newQuizPin, setNewQuizPin] = useState(null)
    const [quizData, setQuizData] = useState([])

    useEffect(() => {
        if(user){
            createQuizObject()
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

    //FISHER-YATES-SHUFFLE ENSURES THE OPTIONS ARE SHUFFLED WHEN ADDED TO ARRAY
    function randomize(array){
        for(let i = 0; i < array.length - 1; i++){
            let j = i + Math.floor(Math.random() * (array.length - i))

            let temp = array[j];
            array[j] = array[i];
            array[i] = temp
        }
        return array;
    }

    //FETCHES DATA FROM EXTERNAL API
    async function createQuizObject(){
        const apiData = await getMovieQs();
        const results = apiData.results;

        let array = [];
        
        if(results) {
            await results.forEach((i, index) => {
                array.push({
                    id: `question_${index}`,
                    title: i.question,
                    options: 
                        randomize([i.correct_answer,
                        ...i.incorrect_answers]),
                    correctAnswers: i.correct_answer    
                })
            })
        }
        changeFormat(array);
    }

    //CHANGES API DATA FORMAT TO APPLICATION DATA FORMAT
    async function changeFormat(array){
        const correctFormat = [];
        
        array.forEach(i => {
            correctFormat.push({
                id: i.id,
                title: i.title,
                options: {
                    option_one: i.options[0],
                    option_two: i.options[1],
                    option_three: i.options[2],
                    option_four: i.options[3]
                },
                correctAnswers: i.correctAnswers,
            })
        })
        filterCorrectAnswer(correctFormat);

    }
    
    //FILTERS THE CORRECT ANSWER BY KEYS IN OPTIONS OBJECT
    function filterCorrectAnswer(array){
        let dataForFirestore = [];
        
        array.forEach(i => {
            const filteredByKey = Object.fromEntries(
                Object.entries(i.options).filter(([key, value]) => value === i.correctAnswers));
                
            const getKey = Object.keys(filteredByKey);
            
            dataForFirestore.push({
                id: i.id,
                title: i.title,
                options: {
                    option_one: i.options.option_one,
                    option_two: i.options.option_two,
                    option_three: i.options.option_three,
                    option_four: i.options.option_four
                },
                correctAnswers: getKey,
            })
        })
        setQuizData(dataForFirestore);
    }

    //ADDS THE FORMATED DATA TO USERS FIRESTORE COLLECTION
    async function addQuizToFirestore(data){

        let docRef = await firebaseInstance
        .firestore()
        .collection('users')
        .doc(user.uid)
        .collection('quizes')
        .doc(newQuizPin.toString());
        
        docRef.set({
            count: 0,
            quizPin: newQuizPin.toString(),
            quizName: 'My movie quiz',
            isActive: false,
            isWaitingRoomActive: true
          }, {merge: true});
        
        let collection = docRef.collection('questions')

        await data.forEach(i => {
            collection.doc(i.id)
            .set({
              id: i.id,
              title: i.title,
              options: {
                option_one: i.options.option_one.toString(),
                option_two: i.options.option_two.toString(),
                option_three: i.options.option_three.toString(),
                option_four: i.options.option_four.toString(),
              },
              correctAnswers: [i.correctAnswers.toString()],
              isSelected: false
          
            }, {merge: true});
        })
    }

    async function addMovieQuiz(){
        if(quizData.length > 0){
            if(newQuizPin !== null){
                createQuizPin()
                await addQuizToFirestore(quizData)
                router.push(`/createquiz/${newQuizPin}`)
            }
        } else {
            console.log('no pin')
        }
    }

    return (
        <PageContainer title={"Movie quiz"} user={user}>
            <Grid container direction="column" className={classes.gridContainer}>
                <Grid 
                item 
                container 
                direction="row" 
                justify="space-between"
                alignItems="baseline"
                className={classes.grid}>
                    <Grid item sm={8}>
                        <SubTitle component={"h1"}>
                            Movie quiz
                        </SubTitle>
                    </Grid>
                    <Grid item sm={2}>
                        <Button className={classes.button} onClick={addMovieQuiz}>Add this quiz to your library</Button>
                    </Grid>
                </Grid>
                <Grid 
                container
                justify="center"
                alignItems="center"
                >
                    <Grid 
                    item 
                    container 
                    direction="row" 
                    justify="space-around"
                    alignItems="stretch"
                    alignContent="center"
                    spacing={2}>
                        {quizData && quizData.map((i, index) => {
                            return(
                                <Grid 
                                item 
                                xs={12}
                                sm={6} 
                                key={index}>
                                    <ListItem 
                                    component={'h2'}
                                    title={i.title}
                                    />
                                </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </PageContainer>
    );
}

export default PreMade;