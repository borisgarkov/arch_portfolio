import React from 'react';
import Box from '@mui/material/Box';
import Navigation from '../components/Navigation/Navigation';
import DividerSection from '../components/Home/DividerSection';
import Head from 'next/head';
import AboutMe from '../components/Home/AboutMe/AboutMe';

export default function Home() {
    return (
        <>
            <Head>
                <title>Nikoleta Ivanova Portfolio</title>

                <meta
                    name="description"
                    content="Архитектурен портфолио уебсайт. Architecture Portfolio website"
                    key="desc"
                />
                <meta name="keywords"
                    content="архитектура, портфолио, 
                    architecture, portfolio, Nikoleta Ivanova,
                    Николета Иванова, desgin, дизайн, 3D, интериор, заснемане на сгради,
                    проекти, реконструкция" />
            </Head>

            <Navigation>
                <Box>
                    {/* <TopHomeSection /> */}

                    <DividerSection />
                    <AboutMe />
                </Box>
            </Navigation>
        </>
    )
};