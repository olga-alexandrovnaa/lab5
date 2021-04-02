(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/brokers/brokers.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brokers/brokers.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <title>Brokers</title>\n  <style type=\"text/css\">\n\n    .brokers{\n      margin-left: 42%;\n    }\n    .broker_card{\n      text-align: left;\n      font-style: italic;\n      background: rgb(235, 238, 241);\n      border: 5px double darkblue;\n      padding: 10px 20px 10px 20px;\n      margin: 20px auto;\n      width: 200px;\n\n    }\n    #add_broker{\n      background: rgb(235, 238, 241);\n      font-style: italic;\n      border: 3px dotted darkblue;\n      padding: 10px 20px 10px 20px;\n      margin: 20px auto;\n      width: 210px;\n    }\n    #middle{\n      min-width: 40px;\n    }\n    #buttons{\n      text-align: right;\n    }\n    #button{\n      background: white;\n      height: 25px;\n      border-radius: 12px;\n      border: 5px blue;\n      margin-right: 5px;\n      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.432), 0 5px 8px rgba(12, 6, 6, 0.486);\n    }\n  </style>\n</head>\n<body>\n<div class = \"brokers\">\n  <tr>\n    <th>\n    <div *ngFor=\"let broker of brokers\">\n      <div class  = \"broker_card\" id = \"{{broker.ID}}\">\n        <p>Ник брокера: {{broker.name}}</p>\n        <p>Запас денежных средств: <input type=\"number\"  min=\"0\" [(ngModel)]=\"broker.money\"></p>\n        <div id = \"buttons\">\n          <button id=\"button\"  (click)=\"edit()\" >Изменить</button>\n          <button id=\"button\"  (click)=\"delete(broker.ID)\" >Удалить</button>\n      </div>\n      </div>\n    </div>\n    </th>\n    <th><div id = \"middle\"></div></th>\n    <th>\n      <div id = \"add_broker\">\n        <p>Ник брокера: <input required [(ngModel)]=\"name\"></p>\n        <p>Запас денежных средств: <input type=\"number\" min=\"0\" required [(ngModel)]=\"money\"></p>\n        <div id = \"buttons\">\n          <button id=\"button\" (click)=\"add()\">Добавить брокера</button>\n        </div>\n      </div>\n    </th>\n  </tr>\n</div>\n</body>\n</html>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <title>Настройки</title>\n  <style type=\"text/css\">\n\n    .settings{\n      align-items: center;\n      font-size: 30px;\n      text-align: center;\n      font-style: italic;\n      margin: 20px auto;\n      width: 470px;\n    }\n    #button{\n      font-size: 30px;\n      background: white;\n      font-style: italic;\n      border-radius: 12px;\n      border: 5px blue;\n      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.432), 0 5px 8px rgba(12, 6, 6, 0.486);\n    }\n  </style>\n</head>\n<body>\n<div class = \"settings\">\n  <p>Время начала торгов: <input type=\"time\"  required [(ngModel)]=\"settings.tm_begin\"></p>\n  <p>Время окончания торгов: <input type=\"time\" required [(ngModel)]=\"settings.tmstop\"></p>\n  <p>Интервал обновления акций: <input type=\"time\" required [(ngModel)]=\"settings.tmout\"></p>\n  <button id=\"button\" (click)=\"edit()\" >Изменить</button>\n</div>\n</body>\n</html>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stoks/stoks.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stoks/stoks.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <title>Акции</title>\n  <style type=\"text/css\">\n\n    .stocks{\n      margin-left: 34%;\n    }\n    .stock_card{\n      text-align: left;\n      font-style: italic;\n      background: rgb(235, 238, 241);\n      border: 5px double darkblue;\n      padding: 10px 20px 10px 20px;\n      margin: 20px auto;\n      width: 470px;\n\n    }\n    #add_stock{\n      background: rgb(235, 238, 241);\n      font-style: italic;\n      border: 3px dotted darkblue;\n      padding: 10px 20px 10px 20px;\n      margin: 20px auto;\n      width: 210px;\n    }\n    #middle{\n      min-width: 20px;\n    }\n    #buttons{\n      text-align: right;\n    }\n    #button{\n      background: white;\n      height: 25px;\n      border-radius: 12px;\n      border: 5px blue;\n      margin-right: 5px;\n      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.432), 0 5px 8px rgba(12, 6, 6, 0.486);\n    }\n  </style>\n</head>\n<body>\n<div class = \"stocks\">\n  <tr>\n    <th>\n      <div *ngFor=\"let stock of stocks\">\n        <div class  = \"stock_card\" id = \"{{stock.id}}\">\n          <p>Название компании: <input size = \"35\" [(ngModel)]=\"stock.name\"></p>\n          <p>Закон распределения: <input size = \"34\" [(ngModel)]=\"stock.distribution\"></p>\n          <p>Максимальное значение изменения: <input type=\"number\" min=\"0\" [(ngModel)]=\"stock.max\"></p>\n          <p>Количество акций: <input type=\"number\" min=\"0\" [(ngModel)]=\"stock.count\"></p>\n          <p>Стоимость акции: <input type=\"number\" min=\"0\" [(ngModel)]=\"stock.price\"></p>\n          <div id=\"buttons\">\n          <button id=\"button\"  (click)=\"edit()\" >Изменить</button>\n          <button id=\"button\" (click)=\"delete(stock.id)\" >Удалить</button>\n          </div>\n        </div>\n      </div>\n    </th>\n    <th>\n      <div id = \"middle\"></div>\n    </th>\n    <th>\n      <div id = \"add_stock\">\n        <p>Название компании: <input [(ngModel)]=\"name\"></p>\n        <p>Закон распределения: <input [(ngModel)]=\"distribution\"></p>\n        <p >Максимальное значение изменения: <input id = \"number1\" type=\"number\" min=\"0\" [(ngModel)]=\"max\"></p>\n        <p >Количество акций: <input id = \"number2\" type=\"number\" min=\"0\" [(ngModel)]=\"count\"></p>\n        <p >Стоимость акции: <input id = \"number3\" type=\"number\" min=\"0\" [(ngModel)]=\"price\"></p>\n        <button id=\"button\"  (click)=\"add()\">Добавить новую акцию</button>\n      </div>\n    </th>\n  </tr>\n</div>\n</body>\n</html>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: "\n     <h2>\n       <table style=\"margin-left: 100px\">\n         <tr><th style=\"font-size: 40px;color: white;\">\u0411\u0418\u0420\u0416\u0410</th><th style=\"font-size: small;color: white;\"><div style=\"display: table-cell;text-align: left;\">\u041C\u0438\u0440</div><div>\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439</div></th></tr>\n       </table>\n     </h2>\n      <div class = \"menu\">\n        <nav>\n          <ul>\n            <li><a href = \"/brokers\">\u0411\u0440\u043E\u043A\u0435\u0440\u044B</a>\n            <li><a href = \"/stoks\">\u0410\u043A\u0446\u0438\u0438</a>\n            <li><a href = \"/setting\">\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0431\u0438\u0440\u0436\u0438</a>\n          </ul>\n        </nav>\n      </div>\n      <router-outlet></router-outlet>",
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./css/app.component.css */ "./src/app/css/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _brokers_brokers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./brokers/brokers.component */ "./src/app/brokers/brokers.component.ts");
            /* harmony import */ var _stoks_stoks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stoks/stoks.component */ "./src/app/stoks/stoks.component.ts");
            /* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
            var appRoutes = [
                { path: 'brokers', component: _brokers_brokers_component__WEBPACK_IMPORTED_MODULE_7__["BrokersComponent"] },
                { path: 'stoks', component: _stoks_stoks_component__WEBPACK_IMPORTED_MODULE_8__["StoksComponent"] },
                { path: 'setting', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"] }
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _brokers_brokers_component__WEBPACK_IMPORTED_MODULE_7__["BrokersComponent"],
                        _stoks_stoks_component__WEBPACK_IMPORTED_MODULE_8__["StoksComponent"],
                        _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes)
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/brokers/brokers.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/brokers/brokers.component.ts ***!
          \**********************************************/
        /*! exports provided: BrokersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokersComponent", function () { return BrokersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
            var Broker = /** @class */ (function () {
                function Broker(name, money, ID) {
                    this.name = name;
                    this.money = money;
                    this.ID = ID;
                }
                return Broker;
            }());
            var BrokersComponent = /** @class */ (function () {
                function BrokersComponent(httpSer) {
                    this.httpSer = httpSer;
                    this.brokers = [];
                }
                BrokersComponent.prototype.ngOnInit = function () {
                    this.Init();
                };
                BrokersComponent.prototype.Init = function () {
                    var _this = this;
                    this.httpSer.get_brokers().subscribe(function (date) {
                        _this.brokers = date;
                        console.log(_this.brokers);
                    });
                };
                BrokersComponent.prototype.delete = function (ID) {
                    var index = this.brokers.findIndex(function (broker) {
                        return broker.ID == ID;
                    });
                    this.brokers.splice(index, 1);
                    this.httpSer.set_brokers(this.brokers).subscribe();
                };
                BrokersComponent.prototype.edit = function () {
                    this.httpSer.set_brokers(this.brokers).subscribe();
                };
                BrokersComponent.prototype.add = function () {
                    this.ID = this.brokers[this.brokers.length - 1].ID + 1;
                    this.brokers.push(new Broker(this.name, this.money, this.ID));
                    this.httpSer.set_brokers(this.brokers).subscribe();
                };
                return BrokersComponent;
            }());
            BrokersComponent.ctorParameters = function () { return [
                { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
            ]; };
            BrokersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-brokers',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./brokers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/brokers/brokers.component.html")).default,
                    providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]]
                })
            ], BrokersComponent);
            /***/ 
        }),
        /***/ "./src/app/css/app.component.css": 
        /*!***************************************!*\
          !*** ./src/app/css/app.component.css ***!
          \***************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: center;\n  position: relative;\n  margin-top: 0;\n  margin-left: -10px;\n  margin-right: -10px;\n  margin-bottom: -26px;\n  top: -10px;\n  height: 52px;\n  background: midnightblue;\n}\nul {\n  margin-left: -10px;\n  margin-right: -10px;\n  padding: 0;\n  background: white;\n}\nul {\n  display: flex;\n  box-shadow: 0 5px 8px rgba(0,0,0,0.25);\n}\nul li {\n\n  list-style-type: none;\n  flex-basis: auto;\n  flex-grow: 1;\n  text-align: center;\n}\nul li a {\n  padding: 4px 0;\n  text-decoration: none;\n  color: midnightblue;\n\n  font-weight: bold;\n  font-size: 18px;\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3NzL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztBQUN4QztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixtQkFBbUI7O0VBRW5CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Nzcy9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTI2cHg7XG4gIHRvcDogLTEwcHg7XG4gIGhlaWdodDogNTJweDtcbiAgYmFja2dyb3VuZDogbWlkbmlnaHRibHVlO1xufVxudWwge1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxudWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2hhZG93OiAwIDVweCA4cHggcmdiYSgwLDAsMCwwLjI1KTtcbn1cblxudWwgbGkge1xuXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZmxleC1iYXNpczogYXV0bztcbiAgZmxleC1ncm93OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnVsIGxpIGEge1xuICBwYWRkaW5nOiA0cHggMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogbWlkbmlnaHRibHVlO1xuXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/http.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/http.service.ts ***!
          \*********************************/
        /*! exports provided: HttpService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function () { return HttpService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var HttpService = /** @class */ (function () {
                function HttpService(http) {
                    this.http = http;
                }
                HttpService.prototype.get_brokers = function () {
                    return this.http.get('http://localhost:4201/brokers');
                };
                HttpService.prototype.get_stoks = function () {
                    return this.http.get('http://localhost:4201/stoks');
                };
                HttpService.prototype.get_settings = function () {
                    return this.http.get('http://localhost:4201/setting');
                };
                HttpService.prototype.set_brokers = function (date) {
                    var body = date;
                    console.log(body);
                    return this.http.post('http://localhost:4201/brokers', body);
                };
                HttpService.prototype.set_stoks = function (date) {
                    var body = date;
                    console.log(body);
                    return this.http.post('http://localhost:4201/stoks', body);
                };
                HttpService.prototype.set_setting = function (date) {
                    var body = date;
                    console.log(body);
                    return this.http.post('http://localhost:4201/setting', body);
                };
                return HttpService;
            }());
            HttpService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], HttpService);
            /***/ 
        }),
        /***/ "./src/app/settings/settings.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/settings/settings.component.ts ***!
          \************************************************/
        /*! exports provided: SettingsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () { return SettingsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
            var Setting = /** @class */ (function () {
                function Setting(tm_begin, tmstop, tmout) {
                    this.tm_begin = tm_begin;
                    this.tmstop = tmstop;
                    this.tmout = tmout;
                }
                return Setting;
            }());
            var SettingsComponent = /** @class */ (function () {
                function SettingsComponent(httpService) {
                    this.httpService = httpService;
                }
                SettingsComponent.prototype.ngOnInit = function () {
                    this.Init();
                };
                SettingsComponent.prototype.edit = function () {
                    this.httpService.set_setting(this.settings).subscribe();
                };
                SettingsComponent.prototype.Init = function () {
                    var _this = this;
                    this.httpService.get_settings().subscribe(function (data) {
                        _this.settings = data;
                        console.log(_this.settings);
                    });
                };
                return SettingsComponent;
            }());
            SettingsComponent.ctorParameters = function () { return [
                { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
            ]; };
            SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-settings',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html")).default,
                    providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]]
                })
            ], SettingsComponent);
            /***/ 
        }),
        /***/ "./src/app/stoks/stoks.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/stoks/stoks.component.ts ***!
          \******************************************/
        /*! exports provided: StoksComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoksComponent", function () { return StoksComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
            var Stok = /** @class */ (function () {
                function Stok(name, distribution, max, price, count, id) {
                    this.name = name;
                    this.distribution = distribution;
                    this.max = max;
                    this.price = price;
                    this.count = count;
                    this.id = id;
                }
                return Stok;
            }());
            var StoksComponent = /** @class */ (function () {
                function StoksComponent(httpService) {
                    this.httpService = httpService;
                }
                StoksComponent.prototype.ngOnInit = function () {
                    this.Init();
                };
                StoksComponent.prototype.delete = function (id) {
                    var index = this.stocks.findIndex(function (stocks) {
                        return stocks.id == id;
                    });
                    this.stocks.splice(index, 1);
                    this.httpService.set_stoks(this.stocks).subscribe();
                };
                StoksComponent.prototype.edit = function () {
                    this.httpService.set_stoks(this.stocks).subscribe();
                };
                StoksComponent.prototype.add = function () {
                    if (!(document.querySelector('#number1')[0].value < 0 || document.querySelector('#number3')[0].value < 0 || document.querySelector('#number2')[0].value < 0)) {
                        this.id = this.stocks[this.stocks.length - 1].id + 1;
                        this.stocks.push(new Stok(this.name, this.distribution, this.max, this.price, this.count, this.id));
                        this.httpService.set_stoks(this.stocks).subscribe();
                    }
                };
                StoksComponent.prototype.Init = function () {
                    var _this = this;
                    this.httpService.get_stoks().subscribe(function (date) {
                        _this.stocks = date;
                        console.log(_this.stocks);
                    });
                };
                return StoksComponent;
            }());
            StoksComponent.ctorParameters = function () { return [
                { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
            ]; };
            StoksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-stoks',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stoks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stoks/stoks.component.html")).default,
                    providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]]
                })
            ], StoksComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/olga/WebstormProjects/lab5/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map