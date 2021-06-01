import { makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: theme.palette.secondary.dark,
        padding: theme.spacing(2),
        height: '100%',
        maxWidth: '800px',
        border: theme.borders.medium,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'flex-start',
        color: theme.palette.secondary.contrastText,
    },
    content: {
        padding: theme.spacing(1),
    },
    cover: {
        width: 151,
    },
    edit: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'flex-end',
        paddingLeft: theme.spacing(5),
        paddingBottom: theme.spacing(1),
        
    }, 
    editIcon: {
        height: 30,
        width: 30,
        color: theme.palette.secondary.contrastText,
    },
    deleteIcon: {
        height: 30,
        width: 30,
        color: theme.palette.warning.main,
    }
    })
)