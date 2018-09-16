const PubSub = require('../helpers/pub_sub.js');
const CreateAppend = require('../helpers/create_append.js');
const Request = require('../helpers/request_helper.js');

const CharView = function (element) {
  this.element = element;
};

CharView.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:player-ready', (event) => {
    const playerChar = event.detail;
    this.renderView(playerChar);
  });
};

CharView.prototype.renderView = function (player) {
  const playerDiv = new CreateAppend('div', "", this.element);
  playerDiv.classList.add('player-item');
  const playerName = new CreateAppend('h3', `${player.charName}, lvl. ${player.charLvl}`, playerDiv);
  const playerClass = new CreateAppend('p', player.charClass, playerDiv);
  const playerRace = new CreateAppend('p', player.charRace, playerDiv);
  const playerActive = player.charActive;
  if (playerActive) {
    const playerStatus = new CreateAppend('p', "Playing", playerDiv);
    playerDiv.classList.add('active');
  }
  else {
    const playerStatus = new CreateAppend('p', "Not playing", playerDiv);
    playerDiv.classList.add('notActive');
  };
};

module.exports = CharView;
