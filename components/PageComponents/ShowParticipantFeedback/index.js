import React from 'react';
import Paper from '@material-ui/core/Paper';

import { useStyles } from './styles';
import { 
    TextElement, 
    UnderTitle 
} from '../../BaseComponents';

function ShowParticipantFeedback({ userFeedBack, userPoints }) {
    const classes = useStyles()

    return (
        <Paper className={classes.paper}>
            <UnderTitle 
            component={"h1"} 
            className={classes.title}
            >{userFeedBack}</UnderTitle>
            <TextElement>Your points so far: {userPoints}</TextElement>
        </Paper>
    );
}

export default ShowParticipantFeedback;