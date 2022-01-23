import type { NextPage } from 'next';
import 'sendbird-uikit/dist/index.css';
import dynamic from 'next/dynamic';

const DynamicAppWithNoSSR = dynamic(() => import('../components/Chat/Chat'), {
  ssr: false,
  loading: () => <p>...</p>,
});

const Home: NextPage = () => <DynamicAppWithNoSSR />;

export default Home;
