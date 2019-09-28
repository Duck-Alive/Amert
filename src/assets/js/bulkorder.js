// key delay function to hold code execution after key up
var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

// show/display bulk order widget
function showBulkWidget() {
    jQuery('#bkodr_main').toggle();
}
// get size list by color id
function getSizes(optn, url) {
    var option = jQuery('option:selected', optn),
        bundleid = option.attr('bundle_id'),
        optionid = option.attr('value'),
        simpid = option.attr('pro_id'),
        row_id = optn.id.split('_')[1];
    if ((optn.value == '') || (typeof (bundleid) === 'undefined' || typeof (optionid) === 'undefined')) {
        setDefaults(row_id);
        return false;
    }
    // send request to controller
    jQuery.get(url, {
        bundle_id: bundleid,
        option_id: optionid,
        simple_id: simpid
    }).done(function (data) {
        var data = jQuery.parseJSON(data);
        if (data.status == 'success') {
            // dump options to size ddl
            //jQuery('#size_'+row_id).html(data.content).trigger('change');
            jQuery('#size_' + row_id).html(data.content);
            jQuery('#size_' + row_id).trigger("chosen:updated");
            jQuery('.qck_image #qck_image_' + row_id).attr('src', data.picarioimage);

        } else if (data.status == 'error') {
            // if no size list found againt selected color then reset size field
            setDefaults(row_id);
        }

    }).fail(function () {
        console.log("error");
    });

    checkAvailability(jQuery('#qty_' + row_id));
}
// get size list by color id
function getSizesQuickOrder(optn, url) {
    var option = jQuery('option:selected', optn),
        bundleid = option.attr('bundle_id'),
        optionid = option.attr('value'),
        simpid = option.attr('pro_id'),
        row_id = option.attr('row_id'),
        row_id = optn.id.split('_')[1];
    if ((optn.value == '') || (typeof (bundleid) === 'undefined' || typeof (optionid) === 'undefined')) {
        setDefaults(row_id);
        return false;
    }
    // send request to controller
    jQuery.get(url, {
        bundle_id: bundleid,
        option_id: optionid,
        simple_id: simpid,
        row_id: row_id
    }).done(function (data) {
        var data = jQuery.parseJSON(data);
        if (data.status == 'success') {
            // dump options to size ddl
            //jQuery('#size_'+row_id).html(data.content).trigger('change');
            jQuery('#size_' + row_id).html(data.content);
            jQuery('#size_' + row_id).trigger("chosen:updated");
            jQuery('.qck_image #qck_image_' + row_id).attr('src', data.picarioimage);
        } else if (data.status == 'error') {
            // if no size list found againt selected color then reset size field
            setDefaults(row_id);
        }

    }).fail(function () {
        console.log("error");
    });

    //checkAvailabilityQuickOrder(jQuery('#qty_'+row_id));
}
// set default values when user select empty color option
function setDefaults(row_id) {
    var tmplate = '<option value="">Please Select</option>';
    jQuery('#size_' + row_id).html(tmplate);
    jQuery('#size_' + row_id).trigger("chosen:updated");
    jQuery('#simple_' + row_id).val('');
    jQuery('#qty_' + row_id).val('');
    jQuery('#msg_' + row_id).html('');

}
// set simple product id on hidden text field
function setSimple(optn) {
    var option = jQuery('option:selected', optn),
        simpid = option.attr('simple_id'),
        row_id = optn.id.split('_')[1];

    if (optn.value == '') {
        //setDefaults(row_id);
        jQuery('#color_' + row_id).trigger('change');
        return false;
    }

    jQuery('#simple_' + row_id).val(simpid);
    checkAvailability(jQuery('#qty_' + row_id));
}

function checkAvailabilityQuickOrder(elem) {
    if (/\D/g.test(elem.value)) {
        elem.value = elem.value.replace(/\D/g, '');
        return false;
    } else {
        delay(function () {
            var getKeyVal = jQuery(elem).data('key_val');
            var row_num = jQuery(elem).attr('id').split("_"),
                _qty = jQuery(elem).val(),
                _color = jQuery('#color_' + row_num[1]).val(),
                _size = jQuery('#size_' + row_num[1] + '_' + row_num[2]).val(),
                _simple = jQuery('#simple_' + row_num[1] + '_' + row_num[2]).val(),
                url = siteURL + 'bulkorder/index/getWarehouseList/';
            jQuery('#msg_' + row_num[1]).html('');
            if (_qty != '' && _simple != '' && _size != '') {
                //jQuery('.ml-qo-loader').show();
                //jQuery('#ml_qo_loader_'+row_num[1]+'_'+getKeyVal).fadeTo( "fast", 1 ); 
                jQuery('#ml_qo_loader_' + row_num[1] + '_' + getKeyVal).addClass('qo-focus');
                jQuery('#ml_qo_loader_' + row_num[1] + '_' + getKeyVal + '.qo-focus').focus();
                //console.log('#ml_qo_loader_'+row_num[1]);
                // send request to controller
                jQuery.get(url, {
                    simp_id: _simple,
                    qty: _qty,
                    isQuickOrder: true
                }).done(function (data) {
                    var data = jQuery.parseJSON(data);
                    if (data.status == 'success') {
                        //jQuery('.ml-qo-loader').hide();
                        //jQuery('#ml_qo_loader_'+row_num[1]+'_'+getKeyVal).fadeOut( "fast" );
                        //jQuery('.loader-image-rcap-spiner').hide();
                        jQuery('#ml_qo_loader_' + row_num[1] + '_' + getKeyVal).removeClass('qo-focus');
                        jQuery('#ml_qo_loader_' + row_num[1] + '_' + getKeyVal).focus();
                        var html = '';
                        var next_available_date = false;
                        jQuery('#inventory-label_' + row_num[1]).show();
                        jQuery.each(data.content, function (key, arr) {

                            if (jQuery('#' + key + "-label_" + row_num[1]).length == 0)
                                jQuery('#state-labels_' + row_num[1]).append('<span class="ml-' + key + '-label_' + row_num[1] + '" ><span class="ml-oregon-label"><span id="' + key + '-label_' + row_num[1] + '" class="ml-oregon-show">' + key + '</span></span></span><span class="ml-stock-label" id="stock-label_' + key + '_' + row_num[1] + '"></span>');

                            if (arr['response'] == 1) {
                                html += '<div class="ml-qo-stock ' + key + '_' + row_num[1] + '" id="stock_' + key + '_' + row_num[1] + '_' + row_num[2] + '"></div>';
                                //jQuery('#stock-label_'+key+'_'+row_num[1]).html('');
                                //if(jQuery('#'+'instock-label_'+key+'_'+row_num[1]).length==0)
                                //jQuery('#stock-label_'+key+'_'+row_num[1]).append('<span  class="ml-instock-show" id="instock-label_'+key+'_'+row_num[1]+'">Instock</span>');
                            } else {
                                if (arr['next_available_date'] != undefined) {
                                    next_available_date = true;
                                    //jQuery('#stock-label_'+key+'_'+row_num[1]).html('');
                                    //if(jQuery('#'+'next-available-label_'+key+'_'+row_num[1]).length==0)
                                    //jQuery('#stock-label_'+key+'_'+row_num[1]).append('<span id="next-available-label_'+key+'_'+row_num[1]+'" class="ml-next-available-show">Estimated Arrival Date</span>');
                                    html += '<div class="ml-qo-outstock ml-qo-next-available ' + key + '_' + row_num[1] + '" id="next-available_' + key + '_' + row_num[1] + '_' + row_num[2] + '">' + arr['next_available_date'] + '</div>';
                                } else {
                                    //jQuery('#stock-label_'+key+'_'+row_num[1]).html('');
                                    //if(jQuery('#'+'outstock-label_'+key+'_'+row_num[1]).length==0)
                                    //	jQuery('#stock-label_'+key+'_'+row_num[1]).append('<span  class="ml-outstock-show" id="outstock-label_'+key+'_'+row_num[1]+'">Outstock</span>');
                                    html += '<div class="ml-qo-outstock ' + key + '_' + row_num[1] + '" id="outstock_' + key + '_' + row_num[1] + '_' + row_num[2] + '"></div>';
                                }
                            }

                        });

                        /*
                        if(next_available_date)
                        {
                        	jQuery('#next-available-label_'+row_num[1]).html('<span  class="ml-next-available-show">Estimated Arrival Date</span>');
                        	
                        	jQuery('#instock-label_'+row_num[1]).show();
                        }
                        else
                        {
                        	jQuery('#instock-label_'+row_num[1]).show();
                        	jQuery('#next-available-label_'+row_num[1]).html('');
                        }
                        	*/
                        jQuery('#status_' + row_num[1] + '_' + row_num[2]).html(html);


                        jQuery.each(data.content, function (key, arr) {
                            if (jQuery('.ml-qo-next-available.' + key + '_' + row_num[1]).length != 0) {
                                //var next_available_state = jQuery('.ml-qo-next-available.'+key).attr("id").split("_");
                                jQuery('#stock-label_' + key + '_' + row_num[1]).html('');
                                jQuery('#stock-label_' + key + '_' + row_num[1]).append('<span class="ml-next-available-label"><span id="next-available-label_' + key + '_' + row_num[1] + '" class="ml-next-available-show">Estimated Arrival Date</span></span>');
                            } else {
                                if (jQuery('.ml-qo-outstock.' + key + '_' + row_num[1]).length != 0) {
                                    //var outstock_state = jQuery('.ml-qo-outstock.'+key).attr("id").split("_");
                                    jQuery('#stock-label_' + key + '_' + row_num[1]).html('');
                                    jQuery('#stock-label_' + key + '_' + row_num[1]).append('<span class="ml-outstock-label"><span id="outstock-label_' + key + '_' + row_num[1] + '" class="ml-outstock-show">Out of stock <br> Currently Unavailable</span></span>');
                                } else {
                                    //var stock_state = jQuery('.ml-qo-stock.'+key).attr("id").split("_");
                                    jQuery('#stock-label_' + key + '_' + row_num[1]).html('');
                                    jQuery('#stock-label_' + key + '_' + row_num[1]).append('<span class="ml-instock-label"><span id="instock-label_' + key + '_' + row_num[1] + '" class="ml-instock-show">In stock</span></span>');
                                }

                            }
                        });

                    } else if (data.status == 'error') {
                        jQuery('#status_' + row_num[1] + '_' + row_num[2]).html('<span class="error">' + data.message + '</span>');
                    }

                }).fail(function () {
                    console.log("error");
                });
            } else {
                return false;
            }

        }, 500);
    }
}

function checkAvailability(elem) {
    delay(function () {
        var row_num = jQuery(elem).attr('id').split("_"),
            _qty = jQuery(elem).val(),
            _color = jQuery('#color_' + row_num[1]).val(),
            _size = jQuery('#size_' + row_num[1]).val(),
            _simple = jQuery('#simple_' + row_num[1]).val(),
            url = siteURL + 'bulkorder/index/getWarehouseList/';
        jQuery('#msg_' + row_num[1]).html('');
        if (_qty != '' && _simple != '' && _size != '') {
            // send request to controller
            jQuery.get(url, {
                simp_id: _simple,
                qty: _qty
            }).done(function (data) {
                var data = jQuery.parseJSON(data);
                if (data.status == 'success') {
                    var html = '';
                    jQuery.each(data.content, function (key, arr) {
                        html += '<span class="' + arr['class'] + '">' + arr['msg'] + '</span>';
                    });
                    jQuery('#msg_' + row_num[1]).html(html);
                } else if (data.status == 'error') {
                    jQuery('#msg_' + row_num[1]).html('<span class="error">' + data.message + '</span>');
                }

            }).fail(function () {
                console.log("error");
            });
        } else {
            return false;
        }

    }, 400);
}

jQuery(document).on('change', '.size-select', function (e) {
    jQuery(this).trigger("chosen:updated");
});