import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import ActivitiesImageSection from "./ActivitiesImageSection";
import ActivitiesTextSection from "./ActivitiesTextSection";
import useScreenResolution from '../../hooks/useScreenResolution';

const MobileSectionAlignment = ({ activity }) => {
    return (
        <>
            <ActivitiesImageSection activity={activity} />
            <ActivitiesTextSection activity={activity} />
        </>
    )
}

export default function ActivitiesTemplate({ activity, index }) {
    const isMobile = useScreenResolution('lg');

    return (
        <Fade in timeout={1000} style={{ transitionDelay: `${index * 400}ms` }}>
            <Box sx={{
                width: '100%', display: 'flex', flexDirection: { xs: 'column', lg: 'row' },
                gap: { xs: 2, lg: 0 },
                marginBottom: 7, justifyContent: 'space-between'
            }}>
                {
                    isMobile
                        ? <MobileSectionAlignment activity={activity} />
                        : <>
                            {
                                activity.reverse
                                    ? <>
                                        <ActivitiesTextSection activity={activity} />
                                        <ActivitiesImageSection activity={activity} />
                                    </>
                                    : <>
                                        <ActivitiesImageSection activity={activity} />
                                        <ActivitiesTextSection activity={activity} />
                                    </>
                            }
                        </>
                }
            </Box>
        </Fade >
    )
};