import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
    gridItemImageCaroussel, gridItemText,
    mainGridContainer, imageStyle,
    innerBoxImageCarousel, mainTextStyle, typography
} from './styles';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';

export default function TopHomeSection() {

    const [text, helper] = useTypewriter({
        words: ['PORTFOLIO', 'WEBSITE', 'CV'],
        loop: 0,
    });

    return (
        <Grid container sx={{ ...mainGridContainer }}>

            <Grid item xs={12} sm={12} sx={{ ...gridItemImageCaroussel }}>
                <Box sx={{
                    ...innerBoxImageCarousel,
                    position: 'relative'
                }}>
                    <img
                        src='/image-gallery-homepage/main.webp'
                        alt='carousel-image'
                        style={{ ...imageStyle }}
                    />
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