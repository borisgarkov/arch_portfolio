import Seo from '../components/Seo/Seo';
import Navigation from '../components/Navigation/Navigation';
import HomeSection from '../components/Home/HomeSection/HomeSection';
import DividerSection from '../components/Home/DividerSection';
import AboutMe from '../components/Home/AboutMe/AboutMe';

export default function Home() {
    return (
        <>
            <Seo siteMetadata={{
                title: 'Nikoleta Ivanova Portfolio',
                description: 'Архитектурен портфолио уебсайт. Architecture Portfolio website'
            }}></Seo>

            <Navigation>
                <HomeSection />
                <AboutMe />
            </Navigation>
        </>
    )
};

export async function getStaticProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
};