import React from 'react';
import Box from '@mui/material/Box';
import Navigation from '../components/Navigation/Navigation';
import DividerSection from '../components/Home/DividerSection';
import Head from 'next/head';
import AboutMe from '../components/Home/AboutMe/AboutMe';
import TopHomeSection from '../components/Home/TopHomeSection/TopHomeSection';

function Home() {

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
                <section style={{
                    scrollSnapType: 'y mandatory'
                }}>
                    <section style={{ scrollSnapAlign: 'start' }}>
                        <TopHomeSection />
                    </section>
                    <DividerSection />
                    <section style={{ scrollSnapAlign: 'start' }}>
                        <AboutMe />
                    </section>
                </section>
            </Navigation>
        </>
    )
};

export async function getStaticProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}

export default Home;