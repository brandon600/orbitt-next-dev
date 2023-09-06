import { AppProps } from 'next/app';
import { WebSocketProvider } from '../WebSocketContext'; // Adjust the import to your file structure

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WebSocketProvider>
      <Component {...pageProps} />
    </WebSocketProvider>
  );
}

export default MyApp;