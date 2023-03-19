import Box from "@mui/material/Box";
import Image from "next/image";
import styles from '../project-page.module.css';

const BigImageContainer = ({ image }) => {
    return (
        <Box className={styles.imgBigContainer}>
            <Image
                src={image}
                alt='project-img'
                width={500}
                height={300}
                className={styles.projectImg}
            />
        </Box>
    )
};

export default BigImageContainer