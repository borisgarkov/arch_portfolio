import {
    Alert, Box, Button, Collapse, Grid,
    IconButton, TextField, Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import Navigation from '../components/Navigation/Navigation';
import PageTitleTemplate from '../components/CommonComponents/PageTitleTemplate';
import {
    mainBoxStyle,
    sendButtonStyle, gridContainerStyle
} from '../components/Contacts/contacts-styles';
import styles from '../components/Contacts/styles.module.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import emailjs from '@emailjs/browser';
import Seo from '../components/Seo/Seo';
import FadeInTransition from '../components/Transitions/FadeInTransition';

function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }

    return (false)
};

const muiFilledInputStyle = {
    '& .MuiFilledInput-root': {
        backgroundColor: { lg: 'white' },
        opacity: { lg: '0.7' },
    },
};

const gridItemsStyle = {
    paddingLeft: { xs: '0 !important', lg: '16px !important' },
}

export default function Contacts() {

    const [openEmailError, setOpenEmailError] = React.useState(false);
    const [buttonActive, setButtonActive] = React.useState(true);

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

        // console.log(details);
    };

    const sendMessage = () => {
        // for reference
        // https://dashboard.emailjs.com/admin
        // https://www.emailjs.com/docs/sdk/send/

        if (
            details.email.trim() === '' ||
            details.name.trim() === '' ||
            details.message.trim() === ''
        ) {
            return
        };

        if (!validateEmail(details.email.trim())) {
            setOpenEmailError(true);
            return
        }

        let templateParams = {
            to_name: 'Nikoleta Ivanova',
            from_name: details.name,
            from_email: details.name,
            message: details.message
        };

        setButtonActive(false);

        emailjs.send(
            'service_xt1dnbk',
            'template_lvlcg4d',
            templateParams,
            'ty9KcqRCo6IoyZau2'
        )
            .then(function (response) {
                // console.log('SUCCESS!', response.status, response.text);

                setDetails({
                    email: '',
                    name: '',
                    message: ''
                })

                setButtonActive(true);

            }, function (error) {
                console.log('FAILED...', error);
            });
    };

    return (
        <>
            <Seo siteMetadata={{
                title: 'Nikoleta Ivanova Portfolio',
                description: 'Contact Nikoleta Ivanova via email'
            }}></Seo>

            <FadeInTransition>
                <Navigation>
                    <Box sx={{ ...mainBoxStyle, }}>
                        <Box>
                            <PageTitleTemplate>
                                <Typography variant='h3'>Контакти</Typography>
                            </PageTitleTemplate>

                            <Grid container spacing={2} sx={{
                                ...gridContainerStyle,
                            }}>
                                <Grid item xs={12}>
                                    <Collapse in={openEmailError}>
                                        <Alert
                                            severity='error'
                                            action={
                                                <IconButton
                                                    aria-label="close"
                                                    color="inherit"
                                                    size="small"
                                                    onClick={() => {
                                                        setOpenEmailError(false);
                                                    }}
                                                >
                                                    <CloseIcon fontSize="inherit" />
                                                </IconButton>
                                            }
                                            sx={{ marginBottom: 2 }}
                                        >
                                            Въведен е невалиден имейл!
                                        </Alert>
                                    </Collapse>
                                </Grid>

                                <Grid item xs={12} lg={6} sx={{ ...gridItemsStyle }}>
                                    <TextField
                                        fullWidth
                                        required
                                        id="email"
                                        label="Имейл"
                                        variant="filled"
                                        color='neutral'
                                        type='email'
                                        value={details.email}
                                        onChange={updateDetails}
                                        sx={{ ...muiFilledInputStyle }}
                                        InputProps={{ classes: { input: styles.resizeText } }}
                                    />
                                </Grid>

                                <Grid item xs={12} lg={6} sx={{ ...gridItemsStyle }}>
                                    <TextField
                                        fullWidth
                                        required
                                        id="name"
                                        label="Име"
                                        variant="filled"
                                        color='neutral'
                                        type='text'
                                        value={details.name}
                                        onChange={updateDetails}
                                        sx={{ ...muiFilledInputStyle }}
                                        InputProps={{ classes: { input: styles.resizeText } }}
                                    />
                                </Grid>

                                <Grid item xs={12} sx={{ ...gridItemsStyle }}>
                                    <TextField
                                        fullWidth
                                        id="message"
                                        label="Напиши съобщение..."
                                        variant="filled"
                                        color='neutral'
                                        type='text'
                                        minRows='10'
                                        multiline
                                        value={details.message}
                                        onChange={updateDetails}
                                        sx={{ ...muiFilledInputStyle }}
                                        InputProps={{ classes: { input: styles.resizeText } }}
                                    />
                                </Grid>

                                <Grid item xs={12} sx={{ ...gridItemsStyle }}>
                                    <Button
                                        fullWidth
                                        variant='contained'
                                        sx={{ ...sendButtonStyle }}
                                        onClick={sendMessage}
                                        disabled={!buttonActive}
                                    >
                                        Изпрати
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
            </FadeInTransition>
        </>
    )
};

export async function getStaticProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}