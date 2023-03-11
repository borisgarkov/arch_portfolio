import Box from "@mui/material/Box";
import ActivitiesSection from "./ActivitiesSection";
import { MainContainer, BoxContainer } from './aboutme-style';
import SomeWordsAboutMeSection from "../SomeWordsAboutMeSection/SomeWordsAboutMeSection";
import useScreenResolution from '../../../hooks/useScreenResolution';
import MobileSomeWordsAboutMeSection from "../SomeWordsAboutMeSection/MobileSomeWordsAboutMeSection";

export default function AboutMe() {
    const isMobile = useScreenResolution('lg');

    return (
        <MainContainer>
            {
                isMobile
                    ? <>
                        <MobileSomeWordsAboutMeSection />
                        <ActivitiesSection />
                    </>
                    : <BoxContainer>
                        <SomeWordsAboutMeSection />
                        <ActivitiesSection />
                    </BoxContainer>
            }
        </MainContainer >
    )
};