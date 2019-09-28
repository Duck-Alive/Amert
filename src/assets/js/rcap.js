/**
 * The Javascript Module for Richardson as 'RCAP'
 *
 * @project Richardson (RCAP)
 * @license The Plumtree Group <info@plumtreegroup.net>
 * @module RCAP
 */

/**
 * All library code works which uses '$'
 * jQuery works without any conflict
 *
 * @name {jQuery} jQuery.noConflict()
 * @param {bolean} true
 */
jQuery.noConflict();

// Declare'RCAP' variable
var RCAP = (function(){ var $this = {}; return $this;}());
// ModuleRegister array store in 'RCAP'
RCAP.ModuleRegister = (function(){var $this = []; return $this;}()); 
// Data array store in 'RCAP'
RCAP.Data = (function(){var $this = {}; return $this;}());

/**
 * Push 'RCAP' ModuleRegister
 *
 * @param {string} name
 * @param {number} weight
 */
RCAP.ModuleRegister.push({name: 'RCAP', weight: 100});

/**
 * Push 'RCAP.Events' ModuleRegister
 *
 * @param {string} name
 * @param {number} weight
 */
RCAP.ModuleRegister.push({name: 'RCAP.Events', weight: 10});

/**
 * Sort ModuleRegister Array
 *
 * @param {number} a
 * @param {number} b
 */
RCAP.ModuleRegister.sort(function(a, b) { return a.weight - b.weight; });

/**
 * RegisterModules
 *
 * @name registerModules
 * @param {array} RCAP
 */
function registerModules(RCAP) {
		 
	var self,
		globalPath	= location.href.split( '/' ), // Global Path by Location
		urlPath		= location.pathname, // Location Path Name
		urlPath_cms	= urlPath.split('/'), // Split Location Path Name by '/'
		protocol	= globalPath[0], // 'http/https' Protocol
		host		= globalPath[2], // 'host/domain' Name
		baseUrl		= protocol + '//' + host, // Base Url 
		hash		= location.hash, // Hash Params;
		pointerEvent;

	if(typeof window.orientation !== 'undefined') {
		pointerEvent = 'click touchstart';
	} else {
		pointerEvent = 'click';
	}
	
	for (var mod in RCAP.ModuleRegister) {
		var module = RCAP.ModuleRegister[mod].name;
		switch(module) {
			case 'RCAP' :
				var RCAP = (function($, $this) {
					
					if(!$this) {
						var $this = {};
					}
					
					// these get updated on window resize. available to any class for easy reference.
					$this.winWidth = 0;
					$this.winHeight = 0;
					$this.docWidth = 0;
					$this.docHeight = 0;
					$this.vScroll = 0;
					$this.hScroll = 0;

					$this.init = function() {
						//console.log('RCAP.init()');
							
						//RCAP.Events.trigger(RCAP.Events.PAGE_LOADED);
						RCAP.Events.bind(RCAP.Events.WINDOW_SCROLL, scrollHandler);
						RCAP.Events.bind(RCAP.Events.WINDOW_RESIZE, resizeHandler);
						RCAP.Events.bind(RCAP.Events.AJAX_COMPLETED, ajaxCompleted);
						
						$(document).ready(function(e) {
							RCAP.Events.trigger(RCAP.Events.PAGE_LOADED, {
								winWidth: $(window).width(),
								winHeight: $(window).height(),
								docWidth: $(document).width(),
								docHeight: $(document).height(),
								vScroll: $(document).scrollTop(),
								hScroll: $(document).scrollLeft()
							});
						});
						
						$(window).resize(function(e){
							RCAP.Events.trigger(RCAP.Events.WINDOW_RESIZE, {
								winWidth: $(window).width(),
								winHeight: $(window).height(),
								docWidth: $(document).width(),
								docHeight: $(document).height(),
								vScroll: $(document).scrollTop(),
								hScroll: $(document).scrollLeft()
							});
							$(window).scroll();
						});
						
						$(window).load(function(e){
							//RCAP.Events.trigger(RCAP.Events.WINDOW_LOADED);
							RCAP.Events.trigger(RCAP.Events.WINDOW_LOADED, {
								winWidth: $(window).width(),
								winHeight: $(window).height(),
								docWidth: $(document).width(),
								docHeight: $(document).height(),
								vScroll: $(document).scrollTop(),
								hScroll: $(document).scrollLeft()
							});
							$(window).resize();
						});
						
						$(window).scroll(function(e){
							RCAP.Events.trigger(RCAP.Events.WINDOW_SCROLL, {
								vScroll: $(document).scrollTop(),
								hScroll: $(document).scrollLeft()
							});
						});
						
						$(document).ajaxComplete(function() {
							RCAP.Events.trigger(RCAP.Events.AJAX_COMPLETED);
						});
			
						for(var m in RCAP.ModuleRegister) {
							if(RCAP.ModuleRegister[m].init) {
								eval(RCAP.ModuleRegister[m].init);
							}
						}
						
						$(window).resize();
						$(window).scrollTop(1);
					};
					
					resizeHandler = function(e, parms) {
						//console.log('resizeHandler');
					}
					
					scrollHandler = function(e, parms) {
						$this.vScroll = parms.vScroll; // Page Vertical Scroll
						$this.hScroll = parms.hScroll; // Page Horizontal Scroll
					};
					
					ajaxCompleted = function(e, parms) {
						//console.log('ajaxCompleted');
					}
					
					return $this;
				}(jQuery, RCAP || {} ));
			break; 
			
			case 'RCAP.Events' :

				RCAP.Events = (function($) {
					var $this = {}, 
						el = $(window),
						events = [],
						paused,
						stack = [],
						delayTimers = [];
					
					// Event key contants - Register All event keys here!
					$this.WINDOW_LOADED = "windowLoaded";
					$this.PAGE_LOADED = "pageLoaded";
					$this.AJAX_COMPLETED = 'ajaxCompleted';
					$this.WINDOW_RESIZE = 'windowResize';
					$this.WINDOW_SCROLL = 'windowScroll';
					
					$this.init = function() {
						//console.log('events init');
					}
					
					$this.register = function(key) {
						if(!events[key]) {
							events[key] = {key:key, active:true};
							//console.log('registered '+key);
						} else {}
					}
					
					$this.trigger = function(key, e) { 
						//console.log('trigger '+key);
						
						if(events[key] && events[key].active) {
							$(el).trigger(events[key].key, e);
							//console.log(key+' triggered');
						} else if(!events[key]) { 
							$this.register(key);
							$(el).trigger(events[key].key, e);
							//console.log(key+' registered and triggered');
						}
					}
					
					$this.bind = function(key, method) { 
						if(events[key]) {
							$(el).bind(events[key].key, method);
						} else { // auto-register if non-extant
							$this.register(key);
							$(el).bind(events[key].key, method);
						} 
						//console.log(key+ ' bound to '+method.toString());
					}
					$this.unbind = function(key, method) { 
						$(el).unbind(events[name], method); 
					}
					
					$this.sched = function(delay, key, e) {
						var t = setTimeout(function(){ $this.trigger(key, e); }, delay);
						delayTimers.push(t);
						return delayTimers.length - 1;
					}, 
					$this.unsched = function(timerIndex) {
						clearTimeout(delayTimers[timerIndex]);
						delayTimers.splice(timerIndex, 1);
					}
					
					return $this;
				}(jQuery));
			break;
			
			case 'RCAP.MyDesigns' :
				
				RCAP.MyDesigns = (function($, $this) {
					var $this = {},
						filterCategory = ".filter-category",
						filterSearch = ".filter-search",
						wrapCategory = '.md-category',
						addCategory = '.add-category',
						assignCategory = '.assign-category',
						selectCategory = '.select-category a:not(.add-category)',
						listCategory = '.list-category',
						ddContainer = '.dd-container',
						ddAction = '.dd-action',
						ddToggle = '.dd-toggle',
						ddSelection = '.dd-item',
						ddList = '.dd-list',
						ddDesign = '.dd-action';
						
					$this.init = function() {
						console.log('RCAP.MyDesigns.init()');
						
						$this.SELECT_CATEGORY = "selectCategory";
						$this.FILTER_SEARCH = "filterSearch";
						$this.ADD_CATEGORY = "addCategory";
						$this.ASSIGN_CATEGORY = "assignCategory";
						$this.DD_SELECTION = "ddSelection";
						$this.DD_ACTION = "ddAction";
						$this.AJAX_REQUEST = "ajaxRequest";
						
						//RCAP.Events.bind($this.FILTER_SEARCH, doFilterSearch);
						RCAP.Events.bind($this.ADD_CATEGORY, doAddCategory);
						RCAP.Events.bind($this.ASSIGN_CATEGORY, doAssignCategory);
						RCAP.Events.bind($this.SELECT_CATEGORY, doSelectCategory);
						RCAP.Events.bind($this.DD_ACTION, doDdAction);
						RCAP.Events.bind($this.DD_SELECTION, doDdSelection);

						RCAP.Events.bind(RCAP.Events.AJAX_COMPLETED, doMyDesignAjaxRequest);
						
						$this.myDesignsActions();
					}

					doMyDesignAjaxRequest = function() {
						$(listCategory + ' li:not(.last)').remove();
						
						$(filterCategory+ ' ' +ddSelection).each(function() {
							if( !$(this).hasClass('first') && !$(this).hasClass('last') ) {
								$('<li><a data-iid="'+$(this).find('span').attr('data-iid')+'" href="#">'+$(this).find('span').text()+'</a></li>').insertBefore(listCategory+'>li.last');
							}
						});
						
						$('.md-item').each(function() {
							if( $(this).find('a[data-iid="'+$(this).attr('data-design')+'"]').length ) {
								$(this).find('a[data-iid="'+$(this).attr('data-design')+'"]').addClass('selected');
								$(this).find(assignCategory).html('').append($(this).find('a[data-iid="'+$(this).attr('data-design')+'"]').text());
							}
						});
					}
					
					$this.myDesignsActions = function() {
						$(document).on("change", filterCategory, function(e) {
							RCAP.Events.trigger($this.FILTER_CATEGORY, { elem: e.target });
						});
						
						$(document).on('keyup', filterSearch, function(e) {
							RCAP.Events.trigger($this.FILTER_SEARCH, { elem: e.target });
						});
						
						$(document).on("click", addCategory, function(e) {
							e.preventDefault();
							RCAP.Events.trigger($this.ADD_CATEGORY, { elem: e.target });
						});
					
						$(document).on("click", assignCategory, function(e) {
							e.preventDefault();
							RCAP.Events.trigger($this.ASSIGN_CATEGORY, { elem: e.target });
						});
						
						$(document).on("click", selectCategory, function(e) {
							e.preventDefault();
							RCAP.Events.trigger($this.SELECT_CATEGORY, { elem: e.target });
						});
						
						$(document).on("click", ddAction, function(e) {
							e.preventDefault();
							RCAP.Events.trigger($this.DD_ACTION, { elem: e.target });
						});
						
						$(document).on("click", ddSelection + ':not(.last) span', function(e) {
							e.preventDefault();
							RCAP.Events.trigger($this.DD_SELECTION, { elem: e.target });
						});
						
						
						$(document).on(pointerEvent,'#md_close', function(e) {
							e.preventDefault();
							$('#md_form').trigger("reset");
							$('#md_createcategory').hide();
							$('#md_overlay').hide();
						});
						
						$(document).on(pointerEvent,'.md-cancel', function(e) {
							e.preventDefault();
							$('#md_close').trigger(pointerEvent);
						});
						
						$(document).on('submit','#md_form', function() {
							var validateForm = new VarienForm('md_form', true),
								designAction = 'addDesign',
								designItemId = $(this).parents('.md-createcategory').attr('data-category');
								designValue = doTrimLower($(this).find('.md-cat').val());
								
							if (validateForm.validator.validate()) {
								if( $(this).parents('.md-createcategory').hasClass('md-editcategory') ) {
									designAction = 'editDesign';
								}
								$.ajax({
									url: baseUrl + '/saveandshare/designcategory/'+designAction,
									data: {id: designItemId, cid : $('#customer_id').val(), design_name: designValue},
									type: "POST",
									dataType: "json",
									success: function(response, textStatus){
										if(response.status == 'success') {
											if(designAction == 'editDesign') {
												$this.doEditCategoryItem(designValue, designItemId);
											} else {
												$this.doAddCategoryItem(designValue, response.id);
											}
											if( $('.dd-action-design').attr('data-iid') == designItemId ) {
												$('.dd-action-design').text(designValue);
											}
											$('#design_name').val(designValue);
											$('#md_close').trigger(pointerEvent);
										} else {
											alert(response.message);
										}
									},
									error: function(XHR, textStatus, errorThrown) { 
										alert("Status: " + textStatus); alert("Error: " + errorThrown); 
									}   
								});
							}
						});
						
						$(document).on(pointerEvent, '.md-tags-add, .md-tags-text',function(e) {
							e.preventDefault();
							$('.md-tags.opened').each(function() {
								$(this).removeClass('opened').find('.md-tags-input').val($(this).find('.md-tags-text').text().trim());
								$(this).find('.md-tags-message').text('');
							});
							$(this).parents('.md-tags').addClass('opened').find('.md-tags-input');
						});
						
						$(document).on(pointerEvent, ddSelection + ' a.delete',function(e) {
							self = this;
							var designItemId = $(self).siblings('span').attr('data-iid');
							
							
							$.ajax({
								url: baseUrl + '/saveandshare/designcategory/deleteDesign',
								data: {id: designItemId, cid : $('#customer_id').val()},
								type: "POST",
								success: function(response, textStatus){
									//alert('delete design: ' + response);
									$(self).parent('.dd-item').remove();
									$(listCategory).find('[data-iid="'+designItemId+'"]').parent('li').remove();
									$(filterCategory + ' .dd-item.first > span').trigger(pointerEvent);
									$('.md-item').each(function() {
										if( $(this).attr('data-design') == designItemId) {
											$(this).attr('data-design','');
										}
									});
								},
								error: function(XHR, textStatus, errorThrown) { 
									alert("Status: " + textStatus); alert("Error: " + errorThrown); 
								}   
							});
							
						});
						
						$(document).on(pointerEvent, ddSelection + ' a.edit',function(e) {
							$('#md_createcategory').attr('data-category',$(this).siblings('span').attr('data-iid')).addClass('md-editcategory').show().find('.md-cat').val($(this).siblings('span').text());
							$('#md_overlay').show();
						});
						
						$(document).on('keypress keydown', '.md-tags-input',function(e) {
							if($(this).val().trim() != '' && e.which == 13) {
								$(this).siblings('.md-tags-save').trigger('click');
							}
						});
						
						$(document).on(pointerEvent, '.md-tags-save',function(e) {
							e.preventDefault();
							var tagInput = $(this).parents('.md-tags').find('.md-tags-input').val().trim(),
								tagExp = /^[a-zA-Z, ]+$/,
								designItem = $(this).parents('.md-item'),
								designItemId = designItem.attr('data-id'),
								tagValue = '',
								tagCount = 0;
							
							if(!tagInput.match(tagExp)) {
								//alert('Invalid character(s)');
								$(this).parents('.md-tags').find('.md-tags-message').text('Tag(s) must only contain letters (a-z or A-Z). Use a comma (,) for multiple tags.');
								return false;
							} else {
								$(this).parents('.md-tags').find('.md-tags-message').text('');
							}
							
							if(tagInput.indexOf(',') !== -1) {
								tagInput = tagInput.split(',');
								for (var i = 0; i < tagInput.length; i++) {
									if (tagInput[i].trim() != '') {
										tagValue += tagInput[i].trim() + ', ';
										tagCount = tagCount + 1;
									}
								}
								tagValue = tagValue.trim().slice(0,-1);
							} else {
								tagValue = tagInput;
							}
							
							if(tagCount > 10) {
								$(this).parents('.md-tags').find('.md-tags-message').text('Only 10 tags allowed.');
								return false;
							} else {
								$(this).parents('.md-tags').find('.md-tags-message').text('');
							}
							 
							$.ajax({
								url: baseUrl + '/saveandshare/designcategory/addTags',
								data: {id : designItemId, design_tags: tagValue },
								type: 'POST',
								success: function(html){
									//alert('add tags: ' + html);
									designItem.find('.md-tags-input').val(tagValue);
									designItem.find('.md-tags-text').text(tagValue);
									$('.md-tags.opened').each(function() {
										if( $(this).find('.md-tags-text').text().trim() != '' ) {
											$(this).removeClass('notag');
										}
										$(this).removeClass('opened');
									});
								}
							});
						});
						
						$(document).on(pointerEvent, 'body', function(e) {
							if(!$(e.target).closest(ddContainer).length) {
								$(ddContainer).removeClass('opened');
							}
							if(!$(e.target).closest(wrapCategory).length) {
								$(wrapCategory).removeClass('opened');
							}
							if(!$(e.target).closest('.md-tags').length) {
								$('.md-tags.opened').each(function() {
									$(this).removeClass('opened').find('.md-tags-input').val($(this).find('.md-tags-text').text().trim());
									$(this).find('.md-tags-message').text('');
								});
							}
						});
						
						$(filterCategory+ ' ' +ddSelection).each(function() {
							if( !$(this).hasClass('first') && !$(this).hasClass('last') ) {
								$('<li><a data-iid="'+$(this).find('span').attr('data-iid')+'" href="#">'+$(this).find('span').text()+'</a></li>').insertBefore(listCategory+'>li.last');
							}
						});
						
						$('.md-item').each(function() {
							if( $(this).find('a[data-iid="'+$(this).attr('data-design')+'"]').length ) {
								$(this).find('a[data-iid="'+$(this).attr('data-design')+'"]').addClass('selected');
								$(this).find(assignCategory).text($(this).find('a[data-iid="'+$(this).attr('data-design')+'"]').text());
							}
						});
					}
					
					$this.doEditCategoryItem = function(value, value2) {
						$('.dd-action-design').siblings(ddToggle).find('[data-iid="'+value2+'"]').text(value);
						$(listCategory).find('[data-iid="'+value2+'"]').text(value);
					}
					
					$this.doAddCategoryItem = function(value, value2) {
						$(filterCategory+' '+ddSelection+'.first').show();
						$('<div class="dd-item"><span data-iid="'+value2+'">'+value+'</span> <a href="#" class="delete">delete</a><a href="#" class="edit">edit</a></div>').insertBefore(filterCategory+' '+ddSelection+'.last');
						$('<li><a href="#" data-iid="'+value2+'">'+value+'</a></li>').insertBefore(listCategory + '>li.last');
					}
					
					doTrimLower = function(parm) {
						return parm.trim().toLowerCase();
					}
					
					doDdAction = function(e, parms) {
						if($(parms.elem).parents(ddContainer).hasClass('opened')) {
							$(ddContainer).removeClass('opened');
						} else {
							$(ddContainer).removeClass('opened');
							$(parms.elem).parents(ddContainer).addClass('opened');
						}
					}
					
					doAddCategory = function(e, parms) {
						$('#md_createcategory').show();
						$('#md_overlay').show();
					}
					
					doAssignCategory = function(e, parms) {
						var itemCount = $(parms.elem).parents('.md-item').index() + 1,
							itemRow = Math.round($(parms.elem).parents('.md-grid').innerWidth() / $(parms.elem).parents('.md-item').innerWidth());
							itemClass = 'opened';
						
						if($(parms.elem).parents(wrapCategory).hasClass(itemClass)) {
							$(wrapCategory).removeClass(itemClass + ' fixit');
						} else {
							$(wrapCategory).removeClass(itemClass + ' fixit');
							if( itemCount % itemRow == 0 ) {
								itemClass += ' fixit' ;
							}
							$(parms.elem).parents(wrapCategory).addClass(itemClass);
						}
					}
					
					doSelectCategory = function(e, parms) {
						$(parms.elem).addClass('selected').parent('li').siblings().find('a').removeClass('selected').parents('.md-item').attr('data-design', $(parms.elem).attr('data-iid'));
						$('#design_name').val($(parms.elem).text().trim());
						
						$.ajax({
							url: baseUrl + '/saveandshare/designcategory/assignDesign',
							data: {id : $(parms.elem).parents('.md-item').attr('data-id'), cid: $(parms.elem).parents('.md-item').attr('data-user'), did: $(parms.elem).attr('data-iid') },
							type: 'POST',
							success: function(html){
								//alert('assign: ' + html);
								$(wrapCategory).removeClass('opened');
								$(parms.elem).parents(wrapCategory).find(assignCategory).text($(parms.elem).text());
								if($('.dd-action-design').attr('data-iid') != 'all' && $(parms.elem).parents('.md-item').attr('data-design') != $('.dd-action-design').attr('data-iid') ) {
									$(parms.elem).parents('.md-item').attr('data-design',$(parms.elem).attr('data-iid')).hide();
								}
							}
						});
					}
					
					doDdSelection = function(e, parms) {
						var filterItem = '.md-item',
							designItem = '',
							userItem = '';
						
						$(filterSearch).val('');
						$(parms.elem).parents(ddSelection).addClass('active').siblings(ddSelection).removeClass('active');
						
						$(parms.elem).parents(ddToggle).siblings('.dd-action').text(doTrimLower($(parms.elem).text())).attr('data-iid',doTrimLower($(parms.elem).attr('data-iid')));
						
						$(ddContainer).removeClass('opened');
						
						/*
						if( $('.dd-action-design').attr('data-iid') != 'all' ) {
							designItem = '[data-design="'+$('.dd-action-design').attr('data-iid')+'"]';
							filterItem += designItem;
						}

						if( $('.dd-action-user').length > 0 && $('.dd-action-user').attr('data-iid') != 'all' ) {
							userItem = '[data-user="'+$('.dd-action-user').attr('data-iid')+'"]';
							filterItem += userItem;
						}
						
						
						$(ddContainer).removeClass('opened');
						$('.md-item').addClass('no-display').hide();
						
						$(filterItem).each(function() {
							$(this).removeClass('no-display').show();
						});
						
						if($('.md-item:not(.no-display)').length == 0) {
							$('.no-record').removeClass('no-display');
						} else {
							$('.no-record').addClass('no-display');
						}
						*/
					}
					
					doFilterSearch = function(e, parms) {
						var searchItem = '.md-item',
							searchString = doTrimLower($(parms.elem).val()),
							counter = 0, designItem = '', userItem = '';
						
						if( $('.dd-action-design').attr('data-iid') != 'all' ) {
							designItem = '[data-design="'+$('.dd-action-design').attr('data-iid')+'"]';
							searchItem += designItem;
						}

						if( $('.dd-action-user').length > 0 && $('.dd-action-user').attr('data-iid') != 'all' ) {
							userItem = '[data-user="'+$('.dd-action-user').attr('data-iid')+'"]';
							searchItem += userItem;
						}
						
						//console.warn(searchItem);
						//return false;
						
						$(searchItem).each(function(i,e) {
							var itemText = doTrimLower($(this).find('.md-tags-text').text()) + ', ' + doTrimLower($(this).find('a.md-number > span').text());
							//console.warn(itemText);
							if (itemText.indexOf(searchString) >= 0 && searchString != '') {
								$(this).removeClass('no-display').show();
								//counter = counter + 1;
							} else {	
								$(this).addClass('no-display').hide();
								//counter = counter - 1;
							}
							if(searchString.length == 0) {
								//counter = 0;
								$(this).removeClass('no-display').attr('style','');
							}
						});
						//console.warn($('.md-item:not(.no-display)').length);
						//console.warn(counter);
						if($('.md-item:not(.no-display)').length == 0) {
							$('.no-record').removeClass('no-display');
						} else {
							$('.no-record').addClass('no-display');
						}
					}
					
					return $this
				}(jQuery));
			break;
		}
	}
}

/*** RCAP APP INITIALIZE ***/
jQuery(document).ready(function($) {
	//console.log('RCAP ready');
	'use strict';
	registerModules(RCAP);
	RCAP.init();
});


