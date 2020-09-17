$(document).ready(function() {

  $.ajax(
  {
    "context": this,
    "url": "https://flynn.boolean.careers/exercises/api/array/music",
    "method": "GET",
    "success": function (data, stato) {
        var results = data.response;
        var source = $("#album").html();
        var template = Handlebars.compile(source);

        for (var i = 0; i < results.length; i++) {
        var albums = results[i];
        var html = template(albums);

        $("header .container").append(html);
        console.log(html);
        }
    },
    error: function (richiesta, stato, errori) {
    alert("E' avvenuto un errore. " + errore);
    }
    }
    );
});
