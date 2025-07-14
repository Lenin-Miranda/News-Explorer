import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./NavBar.css";
import logoutW from "../../assets/logout.svg";
import logoutB from "../../assets/logoutB.svg";
import menu from "../../assets/menu.svg";
import menuB from "../../assets/menuB.svg";
import close from "../../assets/back.svg";
export default function NavBar({
  onSignInClick,
  isLoggedIn,
  logOut,
  openMenu,
  closeMenu,
  isMenuOpen,
  isModalOpen,
}) {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isSavedArticles = location.pathname === "/saved-articles";

  const isInvert = isSavedArticles;

  return (
    <nav className={`navbar ${isInvert ? "navbar_invert" : ""}`}>
      <Link to="/" className="navbar__title">
        NewsExplorer
      </Link>
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link
            to="/"
            className={`navbar__link ${
              isHome ? "navbar__link_active" : "navbar__link_inactive"
            }`}
          >
            Home
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li className="navbar__item">
              <Link
                to="/saved-articles"
                className={`navbar__link ${
                  isSavedArticles
                    ? "navbar__link_active"
                    : "navbar__link_inactive"
                }`}
              >
                Saved articles
              </Link>
            </li>
            <li className="navbar__item">
              <button
                className="navbar__button  navbar__button_type_logout"
                onClick={logOut}
              >
                UserName
                <img
                  className="navbar__button-image"
                  src={isInvert ? logoutB : logoutW}
                />
              </button>
            </li>
            {!isModalOpen &&
              (isMenuOpen ? (
                <button className="navbar__button-menu" onClick={closeMenu}>
                  <img height={24} width={24} src={close} />
                </button>
              ) : (
                <button className="navbar__button-menu" onClick={openMenu}>
                  <img src={isHome ? menu : menuB} />
                </button>
              ))}
          </>
        ) : (
          <>
            <li className="navbar__item" type="submit">
              <button
                className="navbar__button"
                type="submit"
                onClick={onSignInClick}
              >
                Sign In
              </button>
            </li>
            {!isModalOpen &&
              (isMenuOpen ? (
                <button className="navbar__button-menu" onClick={closeMenu}>
                  <img width={24} height={24} src={close} />
                </button>
              ) : (
                <button className="navbar__button-menu" onClick={openMenu}>
                  <img src={isHome ? menu : menuB} />
                </button>
              ))}
          </>
        )}
      </ul>
    </nav>
  );
}
