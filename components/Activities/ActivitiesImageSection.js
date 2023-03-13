import Box from "@mui/material/Box";
import Image from "next/image";
import useScreenResolution from "../../hooks/useScreenResolution";
import IconImageFrame from "./IconImageFrame";
import backgroundImage from '../../public/activities/background.jpg';
import backgroundReverseImage from '../../public/activities/background-reverse.jpg';

export default function ActivitiesImageSection({ activity }) {
    const isMobile = useScreenResolution('lg');

    return (
        <Box sx={{
            width: '250px',
            height: '180px',
            position: 'relative',
        }}>
            {/* <Image
                src={
                    isMobile
                        ? backgroundImage
                        : activity.reverse
                            ? backgroundReverseImage
                            : backgroundImage
                }
                alt='background-image'
                placeholder='blur'
                priority
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    objectFit: 'cover',
                }}
            /> */}
            <IconImageFrame activity={activity} />
        </Box >
    )
};