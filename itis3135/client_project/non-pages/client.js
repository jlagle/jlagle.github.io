let slides = $('.sc1');
let thumbs = $('.th1');
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


let slides2 = $('.sc2');
let thumbs2 = $('.th2');
let current2 = 0;

function showSlide2(index) {
    slides2.hide();
    $(slides2[index]).fadeIn();
    thumbs2.removeClass('active');
    $(thumbs2[index]).addClass('active');
    current2 = index;
}

thumbs2.on('click', function() {
    let index = $(this).data('index');
    showSlide2(index);
});

showSlide2(0);


let slides3 = $('.sc3');
let thumbs3 = $('.th3');
let current3 = 0;

function showSlide3(index) {
    slides3.hide();
    $(slides3[index]).fadeIn();
    thumbs3.removeClass('active');
    $(thumbs3[index]).addClass('active');
    current3 = index;
}

thumbs3.on('click', function() {
    let index = $(this).data('index');
    showSlide3(index);
});

showSlide3(0);


function flipCard(card) {
    card.classList.toggle('flipped');
}