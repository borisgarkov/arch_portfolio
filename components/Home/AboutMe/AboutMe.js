import Box from "@mui/material/Box";
import ActivitiesSection from "./ActivitiesSection";
import { mainContainer, boxContainer, } from './aboutme-style';
import SomeWordsAboutMeSection from "../SomeWordsAboutMeSection/SomeWordsAboutMeSection";
import useScreenResolution from '../../../hooks/useScreenResolution';
import MobileSomeWordsAboutMeSection from "../SomeWordsAboutMeSection/MobileSomeWordsAboutMeSection";
import React from "react";
import Image from "next/image";

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
                        <Image
                            priority
                            src="/aboutme/backgroundImage.webp"
                            fill='contain'
                            alt="backgroundImage"
                        />
                        <SomeWordsAboutMeSection />
                        <ActivitiesSection />
                    </Box>
            }
        </Box >

    )
};