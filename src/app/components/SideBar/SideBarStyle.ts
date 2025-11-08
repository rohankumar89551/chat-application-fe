import { styled } from "@mui/material/styles";

export const SidebarWrapper = styled("div")(() => ({
  width: "320px",
  borderRight: "1px solid #e5e7eb",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
}));

export const SidebarHeader = styled("div")(() => ({
  padding: "20px",
  fontWeight: 700,
  fontSize: "20px",
  borderBottom: "1px solid #e5e7eb",
}));

export const SearchBox = styled("input")(() => ({
  width: "100%",
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  outline: "none",
}));

export const ChatsList = styled("div")(() => ({
  overflowY: "auto",
  flex: 1,
}));

export const ChatItem = styled("div")(() => ({
  padding: "15px",
  borderBottom: "1px solid #f1f1f1",
  cursor: "pointer",
  display: "flex",
  gap: "12px",
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
}));

export const AvatarImg = styled("img")(() => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
}));
