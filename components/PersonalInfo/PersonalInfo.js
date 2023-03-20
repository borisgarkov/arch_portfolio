import { Box, Stack, Typography } from "@mui/material";
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import { titlesStyle } from "./commonStyle";
import Image from "next/image";

export default function PersonalInfo() {

    const softwareSkills = [
        {
            title: 'Archicad',
            icon: '/programmes-icons/archicad.png',
        },
        {
            title: 'Autocad',
            icon: '/programmes-icons/autocad.png',
        },
        {
            title: 'Lumion',
            icon: '/programmes-icons/lumoin.png',
        },
        {
            title: 'Twinmotion',
            icon: '/programmes-icons/twinmotion.png',
        },
        {
            title: 'MS Power Point',
            icon: '/programmes-icons/office.png',
        },
        {
            title: 'Photoshop',
            icon: '/programmes-icons/photoshop.png',
        },
        {
            title: 'Sketchup',
            icon: '/programmes-icons/sketchup.png',
        },
    ];

    const languages = [
        {
            title: 'Български',
            icon: '/cv/bulgaria.png',
        },
        {
            title: 'Английски',
            icon: '/cv/united-kingdom.png',
        },
    ];

    const otherSkills = [
        {
            title: 'Работа в екип',
            icon: <Diversity3OutlinedIcon
                sx={{ width: '15px', height: '15px', color: '#858585' }} />,
        },
        {
            title: 'Инициативност',
            icon: <AutoFixHighOutlinedIcon
                sx={{ width: '15px', height: '15px', color: '#858585' }} />,
        },
    ];

    return (
        <Box>
            <Typography variant='h5' sx={{ ...titlesStyle }}>
                Лична информация
            </Typography>

            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1,
            }}>
                <AlternateEmailOutlinedIcon fontSize='small' sx={{ color: '#858585' }} />
                <Typography variant='h6'>
                    nikoleta.pl.ivanova@gmail.com
                </Typography>
            </Stack>

            <Typography variant='h5' sx={{ ...titlesStyle }}>Софтуери</Typography>

            {
                softwareSkills.map(skill => (
                    <Stack
                        key={skill.title}
                        sx={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 1,
                        }}>
                        <Box sx={{
                            border: '1px solid black',
                            borderRadius: '50%',
                            backgroundColor: 'black',
                            height: '25px',
                            width: '25px',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image
                                src={skill.icon}
                                alt={skill.icon}
                                width='15'
                                height='15'
                                style={{
                                    width: skill.title === 'Twinmotion' ? '20px' : '15px',
                                    height: skill.title === 'Twinmotion' ? '20px' : '15px',
                                }}
                            />
                        </Box>
                        <Typography variant='h6'>{skill.title}</Typography>
                    </Stack>
                ))
            }

            <Typography variant='h5' sx={{ ...titlesStyle }}>Езици</Typography>
            {
                languages.map(lang => (
                    <Stack
                        key={lang.title}
                        sx={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 1,
                        }}>
                        <Image src={lang.icon} alt={lang.icon} width='15' height='15' />
                        <Typography variant='h6'>{lang.title}</Typography>
                    </Stack>
                ))
            }

            <Typography variant='h5' sx={{ ...titlesStyle }}>Сертификати</Typography>
            <Typography variant='h6'>...</Typography>

            <Typography variant='h5' sx={{ ...titlesStyle }}>Други умения</Typography>
            {
                otherSkills.map(skill => (
                    <Stack
                        key={skill.title}
                        sx={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 1,
                        }}>
                        {skill.icon}
                        <Typography variant='h6'>{skill.title}</Typography>
                    </Stack>
                ))
            }
        </Box>
    )
}