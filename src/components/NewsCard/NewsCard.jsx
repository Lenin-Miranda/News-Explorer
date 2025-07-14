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
}) {
  const [show, setShow] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isSavedArticles = location.pathname === "/saved-articles";

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
      {isLoading === true ? (
        <PreLoader />
      ) : (
        <ul className={`news__container `}>
          {items.slice(0, visibleCards).map((item) => {
            return (
              <li key={item.id} className="news__card">
                <img
                  className="news__card-image"
                  src={item.image}
                  alt={item.headline}
                />
                <button
                  className="news__card-like"
                  onClick={() => onToggle(item.id)}
                  onMouseEnter={() => {
                    setHoveredId(item.id);
                  }}
                  onMouseLeave={() => {
                    setHoveredId(null);
                  }}
                  type="button"
                >
                  {isHome ? (
                    <img
                      className="news__card-like-icon"
                      style={{
                        opacity: !toggledIds.includes(item.id) ? "" : "1",
                      }}
                      src={
                        !toggledIds.includes(item.id) ? favorite : favoriteClick
                      }
                    />
                  ) : (
                    <img className="news__card-like-icon " src={trashB} />
                  )}
                </button>
                <div className="news__card-info-container">
                  <p className="news__card-date">{item.date}</p>
                  <p className="news__card-header">{item.headline}</p>
                  <p className="news__card-description">{item.description}</p>
                  <p className="news__card-company">{item.company}</p>
                </div>
                {!isHome ? (
                  <div
                    className={`news__card-trash-container ${
                      hoveredId === item.id ? "show" : ""
                    }`}
                  >
                    <span>Remove from saved</span>
                  </div>
                ) : (
                  ""
                )}
                {!isHome ? (
                  <div className="news__card-keyword-container">
                    <span>{item.category}</span>
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

      {items.length === 0 && (
        <div className="news__empty-container">
          <span>{<img src={notFound} className="news__empty-image" />}</span>
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
