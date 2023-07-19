import React from 'react';
import ActionPage from "./ActionPage.js";
import { FormValueContext } from '../contexts/FormValueContext.js';

function Login (props) {

  const formValue = React.useContext(FormValueContext);

  return (
    <main>
      <ActionPage
        title="Вход"
        name="log-in"
        text="Войти"
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        email={formValue.email}
        password={formValue.password}
      />
    </main>

  )

}

export default Login;
