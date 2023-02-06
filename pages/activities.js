import { Box, Fade, Slide, Typography } from '@mui/material';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';

const ActivitiesImageSection = ({ activity }) => {
    const additionalStyle =
        activity.reverse ?
            { left: '-30px' }
            : { marginLeft: 'auto', right: '-30px' };

    return (
        <Box sx={{
            backgroundImage:
                activity.reverse ?
                    'url("/activities/background-reverse.jpg")'
                    : 'url("/activities/background.jpg")',
            backgroundSize: 'cover',
            width: '250px',
            height: '180px',
        }}>
            <Box sx={{
                opacity: 0.7,
                backgroundImage: 'url("/activities/frame.png")',
                backgroundSize: 'contain',
                width: '170px',
                height: '170px',
                position: 'relative',
                ...additionalStyle,
            }}>
                <img src={activity.image} alt='icon' width='50'
                    height='50' style={{ transform: 'translate(120%, 130%)' }}
                />
            </Box>
        </Box >
    )
};

const ActivitiesTextSection = ({ activity }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '700px',
            textAlign: activity.reverse ? 'left' : 'right'
        }}>
            <Box>
                <Typography variant='h5' sx={{ fontWeight: 'bold', display: 'inline-block', marginBottom: 2 }}>
                    {activity.title}
                    <Box sx={{
                        borderBottom: '1px solid black',
                        width: '80%',
                        position: 'relative',
                        marginRight: activity.reverse ? 'auto' : null,
                        marginLeft: activity.reverse ? null : 'auto',
                    }} />
                </Typography>
            </Box>
            <Typography variant='h6' sx={{ textAlign: 'justify' }}>{activity.text}</Typography>
        </Box>
    )
}

const ActivitiesTemplate = ({ activity, index }) => {
    return (
        <Fade in timeout={1000} style={{ transitionDelay: `${index * 400}ms` }}>
            <Box sx={{
                width: '100%', display: 'flex', flexDirection: 'row',
                justifyContent: 'space-evenly', marginBottom: 7
            }}>
                {
                    activity.reverse
                        ? <>
                            <ActivitiesTextSection activity={activity} />
                            <ActivitiesImageSection activity={activity} />
                        </>
                        : <>
                            <ActivitiesImageSection activity={activity} />
                            <ActivitiesTextSection activity={activity} />
                        </>
                }
            </Box>
        </Fade>
    )
}

export default function Activities() {
    const activities = [
        {
            title: 'Архитектурни проекти',
            text: `Изготвяне на цялости проекти по част Архитектура, съобразно характерните
            особености на имота и местността,
            предназначението на сградата и
            специфичните изисквания на възложителя. Архитектурният проект включва всички 
            необходими чертежи по частта /ситуация, разпределения, разрези и фасади/,обяснителна 
            записка, количествена сметка и спецификация. `,
            reverse: false,
            image: '/aboutme/3.png'
        },
        {
            title: 'Заснемане на сгради',
            text: `Заснемане на сгради с цел издаване на удостоверение 
            за търпимост или възстановяване на строителни книжа, както
            и при разделяне на сгради, реконструкция и преустройство, 
            смяна на предназначението и интериорни проекти. Заснемането
            представлява подробно измерване и изчертаване на съществуваща 
            сграда с точни размери и. конкретни материали. Към него
            се прилага и снимков материал от обекта.`,
            reverse: true,
            image: '/aboutme/2.png'
        },
        {
            title: 'Проекти за реконструкция и преустройство',
            text: `При изграждане на пристройки или надстройки на вече
            съществуваща сграда, както и при обновяване на фасадите
            на сградите. Проектът се състои от две части - 
            заснемане на съществуващото положение и проект 
            за реконструкция или преустройство. `,
            reverse: false,
            image: '/aboutme/6.png'
        },
        {
            title: 'Интериорни проекти',
            text: `Проекти за интериорни решения на жилища, офиси
             и др. с цел създаване на функционални пространства.
            Заснемането на помещенията е важна част от 
            интериорния проект заради необходимостта от 
            точност при изчертаване. Освен необходимите 
            планове  и разгъвки, проектът може да включва 
            детайлно проектиране на дизайна на мебелите,
            както и 3D визуализации. `,
            reverse: true,
            image: '/aboutme/4.png'
        },
        {
            title: 'Фасадни решения ',
            text: `Проектът за фасадно решение се прави, 
            за да се изяснят структурата и цялостната 
            концепция на фасадата, включително материалите
            и цветовите съчетания. Те мога да бъдат 
            под формата на подробни 2D чертежи или
            3D визуализации. `,
            reverse: false,
            image: '/aboutme/5.png'
        },
        {
            title: '3D проекти',
            text: `Изготвяне на фотореалистични 3D визуализации на 
            интериорни и екстериори решения. 3D моделите са 
            необходими за по-подробна и ясна представа за 
            визията на проектираната сграда или интериорен проект.`,
            reverse: true,
            image: '/aboutme/1.png'
        },
    ]

    return (
        <Navigation>
            <Box>
                <Slide in direction='right' timeout={1000}>
                    <Box sx={{ position: 'relative', width: '200px', marginTop: '100px', marginBottom: '60px' }}>
                        <Typography variant='h3' sx={{ width: '100%', textAlign: 'right' }}>Дейности</Typography>
                        <Box sx={{
                            borderBottom: '1px solid black',
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: '75%',
                        }} />
                    </Box>
                </Slide>
                <Box sx={{
                }}>
                    {
                        activities.map((activity, index) =>
                            <React.Fragment key={activity.title}>
                                <ActivitiesTemplate activity={activity} index={index} />
                            </React.Fragment>
                        )
                    }
                </Box>
            </Box>
        </Navigation>
    )
}