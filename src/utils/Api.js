// Simulación de API de base de datos - reemplazar con llamadas reales cuando tengas backend
import avatar from "../assets/header.jpg";
// Datos simulados de artículos guardados
export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://news-backend-7l4u.onrender.com"
    : "http://localhost:3001";

let savedArticles = [];

export const getSavedArticles = async (token) => {
  const res = await fetch(`${API_BASE_URL}/news-saved`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Error fetching saved news");
  return res.json();
};

export const saveArticle = async (token, newsData) => {
  const res = await fetch(`${API_BASE_URL}/news-saved`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newsData),
  });
  if (!res.ok) throw new Error("Error saving news");
  return res.json();
};

export async function deleteArticle(token, articleId) {
  const res = await fetch(`${API_BASE_URL}/news-saved/${articleId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Error deleting news");
  return res.json();
}

export function getUserArticles(userId) {
  // Simula obtener todos los artículos del usuario
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        const userArticles = savedArticles.filter(
          (article) => article.userId === userId
        );
        resolve(userArticles);
      } else {
        reject(new Error("ID de usuario requerido"));
      }
    }, 700);
  });
}

export function checkResponse(res) {
  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
  return res.json();
}

// Función auxiliar para generar IDs falsos
