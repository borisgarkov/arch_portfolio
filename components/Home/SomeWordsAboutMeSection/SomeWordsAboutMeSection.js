import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { mainBox, seeMoreContainer } from './styles';
import styles from './styles.module.css';
import Animation from '../../../utils/Animation';
import Image from 'next/image';
import profilePic from '../../../public/aboutme/profile.webp';

const SomeWordsAboutMeSection = () => {
    const router = useRouter();

    return (
        <Box sx={{ ...mainBox }}>
            <Animation type='someWordsAboutMe'>
                <Box>
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
                </Box>
            </Animation>

            <Animation type='profilePicMainPagefadeIn' >
                {/* <Image
                    src={profilePic}
                    alt='my-pic'
                    className={styles.profilePic}
                    placeholder='blur'
                    priority
                /> */}

                <picture>
                    <source srcset="/aboutme/profile.avif" type="image/avif" />
                    <source srcset="/aboutme/profile.webp" type="image/webp" />
                    <img src="/aboutme/profile.avif" alt="photo" className={styles.profilePic} />
                </picture>
            </Animation>
        </Box>
    )
};

export default SomeWordsAboutMeSection;