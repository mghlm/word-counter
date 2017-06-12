window.onload = function() {

  var fileInput = document.getElementById('fileInput');
  var wordListArea = document.getElementById('wordListArea')

  fileInput.addEventListener('change', function () {
    var file = fileInput.files[0];

    if (file.type.match(/text.*/)) {
      var fileReader = new FileReader();

      fileReader.readAsText(file);

      fileReader.onload = function() {
        var countWords = new CountWords(fileReader.result);
        var wordArray = countWords.returnCountedWords();
        var listWords = new ListWords(wordArray);

        wordListArea.innerHTML = listWords.wrapWordsInHtml(wordArray).join(' ');
      }
    } else {
      alert("Please select a .txt file");
    }
  })
}
