const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const Classes = function () {
  this.classes = null;
};

Classes.prototype.getData = function () {
  const request = new Request('http://dnd5eapi.co/api/classes');
  request.get()
    .then( (data) => {
      this.classes = data.results;
      PubSub.publish('Classes:classes-ready', this.classes);
    })
    .catch( (err) => {
      console.error(err);
    })
};

module.exports = Classes;
