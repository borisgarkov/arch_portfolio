import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AboutMe from '../components/Home/AboutMe';
import Navigation from '../components/Navigation/Navigation';

export default function Home() {
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
                        marginTop: 10,
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
                    }}>
                        <img
                            src='/image-gallery-homepage/6.jpg'
                            alt='carousel-image'
                            style={{
                                width: '80%',
                                height: '80%',
                                objectFit: 'contain',
                                zIndex: '2',
                            }}
                        />
                    </Grid>
                </Grid>
                <AboutMe />
            </Box>
        </Navigation >
    )
};