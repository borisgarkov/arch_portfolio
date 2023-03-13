import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import theme, { defaultFont } from '../utils/mainTheme';
import createEmotionCache from '../utils/createEmotionCache';
import loader from '../utils/loader';

// https://github.com/mui/material-ui/tree/dbddc26ff0e421603a196e68e4d80878d262c632/examples/material-next
// check for reference

export default function MyDocument(props) {
	const { emotionStyleTags } = props;

	return (
		<Html lang="en" className={defaultFont.className}>
			<Head>
				<head>
					<style>
						{loader}
					</style>
				</head>
				{/* PWA primary color */}
				{/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta name="emotion-insertion-point" content="" />
				{emotionStyleTags}
			</Head>
			<body>
				<div id={'globalLoader'}>
					<div className="loader">
						<div />
						<div />
					</div>
				</div>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

MyDocument.getInitialProps = async (ctx) => {

	const originalRenderPage = ctx.renderPage;

	// You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
	// However, be aware that it can have global side effects.
	const cache = createEmotionCache();
	const { extractCriticalToChunks } = createEmotionServer(cache);

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) =>
				function EnhanceApp(props) {
					return <App emotionCache={cache} {...props} />;
				},
		});

	const initialProps = await Document.getInitialProps(ctx);
	// This is important. It prevents Emotion to render invalid HTML.
	// See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
	const emotionStyles = extractCriticalToChunks(initialProps.html);
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(' ')}`}
			key={style.key}
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	));

	return {
		...initialProps,
		emotionStyleTags,
	};
};
