import { AppProps } from 'next/app';
import { WebSocketProvider } from '../WebSocketContext'; // Adjust the import to your file structure
import GlobalStyle from '@/GlobalStyle';
import NavigationBar from '@/components/organism/NavigationBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WebSocketProvider>
      <NavigationBar />
      <Component {...pageProps} />
    </WebSocketProvider>
  );
}

export default MyApp;