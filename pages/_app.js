import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import '../utils/animation-keyframes.css';
import '../utils/global.css';
import createEmotionCache from '../utils/createEmotionCache';
import { theme } from '../utils/mainTheme';
import LoadingButton from '../components/Navigation/LoadingButton';
import Router from 'next/router';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	const [isLoading, setIsLoading] = React.useState(false);

	React.useEffect(() => {
		Router.events.on("routeChangeStart", () => {
			setIsLoading(true)
		});

		Router.events.on("routeChangeComplete", () => {
			setIsLoading(false)
		});

		Router.events.on("routeChangeError", () => {
			setIsLoading(false)
		});

	}, [Router])

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta charset="UTF-8" />
				<meta name="author" content="Nikoleta Ivanova" />
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<link rel="shortcut icon" href="/navbar-logo/nav-logo-black.png" />
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				{
					isLoading
						? <LoadingButton />
						: <Component {...pageProps} />
				}
			</ThemeProvider>
		</CacheProvider>
	);
}