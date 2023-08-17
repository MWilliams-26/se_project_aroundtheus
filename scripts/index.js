const initialCards = [
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

// ! ||--------------------------------------------------------------------------------||
// ! ||                                    Elements                                    ||
// ! ||--------------------------------------------------------------------------------||
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseButton = profileEditModal.querySelector("#profile-close-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");

const profileEditForm = profileEditModal.querySelector(".modal__form_edit");
const cardListEl = document.querySelector(".cards__list");

const cardTemplate = document.querySelector("#card-template").content.firstElementChild;

const profileAddCardButton = document.querySelector("#profile-add-button");
const profileAddCardModal = document.querySelector("#profile-add-card-modal");
const profileAddCardCloseButton = profileAddCardModal.querySelector("#profile-add-card-close-button");
const profileAddCardTitleInput = profileAddCardModal.querySelector(".modal__input_type_title");
const profileAddCardUrlInput = profileAddCardModal.querySelector(".modal__input_type_url");

const profileAddCardForm = profileAddCardModal.querySelector(".modal__form_add");
const profileAddCardTitle = profileAddCardModal.querySelector("#profile-title-add-card-input");
const profileAddCardUrl = profileAddCardModal.querySelector("#profile-url-input");

// add preview image modal 
const imagePreviewModal = document.querySelector("#image-preview-modal");
const modalImageElement = imagePreviewModal.querySelector(".modal__image-preview");
const modalCaption = imagePreviewModal.querySelector(".modal__image-caption");
const imagePreviewCloseButton = imagePreviewModal.querySelector(".modal__close");

// ! ||--------------------------------------------------------------------------------||
// ! ||                                    Functions                                   ||
// ! ||--------------------------------------------------------------------------------||
function closePopup() {
    profileEditModal.classList.remove("modal_opened");
    profileAddCardModal.classList.remove("modal_opened");
    imagePreviewModal.classList.remove("modal_opened");
}


function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
 
  deleteButton.addEventListener("click", () => {
   cardElement.remove();
  });

  //add click listener to the cardImage element
  cardImageEl.addEventListener("click", () => {
    imagePreviewModal.querySelector(".modal__image-preview");
    modalImageElement.src = cardData.link; 
    modalImageElement.alt = cardData.name;
    modalCaption.textContent = cardData.name;
    imagePreviewModal.classList.add("modal_opened");
  });
  
 

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
  

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;

  return cardElement;  
}


function renderCard(cardData, wrapper) {
    const cardElement = getCardElement(cardData);
    wrapper.prepend(cardElement);

}

// ! ||--------------------------------------------------------------------------------||
// ! ||                                 Event Handlers                                 ||
// ! ||--------------------------------------------------------------------------------||
function handleProfileEditSubmit(e) {
    e.preventDefault();
    profileTitle.textContent = profileTitleInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closePopup();
};

function handleProfileAddCardSubmit(e) {
    e.preventDefault();
    const name = profileAddCardTitleInput.value;
    const link = profileAddCardUrlInput.value;
    renderCard({ name, link}, cardListEl);
    closePopup();
};




// ! ||--------------------------------------------------------------------------------||
// ! ||                                 Event Listeners                                ||
// ! ||--------------------------------------------------------------------------------||
profileEditButton.addEventListener("click", () => {
    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    profileEditModal.classList.add("modal_opened");
});

profileCloseButton.addEventListener("click", closePopup)

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

profileAddCardButton.addEventListener("click", () => {
    profileAddCardTitleInput.value = profileAddCardTitle.textContent;
    profileAddCardUrlInput.value = profileAddCardUrl.textContent;
    profileAddCardModal.classList.add("modal_opened");
});

profileAddCardCloseButton.addEventListener("click", closePopup)

profileAddCardForm.addEventListener("submit", handleProfileAddCardSubmit);

imagePreviewCloseButton.addEventListener("click", closePopup)


initialCards.forEach((cardData) => renderCard(cardData, cardListEl));


