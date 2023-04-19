import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import React from "react";
import { CoverBox, imageStyle, mainBoxStyle } from "../components/Index/styles";
import styles from '../components/IntroPage/intro-styles.module.css';
import useScreenResolution from '../hooks/useScreenResolution';
import FadeInTransition from '../components/Transitions/FadeInTransition';
import Seo from "../components/Seo/Seo";

const Button = (props) => {
    const router = useRouter();

    return (
        <Box onClick={() => router.push('/home')} {...props}>
            НАЧАЛО
        </Box>
    )
};

const LaptopVersion = () => {
    let zIndex = 9999;
    const images = [
        {
            coverBoxStyle: styles.schema,
            image: 'schema.png',
        },
        {
            coverBoxStyle: styles.nivanova,
            image: 'nivanova.png',
        },
        {
            coverBoxStyle: styles.portfolio,
            image: 'portfolio.png',
        },
        {
            coverBoxStyle: styles.arch,
            image: 'arch.png',
        },
    ];

    return (
        <>
            {
                images.map((image, index) => {
                    zIndex -= 1

                    return (
                        <React.Fragment key={index}>
                            <CoverBox
                                className={image.coverBoxStyle}
                                zIndex={zIndex - index}
                            />
                            <img
                                src={`/intro-logo/${image.image}`}
                                alt="logo"
                                style={{ ...imageStyle, zIndex: zIndex - index - 1 }}
                            />
                        </React.Fragment>
                    )
                })
            }
            <Button className={styles.portfolioButton} />
        </>
    )
};

const MobileVersion = () => {
    return (
        <>
            <img src='/navbar-logo/nav-logo.png' alt='logo' className={styles.mobileImg} />
            <Button className={styles.mobileButton} />
        </>
    )
};

export default function Home() {
    const isMobile = useScreenResolution('lg');

    return (
        <>
            <Seo siteMetadata={{}}></Seo>
            <FadeInTransition>
                <Box sx={{ ...mainBoxStyle }}>
                    {
                        isMobile
                            ? <MobileVersion />
                            : <LaptopVersion />
                    }
                </Box>
            </FadeInTransition>
        </>
    )
};