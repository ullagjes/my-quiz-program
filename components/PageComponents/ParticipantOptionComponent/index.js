import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';

import { useStyles } from './styles';

function ParticipantOptionComponent({classname, ariaLabel, onClick, iconName}) {
    const classes = useStyles();
    const one = classes.one;
    const two = classes.two;
    const three = classes.three;
    const four = classes.four;

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
        <Grid 
        className={`${selectedClass} + ${classes.iconContainer}`}
        item
        xs={12}>
            <Button
            aria-label={ariaLabel}
            className={classes.button}
            onClick={onClick}>
                {iconName === 'circle' && <RadioButtonUncheckedIcon className={classes.icon}/>}
                {iconName === 'square' && <CheckBoxOutlineBlankIcon className={classes.icon} />}
                {iconName === 'star' && <StarBorderIcon className={classes.icon}/>}
                {iconName === 'triangle' && <ChangeHistoryIcon className={classes.icon}/>}
            </Button>
        </Grid>
    );
}

export default ParticipantOptionComponent;