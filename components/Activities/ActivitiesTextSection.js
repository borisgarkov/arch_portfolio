import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useScreenResolution from "../../hooks/useScreenResolution";

export default function ActivitiesTextSection({ activity, index }) {
    const isMobile = useScreenResolution('lg');

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '70%',
            textAlign: isMobile ? 'right' : index % 2 === 0 ? 'left' : 'right'
        }}>
            <Box>
                <Typography variant='h5' sx={{
                    fontWeight: 'bold',
                    display: 'inline-block',
                    marginBottom: 2
                }}>
                    {activity.title}
                    <Box sx={{
                        borderBottom: '1px solid black',
                        width: '80%',
                        position: 'relative',
                        marginRight: index % 2 === 0 ? 'auto' : null,
                        marginLeft: index % 2 === 0 ? null : 'auto',
                    }} />
                </Typography>
            </Box>
            {
                activity.description.map((text, index) => {
                    return <Typography key={index} variant='h6' sx={{ textAlign: 'justify' }}>
                        {text}
                    </Typography>
                })
            }
        </Box>
    )
};