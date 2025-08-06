import { useState } from "react";
import { login } from "../../utils/auth";
import "./LogIn.css";

export default function LogIn({ onSuccess, onError, isLoading, setIsLoading }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await login(formData.email, formData.password);

      // Guardar token en localStorage
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      // Limpiar formulario
      setFormData({ email: "", password: "" });

      // Notificar éxito al componente padre
      if (onSuccess) {
        onSuccess(response);
      }
    } catch (error) {
      setError(error.message);
      if (onError) {
        onError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="modal__form-container" onSubmit={handleSubmit}>
      <label className="modal__form-label" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={isLoading}
        id="email"
        className="modal__form-input"
        autoComplete="email"
      />
      <label className="modal__form-label" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
        required
        disabled={isLoading}
        className="modal__form-input"
        id="password"
        autoComplete="current-password"
      />
      {error && (
        <div className="modal__error">
          <span className="modal__error-text">{error}</span>
        </div>
      )}
      <button
        type="submit"
        className="modal__form-button"
        disabled={isLoading || !formData.email || !formData.password}
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}
