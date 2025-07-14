import { useState } from "react";
import Header from "../Header/Header";
import About from "../About/About";
import NewsCard from "../NewsCard/NewsCard";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn";
import { newsData } from "../../data/newsData";
import SearchForm from "../SearchForm/SearchForm";
import { Link } from "react-router-dom";

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
}) {
  const isSignUp = modalMode === "signup";
  const [search, setSearch] = useState("");
  const [restult, setResult] = useState(newsData);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const filtered = newsData.filter(
      (item) =>
        item.headline.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase())
    );
    setTimeout(() => {
      setIsLoading(false);
      setResult(filtered);
      setSearch("");
    }, 1000);
  };

  const handleOnClickCard = () => {
    setVisibleCards(visibleCards + 3);
    console.log("card clicked");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setIsLoading(true);
      const filtered = newsData.filter(
        (item) =>
          item.headline.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase()) ||
          item.type.toLowerCase().includes(search.toLowerCase())
      );
      setTimeout(() => {
        setIsLoading(false);
        setResult(filtered);
        setSearch("");
      }, 1000);
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
        buttonText={isSignUp ? "Sign Up" : "Sign In"}
        isOpen={isModalOpen}
        onClose={onCloseModal}
        onSwitchMode={onSwitchMode}
      >
        {isSignUp ? <SignUp /> : <LogIn />}
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
      <NewsCard
        items={restult}
        visibleCards={visibleCards}
        onClick={handleOnClickCard}
        setVisibleCards={setVisibleCards}
        isLoading={isLoading}
        toggledIds={toggledIds}
        onToggle={onToggle}
      />

      <About />
    </>
  );
}
