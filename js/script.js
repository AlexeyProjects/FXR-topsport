let navbar__close = document.querySelector('.header-nav__close');
let navbar = document.querySelector('.header-nav')
let navbar__btn = document.querySelector('.header-rightbtn')
let promotion_list = document.querySelector('.promotion-list');
let windowWidth = window.innerWidth
let bannerseoImage = document.querySelector('.ban-image__item')
console.log(windowWidth)

window.addEventListener('resize',(e) => {
  e.currentTarget.innerWidth = windowWidth
});

navbar__btn.addEventListener('click',(e) => {
  navbar.style.right = "0%"
});

navbar__close.addEventListener('click',(e) => {
  navbar.style.right = "-200%"
});


if ( windowWidth <= 768 ) {
	console.log(promotion_list)
	promotion_list.classList.add('owl-carousel')
	console.log(bannerseoImage)
	bannerseoImage.src = '../static/images/index/seoimage368.png'

}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	dots: true,
  	dotsEach: true
  });
});