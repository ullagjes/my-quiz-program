import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    
    button: {
        border: theme.borders.medium,
    },
    gridContainer: {
        flexGrow: 1,
        width: '90vw',
        maxWidth: '1200px',
        flexGrow: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    paperContainer: {
        padding: theme.spacing(3),
        gap: theme.spacing(2),
        maxWidth: '710px',
        paddingBottom: theme.spacing(2),
        margin: theme.spacing(4),
        textAlign: 'center',
        backgroundColor: theme.palette.transparent.main,
        color: 'black',
        border: theme.borders.thick,
    },
    titleContainer: {
        padding: theme.spacing(2)
    },
}))