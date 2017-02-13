import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;

import sayHello from './lib/sayHello.js';
//import imageGallery from './lib/imgGallery.js';


import ImageComparison from 'image-comparison';
import slick from 'slick-carousel';


sayHello();

var imageComparisonCollection = document.querySelectorAll('.js-comparison-container');
    for (var i = 0; i < imageComparisonCollection.length; i++) {
        var imageWidget = imageComparisonCollection[i];
        var images = imageWidget.querySelectorAll('.comparison-image');
        new ImageComparison({
          container: imageWidget,
          startPosition: imageWidget.getAttribute('start-position'),
          data: [
            {
              image: images[0]
            },
            {
              image: images[1]
            }
          ],
        });
    }

$(document).ready(function() {
//    imageGallery('.js-vote-slider', '.js-vote-slider-controls');
    $('.vote-slider').slick();
});
