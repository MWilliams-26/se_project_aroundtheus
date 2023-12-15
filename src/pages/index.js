// Import all the classes
import "../pages/index.css";
import { initialCards, selectors, validationSettings } from "../utils/constants";
import Card from "../components/Card";
import FormValidator from "../components/FormValidator";
import Section from "../components/Section";
import Popup from "../components/Popup";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import UserInfo from "../components/UserInfo";

// Profile Edit
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileCloseButton = profileEditModal.querySelector(".modal__close");
const profileDescriptionInput = document.querySelector("#profile-description-input");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");


// Add Card
const profileAddCardModal = document.querySelector("#profile-add-card-modal");
const profileAddCardButton = document.querySelector("#profile-add-button");
const profileAddCardCloseButton = profileAddCardModal.querySelector(".modal__close");
const addCardForm = profileAddCardModal.querySelector(".modal__form_add");
const profileAddCardTitleInput = profileAddCardModal.querySelector(".modal__input_type_title");
const profileAddCardUrlInput = profileAddCardModal.querySelector(".modal__input_type_url");

// Preview Image Modal
const imagePreviewModal = document.querySelector("#image-preview-modal");
const modalImageElement = imagePreviewModal.querySelector(".modal__image-preview");
const modalCaption = imagePreviewModal.querySelector(".modal__image-caption");
const imagePreviewCloseButton = imagePreviewModal.querySelector(".modal__close");


const cardListEl = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content.firstElementChild;




// Create instances of the classes
const cardSection = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const cardEl = renderCard(cardData);
    cardSection.addItem(cardEl);
  },
},  
".cards__list"
);

cardSection.renderItems();

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

const popupWithImage = new PopupWithImage("#image-preview-modal");
popupWithImage.setEventListeners();

// Initialize all my instances


// all the rest
function renderCard(cardData) {
  return new Card(cardData, "#card-template", () => {
    popupWithImage.open(cardData.name, cardData.link)
  })
  .generateCard();
}

// function handleImageClick() {
//   openPopup(imagePreviewModal);
//   modalImageElement.setAttribute("src", this._link);
//   modalImageElement.setAttribute("alt", this._name);
//   modalCaption.textContent = this._name;
// }

function handleProfileEditSubmit() {
  profileUserInfo.setUserInfo();
  profileEditFormPopup.close();
};

function handleProfileAddCardSubmit(inputValues) {
  const cardData = renderCard({name: inputValues.title, link: inputValues.url });
  cardSection.addItem(cardData);
  addCardForm.reset();
  profileAddCardPopup.close();
  addFormValidator.disableButton();
};

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  modal.removeEventListener("mousedown", closeModalOnRemoteClick)
  document.removeEventListener("keydown", closeModalByEscape);
}

// function openPopup(modal) {
//   modal.classList.add("modal_opened");
//   modal.addEventListener("mousedown", closeModalOnRemoteClick);
//   document.addEventListener("keydown", closeModalByEscape);
// }

profileEditButton.addEventListener("click", () => {
  const { name, job } = profileUserInfo.getUserInfo();
  profileTitle.value = name;
  profileDescription.value = job;
  profileEditFormPopup.open();
  
});

profileCloseButton.addEventListener("click", () => {
  profileEditModal.close();
});

profileAddCardButton.addEventListener("click", () => {
  profileAddCardPopup.open();
});

profileAddCardCloseButton.addEventListener("click", () => {
  profileAddCardModal.close();
});

imagePreviewCloseButton.addEventListener("click", () => {
  imagePreviewModal.close();
});

// imagePreviewModal.addEventListener("click", (e) => {
//   if (e.target.classList.contains("modal_opened")) {
//     closePopup(imagePreviewModal);  
//   }
// });

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