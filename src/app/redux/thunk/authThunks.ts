import { createAsyncThunk } from "@reduxjs/toolkit";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// LOGIN
export const loginUser = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await fetch(`${API_BASE_URL}/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) return rejectWithValue(data.message);

      return data; // token + user
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

// SIGNUP
export const signupUser = createAsyncThunk(
  "auth/signup",
  async (
    { username, email, password, password2 }: any,
    { rejectWithValue }
  ) => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, password2 }),
      });

      const data = await res.json();
      if (!res.ok) return rejectWithValue(data.message);

      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
