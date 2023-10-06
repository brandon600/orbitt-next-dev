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
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  if (!apiUrl) {
    throw new Error("API_BASE_URL is not defined");
}
let socket: Socket | undefined;

if (typeof window !== 'undefined') {
    // Only try to create the WebSocket when we are on the client side.
    socket = io(apiUrl);
}

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <WebSocketContext.Provider value={{ socket }}>
      {children}
    </WebSocketContext.Provider>
  );
};





/*
  if (process.env.NODE_ENV === 'development') {
    socketServerURL = process.env.NEXT_PUBLIC_WEBSOCKET_URL; // Using local WebSocket URL
  } else {
    socketServerURL = 'https://orbitt-next-a50c5a1d02bc.herokuapp.com/'; // Replace with your production WebSocket URL
  }
  console.log("Socket Server URL:", socketServerURL);

  if (!socketServerURL) {
    throw new Error("WebSocket server URL not provided!");
}

*/
//const socket = io(socketServerURL);
//const socket = io('http://localhost:5000');
//console.log("Socket Server URL:", socketServerURL);