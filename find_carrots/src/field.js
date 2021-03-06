'use strict';

import { playCarrot } from './sound.js';
export const typeField = Object.freeze({
  carrot: 'carrot',
  bug: 'bug',
});

const CARROT_SIZE = 80;

export class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector('.game__field');
    this.fieldRect = this.field.getBoundingClientRect();
    this.field.addEventListener('click', this.onClick);
  }

  init() {
    this.field.innerHTML = '';
    this.addItem(typeField.carrot, this.carrotCount, 'img/carrot.png');
    this.addItem(typeField.bug, this.bugCount, 'img/bug.png');
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  onClick = (event) => {
    const { target } = event;
    if (target.matches('.carrot')) {
      target.remove();
      playCarrot();
      this.onItemClick && this.onItemClick(typeField.carrot);
    } else if (target.matches('.bug')) {
      this.onItemClick && this.onItemClick(typeField.bug);
    }
  };

  addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - CARROT_SIZE;
    const y2 = this.fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < count; i++) {
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
