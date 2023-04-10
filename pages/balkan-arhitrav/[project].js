import { Box, Grid, Slide, Typography } from "@mui/material";
import Navigation from "../../components/Navigation/Navigation";
import sanityClient from "../../utils/sanityClient";
import GoBackButton from "../../components/Projects/GoBackButton";
import ProjectImages from "../../components/Projects/ProjectImages";
import useScreenResolution from "../../hooks/useScreenResolution";
import FadeInTransition from "../../components/Transitions/FadeInTransition";

export default function Projects(props) {
    const project = props.project[0];
    const isMobile = useScreenResolution('lg');

    return (
        <FadeInTransition>
            <Navigation>
                <Grid container sx={{
                    marginTop: 5,
                }}>
                    <Grid item lg={4} sx={{
                        padding: 5,
                        borderRight: '1px solid black',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Box sx={{
                            marginBottom: 5,
                            display: 'inline-block',
                        }}>
                            <Slide in timeout={1000} direction='right'>
                                <Box sx={{
                                    borderTop: '2px solid black',
                                    marginBottom: 3,
                                    width: '50%'
                                }} />
                            </Slide>
                            <Typography variant='h5' sx={{ textTransform: 'uppercase' }}>
                                {project.title}
                            </Typography>
                        </Box>

                        {
                            project.text.map(text => (
                                <Typography key={text} sx={{ textAlign: 'justify' }}>
                                    {text}
                                </Typography>
                            ))
                        }

                        {
                            !isMobile && <GoBackButton
                                goBackButtonText={'Назад към Балкан АРХитрав'}
                                goBackLink={'/balkan-arhitrav'}
                            />
                        }
                    </Grid>

                    <ProjectImages pictures={project.project_pictures} />

                    {
                        isMobile && <Grid item xs={12} sx={{ padding: '0 40px 40px' }}>
                            <GoBackButton
                                goBackButtonText={'Назад към Балкан АРХитрав'}
                                goBackLink={'/balkan-arhitrav'}
                            />
                        </Grid>
                    }
                </Grid>
            </Navigation >
        </FadeInTransition>
    )
};

export async function getStaticPaths() {
    const projectsSlugs = await sanityClient.fetch('*[_type == "balkanArhitravProjects"]["year"]');

    return {
        paths: projectsSlugs.map(project => {
            return { params: { project: project.slice(0, 4) } }
        }),
        fallback: false,
    }
};

export async function getStaticProps(props) {
    const currentProject = await sanityClient.fetch(`
        *[_type == "balkanArhitravProjects" && year == "${props.params.project}г."]
    `)

    return {
        props: {
            project: currentProject
        }
    }
};