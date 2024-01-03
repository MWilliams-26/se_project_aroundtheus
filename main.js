!function(){"use strict";const e={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"};var t=class{constructor(e,t,s){this._name=e.name,this._link=e.link,this._cardSelector=t,this._handlePreviewPicture=s}_getTemplate(){return document.querySelector(this._cardSelector).content.firstElementChild.cloneNode(!0)}_setEventListeners(){this._element.querySelector(".card__like-button").addEventListener("click",(()=>this._handleLikeButton())),this._element.querySelector(".card__delete-button").addEventListener("click",(()=>this._handleDeleteButton())),this._element.querySelector(".card__image").addEventListener("click",(()=>this._handlePreviewPicture({name:this._name,link:this._link})))}_handleLikeButton(){this._element.querySelector(".card__like-button").classList.toggle("card__like-button_active")}_handleDeleteButton(){this._element.remove(),this._element=null}generateCard(){return this._element=this._getTemplate(),this._setEventListeners(),this._cardImageEl=this._element.querySelector(".card__image"),this._cardTitleEl=this._element.querySelector(".card__title"),this._cardImageEl.src=this._link,this._cardImageEl.alt=this._name,this._cardTitleEl.textContent=this._name,this._element}},s=class{constructor(e,t){this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formEl=t}_showInputError(e){const t=this._formEl.querySelector(`#${e.id}-error`);e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}_hideInputError(e){const t=this._formEl.querySelector(`#${e.id}-error`);e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}_hasInvalidInput(){return!this._inputEls.every((e=>e.validity.valid))}disableButton(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}_enableButton(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1}_toggleButtonState(){this._hasInvalidInput(this._inputEls)?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}_setEventListeners(){this._inputEls=[...this._formEl.querySelectorAll(this._inputSelector)],this._submitButton=this._formEl.querySelector(this._submitButtonSelector),this._inputEls.forEach((e=>{e.addEventListener("input",(t=>{this._checkInputValidity(e),this._toggleButtonState()}))}))}enableValidation(){this._formEl.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()}resetValidation(){this._toggleButtonState(),this._inputEls.forEach((e=>{this._hideInputError(e)}))}};class n{constructor(e){let{popupSelector:t}=e;this._popupElement=document.querySelector(t)}open(){this._popupElement.classList.add("modal_opened"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popupElement.classList.remove("modal_opened"),document.removeEventListener("keydown",this._handleEscClose)}_handleEscClose=e=>{"Escape"===e.key&&this.close()};setEventListeners(){this._popupElement.addEventListener("click",(e=>{(e.target===this._popupElement||e.target.classList.contains("modal__close"))&&this.close()}))}}var r=class extends n{constructor(e,t){super({popupSelector:e}),this._popupForm=this._popupElement.querySelector(".modal__form"),this._handleFormSubmit=t,this._inputList=this._popupForm.querySelectorAll(".modal__input")}close(){this._popupForm.reset(),super.close()}_getInputValues(){const e={};return this._inputList.forEach((t=>{e[t.name]=t.value})),e}setEventListeners(){this._popupForm.addEventListener("submit",(e=>{e.preventDefault(),this._handleFormSubmit(this._getInputValues())})),super.setEventListeners()}};const i=document.querySelector("#profile-edit-modal"),o=document.querySelector("#profile-edit-button"),a=(i.querySelector(".modal__close"),i.querySelector(".modal__form_edit"),document.querySelector("#profile-description-input")),l=document.querySelector("#profile-title-input"),c=(document.querySelector(".profile__title"),document.querySelector(".profile__description"),document.querySelector("#profile-add-card-modal")),u=document.querySelector("#profile-add-button"),_=(c.querySelector(".modal__close"),c.querySelector(".modal__form_add"),c.querySelector(".modal__input_type_title"),c.querySelector(".modal__input_type_url"),document.querySelector("#image-preview-modal")),d=(_.querySelector(".modal__image-preview"),_.querySelector(".modal__image-caption"),_.querySelector(".modal__close"),document.querySelector("#card-template").content.firstElementChild,new class{constructor(e){let{baseUrl:t,headers:s}=e;this._baseUrl=t,this._headers=s}_checkResponse(e){return e.ok?e.json():Promise.reject(`Error: ${e.status}`)}getInitialCards(){return fetch(`${this._baseUrl}/cards`,{headers:this._headers}).then(this._checkResponse)}getUserInfo(){return fetch(`${this._baseUrl}/users/me`,{headers:this._headers}).then(this._checkResponse)}}({baseUrl:"https://around-api.en.tripleten-services.com/v1",headers:{authorization:"f34fc940-6444-4c84-9643-915e876889fb","Content-Type":"application/json"}}),new class{constructor(e,t){let{items:s,renderer:n}=e;this._items=s,this._renderer=n,this._container=document.querySelector(t)}renderItems(){this._items.forEach((e=>{this._renderer(e)}))}addItem(e){this._container.prepend(e)}}({items:[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"}],renderer:e=>{const t=y(e);d.addItem(t)}},".cards__list"));d.renderItems();const m=new r("#profile-edit-modal",(function(e){v.setUserInfo(e.title,e.description),m.close()}));m.setEventListeners();const h=new s(e,i.querySelector(".modal__form_edit"));h.enableValidation();const p=new r("#profile-add-card-modal",(function(e){const t=y({name:e.title,link:e.url});d.addItem(t),p.close()}));p.setEventListeners();const E=new s(e,c.querySelector(".modal__form_add"));E.enableValidation();const v=new class{constructor(e,t){this._nameElement=document.querySelector(e),this._jobElement=document.querySelector(t)}getUserInfo(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}setUserInfo(e,t){this._nameElement.textContent=e,this._jobElement.textContent=t}}(".profile__title",".profile__description"),S=new class extends n{constructor(e){super({popupSelector:e}),this._image=this._popupElement.querySelector(".modal__image-preview"),this._caption=this._popupElement.querySelector(".modal__image-caption")}open(e,t){this._image.src=t,this._image.alt=e,this._caption.textContent=e,super.open()}}("#image-preview-modal");function y(e){return new t(e,"#card-template",(()=>{S.open(e.name,e.link)})).generateCard()}S.setEventListeners(),o.addEventListener("click",(()=>{h.resetValidation();const e=v.getUserInfo();l.value=e.name,a.value=e.job,m.open()})),u.addEventListener("click",(()=>{p.open(),E.resetValidation()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBQUEsR0FLRSxNQUppQixDQUNmdkcsS0FBTUYsS0FBS29JLGFBQWExRyxZQUN4QjRHLElBQUt0SSxLQUFLcUksWUFBWTNHLFlBRzFCLENBRUFnRyxXQUFBQSxDQUFZeEgsRUFBTW9JLEdBQ2hCdEksS0FBS29JLGFBQWExRyxZQUFjeEIsRUFDaENGLEtBQUtxSSxZQUFZM0csWUFBYzRHLENBQ2pDLEdIK0RtQyxrQkFBbUIseUJBRWxEQyxFQUFpQixJSWhGUixjQUE2QjNFLEVBQzFDaEUsV0FBQUEsQ0FBWWtFLEdBQ1ZZLE1BQU0sQ0FBRVosa0JBQ1I5RCxLQUFLd0ksT0FBU3hJLEtBQUsrRCxjQUFjdEQsY0FBYyx5QkFDL0NULEtBQUt5SSxTQUFXekksS0FBSytELGNBQWN0RCxjQUFjLHdCQUNuRCxDQUdBdUQsSUFBQUEsQ0FBSzlELEVBQU1FLEdBQ1RKLEtBQUt3SSxPQUFPaEgsSUFBTXBCLEVBQ2xCSixLQUFLd0ksT0FBTy9HLElBQU12QixFQUNsQkYsS0FBS3lJLFNBQVMvRyxZQUFjeEIsRUFDNUJ3RSxNQUFNVixNQUNSLEdKbUV3Qyx3QkFPMUMsU0FBU3NELEVBQVd6SCxHQUNsQixPQUFPLElBQUk2SSxFQUFLN0ksRUFBVSxrQkFBa0IsS0FDMUMwSSxFQUFldkUsS0FBS25FLEVBQVNLLEtBQU1MLEVBQVNPLEtBQUssSUFFbERpQixjQUNILENBWEFrSCxFQUFlakUsb0JBMEJmYyxFQUFrQnJFLGlCQUFpQixTQUFTLEtBQzFDOEcsRUFBa0JuRSxrQkFDbEIsTUFBTWlGLEVBQVdsQixFQUFnQmhCLGNBQ2pDbkIsRUFBa0JKLE1BQVF5RCxFQUFTekksS0FDbkNtRixFQUF3QkgsTUFBUXlELEVBQVNMLElBQ3pDZixFQUFxQnZELE1BQU0sSUFJN0J3QixFQUFxQnpFLGlCQUFpQixTQUFTLEtBQzdDZ0gsRUFBb0IvRCxPQUNwQmlFLEVBQWlCdkUsaUJBQWlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gIHtcclxuICAgICAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcclxuICAgICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L3lvc2VtaXRlLmpwZ1wiLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGFrZS1sb3Vpc2UuanBnXCIsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgICBuYW1lOiBcIkJhbGQgTW91bnRhaW5zXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9iYWxkLW1vdW50YWlucy5qcGdcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGF0ZW1hci5qcGdcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC92YW5vaXNlLmpwZ1wiLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGFnby5qcGdcIixcclxuICB9XHJcbl07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25TZXR0aW5ncyA9IHtcclxuICAgIGZvcm1TZWxlY3RvcjogXCIubW9kYWxfX2Zvcm1cIixcclxuICAgIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19pbnB1dFwiLFxyXG4gICAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19idXR0b25cIixcclxuICAgIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX2J1dHRvbl9kaXNhYmxlZFwiLFxyXG4gICAgaW5wdXRFcnJvckNsYXNzOiBcIm1vZGFsX19pbnB1dF90eXBlX2Vycm9yXCIsXHJcbiAgICBlcnJvckNsYXNzOiBcIm1vZGFsX19lcnJvcl92aXNpYmxlXCJcclxufTtcclxuIiwiY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoY2FyZERhdGEsIGNhcmRTZWxlY3RvciwgaGFuZGxlUHJldmlld1BpY3R1cmUpIHtcclxuICAgIHRoaXMuX25hbWUgPSBjYXJkRGF0YS5uYW1lO1xyXG4gICAgdGhpcy5fbGluayA9IGNhcmREYXRhLmxpbms7XHJcbiAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9oYW5kbGVQcmV2aWV3UGljdHVyZSA9IGhhbmRsZVByZXZpZXdQaWN0dXJlO1xyXG4gIH1cclxuICBcclxuICBfZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcclxuICAgICAgLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGRcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHJldHVybiBjYXJkRWxlbWVudFxyXG4gIH1cclxuICBcclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtYnV0dG9uXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5faGFuZGxlTGlrZUJ1dHRvbigpKTtcclxuXHJcbiAgICB0aGlzLl9lbGVtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2RlbGV0ZS1idXR0b25cIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLl9oYW5kbGVEZWxldGVCdXR0b24oKSk7XHJcblxyXG4gICAgdGhpcy5fZWxlbWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX2hhbmRsZVByZXZpZXdQaWN0dXJlKHsgbmFtZTogdGhpcy5fbmFtZSwgbGluazogdGhpcy5fbGluayB9KSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlTGlrZUJ1dHRvbigpIHtcclxuICAgIHRoaXMuX2VsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIilcclxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlRGVsZXRlQnV0dG9uKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xyXG4gIH1cclxuICAgICAgXHJcbiAgZ2VuZXJhdGVDYXJkKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIHRoaXMuX2NhcmRJbWFnZUVsID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xyXG4gICAgdGhpcy5fY2FyZFRpdGxlRWwgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGl0bGVcIik7XHJcbiAgICBcclxuICAgIHRoaXMuX2NhcmRJbWFnZUVsLnNyYyA9IHRoaXMuX2xpbms7XHJcbiAgICB0aGlzLl9jYXJkSW1hZ2VFbC5hbHQgPSB0aGlzLl9uYW1lO1xyXG4gICAgdGhpcy5fY2FyZFRpdGxlRWwudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gIH0gICAgXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsgXHJcbiIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGZvcm1FbCkge1xyXG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IG9wdGlvbnMuaW5wdXRTZWxlY3RvcjtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gb3B0aW9ucy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBvcHRpb25zLmluYWN0aXZlQnV0dG9uQ2xhc3M7XHJcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBvcHRpb25zLmlucHV0RXJyb3JDbGFzcztcclxuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBvcHRpb25zLmVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtRWw7XHJcbiAgfVxyXG5cclxuICBfc2hvd0lucHV0RXJyb3IoaW5wdXRFbCkge1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTsgXHJcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yTWVzc2FnZUVsLnRleHRDb250ZW50ID0gaW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZTtcclxuICAgIGVycm9yTWVzc2FnZUVsLmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbCkge1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTsgXHJcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yTWVzc2FnZUVsLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGVycm9yTWVzc2FnZUVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG4gIFxyXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCkge1xyXG4gICAgaWYgKCFpbnB1dEVsLnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsKTtcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICBfaGFzSW52YWxpZElucHV0KCkge1xyXG4gICAgcmV0dXJuICF0aGlzLl9pbnB1dEVscy5ldmVyeSgoaW5wdXRFbCkgPT4gaW5wdXRFbC52YWxpZGl0eS52YWxpZCk7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlQnV0dG9uKCkge1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcylcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBfZW5hYmxlQnV0dG9uKCkge1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCh0aGlzLl9pbnB1dEVscykpIHtcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9pbnB1dEVscyA9IFsuLi50aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKV07XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24gPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgICAgIFxyXG4gICAgdGhpcy5faW5wdXRFbHMuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xyXG4gICAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKTtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2Zvcm1FbC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTsgXHJcbiAgfVxyXG5cclxuICBcclxuICByZXNldFZhbGlkYXRpb24oKSB7XHJcbiAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTsgXHJcblxyXG4gIHRoaXMuX2lucHV0RWxzLmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KVxyXG4gIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7IiwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yIH0pIHtcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlbmVkXCIpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH0gXHJcblxyXG4gIF9oYW5kbGVFc2NDbG9zZSA9IChldnQpID0+IHtcclxuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkgeyBcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZXZ0LnRhcmdldCA9PT0gdGhpcy5fcG9wdXBFbGVtZW50IHx8IFxyXG4gICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfX2Nsb3NlXCIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0KSB7XHJcbiAgICBzdXBlcih7IHBvcHVwU2VsZWN0b3IgfSlcclxuICAgIHRoaXMuX3BvcHVwRm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpXHJcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX3BvcHVwRm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19pbnB1dFwiKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wdXBGb3JtLnJlc2V0KCk7XHJcbiAgICBzdXBlci5jbG9zZSgpOyBcclxuICB9XHJcblxyXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgIGNvbnN0IGlucHV0VmFsdWVzID0ge307XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgaW5wdXRWYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGlucHV0VmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9wb3B1cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgfSk7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdXBXaXRoRm9ybVxyXG5cclxuLy9pbmRleC5qc1xyXG5cclxuLy8gY29uc3QgbmV3Q2FyZFBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIjcHJvZmlsZS1hZGQtY2FyZC1tb2RhbFwiLCAoKSA9PiB7fSk7XHJcbi8vIG5ld0NhcmRQb3B1cC5vcGVuXHJcblxyXG5cclxuLy8gbmV3Q2FyZFBvcHVwLmNsb3NlKCkiLCIvLyBJbXBvcnQgYWxsIHRoZSBjbGFzc2VzXHJcbmltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgeyBpbml0aWFsQ2FyZHMsIHZhbGlkYXRpb25TZXR0aW5ncyB9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25cIjtcclxuaW1wb3J0IFBvcHVwIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm1cIjtcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgQXBpIGZyb20gXCIuLi9jb21wb25lbnRzL0FwaVwiO1xyXG5cclxuXHJcbi8vIFByb2ZpbGUgRWRpdFxyXG5jb25zdCBwcm9maWxlRWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLWVkaXQtbW9kYWxcIik7XHJcbmNvbnN0IHByb2ZpbGVFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLWVkaXQtYnV0dG9uXCIpO1xyXG5jb25zdCBwcm9maWxlQ2xvc2VCdXR0b24gPSBwcm9maWxlRWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlXCIpO1xyXG5jb25zdCBwcm9maWxlRWRpdEZvcm0gPSBwcm9maWxlRWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1fZWRpdFwiKTtcclxuY29uc3QgcHJvZmlsZURlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtZGVzY3JpcHRpb24taW5wdXRcIik7XHJcbmNvbnN0IHByb2ZpbGVUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLXRpdGxlLWlucHV0XCIpO1xyXG5jb25zdCBwcm9maWxlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3RpdGxlXCIpO1xyXG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Rlc2NyaXB0aW9uXCIpO1xyXG5cclxuXHJcbi8vIEFkZCBDYXJkXHJcbmNvbnN0IHByb2ZpbGVBZGRDYXJkTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtYWRkLWNhcmQtbW9kYWxcIik7XHJcbmNvbnN0IHByb2ZpbGVBZGRDYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLWFkZC1idXR0b25cIik7XHJcbmNvbnN0IHByb2ZpbGVBZGRDYXJkQ2xvc2VCdXR0b24gPSBwcm9maWxlQWRkQ2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlXCIpO1xyXG5jb25zdCBhZGRDYXJkRm9ybSA9IHByb2ZpbGVBZGRDYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybV9hZGRcIik7XHJcbmNvbnN0IHByb2ZpbGVBZGRDYXJkVGl0bGVJbnB1dCA9IHByb2ZpbGVBZGRDYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW5wdXRfdHlwZV90aXRsZVwiKTtcclxuY29uc3QgcHJvZmlsZUFkZENhcmRVcmxJbnB1dCA9IHByb2ZpbGVBZGRDYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW5wdXRfdHlwZV91cmxcIik7XHJcblxyXG4vLyBQcmV2aWV3IEltYWdlIE1vZGFsXHJcbmNvbnN0IGltYWdlUHJldmlld01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZS1wcmV2aWV3LW1vZGFsXCIpO1xyXG5jb25zdCBtb2RhbEltYWdlRWxlbWVudCA9IGltYWdlUHJldmlld01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2ltYWdlLXByZXZpZXdcIik7XHJcbmNvbnN0IG1vZGFsQ2FwdGlvbiA9IGltYWdlUHJldmlld01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2ltYWdlLWNhcHRpb25cIik7XHJcbmNvbnN0IGltYWdlUHJldmlld0Nsb3NlQnV0dG9uID0gaW1hZ2VQcmV2aWV3TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2VcIik7XHJcblxyXG5cclxuXHJcbmNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC10ZW1wbGF0ZVwiKS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG5cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlIGluc3RhbmNlcyBvZiB0aGUgY2xhc3Nlc1xyXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcclxuICBiYXNlVXJsOiBcImh0dHBzOi8vYXJvdW5kLWFwaS5lbi50cmlwbGV0ZW4tc2VydmljZXMuY29tL3YxXCIsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgYXV0aG9yaXphdGlvbjogXCJmMzRmYzk0MC02NDQ0LTRjODQtOTY0My05MTVlODc2ODg5ZmJcIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgfVxyXG59KTsgXHJcblxyXG5jb25zdCBjYXJkU2VjdGlvbiA9IG5ldyBTZWN0aW9uKHtcclxuICBpdGVtczogaW5pdGlhbENhcmRzLFxyXG4gIHJlbmRlcmVyOiAoY2FyZERhdGEpID0+IHtcclxuICAgIGNvbnN0IGNhcmRFbCA9IHJlbmRlckNhcmQoY2FyZERhdGEpO1xyXG4gICAgY2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkRWwpO1xyXG4gIH0sXHJcbn0sICBcclxuXCIuY2FyZHNfX2xpc3RcIlxyXG4pO1xyXG5cclxuY2FyZFNlY3Rpb24ucmVuZGVySXRlbXMoKTtcclxuXHJcbmNvbnN0IHByb2ZpbGVFZGl0Rm9ybVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIjcHJvZmlsZS1lZGl0LW1vZGFsXCIsIGhhbmRsZVByb2ZpbGVFZGl0U3VibWl0KTtcclxucHJvZmlsZUVkaXRGb3JtUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IGVkaXRGb3JtRWxlbWVudCA9IHByb2ZpbGVFZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybV9lZGl0XCIpO1xyXG5jb25zdCBlZGl0Rm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkYXRpb25TZXR0aW5ncywgZWRpdEZvcm1FbGVtZW50KTtcclxuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuY29uc3QgcHJvZmlsZUFkZENhcmRQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKFwiI3Byb2ZpbGUtYWRkLWNhcmQtbW9kYWxcIiwgaGFuZGxlUHJvZmlsZUFkZENhcmRTdWJtaXQpO1xyXG5wcm9maWxlQWRkQ2FyZFBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBhZGRGb3JtRWxlbWVudCA9IHByb2ZpbGVBZGRDYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybV9hZGRcIik7XHJcbmNvbnN0IGFkZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uU2V0dGluZ3MsIGFkZEZvcm1FbGVtZW50KTtcclxuYWRkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jb25zdCBwcm9maWxlVXNlckluZm8gPSBuZXcgVXNlckluZm8oXCIucHJvZmlsZV9fdGl0bGVcIiwgXCIucHJvZmlsZV9fZGVzY3JpcHRpb25cIik7XHJcblxyXG5jb25zdCBwb3B1cFdpdGhJbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZShcIiNpbWFnZS1wcmV2aWV3LW1vZGFsXCIpO1xyXG5wb3B1cFdpdGhJbWFnZS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBhbGwgbXkgaW5zdGFuY2VzXHJcblxyXG5cclxuLy8gYWxsIHRoZSByZXN0XHJcbmZ1bmN0aW9uIHJlbmRlckNhcmQoY2FyZERhdGEpIHtcclxuICByZXR1cm4gbmV3IENhcmQoY2FyZERhdGEsIFwiI2NhcmQtdGVtcGxhdGVcIiwgKCkgPT4ge1xyXG4gICAgcG9wdXBXaXRoSW1hZ2Uub3BlbihjYXJkRGF0YS5uYW1lLCBjYXJkRGF0YS5saW5rKVxyXG4gIH0pXHJcbiAgLmdlbmVyYXRlQ2FyZCgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlUHJvZmlsZUVkaXRTdWJtaXQoaW5wdXRWYWx1ZXMpIHtcclxuICBwcm9maWxlVXNlckluZm8uc2V0VXNlckluZm8oaW5wdXRWYWx1ZXMudGl0bGUsIGlucHV0VmFsdWVzLmRlc2NyaXB0aW9uKTtcclxuICBwcm9maWxlRWRpdEZvcm1Qb3B1cC5jbG9zZSgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlUHJvZmlsZUFkZENhcmRTdWJtaXQoaW5wdXRWYWx1ZXMpIHtcclxuICBjb25zdCBjYXJkRGF0YSA9IHJlbmRlckNhcmQoe25hbWU6IGlucHV0VmFsdWVzLnRpdGxlLCBsaW5rOiBpbnB1dFZhbHVlcy51cmwgfSk7XHJcbiAgY2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkRGF0YSk7XHJcbiAgcHJvZmlsZUFkZENhcmRQb3B1cC5jbG9zZSgpO1xyXG4gIFxyXG59O1xyXG5cclxucHJvZmlsZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBlZGl0Rm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxuICBjb25zdCB1c2VySW5mbyA9IHByb2ZpbGVVc2VySW5mby5nZXRVc2VySW5mbygpO1xyXG4gIHByb2ZpbGVUaXRsZUlucHV0LnZhbHVlID0gdXNlckluZm8ubmFtZTtcclxuICBwcm9maWxlRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHVzZXJJbmZvLmpvYjtcclxuICBwcm9maWxlRWRpdEZvcm1Qb3B1cC5vcGVuKCk7XHJcbiAgXHJcbn0pO1xyXG5cclxucHJvZmlsZUFkZENhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBwcm9maWxlQWRkQ2FyZFBvcHVwLm9wZW4oKTtcclxuICBhZGRGb3JtVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xyXG59KTtcclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XHJcbiAgY29uc3RydWN0b3IoeyBiYXNlVXJsLCBoZWFkZXJzIH0pIHtcclxuICAgIHRoaXMuX2Jhc2VVcmwgPSBiYXNlVXJsO1xyXG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tSZXNwb25zZShyZXMpIHtcclxuICAgIGlmIChyZXMub2spIHtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYEVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBnZXRJbml0aWFsQ2FyZHMoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHNgLCBcclxuICAgIHsgaGVhZGVyczogdGhpcy5faGVhZGVycywgfSkudGhlbih0aGlzLl9jaGVja1Jlc3BvbnNlKVxyXG4gIH07XHJcbiAgXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWVgLCBcclxuICAgIHsgaGVhZGVyczogdGhpcy5faGVhZGVycywgfSkudGhlbih0aGlzLl9jaGVja1Jlc3BvbnNlKVxyXG4gIH07XHJcbn1cclxuXHJcblxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICByZW5kZXJJdGVtcygpIHtcclxuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGNhcmREYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGNhcmREYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbShlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgY29uc3RydWN0b3IobmFtZVNlbGVjdG9yLCBqb2JTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9qb2JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihqb2JTZWxlY3Rvcik7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgY29uc3QgdXNlckluZm8gPSB7XHJcbiAgICAgIG5hbWU6IHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50LFxyXG4gICAgICBqb2I6IHRoaXMuX2pvYkVsZW1lbnQudGV4dENvbnRlbnQsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHVzZXJJbmZvO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlckluZm8obmFtZSwgam9iKSB7XHJcbiAgICB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICB0aGlzLl9qb2JFbGVtZW50LnRleHRDb250ZW50ID0gam9iO1xyXG4gIH1cclxufSIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgc3VwZXIoeyBwb3B1cFNlbGVjdG9yIH0pXHJcbiAgICB0aGlzLl9pbWFnZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19pbWFnZS1wcmV2aWV3XCIpO1xyXG4gICAgdGhpcy5fY2FwdGlvbiA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19pbWFnZS1jYXB0aW9uXCIpO1xyXG4gIH1cclxuXHJcblxyXG4gIG9wZW4obmFtZSwgbGluaykge1xyXG4gICAgdGhpcy5faW1hZ2Uuc3JjID0gbGluaztcclxuICAgIHRoaXMuX2ltYWdlLmFsdCA9IG5hbWU7XHJcbiAgICB0aGlzLl9jYXB0aW9uLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICB9IFxyXG59XHJcblxyXG4gIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TZXR0aW5ncyIsImZvcm1TZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiY29uc3RydWN0b3IiLCJjYXJkRGF0YSIsImNhcmRTZWxlY3RvciIsImhhbmRsZVByZXZpZXdQaWN0dXJlIiwidGhpcyIsIl9uYW1lIiwibmFtZSIsIl9saW5rIiwibGluayIsIl9jYXJkU2VsZWN0b3IiLCJfaGFuZGxlUHJldmlld1BpY3R1cmUiLCJfZ2V0VGVtcGxhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjbG9uZU5vZGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJfZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlTGlrZUJ1dHRvbiIsIl9oYW5kbGVEZWxldGVCdXR0b24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW1vdmUiLCJnZW5lcmF0ZUNhcmQiLCJfY2FyZEltYWdlRWwiLCJfY2FyZFRpdGxlRWwiLCJzcmMiLCJhbHQiLCJ0ZXh0Q29udGVudCIsIm9wdGlvbnMiLCJmb3JtRWwiLCJfaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiX2Zvcm1FbCIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0RWwiLCJlcnJvck1lc3NhZ2VFbCIsImlkIiwiYWRkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9oYXNJbnZhbGlkSW5wdXQiLCJfaW5wdXRFbHMiLCJldmVyeSIsImRpc2FibGVCdXR0b24iLCJfc3VibWl0QnV0dG9uIiwiZGlzYWJsZWQiLCJfZW5hYmxlQnV0dG9uIiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlIiwiZW5hYmxlVmFsaWRhdGlvbiIsInByZXZlbnREZWZhdWx0IiwicmVzZXRWYWxpZGF0aW9uIiwiaW5wdXRFbGVtZW50IiwiUG9wdXAiLCJfcmVmIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJvcGVuIiwiX2hhbmRsZUVzY0Nsb3NlIiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZ0Iiwia2V5Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJ0YXJnZXQiLCJjb250YWlucyIsImhhbmRsZUZvcm1TdWJtaXQiLCJzdXBlciIsIl9wb3B1cEZvcm0iLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9pbnB1dExpc3QiLCJyZXNldCIsIl9nZXRJbnB1dFZhbHVlcyIsImlucHV0VmFsdWVzIiwiaW5wdXQiLCJ2YWx1ZSIsInByb2ZpbGVFZGl0TW9kYWwiLCJwcm9maWxlRWRpdEJ1dHRvbiIsInByb2ZpbGVEZXNjcmlwdGlvbklucHV0IiwicHJvZmlsZVRpdGxlSW5wdXQiLCJwcm9maWxlQWRkQ2FyZE1vZGFsIiwicHJvZmlsZUFkZENhcmRCdXR0b24iLCJpbWFnZVByZXZpZXdNb2RhbCIsImNhcmRTZWN0aW9uIiwiYmFzZVVybCIsImhlYWRlcnMiLCJfYmFzZVVybCIsIl9oZWFkZXJzIiwiX2NoZWNrUmVzcG9uc2UiLCJyZXMiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhdHVzIiwiZ2V0SW5pdGlhbENhcmRzIiwiZmV0Y2giLCJ0aGVuIiwiZ2V0VXNlckluZm8iLCJhdXRob3JpemF0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsInJlbmRlckl0ZW1zIiwiYWRkSXRlbSIsImVsZW1lbnQiLCJwcmVwZW5kIiwiY2FyZEVsIiwicmVuZGVyQ2FyZCIsInByb2ZpbGVFZGl0Rm9ybVBvcHVwIiwiUG9wdXBXaXRoRm9ybSIsInByb2ZpbGVVc2VySW5mbyIsInNldFVzZXJJbmZvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImVkaXRGb3JtVmFsaWRhdG9yIiwiRm9ybVZhbGlkYXRvciIsInByb2ZpbGVBZGRDYXJkUG9wdXAiLCJ1cmwiLCJhZGRGb3JtVmFsaWRhdG9yIiwibmFtZVNlbGVjdG9yIiwiam9iU2VsZWN0b3IiLCJfbmFtZUVsZW1lbnQiLCJfam9iRWxlbWVudCIsImpvYiIsInBvcHVwV2l0aEltYWdlIiwiX2ltYWdlIiwiX2NhcHRpb24iLCJDYXJkIiwidXNlckluZm8iXSwic291cmNlUm9vdCI6IiJ9