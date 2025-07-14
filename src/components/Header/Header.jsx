import "./Header.css";

export default function Header({ children }) {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__hero">What's going on in the world?</h1>
        <p className="header__paragraph">
          find the lates news on any topics and save them in your personal
          account
        </p>
        {children}
      </div>
    </header>
  );
}
