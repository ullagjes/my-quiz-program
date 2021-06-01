import { Typography, Paper } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

function AnswerCounter({ participants, answers }) {
    const classes = useStyles()
    console.log('participants:', participants)
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