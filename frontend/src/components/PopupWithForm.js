import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.popupName} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__content">
        <button type="button" className="popup__closed-button" aria-label="Кнопка закрытия модального окна" onClick={props.onClose}></button>
        <h2 className={`popup__title popup__title_type_${props.titleName}`}>{props.title}</h2>
        <form name={`${props.formName}`} className={"popup__form"} onSubmit={props.onSubmit}>
          {props.children}
          <button type="submit" className={`popup__save-button popup__save-button_type_${props.button}`} aria-label="Кнопка подтверждения действия в форме">{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm