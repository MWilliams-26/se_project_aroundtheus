// Import all the classes
import "../pages/index.css";
import { initialCards, validationSettings } from "../utils/constants";
import Card from "../components/Card";
import FormValidator from "../components/FormValidator";
import Section from "../components/Section";
import Popup from "../components/Popup";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithConfirmation from "../components/PopupWithConfirmation";
import UserInfo from "../components/UserInfo";
import Api from "../components/Api";
import { data } from "autoprefixer";


// Profile Edit
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileAvatarButton = document.querySelector("#profile-avatar-button");
const profileCloseButton = profileEditModal.querySelector(".modal__close");
const profileEditForm = profileEditModal.querySelector(".modal__form_edit");
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

// Confirm Delete Modal
const trashIcon = document.querySelector("#confirm-delete-modal");
const trashSubmitButton = trashIcon.querySelector("#confirm-delete-submit")

// Avatar Edit Modal
const avatarEditModal = document.querySelector("#avatar-edit-modal");

const cardTemplate = document.querySelector("#card-template").content.firstElementChild;



const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "f34fc940-6444-4c84-9643-915e876889fb",
    "Content-Type": "application/json"
  }
}); 

let cardSection;

api
  .loadPageContent()
  .then((res) => {
    cardSection = new Section({
      items: initialCards,
      renderer: (cardData) => {
        const cardEl = renderCard(cardData);
        cardSection.addItem(cardEl);
      },
    },  
  ".cards__list"
  );
  
  cardSection.renderItems();
  })
  .catch((err) => {
    console.error(err); 
  });




const editFormElement = profileEditModal.querySelector(".modal__form_edit");  
const editFormValidator = new FormValidator(validationSettings, editFormElement);  
editFormValidator.enableValidation();  

const avatarFormElement = avatarEditModal.querySelector(".modal__form_avatar");  
const avatarFormValidator = new FormValidator(validationSettings, avatarFormElement);  
avatarFormValidator.enableValidation();

const addFormElement = profileAddCardModal.querySelector(".modal__form_add");  
const addFormValidator = new FormValidator(validationSettings, addFormElement);  
addFormValidator.enableValidation();  


const popupWithImage = new PopupWithImage("#image-preview-modal");  
popupWithImage.setEventListeners();

function handlePreviewPicture(name, link) {
  popupWithImage.open(name, link);
}

const profileUserInfo = new UserInfo(".profile__title", ".profile__description", ".profile__image");

function renderCard(cardData) {
  const card = new Card(
    cardData, 
    "#card-template",
    handlePreviewPicture,
    handleDeleteClick,
    handleLikeClick,
  );
  return card.generateCard();
}

const profileEditFormPopup = new PopupWithForm("#profile-edit-modal", handleProfileEditSubmit);  
profileEditFormPopup.setEventListeners();

function handleProfileEditSubmit(inputValues) {
  profileEditFormPopup.setLoading(true);
  api
  .editProfileInfo(inputValues)
  .then((res) => {
    profileUserInfo.setUserInfo(inputValues.title, inputValues.description);
    profileEditFormPopup.close();
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    profileEditFormPopup.setLoading(false);
  });

};

const profileAddCardPopup = new PopupWithForm("#profile-add-card-modal", handleProfileAddCardSubmit);  
profileAddCardPopup.setEventListeners();

function handleProfileAddCardSubmit(inputValues) {
  profileAddCardPopup.setLoading(true);
  api
    .addCard(inputValues)
    .then((res) => {
      const cardData = renderCard({name: inputValues.title, link: inputValues.url });
      cardSection.addItem(cardData);
      profileAddCardPopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      profileAddCardPopup.setLoading(false);
    });
};

const avatarEditPopup = new PopupWithForm("#avatar-edit-modal", handleEditAvatarSubmit);
avatarEditPopup.setEventListeners();

function handleEditAvatarSubmit(inputValues) {
  api
    .editProfilePicture(inputValues.link)
    .then((res) => {
      profileUserInfo.setUserAvatar(res.avatar)
      avatarEditPopup.close()
    })
    .catch((err) => {
      console.error(err);
    });
}

profileEditButton.addEventListener("click", () => {
  editFormValidator.resetValidation();
  const userInfo = profileUserInfo.getUserInfo();
  profileTitleInput.value = userInfo.name;
  profileDescriptionInput.value = userInfo.job;
  profileEditFormPopup.open();
  
});

profileAddCardButton.addEventListener("click", () => {
  profileAddCardPopup.open();
  addFormValidator.resetValidation();
});

profileAvatarButton.addEventListener("click", () => {
  avatarEditPopup.open();
});

function handleLikeClick(card) {
    if (card.isLiked) {
      api
      .likeCard(card._id)
      .then((res) => {
        card.handleLikeClick();
      })
      .catch((err) => {
        console.error(err);
      });
    } else {
      api
      .unlikeCard(card._id)
      .then((res) => {
        card.handleLikeClick();
      })
      .catch((err) => {
        console.error(err);
      })
    }
}  
  
const confirmDelete = new PopupWithConfirmation("#confirm-delete-modal");
  confirmDelete.setEventListeners();
  
function handleDeleteClick(cardId) {
  confirmDelete.open();
  confirmDelete.setSubmitAction(() => {  
    api
      .deleteCard(cardId)
      .then(() => {
        cardId.handleDeleteClick();
        confirmDelete.close();
      })
      .catch((err) => {
        console.error(err);
      })
    });
}        