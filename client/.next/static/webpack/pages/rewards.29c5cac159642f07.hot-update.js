"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/rewards",{

/***/ "./src/components/molecules/SlideoutModal.tsx":
/*!****************************************************!*\
  !*** ./src/components/molecules/SlideoutModal.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _atoms_Overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/Overlay */ \"./src/components/atoms/Overlay.tsx\");\n/* harmony import */ var _organism_RewardForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../organism/RewardForm */ \"./src/components/organism/RewardForm.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/us-guest/Desktop/git_projects/orbitt-next/client/src/components/molecules/SlideoutModal.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar OverlayContent = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"SlideoutModal__OverlayContent\",\n  componentId: \"sc-en7ipe-0\"\n})([\"position:absolute;display:flex;z-index:100;\"]);\n\nvar SlideoutModal = function SlideoutModal(_ref) {\n  var onClose = _ref.onClose;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_atoms_Overlay__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n      onClick: onClose,\n      children: \"Close\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_organism_RewardForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = SlideoutModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SlideoutModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"SlideoutModal\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU2xpZGVvdXRNb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTs7QUFFQSxJQUFNSSxjQUFjLEdBQUdILDZEQUFIO0VBQUE7RUFBQTtBQUFBLG1EQUFwQjs7QUFNQSxJQUFNSyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQTBDO0VBQUEsSUFBdkNDLE9BQXVDLFFBQXZDQSxPQUF1QztFQUM1RCxvQkFDSTtJQUFBLHdCQUNBLDhEQUFDLHNEQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FEQSxlQUVBO01BQVEsT0FBTyxFQUFFQSxPQUFqQjtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUZBLGVBR0EsOERBQUMsNERBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUhBO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURKO0FBT0QsQ0FSSDs7S0FBTUQ7QUFVTiwrREFBZUEsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU2xpZGVvdXRNb2RhbC50c3g/MDczNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcywgUmVhY3ROb2RlLCBQcm9wc1dpdGhDaGlsZHJlbiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL0NvbG9ycyc7XG5pbXBvcnQgU3R5bGVkTWVkaWFRdWVyeSBmcm9tICcuLi8uLi9jb25zdGFudHMvU3R5bGVkTWVkaWFRdWVyeSc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuLi9hdG9tcy9PdmVybGF5JztcbmltcG9ydCBSZXdhcmRGb3JtIGZyb20gJy4uL29yZ2FuaXNtL1Jld2FyZEZvcm0nO1xuXG5jb25zdCBPdmVybGF5Q29udGVudCA9IHN0eWxlZC5kaXZgXG5wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB6LWluZGV4OiAxMDA7XG5gXG5cbmNvbnN0IFNsaWRlb3V0TW9kYWwgPSAoeyBvbkNsb3NlIH06IHsgb25DbG9zZTogKCkgPT4gdm9pZCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPE92ZXJsYXkgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT5DbG9zZTwvYnV0dG9uPlxuICAgICAgICA8UmV3YXJkRm9ybSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbiAgXG5leHBvcnQgZGVmYXVsdCBTbGlkZW91dE1vZGFsOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIk92ZXJsYXkiLCJSZXdhcmRGb3JtIiwiT3ZlcmxheUNvbnRlbnQiLCJkaXYiLCJTbGlkZW91dE1vZGFsIiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/molecules/SlideoutModal.tsx\n"));

/***/ })

});