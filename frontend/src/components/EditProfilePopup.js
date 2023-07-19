import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  const [name, setName] = React.useState("");
  const [description, setDescription ] = React.useState("");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  return(
    <PopupWithForm
      popupName="edit-profile"
      titleName="edit-profile"
      title="Редактировать профиль"
      formName="profileForm"
      button="edit-profile"
      buttonText="Сохранить"
      isOpen={ props.isOpen }
      onClose={ props.onClose }
      onSubmit={ handleSubmit }
    >
      <input
        type="text"
        id="name-input"
        name="name"
        placeholder="Имя/Никнейм"
        className="popup__form-data popup__form-data_type_name"
        minLength="2"
        maxLength="40"
        autoComplete="off"
        required
        value={`${name}`} 
        onChange={ handleChangeName }
      />
      <span className="name-input-error popup__form-data-error"></span>
      <input
        type="text"
        id="about-input"
        name="about"
        placeholder="Описание"
        className="popup__form-data popup__form-data_type_description"
        minLength="2"
        maxLength="200"
        autoComplete="off"
        required
        value={`${description}`}
        onChange={ handleChangeDescription }
      />
      <span className="about-input-error popup__form-data-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;