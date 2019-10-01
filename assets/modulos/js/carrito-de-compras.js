

/*=============================================
/*=============================================
/*=============================================
/*=============================================
/*=============================================
VISUALIZAR LA CESTA DEL CARRITO DE COMPRAS
=============================================*/

if(localStorage.getItem("cantidadCesta") != null){

	$(".cantidadCesta").html(localStorage.getItem("cantidadCesta"));
	$(".sumaCesta").html(localStorage.getItem("sumaCesta"));

}else{

	$(".cantidadCesta").html("0");
	$(".sumaCesta").html("0");

}


/*=============================================
/*=============================================
/*=============================================
/*=============================================
/*=============================================
VISUALIZAR LOS PRODUCTOS EN LA PÁGINA CARRITO DE COMPRAS
=============================================*/

if(localStorage.getItem("listaProductos") != null){

	var listaCarrito = JSON.parse(localStorage.getItem("listaProductos"));

	listaCarrito.forEach(funcionForEach);

	function funcionForEach(item, index){

		var datosProducto = new FormData();
		var precio = 0;

		datosProducto.append("id", item.idProducto);

		$.ajax({

			url:rutaOculta+"ajax/producto.ajax.php",
			method:"POST",
			data: datosProducto,
			cache: false,
			contentType: false,
			processData:false,
			dataType: "json",
			success: function(respuesta){

				if(respuesta["precioOferta"] == 0){

					precio = respuesta["precio"];

				}else{

					precio = respuesta["precioOferta"];
				}

				$(".cuerpoCarrito").append(

					'<div clas="row itemCarrito">'+
						
						'<div class="col-sm-1 col-xs-12">'+
							
							'<br>'+

							'<center>'+
								
								'<button class="btn btn-default backColor quitarItemCarrito" idProducto="'+item.idProducto+'" peso="'+item.peso+'">'+
									
									'<i class="fa fa-times"></i>'+

								'</button>'+

							'</center>'+	

						'</div>'+
						'<div class="col-sm-1 col-xs-12">'+
							
							'<figure>'+
								
								'<img src="'+item.imagen+'" class="img-thumbnail">'+

							'</figure>'+

						'</div>'+

						'<div class="col-sm-4 col-xs-12">'+

							'<br>'+

							'<p class="tituloCarritoCompra text-left">'+item.titulo+'</p>'+

						'</div>'+

						'<div class="col-md-2 col-sm-1 col-xs-12">'+

							'<br>'+

							'<p class="precioCarritoCompra text-center">MXN $<span>'+precio+'</span></p>'+

						'</div>'+

						'<div class="col-md-2 col-sm-3 col-xs-8">'+

							'<br>'+	

							'<div class="col-xs-8">'+

								'<center>'+
								
									'<input type="number" class="form-control cantidadItem" min="1" value="'+item.cantidad+'" tipo="'+item.tipo+'" precio="'+item.precio+'" idProducto="'+item.idProducto+'">'+	

								'</center>'+

							'</div>'+

						'</div>'+

						'<div class="col-md-2 col-sm-1 col-xs-4 text-center">'+
							
							'<br>'+

							'<p class="subTotal'+item.idProducto+' subtotales">'+
								
								'<strong>MXN $<span>'+item.precio+'</span></strong>'+

							'</p>'+

						'</div>'+
						
					'</div>'+

					'<div class="clearfix"></div>'+

					'<hr>');

				/*=============================================
				EVITAR MANIPULAR LA CANTIDAD EN PRODUCTOS VIRTUALES
				=============================================*/

				$(".cantidadItem[tipo='virtual']").attr("readonly","true");

				/*=============================================
				/*=============================================
				/*=============================================
				/*=============================================
				/*=============================================
				ACTUALIZAR SUBTOTAL
				=============================================*/
				var precioCarritoCompra = $(".cuerpoCarrito .precioCarritoCompra span");
				var cantidadItem = $(".cuerpoCarrito .cantidadItem");

				for(var i = 0; i < precioCarritoCompra.length; i++){

					var precioCarritoCompraArray = $(precioCarritoCompra[i]).html();
					var cantidadItemArray = $(cantidadItem[i]).val();
					var idProductoArray = $(cantidadItem[i]).attr("idProducto");

					$(".subTotal"+idProductoArray).html('<strong>MXN $<span>'+(precioCarritoCompraArray*cantidadItemArray)+'</span></strong>')

					sumaSubtotales();
					cestaCarrito(precioCarritoCompra.length);

				}

			}
		
		})

	}

}else{

	$(".cuerpoCarrito").html('<div class="well">Aún no hay productos en el carrito de compras.</div>');
	$(".sumaCarrito").hide();
	$(".cabeceraCheckout").hide();
}

/*=============================================
/*=============================================
/*=============================================
/*=============================================
/*=============================================
AGREGAR AL CARRITO
=============================================*/

$(".agregarCarrito").click(function(){

	var idProducto = $(this).attr("idProducto");
	var imagen = $(this).attr("imagen");
	var titulo = $(this).attr("titulo");
	var precio = $(this).attr("precio");
	var tipo = $(this).attr("tipo");
	var peso = $(this).attr("peso");

	var agregarAlCarrito = false;

	/*=============================================
	CAPTURAR DETALLES
	=============================================*/

	if(tipo == "virtual"){

		agregarAlCarrito = true;

	}else{

		var seleccionarDetalle = $(".seleccionarDetalle");

		for(var i = 0; i < seleccionarDetalle.length; i++){

			if($(seleccionarDetalle[i]).val() == ""){

				swal({
					  title: "Debe seleccionar Talla y Color",
					  text: "",
					  type: "warning",
					  showCancelButton: false,
					  confirmButtonColor: "#DD6B55",
					  confirmButtonText: "¡Seleccionar!",
					  closeOnConfirm: false
					})

				return;

			}else{

				titulo = titulo + "-" + $(seleccionarDetalle[i]).val();

				agregarAlCarrito = true;

			}

		}		

	}

	/*=============================================
	ALMACENAR EN EL LOCALSTARGE LOS PRODUCTOS AGREGADOS AL CARRITO
	=============================================*/

	if(agregarAlCarrito){

		/*=============================================
		RECUPERAR ALMACENAMIENTO DEL LOCALSTORAGE
		=============================================*/

		if(localStorage.getItem("listaProductos") == null){

			listaCarrito = [];

		}else{

			var listaProductos = JSON.parse(localStorage.getItem("listaProductos"));

			for(var i = 0; i < listaProductos.length; i++){

				if(listaProductos[i]["idProducto"] == idProducto && listaProductos[i]["tipo"] == "virtual"){

					swal({
					  title: "El producto ya está agregado al carrito de compras",
					  text: "",
					  type: "warning",
					  showCancelButton: false,
					  confirmButtonColor: "#DD6B55",
					  confirmButtonText: "¡Volver!",
					  closeOnConfirm: false
					})

					return;

				}

			}

			listaCarrito.concat(localStorage.getItem("listaProductos"));

		}

		listaCarrito.push({"idProducto":idProducto,
						   "imagen":imagen,
						   "titulo":titulo,
						   "precio":precio,
					       "tipo":tipo,
				           "peso":peso,
				           "cantidad":"1"});

		localStorage.setItem("listaProductos", JSON.stringify(listaCarrito));

		/*=============================================
		ACTUALIZAR LA CESTA
		=============================================*/

		var cantidadCesta = Number($(".cantidadCesta").html()) + 1;
		var sumaCesta = Number($(".sumaCesta").html()) + Number(precio);

		$(".cantidadCesta").html(cantidadCesta);
		$(".sumaCesta").html(sumaCesta);

		localStorage.setItem("cantidadCesta", cantidadCesta);
		localStorage.setItem("sumaCesta", sumaCesta);
		
		/*=============================================
		MOSTRAR ALERTA DE QUE EL PRODUCTO YA FUE AGREGADO
		=============================================*/

		swal({
			  title: "",
			  text: "¡Se ha agregado un nuevo producto al carrito de compras!",
			  type: "success",
			  showCancelButton: true,
			  confirmButtonColor: "#DD6B55",
			  cancelButtonText: "¡Continuar comprando!",
			  confirmButtonText: "¡Ir a mi carrito de compras!",
			  closeOnConfirm: false
			},
			function(isConfirm){
				if (isConfirm) {	   
					 window.location = rutaOculta+"carrito-de-compras";
				} 
		});

	}

})

/*=============================================
/*=============================================
/*=============================================
/*=============================================
/*=============================================
QUITAR PRODUCTOS DEL CARRITO
=============================================*/

$(document).on("click", ".quitarItemCarrito", function(){

	$(this).parent().parent().parent().remove();

	var idProducto = $(".cuerpoCarrito button");
	var imagen = $(".cuerpoCarrito img");
	var titulo = $(".cuerpoCarrito .tituloCarritoCompra");
	var precio = $(".cuerpoCarrito .precioCarritoCompra span");
	var cantidad = $(".cuerpoCarrito .cantidadItem");

	/*=============================================
	SI AÚN QUEDAN PRODUCTOS VOLVERLOS AGREGAR AL CARRITO (LOCALSTORAGE)
	=============================================*/

	listaCarrito = [];

	if(idProducto.length != 0){

		for(var i = 0; i < idProducto.length; i++){

			var idProductoArray = $(idProducto[i]).attr("idProducto");
			var imagenArray = $(imagen[i]).attr("src");
			var tituloArray = $(titulo[i]).html();
			var precioArray = $(precio[i]).html();
			var pesoArray = $(idProducto[i]).attr("peso");
			var tipoArray = $(cantidad[i]).attr("tipo");
			var cantidadArray = $(cantidad[i]).val();

			listaCarrito.push({"idProducto":idProductoArray,
						   "imagen":imagenArray,
						   "titulo":tituloArray,
						   "precio":precioArray,
					       "tipo":tipoArray,
				           "peso":pesoArray,
				           "cantidad":cantidadArray});

		}

		localStorage.setItem("listaProductos",JSON.stringify(listaCarrito));

		sumaSubtotales();
		cestaCarrito(listaCarrito.length);


	}else{

		/*=============================================
		SI YA NO QUEDAN PRODUCTOS HAY QUE REMOVER TODO
		=============================================*/	

		localStorage.removeItem("listaProductos");

		localStorage.setItem("cantidadCesta","0");
		
		localStorage.setItem("sumaCesta","0");

		$(".cantidadCesta").html("0");
		$(".sumaCesta").html("0");

		$(".cuerpoCarrito").html('<div class="well">Aún no hay productos en el carrito de compras.</div>');
		$(".sumaCarrito").hide();
		$(".cabeceraCheckout").hide();

	}

})


/*=============================================
/*=============================================
/*=============================================
/*=============================================
/*=============================================
GENERAR SUBTOTAL DESPUES DE CAMBIAR CANTIDAD
=============================================*/
$(document).on("change", ".cantidadItem", function(){

	var cantidad = $(this).val();
	var precio = $(this).attr("precio");
	var idProducto = $(this).attr("idProducto");

	$(".subTotal"+idProducto).html('<strong>MXN $<span>'+(cantidad*precio)+'</span></strong>');

	/*=============================================
	ACTUALIZAR LA CANTIDAD EN EL LOCALSTORAGE
	=============================================*/

	var idProducto = $(".cuerpoCarrito button");
	var imagen = $(".cuerpoCarrito img");
	var titulo = $(".cuerpoCarrito .tituloCarritoCompra");
	var precio = $(".cuerpoCarrito .precioCarritoCompra span");
	var cantidad = $(".cuerpoCarrito .cantidadItem");

	listaCarrito = [];

	for(var i = 0; i < idProducto.length; i++){

			var idProductoArray = $(idProducto[i]).attr("idProducto");
			var imagenArray = $(imagen[i]).attr("src");
			var tituloArray = $(titulo[i]).html();
			var precioArray = $(precio[i]).html();
			var pesoArray = $(idProducto[i]).attr("peso");
			var tipoArray = $(cantidad[i]).attr("tipo");
			var cantidadArray = $(cantidad[i]).val();

			listaCarrito.push({"idProducto":idProductoArray,
						   "imagen":imagenArray,
						   "titulo":tituloArray,
						   "precio":precioArray,
					       "tipo":tipoArray,
				           "peso":pesoArray,
				           "cantidad":cantidadArray});

		}

		localStorage.setItem("listaProductos",JSON.stringify(listaCarrito));

		sumaSubtotales();
		cestaCarrito(listaCarrito.length);
})

/*=============================================
/*=============================================
/*=============================================
/*=============================================
/*=============================================
SUMA DE TODOS LOS SUBTOTALES
=============================================*/
function sumaSubtotales(){

	var subtotales = $(".subtotales span");
	var arraySumaSubtotales = [];
	
	for(var i = 0; i < subtotales.length; i++){

		var subtotalesArray = $(subtotales[i]).html();
		arraySumaSubtotales.push(Number(Math.floor(subtotalesArray*100)/100));
		
	}

	
	function sumaArraySubtotales(total, numero){

		return total + numero;

	}

	var sumaTotal = arraySumaSubtotales.reduce(sumaArraySubtotales);
	
	$(".sumaSubTotal").html('<strong>MXN $<span>'+Math.floor(sumaTotal*100)/100+'</span></strong>');

	$(".sumaCesta").html(Math.floor(sumaTotal*100)/100);

	localStorage.setItem("sumaCesta", Math.floor(sumaTotal*100)/100);


}

/*=============================================
/*=============================================
/*=============================================
/*=============================================
/*=============================================
ACTUALIZAR CESTA AL CAMBIAR CANTIDAD
=============================================*/
function cestaCarrito(cantidadProductos){

	/*=============================================
	SI HAY PRODUCTOS EN EL CARRITO
	=============================================*/

	if(cantidadProductos != 0){
		
		var cantidadItem = $(".cuerpoCarrito .cantidadItem");

		var arraySumaCantidades = [];
	
		for(var i = 0; i < cantidadItem .length; i++){

			var cantidadItemArray = $(cantidadItem[i]).val();
			arraySumaCantidades.push(Number(cantidadItemArray));
			
		}
	
		function sumaArrayCantidades(total, numero){

			return total + numero;

		}

		var sumaTotalCantidades = arraySumaCantidades.reduce(sumaArrayCantidades);
		
		$(".cantidadCesta").html(sumaTotalCantidades );
		localStorage.setItem("cantidadCesta", sumaTotalCantidades);

	}

}

/*=============================================
/*=============================================
/*=============================================
/*=============================================
/*=============================================
CHECKOUT
=============================================*/

$("#btnCheckout").click(function(){

	$(".listaProductos table.tablaProductos tbody").html("");

	$("#checkPaypal").prop("checked",true);
	$("#checkPayu").prop("checked", false);

	var idUsuario = $(this).attr("idUsuario");
	var peso = $(".cuerpoCarrito button, .comprarAhora button");
	var titulo = $(".cuerpoCarrito .tituloCarritoCompra, .comprarAhora .tituloCarritoCompra");
	var cantidad = $(".cuerpoCarrito .cantidadItem, .comprarAhora .cantidadItem");
	var subtotal = $(".cuerpoCarrito .subtotales span, .comprarAhora .subtotales span");
	var tipoArray =[];
	var cantidadPeso = [];

	/*=============================================
	SUMA SUBTOTAL
	=============================================*/

	var sumaSubTotal = $(".sumaSubTotal span")
	
	$(".valorSubtotal").html($(sumaSubTotal).html());
	$(".valorSubtotal").attr("valor",$(sumaSubTotal).html());

	/*=============================================
	TASAS DE IMPUESTO
	=============================================*/

	var impuestoTotal = ($(".valorSubtotal").html() * $("#tasaImpuesto").val()) /100;
	
	$(".valorTotalImpuesto").html(Math.floor(impuestoTotal*100)/100);
	$(".valorTotalImpuesto").attr("valor",Math.floor(impuestoTotal*100)/100);

	sumaTotalCompra()

	/*=============================================
	VARIABLES ARRAY 
	=============================================*/

	for(var i = 0; i < titulo.length; i++){

		var pesoArray = $(peso[i]).attr("peso");
		var tituloArray = $(titulo[i]).html();
		var cantidadArray = $(cantidad[i]).val();		
		var subtotalArray = $(subtotal[i]).html();

		/*=============================================
		EVALUAR EL PESO DE ACUERDO A LA CANTIDAD DE PRODUCTOS
		=============================================*/

		cantidadPeso[i] = pesoArray * cantidadArray;

		function sumaArrayPeso(total, numero){

			return total + numero;

		}

		var sumaTotalPeso = cantidadPeso.reduce(sumaArrayPeso);
		
		/*=============================================
		MOSTRAR PRODUCTOS DEFINITIVOS A COMPRAR
		=============================================*/

		$(".listaProductos table.tablaProductos tbody").append('<tr>'+
															   '<td class="valorTitulo">'+tituloArray+'</td>'+
															   '<td class="valorCantidad">'+cantidadArray+'</td>'+
															   '<td>$<span class="valorItem" valor="'+subtotalArray+'">'+subtotalArray+'</span></td>'+
															   '<tr>');

		/*=============================================
		SELECCIONAR PAÍS DE ENVÍO SI HAY PRODUCTOS FÍSICOS
		=============================================*/
	
		tipoArray.push($(cantidad[i]).attr("tipo"));
		
		function checkTipo(tipo){

			return tipo == "fisico";
		
		}

	}

	/*=============================================
	EXISTEN PRODUCTOS FÍSICOS
	=============================================*/

	if(tipoArray.find(checkTipo) == "fisico"){

		$(".seleccionePais").html('<select class="form-control" id="seleccionarPais" required>'+
						
						          '<option value="">Seleccione el país</option>'+

					              '</select>');


		$(".formEnvio").show();

		$(".btnPagar").attr("tipo","fisico");

		$.ajax({
			url:rutaOculta+"vistas/js/plugins/countries.json",
			type: "GET",
			cache: false,
			contentType: false,
			processData:false,
			dataType:"json",
			success: function(respuesta){

				respuesta.forEach(seleccionarPais);

				function seleccionarPais(item, index){

					var pais = item.name;
					var codPais = item.code;

					$("#seleccionarPais").append('<option value="'+codPais+'">'+pais+'</option>');
				
				}

			}
		})

		/*=============================================
		EVALUAR TASAS DE ENVÍO SI EL PRODUCTO ES FÍSICO
		=============================================*/

		$("#seleccionarPais").change(function(){

			$(".alert").remove();

			var pais = $(this).val();
			var tasaPais = $("#tasaPais").val();

			if(pais == tasaPais){

				var resultadoPeso = sumaTotalPeso * $("#envioNacional").val();
				
				if(resultadoPeso < $("#tasaMinimaNal").val()){

					$(".valorTotalEnvio").html($("#tasaMinimaNal").val());
					$(".valorTotalEnvio").attr("valor", $("#tasaMinimaNal").val());

				}else{

					$(".valorTotalEnvio").html(resultadoPeso);
					$(".valorTotalEnvio").attr("valor",resultadoPeso);
				}

			}else{

				var resultadoPeso = sumaTotalPeso * $("#envioInternacional").val();
				
				if(resultadoPeso < $("#tasaMinimaInt").val()){

					$(".valorTotalEnvio").html($("#tasaMinimaInt").val());
					$(".valorTotalEnvio").attr("valor",$("#tasaMinimaInt").val());

				}else{

					$(".valorTotalEnvio").html(resultadoPeso);
					$(".valorTotalEnvio").attr("valor",resultadoPeso);
				}

			}	

			sumaTotalCompra();
			pagarConPayu();

		})

	}else{

		$(".btnPagar").attr("tipo","virtual");
	}

})

/*=============================================
/*=============================================
/*=============================================
/*=============================================
/*=============================================
SUMA TOTAL DE LA COMPRA
=============================================*/
function sumaTotalCompra(){

	var sumaTotalTasas = Number($(".valorSubtotal").html())+ 
	                     Number($(".valorTotalEnvio").html())+ 
	                     Number($(".valorTotalImpuesto").html());


	$(".valorTotalCompra").html(Math.floor(sumaTotalTasas*100)/100);
	$(".valorTotalCompra").attr("valor",Math.floor(sumaTotalTasas*100)/100);

	localStorage.setItem("total",hex_md5($(".valorTotalCompra").html()));
}

/*=============================================
/*=============================================
/*=============================================
/*=============================================
MÉTODO DE PAGO PARA CAMBIO DE DIVISA
=============================================*/

var metodoPago = "paypal";
divisas(metodoPago);

$("input[name='pago']").change(function(){

	var metodoPago = $(this).val();

	divisas(metodoPago);

	if(metodoPago == "payu"){

		$(".btnPagar").hide();
		$(".formPayu").show();

		pagarConPayu();

	}else{

		$(".btnPagar").show();
		$(".formPayu").hide();

	}

})

/*=============================================
/*=============================================
/*=============================================
/*=============================================
FUNCIÓN PARA EL CAMBIO DE DIVISA
=============================================*/

function divisas(metodoPago){

	$("#cambiarDivisa").html("");

	if(metodoPago == "paypal"){

		$("#cambiarDivisa").append('<option value="MXN">MXN</option>'+
			                       '<option value="EUR">EUR</option>'+
			                       '<option value="GBP">GBP</option>'+
			                       '<option value="MXN">MXN</option>'+
			                       '<option value="JPY">JPY</option>'+
			                       '<option value="CAD">CAD</option>'+
			                       '<option value="BRL">BRL</option>')

	}else{

		$("#cambiarDivisa").append('<option value="MXN">MXN</option>'+
			                       '<option value="PEN">PEN</option>'+
			                       '<option value="COP">COP</option>'+
			                       '<option value="MXN">MXN</option>'+
			                       '<option value="CLP">CLP</option>'+
			                       '<option value="ARS">ARS</option>'+
			                       '<option value="BRL">BRL</option>')

	}

}

/*=============================================
/*=============================================
/*=============================================
/*=============================================
CAMBIO DE DIVISA
=============================================*/

var divisaBase = "MXN";

$("#cambiarDivisa").change(function(){

	$(".alert").remove();

	if($("#seleccionarPais").val() == ""){

		$("#cambiarDivisa").after('<div class="alert alert-warning">No ha seleccionado el país de envío</div>');

		return;

	}
	
	var divisa = $(this).val();

	$.ajax({

		url: "http://free.currencyconverterapi.com/api/v3/convert?q="+divisaBase+"_"+divisa+"&compact=y",
		type:"GET",
		cache: false,
	    contentType: false,
	    processData: false,
	    dataType:"jsonp",
	    success:function(respuesta){
   	
	    	var divisaString = JSON.stringify(respuesta);
	    	var conversion = divisaString.substr(18,4);

	    	$(".cambioDivisa").html(divisa);
	    	
	    	if(divisa == "MXN"){

	    		$(".valorSubtotal").html($(".valorSubtotal").attr("valor"))
		    	$(".valorTotalEnvio").html($(".valorTotalEnvio").attr("valor"))
		    	$(".valorTotalImpuesto").html($(".valorTotalImpuesto").attr("valor"))
		    	$(".valorTotalCompra").html($(".valorTotalCompra").attr("valor"))

		    	var valorItem = $(".valorItem");

		    	localStorage.setItem("total",hex_md5($(".valorTotalCompra").html()));

		    	for(var i = 0; i < valorItem.length; i++){

		    		$(valorItem[i]).html($(valorItem[i]).attr("valor"));

		    	}
	    		
	    	}else{
	
		    	$(".valorSubtotal").html(Math.floor(Number(conversion) * Number($(".valorSubtotal").attr("valor"))*100)/100)
		    	$(".valorTotalEnvio").html(Math.floor(Number(conversion) * Number($(".valorTotalEnvio").attr("valor"))*100)/100)
		    	$(".valorTotalImpuesto").html(Math.floor(Number(conversion) * Number($(".valorTotalImpuesto").attr("valor"))*100)/100)
		    	$(".valorTotalCompra").html(Math.floor(Number(conversion) * Number($(".valorTotalCompra").attr("valor"))*100)/100)

		    	var valorItem = $(".valorItem");

		    	localStorage.setItem("total",hex_md5($(".valorTotalCompra").html()));

		    	for(var i = 0; i < valorItem.length; i++){

		    		$(valorItem[i]).html(Math.floor(Number(conversion) * Number($(valorItem[i]).attr("valor"))*100)/100);

		    	}

		    }

	    	sumaTotalCompra();

	    	pagarConPayu();

	    }

	})	

	

})


/*=============================================
/*=============================================
/*=============================================
/*=============================================
/*=============================================
BOTÓN PAGAR PAYPAL
=============================================*/

$(".btnPagar").click(function(){

	var tipo = $(this).attr("tipo");

	if(tipo == "fisico" && $("#seleccionarPais").val() == ""){

		$(".btnPagar").after('<div class="alert alert-warning">No ha seleccionado el país de envío</div>');

		return;

	}

	var divisa = $("#cambiarDivisa").val();
	var total = $(".valorTotalCompra").html();
	var totalEncriptado = localStorage.getItem("total");
	var impuesto = $(".valorTotalImpuesto").html();
	var envio = $(".valorTotalEnvio").html();
	var subtotal = $(".valorSubtotal").html();
	var titulo = $(".valorTitulo");
	var cantidad = $(".valorCantidad");
	var valorItem = $(".valorItem");
	var idProducto = $('.cuerpoCarrito button, .comprarAhora button');

	var tituloArray = [];
	var cantidadArray = [];
	var valorItemArray = [];
	var idProductoArray = [];

	for(var i = 0; i < titulo.length; i++){

		tituloArray[i] = $(titulo[i]).html();
		cantidadArray[i] = $(cantidad[i]).html();
		valorItemArray[i] = $(valorItem[i]).html();
		idProductoArray[i] = $(idProducto[i]).attr("idProducto");

	}

	var datos = new FormData();

	datos.append("divisa", divisa);
	datos.append("total",total);
	datos.append("totalEncriptado",totalEncriptado);
	datos.append("impuesto",impuesto);
	datos.append("envio",envio);
	datos.append("subtotal",subtotal);
	datos.append("tituloArray",tituloArray);
	datos.append("cantidadArray",cantidadArray);
	datos.append("valorItemArray",valorItemArray);
	datos.append("idProductoArray",idProductoArray);

	$.ajax({
		 url:rutaOculta+"ajax/carrito.ajax.php",
		 method:"POST",
		 data: datos,
		 cache: false,
         contentType: false,
         processData: false,
         success:function(respuesta){
         	
               window.location = respuesta;

         }

	})

})

/*=============================================
/*=============================================
/*=============================================
/*=============================================
/*=============================================
BOTÓN PAGAR PAYU
=============================================*/

function pagarConPayu(){

	if($("#seleccionarPais").val() == ""){

		$(".formPayu").after('<div class="alert alert-warning">No ha seleccionado el país de envío</div>');
		
		$(".formPayu input[name='Submit']").attr("type","button");
		
		return;

	}

	var divisa = $("#cambiarDivisa").val();
	var total = $(".valorTotalCompra").html();
	var impuesto = $(".valorTotalImpuesto").html();
	var envio = $(".valorTotalEnvio").html();
	var subtotal = $(".valorSubtotal").html();
	var titulo = $(".valorTitulo");
	var cantidad = $(".valorCantidad");
	var valorItem = $(".valorItem");
	var idProducto = $('.cuerpoCarrito button, .comprarAhora button');

	var tituloArray = [];
	var cantidadArray = [];
	var idProductoArray = [];
	var valorItemArray = [];

	for(var i = 0; i < titulo.length; i++){

		tituloArray[i] = $(titulo[i]).html();
		cantidadArray[i] = $(cantidad[i]).html();
		idProductoArray[i] = $(idProducto[i]).attr("idProducto");
		valorItemArray[i] = $(valorItem[i]).html();

	}

	var valorItemString = valorItemArray.toString();
	var pago = valorItemString.replace(",","-");

	var datos = new FormData();
	datos.append("metodoPago", "payu");

	if(hex_md5(total) == localStorage.getItem("total")){

		$.ajax({
	      url:rutaOculta+"ajax/carrito.ajax.php",
	      method:"POST",
	      data: datos,
	      cache: false,
	      contentType: false,
	      processData: false,
	      success:function(respuesta){
	          
	          var merchantId = JSON.parse(respuesta).merchantIdPayu;
	          var accountId = JSON.parse(respuesta).accountIdPayu;
	          var apiKey = JSON.parse(respuesta).apiKeyPayu;
	          var modo = JSON.parse(respuesta).modoPayu;
	          var description = tituloArray.toString();
	          var referenceCode = (Number(Math.ceil(Math.random()*1000000))+Number(total).toFixed());
	          var productosToString = idProductoArray.toString();
	          var productos = productosToString.replace(/,/g, "-");
	          var cantidadToString = cantidadArray.toString();
	          var cantidad = cantidadToString.replace(/,/g, "-");
	          var signature = hex_md5(apiKey+"~"+merchantId+"~"+referenceCode+"~"+total+"~"+divisa);
	       

	          if(divisa == "COP"){

	          	var taxReturnBase = (total - impuesto).toFixed(2)

	          }else{

	          	var taxReturnBase = 0;

	          }        

	          if(modo == "sandbox"){

	            var url = "https://sandbox.gateway.payulatam.com/ppp-web-gateway/";
	            var test = 1;

	      	  }else{

	      	  	var url = "https://gateway.payulatam.com/ppp-web-gateway/";
	      	  	var test = 0;

	      	  }

	      	  if(envio != 0){

	      	  	var tipoEnvio = "YES";
	      	  
	      	  }else{

	      	  	var tipoEnvio = "NO";
	      	  }

	           $(".formPayu").attr("method","POST");
	           $(".formPayu").attr("action",url);
			   $(".formPayu input[name='merchantId']").attr("value", merchantId);
			   $(".formPayu input[name='accountId']").attr("value", accountId);
			   $(".formPayu input[name='description']").attr("value", description);
			   $(".formPayu input[name='referenceCode']").attr("value", referenceCode);
			   $(".formPayu input[name='amount']").attr("value", total);
			   $(".formPayu input[name='tax']").attr("value", impuesto);
			   $(".formPayu input[name='taxReturnBase']").attr("value", taxReturnBase);
			   $(".formPayu input[name='shipmentValue']").attr("value", envio);
			   $(".formPayu input[name='currency']").attr("value", divisa);
			   $(".formPayu input[name='confirmationUrl']").attr("value", rutaOculta+"index.php?ruta=finalizar-compra&payu=true&productos="+productos+"&cantidad="+cantidad+"&pago="+pago);
		     	$(".formPayu input[name='responseUrl']").attr("value", rutaOculta+"index.php?ruta=perfil");
		   		$(".formPayu input[name='declinedResponseUrl']").attr("value", rutaOculta+"carrito-de-compras");
		   		$(".formPayu input[name='displayShippingInformation']").attr("value", tipoEnvio);
		   		$(".formPayu input[name='test']").attr("value", test);
		   		$(".formPayu input[name='signature']").attr("value", signature);

			   /*=============================================
				GENERADOR DE TARJETAS DE CRÉDITO
				http://www.elfqrin.com/discard_credit_card_generator.php
				=============================================*/

	      }

	  })
	}
}

/*=============================================
/*=============================================
/*=============================================
/*=============================================
/*=============================================
AGREGAR PRODUCTOS GRATIS
=============================================*/
$(".agregarGratis").click(function(){

	var idProducto = $(this).attr("idProducto");
	var idUsuario = $(this).attr("idUsuario");
	var tipo = $(this).attr("tipo");
	var titulo = $(this).attr("titulo");
	var agregarGratis = false;

	/*=============================================
	VERIFICAR QUE NO TENGA EL PRODUCTO ADQUIRIDO
	=============================================*/

	var datos = new FormData();

	datos.append("idUsuario", idUsuario);
	datos.append("idProducto", idProducto);

	$.ajax({
		url:rutaOculta+"ajax/carrito.ajax.php",
		method:"POST",
      	data: datos,
      	cache: false,
      	contentType: false,
      	processData: false,
      	success:function(respuesta){
      	    
      	    if(respuesta != "false"){

  	    		swal({
				  title: "¡Usted ya adquirió este producto!",
				  text: "",
				  type: "warning",
				  showCancelButton: false,
				  confirmButtonColor: "#DD6B55",
				  confirmButtonText: "Regresar",
				  closeOnConfirm: false
				})


      	    }else{

				if(tipo == "virtual"){

					agregarGratis = true;

				}else{

					var seleccionarDetalle = $(".seleccionarDetalle");

					for(var i = 0; i < seleccionarDetalle.length; i++){

						if($(seleccionarDetalle[i]).val() == ""){

								swal({
									  title: "Debe seleccionar Talla y Color",
									  text: "",
									  type: "warning",
									  showCancelButton: false,
									  confirmButtonColor: "#DD6B55",
									  confirmButtonText: "¡Seleccionar!",
									  closeOnConfirm: false
									})

						}else{

							titulo = titulo + "-" + $(seleccionarDetalle[i]).val();

							agregarGratis = true;

						}

					}		

				}

				if(agregarGratis){

					window.location = rutaOculta+"index.php?ruta=finalizar-compra&gratis=true&producto="+idProducto+"&titulo="+titulo;

				}
    	    
      	    }

      	}

	})

	

})

