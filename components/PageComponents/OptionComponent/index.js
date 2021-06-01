import React, { useEffect, useState } from 'react';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import { useStyles } from './styles';
  
  
function OptionComponent({ classname, optionTitle, icon, bpSm }) {
    const classes = useStyles();

    const one = classes.one
    const two = classes.two
    const three = classes.three
    const four = classes.four

    const [selectedClass, setSelectedClass] = useState('')
    useEffect(() => {
        if(classname === 'one'){
            setSelectedClass(one)
        }    
        if(classname === 'two'){
            setSelectedClass(two)
        }    
        if(classname === 'three'){
            setSelectedClass(three)
        }    
        if(classname === 'four'){
            setSelectedClass(four)
        }    
    }, [])
    
    return (
        <Grid item xs={12} sm={bpSm}>
          <Paper 
          className={`${selectedClass} + ${classes.option}`}
        >
            <div className={classes.optionContainer}>
                {icon === 'circle' && <RadioButtonUncheckedIcon className={classes.icon}/>}
                {icon === 'square' && <CheckBoxOutlineBlankIcon className={classes.icon}/>}
                {icon === 'star' && <StarBorderIcon className={classes.icon}/>}
                {icon === 'triangle' && <ChangeHistoryIcon className={classes.icon}/>}
                <Typography variant={"h4"} component={"p"}dangerouslySetInnerHTML={{__html: optionTitle}}/>
            </div>
          </Paper>
        </Grid>
    );
}

export default OptionComponent;