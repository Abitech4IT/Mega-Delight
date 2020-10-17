$(document).ready(function () {

    let $btns = $('.portfolio_area .btn-group button');


    $btns.click(function (e) {

        $('.portfolio_area .btn-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.portfolio_area .grid').isotope({
            filter: selector
        });

        return false;
    })
    $('.portfolio_area .btn-group #btn1').trigger('click');
    $('.portfolio_area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

    //sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});