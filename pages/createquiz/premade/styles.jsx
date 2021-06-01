import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        marginBottom: theme.spacing(2),
        border: theme.borders.medium
    },
    grid: {
        borderBottom: '5px solid black', 
        marginBottom: '2em', 
        color: 'white',
    },
    gridContainer: {
        maxWidth: '1000px',
        width: 'auto',
        marginLeft: 'auto', 
        marginRight: 'auto'
    }
}))