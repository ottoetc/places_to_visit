function Places(cityLocation, notes, landmarks) {
  this.cityLocation = cityLocation;
  this.notes = notes;
  this.landmarks = landmarks;
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("input#new-city").val();
    var inputtedNotes = $("input#new-notes").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var newPlace = new Places(inputtedCity, inputtedNotes, inputtedLandmark);

    $("ul#places").append("<li><span class='place'>" + newPlace.cityLocation + "</span></li>");

    $("input#new-city").val("");
    $("input#new-notes").val("");
    $("input#new-landmark").val("");

    $(".place").last().click(function() {
      $("#show-place").show();
      $(".city").text(newPlace.cityLocation);
      $(".notes").text(newPlace.notes);
      $(".landmarks").text(newPlace.landmarks);
    });
  });
});
