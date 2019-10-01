// JavaScript Document
jQuery(document).ready(function(){
	//Hide the classes per each variable
	var patches = ".clips, .transfers, .appliques, .woveninternal, .embroidery, .namedrops, .mascots, .polypress, .letters, .threads, .stock, .custom";
	var clips = ".patches, .transfers, .appliques, .woveninternal, .embroidery, .namedrops, .mascots, .polypress, .letters, .threads, .stock, .custom";
	var polypress = ".patches, .clips, .transfers, .woveninternal, .appliques, .embroidery, .namedrops, .mascots, .letters, .threads, .stock, .custom";
	var woveninternal = ".patches, .clips, .transfers, .appliques, .embroidery, .namedrops, .mascots, .polypress, .letters, .threads, .stock, .custom";
	var transfers = ".clips, .patches, .appliques, .woveninternal, .embroidery, .namedrops, .mascots, .polypress, .letters, .threads, .stock, .custom";
	var appliques = ".clips, .patches, .transfers, .woveninternal, .embroidery, .namedrops, .mascots, .polypress, .letters, .threads, .stock, .custom";
	var threads = ".clips, .patches, .appliques, .woveninternal, .embroidery, .namedrops, .transfers, .polypress, .mascots, .letters, .stock, .custom";
	var embroidery = ".clips, .patches, .appliques, .woveninternal, .transfers, .namedrops, .mascots, .polypress, .letters, .threads";
	var stock = ".clips, .patches, .appliques, .woveninternal, .embroidery, .namedrops, .mascots, .transfers, .polypress, .letters, .threads, .custom";
	var custom = ".clips, .patches, .appliques, .woveninternal, .embroidery, .namedrops, .mascots, .transfers, .polypress, .letters, .threads, .stock";
	var felt = ".leather, .woven, .printed";
	var leather = ".felt, .woven, .printed";
	var woven = ".leather, .felt, .printed";
	var printed = ".felt, .woven, .leather";
	var embroidered = ".wovenpatch, .sublimation, .screenprint, .rubber";
	var wovenpatch = ".embroidered, .sublimation, .screenprint, .rubber";
	var sublimation = ".wovenpatch, .embroidered, .screenprint, .rubber";
	var screenprint = ".embroidered, .wovenpatch, .sublimation, .rubber";
	var rubber = ".wovenpatch, .sublimation, .screenprint, .embroidered";
	var wovenclip = ".leatherclip";
	var leatherclip = ".wovenclip";
	var screentrans = ".subprint, .siliconeprint";
	var subprint = ".screentrans, .siliconeprint";
	var siliconeprint = ".subprint, .screentrans";

	var dirembroidery = ".namedrops, .mascots, .letters, .threads";
	var namedrops = ".embroidery, .mascots, .letters, .threads";
	var mascots = ".embroidery, .namedrops, .letters, .threads";
	var letters = ".embroidery, .namedrops, .mascots, .threads";

	var decotypes = ".namedrops, .mascots, .letters, .custom, .threads";
	var designtypes = ".clips, .patches, .appliques, .woveninternal, .transfers, .polypress, .threads, .embroidery, .threads";
	var all = "";

	//Close other inner navigations per each variable
	var appliquenav = ".patchesnav, .clipnav, .transfernav, .embroiderynav, .stocknav, .leathernav";
	var patchesnav = ".clipnav, .transfernav, .appliquenav, .embroiderynav, .stocknav, .leathernav";
	/*var leathernav = ".clipnav, .transfernav, .appliquenav, .embroiderynav, .stocknav";*/
	var clipnav = ".patchesnav, .transfernav, .appliquenav, .embroiderynav, .stocknav, .leathernav";
	var transfernav = ".patchesnav, .clipnav, .appliquenav, .embroiderynav, .stocknav, .leathernav";
	var embroiderynav = ".patchesnav, .clipnav, .appliquenav, .transfernav, .leathernav";
	var stocknav = ".patchesnav, .clipnav, .appliquenav, .transfernav, .embroiderynav, .leathernav";
	var allnav = ".patchesnav, .clipnav, .appliquenav, .transfernav, .embroiderynav, .stocknav, .leathernav";

	//Make the magic on click
	jQuery("#patches").click(function(){
		jQuery(".patchesnav").slideToggle("fast", function() {
			jQuery(patchesnav).hide("fast");
		});
		jQuery(patches).hide( "fast", function() {});
		jQuery(".patches").show( "fast", function() {});
	});
	jQuery("#embroidy").click(function(){
		jQuery(".embroiderynav").slideToggle("fast", function() {
			jQuery(embroiderynav).hide("fast");
		});
		jQuery(embroidery).hide( "fast", function() {});
		jQuery(".embroidery").show( "fast", function() {});
	});
	jQuery("#dirembroidery").click(function(){
		jQuery(dirembroidery).hide( "fast", function() {});
		jQuery(".dirembroidery").show( "fast", function() {});
	});
	jQuery("#clips").click(function(){
		jQuery(".clipnav").slideToggle("fast", function() {
			jQuery(clipnav).hide("fast");
		});
		jQuery(clips).hide( "fast", function() {});
		jQuery(".clips").show( "fast", function() {});
	});
	jQuery("#transfers").click(function(){
		jQuery(".transfernav").slideToggle("fast", function() {
			jQuery(transfernav).hide("fast");
		});
		jQuery(transfers).hide( "fast", function() {});
		jQuery(".transfers").show( "fast", function() {});
	});
	jQuery("#appliques").click(function(){
		jQuery(".appliquenav").slideToggle("fast", function() {
			jQuery(appliquenav).hide("fast");
		});
		jQuery(appliques).hide( "fast", function() {});
		jQuery(".appliques").show( "fast", function() {});
	});
	jQuery("#polypress").click(function(){
		jQuery(polypress).hide( "fast", function() {
			jQuery(allnav).hide("fast");
		});
		jQuery(".polypress").show( "fast", function() {});
	});
	jQuery("#woveninternal").click(function(){
		jQuery(woveninternal).hide( "fast", function() {
			jQuery(allnav).hide("fast");
		});
		jQuery(".woveninternal").show( "fast", function() {});
	});
	jQuery("#stock").click(function(){
		jQuery(".stocknav").slideToggle("fast", function() {
			jQuery(stocknav).hide("fast");
		});
		jQuery(stock).hide( "fast", function() {});
		jQuery(".stock").show( "fast", function() {});
	});
	jQuery("#custom").click(function(){
		jQuery(custom).hide( "fast", function() {
			jQuery(allnav).hide("fast");
		});
		jQuery(".custom").show( "fast", function() {});
	});
	jQuery("#threadchart").click(function(){
		jQuery(threads).hide( "fast", function() {
			jQuery(allnav).hide("fast");
		});
		jQuery(".threadchart").show( "fast", function() {});
	});
	jQuery("#threads").click(function(){
		jQuery(threads).hide( "fast", function() {
			jQuery(allnav).hide("fast");
		});
		jQuery(".threadchart").show( "fast", function() {});
	});
	jQuery("#decotypes").click(function(){
		jQuery(decotypes).hide( "fast", function() {
			jQuery(allnav).hide("fast");
		});
		jQuery(".decotypes").show( "fast", function() {});
	});
	jQuery("#designtypes").click(function(){
		jQuery(designtypes).hide( "fast", function() {
			jQuery(allnav).hide("fast");
		});
		jQuery(".designtypes").show( "fast", function() {});
	});
	jQuery("#namedrops").click(function(){
		jQuery(namedrops).hide( "fast", function() {});
		jQuery(".namedrops").show( "fast", function() {});
	});
	jQuery("#mascots").click(function(){
		jQuery(mascots).hide( "fast", function() {});
		jQuery(".mascots").show( "fast", function() {});
	});
	jQuery("#letters").click(function(){
		jQuery(letters).hide( "fast", function() {});
		jQuery(".letters").show( "fast", function() {});
	});
	jQuery("#felt").click(function(){
		jQuery(felt).hide( "fast", function() {});
		jQuery(".felt").show( "fast", function() {});
	});
	jQuery("#leather").click(function(){
		jQuery(".leathernav").slideToggle("fast", function() {
		});
		jQuery(leather).hide( "fast", function() {});
		jQuery(".leather").show( "fast", function() {});
	});
	/*jQuery("#leather").click(function(){
		jQuery(leather).hide( "fast", function() {});
		jQuery(".leather").show( "fast", function() {});
	});*/
	jQuery("#woven").click(function(){
		jQuery(woven).hide( "fast", function() {});
		jQuery(".woven").show( "fast", function() {});
	});
	jQuery("#printed").click(function(){
		jQuery(printed).hide( "fast", function() {});
		jQuery(".printed").show( "fast", function() {});
	});
	jQuery("#embroidered").click(function(){
		jQuery(embroidered).hide( "fast", function() {});
		jQuery(".embroidered").show( "fast", function() {});
	});
	jQuery("#wovenpatch").click(function(){
		jQuery(wovenpatch).hide( "fast", function() {});
		jQuery(".wovenpatch").show( "fast", function() {});
	});
	jQuery("#sublimation").click(function(){
		jQuery(sublimation).hide( "fast", function() {});
		jQuery(".sublimation").show( "fast", function() {});
	});
	jQuery("#screenprint").click(function(){
		jQuery(screenprint).hide( "fast", function() {});
		jQuery(".screenprint").show( "fast", function() {});
	});
	jQuery("#rubber").click(function(){
		jQuery(rubber).hide( "fast", function() {});
		jQuery(".rubber").show( "fast", function() {});
	});
	jQuery("#wovenclip").click(function(){
		jQuery(wovenclip).hide( "fast", function() {});
		jQuery(".wovenclip").show( "fast", function() {});
	});
	jQuery("#leatherclip").click(function(){
		jQuery(leatherclip).hide( "fast", function() {});
		jQuery(".leatherclip").show( "fast", function() {});
	});
	jQuery("#screentrans").click(function(){
		jQuery(screentrans).hide( "fast", function() {});
		jQuery(".screentrans").show( "fast", function() {});
	});
	jQuery("#subprint").click(function(){
		jQuery(subprint).hide( "fast", function() {});
		jQuery(".subprint").show( "fast", function() {});
	});
	jQuery("#siliconeprint").click(function(){
		jQuery(siliconeprint).hide( "fast", function() {});
		jQuery(".siliconeprint").show( "fast", function() {});
	});

	/****** Recognize URL string to activate index page state *******/
	jQuery(function(){
		function embroidery(){
			jQuery('li#embroidy').trigger('click');  
		};
		function patches(){
			jQuery('li#patches').trigger('click');
		};
		function applique(){
			jQuery('li#appliques').trigger('click');  
		};
		function clip(){
			jQuery('li#clips').trigger('click');  
		};
		function transfer(){
			jQuery('li#transfers').trigger('click');  
		};
		function polypress(){
			jQuery('li#polypress').trigger('click');  
		};
		function internal(){
			jQuery('li#woveninternal').trigger('click');  
		};
		function thread(){
			jQuery('li#threadchart').trigger('click');  
		};
   		if (window.location.hash){
      			var hash = window.location.hash.substring(1);
      			if (hash == "patch"){
         			patches();
      			};
			if (hash == "embroidery"){
         			embroidery();
      			};
			if (hash == "applique"){
         			applique();
      			};
			if (hash == "clip"){
         			clip();
      			};
			if (hash == "transfer"){
         			transfer();
      			};
			if (hash == "poly"){
         			polypress();
      			};
			if (hash == "internal"){
         			internal();
      			};
			if (hash == "thread"){
         			thread();
      			};
   		}

	});
});