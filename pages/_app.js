// import '../styles/globals.css'
import { Cormorant_Garamond } from '@next/font/google';

const mainFontStyle = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
});

export default function App({ Component, pageProps }) {
  return <main className={mainFontStyle.className}>
    <Component {...pageProps} />
  </main>
}

export { mainFontStyle };
