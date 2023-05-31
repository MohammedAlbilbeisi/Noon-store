$(document).ready(function() {

    ///active  link


    $('.navbar .navbar-nav  li ').click(function() {
        $(this).addClass('active').siblings().removeClass('active');


    });
    ///Smooth Scroll
/*
    $('nav li a ').click(function() {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);

    });
*/





});