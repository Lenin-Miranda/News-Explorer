import { API_BASE_URL } from "./Api";

export const login = async (email, password) => {
  const res = await fetch(`${API_BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Error logging in");

  return data;
};

export const checkToken = async (token) => {
  const res = await fetch(`${API_BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Error fetching user profile");
  return res.json();
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const signup = async (name, email, password) => {
  const res = await fetch(`${API_BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Error registering user");
  return data;
};
