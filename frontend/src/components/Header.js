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
              <Link className="header__link" onClick={props.onSignOut} to="/sign-in">
                Выйти
              </Link>
            }  
          />

          <Route 
            path="/sign-in"
            element={
              <Link className="header__link" to="/sign-up">
                Регистрация
              </Link>
            }
          />

          <Route 
            path="/sign-up"
            element={
              <Link className="header__link" to="/sign-in">
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