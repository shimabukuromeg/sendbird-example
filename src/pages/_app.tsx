import type { AppProps } from 'next/app';
import { NextPage } from 'next';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (<Component {...pageProps} />);

export default MyApp;
