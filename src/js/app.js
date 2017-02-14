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
    
    $('.js-start-slider').beforeAfter();
    
    dropdown('.js-btn-dropdown');
    
    
    var blockSlider = $('.preview-bl').slick({
        infinite: true,
        prevArrow: $('.icon-arrow-l-slim'),
        nextArrow: $('.icon-arrow-r-slim'),
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    var previewSlider = $('.js-preview-slider').slick({
        infinite: true,
        prevArrow: $('.icon-arrow-l-slim'),
        nextArrow: $('.icon-arrow-r-slim'),
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: blockSlider
    });
    
    
    var productsSlider = $('.js-products-slider').slick({
        infinite: false,
        prevArrow: $('.products-slider__control_l'),
        nextArrow: $('.products-slider__control_r')
    });
    
    videoPlayer();
    
    var videoSlider = $('.js-video-slider').slick({
        infinite: false,
        prevArrow: $('.video-slider__control_t'),
        nextArrow: $('.video-slider__control_b'),
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1
    });
});
