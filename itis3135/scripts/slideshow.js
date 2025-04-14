let slides = $('.slide');
let thumbs = $('.thumb');
let current = 0;

function showSlide(index) {
    slides.hide();
    $(slides[index]).fadeIn();
    thumbs.removeClass('active');
    $(thumbs[index]).addClass('active');
    current = index;
}

thumbs.on('click', function() {
    let index = $(this).data('index');
    showSlide(index);
});

showSlide(0);