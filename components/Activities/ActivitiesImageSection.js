import Box from "@mui/material/Box";
import useScreenResolution from "../../hooks/useScreenResolution";
import picturesFolder from "./config";
import IconImageFrame from "./IconImageFrame";

export default function ActivitiesImageSection({ activity }) {
    const isMobile = useScreenResolution('lg');

    return (
        <Box sx={{
            backgroundImage:
                isMobile
                    ? `url(${picturesFolder}/background.JPG)`
                    : activity.reverse
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