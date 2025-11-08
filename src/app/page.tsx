"use client";

import ChatPage from "./components/ChatPage/ChatPage";
import AuthGuard from "./components/Protected/AuthGuard";

// import ChatPage from "@/components/ChatPage/ChatPage";

export default function Home() {
  return (
    <AuthGuard>
      <div
        style={{
          // border: "2px solid red",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "space-between",
        }}
      >
        {/* <div style={{ border: "2px solid red" }}>Hello user container</div> */}
        <ChatPage />
      </div>
    </AuthGuard>
  );
}
