import { styled } from "@mui/material/styles";

export const MessagesWrapper = styled("div")(() => ({
  flex: 1,
  overflowY: "auto",
  padding: "20px",
  background: "#f8f9fb",
}));

export const LeftMessageRow = styled("div")(() => ({
  display: "flex",
  marginBottom: "15px",
}));

export const RightMessageRow = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "15px",
}));

export const LeftAvatar = styled("img")(() => ({
  width: 35,
  height: 35,
  borderRadius: "50%",
  marginRight: "10px",
}));

export const LeftBubble = styled("div")(() => ({
  backgroundColor: "#e5e7eb",
  padding: "10px 15px",
  borderRadius: "12px",
  maxWidth: "40%",
}));

export const RightBubble = styled("div")(() => ({
  backgroundColor: "#4c5bf3",
  color: "white",
  padding: "12px 16px",
  borderRadius: "12px",
  maxWidth: "40%",
}));

export const TimeStamp = styled("div")(() => ({
  fontSize: "10px",
  opacity: 0.8,
  marginTop: "4px",
}));

export const MessageRow = styled("div")<{ isMe: boolean }>(({ isMe }) => ({
  display: "flex",
  flexDirection: isMe ? "row-reverse" : "row",
  alignItems: "flex-end",
  gap: "10px",
  marginBottom: "15px",
}));

export const AvatarBubble = styled("div")<{ isMe: boolean }>(({ isMe }) => ({
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
}));

export const MessageBubble = styled("div")<{ isMe: boolean }>(({ isMe }) => ({
  maxWidth: "60%",
  backgroundColor: isMe ? "#4C75F2" : "white",
  color: isMe ? "white" : "black",
  padding: "12px 16px",
  borderRadius: "14px",
  borderTopLeftRadius: isMe ? "14px" : "0",
  borderTopRightRadius: isMe ? "0" : "14px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
}));


