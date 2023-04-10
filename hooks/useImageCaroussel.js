import { useEffect, useState } from "react";

export default function useImageCaroussel(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevValue) => {
                return prevValue === 2 ? 0 : prevValue + 1;
            });
        }, 2500);

        return () => {
            clearInterval(interval);
            // console.log('interval cleared');
        };
    }, []);

    return currentImageIndex
}