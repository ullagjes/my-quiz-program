import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        borderBottom: theme.borders.medium, 
        marginBottom: '2em', 
        color: 'white',
        paddingBottom: theme.spacing(3),
    },

    button: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        marginLeft: 'auto',
        width: '100%',
        maxWidth: '150px',
        maxHeight: '100px',
        border: theme.borders.thin,
    },
}))