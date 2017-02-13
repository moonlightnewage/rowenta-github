export default function imageGallery(gallery, controls) {
    var gallery = $(gallery),
        controls = $(controls);
    
    var items = $(gallery).children();
    
    var controlLeft = $(controls).children().first();
    var controlRight = $(controls).children().last();
    
    var inner = $(items).wrapAll('<div class="gallery-inner"></div>').parent();
    
    $(inner).css({
        'width': '10000px'
    });
    
    $(controlLeft).on('click', function() {
       $(items).first().animate({
          left: '740px'
       }, 400);
    });
}