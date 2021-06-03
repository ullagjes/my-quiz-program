import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { useStyles } from './styles';
import ParticipantOptionComponent from '../ParticipantOptionComponent';

//IS RENDERED IN PARTICPANT'S SCREEN
//SHOWS BUTTONS FOR EACH POSSIBLE ANSWER
function ShowParticipantOptions({ question, onClick }) {
    const classes = useStyles();
    
    return (
        <Container className={classes.container}>
            {question && question.map((i, index) => {
                return(
                    <>
                        <Grid 
                        container 
                        key={index}
                        direction="column"
                        >
                            <ParticipantOptionComponent 
                            ariaLabel={`Click if you think the correct answer is ${i.options.option_one}`}
                            classname={'one'}
                            onClick={() => onClick('option_one')}
                            iconName={'circle'}
                            /> 
                            <ParticipantOptionComponent 
                            ariaLabel={`Click if you think the correct answer is ${i.options.option_two}`}
                            classname={'two'}
                            onClick={() => onClick('option_two')}
                            iconName={'square'}
                            /> 
                            {i.options.option_three && <ParticipantOptionComponent 
                            ariaLabel={`Click if you think the correct answer is ${i.options.option_three}`}
                            classname={'three'}
                            onClick={() => onClick('option_three')}
                            iconName={'star'}
                            /> }
                            {i.options.option_four && <ParticipantOptionComponent 
                            ariaLabel={`Click if you think the correct answer is ${i.options.option_four}`}
                            classname={'four'}
                            onClick={() => onClick('option_four')}
                            iconName={'triangle'}
                            />} 
                        </Grid>
                    </>
                    )
                })
            }
        </Container>
    );
}

export default ShowParticipantOptions;
