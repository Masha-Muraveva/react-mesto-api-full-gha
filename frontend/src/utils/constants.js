export const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-data',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__form-data_type_error',
    errorClass: 'popup__form-data-error_active',
    errorMessageClass: '.popup__form-data-error'
}

export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const formProfilePopup = popupEditProfile.querySelector('.popup__form_type_edit-profile');
export const nameInput = formProfilePopup.querySelector('.popup__form-data_type_name');
export const descriptionInput = formProfilePopup.querySelector('.popup__form-data_type_description');
export const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button');

export const popupAddCard = document.querySelector('.popup_type_add-card');
export const formAddCardPopup = popupAddCard.querySelector('.popup__form_type_add-card');
export const buttonOpenAddCardPopup = document.querySelector('.profile__add-button');

export const cardList = document.querySelector('.elements__list');

export const popupEditAvatar = document.querySelector('.popup_type_edit-avatar');
export const formAvatarPopup = popupEditAvatar.querySelector('.popup__form_type_edit-avatar');

export const buttonOpenEditAvatarPopup = document.querySelector('.profile__user-photo-button');

//export const titleInput = formAddCardPopup.querySelector('.popup__form-data_type_card-title');
//export const linkInput = formAddCardPopup.querySelector('.popup__form-data_type_card-link');
//export const avatarInput = formAvatarPopup.querySelector('.popup__form-data_type_avatar-link');

//export const popupDeleteCard = document.querySelector('.popup_type_delete-card');
//export const formDeleteCardPopup = popupDeleteCard.querySelector('.popup__form_type_delete-card');

//export const buttonCloseEditProfilePopup = popupEditProfile.querySelector('.popup__closed-button_type_profile');
//export const buttonCloseAddCardPopup = popupAddCard.querySelector('.popup__closed-button_type_add-card');
//export const popupFullScreenPhoto = document.querySelector('.popup_type_fullscreen-photo');
//export const buttonCloseFullScreenPopup = popupFullScreenPhoto.querySelector('.popup__closed-button_type_fullscreen');
//export const photoElementPopup = popupFullScreenPhoto.querySelector(".popup__photo");
//export const photoTitleElementPopup = popupFullScreenPhoto.querySelector(".popup__photo-title");  

//export const userName = document.querySelector('.profile__user-name');
//export const userDescription = document.querySelector('.profile__user-description');



