import Box from "@mui/material/Box";
import Image from "next/image";
import useScreenResolution from "../../hooks/useScreenResolution";
import IconImageFrame from "./IconImageFrame";
import backgroundImage from '../../public/activities/background.JPG';
import backgroundReverseImage from '../../public/activities/background-reverse.JPG';

export default function ActivitiesImageSection({ activity }) {
    const isMobile = useScreenResolution('lg');
    const image = isMobile || !activity.reverse ? backgroundImage : backgroundReverseImage

    return (
        <Box sx={{
            width: '250px',
            height: '180px',
            position: 'relative',
        }}>
            <Image
                src={image}
                alt='background-image'
                placeholder='blur'
                priority
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    objectFit: 'cover',
                }}
            />
            <IconImageFrame activity={activity} />
        </Box >
    )
};

// backgroundImage:
//                 isMobile
//                     ? `url(${picturesFolder}/background.JPG)`
//                     : activity.reverse
//                         ? `url(${picturesFolder}/background-reverse.JPG)`
//                         : `url(${picturesFolder}/background.JPG)`,
//             backgroundSize: 'cover',