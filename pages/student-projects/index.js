import * as React from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Navigation from "../../components/Navigation/Navigation"
import PageTitleTemplate from "../../components/CommonComponents/PageTitleTemplate"
import ProjectCoverTemplate from "../../components/Projects/ProjectCoverTemplate"
import Seo from "../../components/Seo/Seo"
import sanityClient from "../../utils/sanityClient"
import FadeInTransition from "../../components/Transitions/FadeInTransition"

export default function Projects(props) {
    const { interior, civil_buildings, public_buildings, urban } = props

    const gridItemsStyles = {
        borderRight: { lg: "1px solid black" },
    }

    return (
        <>
            <Seo
                siteMetadata={{
                    title: "Студентски проекти - Николета Иванова",
                    description: "Student projects - Nikoleta Ivanova",
                }}
            ></Seo>
            <FadeInTransition>
                <Navigation>
                    <Box
                        sx={{
                            padding: { lg: "0 30px" },
                        }}
                    >
                        <Box
                            sx={{
                                paddingLeft: 1.5,
                            }}
                        >
                            <PageTitleTemplate>
                                <Typography variant="h3">СТУДЕНТСКИ ПРОЕКТИ</Typography>
                            </PageTitleTemplate>
                        </Box>

                        <Grid
                            container
                            sx={{
                                justifyContent: "center",
                                marginTop: 5,
                            }}
                        >
                            <Grid
                                item
                                xs={12}
                                lg={3}
                                sx={{
                                    ...gridItemsStyles,
                                }}
                            >
                                <ProjectCoverTemplate
                                    title="ЖИЛИЩНИ СГРАДИ"
                                    sectionProjects={civil_buildings}
                                    endpoint={"student-projects"}
                                />
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                lg={3}
                                sx={{
                                    ...gridItemsStyles,
                                }}
                            >
                                <ProjectCoverTemplate
                                    title="ОБЩЕСТВЕНИ СГРАДИ"
                                    sectionProjects={public_buildings}
                                    endpoint={"student-projects"}
                                />
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                lg={3}
                                sx={{
                                    ...gridItemsStyles,
                                }}
                            >
                                <ProjectCoverTemplate
                                    title="ИНТЕРИОР"
                                    sectionProjects={interior}
                                    endpoint={"student-projects"}
                                />
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                lg={3}
                            >
                                <ProjectCoverTemplate
                                    title="ГРАДОУСТРОЙСТВО"
                                    sectionProjects={urban}
                                    endpoint={"student-projects"}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Navigation>
            </FadeInTransition>
        </>
    )
}

export async function getStaticProps() {
    const interior = await sanityClient.fetch(
        `*[_type == "studentProject" && category == "interior" && isProjectVisible == true]`
    )
    const civil_buildings = await sanityClient.fetch(
        `*[_type == "studentProject" && category == "civil_buildings" && isProjectVisible == true]`
    )
    const public_buildings = await sanityClient.fetch(
        `*[_type == "studentProject" && category == "public_buildings" && isProjectVisible == true]`
    )
    const urban = await sanityClient.fetch(
        `*[_type == "studentProject" && category == "urban" && isProjectVisible == true]`
    )

    return {
        props: {
            interior,
            civil_buildings,
            public_buildings,
            urban,
        },
    }
}
