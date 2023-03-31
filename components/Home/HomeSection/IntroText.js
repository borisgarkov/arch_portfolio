import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import useScreenResolution from "../../../hooks/useScreenResolution";
import { HomeDataContext } from "../../../pages/home";

export default function IntroText() {
    const homeData = useContext(HomeDataContext)

    const [text, helper] = useTypewriter({
        words: homeData.updating_text,
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
                {homeData.subtitle}
            </Typography>
        </Box>
    )
};