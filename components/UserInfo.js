export default class UserInfo {
  constructor(nameSelector, jobSelector, avatarSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }
  
  getUserInfo() {
    const userInfo = {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
      avatar: this._avatarElement.textContent,
    };
    return userInfo;
  }

  setUserInfo(name, job, avatar) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
    this._avatarElement.textContent = avatar;
  }

  setUserAvatar(link) {
    this._avatarElement.src = link;
  }
}