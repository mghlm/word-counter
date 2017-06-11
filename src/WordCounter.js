var WordCounter = function(text) {
  this.text = text;
}

WordCounter.prototype.createArray = function (text) {
  return this.text.replace(/\W+/g, ' ').toLowerCase().split(' ');
};
