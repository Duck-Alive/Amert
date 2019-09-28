/*=============================================
CAPTURA DE RUTA
=============================================*/


/*=============================================
FORMATEAR LOS IPUNT
=============================================*/

$("input").focus(function(){

	$(".alert").remove();
})

/*=============================================
VALIDAR EMAIL REPETIDO
=============================================*/

var validarEmailRepetido = false;

$("#inputEmail").change(function(){

	var email = $("#inputEmail").val();

	var datos = new FormData();
	datos.append("validarEmail", email);
	console.log(email);

	$.ajax({

		url:"ajax/usuarios.ajax.php",
		method: "POST",
		data: datos,
		cache: false,
		contentType: false,
		processData: false,
		success:function(respuesta){
			
			if(respuesta == "false"){

				$(".alert").remove();
				validarEmailRepetido = false;

			}else{

				var modo = JSON.parse(respuesta).modo;
				
				if(modo == "directo"){

					modo = "esta página";
				}

				$("#inputEmail").parent().before('<div class="alert alert-warning"><strong>ERROR:</strong> El correo electrónico ya existe en la base de datos, fue registrado a través de '+modo+', por favor ingrese otro diferente</div>')

					validarEmailRepetido = true;

			}

		}

	})

})

/*=============================================
VALIDAR EL REGISTRO DE USUARIO
=============================================*/
function registroUsuario(){

	$(".alert").remove();

	/*=============================================
	VALIDAR EL NOMBRE
	=============================================*/

	var nombre = $("#inputNombreDelAgremiado").val();

	if(nombre != ""){

		var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;

		if(!expresion.test(nombre)){

			$("#inputNombreDelAgremiado").parent().before('<div class="alert alert-warning"><strong>ERROR:</strong> No se permiten números ni caracteres especiales</div>')

			return false;

		}

	}else{

		$("#inputNombreDelAgremiado").parent().before('<div class="alert alert-warning"><strong>ATENCIÓN:</strong> Este campo es obligatorio</div>')

		return false;
	}

	/*=============================================
	VALIDAR EL EMAIL
	=============================================*/

	var email = $("#inputEmail").val();

	if(email != ""){

		var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

		if(!expresion.test(email)){

			$("#inputEmail").parent().before('<div class="alert alert-warning"><strong>ERROR:</strong> Escriba correctamente el correo electrónico</div>')

			return false;

		}

		if(validarEmailRepetido){

			$("#inputEmail").parent().before('<div class="alert alert-danger"><strong>ERROR:</strong> El correo electrónico ya existe en la base de datos, por favor ingrese otro diferente</div>')

			return false;

		}

	}else{

		$("#inputEmail").parent().before('<div class="alert alert-warning"><strong>ATENCIÓN:</strong> Este campo es obligatorio</div>')

		return false;
	}


	/*=============================================
	VALIDAR CONTRASEÑA
	=============================================*/

	var password = $("#inputPass").val();

	if(password != ""){

		var expresion = /^[a-zA-Z0-9]*$/;

		if(!expresion.test(password)){

			$("#inputPass").parent().before('<div class="alert alert-warning"><strong>ERROR:</strong> No se permiten caracteres especiales</div>')

			return false;

		}

	}else{

		$("#inputPass").parent().before('<div class="alert alert-warning"><strong>ATENCIÓN:</strong> Este campo es obligatorio</div>')

		return false;
	}

	/*=============================================
	VALIDAR POLÍTICAS DE PRIVACIDAD
	=============================================*/

	// var politicas = $("#regPoliticas:checked").val();
	
	// if(politicas != "on"){

	// 	$("#regPoliticas").parent().before('<div class="alert alert-warning"><strong>ATENCIÓN:</strong> Debe aceptar nuestras condiciones de uso y políticas de privacidad</div>')

	// 	return false;

	// }

	return true;
}

/*=============================================
CAMBIAR FOTO
=============================================*/

// $("#btnCambiarFoto").click(function(){

// 	$("#imgPerfil").toggle();
// 	$("#subirImagen").toggle();

// })

// $("#datosImagen").change(function(){

// 	var imagen = this.files[0];

// 	/*=============================================
// 	VALIDAMOS EL FORMATO DE LA IMAGEN
// 	=============================================*/
	
// 	if(imagen["type"] != "image/jpeg" && imagen["type"] != "image/png"){

// 		$("#datosImagen").val("");

// 		swal({
// 		  title: "Error al subir la imagen",
// 		  text: "¡La imagen debe estar en formato JPG o PNG!",
// 		  type: "error",
// 		  confirmButtonText: "¡Cerrar!",
// 		  closeOnConfirm: false
// 		},
// 		function(isConfirm){
// 				 if (isConfirm) {	   
// 				    window.location = rutaOculta+"perfil";
// 				  } 
// 		});

// 	}

// 	else if(Number(imagen["size"]) > 2000000){

// 		$("#datosImagen").val("");

// 		swal({
// 		  title: "Error al subir la imagen",
// 		  text: "¡La imagen no debe pesar más de 2 MB!",
// 		  type: "error",
// 		  confirmButtonText: "¡Cerrar!",
// 		  closeOnConfirm: false
// 		},
// 		function(isConfirm){
// 				 if (isConfirm) {	   
// 				    window.location = rutaOculta+"perfil";
// 				  } 
// 		});

// 	}else{

// 		var datosImagen = new FileReader;
// 		datosImagen.readAsDataURL(imagen);

// 		$(datosImagen).on("load", function(event){

// 			var rutaImagen = event.target.result;
// 			$(".previsualizar").attr("src",  rutaImagen);

// 		})

// 	}


// })










