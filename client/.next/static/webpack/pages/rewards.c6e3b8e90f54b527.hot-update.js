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

/***/ "./src/components/organism/RewardForm.tsx":
/*!************************************************!*\
  !*** ./src/components/organism/RewardForm.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _atoms_InputField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/InputField */ \"./src/components/atoms/InputField.tsx\");\n/* harmony import */ var _atoms_DropdownField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/DropdownField */ \"./src/components/atoms/DropdownField.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/StyledMediaQuery */ \"./src/constants/StyledMediaQuery.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/us-guest/Desktop/git_projects/orbitt-next/client/src/components/organism/RewardForm.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// components/RewardForm.tsx\n\n\n\n\n\n\nvar RewardFormDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.div.withConfig({\n  displayName: \"RewardForm__RewardFormDiv\",\n  componentId: \"sc-1vny7h3-0\"\n})([\"@media \", \"{display:flex;position:absolute;z-index:90;}\"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"].XS);\n_c = RewardFormDiv;\n\nvar RewardForm = function RewardForm() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      rewardName = _useState[0],\n      setRewardName = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      rewardCost = _useState2[0],\n      setRewardCost = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      rewardTerms = _useState3[0],\n      setRewardTerms = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('value1'),\n      rewardValue = _useState4[0],\n      setRewardValue = _useState4[1];\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault(); // Handle form submission (e.g., send data to the server)\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(RewardFormDiv, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_atoms_InputField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        label: \"Reward Name\",\n        value: rewardName,\n        onChange: function onChange(value) {\n          return setRewardName(value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n          children: \"Reward Cost\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n          type: \"text\",\n          value: rewardCost,\n          onChange: function onChange(e) {\n            return setRewardCost(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_atoms_DropdownField__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        value: rewardValue,\n        onChange: function onChange(value) {\n          return setRewardValue(value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_atoms_InputField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        label: \"Reward Terms\",\n        value: rewardTerms,\n        onChange: function onChange(value) {\n          return setRewardTerms(value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(RewardForm, \"RrpIX8PQpDvbYqFqvoBXBPgeZiE=\");\n\n_c2 = RewardForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RewardForm);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"RewardFormDiv\");\n$RefreshReg$(_c2, \"RewardForm\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbS9SZXdhcmRGb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1NLGFBQWEsR0FBSUYscURBQU0sQ0FBQ0csR0FBWDtFQUFBO0VBQUE7QUFBQSxnRUFDTkYsc0VBRE0sQ0FBbkI7S0FBTUM7O0FBUU4sSUFBTUcsVUFBb0IsR0FBRyxTQUF2QkEsVUFBdUIsR0FBTTtFQUFBOztFQUNqQyxnQkFBb0NSLCtDQUFRLENBQVMsRUFBVCxDQUE1QztFQUFBLElBQU9TLFVBQVA7RUFBQSxJQUFtQkMsYUFBbkI7O0VBQ0EsaUJBQW9DViwrQ0FBUSxDQUFTLEVBQVQsQ0FBNUM7RUFBQSxJQUFPVyxVQUFQO0VBQUEsSUFBbUJDLGFBQW5COztFQUNBLGlCQUFzQ1osK0NBQVEsQ0FBUyxFQUFULENBQTlDO0VBQUEsSUFBT2EsV0FBUDtFQUFBLElBQW9CQyxjQUFwQjs7RUFDQSxpQkFBc0NkLCtDQUFRLENBQVMsUUFBVCxDQUE5QztFQUFBLElBQU9lLFdBQVA7RUFBQSxJQUFvQkMsY0FBcEI7O0VBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUF3QjtJQUMzQ0EsQ0FBQyxDQUFDQyxjQUFGLEdBRDJDLENBRTNDO0VBQ0QsQ0FIRDs7RUFLQSxvQkFDRSw4REFBQyxhQUFEO0lBQUEsdUJBQ0E7TUFBTSxRQUFRLEVBQUVGLFlBQWhCO01BQUEsd0JBQ0UsOERBQUMseURBQUQ7UUFDRSxLQUFLLEVBQUMsYUFEUjtRQUVFLEtBQUssRUFBRVIsVUFGVDtRQUdFLFFBQVEsRUFBRSxrQkFBQ1csS0FBRDtVQUFBLE9BQVdWLGFBQWEsQ0FBQ1UsS0FBRCxDQUF4QjtRQUFBO01BSFo7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURGLGVBTUU7UUFBQSx3QkFDRTtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQURGLGVBRUU7VUFDRSxJQUFJLEVBQUMsTUFEUDtVQUVFLEtBQUssRUFBRVQsVUFGVDtVQUdFLFFBQVEsRUFBRSxrQkFBQ08sQ0FBRDtZQUFBLE9BQU9OLGFBQWEsQ0FBQ00sQ0FBQyxDQUFDRyxNQUFGLENBQVNELEtBQVYsQ0FBcEI7VUFBQTtRQUhaO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FGRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FORixlQWNFLDhEQUFDLDREQUFEO1FBQ0EsS0FBSyxFQUFFTCxXQURQO1FBRUEsUUFBUSxFQUFFLGtCQUFDSyxLQUFEO1VBQUEsT0FBV0osY0FBYyxDQUFDSSxLQUFELENBQXpCO1FBQUE7TUFGVjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBZEYsZUFrQkUsOERBQUMseURBQUQ7UUFDRSxLQUFLLEVBQUMsY0FEUjtRQUVFLEtBQUssRUFBRVAsV0FGVDtRQUdFLFFBQVEsRUFBRSxrQkFBQ08sS0FBRDtVQUFBLE9BQVdOLGNBQWMsQ0FBQ00sS0FBRCxDQUF6QjtRQUFBO01BSFo7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQWxCRixlQXVCRTtRQUFRLElBQUksRUFBQyxRQUFiO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBdkJGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQTZCRCxDQXhDRDs7R0FBTVo7O01BQUFBO0FBMENOLCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtL1Jld2FyZEZvcm0udHN4PzE3NmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9SZXdhcmRGb3JtLnRzeFxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAnLi4vYXRvbXMvSW5wdXRGaWVsZCc7XG5pbXBvcnQgRHJvcGRvd25GaWVsZCBmcm9tICcuLi9hdG9tcy9Ecm9wZG93bkZpZWxkJztcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTdHlsZWRNZWRpYVF1ZXJ5IGZyb20gJy4uLy4uL2NvbnN0YW50cy9TdHlsZWRNZWRpYVF1ZXJ5JztcblxuY29uc3QgUmV3YXJkRm9ybURpdiA9ICBzdHlsZWQuZGl2YFxuICAgIEBtZWRpYSAke1N0eWxlZE1lZGlhUXVlcnkuWFN9IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA5MDtcbiAgICB9XG5gXG5cbmNvbnN0IFJld2FyZEZvcm06IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbcmV3YXJkTmFtZSwgc2V0UmV3YXJkTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3Jld2FyZENvc3QsIHNldFJld2FyZENvc3RdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtyZXdhcmRUZXJtcywgc2V0UmV3YXJkVGVybXNdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtyZXdhcmRWYWx1ZSwgc2V0UmV3YXJkVmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPigndmFsdWUxJyk7IFxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvbiAoZS5nLiwgc2VuZCBkYXRhIHRvIHRoZSBzZXJ2ZXIpXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmV3YXJkRm9ybURpdj5cbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgIGxhYmVsPVwiUmV3YXJkIE5hbWVcIlxuICAgICAgICB2YWx1ZT17cmV3YXJkTmFtZX1cbiAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0UmV3YXJkTmFtZSh2YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPlJld2FyZCBDb3N0PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtyZXdhcmRDb3N0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmV3YXJkQ29zdChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxEcm9wZG93bkZpZWxkXG4gICAgICB2YWx1ZT17cmV3YXJkVmFsdWV9XG4gICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRSZXdhcmRWYWx1ZSh2YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8SW5wdXRGaWVsZFxuICAgICAgICBsYWJlbD1cIlJld2FyZCBUZXJtc1wiXG4gICAgICAgIHZhbHVlPXtyZXdhcmRUZXJtc31cbiAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0UmV3YXJkVGVybXModmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICA8L1Jld2FyZEZvcm1EaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXdhcmRGb3JtOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW5wdXRGaWVsZCIsIkRyb3Bkb3duRmllbGQiLCJzdHlsZWQiLCJTdHlsZWRNZWRpYVF1ZXJ5IiwiUmV3YXJkRm9ybURpdiIsImRpdiIsIlhTIiwiUmV3YXJkRm9ybSIsInJld2FyZE5hbWUiLCJzZXRSZXdhcmROYW1lIiwicmV3YXJkQ29zdCIsInNldFJld2FyZENvc3QiLCJyZXdhcmRUZXJtcyIsInNldFJld2FyZFRlcm1zIiwicmV3YXJkVmFsdWUiLCJzZXRSZXdhcmRWYWx1ZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/organism/RewardForm.tsx\n"));

/***/ })

});