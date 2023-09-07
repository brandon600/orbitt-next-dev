"use strict";
(() => {
var exports = {};
exports.id = 177;
exports.ids = [177,660];
exports.modules = {

/***/ 7711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// src/GlobalStyles.ts

const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["body{display:flex;margin:0;font-family:Arial,sans-serif;background-color:#f0f0f0;color:#333;}h1,h2,h3,h4,h5,h6,p{margin-block-start:0px;margin-block-end:0px;margin-inline-start:0px;margin-inline-end:0px;}form{display:flex;flex-direction:column;margin-top:0em;}input{padding:0;font:inherit;font-size:16px;background-color:transparent;margin:0;text-align:left;appearance:none;cursor:text;outline:none;select{background-color:pink;font:inherit;font-size:16px;font-family:inherit;background-color:transparent;border:none;border-color:padding:0.25rem;margin:0;box-sizing:border-box;width:100%;cursor:pointer;outline:none;}"]);
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

/***/ 1094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2287);
/* harmony import */ var _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8338);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5893);






const DropdownFieldContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DropdownField__DropdownFieldContainer",
  componentId: "sc-1blcj3-0"
})(["@media ", "{display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:8px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS);
const DropdownFieldLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default().label.withConfig({
  displayName: "DropdownField__DropdownFieldLabel",
  componentId: "sc-1blcj3-1"
})(["@media ", "{display:flex;font-size:12px;font-weight:500;line-height:15px;color:", ";p{font-size:16px;font-weight:500;line-height:19px;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral400);
const DropdownFieldLabel2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default().label.withConfig({
  displayName: "DropdownField__DropdownFieldLabel2",
  componentId: "sc-1blcj3-2"
})(["@media ", "{display:flex;flex-direction:row;gap:4px;font-size:16px;font-weight:400;line-height:19px;color:", ";p{font-size:16px;font-weight:500;line-height:19px;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral700);
const DropdownFieldSelect = styled_components__WEBPACK_IMPORTED_MODULE_1___default().select.withConfig({
  displayName: "DropdownField__DropdownFieldSelect",
  componentId: "sc-1blcj3-3"
})(["@media ", "{font:inherit;font-size:16px;font-family:inherit;background-color:", ";border:none;padding:0rem;margin:0;box-sizing:border-box;width:100%;cursor:pointer;outline:none;display:flex;height:48px;padding:0px 4px 0px 12px;justify-content:space-between;align-items:center;align-self:stretch;border-radius:8px;color:", ";&:focus{border 1px solid ", ";color:", ";}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.shades100, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral300, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral600, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral600);
const DropdownFieldSelect2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default().select.withConfig({
  displayName: "DropdownField__DropdownFieldSelect2",
  componentId: "sc-1blcj3-4"
})(["@media ", "{font:inherit;font-size:16px;font-family:inherit;background-color:", ";border:none;padding:0rem;margin:0;box-sizing:border-box;width:100%;cursor:pointer;outline:none;display:flex;height:48px;padding:0px 4px 0px 12px;justify-content:space-between;align-items:center;align-self:stretch;border-radius:8px;color:", ";&:focus{border 1px solid ", ";color:", ";}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral100, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral600, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral600, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral600);
const RequiredAsterisk = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "DropdownField__RequiredAsterisk",
  componentId: "sc-1blcj3-5"
})(["@media ", "{color:red;margin-left:4px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS);

const DropdownField = ({
  value,
  onChange,
  label,
  required,
  useDefaultDropdown
}) => {
  const DefaultDropdown = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(DropdownFieldContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(DropdownFieldLabel, {
        children: label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(DropdownFieldSelect, {
        value: value,
        onChange: e => onChange(e.target.value),
        required: required // Add the 'required' attribute conditionally
        ,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
          value: "value1",
          children: "Value 1"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
          value: "value2",
          children: "Value 2"
        })]
      })]
    });
  };

  const FormDropdown = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(DropdownFieldContainer, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(DropdownFieldLabel2, {
        children: [required && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(RequiredAsterisk, {
          children: "*"
        }), " ", label]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(DropdownFieldSelect2, {
        value: value,
        onChange: e => onChange(e.target.value),
        required: required // Add the 'required' attribute conditionally
        ,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
          value: "Free Item",
          children: "Free Item"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
          value: "5% Off",
          children: "5% Off"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
          value: "10% Off",
          children: "10% Off"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
          value: "15% Off",
          children: "15% Off"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
          value: "25% Off",
          children: "25% Off"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
          value: "50% Off",
          children: "50% Off"
        })]
      })]
    });
  }; // Use the selected component based on the 'useDefaultDropdown' prop


  const SelectedDropdown = useDefaultDropdown ? DefaultDropdown : FormDropdown;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SelectedDropdown, {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownField);

/***/ }),

/***/ 4895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2287);
/* harmony import */ var _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8338);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5893);






const InputFieldContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "InputField__InputFieldContainer",
  componentId: "sc-16qn2iy-0"
})(["@media ", "{display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:8px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS);
const InputFieldLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default().label.withConfig({
  displayName: "InputField__InputFieldLabel",
  componentId: "sc-16qn2iy-1"
})(["@media ", "{display:flex;flex-direction:row;gap:4px;font-size:16px;font-weight:400;line-height:19px;color:", ";}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral700);
const RequiredAsterisk = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "InputField__RequiredAsterisk",
  componentId: "sc-16qn2iy-2"
})(["@media ", "{color:", ";}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.error500);
const InputFieldInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default().input.withConfig({
  displayName: "InputField__InputFieldInput",
  componentId: "sc-16qn2iy-3"
})(["@media ", "{display:flex;height:32px;padding:8px 12px;align-items:center;align-self:stretch;border-radius:8px;background:", ";color:", ";border:none;&:focus{border:1px solid ", ";color:", ";}&::placeholder{color:", ";}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral100, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral600, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.primary400, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.primary400, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral300);

const InputField = ({
  label,
  value,
  onChange,
  required,
  // Accept the 'required' prop
  placeholder // Accept the 'placeholder' prop

}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(InputFieldContainer, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(InputFieldLabel, {
      children: [required && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(RequiredAsterisk, {
        children: "*"
      }), " ", label]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(InputFieldInput, {
      type: "text",
      value: value,
      onChange: e => onChange(e.target.value),
      required: required // Add the 'required' attribute conditionally
      ,
      placeholder: placeholder // Pass the 'placeholder' prop

    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputField);

/***/ }),

/***/ 3256:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8338);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const OverlayDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div).withConfig({
  displayName: "Overlay__OverlayDiv",
  componentId: "sc-wo64qz-0"
})(["@media ", "{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.4);backdrop-filter:blur(4px);display:flex;justify-content:center;align-items:center;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.XS);

const Overlay = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(OverlayDiv, {
    initial: {
      opacity: 0,
      backdropFilter: "blur(0px)"
    } // initial state (hidden to the right)
    ,
    animate: {
      opacity: 1,
      backdropFilter: "blur(4px)"
    } // end state (appears from the right)
    ,
    exit: {
      opacity: 0,
      backdropFilter: "blur(0px)"
    } // exit state (disappears to the right)
    ,
    transition: {
      duration: .2
    } // animation takes 400ms with easeInOut easing

  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overlay);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9418:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8187);
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2287);
/* harmony import */ var _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8338);
/* harmony import */ var _subatomic_Icons_InformationIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9415);
/* harmony import */ var _subatomic_Icons_CheckCircleIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(915);
/* harmony import */ var _subatomic_Icons_ErrorIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1805);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6197);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_8__]);
([_store_store__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


 // adjust the import to your file structure
//import { AppState } from "../../store/store";









const ToastContainer = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion)(styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Toast__ToastContainer",
  componentId: "sc-166s84x-0"
})(["@media ", "{position:fixed;left:50%;transform:translateX(-50%);display:flex;width:300px;height:72px;align-items:center;border-radius:8px;background-color:", ";box-shadow:0px 4px 20px rgba(0,0,0,0.32);}@media ", "{width:360px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.shades100, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.S));
const ToastMessageIndicator = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Toast__ToastMessageIndicator",
  componentId: "sc-166s84x-1"
})(["@media ", "{display:flex;width:72px;height:72px;justify-content:center;align-items:center;border-radius:8px 0px 0px 8px;svg{width:48px;height:48px;}", " ", " ", "}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.XS, props => props.type === 'success' && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background-color:", ";"], _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.success600), props => props.type === 'error' && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background-color:", ";"], _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.error400), props => props.type === 'info' && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background-color:", ";"], _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.neutral500));
const ToastRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Toast__ToastRight",
  componentId: "sc-166s84x-2"
})(["@media ", "{display:flex;height:72px;flex-direction:column;justify-content:space-between;align-items:flex-start;flex:1 0 0;align-self:stretch;background:", ";border-radius:0px 8px 8px 0px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.shades100);
const ToastText = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Toast__ToastText",
  componentId: "sc-166s84x-3"
})(["@media ", "{display:flex;padding:22px 16px 0px 12px;justify-content:space-between;align-items:flex-start;align-self:stretch;p{color:", ";font-size:16px;font-weight:500;line-height:19px;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.neutral500);
const ToastBar = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Toast__ToastBar",
  componentId: "sc-166s84x-4"
})(["@media ", "{width:0;height:6px;transition:width 3.2s linear;}", " ", " ", ""], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.XS, props => props.type === 'success' && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background-color:", ";"], _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.success600), props => props.type === 'error' && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background-color:", ";"], _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.error400), props => props.type === 'info' && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background-color:", ";"], _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.neutral500));

const Toast = () => {
  const {
    toast,
    hideToast
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__/* .useStore */ .o)(state => ({
    toast: state.toast,
    hideToast: state.hideToast
  }));
  const {
    0: barWidth,
    1: setBarWidth
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('0');

  const returnCorrectIcon = () => {
    switch (toast.type) {
      case 'success':
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_subatomic_Icons_CheckCircleIcon__WEBPACK_IMPORTED_MODULE_6__/* .CheckCircleIcon */ .r, {
          fill: _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.shades100
        });

      case 'error':
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_subatomic_Icons_ErrorIcon__WEBPACK_IMPORTED_MODULE_7__/* .ErrorIcon */ .P, {
          fill: _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.shades100
        });

      case 'info':
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_subatomic_Icons_InformationIcon__WEBPACK_IMPORTED_MODULE_5__/* .InformationIcon */ .Y, {
          fill: _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.shades100
        });

      default:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_subatomic_Icons_InformationIcon__WEBPACK_IMPORTED_MODULE_5__/* .InformationIcon */ .Y, {
          fill: _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.shades100
        });
    }
  };

  const {
    0: shouldRender,
    1: setShouldRender
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  /*
    useEffect(() => {
      if (toast.visible) {
        setBarWidth('0');  // Reset the width to 0
        const timerForBar = setTimeout(() => {
          setBarWidth('100%');  // Set the width to 100% after 10ms
        }, 10);
        
        const timerForToast = setTimeout(() => {
          hideToast();
        }, 3200);
        return () => {
          clearTimeout(timerForBar);
          clearTimeout(timerForToast);
        };
      }
    }, [toast, hideToast]);
    */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let renderTimeout;

    if (toast.visible) {
      setShouldRender(true);
      setBarWidth('0'); // Reset the width to 0

      const timerForBar = setTimeout(() => {
        setBarWidth('100%'); // Set the width to 100% after 10ms
      }, 10);
      const timerForToast = setTimeout(() => {
        hideToast();
      }, 3000); // We'll give another 600ms for exit animation to complete

      renderTimeout = setTimeout(() => {
        setShouldRender(false);
      }, 3600); // 3200 + 600

      return () => {
        clearTimeout(timerForBar);
        clearTimeout(timerForToast);
        if (renderTimeout) clearTimeout(renderTimeout);
      };
    }
  }, [toast, hideToast]);
  if (!shouldRender) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ToastContainer, {
    role: "alert",
    visible: toast.visible,
    type: toast.type,
    initial: {
      bottom: "0px",
      opacity: 0
    } // initial state (hidden to the right)
    ,
    animate: {
      bottom: "24px",
      opacity: 1
    } // end state (appears from the right)
    ,
    exit: {
      bottom: "0px",
      opacity: 0
    } // exit state (disappears to the right)
    ,
    transition: {
      duration: 0.6,
      ease: [0.88, 0, 0.16, 1]
    } // animation takes 400ms with easeInOut easing
    ,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ToastMessageIndicator, {
      type: toast.type,
      children: returnCorrectIcon()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ToastRight, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ToastText, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
          children: toast.message
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ToastBar, {
        type: toast.type,
        style: {
          width: barWidth
        }
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toast);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 7517:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2287);
/* harmony import */ var _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8338);
/* harmony import */ var _subatomic_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(711);
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6552);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_6__]);
framer_motion__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const BottomSaveNoticeContainer = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion)(styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BottomSaveNotice__BottomSaveNoticeContainer",
  componentId: "sc-1p1908l-0"
})(["@media ", "{position:fixed;bottom:0;left:0;display:flex;flex-direction:column;width:100%;box-sizing:border-box;padding:24px;justify-content:center;gap:20px;background:", ";}@media ", "{padding:32px;gap:24px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral400, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.L));
const NoticeText = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BottomSaveNotice__NoticeText",
  componentId: "sc-1p1908l-1"
})(["@media ", "{display:flex;align-items:flex-start;align-self:stretch;color:", ";flex:1 0 0;p{font-size:20px;font-weight:800;line-height:24px;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.shades100);
const BottomButtons = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BottomSaveNotice__BottomButtons",
  componentId: "sc-1p1908l-2"
})(["@media ", "{display:flex;flex-direction:row;align-items:flex-start;gap:8px;align-self:stretch;}@media ", "{gap:12px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.S);
const BottomButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BottomSaveNotice__BottomButton",
  componentId: "sc-1p1908l-3"
})(["@media ", "{dislay:flex;flex:1 0 0;}@media ", "{flex:none;width:140px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.S);

const BottomSaveNotice = ({
  onSave,
  onCancel
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(BottomSaveNoticeContainer, {
    initial: {
      bottom: "-200px"
    } // initial state (hidden to the right)
    ,
    animate: {
      bottom: "0px"
    } // end state (appears from the right)
    ,
    exit: {
      bottom: "-200px"
    } // exit state (disappears to the right)
    ,
    transition: {
      duration: 0.4,
      ease: [0.88, 0, 0.16, 1]
    } // animation takes 400ms with easeInOut easing
    ,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(NoticeText, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_subatomic_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        text: "You have made changes. Click \u2018Save\u2019 button to apply."
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(BottomButtons, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(BottomButton, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          buttonTypeVariant: "neutral",
          sizeVariant: "large",
          label: "Cancel",
          buttonWidthVariant: "fill",
          onClick: onCancel
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(BottomButton, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          buttonTypeVariant: "primary",
          sizeVariant: "large",
          label: "Save",
          buttonWidthVariant: "fill",
          onClick: onSave
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BottomSaveNotice);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ organism_DefaultRewards)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/constants/Colors.ts
var Colors = __webpack_require__(2287);
// EXTERNAL MODULE: ./src/constants/StyledMediaQuery.ts
var StyledMediaQuery = __webpack_require__(8338);
// EXTERNAL MODULE: ./src/components/subatomic/Text.tsx
var Text = __webpack_require__(711);
// EXTERNAL MODULE: ./src/components/atoms/ToggleSwitch.tsx
var ToggleSwitch = __webpack_require__(5030);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/components/molecules/DefaultRewardItem.tsx








const TriggeredRewardContainer = external_styled_components_default().div.withConfig({
  displayName: "DefaultRewardItem__TriggeredRewardContainer",
  componentId: "sc-1b8nh8y-0"
})(["@media ", "{display:flex;width:100%;gap:12px;flex-direction:column;justify-content:center;color:", ";p{font-size:20px;font-weight:500;line-height:24px;}}@media ", "{gap:16px;width:640px;p{font-size:24px;font-weight:500;line-height:29px;}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral700, StyledMediaQuery/* default */.Z.S);
const InfoToggleCTA = external_styled_components_default().div.withConfig({
  displayName: "DefaultRewardItem__InfoToggleCTA",
  componentId: "sc-1b8nh8y-1"
})(["@media ", "{display:flex;flex-direction:row;align-items:center;gap:24px;flex:1 0 0;align-self:stretch;}"], StyledMediaQuery/* default */.Z.XS);
const RewardInfoPlusToggle = external_styled_components_default().div.withConfig({
  displayName: "DefaultRewardItem__RewardInfoPlusToggle",
  componentId: "sc-1b8nh8y-2"
})(["@media ", "{display:flex;padding:8px 12px;align-items:center;gap:8px;align-self:stretch;background:", ";border-radius:8px;flex:1 0 0;}@media ", "{justify-content:space-between;}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral200, StyledMediaQuery/* default */.Z.S);
const RewardInfo = external_styled_components_default().div.withConfig({
  displayName: "DefaultRewardItem__RewardInfo",
  componentId: "sc-1b8nh8y-3"
})(["@media ", "{display:flex;align-items:center;gap:16px;}@media ", "{gap:16px;}"], StyledMediaQuery/* default */.Z.XS, StyledMediaQuery/* default */.Z.S);
const GiveCustomersDiv = external_styled_components_default().div.withConfig({
  displayName: "DefaultRewardItem__GiveCustomersDiv",
  componentId: "sc-1b8nh8y-4"
})(["@media ", "{display:flex;color:", ";p{font-size:14px;font-weight:500;line-height:22px;}}@media ", "{p{font-size:20px;font-weight:500;line-height:24px;}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral700, StyledMediaQuery/* default */.Z.S);
const PointsGivenDiv = external_styled_components_default().div.withConfig({
  displayName: "DefaultRewardItem__PointsGivenDiv",
  componentId: "sc-1b8nh8y-5"
})(["@media ", "{display:flex;height:48px;padding:0px 8px;justify-content:center;align-items:center;color:", ";background:", ";border-radius:8px;p{font-size:20px;font-weight:800;line-height:24px;}}@media ", "{padding:0px 16px;p{font-size:24px;font-weight:800;line-height:29px;}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral700, Colors/* default */.Z.shades100, StyledMediaQuery/* default */.Z.S);
const PointsDiv = external_styled_components_default().div.withConfig({
  displayName: "DefaultRewardItem__PointsDiv",
  componentId: "sc-1b8nh8y-6"
})(["@media ", "{display:flex;height:48px;align-items:center;gap:12px;color:", ";p{font-size:14px;font-weight:500;line-height:22px;}}@media ", "{p{font-size:20px;font-weight:500;line-height:24px;}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral700, StyledMediaQuery/* default */.Z.S);
const ActiveDiv = external_styled_components_default().div.withConfig({
  displayName: "DefaultRewardItem__ActiveDiv",
  componentId: "sc-1b8nh8y-7"
})(["@media ", "{display:flex;}"], StyledMediaQuery/* default */.Z.XS);
const EditRewardValue = external_styled_components_default().div.withConfig({
  displayName: "DefaultRewardItem__EditRewardValue",
  componentId: "sc-1b8nh8y-8"
})(["@media ", "{display:none;p{color:", ";font-size:14px;font-weight:500;line-height:22px;}}@media ", "{display:flex;padding:8px 12px;border-radius:8px;background:", ";}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.shades100, StyledMediaQuery/* default */.Z.S, Colors/* default */.Z.neutral500);

const DefaultRewardItem = ({
  rewardName: defaultRewardName,
  rewardValue: defaultRewardValue,
  rewardActive: defaultRewardActive,
  index,
  _id,
  id,
  rewardNumberId,
  originalDefaultRewardValue,
  onDefaultToggleChange,
  onEditClick
}) => {
  const handleClick = () => {
    console.log('handle click');
  };

  const {
    0: isDefaultActive,
    1: setIsDefaultActive
  } = (0,external_react_.useState)(defaultRewardActive);
  (0,external_react_.useEffect)(() => {
    setIsDefaultActive(defaultRewardActive);
  }, [defaultRewardActive]);
  console.log("Reward Active in RewardItem:", defaultRewardActive);
  (0,external_react_.useEffect)(() => {
    setIsDefaultActive(originalDefaultRewardValue);
    console.log("isActive state reset to:", originalDefaultRewardValue);
  }, [originalDefaultRewardValue]);

  const handleToggle = newValue => {
    setIsDefaultActive(newValue);
    onDefaultToggleChange(index, newValue);
  };

  const handleEditDefaultRewardClick = () => {
    onEditClick({
      _id,
      id,
      rewardName: defaultRewardName,
      rewardValue: defaultRewardValue,
      rewardActive: defaultRewardActive,
      index,
      rewardNumberId
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(TriggeredRewardContainer, {
    children: [/*#__PURE__*/jsx_runtime.jsx(Text/* default */.Z, {
      text: defaultRewardName
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(InfoToggleCTA, {
      children: [/*#__PURE__*/jsx_runtime.jsx(RewardInfoPlusToggle, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(RewardInfo, {
          children: [/*#__PURE__*/jsx_runtime.jsx(GiveCustomersDiv, {
            children: /*#__PURE__*/jsx_runtime.jsx(Text/* default */.Z, {
              text: "Give customers"
            })
          }), /*#__PURE__*/jsx_runtime.jsx(PointsGivenDiv, {
            children: /*#__PURE__*/jsx_runtime.jsx(Text/* default */.Z, {
              text: defaultRewardValue.toString()
            })
          }), /*#__PURE__*/jsx_runtime.jsx(PointsDiv, {
            children: /*#__PURE__*/jsx_runtime.jsx(Text/* default */.Z, {
              text: "point(s)"
            })
          }), /*#__PURE__*/jsx_runtime.jsx(ActiveDiv, {
            children: /*#__PURE__*/jsx_runtime.jsx(ToggleSwitch/* default */.Z, {
              active: isDefaultActive,
              onChange: handleToggle
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime.jsx(EditRewardValue, {
        onClick: handleEditDefaultRewardClick,
        children: /*#__PURE__*/jsx_runtime.jsx(Text/* default */.Z, {
          text: "Edit Reward Item"
        })
      })]
    })]
  });
};

/* harmony default export */ const molecules_DefaultRewardItem = (DefaultRewardItem);
;// CONCATENATED MODULE: ./src/components/organism/DefaultRewards.tsx








const RewardSettingsContainer = external_styled_components_.styled.div.withConfig({
  displayName: "DefaultRewards__RewardSettingsContainer",
  componentId: "sc-jqrbah-0"
})(["@media ", "{display:flex;flex-direction:column;width:100%;gap:24px;}@media ", "{gap:32px;}"], StyledMediaQuery/* default */.Z.XS, StyledMediaQuery/* default */.Z.L);
const HeadingPlusSubheading = external_styled_components_.styled.div.withConfig({
  displayName: "DefaultRewards__HeadingPlusSubheading",
  componentId: "sc-jqrbah-1"
})(["@media ", "{display:flex;flex-direction:column;align-items:flex-start;gap:4px;align-self:stretch;h3{font-size:24px;font-weight:800;line-height:29px;color:", "}p{font-size:16px;font-weight:500;line-height:19px;color:", ";}}@media ", "{gap:8px;h3{font-size:32px;font-weight:800;line-height:39px;}p{font-size:20px;font-weight:500;line-height:24px;}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral600, Colors/* default */.Z.neutral400, StyledMediaQuery/* default */.Z.L);
const RewardSettingsList = external_styled_components_.styled.div.withConfig({
  displayName: "DefaultRewards__RewardSettingsList",
  componentId: "sc-jqrbah-2"
})(["@media ", "{display:flex;flex-direction:column;gap:24px;width:100%;}@media ", "{gap:32px;}"], StyledMediaQuery/* default */.Z.XS, StyledMediaQuery/* default */.Z.S);

const DefaultRewards = ({
  defaultRewardsData,
  onDefaultRewardsPendingChange,
  originalDefaultRewardToggles,
  currentDefaultRewardToggles,
  onEditClick
}) => {
  console.log(defaultRewardsData);

  if (!defaultRewardsData) {
    return /*#__PURE__*/jsx_runtime.jsx("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(RewardSettingsContainer, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(HeadingPlusSubheading, {
      children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
        children: "Reward Settings"
      }), /*#__PURE__*/jsx_runtime.jsx(Text/* default */.Z, {
        text: "Setup the default triggers for issuing reward stars"
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(RewardSettingsList, {
      children: defaultRewardsData.map(({
        rewardName: defaultRewardName,
        rewardValue: defaultRewardValue,
        rewardActive: defaultRewardActive,
        _id,
        id,
        rewardNumberId
      }, index) => /*#__PURE__*/jsx_runtime.jsx(molecules_DefaultRewardItem, {
        _id: _id,
        id: id,
        index: index,
        originalDefaultRewardValue: originalDefaultRewardToggles[index],
        rewardName: defaultRewardName,
        rewardValue: defaultRewardValue,
        rewardActive: currentDefaultRewardToggles[index],
        rewardNumberId: rewardNumberId,
        onDefaultToggleChange: onDefaultRewardsPendingChange,
        onEditClick: onEditClick
      }, id))
    })]
  });
};

/* harmony default export */ const organism_DefaultRewards = (DefaultRewards);

/***/ }),

/***/ 465:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_InputField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4895);
/* harmony import */ var _subatomic_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(711);
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6552);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8338);
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2287);
/* harmony import */ var _subatomic_Icons_CancelIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5611);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6197);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8187);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_8__, _store_store__WEBPACK_IMPORTED_MODULE_9__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_8__, _store_store__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// components/RewardForm.tsx









 // Import your store



const ModalCloseButton = styled_components__WEBPACK_IMPORTED_MODULE_4__.styled.div.withConfig({
  displayName: "EditDefaultRewardForm__ModalCloseButton",
  componentId: "sc-zcoady-0"
})(["@media ", "{display:flex;position:fixed;top:20px;right:20px;z-index:1000;svg{width:48px;height:48px;}}@media ", "{top:24px;right:24px;svg{width:64px;height:64px;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.XS, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.S);
const RewardFormDiv = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion)(styled_components__WEBPACK_IMPORTED_MODULE_4__.styled.div.withConfig({
  displayName: "EditDefaultRewardForm__RewardFormDiv",
  componentId: "sc-zcoady-1"
})(["@media ", "{position:fixed;right:0;top:0;display:flex;width:280px;height:100vh;background:", ";flex-direction:column;align-items:flex-start;flex-shrink:0;z-index:900;}@media ", "{width:400px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.shades100, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.S));
const RewardFormContent = styled_components__WEBPACK_IMPORTED_MODULE_4__.styled.div.withConfig({
  displayName: "EditDefaultRewardForm__RewardFormContent",
  componentId: "sc-zcoady-2"
})(["@media ", "{display:flex;flex-direction:column;gap:24px;width:100%;padding:88px 16px 16px 16px;box-sizing:border-box;overflow-y:auto;max-height:100vh - 96px;}@media ", "{padding:120px 24px 24px 24px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.XS, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.S);
const RewardFormHeading = styled_components__WEBPACK_IMPORTED_MODULE_4__.styled.div.withConfig({
  displayName: "EditDefaultRewardForm__RewardFormHeading",
  componentId: "sc-zcoady-3"
})(["@media ", "{display:flex;color:", ";p{font-size:24px;font-weight:800;line-height:29px;}}@media ", "{p{font-size:32px;line-height:39px;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.neutral700, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.S);
const FormAndButton = styled_components__WEBPACK_IMPORTED_MODULE_4__.styled.div.withConfig({
  displayName: "EditDefaultRewardForm__FormAndButton",
  componentId: "sc-zcoady-4"
})(["@media ", "{display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:16px;align-self:stretch;form{display:flex;gap:24px;width:100%;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.XS);
const RequiredLabel = styled_components__WEBPACK_IMPORTED_MODULE_4__.styled.div.withConfig({
  displayName: "EditDefaultRewardForm__RequiredLabel",
  componentId: "sc-zcoady-5"
})(["@media ", "{display:flex;align-items:flex-start;gap:4px;color:", ";p{font-size:16px;}h6{font-size:14px;font-weight:500;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.error500);
const FormFields = styled_components__WEBPACK_IMPORTED_MODULE_4__.styled.div.withConfig({
  displayName: "EditDefaultRewardForm__FormFields",
  componentId: "sc-zcoady-6"
})(["@media ", "{display:flex;flex-direction:column;align-items:flex-start;gap:16px;width:100%;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.XS);

const EditDefaultRewardForm = ({
  onClose,
  _id,
  rewardNumberId,
  defaultRewardValue,
  index
}) => {
  const {
    0: newDefaultRewardValue,
    1: setNewDefaultRewardValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultRewardValue);
  const {
    0: hasChanged,
    1: setHasChanged
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: fieldValid,
    1: setFieldValid
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Check for changes
    setHasChanged(newDefaultRewardValue !== defaultRewardValue); // Check if the field is valid (not empty)

    setFieldValid(newDefaultRewardValue.trim() !== "");
  }, [newDefaultRewardValue, defaultRewardValue]);
  const {
    showToast
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_9__/* .useStore */ .o)(state => ({
    showToast: state.showToast
  }));

  const handleUpdate = async e => {
    e.preventDefault(); // Get global state data

    const {
      data
    } = _store_store__WEBPACK_IMPORTED_MODULE_9__/* .useStore */ .o.getState(); // Directly access Zustand state

    console.log(data);
    const finalDefaultRewardValue = parseFloat(newDefaultRewardValue);
    const payload = {
      rewardDetails: {
        value: finalDefaultRewardValue,
        id: rewardNumberId
      },
      // Include any other relevant data
      user: data
    };

    try {
      const response = await fetch('http://localhost:5000/update-default-reward', {
        method: 'PUT',
        // Typically, updates are done via PUT
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const updatedDefaultReward = await response.json();
        showToast('Reward updated successfully!', 'success'); // Additional logic here (e.g., close the form, refresh rewards list, etc.)
      } else {
        showToast('Failed to update reward.', 'error');
      }
    } catch (error) {
      showToast('Error: Something went wrong!', 'error');
    }

    onClose();
  }; // The part where the JSX is returned


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(RewardFormDiv, {
    initial: {
      x: "100%"
    } // initial state (hidden to the right)
    ,
    animate: {
      x: "0%"
    } // end state (appears from the right)
    ,
    exit: {
      x: "100%"
    } // exit state (disappears to the right)
    ,
    transition: {
      duration: 0.4,
      ease: [0.88, 0, 0.16, 1]
    } // animation takes 400ms with easeInOut easing
    ,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(ModalCloseButton, {
      onClick: onClose,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_subatomic_Icons_CancelIcon__WEBPACK_IMPORTED_MODULE_7__/* .CancelIcon */ .F, {
        fill: _constants_Colors__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.neutral700
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(RewardFormContent, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(RewardFormHeading, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_subatomic_Text__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          text: "Edit Reward"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(FormAndButton, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(RequiredLabel, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_subatomic_Text__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            text: "*",
            color: _constants_Colors__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.error500
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h6", {
            children: "Required"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
          onSubmit: handleUpdate,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(FormFields, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_atoms_InputField__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              label: "Reward Value",
              value: newDefaultRewardValue.toString() // Convert the number to a string for the input
              ,
              onChange: value => setNewDefaultRewardValue(value) // Convert the string back to a number when updating the state
              ,
              required: true,
              placeholder: "Ex: 10"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            buttonTypeVariant: hasChanged && fieldValid ? 'primary' : 'disabled',
            sizeVariant: "large",
            label: "Update",
            buttonWidthVariant: "fill",
            onClick: handleUpdate,
            type: "submit",
            disabled: !hasChanged || !fieldValid
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditDefaultRewardForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1285:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_InputField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4895);
/* harmony import */ var _atoms_DropdownField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1094);
/* harmony import */ var _subatomic_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(711);
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6552);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8338);
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2287);
/* harmony import */ var _subatomic_Icons_CancelIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5611);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6197);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8187);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_9__, _store_store__WEBPACK_IMPORTED_MODULE_10__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_9__, _store_store__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// components/RewardForm.tsx










 // Import your store



const ModalCloseButton = styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.div.withConfig({
  displayName: "EditRewardForm__ModalCloseButton",
  componentId: "sc-1wk1dm3-0"
})(["@media ", "{display:flex;position:absolute;top:20px;right:20px;z-index:1000;svg{width:48px;height:48px;}}@media ", "{top:24px;right:24px;svg{width:64px;height:64px;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.XS, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.S);
const RewardFormDiv = (0,framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion)(styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.div.withConfig({
  displayName: "EditRewardForm__RewardFormDiv",
  componentId: "sc-1wk1dm3-1"
})(["@media ", "{position:fixed;right:0;top:0;display:flex;width:280px;height:100vh;background:", ";flex-direction:column;align-items:flex-start;flex-shrink:0;z-index:900;}@media ", "{width:400px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.shades100, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.S));
const RewardFormContent = styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.div.withConfig({
  displayName: "EditRewardForm__RewardFormContent",
  componentId: "sc-1wk1dm3-2"
})(["@media ", "{display:flex;flex-direction:column;gap:24px;width:100%;padding:88px 16px 16px 16px;box-sizing:border-box;overflow-y:auto;max-height:100vh - 96px;}@media ", "{padding:120px 24px 24px 24px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.XS, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.S);
const RewardFormHeading = styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.div.withConfig({
  displayName: "EditRewardForm__RewardFormHeading",
  componentId: "sc-1wk1dm3-3"
})(["@media ", "{display:flex;color:", ";p{font-size:24px;font-weight:800;line-height:29px;}}@media ", "{p{font-size:32px;line-height:39px;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.neutral700, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.S);
const FormAndButton = styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.div.withConfig({
  displayName: "EditRewardForm__FormAndButton",
  componentId: "sc-1wk1dm3-4"
})(["@media ", "{display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:16px;align-self:stretch;form{display:flex;gap:24px;width:100%;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.XS);
const RequiredLabel = styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.div.withConfig({
  displayName: "EditRewardForm__RequiredLabel",
  componentId: "sc-1wk1dm3-5"
})(["@media ", "{display:flex;align-items:flex-start;gap:4px;color:", ";p{font-size:16px;}h6{font-size:14px;font-weight:500;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.error500);
const FormFields = styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.div.withConfig({
  displayName: "EditRewardForm__FormFields",
  componentId: "sc-1wk1dm3-6"
})(["@media ", "{display:flex;flex-direction:column;align-items:flex-start;gap:16px;width:100%;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.XS);

const EditRewardForm = ({
  onClose,
  _id,
  id,
  rewardName,
  rewardValue,
  rewardCost,
  rewardTerms,
  rewardActive,
  rewardid,
  index
}) => {
  const {
    0: newRewardName,
    1: setNewRewardName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(rewardName);
  const {
    0: newRewardValue,
    1: setNewRewardValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(rewardValue);
  const {
    0: newRewardCost,
    1: setNewRewardCost
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(rewardCost); // Change this to string

  const {
    0: newRewardTerms,
    1: setNewRewardTerms
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(rewardTerms);
  const {
    0: hasChanged,
    1: setHasChanged
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: fieldsValid,
    1: setFieldsValid
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    showToast
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_10__/* .useStore */ .o)(state => ({
    showToast: state.showToast
  }));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    checkForChanges();
  }, [newRewardName, newRewardValue, newRewardCost, newRewardTerms]);

  const checkForChanges = () => {
    if (newRewardName !== rewardName || newRewardValue !== rewardValue || newRewardCost !== rewardCost || newRewardTerms !== rewardTerms) {
      setHasChanged(true);
    } else {
      setHasChanged(false);
    }

    if (newRewardName.trim() === "" || newRewardValue.trim() === "" || newRewardCost.trim() === "" // Add any other required field checks here
    ) {
      setFieldsValid(false);
    } else {
      setFieldsValid(true);
    }
  };

  const handleUpdate = async e => {
    e.preventDefault(); // Get global state data

    const {
      data
    } = _store_store__WEBPACK_IMPORTED_MODULE_10__/* .useStore */ .o.getState(); // Directly access Zustand state

    console.log(data);
    const finalRewardCost = parseFloat(newRewardCost);
    const payload = {
      rewardDetails: {
        name: newRewardName,
        cost: finalRewardCost,
        terms: newRewardTerms,
        value: newRewardValue,
        id: rewardid,
        active: rewardActive
      },
      // Include any other relevant data
      user: data
    };

    try {
      const response = await fetch('http://localhost:5000/update-reward', {
        method: 'PUT',
        // Typically, updates are done via PUT
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const updatedReward = await response.json();
        showToast('Reward updated successfully!', 'success'); // Additional logic here (e.g., close the form, refresh rewards list, etc.)
      } else {
        showToast('Failed to update reward.', 'error');
      }
    } catch (error) {
      showToast('Error: Something went wrong!', 'error');
    }

    onClose();
  }; // The part where the JSX is returned


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(RewardFormDiv, {
    initial: {
      x: "100%"
    } // initial state (hidden to the right)
    ,
    animate: {
      x: "0%"
    } // end state (appears from the right)
    ,
    exit: {
      x: "100%"
    } // exit state (disappears to the right)
    ,
    transition: {
      duration: 0.4,
      ease: [0.88, 0, 0.16, 1]
    } // animation takes 400ms with easeInOut easing
    ,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ModalCloseButton, {
      onClick: onClose,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_subatomic_Icons_CancelIcon__WEBPACK_IMPORTED_MODULE_8__/* .CancelIcon */ .F, {
        fill: _constants_Colors__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.neutral700
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(RewardFormContent, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(RewardFormHeading, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_subatomic_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          text: "Edit Reward"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(FormAndButton, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(RequiredLabel, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_subatomic_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            text: "*",
            color: _constants_Colors__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.error500
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("h6", {
            children: "Required"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("form", {
          onSubmit: handleUpdate,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(FormFields, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_atoms_InputField__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              label: "Reward Name",
              value: newRewardName,
              onChange: value => setNewRewardName(value),
              required: true,
              placeholder: "Ex: Hamburger"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_atoms_InputField__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              label: "Reward Cost",
              value: newRewardCost.toString() // Convert the number to a string for the input
              ,
              onChange: value => setNewRewardCost(value) // Convert the string back to a number when updating the state
              ,
              required: true,
              placeholder: "Ex: 10"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_atoms_DropdownField__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
              value: newRewardValue,
              onChange: value => setNewRewardValue(value),
              label: "Reward Value",
              useDefaultDropdown: false,
              required: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_atoms_InputField__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              label: "Reward Terms",
              value: newRewardTerms,
              onChange: value => setNewRewardTerms(value),
              placeholder: "Ex: Need 10 stars for this"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            buttonTypeVariant: hasChanged && fieldsValid ? 'primary' : 'disabled',
            sizeVariant: "large",
            label: "Update",
            buttonWidthVariant: "fill",
            onClick: handleUpdate,
            type: "submit",
            disabled: !hasChanged || !fieldsValid
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditRewardForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5175:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_InputField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4895);
/* harmony import */ var _atoms_DropdownField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1094);
/* harmony import */ var _subatomic_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(711);
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6552);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8338);
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2287);
/* harmony import */ var _subatomic_Icons_CancelIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5611);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6197);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8187);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_9__, _store_store__WEBPACK_IMPORTED_MODULE_10__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_9__, _store_store__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// components/RewardForm.tsx










 // Import your store



const ModalCloseButton = styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.div.withConfig({
  displayName: "RewardForm__ModalCloseButton",
  componentId: "sc-1vny7h3-0"
})(["@media ", "{display:flex;position:fixed;top:20px;right:20px;z-index:1000;svg{width:48px;height:48px;}}@media ", "{top:24px;right:24px;svg{width:64px;height:64px;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.XS, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.S);
const RewardFormDiv = (0,framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion)(styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.div.withConfig({
  displayName: "RewardForm__RewardFormDiv",
  componentId: "sc-1vny7h3-1"
})(["@media ", "{position:fixed;right:0;top:0;display:flex;width:280px;height:100vh;background:", ";flex-direction:column;align-items:flex-start;flex-shrink:0;z-index:900;}@media ", "{width:400px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.shades100, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.S));
const RewardFormContent = styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.div.withConfig({
  displayName: "RewardForm__RewardFormContent",
  componentId: "sc-1vny7h3-2"
})(["@media ", "{display:flex;flex-direction:column;gap:24px;width:100%;padding:88px 16px 16px 16px;box-sizing:border-box;overflow-y:auto;max-height:100vh - 96px;}@media ", "{padding:120px 24px 24px 24px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.XS, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.S);
const RewardFormHeading = styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.div.withConfig({
  displayName: "RewardForm__RewardFormHeading",
  componentId: "sc-1vny7h3-3"
})(["@media ", "{display:flex;color:", ";p{font-size:24px;font-weight:800;line-height:29px;}}@media ", "{p{font-size:32px;line-height:39px;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.neutral700, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.S);
const FormAndButton = styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.div.withConfig({
  displayName: "RewardForm__FormAndButton",
  componentId: "sc-1vny7h3-4"
})(["@media ", "{display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:16px;align-self:stretch;form{display:flex;gap:24px;width:100%;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.XS);
const RequiredLabel = styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.div.withConfig({
  displayName: "RewardForm__RequiredLabel",
  componentId: "sc-1vny7h3-5"
})(["@media ", "{display:flex;align-items:flex-start;gap:4px;color:", ";p{font-size:16px;}h6{font-size:14px;font-weight:500;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.error500);
const FormFields = styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.div.withConfig({
  displayName: "RewardForm__FormFields",
  componentId: "sc-1vny7h3-6"
})(["@media ", "{display:flex;flex-direction:column;align-items:flex-start;gap:16px;width:100%;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.XS);

const RewardForm = ({
  onClose
}) => {
  const {
    0: rewardName,
    1: setRewardName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: rewardCost,
    1: setRewardCost
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: rewardTerms,
    1: setRewardTerms
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: rewardValue,
    1: setRewardValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Free Item');
  const {
    0: isRewardNameValid,
    1: setRewardNameValid
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isRewardCostValid,
    1: setRewardCostValid
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    showToast
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_10__/* .useStore */ .o)(state => ({
    showToast: state.showToast
  }));

  const handleSubmit = async e => {
    e.preventDefault(); // Get global state data

    const {
      data
    } = _store_store__WEBPACK_IMPORTED_MODULE_10__/* .useStore */ .o.getState(); // Directly access Zustand state

    console.log(data); // Collect reward details and some global state data into an object

    const payload = {
      rewardDetails: {
        name: rewardName,
        cost: rewardCost,
        terms: rewardTerms,
        value: rewardValue
      },
      user: data // example global state data
      // include any other relevant state data

    }; // Make POST request to your Express server

    try {
      const response = await fetch('http://localhost:5000/add-reward', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        showToast('Reward added successfully!', 'success'); // Additional logic here (e.g., close the form, refresh rewards list, etc.)
      } else {
        console.log('Failed:', response);
        showToast('Failed to add reward.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showToast(`Error: Something wrong happened!`, 'error');
    }

    onClose();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(RewardFormDiv, {
    initial: {
      x: "100%"
    } // initial state (hidden to the right)
    ,
    animate: {
      x: "0%"
    } // end state (appears from the right)
    ,
    exit: {
      x: "100%"
    } // exit state (disappears to the right)
    ,
    transition: {
      duration: 0.4,
      ease: [0.88, 0, 0.16, 1]
    } // animation takes 400ms with easeInOut easing
    ,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ModalCloseButton, {
      onClick: onClose,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_subatomic_Icons_CancelIcon__WEBPACK_IMPORTED_MODULE_8__/* .CancelIcon */ .F, {
        fill: _constants_Colors__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.neutral700
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(RewardFormContent, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(RewardFormHeading, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_subatomic_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          text: "Add New Reward"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(FormAndButton, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(RequiredLabel, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_subatomic_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            text: "*",
            color: _constants_Colors__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.error500
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("h6", {
            children: "Required"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("form", {
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(FormFields, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_atoms_InputField__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              label: "Reward Name",
              value: rewardName,
              onChange: value => {
                setRewardName(value);
                setRewardNameValid(!!value); // Validate based on whether the input is not empty
              },
              required: true,
              placeholder: "Ex: Hamburer"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_atoms_InputField__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              label: "Reward Cost",
              value: rewardCost,
              onChange: value => {
                setRewardCost(value);
                setRewardCostValid(!!value);
              },
              required: true,
              placeholder: "Ex: 10"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_atoms_DropdownField__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
              value: rewardValue,
              onChange: value => setRewardValue(value),
              label: "Reward Value",
              useDefaultDropdown: false,
              required: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_atoms_InputField__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              label: "Reward Terms",
              value: rewardTerms,
              onChange: value => setRewardTerms(value),
              placeholder: "Ex: Need 10 stars for this"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            buttonTypeVariant: isRewardNameValid && isRewardCostValid
            /* && Add conditions for other fields */
            ? 'primary' : 'disabled',
            sizeVariant: "large",
            label: "Submit",
            buttonWidthVariant: "fill",
            onClick: handleSubmit,
            type: "submit",
            disabled: !isRewardNameValid || !isRewardCostValid
            /* || Add conditions for other fields */

          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RewardForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ organism_RewardOfferings)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/constants/Colors.ts
var Colors = __webpack_require__(2287);
// EXTERNAL MODULE: ./src/constants/StyledMediaQuery.ts
var StyledMediaQuery = __webpack_require__(8338);
// EXTERNAL MODULE: ./src/components/subatomic/Text.tsx
var Text = __webpack_require__(711);
// EXTERNAL MODULE: ./src/components/atoms/Button.tsx
var Button = __webpack_require__(6552);
// EXTERNAL MODULE: ./src/components/atoms/ToggleSwitch.tsx
var ToggleSwitch = __webpack_require__(5030);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/components/molecules/RewardItem.tsx









const RewardItemContainer = external_styled_components_default().div.withConfig({
  displayName: "RewardItem__RewardItemContainer",
  componentId: "sc-1saas2t-0"
})(["@media ", "{display:flex;width:100%;padding:20px 0px;align-items:center;gap:12px;border-bottom:1px solid ", ";}@media ", "{padding:24px 0px;gap:16px;}@media ", "{padding:20px 0px;gap:24px;}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral200, StyledMediaQuery/* default */.Z.S, StyledMediaQuery/* default */.Z.L);
const RewardNameAndValue = external_styled_components_default().div.withConfig({
  displayName: "RewardItem__RewardNameAndValue",
  componentId: "sc-1saas2t-1"
})(["@media ", "{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;flex:1 0 0;h6{font-size:16px;font-weight:800;line-height:26px;color:", ";}p{font-size:16px;font-weight:400;line-height:19px;color:", ";}}@media ", "{gap:4px;h6{font-size:24px;font-weight:800;line-height:29px;}p{font-size:20px;font-weight:400;line-height:24px;}}@media ", "{h6{font-size:32px;font-weight:800;line-height:39px;}p{font-size:24px;font-weight:500;line-height:29px;}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral700, Colors/* default */.Z.neutral400, StyledMediaQuery/* default */.Z.S, StyledMediaQuery/* default */.Z.L);
const RewardCost = external_styled_components_default().div.withConfig({
  displayName: "RewardItem__RewardCost",
  componentId: "sc-1saas2t-2"
})(["@media ", "{display:flex;width:50px;align-items:center;gap:12px;flex-shrink:0;p{flex:1 0 0;font-size:24px;font-weight:500;line-height:29px;color:", ";}}@media ", "{width:64px;}@media ", "{width:96px;p{font-size:32px;font-weight:500;line-height:39px;}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral700, StyledMediaQuery/* default */.Z.S, StyledMediaQuery/* default */.Z.L);
const RewardNotes = external_styled_components_default().div.withConfig({
  displayName: "RewardItem__RewardNotes",
  componentId: "sc-1saas2t-3"
})(["@media ", "{display:none;}@media ", "{display:flex;width:160px;align-items:center;flex-shrink:0;p{font-size:16px;font-weight:500;line-height:19px;color:", ";}}@media ", "{width:240px;}"], StyledMediaQuery/* default */.Z.XS, StyledMediaQuery/* default */.Z.S, Colors/* default */.Z.neutral700, StyledMediaQuery/* default */.Z.L);
const RewardActive = external_styled_components_default().div.withConfig({
  displayName: "RewardItem__RewardActive",
  componentId: "sc-1saas2t-4"
})(["@media ", "{display:flex;flex-direction:column;align-items:center;width:64px;}"], StyledMediaQuery/* default */.Z.XS);
const RewardEdit = external_styled_components_default().div.withConfig({
  displayName: "RewardItem__RewardEdit",
  componentId: "sc-1saas2t-5"
})(["@media ", "{display:none;width:80px;justify-content:center;align-items:center;flex-shrink:0;}@media ", "{display:flex;width:80px;justify-content:center;align-items:center;flex-shrink:0;}"], StyledMediaQuery/* default */.Z.XS, StyledMediaQuery/* default */.Z.S); // Define the type for the RewardItem component itself

const RewardItem = ({
  id,
  _id,
  rewardid,
  rewardName,
  rewardValue,
  rewardCost,
  rewardActive,
  rewardTerms,
  index,
  originalRewardValue,
  onRewardToggleChange,
  onEditClick
}) => {
  const {
    0: isActive,
    1: setIsActive
  } = (0,external_react_.useState)(rewardActive);
  (0,external_react_.useEffect)(() => {
    setIsActive(rewardActive);
  }, [rewardActive]);
  console.log("Reward Active in RewardItem:", rewardActive);
  (0,external_react_.useEffect)(() => {
    setIsActive(originalRewardValue);
    console.log("isActive state reset to:", originalRewardValue);
  }, [originalRewardValue]);

  const handleClick = () => {
    console.log('clicked');
  };

  const handleEditRewardClick = () => {
    onEditClick({
      id,
      _id,
      rewardName,
      rewardValue,
      rewardCost,
      rewardTerms,
      rewardActive,
      rewardid,
      index
    });
  };

  const handleToggle = newValue => {
    setIsActive(newValue);
    onRewardToggleChange(index, newValue);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(RewardItemContainer, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(RewardNameAndValue, {
      children: [/*#__PURE__*/jsx_runtime.jsx("h6", {
        children: rewardName
      }), /*#__PURE__*/jsx_runtime.jsx(Text/* default */.Z, {
        text: rewardValue
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(RewardCost, {
      children: /*#__PURE__*/jsx_runtime.jsx(Text/* default */.Z, {
        text: rewardCost.toString()
      })
    }), /*#__PURE__*/jsx_runtime.jsx(RewardNotes, {
      children: /*#__PURE__*/jsx_runtime.jsx(Text/* default */.Z, {
        text: rewardTerms
      })
    }), /*#__PURE__*/jsx_runtime.jsx(RewardActive, {
      children: /*#__PURE__*/jsx_runtime.jsx(ToggleSwitch/* default */.Z, {
        active: isActive,
        onChange: handleToggle
      })
    }), /*#__PURE__*/jsx_runtime.jsx(RewardEdit, {
      children: /*#__PURE__*/jsx_runtime.jsx(Button/* default */.Z, {
        buttonTypeVariant: "neutral",
        sizeVariant: "small",
        label: "Edit",
        buttonWidthVariant: "content",
        onClick: handleEditRewardClick
      })
    })]
  });
};

/* harmony default export */ const molecules_RewardItem = (RewardItem);
;// CONCATENATED MODULE: ./src/components/atoms/RewardTableHead.tsx
const _excluded = ["label1", "label2", "label3", "label4", "label5"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const RewardTableHeadContainer = external_styled_components_default().div.withConfig({
  displayName: "RewardTableHead__RewardTableHeadContainer",
  componentId: "sc-l0bi0c-0"
})(["@media ", "{display:flex;gap:12px;flex-direction:row;width:100%;padding-bottom:8px;border-bottom:1px solid ", ";justify-content:space-between;}@media ", "{gap:16px;}@media ", "{gap:24px;}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral200, StyledMediaQuery/* default */.Z.S, StyledMediaQuery/* default */.Z.L);
const RewardTableRewardsLabel = external_styled_components_default().div.withConfig({
  displayName: "RewardTableHead__RewardTableRewardsLabel",
  componentId: "sc-l0bi0c-1"
})(["@media ", "{display:flex;align-items:center;flex:1 0 0;p{font-size:16px;line-height:19px;font-weight:500;color:", ";}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral400);
const RewardTableCostLabel = external_styled_components_default().div.withConfig({
  displayName: "RewardTableHead__RewardTableCostLabel",
  componentId: "sc-l0bi0c-2"
})(["@media ", "{display:flex;width:50px;align-items:center;flex-shrink:0;p{font-size:16px;line-height:19px;font-weight:500;color:", ";}}@media ", "{width:64px;}@media ", "{width:96px;}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral400, StyledMediaQuery/* default */.Z.S, StyledMediaQuery/* default */.Z.L);
const RewardTableTermsLabel = external_styled_components_default().div.withConfig({
  displayName: "RewardTableHead__RewardTableTermsLabel",
  componentId: "sc-l0bi0c-3"
})(["@media ", "{display:none;p{font-size:16px;line-height:19px;font-weight:500;color:", ";}}@media ", "{display:flex;width:160px;}@media ", "{width:240px;}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral400, StyledMediaQuery/* default */.Z.S, StyledMediaQuery/* default */.Z.L);
const RewardTableActiveLabel = external_styled_components_default().div.withConfig({
  displayName: "RewardTableHead__RewardTableActiveLabel",
  componentId: "sc-l0bi0c-4"
})(["@media ", "{display:flex;width:64px;align-items:center;flex-shrink:0;p{font-size:16px;line-height:19px;font-weight:500;color:", ";}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral400);
const RewardTableEditLabel = external_styled_components_default().div.withConfig({
  displayName: "RewardTableHead__RewardTableEditLabel",
  componentId: "sc-l0bi0c-5"
})(["@media ", "{display:none;p{font-size:16px;line-height:19px;font-weight:500;color:", ";}}@media ", "{display:flex;width:80px;}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral400, StyledMediaQuery/* default */.Z.S);

const RewardTableHead = _ref => {
  let {
    label1,
    label2,
    label3,
    label4,
    label5
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(RewardTableHeadContainer, {
    children: [/*#__PURE__*/jsx_runtime.jsx(RewardTableRewardsLabel, {
      children: /*#__PURE__*/jsx_runtime.jsx(Text/* default */.Z, {
        text: label1
      })
    }), /*#__PURE__*/jsx_runtime.jsx(RewardTableCostLabel, {
      children: /*#__PURE__*/jsx_runtime.jsx(Text/* default */.Z, {
        text: label2
      })
    }), /*#__PURE__*/jsx_runtime.jsx(RewardTableTermsLabel, {
      children: /*#__PURE__*/jsx_runtime.jsx(Text/* default */.Z, {
        text: label3
      })
    }), /*#__PURE__*/jsx_runtime.jsx(RewardTableActiveLabel, {
      children: /*#__PURE__*/jsx_runtime.jsx(Text/* default */.Z, {
        text: label4
      })
    }), /*#__PURE__*/jsx_runtime.jsx(RewardTableEditLabel, {
      children: /*#__PURE__*/jsx_runtime.jsx(Text/* default */.Z, {
        text: label5
      })
    })]
  });
};

/* harmony default export */ const atoms_RewardTableHead = (RewardTableHead);
;// CONCATENATED MODULE: ./src/components/organism/RewardOfferings.tsx

 // Import your RewardItem component here








const RewardOfferingsContainer = external_styled_components_.styled.div.withConfig({
  displayName: "RewardOfferings__RewardOfferingsContainer",
  componentId: "sc-ez1crv-0"
})(["@media ", "{width:100%;display:flex;flex-direction:column;align-items:flex-start;gap:24px;align-self:stretch;}@media ", "{gap:32px;}"], StyledMediaQuery/* default */.Z.XS, StyledMediaQuery/* default */.Z.L);
const HeadingPlusSubheading = external_styled_components_.styled.div.withConfig({
  displayName: "RewardOfferings__HeadingPlusSubheading",
  componentId: "sc-ez1crv-1"
})(["@media ", "{display:flex;flex-direction:column;align-items:flex-start;gap:4px;align-self:stretch;h3{font-size:24px;font-weight:800;line-height:29px;color:", "}p{font-size:16px;font-weight:500;line-height:19px;color:", ";}}@media ", "{gap:8px;h3{font-size:32px;font-weight:800;line-height:39px;}p{font-size:20px;font-weight:500;line-height:24px;}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral600, Colors/* default */.Z.neutral400, StyledMediaQuery/* default */.Z.L);
const RewardOfferingList = external_styled_components_.styled.div.withConfig({
  displayName: "RewardOfferings__RewardOfferingList",
  componentId: "sc-ez1crv-2"
})(["@media ", "{display:flex;flex-direction:column;width:100%;}"], StyledMediaQuery/* default */.Z.XS);

const RewardOfferings = ({
  rewardsData,
  onPendingChange,
  originalRewardToggles,
  currentRewardToggles,
  onEditClick
}) => {
  console.log(rewardsData);

  if (!rewardsData) {
    // Handle the case when rewardsData is not defined (e.g., still loading)
    return /*#__PURE__*/jsx_runtime.jsx("p", {
      children: "Loading..."
    }); // You can display a loading message or spinner
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(RewardOfferingsContainer, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(HeadingPlusSubheading, {
      children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
        children: "Offerings"
      }), /*#__PURE__*/jsx_runtime.jsx(Text/* default */.Z, {
        text: "Create & Manage Rewards"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(RewardOfferingList, {
      children: [/*#__PURE__*/jsx_runtime.jsx(atoms_RewardTableHead, {
        label1: "Rewards",
        label2: "Cost",
        label3: "Terms",
        label4: "Active",
        label5: "Edit"
      }), rewardsData.map((reward, index) => /*#__PURE__*/jsx_runtime.jsx(molecules_RewardItem, {
        // Make sure to provide a unique key for each item
        // Pass the data to the RewardItem component as props
        index: index,
        id: reward.id,
        _id: reward._id,
        rewardid: reward.rewardid,
        originalRewardValue: originalRewardToggles[index],
        rewardName: reward.rewardName,
        rewardValue: reward.rewardValue,
        rewardCost: reward.rewardCost,
        rewardTerms: reward.rewardTerms,
        rewardActive: currentRewardToggles[index],
        onRewardToggleChange: onPendingChange,
        onEditClick: onEditClick // Add other props as needed

      }, reward.id))]
    })]
  });
};

/* harmony default export */ const organism_RewardOfferings = (RewardOfferings);

/***/ }),

/***/ 5611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ CancelIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);


const CancelIcon = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: props.fill,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M7.9 16.1C8.01667 16.2333 8.14583 16.3 8.2875 16.3C8.42917 16.3 8.56667 16.2333 8.7 16.1L12 12.8L15.325 16.125C15.4417 16.2417 15.575 16.2958 15.725 16.2875C15.875 16.2792 16 16.2167 16.1 16.1C16.2333 15.9833 16.3 15.8542 16.3 15.7125C16.3 15.5708 16.2333 15.4333 16.1 15.3L12.8 12L16.125 8.675C16.2417 8.55833 16.2958 8.425 16.2875 8.275C16.2792 8.125 16.2167 8 16.1 7.9C15.9833 7.76667 15.8542 7.7 15.7125 7.7C15.5708 7.7 15.4333 7.76667 15.3 7.9L12 11.2L8.675 7.875C8.55833 7.75833 8.425 7.70417 8.275 7.7125C8.125 7.72083 8 7.78333 7.9 7.9C7.76667 8.01667 7.7 8.14583 7.7 8.2875C7.7 8.42917 7.76667 8.56667 7.9 8.7L11.2 12L7.875 15.325C7.75833 15.4417 7.70417 15.575 7.7125 15.725C7.72083 15.875 7.78333 16 7.9 16.1V16.1ZM12 21.5C10.6667 21.5 9.42083 21.2583 8.2625 20.775C7.10417 20.2917 6.09583 19.6208 5.2375 18.7625C4.37917 17.9042 3.70833 16.8958 3.225 15.7375C2.74167 14.5792 2.5 13.3333 2.5 12C2.5 10.6667 2.74167 9.425 3.225 8.275C3.70833 7.125 4.37917 6.12083 5.2375 5.2625C6.09583 4.40417 7.10417 3.72917 8.2625 3.2375C9.42083 2.74583 10.6667 2.5 12 2.5C13.3333 2.5 14.575 2.74583 15.725 3.2375C16.875 3.72917 17.8792 4.40417 18.7375 5.2625C19.5958 6.12083 20.2708 7.125 20.7625 8.275C21.2542 9.425 21.5 10.6667 21.5 12C21.5 13.3333 21.2542 14.5792 20.7625 15.7375C20.2708 16.8958 19.5958 17.9042 18.7375 18.7625C17.8792 19.6208 16.875 20.2917 15.725 20.775C14.575 21.2583 13.3333 21.5 12 21.5ZM12 20.375C14.3 20.375 16.2708 19.5542 17.9125 17.9125C19.5542 16.2708 20.375 14.3 20.375 12C20.375 9.7 19.5542 7.72917 17.9125 6.0875C16.2708 4.44583 14.3 3.625 12 3.625C9.7 3.625 7.72917 4.44583 6.0875 6.0875C4.44583 7.72917 3.625 9.7 3.625 12C3.625 14.3 4.44583 16.2708 6.0875 17.9125C7.72917 19.5542 9.7 20.375 12 20.375Z"
    })
  });
};

/***/ }),

/***/ 915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ CheckCircleIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);


const CheckCircleIcon = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: props.fill,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M10.525 14.4962L7.98843 11.95C7.87048 11.8385 7.73042 11.7811 7.56825 11.7779C7.40607 11.7747 7.26088 11.8372 7.13268 11.9654C7.01473 12.0834 6.95575 12.2234 6.95575 12.3856C6.95575 12.5478 7.01473 12.6878 7.13268 12.8058L10.0192 15.7077C10.1628 15.8577 10.3314 15.9327 10.525 15.9327C10.7186 15.9327 10.8872 15.8577 11.0308 15.7077L16.8327 9.91538C16.9545 9.78718 17.017 9.64199 17.0202 9.47981C17.0234 9.31764 16.9609 9.17246 16.8327 9.04426C16.7045 8.92631 16.5567 8.8699 16.3894 8.87503C16.2221 8.88015 16.0795 8.94168 15.9615 9.05963L10.525 14.4962ZM12.0017 21.5C10.698 21.5 9.46966 21.2506 8.31673 20.752C7.16379 20.2533 6.15555 19.5724 5.292 18.7092C4.42843 17.846 3.74721 16.8382 3.24833 15.6858C2.74944 14.5334 2.5 13.3053 2.5 12.0017C2.5 10.6877 2.74933 9.45271 3.248 8.29658C3.74667 7.14043 4.42758 6.13475 5.29075 5.27953C6.15393 4.4243 7.16173 3.74724 8.31415 3.24836C9.46658 2.74947 10.6946 2.50003 11.9983 2.50003C13.3122 2.50003 14.5473 2.74936 15.7034 3.24803C16.8596 3.7467 17.8652 4.42345 18.7205 5.27828C19.5757 6.13313 20.2527 7.13837 20.7516 8.29401C21.2505 9.44962 21.5 10.6844 21.5 11.9983C21.5 13.302 21.2506 14.5303 20.752 15.6833C20.2533 16.8362 19.5765 17.8444 18.7217 18.708C17.8669 19.5715 16.8616 20.2528 15.706 20.7517C14.5504 21.2505 13.3156 21.5 12.0017 21.5ZM12 20.3654C14.3282 20.3654 16.3045 19.5506 17.9288 17.9212C19.5532 16.2917 20.3654 14.318 20.3654 12C20.3654 9.67181 19.5532 7.69552 17.9288 6.07116C16.3045 4.44681 14.3282 3.63463 12 3.63463C9.68203 3.63463 7.70831 4.44681 6.07883 6.07116C4.44934 7.69552 3.6346 9.67181 3.6346 12C3.6346 14.318 4.44934 16.2917 6.07883 17.9212C7.70831 19.5506 9.68203 20.3654 12 20.3654Z"
    })
  });
};

/***/ }),

/***/ 1805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ ErrorIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);


const ErrorIcon = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: props.fill,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M11.9995 16.7308C12.1979 16.7308 12.361 16.667 12.4889 16.5394C12.6168 16.4118 12.6807 16.2488 12.6807 16.0504C12.6807 15.8521 12.6169 15.6889 12.4894 15.5611C12.3618 15.4332 12.1988 15.3692 12.0004 15.3692C11.8021 15.3692 11.6389 15.433 11.5111 15.5606C11.3832 15.6882 11.3192 15.8512 11.3192 16.0496C11.3192 16.2479 11.383 16.411 11.5106 16.5389C11.6382 16.6668 11.8012 16.7308 11.9995 16.7308ZM12.0605 13.2039C12.2227 13.2039 12.357 13.1495 12.4634 13.0409C12.5698 12.9322 12.623 12.7975 12.623 12.6366V7.53268C12.623 7.3718 12.5683 7.23703 12.4587 7.12838C12.3492 7.01973 12.2133 6.96541 12.051 6.96541C11.8888 6.96541 11.7545 7.01973 11.6481 7.12838C11.5417 7.23703 11.4885 7.3718 11.4885 7.53268V12.6366C11.4885 12.7975 11.5432 12.9322 11.6528 13.0409C11.7623 13.1495 11.8982 13.2039 12.0605 13.2039ZM12.0083 21.5C10.6924 21.5 9.45991 21.2506 8.31088 20.752C7.16184 20.2533 6.15555 19.5724 5.292 18.7092C4.42843 17.846 3.74721 16.8396 3.24833 15.6898C2.74944 14.54 2.5 13.3065 2.5 11.9892C2.5 10.6783 2.74933 9.44607 3.248 8.29258C3.74667 7.1391 4.42758 6.13475 5.29075 5.27953C6.15393 4.4243 7.16041 3.74724 8.31018 3.24836C9.45994 2.74947 10.6935 2.50003 12.0108 2.50003C13.3217 2.50003 14.5539 2.74936 15.7074 3.24803C16.8609 3.7467 17.8652 4.42345 18.7205 5.27828C19.5757 6.13313 20.2527 7.13837 20.7516 8.29401C21.2505 9.44962 21.5 10.6822 21.5 11.9917C21.5 13.3076 21.2506 14.5401 20.752 15.6891C20.2533 16.8381 19.5765 17.8429 18.7217 18.7034C17.8669 19.5639 16.8616 20.2451 15.706 20.747C14.5504 21.249 13.3178 21.5 12.0083 21.5ZM12.0125 20.3654C14.3323 20.3654 16.3045 19.5506 17.9288 17.9212C19.5532 16.2917 20.3654 14.3138 20.3654 11.9875C20.3654 9.66764 19.5547 7.69552 17.9335 6.07116C16.3123 4.44681 14.3344 3.63463 12 3.63463C9.68203 3.63463 7.70831 4.44525 6.07883 6.06648C4.44934 7.68771 3.6346 9.66556 3.6346 12C3.6346 14.318 4.44934 16.2917 6.07883 17.9212C7.70831 19.5506 9.68619 20.3654 12.0125 20.3654Z"
    })
  });
};

/***/ }),

/***/ 9415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ InformationIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);


const InformationIcon = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: props.fill,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M12.0606 16.75C12.2228 16.75 12.357 16.6956 12.4634 16.5869C12.5698 16.4782 12.623 16.3434 12.623 16.1827V11.5673C12.623 11.4066 12.5682 11.2718 12.4585 11.1631C12.3489 11.0544 12.213 11 12.0509 11C11.8887 11 11.7545 11.0544 11.6481 11.1631C11.5417 11.2718 11.4885 11.4066 11.4885 11.5673V16.1827C11.4885 16.3434 11.5433 16.4782 11.653 16.5869C11.7626 16.6956 11.8985 16.75 12.0606 16.75ZM11.9987 9.40003C12.1912 9.40003 12.353 9.33662 12.4841 9.20981C12.6152 9.08297 12.6807 8.92582 12.6807 8.73836C12.6807 8.53672 12.6155 8.36967 12.4852 8.23721C12.3548 8.10474 12.1932 8.03851 12.0004 8.03851C11.8021 8.03851 11.6389 8.10522 11.5111 8.23866C11.3832 8.37207 11.3192 8.53741 11.3192 8.73466C11.3192 8.92317 11.3843 9.0812 11.5146 9.20873C11.6448 9.33627 11.8062 9.40003 11.9987 9.40003ZM12.0083 21.5C10.6924 21.5 9.45923 21.2506 8.30885 20.752C7.15845 20.2533 6.15215 19.5724 5.28995 18.7092C4.42775 17.846 3.74721 16.8396 3.24833 15.6898C2.74944 14.54 2.5 13.3081 2.5 11.994C2.5 10.6799 2.74933 9.44607 3.248 8.29258C3.74667 7.1391 4.42758 6.13475 5.29075 5.27953C6.15393 4.4243 7.16041 3.74724 8.31018 3.24836C9.45994 2.74947 10.6919 2.50003 12.006 2.50003C13.3201 2.50003 14.5539 2.74936 15.7074 3.24803C16.8609 3.7467 17.8652 4.42345 18.7205 5.27828C19.5757 6.13313 20.2527 7.13837 20.7516 8.29401C21.2505 9.44962 21.5 10.6822 21.5 11.9917C21.5 13.3076 21.2506 14.5407 20.752 15.6911C20.2533 16.8415 19.5765 17.8463 18.7217 18.7054C17.8669 19.5645 16.8616 20.2451 15.706 20.747C14.5504 21.249 13.3178 21.5 12.0083 21.5ZM12.0077 20.3654C14.3307 20.3654 16.3045 19.5506 17.9288 17.9212C19.5532 16.2917 20.3654 14.3154 20.3654 11.9923C20.3654 9.66924 19.555 7.69552 17.9342 6.07116C16.3134 4.44681 14.3353 3.63463 12 3.63463C9.68203 3.63463 7.70831 4.44502 6.07883 6.06581C4.44934 7.68661 3.6346 9.66467 3.6346 12C3.6346 14.318 4.44934 16.2917 6.07883 17.9212C7.70831 19.5506 9.68459 20.3654 12.0077 20.3654Z"
    })
  });
};

/***/ }),

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

/***/ }),

/***/ 8069:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _components_subatomic_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(711);
/* harmony import */ var _components_atoms_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6552);
/* harmony import */ var _components_organism_DefaultRewards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7105);
/* harmony import */ var _components_organism_RewardOfferings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7575);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_atoms_Overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3256);
/* harmony import */ var _components_organism_RewardForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5175);
/* harmony import */ var _components_organism_EditRewardForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1285);
/* harmony import */ var _components_organism_EditDefaultRewardForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(465);
/* harmony import */ var _GlobalStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7711);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8187);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6197);
/* harmony import */ var _components_atoms_Toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9418);
/* harmony import */ var _components_molecules_BottomSaveNotice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7517);
/* harmony import */ var _util_pages_rewards_rewardsHooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2976);
/* harmony import */ var _util_pages_rewards_rewardsFunctions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8841);
/* harmony import */ var _util_pages_rewards_rewardsState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1892);
/* harmony import */ var _util_pages_rewards_rewardsStyles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4982);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_atoms_Overlay__WEBPACK_IMPORTED_MODULE_5__, _components_organism_RewardForm__WEBPACK_IMPORTED_MODULE_6__, _components_organism_EditRewardForm__WEBPACK_IMPORTED_MODULE_7__, _components_organism_EditDefaultRewardForm__WEBPACK_IMPORTED_MODULE_8__, _store_store__WEBPACK_IMPORTED_MODULE_10__, framer_motion__WEBPACK_IMPORTED_MODULE_11__, _components_atoms_Toast__WEBPACK_IMPORTED_MODULE_12__, _components_molecules_BottomSaveNotice__WEBPACK_IMPORTED_MODULE_13__, _util_pages_rewards_rewardsHooks__WEBPACK_IMPORTED_MODULE_14__]);
([_components_atoms_Overlay__WEBPACK_IMPORTED_MODULE_5__, _components_organism_RewardForm__WEBPACK_IMPORTED_MODULE_6__, _components_organism_EditRewardForm__WEBPACK_IMPORTED_MODULE_7__, _components_organism_EditDefaultRewardForm__WEBPACK_IMPORTED_MODULE_8__, _store_store__WEBPACK_IMPORTED_MODULE_10__, framer_motion__WEBPACK_IMPORTED_MODULE_11__, _components_atoms_Toast__WEBPACK_IMPORTED_MODULE_12__, _components_molecules_BottomSaveNotice__WEBPACK_IMPORTED_MODULE_13__, _util_pages_rewards_rewardsHooks__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 // Import your store










async function getServerSideProps() {
  try {
    // Fetch rewards data
    const rewardsData = await (0,_util_pages_rewards_rewardsFunctions__WEBPACK_IMPORTED_MODULE_18__/* .fetchDataFromURL */ .mh)('http://localhost:5000/current-rewards'); // Fetch reward offerings data

    const defaultRewardsData = await (0,_util_pages_rewards_rewardsFunctions__WEBPACK_IMPORTED_MODULE_18__/* .fetchDataFromURL */ .mh)('http://localhost:5000/current-outbound-rewards'); // Return the fetched data as props

    return {
      props: {
        rewardsData,
        defaultRewardsData
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        rewardsData: [],
        defaultRewardsData: []
      }
    };
  }
}

function Rewards({
  rewardsData: initialRewardsData,
  defaultRewardsData: initialDefaultRewardsData
}) {
  const {
    data,
    fetchData,
    toast,
    hideToast,
    showToast
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_10__/* .useStore */ .o)(state => state); // ========== State Variables ==========

  const {
    hasPendingChanges,
    setHasPendingChanges,
    isOverlayOpen,
    setIsOverlayOpen,
    isEditFormOpen,
    setIsEditFormOpen,
    selectedReward,
    setSelectedReward,
    isEditDefaultFormOpen,
    setIsEditDefaultFormOpen,
    selectedDefaultReward,
    setSelectedDefaultReward
  } = (0,_util_pages_rewards_rewardsState__WEBPACK_IMPORTED_MODULE_15__/* .useRewardsState */ .r)(initialRewardsData, initialDefaultRewardsData);
  const {
    rewardsData,
    defaultRewardsData
  } = (0,_util_pages_rewards_rewardsHooks__WEBPACK_IMPORTED_MODULE_14__/* .useSockets */ .dT)(initialRewardsData, initialDefaultRewardsData);
  const {
    originalRewardToggles,
    currentRewardToggles,
    setOriginalRewardToggles,
    setCurrentRewardToggles
  } = (0,_util_pages_rewards_rewardsHooks__WEBPACK_IMPORTED_MODULE_14__/* .useRewardToggles */ .yR)(rewardsData);
  const {
    originalDefaultRewardToggles,
    currentDefaultRewardToggles,
    setOriginalDefaultRewardToggles,
    setCurrentDefaultRewardToggles
  } = (0,_util_pages_rewards_rewardsHooks__WEBPACK_IMPORTED_MODULE_14__/* .useDefaultRewardToggles */ .Wl)(defaultRewardsData);
  const onRewardToggleChange = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((index, newValue) => {
    (0,_util_pages_rewards_rewardsFunctions__WEBPACK_IMPORTED_MODULE_18__/* .handleRewardsPendingChange */ .g0)(index, newValue, currentRewardToggles, originalRewardToggles, setCurrentRewardToggles, setHasPendingChanges);
  }, [currentRewardToggles, originalRewardToggles]);
  const onDefaultRewardToggleChange = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((index, newValue) => {
    (0,_util_pages_rewards_rewardsFunctions__WEBPACK_IMPORTED_MODULE_18__/* .handleDefaultRewardsPendingChange */ .gs)(index, newValue, currentDefaultRewardToggles, originalDefaultRewardToggles, setCurrentDefaultRewardToggles, setHasPendingChanges);
  }, [currentDefaultRewardToggles, originalDefaultRewardToggles]); //Overlay

  const {
    handleEditClick,
    handleEditDefaultClick,
    handleEditFormClose,
    handleEditDefaultFormClose,
    openOverlay,
    closeOverlay
  } = (0,_util_pages_rewards_rewardsHooks__WEBPACK_IMPORTED_MODULE_14__/* .useRewardsHandlers */ .tL)({
    setIsEditFormOpen,
    setSelectedReward,
    setIsEditDefaultFormOpen,
    setSelectedDefaultReward,
    setIsOverlayOpen
  }); // ========== Fetching and Updating Data ========== 

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    fetchData();
  }, []);

  const saveChanges = () => {
    (0,_util_pages_rewards_rewardsFunctions__WEBPACK_IMPORTED_MODULE_18__/* .handleSaveChanges */ .Hc)({
      rewardsData,
      currentRewardToggles,
      defaultRewardsData,
      currentDefaultRewardToggles,
      showToast: showToast,
      // adjust if your store structure is different
      setOriginalRewardToggles,
      setOriginalDefaultRewardToggles,
      setHasPendingChanges
    });
  };

  const handleCancelChanges = () => {
    (0,_util_pages_rewards_rewardsFunctions__WEBPACK_IMPORTED_MODULE_18__/* .handleCancelChangesFunc */ .B6)(setCurrentRewardToggles, originalRewardToggles, setCurrentDefaultRewardToggles, originalDefaultRewardToggles, setHasPendingChanges);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_util_pages_rewards_rewardsStyles__WEBPACK_IMPORTED_MODULE_16__/* .FlexDiv */ .c_, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__.AnimatePresence, {
      children: hasPendingChanges && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_molecules_BottomSaveNotice__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        onSave: saveChanges,
        onCancel: handleCancelChanges
      }, "bottom-save-notice")
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__.AnimatePresence, {
      children: toast.visible && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_atoms_Toast__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}, "toast")
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__.AnimatePresence, {
      children: (isOverlayOpen || isEditFormOpen || isEditDefaultFormOpen) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_atoms_Overlay__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__.AnimatePresence, {
      children: isOverlayOpen && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_organism_RewardForm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        onClose: closeOverlay
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__.AnimatePresence, {
      children: isEditFormOpen && selectedReward && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_organism_EditRewardForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, selectedReward), {}, {
        rewardCost: selectedReward.rewardCost.toString(),
        onClose: handleEditFormClose
      }))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__.AnimatePresence, {
      children: isEditDefaultFormOpen && selectedDefaultReward && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_organism_EditDefaultRewardForm__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, selectedDefaultReward), {}, {
        defaultRewardValue: selectedDefaultReward.rewardValue.toString(),
        onClose: handleEditDefaultFormClose
      }))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_GlobalStyle__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_util_pages_rewards_rewardsStyles__WEBPACK_IMPORTED_MODULE_16__/* .TitlePlusButton */ .kr, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_util_pages_rewards_rewardsStyles__WEBPACK_IMPORTED_MODULE_16__/* .RewardsPageTitle */ .d3, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_subatomic_Text__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          text: "Rewards"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_util_pages_rewards_rewardsStyles__WEBPACK_IMPORTED_MODULE_16__/* .ButtonWrap */ .Ls, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_atoms_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          buttonTypeVariant: "primary",
          sizeVariant: "large",
          label: "Add Reward",
          buttonWidthVariant: "fill",
          onClick: openOverlay
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_util_pages_rewards_rewardsStyles__WEBPACK_IMPORTED_MODULE_16__/* .RewardOfferingsAndSettings */ .AF, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_organism_RewardOfferings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        rewardsData: rewardsData,
        onPendingChange: onRewardToggleChange,
        originalRewardToggles: originalRewardToggles,
        currentRewardToggles: currentRewardToggles,
        onEditClick: handleEditClick
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_organism_DefaultRewards__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        defaultRewardsData: defaultRewardsData,
        onDefaultRewardsPendingChange: onDefaultRewardToggleChange,
        originalDefaultRewardToggles: originalDefaultRewardToggles,
        currentDefaultRewardToggles: currentDefaultRewardToggles,
        onEditClick: handleEditDefaultClick
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rewards);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B6: () => (/* binding */ handleCancelChangesFunc),
/* harmony export */   Fv: () => (/* binding */ genericFormCloseHandler),
/* harmony export */   Hc: () => (/* binding */ handleSaveChanges),
/* harmony export */   g0: () => (/* binding */ handleRewardsPendingChange),
/* harmony export */   gs: () => (/* binding */ handleDefaultRewardsPendingChange),
/* harmony export */   mh: () => (/* binding */ fetchDataFromURL),
/* harmony export */   n9: () => (/* binding */ genericEditHandler)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const genericEditHandler = ({
  setForm,
  setData,
  setIsOverlayOpen,
  data
}) => {
  setData(data);
  setForm(true);
  setIsOverlayOpen(true);
};
const genericFormCloseHandler = ({
  setForm,
  setData,
  setIsOverlayOpen
}) => {
  setIsOverlayOpen(false);
  setForm(false);
  setData(null);
};
const handleRewardsPendingChange = (index, newValue, currentRewardToggles, originalRewardToggles, setCurrentRewardToggles, setHasPendingChanges) => {
  const newCurrentToggles = [...currentRewardToggles];
  newCurrentToggles[index] = newValue;
  setCurrentRewardToggles(newCurrentToggles);
  setHasPendingChanges(!originalRewardToggles.every((val, i) => val === newCurrentToggles[i]));
};
const handleDefaultRewardsPendingChange = (index, newValue, currentDefaultRewardToggles, originalDefaultRewardToggles, setCurrentDefaultRewardToggles, setHasPendingChanges) => {
  const newCurrentToggles = [...currentDefaultRewardToggles];
  newCurrentToggles[index] = newValue;
  setCurrentDefaultRewardToggles(newCurrentToggles);
  setHasPendingChanges(!originalDefaultRewardToggles.every((val, i) => val === newCurrentToggles[i]));
};
async function handleSaveChanges({
  rewardsData,
  currentRewardToggles,
  defaultRewardsData,
  currentDefaultRewardToggles,
  showToast,
  setOriginalRewardToggles,
  setOriginalDefaultRewardToggles,
  setHasPendingChanges
}) {
  // ... the same implementation of handleSaveChanges ...
  const updatedRewardsData = rewardsData.map((reward, index) => _objectSpread(_objectSpread({}, reward), {}, {
    rewardActive: currentRewardToggles[index]
  }));
  const updatedDefaultRewardsData = defaultRewardsData.map((defaultReward, index) => _objectSpread(_objectSpread({}, defaultReward), {}, {
    rewardActive: currentDefaultRewardToggles[index]
  }));
  const payload = {
    updatedRewards: updatedRewardsData,
    updatedDefaultRewards: updatedDefaultRewardsData
  };
  console.log(`Sending updated data: ${JSON.stringify(payload)}`);

  try {
    const response = await fetch('http://localhost:5000/update-active-rewards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('Successfully updated rewards and default rewards');
      showToast('Successfully updated rewards!', 'success'); // Added toast message

      setOriginalRewardToggles(currentRewardToggles);
      setOriginalDefaultRewardToggles(currentDefaultRewardToggles);
      setHasPendingChanges(false);
    } else {
      console.log('Failed to update rewards.');
      showToast('Failed to update rewards.', 'error');
    }
  } catch (error) {
    console.error('Error updating rewards:', error);
    showToast('Error updating rewards.', 'error');
  }
}
function handleCancelChangesFunc(setCurrentRewardToggles, originalRewardToggles, setCurrentDefaultRewardToggles, originalDefaultRewardToggles, setHasPendingChanges) {
  // Step 1: Reset Reward Toggles
  setCurrentRewardToggles([...originalRewardToggles]); // Step 2: Reset Default Reward Toggles

  setCurrentDefaultRewardToggles([...originalDefaultRewardToggles]); // Step 3: Reset the hasPendingChanges flag

  setHasPendingChanges(false);
}

async function fetchDataFromURL(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}



/***/ }),

/***/ 2976:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wl: () => (/* binding */ useDefaultRewardToggles),
/* harmony export */   dT: () => (/* binding */ useSockets),
/* harmony export */   tL: () => (/* binding */ useRewardsHandlers),
/* harmony export */   yR: () => (/* binding */ useRewardToggles)
/* harmony export */ });
/* unused harmony export useBodyScrollLock */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4612);
/* harmony import */ var _rewardsFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8841);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_1__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useRewardsHandlers = ({
  setIsEditFormOpen,
  setSelectedReward,
  setIsEditDefaultFormOpen,
  setSelectedDefaultReward,
  setIsOverlayOpen
}) => {
  return {
    handleEditClick: reward => (0,_rewardsFunctions__WEBPACK_IMPORTED_MODULE_2__/* .genericEditHandler */ .n9)({
      setForm: setIsEditFormOpen,
      setData: setSelectedReward,
      setIsOverlayOpen,
      data: reward
    }),
    handleEditDefaultClick: defaultReward => (0,_rewardsFunctions__WEBPACK_IMPORTED_MODULE_2__/* .genericEditHandler */ .n9)({
      setForm: setIsEditDefaultFormOpen,
      setData: setSelectedDefaultReward,
      setIsOverlayOpen,
      data: defaultReward
    }),
    handleEditFormClose: () => (0,_rewardsFunctions__WEBPACK_IMPORTED_MODULE_2__/* .genericFormCloseHandler */ .Fv)({
      setForm: setIsEditFormOpen,
      setData: setSelectedReward,
      setIsOverlayOpen
    }),
    handleEditDefaultFormClose: () => (0,_rewardsFunctions__WEBPACK_IMPORTED_MODULE_2__/* .genericFormCloseHandler */ .Fv)({
      setForm: setIsEditDefaultFormOpen,
      setData: setSelectedDefaultReward,
      setIsOverlayOpen
    }),
    openOverlay: () => {
      setIsOverlayOpen(true);
    },
    closeOverlay: () => {
      setIsOverlayOpen(false);
    }
  };
}; //SOCKET HOOKS

const useSockets = (initialRewards, initialDefaultRewards) => {
  const {
    0: rewardsData,
    1: setRewardsData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialRewards);
  const {
    0: defaultRewardsData,
    1: setDefaultRewardsData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialDefaultRewards);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log("Setting up socket connection.");
    const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__["default"])("http://localhost:5000");
    socket.on("reward-updated", updatedReward => {
      const updatedRewardsData = rewardsData.map(reward => {
        if (reward.rewardid === updatedReward.rewardid) {
          return updatedReward;
        }

        return reward;
      });
      setRewardsData(updatedRewardsData);
    });
    socket.on("default-reward-updated", updatedDefaultReward => {
      const updatedDefaultRewardsData = defaultRewardsData.map(defaultReward => {
        if (defaultReward.rewardNumberId === updatedDefaultReward.rewardNumberId) {
          return updatedDefaultReward;
        }

        return defaultReward;
      });
      setDefaultRewardsData(updatedDefaultRewardsData);
    });
    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    });
    return () => {
      socket.disconnect();
    };
  }, [rewardsData, defaultRewardsData]);
  return {
    rewardsData,
    defaultRewardsData
  };
};
const useRewardToggles = rewardsData => {
  const {
    0: originalRewardToggles,
    1: setOriginalRewardToggles
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(rewardsData.map(reward => reward.rewardActive));
  const {
    0: currentRewardToggles,
    1: setCurrentRewardToggles
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(rewardsData.map(reward => reward.rewardActive));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setOriginalRewardToggles(rewardsData.map(reward => reward.rewardActive));
    setCurrentRewardToggles(rewardsData.map(reward => reward.rewardActive));
  }, [rewardsData]);
  return {
    originalRewardToggles,
    currentRewardToggles,
    setOriginalRewardToggles,
    setCurrentRewardToggles // <-- Return the setState function

  };
};
const useDefaultRewardToggles = defaultRewardsData => {
  const {
    0: originalDefaultRewardToggles,
    1: setOriginalDefaultRewardToggles
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultRewardsData.map(reward => reward.rewardActive));
  const {
    0: currentDefaultRewardToggles,
    1: setCurrentDefaultRewardToggles
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultRewardsData.map(reward => reward.rewardActive));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setOriginalDefaultRewardToggles(defaultRewardsData.map(defaultReward => defaultReward.rewardActive));
    setCurrentDefaultRewardToggles(defaultRewardsData.map(defaultReward => defaultReward.rewardActive));
  }, [defaultRewardsData]);
  return {
    originalDefaultRewardToggles,
    currentDefaultRewardToggles,
    setOriginalDefaultRewardToggles,
    setCurrentDefaultRewardToggles // <-- Return the setState function

  };
};
function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isLocked]);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ useRewardsState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useRewardsState(initialRewardsData, initialDefaultRewardsData) {
  // Core states from your component
  const {
    0: hasPendingChanges,
    1: setHasPendingChanges
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isOverlayOpen,
    1: setIsOverlayOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isEditFormOpen,
    1: setIsEditFormOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: selectedReward,
    1: setSelectedReward
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: isEditDefaultFormOpen,
    1: setIsEditDefaultFormOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: selectedDefaultReward,
    1: setSelectedDefaultReward
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // Return the states and their setters

  return {
    hasPendingChanges,
    setHasPendingChanges,
    isOverlayOpen,
    setIsOverlayOpen,
    isEditFormOpen,
    setIsEditFormOpen,
    selectedReward,
    setSelectedReward,
    isEditDefaultFormOpen,
    setIsEditDefaultFormOpen,
    selectedDefaultReward,
    setSelectedDefaultReward
  };
}

/***/ }),

/***/ 4982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AF: () => (/* binding */ RewardOfferingsAndSettings),
/* harmony export */   Ls: () => (/* binding */ ButtonWrap),
/* harmony export */   c_: () => (/* binding */ FlexDiv),
/* harmony export */   d3: () => (/* binding */ RewardsPageTitle),
/* harmony export */   kr: () => (/* binding */ TitlePlusButton)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2287);
/* harmony import */ var _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8338);



const FlexDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "rewardsStyles__FlexDiv",
  componentId: "sc-h75l4h-0"
})(["@media ", "{display:flex;gap:40px;flex-direction:column;padding:24px 16px;width:100vw;box-sizing:border-box;background:", ";}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.primary100);
const TitlePlusButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "rewardsStyles__TitlePlusButton",
  componentId: "sc-h75l4h-1"
})(["@media ", "{display:flex;flex-direction:column;align-items:flex-start;gap:32px;}@media ", "{display:flex;flex-direction:row;justify-content:space-between;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.XS, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.S);
const RewardsPageTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "rewardsStyles__RewardsPageTitle",
  componentId: "sc-h75l4h-2"
})(["@media ", "{display:flex;color:", ";p{font-size:32px;line-height:39px;font-weight:800;}}@media ", "{display:flex;color:", ";p{font-size:40px;line-height:48px;}}@media ", "{display:flex;color:", ";p{font-size:48px;line-height:58px;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.neutral700, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.S, _constants_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.neutral700, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.L, _constants_Colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.neutral700);
const RewardOfferingsAndSettings = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "rewardsStyles__RewardOfferingsAndSettings",
  componentId: "sc-h75l4h-3"
})(["@media ", "{display:flex;flex-direction:column;gap:64px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.XS);
const ButtonWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "rewardsStyles__ButtonWrap",
  componentId: "sc-h75l4h-4"
})(["@media ", "{display:flex;width:100%;}@media ", "{width:auto;align-self:flex-start;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.XS, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.S);


/***/ }),

/***/ 7180:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6126);
/* harmony import */ var private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8069);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/rewards",
        pathname: "/rewards",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [492,815,126,187], () => (__webpack_exec__(7180)));
module.exports = __webpack_exports__;

})();