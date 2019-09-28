(function ( $ ) {
	"use strict";

	function ajaxInitialize() {

		// caching some vars
		var $filters = $( '.watf-filter' ),
			$container = $( watf_vars.wc_shop_container );

		var WATF_Sender = {
			query: {},
			request: '',
			post: function( $container ){

				// preparing for submit
				$( watf_vars.wc_shop_container ).hide(); 
				var request = this.request;
				
				$container
					.addClass( 'watf-loading' )
					.html( '<div class="watf-loading-spinner"><span class="watf-spinner"></span></div>' );

				$.post( request )
		            .done( function( response ){
		                $container.removeClass( 'watf-loading' );

		                if( $( response ).find( watf_vars.wc_shop_container ).length > 0 ) {
		                    $container.html( $( response ).find( watf_vars.wc_shop_container ) );
		                } else {
		                    $container.html( $( response ).find( '.woocommerce-info' ) );
		                }

		                //result count
		                if( $( response ).find( watf_vars.wc_count_container ).length > 0 ) {
		                    $( watf_vars.wc_count_container ).html( $( response ).find( watf_vars.wc_count_container ).html() );
		                }

	                    //update browser history (IE doesn't support it)
		                if ( !navigator.userAgent.match( /msie/i ) ) {
		                    window.history.pushState({ "pageTitle": response.pageTitle },"", request );
		                }

		                ajaxInitialize();

			        } ).fail( function(){
		                $container
		                	.removeClass( 'watf-loading' )
		                	.html( '<div class="woocommerce-info">' + watf_vars.error_text + '</div>' );
			        } );
			},
			isEmpty: function( obj ) {

			    // null and undefined are "empty"
			    if (obj == null) return true;

			    // Assume if it has a length property with a non-zero value
			    // that that property is correct.
			    if (obj.length > 0)    return false;
			    if (obj.length === 0)  return true;

			    // Otherwise, does it have any properties of its own?
			    // Note that this doesn't handle
			    // toString and valueOf enumeration bugs in IE < 9
			    for (var key in obj) {
			        if (hasOwnProperty.call(obj, key)) return false;
			    }

			    return true;
			},
			getURL: function(){
				return window.location.protocol + "//" + ( window.location.host + "/" + window.location.pathname ).replace( '//', '/' );
			},
			getQuery: function(){
				var queryString = [];

				$.each( this.query, function( key, value ){
					if (value) {
						queryString.push( key + '=' + value );
					}
				} );

				return queryString.join( '&' );
			},
			PrepareRequest: function(){
				this.request = this.isEmpty( this.query ) ? this.getURL() : this.getURL() + '?' + this.getQuery();
				console.log( this.getURL() );
			}
		}

		var sender = WATF_Sender;

		// count number of selected terms for each taxonomy
		$( '.watf-filter' ).on( 'change', 'input', function(){
			$('.woocommerce-atf-filters').submit();
		} );

		// wrap the products container for ajax response 
		$container.wrap('<div class="watf-shop-container"></div>');

		// on form submit
		$( document ).on( 'submit', '.woocommerce-atf-filters', function(){

			// vars for build url
			var href = $( this ).attr( 'action' ),
				$watf_container = $( '.watf-shop-container' );

			var filters = $filters.find( 'input[type="checkbox"]:checked' ).map( function(){
				return this.value;
			} ).get().join(',');
			var taxonomy = $filters.data( 'taxonomy' );
			if (filters) {
				sender.query[ taxonomy ] = filters;
			}
			
			sender.PrepareRequest();

			// submit form and insert the response
			sender.post( $watf_container );

			sender.query = {};

			return false;
		} );

	}

	ajaxInitialize();

}(jQuery));