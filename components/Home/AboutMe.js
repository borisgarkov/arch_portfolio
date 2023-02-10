import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import styles from './aboutme-styles.module.css';
import { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import activities from '../Activities/activities.json';
import IconImageFrame from "../Activities/IconImageFrame";
import { useRouter } from "next/router";

const animationSettings = {
    animationTimingFunction: 'ease-out',
    animationDuration: '1.5s',
    animationFillMode: 'forwards',
};

const SomeWordsAboutMeSection = () => {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    return (
        <Box sx={{
            backgroundColor: 'mainPage.secondary',
            width: '459px',
            height: '680px',
            padding: 8,
            position: 'relative',
            top: '100px',
            left: '20px',
            zIndex: 1,
        }}>
            <Box
                ref={ref}
                style={
                    isVisible ? {
                        animation: 'someWordsAboutMe',
                        ...animationSettings
                    } : {
                        opacity: '0'
                    }
                }
            >
                <Typography variant="h4">
                    Няколко думи за мен ...
                </Typography>

                <Typography variant="h6" sx={{ marginTop: 2, }}>
                    Университет по архитектура, строителство и геодезия, випуск 2022
                </Typography>

                <Typography variant="h6" sx={{ marginTop: 1, }}>
                    Катедра: Градоустройство
                </Typography>

                <Stack
                    onClick={() => router.push('/personal-info')}
                    className={styles.seeMoreContainer}
                    sx={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 2,
                        gap: 1,
                        cursor: 'pointer',
                    }}
                >
                    <Typography className={styles.seeMoreText}>
                        Виж повече
                    </Typography>
                    <ArrowForwardIosIcon className={styles.arrowIcon} sx={{ width: '15px', height: '15px' }} />
                </Stack>
            </Box>

            <img
                src="/aboutme/profile.jpg"
                alt='my-pic'
                style={
                    isVisible ? {
                        width: 355.87,
                        height: 250,
                        position: 'relative',
                        top: '50px',
                        right: '100px',
                        boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.6)',
                        animation: 'profilePicMainPagefadeIn',
                        ...animationSettings,
                    } : {
                        opacity: 0
                    }
                }
            />
        </Box>
    )
};

const ActivitiesSection = () => {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);
    const router = useRouter();

    return (
        <Box sx={{
            backgroundColor: 'mainPage.main',
            width: '559px',
            height: '100%',
            padding: 8,
            position: 'relative',
            top: '40px',
            zIndex: 2,
        }} >
            <Typography
                ref={ref}
                variant="h4"
                style={
                    isVisible ? {
                        animation: 'activitiesTextMainPage',
                        ...animationSettings
                    } : {
                        opacity: '0'
                    }
                }
            >
                Дейности
            </Typography>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '250px', lg: '250px 250px' },
                    justifyContent: 'center',
                    gap: 2,
                }}
                style={
                    isVisible ? {
                        animation: 'activitiesTextMainPage',
                        ...animationSettings
                    } : {
                        opacity: '0'
                    }
                }
            >
                {
                    Object.values(activities).map((activity) =>
                        <Stack
                            onClick={() => router.push('/activities')}
                            key={activity.title}
                            sx={{
                                alignItems: 'center',
                            }}
                            className={styles.iconsContainer}
                        >
                            <IconImageFrame activity={activity} />
                            <Typography sx={{
                                textAlign: 'center',
                                position: 'relative',
                                top: '-20px',
                            }}>
                                {activity.title}
                            </Typography>

                        </Stack>
                    )
                }
            </Box>
        </Box>
    )
};

export default function AboutMe() {

    return (
        <Box sx={{
            padding: '0 80px',
            width: '100%',
            // height: { lg: '825px' },
            position: 'relative',
            overflow: 'hidden',
        }}>
            <Box
                // className={styles.aboutMe}
                sx={{
                    backgroundImage: 'url(/aboutme/backgroundImage.jpeg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                }}
            >
                <SomeWordsAboutMeSection />
                <ActivitiesSection />
            </Box>
        </Box >
    )
};