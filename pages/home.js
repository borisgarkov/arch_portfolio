import Seo from '../components/Seo/Seo';
import Navigation from '../components/Navigation/Navigation';
import HomeSection from '../components/Home/HomeSection/HomeSection';
import AboutMe from '../components/Home/AboutMe/AboutMe';
import sanityClient from '../utils/sanityClient';
import { createContext } from 'react';

export const HomeDataContext = createContext(null);

export default function Home({
    homeData,
}) {
    console.log(homeData[0])

    return (
        <>
            <Seo siteMetadata={{
                title: 'Nikoleta Ivanova Portfolio',
                description: 'Архитектурен портфолио уебсайт. Architecture Portfolio website'
            }} />

            <Navigation>
                <HomeDataContext.Provider value={homeData[0]}>
                    <HomeSection />
                    <AboutMe />
                </HomeDataContext.Provider>
            </Navigation>
        </>
    )
};

export async function getStaticProps(context) {
    const homeData = await sanityClient.fetch(`*[_type == "homeData"]`);
    // const picture_1 = await sanityClient.fetch(
    //     `*[_type == "homeData"]["picture_1"].asset->url`
    // );
    // const picture_2 = await sanityClient.fetch(
    //     `*[_type == "homeData"]["picture_2"].asset->url`
    // );
    // const picture_3 = await sanityClient.fetch(
    //     `*[_type == "homeData"]["picture_3"].asset->url`
    // )

    return {
        props: {
            homeData,
            // picture_1,
            // picture_2,
            // picture_3
        }, // will be passed to the page component as props
    }
};