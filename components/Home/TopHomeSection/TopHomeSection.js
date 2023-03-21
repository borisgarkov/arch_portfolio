import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
    mainContainer,
    imageStyle,
    imageBox,
    textBox,
    typography,
} from './styles';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';
import mainImg from '../../../public//image-gallery-homepage/main.webp';

export default function TopHomeSection() {

    const [text, helper] = useTypewriter({
        words: ['PORTFOLIO', 'WEBSITE', 'CV'],
        loop: 0,
    });

    return (
        <Box sx={{ ...mainContainer }}>
            <Box sx={{ ...imageBox }}>
                <Image
                    src={mainImg}
                    alt='carousel-image'
                    fill
                    placeholder='blur'
                    style={{ ...imageStyle }}
                />
            </Box>
            <Stack sx={{ ...textBox }}>
                <Typography variant='h1' sx={{ ...typography, }}>
                    {text}
                    <Cursor cursorColor='white' />
                </Typography>

                <Typography variant='h4' sx={{ ...typography }}>
                    by Nikoleta Ivanova
                </Typography>
            </Stack>
        </Box>
    )
};