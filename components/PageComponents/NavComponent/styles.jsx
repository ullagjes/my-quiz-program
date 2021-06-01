import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    header: {
        marginBottom: theme.spacing(3),
        display: 'flex',
        backgroundColor: theme.palette.primary.dark,
        width: '100%',
        minHeight: 80,
        position: 'fixed',
        top: 0,
        zIndex: 2,
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center'
    },
    icon: {
        height: 60,
        width: 60,
        alignSelf: 'center',
        color: 'white'
    },
    logo: {
        color: theme.palette.primary.contrastText,
        fontSize: '50px'
    },
    navigationContainer: {
        marginLeft: 'auto',
        marginRight: theme.spacing(2),
        display: 'flex',
        alignSelf: 'flex-end',
        alignItems: 'baseline',
        justifyContent: 'space-between',
    },
    navLink: {
        color: theme.palette.secondary.contrastText,
        padding: theme.spacing(2),
        fontSize: 25,
    },
}))