import Box from "@mui/material/Box";
import styles from '../project-page.module.css';

const SmallImageContainer = ({ image }) => {
    return (
        <Box className={styles.imgSmallContainer}>
            <img
                src={image}
                alt='project-img'
                className={styles.projectImg}
            />
        </Box>
    )
};

export default SmallImageContainer