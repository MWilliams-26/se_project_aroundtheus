import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector })
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = this._handleFormSubmit;
    this._submitButton = this._popupForm.querySelector(".modal__button");
  }

  setSubmitAction(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit;
  }

  setLoading() {
    if (isLoading) {
    this._submitButton.textContent = "Deleting...";
    } else {
    this._submitButton.textContent = this._submitButtonText;
    }
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
    super.setEventListeners();
  }
}