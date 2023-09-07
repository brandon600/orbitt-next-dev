"use strict";
exports.id = 696;
exports.ids = [696];
exports.modules = {

/***/ 7711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// src/GlobalStyles.ts

const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["body{display:flex;margin:0;font-family:Arial,sans-serif;background-color:#f0f0f0;color:#333;}h1,h2,h3,h4,h5,h6,p{margin-block-start:0px;margin-block-end:0px;margin-inline-start:0px;margin-inline-end:0px;}form{display:flex;flex-direction:column;margin-top:0em;}input{padding:0;font:inherit;font-size:16px;background-color:transparent;margin:0;text-align:left;appearance:none;cursor:text;outline:none;}select{background-color:pink;font:inherit;font-size:16px;font-family:inherit;background-color:transparent;border:none;border-color:padding:0.25rem;margin:0;box-sizing:border-box;width:100%;cursor:pointer;outline:none;}textarea{padding:0;font:inherit;font-size:16px;font-family:inherit;background-color:transparent;margin:0;text-align:left;appearance:none;cursor:text;outline:none;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);

/***/ }),

/***/ 6552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2287);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
const _excluded = ["label", "onClick", "buttonTypeVariant", "sizeVariant", "buttonWidthVariant"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const buttonTypeSheet = {
  primary: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background-color:", ";p{color:", ";}border:none;color:", ";"], _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.primary500, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.shades100, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.shades100),
  secondary: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background-color:", ";color:", ";border:1px solid ", ";"], _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.shades100, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.primary500, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.primary500),
  neutral: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background-color:", ";color:", ";border:1px solid ", ";"], _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.shades100, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral400, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral400),
  disabled: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background-color:", ";color:", ";border:none;"], _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral300, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.shades100),
  error: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background-color:", ";color:", ";border:none;"], _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.error600, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.shades100),
  smsBlast: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background-color:", ";color:", ";border:none;"], _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.success700, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.shades100)
};
const buttonSizeSheet = {
  small: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["height:45px;padding:12px 20px;font-size:14px;font-size:16px;font-weight:800;p{font-size:16px;font-weight:800;}"]),
  large: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["height:56px;padding:0px 24px;font-size:16px;font-weight:800;p{font-size:16px;font-weight:800;}"])
};
const ButtonComponent = styled_components__WEBPACK_IMPORTED_MODULE_1___default().button.withConfig({
  displayName: "Button__ButtonComponent",
  componentId: "sc-evl40u-0"
})(["display:flex;align-items:center;justify-content:center;border-radius:6px;cursor:pointer;", ";", ";width:", ";"], ({
  buttonTypeVariant
}) => buttonTypeSheet[buttonTypeVariant || 'primary'], ({
  sizeVariant
}) => buttonSizeSheet[sizeVariant || 'large'], ({
  buttonWidthVariant
}) => buttonWidthVariant === 'fill' ? '100%' : 'auto');

const Button = _ref => {
  let {
    label,
    onClick,
    buttonTypeVariant = 'primary',
    sizeVariant = 'large',
    buttonWidthVariant = 'content'
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(ButtonComponent, _objectSpread(_objectSpread({
    as: "button",
    onClick: onClick,
    buttonTypeVariant: buttonTypeVariant,
    sizeVariant: sizeVariant,
    buttonWidthVariant: buttonWidthVariant
  }, rest), {}, {
    children: label
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ 5030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2287);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);





//  padding: ${(props) => (props.isChecked ? '0px 4px 0px 0px' : '0px 0px 0px 4px')};
const ToggleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().label.withConfig({
  displayName: "ToggleSwitch__ToggleContainer",
  componentId: "sc-1e3v1ch-0"
})(["display:flex;width:64px;height:32px;cursor:pointer;border-radius:20px;background-color:", ";transition:background-color 0.4s;"], props => props.active ? _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.success600 : _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral300);
const SwitchInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default().input.withConfig({
  displayName: "ToggleSwitch__SwitchInput",
  componentId: "sc-1e3v1ch-1"
})(["display:none;"]);
const Slider = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ToggleSwitch__Slider",
  componentId: "sc-1e3v1ch-2"
})(["flex:1;display:flex;align-items:center;transition:0.4s;"]);
const SliderButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ToggleSwitch__SliderButton",
  componentId: "sc-1e3v1ch-3"
})(["width:24px;height:24px;background-color:white;border-radius:50%;margin-left:", ";transition:margin-left 0.2s ease-in-out;"], props => props.active ? 'calc(100% - 28px)' : '4px');

const ToggleSwitch = ({
  active,
  onChange
}) => {
  const handleToggle = () => {
    onChange(!active); // Notify parent component of the change
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ToggleContainer, {
    active: active,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(SwitchInput, {
      type: "checkbox",
      checked: active,
      onChange: handleToggle
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Slider, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(SliderButton, {
        active: active
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleSwitch);

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