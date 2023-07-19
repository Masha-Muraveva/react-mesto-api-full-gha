import logo from '../images/logo.svg';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
    <img src={logo} className="header__logo" alt="Логотип проекта Mesto.Russia"/>
    <nav className="header__menu">
    {props.email && <p className="header__user-email">{props.email}</p>}
      <Routes>

          <Route 
            path="/"
            element={
              <Link className="header__link" onClick={props.onSignOut} to="/signin">
                Выйти
              </Link>
            }  
          />

          <Route 
            path="/signin"
            element={
              <Link className="header__link" to="/signup">
                Регистрация
              </Link>
            }
          />

          <Route 
            path="/signup"
            element={
              <Link className="header__link" to="/signin">
                Войти
              </Link>
            }
          />
        </Routes>
    </nav>
  </header>
  )
}

export default Header