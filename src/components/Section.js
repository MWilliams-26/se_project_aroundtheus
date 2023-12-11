export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((items) => {
      this._renderer(items);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}