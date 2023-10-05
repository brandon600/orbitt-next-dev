import { AppProps } from 'next/app';
import { WebSocketProvider } from '../WebSocketContext'; // Adjust the import to your file structure
import GlobalStyle from '@/GlobalStyle';
import NavigationBar from '@/components/organism/NavigationBar';
import { MemberstackProvider, MemberstackProtected, SignInModal } from "@memberstack/react";

//REACT_APP_PUBLIC_KEY=pk_sb_988015ebe93b146c4b2e

const config = {
  publicKey: 'pk_sb_988015ebe93b146c4b2e',
};

function MyApp({ Component, pageProps }: AppProps) {
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