import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { useStyles } from './styles';

//RENDERS A COMPONENT THAT SHOWS HOW MANY PARTICIPANTS HAVE ANSWERED.
function AnswerCounter({ participants, answers }) {
    const classes = useStyles()
    return (
        <>
            {participants === answers ? 
            <Paper className={`${classes.counter} + ${classes.allAnswers}`}>
                <Typography>Everyone has answered!</Typography>
            </Paper> 
            : 
            <Paper>
                <Typography className={classes.counter}> {answers} out of {participants} participants have answered.</Typography>
            </Paper>}
        </>
    );
}

export default AnswerCounter;