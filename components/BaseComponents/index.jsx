
import { 
    Button, 
    Typography, 
    Link
 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    text: {
        color: theme.palette.text.main,
    },
    mainButton: {
        border: theme.borders.thin,
        fontWeight: 600,
        minWidth: '200px',
    }
}))

export function ErrorMessage({ message }){
    return(
        <Alert severity="error">{message}</Alert>
    )
}

export function HeadLine({ children }){
    return(
        <Typography
            component="h1" 
            variant="h1"
        >
            {children}
        </Typography>
    )
}

export function SubTitle({
    children, 
    component, 
    className
}){
    return(
        <Typography
            component={component}
            variant="h2"
            className={className}
        >
            {children}
        </Typography>
    )
}

export function UnderTitle({ children, component }){
    
    return(
        <Typography
            component={component} 
            variant="h4"
        >
            {children}
        </Typography>
    )
}

export function TextElement({ children }){
    return(
        <Typography
            variant="body1"
        >
            {children}
        </Typography>
    )
}

export function LinkComponent({ 
    classes, 
    children, 
    href
}){
    return(
        <Typography component="div">

            <Link
                className={classes}
                href={href}
            >
                {children}
            </Link>
        </Typography>
    )
}

export function ButtonComponent({
    children, 
    onClick, 
    size, 
    className
}){
    const classes = useStyles()
    return(
        <Button 
        variant="contained" 
        color="secondary" 
        onClick={onClick}
        size={size}
        className={`${classes.mainButton} + ${className}`}
        >
            {children}
        </Button>
    )
}
