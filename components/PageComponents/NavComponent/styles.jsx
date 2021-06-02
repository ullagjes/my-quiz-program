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
    navLinkMobile: {
        fontSize: 40,
        borderBottom: "5px solid white",
        width: '90%',
    },
    mobileNavigation: {
        width: '85%',
        height: '70%',
        backgroundColor: theme.palette.primary.main,
        border: theme.borders.medium,
        padding: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        alignItems: 'flex-start',
        position: 'relative'
    },
    mobileNavigationButton: {
        color: 'white',
        fontSize: 25,
    },
    closeIconContainer: {
        alignSelf: 'flex-end',
        position: 'abosolute',
        top: 0,
    },
    closeIcon: {
        color: 'white',
        height: 50,
        width: 50,
        
    },
}))