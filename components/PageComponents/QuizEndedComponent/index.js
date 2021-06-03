import React from 'react';

import {
    Grid,
    Container
} from '@material-ui/core';

import { useStyles } from './styles';
import { SubTitle } from '../../BaseComponents';
import ScoreBoard from '../ScoreBoard';

//FINAL COMPONENT SHOWN WHEN QUIZ HAS ENDED
//SHOWS FINAL SCOREBOARD
function QuizEndedComponent({ 
    title, 
    subTitle,
    participants, 
    participantId
}) {

    const classes = useStyles();

    return (
        <Container>
            <Grid 
            container
            alignContent="center"
            justify="center"
            direction="column"
            className={classes.gridContainer}
            >
                <Grid 
                className={classes.title}
                item 
                xs={12}>
                    <SubTitle component={"h1"}>{title}</SubTitle>
                </Grid>
                <ScoreBoard 
                    title={subTitle}
                    participants={participants}
                    bpMd={12}
                    participantId={participantId}
                />
            </Grid>
        </Container>
    );
}

export default QuizEndedComponent;