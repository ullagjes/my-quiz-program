import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    button: {
        width: '100%',
        padding: theme.spacing(4)
    },
    iconContainer: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(2),
    },
    icon: {
        height: 80,
        width: 80,
        alignSelf: 'center'
    },
    one: {
        backgroundColor: theme.palette.primary.one,
    },
    two: {
        backgroundColor: theme.palette.primary.two,
    },
    three: {
        backgroundColor: theme.palette.primary.three,
    },
    four: {
        backgroundColor: theme.palette.primary.four,
    },

}))