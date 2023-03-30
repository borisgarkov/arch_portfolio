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
            <Animation style={{ marginBottom: '16px' }} type='profilePicMainPagefadeIn'>
                <Image
                    src={profilePic}
                    alt='my-pic'
                    className={styles.profilePic}
                    placeholder='blur'
                    priority
                />
            </Animation>

            <Animation type='someWordsAboutMe' style={{
                padding: '24px',
            }}>
                <Typography variant="h4">
                    Няколко думи за мен ...
                </Typography>

                <Typography variant="h6" sx={{ marginTop: 2, }}>
                    УАСГ, гр. София
                </Typography>

                <Typography variant="h6" sx={{ marginTop: 1, }}>
                    Катедра: Градоустройство
                </Typography>

                <Typography variant="h6" sx={{ marginTop: 1, }}>
                    Член на КАБ, 2022г. (ОПП)
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
        </>
    )
};

export default MobileSomeWordsAboutMeSection;