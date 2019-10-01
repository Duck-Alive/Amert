var sliders = '';
var slid = $('#slide');
function init() {
    sliders = `
<div class="row">
    <ul>
        <li>
            <img src="http://192.168.100.9/gipromoPWA/backend/vistas/img/slide/slide5/fondo.jpg">
			<div class="slideOpciones slideOpcion2">
                <div class="textosSlide" style="top:50%; left:0%; width:10%; right:5%">
        			<div class="textosSlide" style="">
				        <h1 style="font-size:28px; color:#333"></h1>
    					<h2 style="font-size:16px; color:#777">Set de Oficina </h2>
                        <h3 style="font-size:14px; color:#888">Cubo</h3>
                        <a href="#">
							<button class="btn btn-default backColor text-uppercase">
								<span class="fa fa-chevron-right"></span>
							</button>
                        </a>
                    </div>
				</div>
			</div>
		</li>
    </ul>
	<ol id="paginacion">
		<li item=""><span class="fa fa-circle"></span></li>
	</ol>
</div>`;
       slid.html(sliders);
   }
   init();