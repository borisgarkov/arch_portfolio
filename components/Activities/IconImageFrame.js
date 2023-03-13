import Box from "@mui/material/Box";
import styles from './styles.module.css';
import Image from "next/image";
import frame from '../../public/activities/frame.png';

export default function IconImageFrame({ activity }) {
    return (
        <Box sx={{
            opacity: 0.7,
            width: '170px',
            height: '170px',
            position: 'relative',
        }}>
            <Image
                src={frame}
                alt='frame'
                placeholder='blur'
                priority
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    objectFit: 'cover',
                }}
            />
            <Image
                src={activity.image}
                alt='icon'
                width={50}
                height={50}
                className={styles.image}
            />
        </Box>
    )
};