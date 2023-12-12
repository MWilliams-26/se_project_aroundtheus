import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector })
    this._popupForm = this._popupElement.querySelector(".modal__form")
    // this._inputList = this._popupForm.querySelector(".modal__input");
    this._handleFormSubmit = handleFormSubmit;

  }

  close() {
    this._popupForm.reset();
    super.close(); 
  }

  _getInputValues() {
    const inputList = Array.from(this._popupForm.querySelectorAll(".modal__input"));
    const inputValues = {};
    inputList.forEach((input) => (inputValues[input.name] = input.value));
    return inputValues;
  }

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