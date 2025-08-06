// Función para convertir fecha de formato numérico a formato con nombres de meses
const formatDateWithMonthName = (dateString) => {
  const date = new Date(dateString);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const newsData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    date: formatDateWithMonthName("2024-01-15"),
    headline: "Nuevos avances en tecnología de energía renovable",
    description:
      "Científicos desarrollan paneles solares más eficientes que podrían revolucionar la industria energética mundial.",
    company: "TechNews Daily",
    category: "Tecnología",
    type: "Ciencia",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    date: formatDateWithMonthName("2024-01-14"),
    headline: "Descubren nueva especie de árbol en la Amazonía",
    description:
      "Botánicos encuentran una especie única de árbol que podría tener propiedades medicinales extraordinarias.",
    company: "Nature Weekly",
    category: "Medio Ambiente",
    type: "Naturaleza",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    date: formatDateWithMonthName("2024-01-13"),
    headline: "Inteligencia artificial predice patrones climáticos",
    description:
      "Nuevo algoritmo de IA logra predecir eventos climáticos extremos con 95% de precisión.",
    company: "Science Today",
    category: "Ciencia",
    type: "Tecnología",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    date: formatDateWithMonthName("2024-01-12"),
    headline: "Nuevo récord en el mercado de criptomonedas",
    description:
      "Bitcoin alcanza nuevos máximos históricos mientras las instituciones financieras adoptan blockchain.",
    company: "Finance Daily",
    category: "Finanzas",
    type: "Economía",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    date: formatDateWithMonthName("2024-01-11"),
    headline: "Descubrimiento arqueológico en Egipto",
    description:
      "Arqueólogos encuentran una tumba intacta que podría revelar secretos de la dinastía faraónica.",
    company: "History Channel",
    category: "Historia",
    type: "Arqueología",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    date: formatDateWithMonthName("2024-01-10"),
    headline: "Avances en medicina personalizada",
    description:
      "Investigadores desarrollan tratamientos personalizados basados en el genoma individual.",
    company: "Health News",
    category: "Salud",
    type: "Medicina",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
    date: formatDateWithMonthName("2024-01-09"),
    headline: "Nuevo planeta potencialmente habitable",
    description:
      "Astrónomos descubren un exoplaneta similar a la Tierra a 40 años luz de distancia.",
    company: "Space Explorer",
    category: "Astronomía",
    type: "Ciencia",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    date: formatDateWithMonthName("2024-01-08"),
    headline: "Innovación en transporte eléctrico",
    description:
      "Empresa automotriz presenta el primer avión comercial completamente eléctrico.",
    company: "Auto Industry News",
    category: "Transporte",
    type: "Tecnología",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    date: formatDateWithMonthName("2024-01-07"),
    headline: "Revolución en agricultura vertical",
    description:
      "Granjas verticales urbanas producen 10 veces más alimentos que la agricultura tradicional.",
    company: "AgriTech Weekly",
    category: "Agricultura",
    type: "Tecnología",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    date: formatDateWithMonthName("2024-01-06"),
    headline: "Descubrimiento de nueva especie marina",
    description:
      "Biólogos marinos encuentran una especie de pez bioluminiscente en las profundidades del océano.",
    company: "Marine Biology Today",
    category: "Biología Marina",
    type: "Naturaleza",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    date: formatDateWithMonthName("2024-01-05"),
    headline: "Avances en computación cuántica",
    description:
      "Google logra la supremacía cuántica con un procesador de 100 qubits.",
    company: "Quantum Computing News",
    category: "Computación",
    type: "Tecnología",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    date: formatDateWithMonthName("2024-01-04"),
    headline: "Restauración de ecosistemas exitosa",
    description:
      "Proyecto de reforestación logra restaurar completamente un bosque devastado en solo 5 años.",
    company: "EcoWatch",
    category: "Conservación",
    type: "Naturaleza",
  },
];
