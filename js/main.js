$(document).ready(function() {
    'use strict'

    setTimeout(function() {
        $('.overlay_bg').fadeToggle();
    }, 2000);

    $('.animate-scale').animatedHeadline({
		animationType: 'clip'
	});

	$(window).on('scroll', function () {
		var menu_area = $('.nav-area');
		if ($(window).scrollTop() > 200) {
			menu_area.addClass('sticky_navigation');
		} else {
			menu_area.removeClass('sticky_navigation');
		}
	});
	
	$(document).on('click', '.navbar-collapse.in', function (e) {
		if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
			$(this).collapse('hide');
		}
	});

	$('body').scrollspy({
		target: '.navbar-collapse',
		offset: 195
	});

	$('a.smooth-menu,a.custom-btn,a.banner-btn').on("click", function (e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 1000);
	});

	new WOW().init();

	$("#skills-carousel").owlCarousel({
		navigation: false,
		pagination: true,
		slideSpeed: 800,
		paginationSpeed: 800,
		smartSpeed: 500,
		autoplay: true,
		singleItem: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			680:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

	$('#project-popups,#project-popups-2,#project-popups-3,#project-popups-4,#project-popups-5,#project-popups-6').magnificPopup({
		delegate: 'a',
		removalDelay: 400, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true
	});

});

jQuery(document).ready(function(){
	jQuery('.progressbar').each(function(){
		jQuery(this).find('.progressbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

