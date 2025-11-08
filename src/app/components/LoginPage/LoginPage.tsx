"use client";

import { useState } from "react";
import {
  LoginWrapper,
  LoginCard,
  IconCircle,
  InputBox,
  InputField,
  LoginButton,
  FooterText,
} from "./LoginPageStyle";
import { loginApi } from "@/app/redux/api/loginApi";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  const handleLogin = async () => {
    setLoading("loading");
    if (!email.trim() || !password.trim()) return;

    try {
      const res = await loginApi(email, password);

      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      setLoading("success");
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <LoginWrapper>
      <LoginCard>
        <IconCircle>
          <span style={{ fontSize: "30px", color: "rgb(99,102,241)" }}>🔐</span>
        </IconCircle>

        <h1
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#111",
          }}
        >
          Welcome Back
        </h1>

        <p
          style={{
            color: "#555",
            marginBottom: "30px",
            fontSize: "14px",
          }}
        >
          Login to continue to your chat
        </p>

        {/* Email */}
        <InputBox>
          <label>Email</label>
          <InputField
            type="email"
            placeholder="yourname@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputBox>

        {/* Password */}
        <InputBox>
          <label>Password</label>
          <InputField
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputBox>

        <LoginButton onClick={handleLogin}>
          {loading === "loading" ? <CircularProgress /> : "Login"}
        </LoginButton>

        <FooterText>
          Don't have an account? <a href="/signup">Sign Up</a>
        </FooterText>
      </LoginCard>
    </LoginWrapper>
  );
}
