const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const Races = function () {
  console.log('hi');
  this.races = [];
  this.wat = 'wat';
};

Races.prototype.getData = function () {
  const request = new Request('http://dnd5eapi.co/api/races');
  let self = this;
  console.log(self);
  request.get()
    .then( (data) => {
      self.races = data.results;
      PubSub.publish('Races:races-ready', self.races);
    })
    .catch( (err) => {
      console.error(err);
    });
console.log(this);
};

module.exports = Races;
