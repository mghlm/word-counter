var ListWords = function(wordArray) {
  this.wordArray = wordArray;
}

ListWords.prototype.wrapWordsInHtml = function(array) {
  htmlArray = [];
  for (var i = 0; i < array.length; i++) {
    if (this.isPrimeNumber(array[i][1])) {
      htmlArray.push('<p> <b>"' + array[i][0]  + '"</b> occures <b>' + array[i][1] + "</b> times " + " --> <b> prime </b>  </p>");
    } else {
      htmlArray.push('<p> <b>"' + array[i][0]  + '"</b> occures <b>' + array[i][1] + "</b> times " + "</p>");
    }
  }
  return htmlArray;
}

ListWords.prototype.isPrimeNumber = function(number) {
  if (number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  }

  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}
