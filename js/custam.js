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





  ///loadFile
 
var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};
 