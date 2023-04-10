import { Box, Fade, Stack, Typography } from '@mui/material';
import Navigation from '../../components/Navigation/Navigation';
import styles from '../../components/BalkanArhitrav/balkaarhitrav-style.module.css';
import PageTitleTemplate from '../../components/CommonComponents/PageTitleTemplate';
import Seo from '../../components/Seo/Seo';
import sanityClient from '../../utils/sanityClient';
import urlFor from '../../utils/sanityImageBuilder';
import { useRouter } from 'next/router';
import FadeInTransition from '../../components/Transitions/FadeInTransition';

export default function BalkanArhitrav({ texts, projects }) {
    const router = useRouter();

    return (
        <>
            <Seo siteMetadata={{
                title: 'БалканАРХитрам - лятна школа по архитектура',
                description: 'Balkanarhitrav summer architect school'
            }}></Seo>

            <FadeInTransition>
                <Navigation>
                    <Box sx={{
                        padding: { lg: '0 30px' }
                    }}>
                        <Box sx={{
                            paddingLeft: 1.5,
                        }}>
                            <PageTitleTemplate>
                                <Typography variant='h2'>Балкан АРХитрав</Typography>
                            </PageTitleTemplate>
                        </Box>

                        <Stack sx={{
                            flexDirection: { xs: 'column-reverse', lg: 'row' }, gap: 10,
                            alignItems: 'flex-start',
                        }}>

                            <Box sx={{ width: { xs: '100%', lg: '30%' }, padding: { xs: '0 12px', lg: 0 } }}>
                                {
                                    texts[0].text.map(text => (
                                        <Typography key={text} variant='h6' sx={{
                                            fontWeight: '300',
                                            marginBottom: 2,
                                            textAlign: 'justify',
                                        }}>
                                            {text}
                                        </Typography>
                                    ))
                                }
                            </Box>

                            <Stack sx={{
                                width: { xs: '100%', lg: '70%' }, flexDirection: { xs: 'column', lg: 'row' },
                                position: { xs: 'static', lg: 'sticky' }, top: 100,
                                gap: { xs: 5, lg: 0 }
                            }}>
                                {
                                    projects.map((project, index) => (
                                        <Fade key={project.title} in timeout={1000}
                                            style={{ transitionDelay: `${index * 400}ms` }}
                                            onClick={() => router.push(`/balkan-arhitrav/${project.year.slice(0, 4)}`)}
                                        >
                                            <Stack className={styles.projectContainer} sx={{
                                                cursor: 'pointer',
                                                width: { xs: '100%', lg: '33.33%' },
                                                padding: { lg: '0 2.6vw' },
                                                borderRight: { lg: 'solid 1px #6A6A6A' },
                                                borderLeft: { lg: index === 0 ? 'solid 1px #6A6A6A' : null },
                                            }}>
                                                <Typography
                                                    className={styles.textTitle}
                                                    sx={{
                                                        padding: { xs: '0 2.6vw', lg: 0 },
                                                    }}
                                                    variant='h3'>
                                                    {project.year}
                                                </Typography>
                                                <Typography sx={{
                                                    marginTop: 2,
                                                    textAlign: 'right'
                                                }}>
                                                    {project.title}
                                                </Typography>
                                                <Box className={styles.imageContainer}>
                                                    <img
                                                        src={urlFor(project.picture_main_page).url()}
                                                        alt=''
                                                        style={{
                                                            objectPosition: index === 0 ? 'top' : null,
                                                        }}
                                                        // width={245}
                                                        height={245}
                                                        className={styles.projectImg}
                                                    />
                                                </Box>
                                            </Stack>
                                        </Fade>
                                    ))
                                }
                            </Stack>
                        </Stack>
                    </Box>
                </Navigation >
            </FadeInTransition>
        </>
    )
}

export async function getStaticProps(context) {
    const texts = await sanityClient.fetch(`*[_type == "balkanArhitravMainPageText"]`);
    const projects = await sanityClient.fetch(`*[_type == "balkanArhitravProjects"] | order(year asc)`);

    return {
        props: {
            texts,
            projects
        }, // will be passed to the page component as props
    }
}