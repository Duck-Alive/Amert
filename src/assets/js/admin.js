// Admin custom script

jQuery(document).ready(function($) {
    "use strict";
	// nav menu custom options
	
	$('p.field-background-url span.background-field-checkbox input:checked').each(function() {

		$(this).parents('p.field-background-url').find('span.background-field-options').css('display', 'block');

	});
	
    $('p.field-background-url span.background-field-checkbox').on('click', function() {
        var checkedState =  $(this).find('input').prop('checked');
        if ( checkedState == true ) {
            $(this).next('.background-field-options').css('display', 'block');
        } else {
            $(this).next('.background-field-options').css('display', 'none');
        }
    });

	//Theme Import page options

    $('#demo_toggle').on('click', function() {
		$('#status_toggle').removeClass('active');
		$(this).addClass('active');
		$('.demo-tab').hide();
		$('.theme-browser').show();
    });

    $('.system-status-toggle').on('click', function() {
        $('#status_toggle').trigger('click');
    });

    $('#status_toggle').on('click', function() {
		$('#demo_toggle').removeClass('active');
		$(this).addClass('active');
		$('.demo-tab').hide();
		$('.status-holder').show();
    });

	function alertLeavePage(e) {
        var dialogText = "Are you sure you want to leave?";
        e.returnValue = dialogText;
        return dialogText;
    }

	function addAlertLeavePage() {
        $('.import-demos-area .homemarket-install-demo-button').attr('disabled', 'disabled');
        $(window).bind('beforeunload', alertLeavePage);
    }

    function removeAlertLeavePage() {
        $('.import-demos-area .homemarket-install-demo-button').removeAttr('disabled');
        $(window).unbind('beforeunload', alertLeavePage);
        setTimeout(function() {
            $('#demo_tab #import-status').slideUp().html('');
        }, 3000);
    }

    function showImportMessage(selected_demo, message, count, index) {
        var html = '',
            percent = 0;
        console.log(selected_demo);
        if (selected_demo) {
            html += '<h3>Installing ' + $('#' + selected_demo).html() + '</h3>';
        }
        if (message) {
            html += '<strong>' + message + '</strong>';
        }
        if (count && index) {
            percent = index / count * 100;
            if (percent > 100)
                percent = 100;
            html += '<div class="import-progress-bar"><div style="width:' + percent + '%;"></div></div>';
        }
        $('#demo_tab #import-status').stop().show().html(html);
    }

	// install demo
	$('.homemarket-install-demo-button').live( 'click', function(e) {
		e.preventDefault();
		var $this = $(this),
			selected_demo = $this.data('demo-id'),
			disabled = $this.attr('disabled');

		if (disabled)
			return;

		addAlertLeavePage();

		$('#homemarket-install-demo-type').val(selected_demo);
        $('#homemarket-install-options').slideDown();

        $('html, body').stop().animate({
            scrollTop: $('#homemarket-install-options').offset().top - 50
        }, 600);
	} );

	// cancel import button
    $('#homemarket-import-no').click(function() {
        $('#homemarket-install-options').slideUp();
        removeAlertLeavePage();
    });

    // import
    $('#homemarket-import-yes').click(function() {
        var demo = $('#homemarket-install-demo-type').val(),
            options = {
                demo: demo,
                reset_menus: $('#homemarket-reset-menus').is(':checked'),
                reset_widgets: $('#homemarket-reset-widgets').is(':checked'),
                import_dummy: $('#homemarket-import-dummy').is(':checked'),
                import_widgets: $('#homemarket-import-widgets').is(':checked'),
                import_options: $('#homemarket-import-options').is(':checked'),
            };

        if (options.demo) {
            showImportMessage(demo, '');
            homemarket_import_options(options);
        }
        $('#homemarket-install-options').slideUp();
    });

    // import options
    function homemarket_import_options(options) {
        if (!options.demo) {
            removeAlertLeavePage();
            return;
        }
        if (options.import_options) {
            var demo = options.demo,
                data = {'action': 'homemarket_import_options', 'demo': demo};

            showImportMessage(demo, 'Importing theme options');

            $.post(ajaxurl, data, function(response) {
                if (response) showImportMessage(demo, response);
                homemarket_reset_menus(options);
            }).fail(function(response) {
                    homemarket_reset_menus(options);
                });
        } else {
            homemarket_reset_menus(options);
        }
    }

    // reset_menus
    function homemarket_reset_menus(options) {
        if (!options.demo) {
            removeAlertLeavePage();
            return;
        }
        if (options.reset_menus) {
            var demo = options.demo,
                data = {'action': 'homemarket_reset_menus'};

            $.post(ajaxurl, data, function(response) {
                if (response) showImportMessage(demo, response);
                homemarket_reset_widgets(options);
            }).fail(function(response) {
                homemarket_reset_widgets(options);
            });
        } else {
            homemarket_reset_widgets(options);
        }
    }

    // reset widgets
    function homemarket_reset_widgets(options) {
        if (!options.demo) {
            removeAlertLeavePage();
            return;
        }
        if (options.reset_widgets) {
            var demo = options.demo,
                data = {'action': 'homemarket_reset_widgets'};

            $.post(ajaxurl, data, function(response) {
                if (response) showImportMessage(demo, response);
                homemarket_import_dummy(options);
            }).fail(function(response) {
                homemarket_import_dummy(options);
            });
        } else {
            homemarket_import_dummy(options);
        }
    }

    // import dummy content
    var dummy_index = 0, dummy_count = 0, dummy_process = 'import_start';
    function homemarket_import_dummy(options) {
        if (!options.demo) {
            removeAlertLeavePage();
            return;
        }
        if (options.import_dummy) {
            var demo = options.demo,
                data = {'action': 'homemarket_import_dummy', 'process':'import_start', 'demo': demo};

            dummy_index = 0;
            dummy_count = 0;
            dummy_process = 'import_start';
            homemarket_import_dummy_process(options, data);
        } else {
            homemarket_import_widgets(options);
        }
    }

    // import dummy content process
    function homemarket_import_dummy_process(options, args) {
        var demo = options.demo;
        $.post(ajaxurl, args, function(response) {
            if (response && /^[\],:{}\s]*$/.test(response.replace(/\\["\\\/bfnrtu]/g, '@').
                replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
                replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                response = $.parseJSON(response);
                if (response.process != 'complete') {
                    var requests = {'action': 'homemarket_import_dummy'};
                    if (response.process) requests.process = response.process;
                    if (response.index) requests.index = response.index;

                    requests.demo = demo;
                    homemarket_import_dummy_process(options, requests);

                    dummy_index = response.index;
                    dummy_count = response.count;
                    dummy_process = response.process;

                    showImportMessage(demo, response.message, dummy_count, dummy_index);
                } else {
                    showImportMessage(demo, response.message);
                    homemarket_import_widgets(options);
                }
            } else {
                showImportMessage(demo, 'Failed importing! Please check the "System Status" tab to ensure your server meets all requirements for a successful import. Settings that need attention will be listed in red.');
                homemarket_import_widgets(options);
            }
        }).fail(function(response) {
            if (dummy_index < dummy_count) {
                var requests = {'action': 'homemarket_import_dummy'};
                requests.process = dummy_process;
                requests.index = ++dummy_index;
                requests.demo = demo;

                homemarket_import_dummy_process(options, requests);
            } else {
                var requests = {'action': 'homemarket_import_dummy'};
                requests.process = dummy_process;
                requests.demo = demo;

                homemarket_import_dummy_process(options, requests);
            }
        });
    }

    // import widgets
    function homemarket_import_widgets(options) {
        if (!options.demo) {
            removeAlertLeavePage();
            return;
        }
        if (options.import_widgets) {
            var demo = options.demo,
                data = {'action': 'homemarket_import_widgets', 'demo': demo};

            showImportMessage(demo, 'Importing widgets');

            $.post(ajaxurl, data, function(response) {
                if (response) showImportMessage(demo, response);
                homemarket_import_finished(options);
            }).fail(function(response) {
                homemarket_import_finished(options);
            });
        } else {
            homemarket_import_finished(options);
        }
    }

    // import finished
    function homemarket_import_finished(options) {
        if (!options.demo) {
            removeAlertLeavePage();
            return;
        }
        var demo = options.demo;
        setTimeout(function() {
            showImportMessage(demo, 'Finished! Please visit your site.');
            setTimeout(removeAlertLeavePage, 3000);
        }, 3000);
    }

    /*============================================ 
                menu marker form validate
    ==============================================*/

    if ( $('#addmarker').length ) {
        $("#marker-background-color").wpColorPicker();

        $("#addmarker").submit( function(e) {
            if ( $("#marker-name").val() == "" ) { 
                e.preventDefault();

                $("#marker-name").parent().addClass("form-invalid");
                $("#marker-name").focus();
            }
        });
    }

    if ( $('#addedmarker .row-actions').length ) {
        $('.row-actions .delete a').on('click', function(){
            var r = confirm("It will be deleted permanetly. Do you want to delete it?");
            if(r == false) {
                return false;
            }
        });
    }

    if ( $('#marker-background-color-edit').length ) {
        $('#marker-background-color-edit').wpColorPicker();

        $('#addmarker').submit( function(e) {
            if ( $('#marker-name-edit').val() == '' ) { 
                e.preventDefault();

                $('#marker-name-edit').parent().addClass('form-invalid');
                $('#marker-name-edit').focus();
            }
        });
    }                    

});

/*============================================ 
                Price range add
==============================================*/

jQuery(document).ready(function($) {
    "use strict";

    if ( $('.hm-add-new-range-button').length ) {
        $( '.hm-add-new-range-button .button' ).off( 'click' ).on( 'click', function(e) { 
            e.preventDefault();

            var $range_filter = $(this).closest('.widget-content').find('.range-filter');
            var nIndex = $range_filter.find('input').length / 2,
                field_name = $range_filter.data('field_name');

            var new_range = '';
            new_range += '<input type="text" name="' + field_name + '[' + nIndex + '][min]" />';
            new_range += '<input type="text" name="' + field_name + '[' + nIndex + '][max]" />';

            $range_filter.append( new_range );
        } );
    }
});