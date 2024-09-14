import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';


(function($) {
    "use strict";

    new WOW().init();

    //background image 

    function dataBackgroundImage() {
        $("[data-bgimg]").each(function () {
            var bgImgUrl = $(this).data("bgimg");
            $(this).css({
                "background-image" : "url(" + bgImgUrl + ")", // concatenation
            });
        });
    }

    $(window).on("load", function() {
        dataBackgroundImage();
    });

    // for carousel slider of the slider section

    $(".slider_area").owlCarousel( {
        animateOut : "fadeOut", 
        autoplay: true, 
        loop: true, 
        nav: false, 
        autoplayTimeout : 4000, 
        items: 1, 
        dots: true,
    });

     //product column responsive 

     $(".product_column3").slick({
        centerMode: true,
        centerPadding : "0", 
        slidesToShow : 5, 
        arrows: true, 
        rows: 2, 
        prevArrow :
        '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>', 
        nextArrow:
        '<button class="next_arrow"><i class="ion-chevron-right"></i></button>', 
        responsive: [
            {
                breakpoints: 400, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                },
            },

            {
                breakpoints: 768, 
                settings: {
                    slidesToShow: 2, 
                    slidesToScroll: 2,
                },
            },

            {
                breakpoints: 992, 
                settings: {
                    slidesToShow: 3, 
                    slidesToScroll: 3,
                },
            },

            {
                breakpoints: 1200, 
                settings: {
                    slidesToShow: 4, 
                    slidesToScroll: 4,
                },
            },
        ],
    });


    //for tooltip
    $('[data-toggle="tooltip"]').tooltip();

    //tooltip active 
    $(".action_links ul li a, .quick_button a").tooltip({
        animated: "fade",
        placement: "top", 
        container: "body",
    });

    //product row activation responsive 
    $(".product_row1").slick({
        centerMode: true,
        centerPadding : "0", 
        slidesToShow : 5, 
        arrows: true, 
        prevArrow :
        '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>', 
        nextArrow:
        '<button class="next_arrow"><i class="ion-chevron-right"></i></button>', 
        responsive: [
            {
                breakpoints: 400, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                },
            },

            {
                breakpoints: 768, 
                settings: {
                    slidesToShow: 2, 
                    slidesToScroll: 2,
                },
            },

            {
                breakpoints: 992, 
                settings: {
                    slidesToShow: 3, 
                    slidesToScroll: 3,
                },
            },

            {
                breakpoints: 1200, 
                settings: {
                    slidesToShow: 4, 
                    slidesToScroll: 4,
                },
            },
        ],
    });


})(jQuery);