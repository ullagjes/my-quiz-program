import React from 'react';
//MATERIAL UI
import { Paper, Grid } from '@material-ui/core';
//CONTEXT
import { useAuth } from '../../context/authContext';
//STYLES
import { useStyles } from './styles';
//COMPONENTS
import { 
    SubTitle, 
    UnderTitle 
} from '../../components/BaseComponents';
import PageContainer from '../../components/PageComponents/PageContainer';

function quizMaster() {
    const classes = useStyles();
    const { user, loading, isAuthenticated } = useAuth();

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
        <PageContainer title={"Quizmaster homepage"} user={user}>
            <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <SubTitle component={"h1"} className={classes.title}>Welcome!</SubTitle>
                        <UnderTitle component={"p"} className={classes.text}>To start your first quiz, press Create in the menu.</UnderTitle><br></br>
                        <UnderTitle component={"p"}>To edit or run a quiz already created, press Library in the menu.</UnderTitle>
                    </Paper>
                </Grid>
            </Grid>
        </PageContainer>
    );
}

export default quizMaster;