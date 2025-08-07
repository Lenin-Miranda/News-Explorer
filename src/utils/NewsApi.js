import { checkResponse } from "./Api";
const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://news-backend-7l4u.onrender.com"
    : "http://localhost:3001/";

export const fetchNews = async (query) => {
  try {
    const res = await fetch(`${API_URL}/news?q=${encodeURIComponent(query)}`);
    return await checkResponse(res);
  } catch (err) {
    console.error("Error al obtener noticias:", err);
    throw err;
  }
};
