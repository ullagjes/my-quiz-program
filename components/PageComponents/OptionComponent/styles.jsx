import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    
    optionContainer: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        flexGrow: 1,
        width: 'auto',
        fontWeight: 600,
    },
    option: {
        padding: theme.spacing(3),
        marginBottom: theme.spacing(1),
        border: '5px solid black',
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
    icon: {
      marginRight: theme.spacing(4),
      height: 35,
      width: 35,
    }
    })
  );