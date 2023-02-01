import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircleIcon from '@mui/icons-material/Circle';
import { Stack } from "@mui/material";
import styles from './aboutme-styles.module.css';
import { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function AboutMe(props) {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    const animationSettings = {
        animationTimingFunction: 'ease-out',
        animationDuration: '1.5s',
        animationFillMode: 'forwards',
    };

    const skills = [
        {
            path: '/programmes-icons/archicad.png',
            title: 'Archicad'
        },
        {
            path: '/programmes-icons/autocad.png',
            title: 'Autocad'
        },
        {
            path: '/programmes-icons/lumoin.png',
            title: 'Lumoin'
        },
        {
            path: '/programmes-icons/office.png',
            title: 'Microsoft Office'
        },
        {
            path: '/programmes-icons/photoshop.png',
            title: 'Photoshop'
        },
        {
            path: '/programmes-icons/sketchup.png',
            title: 'Sketchup'
        },
        {
            path: '/programmes-icons/twinmotion.png',
            title: 'Twinmotion'
        },
    ];

    const activities = [
        {
            path: '/aboutme/3.png',
            title: 'Архитектурни проекти',
        },
        {
            path: '/aboutme/2.png',
            title: 'Заснемане на сгради',
        },
        {
            path: '/aboutme/6.png',
            title: 'Проекти за реконструкция и преустройство',
        },
        {
            path: '/aboutme/4.png',
            title: 'Интериорни проекти',
        },
        {
            path: '/aboutme/5.png',
            title: 'Фасадни решения',
        },
        {
            path: '/aboutme/1.png',
            title: '3D проекти',
        },
    ]

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
                }} >
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
                    height: '550px',
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
                            gap: 2,
                            marginTop: '27px',
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
                            activities.map((skill) => {
                                return (
                                    <Stack
                                        key={skill.title}
                                        sx={{
                                            padding: 1,
                                        }}
                                    >
                                        <img src={skill.path} alt='icon' width='50' height='50' />
                                        <Typography>
                                            {skill.title}
                                        </Typography>
                                    </Stack>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Box>
        </Box >
    )
};