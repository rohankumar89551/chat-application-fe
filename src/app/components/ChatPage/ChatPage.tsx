"use client";

import { useEffect, useRef, useState } from "react";
import {
  JoinWrapper,
  JoinCard,
  IconCircle,
  InputContainer,
  JoinButton,
  ChatWrapper,
} from "./ChatPageStyle";

import ChatLayout from "./ChatLayout";
import { createSocket } from "@/app/services/WebSocketService";

const WS_URL =
  (process.env.NEXT_PUBLIC_WEBSOCKET_URL as string) ||
  "wss://chat-application-be-okes.onrender.com";

export default function ChatPage() {
  const [username, setUsername] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  const ws = useRef<WebSocket | null>(null);

  const joinChat = () => {
    if (!username.trim()) return;

    sessionStorage.setItem("chatUser", JSON.stringify({ username }));
    setIsJoined(true);
  };

  useEffect(() => {
    if (!isJoined) return;

    // ✅ create or reuse socket
    const socket = createSocket(WS_URL);
    ws.current = socket;

    // ✅ send join only when socket is open
    const sendJoin = () => {
      const joinData = {
        type: "join",
        user: username,
        time: new Date().toLocaleTimeString(),
      };

      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(joinData));
      } else {
        const interval = setInterval(() => {
          if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify(joinData));
            clearInterval(interval);
          }
        }, 150);
      }
    };

    sendJoin();

    // ✅ listen to messages (without overwriting)
    const handleMessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, data]);
    };

    socket.addEventListener("message", handleMessage);

    return () => {
      socket.removeEventListener("message", handleMessage);
    };
  }, [isJoined]);

  return !isJoined ? (
    <JoinWrapper>
      <JoinCard>
        <IconCircle>💬</IconCircle>

        <h1 style={{ fontSize: 22, fontWeight: "bold" }}>Welcome to ChatApp</h1>
        <p style={{ padding: 10, fontSize: 15, color: "grey" }}>
          Enter your username to join the conversation.
        </p>

        <div style={{ textAlign: "left", marginBottom: 6 }}>Username</div>

        <InputContainer>
          <span>👤</span>
          <input
            style={{ width: "100%", border: "none", outline: "none" }}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputContainer>

        <JoinButton onClick={joinChat}>Join Chat →</JoinButton>
      </JoinCard>
    </JoinWrapper>
  ) : (
    <ChatWrapper>
      <ChatLayout messages={messages} username={username} />
    </ChatWrapper>
  );
}
