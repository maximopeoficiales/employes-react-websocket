import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

export const useSocket = (serverPatch: string) => {

    const socket = useMemo(() => io(serverPatch, { transports: ["websocket"] }), [serverPatch]);
    const [online, setOnline] = useState(false);

    useEffect(() => {
        socket.on("connect", () => {
            console.log("Conectado",socket.id);
            setOnline(true);
        });

    }, [socket]);

    useEffect(() => {
        socket.on("disconnect", () => {
            setOnline(false);
        });
    }, [socket]);

    return { socket, online };

}