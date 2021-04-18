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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/sass/colors.scss":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/sass/colors.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/*\\n* this are the available color palette\\n*/\\n$btnPrimaryBg: #0084f8;\\n$btnPrimaryText: #ffffff;\\n\\n/*\\n* Available gradient i the application\\n*/\\n\\n$warning: rgba(87, 72, 2, 0.5);\\n$error: rgba(173, 24, 24, 0.5);\\n$success: rgba(6, 87, 2, 0.5);\\n$info: rgba(25, 38, 94, 0.5);\\n\\n/*\\n* Validation error\\n*/\\n\\n$validationerror: red;\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/assets/sass/colors.scss?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/sass/paddings.scss":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/sass/paddings.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"$btnPadding: 12px 36px;\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/assets/sass/paddings.scss?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialState */ \"./server/initialState.js\");\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(\"./build\"));\napp.use(_initialState__WEBPACK_IMPORTED_MODULE_1__[\"handleRender\"]);\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/initialState.js":
/*!********************************!*\
  !*** ./server/initialState.js ***!
  \********************************/
/*! exports provided: renderFullPage, handleRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderFullPage\", function() { return renderFullPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleRender\", function() { return handleRender; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n // function InitialRender(initialState) {\n//   // Model the initial state\n//   const reduxStore = store(initialState);\n//   let content = renderToString(\n//     <Provider store={store}>\n//       <App />\n//     </Provider>\n//   );\n//   const preloadedState = reduxStore.getState();\n//   return {\n//     content,\n//     preloadedState,\n//   };\n// }\n// export default InitialRender;\n\nfunction renderFullPage(html, preLoadedState) {\n  return `\n    <!doctype html>\n    <html>\n      <head>\n        <title>SpaceX Launch Programs</title>\n      </head>\n      <body>\n        <div id=\"root\">${html}</div>\n        <script>\n                 window.__PRELOADED_STATE__ = ${JSON.stringify(preLoadedState).replace(/</g, \"\\\\u003c\")}\n        </script>\n        <script src=\"/static/bundle.js\"></script>\n      </body>\n    </html>\n    `;\n}\nfunction handleRender(req, res) {\n  const reduxStore = createStore(redux__WEBPACK_IMPORTED_MODULE_3__[\"combineReducers\"]);\n  const html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    store: reduxStore\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n  const preLoadedState = reduxStore.getState();\n  res.send(renderFullPage(html, preLoadedState));\n}\n\n//# sourceURL=webpack:///./server/initialState.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.scss */ \"./src/App.scss\");\n/* harmony import */ var _modules_programs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/programs/index */ \"./src/modules/programs/index.tsx\");\n\n\n\nfunction App() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"App-header\"\n  }, \" SpaceX Launch Programs\"), /*#__PURE__*/React.createElement(\"header\", {\n    className: \"App-content\"\n  }, /*#__PURE__*/React.createElement(_modules_programs_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)), /*#__PURE__*/React.createElement(\"footer\", {\n    className: \"App-footer\"\n  }, \"Developed By : Pavan Kumar\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".App {\\n  text-align: center;\\n}\\n\\n.App-header {\\n  background-color: lightgray;\\n  text-align: left;\\n  font-weight: bold;\\n  padding: 10px 50px 0px 50px;\\n}\\n\\n.App-content {\\n  background-color: lightgray;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  font-size: medium;\\n  color: black;\\n}\\n\\n.App-footer {\\n  position: fixed;\\n  bottom: 0;\\n  width: 100%;\\n  padding-bottom: 10px;\\n  background: lightgray;\\n}\\n\\n@media screen and (max-width: 700px) {\\n  .App-header {\\n    padding: 0px;\\n  }\\n}\\n\\n@media screen and (max-width: 1024px) {\\n  .App-header {\\n    padding: 10px 20px 0px 20px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/App.scss?");

/***/ }),

/***/ "./src/components/atoms/button/button.scss":
/*!*************************************************!*\
  !*** ./src/components/atoms/button/button.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_assets_sass_colors_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../../assets/sass/colors.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/sass/colors.scss\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_assets_sass_paddings_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../../assets/sass/paddings.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/sass/paddings.scss\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_assets_sass_colors_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_assets_sass_paddings_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".btn {\\n  border-radius: 4px;\\n  padding: $btnPadding;\\n  outline: none;\\n  text-align: center;\\n  cursor: pointer;\\n}\\n.primary {\\n  background: $btnPrimaryBg;\\n  color: $btnPrimaryText;\\n  border: none;\\n  margin-bottom: 5px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/atoms/button/button.scss?");

/***/ }),

/***/ "./src/components/atoms/button/button.tsx":
/*!************************************************!*\
  !*** ./src/components/atoms/button/button.tsx ***!
  \************************************************/
/*! exports provided: ButtonType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonType\", function() { return ButtonType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Button; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.scss */ \"./src/components/atoms/button/button.scss\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\nvar ButtonType;\n(function (ButtonType) {\n    ButtonType[\"Primary\"] = \"primary\";\n    ButtonType[\"Secondary\"] = \"secondary\";\n    ButtonType[\"Disabled\"] = \"disabled\";\n})(ButtonType || (ButtonType = {}));\nfunction Button(props) {\n    var type = props.type, _a = props.disabled, disabled = _a === void 0 ? false : _a, _b = props.onClick, onClick = _b === void 0 ? null : _b, customClass = props.customClass, loadText = props.loadText, _c = props.loading, loading = _c === void 0 ? false : _c, children = props.children, _d = props.btnTyp, btnTyp = _d === void 0 ? \"button\" : _d;\n    var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"btn\", type, customClass);\n    return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"button\", __assign({ className: className, disabled: disabled, type: btnTyp, onClick: function () {\n            onClick && onClick();\n        } }, { children: loading ? loadText : children }), void 0));\n}\n\n\n//# sourceURL=webpack:///./src/components/atoms/button/button.tsx?");

/***/ }),

/***/ "./src/components/atoms/card/card.scss":
/*!*********************************************!*\
  !*** ./src/components/atoms/card/card.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".card {\\n  background-color: whitesmoke;\\n\\n  margin: 10px;\\n  padding: 10px;\\n  border-radius: 5px;\\n  box-shadow: 2px 2px gainsboro;\\n}\\n\\n.card__header {\\n  border-radius: 5px;\\n}\\n\\n.card__body {\\n  padding: 10px;\\n  background-color: rgb(247, 239, 239);\\n  border-radius: 5px;\\n}\\n\\n.card__footer {\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/atoms/card/card.scss?");

/***/ }),

/***/ "./src/components/atoms/card/card.tsx":
/*!********************************************!*\
  !*** ./src/components/atoms/card/card.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Card; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.scss */ \"./src/components/atoms/card/card.scss\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\nfunction Card(props) {\n    var type = props.type, customClass = props.customClass, children = props.children;\n    var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"card\", type, customClass);\n    return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", __assign({ className: className }, { children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", { children: children }, void 0) }), void 0));\n}\nvar Header = function (_a) {\n    var children = _a.children;\n    return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", __assign({ className: \"card__header\" }, { children: children }), void 0);\n};\nvar Body = function (_a) {\n    var children = _a.children;\n    return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", __assign({ className: \"card__body\" }, { children: children }), void 0);\n};\nvar Footer = function (_a) {\n    var children = _a.children;\n    return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", __assign({ className: \"card__footer\" }, { children: children }), void 0);\n};\nCard.Header = Header;\nCard.Body = Body;\nCard.Footer = Footer;\n\n\n//# sourceURL=webpack:///./src/components/atoms/card/card.tsx?");

/***/ }),

/***/ "./src/components/atoms/image/image.scss":
/*!***********************************************!*\
  !*** ./src/components/atoms/image/image.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".img {\\n  max-width: 100%;\\n  width: 700px;\\n  height: 500px;\\n\\n  &--clear {\\n    filter: none;\\n    transition: filter 0.3s ease-out;\\n  }\\n\\n  &--circular {\\n    border-radius: 50%;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/atoms/image/image.scss?");

/***/ }),

/***/ "./src/components/atoms/image/image.tsx":
/*!**********************************************!*\
  !*** ./src/components/atoms/image/image.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Image; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _image_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image.scss */ \"./src/components/atoms/image/image.scss\");\n\n\n\n\nfunction Image(props) {\n    var _a = props.src, src = _a === void 0 ? \"\" : _a, alt = props.alt, type = props.type, customClass = props.customClass, _b = props.fallBackImageSrc, fallBackImageSrc = _b === void 0 ? \"\" : _b, _c = props.onClick, onClick = _c === void 0 ? null : _c, _d = props.previewImageSrc, previewImageSrc = _d === void 0 ? \"\" : _d, loading = props.loading;\n    var _e = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(previewImageSrc), imageSrc = _e[0], setImageSrc = _e[1];\n    var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n    var isBlur = imageSrc === previewImageSrc;\n    var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(\"img\", type, customClass, isBlur ? \"img--blur\" : \"img--clear\");\n    var handleError = function () {\n        imageRef.current.src = fallBackImageSrc;\n    };\n    var handleLoad = function () {\n        setImageSrc(src);\n    };\n    Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n        setImageSrc(previewImageSrc);\n        handleLoad();\n    }, [previewImageSrc, src]);\n    return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"img\", { src: imageSrc, alt: alt, className: className, ref: imageRef, onClick: function () {\n            onClick && onClick();\n        }, loading: loading, onError: function () {\n            handleError();\n        }, onLoad: function () { return handleLoad(); } }, void 0));\n}\n\n\n//# sourceURL=webpack:///./src/components/atoms/image/image.tsx?");

/***/ }),

/***/ "./src/components/organisms/sidebar/constants.ts":
/*!*******************************************************!*\
  !*** ./src/components/organisms/sidebar/constants.ts ***!
  \*******************************************************/
/*! exports provided: yearOptions, successfulLaunchOptions, launchAndLandOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yearOptions\", function() { return yearOptions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"successfulLaunchOptions\", function() { return successfulLaunchOptions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"launchAndLandOptions\", function() { return launchAndLandOptions; });\nvar yearOptions = [\n    2006,\n    2007,\n    2008,\n    2009,\n    2010,\n    2011,\n    2012,\n    2013,\n    2014,\n    2015,\n    2016,\n    2017,\n    2018,\n    2019,\n    2020,\n    2021,\n];\nvar successfulLaunchOptions = [\"True\", \"False\"];\nvar launchAndLandOptions = [\"True\", \"False\"];\n\n\n//# sourceURL=webpack:///./src/components/organisms/sidebar/constants.ts?");

/***/ }),

/***/ "./src/components/organisms/sidebar/sidebar.scss":
/*!*******************************************************!*\
  !*** ./src/components/organisms/sidebar/sidebar.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".sidebar-card {\\n  color: black;\\n  height: min-content;\\n  max-width: 230px;\\n}\\n\\n.sidebar-card-content {\\n  display: flex;\\n  flex-wrap: wrap;\\n  column-gap: 20px;\\n  columns: 2;\\n\\n}\\n\\n.sidebar-card-heading {\\n  font-weight: bold;\\n  text-align: left;\\n}\\n\\n.sidebar-card-subheading {\\n  text-decoration: underline;\\n}\\n\\n.successful-launch-div {\\n  display: flex;\\n  column-count: 2;\\n  column-gap: 20px;\\n}\\n\\n@media screen and (max-width: 575px) {\\n  .sidebar-card {\\n    width: 85vw;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/organisms/sidebar/sidebar.scss?");

/***/ }),

/***/ "./src/components/organisms/sidebar/sidebar.tsx":
/*!******************************************************!*\
  !*** ./src/components/organisms/sidebar/sidebar.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sidebar; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _atoms_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/button/button */ \"./src/components/atoms/button/button.tsx\");\n/* harmony import */ var _atoms_card_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/card/card */ \"./src/components/atoms/card/card.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./src/components/organisms/sidebar/constants.ts\");\n/* harmony import */ var _sidebar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.scss */ \"./src/components/organisms/sidebar/sidebar.scss\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\n\nfunction Sidebar(props) {\n    var handleYearClick = function (option) {\n        props.getProgramsByYear(option);\n    };\n    var handleSuccessfulLaunchFilter = function (option) {\n        props.getProgramsBySuccessfulLaunch(option.toLowerCase());\n    };\n    var handleLaunchAndLandFilter = function (option) {\n        props.getProgramsBySuccessfulLand(option.toLowerCase());\n    };\n    return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", __assign({ className: \"sidebar-div\" }, { children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_atoms_card_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], __assign({ customClass: \"sidebar-card\" }, { children: [Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", __assign({ className: \"sidebar-card-heading\" }, { children: \"Filters\" }), void 0),\n                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", __assign({ className: \"sidebar-card-subheading\" }, { children: \"Launch Year\" }), void 0),\n                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", __assign({ className: \"sidebar-card-content\" }, { children: _constants__WEBPACK_IMPORTED_MODULE_3__[\"yearOptions\"] &&\n                        _constants__WEBPACK_IMPORTED_MODULE_3__[\"yearOptions\"].map(function (option, index) { return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_atoms_button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], __assign({ type: _atoms_button_button__WEBPACK_IMPORTED_MODULE_1__[\"ButtonType\"].Primary, id: option + \"-\" + index, onClick: function () { return handleYearClick(option); } }, { children: option }), option + \"-\" + index)); }) }), void 0),\n                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", __assign({ className: \"sidebar-card-subheading\" }, { children: \"Successful Launch\" }), void 0),\n                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", __assign({ className: \"successful-launch-div\" }, { children: _constants__WEBPACK_IMPORTED_MODULE_3__[\"successfulLaunchOptions\"] &&\n                        _constants__WEBPACK_IMPORTED_MODULE_3__[\"successfulLaunchOptions\"].map(function (option, index) { return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_atoms_button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], __assign({ type: _atoms_button_button__WEBPACK_IMPORTED_MODULE_1__[\"ButtonType\"].Primary, id: option + \"-\" + index, onClick: function () { return handleSuccessfulLaunchFilter(option); } }, { children: option }), option + \"-\" + index)); }) }), void 0),\n                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", __assign({ className: \"sidebar-card-subheading\" }, { children: \"Successful Landing\" }), void 0),\n                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", __assign({ className: \"successful-launch-div\" }, { children: _constants__WEBPACK_IMPORTED_MODULE_3__[\"launchAndLandOptions\"] &&\n                        _constants__WEBPACK_IMPORTED_MODULE_3__[\"launchAndLandOptions\"].map(function (option, index) { return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_atoms_button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], __assign({ type: _atoms_button_button__WEBPACK_IMPORTED_MODULE_1__[\"ButtonType\"].Primary, id: option + \"-\" + index, onClick: function () { return handleLaunchAndLandFilter(option); } }, { children: option }), option + \"-\" + index)); }) }), void 0)] }), void 0) }), void 0));\n}\n\n\n//# sourceURL=webpack:///./src/components/organisms/sidebar/sidebar.tsx?");

/***/ }),

/***/ "./src/modules/programs/actions/actionTypes.ts":
/*!*****************************************************!*\
  !*** ./src/modules/programs/actions/actionTypes.ts ***!
  \*****************************************************/
/*! exports provided: PROGRAMS_WITHOUT_FILTER, LAUNCH_AND_LAND_FILTER, LAUNCH_SUCCESS_FILTER, ALL_PROGRAMS_BY_YEAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PROGRAMS_WITHOUT_FILTER\", function() { return PROGRAMS_WITHOUT_FILTER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LAUNCH_AND_LAND_FILTER\", function() { return LAUNCH_AND_LAND_FILTER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LAUNCH_SUCCESS_FILTER\", function() { return LAUNCH_SUCCESS_FILTER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_PROGRAMS_BY_YEAR\", function() { return ALL_PROGRAMS_BY_YEAR; });\n/* harmony import */ var _utils_actionHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/actionHelper */ \"./src/utils/actionHelper.ts\");\n\nvar prefix = \"programs\";\nvar PROGRAMS_WITHOUT_FILTER = {\n    GET: _utils_actionHelper__WEBPACK_IMPORTED_MODULE_0__[\"ActionHelper\"].actionTypesCreator(prefix, \"PROGRAMS_WITHOUT_FILTER\"),\n};\nvar LAUNCH_SUCCESS_FILTER = {\n    GET: _utils_actionHelper__WEBPACK_IMPORTED_MODULE_0__[\"ActionHelper\"].actionTypesCreator(prefix, \"LAUNCH_SUCCESS_FILTER\"),\n};\nvar LAUNCH_AND_LAND_FILTER = {\n    GET: _utils_actionHelper__WEBPACK_IMPORTED_MODULE_0__[\"ActionHelper\"].actionTypesCreator(prefix, \"LAUNCH_AND_LAND_FILTER\"),\n};\nvar ALL_PROGRAMS_BY_YEAR = {\n    GET: _utils_actionHelper__WEBPACK_IMPORTED_MODULE_0__[\"ActionHelper\"].actionTypesCreator(prefix, \"ALL_PROGRAMS_BY_YEAR\"),\n};\n\n\n\n//# sourceURL=webpack:///./src/modules/programs/actions/actionTypes.ts?");

/***/ }),

/***/ "./src/modules/programs/actions/actions.ts":
/*!*************************************************!*\
  !*** ./src/modules/programs/actions/actions.ts ***!
  \*************************************************/
/*! exports provided: ProgramActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProgramActions\", function() { return ProgramActions; });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./src/modules/programs/actions/actionTypes.ts\");\n\n// actions to get the list of launches initially when page is loaded without filters\nvar getProgramsData = function () {\n    return { type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"PROGRAMS_WITHOUT_FILTER\"].GET.LOADING };\n};\nvar getProgramsDataSuccess = function (data) {\n    return { type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"PROGRAMS_WITHOUT_FILTER\"].GET.SUCCESS, payload: data };\n};\nvar getProgramsDataError = function (error) {\n    return { type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"PROGRAMS_WITHOUT_FILTER\"].GET.ERROR, error: error };\n};\n// actions to get the list of all the launches for a specific year (all filter)\nvar getProgramsByYear = function (year) {\n    return { type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ALL_PROGRAMS_BY_YEAR\"].GET.LOADING, payload: year };\n};\nvar getProgramsByYearSuccess = function (data) {\n    return { type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ALL_PROGRAMS_BY_YEAR\"].GET.SUCCESS, payload: data };\n};\nvar getProgramsByYearError = function (error) {\n    return { type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ALL_PROGRAMS_BY_YEAR\"].GET.ERROR, error: error };\n};\n// actions to get the list of launches based on Launch Success Filter\nvar getProgramsBySuccessfulLaunch = function (option) {\n    return { type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"LAUNCH_SUCCESS_FILTER\"].GET.LOADING, payload: option };\n};\nvar getProgramsBySuccessfulLaunchSuccess = function (data) {\n    return { type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"LAUNCH_SUCCESS_FILTER\"].GET.SUCCESS, payload: data };\n};\nvar getProgramsBySuccessfulLaunchError = function (error) {\n    return { type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"LAUNCH_SUCCESS_FILTER\"].GET.ERROR, error: error };\n};\n// actions to get the list of launches based on Launch and Land Filter\nvar getProgramsBySuccessfulLand = function (option) {\n    return { type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"LAUNCH_AND_LAND_FILTER\"].GET.LOADING, payload: option };\n};\nvar getProgramsBySuccessfulLandSuccess = function (data) {\n    return { type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"LAUNCH_AND_LAND_FILTER\"].GET.SUCCESS, payload: data };\n};\nvar getProgramsBySuccessfulLandError = function (error) {\n    return { type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"LAUNCH_AND_LAND_FILTER\"].GET.ERROR, error: error };\n};\nvar ProgramActions = {\n    getProgramsData: getProgramsData,\n    getProgramsDataError: getProgramsDataError,\n    getProgramsDataSuccess: getProgramsDataSuccess,\n    getProgramsByYear: getProgramsByYear,\n    getProgramsByYearError: getProgramsByYearError,\n    getProgramsByYearSuccess: getProgramsByYearSuccess,\n    getProgramsBySuccessfulLaunch: getProgramsBySuccessfulLaunch,\n    getProgramsBySuccessfulLaunchError: getProgramsBySuccessfulLaunchError,\n    getProgramsBySuccessfulLaunchSuccess: getProgramsBySuccessfulLaunchSuccess,\n    getProgramsBySuccessfulLand: getProgramsBySuccessfulLand,\n    getProgramsBySuccessfulLandError: getProgramsBySuccessfulLandError,\n    getProgramsBySuccessfulLandSuccess: getProgramsBySuccessfulLandSuccess,\n};\n\n\n//# sourceURL=webpack:///./src/modules/programs/actions/actions.ts?");

/***/ }),

/***/ "./src/modules/programs/components/landingPage/landingPage.scss":
/*!**********************************************************************!*\
  !*** ./src/modules/programs/components/landingPage/landingPage.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".landing-page-div {\\n  display: flex;\\n  flex-direction: row;\\n  padding: 0px 40px\\n}\\n\\n@media screen and (max-width: 700px) {\\n  .landing-page-div {\\n    display: flex;\\n    flex-wrap: wrap;\\n    columns: 1;\\n    padding: 0px;\\n  }\\n}\\n\\n@media screen and (max-width: 1024px) {\\n  .landing-page-div {\\n    columns: 2;\\n    padding: 0px;\\n  }\\n}\\n\\n@media screen and (max-width: 1440px) {\\n  .landing-page-div {\\n    columns: 4;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/modules/programs/components/landingPage/landingPage.scss?");

/***/ }),

/***/ "./src/modules/programs/components/landingPage/landingPage.tsx":
/*!*********************************************************************!*\
  !*** ./src/modules/programs/components/landingPage/landingPage.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LandingPage; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _programsPageContent_programsPageContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../programsPageContent/programsPageContent */ \"./src/modules/programs/components/programsPageContent/programsPageContent.tsx\");\n/* harmony import */ var _landingPage_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landingPage.scss */ \"./src/modules/programs/components/landingPage/landingPage.scss\");\n/* harmony import */ var _components_organisms_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/organisms/sidebar/sidebar */ \"./src/components/organisms/sidebar/sidebar.tsx\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\nfunction LandingPage(props) {\n    return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"div\", __assign({ className: \"landing-page-div\" }, { children: [Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", { children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_components_organisms_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], __assign({}, props), void 0) }, void 0),\n            Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", { children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_programsPageContent_programsPageContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], __assign({}, props), void 0) }, void 0)] }), void 0));\n}\n\n\n//# sourceURL=webpack:///./src/modules/programs/components/landingPage/landingPage.tsx?");

/***/ }),

/***/ "./src/modules/programs/components/programsPageContent/programsPageContent.scss":
/*!**************************************************************************************!*\
  !*** ./src/modules/programs/components/programsPageContent/programsPageContent.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".programs-page-content {\\n  color: black;\\n  display: flex;\\n  flex-wrap: wrap;\\n  min-height: 100vh;\\n}\\n\\n.no-launches-div{\\n  text-align: center;\\n  margin: auto;\\n}\\n\\n.card-styles {\\n  height: auto;\\n  width: 200px;\\n  text-align: left;\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.mission-name {\\n  color: mediumpurple;\\n  font-size: 20px;\\n  height: 35px;\\n}\\n\\n.mission-details {\\n  font-weight: bold;\\n}\\n\\n.card-image {\\n  height: 100px;\\n  width: 100px;\\n}\\n\\n.image-div {\\n  background-color: lightgray;\\n  text-align: center;\\n}\\n\\n.card-content-div {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n@media screen and (max-width: 575px) {\\n  .card-styles {\\n    width: 85vw;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/modules/programs/components/programsPageContent/programsPageContent.scss?");

/***/ }),

/***/ "./src/modules/programs/components/programsPageContent/programsPageContent.tsx":
/*!*************************************************************************************!*\
  !*** ./src/modules/programs/components/programsPageContent/programsPageContent.tsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProgramsPageContent; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_atoms_card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/atoms/card/card */ \"./src/components/atoms/card/card.tsx\");\n/* harmony import */ var _components_atoms_image_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/atoms/image/image */ \"./src/components/atoms/image/image.tsx\");\n/* harmony import */ var _reducer_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducer/reducer */ \"./src/modules/programs/reducer/reducer.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _programsPageContent_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./programsPageContent.scss */ \"./src/modules/programs/components/programsPageContent/programsPageContent.scss\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\n\n\nvar initialState = [_reducer_reducer__WEBPACK_IMPORTED_MODULE_3__[\"programInitialState\"].getProgramDetailsData.programs];\nfunction ProgramsPageContent(props) {\n    var getProgramDetailsData = props.getProgramDetailsData;\n    Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n        props.getProgramsData();\n    }, [getProgramDetailsData.programs === undefined]);\n    return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", __assign({ className: \"programs-page-content\" }, { children: getProgramDetailsData.programs.length === 0 ? (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", __assign({ className: \"no-launches-div\" }, { children: \"No launches\" }), void 0)) : (getProgramDetailsData.programs !== undefined &&\n            getProgramDetailsData.programs.map(function (option, index) {\n                return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_components_atoms_card_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], __assign({ customClass: \"card-styles\" }, { children: [Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", __assign({ className: \"image-div\" }, { children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_components_atoms_image_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { src: option.links.mission_patch, alt: \"space-image\", fallBackImageSrc: option.links.mission_patch, previewImageSrc: option.links.mission_patch, customClass: \"card-image\" }, void 0) }), void 0),\n                        Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h2\", __assign({ className: \"mission-name\" }, { children: option.mission_name + \" #\" + option.flight_number }), void 0),\n                        Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(\"div\", __assign({ className: \"card-content-div\" }, { children: [Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", __assign({ className: \"mission-details\" }, { children: \"Mission Ids:\\n                  \" + (option.mission_id.length > 0 ? option.mission_id : \"none\") }), void 0),\n                                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", __assign({ className: \"mission-details\" }, { children: \"Launch Year: \" + option.launch_year }), void 0),\n                                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", __assign({ className: \"mission-details\" }, { children: \"Successful Launch:\\n                  \" + option.launch_success }), void 0),\n                                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"p\", __assign({ className: \"mission-details\" }, { children: \" Successful Landing:\\n                  \" + (option.rocket.first_stage.cores[0].land_success !==\n                                        undefined\n                                        ? option.rocket.first_stage.cores[0].land_success\n                                        : false) }), void 0)] }), void 0)] }), option + \"-\" + index));\n            })) }), void 0));\n}\n\n\n//# sourceURL=webpack:///./src/modules/programs/components/programsPageContent/programsPageContent.tsx?");

/***/ }),

/***/ "./src/modules/programs/index.tsx":
/*!****************************************!*\
  !*** ./src/modules/programs/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/actions */ \"./src/modules/programs/actions/actions.ts\");\n/* harmony import */ var _components_landingPage_landingPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/landingPage/landingPage */ \"./src/modules/programs/components/landingPage/landingPage.tsx\");\n/* harmony import */ var _selectors_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors/selectors */ \"./src/modules/programs/selectors/selectors.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\n\n\nfunction ProgramsPage(props) {\n    return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_components_landingPage_landingPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], __assign({}, props), void 0);\n}\nvar mapStateToProps = function (state) {\n    return {\n        getProgramDetailsData: _selectors_selectors__WEBPACK_IMPORTED_MODULE_5__[\"ProgramSelectors\"].selectProgramsData(state),\n    };\n};\nvar mapDispatchToProps = function (dispatch) {\n    return __assign({}, Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"bindActionCreators\"])(_actions_actions__WEBPACK_IMPORTED_MODULE_3__[\"ProgramActions\"], dispatch));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(ProgramsPage));\n\n\n//# sourceURL=webpack:///./src/modules/programs/index.tsx?");

/***/ }),

/***/ "./src/modules/programs/reducer/reducer.ts":
/*!*************************************************!*\
  !*** ./src/modules/programs/reducer/reducer.ts ***!
  \*************************************************/
/*! exports provided: programInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"programInitialState\", function() { return programInitialState; });\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ \"./src/modules/programs/actions/actionTypes.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nvar programInitialState = {\n    getProgramDetailsData: {\n        programs: [],\n    },\n    error: {\n        getProgramDetails: \"\",\n    },\n    loading: {\n        getProgramDetails: false,\n    },\n};\nvar programReducer = function (state, action) {\n    if (state === void 0) { state = programInitialState; }\n    switch (action.type) {\n        // programs without filter\n        case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"PROGRAMS_WITHOUT_FILTER\"].GET.LOADING:\n            return __assign(__assign({}, state), { loading: __assign(__assign({}, state.loading), { getProgramDetails: true }), error: __assign(__assign({}, state.error), { getProgramDetails: null }) });\n        case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"PROGRAMS_WITHOUT_FILTER\"].GET.SUCCESS:\n            return __assign(__assign({}, state), { loading: __assign(__assign({}, state.loading), { getProgramDetails: false }), getProgramDetailsData: action.payload });\n        case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"PROGRAMS_WITHOUT_FILTER\"].GET.ERROR:\n            return __assign(__assign({}, state), { loading: __assign(__assign({}, state.loading), { getProgramDetails: false }), error: __assign({}, state.error) });\n        // programs with all filter\n        case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ALL_PROGRAMS_BY_YEAR\"].GET.LOADING:\n            return __assign(__assign({}, state), { loading: __assign(__assign({}, state.loading), { getProgramDetails: true }), error: __assign(__assign({}, state.error), { getProgramDetails: null }) });\n        case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ALL_PROGRAMS_BY_YEAR\"].GET.SUCCESS:\n            return __assign(__assign({}, state), { loading: __assign(__assign({}, state.loading), { getProgramDetails: false }), getProgramDetailsData: action.payload });\n        case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ALL_PROGRAMS_BY_YEAR\"].GET.ERROR:\n            return __assign(__assign({}, state), { loading: __assign(__assign({}, state.loading), { getProgramDetails: false }), error: __assign({}, state.error) });\n        // programs with launch_success filter\n        case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"LAUNCH_SUCCESS_FILTER\"].GET.LOADING:\n            return __assign(__assign({}, state), { loading: __assign(__assign({}, state.loading), { getProgramDetails: true }), error: __assign(__assign({}, state.error), { getProgramDetails: null }) });\n        case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"LAUNCH_SUCCESS_FILTER\"].GET.SUCCESS:\n            return __assign(__assign({}, state), { loading: __assign(__assign({}, state.loading), { getProgramDetails: false }), getProgramDetailsData: action.payload });\n        case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"LAUNCH_SUCCESS_FILTER\"].GET.ERROR:\n            return __assign(__assign({}, state), { loading: __assign(__assign({}, state.loading), { getProgramDetails: false }), error: __assign({}, state.error) });\n        //programs with land_success filter\n        case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"LAUNCH_AND_LAND_FILTER\"].GET.LOADING:\n            return __assign(__assign({}, state), { loading: __assign(__assign({}, state.loading), { getProgramDetails: true }), error: __assign(__assign({}, state.error), { getProgramDetails: null }) });\n        case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"LAUNCH_AND_LAND_FILTER\"].GET.SUCCESS:\n            return __assign(__assign({}, state), { loading: __assign(__assign({}, state.loading), { getProgramDetails: false }), getProgramDetailsData: action.payload });\n        case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"LAUNCH_AND_LAND_FILTER\"].GET.ERROR:\n            return __assign(__assign({}, state), { loading: __assign(__assign({}, state.loading), { getProgramDetails: false }), error: __assign({}, state.error) });\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (programReducer);\n\n\n//# sourceURL=webpack:///./src/modules/programs/reducer/reducer.ts?");

/***/ }),

/***/ "./src/modules/programs/selectors/selectors.ts":
/*!*****************************************************!*\
  !*** ./src/modules/programs/selectors/selectors.ts ***!
  \*****************************************************/
/*! exports provided: ProgramSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProgramSelectors\", function() { return ProgramSelectors; });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n\nvar programSelect = function (state) { return state.program; };\nvar selectProgramsData = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(programSelect, function (program) { return program.getProgramDetailsData; });\nvar ProgramSelectors = { selectProgramsData: selectProgramsData };\n\n\n//# sourceURL=webpack:///./src/modules/programs/selectors/selectors.ts?");

/***/ }),

/***/ "./src/utils/actionHelper.ts":
/*!***********************************!*\
  !*** ./src/utils/actionHelper.ts ***!
  \***********************************/
/*! exports provided: ActionHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionHelper\", function() { return ActionHelper; });\nvar actionTypesCreator = function (prefix, actionType) {\n    var types = [\"LOADING\", \"SUCCESS\", \"ERROR\"];\n    var data = {\n        LOADING: \"\",\n        SUCCESS: \"\",\n        ERROR: \"\"\n    };\n    types.map(function (type) {\n        var _a;\n        var completeActionType = prefix + \"/\" + actionType + \"_\" + type;\n        Object.assign(data, (_a = {},\n            _a[type] = completeActionType,\n            _a));\n    });\n    return data;\n};\nvar ActionHelper = { actionTypesCreator: actionTypesCreator };\n\n\n//# sourceURL=webpack:///./src/utils/actionHelper.ts?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-runtime\");\n\n//# sourceURL=webpack:///external_%22react/jsx-runtime%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reselect\");\n\n//# sourceURL=webpack:///external_%22reselect%22?");

/***/ })

/******/ });