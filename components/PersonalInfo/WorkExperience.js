import { Box, Stack, Typography } from "@mui/material";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

export default function WorkExperience() {
    const titlesStyle = {
        textTransform: 'uppercase',
        marginBottom: 2,
        marginTop: 5,
        fontWeight: 'bold',
    };

    const subsectionStyle = {
        fontWeight: 'bold',
    }

    return (
        <Box>
            <Typography variant='h5' sx={{ ...titlesStyle }}>
                Професионален опит
            </Typography>

            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1,
                marginTop: 2,
            }}>
                <WorkOutlineOutlinedIcon fontSize='small' sx={{ color: '#858585' }} />
                <Typography variant='h6' sx={{ ...subsectionStyle }}>Архитект</Typography>
            </Stack>
            <Typography variant='h6'>AZ+Partners, гр. София</Typography>
            <Typography variant='h6'>02.2022г. - до момента</Typography>

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
            <Typography variant='h6'>
                Община Челопеч, с. Челопеч
            </Typography>
            <Typography variant='h6'>
                Август 2021г.
            </Typography>

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
            <Typography variant='h6'>
                HADDAD studio, гр. София
            </Typography>
            <Typography variant='h6'>
                Студентска практика към МОН
            </Typography>
            <Typography variant='h6'>
                2020г.
            </Typography>
            <Typography variant='h6'>
                Развиване на уменията в областта на Интериорния дизайн
            </Typography>

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
            <Typography variant='h6'>
                &quot;Дънди Прешъс Металс Челопеч&quot;, с. Челопеч
            </Typography>
            <Typography variant='h6'>
                10/07/2019г. - 14/09/2019г.
            </Typography>
            <Typography variant='h6'>
                Придобити умения в сферата на технологиите,
                комуникациите и работата в екип.
            </Typography>
        </Box>
    )
}