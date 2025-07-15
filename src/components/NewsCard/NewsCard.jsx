import { newsData } from "../../data/newsData";
import "./NewsCard.css";
import favorite from "../../assets/favorite.svg";
import favoriteClick from "../../assets/favoriteClick.svg";
import { useState, useEffect } from "react";
import { color } from "framer-motion";
import { useLocation } from "react-router-dom";
import notFound from "../../assets/not-found.svg";
import PreLoader from "../PreLoader/PreLoader";
import trash from "../../assets/trash.svg";
import trashB from "../../assets/trashB.svg";
export default function NewsCard({
  items,
  visibleCards,
  onClick,
  setVisibleCards,
  isLoading,
  toggledIds,
  onToggle,
  hasSearched = true,
  isLoggedIn,
}) {
  const [show, setShow] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isSavedArticles = location.pathname === "/saved-articles";

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  useEffect(() => {
    if (isSavedArticles) {
      setVisibleCards(items.length);
    } else {
      setVisibleCards(3);
    }
  }, [items, isSavedArticles]);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timeout);
  }, [items]);

  return (
    <section className="news">
      {isHome && (
        <div className="news__text-container">
          <span className="news__text">Search Results</span>
        </div>
      )}
      {isLoading ? (
        <PreLoader />
      ) : (
        <ul className={`news__container `}>
          {items.slice(0, visibleCards).map((item) => {
            return (
              <li key={item.url} className="news__card">
                <img
                  className="news__card-image"
                  src={item.urlToImage}
                  alt={item.title}
                />
                <div
                  onMouseEnter={() => {
                    setHoveredId(item.url);
                  }}
                  onMouseLeave={() => {
                    setHoveredId(null);
                  }}
                >
                  <button
                    className={`news__card-like ${
                      isHome && !isLoggedIn ? "news__card-like--disabled" : ""
                    }`}
                    onClick={() =>
                      isHome
                        ? isLoggedIn && onToggle(item.url)
                        : onToggle(item.url)
                    }
                    disabled={isHome && !isLoggedIn}
                    type="button"
                  >
                    {isHome ? (
                      <img
                        className="news__card-like-icon"
                        style={{
                          opacity: !toggledIds.includes(item.url) ? "" : "1",
                        }}
                        src={
                          !toggledIds.includes(item.url)
                            ? favorite
                            : favoriteClick
                        }
                        alt={
                          !toggledIds.includes(item.url)
                            ? "Icono favorito vacío"
                            : "Icono favorito activo"
                        }
                      />
                    ) : (
                      <img
                        className="news__card-like-icon "
                        src={trashB}
                        alt="Icono de eliminar"
                      />
                    )}
                  </button>
                </div>
                <div className="news__card-info-container">
                  <p className="news__card-date">
                    {formatDate(item.publishedAt)}
                  </p>
                  <p className="news__card-header">{item.title}</p>
                  <p className="news__card-description">{item.description}</p>
                  <p className="news__card-company">
                    {item.source?.name.toUpperCase()}
                  </p>
                </div>
                {!isHome ? (
                  <div
                    className={`news__card-trash-container ${
                      hoveredId === item.url ? "show" : ""
                    }`}
                  >
                    <span>Remove from saved</span>
                  </div>
                ) : (
                  ""
                )}
                {isHome && !isLoggedIn && (
                  <div
                    className={`news__card-trash-container ${
                      hoveredId === item.url ? "show" : ""
                    }`}
                  >
                    <span>Sign in to save articles</span>
                  </div>
                )}
                {!isHome ? (
                  <div className="news__card-keyword-container">
                    <span>{item.keyword}</span>
                  </div>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      )}

      {visibleCards < items.length && !isLoading && (
        <button className="news__button" onClick={onClick} type="button">
          Show More
        </button>
      )}

      {items.length === 0 && hasSearched && !isLoading && (
        <div className="news__empty-container">
          <span>
            {
              <img
                src={notFound}
                className="news__empty-image"
                alt="No se encontraron resultados"
              />
            }
          </span>
          <p className="news__empty-header">Nothing found</p>
          <p className="news__empty">
            {isHome
              ? "Sorry, but nothing matched your search terms."
              : "Sorry, but you have no favorites please add some"}
          </p>
        </div>
      )}
    </section>
  );
}
