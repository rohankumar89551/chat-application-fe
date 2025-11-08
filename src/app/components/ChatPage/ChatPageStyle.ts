import { styled } from "@mui/material/styles";

// JOIN PAGE WRAPPER
export const JoinWrapper = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f5f6fa",
  padding: "20px",
  position: "relative",
}));

export const JoinCard = styled("div")(({ theme }) => ({
  background: "#fff",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  borderRadius: "15px",
  padding: "40px",
  width: "100%",
  maxWidth: "420px",
  textAlign: "center",
  border: "1px solid rgba(0,0,0,0.1)",

  [theme.breakpoints.down("sm")]: {
    padding: "28px",
  },
}));

export const IconCircle = styled("div")(({ theme }) => ({
  width: "60px",
  height: "60px",
  margin: "0 auto 20px",
  background: "rgba(99,102,241,0.15)",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const InputContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  border: "1px solid rgba(0,0,0,0.25)",
  padding: "12px",
  borderRadius: "8px",
  marginBottom: "25px",
}));

export const JoinButton = styled("button")(({ theme }) => ({
  width: "100%",
  background: "rgb(99,102,241)",
  color: "#fff",
  padding: "14px",
  borderRadius: "8px",
  fontWeight: 600,
  fontSize: "14px",
  border: "none",
  cursor: "pointer",

  [theme.breakpoints.down("sm")]: {
    padding: "12px",
  },
}));

// CHAT PAGE WRAPPER
export const ChatWrapper = styled("div")(({ theme }) => ({
  // maxWidth: "900px",
  margin: "0 auto",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  border: "1px solid #ddd",
  backgroundColor: "#f5f6fa",
  fontFamily: "Arial, sans-serif",

  [theme.breakpoints.down("sm")]: {
    border: "none",
    maxWidth: "100%",
  },
}));

export const ChatHeader = styled("div")(({ theme }) => ({
  padding: "10px 15px",
  backgroundColor: "white",
  borderBottom: "1px solid #ddd",
  fontSize: "20px",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: "17px",
    padding: "12px",
  },
}));

export const AvatarContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 10,
});

export const AvatarBubble = styled("div")<{
  isMe?: boolean;
}>(({ isMe }) => ({
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

export const MessagesContainer = styled("div")(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",

  [theme.breakpoints.down("sm")]: {
    padding: "12px",
  },
}));

export const MessageRow = styled("div")<{
  isMe?: boolean;
}>(({ isMe }) => ({
  display: "flex",
  flexDirection: isMe ? "row-reverse" : "row",
  alignItems: "flex-end",
  gap: "10px",
}));

export const MessageBubble = styled("div")<{
  isMe?: boolean;
}>(({ isMe }) => ({
  maxWidth: "60%",
  backgroundColor: isMe ? "#4C75F2" : "white",
  color: isMe ? "white" : "black",
  padding: "12px 16px",
  borderRadius: "14px",
  borderTopLeftRadius: isMe ? "14px" : "0",
  borderTopRightRadius: isMe ? "0" : "14px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",

  "@media (max-width: 600px)": {
    maxWidth: "75%",
    padding: "10px 14px",
  },
}));

export const InputSection = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "15px",
  borderTop: "1px solid #ddd",
  backgroundColor: "white",
  gap: "10px",

  [theme.breakpoints.down("sm")]: {
    padding: "12px",
    gap: "8px",
  },
}));

export const ChatInput = styled("input")(({ theme }) => ({
  flex: 1,
  padding: "12px",
  borderRadius: "25px",
  border: "1px solid #ccc",
  fontSize: "16px",
  outline: "none",

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    padding: "10px",
  },
}));

export const SendButton = styled("button")(({ theme }) => ({
  backgroundColor: "#4C75F2",
  border: "none",
  color: "white",
  padding: "0 20px",
  borderRadius: "50%",
  fontSize: "20px",
  cursor: "pointer",

  [theme.breakpoints.down("sm")]: {
    padding: "0 14px",
    fontSize: "18px",
  },
}));
