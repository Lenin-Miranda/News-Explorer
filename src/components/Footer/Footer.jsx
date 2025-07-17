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

          <Link
            className="footer__link"
            to={"https://tripleten.com/"}
            style={{ fontWeight: "400" }}
            target="_blank"
          >
            Tripleten
          </Link>
        </div>
        <div className="footer__links-container">
          <Link
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon-link"
            title="GitHub"
          >
            <FaGithub className="footer__icon" />
          </Link>

          <Link
            href="https://linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon-link"
            title="LinkedIn"
          >
            <FaLinkedin className="footer__icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
