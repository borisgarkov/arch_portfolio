import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Copyright = () => {
    return (
        <>
            <Typography variant="body1" align="center" sx={{ color: 'white' }}>
                {'Всички права запазени © '}
                <Link href='/' style={{ cursor: 'pointer', color: 'white', }} >
                    Николета Иванова
                </Link>
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: 'white' }}>
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
                backgroundColor: '#444444',
                alignItems: 'center',
                marginTop: 5
            }}>
            <Copyright />
        </Stack>
    )
};