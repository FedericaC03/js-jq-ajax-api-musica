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

$(".cds-container").append(html);
}}

// ESERCIZIO BONUS: SELECT GENERE
$('#select').on('change', function() {
  var value = $(this).val();

  if (value == "") {
    $(".cd").show();
  } else {
    $(".cd").hide();
    $(".cd[data-genre='"+value+"']").show();
  }
});
