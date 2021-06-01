import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        maxWidth: '200px',
        textAlign: 'center',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        border: theme.borders.thin,
    }
}))