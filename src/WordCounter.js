var WordCounter = function(text) {
  this.text = text;
}

WordCounter.prototype.createArray = function () {
  return this.text.replace(/\W+/g, ' ').toLowerCase().split(' ');
};

WordCounter.prototype.countWords = function (array) {
  var counts = {};
	array.forEach(function(word) {
		counts[word] = (counts[word] || 0)+1;
	});

	return counts;
};

WordCounter.prototype.convertCountedToArray = function (object) {
  var array = [];
	for (var key in object) {
		if (object.hasOwnProperty(key)) {
			array.push([key, object[key]])
		}
	}
	return array;
};

WordCounter.prototype.sortArray = function (array) {
  sortedArray = array.sort(function(a, b) {
			return a[1] - b[1];
		})

	return sortedArray.reverse();
};

WordCounter.prototype.returnCountedWords = function () {
  var textArray = this.createArray();
  var countedWordsObj = this.countWords(textArray);
  var countedWordsArr = this.convertCountedToArray(countedWordsObj);

  return this.sortArray(countedWordsArr);
};
