import React from 'react';
import accept from '../images/Accept.png';
import wrong from '../images/Wrong.png'

function InfoTooltip(props) {

    return (
      <div className={`popup popup_type_tooltip ${props.isOpen ? "popup_opened" : ""}`}>
        <div className="popup__content">
          <button type="button" className="popup__closed-button" aria-label="Кнопка закрытия модального окна" onClick={props.onClose} />
          <img className="popup__img-answer" src={`${props.errorRegistration ? accept : wrong}`} alt='Ответ о регистрации от сервера' />
          <h2 className={`popup__title popup__title_type_tooltip`}>{props.errorRegistration ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</h2>
        </div>
      </div>
    )
}
export default InfoTooltip;