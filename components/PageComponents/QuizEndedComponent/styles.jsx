import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    title: {
        marginLeft: theme.spacing(4),
        color: theme.palette.primary.contrastText,
    },
    button: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(4),
        alignSelf: 'flex-start'
    },
    gridContainer: {
        maxWidth: '720px',
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        textAlign: 'center',
    }
}))