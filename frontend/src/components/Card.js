import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (`element__delete-button ${isOwn ? "element__delete-button" : "element__delete-button_unavailable"}`);

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like-button ${isLiked ? "element__like-button_active" : "element__like-button"}`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card)
  }

  function handleDeleteClick() {
    onCardDelete(card)
  }

  return (
    <li className="element">
      <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick} aria-label="Кнопка удаления карточки"></button>
      <img src={card.link} className="element__photo" alt={card.name} onClick={handleClick}/>
      <div className="element__description-wrapper">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-wrapper">
          <button type="button" id="like" className={cardLikeButtonClassName} onClick={handleLikeClick} aria-label="Кнопка Ставлю лайк!"></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card