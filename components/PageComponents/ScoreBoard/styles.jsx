import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    avatar: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
    },
    text: {
        color: theme.palette.secondary.contrastText,
    },

    listContainer: {
        backgroundColor: theme.palette.secondary.main,
        overflow: 'hidden',
        flexGrow: 1,
        margin: theme.spacing(4),
        textAlign: 'center',
        padding: theme.spacing(2),
        color: theme.palette.secondary.contrastText,
        border: theme.borders.medium,
    },
    
    listItem: {
        backgroundColor: theme.palette.secondary.dark,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        width: '100%',
    },
    participant: {
        border: '2px solid gold'
    },
}))
