const PubSub = require('../helpers/pub_sub.js');
const CreateAppend = require('../helpers/create_append.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function (channel) {
  PubSub.subscribe(channel, (event) => {
    const collection = event.detail;
    this.populate(collection);
    this.element.addEventListener('change', (event) => {
      const optionValue = event.target.value;
      PubSub.publish('SelectView:option-selected', optionValue);
    });

  });
};

SelectView.prototype.populate = function (collection) {
  collection.forEach( (item, index) => {
    const option = new CreateAppend('option', item.name, this.element);
    option.value = item.name;
  });
};

module.exports = SelectView;
