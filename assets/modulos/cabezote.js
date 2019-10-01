// localStorage.setItem("usuario", "");
// setTimeout(function () {window.location = localStorage.getItem("rutaActual");}, 1000);
   var part1 = '';
   var pte1 = $('#parte1');

   function init() {
       part1 = `
       <div class="page-header-container">
            
            <div class="quick-access">
                <ul class="top-links">
                    <li class="link-search">
                        <a href="javascript:void(0);">
                            <span class="links-icon"></span>
                            <span class="link-label">Buscar</span>
                        </a>
                        <form id="search_mini_form" class="input-group search-bar cntr">
                            <div class="input-box cntr-innr">
                                <label for="search">Buscar:</label>
                                <input name="search" placeholder="Buscar.." id="q" class="form-control input-group "onkeyup='load(1);'>
                                <span id="loader"></span>
                            </div>
                            <div id="search_autocomplete" class="search-autocomplete"></div>
                        </form>
                    </li>
                    <li>
                        <a href="#">
                            <span>
                                <img class="links-icon" src="img/chat.png" style="width:20px;">
                            </span>
                            <span>Chat</span>
                        </a>
                    </li>
                    <li class="link-contact">
                        <a href="#modalRegistro" data-toggle="modal">
                            <span class="links-icon"></span>
                            <span>Mi cuenta</span>
                        </a>
                    </li>
                    <li><a href="carrito-de-compras">
                        <span class="links-icon">
                        <img src="img/card.png" style="width:30px;">
                        </span>
                        <span>Carrito</span></a>
                    </li>
                </ul>
                <div class="skip-links">
                    <a href="#header-nav" class="skip-link skip-nav">
                        <span class="icon"></span>
                        <span></span>
                    </a>
                </div>
            </div>
            
            <div id="header-nav" class="skip-content">
                <nav id="nav" style="background: #36C0C8;">
                    <ol class="nav-primary">
                        <li class="level0 ">
                            <a href="#" class="level0"><span class="fa fa-home"> INICIO </span></a>
                        </li>
                        <li class="level0 nav-collections">
                            <a href="#">EMPRESA</a>
                            <ul class="level0 subir">
                            <li class="level1">
                                <ul class="level1 SUB">
                                    <li class="level1">
                                        <a href="#"></a>
                                        <div class="nav-cat-image">
                                            <img alt="#" height="100" width="155" src="#">
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            </ul>
                        </li>
                        <li class="level0 nav-collections">
                        <a href="#">SERVICIOS</a>
                        <ul class="level0 subir">
                            <li class="level1">
                                <ul class="level1 SUB">
                                    <li class="level1">
                                        <a href="#"></a>
                                        <div class="nav-cat-image">
                                            <img alt="#" height="100" width="155" src="#">
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        </li>
                        <li class="level0 nav-collections">
                        <a href="#">CATALOGOS</a>
                        <ul class="level0 subir">
                            <li class="level1">
                                <ul class="level1 SUB">
                                    <li class="level1">
                                        <a href="#"></a>
                                        <div class="nav-cat-image">
                                            <img alt="#" height="100" width="155" src="#">
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        </li>
                        <li class="level0 nav-collections">
                        <a href="#">BLOGS</a>
                        <ul class="level0 subir">
                            <li class="level1">
                                <ul class="level1 SUB">
                                    <li class="level1">
                                        <a href="#"></a>
                                        <div class="nav-cat-image">
                                            <img alt="#" height="100" width="155" src="#">
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="level0 nav-collections">
                        <a href="#">VIDEOS</a>
                        <ul class="level0 subir">
                            <li class="level1">
                                <ul class="level1 SUB">
                                    <li class="level1">
                                        <a href="#"></a>
                                        <div class="nav-cat-image">
                                            <img alt="#" height="100" width="155" src="#">
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                   <li class="level0 nav-collections">
                        <a href="#">CONTACTO</a>
                        <ul class="level0 subir">
                            <li class="level1">
                                <ul class="level1 SUB">
                                    <li class="level1">
                                        <a href="#"></a>
                                        <div class="nav-cat-image">
                                            <img alt="#" height="100" width="155" src="#">
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ol>
            </nav>
        </div>
            `;







       pte1.html(part1);
   }

   init();
