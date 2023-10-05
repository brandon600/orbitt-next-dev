import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { io, Socket } from 'socket.io-client';

interface WebSocketContextProps {
  socket: Socket;
}

interface WebSocketProviderProps {
  children: ReactNode;
}

const WebSocketContext = createContext<WebSocketContextProps | null>(null);

export const useWebSocket = () => {
  return useContext(WebSocketContext);
};

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => {
  let socketServerURL;

  if (process.env.NODE_ENV === 'development') {
    socketServerURL = process.env.WEBSOCKET_URL; // Using local WebSocket URL
  } else {
    socketServerURL = 'https://orbitt-next-a50c5a1d02bc.herokuapp.com/'; // Replace with your production WebSocket URL
  }

  if (!socketServerURL) {
    throw new Error("WebSocket server URL not provided!");
}
const socket = io(socketServerURL);


  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ socket }}>
      {children}
    </WebSocketContext.Provider>
  );
};