$(document).ready(function(){
  $('.hamburger4').click(function(){
    $('.menu-back').toggleClass('menu-back-active');
    $('.menu').toggleClass('menu-active');
  });
	$('.reviews-block-first').hover(function(){
		$('.grey1').toggleClass('grey1-pass');
		$('.red1').toggleClass('red1-active');
	});
	$('.reviews-block-second').hover(function(){
		$('.grey2').toggleClass('grey1-pass');
		$('.red2').toggleClass('red1-active');
	});
	$('.reviews-block-third').hover(function(){
		$('.grey3').toggleClass('grey1-pass');
		$('.red3').toggleClass('red1-active');
	});
});



$('.useful-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 4000,
  dots: true,
  arrows: true,
  responsive: [
  {
  	breakpoint: 1200,
  	settings: {
  		slidesToShow: 1,
  	}
  },
  ],
});

document.body.onload = function() {

    setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('done') ) {
    preloader.classList.add('done');
    body.classList.add('lock');
    }
    }, 1000);
 }

