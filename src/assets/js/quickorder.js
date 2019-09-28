var row_id;
var last_row_id = 5;
var Products = new Array();
var allowedProducts = new Array();
var configProducts = {};
var NewConfigProducts =  baseConfigOptions = {};
var optionCount = {};
var configOptions = {};
var actionUrl;
var productLoaded = false;
//jQuery.noConflict();
jQuery.noConflict();
jQuery(document).ready(function($){
    actionUrl = $("#actionUrl").attr("value");
    var http = getHttp();
    //actionUrl = actionUrl.replace('http:',http);
    //alert(getHttp());
    $("#close_popup").click(function(){
        $("#quickorder_box").slideUp("slow");
        $("#quickorder_menu").removeClass("active");
    });
    $("#quickorder_link").click(function(){
        $("#quickorder_link").addClass("active");		alert('remove');
        $("#quickorder_box").slideDown("slow");
    });
    removeLink();
// assign autosuggest
    autoSuggest('');
//blurSKU();
    // add new items row
    $("#add_row").click(function(){
        var block = $(".items_table li:last");
        var html = '<li class="item" id="itemrow_'+last_row_id+'">';
        html+='<div class="Frmcol-1 sku_field sku_field_'+last_row_id+'"><input id="sku_'+last_row_id+'" type="text" class="input-text sku" title="sku_'+last_row_id+'" name="product['+last_row_id+'][sku]"/><div class="ms-product-image-'+last_row_id+'"></div></div>';
        html+='<div class="Frmcol-2" id="options_'+last_row_id+'">&nbsp;</div>';
		html+='<div class="Frmcol-3" id="itemrow_'+last_row_id+'"><div class="price-box price-box-'+last_row_id+'"></div></div>';
        html+='<div class="Frmcol-4"><a href="javascript:;" class="remove" id="remove_'+last_row_id+'"><span>x</span></a></div>';
        html+='</li>';
        //block.after(html);
        block.before(html);
        autoSuggest(".sku_field_"+last_row_id);
        removeLink();
        blurSKU();
        last_row_id = last_row_id+1;
        //Cufon.replace('.quickorder_items a', {fontFamily: 'gill-sans-bold',hover:'true'});
    });
    function autoSuggest(element){		
        if(element==''){
            //element_id = ".sku_field input[type=text]";
            element_id = "input[type=text].sku";
        }else{
            element_id = element+' input[type=text]';
        }
        var selected_value = '';
        $(element_id).autoSuggest(actionUrl+'suggest/',
            {				
                minChars: 2, matchCase: false,selectionLimit:1,
                limitText:" ",
                emptyText:'No results found',
                startText:"",
                keyDelay: 1000,
                selectedItemProp:"name",
                searchObjProps:"name",
                beforeLoad:function(){ $('.loader-image-rcap').show(); },
                resultsComplete:function(){ $('.loader-image-rcap').hide(); },
                formatList: function(data, elem){
                    var html = '<div class="product-item">'+
                        '<div class="product-image pimage"><img src="'+data.image+'" width="60" height="60"/></div>'+
                        '<div class="pdetail"><div class="proname"><span class="prosku">'+data.value+'</span>'+data.name+'</div></div>'+
                        /* '<div class="pdesc"><div class="prodesc">'+data.description+'</div></div>'+ */
                        '</div>';
                    var new_elem = elem.html(html);
                    return new_elem;
                },
                resultClick:function(data){
                    var id = $(this).parents("div.as-results").attr("id");
                    var newid = id.replace("results","values");
                    var value = $("#"+newid).attr("value");
                    id = newid.replace("values","input");
                    $("#"+id).attr("value",value);
                    var row_id= $("#"+id).attr("title");
                    loadProduct(row_id,value);
                    productLoaded = true;
                },
                selectionRemoved:function(elem){
                    //alert(elem);
                }
            });
    }
    function loadProduct(id,sku){
        row_id = id.replace("sku_","");
        var optBlock = $("#options_"+row_id);
        var qtyBlock = $("#qty_"+row_id);
        var value = sku;
        if(value!=''){
            if(!value.length>2){
                return false;
            }
            if(qtyBlock.attr("value")==""){
                optBlock.html('<span class="ajax-loader">&nbsp;</span>');
            }
            if($.inArray(value,Products)!=-1){
                if(qtyBlock.attr("value")==""){
                    //$(this).focus();
                    //$(this).attr("value","");
                    //addError(optBlock,'Product already added with this SKU.');
                }
                //return true;
            }
            $('.loader-image-rcap').show();
            var myAjax = new Ajax.Request(
                actionUrl+'product/?sku='+encodeURIComponent(value)+'&rowid='+row_id,
                {
					async:false,
                    method: 'post',
                    onComplete: function(response){
                        var json = response.responseText.evalJSON();
                        $('.loader-image-rcap').hide();
                        if(json.success==1){
                            productLoaded = true;
                            Products.push(json.product.sku);
                            qtyBlock.attr("value","1");
                            var product = json.product;
                            if(product!=''){
                                $("#id_"+row_id).attr("value",product.id);
                                var output =  parseProductOptions(product,row_id);
                                optBlock.html(output).hide().fadeIn();
                            }
                        }else{
                            productLoaded = false;
                            addError(optBlock,'Invalid Product SKU.');						 					 }
                    }					
                });
        }else{
            addError(optBlock,'Please enter SKU.');
        }
//Cufon.replace('.quickorder_items span', {fontFamily: 'gill-sans-bold',hover:'true'});
    }
    function blurSKU(){
        $(".sku").unbind('blur');
        $(".sku").blur(function(){
            if(productLoaded==true){ return false; }
            var id = $(this).attr("title");
            row_id = id.replace("sku_","");
            var optBlock = $("#options_"+row_id);
            var qtyBlock = $("#qty_"+row_id);
            var value = $(this).attr("value");
            if(value!=''){
                if(!value.length>2){
                    return false;
                }
                if(qtyBlock.attr("value")==""){
                    optBlock.html('<span class="ajax-loader">&nbsp;</span>');
                }
                if($.inArray(value,Products)!=-1){
                    if(qtyBlock.attr("value")==""){
                        $(this).focus();
                        //$(this).attr("value","");
                        addError(optBlock,'Product already added with this SKU.');
                    }
                    return true;
                }
                var myAjax = new Ajax.Request(
                    actionUrl+'product/sku/'+value,
                    {
                        method: 'post',
                        onComplete: function(response){
                            var json = response.responseText.evalJSON();
                            if(json.success==1){
                                Products.push(json.product.sku);
                                qtyBlock.attr("value","1");
                                var product = json.product;
                                if(product!=''){
                                    $("#id_"+row_id).attr("value",product.id);
                                    var output =  parseProductOptions(product);
                                    optBlock.html(output).hide().fadeIn();
                                }
                            }else{
                                addError(optBlock,'Invalid Product SKU.');						 					 }
                        }
                    });
            }else{
                addError(optBlock,'Please enter SKU.');
            }
//Cufon.replace('.quickorder_items span', {fontFamily: 'gill-sans-bold',hover:'true'});
        });
    }
    jQuery('.error-qty-exist .close_popup').on("click",function(e){
        jQuery('.error-qty-exist-container').hide();
    });
});
function QuickOrderSubmit(){
    var error = false;
    actionUrl = actionUrl.replace('quickorder/index','bulkorder/index');
    var message = '';
    var statusDiv = jQuery("#loader");
    statusDiv.html('<span class="ajax-loader">&nbsp;</span>');
    jQuery(".input-required option:selected").each(function(){
        var val = jQuery(this).attr("value");
        if(val==''){
            jQuery(this).parent().removeClass('validation-passed');
            jQuery(this).parent().addClass('validation-failed');
            error = true;
        }else{
            jQuery(this).parent().removeClass('validation-failed');
            jQuery(this).parent().addClass('validation-passed');
        }
    });
    if(Products.length==0){
        error = true;
        message = 'There is no product to add to cart';
    }
    if(error){
        message = (message!='')?message:'Please fix errors.';
        addError(statusDiv,message);
        return false;
    }
    var params = jQuery("#quickorderFrm").serialize();
    jQuery('.loader-image-rcap-spiner').show();
    var myAjax = new Ajax.Request(
        //actionUrl+'cart/',
       // actionUrl+'bundlePost',
	    actionUrl+'bundlePostQuickOrder',
        {
            method: 'post',
            parameters:  params,
            onComplete: function(response){
                var json = response.responseText.evalJSON();
 
					/*if (json.redirect_url){
					   window.location = json.redirect_url;
				   }*/

                   if (json.message == 'Some item(s) already exist. Please update quantity.'){                      
                       jQuery('.loader-image-rcap-spiner').hide();
                       jQuery('.error-qty-exist-container').show();
                   } else {
                       window.location = json.redirect_url;
                   }
				   
					if(json.success && json.redirect_url == undefined ){
                    jQuery('.loader-image-rcap-spiner').hide();
                    addSuccess(statusDiv,json.message);
                    var top_link = json.sidebar;
                    //var cartQtyAjax = jQuery(top_link).find('#cartQtyAjax').html();
					var cartQtyAjax = json.itemCount;
                    jQuery('.header-minicart').find('.count').html(jQuery.trim(cartQtyAjax));
                    jQuery('.header-minicart').find('.count').css('display','block');
                    jQuery('.top-cart').replaceWith(top_link);
                    destroyPersistentData();
                    //location.href = json.redirect_url;
                }
				  else{
                    addError(statusDiv,json.message);
              }
				actionUrl = actionUrl.replace('bulkorder/index','quickorder/index');
            }
        });
}
function addSuccess(elem,msg){
    //elem.html('<span class="success">'+msg+'</span>')
        //.hide().fadeIn();
	jQuery('.link-order')[0].click();
}
function parseProductOptions(product,rowId){
    var html = '<div class="qck_product_options">';
	
    html+='<div class="qck_item">';
    //html+='<div class="qck_image qck_image_'+rowId+'"><img id="qck_image_'+rowId+'" src="'+product.thumbnail+'" width="280" height="170"/></div>';
    html+='<div class="qck_pdetail">';
    html+='<div class="qck_proname product-name">'+product.name+'</div>';
    //html+='<div class="qck_proprice product-price_'+rowId+'">'+product.price+'</div>';
    if(product.description == null) product.description = '';
    //html+='<div class="qck_prodesc">'+product.description+'</div>';
    html+='</div>';
    html+='</div>';
    html+='<div class="qck_has_options">';
	//html+='<div class="qck_image qck_image_'+rowId+'"><img id="qck_image_'+rowId+'" src="'+product.thumbnail+'" width="280" height="170"/></div>';
	var prodImg = '<div class="qck_image qck_image_'+rowId+'"><img id="qck_image_'+rowId+'" src="'+product.thumbnail+'" width="280" height="170"/></div>';
	var prodPrice = '<div class="qck_proprice product-price_'+rowId+'"><p class="price-to"><span class="price"><span class="price">$'+product.price+'</span></span></p></div>';
	
	jQuery('.ms-product-image-'+rowId).html(prodImg);
	jQuery('.price-box-'+rowId).html(prodPrice);
	
	//jQuery(prodImg).appendTo("#itemrow_"+rowId+' '+' .Frmcol-1.sku_field');	
	//jQuery(prodPrice).appendTo("#itemrow_"+rowId+' '+' .Frmcol-3 .price-box');
	//jQuery(prodImg).insertAfter("#itemrow_"+rowId+' '+' .Frmcol-1.sku_field .as-selections');
	
	
	
    if(product.is_bundle){
        html+= renderBundleOptions(product,rowId);
    }
    /* if(product.has_options){
     if(product.is_configurable){
     html+= configProductOptionsconfigProductOptions(product,rowId);
     }else if(product.is_bundle){
     html+= renderBundleOptions(product,rowId);
     alert('result');
     }else if(product.custom_options){
     html+=customProductOptions(product);
     }
     }	 */
    html+='</div>';
    html+='</div>';
    return html;
}
function renderBundleOptions(product, rowId){
    var content = product.content;
    var html ='<div>';
    html += content;
    html +='</div>';
    return html;
}
function customProductOptions(product){
    var html ='<div>';
    var option =  product.option;
    for(id in option){
        var opt = option[id];
        html+='<select name="product['+row_id+'][options]['+opt.option_id+']" class="input-required">';
        html+='<option value=""> -'+opt.label+'- </option>';
        if(opt.values!=''){
            for(v in opt.values){
                if(isNaN(v)==false){
                    var optval = opt.values[v];
                    var price = parseInt(optval.price);
                    html+='<option value="'+optval.option_type_id+'">';
                    html+=optval.title;
                    if(price>0){
                        price = price.toFixed(2);
                        //html+=' + jQuery'+price;
                    }
                    html+='</option>';
                }
            }
        }
        html+='</select>';
		
		html+='aaaaa';
		
    }
    return html;
}
function parseAtrr(attr_id,product_id,opt_id,attr_type,rowId){
    if(opt_id==''){ return false; }
    jQuery("#prevAttr_"+attr_id+"_"+product_id+"_"+rowId+"").removeAttr("disabled");
    var select = jQuery("#prevAttr_"+attr_id+"_"+product_id+"_"+rowId+"");
    select.val(jQuery('options:first', select).val());
    var it = 0;
    var optArr =  new Array();
    if(attr_type!='' && attr_type=='super_attribute'){
        optionCount[product_id] = 0;
    }
    var optionsArr  = new Array();
    jQuery("#prevAttr_"+attr_id+"_"+product_id+"_"+rowId+" option").each(function(){
        if(it>0){  jQuery(this).remove();  }
        it++;
    });
    if(optionCount[product_id]==0){
        configProducts[product_id] = [];
        baseConfigOptions[product_id] = [];
        for(ap in allowedProducts[opt_id]){
            if(!isNaN(parseInt(allowedProducts[opt_id][ap]*1))){
                configProducts[product_id].push(allowedProducts[opt_id][ap]);
                baseConfigOptions[product_id].push(allowedProducts[opt_id][ap]);
            }
        }
    }else{
        NewConfigProducts[product_id] = [];
        var index = 0;
        for(ci in configProducts[product_id]){
            if(jQuery.inArray(configProducts[product_id][ci],allowedProducts[opt_id])!=-1){
                NewConfigProducts[product_id].push(configProducts[product_id][ci]);
            }
            if(!isNaN(parseInt(configProducts[product_id][ci]*1))){
                index++;
            }
        }
        if(index>0){
            configProducts[product_id] = NewConfigProducts[product_id];
        }else{
            configProducts[product_id] = baseConfigOptions[product_id];
        }
        for(cp in allowedProducts[opt_id]){
            if(jQuery.inArray(allowedProducts[opt_id][cp],configProducts[product_id])!=-1){
                if(!isNaN(parseInt(allowedProducts[opt_id][cp]*1))){
                    optionsArr.push(allowedProducts[opt_id][cp]);
                }
            }
        }
    }
    for(i in configOptions){
        if(i==attr_id){
            for(j in configOptions[i]){
                var products = configOptions[i][j]['products'];
                var value = configOptions[i][j]['opt_id'];
                var label = configOptions[i][j]['label'];
                for(p in products){
                    if(optionCount[product_id]>0){
                        if(jQuery.inArray(products[p],optionsArr)!=-1){
                            if(jQuery.inArray(value,optArr)==-1){
                                jQuery("#prevAttr_"+attr_id+"_"+product_id+"_"+rowId+"").append('<option value="'+value+'">'+label+'</option>');
                                optArr.push(value);
                            }
                        }
                    }else{
                        if(jQuery.inArray(products[p],allowedProducts[opt_id])!=-1){
                            if(jQuery.inArray(value,optArr)==-1){
                                jQuery("#prevAttr_"+attr_id+"_"+product_id+"_"+rowId+"").append('<option value="'+value+'">'+label+'</option>');
                                optArr.push(value);
                            }
                        }
                    }
                }
            }
        }
    }
    optionCount[product_id]++;
    jQuery("#prevAttr_"+attr_id+"_"+product_id+"_"+rowId+"").change(function(){
        var id = jQuery(this).attr("id");
        prid = id.replace('prevAttr_'+attr_id+'_','');
        var val = jQuery(this).find(":selected").val();
        var attrid = jQuery(this).attr("class").replace("attr_","");
        parseAtrr(attrid,product_id,val,'',rowId);
    });
}
function configProductOptions(product,rowId){
    var html ='<div>';
    var option =  product.option.evalJSON();
    var count = 0;
    for(j in option.attributes){ count++; }
    var i = 0;
    var prevAttr = 0;
    var attrArray = new Array();
    for(id in option.attributes){
        var attr = option.attributes[id];
        if(attr.options!=''){
            attrArray[i] = attr.id;
            if(i==0){
                html+='<select name="product['+rowId+'][super_attribute]['+attr.id+']"';
                if(count>1){ html+=' onchange="parseAtrr('+attr.id+','+product.id+',this.value,\'super_attribute\','+rowId+')"';}
                html+=' class ="super-attribute-select input-required" id="attribute_'+attr.id+"_"+rowId+'">';
                html+='<option value=""> -'+attr.label+'- </option>';
                for(opts in attr.options){
                    if(isNaN(opts)==false){
                        var opt = attr.options[opts];
                        html+='<option value="'+opt.id+'">'+opt.label+'</option>';
                        allowedProducts[opt.id] = opt.products;
                    }
                }
                html+='</select>';
            }else{
                var j = i - 1;
                prevAttr = attrArray[j];
                html+=fillCombo(row_id,attr,prevAttr,product.id,rowId);
            }
            i++;
        }
    }
    html+='</div>';
    return html;
}
function fillCombo(row_id,attr,prev_id,product_id,row_option_id){
    html='<select name="product['+row_id+'][super_attribute]['+attr.id+']"';
    html+=' disabled="disabled"';
    html+=' id="prevAttr_'+prev_id+"_"+product_id+"_"+row_option_id+'" class="attr_'+attr.id+'">';
    html+='<option value=""> -'+attr.label+'- </option>';
    i = 0;
    configOptions[prev_id] = {};
    for(opts in attr.options){
        if(isNaN(opts)==false){
            var opt = attr.options[opts];
            html+='<option value="'+opt.id+'">'+opt.label+'</option>';
            var optvalue = new Array();
            optvalue['opt_id'] =  opt.id;
            optvalue['products']  = opt.products;
            optvalue['label'] = opt.label;
            configOptions[prev_id][i] = optvalue;
            allowedProducts[opt.id] = opt.products;
            i++;
        }
    }
    html+='</select>';
    return html;
}
function addError(elem,msg){
    elem.html('<span class="error">'+msg+'</span>')
        .hide().fadeIn();
}
function removeLink(){
    jQuery("a.remove").unbind('click');
    jQuery("a.remove").bind("click",function(){
        var id = jQuery(this).attr("id");
        row_id = id.replace("remove_","");
//		var sku = jQuery("#sku_"+row_id).attr("value");
        var sku = jQuery("[title^=sku_"+row_id+"]").attr("value");
        Products = jQuery.grep(Products, function(n, i){
            return (n != sku);
        });
        //jQuery("#itemrow_"+row_id).attr("bgcolor","#FFB3B3").hide().fadeIn().remove();
        jQuery(".quickorder_wrapper_lightbox").css("display","block");
        jQuery(".quickorder_box_lightbox").css("display","block");
        jQuery("#itemrow_"+row_id).attr("bgcolor","#FFB3B3").remove();
    });
}
/**
 * Function : dump()
 * Arguments: The data - array,hash(associative array),object
 *    The level - OPTIONAL
 * Returns  : The textual representation of the array.
 * This function was inspired by the print_r function of PHP.
 * This will accept some data as the argument and return a
 * text that will be a more readable version of the
 * array/hash/object that is given.
 * Docs: http://www.openjs.com/scripts/others/dump_function_php_print_r.php
 */
function dump(arr,level) {
    var dumped_text = "";
    if(!level) level = 0;
    //The padding given at the beginning of the line.
    var level_padding = "";
    for(var j=0;j<level+1;j++) level_padding += "    ";
    if(typeof(arr) == 'object') { //Array/Hashes/Objects
        for(var item in arr) {
            var value = arr[item];
            if(typeof(value) == 'object') { //If it is an array,
                //dumped_text += level_padding + "'" + item + "' ...\n";
                //dumped_text += dump(value,level+1);
            } else {
                dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
            }
        }
    } else { //Stings/Chars/Numbers etc.
        dumped_text = "===>"+arr+"<===()";
    }
    return dumped_text;
}
 function destroyPersistentData(){
     jQuery('div.Frmcol-3:not(:first)').html('');
     jQuery('.input-text.sku.as-input').val('');
     //jQuery('.link-order').trigger('click');
 }
function getHttp(){
    var url = new String(window.location);
    var part = url.split('/');
    return part[0];
    //return 	part[0]+'//'+part[2]+'/'+part[3]+'/quickorder/index';
}
// get size list by color id
/*function getSizes(optn, url){
 var option = jQuery('option:selected', optn),
 bundleid = option.attr('bundle_id'),
 optionid = option.attr('value'),
 simpid = option.attr('pro_id'),
 productsku = option.attr('prod_sku'),
 row_id = optn.id.split('_')[1];
 if(optn.value == ''){
 setDefaults(row_id);
 return false;
 }
 // send request to controller
 jQuery.get(url, {bundle_id: bundleid, option_id: optionid, simple_id: simpid, product_sku: productsku}
 ).done(function(data){
 var data = jQuery.parseJSON(data);
 if(data.status == 'success'){
 // dump options to size ddl
 jQuery('#size_'+row_id).html(data.content).trigger('change');
 jQuery('.qck_image_'+row_id).html(data.qoimage);
 }else if(data.status == 'error'){
 // if no size list found againt selected color then reset size field
 setDefaults(row_id);
 }
 }).fail(function() {
 console.log("error");
 });
 checkAvailability(jQuery('#qty_'+row_id));
 }
 // set simple product id on hidden text field
 function setSimple(optn){
 var option = jQuery('option:selected', optn),
 simpid = option.attr('simple_id'),
 row_id = optn.id.split('_')[1];
 if(optn.value == ''){
 setDefaults(row_id);
 return false;
 }
 jQuery('#simple_'+row_id).val(simpid);
 }
 // set default values when user select empty color option
 function setDefaults(row_id){
 var tmplate = '<option value="">Please Select</option>';
 jQuery('#size_'+row_id).html(tmplate);
 jQuery('#simple_'+row_id).val('');
 }
 function checkAvailability(elem){
 delay(function(){
 var row_num = jQuery(elem).attr('id').split("_"),
 _qty = jQuery(elem).val(),
 _color = jQuery('#color_'+row_num[1]).val(),
 _size = jQuery('#size_'+row_num[1]).val(),
 _simple = jQuery('#simple_'+row_num[1]).val(),
 url = siteURL+'bulkorder/index/getWarehouseList/';
 jQuery('#msg_'+row_num[1]).html('');
 if(_qty!='' && _simple!='' && _size!=''){
 // send request to controller
 jQuery.get(url, {simp_id: _simple, qty: _qty}
 ).done(function(data){
 var data = jQuery.parseJSON(data);
 if(data.status == 'success'){
 var html = '';
 jQuery.each(data.content, function(key, arr) {
 html += '<span class="'+arr['class']+'">'+arr['msg']+'</span>';
 });
 jQuery('#msg_'+row_num[1]).html(html);
 }else if(data.status == 'error'){
 jQuery('#msg_'+row_num[1]).html('<span class="error">'+data.message+'</span>');
 }
 }).fail(function() {
 console.log("error");
 });
 }else{ return false; }
 },400);
 }
 // key delay function to hold code execution after key up
 var delay = (function(){
 var timer = 0;
 return function(callback, ms){
 clearTimeout (timer);
 timer = setTimeout(callback, ms);
 };
 })();
 */
