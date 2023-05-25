$(document).ready(function() {
    $.ajax({
        url: "./scripts/index.php",
        type: "GET",
        success: function(response) {
            $("#data-container").html(response);
        },
        error: function() {
            $("#data-container").html("Error al cargar los datos.");
        }
    });
});