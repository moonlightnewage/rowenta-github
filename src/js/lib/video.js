export default function videoPlayer() {
    var img = document.querySelectorAll('.video__poster'),
        iframe = document.querySelector('.video__iframe'),
        imgMain = document.querySelectorAll('.video__poster_main'),
        iconPlay = $('.video__icon_play'),
        imgIdArr = [];
    
    $(img).each(function() {
        var imgId = $(this).attr('src').substr(21, 11);
        imgIdArr.push(imgId);
        
        $(imgMain).attr('src', '//img.youtube.com/vi/' + imgIdArr[0] + '/maxresdefault.jpg');
        
        $(this).on('click', function(e) {
           e.preventDefault();
           var id = $(this).attr('src').substr(21, 11);
           $(imgMain).attr('src', '//img.youtube.com/vi/' + id + '/maxresdefault.jpg');
           $(iframe).attr('src', 'https://www.youtube.com/embed/' + id + '?rel=0&autoplay=1&amp;controls=0&amp;showinfo=0');
        });
        
        $(iconPlay).on('click', function(e) {
            var id = $(imgMain).attr('src').substr(21, 11);
            $(imgMain).fadeOut();
            $(this).fadeOut();
            $(iframe).attr('src', 'https://www.youtube.com/embed/' + id + '?rel=0&autoplay=1&amp;controls=0&amp;showinfo=0');
        });
    }); 
}