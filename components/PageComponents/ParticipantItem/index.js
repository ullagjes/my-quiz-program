import React from 'react';
import Paper from '@material-ui/core/Paper';
import { UnderTitle } from '../../BaseComponents';

import { useStyles } from './styles';

//USED WHEN SHOWING PARTICIPANTS IN SCOREBOARD 
function ParticipantItem({participant}) {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <UnderTitle>{participant.toUpperCase()}</UnderTitle>
        </Paper>
    );
}

export default ParticipantItem;