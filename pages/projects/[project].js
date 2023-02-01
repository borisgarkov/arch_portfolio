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
                }}>
                    <Typography variant="h5">
                        {project.title}
                    </Typography>
                    {
                        project.content.map(text => (
                            <Typography
                                key={text}
                                sx={{
                                    marginTop: 2
                                }}
                            >
                                {text}
                            </Typography>
                        ))
                    }


                    <Typography variant="h6" sx={{
                        margin: '16px 0'
                    }}>
                        ИЗПОЛЗВАНИ ПРОГРАМИ
                    </Typography>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px',
                        gap: 2
                    }}>
                        {
                            project.programmes.map(program => {
                                return (
                                    <Stack key={program} sx={{
                                        flexDirection: 'row',
                                        gap: 1,
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        border: '1px solid black',
                                        borderRadius: '16px',
                                        padding: 1,
                                        height: '48px',
                                        backgroundColor: '#f5f5f5',
                                    }}>
                                        <img
                                            src={programsPictureMapping[program.toLowerCase()]}
                                            alt='icon'
                                            width='16'
                                            height='16'
                                        />
                                        {program}
                                    </Stack>
                                )
                            })
                        }
                    </Box>

                    <Link href='/projects' style={{ textDecoration: 'none' }}>
                        <Stack sx={{
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            gap: 2,
                            color: 'black',
                        }}>
                            <ArrowBackIcon />
                            <Typography sx={{
                                marginTop: 2,
                            }}>
                                Назад към другите проекти
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
                        <Box className={styles.imgBigContainer}>
                            <img
                                src={project.images[0]}
                                alt='project-img'
                                className={styles.projectImg}
                            />
                        </Box>
                        <Box className={styles.imgSmallContainer}>
                            <img
                                src={project.images[1]}
                                alt='project-img'
                                className={styles.projectImg}
                            />
                        </Box>
                    </Stack>
                    <Stack sx={{
                        flexDirection: 'row',
                        gap: 2,
                        justifyContent: 'space-evenly',
                    }}>
                        <Box className={styles.imgSmallContainer}>
                            <img
                                src={project.images[2]}
                                alt='project-img'
                                className={styles.projectImg}
                            />
                        </Box>
                        <Box className={styles.imgBigContainer}>
                            <img
                                src={project.images[3]}
                                alt='project-img'
                                className={styles.projectImg}
                            />
                        </Box>
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