import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    grid: {
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 'auto',
        minHeight: '300px',
        color: 'white'
      },
      titleContainer: {
        textAlign: 'center',
        color: theme.palette.primary.contrastText,
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
      },
      underTitle: {
        color: 'white',
        marginTop: theme.spacing(4),
      },
      welcomeButton: {
          padding: theme.spacing(4),
          margin: theme.spacing(3)
      }
}))