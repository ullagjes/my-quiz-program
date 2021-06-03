import React from 'react';
import {
    Grid,
    Fade
} from '@material-ui/core';
import { useStyles } from './styles';
import { 
    ButtonComponent, 
    UnderTitle
} from '../../BaseComponents';
import  OptionComponent  from '../OptionComponent';
import ScoreBoard from '../ScoreBoard';

//SHOWS CURRENT SCOREBOARD AND CORRECT ANSWER(S) AFTER EACH QUESTION
function ShowScoresComponent({
    participants, 
    question = '',
    isPending, 
    onClick
}) {
    const classes = useStyles();
    
    return (
    <Grid 
    className={classes.gridContainer}
    container 
    spacing={1}
    direction='row'
    justify="flex-start"
    alignContent="flex-start"
    >
        {question && 
        <Grid 
        className={classes.paperContainer}
        item 
        xs={12} 
        sm={12}
        md={8}
        >
            <div className={classes.titleContainer}>
                <UnderTitle 
                component={"h1"} 
                >Correct answer(s)</UnderTitle>
                {question && question.map((i, index) => {
                    return(
                        <Fade 
                        key={index} 
                        in={isPending} 
                        style={{transitionDelay: '500ms'}}>
                            <div>
                                {i.correctAnswers.map((j, index) => {
                                    const filteredByKey = Object.fromEntries(
                                        Object.entries(i.options).filter(([key, value]) => key === j))
                                        
                                    const getValue = Object.values(filteredByKey)
                                        
                                    if(j === 'option_one'){
                                            return(
                                                <div key={index}>
                                                    {getValue.map((k, index) => {
                                                        return (
                                                        <OptionComponent
                                                        classname={'one'}
                                                        icon={'circle'}
                                                        optionTitle={k}
                                                        key={index}
                                                        bpSm={12}
                                                        />
                                                        )
                                                    })
                                                    }
                                                </div>
                                            )}
                                            if(j === 'option_two'){
                                                return(
                                                    <div key={index}>
                                                        {getValue.map((k, index) => {
                                                            return (
                                                            <OptionComponent
                                                            classname={'two'}
                                                            icon={'square'}
                                                            optionTitle={k}
                                                            key={index}
                                                            bpSm={12}
                                                            />
                                                            )
                                                        })
                                                        }
                                                    </div>
                                                )
                                            }
                                            if(j === 'option_three'){
                                                return(
                                                    <div key={index}>
                                                        {getValue.map((k, index) => {
                                                            return (
                                                            <OptionComponent
                                                            classname={'three'}
                                                            icon={'star'}
                                                            optionTitle={k}
                                                            key={index}
                                                            bpSm={12}
                                                            />
                                                            )
                                                        })
                                                        }
                                                    </div>
                                                )
                                            }
                                            if(j === 'option_four'){
                                                return(
                                                    <div key={index}>
                                                        {getValue.map((k, index) => {
                                                            return (
                                                            <OptionComponent
                                                            classname={'four'}
                                                            icon={'triangle'}
                                                            optionTitle={k}
                                                            key={index}
                                                            bpSm={12}
                                                            />
                                                            )
                                                        })
                                                        }
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </Fade>
                            )
                        })
                        }
                        <ButtonComponent className={classes.button} onClick={onClick} size={"large"}>Next</ButtonComponent>
                    </div>
            </Grid>
            }
        {participants && 
        <ScoreBoard 
        title={"Scores"}
        participants={participants}
        bpMd={2}
        />
        }
    </Grid>
    );
}

export default ShowScoresComponent;