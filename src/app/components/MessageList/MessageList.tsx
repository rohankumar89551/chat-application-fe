"use client";

import { useEffect, useState } from "react";
import {
  MessagesWrapper,
  LeftMessageRow,
  RightMessageRow,
  LeftAvatar,
  LeftBubble,
  RightBubble,
  TimeStamp,
  MessageRow,
  AvatarBubble,
  MessageBubble,
} from "./MessgaeListStyle";
import { getSocket } from "@/app/services/WebSocketService";

export default function MessageList() {
  const [user, setUser] = useState();
  const [messages, setMessages] = useState<
    { user: string; text: string; time: string }[]
  >([]);
  useEffect(() => {
    const socket = getSocket();
    const saved = sessionStorage.getItem("chatUser");

    if (saved) {
      const parsed = JSON.parse(saved);
      setUser(parsed.username);
    }

    if (!socket) {
      console.log("No socket found, user did not join yet");
      return;
    }

    // ✅ use addEventListener (so we don't override other components)
    const handleMessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      console.log("ChatPage Received:", data);
      setMessages((prev) => [...prev, data]);
    };

    socket.addEventListener("message", handleMessage);

    // ✅ cleanup
    return () => {
      socket.removeEventListener("message", handleMessage);
    };
  }, []);

  console.log("userzzzzzz", user, messages);
  return (
    <MessagesWrapper>
      {messages.map((msg, index) => {
        const isMe = msg.user === user;
        return (
          <MessageRow key={index} isMe={isMe}>
            {/* Avatar */}
            <AvatarBubble isMe={isMe}>{msg.user?.[0]}</AvatarBubble>

            {/* Message */}
            <MessageBubble isMe={isMe}>
              <div style={{ fontWeight: "bold", marginBottom: "3px" }}>
                {msg.user}
              </div>

              <div style={{ fontSize: "15px" }}>
                {msg.text || `${msg.user} joined the chat`}
              </div>

              <TimeStamp>{msg.time}</TimeStamp>
            </MessageBubble>
          </MessageRow>
        );
      })}
    </MessagesWrapper>
  );
}
