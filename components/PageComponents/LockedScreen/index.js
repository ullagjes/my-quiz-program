import React from 'react';
import {
    Backdrop, 
    CircularProgress, 
    Grid
} from '@material-ui/core';
import { UnderTitle } from '../../BaseComponents';
import { useStyles } from './styles';

//USED WHEN PARTICIPANT HAS ANSWERED QUESTION.
function LockedScreenComponent({ screenLocked }) {
    const classes = useStyles();
    
    return (
        <Backdrop className={classes.backdrop} open={screenLocked}>
            <Grid 
            container
            justify="center"
            alignItems="center"
            direction="column"
            className={classes.title}
            >   
                <UnderTitle component="h1">Waiting for correct answer...</UnderTitle>
                <CircularProgress 
                color="inherit" 
                size={70} 
                thickness={6} />
            </Grid>
        </Backdrop>
    );
}

export default LockedScreenComponent;