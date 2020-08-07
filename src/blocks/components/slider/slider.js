import Swiper from 'swiper';

let $slider = document.querySelector('.slider'),
	$sliderWrap = document.querySelector('.slider-wrap'),
	$slides = document.querySelectorAll('.slide'),
	$sliderPagination = document.querySelector('.slider-pagination');

$slider.classList.add('.swiper-container');
$sliderWrap.classList.add('.swiper-wrapper');
for ( let slide of $slides) {
	slide.classList.add('.swiper-slide')
};
$sliderPagination.classList.add('.swiper-pagination');

var mySwiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	loop: true,
	pagination: {
	  el: '.swiper-pagination',
	}
})

document.querySelector('.slider').addEventListener('click', () => {
	console.log("object")
})