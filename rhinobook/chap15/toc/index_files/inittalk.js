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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/deparam.js":
/*!************************!*\
  !*** ./src/deparam.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.deparam = deparam;\nexports.param = param;\nfunction deparam(query) {\n  var match = void 0;\n  var plus = /\\+/g;\n  var search = /([^&=]+)=?([^&]*)/g;\n  var decode = function decode(s) {\n    return decodeURIComponent(s.replace(plus, ' '));\n  };\n  var params = {};\n  while (match = search.exec(query)) {\n    params[decode(match[1])] = decode(match[2]);\n  }\n  return params;\n}\n\nfunction param(obj) {\n  var parts = [];\n  for (var name in obj) {\n    if (obj.hasOwnProperty(name) && obj[name]) {\n      parts.push(encodeURIComponent(name) + '=' + encodeURIComponent(obj[name]));\n    }\n  }\n  return parts.join('&');\n}\n\n//# sourceURL=webpack:///./src/deparam.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _install = __webpack_require__(/*! ./install */ \"./src/install.js\");\n\nif (!window.$docsify) {\n  window.$docsify = {};\n} /*\n   * @Descripttion:\n   * @version:\n   * @Author: irene.wang\n   * @Date: 2021-11-01 17:35:19\n   * @LastEditors: irene.wang\n   * @LastEditTime: 2021-11-01 17:35:19\n   */\n\n\nwindow.$docsify.plugins = (window.$docsify.plugins || []).concat(_install.install);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/install.js":
/*!************************!*\
  !*** ./src/install.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.install = install;\n\nvar _deparam = __webpack_require__(/*! ./deparam */ \"./src/deparam.js\");\n\nvar _preferredTheme = __webpack_require__(/*! ./preferred-theme */ \"./src/preferred-theme.js\");\n\n/*\n * @Descripttion:\n * @version:\n * @Author: irene.wang\n * @Date: 2021-11-05 17:28:54\n * @LastEditors: irene.wang\n * @LastEditTime: 2022-02-28 13:17:55\n */\nvar CONTAINER_CLASSNAME = 'ucloudtalk';\n\nvar params = (0, _deparam.deparam)(location.search.substr(1));\nvar session = params.ucloudtalk;\nif (session) {\n  localStorage.setItem(CONTAINER_CLASSNAME, session);\n  delete params.CONTAINER_CLASSNAME;\n  var search = (0, _deparam.param)(params);\n  if (search.length) {\n    search = '?' + search;\n  }\n  history.replaceState(undefined, document.title, location.pathname + search + location.hash);\n}\n\nvar template = {\n  container: function container() {\n    return '<div class=\"ucloudtalk_wrap\" id=\"' + CONTAINER_CLASSNAME + '\"></div>';\n  }\n};\n\nvar attrs = {};\nattrs.theme = _preferredTheme.preferredTheme;\nattrs.origin = window.location.origin;\nattrs.session = localStorage.getItem(CONTAINER_CLASSNAME);\nvar ucloudtalk = attrs.origin.match(/^https:\\/\\/docs\\.ucloud\\.cn|http:\\/\\/localhost:\\d+|http:\\/\\/campus\\.irene\\.frontend\\.ucloudadmin\\.com+|https:\\/\\/cms-docs\\.ucloudadmin\\.com/)[0];\n\nvar url = ucloudtalk + '/ucloud-talk/ucloudtalk.html';\n\nfunction linsenMessage(event) {\n  if (event.origin !== ucloudtalk) {\n    return;\n  }\n  var data = event.data;\n  if (data && data.type === 'resize' && data.height) {\n    var container = document.getElementById('' + CONTAINER_CLASSNAME);\n    container.style.height = data.height + 'px';\n  }\n}\n\nfunction install(hook, vm) {\n  hook.afterEach(function (html) {\n    return html + template.container();\n  });\n\n  hook.doneEach(function () {\n    var vmRouter = vm.route.file.split('/');\n    if (vmRouter[1] === 'home.md' || vmRouter[1] === 'api.md' || vmRouter[1] === 'tools.md') return '';\n    var container = document.getElementById('' + CONTAINER_CLASSNAME);\n    var canonicalLink = document.querySelector('link[rel=\\'canonical\\']');\n    attrs.url = canonicalLink ? canonicalLink.href : location.origin + location.pathname;\n    attrs['issue-term'] = document.title;\n    attrs.repo = 'UCloudDoc-Team/' + vmRouter[1];\n    attrs.pathname = window.location.pathname.length < 2 ? 'index' : window.location.pathname.substr(1).replace(/\\.\\w+$/, '');\n    attrs.title = document.title;\n    // let descriptionMeta = document.querySelector(\"meta[name='description']\")\n    attrs.description = '查看产品文档请点击下方链接';\n    // let len = encodeURIComponent(attrs.description).length\n    // if (len > 1000) {\n    //   attrs.description = attrs.description.substr(0, Math.floor((attrs.description.length * 1000) / len))\n    // }\n    var ifameString = ' <div class=\"ucloudtalk\">\\n    <iframe class=\"ucloudtalk-frame\" title=\"Comments\" scrolling=\"no\" src=\"' + url + '?' + (0, _deparam.param)(attrs) + '\" loading=\"lazy\"></iframe>\\n  </div>';\n    container.innerHTML = ifameString;\n    addEventListener('message', linsenMessage);\n  });\n}\n\n//# sourceURL=webpack:///./src/install.js?");

/***/ }),

/***/ "./src/preferred-theme.js":
/*!********************************!*\
  !*** ./src/preferred-theme.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar preferredTheme = exports.preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'github-dark' : 'github-light';\n\nvar preferredThemeId = exports.preferredThemeId = 'preferred-color-scheme';\n\n//# sourceURL=webpack:///./src/preferred-theme.js?");

/***/ })

/******/ });