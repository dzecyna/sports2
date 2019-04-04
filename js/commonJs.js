$(document).ready(function(){
    var flagMenu = true;

    $(".btn-toggle-js").on('click', function () {
        if(flagMenu) {
            flagMenu = false;

            $(this).parent().parent().find('.tbl-toggle').slideToggle(400, function () {
                flagMenu = true;
            });
        }
    });
});