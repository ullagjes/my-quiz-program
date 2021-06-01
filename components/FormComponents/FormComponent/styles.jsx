import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    grid: {
        padding: theme.spacing(1),
        flexGrow: 1,
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        alignContent: 'flex-start',
        width: '100%',
    },
    paper: {
        backgroundColor: theme.palette.transparent.main,
        width: 'auto',
        maxWidth: '700px',
        height: 'auto',
        padding: theme.spacing(1),
        border: theme.borders.medium,
    },
    root: {
        flexGrow: 1,
    },
    submit: {
        width: '100%',
        padding: theme.spacing(2),
        marginTop: theme.spacing(3),
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.secondary.contrastText,
    },
    title: {
        color: 'white',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(3),
    },
    link: {
        color: theme.palette.text.main,
        fontSize: '1.5rem',
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
}))