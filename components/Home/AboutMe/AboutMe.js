import Box from "@mui/material/Box";
import ActivitiesSection from "./ActivitiesSection";
import { mainContainer, boxContainer, } from './aboutme-style';
import SomeWordsAboutMeSection from "../SomeWordsAboutMeSection/SomeWordsAboutMeSection";
import useScreenResolution from '../../../hooks/useScreenResolution';
import MobileSomeWordsAboutMeSection from "../SomeWordsAboutMeSection/MobileSomeWordsAboutMeSection";
import Image from "next/image";
import backgroundImage from '../../../public/aboutme/backgroundImage.jpeg';
import { useEffect, useState } from "react";
import LoadingSpinner from '../../../utils/LoadingSpinner';

export default function AboutMe() {
    const isMobile = useScreenResolution('lg');
    const [isLoading, setIsLoaing] = useState(false);
    const handleIsLoading = () => { setIsLoaing(!isLoading) };

    useEffect(() => { handleIsLoading }, [])

    return (
        <>
            {
                isLoading
                    ? <LoadingSpinner />
                    : <Box sx={{ ...mainContainer }}>
                        {
                            isMobile
                                ? <>
                                    <MobileSomeWordsAboutMeSection />
                                    <ActivitiesSection />
                                </>
                                : <Box sx={{ ...boxContainer }}>
                                    <Image
                                        src={backgroundImage}
                                        alt="background"
                                        // width={1000}
                                        // height={1000}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            position: 'absolute',
                                            // objectFit: 'contain',
                                        }}
                                        placeholder='blur'
                                        priority
                                    />
                                    <SomeWordsAboutMeSection />
                                    <ActivitiesSection />
                                </Box>
                        }
                    </Box >
            }
        </>
    )
};