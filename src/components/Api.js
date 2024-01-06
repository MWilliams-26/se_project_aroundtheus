export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }
  

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, 
    { headers: this._headers, }).then(this._checkResponse)
  };

  loadUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, 
    {
      method: "get",
      headers: this._headers,}).then(this._checkResponse)
  };

  editProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, 
    {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: title,
        about: description,
      }),
    }).then(this._checkResponse)  
  };

  addCard() {
    return fetch(`${this._baseUrl}/cards`, 
    {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: title,
        link: url,
      }),
    }).then(this._checkResponse)
  };

  deleteCard() {
    return fetch(`${this._baseUrl}/cards/_Id`, 
    {
      method: "DELETE",
      headers: this._headers,
    })
    .then(this._checkResponse)
  };

  likeCard() {
    return fetch(`${this._baseUrl}/cards/_Id`, 
    {
      method: "PUT",
      headers: this._headers,
    })
    .then(this._checkResponse)
  };

  unlikeCard() {
    return fetch(`${this._baseUrl}/cards/_Id`, 
    {
      method: "DELETE",
      headers: this._headers,
    })
    .then(this._checkResponse)
  };







  loadPageContent() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }


}
