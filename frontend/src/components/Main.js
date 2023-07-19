import React from "react";
import Card from "./Card.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick, onCardLike, onCardDelete, cards}) {
  
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__user">
          <img src={currentUser.avatar} alt="Фото пользователя" className="profile__user-photo"/>
          <button className="profile__user-photo-button" onClick={onEditAvatar}></button>
          <div className="profile__changeable-information">
            <div className="profile__user-wrapper">
              <h1 className="profile__user-name">{currentUser.name}</h1> 
              <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__user-description">{currentUser.about}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" aria-label="Кнопка добавления фотографий" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => {
            return(
              <Card
                key={card._id}
                link={card.link}
                name={card.name}
                likes={card.likes.length}
                card={card}
                onCardClick={ onCardClick }
                onCardLike={ onCardLike }
                onCardDelete={ onCardDelete }
              />
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default Main
