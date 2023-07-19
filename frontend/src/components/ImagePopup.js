import React from "react";

function ImagePopup({card, onClose}) {
  return(
    <div className={`popup popup_type_fullscreen-photo ${card.link ? "popup_opened" : ""}`}>
          <figure className="popup__photo-content">
            <button type="button" className="popup__closed-button popup__closed-button_type_fullscreen" aria-label="Кнопка закрытия модального окна" onClick={onClose}></button>
            <img src={card.link} className="popup__photo" alt={card.name} />
            <figcaption className="popup__photo-title">{card.name}</figcaption>
          </figure>
        </div>
  )
}

export default ImagePopup