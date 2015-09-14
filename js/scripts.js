$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmarks = $("input#new-landmarks").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedNotes = $("input#new-notes").val();

    var newPlace = { placeLocation: inputtedLocation, landmarks: inputtedLandmarks, placeTime: inputtedTime, notes: inputtedNotes };

    $("ul#places").append("<li><span class='place'>" + newPlace.placeLocation + "</span></li>");

    $("input#new-location").val("");
    $("input#new-landmarks").val("");
    $("input#new-time").val("");
    $("input#new-notes").val("");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.placeLocation);
      $(".location").text(newPlace.placeLocation);
      $(".landmarks").text(newPlace.landmarks);
      $(".time").text(newPlace.placeTime);
      $(".notes").text(newPlace.notes);
    });
  });
});
