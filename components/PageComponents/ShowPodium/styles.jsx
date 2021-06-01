import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '90vw',
        maxWidth: '720px',
        height: 'auto',
        maxHeight: '500px',
        textAlign: 'center',
        backgroundColor: theme.palette.transparent.main,
        border: theme.borders.medium,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(3),
    },
    podium: {
        width: '100%',
    },
    first: {
        height: 250,
        backgroundColor: 'gold',
        border: theme.borders.thin,
    },
    second: {
        height: 200,
        backgroundColor: '#a1a1a1',
        border: theme.borders.thin,
    },
    third: {
        height: 150,
        backgroundColor: '#cd7f32',
        border: theme.borders.thin,
    },
    title: {
        color: theme.palette.primary.contrastText,
    }
}))