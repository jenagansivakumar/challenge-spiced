"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/products";
exports.ids = ["pages/products"];
exports.modules = {

/***/ "./pages/products/index.js":
/*!*********************************!*\
  !*** ./pages/products/index.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductsPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst fetcher = (...args)=>fetch(...args).then((res)=>res.json());\nfunction ProductsPage() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/api/products\", fetcher);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \" Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/backend/backend-api-routes_products/pages/products/index.js\",\n            lineNumber: 9,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        console.error(error);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Something went wrong \"\n        }, void 0, false, {\n            fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/backend/backend-api-routes_products/pages/products/index.js\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"All products\"\n            }, void 0, false, {\n                fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/backend/backend-api-routes_products/pages/products/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: data.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \" \",\n                            product.name\n                        ]\n                    }, product.id, true, {\n                        fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/backend/backend-api-routes_products/pages/products/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/backend/backend-api-routes_products/pages/products/index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFFekIsTUFBTUMsVUFBVSxDQUFDLEdBQUdDLE9BQVNDLFNBQVNELE1BQU1FLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0FBRW5ELFNBQVNDLGVBQWU7SUFDckMsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHVCwrQ0FBTUEsQ0FBQyxpQkFBaUJDO0lBRWhELElBQUksQ0FBQ08sTUFBTTtRQUNULHFCQUFPLDhEQUFDRTtzQkFBRzs7Ozs7O0lBQ2IsQ0FBQztJQUVELElBQUlELE9BQU87UUFDVEUsUUFBUUYsS0FBSyxDQUFDQTtRQUNkLHFCQUFPLDhEQUFDQztzQkFBRzs7Ozs7O0lBQ2IsQ0FBQztJQUNELHFCQUNFOzswQkFDRSw4REFBQ0E7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0U7MEJBQ0VKLEtBQUtLLEdBQUcsQ0FBQyxDQUFDQyx3QkFDVCw4REFBQ0M7OzRCQUFvQjs0QkFBRUQsUUFBUUUsSUFBSTs7dUJBQTFCRixRQUFRRyxFQUFFOzs7Ozs7Ozs7Ozs7QUFLN0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2tlbmQtYXBpLXJvdXRlc19wcm9kdWN0cy8uL3BhZ2VzL3Byb2R1Y3RzL2luZGV4LmpzP2EyZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNQYWdlKCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXCIvYXBpL3Byb2R1Y3RzXCIsIGZldGNoZXIpO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiA8aDE+IExvYWRpbmcuLi48L2gxPjtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiA8aDE+U29tZXRoaW5nIHdlbnQgd3JvbmcgPC9oMT47XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPkFsbCBwcm9kdWN0czwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtkYXRhLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Byb2R1Y3QuaWR9PiB7cHJvZHVjdC5uYW1lfTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJmZXRjaGVyIiwiYXJncyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJQcm9kdWN0c1BhZ2UiLCJkYXRhIiwiZXJyb3IiLCJoMSIsImNvbnNvbGUiLCJ1bCIsIm1hcCIsInByb2R1Y3QiLCJsaSIsIm5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/products/index.js"));
module.exports = __webpack_exports__;

})();