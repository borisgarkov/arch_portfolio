import Box from "@mui/material/Box";
import styles from './styles.module.css';
import Image from "next/image";
import frame from '../../public/activities/frame.png';
import useScreenResolution from "../../hooks/useScreenResolution";

export default function IconImageFrame({ activity }) {
    const isMobile = useScreenResolution('lg');

    return (
        <Box sx={{
            opacity: 0.7,
            width: '170px',
            height: '170px',
            position: 'relative',
            marginLeft: !isMobile && !activity.reverse ? 'auto' : null
        }}>
            <Image
                src={frame}
                alt='frame'
                priority
                fill
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