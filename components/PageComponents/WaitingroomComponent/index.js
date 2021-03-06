import React from 'react';

import {
    Container,
    CircularProgress,
    Grid
} from '@material-ui/core';

import { useStyles } from './styles';
import { 
    ButtonComponent, 
    UnderTitle, 
    TextElement 
} from '../../BaseComponents';
import ParticipantItem from '../ParticipantItem';

//IS RENDERED IN BOTH QUIZMASTER'S AND PARTICIPANT'S SCREEN WHEN QUIZ IS ACTIVE BUT NOT STARTED.
function WaitingroomComponent({
    title, 
    subTitle, 
    participants, 
    showProgress, 
    onClick
}) {

    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Grid 
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
                <Grid 
                className={classes.titleContainer}
                item xs={12}>
                    <UnderTitle
                    component={"h1"}
                     className={classes.title}
                    >{title}
                    </UnderTitle>
                    <TextElement>{subTitle}</TextElement>
                </Grid>
                {showProgress && 
                <Grid 
                className={classes.progress}
                item xs={12}
                >
                    <CircularProgress 
                    color="inherit"
                    size={70}
                    thickness={7}
                    />
                </Grid>}
                {participants && 
                <Grid 
                item xs={12}
                >   
                    <Grid 
                    container
                    spacing={1}
                    justify="center"
                    alignItems="baseline"
                    className={classes.participants}
                    >
                    {participants.map((i, index) => {
                        return(
                            <Grid item key={index}>
                                <ParticipantItem participant={i.id} />
                            </Grid>
                        )
                    })}
                    </Grid>
                </Grid>
                }
                {onClick && <ButtonComponent size={'large'} onClick={onClick}>Start quiz!</ButtonComponent>}
            </Grid>
        </Container>
    );
}

export default WaitingroomComponent;