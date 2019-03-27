$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1input = $("input#person1").val();
    var person2input = $("input#person2").val();

    $("#person1").text(person1Input);
    $("#person2").text(person2Input);

    $(".story").show();

    event.preventDefault();
  });
});

// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     $(".person1").append("blah blah");
//     $(".person2").append("blah blah");
//
//     $(".story").show();
//
//     event.preventDefault();
//   });
// });
