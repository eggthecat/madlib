// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     $(".person1").append("bumperson1");
//
//     event.preventDefault();
//   });
// });

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $(".person1").append("blah blah");
    $(".person2").append("blah blah");

    $(".story").show();

    event.preventDefault();
  });
});
