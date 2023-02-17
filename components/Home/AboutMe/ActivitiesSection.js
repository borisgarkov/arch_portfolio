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

                <Box sx={{ ...iconsMainBox }}>
                    {
                        Object.values(activities).map((activity) =>
                            <Stack
                                onClick={() => router.push('/activities')}
                                key={activity.title}
                                sx={{ ...iconsContainer }}
                            >
                                <IconImageFrame activity={activity} />
                                <Typography sx={{ ...iconTitle }}>
                                    {activity.title}
                                </Typography>
                            </Stack>
                        )
                    }
                </Box>
            </Animation>
        </Box>
    )
};