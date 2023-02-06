import Navigation from "../../components/Navigation/Navigation";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from '../../components/Projects/project-page.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";
import { getAllProjectsSlugs, getCurrentProjectData } from "../../components/Projects/getProjectsData";
import programsPictureMapping from "../../components/Projects/programsPictureMapping";
import { Fade, Slide } from "@mui/material";

const BigImageContainer = ({ image }) => {
    return (
        <Box className={styles.imgBigContainer}>
            <img
                src={image}
                alt='project-img'
                className={styles.projectImg}
            />
        </Box>
    )
};

const SmallImageContainer = ({ image }) => {
    return (
        <Box className={styles.imgSmallContainer}>
            <img
                src={image}
                alt='project-img'
                className={styles.projectImg}
            />
        </Box>
    )
};

export default function Projects(props) {
    const project = props.project;

    return (
        <Navigation>
            <Grid container sx={{
                marginTop: 5
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
                        project.content.map(text => (
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

                    <Stack sx={{
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

                                            // gap: 2
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
                                                <img
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
                    </Stack>

                    <Link href='/projects' style={{ textDecoration: 'none', marginTop: 'auto' }}>
                        <Stack sx={{
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            gap: 2,
                            color: 'black',
                        }}>
                            <ArrowBackIcon />
                            <Typography>
                                Назад към СТУДЕНТСКИ ПРОЕКТИ
                            </Typography>
                        </Stack>
                    </Link>
                </Grid>

                <Grid item lg={8} sx={{
                    padding: 5
                }}>
                    <Stack sx={{
                        flexDirection: 'row',
                        gap: 2,
                        justifyContent: 'space-evenly',
                        marginBottom: 2
                    }}>
                        <BigImageContainer image={project.images[0]} />
                        <SmallImageContainer image={project.images[1]} />
                    </Stack>
                    <Stack sx={{
                        flexDirection: 'row',
                        gap: 2,
                        justifyContent: 'space-evenly',
                    }}>
                        <SmallImageContainer image={project.images[2]} />
                        <BigImageContainer image={project.images[3]} />
                    </Stack>
                </Grid>
            </Grid>
        </Navigation >
    )
};

export async function getStaticPaths() {
    return {
        paths: getAllProjectsSlugs(),
        fallback: false,
    }
};

export async function getStaticProps(props) {
    return {
        props: { project: getCurrentProjectData(props.params.project) }
    }
};