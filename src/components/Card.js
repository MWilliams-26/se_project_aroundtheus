class Card {
 project-9
  constructor(cardData, cardSelector, handlePreviewPicture, handleDeleteClick, handleLikeClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._id = cardData._id;
    this._isLiked = cardData.isLiked
    this._cardSelector = cardSelector;
    this._handlePreviewPicture = handlePreviewPicture;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;

  constructor(cardData, cardSelector, handlePreviewPicture) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handlePreviewPicture = handlePreviewPicture;
 main
  }
  
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.firstElementChild
      .cloneNode(true);
    return cardElement
  }
  
  _setEventListeners() {
 project-9
    
    this._cardImageEl.addEventListener("click", () => {
      this._handlePreviewPicture(this._name, this._link)
    });
    
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick(this._id);
    }); 

    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });


    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeButton());

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._handleDeleteButton());

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => this._handlePreviewPicture({ name: this._name, link: this._link }));
 main
  }

  _handleLikeButton() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
 project-9
  }  

  _updateLikeStatus() {
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }

  handleDeleteClick() {

  }

  _handleDeleteButton() {
 main
    this._element.remove();
    this._element = null;
  }
      
  generateCard() {
    this._element = this._getTemplate();
 project-9
    
=======
    this._setEventListeners();

 main
    this._cardImageEl = this._element.querySelector(".card__image");
    this._cardTitleEl = this._element.querySelector(".card__title");
    
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._name;
    this._cardTitleEl.textContent = this._name;
 project-9
    
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._likeButton = this._element.querySelector(".card__like-button");
   
    this._setEventListeners();

    return this._element;
  } 


    return this._element;
  }    
 main
    
}

export default Card; 
