windows.onload = function() {

  var fileInput = document.getElementById('fileInput');

  fileInput.addEventListener('change', function () {
    var file = fileInput.files[0];

    if (file.type.match(/text.*/)) {
      var fileReader = new FileReader();

      fileReader.readAsText(file);

      fileReader.onload = function() {

      }
    }
  })



}
