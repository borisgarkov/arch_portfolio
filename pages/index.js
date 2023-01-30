import Box from "@mui/material/Box";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../components/IntroPage/intro-styles.module.css';

export default function Home(props) {
    const router = useRouter();

    const backgroundColor = '#858585';

    return (
        <Box sx={{
            backgroundColor: backgroundColor,
            position: 'relative',
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
        }}>

            <img
                src='/home-logo/4.png'
                alt="logo"
                style={{
                    width: '100%',
                    position: 'absolute',
                    zIndex: 5
                }}
            />
            <img
                src='/home-logo/1.png'
                alt="logo"
                style={{
                    width: '100%',
                    position: 'absolute',
                    zIndex: 3
                }}
            />
            <img
                src='/home-logo/2.png'
                alt="logo"
                style={{
                    width: '100%',
                    position: 'absolute',
                    zIndex: 1
                }}
            />
            <img
                src='/home-logo/3.png'
                alt="logo"
                style={{
                    width: '100%',
                    position: 'absolute',
                    zIndex: 0
                }}
            />

            <Box className={styles.slidein} sx={{
                backgroundColor: backgroundColor,
                position: 'absolute',
                height: '100%',
                width: '100%',
                zIndex: 6
            }}>
            </Box>
            <Box className={styles.secondSlidein} sx={{
                backgroundColor: backgroundColor,
                position: 'absolute',
                height: '100%',
                width: '100%',
                zIndex: 4
            }}>
            </Box>
            <Box className={styles.upSlidein} sx={{
                backgroundColor: backgroundColor,
                position: 'absolute',
                height: '100%',
                width: '100%',
                zIndex: 2
            }}>
            </Box>

            <Box onClick={() => router.push('/home')} sx={{
                backgroundColor: '#ffffff',
                padding: 2,
                cursor: 'pointer',
                zIndex: 7,
                color: '#6d6d6d',
                position: 'absolute',
                bottom: '20%',
                left: '20%',
            }}>
                КЪМ ПОРТФОЛИО
            </Box>
        </Box>
    )
};

// #f3ede9
// #e5ddd4