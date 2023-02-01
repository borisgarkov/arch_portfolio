import * as React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Navigation from "../../components/Navigation/Navigation";
import styles from '../../components/Projects/projects.module.css';
import Link from "next/link";
import Image from 'next/image';
import { getProjectsBySector } from '../../components/Projects/getProjectsData';

const GridSectionImages = (props) => {
    const { title, sectionProjects } = props;

    return (
        <>
            < Typography variant="h6" sx={{
                paddingLeft: 1.5,
            }}>
                {title}
            </Typography >
            {
                sectionProjects.map(project => {
                    return (
                        <React.Fragment key={project.title} >
                            <Link href={`/projects/${project.slug}`}>
                                <Box className={styles.projectContainer}>
                                    <Image
                                        src={project.images[0]}
                                        alt='project-image'
                                        fill='cover'
                                        sizes='100%'
                                        className={styles.projectImg}
                                    />
                                    <Typography className={styles.projectText}>
                                        {project.title}
                                    </Typography>
                                </Box>
                            </Link>
                            <Divider sx={{ width: '70%', margin: '0 auto' }} />
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
            <Typography variant="h4" sx={{
                marginTop: 10,
                padding: 2,
            }}>
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