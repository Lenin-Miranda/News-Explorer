import { checkResponse } from "./Api";
const apiKey = import.meta.env.VITE_NEWS_API_KEY; // Asegúrate de que tu .env tenga este nombre
const API_URL = "https://newsapi.org/v2/everything";

export const fetchNews = async (query = "bitcoin") => {
  try {
    const res = await fetch(
      `${API_URL}?q=${encodeURIComponent(query)}&apiKey=${apiKey}&pageSize=100`
    );
    return await checkResponse(res);
  } catch (err) {
    console.error("Error al obtener noticias:", err);
    throw err;
  }
};
