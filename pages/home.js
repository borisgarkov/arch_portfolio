import Box from "@mui/material/Box";

export default function Home(props) {
    return (
        <Box sx={{
            backgroundColor: 'black',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <img
                src='/logo.png'
                alt="logo"
                style={{
                    width: '100%',

                }}
            />
        </Box>
    )
}