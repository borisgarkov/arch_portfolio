import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
    gridItemImageCaroussel, gridItemText,
    mainGridContainer, imageStyle,
    outerBoxImageCarousel, innerBoxImageCarousel, mainTextStyle, typography
} from './styles';
import Animation from '../../../utils/Animation';
import useScreenResolution from '../../../hooks/useScreenResolution';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function TopHomeSection() {
    const [imageIndex, setImageIndex] = useState(0);
    const isMobile = useScreenResolution('lg');

    const [text, helper] = useTypewriter({
        words: ['PORTFOLIO', 'WEBSITE', 'CV'],
        loop: 0,
    });

    return (
        <Grid container sx={{ ...mainGridContainer }}>
            {/* <Grid item sm={4}>
                <Box sx={{ ...gridItemText }}>
                    <Stack>
                        <Typography variant='h1'>
                            PORTFOLIO
                        </Typography>

                        <Typography variant='h4'>
                            by Nikoleta Ivanova
                        </Typography>
                    </Stack>
                </Box>
            </Grid> */}
            {/* <Animation type={isMobile ? 'fadeRight' : 'fadeRightPortfolioMainPage'}> */}
            {/* </Animation> */}

            <Grid item xs={12} sm={12} sx={{ ...gridItemImageCaroussel }}>
                <Box sx={{ ...outerBoxImageCarousel }}>
                    <Box sx={{
                        ...innerBoxImageCarousel,
                        transform: `translateX(-${(imageIndex * 100)}%)`
                    }}>
                        <img
                            src='/image-gallery-homepage/6.jpg'
                            alt='carousel-image'
                            style={{ ...imageStyle }}
                        />
                    </Box>
                </Box>
                <Stack sx={{ ...mainTextStyle }}>
                    <Typography variant='h1' sx={{ ...typography, }}>
                        {text}
                        <Cursor cursorColor='white' />
                    </Typography>

                    <Typography variant='h4' sx={{ ...typography }}>
                        by Nikoleta Ivanova
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    )
};