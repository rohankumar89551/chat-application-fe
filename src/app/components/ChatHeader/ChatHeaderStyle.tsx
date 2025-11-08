import { styled } from "@mui/material/styles";

export const HeaderWrapper = styled("div")(() => ({
  padding: "15px 20px",
  backgroundColor: "white",
  borderBottom: "1px solid #e5e7eb",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const HeaderLeft = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
}));

export const HeaderAvatar = styled("img")(() => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
}));

export const HeaderUsername = styled("div")(() => ({
  fontWeight: 700,
  fontSize: "18px",
}));

export const HeaderStatus = styled("div")(() => ({
  fontSize: "12px",
  color: "green",
}));

export const HeaderActions = styled("div")(() => ({
  display: "flex",
  gap: "15px",
  cursor: "pointer",
}));
