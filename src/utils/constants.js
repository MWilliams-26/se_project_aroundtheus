export const initialCards = [
  {
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
      name: "Bald Mountains",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
      name: "Vanoise National Park",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  }
];

export const selectors = {
    cardSection: ".modal__form_add",
    profileEditModal: "#profile-edit-modal",
  //   profileEditButton: "#profile-edit-button",
    profileEditModal: "#profile-edit-modal",
  //   profileCloseButton: ".modal__close",
    profileTitle: ".profile__title",
    profileDescription: ".profile__description",
  //   profileTitleInput: "#profile-title-input",
    profileDescriptionInput: "#profile-description-input",
  //   profileEditForm: ".modal__form_edit",
    profileAddCardModal: "#profile-add-card-modal",
  //   profileAddCardButton: "#profile-add-button",
    profileAddCardModal: "#profile-add-card-modal",
  //   profileAddCardCloseButton: ".modal__close",
    profileAddCardTitleInput: ".modal__input_type_title",
    profileAddCardUrlInput: ".modal__input_type_url",
  //   addCardForm: ".modal__form_add",
    profileAddCardTitle: "#profile-title-add-card-input",
    profileAddCardUrl: "#profile-url-input",
  //   imagePreviewModal: "#image-preview-modal",
  
  }

export const validationSettings = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
};
