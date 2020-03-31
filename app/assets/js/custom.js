$(document).ready(function () {

    $('.slider').slick({
        infinite: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '.sl_prev',
        nextArrow: '.sl_next',
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 575.9,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });
    $(".slick-dots").append($('.sl_next'));
    $(".slick-dots").prepend($('.sl_prev'));
    function Checkloc() {
        if ($('#rusia').is(':checked')) {
            $('.v_rus').addClass('vis');
            $('.v_blr').removeClass('vis')
        }
        else {
            $('.v_blr').addClass('vis');
            $('.v_rus').removeClass('vis')
        }
    }

    Checkloc();
    $('.check_loc ').click(function () {
        Checkloc();
    });

});
if ($(window).width() > 1149.9) {
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 100) {
            $('header').addClass('header_white');
            $('.header_bottom').slideDown(500);
        }
        else {
            $('header').removeClass('header_white');
            $('.header_bottom').slideUp(200);

        }
    })
} else {
    $('header').addClass('header_white');
}
$('.menu_btn').click(function () {
    $('.header_top').slideToggle(500);
    $('.header_bottom').slideToggle(500);
    $(this).toggleClass('act_menu_btn')
})