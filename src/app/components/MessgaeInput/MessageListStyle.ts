import { styled } from "@mui/material/styles";

export const InputWrapper = styled("div")(() => ({
  padding: "15px",
  backgroundColor: "white",
  borderTop: "1px solid #e5e7eb",
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

export const AddButton = styled("button")(() => ({
  background: "transparent",
  border: "none",
  fontSize: "22px",
  cursor: "pointer",
}));

export const MessageInputField = styled("input")(() => ({
  flex: 1,
  borderRadius: "20px",
  border: "1px solid #ddd",
  padding: "10px 15px",
  outline: "none",
}));

export const SendButton = styled("button")(() => ({
  backgroundColor: "#4c5bf3",
  color: "white",
  borderRadius: "50%",
  border: "none",
  padding: "10px 12px",
  fontSize: "20px",
  cursor: "pointer",
}));
