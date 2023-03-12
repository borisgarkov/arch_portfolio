import { createTheme } from "@mui/material";
import { Cormorant_Garamond } from '@next/font/google';

export const defaultFont = Cormorant_Garamond({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
    typography: {
        fontFamily: defaultFont.style.fontFamily,
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