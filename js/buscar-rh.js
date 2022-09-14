 //Busqueda en tablas 
 $(document).ready(function(){
    $("#busqueda").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        $("#lista tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});