import { useEffect, useState } from "react";
import { Routes, Route, useLocation, Link, Navigate } from "react-router-dom";
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
import { fetchNews } from "../utils/NewsApi";
import { checkToken, logout } from "../utils/auth";
import { getSavedArticles, saveArticle, deleteArticle } from "../utils/Api";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("login");
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [toggledIds, setToggledIds] = useState([]);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [news, setNews] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [success, setSuccess] = useState(false);

  const [search, setSearch] = useState("");
  const [restult, setResult] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchNews()
      .then((data) => {
        setNews(data.articles || []);
        setAllArticles(data.articles || []);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // check the token when the app is load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      checkToken(token)
        .then((response) => {
          setIsLoading(true);
          setCurrentUser(JSON.parse(user));
        })
        .catch(() => {
          localStorage.removeItem("toke");
          localStorage.removeItem("user");
          setIsLoggedIn(false);
          setCurrentUser(null);
        });
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && currentUser?._id) {
      getSavedArticles(currentUser._id)
        .then(setSavedArticles)
        .catch(() => setSavedArticles([]));
    } else {
      setSavedArticles([]);
    }
  }, [isLoggedIn, currentUser]);

  //saved article
  const handleSaveArticle = async (article) => {
    if (!currentUser?._id) return;
    try {
      const saved = await saveArticle(article, currentUser._id);
      setSavedArticles((prev) => [...prev, saved]);
    } catch (err) {
      console.log(err.message);
    }
  };

  //Delete article
  const handleDeleteArticle = async (articleId) => {
    if (!currentUser?._id) return;
    try {
      await deleteArticle(articleId, currentUser._id);
      setSavedArticles((prev) => prev.filter((a) => a._id !== articleId));
    } catch (err) {
      console.log(err.message);
    }
  };

  // Función para agregar artículos nuevos a allArticles sin duplicados
  const addArticles = (articles) => {
    setAllArticles((prev) => {
      const urls = new Set(prev.map((item) => item.url));
      const nuevos = articles.filter((item) => !urls.has(item.url));
      return [...prev, ...nuevos];
    });
  };

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleOpenModal = (mode = "login") => {
    setModalMode(mode);
    setIsModalOpen(true);
    if (mode === "login") setSuccess(false); // Reinicia success al cambiar a login
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      setCurrentUser(null);
      setToggledIds([]); // clean the favorites when logOut
      setSuccess(false); // Reinicia success al desloguear
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSwitchMode = () => {
    setModalMode((prev) => {
      const newMode = prev === "login" ? "signup" : "login";
      if (newMode === "login") setSuccess(false); // Reinicia success al cambiar a login
      return newMode;
    });
  };

  const handleToggle = (url) => {
    if (!isLoggedIn) return;
    // Buscar el artículo en la lista de noticias o en allArticles
    const article =
      allArticles.find((a) => a.url === url) || news.find((a) => a.url === url);
    if (!article) return;

    if (toggledIds.includes(url)) {
      // Eliminar de favoritos usando la API simulada
      const saved = savedArticles.find((a) => a.url === url);
      if (saved) handleDeleteArticle(saved._id);
      setToggledIds((prev) => prev.filter((itemId) => itemId !== url));
    } else {
      // Guardar en favoritos usando la API simulada
      handleSaveArticle(article);
      setToggledIds((prev) => [...prev, url]);
    }
  };

  const handleShowMore = () => {
    setVisibleCards(visibleCards + 3);
  };

  const handleAuthSucces = (response) => {
    setIsLoggedIn(true);
    setCurrentUser(response.user);
    setIsModalOpen(false);
    setModalMode("login");
  };

  const handleAuthError = (error) => {
    console.error("Authentication error", error);
  };

  // Cambia el filtro para usar allArticles
  const savedArticlesList = allArticles.filter((item) =>
    toggledIds.includes(item.url)
  );
  const savedKeywords = [
    ...new Set(
      savedArticlesList.map((article) => article.keyword).filter(Boolean)
    ),
  ];

  //

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
        userName={currentUser?.name}
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
                  news={news}
                  addArticles={addArticles}
                  // Search props
                  search={search}
                  setSearch={setSearch}
                  restult={restult}
                  setResult={setResult}
                  hasSearched={hasSearched}
                  setHasSearched={setHasSearched}
                  // form props
                  onSuccess={handleAuthSucces}
                  onError={handleAuthError}
                  success={success}
                  setSuccess={setSuccess}
                />
              </PageTransition>
            }
          />
          <Route
            path="/saved-articles"
            element={
              isLoggedIn ? (
                <PageTransition>
                  <>
                    <div className="news__header">
                      <p className="news__paragraph">Saved articles</p>
                      <h2 className="news__saved-articles">
                        {currentUser?.name}, you have {savedArticles.length}{" "}
                        saved articles
                      </h2>
                      <p className="news__keywords">
                        By keywords:{" "}
                        <span style={{ fontWeight: "700" }}>
                          {savedKeywords.length === 0 && ""}
                          {savedKeywords.length === 1 && savedKeywords[0]}
                          {savedKeywords.length === 2 &&
                            savedKeywords.join(", ")}
                          {savedKeywords.length > 2 &&
                            `${savedKeywords[0]}, ${savedKeywords[1]}, ${
                              savedKeywords[2]
                            } and ${savedKeywords.length - 3} others`}
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
                      isLoggedIn={isLoggedIn}
                      onDeleteArticle={handleDeleteArticle}
                      savedArticles={saveArticle}
                    />

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
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
