import * as React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navigation from "../../components/Navigation/Navigation";
// import { getProjectsBySector } from '../../components/Projects/getProjectsData';
import PageTitleTemplate from '../../components/CommonComponents/PageTitleTemplate';
import ProjectCoverTemplate from '../../components/Projects/ProjectCoverTemplate';
import Seo from '../../components/Seo/Seo';
import sanityClient from '../../utils/sanityClient';

export default function Projects(props) {
    const { interior, civil_buildings, public_buildings, urban } = props;

    console.log(interior);

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
                                sectionProjects={civil_buildings} />
                        </Grid>

                        <Grid item xs={12} lg={3} sx={{
                            ...gridItemsStyles
                        }}>
                            <ProjectCoverTemplate title='ОБЩЕСТВЕНИ СГРАДИ'
                                sectionProjects={public_buildings} />
                        </Grid>

                        <Grid item xs={12} lg={3} sx={{
                            ...gridItemsStyles
                        }}>
                            <ProjectCoverTemplate title='ИНТЕРИОР'
                                sectionProjects={interior} />
                        </Grid>

                        <Grid item xs={12} lg={3}>
                            <ProjectCoverTemplate title='ГРАДОУСТРОЙСТВО'
                                sectionProjects={urban} />
                        </Grid>
                    </Grid>
                </Box>
            </Navigation>
        </>
    )
};

export async function getStaticProps() {
    const interior = await sanityClient.fetch(
        `*[_type == "studentProject" && category == "interior"]`
    );
    const civil_buildings = await sanityClient.fetch(
        `*[_type == "studentProject" && category == "civil_buildings"]`
    );
    const public_buildings = await sanityClient.fetch(
        `*[_type == "studentProject" && category == "public_buildings"]`
    );
    const urban = await sanityClient.fetch(
        `*[_type == "studentProject" && category == "urban"]`
    );

    return {
        props: {
            interior,
            civil_buildings,
            public_buildings,
            urban
        }
    }
};