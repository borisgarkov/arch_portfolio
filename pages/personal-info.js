import { Divider, Grid, Typography, Box } from '@mui/material';
import Navigation from '../components/Navigation/Navigation';
import useScreenResolution from '../hooks/useScreenResolution';
import WorkExperience from '../components/PersonalInfo/WorkExperience';
import Education from '../components/PersonalInfo/Education';
import Contests from '../components/PersonalInfo/Contests';
import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import styles from '../components/PersonalInfo/styles.module.css';
import PageTitleTemplate from '../components/CommonComponents/PageTitleTemplate';
import Animation from '../utils/Animation';
import Image from 'next/image';
import Seo from '../components/Seo/Seo';

export default function CV() {
    const isMobile = useScreenResolution('lg');

    return (
        <>
            <Seo siteMetadata={{
                title: 'Nikoleta Ivanova CV',
                description: 'Николета Иванова CV / Nikoleta Ivanova Architect Personal information'
            }}></Seo>

            <Navigation>
                <Box sx={{ padding: '0 30px', marginBottom: 2, overflow: 'hidden' }}>

                    <Box sx={{ marginLeft: '6%' }}>
                        <PageTitleTemplate>
                            <Box sx={{ marginTop: 5 }}>
                                <Image
                                    priority
                                    src='/aboutme/profile.webp'
                                    alt='profile-pic'
                                    width={150}
                                    height={150}
                                    style={{ borderRadius: '50%' }}
                                />
                                <Typography variant='h3'>Николета Иванова</Typography>
                                <Typography variant='h4' sx={{ marginBottom: 5 }}>Архитект</Typography>
                                <a href="/resume/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    CV / Resume
                                </a>
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

                    </Grid>
                </Box>
            </Navigation>
        </>
    )
};

export async function getStaticProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}