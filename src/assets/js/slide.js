/*=============================================
VARIABLES
=============================================*/

var item = 10;
var itemPaginacion = $("#paginacion li");
var interrumpirCiclo = false;
var imgProducto = $(".imgProducto");
var titulos1 = $("#slide h1");
var titulos2 = $("#slide h2");
var titulos3 = $("#slide h3");
var btnVerProducto = $("#slide button");
var detenerIntervalo = false;
var toogle = false;

$("#slide ul li").css({"width":100/$("#slide ul li").length + "%"});
$("#slide ul").css({"width":$("#slide ul li").length*100 + "%"});

// /*=============================================
// ANIMACIÓN INICIAL
// =============================================*/

$(imgProducto[item]).animate({"top":-10 +"%", "opacity": 0},100)
$(imgProducto[item]).animate({"top":30 +"px", "opacity": 1},600)

$(titulos1[item]).animate({"top":-10 +"%", "opacity": 0},100)
$(titulos1[item]).animate({"top":30 +"px", "opacity": 1},600)

$(titulos2[item]).animate({"top":-10 +"%", "opacity": 0},100)
$(titulos2[item]).animate({"top":30 +"px", "opacity": 1},600)

$(titulos3[item]).animate({"top":-10 +"%", "opacity": 0},100)
$(titulos3[item]).animate({"top":30 +"px", "opacity": 1},600)

$(btnVerProducto[item]).animate({"top":-10 +"%", "opacity": 0},100)
$(btnVerProducto[item]).animate({"top":30 +"px", "opacity": 1},600)


/*=============================================
PAGINACIÓN
=============================================*/

$("#paginacion li").click(function(){

	item = $(this).attr("item")-1;

	movimientoSlide(item);

});

/*=============================================
AVANZAR
=============================================*/

function avanzar(){

	if(item == $("#slide ul li").length -1){

		item = 0;

	}else{

		item++

	}

	interrumpirCiclo = true;

	movimientoSlide(item);

}

$("#slide #avanzar").click(function(){

	avanzar();

})

/*=============================================
RETROCEDER
=============================================*/

$("#slide #retroceder").click(function(){

	if(item == 0){

		item = $("#slide ul li").length -1;

	}else{

		item--

	}

	movimientoSlide(item);

});


/*=============================================
MOVIMIENTO SLIDE
=============================================*/

function movimientoSlide(item){

	$("#slide ul li").finish();

	// http://easings.net/es

	$("#slide ul").animate({"left": item * -100 + "%"}, 1000, "easeOutQuart")

	$("#paginacion li").css({"opacity":.5})

	$(itemPaginacion[item]).css({"opacity":1})

	interrumpirCiclo = true;

	$(imgProducto[item]).animate({"top":-10 +"%", "opacity": 0},100)
	$(imgProducto[item]).animate({"top":30 +"px", "opacity": 1},600)

	$(titulos1[item]).animate({"top":-10 +"%", "opacity": 0},100)
	$(titulos1[item]).animate({"top":30 +"px", "opacity": 1},600)

	$(titulos2[item]).animate({"top":-10 +"%", "opacity": 0},100)
	$(titulos2[item]).animate({"top":30 +"px", "opacity": 1},600)

	$(titulos3[item]).animate({"top":-10 +"%", "opacity": 0},100)
	$(titulos3[item]).animate({"top":30 +"px", "opacity": 1},600)

	$(btnVerProducto[item]).animate({"top":-10 +"%", "opacity": 0},100)
	$(btnVerProducto[item]).animate({"top":30 +"px", "opacity": 1},600)
}

/*=============================================
INTERVALO
=============================================*/

setInterval(function(){

	if(interrumpirCiclo){

		interrumpirCiclo = false;

		detenerIntervalo = false;

		$("#slide ul li").finish();

	}else{

		if(!detenerIntervalo){

			// avanzar();

		}

	}

},3000);

/*=============================================
APARECER FLECHAS
=============================================*/

$("#slide").mouseover(function(){

	$("#slide #retroceder").css({"opacity":1})
	$("#slide #avanzar").css({"opacity":1})

	detenerIntervalo = true;

});


$("#slide").mouseout(function(){

	$("#slide #retroceder").css({"opacity":0})
	$("#slide #avanzar").css({"opacity":0})

	detenerIntervalo = false;

});

/*=============================================
ESCONDER SLIDE
=============================================*/

$("#btnSlide").click(function(){

	if(!toogle){

		toogle = true;

		$("#slide").slideUp("fast");

		$("#btnSlide").html('<i class="fa fa-angle-down"></i>')
	
	}else{

		toogle = false;

		$("#slide").slideDown("fast");

		$("#btnSlide").html('<i class="fa fa-angle-up"></i>')
	}

});


/*=============================================
PLANTILLA
=============================================*/
/*=============================================
PLANTILLA
=============================================*/

var rutaOculta = $("#rutaOculta").val();

// Herramienta TOOLTIP
$('[data-toggle="tooltip"]').tooltip();

$.ajax({

	url: rutaOculta + "ajax/plantilla.ajax.php",
	success: function (respuesta) {

		var colorFondo = JSON.parse(respuesta).colorFondo;
		var colorTexto = JSON.parse(respuesta).colorTexto;
		var barraSuperior = JSON.parse(respuesta).barraSuperior;
		var textoSuperior = JSON.parse(respuesta).textoSuperior;

		$(".backColor, .backColor a").css({
			"background": colorFondo,
			"color": colorTexto
		})

		$(".barraSuperior, .barraSuperior a").css({
			"background": barraSuperior,
			"color": textoSuperior
		});

	}

});

/*=============================================
CUADRÍCULA O LISTA
=============================================*/

var btnList = $(".btnList");
var btnGrid = $(".btnGrid");

for (var i = 0; i < btnList.length; i++) {

	$(btnGrid[i]).addClass("backColor");

	$("#btnGrid" + i).click(function () {

		var numero = $(this).attr("id").substr(-1);

		$(".list" + numero).hide();
		$(".grid" + numero).show();

		$("#btnGrid" + numero).addClass("backColor");
		$("#btnList" + numero).attr("style", "");
		$("#btnList" + numero).removeClass("backColor");
	});

	$("#btnList" + i).click(function () {

		var numero = $(this).attr("id").substr(-1);

		$(".list" + numero).show();
		$(".grid" + numero).hide();

		$("#btnList" + numero).addClass("backColor");
		$("#btnGrid" + numero).attr("style", "");
		$("#btnGrid" + numero).removeClass("backColor");

	});

}

/*=============================================
EFECTOS CON EL SCROLL
=============================================*/

$(window).scroll(function () {

	var scrollY = window.pageYOffset;

	if (window.matchMedia("(min-width:768px)").matches) {

		if ($(".banner").html() != null) {

			if (scrollY < ($(".banner").offset().top) - 150) {

				$(".banner img").css({
					"margin-top": -scrollY / 3 + "px"
				})

			} else {

				scrollY = 0;
			}

		}

	}

});

// $.scrollUp({

// 	scrollText: "",
// 	scrollSpeed: 2000,
// 	easingType: "easeOutQuint"

// });

/*=============================================
MIGAS DE PAN
=============================================*/

var pagActiva = $(".pagActiva").html();

if (pagActiva != null) {

	var regPagActiva = pagActiva.replace(/-/g, " ");

	$(".pagActiva").html(regPagActiva);

}

/*=============================================
ENLACES PAGINACIÓN
=============================================*/

var url = window.location.href;

var indice = url.split("/");

var pagActual = indice[5];

if (isNaN(pagActual)) {

	$("#item1").addClass("active");

} else {

	$("#item" + pagActual).addClass("active");

}

/*=============================================
OFERTAS
=============================================*/
$(".cerrarOfertas").click(function () {

	$(this).parent().remove();

})

if ($("#moduloOfertas").children().length == 0) {

	$("#moduloOfertas").html(
		'<div class="jumbotron">' +

		'<h1 class="text-center">Lo sentimos</h1>' +

		'<h3 class="text-center">¡En estos momentos no hay ofertas disponibles!</h3>' +

		'</div>'

	);
}

/*=============================================
CONTADOR DE TIEMPO
=============================================*/

var finOferta = $(".countdown");
var fechaFinOferta = [];

for (var i = 0; i < finOferta.length; i++) {

	fechaFinOferta[i] = $(finOferta[i]).attr("finOferta");

	$(finOferta[i]).dsCountDown({

		endDate: new Date(fechaFinOferta[i]),

		theme: 'flat',

		titleDays: 'Días',

		titleHours: 'Horas',

		titleMinutes: 'Minutos',

		titleSeconds: 'Segundos'


	});


}

/*=============================================
CONTADOR DE TIEMPO OFERTAS PRODUCTOS
=============================================*/

var finOferta2 = $('.countdown2').attr("finOferta");

$('.countdown2').dsCountDown({
	endDate: new Date(finOferta2),
	theme: 'black',
	titleDays: 'Dias',
	titleHours: 'Horas',
	titleMinutes: 'Min',
	titleSeconds: 'Seg'

});


/*=============================================
EVENTOS PIXEL DE FACEBOOK
=============================================*/

$(".pixelCategorias").click(function () {

	var titulo = $(this).attr("titulo");

	fbq('track', 'Categoria ' + titulo, {

		title: titulo

	});

});

$(".pixelSubCategorias").click(function () {

	var titulo = $(this).attr("titulo");

	fbq('track', 'Subcategoria ' + titulo, {

		title: titulo

	});

});


$(".pixelOferta").click(function () {

	var titulo = $(this).attr("titulo");

	fbq('track', 'Oferta ' + titulo, {

		title: titulo

	});

});
