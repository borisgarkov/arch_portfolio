import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AboutMe from '../components/Home/AboutMe';
import Navigation from '../components/Navigation/Navigation';

export default function Home() {

    const [imageIndex, setImageIndex] = useState(0);

    const images = [
        '/image-gallery-homepage/6.jpg',
        '/image-gallery-homepage/1.jpg',
        '/image-gallery-homepage/2.jpg',
    ];

    useEffect(() => {
        const timeInteval = setInterval(() => {
            if (imageIndex === 3) {
                setImageIndex(0);
                return
            }

            setImageIndex(prevState => prevState + 1);
            images.push(images.shift())
            console.log(imageIndex)
        }, 2000);

        return () => {
            clearInterval(timeInteval)
        }
    }, [imageIndex]);

    const animationSettings = {
        animationTimingFunction: 'ease-out',
        animationDuration: '1.5s',
        animationFillMode: 'forwards',
    };

    return (
        <Navigation>
            <Box>
                <Grid
                    container
                    sx={{
                        width: '100%',
                        marginBottom: 20,
                        marginTop: '95px',
                    }}
                >
                    <Grid item sm={4}>
                        <Box
                            sx={{
                                backgroundColor: '#f3ede9',
                                height: '252px',
                                width: '682px',
                                zIndex: '1',
                                position: 'relative',
                                left: '40%',
                                animationName: 'rectangleNextToImageMainPage',
                                ...animationSettings
                            }}
                        />
                        <Stack sx={{
                            position: 'relative',
                            zIndex: '2',
                            animationName: 'mainTextNextToImageMainPage',
                            ...animationSettings
                        }}>
                            <Typography variant='h2'>
                                PORTFOLIO
                            </Typography>

                            <Typography variant='h6'>
                                by Nikoleta Ivanova
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={8} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#e5ddd4',
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

                                {/* <img
                                    src={images[0]}
                                    alt='carousel-image'
                                    style={{
                                        width: '100%',
                                        height: '80%',
                                        objectFit: 'contain',
                                        zIndex: '2',
                                    }}
                                /> */}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <AboutMe />
            </Box>
        </Navigation >
    )
};