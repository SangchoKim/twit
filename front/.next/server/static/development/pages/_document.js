module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ \"core-js/library/fn/array/is-array\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ \"core-js/library/fn/date/now\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/date/now.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ \"core-js/library/fn/json/stringify\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ \"core-js/library/fn/object/assign\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/assign.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ \"core-js/library/fn/object/define-property\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ \"core-js/library/fn/object/get-own-property-descriptor\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ \"core-js/library/fn/object/get-own-property-symbols\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ \"core-js/library/fn/object/keys\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/keys.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ \"core-js/library/fn/object/values\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/values.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/promise */ \"core-js/library/fn/promise\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/promise.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/set */ \"core-js/library/fn/set\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/set.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Promise = __webpack_require__(/*! ../core-js/promise */ \"./node_modules/@babel/runtime-corejs2/core-js/promise.js\");\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    _Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new _Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\nmodule.exports = _asyncToGenerator;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _defineProperty; });\n/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ \"./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js\");\n/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectSpread; });\n/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ \"./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js\");\n/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ \"./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js\");\n/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ \"./node_modules/@babel/runtime-corejs2/core-js/object/keys.js\");\n/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js\");\n\n\n\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);\n\n    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {\n      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {\n        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectWithoutProperties; });\n/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ \"./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js\");\n/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js\");\n\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(source, excluded);\n  var key, i;\n\n  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {\n    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectWithoutPropertiesLoose; });\n/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ \"./node_modules/@babel/runtime-corejs2/core-js/object/keys.js\");\n/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n\n  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);\n\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ \"./node_modules/@babel/runtime-corejs2/core-js/object/assign.js\");\n\nfunction _extends() {\n  module.exports = _extends = _Object$assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nmodule.exports = _extends;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ \"./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js\");\n\nvar _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js\");\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};\n\n    if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) {\n          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};\n\n          if (desc.get || desc.set) {\n            _Object$defineProperty(newObj, key, desc);\n          } else {\n            newObj[key] = obj[key];\n          }\n        }\n      }\n    }\n\n    newObj[\"default\"] = obj;\n    return newObj;\n  }\n}\n\nmodule.exports = _interopRequireWildcard;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js?");

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.middleware = middleware;\nexports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;\n\nvar _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ \"./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js\"));\n\nvar _isArray = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ \"./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js\"));\n\nvar _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ \"./node_modules/@babel/runtime-corejs2/core-js/object/keys.js\"));\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ \"./node_modules/@babel/runtime-corejs2/helpers/extends.js\"));\n\nvar _now = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ \"./node_modules/@babel/runtime-corejs2/core-js/date/now.js\"));\n\nvar _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ \"./node_modules/@babel/runtime-corejs2/core-js/set.js\"));\n\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! next-server/dist/server/utils */ \"next-server/dist/server/utils\");\n\nvar _utils2 = __webpack_require__(/*! next-server/dist/lib/utils */ \"next-server/dist/lib/utils\");\n\nexports.DocumentContext = _utils2.DocumentContext;\nexports.DocumentInitialProps = _utils2.DocumentInitialProps;\nexports.DocumentProps = _utils2.DocumentProps;\n\nvar _htmlescape = __webpack_require__(/*! ../server/htmlescape */ \"./node_modules/next/dist/server/htmlescape.js\");\n\nvar _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ \"styled-jsx/server\"));\n\nvar _constants = __webpack_require__(/*! next-server/constants */ \"next-server/constants\");\n/* eslint-disable */\n\n\nfunction middleware(_x) {\n  return _middleware.apply(this, arguments);\n}\n\nfunction _middleware() {\n  _middleware = (0, _asyncToGenerator2.default)(function* (_ref) {\n    let {\n      req,\n      res\n    } = _ref;\n  });\n  return _middleware.apply(this, arguments);\n}\n\nfunction dedupe(bundles) {\n  const files = new _set.default();\n  const kept = [];\n\n  for (const bundle of bundles) {\n    if (files.has(bundle.file)) continue;\n    files.add(bundle.file);\n    kept.push(bundle);\n  }\n\n  return kept;\n}\n\nfunction getOptionalModernScriptVariant(path) {\n  if (false) {}\n\n  return path;\n}\n/**\n* `Document` component handles the initial `document` markup and renders only on the server side.\n* Commonly used for implementing server side rendering for `css-in-js` libraries.\n*/\n\n\nclass Document extends _react.Component {\n  constructor() {\n    super(...arguments);\n    this.context = void 0;\n  }\n\n  static getInitialProps(_ref2) {\n    return (0, _asyncToGenerator2.default)(function* () {\n      let {\n        renderPage\n      } = _ref2;\n      const {\n        html,\n        head,\n        dataOnly\n      } = yield renderPage();\n      const styles = (0, _server.default)();\n      return {\n        html,\n        head,\n        styles,\n        dataOnly\n      };\n    })();\n  }\n\n  getChildContext() {\n    return {\n      _documentProps: this.props,\n      // In dev we invalidate the cache by appending a timestamp to the resource URL.\n      // This is a workaround to fix https://github.com/zeit/next.js/issues/5860\n      // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.\n      _devOnlyInvalidateCacheQueryString:  true ? '?ts=' + (0, _now.default)() : undefined\n    };\n  }\n\n  render() {\n    return _react.default.createElement(Html, null, _react.default.createElement(Head, null), _react.default.createElement(\"body\", null, _react.default.createElement(Main, null), _react.default.createElement(NextScript, null)));\n  }\n\n}\n\nexports.default = Document;\nDocument.childContextTypes = {\n  _documentProps: _propTypes.default.any,\n  _devOnlyInvalidateCacheQueryString: _propTypes.default.string\n  /**\n  * `getInitialProps` hook returns the context object with the addition of `renderPage`.\n  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers\n  */\n\n};\n\nclass Html extends _react.Component {\n  constructor() {\n    super(...arguments);\n    this.context = void 0;\n  }\n\n  render() {\n    const {\n      inAmpMode\n    } = this.context._documentProps;\n    return _react.default.createElement(\"html\", (0, _extends2.default)({}, this.props, {\n      amp: inAmpMode ? '' : undefined\n    }));\n  }\n\n}\n\nexports.Html = Html;\nHtml.contextTypes = {\n  _documentProps: _propTypes.default.any\n};\nHtml.propTypes = {\n  children: _propTypes.default.node.isRequired\n};\n\nclass Head extends _react.Component {\n  constructor() {\n    super(...arguments);\n    this.context = void 0;\n  }\n\n  getCssLinks() {\n    const {\n      assetPrefix,\n      files\n    } = this.context._documentProps;\n\n    if (!files || files.length === 0) {\n      return null;\n    }\n\n    return files.map(file => {\n      // Only render .css files here\n      if (!/\\.css$/.exec(file)) {\n        return null;\n      }\n\n      return _react.default.createElement(\"link\", {\n        key: file,\n        nonce: this.props.nonce,\n        rel: \"stylesheet\",\n        href: assetPrefix + \"/_next/\" + file,\n        crossOrigin: this.props.crossOrigin || undefined\n      });\n    });\n  }\n\n  getPreloadDynamicChunks() {\n    const {\n      dynamicImports,\n      assetPrefix\n    } = this.context._documentProps;\n    const {\n      _devOnlyInvalidateCacheQueryString\n    } = this.context;\n    return dedupe(dynamicImports).map(bundle => {\n      // `dynamicImports` will contain both `.js` and `.module.js` when the\n      // feature is enabled. This clause will filter down to the modern\n      // variants only.\n      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {\n        return null;\n      }\n\n      return _react.default.createElement(\"link\", {\n        rel: \"preload\",\n        key: bundle.file,\n        href: assetPrefix + \"/_next/\" + bundle.file + _devOnlyInvalidateCacheQueryString,\n        as: \"script\",\n        nonce: this.props.nonce,\n        crossOrigin: this.props.crossOrigin || undefined\n      });\n    }) // Filter out nulled scripts\n    .filter(Boolean);\n  }\n\n  getPreloadMainLinks() {\n    const {\n      assetPrefix,\n      files\n    } = this.context._documentProps;\n\n    if (!files || files.length === 0) {\n      return null;\n    }\n\n    const {\n      _devOnlyInvalidateCacheQueryString\n    } = this.context;\n    return files.map(file => {\n      // `dynamicImports` will contain both `.js` and `.module.js` when the\n      // feature is enabled. This clause will filter down to the modern\n      // variants only.\n      // This also filters out non-JS assets.\n      if (!file.endsWith(getOptionalModernScriptVariant('.js'))) {\n        return null;\n      }\n\n      return _react.default.createElement(\"link\", {\n        key: file,\n        nonce: this.props.nonce,\n        rel: \"preload\",\n        href: assetPrefix + \"/_next/\" + file + _devOnlyInvalidateCacheQueryString,\n        as: \"script\",\n        crossOrigin: this.props.crossOrigin || undefined\n      });\n    }).filter(Boolean);\n  }\n\n  render() {\n    const {\n      styles,\n      ampPath,\n      inAmpMode,\n      assetPrefix,\n      hybridAmp,\n      canonicalBase,\n      __NEXT_DATA__,\n      dangerousAsPath\n    } = this.context._documentProps;\n    const {\n      _devOnlyInvalidateCacheQueryString\n    } = this.context;\n    const {\n      page,\n      buildId,\n      dynamicBuildId\n    } = __NEXT_DATA__;\n    let {\n      head\n    } = this.context._documentProps;\n    let children = this.props.children; // show a warning if Head contains <title> (only in development)\n\n    if (true) {\n      children = _react.default.Children.map(children, child => {\n        const isReactHelmet = child && child.props && child.props['data-react-helmet'];\n\n        if (child && child.type === 'title' && !isReactHelmet) {\n          console.warn(\"Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title\");\n        }\n\n        return child;\n      });\n      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');\n    }\n\n    let hasAmphtmlRel = false;\n    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags\n\n    head = !inAmpMode ? head : _react.default.Children.map(head || [], child => {\n      if (!child) return child;\n      const {\n        type,\n        props\n      } = child;\n      let badProp = '';\n\n      if (type === 'meta' && props.name === 'viewport') {\n        badProp = 'name=\"viewport\"';\n      } else if (type === 'link' && props.rel === 'canonical') {\n        hasCanonicalRel = true;\n      } else if (type === 'link' && props.rel === 'amphtml') {\n        hasAmphtmlRel = true;\n      } else if (type === 'script') {\n        // only block if\n        // 1. it has a src and isn't pointing to ampproject's CDN\n        // 2. it is using dangerouslySetInnerHTML without a type or\n        // a type of text/javascript\n        if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {\n          badProp = '<script';\n          (0, _keys.default)(props).forEach(prop => {\n            badProp += \" \" + prop + \"=\\\"\" + props[prop] + \"\\\"\";\n          });\n          badProp += '/>';\n        }\n      }\n\n      if (badProp) {\n        console.warn(\"Found conflicting amp tag \\\"\" + child.type + \"\\\" with conflicting prop \" + badProp + \" in \" + __NEXT_DATA__.page + \". https://err.sh/next.js/conflicting-amp-tag\");\n        return null;\n      }\n\n      return child;\n    }); // try to parse styles from fragment for backwards compat\n\n    const curStyles = (0, _isArray.default)(styles) ? styles : [];\n\n    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement\n    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement\n    (0, _isArray.default)(styles.props.children)) {\n      const hasStyles = el => el && el.props && el.props.dangerouslySetInnerHTML && el.props.dangerouslySetInnerHTML.__html; // @ts-ignore Property 'props' does not exist on type ReactElement\n\n\n      styles.props.children.map(child => {\n        if ((0, _isArray.default)(child)) {\n          child.map(el => hasStyles(el) && curStyles.push(el));\n        } else if (hasStyles(child)) {\n          curStyles.push(child);\n        }\n      });\n    }\n\n    return _react.default.createElement(\"head\", this.props, children, head, _react.default.createElement(\"meta\", {\n      name: \"next-head-count\",\n      content: _react.default.Children.count(head || []).toString()\n    }), inAmpMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width,minimum-scale=1,initial-scale=1\"\n    }), !hasCanonicalRel && _react.default.createElement(\"link\", {\n      rel: \"canonical\",\n      href: canonicalBase + (0, _utils.cleanAmpPath)(dangerousAsPath)\n    }), _react.default.createElement(\"link\", {\n      rel: \"preload\",\n      as: \"script\",\n      href: \"https://cdn.ampproject.org/v0.js\"\n    }), styles && _react.default.createElement(\"style\", {\n      \"amp-custom\": \"\",\n      dangerouslySetInnerHTML: {\n        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\\/\\*# sourceMappingURL=.*\\*\\//g, '').replace(/\\/\\*@ sourceURL=.*?\\*\\//g, '')\n      }\n    }), _react.default.createElement(\"style\", {\n      \"amp-boilerplate\": \"\",\n      dangerouslySetInnerHTML: {\n        __html: \"body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}\"\n      }\n    }), _react.default.createElement(\"noscript\", null, _react.default.createElement(\"style\", {\n      \"amp-boilerplate\": \"\",\n      dangerouslySetInnerHTML: {\n        __html: \"body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}\"\n      }\n    })), _react.default.createElement(\"script\", {\n      async: true,\n      src: \"https://cdn.ampproject.org/v0.js\"\n    })), !inAmpMode && _react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && _react.default.createElement(\"link\", {\n      rel: \"amphtml\",\n      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)\n    }), page !== '/_error' && _react.default.createElement(\"link\", {\n      rel: \"preload\",\n      href: assetPrefix + getOptionalModernScriptVariant(dynamicBuildId ? \"/_next/static/client/pages\" + getPageFile(page, buildId) : \"/_next/static/\" + buildId + \"/pages\" + getPageFile(page)) + _devOnlyInvalidateCacheQueryString,\n      as: \"script\",\n      nonce: this.props.nonce,\n      crossOrigin: this.props.crossOrigin || undefined\n    }), _react.default.createElement(\"link\", {\n      rel: \"preload\",\n      href: assetPrefix + getOptionalModernScriptVariant(dynamicBuildId ? \"/_next/static/client/pages/_app.\" + buildId + \".js\" : \"/_next/static/\" + buildId + \"/pages/_app.js\") + _devOnlyInvalidateCacheQueryString,\n      as: \"script\",\n      nonce: this.props.nonce,\n      crossOrigin: this.props.crossOrigin || undefined\n    }), this.getPreloadDynamicChunks(), this.getPreloadMainLinks(), this.getCssLinks(), styles || null));\n  }\n\n}\n\nexports.Head = Head;\nHead.contextTypes = {\n  _documentProps: _propTypes.default.any,\n  _devOnlyInvalidateCacheQueryString: _propTypes.default.string\n};\nHead.propTypes = {\n  nonce: _propTypes.default.string,\n  crossOrigin: _propTypes.default.string\n};\n\nclass Main extends _react.Component {\n  constructor() {\n    super(...arguments);\n    this.context = void 0;\n  }\n\n  render() {\n    const {\n      inAmpMode,\n      html\n    } = this.context._documentProps;\n    if (inAmpMode) return '__NEXT_AMP_RENDER_TARGET__';\n    return _react.default.createElement(\"div\", {\n      id: \"__next\",\n      dangerouslySetInnerHTML: {\n        __html: html\n      }\n    });\n  }\n\n}\n\nexports.Main = Main;\nMain.contextTypes = {\n  _documentProps: _propTypes.default.any,\n  _devOnlyInvalidateCacheQueryString: _propTypes.default.string\n};\n\nclass NextScript extends _react.Component {\n  constructor() {\n    super(...arguments);\n    this.context = void 0;\n  }\n\n  getDynamicChunks() {\n    const {\n      dynamicImports,\n      assetPrefix\n    } = this.context._documentProps;\n    const {\n      _devOnlyInvalidateCacheQueryString\n    } = this.context;\n    return dedupe(dynamicImports).map(bundle => {\n      let modernProps = {};\n\n      if (false) {}\n\n      return _react.default.createElement(\"script\", (0, _extends2.default)({\n        async: true,\n        key: bundle.file,\n        src: assetPrefix + \"/_next/\" + bundle.file + _devOnlyInvalidateCacheQueryString,\n        nonce: this.props.nonce,\n        crossOrigin: this.props.crossOrigin || undefined\n      }, modernProps));\n    });\n  }\n\n  getScripts() {\n    const {\n      assetPrefix,\n      files\n    } = this.context._documentProps;\n\n    if (!files || files.length === 0) {\n      return null;\n    }\n\n    const {\n      _devOnlyInvalidateCacheQueryString\n    } = this.context;\n    return files.map(file => {\n      // Only render .js files here\n      if (!/\\.js$/.exec(file)) {\n        return null;\n      }\n\n      let modernProps = {};\n\n      if (false) {}\n\n      return _react.default.createElement(\"script\", (0, _extends2.default)({\n        key: file,\n        src: assetPrefix + \"/_next/\" + file + _devOnlyInvalidateCacheQueryString,\n        nonce: this.props.nonce,\n        async: true,\n        crossOrigin: this.props.crossOrigin || undefined\n      }, modernProps));\n    });\n  }\n\n  static getInlineScriptSource(documentProps) {\n    const {\n      __NEXT_DATA__\n    } = documentProps;\n\n    try {\n      const data = (0, _stringify.default)(__NEXT_DATA__);\n      return (0, _htmlescape.htmlEscapeJsonString)(data);\n    } catch (err) {\n      if (err.message.indexOf('circular structure')) {\n        throw new Error(\"Circular structure in \\\"getInitialProps\\\" result of page \\\"\" + __NEXT_DATA__.page + \"\\\". https://err.sh/zeit/next.js/circular-structure\");\n      }\n\n      throw err;\n    }\n  }\n\n  render() {\n    const {\n      staticMarkup,\n      assetPrefix,\n      inAmpMode,\n      devFiles,\n      __NEXT_DATA__\n    } = this.context._documentProps;\n    const {\n      _devOnlyInvalidateCacheQueryString\n    } = this.context;\n\n    if (inAmpMode) {\n      if (false) {}\n\n      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];\n      return _react.default.createElement(_react.default.Fragment, null, staticMarkup ? null : _react.default.createElement(\"script\", {\n        id: \"__NEXT_DATA__\",\n        type: \"application/json\",\n        nonce: this.props.nonce,\n        crossOrigin: this.props.crossOrigin || undefined,\n        dangerouslySetInnerHTML: {\n          __html: NextScript.getInlineScriptSource(this.context._documentProps)\n        },\n        \"data-amp-development-mode-only\": true\n      }), devFiles ? devFiles.map(file => _react.default.createElement(\"script\", {\n        key: file,\n        src: assetPrefix + \"/_next/\" + file + _devOnlyInvalidateCacheQueryString,\n        nonce: this.props.nonce,\n        crossOrigin: this.props.crossOrigin || undefined,\n        \"data-amp-development-mode-only\": true\n      })) : null);\n    }\n\n    const {\n      page,\n      buildId,\n      dynamicBuildId\n    } = __NEXT_DATA__;\n\n    if (true) {\n      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');\n    }\n\n    const pageScript = [_react.default.createElement(\"script\", (0, _extends2.default)({\n      async: true,\n      \"data-next-page\": page,\n      key: page,\n      src: assetPrefix + (dynamicBuildId ? \"/_next/static/client/pages\" + getPageFile(page, buildId) : \"/_next/static/\" + buildId + \"/pages\" + getPageFile(page)) + _devOnlyInvalidateCacheQueryString,\n      nonce: this.props.nonce,\n      crossOrigin: this.props.crossOrigin || undefined\n    },  false ? undefined : {})),  false && false];\n    const appScript = [_react.default.createElement(\"script\", (0, _extends2.default)({\n      async: true,\n      \"data-next-page\": \"/_app\",\n      src: assetPrefix + (dynamicBuildId ? \"/_next/static/client/pages/_app.\" + buildId + \".js\" : \"/_next/static/\" + buildId + \"/pages/_app.js\") + _devOnlyInvalidateCacheQueryString,\n      key: \"_app\",\n      nonce: this.props.nonce,\n      crossOrigin: this.props.crossOrigin || undefined\n    },  false ? undefined : {})),  false && false];\n    return _react.default.createElement(_react.default.Fragment, null, devFiles ? devFiles.map(file => !file.match(/\\.js\\.map/) && _react.default.createElement(\"script\", {\n      key: file,\n      src: assetPrefix + \"/_next/\" + file + _devOnlyInvalidateCacheQueryString,\n      nonce: this.props.nonce,\n      crossOrigin: this.props.crossOrigin || undefined\n    })) : null, staticMarkup ? null : _react.default.createElement(\"script\", {\n      id: \"__NEXT_DATA__\",\n      type: \"application/json\",\n      nonce: this.props.nonce,\n      crossOrigin: this.props.crossOrigin || undefined,\n      dangerouslySetInnerHTML: {\n        __html: NextScript.getInlineScriptSource(this.context._documentProps)\n      }\n    }),  false ? undefined : null, page !== '/_error' && pageScript, appScript, staticMarkup ? null : this.getDynamicChunks(), staticMarkup ? null : this.getScripts());\n  }\n\n}\n\nexports.NextScript = NextScript;\nNextScript.contextTypes = {\n  _documentProps: _propTypes.default.any,\n  _devOnlyInvalidateCacheQueryString: _propTypes.default.string\n};\nNextScript.propTypes = {\n  nonce: _propTypes.default.string,\n  crossOrigin: _propTypes.default.string\n};\nNextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement(\"script\");if(!(\"noModule\"in t)&&\"onbeforeload\"in t){var n=!1;e.addEventListener(\"beforeload\",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute(\"nomodule\")||!n)return;e.preventDefault()},!0),t.type=\"module\",t.src=\".\",e.head.appendChild(t),t.remove()}}();';\n\nfunction getAmpPath(ampPath, asPath) {\n  return ampPath ? ampPath : \"\" + asPath + (asPath.includes('?') ? '&' : '?') + \"amp=1\";\n}\n\nfunction getPageFile(page, buildId) {\n  if (page === '/') {\n    return buildId ? \"/index.\" + buildId + \".js\" : '/index.js';\n  }\n\n  return buildId ? page + \".\" + buildId + \".js\" : page + \".js\";\n}\n\n//# sourceURL=webpack:///./node_modules/next/dist/pages/_document.js?");

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape\n// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE\nconst ESCAPE_LOOKUP={'&':'\\\\u0026','>':'\\\\u003e','<':'\\\\u003c','\\u2028':'\\\\u2028','\\u2029':'\\\\u2029'};const ESCAPE_REGEX=/[&><\\u2028\\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}\n\n//# sourceURL=webpack:///./node_modules/next/dist/server/htmlescape.js?");

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_document */ \"./node_modules/next/dist/pages/_document.js\")\n\n\n//# sourceURL=webpack:///./node_modules/next/document.js?");

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ \"./node_modules/@babel/runtime-corejs2/core-js/object/values.js\");\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\nclass MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_6___default.a {\n  static getInitialProps(context) {\n    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_7__[\"ServerStyleSheet\"]();\n    const page = context.renderPage(App => props => sheet.collectStyles(__jsx(App, props)));\n    const styleTags = sheet.getStyleElement();\n    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, page, {\n      helmet: react_helmet__WEBPACK_IMPORTED_MODULE_4___default.a.renderStatic(),\n      styleTags\n    });\n  }\n\n  render() {\n    const _this$props$helmet = this.props.helmet,\n          {\n      htmlAttributes,\n      bodyAttributes\n    } = _this$props$helmet,\n          helmet = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this$props$helmet, [\"htmlAttributes\", \"bodyAttributes\"]);\n\n    const htmlAttrs = htmlAttributes.toComponent();\n    const bodyAttrs = bodyAttributes.toComponent();\n    return __jsx(\"html\", htmlAttrs, __jsx(\"head\", null, this.props.styleTags, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(helmet).map(el => el.toComponent())), __jsx(\"body\", bodyAttrs, __jsx(next_document__WEBPACK_IMPORTED_MODULE_6__[\"Main\"], null),  false && false, __jsx(next_document__WEBPACK_IMPORTED_MODULE_6__[\"NextScript\"], null)));\n  }\n\n}\n\nMyDocument.propTypes = {\n  helmet: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,\n  styleTags: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyDocument);\n\n//# sourceURL=webpack:///./pages/_document.js?");

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! private-next-pages/_document.js */\"./pages/_document.js\");\n\n\n//# sourceURL=webpack:///multi_private-next-pages/_document.js?");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/array/is-array\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/array/is-array%22?");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/date/now\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/date/now%22?");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/json/stringify\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/json/stringify%22?");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/assign\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/assign%22?");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/define-property\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/define-property%22?");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/get-own-property-descriptor\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/get-own-property-descriptor%22?");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/get-own-property-symbols\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/get-own-property-symbols%22?");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/keys\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/keys%22?");

/***/ }),

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/values\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/values%22?");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/promise\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/promise%22?");

/***/ }),

/***/ "core-js/library/fn/set":
/*!*****************************************!*\
  !*** external "core-js/library/fn/set" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/set\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/set%22?");

/***/ }),

/***/ "next-server/constants":
/*!****************************************!*\
  !*** external "next-server/constants" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-server/constants\");\n\n//# sourceURL=webpack:///external_%22next-server/constants%22?");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-server/dist/lib/utils\");\n\n//# sourceURL=webpack:///external_%22next-server/dist/lib/utils%22?");

/***/ }),

/***/ "next-server/dist/server/utils":
/*!************************************************!*\
  !*** external "next-server/dist/server/utils" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-server/dist/server/utils\");\n\n//# sourceURL=webpack:///external_%22next-server/dist/server/utils%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/server\");\n\n//# sourceURL=webpack:///external_%22styled-jsx/server%22?");

/***/ })

/******/ });