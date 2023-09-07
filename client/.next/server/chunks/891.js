"use strict";
exports.id = 891;
exports.ids = [891];
exports.modules = {

/***/ 711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
const _excluded = ["text"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const StyledText = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
  displayName: "Text__StyledText",
  componentId: "sc-108zgdt-0"
})(["display:", ";color:", ";margin:", ";padding:", ";max-width:", ";background:", ";text-align:", ";margin-block-start:0px;margin-block-end:0px;margin-inline-start:0px;margin-inline-end:0px;"], ({
  display
}) => display || 'flex', ({
  color
}) => color || 'inherit', ({
  margin
}) => margin || '0', ({
  padding
}) => padding || '0', ({
  maxWidth
}) => maxWidth || 'none', ({
  background
}) => background || 'none', ({
  textAlign
}) => textAlign || 'left');

const Text = _ref => {
  let {
    text
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(StyledText, _objectSpread(_objectSpread({}, rest), {}, {
    children: text
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

/***/ }),

/***/ 2287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//Colors to be used in the app
const Colors = {
  primary100: '#FAFDFF',
  primary200: '#B8E0FF',
  primary300: '#7AC1FF',
  primary400: '#3D9EFF',
  primary500: '#0177FE',
  primary600: '#0064D6',
  primary700: '#004CA3',
  primary800: '#003E84',
  primary900: '#002B5C',
  secondary100: '#F5FFFE',
  secondary200: '#B8FFF8',
  secondary300: '#7AFFF6',
  secondary400: '#3DFFF9',
  secondary500: '#00FFFF',
  secondary600: '#00CFD6',
  secondary700: '#00A2AD',
  secondary800: '#007785',
  secondary900: '#00505C',
  tertiary100: '#FFF5F9',
  tertiary200: '#FFB8D9',
  tertiary300: '#FF0090',
  tertiary400: '#FF3DB1',
  tertiary500: '#FF0090',
  tertiary600: '#D60072',
  tertiary700: '#AD0057',
  tertiary800: '#85003E',
  tertiary900: '#5C0028',
  success100: '#F5FFF8',
  success200: '#B8FFCD',
  success300: '#7AFFA7',
  success400: '#3DFF84',
  success500: '#01FE66',
  success600: '#00D65D',
  success700: '#00AD51',
  success800: '#008542',
  success900: '#005C31',
  warning100: '#FFFAF5',
  warning200: '#FFE0B8',
  warning300: '#FFCA7A',
  warning400: '#FFB83D',
  warning500: '#FFAA01',
  warning600: '#D68800',
  warning700: '#AD6200',
  warning800: '#854200',
  warning900: '#5C2800',
  error100: '#FFF5F6',
  error200: '#FFB8C1',
  error300: '#FF7A8C',
  error400: '#FF3D57',
  error500: '#FF0022',
  error600: '#D60015',
  error700: '#AD000C',
  error800: '#850400',
  error900: '#5C0600',
  neutral100: '#F4F7FB',
  neutral200: '#E6EDF4',
  neutral300: '#BDCBDB',
  neutral400: '#8598AD',
  neutral500: '#597DA6',
  neutral600: '#3D638F',
  neutral700: '#364B63',
  neutral800: '#29323D',
  neutral900: '#17191C',
  shades100: '#FFFFFF',
  shades900: '#000000'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Colors);

/***/ }),

/***/ 8338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//Define Media Queries for responsive design
const size = {
  XS: '320px',
  S: '720px',
  M: '1040px',
  L: '1280px',
  XL: '1440px'
};
const StyledMediaQuery = {
  XS: `(min-width: ${size.XS})`,
  S: `(min-width: ${size.S})`,
  M: `(min-width: ${size.M})`,
  L: `(min-width: ${size.L})`,
  XL: `(min-width: ${size.XL})`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledMediaQuery);

/***/ })

};
;