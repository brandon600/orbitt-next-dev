"use strict";
exports.id = 126;
exports.ids = [126];
exports.modules = {

/***/ 528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ WebSocketProvider)
/* harmony export */ });
/* unused harmony export useWebSocket */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4612);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_1__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const WebSocketContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const useWebSocket = () => {
  return useContext(WebSocketContext);
};
const WebSocketProvider = ({
  children
}) => {
  const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__.io)('http://localhost:5000');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      socket.disconnect();
    };
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(WebSocketContext.Provider, {
    value: {
      socket
    },
    children: children
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6126:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WebSocketContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(528);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_WebSocketContext__WEBPACK_IMPORTED_MODULE_0__]);
_WebSocketContext__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Adjust the import to your file structure



function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_WebSocketContext__WEBPACK_IMPORTED_MODULE_0__/* .WebSocketProvider */ .q, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;