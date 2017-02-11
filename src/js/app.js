import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;

import sayHello from './lib/sayHello.js';
import ImageComparison from 'image-comparison';


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