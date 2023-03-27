import { Box, Typography } from "@mui/material";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import useScreenResolution from "../../../hooks/useScreenResolution";

export default function IntroText() {
    const [text, helper] = useTypewriter({
        words: ['PORTFOLIO', 'WEBSITE', 'CV'],
        loop: 0,
    });

    const isMobile = useScreenResolution('lg');
    const textVariant = isMobile ? 'h3' : 'h2';

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant={textVariant} sx={{ textAlign: 'center', width: '100%' }}>
                {text}
                <Cursor cursorColor='black' />
            </Typography>
            <Typography variant='h4' sx={{ textAlign: 'center', width: '100%' }}>
                by Nikoleta Ivanova
            </Typography>
        </Box>
    )
}