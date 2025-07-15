import { useState } from "react";
import { signup } from "../../utils/auth";
import "./signUp.css";
export default function SignUp({
  onSuccess,
  onError,
  setIsLoading,
  isLoading,
  onSwitchMode,
  success,
  setSuccess,
}) {
  const [formData, setFormData] = useState({
    name: "",
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
      const response = await signup(
        formData.name,
        formData.email,
        formData.password
      );
      console.log("Signup response:", response);

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      setFormData({ name: "", email: "", password: "" });

      setSuccess(true);
      if (onSuccess) {
        response;
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

  if (success) {
    return <></>;
  }

  return (
    <form className="modal__form-container" onSubmit={handleSubmit}>
      <label className="modal__form-label" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        placeholder="Enter email"
        id="email"
        className="modal__form-input"
        autoComplete="email"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={isLoading}
      />
      <label className="modal__form-label" htmlFor="password">
        Password
      </label>
      <input
        id="password"
        type="password"
        placeholder="Enter password"
        className="modal__form-input"
        autoComplete="new-password"
        value={formData.password}
        onChange={handleChange}
        required
        disabled={isLoading}
      />
      <label className="modal__form-label" htmlFor="name">
        Usename
      </label>
      <input
        className="modal__form-input"
        placeholder="Enter your username"
        id="name"
        autoComplete="username"
        value={formData.name}
        onChange={handleChange}
        required
        disabled={isLoading}
      />
      {error && (
        <div className="modal__error">
          <span className="modal__error-text">{error}</span>
        </div>
      )}
      <button
        type="submit"
        className="modal__form-button"
        disabled={
          isLoading || !formData.name || !formData.email || !formData.password
        }
      >
        {isLoading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
}
