import React from 'react';
import Box from '@mui/material/Box';
import Navigation from '../components/Navigation/Navigation';
import DividerSection from '../components/Home/DividerSection';
import LoadingSpinner from '../utils/LoadingSpinner';
import Head from 'next/head';

const TopHomeSection = React.lazy(() => import('../components/Home//TopHomeSection/TopHomeSection'));
const AboutMe = React.lazy(() => import('../components/Home/AboutMe/AboutMe'));

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
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <TopHomeSection />
                    </React.Suspense>

                    <DividerSection />

                    <React.Suspense fallback={<LoadingSpinner />}>
                        <AboutMe />
                    </React.Suspense>
                </Box>
            </Navigation>
        </>
    )
};