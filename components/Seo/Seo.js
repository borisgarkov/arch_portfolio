import Head from 'next/head';
import { useRouter } from "next/router";

export default function Seo(props) {
    const { siteMetadata } = props;

    const router = useRouter();

    const title = siteMetadata.title ?? 'Nikoleta Ivanova Architect Portfolio';
    const description = siteMetadata.description ?? 'Architectural personal portfolio, website and CV';
    const siteUrl = 'https://www.arch-nivanova.site';
    const image = '/aboutme/profile.jpg';
    const keywords = "архитектура, портфолио, architecture, portfolio, Nikoleta Ivanova, Николета Иванова, desgin, дизайн, 3D, интериор, заснемане на сгради, проекти, реконструкция";

    return (
        <Head>
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:url" content={siteUrl + router.pathname} />
            <meta property="og:image" content={image} />
            <meta property="og:image" content={image} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:creator" content={'Nikoleta Ivanova Architect'} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
        </Head>
    )
}