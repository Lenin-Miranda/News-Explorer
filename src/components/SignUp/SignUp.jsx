export default function SignUp() {
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
        id="password"
        type="password"
        placeholder="Enter password"
        className="modal__form-input"
        autoComplete="new-password"
      />
      <label className="modal__form-label" htmlFor="user">
        Usename
      </label>
      <input
        className="modal__form-input"
        placeholder="Enter your username"
        id="user"
        autoComplete="username"
      />
    </div>
  );
}
