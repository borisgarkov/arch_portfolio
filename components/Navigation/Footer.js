import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Copyright = (props) => {
    return (
        <>
            <Typography variant="body1" align="center" {...props}>
                {'Всички права запазени © '}
                <Link href='/' color="inherit" sx={{ cursor: 'pointer' }} >
                    Николета Иванова
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
            <Typography variant="body1" align="center" {...props}>
                nikoleta.pl.ivanova@gmail.com
            </Typography>
        </>
    );
};

export default function Footer(props) {
    return (
        <Stack
            component="footer"
            sx={{
                py: 2,
                backgroundColor: '#eeeeee',
                alignItems: 'center',
                marginTop: 5
            }}>
            <Copyright />
        </Stack>
    )
};