import { Divider, Grid, Typography, Stack, Box, Zoom, Fade } from '@mui/material';
import Navigation from '../components/Navigation/Navigation';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import useScreenResolution from '../hooks/useScreenResolution';
import useOnScreen from '../hooks/useOnScreen';
import { useRef } from 'react';

export default function CV(props) {
    const isMobile = useScreenResolution('lg');

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    const animationSettings = {
        animationTimingFunction: 'ease-out',
        animationDuration: '1.5s',
        animationFillMode: 'forwards',
    };

    const titlesStyle = {
        textTransform: 'uppercase',
        marginBottom: 2,
        marginTop: 5,
        fontWeight: 'bold',

    };

    const subsectionStyle = {
        fontWeight: 'bold',
    }

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
            title: 'MS Office (Word, Excel)',
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
            icon: <Diversity3OutlinedIcon sx={{ width: '15px', height: '15px', color: '#858585' }} />,
        },
        {
            title: 'Инициативност',
            icon: <AutoFixHighOutlinedIcon sx={{ width: '15px', height: '15px', color: '#858585' }} />,
        },
    ];

    const contests = [
        [
            'Участие в архитектурен конкурс в памет на арх. Димитър Богданов - 2021г.',
            'Награда за най-много харесвания във Facebook.'
        ],
        [
            'Участие в архитектурен конкурс в памет на арх. Димитър Богданов - 2020г.'
        ],
        [
            'Участие в конкурс „Академия ГРАДЪТ 2020.',
            'Идеен проект за сгради и вътрешни пространства:',
            'Спортно училище и идеен проект за публичните пространства на София „Квартал 398“.'
        ],
        [
            'Участие в конкурс за зална сграда на BAUMIT 2018 / 2019г.'
        ],
    ];

    const backgroundScetchImageStyle = {
        width: '800px',
        position: 'absolute',
        right: '5%',
    };

    return (
        <Navigation>
            <Box sx={{ overflow: 'hidden', position: 'relative' }} ref={ref}>
                <Fade in timeout={1000}>
                    <Stack sx={{ width: '90%', margin: '50px auto' }}>
                        <Typography variant='h3'>Николета Иванова</Typography>
                        <Typography variant='h4'>Архитект</Typography>
                    </Stack>
                </Fade>

                <Grid container sx={{ width: '90%', margin: '0 auto', }}>
                    <Grid item xs={12} lg={2} style={
                        isVisible ? {
                            animation: 'CVleftSide',
                            ...animationSettings
                        } : {
                            opacity: '0'
                        }
                    }>
                        <Typography variant='h5' sx={{ ...titlesStyle }}>Лична информация</Typography>

                        <Stack sx={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 1,
                        }}>
                            <AlternateEmailOutlinedIcon fontSize='small' sx={{ color: '#858585' }} />
                            <Typography variant='h6' sx={{ fontSize: '1rem' }}>
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
                                    <img src={skill.icon} alt={skill.icon} width='15' height='15' />
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
                                    <img src={lang.icon} alt={lang.icon} width='15' height='15' />
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

                    </Grid>

                    <Divider flexItem orientation='vertical' />

                    <Grid item xs={12} lg={7} sx={{ paddingLeft: { lg: 5 } }} style={
                        isVisible ? {
                            animation: 'CVrightSide',
                            ...animationSettings
                        } : {
                            opacity: '0'
                        }
                    }>
                        <Typography variant='h5' sx={{ ...titlesStyle }}>Професионален опит</Typography>

                        <Stack sx={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 1,
                            marginTop: 2,
                        }}>
                            <WorkOutlineOutlinedIcon fontSize='small' sx={{ color: '#858585' }} />
                            <Typography variant='h6' sx={{ ...subsectionStyle }}>Архитект</Typography>
                        </Stack>
                        <Typography variant='h6' sx={{}}>AZ+Partners, гр. София</Typography>
                        <Typography variant='h6' sx={{}}>02.2022г. - до момента</Typography>

                        <Stack sx={{
                            flexDirection: 'row',
                            alignItems: 'baseline',
                            gap: 1,
                            marginTop: 2,
                        }}>
                            <WorkOutlineOutlinedIcon fontSize='small' sx={{ color: '#858585' }} />
                            <Typography variant='h6' sx={{ ...subsectionStyle }}>
                                Стаж: Направление &quot;Архитектура, Строителство и Геодезия&quot; Общинска администрация
                            </Typography>
                        </Stack>
                        <Typography variant='h6' sx={{}}>Община Челопеч, с. Челопеч</Typography>
                        <Typography variant='h6' sx={{}}>Август 2021г.</Typography>

                        <Stack sx={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 1,
                            marginTop: 2,
                        }}>
                            <WorkOutlineOutlinedIcon fontSize='small' sx={{ color: '#858585' }} />
                            <Typography variant='h6' sx={{ ...subsectionStyle }}>
                                Стажант архитект
                            </Typography>
                        </Stack>
                        <Typography variant='h6' sx={{}}>HADDAD studio, гр. София</Typography>
                        <Typography variant='h6' sx={{}}>Студентска практика към МОН</Typography>
                        <Typography variant='h6' sx={{}}>2020г.</Typography>
                        <Typography variant='h6' sx={{}}>Развиване на уменията в областта на Интериорния дизайн</Typography>

                        <Stack sx={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 1,
                            marginTop: 2,
                        }}>
                            <WorkOutlineOutlinedIcon fontSize='small' sx={{ color: '#858585' }} />
                            <Typography variant='h6' sx={{ ...subsectionStyle }}>
                                Технически асистент
                            </Typography>
                        </Stack>
                        <Typography variant='h6' sx={{}}>&quot;Дънди Прешъс Металс Челопеч&quot;, с. Челопеч</Typography>
                        <Typography variant='h6' sx={{}}>10/07/2019г. - 14/09/2019г.</Typography>
                        <Typography variant='h6' sx={{}}>Придобити умения в сферата на технологиите, комуникациите и работата в екип.</Typography>

                        <Typography variant='h5' sx={{ ...titlesStyle }}>Образование</Typography>
                        <Stack sx={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 1,
                            marginTop: 2,
                        }}>
                            <SchoolOutlinedIcon fontSize='small' sx={{ color: '#858585' }} />
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                                Студент по архитектура, УАСГ, гр. София
                            </Typography>
                        </Stack>
                        <Typography variant='h6' sx={{}}>19/09/2016 - 25/01/2022</Typography>

                        <Stack sx={{
                            flexDirection: 'row',
                            alignItems: 'baseline',
                            gap: 1,
                            marginTop: 2,
                        }}>
                            <SchoolOutlinedIcon fontSize='small' sx={{ color: '#858585' }} />
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                                Участник в Дружеството &quot;БалканАРХитрав&quot; - Лятно архитектурно училище
                            </Typography>
                        </Stack>
                        <Typography variant='h6'>2019г., 2020г., 2021г.</Typography>
                        <Typography variant='h6'>Усъвършенстване на уменията в областта на архитектурата и работата в екип.</Typography>

                        <Stack sx={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 1,
                            marginTop: 2,
                        }}>
                            <SchoolOutlinedIcon fontSize='small' sx={{ color: '#858585' }} />
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                                &quot;ЧПГЧО Челопеч&quot;, с. Челопеч
                            </Typography>
                        </Stack>
                        <Typography variant='h6' sx={{}}>2011 - 2016</Typography>

                        <Typography variant='h5' sx={{ ...titlesStyle }}>Конкурси</Typography>
                        {
                            contests.map(contest => (
                                <Stack
                                    key={contest[0]}
                                    sx={{
                                        flexDirection: 'row',
                                        alignItems: 'baseline',
                                        gap: 1,
                                        marginBottom: 1,
                                    }}>
                                    <img src='/cv/prize.png' alt='prize' width='15' height='15' />
                                    <Stack>
                                        {
                                            contest.map(c => (
                                                <Typography key={c} variant='h6'>{c}</Typography>
                                            ))
                                        }
                                    </Stack>
                                </Stack>
                            ))
                        }
                    </Grid>

                    {
                        !isMobile && <img
                            src='/cv/backgroundScetchImage.png'
                            alt=""
                            style={
                                isVisible ? {
                                    animation: 'CVbackgroundPic',
                                    ...animationSettings,
                                    ...backgroundScetchImageStyle,
                                } : {
                                    opacity: '0'
                                }
                            }
                        />
                    }

                </Grid>
            </Box>
        </Navigation>
    )
};