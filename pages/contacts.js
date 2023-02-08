import { Box, Button, Checkbox, FormControlLabel, Grid, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import Navigation from '../components/Navigation/Navigation';
import PageTitleTemplate from '../components/CommonComponents/PageTitleTemplate';

export default function Contacts(props) {
    const [checked, setChecked] = useState(false);
    const handleCheckChange = (event) => { setChecked(event.target.checked) };

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
        if (details.email.trim() === '' || details.name.trim() === '' || details.message.trim() === '' || !checked) {
            return
        }
    };

    return (
        <Navigation>
            <Box sx={{
                padding: '0 30px',
            }}>
                <PageTitleTemplate>
                    <Typography variant='h3'>Контакти</Typography>
                </PageTitleTemplate>

                <Grid container spacing={2} sx={{
                    width: { xs: '100%', lg: '50%' },
                }}>
                    <Grid item xs={12} lg={6}>
                        {/* <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Имейл*</Typography> */}
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
                            sx={{
                                color: '#f3ede9'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        {/* <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Име*</Typography> */}
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
                            sx={{
                                color: '#f3ede9'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {/* <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Съобщение*</Typography> */}
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
                            sx={{
                                color: '#f3ede9'
                            }}
                        />
                    </Grid>
                    {/* <Grid item>
                        <FormControlLabel
                            control={<Checkbox checked={checked} onChange={handleCheckChange} color="default" />}
                            label='Не съм робот'
                        />
                    </Grid> */}
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant='contained'
                            sx={{ backgroundColor: '#858585', '&:hover': { backgroundColor: '#858585' } }}
                            onSubmit={sendMessage}
                        >
                            Изпрати
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Navigation >
    )
};