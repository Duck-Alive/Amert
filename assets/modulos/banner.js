   var destacados = '';
   var desta = $('.baner');

   function init() {
       destacados = `<figure class="banner hidden-md hidden-sm hidden-xs">

	<img src="http://192.168.100.9/gipromoPWA/backend/vistas/img/slide/slide5/fondo.jpg" class="img-responsive" width="100%">	

	<div class="textoBanner textoDer">
		
		<h1 style="color:#fff">OFERTAS ESPECIALES</h1>

		<h2 style="color:#fff"><strong>50% off</strong></h2>

		<h3 style="color:#fff">Termina el 31 de Octubre</h3>

	</div>

</figure>`;
       desta.html(destacados);
   }

   init();