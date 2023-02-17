import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import {
    activitiesMainBox, iconsMainBox,
    iconsContainer, iconTitle, titleStyle
} from "./activitiesSectionStyle";
import activities from '../../Activities/activities.json';
import IconImageFrame from "../../Activities/IconImageFrame";
import Animation from "../../../utils/Animation";

export default function ActivitiesSection() {
    const router = useRouter();

    return (
        <Box sx={{ ...activitiesMainBox }}>

            <Animation type='activitiesTextMainPage'>
                <Typography variant="h4" sx={{ ...titleStyle }}>
                    Дейности
                </Typography>
            </Animation>

            <Box sx={{ ...iconsMainBox }}>
                {
                    Object.values(activities).map((activity) =>
                        <Animation type='activitiesTextMainPage' key={activity.title}>
                            <Stack
                                onClick={() => router.push('/activities')}
                                sx={{ ...iconsContainer }}
                            >
                                <IconImageFrame activity={activity} />
                                <Typography sx={{ ...iconTitle }}>
                                    {activity.title}
                                </Typography>
                            </Stack>
                        </Animation>
                    )
                }
            </Box>
        </Box>
    )
};