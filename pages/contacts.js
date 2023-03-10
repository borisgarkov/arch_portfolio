import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import Navigation from '../components/Navigation/Navigation';
import PageTitleTemplate from '../components/CommonComponents/PageTitleTemplate';
import {
    mainBoxStyle, textFieldStyle,
    sendButtonStyle, gridContainerStyle
} from '../components/Contacts/contacts-styles';
import styles from '../components/Contacts/styles.module.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import backgroundImage from '../public/contacts/contacts-image.jpg';
import Image from 'next/image';
import useScreenResolution from '../hooks/useScreenResolution';

export default function Contacts() {
    const isMobile = useScreenResolution('lg');

    const [details, setDetails] = useState({
        email: '',
        name: '',
        message: '',
    });

    const updateDetails = (e) => {
        const { id, value } = e.target;

        setDetails((prevState) => ({
            ...prevState,
            [id]: value
        }))

        console.log(details);
    };

    const sendMessage = () => {
        if (
            details.email.trim() === '' ||
            details.name.trim() === '' ||
            details.message.trim() === ''
        ) {
            return
        }
    };

    return (
        <Navigation>
            <Box sx={{ ...mainBoxStyle, }}>

                {
                    isMobile
                        ? null
                        : <Image
                            src={backgroundImage}
                            alt='background-image'
                            placeholder='blur'
                            priority
                            style={{
                                width: '100%',
                                height: '100vh',
                                position: 'absolute',
                            }}
                        />
                }

                <Box sx={{
                    padding: '0 30px 30px 30px',
                }}>
                    <PageTitleTemplate>
                        <Typography variant='h3'>????????????????</Typography>
                    </PageTitleTemplate>

                    <Grid container spacing={2} sx={{ ...gridContainerStyle }}>
                        <Grid item xs={12} lg={6}>
                            <TextField
                                fullWidth
                                required
                                id="email"
                                label="??????????"
                                variant="filled"
                                color='neutral'
                                type='email'
                                value={details.email}
                                onChange={updateDetails}
                                sx={{ ...textFieldStyle }}
                                InputProps={{ classes: { input: styles.resizeText } }}
                            />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField
                                fullWidth
                                required
                                id="name"
                                label="??????"
                                variant="filled"
                                color='neutral'
                                type='text'
                                value={details.name}
                                onChange={updateDetails}
                                sx={{ ...textFieldStyle }}
                                InputProps={{ classes: { input: styles.resizeText } }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="message"
                                label="???????????? ??????????????????..."
                                variant="filled"
                                color='neutral'
                                type='text'
                                minRows='10'
                                multiline
                                value={details.message}
                                onChange={updateDetails}
                                sx={{ ...textFieldStyle }}
                                InputProps={{ classes: { input: styles.resizeText } }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant='contained'
                                sx={{ ...sendButtonStyle }}
                                onSubmit={sendMessage}
                            >
                                ??????????????
                            </Button>
                        </Grid>

                        <Grid className={styles.gridItemEmail}>
                            <EmailOutlinedIcon />
                            <a href="mailto: nikoleta.pl.ivanova@gmail.com" className={styles.sendEmail}>
                                nikoleta.pl.ivanova@gmail.com
                            </a>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Navigation >
    )
};