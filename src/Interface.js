window.onload = function() {

  var fileInput = document.getElementById('fileInput');
  var textArea = document.getElementById('textArea')

  fileInput.addEventListener('change', function () {
    var file = fileInput.files[0];

    if (file.type.match(/text.*/)) {
      var fileReader = new FileReader();

      fileReader.readAsText(file);

      fileReader.onload = function() {
        var countWords = new CountWords(fileReader.result);
        var wordArray = countWords.returnCountedWords();
        var listWords = new ListWords(wordArray);

        textArea.innerHTML = listWords.wrapWordsInHtml(wordArray).join(' ');
      }
    } else {
      alert("Please select a .txt file");
    }
  })
}
