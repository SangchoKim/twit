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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _containers_LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/LoginForm */ \"./containers/LoginForm.js\");\n/* harmony import */ var _containers_UserProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/UserProfile */ \"./containers/UserProfile.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst AppLayout = ({\n  children\n}) => {\n  const {\n    me\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(state => state.user);\n\n  const onSearch = value => {\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({\n      pathname: '/hashtag',\n      query: {\n        tag: value\n      }\n    }, `/hashtag/${value}`);\n  };\n\n  return __jsx(\"div\", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"], {\n    mode: \"horizontal\"\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"].Item, {\n    key: \"home\"\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\"\n  }, __jsx(\"a\", null, \"\\uB178\\uB4DC\\uBC84\\uB4DC\"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"].Item, {\n    key: \"profile\"\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/profile\",\n    prefetch: true\n  }, __jsx(\"a\", null, \"\\uD504\\uB85C\\uD544\"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"].Item, {\n    key: \"mail\"\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Input\"].Search, {\n    enterButton: true,\n    style: {\n      verticalAlign: 'middle'\n    },\n    onSearch: onSearch\n  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    gutter: 8\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 24,\n    md: 6\n  }, me ? __jsx(_containers_UserProfile__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null) : __jsx(_containers_LoginForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 24,\n    md: 12\n  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 24,\n    md: 6\n  })));\n};\n\nAppLayout.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\n\n//# sourceURL=webpack:///./components/AppLayout.js?");

/***/ }),

/***/ "./containers/LoginForm.js":
/*!*********************************!*\
  !*** ./containers/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _pages_signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/signup */ \"./pages/signup.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n // TODO: util 폴더로 옮기기\n\n\nconst LoginError = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`\n  color: red;\n`;\n\nconst LoginForm = () => {\n  const [id, onChangeId] = Object(_pages_signup__WEBPACK_IMPORTED_MODULE_5__[\"useInput\"])('');\n  const [password, onChangePassword] = Object(_pages_signup__WEBPACK_IMPORTED_MODULE_5__[\"useInput\"])('');\n  const {\n    isLoggingIn,\n    logInErrorReason\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(state => state.user);\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    e.preventDefault();\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__[\"LOG_IN_REQUEST\"],\n      data: {\n        userId: id,\n        password\n      }\n    });\n  }, [id, password]);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    onSubmit: onSubmitForm,\n    style: {\n      padding: '10px'\n    }\n  }, __jsx(\"div\", null, __jsx(\"label\", {\n    htmlFor: \"user-id\"\n  }, \"\\uC544\\uC774\\uB514\"), __jsx(\"br\", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    name: \"user-id\",\n    value: id,\n    onChange: onChangeId,\n    required: true\n  })), __jsx(\"div\", null, __jsx(\"label\", {\n    htmlFor: \"user-password\"\n  }, \"\\uBE44\\uBC00\\uBC88\\uD638\"), __jsx(\"br\", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    name: \"user-password\",\n    value: password,\n    onChange: onChangePassword,\n    type: \"password\",\n    required: true\n  })), __jsx(LoginError, null, logInErrorReason), __jsx(\"div\", {\n    style: {\n      marginTop: '10px'\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\",\n    loading: isLoggingIn\n  }, \"\\uB85C\\uADF8\\uC778\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/signup\"\n  }, __jsx(\"a\", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], null, \"\\uD68C\\uC6D0\\uAC00\\uC785\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\n//# sourceURL=webpack:///./containers/LoginForm.js?");

/***/ }),

/***/ "./containers/UserProfile.js":
/*!***********************************!*\
  !*** ./containers/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nconst UserProfile = () => {\n  const {\n    me\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(state => state.user);\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  const onLogout = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(() => {\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"LOG_OUT_REQUEST\"]\n    });\n  }, []);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Card\"], {\n    actions: [__jsx(\"div\", {\n      key: \"twit\"\n    }, \"\\uC9F9\\uC9F9\", __jsx(\"br\", null), me.Posts.length), __jsx(\"div\", {\n      key: \"following\"\n    }, \"\\uD314\\uB85C\\uC789\", __jsx(\"br\", null), me.Followings.length), __jsx(\"div\", {\n      key: \"follower\"\n    }, \"\\uD314\\uB85C\\uC6CC\", __jsx(\"br\", null), me.Followers.length)]\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Card\"].Meta, {\n    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Avatar\"], null, me.nickname[0]),\n    title: me.nickname\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Button\"], {\n    onClick: onLogout\n  }, \"\\uB85C\\uADF8\\uC544\\uC6C3\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\n\n//# sourceURL=webpack:///./containers/UserProfile.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/map */ \"core-js/library/fn/map\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/map.js?");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/promise */ \"core-js/library/fn/promise\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/promise.js?");

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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n\n\n//# sourceURL=webpack:///./node_modules/next/app.js?");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ \"./node_modules/@babel/runtime-corejs2/core-js/map.js\"));\n\nvar _url = __webpack_require__(/*! url */ \"url\");\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! ./router */ \"./node_modules/next/dist/client/router.js\"));\n\nvar _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ \"next-server/dist/lib/router/rewrite-url-for-export\");\n\nvar _utils = __webpack_require__(/*! next-server/dist/lib/utils */ \"next-server/dist/lib/utils\");\n/* global __NEXT_DATA__ */\n\n\nfunction isLocal(href) {\n  const url = (0, _url.parse)(href, false, true);\n  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);\n  return !url.host || url.protocol === origin.protocol && url.host === origin.host;\n}\n\nfunction memoizedFormatUrl(formatFunc) {\n  let lastHref = null;\n  let lastAs = null;\n  let lastResult = null;\n  return (href, as) => {\n    if (lastResult && href === lastHref && as === lastAs) {\n      return lastResult;\n    }\n\n    const result = formatFunc(href, as);\n    lastHref = href;\n    lastAs = as;\n    lastResult = result;\n    return result;\n  };\n}\n\nfunction formatUrl(url) {\n  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;\n}\n\nlet observer;\nconst listeners = new _map.default();\nconst IntersectionObserver = false ? undefined : null;\n\nfunction getObserver() {\n  // Return shared instance of IntersectionObserver if already created\n  if (observer) {\n    return observer;\n  } // Only create shared IntersectionObserver if supported in browser\n\n\n  if (!IntersectionObserver) {\n    return undefined;\n  }\n\n  return observer = new IntersectionObserver(entries => {\n    entries.forEach(entry => {\n      if (!listeners.has(entry.target)) {\n        return;\n      }\n\n      const cb = listeners.get(entry.target);\n\n      if (entry.isIntersecting || entry.intersectionRatio > 0) {\n        observer.unobserve(entry.target);\n        listeners.delete(entry.target);\n        cb();\n      }\n    });\n  }, {\n    rootMargin: '200px'\n  });\n}\n\nconst listenToIntersections = (el, cb) => {\n  const observer = getObserver();\n\n  if (!observer) {\n    return () => {};\n  }\n\n  observer.observe(el);\n  listeners.set(el, cb);\n  return () => {\n    observer.unobserve(el);\n    listeners.delete(el);\n  };\n};\n\nclass Link extends _react.Component {\n  constructor(props) {\n    super(props);\n    this.p = void 0;\n\n    this.cleanUpListeners = () => {};\n\n    this.formatUrls = memoizedFormatUrl((href, asHref) => {\n      return {\n        href: formatUrl(href),\n        as: asHref ? formatUrl(asHref) : asHref\n      };\n    });\n\n    this.linkClicked = e => {\n      // @ts-ignore target exists on currentTarget\n      const {\n        nodeName,\n        target\n      } = e.currentTarget;\n\n      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {\n        // ignore click for new tab / new window behavior\n        return;\n      }\n\n      let {\n        href,\n        as\n      } = this.formatUrls(this.props.href, this.props.as);\n\n      if (!isLocal(href)) {\n        // ignore click if it's outside our scope (e.g. https://google.com)\n        return;\n      }\n\n      const {\n        pathname\n      } = window.location;\n      href = (0, _url.resolve)(pathname, href);\n      as = as ? (0, _url.resolve)(pathname, as) : href;\n      e.preventDefault(); //  avoid scroll for urls with anchor refs\n\n      let {\n        scroll\n      } = this.props;\n\n      if (scroll == null) {\n        scroll = as.indexOf('#') < 0;\n      } // replace state instead of push if prop is present\n\n\n      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {\n        shallow: this.props.shallow\n      }).then(success => {\n        if (!success) return;\n\n        if (scroll) {\n          window.scrollTo(0, 0);\n          document.body.focus();\n        }\n      });\n    };\n\n    if (true) {\n      if (props.prefetch) {\n        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');\n      }\n    }\n\n    this.p = props.prefetch !== false;\n  }\n\n  componentWillUnmount() {\n    this.cleanUpListeners();\n  }\n\n  handleRef(ref) {\n    if (this.p && IntersectionObserver && ref && ref.tagName) {\n      this.cleanUpListeners();\n      this.cleanUpListeners = listenToIntersections(ref, () => {\n        this.prefetch();\n      });\n    }\n  } // The function is memoized so that no extra lifecycles are needed\n  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html\n\n\n  prefetch() {\n    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)\n\n    const {\n      pathname\n    } = window.location;\n    const {\n      href: parsedHref\n    } = this.formatUrls(this.props.href, this.props.as);\n    const href = (0, _url.resolve)(pathname, parsedHref);\n\n    _router.default.prefetch(href);\n  }\n\n  render() {\n    let {\n      children\n    } = this.props;\n    const {\n      href,\n      as\n    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag\n\n    if (typeof children === 'string') {\n      children = _react.default.createElement(\"a\", null, children);\n    } // This will return the first child, if multiple are provided it will throw an error\n\n\n    const child = _react.Children.only(children);\n\n    const props = {\n      ref: el => {\n        this.handleRef(el);\n\n        if (child && typeof child === 'object' && child.ref) {\n          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {\n            child.ref.current = el;\n          }\n        }\n      },\n      onMouseEnter: e => {\n        if (child.props && typeof child.props.onMouseEnter === 'function') {\n          child.props.onMouseEnter(e);\n        }\n\n        this.prefetch();\n      },\n      onClick: e => {\n        if (child.props && typeof child.props.onClick === 'function') {\n          child.props.onClick(e);\n        }\n\n        if (!e.defaultPrevented) {\n          this.linkClicked(e);\n        }\n      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is\n      // defined, we specify the current 'href', so that repetition is not needed by the user\n\n    };\n\n    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {\n      props.href = as || href;\n    } // Add the ending slash to the paths. So, we can serve the\n    // \"<page>/index.html\" directly.\n\n\n    if (false) {}\n\n    return _react.default.cloneElement(child, props);\n  }\n\n}\n\nLink.propTypes = void 0;\n\nif (true) {\n  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin\n\n  const exact = __webpack_require__(/*! prop-types-exact */ \"prop-types-exact\");\n\n  Link.propTypes = exact({\n    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,\n    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),\n    prefetch: _propTypes.default.bool,\n    replace: _propTypes.default.bool,\n    shallow: _propTypes.default.bool,\n    passHref: _propTypes.default.bool,\n    scroll: _propTypes.default.bool,\n    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {\n      const value = props[propName];\n\n      if (typeof value === 'string') {\n        warn(\"Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>\");\n      }\n\n      return null;\n    }]).isRequired\n  });\n}\n\nvar _default = Link;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/next/dist/client/link.js?");

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.useRouter = useRouter;\nexports.makePublicRouterInstance = makePublicRouterInstance;\nexports.createRouter = exports.withRouter = exports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ \"./node_modules/@babel/runtime-corejs2/helpers/extends.js\"));\n\nvar _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ \"./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ \"next-server/dist/lib/router/router\"));\n\nexports.Router = _router2.default;\nexports.NextRouter = _router2.NextRouter;\n\nvar _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ \"next-server/dist/lib/router-context\");\n\nvar _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ \"./node_modules/next/dist/client/with-router.js\"));\n\nexports.withRouter = _withRouter.default;\n/* global window */\n\nconst singletonRouter = {\n  router: null,\n  // holds the actual router instance\n  readyCallbacks: [],\n\n  ready(cb) {\n    if (this.router) return cb();\n\n    if (false) {}\n  }\n\n}; // Create public properties and methods of the router in the singletonRouter\n\nconst urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];\nconst routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];\nconst coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it\n\n(0, _defineProperty.default)(singletonRouter, 'events', {\n  get() {\n    return _router2.default.events;\n  }\n\n});\nurlPropertyFields.forEach(field => {\n  // Here we need to use Object.defineProperty because, we need to return\n  // the property assigned to the actual router\n  // The value might get changed as we change routes and this is the\n  // proper way to access it\n  (0, _defineProperty.default)(singletonRouter, field, {\n    get() {\n      const router = getRouter();\n      return router[field];\n    }\n\n  });\n});\ncoreMethodFields.forEach(field => {\n  // We don't really know the types here, so we add them later instead\n  ;\n\n  singletonRouter[field] = function () {\n    const router = getRouter();\n    return router[field](...arguments);\n  };\n});\nrouterEvents.forEach(event => {\n  singletonRouter.ready(() => {\n    _router2.default.events.on(event, function () {\n      const eventField = \"on\" + event.charAt(0).toUpperCase() + event.substring(1);\n      const _singletonRouter = singletonRouter;\n\n      if (_singletonRouter[eventField]) {\n        try {\n          _singletonRouter[eventField](...arguments);\n        } catch (err) {\n          // tslint:disable-next-line:no-console\n          console.error(\"Error when running the Router event: \" + eventField); // tslint:disable-next-line:no-console\n\n          console.error(err.message + \"\\n\" + err.stack);\n        }\n      }\n    });\n  });\n});\n\nfunction getRouter() {\n  if (!singletonRouter.router) {\n    const message = 'No router instance found.\\n' + 'You should only use \"next/router\" inside the client side of your app.\\n';\n    throw new Error(message);\n  }\n\n  return singletonRouter.router;\n} // Export the singletonRouter and this is the public API.\n\n\nvar _default = singletonRouter; // Reexport the withRoute HOC\n\nexports.default = _default;\n\nfunction useRouter() {\n  return _react.default.useContext(_routerContext.RouterContext);\n} // INTERNAL APIS\n// -------------\n// (do not use following exports inside the app)\n// Create a router and assign it as the singleton instance.\n// This is used in client side when we are initilizing the app.\n// This should **not** use inside the server.\n\n\nconst createRouter = function createRouter() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  singletonRouter.router = new _router2.default(...args);\n  singletonRouter.readyCallbacks.forEach(cb => cb());\n  singletonRouter.readyCallbacks = [];\n  return singletonRouter.router;\n}; // This function is used to create the `withRouter` router instance\n\n\nexports.createRouter = createRouter;\n\nfunction makePublicRouterInstance(router) {\n  const _router = router;\n  const instance = {};\n\n  for (const property of urlPropertyFields) {\n    if (typeof _router[property] === 'object') {\n      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful\n\n      continue;\n    }\n\n    instance[property] = _router[property];\n  } // Events is a static property on the router, the router doesn't have to be initialized to use it\n\n\n  instance.events = _router2.default.events;\n  coreMethodFields.forEach(field => {\n    instance[field] = function () {\n      return _router[field](...arguments);\n    };\n  });\n  return instance;\n}\n\n//# sourceURL=webpack:///./node_modules/next/dist/client/router.js?");

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = withRouter;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ \"./node_modules/@babel/runtime-corejs2/helpers/extends.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nfunction withRouter(ComposedComponent) {\n  class WithRouteWrapper extends _react.default.Component {\n    constructor() {\n      super(...arguments);\n      this.context = void 0;\n    }\n\n    render() {\n      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({\n        router: this.context.router\n      }, this.props));\n    }\n\n  }\n\n  WithRouteWrapper.displayName = void 0;\n  WithRouteWrapper.getInitialProps = void 0;\n  WithRouteWrapper.contextTypes = {\n    router: _propTypes.default.object\n  };\n  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;\n\n  if (true) {\n    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';\n    WithRouteWrapper.displayName = \"withRouter(\" + name + \")\";\n  }\n\n  return WithRouteWrapper;\n}\n\n//# sourceURL=webpack:///./node_modules/next/dist/client/with-router.js?");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ \"./node_modules/@babel/runtime-corejs2/helpers/extends.js\"));\n\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _utils = __webpack_require__(/*! next-server/dist/lib/utils */ \"next-server/dist/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\n\nvar _router = __webpack_require__(/*! ../client/router */ \"./node_modules/next/dist/client/router.js\");\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\n\nfunction appGetInitialProps(_x) {\n  return _appGetInitialProps.apply(this, arguments);\n}\n\nfunction _appGetInitialProps() {\n  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {\n    let {\n      Component,\n      ctx\n    } = _ref;\n    const pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);\n    return {\n      pageProps\n    };\n  });\n  return _appGetInitialProps.apply(this, arguments);\n}\n\nclass App extends _react.default.Component {\n  getChildContext() {\n    return {\n      router: (0, _router.makePublicRouterInstance)(this.props.router)\n    };\n  } // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n\n\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps\n    } = this.props;\n    const url = createUrl(router);\n    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {\n      url: url\n    }));\n  }\n\n} // @deprecated noop for now until removal\n\n\nexports.default = App;\nApp.childContextTypes = {\n  router: _propTypes.default.object\n};\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\n\nfunction Container(p) {\n  return p.children;\n}\n\nconst warnUrl = (0, _utils.execOnce)(() => {\n  if (true) {\n    console.error(\"Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated\");\n  }\n});\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/next/dist/pages/_app.js?");

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/client/link */ \"./node_modules/next/dist/client/link.js\")\n\n\n//# sourceURL=webpack:///./node_modules/next/link.js?");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ \"next-redux-saga\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n // next와 리덕스 연결\n\n // next와 리덕스 사가 연결\n\n\n\n\n\n\n\n\n\n\n\n\nconst NodeBird = ({\n  Component,\n  store,\n  pageProps\n}) => {\n  // 3번으로 실행\n  return __jsx(next_app__WEBPACK_IMPORTED_MODULE_8__[\"Container\"], null, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n    store: store\n  }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    title: \"NodeBird\",\n    htmlAttributes: {\n      lang: 'ko'\n    },\n    meta: [{\n      charset: 'UTF-8'\n    }, {\n      name: 'viewport',\n      content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover'\n    }, {\n      'http-equiv': 'X-UA-Compatible',\n      content: 'IE=edge'\n    }, {\n      name: 'description',\n      content: 'Santos의 NodeBird SNS'\n    }, {\n      name: 'og:title',\n      content: 'NodeBird'\n    }, {\n      name: 'og:description',\n      content: '제로초의 NodeBird SNS'\n    }, {\n      property: 'og:type',\n      content: 'website'\n    }],\n    link: [{\n      rel: 'shortcut icon',\n      href: '/favicon.ico'\n    }, {\n      rel: 'stylesheet',\n      href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css'\n    }, {\n      rel: 'stylesheet',\n      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'\n    }, {\n      rel: 'stylesheet',\n      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'\n    }]\n  }), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null, __jsx(Component, pageProps))));\n};\n\nNodeBird.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired,\n  store: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,\n  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n}; // getInitialProps 서버사이드 렌더링의 핵심 -. 서버&&프론트 둘다 실행\n// 서버쪽에서 실행은 언제? 처음으로 페이지를 불러올때 \n// 프론트쪽에서는 언제 실행? 넥스트 라우터로 페이지를 넘나들때\n\nNodeBird.getInitialProps = async context => {\n  // next 에서 내려주는 context // 1번으로 실행\n  console.log(context);\n  const {\n    ctx,\n    Component\n  } = context; // context 안에는 Component 와 ctx 가 들어있음\n\n  let pageProps = {};\n  const state = ctx.store.getState(); // ctx 안에 리덕스의 store가 들어 있음 -> store.getState 로 사용 가능 \n\n  const cookie = ctx.isServer ? ctx.req.headers.cookie : ''; // ctx 안에 리덕스의 req도  들어 있어 cookie 빼올 수 있음 \n\n  axios__WEBPACK_IMPORTED_MODULE_10___default.a.defaults.headers.Cookie = '';\n\n  if (ctx.isServer && cookie) {\n    axios__WEBPACK_IMPORTED_MODULE_10___default.a.defaults.headers.Cookie = cookie;\n  }\n\n  if (!state.user.me) {\n    ctx.store.dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_14__[\"LOAD_USER_REQUEST\"] // SSR AppLayout 유저 정보 가져오기\n\n    });\n  }\n\n  if (Component.getInitialProps) {\n    // Component안에 getInitialProps 있는 경우\n    pageProps = (await Component.getInitialProps(ctx)) || {}; // 각 componenet 안에서 리턴 받은 값을 pageProps에 넣음\n  }\n\n  return {\n    pageProps\n  }; // nodeBird props로 넘김 \n};\n\nconst configureStore = (initialState, options) => {\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_9___default()();\n  const middlewares = [sagaMiddleware];\n  const enhancer =  false ? undefined : Object(redux__WEBPACK_IMPORTED_MODULE_5__[\"compose\"])(Object(redux__WEBPACK_IMPORTED_MODULE_5__[\"applyMiddleware\"])(...middlewares), !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_5__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_12__[\"default\"], initialState, enhancer);\n  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_13__[\"default\"]); // 추가 필요 SSR 할때 \n\n  return store;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(configureStore)(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(NodeBird)));\n\n//# sourceURL=webpack:///./pages/_app.js?");

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: useInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useInput\", function() { return useInput; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst SignupError = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div`\n  color: red;\n`;\n\nconst TextInput = ({\n  value\n}) => __jsx(\"div\", null, value);\n\nTextInput.propTypes = {\n  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n};\nconst useInput = (initValue = null) => {\n  const {\n    0: value,\n    1: setter\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initValue);\n  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    setter(e.target.value);\n  }, []);\n  return [value, handler];\n};\n\nconst Signup = () => {\n  const {\n    0: passwordCheck,\n    1: setPasswordCheck\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: term,\n    1: setTerm\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: passwordError,\n    1: setPasswordError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: termError,\n    1: setTermError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [id, onChangeId] = useInput('');\n  const [nick, onChangeNick] = useInput('');\n  const [password, onChangePassword] = useInput('');\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  const {\n    isSigningUp,\n    me\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(state => state.user);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (me) {\n      alert('로그인했으니 메인페이지로 이동합니다.');\n      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');\n    }\n  }, [me && me.id]);\n  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    e.preventDefault();\n\n    if (password !== passwordCheck) {\n      return setPasswordError(true);\n    }\n\n    if (!term) {\n      return setTermError(true);\n    }\n\n    return dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__[\"SIGN_UP_REQUEST\"],\n      data: {\n        userId: id,\n        password,\n        nickname: nick\n      }\n    });\n  }, [id, nick, password, passwordCheck, term]);\n  const onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    setPasswordError(e.target.value !== password);\n    setPasswordCheck(e.target.value);\n  }, [password]);\n  const onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    setTermError(false);\n    setTerm(e.target.checked);\n  }, []);\n\n  if (me) {\n    return null;\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    onSubmit: onSubmit,\n    style: {\n      padding: 10\n    }\n  }, __jsx(\"div\", null, __jsx(\"label\", {\n    htmlFor: \"user-id\"\n  }, \"\\uC544\\uC774\\uB514\"), __jsx(\"br\", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    name: \"user-id\",\n    value: id,\n    required: true,\n    onChange: onChangeId\n  })), __jsx(\"div\", null, __jsx(\"label\", {\n    htmlFor: \"user-nick\"\n  }, \"\\uB2C9\\uB124\\uC784\"), __jsx(\"br\", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    name: \"user-nick\",\n    value: nick,\n    required: true,\n    onChange: onChangeNick\n  })), __jsx(\"div\", null, __jsx(\"label\", {\n    htmlFor: \"user-password\"\n  }, \"\\uBE44\\uBC00\\uBC88\\uD638\"), __jsx(\"br\", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    name: \"user-password\",\n    type: \"password\",\n    value: password,\n    required: true,\n    onChange: onChangePassword\n  })), __jsx(\"div\", null, __jsx(\"label\", {\n    htmlFor: \"user-password-check\"\n  }, \"\\uBE44\\uBC00\\uBC88\\uD638\\uCCB4\\uD06C\"), __jsx(\"br\", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    name: \"user-password-check\",\n    type: \"password\",\n    value: passwordCheck,\n    required: true,\n    onChange: onChangePasswordCheck\n  }), passwordError && __jsx(SignupError, null, \"\\uBE44\\uBC00\\uBC88\\uD638\\uAC00 \\uC77C\\uCE58\\uD558\\uC9C0 \\uC54A\\uC2B5\\uB2C8\\uB2E4.\")), __jsx(\"div\", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Checkbox\"], {\n    name: \"user-term\",\n    value: term,\n    onChange: onChangeTerm\n  }, \"\\uC81C\\uB85C\\uCD08 \\uB9D0\\uC744 \\uC798 \\uB4E4\\uC744 \\uAC83\\uC744 \\uB3D9\\uC758\\uD569\\uB2C8\\uB2E4.\"), termError && __jsx(SignupError, null, \"\\uC57D\\uAD00\\uC5D0 \\uB3D9\\uC758\\uD558\\uC154\\uC57C \\uD569\\uB2C8\\uB2E4.\")), __jsx(\"div\", {\n    style: {\n      marginTop: 10\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\",\n    loading: isSigningUp\n  }, \"\\uAC00\\uC785\\uD558\\uAE30\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\n\n//# sourceURL=webpack:///./pages/signup.js?");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  user: _user__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n//# sourceURL=webpack:///./reducers/index.js?");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, REMOVE_IMAGE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POSTS_REQUEST\", function() { return LOAD_MAIN_POSTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POSTS_SUCCESS\", function() { return LOAD_MAIN_POSTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POSTS_FAILURE\", function() { return LOAD_MAIN_POSTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_REQUEST\", function() { return LOAD_HASHTAG_POSTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_SUCCESS\", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_FAILURE\", function() { return LOAD_HASHTAG_POSTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POSTS_REQUEST\", function() { return LOAD_USER_POSTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POSTS_SUCCESS\", function() { return LOAD_USER_POSTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POSTS_FAILURE\", function() { return LOAD_USER_POSTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGES_REQUEST\", function() { return UPLOAD_IMAGES_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGES_SUCCESS\", function() { return UPLOAD_IMAGES_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGES_FAILURE\", function() { return UPLOAD_IMAGES_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_IMAGE\", function() { return REMOVE_IMAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_REQUEST\", function() { return LIKE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_SUCCESS\", function() { return LIKE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_FAILURE\", function() { return LIKE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_REQUEST\", function() { return UNLIKE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_SUCCESS\", function() { return UNLIKE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_FAILURE\", function() { return UNLIKE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENTS_REQUEST\", function() { return LOAD_COMMENTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENTS_SUCCESS\", function() { return LOAD_COMMENTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENTS_FAILURE\", function() { return LOAD_COMMENTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_REQUEST\", function() { return RETWEET_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_SUCCESS\", function() { return RETWEET_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_FAILURE\", function() { return RETWEET_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_REQUEST\", function() { return REMOVE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_SUCCESS\", function() { return REMOVE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_FAILURE\", function() { return REMOVE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_REQUEST\", function() { return LOAD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_SUCCESS\", function() { return LOAD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_FAILURE\", function() { return LOAD_POST_FAILURE; });\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n  mainPosts: [],\n  // 화면에 보일 포스트들\n  imagePaths: [],\n  // 미리보기 이미지 경로\n  addPostErrorReason: '',\n  // 포스트 업로드 실패 사유\n  isAddingPost: false,\n  // 포스트 업로드 중\n  postAdded: false,\n  // 포스트 업로드 성공\n  isAddingComment: false,\n  addCommentErrorReason: '',\n  commentAdded: false,\n  singlePost: null\n};\nconst LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';\nconst LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';\nconst LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';\nconst LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';\nconst LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';\nconst LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';\nconst LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';\nconst LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';\nconst LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';\nconst UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';\nconst UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';\nconst UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';\nconst REMOVE_IMAGE = 'REMOVE_IMAGE';\nconst ADD_POST_REQUEST = 'ADD_POST_REQUEST';\nconst ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';\nconst ADD_POST_FAILURE = 'ADD_POST_FAILURE';\nconst LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';\nconst LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';\nconst LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';\nconst UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';\nconst UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';\nconst UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';\nconst ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';\nconst ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';\nconst ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';\nconst LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';\nconst LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';\nconst LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';\nconst RETWEET_REQUEST = 'RETWEET_REQUEST';\nconst RETWEET_SUCCESS = 'RETWEET_SUCCESS';\nconst RETWEET_FAILURE = 'RETWEET_FAILURE';\nconst REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';\nconst REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';\nconst REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';\nconst LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';\nconst LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';\nconst LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {\n    switch (action.type) {\n      case UPLOAD_IMAGES_REQUEST:\n        {\n          break;\n        }\n\n      case UPLOAD_IMAGES_SUCCESS:\n        {\n          action.data.forEach(p => {\n            draft.imagePaths.push(p);\n          });\n          break;\n        }\n\n      case UPLOAD_IMAGES_FAILURE:\n        {\n          break;\n        }\n\n      case REMOVE_IMAGE:\n        {\n          const index = draft.imagePaths.findIndex((v, i) => i === action.index);\n          draft.imagePaths.splice(index, 1);\n          break;\n        }\n\n      case ADD_POST_REQUEST:\n        {\n          draft.isAddingPost = true;\n          draft.addingPostErrorReason = '';\n          draft.postAdded = false;\n          break;\n        }\n\n      case ADD_POST_SUCCESS:\n        {\n          draft.isAddingPost = false;\n          draft.mainPosts.unshift(action.data);\n          draft.postAdded = true;\n          draft.imagePaths = [];\n          break;\n        }\n\n      case ADD_POST_FAILURE:\n        {\n          draft.isAddingPost = false;\n          draft.addPostErrorReason = action.error;\n          break;\n        }\n\n      case ADD_COMMENT_REQUEST:\n        {\n          draft.isAddingComment = true;\n          draft.addCommentErrorReason = '';\n          draft.commentAdded = false;\n          break;\n        }\n\n      case ADD_COMMENT_SUCCESS:\n        {\n          const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);\n          draft.mainPosts[postIndex].Comments.push(action.data.comment);\n          draft.isAddingComment = false;\n          draft.commentAdded = true;\n          break;\n        }\n\n      case ADD_COMMENT_FAILURE:\n        {\n          draft.isAddingComment = false;\n          draft.addingPostErrorReason = action.error;\n          break;\n        }\n\n      case LOAD_COMMENTS_SUCCESS:\n        {\n          const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);\n          draft.mainPosts[postIndex].Comments = action.data.comments;\n          break;\n        }\n\n      case LOAD_MAIN_POSTS_REQUEST:\n      case LOAD_HASHTAG_POSTS_REQUEST:\n      case LOAD_USER_POSTS_REQUEST:\n        {\n          draft.mainPosts = !action.lastId ? [] : draft.mainPosts;\n          draft.hasMorePost = action.lastId ? draft.hasMorePost : true;\n          break;\n        }\n\n      case LOAD_MAIN_POSTS_SUCCESS:\n      case LOAD_HASHTAG_POSTS_SUCCESS:\n      case LOAD_USER_POSTS_SUCCESS:\n        {\n          action.data.forEach(d => {\n            draft.mainPosts.push(d);\n          });\n          draft.hasMorePost = action.data.length === 10;\n          break;\n        }\n\n      case LOAD_MAIN_POSTS_FAILURE:\n      case LOAD_HASHTAG_POSTS_FAILURE:\n      case LOAD_USER_POSTS_FAILURE:\n        {\n          break;\n        }\n\n      case LIKE_POST_REQUEST:\n        {\n          break;\n        }\n\n      case LIKE_POST_SUCCESS:\n        {\n          const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);\n          draft.mainPosts[postIndex].Likers.unshift({\n            id: action.data.userId\n          });\n          break;\n        }\n\n      case LIKE_POST_FAILURE:\n        {\n          break;\n        }\n\n      case UNLIKE_POST_REQUEST:\n        {\n          break;\n        }\n\n      case UNLIKE_POST_SUCCESS:\n        {\n          const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);\n          const likeIndex = draft.mainPosts[postIndex].Likers.findIndex(v => v.id === action.data.userId);\n          draft.mainPosts[postIndex].Likers.splice(likeIndex, 1);\n          break;\n        }\n\n      case UNLIKE_POST_FAILURE:\n        {\n          break;\n        }\n\n      case RETWEET_REQUEST:\n        {\n          break;\n        }\n\n      case RETWEET_SUCCESS:\n        {\n          draft.mainPosts.unshift(action.data);\n          break;\n        }\n\n      case RETWEET_FAILURE:\n        {\n          break;\n        }\n\n      case REMOVE_POST_REQUEST:\n        {\n          break;\n        }\n\n      case REMOVE_POST_SUCCESS:\n        {\n          const index = draft.mainPosts.findIndex(v => v.id === action.data);\n          draft.mainPosts.splice(index, 1);\n          break;\n        }\n\n      case REMOVE_POST_FAILURE:\n        {\n          break;\n        }\n\n      case LOAD_POST_SUCCESS:\n        {\n          draft.singlePost = action.data;\n          break;\n        }\n\n      default:\n        {\n          break;\n        }\n    }\n  });\n});\n\n//# sourceURL=webpack:///./reducers/post.js?");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE, UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, EDIT_NICKNAME_REQUEST, EDIT_NICKNAME_SUCCESS, EDIT_NICKNAME_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_REQUEST\", function() { return SIGN_UP_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_SUCCESS\", function() { return SIGN_UP_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_FAILURE\", function() { return SIGN_UP_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_REQUEST\", function() { return LOG_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_SUCCESS\", function() { return LOG_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_FAILURE\", function() { return LOG_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_REQUEST\", function() { return LOAD_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_SUCCESS\", function() { return LOAD_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_FAILURE\", function() { return LOAD_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_REQUEST\", function() { return LOG_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_SUCCESS\", function() { return LOG_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_FAILURE\", function() { return LOG_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_REQUEST\", function() { return LOAD_FOLLOWERS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_SUCCESS\", function() { return LOAD_FOLLOWERS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_FAILURE\", function() { return LOAD_FOLLOWERS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_REQUEST\", function() { return LOAD_FOLLOWINGS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_SUCCESS\", function() { return LOAD_FOLLOWINGS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_FAILURE\", function() { return LOAD_FOLLOWINGS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_REQUEST\", function() { return FOLLOW_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_SUCCESS\", function() { return FOLLOW_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_FAILURE\", function() { return FOLLOW_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_REQUEST\", function() { return UNFOLLOW_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_SUCCESS\", function() { return UNFOLLOW_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_FAILURE\", function() { return UNFOLLOW_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_REQUEST\", function() { return REMOVE_FOLLOWER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_SUCCESS\", function() { return REMOVE_FOLLOWER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_FAILURE\", function() { return REMOVE_FOLLOWER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_REQUEST\", function() { return EDIT_NICKNAME_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_SUCCESS\", function() { return EDIT_NICKNAME_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_FAILURE\", function() { return EDIT_NICKNAME_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_TO_ME\", function() { return ADD_POST_TO_ME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_OF_ME\", function() { return REMOVE_POST_OF_ME; });\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js\");\n\nconst dummyUser = {\n  nickname: '제로초',\n  Post: [],\n  Followings: [],\n  Followers: [],\n  id: 1\n};\nconst initialState = {\n  isLoggingOut: false,\n  // 로그아웃 시도중\n  isLoggingIn: false,\n  // 로그인 시도중\n  logInErrorReason: '',\n  // 로그인 실패 사윺\n  sifndUp: false,\n  // 회원가입 성공\n  isSigningUp: false,\n  // 회원가입 시도중\n  signUpErrorReason: false,\n  // 회원가입 실패 사유\n  me: null,\n  // 내 정보 // 로그인 여부\n  followingList: [],\n  // 팔로잉 리스트\n  followerList: [],\n  // 팔로워 리스트\n  userInfo: null,\n  // 남의 정보\n  isEditingNickname: false,\n  // 이름 변경 중\n  editNicknameErrorReason: '',\n  // 이름 변경 실패 사유\n  hasMoreFollower: false,\n  // 더보기 Follower\n  hasMoreFollowing: false // 더보기 Following\n\n};\nconst SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';\nconst SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';\nconst SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';\nconst LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 액션의 이름\n\nconst LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름\n\nconst LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름\n\nconst LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';\nconst LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';\nconst LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';\nconst LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';\nconst LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';\nconst LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';\nconst LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';\nconst LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';\nconst LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';\nconst LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';\nconst LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';\nconst LOAD_FOLLOWINGS_FAILURE = 'LOAD_FFOLLOWINGS_FAILURE';\nconst FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';\nconst FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';\nconst FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';\nconst UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';\nconst UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';\nconst UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';\nconst REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';\nconst REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';\nconst REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';\nconst EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';\nconst EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';\nconst EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';\nconst ADD_POST_TO_ME = 'ADD_POST_TO_ME';\nconst REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';\n/* harmony default export */ __webpack_exports__[\"default\"] = ((state = initialState, action) => {\n  switch (action.type) {\n    case LOG_IN_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          isLoggingIn: true,\n          logInErrorReason: ''\n        });\n      }\n\n    case LOG_IN_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          isLoggingIn: false,\n          me: action.data,\n          isLoading: false\n        });\n      }\n\n    case LOG_IN_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          isLoggingIn: false,\n          logInErrorReason: action.reason,\n          me: null\n        });\n      }\n\n    case LOG_OUT_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          isLoggingOut: true\n        });\n      }\n\n    case LOG_OUT_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          isLoggingOut: false,\n          me: null\n        });\n      }\n\n    case SIGN_UP_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          isSigningUp: true,\n          isSignedUp: false,\n          signUpErrorReason: ''\n        });\n      }\n\n    case SIGN_UP_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          isSigningUp: false,\n          isSignedUp: true\n        });\n      }\n\n    case SIGN_UP_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          isSigningUp: false,\n          signUpErrorReason: action.error\n        });\n      }\n\n    case LOAD_USER_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state);\n      }\n\n    case LOAD_USER_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          me: action.data\n        });\n      }\n\n    case LOAD_USER_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state);\n      }\n\n    case FOLLOW_USER_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state);\n      }\n\n    case FOLLOW_USER_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.me, {\n            Followings: [{\n              id: action.data\n            }, ...state.me.Followings]\n          })\n        });\n      }\n\n    case FOLLOW_USER_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state);\n      }\n\n    case UNFOLLOW_USER_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state);\n      }\n\n    case UNFOLLOW_USER_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.me, {\n            Followings: state.me.Followings.filter(v => v.id !== action.data)\n          }),\n          followingList: state.followingList.filter(v => v.id !== action.data)\n        });\n      }\n\n    case UNFOLLOW_USER_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state);\n      }\n\n    case ADD_POST_TO_ME:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.me, {\n            Posts: [{\n              id: action.data\n            }, ...state.me.Posts]\n          })\n        });\n      }\n\n    case REMOVE_POST_OF_ME:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.me, {\n            Posts: state.me.Posts.filter(v => v.id !== action.data)\n          })\n        });\n      }\n\n    case LOAD_FOLLOWERS_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state);\n      }\n\n    case LOAD_FOLLOWERS_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          followerList: state.followerList.concat(action.data),\n          hasMoreFollower: action.data.length === 3 // 데이터가 1 or 2개면 더보기 버튼 x , 데이터가 3개면 더보기 O\n\n        });\n      }\n\n    case LOAD_FOLLOWERS_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state);\n      }\n\n    case LOAD_FOLLOWINGS_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          hasMoreFollowing: action.offset ? state.hasMoreFollowing : true // 처음 데이터를 가져올 때는 더보기 버튼을 보여주는 걸로\n\n        });\n      }\n\n    case LOAD_FOLLOWINGS_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          followingList: state.followingList.concat(action.data),\n          hasMoreFollowing: action.data.length === 3 // 데이터가 1 or 2개면 더보기 버튼 x , 데이터가 3개면 더보기 O\n\n        });\n      }\n\n    case LOAD_FOLLOWINGS_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state);\n      }\n\n    case REMOVE_FOLLOWER_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          hasMoreFollower: action.offset ? state.hasMoreFollower : true // 처음 데이터를 가져올 때는 더보기 버튼을 보여주는 걸로\n\n        });\n      }\n\n    case REMOVE_FOLLOWER_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.me, {\n            Followers: state.me.Followers.filter(v => v.id !== action.data)\n          }),\n          followerList: state.followerList.filter(v => v.id !== action.data)\n        });\n      }\n\n    case REMOVE_FOLLOWER_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state);\n      }\n\n    case EDIT_NICKNAME_REQUEST:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          isEditingNickname: true,\n          editNicknameErrorReason: ''\n        });\n      }\n\n    case EDIT_NICKNAME_SUCCESS:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          isEditingNickname: false,\n          me: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state.me, {\n            nickname: action.data\n          })\n        });\n      }\n\n    case EDIT_NICKNAME_FAILURE:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state, {\n          isEditingNickname: false,\n          editNicknameErrorReason: action.error\n        });\n      }\n\n    default:\n      {\n        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state);\n      }\n  }\n});\n\n//# sourceURL=webpack:///./reducers/user.js?");

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./sagas/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ \"./sagas/post.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\naxios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.baseURL = 'http://localhost:2323/api';\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"])]);\n}\n\n//# sourceURL=webpack:///./sagas/index.js?");

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return postSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\n\n\nfunction addPostAPI(postData) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', postData, {\n    withCredentials: true\n  });\n}\n\nfunction* addPost(action) {\n  console.log(\"addPost\", action.data);\n\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(addPostAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      // post reducer의 데이터를 수정\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"ADD_POST_SUCCESS\"],\n      data: result.data\n    });\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      // user reducer의 데이터를 수정\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"ADD_POST_TO_ME\"],\n      data: result.data.id\n    });\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"ADD_POST_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchAddPost() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"ADD_POST_REQUEST\"], addPost);\n}\n\nfunction loadMainPostsAPI(lastId = 0, limit = 10) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId}&limit=${limit}`);\n}\n\nfunction* loadMainPosts(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(loadMainPostsAPI, action.lastId);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_MAIN_POSTS_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_MAIN_POSTS_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchLoadMainPosts() {\n  // throttle = 한번 호출 -> 2초 동안에는 같은 것이 호출되지 않게 막아주는 이펙트\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"throttle\"])(2000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_MAIN_POSTS_REQUEST\"], loadMainPosts);\n}\n\nfunction loadHashtagPostsAPI(tag, lastId) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/hashtag/${encodeURIComponent(tag)}?lastId=${lastId}&limit=10`);\n}\n\nfunction* loadHashtagPosts(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(loadHashtagPostsAPI, action.data, action.lastId);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_HASHTAG_POSTS_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_HASHTAG_POSTS_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchLoadHashtagPosts() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_HASHTAG_POSTS_REQUEST\"], loadHashtagPosts);\n}\n\nfunction loadUserPostsAPI(id) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${id || 0}/posts`);\n}\n\nfunction* loadUserPosts(action) {\n  console.log(\"posts\", action.data);\n\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(loadUserPostsAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_USER_POSTS_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_USER_POSTS_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchLoadUserPosts() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_USER_POSTS_REQUEST\"], loadUserPosts);\n}\n\nfunction addCommentAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/comment`, {\n    content: data.content\n  }, {\n    withCredentials: true\n  });\n}\n\nfunction* addComment(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(addCommentAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"ADD_COMMENT_SUCCESS\"],\n      data: {\n        postId: action.data.postId,\n        comment: result.data\n      }\n    });\n  } catch (e) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"ADD_COMMENT_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchAddComment() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"ADD_COMMENT_REQUEST\"], addComment);\n}\n\nfunction loadCommentsAPI(postId) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/${postId}/comments`);\n}\n\nfunction* loadComments(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(loadCommentsAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_COMMENTS_SUCCESS\"],\n      data: {\n        postId: action.data,\n        comments: result.data\n      }\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_COMMENTS_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchLoadComments() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_COMMENTS_REQUEST\"], loadComments);\n}\n\nfunction uploadImagesAPI(formData) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/images', formData, {\n    withCredentials: true\n  });\n}\n\nfunction* uploadImages(action) {\n  try {\n    console.log(\"formData\", action.data);\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(uploadImagesAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"UPLOAD_IMAGES_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"UPLOAD_IMAGES_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchUploadImages() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"UPLOAD_IMAGES_REQUEST\"], uploadImages);\n}\n\nfunction likePostAPI(postId) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${postId}/like`, {}, {\n    withCredentials: true\n  });\n}\n\nfunction* likePost(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(likePostAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LIKE_POST_SUCCESS\"],\n      data: {\n        postId: action.data,\n        userId: result.data.userId\n      }\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LIKE_POST_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchLikePost() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LIKE_POST_REQUEST\"], likePost);\n}\n\nfunction unlikePostAPI(postId) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${postId}/like`, {\n    withCredentials: true\n  });\n}\n\nfunction* unlikePost(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(unlikePostAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"UNLIKE_POST_SUCCESS\"],\n      data: {\n        postId: action.data,\n        userId: result.data.userId\n      }\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"UNLIKE_POST_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchUnlikePost() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"UNLIKE_POST_REQUEST\"], unlikePost);\n}\n\nfunction retweetAPI(postId) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${postId}/retweet`, {}, {\n    withCredentials: true\n  });\n}\n\nfunction* retweet(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(retweetAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"RETWEET_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"RETWEET_FAILURE\"],\n      error: e\n    });\n    alert(e.response && e.response.data);\n  }\n}\n\nfunction* watchRetweet() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"RETWEET_REQUEST\"], retweet);\n}\n\nfunction removePostAPI(postId) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${postId}`, {\n    withCredentials: true\n  });\n}\n\nfunction* removePost(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(removePostAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"REMOVE_POST_SUCCESS\"],\n      data: result.data\n    });\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: REMOVE_POST_OF_ME,\n      data: result.data\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"REMOVE_POST_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchRemovePost() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"REMOVE_POST_REQUEST\"], removePost);\n}\n\nfunction loadPostAPI(postId) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/${postId}`);\n}\n\nfunction* loadPost(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(loadPostAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_POST_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_POST_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchLoadPost() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_POST_REQUEST\"], loadPost);\n}\n\nfunction* postSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLoadMainPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLoadComments), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLoadPost)]);\n}\n\n//# sourceURL=webpack:///./sagas/post.js?");

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction loginAPI(loginData) {\n  // 서버에 요청을 보내는 부분 \n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/login', loginData, {\n    withCredentials: true // 쿠기를 다른 도메인으로 보낼때 ->도메인이 다르기떄문에 설정 필요 (front)\n\n  });\n}\n\nfunction* login(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(loginAPI, action.data);\n    console.log(result);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      // put은 dispatch 동일\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOG_IN_SUCCESS\"],\n      data: result.data\n    });\n  } catch (error) {\n    // loginAPI 실패\n    console.log(error);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOG_IN_FAILURE\"],\n      reason: error.response.data && error.response.data\n    });\n  }\n}\n\nfunction* watchLogin() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOG_IN_REQUEST\"], login);\n}\n\nfunction signUpAPI(signUPdata) {\n  // 서버에 요청을 보내는 부분 \n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/', signUPdata);\n}\n\nfunction* signUp(action) {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(signUpAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      // put은 dispatch 동일\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"SIGN_UP_SUCCESS\"]\n    });\n  } catch (error) {\n    // loginAPI 실패\n    console.log(error);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"SIGN_UP_FAILURE\"]\n    });\n  }\n}\n\nfunction* watchSignUp() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"SIGN_UP_REQUEST\"], signUp);\n}\n\nfunction logOutAPI() {\n  // 서버에 요청을 보내는 부분\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/logout', {}, {\n    withCredentials: true\n  });\n}\n\nfunction* logOut() {\n  try {\n    // yield call(logOutAPI);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(logOutAPI);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      // put은 dispatch 동일\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOG_OUT_SUCCESS\"]\n    });\n  } catch (e) {\n    // loginAPI 실패\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOG_OUT_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchLogOut() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOG_OUT_REQUEST\"], logOut);\n}\n\nfunction loadUserAPI(userId) {\n  // 서버에 요청을 보내는 부분 \n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(userId ? `/user/${userId}` : '/user/', {\n    withCredentials: true // 클라이언트에서 요청 보낼 때는 브라우저가 쿠키를 같이 동봉해줌\n\n  }); // 서버사이드렌더링일 때는, 브라우저가 없어요...\n}\n\nfunction* loadUser(action) {\n  try {\n    // yield call(loadUserAPI);\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(loadUserAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      // put은 dispatch 동일\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_USER_SUCCESS\"],\n      data: result.data,\n      me: !action.data\n    });\n  } catch (e) {\n    // loginAPI 실패\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_USER_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchLoadUser() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_USER_REQUEST\"], loadUser);\n}\n\nfunction followAPI(userId) {\n  // 서버에 요청을 보내는 부분\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`/user/${userId}/follow`, {}, {\n    withCredentials: true\n  });\n}\n\nfunction* follow(action) {\n  try {\n    // yield call(followAPI);\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(followAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      // put은 dispatch 동일\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"FOLLOW_USER_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    // loginAPI 실패\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"FOLLOW_USER_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchFollow() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"FOLLOW_USER_REQUEST\"], follow);\n}\n\nfunction unfollowAPI(userId) {\n  // 서버에 요청을 보내는 부분\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`/user/${userId}/follow`, {\n    withCredentials: true\n  });\n}\n\nfunction* unfollow(action) {\n  try {\n    // yield call(unfollowAPI);\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(unfollowAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      // put은 dispatch 동일\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"UNFOLLOW_USER_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    // loginAPI 실패\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"UNFOLLOW_USER_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchUnfollow() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"UNFOLLOW_USER_REQUEST\"], unfollow);\n}\n\nfunction loadFollowersAPI(userId, offset = 0, limit = 3) {\n  // 서버에 요청을 보내는 부분\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/user/${userId || 0}/followers?offset=${offset}&limit=${limit}`, {\n    withCredentials: true\n  });\n}\n\nfunction* loadFollowers(action) {\n  try {\n    // yield call(loadFollowersAPI);\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(loadFollowersAPI, action.data, action.offset);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      // put은 dispatch 동일\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_FOLLOWERS_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    // loginAPI 실패\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_FOLLOWERS_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchLoadFollowers() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_FOLLOWERS_REQUEST\"], loadFollowers);\n}\n\nfunction loadFollowingsAPI(userId, offset = 0, limit = 3) {\n  // 서버에 요청을 보내는 부분\n  console.log(\"offset\", offset);\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/user/${userId || 0}/followings?offset=${offset}&limit=${limit}`, {\n    withCredentials: true\n  });\n}\n\nfunction* loadFollowings(action) {\n  try {\n    // yield call(loadFollowersAPI);\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(loadFollowingsAPI, action.data, action.offset);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      // put은 dispatch 동일\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_FOLLOWINGS_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    // loginAPI 실패\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_FOLLOWINGS_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchLoadFollowings() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_FOLLOWINGS_REQUEST\"], loadFollowings);\n}\n\nfunction removeFollowerAPI(userId) {\n  // 서버에 요청을 보내는 부분\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`/user/${userId}/follower`, {\n    withCredentials: true\n  });\n}\n\nfunction* removeFollower(action) {\n  try {\n    // yield call(loadFollowersAPI);\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(removeFollowerAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      // put은 dispatch 동일\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"REMOVE_FOLLOWER_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    // loginAPI 실패\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"REMOVE_FOLLOWER_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchRemoveFollower() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"REMOVE_FOLLOWER_REQUEST\"], removeFollower);\n}\n\nfunction editNicknameAPI(nickname) {\n  // 서버에 요청을 보내는 부분\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch('/user/nickname', {\n    nickname\n  }, {\n    withCredentials: true\n  });\n}\n\nfunction* editNickname(action) {\n  try {\n    // yield call(loadFollowersAPI);\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(editNicknameAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      // put은 dispatch 동일\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"EDIT_NICKNAME_SUCCESS\"],\n      data: result.data\n    });\n  } catch (e) {\n    // loginAPI 실패\n    console.error(e);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"EDIT_NICKNAME_FAILURE\"],\n      error: e\n    });\n  }\n}\n\nfunction* watchEditNickname() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__[\"EDIT_NICKNAME_REQUEST\"], editNickname);\n}\n\nfunction* userSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchEditNickname)]);\n}\n\n//# sourceURL=webpack:///./sagas/user.js?");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! private-next-pages/_app.js */\"./pages/_app.js\");\n\n\n//# sourceURL=webpack:///multi_private-next-pages/_app.js?");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");\n\n//# sourceURL=webpack:///external_%22antd%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/map\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/map%22?");

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

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/promise\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/promise%22?");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"immer\");\n\n//# sourceURL=webpack:///external_%22immer%22?");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-saga\");\n\n//# sourceURL=webpack:///external_%22next-redux-saga%22?");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");\n\n//# sourceURL=webpack:///external_%22next-redux-wrapper%22?");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-server/dist/lib/router-context\");\n\n//# sourceURL=webpack:///external_%22next-server/dist/lib/router-context%22?");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-server/dist/lib/router/rewrite-url-for-export\");\n\n//# sourceURL=webpack:///external_%22next-server/dist/lib/router/rewrite-url-for-export%22?");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-server/dist/lib/router/router\");\n\n//# sourceURL=webpack:///external_%22next-server/dist/lib/router/router%22?");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-server/dist/lib/utils\");\n\n//# sourceURL=webpack:///external_%22next-server/dist/lib/utils%22?");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");\n\n//# sourceURL=webpack:///external_%22next/head%22?");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");\n\n//# sourceURL=webpack:///external_%22next/router%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types-exact\");\n\n//# sourceURL=webpack:///external_%22prop-types-exact%22?");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//# sourceURL=webpack:///external_%22redux-saga%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack:///external_%22redux-saga/effects%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ })

/******/ });