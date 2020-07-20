$(document).ready(function () {

    $(window).on('scroll', function () {
        var scrollInfo = $(window).scrollTop() + 200;
        var windowH = $(window).height();
        if (scrollInfo > windowH) {
            $('#headerArea').addClass('on');
        } else {
            $('#headerArea').removeClass('on');
        }
    });

       $(window).resize(function () {
 
        $(window).on('scroll', function () {
            var scrollInfo = $(window).scrollTop() + 200;
            var windowH = $(window).height();
            if (scrollInfo > windowH) {
                $('#headerArea').addClass('on');
            } else {
                $('#headerArea').removeClass('on');
            }
        });
    });
});
