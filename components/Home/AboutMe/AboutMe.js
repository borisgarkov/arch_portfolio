import Box from "@mui/material/Box";
import ActivitiesSection from "./ActivitiesSection";
import { mainContainer, boxContainer, } from './aboutme-style';
import SomeWordsAboutMeSection from "../SomeWordsAboutMeSection/SomeWordsAboutMeSection";
import useScreenResolution from '../../../hooks/useScreenResolution';
import MobileSomeWordsAboutMeSection from "../SomeWordsAboutMeSection/MobileSomeWordsAboutMeSection";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import React from "react";
import Image from "next/image";

const AsyncImage = (props) => {
    const [loadedSrc, setLoadedSrc] = React.useState(null);
    React.useEffect(() => {
        setLoadedSrc(null);
        if (props.src) {
            const handleLoad = () => {
                setLoadedSrc(props.src);
            };
            const image = new Image();
            image.addEventListener('load', handleLoad);
            image.src = props.src;
            return () => {
                image.removeEventListener('load', handleLoad);
            };
        }
    }, [props.src]);
    if (loadedSrc === props.src) {
        return (
            <img {...props} />
        );
    }
    return null;
};

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