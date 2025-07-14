export default function LogIn() {
  return (
    <div className="modal__form-container">
      <label className="modal__form-label" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        placeholder="Enter email"
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
        className="modal__form-input"
        id="password"
        autoComplete="current-password"
      />
    </div>
  );
}
