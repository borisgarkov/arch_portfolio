import Box from "@mui/material/Box";
import { imageBox } from "./iconsStyles";
import styles from './styles.module.css';

export default function IconImageFrame({ activity }) {
    return (
        <Box sx={{ ...imageBox }}>
            <img src={activity.image} alt='icon' className={styles.image} />
        </Box>
    )
};