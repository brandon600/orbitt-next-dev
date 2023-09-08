"use strict";
exports.id = 631;
exports.ids = [631];
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





const ToggleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().label.withConfig({
  displayName: "ToggleSwitch__ToggleContainer",
  componentId: "sc-1e3v1ch-0"
})(["display:flex;width:64px;height:32px;cursor:", ";border-radius:20px;background-color:", ";transition:background-color 0.4s;opacity:", ";"], props => props.disabled ? 'not-allowed' : 'pointer', props => props.active ? _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.success600 : _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral300, props => props.disabled ? '0.5' : '1');
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
  onChange,
  disabled
}) => {
  const handleToggle = () => {
    if (disabled) return; // Don't toggle if it's disabled

    onChange(!active);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ToggleContainer, {
    active: active,
    disabled: disabled,
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

/***/ })

};
;