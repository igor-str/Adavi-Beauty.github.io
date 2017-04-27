$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            768:{
                items:1,
                nav:false
            },
            1170:{
                items:1,
                nav:false,
                loop:true
            }
        }
    });

    $(".subscribe-newsletter").validate({
        rules: {
            'subject': {
                required: true,
                minlength: 1
            },
            'email-address': {
                required: true,
                minlength: 4,
                email: true
            }
        },
        messages: {
            'subject': {
                required: "Заповніть це поле",
                minlength: 1
            },
            'email-address': {
                required: "Введіть коректну адресу",
                email: "Введіть коректну адресу"
            }
        }
    });

    // при натиску на кнопку scrollup
    $('#scrollup').click(function() {
        // переміститись до верхньої частини html та body
        $("html, body").animate({
            scrollTop:0
        },1000);
    })


});
