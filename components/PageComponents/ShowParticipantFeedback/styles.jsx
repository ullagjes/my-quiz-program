import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.transparent.main,
        border: theme.borders.thick,
        height: '30vh',
        minHeight: '200px',
        width: '90vw',
        maxWidth: '720px',
        marginRight: 'auto',
        marginLeft: 'auto',
        padding: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    title: {
        marginBottom: theme.spacing(4)
    },
}))