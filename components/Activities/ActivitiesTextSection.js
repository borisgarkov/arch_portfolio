import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useScreenResolution from "../../hooks/useScreenResolution";

export default function ActivitiesTextSection({ activity }) {
    const isMobile = useScreenResolution('lg');

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '70%',
            textAlign: isMobile ? 'right' : activity.reverse ? 'left' : 'right'
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
                        marginRight: activity.reverse ? 'auto' : null,
                        marginLeft: activity.reverse ? null : 'auto',
                    }} />
                </Typography>
            </Box>
            <Typography variant='h6' sx={{ textAlign: 'justify' }}>
                {activity.text}
            </Typography>
        </Box>
    )
};