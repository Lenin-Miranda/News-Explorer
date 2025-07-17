import { checkResponse } from "./Api";
const apiKey = "494e42497aaa4cd8ba25c47c7bdcb23f";
const API_URL = "https://newsapi.org/v2/everything";

export const fetchNews = async () => {
  try {
    const res = await fetch(`https://news-backend-7l4u.onrender.com/news`);
    return await checkResponse(res);
  } catch (err) {
    console.error("Error al obtener noticias:", err);
    throw err;
  }
};
