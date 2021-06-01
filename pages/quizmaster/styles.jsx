import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.transparent.main,
        width: '80vw',
        maxWidth: '1200px',
        height: 'auto',
        border: theme.borders.medium,
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.spacing(4),
        padding: theme.spacing(4),
    },
    title: {
        color: 'black',
        marginBottom: theme.spacing(4),
        padding: theme.spacing(3),
    },
    gridContainer: {
        maxWidth: '720px',
        alignContent: 'center',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    titleContainer: {
        color: theme.palette.primary.contrastText,
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(3),
        borderBottom: theme.borders.medium,

    },
    underTitle: {
        color: theme.palette.primary.contrastText,
        paddingBottom: theme.spacing(4),
        paddingTop: theme.spacing(3),
    },
    icon: {
        height: 40,
        width: 40
    },
    card: {
        width: '100%',
        maxWidth: '400px',
        backgroundColor: theme.palette.transparent.main,
        border: theme.borders.medium
    },
    grid: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    titleGrid: {
        color: 'white',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(3)
    },
}))