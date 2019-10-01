(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"conteiner-fluid\">\n\n\n<app-header></app-header>\n<hr class=\"separa\" />\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div class=\"ae-grid au-xs-ta-center au-mb-4\">\n    \n    <div *ngFor=\"let persona of infoService.equipo\"  class=\"animated fadeIn ae-grid__item item-lg-4 ae-kappa au-mb-3\">\n      <img [src]=\"persona.url\" alt=\"\" class=\"au-mb-3\">\n      <h5 class=\"ae-u-bolder au-mt-2\">{{ persona.nombre }}</h5>\n      <p class=\"ae-u-bolder au-mb-3\">{{ persona.subtitulo }}</p>\n      <p class=\"au-lg-ta-left au-mb-3 au-pl-4 au-pr-4\">{{ persona.frase }}</p>\n      <a target=\"_blank\" href=\"https://twitter.com/{{ persona.twitter }}\" class=\"ae-u-bolder au-underline\">{{ persona.twitter }}</a>\n    </div>\n\n  </div>\n  <div class=\"ae-grid au-pt-2\">\n    <div class=\"ae-grid__item item-lg-8 item-lg--offset-2\">\n      <h4 class=\"ae-u-bolder\">Title example</h4>\n      <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>\n    </div>\n  </div>\n  <div class=\"ae-grid ae-grid--alt au-xs-ptp-1\">\n    <div class=\"ae-grid__item--alt item-lg-4\">\n      <h6 class=\"ae-u-boldest\">About Us</h6>\n      <p class=\"au-lh-3\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n    </div>\n    <div class=\"ae-grid__item--alt item-lg-4\">\n      <h6 class=\"ae-u-boldest\">Our Mission</h6>\n      <p class=\"au-lh-3\">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    </div>\n    <div class=\"ae-grid__item--alt item-lg-4\">\n      <h6 class=\"ae-u-boldest\">Our Clients</h6>\n      <p class=\"au-lh-3\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>\n      <p class=\"au-lh-3\">Nemo enim ipsam voluptatem quia voluptas</p>\n    </div>\n  </div>\n  <p class=\"au-flex au-pt-4 group-buttons\"><a href=\"portfolio.html\" class=\"au-mt-4 arrow-button arrow-button--right arrow-button--out\">View Our Portfolio<span class=\"arrow-cont\">\n        <svg>\n          <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\n        </svg></span></a></p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item/item.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item/item.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"producto\">\n  <header [ngStyle]=\"{ 'background-image': 'url(assets/productos/'+ id +'/main.jpg)' }\" \n        class=\"rk-portfolio-cover item-inside-1\">\n    <div class=\"item-inside__meta\">\n      <h1 class=\"ae-u-bolder rk-portfolio-title \">{{ producto.producto }}</h1>\n      <p class=\"ae-theta rk-portfolio-category \">{{ producto.categoria }}</p>\n    </div>\n  </header>\n  <div class=\"ae-container-fluid\">\n    <div class=\"ae-grid ae-grid--collapse rk-portfolio-info \">\n      <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n        <h2 class=\"rk-portfolio-inner-title \">{{ producto.subtitulo1 }}</h2>\n      </div>\n      <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right rk-portfolio-details\">\n        <p class=\"rk-portfolio-inner-client \"><span class=\"ae-lambda\">Client: </span><span class=\"ae-u-bolder\">Agency Design Studio</span></p>\n        <p class=\"au-underline rk-portfolio-inner-website \"><a href=\"#0\" class=\"ae-kappa\">www.agencydesign.com</a></p>\n        <p class=\"ae-kappa ae-u-bold rk-portfolio-inner-date \">12 August, 2015</p>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio--inner\">\n    <div class=\"ae-grid ae-grid--collapse au-xs-ptp-1\">\n      <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\n        <h4 class=\"ae-u-bolder\">{{ producto.subtitulo1 }}</h4>\n        <p class=\"ae-eta\">{{ producto.desc1 }}</p>        \n      </div>\n      <div class=\"ae-grid__item item-lg-6 item-lg--offset-1\">\n        <img src=\"assets/productos/{{ id }}/pic-1.jpg\" alt=\"Urku Portfolio\">\n      </div>\n    </div>\n    <div class=\"ae-grid ae-grid--collapse\">\n      <div class=\"ae-grid__item item-lg-8\">\n        <img src=\"assets/productos/{{ id }}/pic-2.jpg\" alt=\"Urku Portfolio\">\n      </div>\n      <div class=\"ae-grid__item item-lg-3 item-lg--offset-1 au-lg-ptp-1\">\n        <p>{{ producto.desc2 }}</p>\n        <p class=\"ae-u-bolder\">{{ producto.subtitulo2 }}</p>\n      </div>\n    </div>\n </div>\n\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portafolio/portafolio.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portafolio/portafolio.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\t<!-- About Xlight -->\n\t\t<section class=\"section-wrapper\" id=\"about\">\n\t\t\t<div class=\"about-us\">\n\t\t\t\t<div class=\"why-us  abanicos\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!-- Block Title -->\n\t\t\t\t\t\t\t<div class=\"section-title wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t<h1><span>Conócenos</span></h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"element-title wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t<h1>¿Por qué agremiarte?</h1>\n\t\t\t\t\t\t\t\t<h3>Somos una <span class=\"main-color\">Asociación de Conductores</span> que conocemos las necesidades de\n\t\t\t\t\t\t\t\t\tlos que nos dedicamos a proporcionar servicio de <span class=\"main-color\">transporte mediante\n\t\t\t\t\t\t\t\t\t\tplataformas.</span></h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- End Block Title -->\n\t\t\t\t\t\t\t<!-- About Us Icons -->\n\t\t\t\t\t\t\t<div class=\"wrapper-why-us\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-sm-4 wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t<i class=\"hovicon effect-1 sub-a\"><b class=\"fas fa-flag-checkered\"></b></i>\n\t\t\t\t\t\t\t\t\t<h2>MISIÓN</h2>\n\t\t\t\t\t\t\t\t\t<p>Ser la asociación que brinde beneficios, ayudando a los conductores a generar oportunidades\n\t\t\t\t\t\t\t\t\t\tlogrando mejorar su calidad\n\t\t\t\t\t\t\t\t\t\tde vida y trabajo, para llegar a obtener estabilidad económica en su entorno familiar y social.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-sm-4 wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"450ms\">\n\t\t\t\t\t\t\t\t\t<i class=\"hovicon effect-1 sub-a\"><b class=\"far fa-eye\"></b></i>\n\t\t\t\t\t\t\t\t\t<h2>VISIÓN</h2>\n\t\t\t\t\t\t\t\t\t<p>Ser la asociación cuya identidad sea capaz de actuar en nombre del conductor en la lucha por su\n\t\t\t\t\t\t\t\t\t\tdignificación ante leyes\n\t\t\t\t\t\t\t\t\t\ty sociedad.\n\t\t\t\t\t\t\t\t\t\tReconocida por el impacto del actuar en el bienestar y desarrollo de nuestra comunidad.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-sm-4 wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"600ms\">\n\t\t\t\t\t\t\t\t\t<i class=\"hovicon effect-1 sub-a\"><b class=\"far fa-handshake\"></b></i>\n\t\t\t\t\t\t\t\t\t<h2>VALORES</h2>\n\t\t\t\t\t\t\t\t\t<p><span style=\"font-weight: 900;\">Seguridad: </span><br><span>Trabajar con protocolos buscando la\n\t\t\t\t\t\t\t\t\t\t\tintegridad del conductor.</span></p>\n\t\t\t\t\t\t\t\t\t<p><span style=\"font-weight: 900;\">Integridad: </span><br><span>Trabajar con rectitud para el bien\n\t\t\t\t\t\t\t\t\t\t\tcomún.</span></p>\n\t\t\t\t\t\t\t\t\t<p><span style=\"font-weight: 900;\">Solidaridad: </span><br><span>Unión y colaboración entre asociación\n\t\t\t\t\t\t\t\t\t\t\ty conductor.</span></p>\n\t\t\t\t\t\t\t\t\t<p><span style=\"font-weight: 900;\">Profesionalismo: </span><br><span>Capacitación constante para\n\t\t\t\t\t\t\t\t\t\t\tofrecer un servicio de calidad.</span></p>\n\t\t\t\t\t\t\t\t\t<p><span style=\"font-weight: 900;\">Trabajo en equipo: </span><br><span>Integrar a todo el gremio para\n\t\t\t\t\t\t\t\t\t\t\tresolver las carencias y necesidades.</span></p>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- End About Us Icons -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- End About Xlight -->\n\n\n\t\t\t<!-- Facts -->\n\t\t\t<div class=\"facts parallax\">\n\t\t\t\t<div class=\"overlay\">\n\t\t\t\t\t<div class=\"wrapper-block-facts\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t\t\t\t\t<h1 class=\"main-color wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Agunos datos\n\t\t\t\t\t\t\t\t\t\tinteresantes</h1>\n\t\t\t\t\t\t\t\t\t<h3 class=\"white-color wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">que demuestran\n\t\t\t\t\t\t\t\t\t\tnuestra fuerza en números.</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"wrapper-number\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"number wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"timer\" data-from=\"0\" data-to=\"20\" data-speed=\"1000\">20</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"number-title wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t\t\tADMINISTRADORES\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"number wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"450ms\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"timer\" data-from=\"0\" data-to=\"800\" data-speed=\"5000\">800</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"number-title wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"450ms\">\n\t\t\t\t\t\t\t\t\t\t\tAGREMIADOS\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"number wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"600ms\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"timer\" data-from=\"0\" data-to=\"700\" data-speed=\"4300\">700</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"number-title wow fadeInDown\" data-wow-duration=\"13s\" data-wow-delay=\"600ms\">\n\t\t\t\t\t\t\t\t\t\t\tCONDUCTORES\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"number wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"750ms\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"timer\" data-from=\"0\" data-to=\"100\" data-speed=\"2000\">100</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"number-title wow fadeInDown\" data-wow-duration=\"13s\" data-wow-delay=\"750ms\">\n\t\t\t\t\t\t\t\t\t\t\tSOCIOS\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- End Facts -->\n\n\t\t</section>\n\t\t<!-- End About Section -->\n\n\t\t<!-- Team Section -->\n\t\t<section class=\"section-wrapper\" id=\"team\">\n\t\t\t<div class=\"team\">\n\t\t\t\t<!-- Block Title -->\n\t\t\t\t<div class=\"meet-the-team abanicos\">\n\t\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"section-title wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t<h1><span>ESTAMOS PARA APOYARTE</span></h1>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h1 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Nuestro grupo de administradores\n\t\t\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t\t\t<!-- <h3 class=\" wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">This Is Our <span class=\"main-color\">Team</span>, This Is Our <span class=\"main-color\">Family</span></h3> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- End Block Title -->\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"wrapper-team\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"team-member\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-holder wow flipInY\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"vistas/images/team/presidenta.svg\" alt=\"\" /> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-social-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"team-member-social-list-item\" href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"team-member-social-list-item\" href=\"#\"><i class=\"fa fa-twitter\"></i></a> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"team-member-social-list-item\" href=\"mailto:presidencia@amertac.com.mx\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-envelope\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"view-profile profile-read-more\" href=\"#\" data-single_url=\"profile1.html\">Profile</a>\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"team-member-name\"><span class=\"main-color\">V</span>eronica</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-role\">Presidenta</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"team-member\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-holder wow flipInY\" data-wow-duration=\"1s\" data-wow-delay=\"500ms\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"vistas/images/team/tesoreria.svg\" alt=\"\" /> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-social-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"team-member-social-list-item\" href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"team-member-social-list-item\" href=\"#\"><i class=\"fa fa-twitter\"></i></a> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"team-member-social-list-item\" href=\"mailto:tesoreria@amertac.com.mx\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-envelope\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"view-profile profile-read-more\" href=\"#\" data-single_url=\"profile2.html\">Profile</a>\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"team-member-name\"><span class=\"main-color\">C</span>arlos</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-role\">Tesorero</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"team-member\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-holder wow flipInY\" data-wow-duration=\"1s\" data-wow-delay=\"800ms\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"vistas/images/team/tecnologia.svg\" alt=\"\" /> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-social-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"team-member-social-list-item\" href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"team-member-social-list-item\" href=\"#\"><i class=\"fa fa-twitter\"></i></a> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"team-member-social-list-item\" href=\"mailto:tecnologia@amertac.com.mx\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-envelope\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"view-profile profile-read-more\" href=\"#\" data-single_url=\"profile3.html\">Profile</a>\t\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"team-member-name\"><span class=\"main-color\">A</span>ntonio</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-role\">Tecnología</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"team-member\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-holder wow flipInY\" data-wow-duration=\"1s\" data-wow-delay=\"1100ms\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"vistas/images/team/administracion.svg\" alt=\"\" /> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-social-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"team-member-social-list-item\" href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"team-member-social-list-item\" href=\"#\"><i class=\"fa fa-twitter\"></i></a> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"team-member-social-list-item\" href=\"mailto:administracion@amertac.com.mx\"><i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-envelope\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"view-profile profile-read-more\" href=\"#\" data-single_url=\"profile4.html\">Profile</a>\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-meta\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"team-member-name\"><span class=\"main-color\">N</span>orma</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"team-member-role\">Administración</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Profile Team -->\n\t\t\t\t<div id=\"team-single-wrap\">\n\t\t\t\t\t<div id=\"team-single\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- End Profile Team -->\n\t\t\t</div>\n\n\t\t\t<!-- Skills -->\n\t\t\t<div class=\"skills parallax\">\n\t\t\t\t<div class=\"overlay\">\n\t\t\t\t\t<div class=\"wrapper-block-skills\">\n\t\t\t\t\t\t<!-- Block Title -->\n\t\t\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t<h1 class=\"main-color wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Beneficios\n\t\t\t\t\t\t\t\t\t\tentregados a agremiados</h1>\n\t\t\t\t\t\t\t\t\t<h3 class=\"white-color wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Algunos de los\n\t\t\t\t\t\t\t\t\t\tbeneficios que han recibido nuestros agremiados.</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- End Block Title -->\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"wrapper-count\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<!-- SKILL ONE -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"knob\" value=\"86\">\n\t\t\t\t\t\t\t\t\t\t\t<h4>Angel Guardián</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<!-- SKILL TWO -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"500ms\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"knob\" value=\"93\">\n\t\t\t\t\t\t\t\t\t\t\t<h4>Despensas</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<!-- SKILL THREE -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"800ms\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"knob\" value=\"88\">\n\t\t\t\t\t\t\t\t\t\t\t<h4>Descuentos</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t\t\t<!-- SKILL Four -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"skill wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"1100ms\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"knob\" value=\"95\">\n\t\t\t\t\t\t\t\t\t\t\t<h4>Premios</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- End Skills -->\n\n\t\t</section>\n\t\t<!-- End Team Section -->\n\n\n\t\t<!-- Works Section -->\n\t\t<section class=\"section-wrapper\" id=\"works\">\n\t\t\t<div class=\"works  abanicos\">\n\t\t\t\t<!-- Block Title -->\n\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"section-title wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t<h1><span>NUESTROS BENEFICIOS</span></h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <h1 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Nuestros beneficios</h1> -->\n\t\t\t\t\t\t\t<h3 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Estos son algunos de nuestros <span\n\t\t\t\t\t\t\t\t\tclass=\"main-color\">beneficios </span>para nuestros <span class=\"main-color\">agremiados</span></h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- End Block Title -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"container-fluid\">\n\t\t\t\t\t\t<div class=\"wrapper-works\">\n\t\t\t\t\t\t\t<div class=\"portfoliO\">\n\t\t\t\t\t\t\t\t<ul id=\"filters\" class=\"wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t<li><span class=\"filter active\" data-filter=\"all\">TODOS</span></li>\n\t\t\t\t\t\t\t\t\t<li><span class=\"filter\" data-filter=\".category-1\">Ángel Guardián</span></li>\n\t\t\t\t\t\t\t\t\t<li><span class=\"filter\" data-filter=\".category-2\">Descuentos</span></li>\n\t\t\t\t\t\t\t\t\t<li><span class=\"filter\" data-filter=\".category-3\">Prestaciones</span></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<div class=\"portfolio-wrap\">\n\t\t\t\t\t\t\t\t\t<div class=\"myport wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"600ms\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-1 portfolio\" data-myorder=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-single-image.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"This is the description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"vistas/images/works/angelguardian.svg\" alt=\"Ángel Guardián\"> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">ÁNGEL GUARDIÁN</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Sistema auxiliar discreto para seguridad del conductor.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"works-overlay-icon\"><i class=\"fa fa-image\"></i></div>\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-2 portfolio\" data-cat=\"category-2\" data-myorder=\"2\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-single-image.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Taller de Toyota\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"vistas/images/works/toyota.jpg\" alt=\"Descuentos en la agencia\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">TOYOTA</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Descuento del 25% a los agremiados a AMERT, A.C.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-video-camera\"></i></div>\t\t\t\t\t\t\t\t\t\t -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-3 portfolio\" data-cat=\"category-3\" data-myorder=\"3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-single-image.html\" title=\"IMSS\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"vistas/images/works/imss.png\" alt=\"IMSS\"> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">IMSS</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Seguro para nuestros agremiados</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-graduation-cap\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-1 portfolio\" data-cat=\"category-1\" data-myorder=\"4\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-slider.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Alguien cuidándote\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"vistas/images/works/zapopanpolice.jpg\" alt=\"Policía ZMG\"> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">ÁNGEL GUARDIÁN</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Contigo cuando más lo necesitas</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-image\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-2 portfolio\" data-cat=\"category-2\" data-myorder=\"5\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"san-javier.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"San Javier Recinto Funeral\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"vistas/images/partners/logo-san-javier.png\" alt=\"San Javier Recinto Funeral\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">San Javier - Recinto Funeral</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Precio exclusivo de $21,000 a $18,000. Haz click para ver\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmás información.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-video-camera\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-3 portfolio\" data-cat=\"category-3\" data-myorder=\"6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-slider.html\" title=\"INFONAVIT\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"vistas/images/works/infonavit.jpg\" alt=\"Infonavite\"> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">INFONAVIT</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">INFONAVIT para agremiados</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-graduation-cap\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-1 portfolio\" data-cat=\"category-1\" data-myorder=\"7\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-video-youtube.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"ÁNGEL GUARDIÁN\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"vistas/images/works/satellite.jpg\" alt=\"Cuidándote desde el cielo\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">ÁNGEL GUARDIÁN</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Cuidándote desde el cielo</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-image\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-2 portfolio\" data-cat=\"category-2\" data-myorder=\"8\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-video-youtube.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"LLANTERA\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"vistas/images/works/llantas.jpg\" alt=\"Descuentos en llantas\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">LLANTERA</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Descuentos en llantas</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-video-camera\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-3 portfolio\" data-cat=\"category-3\" data-myorder=\"9\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-video-youtube.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"ASESORIA LEGAL\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"vistas/images/works/legal.jpg\" alt=\"Asesoría Legal\"> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">ASESORIA LEGAL</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Asistencia legal para nuestros agremiados</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-graduation-cap\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-1 portfolio\" data-cat=\"category-1\" data-myorder=\"10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-video-vimeo.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"ÁNGEL GUARDIÁN\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"vistas/images/works/zapopanpolice2.jpg\" alt=\"Cuidando de tí\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">ÁNGEL GUARDIÁN</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Cuidando de ti.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-image\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-2 portfolio\" data-cat=\"category-2\" data-myorder=\"11\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-video-vimeo.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"RESTAURANTE\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"vistas/images/works/restaurante.jpg\" alt=\"Descuentos en restaurantes\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">RESTAURANTES</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Descuentos en restaurantes</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-video-camera\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"mix category-3 portfolio\" data-cat=\"category-3\" data-myorder=\"12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"folio-read-more\" href=\"#\" data-single_url=\"portfolio-video-vimeo.html\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"EVENTOS\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"\" src=\"vistas/images/works/posada.ashx\" alt=\"Eventos\"> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"overlay-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-category\">EVENTOS</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"works-overlay-text\">Eventos para fomentar la convivencia</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"works-overlay-icon\"><i class=\"fa fa-graduation-cap\"></i></div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"gap\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"gap\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Single Project -->\n\t\t\t\t<div id=\"works-single-wrap\">\n\t\t\t\t\t<div id=\"works-single\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- End Single Project -->\n\t\t\t</div>\n\n\t\t\t<!-- Partners -->\n\t\t\t<div class=\"partners parallax\">\n\t\t\t\t<div class=\"overlay\">\n\t\t\t\t\t<div class=\"wrapper-block-partners\">\n\t\t\t\t\t\t<!-- Block Title -->\n\t\t\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t<h1 class=\"main-color wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">NUESTROS\n\t\t\t\t\t\t\t\t\t\tPATROCINADORES</h1>\n\t\t\t\t\t\t\t\t\t<h3 class=\"white-color wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Gracias al apoyo de\n\t\t\t\t\t\t\t\t\t\testas empresas, seguimos creciendo.</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- End Block Title -->\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"wrapper-partners\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 partners-img wow fadeInRight\" data-wow-duration=\"1s\"\n\t\t\t\t\t\t\t\t\t\tdata-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"http://optiexpress.com.mx/\" target=\"_blank\"><img src=\"vistas/images/partners/logo-optiexpress.png\"\n\t\t\t\t\t\t\t\t\t\t\t\talt=\"OPTI Express\"></a>\n\t\t\t\t\t\t\t\t\t\t<!-- Change Image -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 partners-img wow fadeInRight\" data-wow-duration=\"1s\"\n\t\t\t\t\t\t\t\t\t\tdata-wow-delay=\"500ms\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"http://optiexpress.com.mx/\" target=\"_blank\"><img src=\"vistas/images/partners/grupo-san-javier.png\"\n\t\t\t\t\t\t\t\t\t\t\t\talt=\"Grupo de servicios San Javier\"></a>\n\t\t\t\t\t\t\t\t\t\t<!-- Change Image -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 partners-img wow fadeInRight\" data-wow-duration=\"1s\"\n\t\t\t\t\t\t\t\t\t\tdata-wow-delay=\"700ms\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"vistas/images/partners/partners3.png\" alt=\"\"></a> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 partners-img wow fadeInRight\" data-wow-duration=\"1s\"\n\t\t\t\t\t\t\t\t\t\tdata-wow-delay=\"900ms\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"vistas/images/partners/partners4.png\" alt=\"\"></a> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"wrapper-partners\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 partners-img wow fadeInRight\" data-wow-duration=\"1s\"\n\t\t\t\t\t\t\t\t\t\tdata-wow-delay=\"1100ms\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"vistas/images/partners/partners5.png\" alt=\"\"></a> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 partners-img wow fadeInRight\" data-wow-duration=\"1s\"\n\t\t\t\t\t\t\t\t\t\tdata-wow-delay=\"1300ms\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"vistas/images/partners/partners6.png\" alt=\"\"></a> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 partners-img wow fadeInRight\" data-wow-duration=\"1s\"\n\t\t\t\t\t\t\t\t\t\tdata-wow-delay=\"1500ms\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"vistas/images/partners/partners7.png\" alt=\"\"></a> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 partners-img wow fadeInRight\" data-wow-duration=\"1s\"\n\t\t\t\t\t\t\t\t\t\tdata-wow-delay=\"1700ms\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"vistas/images/partners/partners8.png\" alt=\"\"></a> <!-- Change Image -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- End Partners -->\n\n\t\t</section>\n\t\t<!-- End Works Section -->\n\n\t\t<!-- Price Section -->\n\t\t<section class=\"section-wrapper\" id=\"pricing\">\n\t\t\t<div class=\"pricing abanicos\">\n\t\t\t\t<!-- Block Title -->\n\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"section-title wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t<h1><span>Aportaciones</span></h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <h1 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Con la aportación económica de nuestros agremiados podemos invertir en mejorar nuestra oferta de beneficios.</h1> -->\n\t\t\t\t\t\t\t<h3 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Con la aportación económica de\n\t\t\t\t\t\t\t\t<span class=\"main-color\">nuestros agremiados</span> podemos invertir en mejorar nuestra oferta de <span\n\t\t\t\t\t\t\t\t\tclass=\"main-color\">beneficios</span>.</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- End Block Title -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"wrapper-pricing\">\n\t\t\t\t\t\t\t<!-- Plan 1 -->\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t<!-- <div class=\"single-table wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t<h4>Agremiado</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"price-icon\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"vistas/images/socioconductor.svg\" alt=\"Agremiado\" style=\"width: 65px;\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span class=\"price\">$300/<small>mes.</small></span>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>Precio en Pesos Mexicanos</li>\n\t\t\t\t\t\t\t\t\t\t<li>Precio antes de I.V.A.</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<a class=\"btn-price\" href=\"#\">Regístrate</a>\n\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- Plan 2 -->\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t<div class=\"single-table wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t<h4>Agremiado</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"price-icon\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"vistas/images/socioconductor.svg\" alt=\"Agremiado\" style=\"width: 65px;\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span class=\"price\">$300/<small>mes.</small></span>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>Aportación por agremiado con un vehículo.</li>\n\t\t\t\t\t\t\t\t\t\t<li>Precio en Pesos Mexicanos.</li>\n\t\t\t\t\t\t\t\t\t\t<li>Precio antes de I.V.A.</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<!-- <a class=\"btn-price\" href=\"#\">Regístrate</a> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"single-table wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"500ms\">\n\t\t\t\t\t\t\t\t\t<h4>Socio-Conductor</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"price-icon\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"vistas/images/carro.svg\" alt=\"\" style=\"width: 65px;\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span class=\"price\">$300/<small>mes</small></span>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>Beneficios</li>\n\t\t\t\t\t\t\t\t\t\t<li>Ángel Guardián</li>\n\t\t\t\t\t\t\t\t\t\t<li>Asesoría Legal</li>\n\t\t\t\t\t\t\t\t\t\t<li>Apoyo a los más necesitados</li>\n\t\t\t\t\t\t\t\t\t\t<li>Apoyo en caso de emergencia</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<a class=\"btn-price\" href=\"#\">Regístrate</a>\n\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- Plan 3 -->\n\t\t\t\t\t\t\t<!-- <div class=\"col-lg-3 col-md-3 wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"700ms\">\n\t\t\t\t\t\t<div class=\"single-table featured\"> -->\n\t\t\t\t\t\t\t<!-- <div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t<div class=\"single-table wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"500ms\">\n\t\t\t\t\t\t\t\t\t<h4>Socio</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"price-icon\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"vistas/images/socioconductor.svg\" alt=\"\" style=\"width: 65px;\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span class=\"price\">$150/<small>mes</small></span>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>&nbsp;</li>\n\t\t\t\t\t\t\t\t\t\t<li>Beneficios</li>\n\t\t\t\t\t\t\t\t\t\t<li>Asesoría Legal</li>\n\t\t\t\t\t\t\t\t\t\t<li>Apoyo a los más necesitados</li>\n\t\t\t\t\t\t\t\t\t\t<li>Apoyo en caso de emergencia</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<a class=\"btn-price\" href=\"#\">Regístrate</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t<!-- Plan 4 -->\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3\">\n\t\t\t\t\t\t\t\t<div class=\"single-table wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"900ms\">\n\t\t\t\t\t\t\t\t\t<h4>Vehículo extra</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"price-icon\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"vistas/images/otrocarro.svg\" alt=\"\" style=\"width: 65px;\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span class=\"price\">$150/<small>mes</small></span>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>Precio en Pesos Mexicanos.</li>\n\t\t\t\t\t\t\t\t\t\t<li>Precio antes de I.V.A.</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<!-- <a class=\"btn-price\" href=\"#\">Regístrate</a> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"clients parallax\">\n\t\t\t\t<!-- Block Title -->\n\t\t\t\t<div class=\"overlay\">\n\t\t\t\t\t<div class=\"wrapper-block-clients\">\n\t\t\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t<h1 class=\"main-color wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">CONDUCTORES OPINAN\n\t\t\t\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t\t\t\t<h3 class=\"white-color wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Algunas\n\t\t\t\t\t\t\t\t\t\texperiencias en AMERT, A.C. de nuestros agremiados.</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- End Block Title -->\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"wrapper-clients wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"500ms\">\n\t\t\t\t\t\t\t\t\t<!-- Start Testimonial Slider -->\n\t\t\t\t\t\t\t\t\t<div class=\"carousel slide carousel-mod\" data-ride=\"carousel\" id=\"testimonial\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- Testimonial #1  -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"item active\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"testimonial-inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-circle\" src=\"vistas/images/clients/person_1.jpg\" alt=\"\" title=\"\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Testimonial Image  -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-quote-left main-color\"></i> Gracias a AMERT, A.C., ahora ya no me\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsiento sola. <i class=\"fas fa-quote-right main-color\"></i></p><!-- Tesimonial  -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>-- Lupita Reyes, Socia-Conductora --</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- End Testimonial #1  -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- Testimonial #2  -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"testimonial-inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-circle\" src=\"vistas/images/clients/person_2.jpg\" alt=\"\" title=\"\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-quote-left main-color\"></i> La aportación no la veo como un gasto, es\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tuna inversión en mi seguridad y el saber que hay personas que me apoyan en cualquier\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsituación. <i class=\"fas fa-quote-right main-color\"></i></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>-- Juan Pérez, Conductor --</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- End Testimonial #2  -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- Testimonial #3  -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"testimonial-inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-circle\" src=\"vistas/images/clients/person_3.jpg\" alt=\"\" title=\"\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-quote-left main-color\"></i> Antes temía por mi seguridad, ahora,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsiento que me cuidan y apoyan mis compañeros, me siento parte de una comunidad amigable\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ty segura. <i class=\"fas fa-quote-right main-color\"></i></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>-- María Domínguez, Conductora --</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- End Testimonial #3  -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t\t\t\t\t\t\t<li data-target=\"#testimonial\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-target=\"#testimonial\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-target=\"#testimonial\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</section>\n\t\t<!-- End Price Section -->\n\n\n\t\t<!-- News Section -->\n\t\t<section class=\"section-wrapper\" id=\"news\">\n\t\t\t<div class=\"news  abanicos\">\n\t\t\t\t<!-- Block Title -->\n\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"section-title wow fadeInDown\">\n\t\t\t\t\t\t\t\t<h1><span>Noticias y Avisos</span></h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h1 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Lo que está pasando en nuestro\n\t\t\t\t\t\t\t\tgremio.</h1>\n\t\t\t\t\t\t\t<h3 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Infórmate de las últimas <span\n\t\t\t\t\t\t\t\t\tclass=\"main-color\">Noticias </span>y <span class=\"main-color\">Eventos.</span></h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- End Block Title -->\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"wrapper-news\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"news-content wow fadeInLeft\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t<div class=\"entry-header\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"blog-image\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"blog.html\"><img alt=\"\" src=\"vistas/images/blog/post1.jpg\" class=\"img-responsive\"></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"post-date\">\n\t\t\t\t\t\t\t\t\t\t\t<h2>21<span>Ago</span></h2>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"entry-content\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"entry-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"blog.html\">Adipisicing elit, sed do eiusmod tempor</a>\n\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"entry-meta\">\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-user\"></i> By: Admin</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <li><a href=\"#\"><i class=\"fa fa-tags\"></i> Projects <span>/</span></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-comments\"></i> 3 Comments</a></li> -->\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\t\t\t\t\t\tlabore et dolore magna aliqua. </p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"news-content wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t<div class=\"entry-header\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"blog-image\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"blog.html\"><img alt=\"\" src=\"vistas/images/blog/post2.jpg\" class=\"img-responsive\"></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"post-date\">\n\t\t\t\t\t\t\t\t\t\t\t<h2>26<span>Sep</span></h2>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"entry-content\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"entry-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"blog.html\">Adipisicing elit, sed do eiusmod tempor</a>\n\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"entry-meta\">\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-user\"></i> By: Admin</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <li><a href=\"#\"><i class=\"fa fa-tags\"></i> Projects <span>/</span></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-comments\"></i> 5 Comments</a></li> -->\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\t\t\t\t\t\tlabore et dolore magna aliqua. </p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"news-content wow fadeInLeft\" data-wow-duration=\"1s\" data-wow-delay=\"600ms\">\n\t\t\t\t\t\t\t\t\t<div class=\"entry-header\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"blog-image\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"blog.html\"><img alt=\"\" src=\"vistas/images/blog/post3.jpg\" class=\"img-responsive\"></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"post-date\">\n\t\t\t\t\t\t\t\t\t\t\t<h2>28<span>Oct</span></h2>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"entry-content\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"entry-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"blog.html\">Adipisicing elit, sed do eiusmod tempor</a>\n\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"entry-meta\">\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-user\"></i> By: Admin</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <li><a href=\"#\"><i class=\"fa fa-tags\"></i> Projects <span>/</span></a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-comments\"></i> 3 Comments</a></li> -->\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\t\t\t\t\t\tlabore et dolore magna aliqua. </p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"news-content wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"600ms\">\n\t\t\t\t\t\t\t\t\t<div class=\"entry-header\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"blog-image\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"blog.html\"><img alt=\"\" src=\"vistas/images/blog/post4.jpg\" class=\"img-responsive\"></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"post-date\">\n\t\t\t\t\t\t\t\t\t\t\t<h2>30<span>July</span></h2>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"entry-content\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"entry-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"blog.html\">Adipisicing elit, sed do eiusmod tempor</a>\n\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"entry-meta\">\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-user\"></i> By: Admin <span>/</span></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-tags\"></i> Projects <span>/</span></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-comments\"></i> 5 Comments</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\t\t\t\t\t\tlabore et dolore magna aliqua. </p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"stay-in parallax\">\n\t\t\t\t<!-- Block Title -->\n\t\t\t\t<div class=\"overlay\">\n\t\t\t\t\t<div class=\"wrapper-block-stay-in\">\n\t\t\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t<h1 class=\"main-color wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">¿QUIERES RECIBIR\n\t\t\t\t\t\t\t\t\t\tNUESTRO BOLETÍN?</h1>\n\t\t\t\t\t\t\t\t\t<h3 class=\"white-color wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Compártenos tu\n\t\t\t\t\t\t\t\t\t\tdirección de correo para recibirlo.</h3>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- End Block Title -->\n\t\t\t\t\t\t<div class=\"signup\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t\t<div class=\"sign_form wow fadeInLeft\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t\t<!-- SUBSCRIPTION FORM -->\n\t\t\t\t\t\t\t\t\t\t<form id=\"sign-form\" method=\"post\" action=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"email\" placeholder=\"Tu e-mail por favor...\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"submit\" value=\"Sign Up\">\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"signup-error\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<p>Prometemos no enviarte spam =)</p>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t<!-- / END SUBSCRIPTION FORM -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"wrapper-tweet\">\n\t\t\t\t\t\t\t\t\t<!-- Twitter -->\n\t\t\t\t\t\t\t\t\t<div class=\"tweet wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"700ms\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-sm-offset-2\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"twitter-icon text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-info-circle\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t<h4>Andsolutions</h4>\n\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"twitter-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li data-target=\"#twitter-carousel\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li data-target=\"#twitter-carousel\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li data-target=\"#twitter-carousel\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ol><!-- /.carousel-indicators -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"item active\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><span class=\"main-color\">AMERT, A.C.</span> es un gremio humano para apoyar a nuestros\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\thermanos conductores de plataforma.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><span class=\"main-color\">Ángel Guardián</span> es un sistema auxiliar discreto para\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tseguridad del conductor.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Con <span class=\"main-color\">AMERT, A.C.</span> inviertes en tí, porque lo vales.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- End Twitter -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t<!-- </section> -->\n\t\t<!-- End News Section -->\n</div>\n</section>\n\n\t\t<!-- Contact Section -->\n\t\t<section class=\"section-wrapper\" id=\"contacts\">\n\t\t\t<!-- Contacts -->\n\t\t\t<div class=\"contacts abanicos\">\n\n\t\t\t\t<!-- Block Title -->\n\t\t\t\t<div class=\"element-title\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"section-title wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t<h1><span>Contáctanos</span></h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h3 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">Contacta a nuestro <span\n\t\t\t\t\t\t\t\t\tclass=\"main-color\">staff </span> para cualquier <span class=\"main-color\">duda, comentario o\n\t\t\t\t\t\t\t\t\tsugerencia</span> que tengas.</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- End Block Title -->\n\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"wrapper-contacts\">\n\t\t\t\t\t\t\t<div class=\"contact_form\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"wrapper-contacts-icons\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4 wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-map-marker\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">Calle y número</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">90210 Guadalajara, Jalisco.</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4 wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"450ms\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-mobile-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">Lun - Vie 08:00 21:00</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">234 523 45 56</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4 wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"600ms\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-envelope-o\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">Nuestro e-mail de contacto</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">contacto@amertac.com.mx</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row wow fadeInRight\" data-wow-duration=\"1s\" data-wow-delay=\"800ms\">\n\t\t\t\t\t\t\t\t\t<!-- Start contact-form -->\n\t\t\t\t\t\t\t\t\t<form id=\"contact-form\" method=\"post\" action=\"#\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Tu nombre\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Tu correo electrónico\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"subject\" class=\"form-control\" placeholder=\"Asunto\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"message\" class=\"form-control\" placeholder=\"Tu mensaje\" rows=\"8\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"output\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"submit\" class=\"\" value=\"Enviar\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t<!-- End contact-form -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- End Contacts -->\n\n\t\t</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-4\">\n    \n    <a *ngFor=\"let producto of productoService.productosFiltrado\" \n        [routerLink]=\"['/item', producto.cod ]\" class=\"animated fadeIn rk-item ae-masonry__item\">\n      <img src=\"assets/productos/{{ producto.url }}.jpg\" alt=\"\">\n      <div [routerLink]=\"['/item', producto.cod ]\" class=\"item-meta\">\n        <h2>{{ producto.titulo }}</h2>\n        <p>{{ producto.categoria }}</p>\n      </div>\n    </a>\n      \n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\t<div class=\"bottom-footer\">\n\t  <div class=\"container\">\n\t    <div class=\"bottom-footer-center wow fadeInDown\" data-wow-duration=\"1s\" data-wow-delay=\"300ms\">\n\t      <ul class=\"bottom-social-icons\">\n\t        <li><a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a></li>\n\t        <li><a href=\"#\"><i class=\"fab fa-twitter\"></i></a></li>\n\t        <li><a href=\"#\"><i class=\"fab fa-instagram\"></i></a></li>\n\t      </ul>\n\t    </div>\n\t    <div class=\"bottom-footer-left wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"450ms\">\n\t      <p><span>Todos los derechos reservados por &#169; </span> <a href=\"https://duckalive.com\">Duckalive S.A. de\n\t          C.V.</a></p>\n\t      <p><span>Página licenciada para su uso a &#169; </span> <a href=\"https://amertac.com.mx\">AMERT, A.C.</a></p>\n\t    </div>\n\t  </div>\n\t</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"preloader\">\n    <div id=\"status\">\n        <div class=\"spinner\">\n            <div class=\"rect1\"></div>\n            <div class=\"rect2\"></div>\n            <div class=\"rect3\"></div>\n            <div class=\"rect4\"></div>\n            <div class=\"rect5\"></div>\n        </div>\n    </div>\n</div>\n<div id=\"misbotones\">\n    <button class=\"botones1\" id=\"ingreso\"><i class=\"fa fa-sign-in\"></i> Ingreso</button>\n    <button class=\"botones2\" id=\"registro\"><i class=\"fa fa-user-plus\"></i> Registro</button>\n    <button class=\"botones3\" id=\"dashboard\"><i class=\"fa fa-dashboard\"></i> Inicio</button>\n</div>\n\n<!-- End Preloader -->\n<div id=\"secciones\">\n    <header>\n\n        <!-- Bootstrap Menu -->\n        <div id=\"navigation\">\n            <div class=\"navbar-wrapper abanicos1\">\n                <nav class=\"navbar-inverse navbar-static-top\" role=\"navigation\">\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"navbar-header\">\n                                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"\n                                    data-target=\".navbar-collapse\">\n                                    <span class=\"icon-bar\"></span>\n                                    <span class=\"icon-bar\"></span>\n                                    <span class=\"icon-bar\"></span>\n                                </button>\n                                <a class=\"navbar-brand\" href=\"#\"></a>\n                            </div>\n                            <div id=\"mynav\" class=\"navbar-collapse collapse\">\n                                <ul class=\"nav navbar-nav main-nav-list\">\n                                    <li><a href=\"#home\">Inicio</a></li>\n                                    <li><a href=\"#about\">Conócenos</a></li>\n                                    <li><a href=\"#team\">¿Quienes somos?</a></li>\n                                    <li><a href=\"#works\">Beneficios </a></li>\n                                    <li><a href=\"#pricing\">Aportación</a></li>\n                                    <li><a href=\"#news\">Avisos</a></li>\n                                    <li><a href=\"#contacts\">Contáctanos</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n        <!-- End Bootstrap Menu -->\n\n        <!-- Slider -->\n        <section id=\"home\">\n            <div class=\"slide-wrap\">\n                <div id=\"home-slider\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n                    <div class=\"carousel-inner\">\n                        <div class=\"item active\">\n                            <!-- Change Image -->\n                            <div class=\"caption\">\n                                <h1 class=\"animated fadeInLeftBig\" style=\"font-size: 2em;\">Bienvenido a<br>\n                                    <strong style=\"font-size: 2.4em;\"> AMERT, A.C.</strong>\n                                </h1>\n                                <p class=\"animated fadeInRightBig\">Asociación Mexicana de Empresarios de Redes y\n                                    Transportes.</p>\n                                <a data-scroll class=\"learn-more animated fadeInUpBig\" href=\"#about\">Arranca</a>\n                            </div>\n                        </div>\n                        <div class=\"item\">\n                            <!-- Change Image -->\n                            <div class=\"caption\">\n                                <h1 class=\"animated fadeInLeftBig\" style=\"font-size: 2em;\"><strong\n                                        style=\"font-size: 2.3em;\">Gremio<br>\n                                    </strong> de conductores y socios</h1>\n                                <p class=\"animated fadeInRightBig\">Unidos somos fuertes.</p>\n                                <a data-scroll class=\"learn-more animated fadeInUpBig\" href=\"#about\">Arranca</a>\n                            </div>\n                        </div>\n                        <div class=\"item\">\n                            <!-- Change Image -->\n                            <div class=\"caption\">\n                                <h1 class=\"animated fadeInLeftBig\" style=\"font-size: 2em;\">Estamos para<br><strong\n                                        style=\"font-size: 2.3em;\">servir</strong></h1>\n                                <p class=\"animated fadeInRightBig\">Siempre buscamos beneficiar a nuestros agremiados.\n                                </p>\n                                <a data-scroll class=\"learn-more animated fadeInUpBig\" href=\"#about\">Arranca</a>\n                            </div>\n                        </div>\n                    </div>\n                    <a class=\"left-control\" href=\"#home-slider\" data-slide=\"prev\"><i class=\"fa fa-angle-left\"></i></a>\n                    <a class=\"right-control\" href=\"#home-slider\" data-slide=\"next\"><i class=\"fa fa-angle-right\"></i></a>\n                </div>\n            </div>\n        </section>\n        <!-- End Slider -->\n\n    </header>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/portafolio/portafolio.component */ "./src/app/pages/portafolio/portafolio.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/item/item.component */ "./src/app/pages/item/item.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");







const app_routes = [
    { path: 'home', component: _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_3__["PortafolioComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'item/:id', component: _pages_item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"] },
    { path: 'search/:termino', component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(app_routes, { useHash: true })
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/productos.service */ "./src/app/services/productos.service.ts");




let AppComponent = class AppComponent {
    constructor(infoPaginaService, productosService) {
        this.infoPaginaService = infoPaginaService;
        this.productosService = productosService;
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_2__["InfoPaginaService"] },
    { type: _services_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/portafolio/portafolio.component */ "./src/app/pages/portafolio/portafolio.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_item_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/item/item.component */ "./src/app/pages/item/item.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");




// Rutas








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_8__["PortafolioComponent"],
            _pages_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
            _pages_item_item_component__WEBPACK_IMPORTED_MODULE_10__["ItemComponent"],
            _pages_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");



let AboutComponent = class AboutComponent {
    constructor(infoService) {
        this.infoService = infoService;
    }
    ngOnInit() {
    }
};
AboutComponent.ctorParameters = () => [
    { type: _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_2__["InfoPaginaService"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/pages/item/item.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/item/item.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/item/item.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/item/item.component.ts ***!
  \**********************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/productos.service */ "./src/app/services/productos.service.ts");




let ItemComponent = class ItemComponent {
    constructor(route, productoService) {
        this.route = route;
        this.productoService = productoService;
    }
    ngOnInit() {
        this.route.params
            .subscribe(parametros => {
            // console.log(parametros['id']);
            this.productoService.getProducto(parametros['id'])
                .subscribe((producto) => {
                this.id = parametros['id'];
                this.producto = producto;
            });
        });
    }
};
ItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"] }
];
ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item/item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item.component.css */ "./src/app/pages/item/item.component.css")).default]
    })
], ItemComponent);



/***/ }),

/***/ "./src/app/pages/portafolio/portafolio.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/portafolio/portafolio.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcnRhZm9saW8vcG9ydGFmb2xpby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/portafolio/portafolio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/portafolio/portafolio.component.ts ***!
  \**********************************************************/
/*! exports provided: PortafolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortafolioComponent", function() { return PortafolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/productos.service */ "./src/app/services/productos.service.ts");



let PortafolioComponent = class PortafolioComponent {
    constructor(productosService) {
        this.productosService = productosService;
    }
    ngOnInit() {
    }
};
PortafolioComponent.ctorParameters = () => [
    { type: _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"] }
];
PortafolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portafolio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portafolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portafolio/portafolio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portafolio.component.css */ "./src/app/pages/portafolio/portafolio.component.css")).default]
    })
], PortafolioComponent);



/***/ }),

/***/ "./src/app/pages/search/search.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/search/search.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/productos.service */ "./src/app/services/productos.service.ts");




let SearchComponent = class SearchComponent {
    constructor(route, productoService) {
        this.route = route;
        this.productoService = productoService;
    }
    ngOnInit() {
        this.route.params
            .subscribe(params => {
            console.log(params['termino']);
            this.productoService.buscarProducto(params['termino']);
        });
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/pages/search/search.component.css")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/services/info-pagina.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/info-pagina.service.ts ***!
  \*************************************************/
/*! exports provided: InfoPaginaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPaginaService", function() { return InfoPaginaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let InfoPaginaService = class InfoPaginaService {
    constructor(http) {
        this.http = http;
        this.info = {};
        this.cargada = false;
        this.equipo = [];
        this.cargarInfo();
        this.cargarEquipo();
    }
    cargarInfo() {
        // Leer el archivo JSON
        this.http.get('assets/data/data-pagina.json')
            .subscribe((resp) => {
            this.cargada = true;
            this.info = resp;
        });
    }
    cargarEquipo() {
        // Leer el archivo JSON
        this.http.get('https://angular-html-25cf9.firebaseio.com/equipo.json')
            .subscribe((resp) => {
            this.equipo = resp;
            // console.log(resp);
        });
        // this.equipo = resp
    }
};
InfoPaginaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
InfoPaginaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InfoPaginaService);



/***/ }),

/***/ "./src/app/services/productos.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/productos.service.ts ***!
  \***********************************************/
/*! exports provided: ProductosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosService", function() { return ProductosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductosService = class ProductosService {
    constructor(http) {
        this.http = http;
        this.cargando = true;
        this.productos = [];
        this.productosFiltrado = [];
        this.cargarProductos();
    }
    cargarProductos() {
        return new Promise((resolve, reject) => {
            this.http.get('https://dpeluche.com/api/dpelucheInicio.php')
                .subscribe((resp) => {
                this.productos = resp;
                this.cargando = false;
                resolve();
            });
        });
    }
    getProducto(id) {
        return this.http.get(`https://angular-html-25cf9.firebaseio.com/productos/${id}.json`);
    }
    buscarProducto(termino) {
        if (this.productos.length === 0) {
            // cargar productos
            this.cargarProductos().then(() => {
                // ejecutar después de tener los productos
                // Aplicar filtro
                this.filtrarProductos(termino);
            });
        }
        else {
            // aplicar el filtro
            this.filtrarProductos(termino);
        }
    }
    filtrarProductos(termino) {
        // console.log(this.productos);
        this.productosFiltrado = [];
        termino = termino.toLocaleLowerCase();
        this.productos.forEach(prod => {
            const tituloLower = prod.titulo.toLocaleLowerCase();
            if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
                this.productosFiltrado.push(prod);
            }
        });
    }
};
ProductosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductosService);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");



let FooterComponent = class FooterComponent {
    constructor(_servicio) {
        this._servicio = _servicio;
        this.anio = new Date().getFullYear();
    }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [
    { type: _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_2__["InfoPaginaService"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(_servicio, router) {
        this._servicio = _servicio;
        this.router = router;
    }
    ngOnInit() {
    }
    buscarProducto(termino) {
        if (termino.length < 1) {
            return;
        }
        this.router.navigate(['/search', termino]);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_2__["InfoPaginaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Oscar\Desktop\amert-v1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map