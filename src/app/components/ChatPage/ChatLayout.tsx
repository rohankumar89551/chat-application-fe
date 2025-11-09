"use client";

import ChatHeader from "../ChatHeader/ChatHeader";
import MessageList from "../MessageList/MessageList";
import MessageInput from "../MessgaeInput/MessageInput";
import Sidebar from "../SideBar/Sidebar";
import { ChatContainer } from "./ChatLayoutStyle";

interface ChatLayoutProps {
  messages: {
    user?: string;
    text?: string;
    time: string;
    type: string;
  }[];
  username: string;
}
export default function ChatLayout({ messages, username }: ChatLayoutProps) {
  return (
    <ChatContainer>
      <Sidebar messages={messages} username={username} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <ChatHeader messages={messages} username={username} />
        <MessageList messages={messages} username={username} />
        <MessageInput messages={messages} username={username} />
      </div>
    </ChatContainer>
  );
}
