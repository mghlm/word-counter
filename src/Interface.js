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
        textArea.innerText = wordCounter.returnCountedWords();
        console.log(wordCounter.returnCountedWords());
      }
    }
  })



}
