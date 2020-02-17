
$(document).ready(function(){

    $('.tabs-block li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tabs-block li').removeClass('current');
        $('.tab-text').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

});
