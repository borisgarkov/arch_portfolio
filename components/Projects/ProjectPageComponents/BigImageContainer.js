import Grid from "@mui/material/Grid"
import Image from "next/image"
import styles from "../project-page.module.css"

const BigImageContainer = ({ image }) => {
    return (
        <Grid
            item
            xs={12}
            lg={12}
            className={styles.imgBigContainer}
        >
            <img
                src={image}
                alt="project-img"
                // width={500}
                // height={300}
                className={styles.projectImg}
            />
        </Grid>
    )
}

export default BigImageContainer
