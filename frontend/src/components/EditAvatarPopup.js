import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();
 
  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpen])

  function handleSubmit(event) {
    event.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    })
  }

  return (
    <PopupWithForm
      popupName="edit-avatar"
      titleName="edit-avatar"
      title="Обновить аватар"
      formName="avatarForm"
      button="edit-avatar"
      buttonText="Сохранить"
      isOpen={ props.isOpen }
      onClose={ props.onClose }
      onSubmit={ handleSubmit }
    >
      <input 
        type="url" 
        id="avatar-input" 
        name="avatarLink" 
        placeholder="Ссылка на аватар" 
        className="popup__form-data popup__form-data_type_avatar-link" 
        autoComplete="off"
        required
        ref={ avatarRef }
      />
      <span className="avatar-input-error popup__form-data-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;