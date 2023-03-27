import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import styles from './styles.module.css';
import { seeMoreContainer } from "./styles";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Animation from "../../../utils/Animation";
import Image from 'next/image';
import profilePic from '../../../public/aboutme/profile.jpg';

const MobileSomeWordsAboutMeSection = () => {
    const router = useRouter();

    return (
        <>
            <Animation type='someWordsAboutMe'>
                <Typography variant="h4">
                    Няколко думи за мен ...
                </Typography>

                <Typography variant="h6" sx={{ marginTop: 2, }}>
                    Университет по архитектура, строителство и геодезия, випуск 2022
                </Typography>

                <Typography variant="h6" sx={{ marginTop: 1, }}>
                    Катедра: Градоустройство
                </Typography>

                <Stack
                    onClick={() => router.push('/personal-info')}
                    className={styles.seeMoreContainer}
                    sx={{ ...seeMoreContainer }}
                >
                    <Typography>
                        Виж повече
                    </Typography>
                    <ArrowForwardIosIcon className={styles.arrowIcon} />
                </Stack>
            </Animation>

            <Animation type='profilePicMainPagefadeIn'>
                <Image
                    src={profilePic}
                    alt='my-pic'
                    className={styles.profilePic}
                    placeholder='blur'
                    priority
                />
            </Animation>
        </>
    )
};

export default MobileSomeWordsAboutMeSection;