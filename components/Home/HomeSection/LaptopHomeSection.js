import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { imageStyle } from './styles';
import useImageCaroussel from '../../../hooks/useImageCaroussel';
import imageCarousel from './carousselImages';
import IntroText from './IntroText';

export default function LaptopHomeSection() {

    const currentImageIndex = useImageCaroussel();

    return (
        <Stack sx={{ height: '80vh' }}>
            <Grid container sx={{
                width: '90%',
                margin: 'auto',
                height: '400px',
                alignItems: 'flex-start',
                justifyContent: 'space-evenly'
            }}>
                <Grid item lg={6} sx={{ height: '100%' }}>
                    <img
                        src={imageCarousel[currentImageIndex]}
                        alt='carousel-image'
                        style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            transition: 'opacity 1s',
                        }}
                    />
                </Grid>

                <Grid item lg={2} sx={{ height: '100%' }}>
                    <Stack sx={{
                        paddingLeft: 2,
                        paddingRight: 2,
                        justifyContent: 'space-between',
                        height: '100%'
                    }}>
                        <img
                            src={imageCarousel[0]}
                            alt='carousel-image'
                            style={{
                                ...imageStyle,
                                transition: 'opacity 1s',
                                opacity: currentImageIndex === 0 ? 1 : 0.3
                            }}
                        />
                        <img
                            src={imageCarousel[1]}
                            alt='carousel-image'
                            style={{
                                ...imageStyle,
                                transition: 'opacity 1s',
                                opacity: currentImageIndex === 1 ? 1 : 0.3
                            }}
                        />
                        <img
                            src={imageCarousel[2]}
                            alt='carousel-image'
                            style={{
                                ...imageStyle,
                                transition: 'opacity 1s',
                                opacity: currentImageIndex === 2 ? 1 : 0.3
                            }}
                        />
                    </Stack>
                </Grid>

                <Grid item lg={4} sx={{ height: '100%' }}>
                    <Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
                        <img
                            src='/image-gallery-homepage/profile.webp'
                            alt='carousel-image'
                            style={{ height: '70%', width: '100%', objectFit: 'contain' }}
                        />

                        <IntroText />
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    )
};