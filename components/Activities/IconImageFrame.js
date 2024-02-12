import Box from "@mui/material/Box"
import styles from "./styles.module.css"
import Image from "next/image"
import frame from "../../public/activities/frame.png"
import useScreenResolution from "../../hooks/useScreenResolution"
import urlFor from "../../utils/sanityImageBuilder"

export default function IconImageFrame({ activity, index }) {
    const isMobile = useScreenResolution("lg")

    return (
        <Box
            sx={{
                opacity: 0.7,
                width: "170px",
                height: "170px",
                position: "relative",
                marginLeft: !isMobile && index % 2 !== 0 ? "auto" : null,
            }}
        >
            <Image
                src={frame}
                alt="frame"
                priority
                fill
            />
            <Image
                src={urlFor(activity.picture).url()}
                alt="icon"
                width={50}
                height={50}
                className={styles.image}
            />
        </Box>
    )
}
