/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/rewards",{

/***/ "./src/components/atoms/Overlay.tsx":
/*!******************************************!*\
  !*** ./src/components/atoms/Overlay.tsx ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/components/molecules/SlideoutModal.tsx":
/*!****************************************************!*\
  !*** ./src/components/molecules/SlideoutModal.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _atoms_Overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/Overlay */ \"./src/components/atoms/Overlay.tsx\");\n/* harmony import */ var _atoms_Overlay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_atoms_Overlay__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/us-guest/Desktop/git_projects/orbitt-next/client/src/components/molecules/SlideoutModal.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar OverlayContent = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"SlideoutModal__OverlayContent\",\n  componentId: \"sc-en7ipe-0\"\n})([\"\"]);\n_c = OverlayContent;\n\nvar SlideoutModal = function SlideoutModal(_ref) {\n  var onClose = _ref.onClose;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((_atoms_Overlay__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(OverlayContent, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n        children: \"Overlay Content\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        onClick: onClose,\n        children: \"Close\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }, _this);\n};\n\n_c2 = SlideoutModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SlideoutModal);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"OverlayContent\");\n$RefreshReg$(_c2, \"SlideoutModal\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU2xpZGVvdXRNb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7O0FBRUEsSUFBTUcsY0FBYyxHQUFHRiw2REFBSDtFQUFBO0VBQUE7QUFBQSxRQUFwQjtLQUFNRTs7QUFHTixJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWlCO0VBQUEsSUFBZEMsT0FBYyxRQUFkQSxPQUFjO0VBQ25DLG9CQUNJO0lBQUEsd0JBQ0YsOERBQUMsdURBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURFLGVBRUYsOERBQUMsY0FBRDtNQUFBLHdCQUVFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBRkYsZUFHRTtRQUFRLE9BQU8sRUFBRUEsT0FBakI7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FIRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FGRTtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FESjtBQVVELENBWEg7O01BQU1EO0FBYU4sK0RBQWVBLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL1NsaWRlb3V0TW9kYWwudHN4PzA3MzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMsIFJlYWN0Tm9kZSwgUHJvcHNXaXRoQ2hpbGRyZW4sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9Db2xvcnMnO1xuaW1wb3J0IFN0eWxlZE1lZGlhUXVlcnkgZnJvbSAnLi4vLi4vY29uc3RhbnRzL1N0eWxlZE1lZGlhUXVlcnknO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi4vYXRvbXMvT3ZlcmxheSc7XG5cbmNvbnN0IE92ZXJsYXlDb250ZW50ID0gc3R5bGVkLmRpdmBcbmBcblxuY29uc3QgU2xpZGVvdXRNb2RhbCA9ICh7IG9uQ2xvc2UgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICA8T3ZlcmxheSAvPlxuICAgICAgPE92ZXJsYXlDb250ZW50PlxuICAgICAgICB7LyogWW91ciBvdmVybGF5IGNvbnRlbnQgZ29lcyBoZXJlICovfVxuICAgICAgICA8aDI+T3ZlcmxheSBDb250ZW50PC9oMj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT5DbG9zZTwvYnV0dG9uPlxuICAgICAgICA8L092ZXJsYXlDb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbiAgXG5leHBvcnQgZGVmYXVsdCBTbGlkZW91dE1vZGFsOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIk92ZXJsYXkiLCJPdmVybGF5Q29udGVudCIsImRpdiIsIlNsaWRlb3V0TW9kYWwiLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/molecules/SlideoutModal.tsx\n"));

/***/ }),

/***/ "./src/pages/rewards.tsx":
/*!*******************************!*\
  !*** ./src/pages/rewards.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _components_subatomic_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/subatomic/Text */ \"./src/components/subatomic/Text.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/StyledMediaQuery */ \"./src/constants/StyledMediaQuery.ts\");\n/* harmony import */ var _components_atoms_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/atoms/Button */ \"./src/components/atoms/Button.tsx\");\n/* harmony import */ var _components_atoms_RewardTableHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/atoms/RewardTableHead */ \"./src/components/atoms/RewardTableHead.tsx\");\n/* harmony import */ var _components_molecules_TriggeredReward__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/molecules/TriggeredReward */ \"./src/components/molecules/TriggeredReward.tsx\");\n/* harmony import */ var _components_molecules_RewardItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/molecules/RewardItem */ \"./src/components/molecules/RewardItem.tsx\");\n/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/constants/Colors */ \"./src/constants/Colors.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_molecules_SlideoutModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/molecules/SlideoutModal */ \"./src/components/molecules/SlideoutModal.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\nvar _jsxFileName = \"/Users/us-guest/Desktop/git_projects/orbitt-next/client/src/pages/rewards.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar OfferingSettingsAndButtons = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n  displayName: \"rewards__OfferingSettingsAndButtons\",\n  componentId: \"sc-tgm17z-0\"\n})([\"@media \", \"{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;}\"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"default\"].XS);\nvar FlexDiv = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n  displayName: \"rewards__FlexDiv\",\n  componentId: \"sc-tgm17z-1\"\n})([\"display:flex gap:48px;background:\", \";\"], _constants_Colors__WEBPACK_IMPORTED_MODULE_6__.Colors.primary100);\n_c = FlexDiv;\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),\n      isOverlayOpen = _useState[0],\n      setIsOverlayOpen = _useState[1];\n\n  var handleOverlayOpen = function handleOverlayOpen() {\n    setIsOverlayOpen(true);\n  };\n\n  var handleOverlayClose = function handleOverlayClose() {\n    setIsOverlayOpen(false);\n  };\n\n  var handleClick = function handleClick() {\n    console.log('clicked');\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"main\", {\n    children: [isOverlayOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_molecules_SlideoutModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      onClose: handleOverlayClose\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 25\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(FlexDiv, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_subatomic_Text__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        text: \"Rewards\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_atoms_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        typeVariant: \"primary\",\n        sizeVariant: \"large\",\n        label: \"Add Reward\",\n        widthVariant: \"fill\",\n        onClick: handleOverlayOpen\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_atoms_RewardTableHead__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        label1: \"Rewards\",\n        label2: \"Cost\",\n        label3: \"Terms\",\n        label4: \"Active\",\n        label5: \"Edit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_molecules_TriggeredReward__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_molecules_RewardItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"iofJPQ6rEiBEzjO8wJjDrmlE1Rg=\");\n\n_c2 = Home;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"FlexDiv\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmV3YXJkcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNVywwQkFBMEIsR0FBR1YsOERBQUg7RUFBQTtFQUFBO0FBQUEsOEdBQ3RCQyxzRUFEc0IsQ0FBaEM7QUFVQSxJQUFNWSxPQUFPLEdBQUdiLDhEQUFIO0VBQUE7RUFBQTtBQUFBLCtDQUdFTSxxREFBTSxDQUFDUSxVQUhULENBQWI7S0FBTUQ7QUFNUyxTQUFTRSxJQUFULEdBQWdCO0VBQUE7O0VBQzNCLGdCQUEwQ1AsK0NBQVEsQ0FBQyxLQUFELENBQWxEO0VBQUEsSUFBT1EsYUFBUDtFQUFBLElBQXNCQyxnQkFBdEI7O0VBRUEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0lBQzVCRCxnQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0VBQ0QsQ0FGSDs7RUFJRSxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07SUFDL0JGLGdCQUFnQixDQUFDLEtBQUQsQ0FBaEI7RUFDRCxDQUZEOztFQUlGLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07SUFDdEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7RUFDSCxDQUZEOztFQUlGLG9CQUNFO0lBQUEsV0FFR04sYUFBYSxpQkFBSSw4REFBQywyRUFBRDtNQUFlLE9BQU8sRUFBRUc7SUFBeEI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUZwQixlQUdFLDhEQUFDLE9BQUQ7TUFBQSx3QkFDRSw4REFBQyxrRUFBRDtRQUNJLElBQUksRUFBQztNQURUO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFERixlQUtFLDhEQUFDLGdFQUFEO1FBQ0ksV0FBVyxFQUFDLFNBRGhCO1FBRUksV0FBVyxFQUFDLE9BRmhCO1FBR0ksS0FBSyxFQUFDLFlBSFY7UUFJSSxZQUFZLEVBQUMsTUFKakI7UUFLSSxPQUFPLEVBQUVEO01BTGI7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUxGLGVBWUEsOERBQUMseUVBQUQ7UUFDRSxNQUFNLEVBQUMsU0FEVDtRQUVFLE1BQU0sRUFBQyxNQUZUO1FBR0UsTUFBTSxFQUFDLE9BSFQ7UUFJRSxNQUFNLEVBQUMsUUFKVDtRQUtFLE1BQU0sRUFBQztNQUxUO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFaQSxlQW1CRSw4REFBQyw2RUFBRDtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBbkJGLGVBb0JFLDhEQUFDLHdFQUFEO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFwQkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBSEY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUE0QkQ7O0dBM0N1Qkg7O01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZXdhcmRzLnRzeD84MGVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhRGlzcGxheSBmcm9tICcuLi9jb21wb25lbnRzL0RhdGFEaXNwbGF5JztcbmltcG9ydCBUZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvc3ViYXRvbWljL1RleHQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgU3R5bGVkTWVkaWFRdWVyeSBmcm9tICcuLi9jb25zdGFudHMvU3R5bGVkTWVkaWFRdWVyeSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvYXRvbXMvQnV0dG9uJztcbmltcG9ydCBSZXdhcmRUYWJsZUhlYWQgZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL1Jld2FyZFRhYmxlSGVhZCc7XG5pbXBvcnQgVHJpZ2dlcmVkUmV3YXJkIGZyb20gJ0AvY29tcG9uZW50cy9tb2xlY3VsZXMvVHJpZ2dlcmVkUmV3YXJkJztcbmltcG9ydCBSZXdhcmRJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9tb2xlY3VsZXMvUmV3YXJkSXRlbSc7XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICdAL2NvbnN0YW50cy9Db2xvcnMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRlb3V0TW9kYWwgZnJvbSAnQC9jb21wb25lbnRzL21vbGVjdWxlcy9TbGlkZW91dE1vZGFsJztcblxuY29uc3QgT2ZmZXJpbmdTZXR0aW5nc0FuZEJ1dHRvbnMgPSBzdHlsZWQuZGl2YFxuIEBtZWRpYSAke1N0eWxlZE1lZGlhUXVlcnkuWFN9IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiB9XG5gXG5cbmNvbnN0IEZsZXhEaXYgPSBzdHlsZWQuZGl2YFxuIGRpc3BsYXk6IGZsZXhcbiBnYXA6IDQ4cHg7XG4gYmFja2dyb3VuZDogJHtDb2xvcnMucHJpbWFyeTEwMH07XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2lzT3ZlcmxheU9wZW4sIHNldElzT3ZlcmxheU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlT3ZlcmxheU9wZW4gPSAoKSA9PiB7XG4gICAgICAgIHNldElzT3ZlcmxheU9wZW4odHJ1ZSk7XG4gICAgICB9O1xuICAgIFxuICAgICAgY29uc3QgaGFuZGxlT3ZlcmxheUNsb3NlID0gKCkgPT4ge1xuICAgICAgICBzZXRJc092ZXJsYXlPcGVuKGZhbHNlKTtcbiAgICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKVxuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgICAgICB7LyogUmVuZGVyIHRoZSBvdmVybGF5IHdoZW4gaXNPdmVybGF5T3BlbiBpcyB0cnVlICovfVxuICAgICAge2lzT3ZlcmxheU9wZW4gJiYgPFNsaWRlb3V0TW9kYWwgb25DbG9zZT17aGFuZGxlT3ZlcmxheUNsb3NlfSAvPn1cbiAgICAgIDxGbGV4RGl2PlxuICAgICAgICA8VGV4dFxuICAgICAgICAgICAgdGV4dD0nUmV3YXJkcydcbiAgICAgICAgPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGVWYXJpYW50PSdwcmltYXJ5J1xuICAgICAgICAgICAgc2l6ZVZhcmlhbnQ9J2xhcmdlJ1xuICAgICAgICAgICAgbGFiZWw9J0FkZCBSZXdhcmQnXG4gICAgICAgICAgICB3aWR0aFZhcmlhbnQ9J2ZpbGwnXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPdmVybGF5T3Blbn1cbiAgICAgICAgLz5cbiAgICAgIDxSZXdhcmRUYWJsZUhlYWQgXG4gICAgICAgIGxhYmVsMT0nUmV3YXJkcydcbiAgICAgICAgbGFiZWwyPSdDb3N0J1xuICAgICAgICBsYWJlbDM9J1Rlcm1zJ1xuICAgICAgICBsYWJlbDQ9J0FjdGl2ZSdcbiAgICAgICAgbGFiZWw1PSdFZGl0J1xuICAgIC8+XG4gICAgICAgIDxUcmlnZ2VyZWRSZXdhcmQgLz5cbiAgICAgICAgPFJld2FyZEl0ZW0gLz5cbiAgICAgIDwvRmxleERpdj5cbiAgICA8L21haW4+XG4gIClcbn0iXSwibmFtZXMiOlsiVGV4dCIsInN0eWxlZCIsIlN0eWxlZE1lZGlhUXVlcnkiLCJCdXR0b24iLCJSZXdhcmRUYWJsZUhlYWQiLCJUcmlnZ2VyZWRSZXdhcmQiLCJSZXdhcmRJdGVtIiwiQ29sb3JzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNsaWRlb3V0TW9kYWwiLCJPZmZlcmluZ1NldHRpbmdzQW5kQnV0dG9ucyIsImRpdiIsIlhTIiwiRmxleERpdiIsInByaW1hcnkxMDAiLCJIb21lIiwiaXNPdmVybGF5T3BlbiIsInNldElzT3ZlcmxheU9wZW4iLCJoYW5kbGVPdmVybGF5T3BlbiIsImhhbmRsZU92ZXJsYXlDbG9zZSIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/rewards.tsx\n"));

/***/ })

});