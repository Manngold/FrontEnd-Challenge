'use strict';

export default class PopUp {
  constructor() {
    this.popUp = document.querySelector('.pop-up');
    this.popUpText = document.querySelector('.pop-up__text');
    this.popUpRefresh = document.querySelector('.pop-up__button');
    this.popUpRefresh.addEventListener('click', () => {
      this.onClick && this.onClick();
      hide();
    });
  }

  setClickListener(onClick) {
    this.onClick = onClick;
  }

  showWithText(text) {
    this.popUpText.innerText = text;
    this.popUp.classList.remove('pop-up--hidden');
  }

  hide() {
    this.popUp.classList.add('pop-up--hidden');
  }
}
