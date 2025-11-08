"use client";

import { useState } from "react";
import {
  SignupWrapper,
  SignupCard,
  IconCircle,
  InputBox,
  InputField,
  SignupButton,
  FooterText,
} from "./SignupPageStyle";

import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { signupUser } from "@/app/redux/thunk/authThunks";
import { signupApi } from "@/app/redux/api/signupApi";
import { CircularProgress } from "@mui/material";

export default function SignupPage() {
  //   const dispatch = useAppDispatch();
  const router = useRouter();

  //   const { loading, error } = useAppSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState("");

  //   const handleSignup = () => {
  //     if (!name.trim() || !email.trim() || !password.trim()) return;

  //     if (password !== confirmPass) {
  //       alert("Passwords do not match");
  //       return;
  //     }
  //     dispatch(
  //       signupUser({
  //         username: name,
  //         email,
  //         password,
  //         password2: confirmPass,
  //       })
  //     )
  //       .unwrap()
  //       .then(() => router.push("/login"))
  //       .catch(() => {});
  //   };
  const handleSignup = async () => {
    setLoading("loading");
    if (!name.trim() || !email.trim() || !password.trim()) return;

    if (password !== confirmPass) {
      alert("Passwords do not match");
      return;
    }

    try {
      await signupApi(name, email, password, confirmPass);

      alert("Signup successful!");
      setLoading("success");
      router.push("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <SignupWrapper>
      <SignupCard>
        <IconCircle>
          <span style={{ fontSize: "28px", color: "rgb(99,102,241)" }}>📝</span>
        </IconCircle>

        <h1
          style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Create Account
        </h1>

        <p style={{ color: "#555", marginBottom: "25px", fontSize: "14px" }}>
          Join ChatApp to start messaging with your friends.
        </p>

        {/* {error && (
          <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
        )} */}

        {/* Name */}
        <InputBox>
          <label>Full Name</label>
          <InputField
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
          />
        </InputBox>

        {/* Email */}
        <InputBox>
          <label>Email Address</label>
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
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputBox>

        {/* Confirm Password */}
        <InputBox>
          <label>Confirm Password</label>
          <InputField
            type="password"
            placeholder="Re-enter password"
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </InputBox>

        <SignupButton onClick={handleSignup}>
          {loading === "loading" ? <CircularProgress /> : "Sign Up"}
        </SignupButton>

        <FooterText>
          Already have an account? <a href="/login">Login</a>
        </FooterText>
      </SignupCard>
    </SignupWrapper>
  );
}
