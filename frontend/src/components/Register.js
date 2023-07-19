import React from 'react';
import ActionPage from "./ActionPage.js";
import { FormValueContext } from '../contexts/FormValueContext.js';
import { Link } from "react-router-dom";


function Register(props) {
  const formValue = React.useContext(FormValueContext);

  return (
    <main>
      <ActionPage
        title="Регистрация"
        name="registration"
        text="Зарегистрироваться"
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        email={formValue.email}
        password={formValue.password}
      />
      <span className="action-page__text">Уже зарегистрированы? 
        <Link ßto="/sign-in" className="action-page__login-link">
          Войти
        </Link>
      </span>
    </main>
  )
}

export default Register;