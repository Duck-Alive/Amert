/*
 Plugin Name:   waitForImages
 Written by:    https://github.com/alexanderdickson/waitForImages
 */

/*! waitForImages jQuery Plugin - v2.0.2 - 2015-05-05
 * https://github.com/alexanderdickson/waitForImages
 * Copyright (c) 2015 Alex Dickson; Licensed MIT */
;(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS / nodejs module
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    "use strict";
    // Namespace all events.
    var eventNamespace = 'waitForImages';

    // CSS properties which contain references to images.
    $.waitForImages = {
        hasImageProperties: [
            'backgroundImage',
            'listStyleImage',
            'borderImage',
            'borderCornerImage',
            'cursor'
        ],
        hasImageAttributes: ['srcset']
    };

    // Custom selector to find `img` elements that have a valid `src`
    // attribute and have not already loaded.
    $.expr[':'].uncached = function (obj) {
        // Ensure we are dealing with an `img` element with a valid
        // `src` attribute.
        if (!$(obj).is('img[src][src!=""]')) {
            return false;
        }

        return !obj.complete;
    };

    $.fn.waitForImages = function () {

        var allImgsLength = 0;
        var allImgsLoaded = 0;
        var deferred = $.Deferred();

        var finishedCallback;
        var eachCallback;
        var waitForAll;

        // Handle options object (if passed).
        if ($.isPlainObject(arguments[0])) {

            waitForAll = arguments[0].waitForAll;
            eachCallback = arguments[0].each;
            finishedCallback = arguments[0].finished;

        } else {

            // Handle if using deferred object and only one param was passed in.
            if (arguments.length === 1 && $.type(arguments[0]) === 'boolean') {
                waitForAll = arguments[0];
            } else {
                finishedCallback = arguments[0];
                eachCallback = arguments[1];
                waitForAll = arguments[2];
            }

        }

        // Handle missing callbacks.
        finishedCallback = finishedCallback || $.noop;
        eachCallback = eachCallback || $.noop;

        // Convert waitForAll to Boolean
        waitForAll = !! waitForAll;

        // Ensure callbacks are functions.
        if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
            throw new TypeError('An invalid callback was supplied.');
        }

        this.each(function () {
            // Build a list of all imgs, dependent on what images will
            // be considered.
            var obj = $(this);
            var allImgs = [];
            // CSS properties which may contain an image.
            var hasImgProperties = $.waitForImages.hasImageProperties || [];
            // Element attributes which may contain an image.
            var hasImageAttributes = $.waitForImages.hasImageAttributes || [];
            // To match `url()` references.
            // Spec: http://www.w3.org/TR/CSS2/syndata.html#value-def-uri
            var matchUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/g;

            if (waitForAll) {

                // Get all elements (including the original), as any one of
                // them could have a background image.
                obj.find('*').addBack().each(function () {
                    var element = $(this);

                    // If an `img` element, add it. But keep iterating in
                    // case it has a background image too.
                    if (element.is('img:uncached')) {
                        allImgs.push({
                            src: element.attr('src'),
                            element: element[0]
                        });
                    }

                    $.each(hasImgProperties, function (i, property) {
                        var propertyValue = element.css(property);
                        var match;

                        // If it doesn't contain this property, skip.
                        if (!propertyValue) {
                            return true;
                        }

                        // Get all url() of this element.
                        while (match = matchUrl.exec(propertyValue)) {
                            allImgs.push({
                                src: match[2],
                                element: element[0]
                            });
                        }
                    });

                    $.each(hasImageAttributes, function (i, attribute) {
                        var attributeValue = element.attr(attribute);
                        var attributeValues;

                        // If it doesn't contain this property, skip.
                        if (!attributeValue) {
                            return true;
                        }

                        // Check for multiple comma separated images
                        attributeValues = attributeValue.split(',');

                        $.each(attributeValues, function(i, value) {
                            // Trim value and get string before first
                            // whitespace (for use with srcset).
                            value = $.trim(value).split(' ')[0];
                            allImgs.push({
                                src: value,
                                element: element[0]
                            });
                        });
                    });
                });
            } else {
                // For images only, the task is simpler.
                obj.find('img:uncached')
                    .each(function () {
                        allImgs.push({
                            src: this.src,
                            element: this
                        });
                    });
            }

            allImgsLength = allImgs.length;
            allImgsLoaded = 0;

            // If no images found, don't bother.
            if (allImgsLength === 0) {
                finishedCallback.call(obj[0]);
                deferred.resolveWith(obj[0]);
            }

            $.each(allImgs, function (i, img) {

                var image = new Image();
                var events =
                    'load.' + eventNamespace + ' error.' + eventNamespace;

                // Handle the image loading and error with the same callback.
                $(image).one(events, function me (event) {
                    // If an error occurred with loading the image, set the
                    // third argument accordingly.
                    var eachArguments = [
                        allImgsLoaded,
                        allImgsLength,
                        event.type == 'load'
                    ];
                    allImgsLoaded++;

                    eachCallback.apply(img.element, eachArguments);
                    deferred.notifyWith(img.element, eachArguments);

                    // Unbind the event listeners. I use this in addition to
                    // `one` as one of those events won't be called (either
                    // 'load' or 'error' will be called).
                    $(this).off(events, me);

                    if (allImgsLoaded == allImgsLength) {
                        finishedCallback.call(obj[0]);
                        deferred.resolveWith(obj[0]);
                        return false;
                    }

                });

                image.src = img.src;
            });
        });

        return deferred.promise();

    };
}));




/*
Name: Homemarket theme Javascript
*/

// Theme
window.theme = {};

// Configuration
(function(theme, $) {
    "use strict";

	theme = theme || {};

	$.extend(theme, {

        rtl: js_homemarket_vars.rtl == '1' ? true : false,
		ajax_url: js_homemarket_vars.ajax_url,
        product_thumbs_count: js_homemarket_vars.product_thumbs_count ? js_homemarket_vars.product_thumbs_count : 4,
        // product_image_popup: js_homemarket_vars.product_image_popup == '1' ? 'fadeOut' : false,
        product_image_popup: 'fadeOut',
        // category_ajax: js_homemarket_vars.category_ajax == '1' ? true : false,
        category_ajax: true,
        wc_shop_container: js_homemarket_vars.wc_shop_container,
        // wc_count_container: js_homemarket_vars.wc_count_container,
        loading_text: js_homemarket_vars.loading_text,
        error_text: js_homemarket_vars.error_text,
        mini_cart_enable: js_homemarket_vars.minicart_option  == '1' ? true : false,

        getScrollbarWidth: function() {
            // thx David
            if (this.scrollbarSize === undefined) {
                var scrollDiv = document.createElement("div");
                scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
                document.body.appendChild(scrollDiv);
                this.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
            }
            return this.scrollbarSize;
        },

	});

}).apply(this, [window.theme, jQuery]);

// Carousel
(function(theme, $) {
    "use strict";
    theme = theme || {};

    var instanceName = '__carousel';

    var Carousel = function($el, opts) {
        return this.initialize($el, opts);
    };

    Carousel.defaults = $.extend({}, {
        loop: true,
        navText: [],
        themeConfig: false,
        lazyLoad: true,
        lg: 0,
        md: 0,
        sm: 0,
        xs: 0,
        responsive: {},
        single: false,
        rtl: theme.rtl
    });

    // Add default responsive options
    var scrollWidth = theme.getScrollbarWidth(),
        w_sm = 481 - scrollWidth,
        w_md = 768 - scrollWidth,
        w_lg = 992 - scrollWidth,
        w_xl = theme.screen_lg - scrollWidth;

    Carousel.defaults.responsive[0] = {items: 1};
    Carousel.defaults.responsive[w_sm] = {items: 1, mergeFit: false};
    Carousel.defaults.responsive[w_md] = {items: 1, mergeFit: false};
    Carousel.defaults.responsive[w_lg] = {items: 1, mergeFit: false};
    Carousel.defaults.responsive[w_xl] = {items: 1, mergeFit: false};

    Carousel.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            if ((opts && opts.themeConfig) || !opts) {
                this.options = $.extend(true, {}, Carousel.defaults, theme.owlConfig, opts, {
                    wrapper: this.$el,
                    themeConfig: true
                });
            } else {
                this.options = $.extend(true, {}, Carousel.defaults, opts, {
                    wrapper: this.$el
                });
            }

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.owlCarousel))) {
                return this;
            }

            var self = this,
                $el = this.options.wrapper,
                loop = this.options.loop,
                lg = this.options.lg ? this.options.lg : this.options.items,
                md = this.options.md ? this.options.md : this.options.items,
                sm = this.options.sm ? this.options.sm : this.options.items,
                xs = this.options.xs ? this.options.xs : this.options.items,
                single = this.options.single,
                zoom = $el.find('.zoom').get(0),
                responsive = {},
                items,
                count = $el.find('> *').length;

            if (single) {
                items = 1;
            } else {
                items = this.options.items ? this.options.items : (lg ? lg : 1);
                responsive[w_xl] = { items: items, loop: (loop && count > items) ? true : false, mergeFit: this.options.mergeFit };
                if (lg) responsive[w_lg] = { items: lg, loop: (loop && count > lg) ? true : false, mergeFit: this.options.mergeFit_lg };
                if (md) responsive[w_md] = { items: md, loop: (loop && count > md) ? true : false, mergeFit: this.options.mergeFit_md };
                if (sm) responsive[w_sm] = { items: sm, loop: (loop && count > sm) ? true : false, mergeFit: this.options.mergeFit_sm };
                if (xs) responsive[0] = { items: xs, loop: (loop && count > xs) ? true : false, mergeFit: this.options.mergeFit_xs };
            }

            if (!$el.hasClass('show-nav-title') && this.options.themeConfig && theme.slider_nav_hover)
                $el.addClass('show-nav-hover');

            this.options = $.extend(true, {}, this.options, {
                items: items,
                loop: (loop && count > items) ? true : false,
                responsive: responsive,
                onInitialized: function() {
                    $el.find('.owl-stage-outer').css({
                        'margin-left': this.options.stagePadding,
                        'margin-right': this.options.stagePadding
                    })
                },
                touchDrag: (count == 1) ? false : true,
                mouseDrag: (count == 1) ? false : true
            });

            // Auto Height Fixes
            if (this.options.autoHeight) {
                function calcOwlHeight() {
                    var h = 0;
                    $el.find('.owl-item.active').each(function() {
                        if (h < $(this).height())
                            h = $(this).height();
                    });
                    $el.find('.owl-stage-outer').height( h );
                }
                $(window).on('resize', function() {
                    calcOwlHeight();
                });

                $(window).on('load', function() {
                    calcOwlHeight();
                });
            }

            if (zoom) {
                var links = [],
                    i = 0;

                $el.find('.zoom').each(function() {
                    var slide = {},
                        $zoom = $(this);

                    slide.src = $zoom.data('src');
                    slide.title = $zoom.data('title');
                    links[i] = slide;
                    $zoom.data('index', i);
                    i++;
                });
            }

            if ($el.hasClass('show-nav-title')) {
                this.options.stagePadding = 0;
            } else {
                if (this.options.themeConfig && theme.slider_nav_hover)
                    $el.addClass('show-nav-hover');
                if (this.options.themeConfig && !theme.slider_nav_hover && theme.slider_margin)
                    $el.addClass('stage-margin');
            }

            $el.owlCarousel(this.options);

            if (zoom && links) {
                $el.on('click', '.zoom', function(e) {
                    e.preventDefault();
                    $.magnificPopup.close();
                    $.magnificPopup.open($.extend(true, {}, theme.mfpConfig, {
                        items: links,
                        gallery: {
                            enabled: true
                        },
                        type: 'image'
                    }), $(this).data('index'));
                    return false;
                });
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        Carousel: Carousel
    });

    // jquery plugin
    $.fn.themeCarousel = function(opts, zoom) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.Carousel($this, opts, zoom);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Woocommerce Shop ToolBar Events
(function(theme, $) {
    "use strict";
    $(function() {
        $(document).on('click', '#grid', function(e) {
            e.preventDefault();
            $(this).addClass('active');
            $('#list').removeClass('active');
            if (($.cookie && $.cookie('gridcookie') == 'list') || !$.cookie) {
                var $toggle = $('.gridlist-toggle');
                if ($toggle.length) {
                    var $parent = $toggle.parent().parent().parent();
                    var $products = $parent.find('ul.products');
                    $products.fadeOut(300, function() {
                        $products.addClass('grid').removeClass('list').fadeIn(300);
                    });
                }
            }
            if ($.cookie)
                $.cookie('gridcookie', 'grid', { path: '/' });
            return false;
        });

        $(document).on('click', '#list', function(e) {
            e.preventDefault();
            $(this).addClass('active');
            $('#grid').removeClass('active');
            if (($.cookie && $.cookie('gridcookie') == 'grid') || !$.cookie) {
                var $toggle = $('.gridlist-toggle');
                if ($toggle.length) {
                    var $parent = $toggle.parent().parent().parent();
                    var $products = $parent.find('ul.products');
                    $products.fadeOut(300, function() {
                        $products.addClass('list').removeClass('grid').fadeIn(300);
                    });
                }
            }
            if ($.cookie)
                $.cookie('gridcookie', 'list', { path: '/' });
            return false;
        });
    });

}).apply(this, [window.theme, jQuery]);

// Woocommerce Product Image Slider
(function(theme, $) {
    "use strict";
    theme = theme || {};

    var duration = 300,
        flag = false,
        thumbs_count = theme.product_thumbs_count;

    $.extend(theme, {

        WooProductImageSlider: {

            defaults: {
                elements: '.product-image-slider'
            },

            initialize: function($elements) {
                this.$elements = ($elements || $(this.defaults.elements));

                this.build();

                return this;
            },

            build: function() {
                var self = this;

                self.$elements.each(function() {
                    var $this = $(this),
                        $product = $this.closest('.product'),
                        $thumbs_slider = $product.find('.product-thumbs-slider'),
                        currentSlide = 0,
                        count = $this.find('> *').length;

                    $this.find('> *:first-child').waitForImages(true).done(function() {

                        $thumbs_slider.owlCarousel({
                            rtl: theme.rtl,
                            loop : false,
                            autoplay : false,
                            items : thumbs_count,
                            nav: false,
                            navText: ["", ""],
                            dots: false,
                            rewind: true,
                            margin: 7,
                            stagePadding: 1,
                            onInitialized: function() {
                                self.selectThumb(null, $thumbs_slider, 0);
                                if ($thumbs_slider.find('.owl-item').length >= thumbs_count)
                                    $thumbs_slider.append('<div class="thumb-nav"><div class="thumb-prev"></div><div class="thumb-next"></div></div>');
                            }
                        }).on('click', '.owl-item', function() {
                            self.selectThumb($this, $thumbs_slider, $(this).index());
                        });

                        $thumbs_slider.on('click', '.thumb-prev', function(e) {
                            var currentThumb = $thumbs_slider.data('currentThumb');
                            self.selectThumb($this, $thumbs_slider, --currentThumb);
                        });
                        $thumbs_slider.on('click', '.thumb-next', function(e) {
                            var currentThumb = $thumbs_slider.data('currentThumb');
                            self.selectThumb($this, $thumbs_slider, ++currentThumb);
                        });

                        if (theme.product_image_popup) {
                            var links = [], i = 0;
                            $this.find('img').each(function() {
                                var slide = {};

                                slide.src = $(this).attr('href');
                                slide.title = $(this).attr('alt');

                                links[i] = slide;
                                i++;
                            });
                        }

                        $this.owlCarousel({
                            rtl: theme.rtl,
                            loop : (count > 1) ? true : false,
                            autoplay : false,
                            items : 1,
                            autoHeight : true,
                            nav: true,
                            navText: ["", ""],
                            dots: false,
                            rewind: true,
                            onInitialized : function() {
                                /*if (theme.product_zoom && (!('ontouchstart' in document) || (('ontouchstart' in document) && theme.product_zoom_mobile))) {
                                    $this.find('img').each(function() {
                                        var $this = $(this);
                                        zoomConfig.zoomContainer = $this.parent();
                                        $this.elevateZoom(zoomConfig);
                                    });
                                }*/
                            },
                            onTranslate : function(event) {
                                currentSlide = event.item.index - $this.find('.cloned').length / 2;
                                self.selectThumb(null, $thumbs_slider, currentSlide);
                            },
                            onRefreshed: function() {
                                /*if (theme.product_zoom && (!('ontouchstart' in document) || (('ontouchstart' in document) && theme.product_zoom_mobile))) {
                                    $this.find('img').each(function() {
                                        var $this = $(this),
                                            src = $this.attr('src'),
                                            elevateZoom = $this.data('elevateZoom');
                                        if (typeof elevateZoom != 'undefined') {
                                            elevateZoom.startZoom();
                                            elevateZoom.swaptheimage(src, src);
                                        }
                                    });
                                }*/
                            }
                        });

                        $this.data('links', links);

                        if (theme.product_image_popup) {
                            var $zoom_buttons = $this.next();
                            $zoom_buttons.off('click').on('click', function(e) {
                                e.preventDefault();
                                var options = {index: currentSlide, event: e};
                                $.magnificPopup.close();
                                $.magnificPopup.open($.extend(true, {}, theme.mfpConfig, {
                                    items: $this.data('links'),
                                    gallery: {
                                        enabled: true
                                    },
                                    type: 'image'
                                }), currentSlide);
                            });
                        }
                    });
                });

                return self;
            },

            selectThumb: function($image_slider, $thumbs_slider, index) {
                if (flag) return;

                flag = true;
                var len = $thumbs_slider.find('.owl-item').length,
                    actives = [],
                    i = 0;

                index = (index + len) % len;
                if ($image_slider) {
                    $image_slider.trigger('to.owl.carousel', [index, duration, true]);
                }
                $thumbs_slider.find('.owl-item').removeClass('selected');
                $thumbs_slider.find('.owl-item:eq(' + index + ')').addClass('selected');
                $thumbs_slider.data('currentThumb', index);
                $thumbs_slider.find('.owl-item.active').each(function() {
                    actives[i++] = $(this).index();
                });
                if ($.inArray(index, actives) == -1) {
                    if (Math.abs(index - actives[0]) > Math.abs(index - actives[actives.length - 1])) {
                        $thumbs_slider.trigger('to.owl.carousel', [(index - actives.length + 1) % len, duration, true]);
                    } else {
                        $thumbs_slider.trigger('to.owl.carousel', [index % len, duration, true]);
                    }
                }
                flag = false;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);

// Woocommerce Quick View
(function(theme, $) {
    "use strict";
	theme = theme || {};

	$.extend(theme, {

        WooQuickView: {

            initialize: function() {

                this.events();

                return this;
            },

            events: function() {
                var self = this;

                $(document).on('click', '.quickview', function(e) {
                    e.preventDefault();

                    var pid = $(this).attr('data-id');

                    $.fancybox({
                        href : theme.ajax_url,
                        ajax : {
                            data: {
                                action: 'homemarket_product_quickview',
                                pid: pid
                            }
                        },
                        type : 'ajax',
                        helpers : {
                            overlay: {
                                locked: true,
                                fixed: true
                            }
                        },
                        tpl: {
                            error    : '<p class="fancybox-error">' + theme.request_error + '</p>',
                            closeBtn : '<a title="' + js_homemarket_vars.popup_close + '" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                            next     : '<a title="' + js_homemarket_vars.popup_next + '" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                            prev     : '<a title="' + js_homemarket_vars.popup_prev + '" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                        },
                        autoSize: true,
                        autoWidth : true,
                        autoDimensions: true,
                        afterShow : function() {
                            setTimeout(function() {
                                homemarket_init();
                                theme.WooProductImageSlider.initialize($('.quickview-wrap-' + pid).find('.product-image-slider'));

                                $('.quickview-wrap-' + pid).find('.product-thumbnails').find('.owl-item:eq(0)').addClass('selected');
                                $('.quickview-wrap-' + pid).find('.product-image-slider').find('.owl-item:eq(0)').addClass('selected');
                            }, 200);
                        },
                        onUpdate : function() {
                            setTimeout(function() {
                                homemarket_init();
                                var $slider = $('.quickview-wrap-' + pid).find('.product-image-slider');
                                if (typeof $slider.data('owl.carousel') != 'undefined' && typeof $slider.data('owl.carousel')._invalidated != 'undefined')
                                    $slider.data('owl.carousel')._invalidated.width = true;
                                $slider.trigger('refresh.owl.carousel');
                            }, 300);
                        }
                    });
                    return false;
                });

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);

// ----------------- Homemarket Ajax Controller begin ----------------------------
(function(theme, $) {
    "use strict";
    /**
     Copyright (c) 2010, All Right Reserved, Wong Shek Hei @ shekhei@gmail.com
     License: GNU Lesser General Public License (http://www.gnu.org/licenses/lgpl.html)
     **/
    

    $.homemarket_jseldom = function (d) {
        if (2 == arguments.length && $.isPlainObject(arguments[1]))return arrVer.apply(this, [arguments[0], [arguments[1]]]);
        if (1 == arguments.length || 2 == arguments.length && !$.isArray(arguments[1]))return nonArrVer.apply(this, arguments);
        if (2 == arguments.length)return arrVer.apply(this, arguments)
    };

    var categoryAjaxProcess = function(href) {
        var shop_before = '.shop-loop-before',
            shop_after = '.shop-loop-after',
            shop_container = '.archive-products .products',
            shop_info = '.archive-products .woocommerce-info',
            $shop_parent = $(shop_before).parent(),
            show_toolbar = $(shop_before).data('show'),
            show_sidebar = '.sidebar-content';

        if (show_toolbar)
            $(shop_before + ',' + shop_after).stop(true).fadeTo('400','0.8').block({message: null, overlayCSS: {opacity: 0.6}});
        if (show_sidebar)
            $(show_sidebar).stop(true).fadeTo('400','0.8').block({message: null, overlayCSS: {opacity: 0.6}});

        if ($(shop_container).length)
            $(shop_container).html('').addClass('yith-wcan-loading');
        else
            $(shop_info).html('').addClass('yith-wcan-loading products');

        $('.yith-woo-ajax-navigation, .yith-wcan-list-price-filter').addClass('loading');

        var cart_content, widget_cart;

        if (widget_cart = $('.sidebar-content .widget_shopping_cart').get(0)) {
            cart_content = $(widget_cart).html();
        }

        $.ajax({
            url    : href,
            success: function (response) {
                var $parent = $(shop_container).parent(),
                    $response = $(response);

                // products container
                if ($response.find(shop_container).length) {
                    $parent.html($response.find(shop_container));
                } else {
                    $parent.html($response.find('.woocommerce-info'));
                    $parent.find('.woocommerce-info').addClass('products');
                }

                if ($(shop_before + ',' + shop_after).get(0)) { 
                    $(shop_before + ',' + shop_after).stop(true).css('opacity', '1').unblock();
                    $(show_sidebar).stop(true).css('opacity', '1').unblock();
                }

                // top toolbar
                if ($response.find(shop_before).length) {
                    if ($(shop_before).length == 0) {
                        $.homemarket_jseldom(shop_before).insertAfter($(shop_container));
                    }

                    $(shop_before)
                        .html($response.find(shop_before).html())
                        .show();
                } else {
                    $(shop_before).empty();
                }

                // bottom toolbar
                if ($response.find(shop_after).length) {
                    $(shop_after).html($response.find(shop_after).html()).show();
                } else {
                    $(shop_after).empty();
                }

                /*$('.sidebar-content').each(function(index) {
                    var $this = $(this),
                        $that = $($response.find('.sidebar-content').get(index));

                    $this.html($that.html());
                });*/

                //update browser history (IE doesn't support it)
                if (!navigator.userAgent.match(/msie/i)) {
                    window.history.pushState({"pageTitle": response.pageTitle}, "", href);
                }

                //trigger ready event
                $(document).trigger("yith-wcan-ajax-filtered");

                if (widget_cart = $('.sidebar-content .widget_shopping_cart').get(0)) {
                    $('.sidebar-content .widget_shopping_cart').html(cart_content);
                    if ( $.cookie( 'woocommerce_items_in_cart' ) > 0 ) {
                        $( '.hide_cart_widget_if_empty' ).closest( '.widget_shopping_cart' ).show();
                    } else {
                        $( '.hide_cart_widget_if_empty' ).closest( '.widget_shopping_cart' ).hide();
                    }
                }
            }
        });
    };

    var categoryAjax = function () {
        // add class in price filter widget
        // $('.widget_price_filter').addClass('yith-wcan-list-price-filter');

        if (theme.category_ajax) {

            // order by ajax
            $( '.woocommerce-ordering' ).off( 'change', 'select.orderby' ).on( 'change', 'select.orderby', function(e) {
                e.preventDefault();

                var $this = $(this),
                    $form = $this.closest('form'),
                    href = '?' + $form.serialize();

                categoryAjaxProcess(href);
            });

            // view ajax
            $( '.woocommerce-viewing' ).off( 'change', 'select.count' ).on( 'change', 'select.count', function(e) {
                e.preventDefault();

                var $this = $(this),
                    $form = $this.closest('form'),
                    href = '?' + $form.serialize();

                categoryAjaxProcess(href);
            });

            // pagination ajax
            $( '.woocommerce-pagination' ).off( 'click', 'a.page-numbers' ).on( 'click', 'a.page-numbers', function(e) {
                e.preventDefault();

                var href = this.href;

                categoryAjaxProcess(href);
            });

            // for price filter
            $('body').on( 'change', '.list-price-filter.ajax-product-filter li input', function(e) { 
                var $min_price = 'min_price=' + $(this).data('min'),
                    $max_price = 'max_price=' + $(this).data('max'),
                    $current_url = $(location).attr('href'),
                    $main_url = $(location).attr('hostname') + $(location).attr('pathname');
                
                if ( $current_url.indexOf('page') >= 0 ) {
                    $current_url = $current_url.replace("page/1/", "");
                    $current_url = $current_url.replace("page/2/", "");
                }

                if ( $current_url.indexOf('=') >= 0 ) {
                    console.log("current" + $current_url);
                    var href;
                    $current_url = $current_url.replace(/&max_price=([0-9]+)/g, "");
                    $current_url = $current_url.replace(/&min_price=([0-9]+)/g, "");
                    $current_url = $current_url.replace(/\?min_price=([0-9]+)/g, "");
                    
                    if ( !$(this).is(':checked') ) {
                        href = $current_url;
                    } else {
                        if ( $current_url.indexOf('=') >=0 ) {
                            href = $current_url + '&' + $min_price + '&' + $max_price; 
                        } else {
                            href = $current_url + '?' + $min_price + '&' + $max_price; 
                        }
                    }
                } else {
                    href = $current_url + '?' + $min_price + '&' + $max_price;
                    if ( !$(this).is(':checked') ) {
                        href = '?';
                    }
                }
                
                categoryAjaxProcess(href); 

                $(this).parent('li').siblings().find('input[type="checkbox"]:checked').removeAttr('checked');
                
            } );

        } else {
            $(document).on('change', '.woocommerce-viewing select.count', function() {
                $(this).closest('form').submit();
            });
        }
    };

    var ajaxFiltered = function() {
        var shop_before = '.shop-loop-before',
            shop_after = '.shop-loop-after',
            shop_container = '.archive-products .products',
            show_sidebar = '.sidebar-content',
            $shop_parent = $(shop_before).parent();

        if ($(shop_before + ',' + shop_after).get(0)) { 
            $(shop_before + ',' + shop_after).stop(true).fadeTo('400','1').unblock();
            $(show_sidebar).stop(true).css('opacity', '1').unblock();
        }
        
        if ($(shop_container).find('.product').get(0)) {
            $(shop_before + ',' + shop_after).show().data('show', true);
            $(show_sidebar).show().data('show', true);
        } else {
            $(shop_before + ',' + shop_after).hide().data('show', false);
            $(show_sidebar).hide().data('show', false);
        }

         homemarket_init();

        $( '.woocommerce-ordering' ).off( 'change', 'select.orderby' ).on( 'change', 'select.orderby', function() {
            $( this ).closest( 'form' ).submit();
        });

        // category ajax
        categoryAjax();
    };

    // function ajaxInitialize() {

    //     // caching some vars
    //     var $container = $( theme.wc_shop_container );

    //     var WATF_Sender = {
    //         query: {},
    //         request: '',
    //         post: function( $container ){

    //             // preparing for submit
    //             var request = this.request;
                
    //             var $filters = $( '.products-content' );

    //             var shop_before = '.shop-loop-before',
    //                 shop_after = '.shop-loop-after',
    //                 shop_container = '.archive-products .products',
    //                 $shop_parent = $(shop_before).parent();
                
    //             $container
    //                 .addClass( 'watf-loading' )
    //                 .html( '<div class="watf-loading-spinner"><span class="watf-spinner"></span></div>' );

    //             // $filters.stop(true).fadeTo('400','0.8').block({message: null, overlayCSS: {opacity: 0.6}});

    //             $.post( request )
    //                 .done( function( response ){
    //                     $container.removeClass( 'watf-loading' );

    //                     if( $( response ).find( theme.wc_shop_container ).length > 0 ) {
    //                         $container.html( $( response ).find( theme.wc_shop_container ).html() );
    //                     } else {
    //                         $container.html( $( response ).find( '.woocommerce-info' ) );
    //                     }

    //                     //result count
    //                     if( $( response ).find( theme.wc_count_container ).length > 0 ) {
    //                         $( theme.wc_count_container ).html( $( response ).find( theme.wc_count_container ).html() );
    //                     }

    //                     //update browser history (IE doesn't support it)
    //                     if ( !navigator.userAgent.match( /msie/i ) ) {
    //                         window.history.pushState({ "pageTitle": response.pageTitle },"", request );
    //                     }


    //                     // $('.shop-loop-before').html( $( response ).find( '.shop-loop-before' ).html() );
    //                     // $('.shop-loop-after').html( $( response ).find( '.shop-loop-after' ).html() );
    //                     categoryAjax();
    //                     homemarket_init();

    //                     // $filters.stop(true).css('opacity', '1').unblock();

    //                 } ).fail( function(){
    //                     $container
    //                         .removeClass( 'watf-loading' )
    //                         .html( '<div class="woocommerce-info">' + theme.error_text + '</div>' );
    //                 } );

    //             return this;
    //         },
    //         isEmpty: function( obj ) {

    //             // null and undefined are "empty"
    //             if (obj == null) return true;

    //             // Assume if it has a length property with a non-zero value
    //             // that that property is correct.
    //             if (obj.length > 0)    return false;
    //             if (obj.length === 0)  return true;

    //             // Otherwise, does it have any properties of its own?
    //             // Note that this doesn't handle
    //             // toString and valueOf enumeration bugs in IE < 9
    //             for (var key in obj) {
    //                 if (hasOwnProperty.call(obj, key)) return false;
    //             }

    //             return true;
    //         },
    //         getURL: function(){
    //             return window.location.protocol + "//" + ( window.location.host + "/" + window.location.pathname.replace(/\/page\/\d+\//i, '/') ).replace( '//', '/' );
    //         },
    //         getQuery: function(){
    //             var queryString = [];

    //             $.each( this.query, function( key, value ){
    //                 if (value !== '') {
    //                     queryString.push( key + '=' + value );
    //                 }
    //             } );

    //             return queryString.join( '&' );
    //         },
    //         PrepareRequest: function(){
    //             this.request = this.isEmpty( this.query ) ? this.getURL() : this.getURL() + '?' + this.getQuery();
    //             return this;
    //         },
    //         ParseQueryString: function() {
    //             var vars = {}, hash;
    //             if (window.location.href.indexOf('?') > 0) {
    //                 var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    //                 for(var i = 0; i < hashes.length; i++)
    //                 {
    //                     hash = hashes[i].split('=');
    //                     vars[hash[0]] = hash[1];
    //                 }
    //             }
    //             this.query = vars;
    //             return this;
    //         }
    //     }


    //     // count number of selected terms for each taxonomy
    //     $( '.watf-filter' ).on( 'change', 'input', function(){
    //         $(this).closest('form').submit();
    //     } );


    //     // on form submit
    //     $( document ).on( 'submit', '.woocommerce-atf-filters', function(){

    //         // vars for build url
    //         var sender = WATF_Sender.ParseQueryString();

    //         var $filters = $( '.watf-filter', this );

    //         var filters = $filters.find( 'input[type="checkbox"]:checked' ).map( function(){
    //             return this.value;
    //         } ).get().join(',');

    //         sender.query[ $filters.data( 'taxonomy' ) ] = filters;
            
    //         sender.PrepareRequest().post( $container );

    //         return false;
    //     } );

    //     // for price filter
    //     // $('body').on( 'change', '.list-price-filter.ajax-product-filter li input', function(e) { 
    //     //     var sender = WATF_Sender.ParseQueryString();
    //     //     sender.query[ 'min_price' ] = $(this).data('min');
    //     //     sender.query[ 'max_price' ] = $(this).data('max');

    //     //     $(this).parent('li').siblings().find('input[type="checkbox"]:checked').removeAttr('checked');

    //     //     if (!$(this).is(':checked')) {
    //     //         sender.query[ 'min_price' ] = sender.query[ 'max_price' ] = '';
    //     //     }
    //     //     sender.PrepareRequest().post( $container );
    //     // } );
    // }

    $(function() {
        // yith woo ajax filter events
        if (typeof yith_wcan != 'undefined') {
            yith_wcan.container = '.archive-products .products';
            yith_wcan.pagination = '.shop-loop-before';
            yith_wcan.result_count = '.shop-loop-after';
        }

        $(document).ready(function() {
            ajaxFiltered();
        });

        $(document).on('yith-wcan-ajax-filtered', function() {
            ajaxFiltered();
        });

        categoryAjax();

        // product filter ajax
        if (theme.prdctfltr_ajax) {
            // select count
            $(document).on( 'change', '.woocommerce-viewing select.count', function() {
                $( this ).closest( 'form' ).submit();
            });
            // page number
            $(document).on( 'click', '.woocommerce-pagination a.page-numbers', function(e) {
                theme.scrolltoContainer($('.shop-loop-before'));
            });
        }
        
        // ajaxInitialize();
    });

}).apply(this, [window.theme, jQuery]);
// ----------------- Homemarket Ajax Controller end ----------------------------

// Woocommerce Qty Field
(function(theme, $) {
    "use strict";
    theme = theme || {};

    $.extend(theme, {

        WooQtyField: {

            initialize: function() {

                this.build()
                    .events();

                return this;
            },

            build: function() {
                var self = this;

                // Target quantity inputs on product pages
                $( 'input.qty:not(.product-quantity input.qty)' ).each( function() {
                    var min = parseFloat( $( this ).attr( 'min' ) );

                    if ( min && min > 0 && parseFloat( $( this ).val() ) < min ) {
                        $( this ).val( min );
                    }
                });

                $( document ).off('click', '.qty-up, .qty-down').on( 'click', '.qty-up, .qty-down', function() {

                    // Get values
                    var $qty		= $( this ).closest( '.quantity' ).find( '.qty' ),
                        currentVal	= parseFloat( $qty.val() ),
                        max			= parseFloat( $qty.attr( 'max' ) ),
                        min			= parseFloat( $qty.attr( 'min' ) ),
                        step		= $qty.attr( 'step' );

                    // Format values
                    if ( ! currentVal || currentVal === '' || currentVal === 'NaN' ) currentVal = 0;
                    if ( max === '' || max === 'NaN' ) max = '';
                    if ( min === '' || min === 'NaN' ) min = 0;
                    if ( step === 'any' || step === '' || step === undefined || parseFloat( step ) === 'NaN' ) step = 1;

                    // Change the value
                    if ( $( this ).is( '.qty-up' ) ) {

                        if ( max && ( max == currentVal || currentVal > max ) ) {
                            $qty.val( max );
                        } else {
                            $qty.val( currentVal + parseFloat( step ) );
                        }

                    } else {

                        if ( min && ( min == currentVal || currentVal < min ) ) {
                            $qty.val( min );
                        } else if ( currentVal > 0 ) {
                            $qty.val( currentVal - parseFloat( step ) );
                        }

                    }

                    // Trigger change event
                    $qty.trigger( 'change' );
                });

                return self;
            },

            events: function() {
                var self = this;

                $(document).ajaxComplete(function(event, xhr, options) {
                    self.build();
                });

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);

// Woocommerce Widget Toggle
(function(theme, $) {
    "use strict";
    theme = theme || {};

    var instanceName = '__wooWidgetToggle';

    var WooWidgetToggle = function($el, opts) {
        return this.initialize($el, opts);
    };

    WooWidgetToggle.defaults = {

    };

    WooWidgetToggle.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, WooWidgetToggle.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $el = this.options.wrapper;

            $el.parent().removeClass('closed');
            if (!$el.find('.toggle').length) {
                $el.append('<span class="toggle"></span>');
            }
            $el.find('.toggle').click(function() {
                if ($el.next().is(":visible")){
                    $el.parent().addClass('closed');
                } else {
                    $el.parent().removeClass('closed');
                }
                $el.next().stop().slideToggle(200);
                //theme.refreshVCContent();
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        WooWidgetToggle: WooWidgetToggle
    });

    // jquery plugin
    $.fn.themeWooWidgetToggle = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.WooWidgetToggle($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Mini Cart
(function(theme, $) {
    "use strict";
    theme = theme || {};

    if ( theme.mini_cart_enable ) {

        /* toggle mini_cart */
        $('body').on( 'click', '.header-cart .site-header__cart-toggle', function(event) {

            if ( $(window).width() > 1024 && $(window).height() > 768 ) {
                event.preventDefault();
                $('html').toggleClass('opened');
                $('.homemarket-mini-cart').toggleClass('opened');
                $('#ht-container').toggleClass('opened');
                event.stopPropagation();
            } else {
                event.stopPropagation();
            }

        } );

        /* close mini_cart */
        $('body').on( 'click', function(event) {

            if( $('.homemarket-mini-cart').hasClass('opened') ) {
                if ( !$(event.target).is('.homemarket-mini-cart') && !$(event.target).is('.header-cart .site-header__cart-toggle') && ( $('.homemarket-mini-cart').has(event.target).length === 0 ) ) {
                    $('.homemarket-mini-cart').removeClass('opened');
                    $('#ht-container').removeClass('opened');
                    $('html').removeClass('opened');
                }
            }

        } );
    }

}).apply(this, [window.theme, jQuery]);

// Masonry Grid
(function(theme, $) {
    "use strict";
    theme = theme || {};

    $('.masonry_image_grid#masonry_grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-item'
    });

}).apply(this, [window.theme, jQuery]);

// Init Homemarket Theme

function homemarket_init() {
    "use strict";
    // Carousel
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themeCarousel'])) {

            $(function() {
                $('[data-plugin-carousel]:not(.manual), .homemarket-carousel:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeCarousel(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Woo Widget Toggle
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themeWooWidgetToggle'])) {

            $(function() {
                $('.widget_product_categories, .widget_price_filter, .widget_layered_nav, .widget_layered_nav_filters, .widget_rating_filter, .ajax_filter_taxonomies, .ajax-product-filter, .widget_best_seller_products').find('.sidebar-title').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeWooWidgetToggle(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Woocommerce Grid/List Toggle
    (function($) {

        'use strict';

        if ($.cookie && $.cookie('gridcookie')) {
            var $toggle = $('.gridlist-toggle');
            if ($toggle.get(0)) {
                var $parent = $toggle.parent().parent().parent();
                if ($parent.find('.products').hasClass('grid')) {
                    $.cookie('gridcookie', 'grid', { path: '/' });
                } else if ($parent.find('ul.products').hasClass('list')) {
                    $.cookie('gridcookie', 'list', { path: '/' });
                } else {
                    $parent.find('ul.products').addClass($.cookie('gridcookie'));
                }
            }
        }

        if ($.cookie && $.cookie('gridcookie') == 'grid') {
            $('.gridlist-toggle #grid').addClass('active');
            $('.gridlist-toggle #list').removeClass('active');
        }

        if ($.cookie && $.cookie('gridcookie') == 'list') {
            $('.gridlist-toggle #list').addClass('active');
            $('.gridlist-toggle #grid').removeClass('active');
        }

        if ($.cookie && $.cookie('gridcookie') == null) {
            var $toggle = $('.gridlist-toggle');
            if ($toggle.get(0)) {
                var $parent = $toggle.parent().parent().parent();
                $parent.find('ul.products').addClass('grid');
            }
            $('.gridlist-toggle #grid').addClass('active');
            if ($.cookie)
                $.cookie('gridcookie', 'grid', { path: '/' });
        }

    }).apply(this, [jQuery]);
}

(function(theme, $) {

    'use strict';

    $(document).ready(function() {

        // Init Homemarket Theme
        homemarket_init();

        // Woocommerce Quick View
        if (typeof theme.WooQuickView !== 'undefined') {
            theme.WooQuickView.initialize();
        }

        // Woocommerce Qty Field
        if (typeof theme.WooQtyField !== 'undefined') {
            theme.WooQtyField.initialize();
        }

        // Woocommerce Ajax Price Filter
        if (typeof theme.WooAjaxPriceFilter !== 'undefined') {
            theme.WooAjaxPriceFilter.initialize();
        }
    });

}).apply(this, [window.theme, jQuery]);

(function (theme, $, undefined) {
    "use strict";

    // Woocommerce Product Image Slider
    if (typeof theme.WooProductImageSlider !== 'undefined') {
        theme.WooProductImageSlider.initialize();
    }

    $(document).ready(function(){
        $(window).bind('vc_reload', function() {
            $('.type-product').addClass('product');
            $('.type-post').addClass('post');
            $('.type-portfolio').addClass('portfolio');
            $('.type-member').addClass('member');
            $('.type-block').addClass('block');
        });
    });

    if (theme.rtl) {
        $(document).bind('vc-full-width-row', function() {
            $('[data-vc-full-width="true"]').each(function() {
                var $this = $(this),
                    left = $this.css('left');

                $this.css('right', left);
                $this.css('left', 'auto');
            });
        });
    }

})( window.theme, jQuery );

// Index page introLoading
(function(theme, $) {
    "use strict";
    theme = theme || {};

    if ( !$("body").hasClass('home') ) {
        $('#introLoader').remove();
    }

    $(window).bind("load", function() {
        $('#introLoader').fadeOut(500);
    });

}).apply(this, [window.theme, jQuery]);