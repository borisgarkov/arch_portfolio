import Grid from "@mui/material/Grid";
import Image from "next/image";
import styles from '../project-page.module.css';

const SmallImageContainer = ({ image }) => {
    return (
        <Grid item xs={12} lg={4} className={styles.imgSmallContainer}>
            <img
                src={image}
                alt='project-img'
                // width={300}
                // height={300}
                className={styles.projectImg}
            />
        </Grid>
    )
};

export default SmallImageContainer