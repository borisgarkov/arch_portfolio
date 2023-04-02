import useScreenResolution from "../../../hooks/useScreenResolution"
import MobileHomeSection from "./MobileHomeSection";
import LaptopHomeSection from "./LaptopHomeSection";
import { Box } from "@mui/material";

export default function HomeSection() {
    const isMobile = useScreenResolution('lg');

    return (
        <Box sx={{ height: 'calc(100vh - 64px)' }}>
            {
                isMobile
                    ? <MobileHomeSection />
                    : <LaptopHomeSection />
            }
        </Box>
    )
}