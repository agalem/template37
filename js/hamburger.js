var menuIcon = $('#nav-icon');
var nav = $('.nav');
var liElem = $('.menu li');


$(document).ready(function(){

    console.log($(window).width());

    menuIcon.click(function(){
        $(this).toggleClass('open');
        console.log(menuIcon.hasClass('open'));

        if(menuIcon.hasClass('open')){
            $(nav)[0].style.width="300px";
        } else {
            $(nav)[0].style.width="0px";
        }

    });


    if($(window).width() <= 950){
        liElem.click(function () {
            $(menuIcon).removeClass('open');
            $(nav)[0].style.width="0px";
        });
    }


});

