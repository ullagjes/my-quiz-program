import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import { useStyles } from './styles';
import { ButtonComponent } from '../../BaseComponents';
import OptionComponent from '../OptionComponent';
import AnswerCounter from '../AnswerCounter';

export function ShowOptionsComponent({
  title, 
  optionOne, 
  optionTwo, 
  optionThree, 
  optionFour, 
  participants,
  answers,
  onClick
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <AnswerCounter 
          participants={participants.length}
          answers={answers.length}
          />
        </Grid>
        <Grid item xs={12}>
            <Paper className={classes.titleContainer}>
              <Typography component={'h1'} variant={'h3'}className={classes.title} dangerouslySetInnerHTML={{__html: title}}/>
            </Paper>
        </Grid>
        <OptionComponent
        classname={'one'}
        optionTitle={optionOne}
        icon={"circle"}
        bpSm={6}
        />
        <OptionComponent
        classname={'two'}
        optionTitle={optionTwo}
        icon={"square"}
        bpSm={6}
        />
        {optionThree && <OptionComponent
        classname={'three'}
        optionTitle={optionThree}
        icon={"star"}
        bpSm={6}
        />}
        {optionFour && <OptionComponent
        classname={'four'}
        optionTitle={optionFour}
        icon={"triangle"}
        bpSm={6}
        />}
      </Grid>
      <ButtonComponent
      className={classes.button}
      onClick={onClick}
      size={'large'}
      >
      Show answer
      </ButtonComponent>
    </div>
  );
}
