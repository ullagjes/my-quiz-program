import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    buttonVisible: {
        display: 'block',
        marginLeft: 'auto',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        border: theme.borders.medium,
        fontWeight: 600,
        minWidth: '100%',
        minHeight: '100%',
        padding: theme.spacing(2)
    },
    nonVisible: {
        display: 'none'
    },
    grid: {
        marginTop: theme.spacing(6),
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    titleGrid: {
        color: 'white',
        marginTop: theme.spacing(4), 
        marginBottom: theme.spacing(3), 
        borderBottom: theme.borders.medium,

    },
    title: {
        paddingBottom: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(3),
        border: theme.borders.medium,
        backgroundColor: theme.palette.transparent.main,
        minHeight: '250px'
    }
}))