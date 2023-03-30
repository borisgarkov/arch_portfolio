import { Box, Grid, Slide, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Navigation from "../../components/Navigation/Navigation";
import BigImageContainer from "../../components/Projects/ProjectPageComponents/BigImageContainer";
import SmallImageContainer from "../../components/Projects/ProjectPageComponents/SmallImageContainer";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import sanityClient from "../../utils/sanityClient";
import urlFor from "../../utils/sanityImageBuilder";

export default function Projects(props) {
    const project = props.project[0];

    console.log(project);

    return (
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

                    <Typography sx={{
                        marginTop: 5,
                        marginBottom: 2
                    }}>
                        ИЗПОЛЗВАНИ ПРОГРАМИ
                    </Typography>

                    {/* <Stack sx={{
                        flexDirection: 'row',
                        gap: 2
                    }}>
                        {
                            project.programmes.map((program, index) => {
                                return (
                                    <Fade in
                                        timeout={1000}
                                        style={{ transitionDelay: `${index * 400}ms` }}
                                        key={program}
                                    >
                                        <Stack sx={{
                                            flexDirection: 'column',
                                            gap: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: '50%',
                                        }}>
                                            <Box sx={{
                                                border: '1px solid black',
                                                borderRadius: '50%',
                                                backgroundColor: 'black',
                                                height: '32px',
                                                width: '32px',
                                                overflow: 'hidden',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <Image
                                                    src={programsPictureMapping[program.toLowerCase()]}
                                                    alt='icon'
                                                    width='20'
                                                    height='20'
                                                />
                                            </Box>
                                            <Typography sx={{}}>
                                                {program}
                                            </Typography>
                                        </Stack>
                                    </Fade>
                                )
                            })
                        }
                    </Stack> */}

                    <Link href='/balkan-arhitrav' style={{ textDecoration: 'none', marginTop: 'auto' }}>
                        <Stack sx={{
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            gap: 2,
                            color: 'black',
                        }}>
                            <ArrowBackIcon />
                            <Typography>Назад към проекти</Typography>
                        </Stack>
                    </Link>
                </Grid>

                <Grid item lg={8} sx={{ padding: 5 }}>
                    <Grid container sx={{ gap: 2 }}>
                        {
                            project.project_pictures.map((picture, index) => {
                                return index % 2 === 0
                                    ? <BigImageContainer image={urlFor(picture).url()} />
                                    : <SmallImageContainer image={urlFor(picture).url()} />
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Navigation >
    )
};

export async function getStaticPaths() {
    const projectsSlugs = await sanityClient.fetch('*[_type == "balkanArhitravProjects"]["year"]');

    console.log(projectsSlugs.map(project => {
        return { params: { project: project.slice(0, 4) } }
    }))

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