import React from 'react';

import { 
    Box, 
    Container, 
    Grid, 
    Typography 
} from '@material-ui/core';

import { useStyles } from './styles';

import { 
    ButtonComponent,
    SubTitle
} from '../../BaseComponents';
import LoadingComponent from '../../PageComponents/LoadingComponent';

//SHOWS THE FINAL PODIUM WITH TOP THREE PLAYERS
function ShowPodium({ participants, onClick }) {
    const classes = useStyles();

    return (
        <>
            {participants.length === 0 ? 
            <LoadingComponent />
            : 
            <>
                {participants && 
                <Container className={classes.root}>
                    <SubTitle component={"h1"} className={classes.title}>Podium</SubTitle>
                    <ButtonComponent onClick={onClick}>End quiz</ButtonComponent>
                        <Grid 
                        className={classes.container}
                        spacing={3}
                        direction="row"
                        justify="space-evenly"
                        alignItems="flex-end"
                        alignContent="flex-end"
                        container>
                            {participants.length > 1 && 
                            <Grid item xs={3}>
                                <Typography 
                                variant="h4" 
                                component="h2"
                                >
                                    {participants[1].id.toUpperCase()}
                                </Typography>
                                <Box className={`${classes.second} + ${classes.podium}`}></Box>               
                            </Grid>
                            }
                            <Grid item xs={3}>
                                <Typography 
                                variant="h4" 
                                component="h2"
                                >
                                    {participants[0].id.toUpperCase()}
                                </Typography>
                                <Box className={`${classes.first} + ${classes.podium}`}></Box>                
                            </Grid>
                            {participants.length > 2 && <Grid item xs={3}>
                                <Typography 
                                variant="h4" 
                                component="h2"
                                >
                                    {participants[2].id.toUpperCase()}
                                </Typography>
                                <Box className={`${classes.third} + ${classes.podium}`}></Box>             
                            </Grid>
                            }
                    </Grid>
                </Container>
                }
            </>
            }
        </>
    );
}

export default ShowPodium;