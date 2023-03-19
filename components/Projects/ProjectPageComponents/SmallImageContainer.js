import Box from "@mui/material/Box";
import Image from "next/image";
import styles from '../project-page.module.css';

const SmallImageContainer = ({ image }) => {
    return (
        <Box className={styles.imgSmallContainer}>
            <Image
                src={image}
                alt='project-img'
                width={300}
                height={300}
                className={styles.projectImg}
            />
        </Box>
    )
};

export default SmallImageContainer