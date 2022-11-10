"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklist"] = self["webpackChunklist"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: #f1f2f5;\\r\\n  margin: 0;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\nmain {\\r\\n  margin: 15em auto;\\r\\n  background-color: white;\\r\\n  height: 100%;\\r\\n  width: 20em;\\r\\n  box-shadow: 2px 2px 4px 2px #80808080;\\r\\n}\\r\\n\\r\\ni {\\r\\n  cursor: pointer;\\r\\n  color: rgb(207, 199, 199);\\r\\n}\\r\\n\\r\\n.to-do-list {\\r\\n  display: flex;\\r\\n  flex-flow: column;\\r\\n  list-style-type: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  background-color: #fff;\\r\\n  box-shadow: 2px 2px 4px 2px rgba(128, 128, 128, 0.5);\\r\\n}\\r\\n\\r\\n.to-do-list > * {\\r\\n  display: flex;\\r\\n  border-bottom: 1px solid rgb(248, 247, 247);\\r\\n  flex: 1;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.title h3 {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n#form {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#form input {\\r\\n  border: 1px hidden;\\r\\n  flex-basis: 90%;\\r\\n  outline: none;\\r\\n  font-size: 1rem;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n#form input[placeholder] {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n#form button {\\r\\n  \\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    border: none;\\r\\n    background-color: rgb(240, 238, 238);\\r\\n    cursor: pointer;\\r\\n    padding: 1em;\\r\\n    color: rgb(168, 166, 166);\\r\\n    font-weight: lighter;\\r\\n  }\\r\\n\\r\\n\\r\\n#form i {\\r\\n  transform: rotate(0.5turn);\\r\\n}\\r\\n\\r\\n.task-list {\\r\\n  display: none;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.allTodos {\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.todo {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  border-bottom: 1px solid rgb(248, 247, 247);\\r\\n  flex: 1;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.todo div {\\r\\n  flex-basis: 90%;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  align-items: center;\\r\\n  gap: 0.5rem;\\r\\n}\\r\\n\\r\\n.todo p {\\r\\n  flex-basis: 95%;\\r\\n  margin: 0;\\r\\n  color: #000;\\r\\n  font-size: 1.2rem;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n\\r\\n.fa-trash,\\r\\n.fa-ellipsis-v {\\r\\n  color: #000;\\r\\n  font-size: 24px;\\r\\n}\\r\\n\\r\\n#checkbox {\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n}\\r\\n\\r\\n\\r\\n#clear {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  border: none;\\r\\n  background-color: rgb(240, 238, 238);\\r\\n  cursor: pointer;\\r\\n  padding: 1em;\\r\\n  color: rgb(110, 110, 110);\\r\\n  font-weight: lighter;\\r\\n  font-size: 0.5em;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_populatetask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/populatetask.js */ \"./src/module/populatetask.js\");\n/* harmony import */ var _module_newTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/newTask.js */ \"./src/module/newTask.js\");\n/* harmony import */ var _module_removeTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/removeTask.js */ \"./src/module/removeTask.js\");\n/* harmony import */ var _module_clearCompleted_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/clearCompleted.js */ \"./src/module/clearCompleted.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst clearCompletedButton = document.getElementById('clearCompleted');\r\n\r\n(0,_module_populatetask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n_module_newTask_js__WEBPACK_IMPORTED_MODULE_1__.form.addEventListener('submit', _module_newTask_js__WEBPACK_IMPORTED_MODULE_1__.getAddedTodos);\r\n\r\ndocument.addEventListener('click', (e) => {\r\n  if (e.target.className === 'fa fa-trash') {\r\n    (0,_module_removeTask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e.target.id);\r\n  }\r\n});\r\n\r\nclearCompletedButton.addEventListener('click', _module_clearCompleted_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n\n\n//# sourceURL=webpack://list/./src/index.js?");

/***/ }),

/***/ "./src/module/clearCompleted.js":
/*!**************************************!*\
  !*** ./src/module/clearCompleted.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTask.js */ \"./src/module/displayTask.js\");\n\r\n\r\nconst clearCompleted = () => {\r\n  _displayTask_js__WEBPACK_IMPORTED_MODULE_0__.todo.clearCompleted();\r\n  (0,_displayTask_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompleted);\n\n//# sourceURL=webpack://list/./src/module/clearCompleted.js?");

/***/ }),

/***/ "./src/module/displayTask.js":
/*!***********************************!*\
  !*** ./src/module/displayTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"todo\": () => (/* binding */ todo)\n/* harmony export */ });\n/* harmony import */ var _listClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listClass.js */ \"./src/module/listClass.js\");\n\r\n\r\nconst todo = new _listClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nconst createTodo = () => {\r\n  const listSection = document.querySelector('.task-list');\r\n  listSection.replaceChildren();\r\n  if (todo.allTodos.length > 0) {\r\n    listSection.style.display = 'block';\r\n    const listContainer = document.createElement('ul');\r\n    listContainer.className = 'allTodos';\r\n    listSection.appendChild(listContainer);\r\n    todo.allTodos.map((a) => {\r\n      const list = document.createElement('li');\r\n      list.className = 'todo';\r\n\r\n      const descrptContainer = document.createElement('div');\r\n      const checkbox = document.createElement('input');\r\n      checkbox.type = 'checkbox';\r\n      checkbox.id = 'checkbox';\r\n      if (a.completed === true) {\r\n        checkbox.checked = 'checked';\r\n      }\r\n\r\n      checkbox.onclick = (e) => {\r\n        todo.completedTodo(e.target.checked, a.index);\r\n      };\r\n\r\n      descrptContainer.appendChild(checkbox);\r\n\r\n      const descrpt = document.createElement('p');\r\n      descrpt.id = 'task-description';\r\n      descrpt.textContent = a.description;\r\n      descrptContainer.appendChild(descrpt);\r\n      list.appendChild(descrptContainer);\r\n\r\n      const dragIcon = document.createElement('i');\r\n      dragIcon.className = 'fa fa-ellipsis-v';\r\n      list.appendChild(dragIcon);\r\n\r\n      const deleteIcon = document.createElement('i');\r\n      deleteIcon.className = 'fa fa-trash';\r\n      deleteIcon.id = a.index;\r\n\r\n      list.onclick = () => {\r\n        descrpt.contentEditable = 'true';\r\n        list.style.backgroundColor = '#80808080';\r\n        descrpt.style.color = '#fff';\r\n        list.appendChild(deleteIcon);\r\n        dragIcon.style.display = 'none';\r\n      };\r\n\r\n      descrpt.addEventListener('keyup', (e) => {\r\n        if (e.target.id === 'task-description') {\r\n          if (e.key === 'Enter') {\r\n            createTodo();\r\n          } else {\r\n            todo.editTodo(e.target, a.index);\r\n          }\r\n        }\r\n      });\r\n\r\n      listContainer.append(list);\r\n      return list;\r\n    });\r\n    listSection.appendChild(listContainer);\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://list/./src/module/displayTask.js?");

/***/ }),

/***/ "./src/module/listClass.js":
/*!*********************************!*\
  !*** ./src/module/listClass.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\nclass TodoList {\r\n  allTodos = [];\r\n\r\n  saveTodo() {\r\n    const todos = JSON.stringify(this.allTodos);\r\n    localStorage.setItem('todos', todos);\r\n  }\r\n\r\n  addTodo(description) {\r\n    const todo = {\r\n      description,\r\n      completed: false,\r\n      index: this.allTodos.length + 1,\r\n    };\r\n    this.allTodos.push(todo);\r\n    this.saveTodo();\r\n  }\r\n\r\n  deleteTodo(index) {\r\n    this.allTodos.splice(index - 1, 1);\r\n    this.updateIndex();\r\n    this.saveTodo();\r\n  }\r\n\r\n  getStoredTodos() {\r\n    this.allTodos = JSON.parse(\r\n      localStorage.getItem('todos'),\r\n    );\r\n  }\r\n\r\n  editTodo(paragraph, index) {\r\n    this.allTodos[index - 1].description = paragraph.textContent;\r\n    this.saveTodo();\r\n  }\r\n\r\n  completedTodo(status, index) {\r\n    this.allTodos[index - 1].completed = status;\r\n    this.saveTodo();\r\n  }\r\n\r\n  clearCompleted() {\r\n    this.allTodos = this.allTodos.filter(\r\n      (b) => b.completed === false,\r\n    );\r\n    this.updateIndex();\r\n    this.saveTodo();\r\n  }\r\n\r\n  clearAll() {\r\n    this.allTodos.splice(0, this.allTodos.length);\r\n    this.saveTodo();\r\n  }\r\n\r\n  updateIndex() {\r\n    this.allTodos.map((a) => {\r\n      a.index = this.allTodos.indexOf(a) + 1;\r\n      return a;\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://list/./src/module/listClass.js?");

/***/ }),

/***/ "./src/module/newTask.js":
/*!*******************************!*\
  !*** ./src/module/newTask.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"getAddedTodos\": () => (/* binding */ getAddedTodos)\n/* harmony export */ });\n/* harmony import */ var _displayTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTask.js */ \"./src/module/displayTask.js\");\n\r\n\r\nconst form = document.getElementById('form');\r\n\r\nconst getAddedTodos = () => {\r\n  const newTodo = document.getElementById('newToDo');\r\n  const description = newTodo.value;\r\n  if (description !== '') {\r\n    _displayTask_js__WEBPACK_IMPORTED_MODULE_0__.todo.addTodo(description);\r\n    (0,_displayTask_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)();\r\n    newTodo.value = '';\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://list/./src/module/newTask.js?");

/***/ }),

/***/ "./src/module/populatetask.js":
/*!************************************!*\
  !*** ./src/module/populatetask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTask.js */ \"./src/module/displayTask.js\");\n\r\n\r\nconst populate = () => {\r\n  if (localStorage.getItem('todos')) {\r\n    _displayTask_js__WEBPACK_IMPORTED_MODULE_0__.todo.getStoredTodos();\r\n    (0,_displayTask_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)();\r\n  } else {\r\n    (0,_displayTask_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)();\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populate);\n\n//# sourceURL=webpack://list/./src/module/populatetask.js?");

/***/ }),

/***/ "./src/module/removeTask.js":
/*!**********************************!*\
  !*** ./src/module/removeTask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTask.js */ \"./src/module/displayTask.js\");\n\r\n\r\nconst deleteTask = (index) => {\r\n  _displayTask_js__WEBPACK_IMPORTED_MODULE_0__.todo.deleteTodo(index);\r\n  _displayTask_js__WEBPACK_IMPORTED_MODULE_0__.todo.saveTodo();\r\n  (0,_displayTask_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTask);\n\n//# sourceURL=webpack://list/./src/module/removeTask.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);