export default function imageGallery() {
    var imgGallery = $('.js-preview-slider'),
        images = $(imgGallery).children('.preview-slider__slide'),
        block = $('.preview-bl');
    
    console.log(block);
    
    $(images).each(function() {
        var bg = $(this).attr('style');
        console.log(bg);
        $(block).append('<div class="preview-bl__slide js-preview-bl-slide" style="'+ bg +'"></div>');
        $('.preview-slider__control_l').on('click', function() {
            
        });
    });
}