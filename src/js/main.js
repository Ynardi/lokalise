$(document).ready(function() {
    $('.companies__carousel').slick({
        infinite: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        center: true,
        autoplay: true,
        autoplaySpeed: 3000,


    });


document.querySelector('.slick-prev').textContent = '';
document.querySelector('.slick-next').textContent = '';
});