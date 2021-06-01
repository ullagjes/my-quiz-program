import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid'
import { UnderTitle } from '../../BaseComponents';
import { useStyles } from './styles';


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