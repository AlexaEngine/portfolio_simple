import "@/styles/globals.css";
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
