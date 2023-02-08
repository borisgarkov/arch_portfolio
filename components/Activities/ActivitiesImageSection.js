import Box from "@mui/material/Box";
import picturesFolder from "./config";
import IconImageFrame from "./IconImageFrame";

export default function ActivitiesImageSection({ activity }) {
    return (
        <Box sx={{
            backgroundImage:
                activity.reverse
                    ? `url(${picturesFolder}/background-reverse.JPG)`
                    : `url(${picturesFolder}/background.JPG)`,
            backgroundSize: 'cover',
            width: '250px',
            height: '180px',
        }}>
            <IconImageFrame activity={activity} />
        </Box >
    )
};