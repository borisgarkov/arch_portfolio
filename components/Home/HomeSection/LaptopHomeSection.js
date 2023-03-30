import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import useImageCaroussel from '../../../hooks/useImageCaroussel';
import imageCarousel from './carousselImages';
import IntroText from './IntroText';
import DividerSection from '../DividerSection';
import { useContext } from 'react';
import { HomeDataContext } from '../../../pages/home';

export default function LaptopHomeSection() {
    // const homeData = useContext(HomeDataContext);

    // console.log(homeData);

    const currentImageIndex = useImageCaroussel();

    const smallImageStyle = {
        width: '100%',
        height: '123px',
        objectFit: 'cover',
    };

    return (
        <Stack sx={{ justifyContent: 'space-evenly' }}>
            <Grid container sx={{
                width: '90%',
                margin: '100px auto',
                height: '400px',
                // alignItems: 'flex-start',
                justifyContent: 'space-between',
            }}>
                <Grid item lg={6} sx={{ height: '100%' }}>
                    <img
                        src={imageCarousel[currentImageIndex]}
                        alt='carousel-image'
                        style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Grid>

                <Grid item lg={2} sx={{ height: '100%' }}>
                    <Stack sx={{
                        justifyContent: 'space-between',
                        margin: '0 auto',
                        height: '100%'
                    }}>
                        <img
                            src={imageCarousel[0]}
                            alt='carousel-image'
                            style={{
                                ...smallImageStyle,
                                transition: 'opacity 1s',
                                opacity: currentImageIndex === 0 ? 1 : 0.3
                            }}
                        />
                        <img
                            src={imageCarousel[1]}
                            alt='carousel-image'
                            style={{
                                ...smallImageStyle,
                                transition: 'opacity 1s',
                                opacity: currentImageIndex === 1 ? 1 : 0.3
                            }}
                        />
                        <img
                            src={imageCarousel[2]}
                            alt='carousel-image'
                            style={{
                                ...smallImageStyle,
                                transition: 'opacity 1s',
                                opacity: currentImageIndex === 2 ? 1 : 0.3
                            }}
                        />
                    </Stack>
                </Grid>

                <Grid item lg={3.74} sx={{ height: '100%', width: '100%' }}>
                    <Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
                        <img
                            src='/image-gallery-homepage/04.jpg'
                            alt='carousel-image'
                            style={{ height: '260px', width: '100%', objectFit: 'cover' }}
                        />

                        <IntroText />
                    </Stack>
                </Grid>
            </Grid>

            <DividerSection />
        </Stack>
    )
};