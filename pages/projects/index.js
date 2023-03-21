import * as React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navigation from "../../components/Navigation/Navigation";
import { getProjectsBySector } from '../../components/Projects/getProjectsData';
import PageTitleTemplate from '../../components/CommonComponents/PageTitleTemplate';
import ProjectCoverTemplate from '../../components/Projects/ProjectCoverTemplate';
import Seo from '../../components/Seo/Seo';

export default function Projects(props) {
    const { INTERIOR, PUBLIC_BUILDINGS, CIVIL_BUILDINGS, URBAN_PLANNING } = props;

    const gridItemsStyles = {
        borderRight: { lg: '1px solid black' }
    };

    return (
        <>
            <Seo siteMetadata={{
                title: 'Студентски проекти - Николета Иванова',
                description: 'Student projects - Nikoleta Ivanova'
            }}></Seo>
            <Navigation>
                <Box sx={{
                    padding: '0 30px'
                }}>
                    <Box sx={{
                        paddingLeft: 1.5,
                    }}>
                        <PageTitleTemplate>
                            <Typography variant='h3'>СТУДЕНТСКИ ПРОЕКТИ</Typography>
                        </PageTitleTemplate>
                    </Box>

                    <Grid container sx={{
                        justifyContent: 'center',
                        marginTop: 5,
                    }}>
                        <Grid item xs={12} lg={3} sx={{
                            ...gridItemsStyles
                        }}>
                            <ProjectCoverTemplate title='ЖИЛИЩНИ СГРАДИ'
                                sectionProjects={CIVIL_BUILDINGS} />
                        </Grid>
                        <Grid item xs={12} lg={3} sx={{
                            ...gridItemsStyles
                        }}>
                            <ProjectCoverTemplate title='ОБЩЕСТВЕНИ СГРАДИ'
                                sectionProjects={PUBLIC_BUILDINGS} />
                        </Grid>
                        <Grid item xs={12} lg={3} sx={{
                            ...gridItemsStyles
                        }}>
                            <ProjectCoverTemplate title='ИНТЕРИОР'
                                sectionProjects={INTERIOR} />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <ProjectCoverTemplate title='ГРАДОУСТРОЙСТВО'
                                sectionProjects={URBAN_PLANNING} />
                        </Grid>
                    </Grid>
                </Box>
            </Navigation>
        </>
    )
};

export async function getStaticProps() {
    return {
        props: {
            ...getProjectsBySector()
        }
    }
};