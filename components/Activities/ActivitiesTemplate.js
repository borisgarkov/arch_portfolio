import Box from "@mui/material/Box";
import ActivitiesImageSection from "./ActivitiesImageSection";
import ActivitiesTextSection from "./ActivitiesTextSection";
import useScreenResolution from '../../hooks/useScreenResolution';
import Animation from '../../utils/Animation';
import { mainBox } from "./activitiesTemplateStyles";

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
        <Animation delay={index * 100}>
            <Box sx={{ ...mainBox }}>
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
        </Animation >
    )
};