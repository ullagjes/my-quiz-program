import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: 1,
      color: '#fff',
    },
    title: {
        backgroundColor: theme.palette.secondary.main,
        padding: theme.spacing(4),
        marginBottom: theme.spacing(4),
        opacity: '0.95',
    },
  }));