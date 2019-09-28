<?php 

$servidor = Ruta::ctrRutaServidor();

  $url = Ruta::ctrRuta();
            echo'<div class="ae-masonry-xs-3 ae-masonry-md-3 ae-masonry-xl-6">';
                $item = 'banner';
                
                $categorias = ControladorProductos::ctrMostrarBanners($item);
                foreach ($categorias as $key => $value) {
                if ($value["estado"] != 0) {
                  echo '<a href="'. $url . $value["ruta"] . '" class="rk-item ae-masonry__item">
                        <img alt="' . $value["ruta"] . '" class="img-thumbnail" src="'. $servidor . $value["img"] .'">
                        <div class="item-meta">
                        <h2>' . $value["ruta"] . '</h2>
                        <p>' . $value["ruta"] . '</p>
                        </div>
                        </a>';
                    }
                }
            
        
          

        echo'</div>';


?>
