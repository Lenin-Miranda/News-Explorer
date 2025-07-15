export const authorize = (email, password) => {
  // simulate login
  return new Promise((resolve, reject) => {
    // simulate the delay of the request
    setTimeout(() => {
      if (email && password) {
        resolve({
          token: "fake-jwt-token-12345",
          user: {
            name: "Usuario Demo",
            email: email,
            _id: "65f7368dfb74bd6a92114c85",
          },
        });
      } else {
        reject(new Error("Email y contraseña son requeridos"));
      }
    }, 1000);
  });
};

export const checkToken = (token) => {
  // simulate token verification
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token) {
        resolve({
          data: {
            name: "Usuario Demo",
            email: "demo@example.com",
            _id: "65f7368dfb74bd6a92114c85",
          },
        });
      } else {
        reject(new Error("Token inválido"));
      }
    }, 500);
  });
};

export const logout = () => {
  // Simula logout
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Logout exitoso" });
    }, 300);
  });
};

export const signup = (name, email, password) => {
  // simulate signup
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name && email && password) {
        resolve({
          token: "fake-jwt-token-signup-67890",
          user: {
            name: name,
            email: email,
            _id: "65f7368dfb74bd6a92114c86",
          },
        });
      } else {
        reject(new Error("Todos los campos son requeridos"));
      }
    }, 1000);
  });
};
