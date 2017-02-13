export default function videoPlayer() {
    var img = document.querySelectorAll('.video__poster'),
        iframe = document.querySelector('.video__iframe');
    
    for (var i = 0; i < img.length; i++) {
        $(img[i]).on('click', function() {
           var imgId = $(this).attr('src').substr(21, 11);
            console.log(imgId);
            $(iframe).attr('src', 'https://www.youtube.com/embed/' + imgId + '?rel=0&amp;controls=0&amp;showinfo=0');
        });
    }
}