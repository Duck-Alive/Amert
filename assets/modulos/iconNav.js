   var destacados = '';
   var desta = $('#navIcon');

   function iconNav() {
       destacados = `<div class="quick-access">
    <ul class="top-links">
        <li class="link-search">
            <a href="javascript:void(0);">
                <span class="links-icon"></span>
                <span class="link-label">Buscar</span>
            </a>
            <form id="search_mini_form" class="input-group search-bar cntr">
                <div class="input-box cntr-innr">
                    <label for="search">Buscar:</label>
                    <input name="search" placeholder="Buscar.." id="q" class="form-control input-group " onkeyup='load(1);'>
                    <span id="loader"></span>
                </div>
                <div id="search_autocomplete" class="search-autocomplete"></div>
            </form>
        </li>
        <li class="link-account">
            <a href="#modalRegistro" data-toggle="modal">
                <span class="links-icon"></span>
                <span class="link-label">Ser distribuidor</span>
            </a>
        </li>
        <li class="link-login">
            <a href="#modalIngreso" data-toggle="modal">
                <span class="links-icon"></span>
                <span class="link-label">Mi cuenta</span>
            </a>
        </li>
        <li class="link-contact">
            <a href="#modalRegistro" data-toggle="modal">
                <span class="links-icon"></span>
                <span class="link-label">Mi cuenta</span>
            </a>
        </li>
    </ul>
    <div class="skip-links">
        <a href="#header-nav" class="skip-link skip-nav iconos_">
            <span class="icon"></span>
            <span class="link-label">Menu</span>
        </a>
    </div>
</div>


                <div id="header-nav" class="skip-content pageHeader">
                    <nav id="nav">
                        <ol class="nav-primary AllCategoryNav">
                            <li class="level0 nav-headwear"><a class="level0 logo" href="javascript:void(0);">Gi Promo</a></li>
                        </ol>
                        <ol class="nav-primary CategoriesNav">
                            <li onClick="empresa()" class="level0"><a class="level0" href="javascript:void(0);">empresa</a></li>
                        </ol>
                        <ol class="nav-primary CategoriesNav">
                            <li onClick="servicios()" class="level0"><a class="level0" href="javascript:void(0);">servicios</a></li>
                        </ol>
                        <ol class="nav-primary CategoriesNav">
                            <li class="level0"><a class="level0" href="#">blogs</a></li>
                        </ol>
                        <ol class="nav-primary cms-nav">
                            <li class="level0 parent"><a class="level0 has-children" href="#">CATALOGOS</a>
                                <ul class="level0">
                                    <li class="level1"><a class="level1" href="boller/index.html">BOLLER
                                            <div class="nav-cat-image">
                                                <img alt="Bolller" height="100" width="100" src="img/logo.png">
                                            </div>
                                        </a></li>
                                    <li class="level1"><a class="level1" href="realtre/index.html">REALTREE
                                            <div class="nav-cat-image">
                                                <img alt="Bolller" height="100" width="100" src="img/logo.png">
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="level0"><a class="level0" href="about">videos</a></li>
                            <li class="level0 parent"><a class="level0 has-children" href="#">CONOCENOS</a>
                                <ul class="level0">
                                    <li class="level1"><a class="level1" href="#">CORREO</a></li>
                                    <li class="level1"><a class="level1" href="#">CHAT</a></li>
                                </ul>
                            </li>
                        </ol>
                        <div class="navPaddingTotal"></div>
                    </nav>
                </div>`;
       desta.html(destacados);
   }
    iconNav();