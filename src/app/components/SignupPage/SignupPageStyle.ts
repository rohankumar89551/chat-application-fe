"use client";

import { styled } from "@mui/material/styles";

export const SignupWrapper = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f5f6fa",
  padding: "20px",
}));

export const SignupCard = styled("div")(({ theme }) => ({
  background: "#ffffff",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  borderRadius: "15px",
  padding: "40px",
  width: "100%",
  maxWidth: "420px",
  textAlign: "center",
  border: "1px solid rgba(0,0,0,0.12)",

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

export const InputBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  marginBottom: "18px",
}));

export const InputField = styled("input")(({ theme }) => ({
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid rgba(0,0,0,0.25)",
  outline: "none",
  fontSize: "14px",
  marginTop: "6px",

  "&:focus": {
    border: "1px solid rgba(99,102,241,0.5)",
    boxShadow: "0 0 0 2px rgba(99,102,241,0.15)",
  },
}));

export const SignupButton = styled("button")(({ theme }) => ({
  width: "100%",
  background: "rgb(99,102,241)",
  color: "#fff",
  padding: "14px",
  borderRadius: "8px",
  fontWeight: 600,
  fontSize: "14px",
  border: "none",
  cursor: "pointer",
  marginTop: "10px",

  "&:hover": {
    background: "rgb(79, 82, 221)",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "12px",
  },
}));

export const FooterText = styled("p")(({ theme }) => ({
  marginTop: "20px",
  fontSize: "14px",
  color: "#666",

  "& a": {
    color: "rgb(99,102,241)",
    textDecoration: "none",
    fontWeight: "600",
  }
}));
