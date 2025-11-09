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

interface ChatHeaderProps {
  messages: {
    user?: string;
    text?: string;
    time: string;
    type: string;
  }[];
  username: string;
}
export default function ChatHeader({ messages, username }: ChatHeaderProps) {
  // const [userDetails, setUserDeatils] = useState<
  //   { user: string; text: string; time: string }[]
  // >([]);
  // const ws = useRef<WebSocket | null>(null);

  // useEffect(() => {
  //   const socket = getSocket();
  //   if (!socket) return;

  //   const handleMessage = (event: MessageEvent) => {
  //     const data = JSON.parse(event.data);
  //     console.log("Header Received:", data);
  //     setUserDeatils((prev) => [...prev, data]);
  //   };

  //   socket.addEventListener("message", handleMessage);

  //   return () => {
  //     socket.removeEventListener("message", handleMessage);
  //   };
  // }, []);

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <HeaderAvatar src="https://i.pravatar.cc/40" />
        <div>
          <HeaderUsername>{username}</HeaderUsername>

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
