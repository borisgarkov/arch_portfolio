import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Contests() {
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

    const titlesStyle = {
        textTransform: 'uppercase',
        marginBottom: 2,
        marginTop: 5,
        fontWeight: 'bold',
    };

    return (
        <Box>
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
                        <Image src='/cv/prize.png' alt='prize' width='15' height='15' />
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
        </Box>
    )
};