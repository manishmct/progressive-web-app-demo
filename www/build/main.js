webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanBarcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as $ from 'jquery';

var ScanBarcodePage = (function () {
    function ScanBarcodePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.readData = { "itemId": "" };
        this.cameraSource = [];
    }
    ScanBarcodePage.prototype.itemTapped = function (event, item) {
        console.log(this.readData);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail__["a" /* ProductDetailPage */], {
            item: this.readData
        });
        console.log(JSON.stringify(navigator.onLine));
    };
    ScanBarcodePage.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        console.log("Destroyed");
    };
    ScanBarcodePage.prototype.initializeQrReader = function () {
        var that = this;
        var options = {
            ReadQRCode: true,
            ReadBarecode: true,
            width: 320,
            height: 240,
            videoSource: {
                id: this.deviceID,
                // max Videosource resolution width
                maxWidth: 640,
                // max Videosource resolution height
                maxHeight: 480
            },
            flipVertical: false,
            flipHorizontal: false,
            // if zoom = -1, auto zoom for optimal resolution else int
            zoom: -1,
            // string, audio file location
            beep: "assets/js/beep.mp3",
            // functional when value autoBrightnessValue is int
            autoBrightnessValue: false,
            brightness: 0,
            grayScale: false,
            contrast: 0,
            threshold: 0,
            // or matrix, example for sharpness ->  [0, -1, 0, -1, 5, -1, 0, -1, 0]
            sharpness: [],
            resultFunction: function (resText, lastImageSrc) {
                // resText as decoded code, lastImageSrc as image source
                // alert(resText);
                console.log(resText);
                that.readData.itemId = resText;
            }
        };
        $('#qr-canvas').WebCodeCam(options);
    };
    ScanBarcodePage.prototype.ngOnInit = function () {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        var that = this;
        var tempDeviceID = "";
        navigator.mediaDevices.enumerateDevices().then(function (deviceInfos) {
            console.log(JSON.stringify(deviceInfos));
            for (var i = 0; i < deviceInfos.length; ++i) {
                if (deviceInfos[i].kind === 'videoinput' && deviceInfos[i].label.indexOf('back') >= 0) {
                    that.deviceID = deviceInfos[i].deviceId;
                }
                else if (deviceInfos[i].kind === 'videoinput') {
                    tempDeviceID = deviceInfos[i].deviceId;
                }
            }
            if (!that.deviceID)
                that.deviceID = tempDeviceID;
            that.initializeQrReader();
        });
    };
    return ScanBarcodePage;
}());
ScanBarcodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-scan-barcode',template:/*ion-inline-start:"/home/ubuntu/workspace/pwa-demo/src/pages/scan-barcode/scan-barcode.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Scan Barcode\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <div id="scanBarcode-container3" style="width:100%;">\n    <canvas id="qr-canvas" width="320" height="240"></canvas>\n    <div class="scanner-laser laser-rightBottom" style="opacity: 0.5;"></div>\n    <div class="scanner-laser laser-rightTop" style="opacity: 0.5;"></div>\n    <div class="scanner-laser laser-leftBottom" style="opacity: 0.5;"></div>\n    <div class="scanner-laser laser-leftTop" style="opacity: 0.5;"></div>\n  </div>\n  <div class="spacer" style="height:20px;" id="scanBarcode-spacer1"></div>\n  <div id="scanBarcode-container4">\n    <h1 id="scanBarcode-heading4" style="color:#000000;" *ngIf="!readData.itemId">\n      Scanning QR Code....\n    </h1>\n    <h1 id="scanBarcode-heading4" style="color:#000000;" *ngIf="readData.itemId">\n      Scanned : {{readData.itemId}}\n    </h1>\n  </div>\n  <div class="spacer" style="width:300px;height:20px;" id="scanBarcode-spacer2"></div>\n  <div id="scanBarcode-container5">\n    <button id="scanBarcode-button1" ion-button color="positive" block (click)="itemTapped($event,\'\')">\n      Tap me!\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/pwa-demo/src/pages/scan-barcode/scan-barcode.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], ScanBarcodePage);

//# sourceMappingURL=scan-barcode.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_data_mock__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailPage = (function () {
    function ProductDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(navParams);
        this.productData = navParams.get("item");
        console.log(this.productData);
        this.displayItem = __WEBPACK_IMPORTED_MODULE_2__item_data_mock__["a" /* ProductDetails */][this.productData.itemId];
        if (!this.displayItem)
            this.displayItem = "";
        this.online = navigator.onLine;
        console.log(this.online);
    }
    return ProductDetailPage;
}());
ProductDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product-detail',template:/*ion-inline-start:"/home/ubuntu/workspace/pwa-demo/src/pages/product-detail/product-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Product Details\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2" *ngIf="!displayItem && online">\n  <div>\n    <img src="assets/img/not_found.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n  <h3>\n    Product Not Found!!\n  </h3>\n</ion-content>\n<ion-content padding id="page2" *ngIf="!displayItem && !online">\n  <div>\n    <img src="assets/img/Pagenotfound.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n  <h3>\n    No Connection. Please turn on network to search for product.\n  </h3>\n</ion-content>\n<ion-content padding id="page2" *ngIf="displayItem">\n  <h2 id="productDetail-heading1" style="color:#000000;text-align:center;">\n    {{displayItem.itemName}}\n  </h2>\n  <div>\n    <img [src]="displayItem.itemImageUrl" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n  <h3 id="productDetail-heading2" style="color:#000000;">\n    {{displayItem.itemPrice | currency : \'EUR\' : \'symbol\'}} online price\n  </h3>\n  <h2 id="productDetail-heading3" style="color:#000000;">\n    Description\n  </h2>\n  <p>\n    {{displayItem.itemDescription}}\n  </p>\n  <h2 id="productDetail-heading3" style="color:#000000;">\n    Specifications\n  </h2>\n  <div id="productDetail-markdown3" class="show-list-numbers-and-dots">\n    <p style="color:#000000;" *ngIf = "displayItem.itemSpec.alcohol">Alcohol Percentage : {{displayItem.itemSpec.alcohol}}%</p>\n    <p style="color:#000000;" *ngIf = "displayItem.itemSpec.grapeType">Grape Type : {{displayItem.itemSpec.grapeType}}</p>\n    <p style="color:#000000;" *ngIf = "displayItem.itemSpec.color">Wine Color : {{displayItem.itemSpec.color}}</p>\n    <p style="color:#000000;" *ngIf = "displayItem.itemSpec.size">Size : {{displayItem.itemSpec.size}}</p>\n    <p style="color:#000000;" *ngIf = "displayItem.itemSpec.quantity">Quantity : {{displayItem.itemSpec.quantity}}</p>\n    <p style="color:#000000;" *ngIf = "displayItem.itemSpec.ingredients">Ingredients : {{displayItem.itemSpec.ingredients}}</p>\n    <p style="color:#000000;" *ngIf = "displayItem.itemSpec.storage">Storage Instructions : {{displayItem.itemSpec.storage}}</p>\n    <p style="color:#000000;" *ngIf = "displayItem.itemSpec.manufacturer">Manufacturer : {{displayItem.itemSpec.manufacturer}}</p>\n    <!--<p style="color:#000000;" *ngIf = "displayItem.itemSpec."></p>-->\n    <!--<p style="color:#000000;" *ngIf = "displayItem.itemSpec."></p>-->\n  </div>\n  <div id="productDetail-container1"></div>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/pwa-demo/src/pages/product-detail/product-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], ProductDetailPage);

//# sourceMappingURL=product-detail.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(213);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_scan_barcode_scan_barcode__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_product_detail_product_detail__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_scan_barcode_scan_barcode__["a" /* ScanBarcodePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_product_detail_product_detail__["a" /* ProductDetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_scan_barcode_scan_barcode__["a" /* ScanBarcodePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_product_detail_product_detail__["a" /* ProductDetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_scan_barcode_scan_barcode__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_scan_barcode_scan_barcode__["a" /* ScanBarcodePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/ubuntu/workspace/pwa-demo/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage" swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/ubuntu/workspace/pwa-demo/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetails; });
var ProductDetails = {
    "1185769": {
        itemName: "Hovis Soft Medium Sliced White Bread",
        itemImageUrl: "assets/img/41227_Hovis-soft-white.jpg",
        itemPrice: "1.05",
        itemDescription: "Medium Sliced White Bread, Suitable for vegetarians & vegans \n At Hovis®, our expert bakers have been baking bread for 130 years, so they've learnt a thing or two about making a great loaf. Our Hovis® Soft White loaves are specially made for softness so they are just perfect for that bacon sandwich or hot buttered toast.",
        itemSpec: {
            manufacturer: "Hovis Ltd",
            size: "800g",
            quantity: "1",
            ingredients: "Wheat Flour (with added Calcium, Iron, Niacin, Thiamin), Water, Yeast, Soya Flour, Salt, Preservative: E282, Emulsifiers: E471, E472e, Flour Treatment Agent: Ascorbic Acid",
            storage: "Keep cool and dry"
        }
    },
    "1187825": {
        itemName: "Warburtons Thick Sliced Seeded Bread",
        itemImageUrl: "assets/img/warburtons_bread.jpg",
        itemPrice: "1.25",
        itemDescription: "Thick Sliced Bread with Sesame Seed, Sunflower Seed, Brown Linseed, Millet Seed and Poppy Seed (Seed Mix 12%) 5 Seeds contains a delicious blend of sesame, sunflower, millet, linseed and poppy seed Vegetarian Society approved",
        itemSpec: {
            manufacturer: "Warburtons Limited",
            size: "800g",
            quantity: "1",
            ingredients: "Wheat Flour, Sugar, Salt, Soya Flour, Wheat Gluten, Yeast",
            storage: "Store in a cool dry place, ideally not refrigerated. Under warm conditions storage life will be reduced. If freezing, freeze on day of purchase."
        }
    },
    "3572657": {
        itemName: "Casillero Del Diablo Cabernet Sauvignon ",
        itemImageUrl: "assets/img/casillero_wine.jpg",
        itemPrice: "6.50",
        itemDescription: "A smooth, full-bodied Cabernet Sauvignon with cassis and black cherry flavours, complemented by hints of coffee and dark chocolate   ",
        itemSpec: {
            manufacturer: "Viña Concha y Toro S.A.",
            size: "75cl",
            quantity: "1",
            ingredients: "",
            storage: "This wine is ideal for drinking now but can be kept for up to 3 years",
            grapeType: "Cabernet Sauvignon",
            color: "Red"
        }
    },
    "3185785": {
        itemName: "Corona Extra Lager",
        itemImageUrl: "assets/img/corona_extra_lager.jpg",
        itemPrice: "13.50",
        itemDescription: "Corona has been brewed and bottled in Mexico since 1925. It is lighter than traditional beers, with a crisp and refreshing taste. The aroma is fruity-honey with a touch of malt and the flavour is crisp and well-balanced between hops and malt, toward the malt side. ",
        itemSpec: {
            manufacturer: "",
            size: "330ml",
            quantity: "12",
            ingredients: "Water, Malt from Barley, Maize and/or Rice, Hops, Antioxidant (E 300), Stabilizer (E 405)",
            storage: "",
            alcohol: "4.5"
        }
    }
};
//# sourceMappingURL=item-data-mock.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map