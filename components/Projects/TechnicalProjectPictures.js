import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

import urlFor from "../../utils/sanityImageBuilder"
import styles from "./project-page.module.css"
import { useState } from "react"
import useScreenResolution from "../../hooks/useScreenResolution"

export default function TechnicalProjectPictures({ pictures }) {
    const isMobile = useScreenResolution("sm")

    const [currentPicIndex, setCurrentPicIndex] = useState(0)

    const goToNextPic = () => {
        if (currentPicIndex + 1 >= pictures.length) {
            return
        }

        setCurrentPicIndex((prev) => prev + 1)
    }

    const goToPrevPic = () => {
        if (currentPicIndex - 1 < 0) {
            return
        }

        setCurrentPicIndex((prev) => prev - 1)
    }

    const handleClickOnSmallImg = (indx) => {
        setCurrentPicIndex(indx)
    }

    return (
        <Grid
            item
            xs={12}
            lg={8}
            sx={{
                padding: { xs: "15px", lg: "40px" },
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "36px",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                }}
            >
                <IconButton
                    sx={{
                        position: "absolute",
                        top: "50%",
                        transform: "translate(20%, -50%)",
                    }}
                    onClick={goToPrevPic}
                >
                    <ArrowBackIosNewIcon fontSize={isMobile ? "small" : "large"} />
                </IconButton>
                <img
                    src={urlFor(pictures[currentPicIndex]).url()}
                    alt="project-img"
                    className={styles.techProjImg}
                />
                <IconButton
                    sx={{
                        position: "absolute",
                        top: "50%",
                        transform: "translate(-120%, -50%)",
                    }}
                    onClick={goToNextPic}
                >
                    <ArrowForwardIosIcon fontSize={isMobile ? "small" : "large"} />
                </IconButton>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: "16px",
                    width: "90%",
                    margin: "0 auto",
                    // maxWidth: { sm: "100%", lg: "900px" },
                    overflow: "scroll",
                    overflowY: "hidden",
                    scrollbarWidth: "thin",
                }}
            >
                {pictures.map((pic, indx) => (
                    <img
                        key={pic._key}
                        src={urlFor(pic).url()}
                        alt="project-img"
                        className={styles.smallTechPic}
                        onClick={() => {
                            handleClickOnSmallImg(indx)
                        }}
                    />
                ))}
            </Box>
        </Grid>
    )
}
