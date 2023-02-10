import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import styles from './aboutme-styles.module.css';
import activities from '../Activities/activities.json';
import IconImageFrame from "../Activities/IconImageFrame";

const SomeWordsAboutMeSection = () => {
    return (
        <>
            <Typography variant="h4">
                Няколко думи за мен ...
            </Typography>

            <Typography variant="h6" sx={{ marginTop: 2, }}>
                Университет по архитектура, строителство и геодезия, випуск 2022
            </Typography>

            <Typography variant="h6" sx={{ marginTop: 1, }}>
                Катедра: Градоустройство
            </Typography>
        </>
    )
}


export default function AboutMeMobile() {
    const router = useRouter();

    return (
        <>
            <SomeWordsAboutMeSection />
            <Stack sx={{ backgroundColor: 'mainPage.main' }} >
                <Typography variant="h4" sx={{ textAlign: 'center' }}>Дейности</Typography>
                {
                    Object.values(activities).map((activity) =>
                        <Stack
                            onClick={() => router.push('/activities')}
                            key={activity.title}
                            sx={{
                                alignItems: 'center',
                            }}
                            className={styles.iconsContainer}
                        >
                            <IconImageFrame activity={activity} />
                            <Typography sx={{
                                textAlign: 'center',
                                position: 'relative',
                                top: '-20px',
                            }}>
                                {activity.title}
                            </Typography>

                        </Stack>
                    )
                }
            </Stack>
        </>
    )
}