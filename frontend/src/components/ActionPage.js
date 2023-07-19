import React from 'react';

function ActionPage (props){

  return (
    <div className="action-page">
      <h2 className="action-page__title">{props.title}</h2>
      <form className="action-page__form" name={`${props.name}`} onSubmit={props.onSubmit} >
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="action-page__input" 
          required  
          minLength="2" 
          maxLength="40"
          value={props.email || ""} 
          onChange={props.onChange}
          autoComplete="off"
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Пароль"
          className="action-page__input" 
          required  
          minLength="2" 
          maxLength="40"
          value={props.password || ""}
          onChange={props.onChange}
          autoComplete="off"
          />
        <button 
          type="submit" 
          className="action-page__button">
           {props.text}
        </button>

      </form>
    </div>
  )
}

export default ActionPage;