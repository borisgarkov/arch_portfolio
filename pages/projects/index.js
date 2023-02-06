import * as React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Navigation from "../../components/Navigation/Navigation";
// import styles from '../../components/Projects/projects.module.css';
import Link from "next/link";
import Image from 'next/image';
import { getProjectsBySector } from '../../components/Projects/getProjectsData';
import { Fade, Slide, Stack } from '@mui/material';
import styles from '../../components/BalkanArhitrav/balkaarhitrav-style.module.css';

const GridSectionImages = (props) => {
    const { title, sectionProjects } = props;

    return (
        <>
            < Typography variant="h5" sx={{
                paddingLeft: 1.5,
            }}>
                {title}
            </Typography >

            {
                sectionProjects.map((project, index) => {
                    return (
                        <React.Fragment key={project.title} >
                            <Link href={`/projects/${project.slug}`} style={{
                                textDecoration: 'none', color: 'inherit'
                            }}>

                                <Fade key={project.title} in timeout={1000}
                                    style={{ transitionDelay: `${index * 400}ms` }}>
                                    <Stack className={styles.projectContainer} sx={{
                                        padding: '0 2.6vw',
                                        height: '350px',
                                        justifyContent: 'flex-end',
                                    }}>
                                        <Typography sx={{
                                            marginTop: 2,
                                            textAlign: 'right'
                                        }}>
                                            {project.title}
                                        </Typography>
                                        <Typography sx={{
                                            textAlign: 'right'
                                        }}>
                                            {project.city}
                                        </Typography>
                                        <Box className={styles.imageContainer} style={{ marginTop: '16px' }}>
                                            <img
                                                src={project.images[0]}
                                                alt=''
                                                className={styles.projectImg}
                                            />
                                        </Box>
                                    </Stack>
                                </Fade>
                            </Link>
                            <Divider sx={{ width: '70%', margin: '16px auto' }} />
                        </React.Fragment>
                    )
                })
            }
        </>
    )
};

export default function Projects(props) {
    const { INTERIOR, PUBLIC_BUILDINGS, CIVIL_BUILDINGS, URBAN_PLANNING } = props;

    const gridItemsStyles = {
        borderRight: { lg: '1px solid black' }
    };

    return (
        <Navigation>
            <Box sx={{
                padding: '0 30px'
            }}>
                <Typography variant='h2' sx={{
                    marginTop: 10, marginBottom: 10,
                    display: 'inline-block',
                }}>
                    <Slide in timeout={1000} direction='right'>
                        <Box sx={{
                            borderTop: '2px solid black',
                            marginBottom: 5,
                            width: '50%'
                        }} />
                    </Slide>
                    СТУДЕНТСКИ ПРОЕКТИ
                </Typography>


                <Grid container sx={{
                    justifyContent: 'center',
                    marginTop: 5,
                }}>
                    <Grid item xs={12} lg={3} sx={{
                        ...gridItemsStyles
                    }}>
                        <GridSectionImages title='ЖИЛИЩНИ СГРАДИ'
                            sectionProjects={CIVIL_BUILDINGS} />
                    </Grid>
                    <Grid item xs={12} lg={3} sx={{
                        ...gridItemsStyles
                    }}>
                        <GridSectionImages title='ОБЩЕСТВЕНИ СГРАДИ'
                            sectionProjects={PUBLIC_BUILDINGS} />
                    </Grid>
                    <Grid item xs={12} lg={3} sx={{
                        ...gridItemsStyles
                    }}>
                        <GridSectionImages title='ИНТЕРИОР'
                            sectionProjects={INTERIOR} />
                    </Grid>
                    <Grid item xs={12} lg={3} sx={{
                        ...gridItemsStyles
                    }}>
                        <GridSectionImages title='ГРАДОУСТРОЙСТВО'
                            sectionProjects={URBAN_PLANNING} />
                    </Grid>
                </Grid>
            </Box>
        </Navigation>
    )
};

export async function getStaticProps(params) {
    return {
        props: {
            ...getProjectsBySector()
        }
    }
};