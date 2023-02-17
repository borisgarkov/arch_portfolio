import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import React from "react";
import { CoverBox, imageStyle, mainBoxStyle } from "../components/Index/styles";
import styles from '../components/IntroPage/intro-styles.module.css';

export default function Home() {
    const router = useRouter();
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
        <Box sx={{ ...mainBoxStyle }}>
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

            <Box
                onClick={() => router.push('/home')}
                className={styles.portfolioButton}
            >
                НАЧАЛО
            </Box>
        </Box>
    )
};