import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { mainBox, seeMoreContainer } from './styles';
import styles from './styles.module.css';
import Animation from '../../../utils/Animation';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Image from 'next/image';

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
                </Box>
            </Animation>

            <Animation type='profilePicMainPagefadeIn' >
                <Image
                    priority
                    src='/aboutme/profile.webp'
                    width={320}
                    height={320}
                    alt='photo'
                    className={styles.profilePic}
                />
            </Animation>
        </Box>
    )
};

export default SomeWordsAboutMeSection;