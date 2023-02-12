import { Box, Stack, Typography } from "@mui/material";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { subsectionStyle, titlesStyle } from "./commonStyle";
import { stackStyle, iconColor } from './workExperienceStyle';

export default function WorkExperience() {
    return (
        <Box>
            <Typography variant='h5' sx={{ ...titlesStyle }}>
                Професионален опит
            </Typography>

            <Stack sx={{ ...stackStyle }}>
                <WorkOutlineOutlinedIcon fontSize='small' sx={{ ...iconColor }} />
                <Typography variant='h6' sx={{ ...subsectionStyle }}>Архитект</Typography>
            </Stack>
            <Typography variant='h6'>AZ+Partners, гр. София</Typography>
            <Typography variant='h6'>02.2022г. - до момента</Typography>

            <Stack sx={{ ...stackStyle }}>
                <WorkOutlineOutlinedIcon fontSize='small' sx={{ ...iconColor }} />
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

            <Stack sx={{ ...stackStyle }}>
                <WorkOutlineOutlinedIcon fontSize='small' sx={{ ...iconColor }} />
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

            <Stack sx={{ ...stackStyle }}>
                <WorkOutlineOutlinedIcon fontSize='small' sx={{ ...iconColor }} />
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
                Придобити умения в сферата на технологиите, комуникациите и работата в екип.
            </Typography>
        </Box>
    )
}