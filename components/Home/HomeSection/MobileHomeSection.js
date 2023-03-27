import { Box, Stack } from "@mui/material";
import useImageCaroussel from "../../../hooks/useImageCaroussel";
import DividerSection from "../DividerSection";
import imageCarousel from "./carousselImages";
import IntroText from "./IntroText";

export default function MobileHomeSection(params) {
    const currentImageIndex = useImageCaroussel();

    return (
        <Stack sx={{
            height: '100vh',
            justifyContent: 'space-between',
        }}>
            <img
                src={imageCarousel[currentImageIndex]}
                alt='carousel-image'
                style={{
                    height: '350px',
                    width: '100%',
                    objectFit: 'cover',
                    transition: 'opacity 1s',
                }}
            />
            <IntroText />
            <Box>
                <DividerSection />
            </Box>
        </Stack>
    )
}