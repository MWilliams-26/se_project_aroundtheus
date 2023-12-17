class Card {
  constructor(cardData, cardSelector, handlePreviewPicture) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handlePreviewPicture = handlePreviewPicture;
  }
  
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.firstElementChild
      .cloneNode(true);
    return cardElement
  }
  
  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeButton());

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._handleDeleteButton());

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => this._handlePreviewPicture({ name: this._name, link: this._link }));
  }

  _handleLikeButton() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteButton() {
    this._element.remove();
    this._element = null;
  }
      
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._cardImageEl = this._element.querySelector(".card__image");
    this._cardTitleEl = this._element.querySelector(".card__title");
    
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._name;
    this._cardTitleEl.textContent = this._name;

    return this._element;
  }    
    
}

export default Card; 
