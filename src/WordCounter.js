var WordCounter = function(text) {
  this.text = text;
}

WordCounter.prototype.createArray = function (text) {
  return this.text.replace(/\W+/g, ' ').toLowerCase().split(' ');
};

WordCounter.prototype.countWords = function (array) {
  var counts = {};

	array.forEach(function(word) {
		counts[word] = (counts[word] || 0)+1;
	});

	return counts;
};
