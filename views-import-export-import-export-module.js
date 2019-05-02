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

module.exports = "<div class=\"view view-instructions\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Import\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col col-auto\">\n              <svg class=\"icon icon-import\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z\"></path></svg>\n            </div>\n            <div class=\"col col-no-auto\">\n              <div class=\"form-group\">\n                <label for=\"importInputFile\">Local file image</label>\n                <div class=\"input-group\">\n                  <div class=\"custom-file\">\n                    <input type=\"file\" class=\"custom-file-input\" id=\"importInputFile\" aria-describedby=\"importInputFileSubmit\" (change)=\"onSelectImportFile($event)\">\n                    <label class=\"custom-file-label\" for=\"importInputFile\" [innerHTML]=\"importFileName.length ? importFileName : 'Choose file'\"></label>\n                  </div>\n                </div>\n                <small class=\"form-text text-danger\" [hidden]=\"!importErrorMsg.length\" [innerHTML]=\"importErrorMsg.length ? importErrorMsg : ''\"></small>\n              </div>\n\n              <div class=\"alert alert-success mb-3\" role=\"alert\" [hidden]=\"!importSuccessMsg.length\">\n                <strong>Success!</strong> {{ importSuccessMsg }}\n              </div>\n\n              <ul [hidden]=\"!importSuccessData.length\" class=\"pl-3\">\n                <li *ngFor=\"let importItemData of importSuccessData\">\n                  <pre class=\"mb-0\" [innerHTML]=\"importItemData\"></pre>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Export\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col col-auto\">\n                <svg class=\"icon icon-export\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z\"></path></svg>\n              </div>\n              <div class=\"col col-no-auto\">\n                <div class=\"form-group\">\n                  <label for=\"exportDestLang\">Select export language</label>\n                  <select\n                    id=\"exportDestLang\"\n                    class=\"form-control\"\n                    name=\"exportDestLang\"\n                    aria-describedby=\"exportDestLangHelp\"\n                    [(ngModel)]=\"exportLang\"\n                  >\n                    <option *ngFor=\"let langId of objectKeys(selectLangs)\" [value]=\"langId\">\n                      {{ selectLangs[langId].key | uppercase }} {{ selectLangs[langId].name }}\n                    </option>\n                  </select>\n                </div>\n\n                <div class=\"form-group\">\n                  <label for=\"exportFilename\">Filename</label>\n                  <div class=\"input-group\">\n                    <input [(ngModel)]=\"exportFileName\" type=\"text\" id=\"exportFilename\" name=\"exportFilename\" class=\"form-control\" placeholder=\"Export file name\" aria-label=\"Export file name\" aria-describedby=\"export-button\">\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\">.emilio-generator</span>\n                      <button class=\"btn btn-primary\" (click)=\"exportAction()\" type=\"button\" id=\"export-button\">Export</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/import-export/import-export/import-export.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/import-export/import-export/import-export.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-import, .icon-export {\n  fill: url(#gradient-pink);\n  width: 80px;\n  height: 80px; }\n\n#export-button {\n  width: 120px; }\n\n.col-no-auto {\n  flex: 0 0 calc(100% - 110px);\n  max-width: calc(100% - 110px); }\n\npre {\n  white-space: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaW1wb3J0LWV4cG9ydC9pbXBvcnQtZXhwb3J0L0M6XFxVc2Vyc1xcam9lbFxcRG9jdW1lbnRzXFxhbmctd3d3XFxlbWlsaW8tZ2VuZXJhdG9yL3NyY1xcYXBwXFx2aWV3c1xcaW1wb3J0LWV4cG9ydFxcaW1wb3J0LWV4cG9ydFxcaW1wb3J0LWV4cG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsNEJBQTRCO0VBQzVCLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvaW1wb3J0LWV4cG9ydC9pbXBvcnQtZXhwb3J0L2ltcG9ydC1leHBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1pbXBvcnQsIC5pY29uLWV4cG9ydCB7XHJcbiAgZmlsbDogdXJsKCNncmFkaWVudC1waW5rKTtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbiNleHBvcnQtYnV0dG9uIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5jb2wtbm8tYXV0byB7XHJcbiAgZmxleDogMCAwIGNhbGMoMTAwJSAtIDExMHB4KTtcclxuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDExMHB4KTtcclxufVxyXG5cclxucHJlIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcbiJdfQ== */"

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




var ImportExportComponent = /** @class */ (function () {
    function ImportExportComponent(appData, jszip) {
        this.appData = appData;
        this.jszip = jszip;
        this.objectKeys = Object.keys;
        this.exportLang = '1';
        this.exportFileNameVersion = 0;
        this.exportFileName = '';
        this.importFileName = '';
        this.importErrorMsg = '';
        this.importSuccessMsg = '';
        this.importSuccessData = [];
    }
    ImportExportComponent.prototype.ngOnInit = function () {
        this.selectLangs = this.appData.languages;
    };
    ImportExportComponent.prototype.exportAction = function () {
        this.exportFileNameVersion++;
        var version = this.exportFileNameVersion;
        var key = '[' + this.appData.languages[this.exportLang].key + ']';
        var fileName = this.exportFileName + '__v' + version + '__' + key + '.emilio-generator';
        this.jszip.saveAsEmilioGenerator(this.appData.languages[this.exportLang], fileName, 'text/plain;charset=utf-8');
    };
    ImportExportComponent.prototype.onSelectImportFile = function (event) {
        this.importSuccessData = [];
        if (event.target.files && event.target.files[0]) {
            var reader = void 0;
            reader = new FileReader();
            var mb = event.target.files[0].size / 1024 / 1024;
            var correctFormat_1 = event.target.files[0].name.match('.emilio-generator');
            var start = 0;
            var stop_1 = event.target.files[0].size - 1;
            this.importFileName = event.target.files[0].name;
            var blob = event.target.files[0].slice(start, stop_1 + 1);
            reader.readAsText(blob);
            var self_1 = this;
            reader.onloadend = function (eventLoadEnd) {
                if (correctFormat_1 && eventLoadEnd.target.readyState === FileReader.DONE) {
                    var newDataObj = JSON.parse(eventLoadEnd.target.result);
                    if (newDataObj.hasOwnProperty('key')) {
                        var langId = self_1.appData.getLangIdByKey(newDataObj.key);
                        self_1.appData.languages[langId] = newDataObj;
                        self_1.importSuccessMsg = 'File imported successfully.';
                        self_1.importSuccessData.push('<b>Language</b> [' + newDataObj.name + ']');
                        self_1.importSuccessData.push('<b>File version</b> [2.x]');
                        self_1.importSuccessData.push('<b>Emails ids</b> [' + Object.keys(newDataObj.emails.templates) + ']');
                    }
                    else {
                        var oldVersionLegacy = self_1.importFileName.match(/\[[A-Z]{2,3}\]/);
                        if (oldVersionLegacy) {
                            var langKey = oldVersionLegacy[0].replace('[', '').replace(']', '').toLowerCase();
                            var langIdLegacy = self_1.appData.getLangIdByKey(langKey);
                            self_1.legacyImport(langIdLegacy, langKey, newDataObj);
                        }
                    }
                    self_1.importErrorMsg = '';
                }
                else {
                    self_1.importErrorMsg = 'Only .emilio-generator files!';
                }
            };
        }
    };
    ImportExportComponent.prototype.legacyImport = function (id, langKey, obj) {
        this.importSuccessData.push('<b>Language</b> [' + langKey + ']');
        this.importSuccessData.push('<b>File version</b> [1.x]');
        var successEmailId = [];
        this.appData.languages[id].emails.header.html = obj.header;
        this.appData.languages[id].emails.footer.html = obj.footer;
        for (var emailId in this.appData.languages[id].emails.templates) {
            if (obj.mails.hasOwnProperty(emailId)) {
                successEmailId.push(emailId);
                var thisDataEmail = this.appData.languages[id].emails.templates[emailId];
                // update subject and body
                thisDataEmail.subject = obj.mails[emailId].subject;
                thisDataEmail.html = obj.mails[emailId].html;
                // update custom header
                if (obj.mails[emailId].hasOwnProperty('header')) {
                    if (!thisDataEmail.hasOwnProperty('header')) {
                        thisDataEmail.header = { html: obj.mails[emailId].header };
                    }
                    else {
                        thisDataEmail.header.html = obj.mails[emailId].header;
                    }
                }
                else {
                    this.appData.delCustomHeader(langKey, emailId);
                }
                // update custom footer
                if (obj.mails[emailId].hasOwnProperty('footer')) {
                    if (!thisDataEmail.hasOwnProperty('footer')) {
                        thisDataEmail.footer = { html: obj.mails[emailId].footer };
                    }
                    else {
                        thisDataEmail.footer.html = obj.mails[emailId].footer;
                    }
                }
                else {
                    this.appData.delCustomFooter(langKey, emailId);
                }
                // save changes
                this.appData.languages[id].emails.templates[emailId] = thisDataEmail;
            }
        }
        this.importSuccessData.push('<b>Emails ids</b> [' + successEmailId.toString() + ']');
        this.importSuccessMsg = 'File imported successfully.';
        this.appData.checkAll();
    };
    ImportExportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-import-export',
            template: __webpack_require__(/*! ./import-export.component.html */ "./src/app/views/import-export/import-export/import-export.component.html"),
            styles: [__webpack_require__(/*! ./import-export.component.scss */ "./src/app/views/import-export/import-export/import-export.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_data_app_data__WEBPACK_IMPORTED_MODULE_2__["AppData"], src_app_lib_services_jszip_service__WEBPACK_IMPORTED_MODULE_3__["JszipService"]])
    ], ImportExportComponent);
    return ImportExportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-import-export-import-export-module.js.map