import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: ['Cormorant Garamond', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
    },
    palette: {
        background: {
            default: '#ffffff',
        },
        neutral: {
            main: '#858585',
            contrastText: '#fff',
        },
        mainPage: {
            main: '#ececec',
            secondary: '#cac8c8'
        }
    }
});

export { theme };