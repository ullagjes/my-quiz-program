import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: '1200px',
      alignSelf: 'center',
      margin: theme.spacing(3),
      backgroundColor: theme.palette.transparent.main,
      border: theme.borders.thick,
      padding: theme.spacing(3),
    },
    button: {
      border: theme.borders.medium,
      marginTop: theme.spacing(3),
    },
    titleContainer: {
        padding: theme.spacing(4),
        backgroundColor: 'white',
        border: theme.borders.medium,
    },
    title: {
      color: theme.palette.text.main,
    },
    })
  );