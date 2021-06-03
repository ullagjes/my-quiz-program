import React from 'react';
import {
    Card, 
    CardContent, 
    Typography, 
    IconButton
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStyles } from './styles';

//USED IN DIFFERENT .MAP-FUNCTIONS TO RENDER DATA IN LISTS.
export default function ListItem({
    component,
    title, 
    subTitle, 
    ariaLabelEdit, 
    ariaLabelDelete, 
    handleEdit, 
    handleDelete,
}){
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component={component} variant="h5" 
                    dangerouslySetInnerHTML={{__html: title}}/>
                    {subTitle && <Typography variant="subtitle1">
                        {subTitle}
                    </Typography>}
                </CardContent>
            </div>
            <div className={classes.edit}>
                {handleEdit && <IconButton aria-label={ariaLabelEdit} onClick={handleEdit}>
                    <EditIcon className={classes.editIcon}/>
                </IconButton>}
                {handleDelete && <IconButton aria-label={ariaLabelDelete} onClick={handleDelete}>
                    <DeleteIcon className={classes.deleteIcon}/>
                </IconButton>}
            </div>
        </Card>
    )
}