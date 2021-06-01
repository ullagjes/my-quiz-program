import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    counter: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(3),
        border: theme.borders.medium,
        height: '100%',
    },
    allAnswers: {
        backgroundColor: 'gold',
        color: 'black',
    }
})) 