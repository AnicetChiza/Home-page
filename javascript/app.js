jQuery(function($){
    const $header = $('.header');
    $(window).scroll(function(event){
        const $current = $(this).scrollTop();
        if($current > 560){
            $header.addClass('header-color');
        }
        else{
            $header.removeClass('header-color');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scroll = document.querySelector('.top-icon');
    scroll.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    });
});