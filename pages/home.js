import Seo from '../components/Seo/Seo';
import Navigation from '../components/Navigation/Navigation';
import HomeSection from '../components/Home/HomeSection/HomeSection';
import AboutMe from '../components/Home/AboutMe/AboutMe';
import sanityClient from '../utils/sanityClient';
import { createContext } from 'react';

export const HomeDataContext = createContext(null);

export default function Home({ homeData }) {
    console.log(homeData)

    return (
        <>
            <Seo siteMetadata={{
                title: 'Nikoleta Ivanova Portfolio',
                description: 'Архитектурен портфолио уебсайт. Architecture Portfolio website'
            }} />

            <Navigation>
                <HomeDataContext.Provider value={homeData}>
                    <HomeSection />
                    <AboutMe />
                </HomeDataContext.Provider>
            </Navigation>
        </>
    )
};

export async function getStaticProps(context) {
    const homeData = await sanityClient.fetch(`*[_type == "homeData"]`);

    return {
        props: {
            homeData
        }, // will be passed to the page component as props
    }
};