const imagePreviewModal = document.querySelector("#image-preview-modal");
const modalImageElement = imagePreviewModal.querySelector(".modal__image-preview");
const modalCaption = imagePreviewModal.querySelector(".modal__image-caption");
const imagePreviewCloseButton = imagePreviewModal.querySelector(".modal__close");

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  modal.removeEventListener("mousedown", closeModalOnRemoteClick)
  document.removeEventListener("keydown", closeModalByEscape);
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
  document.addEventListener("keydown", closeModalByEscape);
}

function closeModalByEscape(e) {
  if (e.key === "Escape") {
      const activeModal = document.querySelector(".modal_opened")
      closePopup(activeModal);
  }
};

function closeModalOnRemoteClick(evt) {
  // target is the element on which the event happened
  // currentTarget is the modal
  // if they are the same then we should close the modal
  if (evt.target === evt.currentTarget || evt.target.classList.contains(".modal__close")) { 
     closePopup(evt.target)
  }
}; 

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
      .addEventListener("click", () => this._handlePreviewPicture(this));
  }

  _handleLikeButton() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteButton() {
    this._element.remove();
  }
 
  _handlePreviewPicture() {
    openPopup(imagePreviewModal); 
    modalImageElement.src = cardData._link;
    modalImageElement.alt = cardData._name;
    modalCaption.textContent = cardData._name;
  }
      
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    
    this._likeButton = this._element.querySelector(".card__like-button");

    this._cardImageEl = this._element.querySelector(".card__image");
    this._cardTitleEl = this._element.querySelector(".card__title");
    
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._name;
    this._cardTitleEl.textContent = this._name;

    return this._element;
  }    
    
}

export default Card; 
