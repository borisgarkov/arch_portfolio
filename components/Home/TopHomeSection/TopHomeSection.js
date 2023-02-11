import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
    gridItemImageCaroussel, gridItemText,
    mainGridContainer, imageStyle,
    outerBoxImageCarousel, innerBoxImageCarousel
} from './styles';
import Animation from '../../../utils/Animation';
import useScreenResolution from '../../../hooks/useScreenResolution';

export default function TopHomeSection() {
    const [imageIndex, setImageIndex] = useState(0);
    const isMobile = useScreenResolution('lg');

    const images = [
        '/image-gallery-homepage/6.jpg',
        '/image-gallery-homepage/1.jpg',
        '/image-gallery-homepage/2.jpg',
    ];

    // useEffect(() => {
    //     const timeInteval = setInterval(() => {
    //         if (imageIndex === 2) {
    //             setImageIndex(0);
    //             return
    //         }

    //         setImageIndex(prevState => prevState + 1);
    //         images.push(images.shift())
    //         console.log(imageIndex)
    //     }, 2000);

    //     return () => {
    //         clearInterval(timeInteval)
    //     }
    // }, [imageIndex]);

    return (
        <Grid container sx={{ ...mainGridContainer }}>
            <Grid item sm={4}>
                <Animation type={isMobile ? 'fadeRight' : 'fadeRightPortfolioMainPage'}>
                    <Box sx={{ ...gridItemText }}>
                        <Stack>
                            <Typography variant='h3'>
                                PORTFOLIO
                            </Typography>

                            <Typography variant='h6'>
                                by Nikoleta Ivanova
                            </Typography>
                        </Stack>
                    </Box>
                </Animation>
            </Grid>

            <Grid item xs={12} sm={7} sx={{ ...gridItemImageCaroussel }}>
                <Box sx={{ ...outerBoxImageCarousel }}>
                    <Box sx={{
                        ...innerBoxImageCarousel,
                        transform: `translateX(-${(imageIndex * 100)}%)`
                    }}>
                        {
                            images.map(image => (
                                <img
                                    key={image}
                                    src={image}
                                    alt='carousel-image'
                                    style={{ ...imageStyle }}
                                />
                            ))
                        }
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
};