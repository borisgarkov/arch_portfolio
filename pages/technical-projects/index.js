import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Navigation from "../../components/Navigation/Navigation"

import PageTitleTemplate from "../../components/CommonComponents/PageTitleTemplate"
import ProjectCoverTemplate from "../../components/Projects/ProjectCoverTemplate"
import Seo from "../../components/Seo/Seo"
import FadeInTransition from "../../components/Transitions/FadeInTransition"

import sanityClient from "../../utils/sanityClient"

export default function Projects(props) {
    const { architecture, existing, reconstruction, other } = props

    const gridItemsStyles = {
        borderRight: { lg: "1px solid black" },
    }

    return (
        <>
            <Seo
                siteMetadata={{
                    title: "Технически проекти - Николета Иванова",
                    description: "Technical projects - Nikoleta Ivanova",
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
                                <Typography variant="h3">Технически ПРОЕКТИ</Typography>
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
                                    title="архитектурни проекти"
                                    sectionProjects={architecture}
                                    endpoint={"technical-projects"}
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
                                    title="заснемане на сгради"
                                    sectionProjects={existing}
                                    endpoint={"technical-projects"}
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
                                    title="реконструкция и преустройство"
                                    sectionProjects={reconstruction}
                                    endpoint={"technical-projects"}
                                />
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                lg={3}
                            >
                                <ProjectCoverTemplate
                                    title="други"
                                    sectionProjects={other}
                                    endpoint={"technical-projects"}
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
    const architecture = await sanityClient.fetch(
        `*[_type == "technicalProject" && category == "architecture" && isProjectVisible == true]`
    )
    const existing = await sanityClient.fetch(
        `*[_type == "technicalProject" && category == "existing" && isProjectVisible == true]`
    )
    const reconstruction = await sanityClient.fetch(
        `*[_type == "technicalProject" && category == "reconstruction" && isProjectVisible == true]`
    )
    const other = await sanityClient.fetch(
        `*[_type == "technicalProject" && category == "other" && isProjectVisible == true]`
    )

    return {
        props: {
            architecture,
            existing,
            reconstruction,
            other,
        },
    }
}
