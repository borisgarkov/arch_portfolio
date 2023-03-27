import Box from "@mui/material/Box";
import ActivitiesSection from "./ActivitiesSection";
import { mainContainer, boxContainer, } from './aboutme-style';
import MobileSomeWordsAboutMeSection from "./MobileSomeWordsAboutMeSection";
import SomeWordsAboutMeSection from "./SomeWordsAboutMeSection";
import useScreenResolution from '../../../hooks/useScreenResolution';
import React from "react";

export default function AboutMe() {
    const isMobile = useScreenResolution('lg');

    return (
        <Box sx={{ ...mainContainer }}>
            {
                isMobile
                    ? <>
                        <MobileSomeWordsAboutMeSection />
                        <ActivitiesSection />
                    </>
                    : <Box sx={{ ...boxContainer }}>
                        <SomeWordsAboutMeSection />
                        <ActivitiesSection />
                    </Box>
            }
        </Box >

    )
};