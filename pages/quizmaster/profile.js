
import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FaceRounded from '@material-ui/icons/FaceRounded'

import { SubTitle, TextElement, UnderTitle, ButtonComponent } from '../../components/BaseComponents';
import PageContainer from '../../components/PageComponents/PageContainer';

import { useQuizMaster } from '../../context/quizMasterContext';

import { handleSignOut } from '../../utils/firebaseHelpers';

const useStyles = makeStyles((theme) => ({
    icon: {
        height: 40,
        width: 40
    },
    card: {
        width: '80%',
        maxWidth: '400px',
        backgroundColor: theme.palette.transparent.main,
        border: theme.borders.medium
    },
    grid: {
        width: '90vw',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}))

function profile() {

    const classes = useStyles();
    const { userData, quizes } = useQuizMaster();
    const user = userData.uid


    return (
        <PageContainer user={user}>
            <Grid 
            className={classes.grid} 
            container
            justify="flex-start"
            >
                <Card className={classes.card}>
                    <CardContent>
                        <FaceRounded className={classes.icon}/>
                        <TextElement>User: {userData.email}</TextElement>
                    </CardContent>
                    <CardActions>
                        <ButtonComponent onClick={handleSignOut}>Sign out</ButtonComponent>
                    </CardActions>
                </Card>
            </Grid>
        </PageContainer>
    );
}

export default profile;