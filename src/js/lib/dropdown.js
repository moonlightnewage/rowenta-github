export default function dropdown(button) {
    var button = $(button),
        arrow = $(button).next('.features__icon'),
        list = $(arrow).next('.features__list');
    
    $(list).hide();
    $(arrow).addClass('is-hidden');
    
    $(button).on('click', function (event) {
        event.preventDefault();
        $(list).fadeToggle(600);
        $(this).toggleClass('is-visible');
        $(arrow).toggleClass('is-hidden');
    });
}