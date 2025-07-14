import "./Footer.css";
import { FaGithub, FaLinkedin, FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">
        <FaCopyright className="footer__copyright-icon" />
        2025 NewsExplore powered by News API
      </p>
      <div className="footer__links">
        <div className="footer__links-container">
          <Link to={"/"} style={{ fontWeight: "400" }} className="footer__link">
            Home
          </Link>

          <Link className="footer__link" style={{ fontWeight: "400" }}>
            Tripleten
          </Link>
        </div>
        <div className="footer__links-container">
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon-link"
            title="GitHub"
          >
            <FaGithub className="footer__icon" />
          </a>

          <a
            href="https://linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon-link"
            title="LinkedIn"
          >
            <FaLinkedin className="footer__icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
