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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// store.ts

const initialData = {
  userid: '' // Add initial values for other properties as needed

};
const initialState = {
  visible: false,
  message: '',
  type: 'success'
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
  },
  // toast state
  toast: initialState,
  // actions
  showToast: (message, type = 'success') => {
    set(() => ({
      toast: {
        visible: true,
        message,
        type
      }
    }));
  },
  hideToast: () => {
    set(state => ({
      toast: _objectSpread(_objectSpread({}, state.toast), {}, {
        visible: false
      })
    }));
  }
}));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;