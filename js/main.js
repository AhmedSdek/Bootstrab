$(function(){
    'use strict';
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $(".slider, .carousel-item").height(winH - (upperH + navH));

    // shuffle
    $('.featured-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'All'){
            $('.shuffle-images .col-md').css('opacity', '1');
        }else{
            $('.shuffle-images .col-md').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', '1')
        }
    });

    $(window).ready(function(){
        $(window).scroll(function(){
            if($(this).scrollTop() >= 400){
                $('.up').fadeIn(500);
            }else{
                $(".up").fadeOut();
            }
        })
    });
    
    $(window).ready(function(){
        $(".up").on('click', function(){
            $(window).scrollTop(0);
        });
    });
})
