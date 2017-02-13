import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;

import sayHello from './lib/sayHello.js';

import slider from './lib/baslider.js';
import dropdown from './lib/dropdown.js';
import videoPlayer from './lib/video.js';

import slick from 'slick-carousel';


sayHello();


$(document).ready(function() {
    //$('.vote-slider').slick();
    
    $('.js-start-slider').beforeAfter();
    
    dropdown('.js-btn-dropdown');
    
    
    var previewSlider = $('.js-vote-slider').slick({
        prevArrow: $('.icon-arrow-l-slim'),
        nextArrow: $('.icon-arrow-r-slim'),
        asNavFor: '.js-aside-vote-slider',
        fade: true
    });
    
    var previewAsideSlider = $('.js-aside-vote-slider').slick({
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        initialSlide: 1
    });
    
//    $(previewSlider).on('afterChange', function(event, slick, currentSlide){
//        if (currentSlide == 2) { 
//            $('.icon-arrow-r-slim').css({
//                'opacity': '0.5'
//            });
//            $('.icon-arrow-l-slim').css({
//                'opacity': '1'
//            });
//        }
//        else if (currentSlide == 0) {
//            $('.icon-arrow-l-slim').css({
//                'opacity': '0.5'
//            });
//            $('.icon-arrow-r-slim').css({
//                'opacity': '1'
//            });
//        }
//        else {
//            $('.icon-arrow-l-slim').css({
//                'opacity': '1'
//            });
//            $('.icon-arrow-r-slim').css({
//                'opacity': '1'
//            });
//        }
//    });
    
    var productsSlider = $('.js-products-slider').slick({
        infinite: false,
        prevArrow: $('.products-slider__control_l'),
        nextArrow: $('.products-slider__control_r')
    });
    
    videoPlayer();
    
    var videoSlider = $('.js-video-slider').slick({
        arrows: false,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});
