   var destacados = '';
   var desta = $('.destacados');
function init(){
 destacados = `<div class="container well well-xs">

    <div class="container">

        <div class="row">

            <div class="col-xs-12 organizarProductos">

                <div class="btn-group pull-right">

                    <button type="button" class="btn btn-default btnGrid backColor" id="btnGrid0">

                        <i class="fa fa-th" aria-hidden="true"></i>

                        <span class="col-xs-0 pull-right"> GRID</span>

                    </button>

                    <button type="button" class="btn btn-default btnList" id="btnList0">

                        <i class="fa fa-list" aria-hidden="true"></i>

                        <span class="col-xs-0 pull-right"> LIST</span>

                    </button>

                </div>

            </div>

        </div>

    </div>

</div>
<div class="infoproducto">

    <div class="container">

        <div class="row">

            <div class="col-xs-12 tituloDestacado">

                <div class="col-sm-6 col-xs-12">

                    <h1><small>ARTÍCULOS NUEVOS </small></h1>

                </div>

                <div class="col-sm-6 col-xs-12">

                    <a href="articulos-nuevos ">

                        <button class="btn btn-default backColor pull-right">

                            VER MÁS <span class="fa fa-chevron-right"></span>

                        </button>

                    </a>

                </div>

            </div>

            <div class="clearfix"></div>

            <hr>

        </div>
        <ul class="grid0 col-sm-8">
            <li class="col-md-3 col-sm-3 col-xs-3 visorImg img-thumbnail">
            <figure class="visor">
            <a href="frances-r7642 ">
            <img src="https://duckaliveapps.com/invasioncaps/backend/vistas/img/multimedia/frances-r7642/frances_royal.jpg">
            <img src="https://duckaliveapps.com/invasioncaps/backend/vistas/img/multimedia/frances-r7642/frances_grey.jpg">
            <img src="https://duckaliveapps.com/invasioncaps/backend/vistas/img/multimedia/frances-r7642/frances_navy.jpg">
            <img src="https://duckaliveapps.com/invasioncaps/backend/vistas/img/multimedia/frances-r7642/frances_mango.jpg">
            <img src="https://duckaliveapps.com/invasioncaps/backend/vistas/img/multimedia/frances-r7642/frances_white.jpg">
            </a>
            </figure>
            <div class="flexsl">
            <ul class="slides">
            <div id="colorSelect" class="c--anim-colorSelect" style="width:20px; height:20px; display:inline-block; margin:5px; cursor:pointer; background: red; border-radius:50%;">
            </div>
            <div id="colorSelect" class="c--anim-colorSelect" style="width:20px; height:20px; display:inline-block; margin:5px; cursor:pointer; background: blue; border-radius:50%;">
            </div>
            </ul>
            </div>
            <div class="col-xs-3 precio">
                <h2><small>MXN $1</small></h2>
            </div>
            <div class="col-xs-3 enlaces">
            <div class="btn-group pull-right">
            <button type="button" class="btn btn-default btn-xs deseos" idproducto="4" title="Agregar a mi lista de deseos">
                <i class="fa fa-heart" aria-hidden="true"></i>
            </button>
            <a href="frances-r7642" class="pixelProducto">
            <button type="button" class="btn btn-default btn-xs" title="Ver producto">
            <i class="fa fa-eye" aria-hidden="true"></i>
            </button>
            </a>
            </div>
            </div>
            <h4>
            <small>
            <a href="frances-r7642" class="pixelProducto">
                Frances R7642
            <span style="color:rgba(0,0,0,0)">-</span>
            <span class="label label-warning fontSize">Nuevo</span>
            </a>
            </small>
            </h4>
			</li>
			<li class="col-md-3 col-sm-3 col-xs-3 visorImg img-thumbnail">
            <figure class="visor">
            <a href="frances-r7642 ">
            <img src="https://duckaliveapps.com/invasioncaps/backend/vistas/img/multimedia/frances-r7642/frances_royal.jpg">
            <img src="https://duckaliveapps.com/invasioncaps/backend/vistas/img/multimedia/frances-r7642/frances_grey.jpg">
            <img src="https://duckaliveapps.com/invasioncaps/backend/vistas/img/multimedia/frances-r7642/frances_navy.jpg">
            <img src="https://duckaliveapps.com/invasioncaps/backend/vistas/img/multimedia/frances-r7642/frances_mango.jpg">
            <img src="https://duckaliveapps.com/invasioncaps/backend/vistas/img/multimedia/frances-r7642/frances_white.jpg">
            </a>
            </figure>
            <div class="flexsl">
            <ul class="slides">
            <div id="colorSelect" class="c--anim-colorSelect" style="width:20px; height:20px; display:inline-block; margin:5px; cursor:pointer; background: red; border-radius:50%;">
            </div>
            <div id="colorSelect" class="c--anim-colorSelect" style="width:20px; height:20px; display:inline-block; margin:5px; cursor:pointer; background: blue; border-radius:50%;">
            </div>
            </ul>
            </div>
            <div class="col-xs-3 precio">
                <h2><small>MXN $1</small></h2>
            </div>
            <div class="col-xs-3 enlaces">
            <div class="btn-group pull-right">
            <button type="button" class="btn btn-default btn-xs deseos" idproducto="4" title="Agregar a mi lista de deseos">
                <i class="fa fa-heart" aria-hidden="true"></i>
            </button>
            <a href="frances-r7642" class="pixelProducto">
            <button type="button" class="btn btn-default btn-xs" title="Ver producto">
            <i class="fa fa-eye" aria-hidden="true"></i>
            </button>
            </a>
            </div>
            </div>
            <h4>
            <small>
            <a href="frances-r7642" class="pixelProducto">
                Frances R7642
            <span style="color:rgba(0,0,0,0)">-</span>
            <span class="label label-warning fontSize">Nuevo</span>
            </a>
            </small>
            </h4>
            </li>
        </ul>
    </div>
</div>
`;
             desta.html(destacados);
}

init();