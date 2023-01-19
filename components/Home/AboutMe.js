import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircleIcon from '@mui/icons-material/Circle';
import { Stack } from "@mui/material";
import styles from './styles.module.css';
import { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";

export default function AboutMe(props) {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    const pointsAboutMe = [
        'Николета Пл. Иванова',
        'Университет по архитектура, строителство и геодезия, випуск 2022',
        'Катедра: Градоустройство',
    ];

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
            path: '/programmes-icons/Group.svg',
            title: 'Проектиране на сгради',
        },
        {
            path: '/programmes-icons/Group-1.svg',
            title: 'Заснемане на сгради',
        },
        {
            path: '/programmes-icons/041-architect.svg',
            title: 'Интериорни проекти',
        },
        {
            path: '/programmes-icons/Group-4.svg',
            title: 'Фасадни решения',
        },
        {
            path: '/programmes-icons/Group-2.svg',
            title: '3D визуализации',
        },
    ]

    return (
        <Box
            ref={ref}
            sx={{
                padding: '50px'
            }}
        >
            <Stack sx={{
                flexDirection: { xs: 'column', lg: 'row' },
                margin: '0 auto',
                justifyContent: 'space-evenly'
            }}>
                <Box
                    style={
                        isVisible ?
                            {
                                animationName: 'fadeRight',
                                animationTimingFunction: 'ease-out',
                                animationDuration: '1.5s',
                                animationFillMode: 'backwards',
                            }
                            : { opacity: 0 }
                    }
                    sx={{
                        position: 'relative',
                        margin: '100px 0',
                    }}
                >
                    <img
                        src="/programmes-icons/profile.jpg"
                        alt='my-pic'
                        style={{
                            width: 355.87,
                            height: 250,
                            borderRadius: '5px',
                        }}
                    />
                    <Box sx={{
                        backgroundColor: '#e0e2e1',
                        height: '400px',
                        width: '350px',
                        position: 'absolute',
                        zIndex: '-1',
                        top: -100,
                        left: 30,
                        borderRadius: '5px',
                    }} />
                </Box>

                <Stack
                    sx={{
                        gap: 2
                    }}
                >
                    <Typography variant="h2">
                        Няколко думи за мен ...
                    </Typography>

                    <Stack
                        sx={{
                            alignItems: 'flex-start',
                        }}>
                        {
                            pointsAboutMe.map(point => {
                                return (
                                    <Stack key={point} sx={{
                                        flexDirection: 'row',
                                        alignItems: 'baseline',
                                        justifyContent: 'center',
                                        gap: 2
                                    }}>
                                        <img src="/programmes-icons/icons8-greek-pillar.png"
                                            alt='icon' width='17' height='17' />
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                textAlign: 'left',
                                            }}
                                        >
                                            {point}
                                        </Typography>
                                    </Stack>
                                )
                            })
                        }
                    </Stack>

                    <Typography variant="h5" sx={{ margin: '15px 0', fontWeight: 'bold' }}>
                        Дейности
                    </Typography>

                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '250px', lg: '250px 250px 250px' },
                    }}>
                        {
                            activities.map((skill, index) => {
                                const animationDelay = index - 0.6;

                                return (
                                    <Stack
                                        key={skill.title}
                                        sx={{
                                            padding: 1,
                                        }}
                                    // style={
                                    //     isVisible ?
                                    //         {
                                    //             animationName: 'fadeDown',
                                    //             animationTimingFunction: 'ease-out',
                                    //             animationDuration: '0.7s',
                                    //             animationDelay: `${animationDelay}s`,
                                    //             animationFillMode: 'backwards',
                                    //         }
                                    //         : { opacity: 0 }
                                    // }
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
                </Stack>
            </Stack >



            {/* <Stack sx={{
                justifyContent: 'center',
            }}>
                <Typography variant="h5" sx={{ margin: '15px 0', fontWeight: 'bold' }}>
                    Софтуерни умения
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '250px', lg: '250px 250px 250px 250px' },
                    gap: 2
                }}>
                    {
                        skills.map(skill => {
                            return (
                                <Stack key={skill.title} sx={{
                                    flexDirection: 'row',
                                    gap: 1,
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    border: '1px solid black',
                                    borderRadius: '16px',
                                    padding: 1,
                                    height: '48px',
                                    backgroundColor: '#f5f5f5',
                                }}>
                                    <img src={skill.path} alt='icon' width='16' height='16' />
                                    {skill.title}
                                </Stack>
                            )
                        })
                    }
                </Box>

                <Typography variant="h5" sx={{
                    textAlign: 'center',
                    maxWidth: '200px',
                    padding: 0.5,
                    transition: 'transform 0.5s',
                    cursor: 'pointer',
                    '&:hover': {
                        transform: 'scale(1.1)'
                    },
                    margin: '50px auto',
                }}>
                    Виж още ...
                </Typography>
            </Stack> */}
        </Box >
    )
}