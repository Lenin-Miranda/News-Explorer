import { checkResponse } from "./Api";
const apiKey = "494e42497aaa4cd8ba25c47c7bdcb23f";
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
