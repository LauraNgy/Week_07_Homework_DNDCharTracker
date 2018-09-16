const Races = require('./models/races.js');
const Classes = require('./models/classes.js');
const SelectView = require('./views/select_view.js');
const FormView = require('./views/form_view.js');
const CharView = require('./views/char_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const races = new Races();
  const classes = new Classes();

  const charRaceSelect = document.querySelector('#charRace');
  const selectViewRaces = new SelectView(charRaceSelect);
  selectViewRaces.bindEvents('Races:races-ready');

  const charClassSelect = document.querySelector('#charClass');
  const selectViewClasses = new SelectView(charClassSelect);
  selectViewClasses.bindEvents('Classes:classes-ready');

  const formDiv = document.querySelector('#new-char-form');
  //you might need to query_select .form-wrapper
  const formView = new FormView(formDiv);
  formView.bindEvents();

  const playerList = document.querySelector('#player-list');
  const charView = new CharView(playerList);
  charView.bindEvents();

  races.getData();
  classes.getData();
});
