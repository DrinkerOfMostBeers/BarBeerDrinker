(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-transaction/add-transaction.component.css":
/*!***************************************************************!*\
  !*** ./src/app/add-transaction/add-transaction.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center_form {\r\n    margin: 0 auto;\r\n    width: 40%\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXRyYW5zYWN0aW9uL2FkZC10cmFuc2FjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2FkZC10cmFuc2FjdGlvbi9hZGQtdHJhbnNhY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJfZm9ybSB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA0MCVcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/add-transaction/add-transaction.component.html":
/*!****************************************************************!*\
  !*** ./src/app/add-transaction/add-transaction.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n    <div class=\"container\">\r\n        <h1 class=\"display-4\">Add a Transaction to \"{{seller}}\"</h1>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid mx-5\">\r\n    <form [formGroup]=\"transactionForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n        <div class=\"row mx-5\">\r\n            <div class=\"col-align-start mt-1 mr-2\">\r\n                <label for=\"transactionIdInput\">Transaction ID:</label>\r\n            </div>\r\n            <div class=\"col-align-start mr-5\">\r\n                <input type=\"number\" formControlName=\"transactionId\" class=\"form-control inline\" required>\r\n            </div>\r\n            <div class=\"col-align-start mt-1 mr-2\">\r\n                <label>Drinker:</label>\r\n            </div>\r\n            <div class=\"col-align-start mr-5\">\r\n                <select formControlName=\"payer\" class=\"form-control\" required>\r\n                    <option *ngFor=\"let drinker of drinkers\" [value]=\"drinker\">{{drinker}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-align-center\">\r\n                <button (click)=\"addItem()\" class=\"btn btn-success\">Add Item</button>\r\n            </div>\r\n        </div>\r\n\r\n        <br>\r\n\r\n        <div class=\"row mx-5\">\r\n            <div formArrayName=\"itemsArray\">\r\n                <div *ngFor=\"let item of itemsArray.controls; let i=index;\" [formGroupName]=\"i\">\r\n                    <div class=\"row mx-1\">\r\n                        <div class=\"col-align-start mt-1 mr-2\">\r\n                            <label>Category:</label>\r\n                        </div>\r\n                        <div class=\"col-align-start mr-5\">\r\n                            <select (change)=\"updateItems($event.target.selectedIndex, i)\" formControlName=\"category\"\r\n                                class=\"form-control\" required>\r\n                                <option *ngFor=\"let category of categories\" [value]=\"category\">{{category}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col-align-start mt-1 mb-3 mr-2\">\r\n                            <label>Name:</label>\r\n                        </div>\r\n                        <div class=\"col-align-start mr-5\">\r\n                            <select formControlName=\"name\" class=\"form-control\" required>\r\n                                <option *ngFor=\"let item of items[i]\" [value]=\"item\">{{item}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col-align-start mt-1 mr-2\">\r\n                            <label>Quantity:</label>\r\n                        </div>\r\n                        <div class=\"col-align-start mr-5\">\r\n                            <input type=\"number\" formControlName=\"quantity\" class=\"form-control\" required>\r\n                        </div>\r\n                        <div class=\"col-align-end\">\r\n                            <button (click)=\"removeItem(i)\" class=\"btn btn-outline-danger\">Remove Item</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <br>\r\n\r\n        <div class=\"row mx-5\">\r\n            <div class=\"col-align-start mt-1 mr-2\">\r\n                <label>Day of Purchase:</label>\r\n            </div>\r\n            <div class=\"col-align-start mr-5\">\r\n                <select formControlName=\"dayIssued\" class=\"form-control\" required>\r\n                    <option *ngFor=\"let day of daysOfWeek\" [value]=\"day\">{{day}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-align-start mt-1 mr-2\">\r\n                <label>Time of Purchase:</label>\r\n            </div>\r\n            <div class=\"col-align-start mr-5\">\r\n                <input type=\"time\" formControlName=\"timeIssued\" class=\"form-control\" required>\r\n            </div>\r\n            <div class=\"col-align-start mt-1 mr-2\">\r\n                <label>Tip:</label>\r\n            </div>\r\n            <div class=\"col-align-start mr-5\">\r\n                <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">$</div>\r\n                    <input type=\"number\" formControlName=\"tip\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <br>\r\n\r\n        <div class=\"row mx-5\">\r\n            <button type=\"submit\" [disabled]=\"!transactionForm.valid\" class=\"btn btn-primary\">Submit</button>\r\n        </div>\r\n        <div class=\"row mx-5\">\r\n            <h6 *ngIf=\"finalTotal\"><br>Order Total: ${{finalTotal}}</h6>\r\n        </div>\r\n\r\n    </form>\r\n\r\n    <div *ngIf=\"response\">\r\n        <br>\r\n        <div class=\"row mx-5\">\r\n            <h4>Result:</h4>\r\n        </div>\r\n        <p class=\"row mx-5\">{{response}}</p>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/add-transaction/add-transaction.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/add-transaction/add-transaction.component.ts ***!
  \**************************************************************/
/*! exports provided: AddTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTransactionComponent", function() { return AddTransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _transactions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transactions.service */ "./src/app/transactions.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddTransactionComponent = /** @class */ (function () {
    function AddTransactionComponent(http, route, fb) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.fb = fb;
        this.items = [];
        this.daysOfWeek = _transactions_service__WEBPACK_IMPORTED_MODULE_4__["TransactionsService"].daysOfWeek;
        this.finalTotal = undefined;
        this.transactionForm = this.fb.group({
            transactionId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            payer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            itemsArray: this.fb.array([this.addItemRow()], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            dayIssued: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            timeIssued: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tip: [0]
        });
        route.paramMap.subscribe(function (paramMap) { return _this.seller = paramMap.get('bar'); });
        this.getCategories().subscribe(function (categories) {
            _this.categories = [];
            categories.forEach(function (element) {
                _this.categories.push(element['category']);
            });
            _this.itemsArray.at(0).get('category').setValue('BEER');
            _this.itemsList = [];
            var _loop_1 = function (i) {
                _this.getItems(_this.categories[i]).subscribe(function (items) {
                    _this.itemsList[i] = [];
                    items.forEach(function (element) {
                        _this.itemsList[i].push(element['name']);
                    });
                    if (_this.itemsList.length === categories.length) {
                        _this.items[0] = _this.itemsList[_this.categories.findIndex(function (category) { return category === 'BEER'; })];
                    }
                });
            };
            for (var i = 0; i < _this.categories.length; i++) {
                _loop_1(i);
            }
        });
        this.getDrinkers().subscribe(function (drinkers) {
            _this.drinkers = [];
            drinkers.forEach(function (element) {
                _this.drinkers.push(element['firstName'] + ' ' + element['lastName']);
            });
            _this.transactionForm.get('payer').setValue(_this.drinkers[0]);
        });
        this.transactionForm.get('dayIssued').setValue(this.daysOfWeek[0]);
    }
    AddTransactionComponent.prototype.ngOnInit = function () {
    };
    AddTransactionComponent.prototype.onSubmit = function () {
        var _this = this;
        var observables = [];
        var quantities = [];
        var issued = this.convertIssued(this.transactionForm.value['dayIssued'], this.transactionForm.value['timeIssued']);
        var data = [this.seller, this.transactionForm.value, issued];
        this.transactionForm.value['itemsArray'].forEach(function (element) {
            observables.push(_this.getItemPrice(element['name']));
            quantities.push(element['quantity']);
        });
        var total;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(observables).subscribe(function (prices) {
            total = _this.calculateTotal(prices, quantities);
            data.push(total);
            _this.addTransaction(data).subscribe(function (response) { return _this.response = response; });
        });
    };
    Object.defineProperty(AddTransactionComponent.prototype, "itemsArray", {
        get: function () {
            return this.transactionForm.get('itemsArray');
        },
        enumerable: true,
        configurable: true
    });
    AddTransactionComponent.prototype.addItemRow = function () {
        return this.fb.group({
            category: [],
            name: [],
            quantity: []
        });
    };
    AddTransactionComponent.prototype.addItem = function () {
        this.itemsArray.push(this.addItemRow());
    };
    AddTransactionComponent.prototype.removeItem = function (index) {
        this.itemsArray.removeAt(index);
    };
    AddTransactionComponent.prototype.getDrinkers = function () {
        return this.http.get('/api/bar/' + this.seller + '/drinkers');
    };
    AddTransactionComponent.prototype.getCategories = function () {
        return this.http.get('/api/categories');
    };
    AddTransactionComponent.prototype.getItems = function (category) {
        return this.http.get('/api/' + this.seller + '/items/' + category);
    };
    AddTransactionComponent.prototype.updateItems = function (selected, update) {
        this.itemsArray.at(update).get('name').setValue([this.itemsList[selected]]);
        this.items[update] = this.itemsList[selected];
    };
    AddTransactionComponent.prototype.getItemPrice = function (item) {
        return this.http.get('/api/' + this.seller + '/' + item + '/get_item_price');
    };
    AddTransactionComponent.prototype.calculateTotal = function (items, quantities) {
        var total = 0;
        for (var i = 0; i < items.length; i++) {
            total += items[i]['price'] * quantities[i];
        }
        this.finalTotal = total + this.transactionForm.value['tip'];
        return this.finalTotal;
    };
    AddTransactionComponent.prototype.convertIssued = function (dayIssued, timeIssued) {
        return dayIssued.charAt(0) + timeIssued.replace(':', '');
    };
    AddTransactionComponent.prototype.addTransaction = function (data) {
        return this.http.post('/api/add_transaction', data);
    };
    AddTransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-transaction',
            template: __webpack_require__(/*! ./add-transaction.component.html */ "./src/app/add-transaction/add-transaction.component.html"),
            styles: [__webpack_require__(/*! ./add-transaction.component.css */ "./src/app/add-transaction/add-transaction.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AddTransactionComponent);
    return AddTransactionComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_bars_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bars/bars.component */ "./src/app/bars/bars.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drinkers/drinkers.component */ "./src/app/drinkers/drinkers.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-transaction/add-transaction.component */ "./src/app/add-transaction/add-transaction.component.ts");
/* harmony import */ var _modifications_modifications_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modifications/modifications.component */ "./src/app/modifications/modifications.component.ts");
/* harmony import */ var _query_query_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./query/query.component */ "./src/app/query/query.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/verify/verify.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: 'static',
        pathMatch: 'full',
        redirectTo: 'bars'
    },
    {
        path: 'bars',
        pathMatch: 'full',
        component: _bars_bars_component__WEBPACK_IMPORTED_MODULE_2__["BarsComponent"]
    },
    {
        path: 'bars/:bar',
        pathMatch: 'full',
        component: _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__["BarDetailsComponent"]
    },
    {
        path: 'bar/:bar/add',
        pathMatch: 'full',
        component: _add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_9__["AddTransactionComponent"]
    },
    {
        path: 'beers',
        pathMatch: 'full',
        component: _beers_beers_component__WEBPACK_IMPORTED_MODULE_7__["BeersComponent"]
    },
    {
        path: 'beers/:beer',
        pathMatch: 'full',
        component: _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_8__["BeerDetailsComponent"]
    },
    {
        path: 'drinkers',
        pathMatch: 'full',
        component: _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_4__["DrinkersComponent"]
    },
    {
        path: 'drinkers/:drinker',
        pathMatch: 'full',
        component: _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_5__["DrinkerDetailsComponent"]
    },
    {
        path: 'drinker/:drinker/transactions',
        pathMatch: 'full',
        component: _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_6__["TransactionsComponent"]
    },
    {
        path: 'modifications',
        pathMatch: 'full',
        component: _modifications_modifications_component__WEBPACK_IMPORTED_MODULE_10__["ModificationsComponent"]
    },
    {
        path: 'query',
        pathMatch: 'full',
        component: _query_query_component__WEBPACK_IMPORTED_MODULE_11__["QueryComponent"]
    },
    {
        path: 'verify',
        pathMatch: 'full',
        component: _verify_verify_component__WEBPACK_IMPORTED_MODULE_12__["VerifyComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">[Bar-Beer-Drinker]</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/bars\">Bars</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/beers\">Beers</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/drinkers\">Drinkers</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/verify\">Verify</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/modifications\">Modify</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/query\">Query</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bar-beer-drinker-ui';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bars_bars_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bars/bars.component */ "./src/app/bars/bars.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./drinkers/drinkers.component */ "./src/app/drinkers/drinkers.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-transaction/add-transaction.component */ "./src/app/add-transaction/add-transaction.component.ts");
/* harmony import */ var _modifications_modifications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modifications/modifications.component */ "./src/app/modifications/modifications.component.ts");
/* harmony import */ var _query_query_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./query/query.component */ "./src/app/query/query.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/verify/verify.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _bars_bars_component__WEBPACK_IMPORTED_MODULE_7__["BarsComponent"],
                _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_8__["BarDetailsComponent"],
                _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_9__["DrinkersComponent"],
                _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_10__["DrinkerDetailsComponent"],
                _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_11__["TransactionsComponent"],
                _beers_beers_component__WEBPACK_IMPORTED_MODULE_12__["BeersComponent"],
                _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_13__["BeerDetailsComponent"],
                _add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_14__["AddTransactionComponent"],
                _modifications_modifications_component__WEBPACK_IMPORTED_MODULE_15__["ModificationsComponent"],
                _query_query_component__WEBPACK_IMPORTED_MODULE_16__["QueryComponent"],
                _verify_verify_component__WEBPACK_IMPORTED_MODULE_17__["VerifyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-details/bar-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1kZXRhaWxzL2Jhci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\" style=\"white-space: pre-wrap;\">\n        <h1 class=\"display-4\">{{barName}}</h1>\n        <p class=\"bar-details\" *ngIf=\"barDetails\">\n            {{barDetails?.address}} <span *ngIf=\"barDetails.address && barDetails.city\">| </span>{{ barDetails?.city }}\n            <br>\n            {{barDetails?.phone}}\n            <br>\n            {{barDetails?.hours}}\n            <a routerLink=\"/bar/{{barName}}/add\">Add Transaction</a>\n        </p>\n    </div>\n</div>\n\n<div class=\"container\">\n    <br>\n    <div id='spenderGraph'></div>\n    <br><br><br>\n    <div id='beerGraph'></div>\n    <br><br><br>\n    <div id='manufacturerGraph'></div>\n    <br><br><br>\n    <div id='timeDistributionGraph'></div>\n    <br><br><br>\n    <div id='dayDistributionGraph'></div>\n    <br>\n</div>"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.ts ***!
  \******************************************************/
/*! exports provided: BarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarDetailsComponent", function() { return BarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarDetailsComponent = /** @class */ (function () {
    function BarDetailsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bar');
            barService.getBar(_this.barName).subscribe(function (data) {
                _this.barDetails = data[0];
                _this.barDetails.hours = _this.formatHours(_this.barDetails.hours);
                _this.interestingGraphHelper(data);
                _this.busyGraphHelper(data);
            }, function (error) {
                if (error.status === 404) {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server. Check the browser console');
                }
            });
        });
    }
    BarDetailsComponent.prototype.ngOnInit = function () {
    };
    BarDetailsComponent.prototype.formatHours = function (hours) {
        if (hours.length === 0) {
            return '';
        }
        return hours.charAt(0) + ' ' + hours.substr(1, 2) + ':' + hours.substr(3, 2) + '-' + hours.substr(5, 2)
            + ':' + hours.substr(7, 2) + '\n' + (hours.charAt(0) === 'U' ? '' : ' ') + this.formatHours(hours.substr(9));
    };
    BarDetailsComponent.prototype.interestingGraphHelper = function (data) {
        var xVal = [];
        var yVal = [];
        data[1].forEach(function (dataRow) {
            xVal.push(dataRow.payer);
            yVal.push(dataRow.total);
        });
        this.renderInterestingBarGraphs('spenderGraph', xVal, yVal, 'Spender', 'Biggest Spenders At', 'Total Money Spent', 'No one has spent any money here yet');
        xVal.length = 0;
        yVal.length = 0;
        data[2].forEach(function (dataRow) {
            xVal.push(dataRow.bought);
            yVal.push(dataRow.count);
        });
        this.renderInterestingBarGraphs('beerGraph', xVal, yVal, 'Beer', 'Most Popular Beers At ', 'Number of transactions', 'No beers have been bought from here yet');
        xVal.length = 0;
        yVal.length = 0;
        data[3].forEach(function (dataRow) {
            xVal.push(dataRow.manufacturer);
            yVal.push(dataRow.count);
        });
        this.renderInterestingBarGraphs('manufacturerGraph', xVal, yVal, 'Manufacturer', 'Favorite Manufacturers At ', 'Number of transactions', 'No items from any manufacturers were bought from here');
    };
    BarDetailsComponent.prototype.busyGraphHelper = function (data) {
        var timeCounts = Array.apply(null, Array(24)).map(Number.prototype.valueOf, 0);
        var dayCounts = Array.apply(null, Array(7)).map(Number.prototype.valueOf, 0);
        var daysOfWeek = 'MTWRFSU';
        data[4].forEach(function (dataRow) {
            timeCounts[+dataRow.issued.substr(1, 2)]++;
            dayCounts[daysOfWeek.indexOf(dataRow.issued.charAt(0))]++;
        });
        var timeCountOrdered = [];
        for (var i = 6; i < 30; i++) {
            var num = i;
            if (i >= 24) {
                num = i - 24;
            }
            timeCountOrdered[i - 6] = timeCounts[num];
        }
        this.renderBusyTimeGraph(timeCountOrdered);
        this.renderBusyDayGraph(dayCounts);
    };
    BarDetailsComponent.prototype.renderBusyDayGraph = function (counts) {
        Highcharts.chart('dayDistributionGraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Day distribution of sales at ' + this.barName
            },
            lang: {
                noData: 'This bar hasn\'t sold anything yet'
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            if (this.y > 0) {
                                return this.y;
                            }
                        }
                    },
                }
            },
            xAxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                title: {
                    text: 'Day of Week'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of transactions'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BarDetailsComponent.prototype.renderBusyTimeGraph = function (counts) {
        Highcharts.chart('timeDistributionGraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Time distribution of sales at ' + this.barName
            },
            lang: {
                noData: 'This bar hasn\'t sold anything yet'
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            if (this.y > 0) {
                                return this.y;
                            }
                        }
                    },
                }
            },
            xAxis: {
                categories: ['06:00 - 06:59', '07:00 - 07:59', '08:00 - 08:59', '09:00 - 09:59',
                    '10:00 - 10:59', '11:00 - 11:59', '12:00 - 12:59', '13:00 - 13:59', '14:00 - 14:59',
                    '15:00 - 15:59', '16:00 - 16:59', '17:00 - 17:59', '18:00 - 18:59', '19:00 - 19:59',
                    '20:00 - 20:59', '21:00 - 21:59', '22:00 - 22:59', '23:00 - 23:59', '0:00 - 0:59', '1:00 - 1:59',
                    '2:00 - 2:59', '3:00 - 3:59', '4:00 - 4:59', '5:00 - 5:59'],
                title: {
                    text: 'Time Block'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of transactions'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BarDetailsComponent.prototype.renderInterestingBarGraphs = function (graphName, elements, counts, xLabel, title, yLabel, errorMessage) {
        Highcharts.chart(graphName, {
            chart: {
                type: 'column'
            },
            title: {
                text: title + ' ' + this.barName
            },
            lang: {
                noData: errorMessage
            },
            xAxis: {
                categories: elements,
                title: {
                    text: xLabel
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: yLabel
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-details',
            template: __webpack_require__(/*! ./bar-details.component.html */ "./src/app/bar-details/bar-details.component.html"),
            styles: [__webpack_require__(/*! ./bar-details.component.css */ "./src/app/bar-details/bar-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BarDetailsComponent);
    return BarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bars.service.ts":
/*!*********************************!*\
  !*** ./src/app/bars.service.ts ***!
  \*********************************/
/*! exports provided: BarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsService", function() { return BarsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsService = /** @class */ (function () {
    function BarsService(http) {
        this.http = http;
    }
    BarsService.prototype.getBars = function () {
        return this.http.get('/api/bar');
    };
    BarsService.prototype.getBar = function (bar) {
        return this.http.get('/api/bar/' + bar);
    };
    BarsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BarsService);
    return BarsService;
}());



/***/ }),

/***/ "./src/app/bars/bars.component.css":
/*!*****************************************!*\
  !*** ./src/app/bars/bars.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnMvYmFycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/bars/bars.component.html":
/*!******************************************!*\
  !*** ./src/app/bars/bars.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">List of Bars</h1>\n    <p class=\"lead\">This is the list of all the bars in the system</p>\n  </div>\n</div>\n\n<div class=\"container\">\n\n  <p-table [value]=\"bars\" [style]=\"{'overflow': 'hidden'}\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th>Name</th>\n            <th>Address</th>\n            <th>City</th>\n            <th>Phone</th>\n            <th>Hours</th>\n          </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bar>\n      <tr>\n        <td>\n          <a routerLink=\"/bars/{{bar.name}}\">{{ bar.name }}</a></td>\n        <td>{{ bar.address}}</td>\n        <td>{{ bar.city }}</td>\n        <td>{{ bar.phone }}</td>\n        <td> {{ bar.hours }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n</div>\n\n<br><br>\n"

/***/ }),

/***/ "./src/app/bars/bars.component.ts":
/*!****************************************!*\
  !*** ./src/app/bars/bars.component.ts ***!
  \****************************************/
/*! exports provided: BarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsComponent", function() { return BarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsComponent = /** @class */ (function () {
    function BarsComponent(barService) {
        this.barService = barService;
        this.getBars();
    }
    BarsComponent.prototype.ngOnInit = function () {
    };
    BarsComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert('Could not retrieve the list of bars');
        });
    };
    BarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./bars.component.html */ "./src/app/bars/bars.component.html"),
            styles: [__webpack_require__(/*! ./bars.component.css */ "./src/app/bars/bars.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], BarsComponent);
    return BarsComponent;
}());



/***/ }),

/***/ "./src/app/beer-details/beer-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXItZGV0YWlscy9iZWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\" style=\"white-space: pre-wrap;\">\n        <h1 class=\"display-4\">{{beerName}}</h1>\n        <p class=\"beer-details\" *ngIf=\"beerDetails\">\n            Made by {{beerDetails?.manufacturer}}\n        </p>\n    </div>\n</div>\n\n<div class=\"container\">\n    <br>\n    <div id='sellsGraph'></div>\n    <br><br><br>\n    <div id='consumersGraph'></div>\n    <br><br><br>\n    <div id='timeDistributionGraph'></div>\n    <br>\n  </div>"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.ts ***!
  \********************************************************/
/*! exports provided: BeerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerDetailsComponent", function() { return BeerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerDetailsComponent = /** @class */ (function () {
    function BeerDetailsComponent(beerService, route) {
        var _this = this;
        this.beerService = beerService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.beerName = paramMap.get('beer');
            beerService.getBeer(_this.beerName).subscribe(function (data) {
                _this.beerDetails = data[0];
                _this.sellsGraphHelper(data);
                _this.consumersGraphHelper(data);
                _this.timeDistributionGraphHelper(data);
            }, function (error) {
                if (error.status === 404) {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server. Check the browser console');
                }
            });
        });
    }
    BeerDetailsComponent.prototype.ngOnInit = function () {
    };
    BeerDetailsComponent.prototype.sellsGraphHelper = function (data) {
        var xVal = [];
        var yVal = [];
        data[1].forEach(function (dataRow) {
            xVal.push(dataRow.seller);
            yVal.push(dataRow.count);
        });
        this.renderSellsGraph(xVal, yVal);
    };
    BeerDetailsComponent.prototype.consumersGraphHelper = function (data) {
        var xVal = [];
        var yVal = [];
        data[2].forEach(function (dataRow) {
            xVal.push(dataRow.payer);
            yVal.push(dataRow.count);
        });
        this.renderConsumersGraph(xVal, yVal);
    };
    BeerDetailsComponent.prototype.timeDistributionGraphHelper = function (data) {
        var timeCounts = Array.apply(null, Array(24)).map(Number.prototype.valueOf, 0);
        data[3].forEach(function (dataRow) {
            timeCounts[+dataRow.issued.substr(1, 2)]++;
        });
        var timeCountOrdered = [];
        for (var i = 6; i < 30; i++) {
            var num = i;
            if (i >= 24) {
                num = i - 24;
            }
            timeCountOrdered[i - 6] = timeCounts[num];
        }
        this.rendertimeDistributionGraph(timeCountOrdered);
    };
    BeerDetailsComponent.prototype.rendertimeDistributionGraph = function (counts) {
        Highcharts.chart('timeDistributionGraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Time distribution of ' + this.beerName + ' sales'
            },
            lang: {
                noData: 'This beer hasn\'t been sold anywhere yet'
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            if (this.y > 0) {
                                return this.y;
                            }
                        }
                    },
                }
            },
            xAxis: {
                categories: ['06:00 - 06:59', '07:00 - 07:59', '08:00 - 08:59', '09:00 - 09:59',
                    '10:00 - 10:59', '11:00 - 11:59', '12:00 - 12:59', '13:00 - 13:59', '14:00 - 14:59',
                    '15:00 - 15:59', '16:00 - 16:59', '17:00 - 17:59', '18:00 - 18:59', '19:00 - 19:59',
                    '20:00 - 20:59', '21:00 - 21:59', '22:00 - 22:59', '23:00 - 23:59', '0:00 - 0:59', '1:00 - 1:59',
                    '2:00 - 2:59', '3:00 - 3:59', '4:00 - 4:59', '5:00 - 5:59'],
                title: {
                    text: 'Time Block'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of sales'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BeerDetailsComponent.prototype.renderConsumersGraph = function (elements, counts) {
        Highcharts.chart('consumersGraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Biggest consumers of ' + this.beerName
            },
            lang: {
                noData: 'This beer hasn\'t been bought by anyone'
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true,
                    },
                }
            },
            xAxis: {
                categories: elements,
                title: {
                    text: 'Drinker Name'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of times bought'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BeerDetailsComponent.prototype.renderSellsGraph = function (elements, counts) {
        Highcharts.chart('sellsGraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Bars where ' + this.beerName + ' is sold the most at'
            },
            lang: {
                noData: 'This beer hasn\'t been bought anywhere'
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true,
                    },
                }
            },
            xAxis: {
                categories: elements,
                title: {
                    text: 'Bar Name'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of times sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BeerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-details',
            template: __webpack_require__(/*! ./beer-details.component.html */ "./src/app/beer-details/beer-details.component.html"),
            styles: [__webpack_require__(/*! ./beer-details.component.css */ "./src/app/beer-details/beer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_2__["BeersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BeerDetailsComponent);
    return BeerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/beers.service.ts":
/*!**********************************!*\
  !*** ./src/app/beers.service.ts ***!
  \**********************************/
/*! exports provided: BeersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersService", function() { return BeersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersService = /** @class */ (function () {
    function BeersService(http) {
        this.http = http;
    }
    BeersService.prototype.getBeers = function () {
        return this.http.get('/api/beer');
    };
    BeersService.prototype.getBeer = function (beer) {
        return this.http.get('/api/beer/' + beer);
    };
    BeersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeersService);
    return BeersService;
}());



/***/ }),

/***/ "./src/app/beers/beers.component.css":
/*!*******************************************!*\
  !*** ./src/app/beers/beers.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXJzL2JlZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/beers/beers.component.html":
/*!********************************************!*\
  !*** ./src/app/beers/beers.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">List of Beers</h1>\n      <p class=\"lead\">This is the list of all the beers in the system</p>\n    </div>\n  </div>\n  \n  <div class=\"container\">\n  \n    <p-table [value]=\"beers\" [style]=\"{'overflow': 'hidden'}\">\n      <ng-template pTemplate=\"header\">\n          <tr>\n              <th>Name</th>\n              <th>Manufacturer</th>\n            </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-beer>\n        <tr>\n          <td>\n            <a routerLink=\"/beers/{{beer.name}}\">{{ beer.name }}</a></td>\n          <td>{{ beer.manufacturer}}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n  \n  <br><br>\n  "

/***/ }),

/***/ "./src/app/beers/beers.component.ts":
/*!******************************************!*\
  !*** ./src/app/beers/beers.component.ts ***!
  \******************************************/
/*! exports provided: BeersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersComponent", function() { return BeersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersComponent = /** @class */ (function () {
    function BeersComponent(beerService) {
        this.beerService = beerService;
        this.getBeers();
    }
    BeersComponent.prototype.ngOnInit = function () {
    };
    BeersComponent.prototype.getBeers = function () {
        var _this = this;
        this.beerService.getBeers().subscribe(function (data) {
            _this.beers = data;
        }, function (error) {
            alert('Could not retrieve the list of beers');
        });
    };
    BeersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beers',
            template: __webpack_require__(/*! ./beers.component.html */ "./src/app/beers/beers.component.html"),
            styles: [__webpack_require__(/*! ./beers.component.css */ "./src/app/beers/beers.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"]])
    ], BeersComponent);
    return BeersComponent;
}());



/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXItZGV0YWlscy9kcmlua2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n      <h1 class=\"display-4\">{{drinkerName}}</h1>\n      <p class=\"drinker-details\" *ngIf=\"drinkerDetails\">\n          {{drinkerDetails?.address}} <span *ngIf=\"drinkerDetails.address && drinkerDetails.city\">| </span>{{ drinkerDetails?.city }}\n          <br>\n          {{drinkerDetails?.phone}}\n          <br>\n          <a routerLink=\"/drinker/{{drinkerName}}/transactions\"><p>Transactions</p></a>\n      </p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <br>\n  <div id='ordersGraph'></div>\n  <br><br><br>\n  <div id='mondaySpendingsGraph'></div>\n  <br><br><br>\n  <div id='tuesdaySpendingsGraph'></div>\n  <br><br><br>\n  <div id='wednesdaySpendingsGraph'></div>\n  <br><br><br>\n  <div id='thursdaySpendingsGraph'></div>\n  <br><br><br>\n  <div id='fridaySpendingsGraph'></div>\n  <br><br><br>\n  <div id='saturdaySpendingsGraph'></div>\n  <br><br><br>\n  <div id='sundaySpendingsGraph'></div>\n  <br>\n</div>"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.ts ***!
  \**************************************************************/
/*! exports provided: DrinkerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerDetailsComponent", function() { return DrinkerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _transactions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transactions.service */ "./src/app/transactions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrinkerDetailsComponent = /** @class */ (function () {
    function DrinkerDetailsComponent(drinkerService, route) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.drinkerName = paramMap.get('drinker');
            var firstName = _this.drinkerName.substring(0, _this.drinkerName.indexOf(' '));
            var lastName = _this.drinkerName.substring(_this.drinkerName.indexOf(' ') + 1);
            drinkerService.getDrinker(firstName, lastName).subscribe(function (data) {
                _this.drinkerDetails = data[0];
                _this.ordersGraphHelper(data);
                _this.spentGraphHelper(data);
            });
        }, function (error) {
            if (error.status === 404) {
                console.error(error.status + ' - ' + error.body);
                alert('An error occurred on the server. Check the browser console');
            }
        });
    }
    DrinkerDetailsComponent.prototype.ordersGraphHelper = function (data) {
        var xVal = [];
        var yVal = [];
        data[1].forEach(function (dataRow) {
            xVal.push(dataRow.bought);
            yVal.push(dataRow.count);
        });
        this.renderOrdersGraph(xVal, yVal);
    };
    DrinkerDetailsComponent.prototype.renderOrdersGraph = function (elements, counts) {
        Highcharts.chart('ordersGraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Items Ordered by ' + this.drinkerName
            },
            lang: {
                noData: 'This drinker has\'t ordered anything'
            },
            xAxis: {
                categories: elements,
                title: {
                    text: 'Name of item ordered'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of times ordered'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    DrinkerDetailsComponent.prototype.spentGraphHelper = function (data) {
        data = data[2];
        var _loop_1 = function (i) {
            var dayData = data[i];
            var xVal = [];
            var yVal = [];
            dayData.forEach(function (element) {
                xVal.push(element.seller);
                yVal.push(element.sum);
            });
            this_1.renderSpentGraph(_transactions_service__WEBPACK_IMPORTED_MODULE_3__["TransactionsService"].daysOfWeek[i], xVal, yVal);
            xVal.length = 0;
            yVal.length = 0;
        };
        var this_1 = this;
        for (var i = 0; i < 7; i++) {
            _loop_1(i);
        }
    };
    DrinkerDetailsComponent.prototype.renderSpentGraph = function (dayOfWeek, elements, counts) {
        Highcharts.chart(dayOfWeek.toLowerCase() + 'SpendingsGraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Money Spent by ' + this.drinkerName + ' on ' + dayOfWeek + '\'s'
            },
            lang: {
                noData: 'This drinker has\'t ordered anything'
            },
            xAxis: {
                categories: elements,
                title: {
                    text: 'Bar Spent At'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Spent'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    DrinkerDetailsComponent.prototype.ngOnInit = function () {
    };
    DrinkerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-details',
            template: __webpack_require__(/*! ./drinker-details.component.html */ "./src/app/drinker-details/drinker-details.component.html"),
            styles: [__webpack_require__(/*! ./drinker-details.component.css */ "./src/app/drinker-details/drinker-details.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_1__["DrinkersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DrinkerDetailsComponent);
    return DrinkerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/drinkers.service.ts":
/*!*************************************!*\
  !*** ./src/app/drinkers.service.ts ***!
  \*************************************/
/*! exports provided: DrinkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkersService", function() { return DrinkersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkersService = /** @class */ (function () {
    function DrinkersService(http) {
        this.http = http;
    }
    DrinkersService.prototype.getDrinkers = function () {
        return this.http.get('/api/drinker');
    };
    DrinkersService.prototype.getDrinker = function (firstName, lastName) {
        return this.http.get('/api/drinker/' + firstName + ' ' + lastName);
    };
    DrinkersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DrinkersService);
    return DrinkersService;
}());



/***/ }),

/***/ "./src/app/drinkers/drinkers.component.css":
/*!*************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXJzL2RyaW5rZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/drinkers/drinkers.component.html":
/*!**************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">List of Drinkers</h1>\n    <p class=\"lead\">This is the list of all the drinkers in the system</p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <p-table [value]=\"drinkers\" [style]=\"{'overflow': 'hidden'}\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th>Name</th>\n            <th>Address</th>\n            <th>City</th>\n            <th>Phone</th>\n          </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-drinker>\n      <tr>\n        <td>\n          <a routerLink=\"/drinkers/{{drinker.firstName + ' ' + drinker.lastName}}\">{{ drinker.firstName + ' ' + drinker.lastName }}</a></td>\n        <td>{{ drinker.address}}</td>\n        <td>{{ drinker.city }}</td>\n        <td>{{ drinker.phone }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n</div>\n\n<br><br>\n"

/***/ }),

/***/ "./src/app/drinkers/drinkers.component.ts":
/*!************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.ts ***!
  \************************************************/
/*! exports provided: DrinkersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkersComponent", function() { return DrinkersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkersComponent = /** @class */ (function () {
    function DrinkersComponent(drinkerService) {
        this.drinkerService = drinkerService;
        this.getDrinkers();
    }
    DrinkersComponent.prototype.ngOnInit = function () {
    };
    DrinkersComponent.prototype.getDrinkers = function () {
        var _this = this;
        this.drinkerService.getDrinkers().subscribe(function (data) {
            _this.drinkers = data;
        }, function (error) {
            alert('Could not retrieve the list of drinkers');
        });
    };
    DrinkersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinkers',
            template: __webpack_require__(/*! ./drinkers.component.html */ "./src/app/drinkers/drinkers.component.html"),
            styles: [__webpack_require__(/*! ./drinkers.component.css */ "./src/app/drinkers/drinkers.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_1__["DrinkersService"]])
    ], DrinkersComponent);
    return DrinkersComponent;
}());



/***/ }),

/***/ "./src/app/modifications/modifications.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modifications/modifications.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kaWZpY2F0aW9ucy9tb2RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2RpZmljYXRpb25zL21vZGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modifications/modifications.component.html":
/*!************************************************************!*\
  !*** ./src/app/modifications/modifications.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Modify Database Tables</h1>\n    <p class=\"beer-details\">Type in the modification query to execute</p>\n  </div>\n</div>\n\n<div class=\"container-fluid mx-5\">\n  <div class=\"row\">\n    <div class=\"col-7 col-mr-4\">\n      <form [formGroup]=\"queryForm\" (ngSubmit)=\"onSubmit()\">\n        <label for=\"query\">\n          <h4>Modification Query to Execute:</h4>\n        </label>\n        <br>\n        <textarea formControlName=\"query\" rows=\"5\" class=\"form-control\" required></textarea>\n        <br>\n          <div *ngIf=\"queryForm.dirty && queryForm.controls['query'].errors && queryForm.controls['query'].errors.error\" class=\"alert alert-danger\">\n            Please enter a modification keyword: <strong>[INSERT | UPDATE | DELETE]</strong> <br>\n            Otherwise visit the <a routerLink='/query'>Execute Query Page</a>\n          </div>\n        <button type=\"submit\" [disabled]=\"!queryForm.valid\" class=\"btn btn-primary\">Submit</button>\n      </form>\n    </div>\n    <div class=\"ml-5 col-3\" *ngIf=\"response\">\n      <h4>Result:</h4>\n      <br>\n      <h5>{{response}}</h5>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modifications/modifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modifications/modifications.component.ts ***!
  \**********************************************************/
/*! exports provided: ModificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationsComponent", function() { return ModificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModificationsComponent = /** @class */ (function () {
    function ModificationsComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.queryForm = this.fb.group({
            query: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.operationValidator()]]
        });
    }
    ModificationsComponent.prototype.ngOnInit = function () {
    };
    ModificationsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.modifyDatabase(this.queryForm.value['query']).subscribe(function (response) {
            var rStr = response.toString();
            _this.response = rStr.substring(rStr.indexOf('"') + 1, rStr.lastIndexOf('"'));
        });
    };
    ModificationsComponent.prototype.modifyDatabase = function (query) {
        return this.http.post('/api/query', query);
    };
    ModificationsComponent.prototype.operationValidator = function () {
        return function (control) {
            var isModify = (new RegExp(/insert|update|delete/im)).test(control.value);
            return isModify ? null : { 'error': 'Couldn\'t find an INSERT/UPDATE/DELETE keyword' };
        };
    };
    ModificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modifications',
            template: __webpack_require__(/*! ./modifications.component.html */ "./src/app/modifications/modifications.component.html"),
            styles: [__webpack_require__(/*! ./modifications.component.css */ "./src/app/modifications/modifications.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ModificationsComponent);
    return ModificationsComponent;
}());



/***/ }),

/***/ "./src/app/query/query.component.css":
/*!*******************************************!*\
  !*** ./src/app/query/query.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXJ5L3F1ZXJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/query/query.component.html":
/*!********************************************!*\
  !*** ./src/app/query/query.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Query the Database</h1>\n    <p class=\"beer-details\">Type in the query to evaluate against the database</p>\n  </div>\n</div>\n\n<div class=\"container-fluid mx-3\">\n  <div class=\"row\">\n    <div class=\"col mx-5\">\n      <form [formGroup]=\"queryForm\" (ngSubmit)=\"onSubmit()\">\n        <label for=\"query\">\n          <h4>Query to Evaluate:</h4>\n        </label>\n        <br>\n        <textarea formControlName=\"query\" rows=\"5\" style=\"width: 60%\" class=\"form-control\" required></textarea>\n        <br>\n        <div *ngIf=\"queryForm.controls['query'].errors && queryForm.controls['query'].errors.error\" class=\"alert alert-danger\">\n          If you want to use the following operations: <strong>[INSERT | UPDATE | DELETE]</strong> <br>\n          You can do so over at <a routerLink='/modifications'>Modify Tables Page</a>\n        </div>\n        <button type=\"submit\" [disabled]=\"!queryForm.valid\" class=\"btn btn-primary\">Submit</button>\n      </form>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"response || table\">\n    <div class=\"col mx-5\">\n      <br>\n    <h4>Result:</h4>\n      <br>\n      <h5 *ngIf=\"response\">{{response}}</h5>\n      <p-table [value]=\"table\" [style]=\"{'overflow': 'hidden'}\" *ngIf=\"table\">\n        <ng-template pTemplate=\"header\" let-header[0]>\n          <tr>\n            <th *ngFor=\"let header of headers\">{{header}}</th>\n          </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-drinker>\n          <tr>\n            <td *ngFor=\"let header of headers\">{{drinker[header]}}</td>\n          </tr>\n        </ng-template>\n      </p-table>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/query/query.component.ts":
/*!******************************************!*\
  !*** ./src/app/query/query.component.ts ***!
  \******************************************/
/*! exports provided: QueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryComponent", function() { return QueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueryComponent = /** @class */ (function () {
    function QueryComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.queryForm = this.fb.group({
            query: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.operationValidator()]]
        });
        this.headers = [];
    }
    QueryComponent.prototype.ngOnInit = function () {
    };
    QueryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.response = undefined;
        this.table = undefined;
        this.modifyDatabase(this.queryForm.value['query']).subscribe(function (response) {
            if (response.toString().charAt(0) !== '[') {
                if (response.toString().length === 0) {
                    _this.response = '0 rows returned';
                }
                else {
                    var rStr = response.toString();
                    _this.response = rStr.substring(rStr.indexOf('"') + 1, rStr.lastIndexOf('"'));
                }
            }
            else {
                _this.headers = (Object.keys(response[0]));
                _this.table = response;
            }
        });
    };
    QueryComponent.prototype.modifyDatabase = function (query) {
        return this.http.post('/api/query', query);
    };
    QueryComponent.prototype.operationValidator = function () {
        var _this = this;
        return function (control) {
            if (_this.queryForm !== undefined) {
            }
            var isModify = (new RegExp(/insert|update|delete/im)).test(control.value);
            return isModify ? { 'error': 'Couldn\'t find an INSERT/UPDATE/DELETE keyword' } : null;
        };
    };
    QueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query',
            template: __webpack_require__(/*! ./query.component.html */ "./src/app/query/query.component.html"),
            styles: [__webpack_require__(/*! ./query.component.css */ "./src/app/query/query.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], QueryComponent);
    return QueryComponent;
}());



/***/ }),

/***/ "./src/app/transactions.service.ts":
/*!*****************************************!*\
  !*** ./src/app/transactions.service.ts ***!
  \*****************************************/
/*! exports provided: TransactionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsService", function() { return TransactionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionsService = /** @class */ (function () {
    function TransactionsService(http) {
        this.http = http;
    }
    TransactionsService.prototype.getTransactions = function (drinker) {
        var firstName = drinker.substring(0, drinker.indexOf(' '));
        var lastName = drinker.substring(drinker.indexOf(' ') + 1);
        return this.http.get('/api/drinker/' + firstName + ' ' + lastName + '/transactions');
    };
    TransactionsService.daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    TransactionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TransactionsService);
    return TransactionsService;
}());



/***/ }),

/***/ "./src/app/transactions/transactions.component.css":
/*!*********************************************************!*\
  !*** ./src/app/transactions/transactions.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/transactions/transactions.component.html":
/*!**********************************************************!*\
  !*** ./src/app/transactions/transactions.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Transactions made by {{drinkerName}}</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n\n  <p-table [value]=\"transactions\" [style]=\"{'overflow': 'hidden'}\">\n    <ng-template pTemplate=\"header\" *ngIf=transactions>\n        <tr>\n            <th>Transaction ID</th>\n            <th>Seller</th>\n            <th>Items Purchased</th>\n            <th>Quantity</th>\n            <th>Order Total</th>\n            <th>Issued On</th>\n          </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-transaction>\n      <tr>\n        <td>{{transaction.transactionId}}</td>\n        <td>{{transaction.seller}}</td>\n        <td>{{transaction.bought}}</td>\n        <td>{{transaction.quantity}}</td>\n        <td>{{transaction.total}}</td>\n        <td>{{transaction.issued}}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <div>\n    <br style=\"line-height: 15\">\n    <h3 class=\"text-center\">There are no transactions for this user</h3>\n  </div>\n</div>\n\n<br><br>\n"

/***/ }),

/***/ "./src/app/transactions/transactions.component.ts":
/*!********************************************************!*\
  !*** ./src/app/transactions/transactions.component.ts ***!
  \********************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _transactions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transactions.service */ "./src/app/transactions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(transactionsService, route) {
        var _this = this;
        this.transactionsService = transactionsService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.drinkerName = paramMap.get('drinker');
            transactionsService.getTransactions(_this.drinkerName).subscribe(function (data) {
                _this.transactions = data;
                _this.transactions.forEach(function (element) {
                    var issued = element.issued;
                    var dayOfWeek;
                    switch (issued.charAt(0)) {
                        case 'M': {
                            dayOfWeek = 'Monday';
                            break;
                        }
                        case 'T': {
                            dayOfWeek = 'Tuesday';
                            break;
                        }
                        case 'W': {
                            dayOfWeek = 'Wednesday';
                            break;
                        }
                        case 'R': {
                            dayOfWeek = 'Thursday';
                            break;
                        }
                        case 'F': {
                            dayOfWeek = 'Friday';
                            break;
                        }
                        case 'S': {
                            dayOfWeek = 'Saturday';
                            break;
                        }
                        case 'U': {
                            dayOfWeek = 'Sunday';
                            break;
                        }
                    }
                    element.issued = dayOfWeek + ' ' + issued.substr(1, 2) + ':' + issued.substr(3);
                });
            }, function (error) {
                if (error.status === 404) {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server. Check the browser console');
                }
            });
        });
    }
    TransactionsComponent.prototype.ngOnInit = function () {
    };
    TransactionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__(/*! ./transactions.component.html */ "./src/app/transactions/transactions.component.html"),
            styles: [__webpack_require__(/*! ./transactions.component.css */ "./src/app/transactions/transactions.component.css")]
        }),
        __metadata("design:paramtypes", [_transactions_service__WEBPACK_IMPORTED_MODULE_1__["TransactionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "./src/app/verify/verify.component.css":
/*!*********************************************!*\
  !*** ./src/app/verify/verify.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS92ZXJpZnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/verify/verify.component.html":
/*!**********************************************!*\
  !*** ./src/app/verify/verify.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Verify the Patterns</h1>\n    <p class=\"beer-details\">Click on the pattern you wish to verify</p>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"accordion\">\n    <div class=\"card\" *ngFor=\"let query of queries; let i = index;\">\n      <div class=\"card-header\">\n        <h5 class=\"mb-0\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" [attr.data-target]=\"'#collapse' + i\"\n                aria-expanded=\"true\" [attr.aria-controls]=\"'collapse' + i\">\n                Assertion {{i+1}}\n              </button>\n            </div>\n            <div class=\"col-1\">\n              <button class=\"btn btn-outline-success\" (click)=\"verifyClicked(i)\">Verify:</button>\n            </div>\n            <div class=\"col-1\">\n              <p *ngIf=\"response\" class=\"my-1\">{{response[i]}}</p>\n            </div>\n          </div>\n        </h5>\n      </div>\n      <div id=\"collapse{{i}}\" class=\"collapse\">\n        <div class=\"card-body\">\n          <div style=\"clear: both\">\n            <h5>Pattern: {{patterns[i]}}</h5>\n          </div>\n          <br>\n          <h5>Query Executed:</h5><br>\n          {{query}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/verify/verify.component.ts":
/*!********************************************!*\
  !*** ./src/app/verify/verify.component.ts ***!
  \********************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(http) {
        this.http = http;
        this.patterns = [
            'A Drinker cannot frequent a bar that is in another city than where they live',
            'Transactions can’t be issued at times when the bar is closed',
            'For every two beers, b1 and b2, b1 should either be less/more expensive than b2 in ALL bars'
        ];
        this.queries = [
            'SELECT NOT EXISTS (SELECT * FROM drinkers d, frequents f WHERE d.firstName=f.drinkerFirstName \
      AND d.lastName=f.drinkerLastName AND d.city <> (SELECT b.city FROM bars b WHERE b.name=f.bar)) AS chk',
            'SELECT NOT EXISTS (SELECT * FROM transactions t, bars b WHERE t.seller=b.name AND NOT( \
        IF(CONVERT(SUBSTRING(t.issued, 2), unsigned integer) < 1000, \
        CONVERT(SUBSTRING(t.issued, 2), unsigned integer)+2400, \
        CONVERT(SUBSTRING(t.issued, 2), unsigned integer)) > \
        CONVERT(SUBSTRING(b.hours, INSTR(b.hours, SUBSTRING(t.issued, 1, 1))+1, 4), unsigned integer) \
        AND \
        IF(CONVERT(SUBSTRING(t.issued, 2), unsigned integer) < 1000, \
        CONVERT(SUBSTRING(t.issued, 2), unsigned integer)+2400, CONVERT(SUBSTRING(t.issued, 2), unsigned integer)) < \
        IF(CONVERT(SUBSTRING(b.hours, INSTR(b.hours, SUBSTRING(t.issued, 1, 1))+5, 4), unsigned integer) < 1000, \
        CONVERT(SUBSTRING(b.hours, INSTR(b.hours, SUBSTRING(t.issued, 1, 1))+5, 4), unsigned integer)+2400, \
        CONVERT(SUBSTRING(b.hours, INSTR(b.hours, SUBSTRING(t.issued, 1, 1))+5, 4), unsigned integer)))) AS chk',
            'SELECT NOT EXISTS (SELECT * FROM sells s, sells s1, sells s2, sells s3 WHERE s.bar=s1.bar AND s2.bar=s3.bar AND \
          s.bar<>s2.bar AND s.item=s2.item AND s1.item=s3.item AND s.price > s1.price AND s2.price < s3.price) AS chk'
        ];
        this.response = [];
    }
    VerifyComponent.prototype.ngOnInit = function () {
    };
    VerifyComponent.prototype.verifyClicked = function (num) {
        var _this = this;
        this.verifyPattern(this.queries[num]).subscribe(function (response) {
            if (response[0]['chk'] === '0') {
                _this.response[num] = 'False';
            }
            else {
                _this.response[num] = 'True';
            }
        });
    };
    VerifyComponent.prototype.verifyPattern = function (query) {
        return this.http.post('/api/query', query);
    };
    VerifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__(/*! ./verify.component.html */ "./src/app/verify/verify.component.html"),
            styles: [__webpack_require__(/*! ./verify.component.css */ "./src/app/verify/verify.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VerifyComponent);
    return VerifyComponent;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Desktop (HDD)\Education Files\Fall 2018\Databases\Bar_Beer_Drinker\bar-beer-drinker-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map