import { Box, Stack } from "@mui/material";
import useImageCaroussel from "../../../hooks/useImageCaroussel";
import DividerSection from "../DividerSection";
import imageCarousel from "./carousselImages";
import IntroText from "./IntroText";

export default function MobileHomeSection(params) {
    const currentImageIndex = useImageCaroussel();

    return (
        <Stack sx={{
            justifyContent: 'space-between',
        }}>
            <Box sx={{
                marginBottom: 10,
            }}>
                <img
                    src={imageCarousel[currentImageIndex]}
                    alt='carousel-image'
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