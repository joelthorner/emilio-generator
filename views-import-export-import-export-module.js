(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-import-export-import-export-module"],{

/***/ "./src/app/views/import-export/import-export-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/import-export/import-export-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ImportExportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportExportRoutingModule", function() { return ImportExportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _import_export_import_export_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import-export/import-export.component */ "./src/app/views/import-export/import-export/import-export.component.ts");




var routes = [
    {
        path: '',
        component: _import_export_import_export_component__WEBPACK_IMPORTED_MODULE_3__["ImportExportComponent"]
    }
];
var ImportExportRoutingModule = /** @class */ (function () {
    function ImportExportRoutingModule() {
    }
    ImportExportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ImportExportRoutingModule);
    return ImportExportRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/import-export/import-export.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/import-export/import-export.module.ts ***!
  \*************************************************************/
/*! exports provided: ImportExportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportExportModule", function() { return ImportExportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _import_export_import_export_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import-export/import-export.component */ "./src/app/views/import-export/import-export/import-export.component.ts");
/* harmony import */ var _import_export_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import-export-routing.module */ "./src/app/views/import-export/import-export-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ImportExportModule = /** @class */ (function () {
    function ImportExportModule() {
    }
    ImportExportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_import_export_import_export_component__WEBPACK_IMPORTED_MODULE_3__["ImportExportComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _import_export_routing_module__WEBPACK_IMPORTED_MODULE_4__["ImportExportRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ]
        })
    ], ImportExportModule);
    return ImportExportModule;
}());



/***/ }),

/***/ "./src/app/views/import-export/import-export/import-export.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/import-export/import-export/import-export.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view view-instructions\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">Import</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col col-auto\">\r\n              <svg\r\n                class=\"icon icon-import\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 512 512\"\r\n              >\r\n                <path\r\n                  d=\"M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z\"\r\n                ></path>\r\n              </svg>\r\n            </div>\r\n            <div class=\"col col-no-auto\">\r\n              <div class=\"form-group\">\r\n                <label for=\"importInputFile\">Local file image</label>\r\n                <div class=\"input-group\">\r\n                  <div class=\"custom-file\">\r\n                    <input\r\n                      type=\"file\"\r\n                      class=\"custom-file-input\"\r\n                      id=\"importInputFile\"\r\n                      aria-describedby=\"importInputFileSubmit\"\r\n                      (change)=\"onSelectImportFile($event)\"\r\n                    />\r\n                    <label\r\n                      class=\"custom-file-label\"\r\n                      for=\"importInputFile\"\r\n                      [innerHTML]=\"\r\n                        importFileName.length ? importFileName : 'Choose file'\r\n                      \"\r\n                    ></label>\r\n                  </div>\r\n                </div>\r\n                <small\r\n                  class=\"form-text text-danger\"\r\n                  [hidden]=\"!importErrorMsg.length\"\r\n                  [innerHTML]=\"importErrorMsg.length ? importErrorMsg : ''\"\r\n                ></small>\r\n              </div>\r\n\r\n              <div\r\n                class=\"alert alert-success mb-3\"\r\n                role=\"alert\"\r\n                [hidden]=\"!importSuccessMsg.length\"\r\n              >\r\n                <strong>Success!</strong> {{ importSuccessMsg }}\r\n              </div>\r\n\r\n              <ul [hidden]=\"!importSuccessData.length\" class=\"pl-3\">\r\n                <li *ngFor=\"let importItemData of importSuccessData\">\r\n                  <pre class=\"mb-0\" [innerHTML]=\"importItemData\"></pre>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">Export</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col col-auto\">\r\n              <svg\r\n                class=\"icon icon-export\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 512 512\"\r\n              >\r\n                <path\r\n                  d=\"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z\"\r\n                ></path>\r\n              </svg>\r\n            </div>\r\n            <div class=\"col col-no-auto\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exportDestLang\">Select export language</label>\r\n                <select\r\n                  id=\"exportDestLang\"\r\n                  class=\"form-control\"\r\n                  name=\"exportDestLang\"\r\n                  aria-describedby=\"exportDestLangHelp\"\r\n                  [(ngModel)]=\"exportLang\"\r\n                >\r\n                  <option\r\n                    *ngFor=\"let langId of objectKeys(appData.languages)\"\r\n                    [value]=\"langId\"\r\n                  >\r\n                    {{ appData.languages[langId].key | uppercase }}\r\n                    {{ appData.languages[langId].name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"exportFilename\">Filename</label>\r\n                <div class=\"input-group\">\r\n                  <input\r\n                    [(ngModel)]=\"exportFileName\"\r\n                    type=\"text\"\r\n                    id=\"exportFilename\"\r\n                    name=\"exportFilename\"\r\n                    class=\"form-control\"\r\n                    placeholder=\"Export file name\"\r\n                    aria-label=\"Export file name\"\r\n                    aria-describedby=\"export-button\"\r\n                  />\r\n                  <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\">.emilio-generator</span>\r\n                    <button\r\n                      class=\"btn btn-primary\"\r\n                      (click)=\"exportAction()\"\r\n                      type=\"button\"\r\n                      id=\"export-button\"\r\n                    >\r\n                      Export\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/import-export/import-export/import-export.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/import-export/import-export/import-export.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-import, .icon-export {\n  fill: url(#gradient-pink);\n  width: 80px;\n  height: 80px; }\n\n#export-button {\n  width: 120px; }\n\n.col-no-auto {\n  flex: 0 0 calc(100% - 110px);\n  max-width: calc(100% - 110px); }\n\npre {\n  white-space: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaW1wb3J0LWV4cG9ydC9pbXBvcnQtZXhwb3J0L0M6XFxHaXRodWJcXGVtaWxpby1nZW5lcmF0b3Ivc3JjXFxhcHBcXHZpZXdzXFxpbXBvcnQtZXhwb3J0XFxpbXBvcnQtZXhwb3J0XFxpbXBvcnQtZXhwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9pbXBvcnQtZXhwb3J0L2ltcG9ydC1leHBvcnQvaW1wb3J0LWV4cG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWltcG9ydCwgLmljb24tZXhwb3J0IHtcclxuICBmaWxsOiB1cmwoI2dyYWRpZW50LXBpbmspO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5cclxuI2V4cG9ydC1idXR0b24ge1xyXG4gIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLmNvbC1uby1hdXRvIHtcclxuICBmbGV4OiAwIDAgY2FsYygxMDAlIC0gMTEwcHgpO1xyXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTEwcHgpO1xyXG59XHJcblxyXG5wcmUge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/import-export/import-export/import-export.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/import-export/import-export/import-export.component.ts ***!
  \******************************************************************************/
/*! exports provided: ImportExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportExportComponent", function() { return ImportExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_app_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data/app-data */ "./src/app/data/app-data.ts");
/* harmony import */ var src_app_lib_services_jszip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/lib/services/jszip.service */ "./src/app/lib/services/jszip.service.ts");
/* harmony import */ var src_app_lib_services_beyond_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/lib/services/beyond.service */ "./src/app/lib/services/beyond.service.ts");





var ImportExportComponent = /** @class */ (function () {
    function ImportExportComponent(appData, jszip, beyond) {
        this.appData = appData;
        this.jszip = jszip;
        this.beyond = beyond;
        this.objectKeys = Object.keys;
        this.exportLang = "1";
        this.exportFileNameVersion = 0;
        this.exportFileName = "";
        this.importFileName = "";
        this.importErrorMsg = "";
        this.importSuccessMsg = "";
        this.importSuccessData = [];
    }
    ImportExportComponent.prototype.ngOnInit = function () { };
    ImportExportComponent.prototype.exportAction = function () {
        this.exportFileNameVersion++;
        var version = this.exportFileNameVersion;
        var key = "[" + this.appData.languages[this.exportLang].key + "]";
        var fileName = this.exportFileName + "__v" + version + "__" + key + ".emilio-generator";
        this.jszip.saveAsEmilioGenerator(this.appData.languages[this.exportLang], fileName, "text/plain;charset=utf-8");
    };
    ImportExportComponent.prototype.onSelectImportFile = function (event) {
        var _this = this;
        this.importSuccessData = [];
        if (event.target.files && event.target.files[0]) {
            var reader = void 0;
            reader = new FileReader();
            // const mb = event.target.files[0].size / 1024 / 1024;
            var correctFormat_1 = event.target.files[0].name.match(".emilio-generator");
            var start = 0;
            var stop_1 = event.target.files[0].size - 1;
            this.importFileName = event.target.files[0].name;
            var blob = event.target.files[0].slice(start, stop_1 + 1);
            reader.readAsText(blob);
            reader.onloadend = function (eventLoadEnd) {
                if (correctFormat_1 &&
                    eventLoadEnd.target.readyState === FileReader.DONE) {
                    var newDataObj = JSON.parse(eventLoadEnd.target.result);
                    var langId = _this.appData.getLangIdByKey(newDataObj.key);
                    var isBeyond = newDataObj.system === "beyond";
                    _this.beyond.changeBeyond(isBeyond);
                    _this.appData.languages[langId] = newDataObj;
                    _this.importSuccessMsg = "File imported successfully.";
                    _this.importSuccessData.push("<b>Language</b> [" + newDataObj.name + "]");
                    _this.importSuccessData.push("<b>System</b> " + (isBeyond ? "beyond" : "fluid"));
                    _this.importSuccessData.push("<b>File version</b> [2.x]");
                    _this.importSuccessData.push("<b>Emails ids</b> [" +
                        Object.keys(newDataObj.emails.templates) +
                        "]");
                    _this.importErrorMsg = "";
                }
                else {
                    _this.importErrorMsg = "Only .emilio-generator files!";
                }
            };
        }
    };
    ImportExportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "eg-import-export",
            template: __webpack_require__(/*! ./import-export.component.html */ "./src/app/views/import-export/import-export/import-export.component.html"),
            styles: [__webpack_require__(/*! ./import-export.component.scss */ "./src/app/views/import-export/import-export/import-export.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_data_app_data__WEBPACK_IMPORTED_MODULE_2__["AppData"],
            src_app_lib_services_jszip_service__WEBPACK_IMPORTED_MODULE_3__["JszipService"],
            src_app_lib_services_beyond_service__WEBPACK_IMPORTED_MODULE_4__["BeyondService"]])
    ], ImportExportComponent);
    return ImportExportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-import-export-import-export-module.js.map