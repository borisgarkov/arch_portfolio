import useScreenResolution from "../../../hooks/useScreenResolution"
import MobileHomeSection from "./MobileHomeSection";
import LaptopHomeSection from "./LaptopHomeSection";

export default function HomeSection() {
    const isMobile = useScreenResolution('lg');

    return (
        <>
            {
                isMobile
                    ? <MobileHomeSection />
                    : <LaptopHomeSection />
            }
        </>
    )
}