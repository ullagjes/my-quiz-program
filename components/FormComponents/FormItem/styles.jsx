import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    errorMessage: {
        color: 'black',
        borderBottom: `2px solid ${theme.palette.warning.light}`,
        fontSize: '1.2rem',
        paddingLeft: theme.spacing(3),
        marginTop: theme.spacing(1),
        backgroundColor: theme.palette.warning.main,
    },
    field: {
        '&::placeholder': {
            color: theme.palette.secondary.dark,
            fontSize: '1rem'
        },
        padding: theme.spacing(3),
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
        width: '100%',
        border: 'none',
        fontSize: '1rem',
        color: theme.palette.text.main,
        backgroundColor: theme.palette.transparent.main,
    },
    itemContainer: {
        borderBottom: theme.borders.thin,
        margin: theme.spacing(2),
    },
    label: {
        paddingBottom: theme.spacing(3),
        fontSize: '1.2rem',
        color: theme.palette.text.main,
    },
    labelLarge: {
        fontSize: '1.6rem',
    },
}))