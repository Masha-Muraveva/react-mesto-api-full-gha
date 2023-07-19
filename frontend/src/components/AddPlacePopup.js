import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup (props) {

  const [cardName, setCardName] = React.useState("");
  const [cardLink, setCardLink ] = React.useState("");

  React.useEffect(() => {
    setCardName("");
    setCardLink("");
  }, [props.isOpen]);

  function handleChangeCardName(event) {
    setCardName(event.target.value);
  }

  function handleChangeCardLink(event) {
    setCardLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onAddPlace({
      name: cardName,
      link: cardLink,
    });
  }

  return(
    <PopupWithForm
      popupName="add-card"
      titleName="add-card"
      title="Новое место"
      formName="addCardForm"
      button="add-card"
      buttonText="Создать"
      isOpen={ props.isOpen }
      onClose={ props.onClose }
      onSubmit={ handleSubmit }
    >
    <input 
      type="text"
      id="title-input"
      name="title"
      placeholder="Название"
      className="popup__form-data popup__form-data_type_card-title"
      minLength="2"
      maxLength="30"
      autoComplete="off"
      required
      value={ cardName } 
      onChange={ handleChangeCardName }
    />
    <span className="title-input-error popup__form-data-error"></span>

    <input 
      type="url"
      id="link-input"
      name="link"
      placeholder="Ссылка на картинку"
      className="popup__form-data popup__form-data_type_card-link"
      autoComplete="off"
      required
      value={ cardLink } 
      onChange={ handleChangeCardLink } 
    />
    <span className="link-input-error popup__form-data-error"></span>     
    </PopupWithForm>
  )
}

export default AddPlacePopup