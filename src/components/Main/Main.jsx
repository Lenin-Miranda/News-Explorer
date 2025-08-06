import { useState, useEffect } from "react";
import Header from "../Header/Header";
import About from "../About/About";
import NewsCard from "../NewsCard/NewsCard";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn";
import SearchForm from "../SearchForm/SearchForm";
import { Link } from "react-router-dom";
import { fetchNews } from "../../utils/NewsApi";

export default function Main({
  isModalOpen,
  onCloseModal,
  modalMode,
  onSwitchMode,
  toggledIds,
  onToggle,
  isMenuOpen,
  isLoggedIn,
  onSignInClick,
  closeMenu,
  addArticles,
  search,
  setSearch,
  restult,
  setResult,
  hasSearched,
  setHasSearched,
  onSuccess,
  onError,
  success,
  setSuccess,
}) {
  const isSignUp = modalMode === "signup";
  const [visibleCards, setVisibleCards] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setHasSearched(true);
    try {
      const data = await fetchNews(search);
      const articlesWithKeyword = (data.articles || []).map((article) => ({
        ...article,
        keyword: search.trim(), // guardar el keyword actual
      }));
      setResult(articlesWithKeyword);
      if (addArticles) addArticles(articlesWithKeyword); // guardas con keyword ya incluido
    } catch (error) {
      setResult([]);
    }
    setIsLoading(false);
  };

  const handleOnClickCard = () => {
    setVisibleCards(visibleCards + 3);
  };

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      setIsLoading(true);
      setHasSearched(true);
      try {
        const data = await fetchNews(search);
        const articlesWithKeyword = (data.articles || []).map((article) => ({
          ...article,
          keyword: search.trim(),
        }));
        setResult(articlesWithKeyword);
        if (addArticles) addArticles(articlesWithKeyword);
      } catch (error) {
        setResult([]);
      }
      setIsLoading(false);
    }
  };

  const handleSignInFromMenu = () => {
    closeMenu(); // Cierra el menú
    onSignInClick(); // Abre el modal de login
  };

  return (
    <>
      <Header>
        <SearchForm
          search={search}
          setSearch={setSearch}
          onSubmit={handleSubmit}
          handleEnter={handleEnter}
        />
      </Header>
      <ModalWithForm
        title={isSignUp ? "Sign Up" : "Sign In"}
        text={isSignUp ? "Sign In" : "Sign Up"}
        isOpen={isModalOpen}
        onClose={onCloseModal}
        onSwitchMode={onSwitchMode}
        isLoading={isLoading}
        success={success}
      >
        {isSignUp ? (
          <SignUp
            onSuccess={onSuccess}
            onError={onError}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            onSwitchMode={onSwitchMode}
            success={success}
            setSuccess={setSuccess}
          />
        ) : (
          <LogIn
            onSuccess={onSuccess}
            onError={onError}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        )}
      </ModalWithForm>
      {isMenuOpen && (
        <div
          className={`modal__menu ${
            location.pathname === "/saved-articles" ? "saved-articles" : ""
          }`}
        >
          <div className="modal__menu-overlay"></div>
          <div className="modal__menu-links-container">
            <ul className="modal__menu-links">
              {isLoggedIn ? (
                <>
                  <li className="modal__menu-link">
                    {" "}
                    <Link to="/">Home</Link>
                  </li>
                  <li className="modal__menu-link">
                    {" "}
                    <Link to="saved-articles">Saved articles</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="modal__menu-link">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="modal__menu-link">
                    <button
                      className="navbar__button"
                      onClick={handleSignInFromMenu}
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
      {hasSearched && (
        <NewsCard
          items={restult}
          visibleCards={visibleCards}
          onClick={handleOnClickCard}
          setVisibleCards={setVisibleCards}
          isLoading={isLoading}
          toggledIds={toggledIds}
          onToggle={onToggle}
          hasSearched={hasSearched}
          isLoggedIn={isLoggedIn}
        />
      )}

      <About />
    </>
  );
}
