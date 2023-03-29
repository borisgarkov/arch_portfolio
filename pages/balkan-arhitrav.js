import { Box, Fade, Slide, Stack, Typography } from '@mui/material';
import Navigation from '../components/Navigation/Navigation';
import styles from '../components/BalkanArhitrav/balkaarhitrav-style.module.css';
import PageTitleTemplate from '../components/CommonComponents/PageTitleTemplate';
import Image from 'next/image';
import Seo from '../components/Seo/Seo';

export default function BalkanArhitrav() {
    const texts = [
        `Балкан АРХитрав е сдружение с нестопанска цел, чиито цели 
        са устойчиво развитие в областта на архитектурата, урбанизма,
        опазването на културното наследство, визуалните изкуства, 
        дизайна и опазване на околната среда.
        За постигане на целите си БалканАРХитрав се занимава с редица дейности, 
        сред които е и организирането на лятно училище по архитектура, което
        има за цел опознаване и валоризиране на традиционната селска 
        архитектура, както и опазване на културното наследство.`,
        `Първото лятно училище по архитектура "Поганово 2015" се 
        организира в сътрудничество и с участието на Факултета 
        по строителство и архитектура (GAF) в Ниш. 
        От 2016г. лятното училище е с международен характер. В него 
        съвместно участват също студенти и преподаватели от 
        Университета по архитектура, строителство и геодезия (УАСГ), гр. София.`,
        `По традиция програмата включва разработване на един 
        или повече проекти в рамките на една седмица, които имат 
        за цел да запазят и насърчават традиционната народна 
        архитектура като културно наследство, което представлява 
        потенциал за развитие на туризма.`
    ];

    const projectsSection = [
        {
            title: '2019г.',
            image: '/arhitrav/2019.jpeg',
            imageText: 'с.Челопеч, България - Технологичен парк в с.Челопеч',
        },
        {
            title: '2020г.',
            image: '/arhitrav/2020.jpg',
            imageText: 'с.Сенокос, Сърбия - Инсталация на входа на с.Сенокос',
        },
        {
            title: '2021г.',
            image: '/arhitrav/2021.jpeg',
            imageText: 'с.Чавдар, България - Общински център за гости в с.Чавдар',
        },
    ];

    return (
        <>
            <Seo siteMetadata={{
                title: 'БалканАРХитрам - лятна школа по архитектура',
                description: 'Balkanarhitrav summer architect school'
            }}></Seo>
            <Navigation>
                <Box sx={{
                    padding: '0 30px'
                }}>
                    <PageTitleTemplate>
                        <Typography variant='h2'>Балкан АРХитрав</Typography>
                    </PageTitleTemplate>


                    <Stack sx={{
                        flexDirection: { xs: 'column-reverse', lg: 'row' }, gap: 10,
                        alignItems: 'flex-start',
                    }}>

                        <Box sx={{ width: { xs: '100%', lg: '30%' } }}>
                            {
                                texts.map(text => (
                                    <Typography key={text} variant='h6' sx={{
                                        fontWeight: '300',
                                        marginBottom: 2,
                                        textAlign: 'justify',
                                    }}>
                                        {text}
                                    </Typography>
                                ))
                            }
                        </Box>

                        <Stack sx={{
                            width: { xs: '100%', lg: '70%' }, flexDirection: { xs: 'column', lg: 'row' },
                            position: { xs: 'static', lg: 'sticky' }, top: 100,
                            gap: { xs: 5, lg: 0 }
                        }}>
                            {
                                projectsSection.map((project, index) => (
                                    <Fade key={project.title} in timeout={1000}
                                        style={{ transitionDelay: `${index * 400}ms` }}
                                    >
                                        <Stack className={styles.projectContainer} sx={{
                                            cursor: 'pointer',
                                            width: { xs: '100%', lg: '33.33%' },
                                            padding: '0 2.6vw',
                                            borderRight: { lg: 'solid 1px #6A6A6A' },
                                            borderLeft: { lg: index === 0 ? 'solid 1px #6A6A6A' : null },
                                        }}>
                                            <Typography
                                                className={styles.textTitle}
                                                variant='h3'>
                                                {project.title}
                                            </Typography>
                                            <Typography sx={{
                                                marginTop: 2,
                                                textAlign: 'right'
                                            }}>
                                                {project.imageText}
                                            </Typography>
                                            <Box className={styles.imageContainer}>
                                                <Image
                                                    src={project.image}
                                                    alt=''
                                                    style={{
                                                        objectPosition: index === 0 ? 'top' : null,
                                                    }}
                                                    width={245}
                                                    height={245}
                                                    className={styles.projectImg}
                                                />
                                            </Box>
                                        </Stack>
                                    </Fade>
                                ))
                            }
                        </Stack>
                    </Stack>
                </Box>
            </Navigation >
        </>
    )
}

export async function getStaticProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}