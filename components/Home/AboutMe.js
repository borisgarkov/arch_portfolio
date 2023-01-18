import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CircleIcon from '@mui/icons-material/Circle';
import { Stack } from "@mui/material";
import styles from './styles.module.css';

export default function AboutMe(props) {
    const subPoints = [
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
            path: '/programmes-icons/041-architect.svg',
            title: 'some text',
        },
        {
            path: '/programmes-icons/Group.svg',
            title: 'some text',
        },
        {
            path: '/programmes-icons/Group-1.svg',
            title: 'some text',
        },
        {
            path: '/programmes-icons/Group-2.svg',
            title: 'some text',
        },
        {
            path: '/programmes-icons/Group-4.svg',
            title: 'some text',
        },
    ]

    return (
        <Box sx={{
            backgroundImage: "url('/programmes-icons/background.webp')",
            padding: '50px'
        }}>
            <Typography variant="h3" sx={{
                textAlign: 'center',
                margin: '40px 0'
            }}>
                За мен ...
            </Typography>

            <Stack sx={{
                flexDirection: { xs: 'column', lg: 'row' },
                gap: 5,
                alignItems: 'center',
            }}>
                <Avatar
                    alt="Nikoleta"
                    src="/programmes-icons/profile.jpg"
                    sx={{ width: 150, height: 150 }}
                />
                <Stack sx={{
                    alignItems: 'flex-start',
                }}>
                    {
                        subPoints.map(point => {
                            return (
                                <Stack sx={{
                                    flexDirection: 'row',
                                    alignItems: 'baseline',
                                    justifyContent: 'center',
                                    gap: 2
                                }}>

                                    <img src="/programmes-icons/icons8-greek-pillar.png"
                                        alt='icon' width='17' height='17' />
                                    <Typography variant="h6" sx={{
                                        textAlign: 'center',
                                    }}>
                                        {point}
                                    </Typography>
                                </Stack>
                            )
                        })
                    }
                </Stack>
            </Stack>

            <Stack sx={{
            }}>
                <Typography variant="h5" sx={{ margin: '15px 0', fontWeight: 'bold' }}>
                    Дейности
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '250px', lg: '250px 250px 250px' },
                    gap: 2
                }}>
                    {
                        activities.map(skill => {
                            return (
                                <Stack key={skill.title} sx={{
                                    padding: 1,
                                }}>
                                    <img src={skill.path} alt='icon' width='70' height='70' />
                                    {skill.title}
                                </Stack>
                            )
                        })
                    }
                </Box>
            </Stack>

            <Stack sx={{
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
            </Stack>
        </Box>
    )
}