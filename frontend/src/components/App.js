import React, {useState, useEffect} from 'react';
import { Routes, Route, useNavigate }  from "react-router-dom";
import Header from "./Header.js";
import Main from "./Main.js";
import Login from "./Login.js";
import Register from "./Register.js";
import InfoTooltip from "./InfoTooltip.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import { FormValueContext } from "../contexts/FormValueContext.js"
import api from "../utils/api.js";
import auth from "../utils/auth.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import ProtectedRoute from "./ProtectedRoute.js";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({link: '', name: ''});
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [errorRegistration, setErrorRegistration] = useState(false)
  const navigate = useNavigate();
  
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth.checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate('/', { replace: true })
            setEmail(res.data.email);
          }
        })
        .catch((err) => console.log(err))
    }
  }, 
  [navigate])

  useEffect(() => {
    loggedIn &&
      api.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch(error => {
          console.log(`Ошибка: ${error}`);
        })
      api.getInitialCards()
        .then((cards) => {
          setCards(cards)
        })
          .catch((error) => {
            console.log(`Ошибка: ${error}`);
          })
  }, [loggedIn]);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsInfoTooltipPopupOpen(false)
    setSelectedCard({link: '', name: ''});
  }

  function handleUpdateUser(user) {
    api.editUserInfo(user)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        })
  }

  function handleUpdateAvatar(avatar) {
    api.editAvatar(avatar)
      .then((avatar) => {
        setCurrentUser(avatar);
        closeAllPopups();
      })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        })
  }

  function handleAddPlaceSubmit(newCard) {
    api.addNewCards(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((prevState) => prevState.filter((c) => c._id !== card._id))
      })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        })
  }

  const handleSignOut = () => {
    setEmail("");
    localStorage.removeItem("jwt");
  };

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChangeInput = (event) => {
    const input = event.target;
    setForm({
      ...form,
      [input.name]: input.value
    })
  }

  const handleSubmitRegister = (e) => {
    e.preventDefault()
    const { email, password } = form;
    auth.registration({ email, password })
      .then((res) => {
        setForm({
          email: '',
          password: ''
        })
        setIsInfoTooltipPopupOpen(true);
        setErrorRegistration(true);
        navigate('/sign-in', { replace: true });
      })
      .catch((error) => {
        setIsInfoTooltipPopupOpen(true);
        setErrorRegistration(false);
        console.log(`Ошибка: ${error}`);
      })
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    const { email, password } = form;
    auth.login({ email, password })
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setForm({
            email: '',
            password: ''
          })
          setLoggedIn(true);
          navigate('/', { replace: true });
        }
      })
      .catch((error) => {
        setErrorRegistration(false);
        setIsInfoTooltipPopupOpen(true);
        console.log(`Ошибка: ${error}`);
      })
  }

  return (
    <CurrentUserContext.Provider value = { currentUser }>
      <FormValueContext.Provider value={ form }>
        <div className="page">
          <Header
          email={ email }
          onSignOut={ handleSignOut }
          />
          <Routes>
            <Route 
              path="/"
              element={
                <ProtectedRoute 
                  element={Main}
                  onEditProfile={ handleEditProfileClick }
                  onEditAvatar={ handleEditAvatarClick }
                  onAddPlace={ handleAddPlaceClick }
                  onCardClick={ handleCardClick }
                  onCardLike={ handleCardLike }
                  onCardDelete={ handleCardDelete }
                  cards={ cards }
                  loggedIn={ loggedIn }
            />} />
            
            <Route
              path='/sign-in'
              element={
                <Login
                  onChange={ handleChangeInput }
                  onSubmit={ handleSubmitLogin }
              />}
            />
            
            <Route
              path='/sign-up'
              element={
                <Register
                  onSubmit={handleSubmitRegister}
                  onChange={handleChangeInput}
              />}
            />
            
          </Routes>
          <Footer />
        </div>

        <EditProfilePopup
          isOpen={ isEditProfilePopupOpen } 
          onClose={ closeAllPopups }
          onUpdateUser={ handleUpdateUser }
        />

        <AddPlacePopup
          isOpen={ isAddPlacePopupOpen } 
          onClose={ closeAllPopups }
          onAddPlace={ handleAddPlaceSubmit } 
        />

        <EditAvatarPopup
          isOpen={ isEditAvatarPopupOpen } 
          onClose={ closeAllPopups }
          onUpdateAvatar={ handleUpdateAvatar } 
        />

        <PopupWithForm
          popupName="delete-card"
          titleName="delete-card"
          title="Вы уверены?"
          formName="deleteCardForm"
          button="delete-card"
          buttonText="Да"
          onClose={ closeAllPopups }
        />

        <ImagePopup
          card={ selectedCard }
          onClose={ closeAllPopups }
        />

        <InfoTooltip
          isOpen={ isInfoTooltipPopupOpen }
          onClose={ closeAllPopups }
          errorRegistration={ errorRegistration }
        />
      </FormValueContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;