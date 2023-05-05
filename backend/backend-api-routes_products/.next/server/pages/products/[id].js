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
exports.id = "pages/products/[id]";
exports.ids = ["pages/products/[id]"];
exports.modules = {

/***/ "./pages/products/[id].js":
/*!********************************!*\
  !*** ./pages/products/[id].js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductsPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst fetcher = (...args)=>fetch(...args).then((res)=>res.json());\nfunction ProductsPage() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`/api/products/${id}`, fetcher);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \" Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/backend/backend-api-routes_products/pages/products/[id].js\",\n            lineNumber: 12,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        console.error(error);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Something went wrong \"\n        }, void 0, false, {\n            fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/backend/backend-api-routes_products/pages/products/[id].js\",\n            lineNumber: 17,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \" \",\n                    data.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/backend/backend-api-routes_products/pages/products/[id].js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data.description\n            }, void 0, false, {\n                fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/backend/backend-api-routes_products/pages/products/[id].js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ2U7QUFFeEMsTUFBTUUsVUFBVSxDQUFDLEdBQUdDLE9BQVNDLFNBQVNELE1BQU1FLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0FBRW5ELFNBQVNDLGVBQWU7SUFDckMsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVMsR0FBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDM0IsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHYiwrQ0FBTUEsQ0FBQyxDQUFDLGNBQWMsRUFBRVUsR0FBRyxDQUFDLEVBQUVSO0lBRXRELElBQUksQ0FBQ1UsTUFBTTtRQUNULHFCQUFPLDhEQUFDRTtzQkFBRzs7Ozs7O0lBQ2IsQ0FBQztJQUVELElBQUlELE9BQU87UUFDVEUsUUFBUUYsS0FBSyxDQUFDQTtRQUNkLHFCQUFPLDhEQUFDQztzQkFBRzs7Ozs7O0lBQ2IsQ0FBQztJQUVELHFCQUNFOzswQkFDRSw4REFBQ0E7O29CQUFHO29CQUFFRixLQUFLSSxJQUFJOzs7Ozs7OzBCQUNmLDhEQUFDQzswQkFBR0wsS0FBS00sV0FBVzs7Ozs7Ozs7QUFHMUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2tlbmQtYXBpLXJvdXRlc19wcm9kdWN0cy8uL3BhZ2VzL3Byb2R1Y3RzL1tpZF0uanM/OThiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzUGFnZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGAvYXBpL3Byb2R1Y3RzLyR7aWR9YCwgZmV0Y2hlcik7XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxoMT4gTG9hZGluZy4uLjwvaDE+O1xuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIDxoMT5Tb21ldGhpbmcgd2VudCB3cm9uZyA8L2gxPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT4ge2RhdGEubmFtZX08L2gxPlxuICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNXUiIsInVzZVJvdXRlciIsImZldGNoZXIiLCJhcmdzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIlByb2R1Y3RzUGFnZSIsInJvdXRlciIsImlkIiwicXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJoMSIsImNvbnNvbGUiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/products/[id].js"));
module.exports = __webpack_exports__;

})();