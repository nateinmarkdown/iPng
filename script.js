$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let fromFormat = $("#from-format").val();
    let toFormat = $("#to-format").val();
    let file = $("#file")[0].files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      let image = new Image();
      image.src = reader.result;
      image.onload = function() {
        let canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        let context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        let data = canvas.toDataURL("image/" + toFormat);
        let a = document.createElement("a");
        a.href = data;
        let originalFileName = file.name.split(".")[0];
        let originalFileExtension = file.name.split(".")[1];
        if (originalFileExtension.toLowerCase() === fromFormat.toLowerCase()) {
          a.download = originalFileName + "." + toFormat;
        } else {
          a.download = file.name.replace("." + originalFileExtension, "." + toFormat);
        }
        a.click();
      };
    };
  });
});
