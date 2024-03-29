import Box from "@mui/material/Box";
import ActivitiesImageSection from "./ActivitiesImageSection";
import ActivitiesTextSection from "./ActivitiesTextSection";
import useScreenResolution from '../../hooks/useScreenResolution';
import Animation from '../../utils/Animation';
import { mainBox } from "./activitiesTemplateStyles";

const MobileSectionAlignment = ({ activity, index }) => {
    return (
        <>
            <ActivitiesImageSection activity={activity} index={index} />
            <ActivitiesTextSection activity={activity} index={index} />
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
                        ? <MobileSectionAlignment activity={activity} index={index} />
                        : <>
                            {
                                index % 2 === 0
                                    ? <>
                                        <ActivitiesTextSection activity={activity} index={index} />
                                        <ActivitiesImageSection activity={activity} index={index} />
                                    </>
                                    : <>
                                        <ActivitiesImageSection activity={activity} index={index} />
                                        <ActivitiesTextSection activity={activity} index={index} />
                                    </>
                            }
                        </>
                }
            </Box>
        </Animation >
    )
};