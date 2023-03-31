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
        <Stack sx={{
            justifyContent: 'space-between',
        }}>
            <Box sx={{
                marginBottom: 10,
            }}>
                <Image
                    src={imageCarousel[currentImageIndex]}
                    alt='carousel-image'
                    height={270}
                    width={1000}
                    style={{
                        height: '270px',
                        width: '100%',
                        objectFit: 'cover',
                        transition: 'opacity 1s',
                    }}
                />
            </Box>
            <Box sx={{ marginBottom: 5 }}>
                <IntroText />
            </Box>
            <DividerSection />
        </Stack>
    )
}