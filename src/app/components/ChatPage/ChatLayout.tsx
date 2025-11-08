"use client";

import ChatHeader from "../ChatHeader/ChatHeader";
import MessageList from "../MessageList/MessageList";
import MessageInput from "../MessgaeInput/MessageInput";
import Sidebar from "../SideBar/Sidebar";
import { ChatContainer } from "./ChatLayoutStyle";

export default function ChatLayout() {
  return (
    <ChatContainer>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <ChatHeader />
        <MessageList />
        <MessageInput />
      </div>
    </ChatContainer>
  );
}
