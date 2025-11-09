"use client";

import {
  SidebarWrapper,
  SidebarHeader,
  SearchBox,
  ChatsList,
  ChatItem,
  AvatarImg,
} from "./SideBarStyle";

interface SideBarProps {
  messages: {
    user?: string;
    text?: string;
    time: string;
    type: string;
  }[];
  username: string;
}

export default function Sidebar({ messages, username }: SideBarProps) {
  // ✅ Extract unique users from join events
  const users = Array.from(
    new Set(
      messages
        .filter((msg) => msg.type === "join" && msg.user)
        .map((msg) => msg.user)
    )
  );

  return (
    <SidebarWrapper>
      <SidebarHeader>Chats</SidebarHeader>

      <div style={{ padding: "10px" }}>
        <SearchBox placeholder="Search" />
      </div>

      <ChatsList>
        {users.map((u, index) => {
          // ✅ Find last activity of the user
          const lastActivity = messages
            .filter((m) => m.user === u)
            .at(-1)?.time;

          return (
            <ChatItem key={index}>
              <AvatarImg src={`https://i.pravatar.cc/40?u=${u}`} />

              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: "bold" }}>{u}</div>
                <div style={{ color: "#666", fontSize: "12px" }}>
                  {u === username ? "You joined" : `${u} joined`}
                </div>
              </div>

              <div style={{ fontSize: "12px", color: "#666" }}>
                {lastActivity || ""}
              </div>
            </ChatItem>
          );
        })}
      </ChatsList>
    </SidebarWrapper>
  );
}
