// Simulación de API de base de datos - reemplazar con llamadas reales cuando tengas backend
import avatar from "../assets/header.jpg";
// Datos simulados de artículos guardados
let savedArticles = [
  {
    _id: "65f7368dfb74bd6a92114c85",
    url: "https://example.com/article1",
    title: "Artículo de ejemplo guardado",
    description:
      "Este es un artículo de ejemplo que fue guardado por el usuario",
    urlToImage: avatar,
    publishedAt: "2024-01-15T10:30:00Z",
    source: { name: "Example News" },
    keyword: "tecnología",
    userId: "65f7368dfb74bd6a92114c85",
  },
  {
    _id: "65f7371e7bce9e7d331b11a0",
    url: "https://example.com/article2",
    title: "Otro artículo interesante",
    description: "Segundo artículo guardado para demostración",
    urlToImage: avatar,
    publishedAt: "2024-01-14T15:45:00Z",
    source: { name: "Tech Daily" },
    keyword: "ciencia",
    userId: "65f7368dfb74bd6a92114c85",
  },
];

export function getSavedArticles(userId) {
  // Simula obtener artículos guardados del usuario
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
    }, 800);
  });
}

export function saveArticle(article, userId) {
  // Simula guardar un artículo en la base de datos
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (article && userId) {
        const newArticle = {
          _id: generateFakeId(), // Función para generar ID falso
          ...article,
          userId: userId,
          savedAt: new Date().toISOString(),
        };

        // Verificar si ya existe
        const exists = savedArticles.find(
          (a) => a.url === article.url && a.userId === userId
        );
        if (exists) {
          reject(new Error("Artículo ya guardado"));
          return;
        }

        savedArticles.push(newArticle);
        resolve(newArticle);
      } else {
        reject(new Error("Artículo y ID de usuario requeridos"));
      }
    }, 600);
  });
}

export function deleteArticle(articleId, userId) {
  // Simula eliminar un artículo de la base de datos
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (articleId && userId) {
        const index = savedArticles.findIndex(
          (article) => article._id === articleId && article.userId === userId
        );

        if (index !== -1) {
          const deletedArticle = savedArticles.splice(index, 1)[0];
          resolve(deletedArticle);
        } else {
          reject(new Error("Artículo no encontrado"));
        }
      } else {
        reject(new Error("ID de artículo y usuario requeridos"));
      }
    }, 500);
  });
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
function generateFakeId() {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}
