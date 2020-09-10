'use strict';

import PopUp from './popup.js';
import { Reason, GameBuilder } from './game.js';

const gameFinishBanner = new PopUp();

const game = new GameBuilder()
  .gameDuration(5)
  .carrotCount(3)
  .bugCount(3)
  .builder();
game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.cancel:
      message = 'Replay?';
      break;
    case Reason.win:
      message = 'You Won';
      break;
    case Reason.lose:
      message = 'You Lose';
      break;
    default:
      throw new Error('Exception Reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
