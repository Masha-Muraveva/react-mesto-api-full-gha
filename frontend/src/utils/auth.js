class Auth {
  constructor ({ url, headers}) { 
    this._url = url;
    this._headers = headers; 
  }

  _checkResponse(responce) {
    if (responce.ok) {
      return responce.json();
    } 
    return Promise.reject(`Ошибка: ${responce} `)
  }


  registration(data) {
    return fetch(`${this._url}/signup`, { 
      method: "POST",  
      headers: this._headers,
      body: JSON.stringify({
        password: data.password,
        email: data.email
      }), 
    })
    .then((responce) => {
      return this._checkResponse(responce)
    }) 
  }

  login(data) {
    return fetch(`${this._url}/signin`, { 
      method: "POST",  
      headers: this._headers,
      body: JSON.stringify({
        password: data.password,
        email: data.email
      }),
    })
    .then((responce) => {
      return this._checkResponse(responce)
    }) 
  }

  checkToken(token) {
    return fetch(`${this._url}/users/me`, { 
      method: "GET",  
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
    .then((responce) => {
      return this._checkResponse(responce)
    }) 
  }

}

const auth = new Auth ({
  url: "https://auth.nomoreparties.co",
  headers: {
    'Content-Type': 'application/json'}
})

export default auth;