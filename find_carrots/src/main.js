'use strict';

import PopUp from './popup.js';
import Game from './game.js';

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const gameFinishBanner = new PopUp();

const game = new Game(GAME_DURATION_SEC, CARROT_COUNT, BUG_COUNT);
game.setGameStopListener((reason) => {
  if (reason === 'win') {
    gameFinishBanner.showWithText('You won');
  } else if (reason === 'cancel' || reason === 'lose') {
    gameFinishBanner.showWithText('You Lose');
  }
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
