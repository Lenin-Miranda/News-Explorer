import { checkResponse } from "./Api";

export const fetchNews = async (query) => {
  try {
    const res = await fetch(
      `https://news-backend-7l4u.onrender.com/news?q=${encodeURIComponent(
        query
      )}`
    );
    return await checkResponse(res);
  } catch (err) {
    console.error("Error al obtener noticias:", err);
    throw err;
  }
};
