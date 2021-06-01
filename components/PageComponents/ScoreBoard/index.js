import React from 'react';
import Grid from '@material-ui/core/Grid';
import { 
    Avatar,
    List,
    ListItem, 
    ListItemAvatar, 
    ListItemText, 
    Typography 
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';

import { useStyles } from './styles';

function ScoreBoard({title, participants, bpMd, participantId}) {
    const classes = useStyles()

    return (
        <Grid 
        container 
        direction="column"
        item 
        xs={12}
        md={bpMd}
        className={classes.listContainer}>
            <Grid item>
                <Typography variant="h6" component="h2">{title}</Typography>
            </Grid>
            <Grid item>
                <List>
                    {participants && participants.map((i, index) => {
                    return(
                        <Grid item xs={12}key={index}>
                        <ListItem className={participantId === i.id ? `${classes.listItem} + ${classes.participant}` : classes.listItem}>
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}>
                                    <FaceIcon />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                className={classes.text}
                                primary={`${i.id.toUpperCase()}: ${i.points}`}
                                />
                            </ListItem>
                        </Grid>
                        )
                    })
                    }
              </List>
            </Grid>
        </Grid>
    );
}

export default ScoreBoard;