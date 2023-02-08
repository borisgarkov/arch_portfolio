import Box from "@mui/material/Box";
import picturesFolder from "./config";

export default function IconImageFrame({ activity }) {
    const additionalStyle =
        activity.reverse
            ? { left: '-30px' }
            : { marginLeft: 'auto', right: '-30px' };

    return (
        <Box sx={{
            opacity: 0.7,
            backgroundImage: `url(${picturesFolder}/frame.png)`,
            backgroundSize: 'contain',
            width: '170px',
            height: '170px',
            position: 'relative',
            // ...additionalStyle,
        }}>
            <img src={activity.image} alt='icon' width='50'
                height='50' style={{ transform: 'translate(120%, 130%)' }}
            />
        </Box>
    )
};