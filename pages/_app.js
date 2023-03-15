import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../utils/animation-keyframes.css';
import '../utils/global.css';
import { theme } from '../utils/mainTheme';
import LoadingButton from '../components/Navigation/LoadingButton';
import { useRouter } from 'next/router';

export default function MyApp(props) {
	const { Component, pageProps } = props;

	// const [isLoading, setIsLoading] = React.useState(false);
	// const router = useRouter();

	// React.useEffect(() => {
	// 	const handleStart = (url) => (url !== router.asPath) && setIsLoading(true);
	// 	const handleComplete = (url) => (url === router.asPath) && setIsLoading(false);

	// 	router.events.on('routeChangeStart', handleStart);
	// 	router.events.on('routeChangeComplete', handleComplete);
	// 	router.events.on('routeChangeError', handleComplete);

	// 	return () => {
	// 		router.events.off('routeChangeStart', handleStart);
	// 		router.events.off('routeChangeComplete', handleComplete);
	// 		router.events.off('routeChangeError', handleComplete);
	// 	}
	// })

	return (
		<>
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
					<Component {...pageProps} />
				}
			</ThemeProvider>
		</>
	);
}