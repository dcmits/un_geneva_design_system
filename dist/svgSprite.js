/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpack/svgSprite.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images sync recursive \\.svg$":
/*!****************************!*\
  !*** ./images sync \.svg$ ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arrow_practical-info-white.svg": "./images/arrow_practical-info-white.svg",
	"./arrow_practical-info.svg": "./images/arrow_practical-info.svg",
	"./chevron-right.svg": "./images/chevron-right.svg",
	"./icons/facebook.svg": "./images/icons/facebook.svg",
	"./icons/instagram.svg": "./images/icons/instagram.svg",
	"./icons/menu.svg": "./images/icons/menu.svg",
	"./icons/twitter.svg": "./images/icons/twitter.svg",
	"./lang_bar_globe.svg": "./images/lang_bar_globe.svg",
	"./menu-close.svg": "./images/menu-close.svg",
	"./practical-info_icon.svg": "./images/practical-info_icon.svg",
	"./take_action_icon.svg": "./images/take_action_icon.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./images sync recursive \\.svg$";

/***/ }),

/***/ "./images/arrow_practical-info-white.svg":
/*!***********************************************!*\
  !*** ./images/arrow_practical-info-white.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "34429b9b92ec751559e2be4e357a116a.svg");

/***/ }),

/***/ "./images/arrow_practical-info.svg":
/*!*****************************************!*\
  !*** ./images/arrow_practical-info.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ec301bb6fe7dd411c96a0f4829aad708.svg");

/***/ }),

/***/ "./images/chevron-right.svg":
/*!**********************************!*\
  !*** ./images/chevron-right.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "14a5201d5be0823fb5a0b094659adb68.svg");

/***/ }),

/***/ "./images/icons/facebook.svg":
/*!***********************************!*\
  !*** ./images/icons/facebook.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "facebook-usage",
      viewBox: "0 0 264 512",
      url: __webpack_require__.p + "../dist/icons.svg#facebook",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/instagram.svg":
/*!************************************!*\
  !*** ./images/icons/instagram.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "instagram-usage",
      viewBox: "0 0 448 512",
      url: __webpack_require__.p + "../dist/icons.svg#instagram",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/menu.svg":
/*!*******************************!*\
  !*** ./images/icons/menu.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "menu-usage",
      viewBox: "0 0 32 32",
      url: __webpack_require__.p + "../dist/icons.svg#menu",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/icons/twitter.svg":
/*!**********************************!*\
  !*** ./images/icons/twitter.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "twitter-usage",
      viewBox: "0 0 26 28",
      url: __webpack_require__.p + "../dist/icons.svg#twitter",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/lang_bar_globe.svg":
/*!***********************************!*\
  !*** ./images/lang_bar_globe.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3f5192b1d443a0091221ebe90af22000.svg");

/***/ }),

/***/ "./images/menu-close.svg":
/*!*******************************!*\
  !*** ./images/menu-close.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9d00ec4aad0bbe5542b28655de11357f.svg");

/***/ }),

/***/ "./images/practical-info_icon.svg":
/*!****************************************!*\
  !*** ./images/practical-info_icon.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c5cb0c1d4af88e7fa05d9352b192c1dc.svg");

/***/ }),

/***/ "./images/take_action_icon.svg":
/*!*************************************!*\
  !*** ./images/take_action_icon.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1404b50f5eb8869f8370423ea6322cd9.svg");

/***/ }),

/***/ "./webpack/svgSprite.js":
/*!******************************!*\
  !*** ./webpack/svgSprite.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function requireAll(a){a.keys().forEach(a)}requireAll(__webpack_require__("./images sync recursive \\.svg$"));

/***/ })

/******/ });
//# sourceMappingURL=svgSprite.js.map