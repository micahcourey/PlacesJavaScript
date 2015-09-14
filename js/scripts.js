$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input.new-location").val();
    var inputtedLandmarks = $("input#new-landmarks").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedNotes = $("input#new-notes").val();

    var newPlace = { location: inputtedLocation, landmarks: inputtedLandmarks, time: inputtedTime, notes: inputtedNotes };

    $(".ul#places").append("<li><span> class='place'>" + newPlace.location + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();

      $("#show-place h2").text(newPlace.location);
      $(".location").text(newPlace.location);
      $(".landmarks").text(newPlace.landmarks);
      $(".time").text(newPlace.time);
      $(".notes").text(newPlace.notes);
    });

    $("input#new-location").val("");
    $("input#new-landmarks").val("");
    $("input#new-time").val("");
    $("input#new-notes").val("");
  });
});
