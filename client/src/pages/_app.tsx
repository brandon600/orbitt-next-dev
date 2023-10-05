import { AppProps } from 'next/app';
import { WebSocketProvider } from '../WebSocketContext'; // Adjust the import to your file structure
import GlobalStyle from '@/GlobalStyle';
import NavigationBar from '@/components/organism/NavigationBar';
import { MemberstackProvider, MemberstackProtected, SignInModal } from "@memberstack/react";

const config = {
  publicKey: process.env.NEXT_PUBLIC_publicKey || '',
};

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.NEXT_PUBLIC_publicKey);

  return (
    <MemberstackProvider config={config}>
      <WebSocketProvider>
        <NavigationBar />
        <MemberstackProtected onUnauthorized={<SignInModal />}>
          <Component {...pageProps} />
        </MemberstackProtected>
      </WebSocketProvider>
    </MemberstackProvider>
  );
}

export default MyApp;