import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import AboutMe from '../components/Home/AboutMe';
import Navigation from '../components/Navigation/Navigation';

export default function Home() {
    const [activeImgIndex, setActiveImgIndex] = React.useState(0);

    const updateImgIndex = (imgIndex) => {
        if (activeImgIndex > 1) {
            setActiveImgIndex(0)
        } else {
            setActiveImgIndex(imgIndex)
        }
    };

    // React.useEffect(() => {
    //     const interval = setInterval(() => {
    //         updateImgIndex(activeImgIndex + 1)
    //     }, 3000);

    //     return () => {
    //         if (interval) {
    //             clearInterval(interval);
    //         }
    //         console.log('img caroussel unmounted')
    //     };
    // });

    return (
        <Navigation>
            <Grid container sx={{}}>
                <Grid item xs={0.6} sx={{ backgroundColor: '#f5f5f5' }}>

                </Grid>
                <Grid item xs={11.4} >
                    <Box sx={{
                        overflow: 'hidden',
                        width: '100%',
                        // height: '100vh',
                        margin: '0 auto',
                    }}>
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            position: 'relative',
                            // whiteSpace: 'nowrap',
                            transition: 'transform 2s',
                            transform: `translateX(-${activeImgIndex * 100}%)`
                        }}>
                            <img src='/image-gallery-homepage/1.jpg' style={{ width: '100%' }} />
                            <img src='/image-gallery-homepage/2.jpg' style={{ width: '100%' }} />
                            <img src='/image-gallery-homepage/3.jpg' style={{ width: '100%' }} />
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                position: 'absolute',
                                bottom: 10,
                                left: 0,
                                right: 0,
                                margin: 'auto'
                            }}>
                                <Typography id='0' sx={{
                                    height: '10px', width: '10px', borderRadius: '50%',
                                    backgroundColor: '#f2f1f1', margin: '0 3px',
                                }} />
                                <Typography id='1' sx={{
                                    height: '10px', width: '10px', borderRadius: '50%',
                                    backgroundColor: '#f2f1f1', margin: '0 3px',
                                }} />
                                <Typography id='2' sx={{
                                    height: '10px', width: '10px', borderRadius: '50%',
                                    backgroundColor: '#f2f1f1', margin: '0 3px',
                                }} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <AboutMe />
        </Navigation>
    )
};