import { useEffect, useState } from "react";

export default function useImageCaroussel(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const imageInterval = setInterval(() => {

            if (currentImageIndex == 2) {
                setCurrentImageIndex(0)
                return
            }

            setCurrentImageIndex(currentImageIndex + 1)
        }, 2500)

        return () => {
            console.log('interval is cleared')
            clearInterval(imageInterval)
        }
    }, [currentImageIndex]);

    return currentImageIndex
}