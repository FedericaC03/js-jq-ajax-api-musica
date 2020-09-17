$(document).ready(function() {

  $.ajax(
  {
    "context": this,
    "url": "https://flynn.boolean.careers/exercises/api/array/music",
    "method": "GET",
    "success": function (data, stato) {
        var results = data.response;
        albumList(results);
    },
    error: function (richiesta, stato, errori) {
    alert("E' avvenuto un errore. " + errore);
    }
    }
    );
});


//ALBUM LIST
function albumList(results) {
var source = $("#album").html();
var template = Handlebars.compile(source);

for (var i = 0; i < results.length; i++) {
var albums = results[i];
var html = template(albums);

$(".container").append(html);

// ESERCIZIO BONUS: SELECT GENERE
var select = $("#select").val();
var genre = results[i].genre.toLowerCase();
console.log(genre);

$('#select').on('change', function() {
  var value = $(this).val().toLowerCase();
  console.log(value);
  // if (value == genre) {
  //     $(".container").show()
  //   } else {
  //       $(".container").hide();
  //     };
});
}
}
