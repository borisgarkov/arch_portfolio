import Box from "@mui/material/Box";
import styles from '../project-page.module.css';

const BigImageContainer = ({ image }) => {
    return (
        <Box className={styles.imgBigContainer}>
            <img
                src={image}
                alt='project-img'
                className={styles.projectImg}
            />
        </Box>
    )
};

export default BigImageContainer