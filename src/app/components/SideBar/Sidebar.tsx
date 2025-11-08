"use client";

import { useEffect, useState } from "react";
import {
  SidebarWrapper,
  SidebarHeader,
  SearchBox,
  ChatsList,
  ChatItem,
  AvatarImg,
} from "./SideBarStyle";
import { getSocket } from "@/app/services/WebSocketService";

export default function Sidebar() {
  const [user, setUser] = useState("");
  const [messages, setMessages] = useState<
    { user: string; text?: string; time: string; type: string }[]
  >([]);
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    const socket = getSocket();
    const saved = sessionStorage.getItem("chatUser");

    if (saved) {
      const parsed = JSON.parse(saved);
      setUser(parsed.username);
    }

    if (!socket) return;

    const handleMessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      console.log("Sidebar Received:", data);

      // ✅ Save message
      setMessages((prev) => [...prev, data]);

      // ✅ Save user (joined OR messaged)
      setUsers((prevUsers) => {
        if (!prevUsers.includes(data.user)) {
          return [...prevUsers, data.user];
        }
        return prevUsers;
      });
    };

    socket.addEventListener("message", handleMessage);

    return () => {
      socket.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <SidebarWrapper>
      <SidebarHeader>Chats</SidebarHeader>

      <div style={{ padding: "10px" }}>
        <SearchBox placeholder="Search" />
      </div>

      <ChatsList>
        {users.map((u, index) => (
          <ChatItem key={index}>
            <AvatarImg src={`https://i.pravatar.cc/40?u=${u}`} />

            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: "bold" }}>{u}</div>
              <div style={{ color: "#666", fontSize: "12px" }}>
                {u === user ? "You joined" : `${u} joined`}
              </div>
            </div>

            <div style={{ fontSize: "12px", color: "#666" }}>
              {messages.find((m) => m.user === u)?.time || ""}
            </div>
          </ChatItem>
        ))}
      </ChatsList>
    </SidebarWrapper>
  );
}
