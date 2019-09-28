jQuery(document).ready(function($) {
	"use strict";

	$('.products.product-display-custom.home-products-carousel-enable').each( function(index) {
		var home_carousel_col = $(this).attr('data-column');

		if ( home_carousel_col == 1 ) {
			$(this).owlCarousel({
				autoplay : true,
				autoHeight : true,
				nav: true,
				navText: ["", ""],
				dots: false,
				rewind: true,
				items : home_carousel_col,
		    });
		} else {
			$(this).owlCarousel({
				autoplay : true,
				autoHeight : true,
				nav: true,
				navText: ["", ""],
				dots: false,
				rewind: true,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1,
					},
					361: {
						items: 2,
					},
					541: {
						items: 3,
					},
					768: {
						items : home_carousel_col,
					}
				}
		    });
		}
		
	} );


	var brand_carousel_col = $('.carousel-brand').attr('data-brand-column');
	var category_carousel_col = $('.carousel-category').attr('data-brand-column');
	var recent_post_col = $('.recent-post-content.carousel-post').attr('data-post-column');

	/*===============================================
				Carousel Slider Setting
	================================================*/

	$('#carousel').flexslider({
		animation: "slide",
		controlNav: false,
		slideshow: false,
		itemWidth: 292,
		itemMargin: 0,
		asNavFor: '#slider'
	});

	$('#slider').flexslider({
		animation: "slide",
		controlNav: false,
		slideshowSpeed:5000,
		slideshow: true,
		sync: "#carousel",
		pauseOnAction: true,
		after: function(slider) {
		  if (!slider.playing) {
		    slider.play();
		  }
		}
	});

    $(".carousel-brand").owlCarousel({
		autoplay : true,
		autoHeight : true,
		nav: true,
		navText: ["", ""],
		dots: false,
		rewind: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			361: {
				items: 2,
			},
			541: {
				items: 3,
			},
			768: {
				items : brand_carousel_col,
			}
		}
    });

    $(".carousel-category").owlCarousel({
		autoplay : true,
		autoHeight : true,
		nav: true,
		navText: ["", ""],
		dots: false,
		rewind: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			361: {
				items: 2,
			},
			541: {
				items: 3,
			},
			768: {
				items : category_carousel_col,
			}
		}
    });

    $(".recent-post-content.carousel-post").owlCarousel({
		autoplay : true,
		autoHeight : true,
		nav: true,
		navText: ["", ""],
		dots: false,
		rewind: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			540: {
				items: 2,
			},
			769: {
				items: 3,
			},
			1000: {
				items : recent_post_col,
			}
		}
    });

    $(".post-carousel.homemarket-carousel").owlCarousel({
		autoplay : true,
		items : 1,
		autoHeight : true,
		nav: false,
		navText: ["", ""],
		dots: true,
		rewind: true,
    });

    /*===============================================
				Added to Cart refresh
	================================================*/

	$( document ).on('added_to_cart', 'body', function(event, fragments, cart_hash, btn) {
		var parentTag =  btn.parents('li.product');
		btn.next().appendTo(parentTag);
	});

	var notificationContent = '';

	$('body').on('click', '.ajax_add_to_cart', function(){
		$('.woocommerce-message').remove();
	});

	$( '.woocommerce-viewing' ).off( 'change', 'select.count' ).on( 'change', 'select.count', function(e) {
        e.preventDefault();
        $( this ).closest( 'form' ).submit();
    });

    /*===============================================
					Mobile Nav Menu
	================================================*/

    $('#nav-mobile-icon').on('click', function(){
		$(this).toggleClass('open');
		$('html').toggleClass('js-drawer-open js-drawer-open-left');
		$('body').toggleClass('js-drawer-open js-drawer-open-left');
	});

	$('#NavDrawer .mobile-nav-header .mobile-nav-close').on('click', function() {
		$('#nav-mobile-icon').removeClass('open');
		$('html').removeClass('js-drawer-open js-drawer-open-left');
		$('body').removeClass('js-drawer-open js-drawer-open-left');
	});

	$('#NavDrawer ul.site-nav > li.menu-item.menu-item-has-children').on('click', function() {
		$(this).toggleClass('submenu-open');

		if ( $(this).hasClass('submenu-open') ) {
			$(this).find('ul.sub-menu').slideDown(500);
		} else {
			$(this).find('ul.sub-menu').slideUp(500);
		}
	});

	$('.mobile-sidebar').on('click', function() {
		$(this).toggleClass('open');
		$('#collection.left-page .sidebar-content').toggleClass('open');
		$('.index-page .blog-sidebar').toggleClass('open');
		$('.archive-page .blog-sidebar').toggleClass('open');
		$('.single-page .post-sidebar').toggleClass('open');
	});

	/*===============================================
					Masonry layout
	================================================*/

	if ( $('#masonry_grid').length ) {
		new AnimOnScroll( document.getElementById( "masonry_grid" ), {
			minDuration : 0.4,
			maxDuration : 0.7,
			viewportFactor : 0.2
		} );
	}

	/* Collection Menu Hover */
	$('.sidebar-collections').on('hover', function() {
		$(this).find('.sdcollections-content').toggleClass('opened');
	});
});
$('#tablaUsuarios').DataTable({
	"language": {
            "sProcessing":     "Processing...",
			"sLengthMenu":     "To show _MENU_ Records",
			"sZeroRecords":    "No results found",
			"sEmptyTable":     "No data available in this table",
			"sInfo":           "Of the _START_ to the _END_ of a total from _TOTAL_ Records",
			"sInfoEmpty":      "Of the 0 to the 0 of a total from 0 Records",
			"sInfoFiltered":   "(filtering a total de _MAX_ Records)",
			"sInfoPostFix":    "",
			"sSearch":         "Search:",
			"sUrl":            "",
			"sInfoThousands":  ",",
			"sLoadingRecords": "Loading...",
			"oPaginate": {
				"sFirst":    "First",
				"sLast":     "Latest",
				"sNext":     "Next",
				"sPrevious": "Previous"
			},
			"oAria": {
				"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				"sSortDescending": ": Activar para ordenar la columna de manera descendente"
			}
        }
});
