import Box from "@mui/material/Box";
import { imageBox } from "./iconsStyles";
import styles from './styles.module.css';

export default function IconImageFrame({ activity }) {
    const additionalStyle =
        activity.reverse
            ? { left: '-30px' }
            : { marginLeft: 'auto', right: '-30px' };

    return (
        <Box sx={{
            ...imageBox
            // ...additionalStyle,
        }}>
            <img src={activity.image} alt='icon' className={styles.image} />
        </Box>
    )
};