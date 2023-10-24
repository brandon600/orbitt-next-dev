import { AppProps } from 'next/app';
import { WebSocketProvider } from '../src/WebSocketContext'; // Adjust the import to your file structure
import GlobalStyle from '@/GlobalStyle';
import NavigationBar from '@/components/organism/NavigationBar';
import LogoutConfirmationModal from '@/components/molecules/LogoutConfirmationModal';
import Overlay from '@/components/atoms/Overlay';
import { MemberstackProvider, MemberstackProtected, SignInModal } from "@memberstack/react";
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useStore } from '../src/store/store';


const config = {
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY || '',
};

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.NEXT_PUBLIC_PUBLIC_KEY);
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL);
  console.log(process.env.NEXT_PUBLIC_WEBSOCKET_URL);

  const { isLogoutModalOpen } = useStore();

  return (
    <MemberstackProvider config={config}>
      <WebSocketProvider>
        <AnimatePresence>
            {isLogoutModalOpen && (
              <>
                <Overlay />
                <LogoutConfirmationModal />
              </>
            )}
          </AnimatePresence>
        <NavigationBar />
        <MemberstackProtected onUnauthorized={<SignInModal />}>
          <Component {...pageProps} />
        </MemberstackProtected>
      </WebSocketProvider>
    </MemberstackProvider>
  );
}

export default MyApp;