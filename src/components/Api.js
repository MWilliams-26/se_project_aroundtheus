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
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,}).then(this._checkResponse)
  };

  editProfileInfo(cardData) {
    return fetch(`${this._baseUrl}/users/me`, 
    {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: cardData.title,
        about: cardData.description,
      }),
    }).then(this._checkResponse)  
  };

  addCard(inputValues) {
    return fetch(`${this._baseUrl}/cards`, 
    {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: inputValues.title,
        link: inputValues.url,
      }),
    }).then(this._checkResponse)
  };

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, 
    {
      method: "DELETE",
      headers: this._headers,
    })
    .then(this._checkResponse)
  };

  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, 
    {
      method: "PUT",
      headers: this._headers,
    })
    .then(this._checkResponse)
  };

  unlikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, 
    {
      method: "DELETE",
      headers: this._headers,
    })
    .then(this._checkResponse)
  };

  editProfilePicture(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, 
    {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    }).then(this._checkResponse) 
  }

  loadPageContent() {
    return Promise.all([this.loadUserInfo(), this.getInitialCards()]);
  }


}
