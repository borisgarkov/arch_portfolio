import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import DividerSection from '../components/Home/DividerSection';
import AboutMe from '../components/Home/AboutMe/AboutMe';
import TopHomeSection from '../components/Home/TopHomeSection/TopHomeSection';
import Seo from '../components/Seo/Seo';

export default function Home() {
    return (
        <>
            <Seo siteMetadata={{
                title: 'Nikoleta Ivanova Portfolio',
                description: 'Архитектурен портфолио уебсайт. Architecture Portfolio website'
            }}></Seo>

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
};