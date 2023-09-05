"use strict";
exports.id = 187;
exports.ids = [187];
exports.modules = {

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