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

export default function AboutMe() {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);
    const router = useRouter();

    const animationSettings = {
        animationTimingFunction: 'ease-out',
        animationDuration: '1.5s',
        animationFillMode: 'forwards',
    };

    const profilePicStyleProps = {
        width: 355.87,
        height: 250,
        position: 'relative',
        top: '50px',
        right: '100px',
        boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.6)',
    };

    return (
        <Box sx={{
            padding: '0 80px',
            width: '100%',
            height: '825px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <Box
                sx={{
                    backgroundColor: '#858585',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                }}
            >
                <Box sx={{
                    backgroundColor: '#f3ede9',
                    width: '459px',
                    height: '680px',
                    padding: 8,
                    position: 'relative',
                    top: '100px',
                    left: '20px',
                    zIndex: 1,
                }}>
                    <Typography variant="h4" ref={ref} style={
                        isVisible ? {
                            animation: 'someWordsAboutMe',
                            ...animationSettings
                        } : {
                            opacity: '0'
                        }
                    }>
                        Няколко думи за мен ...
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: 2, }} style={
                        isVisible ? {
                            animation: 'someWordsAboutMe',
                            ...animationSettings
                        } : {
                            opacity: '0'
                        }
                    }>
                        Университет по архитектура, строителство и геодезия, випуск 2022
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: 1, }} style={
                        isVisible ? {
                            animation: 'someWordsAboutMe',
                            ...animationSettings
                        } : {
                            opacity: '0'
                        }
                    }>
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
                        style={
                            isVisible ? {
                                animation: 'someWordsAboutMe',
                                ...animationSettings
                            } : {
                                opacity: '0'
                            }
                        }
                    >
                        <Typography className={styles.seeMoreText}>
                            Виж повече
                        </Typography>
                        <ArrowForwardIosIcon className={styles.arrowIcon} sx={{ width: '15px', height: '15px' }} />
                    </Stack>

                    <img
                        src="/aboutme/profile.jpg"
                        alt='my-pic'
                        style={
                            isVisible ? {
                                ...profilePicStyleProps,
                                animation: 'profilePicMainPagefadeIn',
                                ...animationSettings,
                            } : {
                                opacity: 0
                            }
                        }
                    />
                </Box>

                <Box sx={{
                    backgroundColor: '#e5ddd4',
                    width: '559px',
                    height: '100%',
                    padding: 8,
                    position: 'relative',
                    top: '50px',
                    zIndex: 2,
                }} >
                    <Typography variant="h4" style={
                        isVisible ? {
                            animation: 'activitiesTextMainPage',
                            ...animationSettings
                        } : {
                            opacity: '0'
                        }
                    }>
                        Дейности
                    </Typography>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '250px', lg: '250px 250px' },
                            justifyContent: 'center',
                            gap: 2,
                            // marginTop: '27px',
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
            </Box>
        </Box >
    )
};