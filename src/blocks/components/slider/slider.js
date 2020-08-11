import Swiper, { Pagination, Scrollbar } from "swiper";

Swiper.use([Pagination, Scrollbar]);

export default class Slider {
	constructor() {
		this.init();
	}
	init() {
		this.prepareData();
		this.initSimpleSlider();
		this.initScrollerSlider();

	}

	initSimpleSlider() {
		new Swiper(".js-slider-simple", {
			loop: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			}
		});
	}

	initScrollerSlider() {
		new Swiper(".js-slider-scroller", {
			slidesPerView: "auto",
			grabCursor: true,
			scrollbar: {
				el: ".swiper-scrollbar",
				hide: false,
			},
		});
	}

	prepareData() {
		const $slider = document.querySelectorAll(".slider");
		$slider.forEach(el => {
			let $sliderWrap = el.querySelector(".slider-wrap"),
				$slides = el.querySelectorAll(".slide"),
				$sliderPagination = el.querySelector(".slider-pagination"),
				$sliderScrollbar = el.querySelector(".slider-scrollbar");
			el.classList.add("swiper-container");
			$sliderWrap.classList.add("swiper-wrapper");
			for (let slide of $slides) {
				slide.classList.add("swiper-slide");
			}
			if ($sliderPagination) {
				$sliderPagination.classList.add("swiper-pagination");
			}
			if ($sliderScrollbar) {
				$sliderScrollbar.classList.add("swiper-scrollbar");
			}
		});
	}
}

