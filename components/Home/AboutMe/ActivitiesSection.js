import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import {
    activitiesMainBox, iconsMainBox,
    iconsContainer, iconTitle, titleStyle
} from "./activitiesSectionStyle";
import IconImageFrame from "../../Activities/IconImageFrame";
import Animation from "../../../utils/Animation";
import { useContext } from "react";
import { HomeDataContext } from "../../../pages/home";

export default function ActivitiesSection() {
    const router = useRouter();
    const [homeData, activities] = useContext(HomeDataContext);

    return (
        <Box sx={{ ...activitiesMainBox }}>

            <Animation type='activitiesTextMainPage'>
                <Typography variant="h4" sx={{ ...titleStyle }}>
                    Дейности
                </Typography>
            </Animation>

            <Box sx={{ ...iconsMainBox }}>
                {
                    activities.map((activity, index) =>
                        <Animation type='activitiesTextMainPage' key={activity._id}>
                            <Stack
                                onClick={() => router.push('/activities')}
                                sx={{ ...iconsContainer }}
                            >
                                <IconImageFrame activity={activity} index={index} />
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