import { Box, Stack, Typography } from "@mui/material";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

export default function Education() {
    const titlesStyle = {
        textTransform: 'uppercase',
        marginBottom: 2,
        marginTop: 5,
        fontWeight: 'bold',
    };

    return (
        <Box>
            <Typography variant='h5' sx={{ ...titlesStyle }}>Образование</Typography>
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'baseline',
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
                    Участник в Дружеството &quot;БалканАРХитрав&quot;
                    - Лятно архитектурно училище
                </Typography>
            </Stack>
            <Typography variant='h6'>2019г., 2020г., 2021г.</Typography>
            <Typography variant='h6'>
                Усъвършенстване на уменията в областта
                на архитектурата и работата в екип.
            </Typography>

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
        </Box>
    )
}