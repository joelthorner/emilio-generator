(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-instructions-instructions-module"],{

/***/ "./src/app/views/instructions/instructions-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/instructions/instructions-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: InstructionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsRoutingModule", function() { return InstructionsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instructions/instructions.component */ "./src/app/views/instructions/instructions/instructions.component.ts");




var routes = [
    {
        path: '',
        component: _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_3__["InstructionsComponent"]
    }
];
var InstructionsRoutingModule = /** @class */ (function () {
    function InstructionsRoutingModule() {
    }
    InstructionsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InstructionsRoutingModule);
    return InstructionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/instructions/instructions.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/instructions/instructions.module.ts ***!
  \***********************************************************/
/*! exports provided: InstructionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsModule", function() { return InstructionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instructions/instructions.component */ "./src/app/views/instructions/instructions/instructions.component.ts");
/* harmony import */ var _instructions_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instructions-routing.module */ "./src/app/views/instructions/instructions-routing.module.ts");





var InstructionsModule = /** @class */ (function () {
    function InstructionsModule() {
    }
    InstructionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_3__["InstructionsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _instructions_routing_module__WEBPACK_IMPORTED_MODULE_4__["InstructionsRoutingModule"]
            ]
        })
    ], InstructionsModule);
    return InstructionsModule;
}());



/***/ }),

/***/ "./src/app/views/instructions/instructions/instructions.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/views/instructions/instructions/instructions.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view view-instructions\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\r\n        Si recarregues la app es perdrán els canvius.\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n      <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\r\n        El pruses nomes omplira els mails que no siguin empty i alhora\r\n        existeixin al Logicommerce.\r\n        <br />\r\n        Tampoc machaca altres idiomes\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">Copiar mails en un idioma FLUID</div>\r\n        <div class=\"card-body\">\r\n          <ol class=\"mb-1\" style=\"line-height: 2\">\r\n            <li>Escollir idioma</li>\r\n            <li>\r\n              Editar (o no) el codi dels mails de l'idioma. Si no es toquen\r\n              s'ompliran amb els continguts de base.\r\n            </li>\r\n            <li>\r\n              Triar l'idioma de destí dels mails (per defecte el mateix, pero es\r\n              pot donar el cas de voler els mails en <i>EN</i> per al idioma\r\n              <i>PT</i> perque no els tenim en <i>PT</i>)\r\n            </li>\r\n            <li>Apretar el boto generar script i copiar el script generat.</li>\r\n            <li>\r\n              Fer logout del LC si el tenim obert i tornar a fer login i sense\r\n              obrir RES llençar el script per consola.\r\n            </li>\r\n            <li>\r\n              NO CANVÏS DE PESTANYA ni facis altres coses fins que acabi!!!<br />Mentres\r\n              s'executa no toquis el Logicommerce, canvia de pestanya i ves fes\r\n              un riu o un café\r\n            </li>\r\n            <li>Si necessites un altre idioma repeteix el procès.</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">Copiar mails en un idioma BEYOND</div>\r\n        <div class=\"card-body\">\r\n          <ol class=\"mb-1\" style=\"line-height: 2\">\r\n            <li>\r\n              Tot igual que els passos en FLUID pero amb uns pasos previs:\r\n            </li>\r\n            <li>\r\n              Configura una configuració de email, encara que sigui temporal,\r\n              per tenir un id intern de configuradció de email.\r\n            </li>\r\n            <li>\r\n              Al acabar tot el procès, caldrà repassar els noms dels adjunts\r\n              d'alguns mails com el de confirmació de comanda.\r\n            </li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/instructions/instructions/instructions.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/views/instructions/instructions/instructions.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2luc3RydWN0aW9ucy9pbnN0cnVjdGlvbnMvaW5zdHJ1Y3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/instructions/instructions/instructions.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/instructions/instructions/instructions.component.ts ***!
  \***************************************************************************/
/*! exports provided: InstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsComponent", function() { return InstructionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InstructionsComponent = /** @class */ (function () {
    function InstructionsComponent() {
    }
    InstructionsComponent.prototype.ngOnInit = function () {
    };
    InstructionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-instructions',
            template: __webpack_require__(/*! ./instructions.component.html */ "./src/app/views/instructions/instructions/instructions.component.html"),
            styles: [__webpack_require__(/*! ./instructions.component.scss */ "./src/app/views/instructions/instructions/instructions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InstructionsComponent);
    return InstructionsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-instructions-instructions-module.js.map