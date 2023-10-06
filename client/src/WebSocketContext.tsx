import React, { createContext, useContext, useEffect, ReactNode, useState } from 'react';
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
  const [socket, setSocket] = useState<Socket | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  if (!apiUrl) {
    throw new Error("API_BASE_URL is not defined");
}

useEffect(() => {
  if (typeof window !== 'undefined') {
      const newSocket = io(apiUrl);
      setSocket(newSocket);
      return () => {
          newSocket.disconnect();
      };
  }
}, [apiUrl]);

if (!socket) {
  // You can return null or some kind of loading state here
  return null;
}

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