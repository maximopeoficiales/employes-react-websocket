import React from "react";
import HomePage from "./HomePage";
import { SocketProvider } from "./app/presentation/context/SocketContext";

export const EmployesApp = () => {
  return (
    <SocketProvider>
      <HomePage />
    </SocketProvider>
  );
};
