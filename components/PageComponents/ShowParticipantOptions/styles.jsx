import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    
    container: {
        marginTop: theme.spacing(5),
        width: '80vw',
        maxWidth: '720px',
        padding: theme.spacing(3),
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        border: '10px solid black'
    }
}))