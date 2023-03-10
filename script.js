$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
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
        a.download = "download." + toFormat;
        a.click();
      };
    };
  });
});
