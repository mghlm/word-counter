window.onload = function() {

  var fileInput = document.getElementById('fileInput');
  var textArea = document.getElementById('textArea')

  fileInput.addEventListener('change', function () {
    var file = fileInput.files[0];

    if (file.type.match(/text.*/)) {
      var fileReader = new FileReader();

      fileReader.readAsText(file);

      fileReader.onload = function() {
        var wordCounter = new WordCounter(fileReader.result);
        var wordArray = wordCounter.returnCountedWords();
        var wordList = new WordList(wordArray);

        printCountedWordsAsList(textArea, wordArray);
        console.log(wordArray);
      }
    } else {
      alert("Please select a .txt file");
    }
  })

  // printCountedWordsAsList = function(divId, array) {
  //   htmlArray = [];
  //   for (var i = 0; i < array.length; i++) {
  //     if (_isPrimeNumber(array[i][1])) {
  //       htmlArray.push('<p> <b>"' + array[i][0]  + '"</b> occures <b>' + array[i][1] + "</b> times " + " --> <b> prime </b>  </p>");
  //     } else {
  //       htmlArray.push('<p> <b>"' + array[i][0]  + '"</b> occures <b>' + array[i][1] + "</b> times " + "</p>");
  //     }
  //   }
  //
  //   divId.innerHTML = htmlArray.join('');
  // }
  //
  // _isPrimeNumber = function(number) {
	// 	if (number === 1) {
	// 		return false;
	// 	} else if (number === 2) {
	// 		return true;
	// 	}
  //
	// 	for (var i = 2; i < number; i++) {
	// 		if (number % i === 0) {
	// 			return false;
	// 		} else {
	// 			return true;
	// 		}
	// 	}
	// }

}
