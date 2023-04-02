import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";
import useImageCaroussel from "../../../hooks/useImageCaroussel";
import { HomeDataContext } from "../../../pages/home";
import urlFor from "../../../utils/sanityImageBuilder";
import DividerSection from "../DividerSection";
import IntroText from "./IntroText";

export default function MobileHomeSection(params) {
    const homeData = useContext(HomeDataContext);
    const currentImageIndex = useImageCaroussel();

    const imageCarousel = [
        urlFor(homeData.picture_1).url(),
        urlFor(homeData.picture_2).url(),
        urlFor(homeData.picture_3).url(),
    ]

    return (
        <Stack sx={{ gap: 5 }}>
            <Box sx={{}}>
                <Image
                    src={imageCarousel[currentImageIndex]}
                    alt='carousel-image'
                    height={350}
                    width={1000}
                    style={{
                        width: '100%',
                        objectFit: 'cover',
                        transition: 'opacity 1s',
                    }}
                />
            </Box>
            <IntroText />
            <DividerSection />
        </Stack>
    )
}