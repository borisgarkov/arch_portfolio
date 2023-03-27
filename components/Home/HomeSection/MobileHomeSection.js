import { Stack } from "@mui/material";
import useImageCaroussel from "../../../hooks/useImageCaroussel";
import imageCarousel from "./carousselImages";
import IntroText from "./IntroText";

export default function MobileHomeSection(params) {
    const currentImageIndex = useImageCaroussel();

    return (
        <Stack sx={{
            margin: '36px auto',
            gap: 5
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
        </Stack>
    )
}