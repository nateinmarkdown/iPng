$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let fromFormat = $("#from-format").val();
    let toFormat = $("#to-format").val();
    alert(`Converting from ${fromFormat} to ${toFormat}...`);
  });
});
