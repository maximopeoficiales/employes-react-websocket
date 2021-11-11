import { createContext } from "react";
import { Socket } from "socket.io-client";
import { config } from "../../../config";
import { useSocket } from "../hooks/useSocket";

// Estructura del Provider
export interface ISocketProvider {
  socket: Socket;
  online: boolean;
}

// Creacion del contexto
export const SocketContext = createContext<Partial<ISocketProvider>>({});

// SocketProvider
export const SocketProvider = ({ children }: any) => {
  const socketState = useSocket(config.socket.host_socket);

  return (
    <SocketContext.Provider value={socketState}>
      {children}
    </SocketContext.Provider>
  );
};
