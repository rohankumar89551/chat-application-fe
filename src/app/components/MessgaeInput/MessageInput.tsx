"use client";

import { useEffect, useState } from "react";
import {
  InputWrapper,
  AddButton,
  MessageInputField,
  SendButton,
} from "./MessageListStyle";
import { createSocket, getSocket } from "@/app/services/WebSocketService";
const WS_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL ?? "";
export default function MessageInput() {
  const [userDetails, setUserDeatils] = useState<
    { user: string; text: string; time: string }[]
  >([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = getSocket();

    if (!socket) {
      console.log("No socket found, user did not join yet");
      return;
    }

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received:", data);
      setUserDeatils((prev) => [...prev, data]);
    };
  }, []);
  const sendMessage = () => {
    console.log("Hello");
    const socket = createSocket(WS_URL);
    if (!message.trim()) return;
    socket.send(
      JSON.stringify({
        type: "message",
        user: userDetails[0]?.user,
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
