import  Card  from '@material-ui/core/Card';
import  CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'; 
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStyles } from './styles';


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