import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector })
    this._popupForm = this._popupElement.querySelector(".modal__form")
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popupForm.querySelectorAll(".modal__input");
  }

  close() {
    this._popupForm.reset();
    super.close(); 
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
 project-9
  } 

  }
 main

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }
}

export default PopupWithForm

//index.js

// const newCardPopup = new PopupWithForm("#profile-add-card-modal", () => {});
// newCardPopup.open


// newCardPopup.close()