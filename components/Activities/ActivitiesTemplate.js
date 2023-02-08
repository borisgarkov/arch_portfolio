import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import ActivitiesImageSection from "./ActivitiesImageSection";
import ActivitiesTextSection from "./ActivitiesTextSection";

export default function ActivitiesTemplate({ activity, index }) {
    return (
        <Fade in timeout={1000} style={{ transitionDelay: `${index * 400}ms` }}>
            <Box sx={{
                width: '100%', display: 'flex', flexDirection: 'row',
                marginBottom: 7, justifyContent: 'space-between'
            }}>
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
            </Box>
        </Fade >
    )
};