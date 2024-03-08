import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Fade from "@mui/material/Fade"
import Slide from "@mui/material/Slide"
import programsPictureMapping from "./programsPictureMapping"
import Image from "next/image"
import useScreenResolution from "../../hooks/useScreenResolution"
import GoBackButton from "./GoBackButton"
import ProjectImages from "./ProjectImages"
import styles from "../PersonalInfo/styles.module.css"
import { projectType } from "./projectsConstants"
import TechnicalProjectPictures from "./TechnicalProjectPictures"

export default function ProjectPageTemplate({ project, goBackButtonText, type }) {
    const isMobile = useScreenResolution("lg")

    const goBackLink = type === projectType.TECHNICAL_PROJECT ? "/technical-projects" : "/student-projects"

    const extraLargeTextSize = { fontSize: { xl: "1vw" } }

    return (
        <Grid
            container
            sx={{
                marginTop: 5,
                minHeight: "calc(100vh - 144px)",
            }}
        >
            <Grid
                item
                lg={4}
                sx={{
                    padding: 5,
                    borderRight: { lg: "1px solid black" },
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        marginBottom: 5,
                        display: "inline-block",
                    }}
                >
                    <Slide
                        in
                        timeout={1000}
                        direction="right"
                    >
                        <Box
                            sx={{
                                borderTop: "2px solid black",
                                marginBottom: 3,
                                width: "50%",
                            }}
                        />
                    </Slide>
                    <Typography
                        variant="h5"
                        sx={{ textTransform: "uppercase", ...extraLargeTextSize }}
                    >
                        {project.title}
                    </Typography>
                </Box>

                {project.content.map((text) => (
                    <Typography
                        // variant="h6"
                        key={text}
                        sx={{ textAlign: "justify", ...extraLargeTextSize }}
                    >
                        {text}
                    </Typography>
                ))}

                {project.album && (
                    <a
                        href={project.album.asset.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        style={{
                            marginTop: "40px",
                            marginBottom: "16px",
                            width: "50%",
                            ...extraLargeTextSize,
                        }}
                    >
                        Виж повече за проекта...
                    </a>
                )}

                <Typography
                    sx={{
                        marginTop: 5,
                        marginBottom: 2,
                        ...extraLargeTextSize,
                    }}
                >
                    ИЗПОЛЗВАНИ ПРОГРАМИ
                </Typography>

                <Stack
                    sx={{
                        flexDirection: "row",
                        gap: 2,
                    }}
                >
                    {project.programmes.map((program, index) => {
                        return (
                            <Fade
                                in
                                timeout={1000}
                                style={{ transitionDelay: `${index * 400}ms` }}
                                key={program}
                            >
                                <Stack
                                    sx={{
                                        flexDirection: "column",
                                        gap: 1,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "50%",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            border: "1px solid black",
                                            borderRadius: "50%",
                                            backgroundColor: "black",
                                            height: "32px",
                                            width: "32px",
                                            overflow: "hidden",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Image
                                            src={programsPictureMapping[program.toLowerCase().trim()]}
                                            alt="icon"
                                            width="20"
                                            height="20"
                                        />
                                    </Box>
                                    <Typography sx={{}}>{program}</Typography>
                                </Stack>
                            </Fade>
                        )
                    })}
                </Stack>

                {!isMobile && (
                    <GoBackButton
                        goBackButtonText={goBackButtonText}
                        goBackLink={goBackLink}
                    />
                )}
            </Grid>

            {type === projectType.TECHNICAL_PROJECT ? (
                <TechnicalProjectPictures pictures={project.pictures} />
            ) : (
                <ProjectImages pictures={project.pictures} />
            )}

            {isMobile && (
                <Grid
                    item
                    xs={12}
                    sx={{ padding: "0 40px 40px" }}
                >
                    <GoBackButton
                        goBackButtonText={goBackButtonText}
                        goBackLink={goBackLink}
                    />
                </Grid>
            )}
        </Grid>
    )
}
