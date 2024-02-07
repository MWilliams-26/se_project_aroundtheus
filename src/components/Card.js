class Card {
  constructor(cardData, cardSelector, handlePreviewPicture, handleDeleteClick, handleLikeClick) 
  {
    this._name = cardData.name;
    this._link = cardData.link;
    this._id = cardData._id;
    this.isLiked = cardData.isLiked
    this._cardSelector = cardSelector;
    this._handlePreviewPicture = handlePreviewPicture;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }
  
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.firstElementChild
      .cloneNode(true);
    return cardElement
  }
  
  _setEventListeners() {
    
    this._cardImageEl.addEventListener("click", () => {
      this._handlePreviewPicture(this._name, this._link)
    });
    
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick(this);
    });

    this._likeButton = this._element.querySelector(".card__like-button");
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this);
    });

  }

  handleLikeClick(isLiked) {
    this._isLiked = isLiked;
    this._updateLikeStatus();
  }  

  _updateLikeStatus() {
    if (this.isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }

  handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }
  
      
  generateCard() {
    this._element = this._getTemplate();
    
    this._cardImageEl = this._element.querySelector(".card__image");
    this._cardTitleEl = this._element.querySelector(".card__title");
    
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._name;
    this._cardTitleEl.textContent = this._name;
    
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._likeButton = this._element.querySelector(".card__like-button");
   
    this._setEventListeners();
    this._updateLikeStatus();
   
    return this._element;
  } 
    
}

export default Card; 
