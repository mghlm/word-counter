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

        // textArea.innerHTML = wordCounter.returnCountedWords();
        printCountedWordsAsList(textArea, wordArray);
        console.log(wordArray);
      }
    }
  })

  printCountedWordsAsList = function(divId, array) {
    htmlArray = [];
    for (var i = 0; i < array.length; i++) {
      htmlArray.push("<p> <b>" + array[i][0]  + "</b> occures " + array[i][1] + " times " + "</p>");
    }

    divId.innerHTML = htmlArray.join('');
  }


}
