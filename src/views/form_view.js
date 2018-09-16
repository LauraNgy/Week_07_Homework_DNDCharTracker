const PubSub = require('../helpers/pub_sub.js');

const FormView = function (element) {
  this.element = element;
};

FormView.prototype.bindEvents = function () {
  this.element.addEventListener('submit',  (event) => {
    event.preventDefault();
    const playerChar = {
      'charName': event.target.charName.value,
      'charLvl': event.target.charLvl.value,
      'charClass': event.target.charClass.value,
      'charRace': event.target.charRace.value,
      'charActive': event.target.charActive.checked
    };
    PubSub.publish('FormView:player-ready', playerChar);
    this.element.reset();
  });
};

module.exports = FormView;
