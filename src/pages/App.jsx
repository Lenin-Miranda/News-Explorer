import { useState } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Main from "../components/Main/Main";
import NavBar from "../components/NavBar/NavBar";
import PageTransition from "../components/PageTransition/PageTransition";
import Footer from "../components/Footer/Footer";
import NewsCard from "../components/NewsCard/NewsCard";
import ModalWithForm from "../components/ModalWithForm/ModalWithForm";
import SignUp from "../components/SignUp/SignUp";
import LogIn from "../components/LogIn/LogIn";
import { newsData } from "../data/newsData";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("login");
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [toggledIds, setToggledIds] = useState([]);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleOpenModal = (mode = "login") => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSwitchMode = () => {
    setModalMode((prev) => (prev === "login" ? "signup" : "login"));
  };

  const handleToggle = (id) => {
    setToggledIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleShowMore = () => {
    setVisibleCards(visibleCards + 3);
  };

  const handleSignInClick = () => {
    if (onSignInClick) {
      onSignInClick();
    }
  };

  // Filtrar las cards marcadas como favoritas
  const savedArticles = newsData.filter((item) => toggledIds.includes(item.id));
  const savedCategories = [
    ...new Set(savedArticles.map((article) => article.category)),
  ];
  return (
    <>
      <NavBar
        onSignInClick={() => handleOpenModal("login")}
        isLoggedIn={isLoggedIn}
        logOut={handleLogout}
        openMenu={handleMenuClick}
        closeMenu={handleCloseMenu}
        isMenuOpen={isMenuOpen}
        isModalOpen={isModalOpen}
        handleSignInClick={handleSignInClick}
      />
      <AnimatePresence mode="sync">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Main
                  onSignInClick={() => handleOpenModal("login")}
                  isModalOpen={isModalOpen}
                  onOpenModal={handleOpenModal}
                  onCloseModal={handleCloseModal}
                  modalMode={modalMode}
                  onSwitchMode={handleSwitchMode}
                  toggledIds={toggledIds}
                  onToggle={handleToggle}
                  isMenuOpen={isMenuOpen}
                  isLoggedIn={isLoggedIn}
                  closeMenu={handleCloseMenu}
                />
              </PageTransition>
            }
          />
          <Route
            path="/saved-articles"
            element={
              <PageTransition>
                <>
                  <div className="news__header">
                    <p className="news__paragraph">Saved articles</p>
                    <h2 className="news__saved-articles">
                      User, you have {savedArticles.length} saved articles
                    </h2>
                    <p className="news__keywords">
                      By keywords:{" "}
                      <span style={{ fontWeight: "700" }}>
                        {savedCategories.length === 0 && ""}
                        {savedCategories.length === 1 && savedCategories[0]}
                        {savedCategories.length === 2 &&
                          savedCategories.join(", ")}
                        {savedCategories.length > 2 &&
                          `${savedCategories[0]}, ${savedCategories[1]}, ${
                            savedCategories[2]
                          } and ${savedCategories.length - 3} others`}
                      </span>
                    </p>
                  </div>
                  <NewsCard
                    items={savedArticles}
                    visibleCards={visibleCards}
                    onClick={handleShowMore}
                    setVisibleCards={setVisibleCards}
                    isLoading={false}
                    toggledIds={toggledIds}
                    onToggle={handleToggle}
                  />
                  <ModalWithForm
                    title={modalMode === "signup" ? "Sign Up" : "Sign In"}
                    text={modalMode === "signup" ? "Sign In" : "Sign Up"}
                    buttonText={modalMode === "signup" ? "Sign Up" : "Sign In"}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onSwitchMode={handleSwitchMode}
                  >
                    {modalMode === "signup" ? <SignUp /> : <LogIn />}
                  </ModalWithForm>
                  {isMenuOpen && (
                    <div className="modal__menu saved-articles">
                      <div
                        className="modal__menu-overlay"
                        onClick={handleCloseMenu}
                      ></div>
                      <div className="modal__menu-links-container">
                        <ul className="modal__menu-links">
                          {isLoggedIn ? (
                            <>
                              <li className="modal__menu-link">
                                <Link to="/" onClick={handleCloseMenu}>
                                  Home
                                </Link>
                              </li>
                              <li className="modal__menu-link">
                                <Link
                                  to="/saved-articles"
                                  onClick={handleCloseMenu}
                                >
                                  Saved articles
                                </Link>
                              </li>
                            </>
                          ) : (
                            <>
                              <li className="modal__menu-link">
                                <Link to="/" onClick={handleCloseMenu}>
                                  Home
                                </Link>
                              </li>
                              <li className="modal__menu-link">
                                <button
                                  className="navbar__button"
                                  onClick={() => {
                                    handleCloseMenu();
                                    handleOpenModal("login");
                                  }}
                                >
                                  Sign In
                                </button>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
                </>
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
