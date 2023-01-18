import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Navigation from "../components/Navigation/Navigation";
import styles from '../components/Projects/projects.module.css';
import Link from "next/link";

export default function Projects(props) {
    const gridItemsStyles = {
        borderRight: { lg: '1px solid black' }
    };

    const gridHeadingsStyles = {
        textAlign: 'center',
    };

    const firstSectionProjects = [
        {
            title: 1,
            image: 'https://source.unsplash.com/random/tree/',
            imageText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            title: 2,
            image: 'https://source.unsplash.com/random/bike/',
            imageText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            title: 3,
            image: 'https://source.unsplash.com/random/river/',
            imageText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
    ];

    const secondSectionProjets = [
        {
            title: 4,
            image: 'https://source.unsplash.com/random/ocean/',
            imageText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            title: 5,
            image: 'https://source.unsplash.com/random/train/',
            imageText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            title: 6,
            image: 'https://source.unsplash.com/random/forest/',
            imageText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
    ];

    const thirdSectionProjets = [
        {
            title: 7,
            image: 'https://source.unsplash.com/random/woman/',
            imageText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            title: 8,
            image: 'https://source.unsplash.com/random/baby/',
            imageText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            title: 9,
            image: 'https://source.unsplash.com/random/man/',
            imageText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
    ];

    const forthSectionProjets = [
        {
            title: 10,
            image: 'https://source.unsplash.com/random/tiger/',
            imageText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            title: 11,
            image: 'https://source.unsplash.com/random/lion/',
            imageText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            title: 12,
            image: 'https://source.unsplash.com/random/pantera/',
            imageText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
    ];

    return (
        <Navigation>
            <Typography variant="h4" sx={{
                marginTop: 10,
                padding: 2,
            }}>
                Студентски проекти
            </Typography>
            <Grid container sx={{
                justifyContent: 'center',
                // height: '100vh',
                marginTop: 5,
            }}>
                <Grid item xs={12} lg={3} sx={{
                    ...gridItemsStyles
                }}>
                    <Typography variant="h6" sx={{
                        ...gridHeadingsStyles
                    }}>Жилищни сгради</Typography>
                    {
                        firstSectionProjects.map(project => {
                            return (
                                <Link key={project.title} href={`/projects/${project.title}`}>
                                    <Box className={styles.projectContainer}>
                                        <img
                                            src={project.image}
                                            alt='project-image'
                                            className={styles.projectImg}
                                        />
                                        <Typography className={styles.projectText}>
                                            {project.imageText}
                                        </Typography>
                                    </Box>
                                </Link>
                            )
                        })
                    }
                </Grid>
                <Grid item xs={12} lg={3} sx={{
                    ...gridItemsStyles
                }}>
                    <Typography variant="h6" sx={{
                        ...gridHeadingsStyles
                    }}>Обществени сгради</Typography>
                    {
                        secondSectionProjets.map(project => {
                            return (
                                <Link key={project.title} href={`/projects/${project.title}`}>
                                    <Box className={styles.projectContainer}>
                                        <img
                                            src={project.image}
                                            alt='project-image'
                                            className={styles.projectImg}
                                        />
                                        <Typography className={styles.projectText}>
                                            {project.imageText}
                                        </Typography>
                                    </Box>
                                </Link>
                            )
                        })
                    }
                </Grid>
                <Grid item xs={12} lg={3} sx={{
                    ...gridItemsStyles
                }}>
                    <Typography variant="h6" sx={{
                        ...gridHeadingsStyles
                    }}>Интериор</Typography>
                    {
                        thirdSectionProjets.map(project => {
                            return (
                                <Link key={project.title} href={`/projects/${project.title}`}>
                                    <Box className={styles.projectContainer}>
                                        <img
                                            src={project.image}
                                            alt='project-image'
                                            className={styles.projectImg}
                                        />
                                        <Typography className={styles.projectText}>
                                            {project.imageText}
                                        </Typography>
                                    </Box>
                                </Link>
                            )
                        })
                    }
                </Grid>
                <Grid item xs={12} lg={3} sx={{
                    ...gridItemsStyles
                }}>
                    <Typography variant="h6" sx={{
                        ...gridHeadingsStyles
                    }}>Градоустройство</Typography>
                    {
                        forthSectionProjets.map(project => {
                            return (
                                <Link key={project.title} href={`/projects/${project.title}`}>
                                    <Box className={styles.projectContainer}>
                                        <img
                                            src={project.image}
                                            alt='project-image'
                                            className={styles.projectImg}
                                        />
                                        <Typography className={styles.projectText}>
                                            {project.imageText}
                                        </Typography>
                                    </Box>
                                </Link>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Navigation>
    )
}