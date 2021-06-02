import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    title: {
        color: 'white',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    mainGrid: {
        width: '90%',
        maxWidth: '1000px',
        marginTop: theme.spacing(4),
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    titleGrid: {
        borderBottom: theme.borders.medium,
    },
    questionContainer: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(1),
        backgroundColor: theme.palette.transparent.main,
        height: 'auto',
        maxHeight: '750px',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        overflow: 'auto',
        border: theme.borders.medium,
    },
    button: {
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
        width: '100%',
        padding: theme.spacing(2),
        border: theme.borders.medium,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        fontWeight: 700,
    }
}))