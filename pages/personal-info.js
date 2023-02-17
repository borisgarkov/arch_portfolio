import { Divider, Grid, Typography, Box, Avatar, Stack } from '@mui/material';
import Navigation from '../components/Navigation/Navigation';
import useScreenResolution from '../hooks/useScreenResolution';
import WorkExperience from '../components/PersonalInfo/WorkExperience';
import Education from '../components/PersonalInfo/Education';
import Contests from '../components/PersonalInfo/Contests';
import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import PageTitleTemplate from '../components/CommonComponents/PageTitleTemplate';
import Head from 'next/head';
import Animation from '../utils/Animation';

export default function CV() {
    const isMobile = useScreenResolution('lg');

    const backgroundScetchImageStyle = {
        width: '800px',
        position: 'absolute',
        right: '1%',
    };

    return (
        <>
            <Head>
                <title>Nikoleta Ivanova CV Portfolio Architecture</title>
                <meta
                    name="description"
                    content="Nikoleta Ivanova CV"
                    key="desc"
                />
            </Head>
            <Navigation>
                <Box sx={{ padding: '0 30px', marginBottom: 2, overflow: 'hidden' }}>

                    <Box sx={{ marginLeft: '6%' }}>
                        <PageTitleTemplate>
                            <Box sx={{ marginTop: 5 }}>
                                <Avatar src='/cv/profile.jpg' alt='profile-pic' sx={{ width: 150, height: 150 }} />
                                <Typography variant='h3'>Николета Иванова</Typography>
                                <Typography variant='h4'>Архитект</Typography>
                            </Box>
                        </PageTitleTemplate>
                    </Box>

                    <Grid container sx={{
                        margin: '0 auto',
                        justifyContent: { lg: 'space-evenly' }
                    }}>

                        <Animation type='CVleftSide'>
                            <Grid
                                item
                                xs='auto'
                                sx={{ paddingRight: { lg: 5 } }}
                            >
                                <PersonalInfo />
                            </Grid>
                        </Animation>

                        {
                            !isMobile &&
                            <Divider flexItem orientation='vertical' />
                        }

                        <Animation type='CVrightSide'>
                            <Grid
                                item
                                xs='auto'
                                sx={{ paddingLeft: { lg: 5 } }}
                            >
                                <WorkExperience />
                                <Education />
                                <Contests />
                            </Grid>
                        </Animation>

                        {/* {
                            !isMobile &&
                            <Animation type='CVbackgroundPic'>
                                <img
                                    src='/cv/backgroundScetchImage.png'
                                    alt=""
                                    style={{ ...backgroundScetchImageStyle }}
                                />
                            </Animation>
                        } */}
                    </Grid>
                </Box>
            </Navigation>
        </>
    )
};