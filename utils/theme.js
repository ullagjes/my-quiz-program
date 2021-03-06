import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { 
    purple, 
    red, 
    green, 
    yellow, 
    blue 
} from '@material-ui/core/colors';

let theme = createMuiTheme({
    spacing: [0, 4, 8, 16, 32, 64, 130, 260, 520, 1040, 2080],

    borders: {
        thin: '2px solid black',
        medium: '5px solid black',
        thick: '10px solid black',
    },

    palette: {
        primary: {
            main: purple[800],
            one: red[500],
            two: green[500],
            three: yellow[900],
            four: blue[500],
        },
        secondary: {
            main: "#3b7e80",
        },
        warning: {
            main: red[600],
        },
        text: {
            main: 'black',
        },
        transparent: {
            main: 'rgba(255, 255, 255, 0.7)'
        },
        
    },
})

theme = responsiveFontSizes(theme);

export default theme;
