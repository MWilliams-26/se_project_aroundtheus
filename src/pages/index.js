import "../pages/index.css";

// Import all the classes
import { initialCards, selectors, validationSettings } from "../utils/constants";
import Card from "../components/Card";
import FormValidator from "../components/FormValidator";
import Section from "../components/Section";
import Popup from "../components/Popup";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import UserInfo from "../components/UserInfo";


// Elements
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileAddCardModal = document.querySelector("#profile-add-card-modal");




// Create instances of the classes
const cardSection = new Section({
  renderer: (item) => {
    const card = new Card(cardData, cardSelector, handlePreviewPicture);
    cardSection.addItem(card.generateCard());
  },
},  
  selectors.cardSection,
);

const profileEditFormPopup = new PopupWithForm("#profile-edit-modal", handleProfileEditSubmit);
profileEditFormPopup.setEventListeners();

const editFormElement = profileEditModal.querySelector(".modal__form_edit");
const editFormValidator = new FormValidator(validationSettings, editFormElement);
editFormValidator.enableValidation();

const profileAddCardPopup = new PopupWithForm("#profile-add-card-modal", handleProfileAddCardSubmit);
profileAddCardPopup.setEventListeners();

const addFormElement = profileAddCardModal.querySelector(".modal__form_add");
const addFormValidator = new FormValidator(validationSettings, addFormElement);
addFormValidator.enableValidation();

const profileUserInfo = new UserInfo("#profile-title-input", "#profile-description-input");

const imagePreviewModal = new PopupWithImage("#image-preview-modal");
imagePreviewModal.setEventListeners();

// Initialize all my instances
cardSection.renderItems(initialCards);

// all the rest
function renderCard(cardData, wrapper) {
  console.log("card");
  const card = new Card(cardData, "#card-template", handleImageClick).generateCard();
  wrapper.prepend(card);
}

function handleImageClick() {
  openPopup(imagePreviewModal);
  modalImageElement.setAttribute("src", this._link);
  modalImageElement.setAttribute("alt", this._name);
  modalCaption.textContent = this._name;
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
};

function handleProfileAddCardSubmit(e) {
  e.preventDefault();
  const name = profileAddCardTitleInput.value;
  const link = profileAddCardUrlInput.value;
  renderCard({ name, link}, cardListEl);
  addCardForm.reset();
  closePopup(profileAddCardModal);
  addFormValidator.disableButton();
};

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

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});

profileCloseButton.addEventListener("click", () => closePopup(profileEditModal))

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

profileAddCardButton.addEventListener("click", () => {
  openPopup(profileAddCardModal);
});

profileAddCardCloseButton.addEventListener("click", () =>  closePopup(profileAddCardModal))

addCardForm.addEventListener("submit", handleProfileAddCardSubmit);

imagePreviewCloseButton.addEventListener("click", () => closePopup(imagePreviewModal));

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

imagePreviewModal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal_opened")) {
    closePopup(imagePreviewModal);  
  }
});

function closeModalByEscape(e) {
  if (e.key === "Escape") {
      const activeModal = document.querySelector(".modal_opened")
      closePopup(activeModal);
  }
};

function closeModalOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget || evt.target.classList.contains(".modal__close")) { 
    closePopup(evt.target)
  }
}; 