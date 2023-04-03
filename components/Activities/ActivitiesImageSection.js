import Box from "@mui/material/Box";
import Image from "next/image";
import useScreenResolution from "../../hooks/useScreenResolution";
import IconImageFrame from "./IconImageFrame";

export default function ActivitiesImageSection({ activity, index }) {
    const isMobile = useScreenResolution('lg');

    const imageSrc = isMobile || index % 2 !== 0
        ? '/activities/background.JPG'
        : '/activities/background-reverse.JPG'

    return (
        <Box sx={{
            width: '250px',
            height: '180px',
            position: 'relative',
        }}>
            <Image
                priority
                src={imageSrc}
                alt='background-image'
                fill
            />
            <IconImageFrame activity={activity} index={index} />
        </Box >
    )
};