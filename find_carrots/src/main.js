'use strict';

import PopUp from './popup.js';
import GameBuilder from './game.js';

const gameFinishBanner = new PopUp();

const game = new GameBuilder()
  .gameDuration(5)
  .carrotCount(3)
  .bugCount(3)
  .builder();
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
