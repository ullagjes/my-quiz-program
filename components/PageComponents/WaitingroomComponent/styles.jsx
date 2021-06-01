import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    participants: {
        margin: theme.spacing(4),
        padding: theme.spacing(4),
        backgroundColor: theme.palette.transparent.main,
        border: theme.borders.thick,
        width: '90%',
        minWidth: '300px',
        maxWidth: '500px',
    },
    progress: {
        marginTop: theme.spacing(5),
    },
    title: {
        marginBottom: theme.spacing(3),
        color: theme.palette.secondary.contrastText,

    },
    titleContainer: {
        margin: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.secondary.contrastText,
    }
}))