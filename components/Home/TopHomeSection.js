import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function TopHomeSection(params) {
    const [imageIndex, setImageIndex] = useState(0);

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

    const animationSettings = {
        animationTimingFunction: 'ease-out',
        animationDuration: '1.5s',
        animationFillMode: 'forwards',
    };

    return (
        <Grid
            container
            sx={{
                width: '100%',
                marginBottom: 10,
                marginTop: '95px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 80px',
            }}
        >
            <Grid item sm={4}>
                <Box
                    sx={{
                        backgroundImage: 'url("/image-gallery-homepage/portfolioBackground.png")',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        height: '300px',
                        position: 'relative',
                        animationName: 'fadeRightPortfolioMainPage',
                        ...animationSettings,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Stack sx={{
                        position: 'relative',
                    }}>
                        <Typography variant='h2'>
                            PORTFOLIO
                        </Typography>

                        <Typography variant='h6'>
                            by Nikoleta Ivanova
                        </Typography>
                    </Stack>
                </Box>
            </Grid>

            <Grid item xs={12} sm={7} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: 'mainPage.main',
                padding: 5,
                gap: 2,
            }}>
                <Box sx={{
                    zIndex: '2',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                }}>
                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        zIndex: '2',
                        transition: 'transform 1s',
                        transform: `translateX(-${(imageIndex * 100)}%)`
                    }}>
                        {
                            images.map(image => (
                                <img
                                    key={image}
                                    src={image}
                                    alt='carousel-image'
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        zIndex: '2',
                                    }}
                                />
                            ))
                        }
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}