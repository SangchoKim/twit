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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"react-slick\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./components/ImagesZoom/style.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst ImagesZoom = ({\n  images,\n  onClose\n}) => {\n  const {\n    0: currentSlide,\n    1: setCurrentSlide\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  return __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"Overlay\"], null, __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"Header\"], null, __jsx(\"h1\", null, \"\\uC0C1\\uC138 \\uC774\\uBBF8\\uC9C0\"), __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"CloseBtn\"], {\n    type: \"close\",\n    onClick: onClose\n  })), __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"SlickWrapper\"], null, __jsx(\"div\", null, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    initialSlide: 0,\n    afterChange: slide => setCurrentSlide(slide),\n    infinite: false,\n    arrows: true,\n    slidesToShow: 1,\n    slidesToScroll: 1\n  }, images.map(v => {\n    return __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"ImgWrapper\"], null, __jsx(\"img\", {\n      src: `http://localhost:2323/${v.src}`\n    }));\n  })), __jsx(_style__WEBPACK_IMPORTED_MODULE_3__[\"Indicator\"], null, __jsx(\"div\", null, currentSlide + 1, \" / \", images.length)))));\n};\n\nImagesZoom.propTypes = {\n  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n  })).isRequired,\n  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesZoom);\n\n//# sourceURL=webpack:///./components/ImagesZoom/index.js?");

/***/ }),

/***/ "./components/ImagesZoom/style.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/style.js ***!
  \****************************************/
/*! exports provided: Overlay, Header, SlickWrapper, CloseBtn, Indicator, ImgWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Overlay\", function() { return Overlay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SlickWrapper\", function() { return SlickWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CloseBtn\", function() { return CloseBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Indicator\", function() { return Indicator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImgWrapper\", function() { return ImgWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Overlay = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  position: fixed;\n  z-index: 5000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n`;\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header`\n  height: 44px;\n  background: white;\n  position: relative;\n  padding: 0;\n  text-align: center;\n  \n  & h1 {\n    margin: 0;\n    font-size: 17px;\n    color: #333;\n    line-height: 44px;\n  }\n`;\nconst SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  height: calc(100% - 44px);\n  background: #090909;\n`;\nconst CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"])`\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 15px;\n  line-height: 14px;\n  cursor: pointer;\n`;\nconst Indicator = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  text-align: center;\n  \n  & > div {\n    width: 75px;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 15px;\n    background: #313131;\n    display: inline-block;\n    text-align: center;\n    color: white;\n    font-size: 15px;\n  }\n`;\nconst ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  padding: 32px;\n  text-align: center;\n  \n  & img {\n    margin: 0 auto;\n    max-height: 750px;\n  }\n`;\n\n//# sourceURL=webpack:///./components/ImagesZoom/style.js?");

/***/ }),

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst PostCardContent = ({\n  postData\n}) => {\n  return __jsx(\"div\", null, postData.split(/(#[^\\s]+)/g).map(v => {\n    if (v.match(/#[^\\s]+/)) {\n      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: {\n          pathname: '/hashtag',\n          query: {\n            tag: v.slice(1)\n          }\n        },\n        as: `/hashtag/${v.slice(1)}`,\n        key: v\n      }, __jsx(\"a\", null, v));\n    }\n\n    return v;\n  }));\n};\n\nPostCardContent.propTypes = {\n  postData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCardContent);\n\n//# sourceURL=webpack:///./components/PostCardContent.js?");

/***/ }),

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImagesZoom */ \"./components/ImagesZoom/index.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst PostImages = ({\n  images\n}) => {\n  const {\n    0: showImagesZoom,\n    1: setShowImagesZoom\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(() => {\n    setShowImagesZoom(true);\n  }, []);\n  const onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(() => {\n    setShowImagesZoom(false);\n  }, []);\n\n  if (images.length === 1) {\n    // 이미지가 1장일떄\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"img\", {\n      src: `http://localhost:2323/${images[0].src}`,\n      onClick: onZoom\n    }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      images: images,\n      onClose: onClose\n    }));\n  }\n\n  if (images.length === 2) {\n    // 이미지가 2장일때\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", null, __jsx(\"img\", {\n      src: `http://localhost:2323/${images[0].src}`,\n      width: \"50%\",\n      onClick: onZoom\n    }), __jsx(\"img\", {\n      src: `http://localhost:2323/${images[1].src}`,\n      width: \"50%\",\n      onClick: onZoom\n    })), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      images: images,\n      onClose: onClose\n    }));\n  }\n\n  return (// 이미지가 3장이상일떄 \n    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", null, __jsx(\"img\", {\n      src: `http://localhost:2323/${images[0].src}`,\n      width: \"50%\",\n      onClick: onZoom\n    }), __jsx(\"div\", {\n      style: {\n        display: 'inline-block',\n        width: '50%',\n        textAlign: 'center',\n        verticalAlign: 'middle'\n      },\n      onClick: onZoom\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"], {\n      type: \"plus\"\n    }), __jsx(\"br\", null), images.length - 1, \"\\uAC1C\\uC758 \\uC0AC\\uC9C4 \\uB354\\uBCF4\\uAE30\")), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      images: images,\n      onClose: onClose\n    }))\n  );\n};\n\nPostImages.propTypes = {\n  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    // Object를 좀더 구체화해서 사용하는 것은 shape\n    src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n  })).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostImages);\n\n//# sourceURL=webpack:///./components/PostImages.js?");

/***/ }),

/***/ "./containers/CommentForm.js":
/*!***********************************!*\
  !*** ./containers/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nconst CommentForm = ({\n  post\n}) => {\n  const {\n    0: commentText,\n    1: setCommentText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    commentAdded,\n    isAddingComment\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(state => state.post);\n  const {\n    me\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(state => state.user);\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  const onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(e => {\n    // post창\n    e.preventDefault();\n\n    if (!me) {\n      return alert('로그인이 필요합니다.');\n    }\n\n    return dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__[\"ADD_COMMENT_REQUEST\"],\n      data: {\n        postId: post.id,\n        content: commentText\n      }\n    });\n  }, [me && me.id, commentText]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    setCommentText('');\n  }, [commentAdded === true]);\n  const onChangeCommentText = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(e => {\n    setCommentText(e.target.value);\n  }, []);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Form\"], {\n    onSubmit: onSubmitComment\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Form\"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Input\"].TextArea, {\n    rows: 4,\n    value: commentText,\n    onChange: onChangeCommentText\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\",\n    loading: isAddingComment\n  }, \"\\uC090\\uC57D\"));\n};\n\nCommentForm.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\n\n//# sourceURL=webpack:///./containers/CommentForm.js?");

/***/ }),

/***/ "./containers/PostCard.js":
/*!********************************!*\
  !*** ./containers/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var _components_PostImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PostImages */ \"./components/PostImages.js\");\n/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CommentForm */ \"./containers/CommentForm.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_PostCardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PostCardContent */ \"./components/PostCardContent.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nmoment__WEBPACK_IMPORTED_MODULE_9___default.a.locale('ko');\nconst PostCard = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(({\n  post\n}) => {\n  const {\n    0: commentFormOpened,\n    1: setCommentFormOpened\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: commentText,\n    1: setCommentText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    me\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(state => state.user);\n  const {\n    commentAdded,\n    isAddingComment\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(state => state.post);\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  const liked = me && post.Likers && post.Likers.find(v => v.id === me.id);\n  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(() => {\n    // 댓글\n    setCommentFormOpened(prev => !prev);\n\n    if (!commentFormOpened) {\n      dispatch({\n        type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"LOAD_COMMENTS_REQUEST\"],\n        data: post.id\n      });\n    }\n  }, []);\n  const onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(() => {\n    // 좋아요\n    if (!me) {\n      return alert('로그인이 필요합니다!');\n    }\n\n    if (liked) {\n      // 좋아요 누른 상태\n      dispatch({\n        type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"UNLIKE_POST_REQUEST\"],\n        data: post.id\n      });\n    } else {\n      // 좋아요 안 누른 상태\n      dispatch({\n        type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"LIKE_POST_REQUEST\"],\n        data: post.id\n      });\n    }\n  }, [me && me.id, post && post.id, liked]);\n  const onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(() => {\n    // 리트윗\n    if (!me) {\n      return alert('로그인이 필요합니다.');\n    }\n\n    return dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"RETWEET_REQUEST\"],\n      data: post.id\n    });\n  }, [me && me.id, post && post.id]);\n  const onFollow = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(userId => () => {\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__[\"FOLLOW_USER_REQUEST\"],\n      data: userId\n    });\n  }, []);\n  const onUnfollow = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(userId => () => {\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__[\"UNFOLLOW_USER_REQUEST\"],\n      data: userId\n    });\n  }, []);\n  const onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(userId => () => {\n    dispatch({\n      type: REMOVE_POST_REQUEST,\n      data: userId\n    });\n  });\n  return __jsx(\"div\", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    cover: post.Images && post.Images[0] && __jsx(_components_PostImages__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      images: post.Images\n    }),\n    actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n      type: \"retweet\",\n      key: \"retweet\",\n      onClick: onRetweet\n    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n      type: \"heart\",\n      key: \"heart\",\n      onClick: onToggleLike,\n      theme: liked ? 'twoTone' : 'outlined',\n      twoToneColor: \"#eb2f96\"\n    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n      type: \"message\",\n      key: \"message\",\n      onClick: onToggleComment\n    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Popover\"], {\n      key: \"ellipsis\",\n      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"].Group, null, me && post.UserId === me.id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], null, \"\\uC218\\uC815\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        type: \"danger\",\n        onClick: onRemovePost(post.id)\n      }, \"\\uC0AD\\uC81C\")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], null, \"\\uC2E0\\uACE0\"))\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n      type: \"ellipsis\"\n    }))],\n    title: post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null,\n    extra: !me || post.User.id === me.id ? null : me.Followings && me.Followings.find(v => v.id === post.User.id) ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      onClick: onUnfollow(post.User.id)\n    }, \"\\uC5B8\\uD314\\uB85C\\uC6B0\") : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      onClick: onFollow(post.User.id)\n    }, \"\\uD314\\uB85C\\uC6B0\")\n  }, post.RetweetId && post.Retweet ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"] // 리트윗을 한 경우\n  , {\n    cover: post.Retweet.Images[0] && __jsx(_components_PostImages__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      images: post.Retweet.Images\n    })\n  }, __jsx(\"span\", {\n    style: {\n      float: 'right'\n    }\n  }, moment__WEBPACK_IMPORTED_MODULE_9___default()(post.createdAt).format('YYYY.MM.DD.')), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Meta, {\n    avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: {\n        pathname: '/user',\n        query: {\n          id: post.Retweet.User.id\n        }\n      },\n      as: `/user/${post.Retweet.User.id}`\n    }, __jsx(\"a\", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], null, post.Retweet.User.nickname[0]))),\n    title: post.Retweet.User.nickname,\n    description: __jsx(_components_PostCardContent__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      postData: post.Retweet.content\n    }) // a tag x -> Link\n\n  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Meta, {\n    // 리트윗을 안 한 경우\n    avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: {\n        pathname: '/user',\n        query: {\n          id: post.User.id\n        }\n      },\n      as: `/user/${post.User.id}`\n    }, __jsx(\"a\", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], null, post.User.nickname[0]))),\n    title: post.User.nickname,\n    description: __jsx(_components_PostCardContent__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      postData: post.content\n    }) // a tag x -> Link\n\n  })), commentFormOpened && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    post: post\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n    header: `${post.Comments ? post.Comments.length : 0} 댓글`,\n    itemLayout: \"horizontal\",\n    dataSource: post.Comments || [],\n    renderItem: item => __jsx(\"li\", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Comment\"], {\n      author: item.User.nickname,\n      avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: {\n          pathname: '/user',\n          query: {\n            id: item.User.id\n          }\n        },\n        as: `/user/${item.User.id}`\n      }, __jsx(\"a\", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], null, item.User.nickname[0]))),\n      content: item.content\n    }))\n  })));\n});\nPostCard.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({\n    User: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,\n    content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,\n    img: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,\n    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string\n  })\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\n\n//# sourceURL=webpack:///./containers/PostCard.js?");

/***/ }),

/***/ "./containers/PostForm.js":
/*!********************************!*\
  !*** ./containers/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst PostForm = () => {\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  const {\n    0: text,\n    1: setText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    imagePaths,\n    isAddingPost,\n    postAdded\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(state => state.post);\n  const imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (postAdded) {\n      setText('');\n    }\n  }, [postAdded]);\n  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    e.preventDefault();\n\n    if (!text || !text.trim()) {\n      return alert('게시글을 작성하세요');\n    }\n\n    const formData = new FormData();\n    imagePaths.forEach(i => {\n      formData.append('image', i);\n    });\n    formData.append('content', text);\n    dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"ADD_POST_REQUEST\"],\n      data: formData\n    });\n  }, [text, imagePaths]);\n  const onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    setText(e.target.value);\n  }, []);\n  const onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    // 이미지 파일이 담겨있음\n    console.log(e.target.files);\n    const imageFormData = new FormData();\n    [].forEach.call(e.target.files, f => {\n      imageFormData.append('image', f); // AJAX 기반인 SPA를 유지하기 위해서 기존의 방법과는 다르게 모든 설정이 필요 \n    });\n    dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"UPLOAD_IMAGES_REQUEST\"],\n      data: imageFormData\n    });\n  }, []);\n  const onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(() => {\n    imageInput.current.click(); // 이미지 업로드 버튼을 클릭했을 때 input ref imageInput 버튼을 눌른 효과가 남\n  }, [imageInput.current]);\n  const onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(index => () => {\n    // onRemoveImage(i) 경우 () => () => {} // isAddingPost경우 () => {}\n    dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"REMOVE_IMAGE\"],\n      index\n    });\n  }, []);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    style: {\n      margin: '10px 0 20px'\n    },\n    encType: \"multipart/form-data\",\n    onSubmit: onSubmitForm\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"].TextArea, {\n    maxLength: 140,\n    placeholder: \"\\uC5B4\\uB5A4 \\uC2E0\\uAE30\\uD55C \\uC77C\\uC774 \\uC788\\uC5C8\\uB098\\uC694?\",\n    value: text,\n    onChange: onChangeText\n  }), __jsx(\"div\", null, __jsx(\"input\", {\n    type: \"file\",\n    multiple: true,\n    hidden: true,\n    ref: imageInput,\n    onChange: onChangeImages\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onClickImageUpload\n  }, \"\\uC774\\uBBF8\\uC9C0 \\uC5C5\\uB85C\\uB4DC\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    style: {\n      float: 'right'\n    },\n    htmlType: \"submit\",\n    loading: isAddingPost\n  }, \"\\uC9F9\\uC9F9\")), __jsx(\"div\", null, imagePaths.map((v, i) => __jsx(\"div\", {\n    key: v,\n    style: {\n      display: 'inline-block'\n    }\n  }, __jsx(\"img\", {\n    src: `http://localhost:2323/${v}`,\n    style: {\n      width: '200px'\n    },\n    alt: v\n  }), __jsx(\"div\", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onRemoveImage(i)\n  }, \"\\uC81C\\uAC70\"))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostForm);\n\n//# sourceURL=webpack:///./containers/PostForm.js?");

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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/client/link */ \"./node_modules/next/dist/client/link.js\")\n\n\n//# sourceURL=webpack:///./node_modules/next/link.js?");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ \"./node_modules/@babel/runtime-corejs2/core-js/object/keys.js\");\n/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _containers_PostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/PostForm */ \"./containers/PostForm.js\");\n/* harmony import */ var _containers_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/PostCard */ \"./containers/PostCard.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nconst Home = () => {\n  const {\n    me\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(state => state.user);\n  const {\n    mainPosts,\n    hasMorePost\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(state => state.post);\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  const countRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])([]);\n  const onScroll = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(() => {\n    // scrollY = 스크롤 내린 거리 \n    // clientHeight = 화면 높이\n    // scrollHeight: 전체 화면 길이\n    // 전체 화면 까지 스크롤이 도착하기 전 300 정도가 남았을 때 불러오기 \n    if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {\n      if (hasMorePost) {\n        const lastId = mainPosts[mainPosts.length - 1].id; // 마지막 게시글의 id 추출\n\n        if (!countRef.current.includes(lastId)) {\n          dispatch({\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"LOAD_MAIN_POSTS_REQUEST\"],\n            lastId\n          });\n          countRef.current.push(lastId);\n        }\n      }\n    }\n  }, [hasMorePost, mainPosts.length]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    window.addEventListener('scroll', onScroll);\n    return () => {\n      window.removeEventListener('scroll', onScroll);\n    };\n  }, [mainPosts.length]);\n  return __jsx(\"div\", null, me && __jsx(_containers_PostForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), mainPosts.map(c => {\n    return __jsx(_containers_PostCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: c.id,\n      post: c\n    });\n  }));\n}; // getInitialProps 서버사이드 렌더링의 핵심 -. 서버&&프론트 둘다 실행\n// 서버쪽에서 실행은 언제? 처음으로 페이지를 불러올때 \n// 프론트쪽에서는 언제 실행? 넥스트 라우터로 페이지를 넘나들때 \n\n\nHome.getInitialProps = async context => {\n  console.log(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(context)); // context 안에 리덕스의 store가 들어 있음 -> store.dispatch 로 사용 가능 \n  // -> store.getState 로 사용 가능 \n\n  context.store.dispatch({\n    type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"LOAD_MAIN_POSTS_REQUEST\"]\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./pages/index.js?");

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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! D:\\NodeBird\\front\\pages\\index.js */\"./pages/index.js\");\n\n\n//# sourceURL=webpack:///multi_./pages/index.js?");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");\n\n//# sourceURL=webpack:///external_%22antd%22?");

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

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"immer\");\n\n//# sourceURL=webpack:///external_%22immer%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-slick\");\n\n//# sourceURL=webpack:///external_%22react-slick%22?");

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