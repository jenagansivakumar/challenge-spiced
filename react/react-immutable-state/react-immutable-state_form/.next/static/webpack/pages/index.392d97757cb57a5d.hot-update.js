"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Form/index.js":
/*!**********************************!*\
  !*** ./components/Form/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Form_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form.styled */ \"./components/Form/Form.styled.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Form() {\n    _s();\n    const [mountain, setMountain] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"Mount Everest\",\n        values: {\n            altitude: 8848,\n            mountainRange: \"Himalayas\"\n        }\n    });\n    function handleNameChange(event) {\n        setMountainName({\n            ...mountain,\n            name: event.target.value\n        });\n    }\n    function handleAltitudeChange(event) {}\n    function handleMountainRangeChange(event) {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_styled__WEBPACK_IMPORTED_MODULE_2__.StyledForm, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_styled__WEBPACK_IMPORTED_MODULE_2__.StyledInputContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Name:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/react/react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"name\",\n                        value: mountain.name,\n                        onChange: handleNameChange\n                    }, void 0, false, {\n                        fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/react/react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/react/react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_styled__WEBPACK_IMPORTED_MODULE_2__.StyledInputContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"altitude\",\n                        children: \"Altitude:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/react/react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"altitude\",\n                        value: mountain.values.altitude,\n                        onChange: handleAltitudeChange\n                    }, void 0, false, {\n                        fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/react/react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/react/react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_styled__WEBPACK_IMPORTED_MODULE_2__.StyledInputContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"mountainRange\",\n                        children: \"Mountain Range:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/react/react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"mountainRange\",\n                        value: mountain.values.mountainRange,\n                        onChange: handleMountainRangeChange\n                    }, void 0, false, {\n                        fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/react/react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/react/react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"output\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        children: mountain.name\n                    }, void 0, false, {\n                        fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/react/react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    \" is \",\n                    mountain.values.altitude,\n                    \" meters high\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/react/react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    \"(and located in the \",\n                    mountain.values.mountainRange,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/react/react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenagansivakumar/Desktop/spiced-bootcamp/challenge-spiced/react/react-immutable-state/react-immutable-state_form/components/Form/index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"oBmhgv1UcnflRJC1Ig3CVrlME8Q=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQWlDO0FBQ2dDO0FBRWxELFNBQVNHLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUN2Q00sTUFBTTtRQUNOQyxRQUFRO1lBQ05DLFVBQVU7WUFDVkMsZUFBZTtRQUNqQjtJQUNGO0lBRUEsU0FBU0MsaUJBQWlCQyxLQUFLLEVBQUU7UUFDL0JDLGdCQUFnQjtZQUFFLEdBQUdSLFFBQVE7WUFBRUUsTUFBTUssTUFBTUUsTUFBTSxDQUFDQyxLQUFLO1FBQUM7SUFDMUQ7SUFFQSxTQUFTQyxxQkFBcUJKLEtBQUssRUFBRSxDQUFDO0lBRXRDLFNBQVNLLDBCQUEwQkwsS0FBSyxFQUFFLENBQUM7SUFFM0MscUJBQ0UsOERBQUNWLG9EQUFVQTs7MEJBQ1QsOERBQUNDLDhEQUFvQkE7O2tDQUNuQiw4REFBQ2U7d0JBQU1DLFNBQVE7a0NBQU87Ozs7OztrQ0FDdEIsOERBQUNDO3dCQUFNQyxJQUFHO3dCQUFPTixPQUFPVixTQUFTRSxJQUFJO3dCQUFFZSxVQUFVWDs7Ozs7Ozs7Ozs7OzBCQUVuRCw4REFBQ1IsOERBQW9CQTs7a0NBQ25CLDhEQUFDZTt3QkFBTUMsU0FBUTtrQ0FBVzs7Ozs7O2tDQUMxQiw4REFBQ0M7d0JBQ0NDLElBQUc7d0JBQ0hOLE9BQU9WLFNBQVNHLE1BQU0sQ0FBQ0MsUUFBUTt3QkFDL0JhLFVBQVVOOzs7Ozs7Ozs7Ozs7MEJBR2QsOERBQUNiLDhEQUFvQkE7O2tDQUNuQiw4REFBQ2U7d0JBQU1DLFNBQVE7a0NBQWdCOzs7Ozs7a0NBQy9CLDhEQUFDQzt3QkFDQ0MsSUFBRzt3QkFDSE4sT0FBT1YsU0FBU0csTUFBTSxDQUFDRSxhQUFhO3dCQUNwQ1ksVUFBVUw7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ007O2tDQUNDLDhEQUFDQztrQ0FBR25CLFNBQVNFLElBQUk7Ozs7OztvQkFDaEI7b0JBQ0FGLFNBQVNHLE1BQU0sQ0FBQ0MsUUFBUTtvQkFDeEI7a0NBQ0QsOERBQUNnQjs7Ozs7b0JBQUs7b0JBQ2VwQixTQUFTRyxNQUFNLENBQUNFLGFBQWE7b0JBQUM7Ozs7Ozs7Ozs7Ozs7QUFJM0QsQ0FBQztHQWpEdUJOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS9pbmRleC5qcz82YzFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdHlsZWRGb3JtLCBTdHlsZWRJbnB1dENvbnRhaW5lciB9IGZyb20gXCIuL0Zvcm0uc3R5bGVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oKSB7XG4gIGNvbnN0IFttb3VudGFpbiwgc2V0TW91bnRhaW5dID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiTW91bnQgRXZlcmVzdFwiLFxuICAgIHZhbHVlczoge1xuICAgICAgYWx0aXR1ZGU6IDg4NDgsXG4gICAgICBtb3VudGFpblJhbmdlOiBcIkhpbWFsYXlhc1wiLFxuICAgIH0sXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZU5hbWVDaGFuZ2UoZXZlbnQpIHtcbiAgICBzZXRNb3VudGFpbk5hbWUoeyAuLi5tb3VudGFpbiwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQWx0aXR1ZGVDaGFuZ2UoZXZlbnQpIHt9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTW91bnRhaW5SYW5nZUNoYW5nZShldmVudCkge31cblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRGb3JtPlxuICAgICAgPFN0eWxlZElucHV0Q29udGFpbmVyPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiB2YWx1ZT17bW91bnRhaW4ubmFtZX0gb25DaGFuZ2U9e2hhbmRsZU5hbWVDaGFuZ2V9IC8+XG4gICAgICA8L1N0eWxlZElucHV0Q29udGFpbmVyPlxuICAgICAgPFN0eWxlZElucHV0Q29udGFpbmVyPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFsdGl0dWRlXCI+QWx0aXR1ZGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJhbHRpdHVkZVwiXG4gICAgICAgICAgdmFsdWU9e21vdW50YWluLnZhbHVlcy5hbHRpdHVkZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQWx0aXR1ZGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L1N0eWxlZElucHV0Q29udGFpbmVyPlxuICAgICAgPFN0eWxlZElucHV0Q29udGFpbmVyPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1vdW50YWluUmFuZ2VcIj5Nb3VudGFpbiBSYW5nZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cIm1vdW50YWluUmFuZ2VcIlxuICAgICAgICAgIHZhbHVlPXttb3VudGFpbi52YWx1ZXMubW91bnRhaW5SYW5nZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTW91bnRhaW5SYW5nZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvU3R5bGVkSW5wdXRDb250YWluZXI+XG4gICAgICA8b3V0cHV0PlxuICAgICAgICA8aT57bW91bnRhaW4ubmFtZX08L2k+XG4gICAgICAgIHtcIiBpcyBcIn1cbiAgICAgICAge21vdW50YWluLnZhbHVlcy5hbHRpdHVkZX1cbiAgICAgICAge1wiIG1ldGVycyBoaWdoXCJ9XG4gICAgICAgIDxiciAvPlxuICAgICAgICAoYW5kIGxvY2F0ZWQgaW4gdGhlIHttb3VudGFpbi52YWx1ZXMubW91bnRhaW5SYW5nZX0pXG4gICAgICA8L291dHB1dD5cbiAgICA8L1N0eWxlZEZvcm0+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTdHlsZWRGb3JtIiwiU3R5bGVkSW5wdXRDb250YWluZXIiLCJGb3JtIiwibW91bnRhaW4iLCJzZXRNb3VudGFpbiIsIm5hbWUiLCJ2YWx1ZXMiLCJhbHRpdHVkZSIsIm1vdW50YWluUmFuZ2UiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiZXZlbnQiLCJzZXRNb3VudGFpbk5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUFsdGl0dWRlQ2hhbmdlIiwiaGFuZGxlTW91bnRhaW5SYW5nZUNoYW5nZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJvbkNoYW5nZSIsIm91dHB1dCIsImkiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Form/index.js\n"));

/***/ })

});