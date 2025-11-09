"use client";

import { useEffect, useState } from "react";
import {
  InputWrapper,
  AddButton,
  MessageInputField,
  SendButton,
} from "./MessageListStyle";
import { createSocket, getSocket } from "@/app/services/WebSocketService";

interface MessageInputProps {
  messages: {
    user?: string;
    text?: string;
    time: string;
    type: string;
  }[];
  username: string;
}

const WS_URL =
  (process.env.NEXT_PUBLIC_WEBSOCKET_URL as string) ||
  "wss://chat-application-be-okes.onrender.com";
export default function MessageInput({
  messages,
  username,
}: MessageInputProps) {
  const [userDetails, setUserDeatils] = useState<
    { user: string; text: string; time: string }[]
  >([]);
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   const socket = getSocket();

  //   if (!socket) {
  //     console.log("No socket found, user did not join yet");
  //     return;
  //   }

  //   socket.onmessage = (event) => {
  //     const data = JSON.parse(event.data);
  //     console.log("Received:", data);
  //     setUserDeatils((prev) => [...prev, data]);
  //   };
  // }, []);
  const sendMessage = () => {
    console.log("Hello");
    const socket = createSocket(WS_URL);
    if (!message.trim()) return;
    socket.send(
      JSON.stringify({
        type: "message",
        user: username,
        text: message,
        time: new Date().toLocaleTimeString(),
      })
    );

    setMessage("");
  };
  return (
    <InputWrapper>
      <AddButton>＋</AddButton>

      <MessageInputField
        placeholder="Type a message..."
        onChange={(e) => setMessage(e.target.value)}
      />

      <SendButton onClick={sendMessage}>➤</SendButton>
    </InputWrapper>
  );
}
