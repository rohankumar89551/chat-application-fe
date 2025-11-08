export const signupApi = async (
  username: string,
  email: string,
  password: string,
  password2: string
) => {
  const response = await fetch(
    "https://chat-app-auth.onrender.com/api/auth/register/",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
        password2,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Signup failed");
  }

  return data;
};
