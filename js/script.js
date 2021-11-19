/*----------------------------------------------------------------

	Template Name: Ethant Hunt - HTML Template 
	Version: 1.0

	-------------------------------------------------------------------------------*/

/**************************************************************
	
	Main Js Activation
	01. Preloader 
	02. Menu 
	03. Pagepiling
	04. Typed Text
	05. Parallax
	06. Carousels
	07. Ajax Forms
	__ End Js Activation

***************************************************************/

(function ($) {
	'use strict';

	/*-------------------------------------------------------------------------------
	  Preloader
	-------------------------------------------------------------------------------*/

	$(window).on('load', function() {
		if ( $('.preloader').length ) {
			$('.preloader').fadeOut('slow');
		}

		if ( $('.a-intro').length ) {
			$('.a-intro').addClass('active');
		}
	});



	/*-------------------------------------------------------------------------------
	  Menu
	-------------------------------------------------------------------------------*/

	$('.a-nav-toggle').on('click', function(){
		if ($('html').hasClass('body-menu-opened')) {
			$('html').removeClass('body-menu-opened').addClass('body-menu-close');
		} else {
			$('html').addClass('body-menu-opened').removeClass('body-menu-close');
		}
	});



	/*-------------------------------------------------------------------------------
	  Pagepiling
	-------------------------------------------------------------------------------*/

	if ( $('.a-pagepiling').length ) {
		$('.a-pagepiling').pagepiling({
			scrollingSpeed: 280,
			menu: '#menu, #menuMain',
			
			anchors: ['About', 'Services', 'Skills', 'Resume', 'Portfolio', 'Awards', 'Testimonials', 'Clients', 'Contact'],
			loopTop: false,
			loopBottom: false,
			navigation: {
				'position': 'left',
				'tooltips': ['Banner Section', 'Skill Section', 'Apps Section', 'Profile Section', 'Web Section', 'Clients Section', 'Clients Section', 'News Section', 'Contact Section']
			},
			afterRender: function(){
				$('#pp-nav').addClass('custom');
			},
			afterLoad: function(anchorLink, index){
				if(index>1){
					$('#pp-nav').removeClass('custom');
				}else{
					$('#pp-nav').addClass('custom');
				}
			},
			onLeave: function(){
				$('.a-progressbar .progress-bar').each(function() {
					if ($('.slide-skills').hasClass('active')) {
						$(this).width($(this).attr('aria-valuenow') + '%');
					} else {
						$(this).width('0');
					}
				});

			}
		});
	}

	
	
	//Parallax Scene for Icons
	if($('.parallax-scene-1').length){
		var scene = $('.parallax-scene-1').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-2').length){
		var scene = $('.parallax-scene-2').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-3').length){
		var scene = $('.parallax-scene-3').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	
	
	
	if($('.paroller').length){
		$('.paroller').paroller({
			  factor: 0.2,            // multiplier for scrolling speed and offset, +- values for direction control  
			  factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
			  type: 'foreground',     // background, foreground  
			  direction: 'horizontal' // vertical, horizontal  
		});
	}
	
	
	
	//Main Slider Carousel
	if ($('.banner-carousel').length) {
		$('.banner-carousel').owlCarousel({
			animateOut: 'fadeOut',
    		animateIn: 'slideInUp',
			loop:true,
			margin:0,
			nav:true,
			autoHeight: true,
			autoplayHoverPause: true, // Stops autoplay
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="flaticon-back-1"></span>', '<span class="flaticon-arrow-pointing-to-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	
	// Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			//animateOut: 'fadeOut',
    		//animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			autoHeight: true,
			autoplayHoverPause: true, // Stops autoplay
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	
	
	// Clients Carousel
	if ($('.clients-carousel').length) {
		$('.clients-carousel').owlCarousel({
			//animateOut: 'fadeOut',
    		//animateIn: 'fadeIn',
			loop:true,
			margin:30,
			nav:true,
			autoHeight: true,
			autoplayHoverPause: true, // Stops autoplay
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});    		
	}
	
	
	
	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
	
	
	

	//Typeit Text On Main Page
	if ($('.variable-text').length) {
		
		$('.variable-text').typeIt({
			 strings: ["I am ProLife Web Developer & designer"],
			 speed: 150,
			 breakLines: true,
			 loop:false,
			 autoStart: true
		});	
	}

	
	
	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}

	
	
	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	
	
	//Gallery Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				},
				services: {
					required: true
				},
			}
		});
	}
	
	
	
	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}
	
	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	
	


	/*-------------------------------------------------------------------------------
	  Parallax
	-------------------------------------------------------------------------------*/

	if ( $('#a-parallax').length ) {
		var scene = document.getElementById('a-parallax');
		var parallax = new Parallax(scene);
	}



	/*-------------------------------------------------------------------------------
	  Carousels
	-------------------------------------------------------------------------------*/

	if ( $('.a-portfolio-carousel').length ) {
		var owl = $('.a-portfolio-carousel');
		owl.owlCarousel({
			items: 3,
			smartSpeed: 750,
			margin: 30,
			autoplayHoverPause: true,
			dots: true,
			nav: false,
			dotData: false,
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				900:{
					items: 3
				}
			}
		});
	}

	if ( $('.a-testimonial-carousel').length ) {
		var owl = $('.a-testimonial-carousel');
		owl.owlCarousel({
			items: 1,
			smartSpeed: 750,
			margin: 30,
			autoplayHoverPause: true,
			dots: true,
			nav: false
		});
	}



	/*-------------------------------------------------------------------------------
	  Ajax Forms
	-------------------------------------------------------------------------------*/

	if ($('.a-form').length) {
		$('.a-form').each(function(){
			$(this).validate({
				errorClass: 'error',
				submitHandler: function(form){
					$.ajax({
						type: "POST",
						url:"mail.php",
						data: $(form).serialize(),
						success: function() {
							$('.form-group-message').show();
							$('#error').hide();
							$('#success').show();
						},
						error: function(){
							$('.form-group-message').show();
							$('#success').hide();
							$('#error').show();
						}
					});
				}
			});
		});
	}

}($));
