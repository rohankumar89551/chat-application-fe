"use client";

import { useEffect, useRef, useState } from "react";

// const WS_URL = "wss://demo.piesocket.com/v3/channel_123?api_key=demo&notify_self=1";
const WS_URL = "wss://chat-application-be-okes.onrender.com";

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

  //     setMessages((prev) => [...prev, data]);
  //   };

  //   return () => ws.current?.close();
  // }, [isJoined]);

  useEffect(() => {
    if (!isJoined) return;
    ws.current = new WebSocket(WS_URL);
    ws.current.onopen = () => {
      ws.current?.send(
        JSON.stringify({
          type: "join",
          user: username,
          time: new Date().toLocaleTimeString(),
        })
      );
    };
    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, data]); // ✅ show message
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
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f6fa",
          padding: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "#fff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            borderRadius: "15px",
            padding: "40px",
            width: "100%",
            maxWidth: "420px",
            textAlign: "center",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          {/* ICON */}
          <div
            style={{
              width: "60px",
              height: "60px",
              margin: "0 auto 20px",
              background: "rgba(99,102,241,0.15)",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "30px", color: "rgb(99,102,241)" }}>
              💬
            </span>
          </div>

          {/* TITLE */}
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#111",
              marginBottom: "8px",
            }}
          >
            Welcome to ChatApp
          </h1>

          <p
            style={{
              color: "#555",
              marginBottom: "30px",
              fontSize: "14px",
            }}
          >
            Enter your username to join the conversation.
          </p>

          {/* LABEL */}
          <div
            style={{
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "600",
              color: "#333",
              marginBottom: "6px",
            }}
          >
            Username
          </div>

          {/* INPUT CONTAINER */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid rgba(0,0,0,0.25)",
              padding: "12px",
              borderRadius: "8px",
              marginBottom: "25px",
            }}
          >
            <span style={{ color: "#666" }}>👤</span>
            <input
              placeholder="e.g., JaneDoe"
              style={{
                border: "none",
                outline: "none",
                flex: 1,
                fontSize: "14px",
              }}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          {/* BUTTON */}
          <button
            style={{
              width: "100%",
              background: "rgb(99,102,241)",
              color: "#fff",
              padding: "14px",
              borderRadius: "8px",
              fontWeight: "600",
              fontSize: "14px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={(e) => {
              joinChat();
            }}
          >
            Join Chat →
          </button>
        </div>

        {/* FOOTER */}
        <footer
          style={{
            position: "absolute",
            bottom: "20px",
            fontSize: "14px",
            color: "#777",
          }}
        >
          © 2024 ChatApp. All rights reserved.
        </footer>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ddd",
        backgroundColor: "#f5f6fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* ✅ Header */}
      <div
        style={{
          padding: "10px 15px",
          backgroundColor: "white",
          borderBottom: "1px solid #ddd",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Chat Application
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          {messages.map((msg, i) => {
            const isMe = msg.user === username;
            return (
              <>
                <div
                  key={i}
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    backgroundColor: isMe ? "#4C75F2" : "#ddd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isMe ? "white" : "black",
                    fontWeight: "bold",
                    fontSize: "14px",
                    textTransform: "uppercase",
                  }}
                >
                  {msg.user?.[0]}
                </div>
                <div>{msg.user}</div>
              </>
            );
          })}
        </div>
      </div>

      {/* ✅ Messages Container */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {messages.map((msg, i) => {
          const isMe = msg.user === username;

          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: isMe ? "row-reverse" : "row",
                alignItems: "flex-end",
                gap: "10px",
              }}
            >
              {/* ✅ Avatar Circle */}
              <div
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  backgroundColor: isMe ? "#4C75F2" : "#ddd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isMe ? "white" : "black",
                  fontWeight: "bold",
                  fontSize: "14px",
                  textTransform: "uppercase",
                }}
              >
                {msg.user?.[0]}
              </div>

              {/* ✅ Message Bubble */}
              <div
                style={{
                  maxWidth: "60%",
                  backgroundColor: isMe ? "#4C75F2" : "white",
                  color: isMe ? "white" : "black",
                  padding: "12px 16px",
                  borderRadius: "14px",
                  borderTopLeftRadius: isMe ? "14px" : "0",
                  borderTopRightRadius: isMe ? "0" : "14px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    marginBottom: "3px",
                    fontSize: "13px",
                  }}
                >
                  {msg.user}
                </div>

                <div style={{ fontSize: "15px" }}>
                  {msg.text || `${msg.user} joined the chat`}
                </div>

                <div
                  style={{
                    marginTop: "5px",
                    fontSize: "11px",
                    opacity: 0.7,
                    textAlign: isMe ? "right" : "left",
                  }}
                >
                  {msg.time}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ✅ Input Section */}
      <div
        style={{
          display: "flex",
          padding: "15px",
          borderTop: "1px solid #ddd",
          backgroundColor: "white",
          gap: "10px",
        }}
      >
        <input
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "25px",
            border: "1px solid #ccc",
            fontSize: "16px",
            outline: "none",
          }}
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={sendMessage}
          style={{
            backgroundColor: "#4C75F2",
            border: "none",
            color: "white",
            padding: "0 20px",
            borderRadius: "50%",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          ➤
        </button>
      </div>
    </div>
  );
}
