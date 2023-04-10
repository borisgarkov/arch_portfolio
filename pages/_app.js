import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../utils/animation-keyframes.css';
import '../utils/global.css';
import { theme } from '../utils/mainTheme';

export default function MyApp(props) {
	const { Component, pageProps } = props;

	return (
		<>
			<Head>
				<meta charset="UTF-8" />
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