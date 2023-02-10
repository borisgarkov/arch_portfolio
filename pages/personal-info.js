import { Divider, Grid, Typography, Stack, Box, Zoom, Fade, Slide } from '@mui/material';
import Navigation from '../components/Navigation/Navigation';
import useScreenResolution from '../hooks/useScreenResolution';
import useOnScreen from '../hooks/useOnScreen';
import { useRef } from 'react';
import WorkExperience from '../components/PersonalInfo/WorkExperience';
import Education from '../components/PersonalInfo/Education';
import Contests from '../components/PersonalInfo/Contests';
import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import PageTitleTemplate from '../components/CommonComponents/PageTitleTemplate';

export default function CV() {
    const isMobile = useScreenResolution('lg');

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    const animationSettings = {
        animationTimingFunction: 'ease-out',
        animationDuration: '1s',
        animationFillMode: 'forwards',
    };

    const backgroundScetchImageStyle = {
        width: '800px',
        position: 'absolute',
        right: '5%',
    };

    return (
        <Navigation>
            <Box sx={{ padding: '0 30px' }} ref={ref}>

                <PageTitleTemplate>
                    <Typography variant='h3'>Николета Иванова</Typography>
                    <Typography variant='h4'>Архитект</Typography>
                </PageTitleTemplate>

                <Grid container sx={{ margin: '0 auto', }}>
                    <Grid
                        item
                        xs='auto'
                        style={
                            isVisible ? {
                                animation: 'CVleftSide',
                                ...animationSettings,
                                marginRight: '8px'
                            } : {
                                opacity: '0'
                            }
                        }
                    >
                        <PersonalInfo />
                    </Grid>

                    {
                        !isMobile && <Divider flexItem orientation='vertical' />
                    }

                    <Grid
                        item
                        xs='auto'
                        sx={{ paddingLeft: { lg: 5 } }}
                        style={
                            isVisible ? {
                                animation: 'CVrightSide',
                                ...animationSettings
                            } : {
                                opacity: '0'
                            }
                        }
                    >
                        <WorkExperience />
                        <Education />
                        <Contests />
                    </Grid>

                    {
                        !isMobile &&
                        <img
                            src='/cv/backgroundScetchImage.png'
                            alt=""
                            style={
                                isVisible ? {
                                    animation: 'CVbackgroundPic',
                                    ...animationSettings,
                                    ...backgroundScetchImageStyle,
                                } : {
                                    opacity: '0'
                                }
                            }
                        />
                    }
                </Grid>
            </Box>
        </Navigation>
    )
};