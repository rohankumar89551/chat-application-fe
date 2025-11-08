"use client";

import { useEffect, useRef, useState } from "react";
import {
  AvatarBubble,
  AvatarContainer,
  ChatHeader,
  ChatInput,
  ChatWrapper,
  IconCircle,
  InputContainer,
  InputSection,
  JoinButton,
  JoinCard,
  JoinWrapper,
  MessageBubble,
  MessageRow,
  MessagesContainer,
  SendButton,
} from "./ChatPageStyle";
import ChatLayout from "./ChatLayout";
import { createSocket } from "@/app/services/WebSocketService";

// const WS_URL = "wss://demo.piesocket.com/v3/channel_123?api_key=demo&notify_self=1";
const WS_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL ?? "";
export default function ChatPage() {
  const [username, setUsername] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { user: string; text: string; time: string }[]
  >([]);

  const ws = useRef<WebSocket | null>(null);

  const joinChat = () => {
    if (!username.trim()) return;

    // ✅ Save user in session storage
    sessionStorage.setItem("chatUser", JSON.stringify({ username }));

    setIsJoined(true);
  };

  // useEffect(() => {
  //   if (!isJoined) return;
  //   ws.current = new WebSocket(WS_URL);
  //   ws.current.onopen = () => {
  //     ws.current?.send(
  //       JSON.stringify({
  //         type: "join",
  //         user: username,
  //         time: new Date().toLocaleTimeString(),
  //       })
  //     );
  //   };
  //   ws.current.onmessage = (event) => {
  //     const data = JSON.parse(event.data);
  //     setMessages((prev) => [...prev, data]); // ✅ show message
  //   };
  //   return () => ws.current?.close();
  // }, [isJoined]);
  useEffect(() => {
    if (!isJoined) return;
    const socket = createSocket(WS_URL);
    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          type: "join",
          user: username,
          time: new Date().toLocaleTimeString(),
        })
      );
    };
    return () => ws.current?.close();
  }, [isJoined]);
  const sendMessage = () => {
    if (!message.trim()) return;

    ws.current?.send(
      JSON.stringify({
        type: "message",
        user: username,
        text: message,
        time: new Date().toLocaleTimeString(),
      })
    );

    setMessage("");
  };

  if (!isJoined) {
    return (
      <JoinWrapper>
        <JoinCard>
          <IconCircle style={{ fontSize: 0 }}>💬</IconCircle>

          <h1 style={{ fontSize: 22, fontWeight: "bold" }}>
            Welcome to ChatApp
          </h1>
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
    );
  }

  return (
    <ChatWrapper>
      {/* <ChatHeader>
        Chat Application
        <AvatarContainer>
          {messages.map((msg, i) => (
            <AvatarBubble key={i} isMe={msg.user === username}>
              {msg.user[0]}
            </AvatarBubble>
          ))}
        </AvatarContainer>
      </ChatHeader>

      <MessagesContainer>
        {messages.map((msg, i) => {
          const isMe = msg.user === username;
          return (
            <MessageRow key={i} isMe={isMe}>
              <AvatarBubble isMe={isMe}>{msg.user[0]}</AvatarBubble>
              <MessageBubble isMe={isMe}>
                <div style={{ fontWeight: 600 }}>{msg.user}</div>
                <div>{msg.text}</div>
                <div style={{ fontSize: 11, opacity: 0.7 }}>{msg.time}</div>
              </MessageBubble>
            </MessageRow>
          );
        })}
      </MessagesContainer>

      <InputSection>
        <ChatInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <SendButton onClick={sendMessage}>➤</SendButton>
      </InputSection> */}
      <ChatLayout />
    </ChatWrapper>
  );
}
