"use strict";
exports.id = 294;
exports.ids = [294];
exports.modules = {

/***/ 2294:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8187);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_1__]);
_store_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// components/DataDisplay.tsx
'use client';






function DataDisplay() {
  const {
    data,
    fetchData
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .o)();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);
  console.log(data);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
      children: "Data Display"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("ul", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
        children: data.userid
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataDisplay);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8187:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// store.ts

const initialData = {
  rewards: [],
  defaultRewards: [],
  userid: '' // Add initial values for other properties as needed

};
const useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])(set => ({
  data: initialData,
  fetchData: async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users');

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      set({
        data
      });
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
}));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;