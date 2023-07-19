class Api {
  constructor({ url, headers}) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
        return Promise.reject(`Ошибка: ${response} `);
    }
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  editUserInfo(data) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ 
        name: data.name, 
        about: data.about 
      })
    })
      .then(this._checkResponse);
  }

  editAvatar(data) {  
    return fetch(`${this._url}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ 
        avatar: data.avatar }),
    })
      .then(this._checkResponse);
  }

  getInitialCards() { 
    return fetch(`${this._url}cards`, {
      method: "GET",
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  addNewCards(data) {
    return fetch(`${this._url}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ 
        name: data.name, 
        link: data.link })
    })
      .then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._url}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._checkResponse);
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: (isLiked ? "PUT" : "DELETE"),
      headers: this._headers,
    })
      .then(this._checkResponse);
  }

}

const api = new Api ({
  url: "https://mesto.nomoreparties.co/v1/cohort-58/",
  headers: {
    'Content-Type': 'application/json',
    authorization: "e7e159e0-1a57-4256-b037-c6c3fe904269",
  }
})

export default api;