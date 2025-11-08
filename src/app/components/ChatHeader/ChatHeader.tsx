"use client";

import { useEffect, useRef, useState } from "react";
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderAvatar,
  HeaderUsername,
  HeaderStatus,
  HeaderActions,
} from "./ChatHeaderStyle";
import { getSocket } from "@/app/services/WebSocketService";


export default function ChatHeader() {
  const [userDetails, setUserDeatils] = useState<
    { user: string; text: string; time: string }[]
  >([]);
  const ws = useRef<WebSocket | null>(null);

useEffect(() => {
  const socket = getSocket();
  if (!socket) return;

  const handleMessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data);
    console.log("Header Received:", data);
    setUserDeatils((prev) => [...prev, data]);
  };

  socket.addEventListener("message", handleMessage);

  return () => {
    socket.removeEventListener("message", handleMessage);
  };
}, []);

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <HeaderAvatar src="https://i.pravatar.cc/40" />
        <div>
          {userDetails && (
            <HeaderUsername>{userDetails[0]?.user}</HeaderUsername>
          )}
          <HeaderStatus>Online</HeaderStatus>
        </div>
      </HeaderLeft>

      <HeaderActions>
        <span>📞</span>
        <span>🎥</span>
        <span>⋮</span>
      </HeaderActions>
    </HeaderWrapper>
  );
}
