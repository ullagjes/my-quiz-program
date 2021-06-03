import React from 'react';
//NEXT
import { useRouter } from 'next/router';
//MATERIAL UI
import { Grid, Typography } from '@material-ui/core';
//CONTEXT
import { useQuizMaster } from '../../context/quizMasterContext';
import { useAuth } from '../../context/authContext';
//STYLES
import { useStyles } from './styles';
//COMPONENTS
import { ErrorMessage, SubTitle } from '../../components/BaseComponents';
import ListItem from '../../components/PageComponents/ListItem';
import PageContainer from '../../components/PageComponents/PageContainer/';
import LoadingComponent from '../../components/PageComponents/LoadingComponent';

//SHOWS ALL PREVIOUS QUIZES QUIZMASTER HAS CREATED
function library() {
    const { quizes, userData } = useQuizMaster();
    const { loading, isAuthenticated } = useAuth();
    
    const router = useRouter();
    const user = userData.uid
    const classes = useStyles();

    //AUTHENTICATION
    if(loading){
        return <LoadingComponent />;
    };

    if(isAuthenticated === false) {
        router.push('/login');
        return <ErrorMessage message={"You aren't logged in."}/>
    };

    return (
        <PageContainer title={"Quiz library"} user={user}>
            <Grid 
            className={classes.gridContainer}
            spacing={2}
            direction='column'
            alignItems='center'
            justify='space-evenly'
            container >
                <Grid className={classes.titleContainer} item xs={12}>
                   <SubTitle component={'h1'}>Library</SubTitle>
                   <Typography component={'h2'} variant={'h4'} className={classes.underTitle}>
                       {quizes.length > 1 ? 'Here are all your previous quizes. Select one to edit or to get started!' : 'Here you will find all the quizes you have created. Press Create in the menu to get started!'}
                    </Typography>
                </Grid>
                <Grid 
                container 
                direction="row"
                spacing={2}
                justify="flex-start"
                alignItems="flex-start"
                >
                    {quizes && quizes.map((i, index) => {
                        return (
                            <Grid key={index} item xs={12} sm={6}>
                            <ListItem 
                            title={i.quizName}
                            ariaLabelEdit={"click to edit quiz"}
                            handleEdit={() => router.push(`/createquiz/${i.id}`)}  
                            />
                            </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </PageContainer>
    );
}

export default library;
