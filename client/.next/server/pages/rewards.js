"use strict";
(() => {
var exports = {};
exports.id = 177;
exports.ids = [177,888,660];
exports.modules = {

/***/ 7711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// src/GlobalStyles.ts

const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["body{display:flex;margin:0;font-family:Arial,sans-serif;background-color:#f0f0f0;color:#333;}h1,h2,h3,h4,h5,h6,p{margin-block-start:0px;margin-block-end:0px;margin-inline-start:0px;margin-inline-end:0px;}"]);
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
const _excluded = ["label", "onClick", "typeVariant", "sizeVariant", "widthVariant"];

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
  typeVariant
}) => buttonTypeSheet[typeVariant || 'primary'], ({
  sizeVariant
}) => buttonSizeSheet[sizeVariant || 'large'], ({
  widthVariant
}) => widthVariant === 'fill' ? '100%' : 'auto');

const Button = _ref => {
  let {
    label,
    onClick,
    typeVariant = 'primary',
    sizeVariant = 'large',
    widthVariant = 'content'
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(ButtonComponent, _objectSpread(_objectSpread({
    as: "button",
    onClick: onClick,
    typeVariant: typeVariant,
    sizeVariant: sizeVariant,
    widthVariant: widthVariant
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);




const ToggleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().label.withConfig({
  displayName: "ToggleSwitch__ToggleContainer",
  componentId: "sc-1e3v1ch-0"
})(["position:relative;display:flex;width:64px;height:32px;"]);
const SwitchInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default().input.withConfig({
  displayName: "ToggleSwitch__SwitchInput",
  componentId: "sc-1e3v1ch-1"
})(["opacity:0;width:0;height:0;"]);
const Slider = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "ToggleSwitch__Slider",
  componentId: "sc-1e3v1ch-2"
})(["position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:", ";transition:0.4s;border-radius:20px;&:before{position:absolute;content:'';height:24px;width:24px;left:", ";bottom:4px;background-color:white;transition:0.4s;border-radius:50%;}"], props => props.isChecked ? '#10B981' : '#ccc', props => props.isChecked ? '36px' : '4px');

const ToggleSwitch = ({
  active,
  onChange
}) => {
  const handleToggle = () => {
    onChange(!active); // Notify parent component of the change
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(ToggleContainer, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(SwitchInput, {
      type: "checkbox",
      checked: active,
      onChange: handleToggle
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Slider, {
      isChecked: active
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleSwitch);

/***/ }),

/***/ 8836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ molecules_SlideoutModal)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/constants/StyledMediaQuery.ts
var StyledMediaQuery = __webpack_require__(8338);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/components/atoms/Overlay.tsx




const OverlayDiv = external_styled_components_default().div.withConfig({
  displayName: "Overlay__OverlayDiv",
  componentId: "sc-wo64qz-0"
})(["@media ", "{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.4);backdrop-filter:blur(4px);display:flex;justify-content:center;align-items:center;}"], StyledMediaQuery/* default */.Z.XS);

const Overlay = () => {
  return /*#__PURE__*/jsx_runtime.jsx(OverlayDiv, {});
};

/* harmony default export */ const atoms_Overlay = (Overlay);
// EXTERNAL MODULE: ./src/constants/Colors.ts
var Colors = __webpack_require__(2287);
;// CONCATENATED MODULE: ./src/components/atoms/InputField.tsx






const InputFieldContainer = external_styled_components_default().div.withConfig({
  displayName: "InputField__InputFieldContainer",
  componentId: "sc-16qn2iy-0"
})(["@media ", "{display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:8px;}"], StyledMediaQuery/* default */.Z.XS);
const InputFieldLabel = external_styled_components_default().label.withConfig({
  displayName: "InputField__InputFieldLabel",
  componentId: "sc-16qn2iy-1"
})(["@media ", "{font-size:16px;font-weight:400;line-height:19px;color:", ";}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral700);
const InputFieldInput = external_styled_components_default().input.withConfig({
  displayName: "InputField__InputFieldInput",
  componentId: "sc-16qn2iy-2"
})(["@media ", "{display:flex;height:32px;padding:8px 12px;align-items:center;align-self:stretch;border-radius:8px;background:", ";&:focus{border 1px solid ", ";color:", ";}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.shades100, Colors/* default */.Z.primary400, Colors/* default */.Z.primary400);

const InputField = ({
  label,
  value,
  onChange,
  required // Accept the 'required' prop

}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(InputFieldContainer, {
    children: [/*#__PURE__*/jsx_runtime.jsx(InputFieldLabel, {
      children: label
    }), /*#__PURE__*/jsx_runtime.jsx(InputFieldInput, {
      type: "text",
      value: value,
      onChange: e => onChange(e.target.value),
      required: required // Add the 'required' attribute conditionally

    })]
  });
};

/* harmony default export */ const atoms_InputField = (InputField);
;// CONCATENATED MODULE: ./src/components/atoms/DropdownField.tsx






const DropdownFieldContainer = external_styled_components_default().div.withConfig({
  displayName: "DropdownField__DropdownFieldContainer",
  componentId: "sc-1blcj3-0"
})(["@media ", "{display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:8px;}"], StyledMediaQuery/* default */.Z.XS);
const DropdownFieldLabel = external_styled_components_default().label.withConfig({
  displayName: "DropdownField__DropdownFieldLabel",
  componentId: "sc-1blcj3-1"
})(["@media ", "{display:flex;font-size:12px;font-weight:500;line-height:15px;color:", ";p{font-size:16px;font-weight:500;line-height:19px;}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral400);
const DropdownFieldSelect = external_styled_components_default().select.withConfig({
  displayName: "DropdownField__DropdownFieldSelect",
  componentId: "sc-1blcj3-2"
})(["@media ", "{display:flex;height:48px;padding:0px 4px 0px 12px;justify-content:space-between;align-items:center;align-self:stretch;border-radius:8px;background ", ";color:300;&:focus{border 1px solid ", ";color:", ";}option{color:", ";}:checked{color:", ";}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.shades100, Colors/* default */.Z.neutral600, Colors/* default */.Z.neutral600, Colors/* default */.Z.neutral300, Colors/* default */.Z.neutral600);

const DropdownField = ({
  value,
  onChange,
  label,
  required
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownFieldContainer, {
    children: [label && /*#__PURE__*/jsx_runtime.jsx(DropdownFieldLabel, {
      children: label
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownFieldSelect, {
      value: value,
      onChange: e => onChange(e.target.value),
      required: required // Add the 'required' attribute conditionally
      ,
      children: [/*#__PURE__*/jsx_runtime.jsx("option", {
        value: "value1",
        children: "Value 1"
      }), /*#__PURE__*/jsx_runtime.jsx("option", {
        value: "value2",
        children: "Value 2"
      })]
    }), /*#__PURE__*/jsx_runtime.jsx("select", {
      value: value,
      onChange: e => onChange(e.target.value),
      required: required // Add the 'required' attribute conditionally

    })]
  });
};

/* harmony default export */ const atoms_DropdownField = (DropdownField);
;// CONCATENATED MODULE: ./src/components/organism/RewardForm.tsx
// components/RewardForm.tsx







const RewardFormDiv = external_styled_components_.styled.div.withConfig({
  displayName: "RewardForm__RewardFormDiv",
  componentId: "sc-1vny7h3-0"
})(["@media ", "{display:flex;position:absolute;z-index:90;}"], StyledMediaQuery/* default */.Z.XS);

const RewardForm = () => {
  const {
    0: rewardName,
    1: setRewardName
  } = (0,external_react_.useState)('');
  const {
    0: rewardCost,
    1: setRewardCost
  } = (0,external_react_.useState)('');
  const {
    0: rewardTerms,
    1: setRewardTerms
  } = (0,external_react_.useState)('');
  const {
    0: rewardValue,
    1: setRewardValue
  } = (0,external_react_.useState)('value1');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Reward Name:', rewardName);
    console.log('Reward Cost:', rewardCost);
    console.log('Reward Value:', rewardValue);
    console.log('Reward Terms:', rewardTerms); // Handle form submission (e.g., send data to the server)
  };

  return /*#__PURE__*/jsx_runtime.jsx(RewardFormDiv, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/jsx_runtime.jsx(atoms_InputField, {
        label: "Reward Name",
        value: rewardName,
        onChange: value => setRewardName(value)
      }), /*#__PURE__*/jsx_runtime.jsx(atoms_InputField, {
        label: "Reward Cost",
        value: rewardCost,
        onChange: value => setRewardCost(value)
      }), /*#__PURE__*/jsx_runtime.jsx(atoms_DropdownField, {
        label: "sdkfmksldfksmdfl",
        value: rewardValue,
        onChange: value => setRewardValue(value)
      }), /*#__PURE__*/jsx_runtime.jsx(atoms_InputField, {
        label: "Reward Terms",
        value: rewardTerms,
        onChange: value => setRewardTerms(value)
      }), /*#__PURE__*/jsx_runtime.jsx("button", {
        type: "submit",
        children: "Submit"
      })]
    })
  });
};

/* harmony default export */ const organism_RewardForm = (RewardForm);
;// CONCATENATED MODULE: ./src/components/molecules/SlideoutModal.tsx






const OverlayContent = external_styled_components_default().div.withConfig({
  displayName: "SlideoutModal__OverlayContent",
  componentId: "sc-en7ipe-0"
})(["position:absolute;display:flex;z-index:100;"]);

const SlideoutModal = ({
  onClose
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime.jsx(atoms_Overlay, {}), /*#__PURE__*/jsx_runtime.jsx("button", {
      onClick: onClose,
      children: "Close"
    }), /*#__PURE__*/jsx_runtime.jsx(organism_RewardForm, {})]
  });
};

/* harmony default export */ const molecules_SlideoutModal = (SlideoutModal);

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






 // Define the props interface for RewardItem



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
})(["@media ", "{display:flex;width:50px;align-items:center;gap:12px;flex-shrink:0;p{flex:1 0 0;font-size:24px;font-weight:500;line-height:29px;color:", ";}}@media ", "{width:64px;}@media ", "{width:96px;p{font-size:32px;font-style:normal;font-weight:500;line-height:39px;}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral700, StyledMediaQuery/* default */.Z.S, StyledMediaQuery/* default */.Z.L);
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
  rewardName,
  rewardValue,
  rewardCost,
  rewardNotes,
  rewardActive
}) => {
  const handleClick = () => {
    console.log('handle click');
  };

  const {
    0: isActive,
    1: setIsActive
  } = (0,external_react_.useState)(rewardActive);

  const handleToggle = active => {
    setIsActive(active);
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
        text: rewardNotes
      })
    }), /*#__PURE__*/jsx_runtime.jsx(RewardActive, {
      children: /*#__PURE__*/jsx_runtime.jsx(ToggleSwitch/* default */.Z, {
        active: isActive,
        onChange: handleToggle
      })
    }), /*#__PURE__*/jsx_runtime.jsx(RewardEdit, {
      children: /*#__PURE__*/jsx_runtime.jsx(Button/* default */.Z, {
        typeVariant: "neutral",
        sizeVariant: "small",
        label: "Edit",
        widthVariant: "content",
        onClick: handleClick
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
  rewardsData
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
      }), rewardsData.map(reward => /*#__PURE__*/jsx_runtime.jsx(molecules_RewardItem, {
        // Make sure to provide a unique key for each item
        // Pass the data to the RewardItem component as props
        rewardName: reward.rewardName,
        rewardValue: reward.rewardValue,
        rewardCost: reward.rewardCost,
        rewardNotes: reward.rewardTerms,
        rewardActive: reward.rewardActive // Add other props as needed

      }, reward.id))]
    })]
  });
};

/* harmony default export */ const organism_RewardOfferings = (RewardOfferings);

/***/ }),

/***/ 8860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ organism_RewardSettings)
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
;// CONCATENATED MODULE: ./src/components/molecules/DefaultReward.tsx








const TriggeredRewardContainer = external_styled_components_default().div.withConfig({
  displayName: "DefaultReward__TriggeredRewardContainer",
  componentId: "sc-o9okz5-0"
})(["@media ", "{display:flex;width:100%;gap:12px;flex-direction:column;justify-content:center;color:", ";p{font-size:20px;font-weight:500;line-height:24px;}border-bottom:1px solid ", ";}@media ", "{gap:16px;width:440px;p{font-size:24px;font-weight:500;line-height:29px;}}@media ", "{width:560px;}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral700, Colors/* default */.Z.neutral200, StyledMediaQuery/* default */.Z.S, StyledMediaQuery/* default */.Z.L);
const RewardInfoPlusToggle = external_styled_components_default().div.withConfig({
  displayName: "DefaultReward__RewardInfoPlusToggle",
  componentId: "sc-o9okz5-1"
})(["@media ", "{display:flex;padding:8px 12px;align-items:center;gap:8px;align-self:stretch;background:", ";border-radius:8px;}@media ", "{justify-content:space-between;}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral200, StyledMediaQuery/* default */.Z.S);
const RewardInfo = external_styled_components_default().div.withConfig({
  displayName: "DefaultReward__RewardInfo",
  componentId: "sc-o9okz5-2"
})(["@media ", "{display:flex;align-items:center;gap:16px;}@media ", "{gap:16px;}"], StyledMediaQuery/* default */.Z.XS, StyledMediaQuery/* default */.Z.S);
const GiveCustomersDiv = external_styled_components_default().div.withConfig({
  displayName: "DefaultReward__GiveCustomersDiv",
  componentId: "sc-o9okz5-3"
})(["@media ", "{display:flex;color:", ";p{font-size:14px;font-weight:500;line-height:22px;}}@media ", "{p{font-size:20px;font-weight:500;line-height:24px;}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral700, StyledMediaQuery/* default */.Z.S);
const PointsGivenDiv = external_styled_components_default().div.withConfig({
  displayName: "DefaultReward__PointsGivenDiv",
  componentId: "sc-o9okz5-4"
})(["@media ", "{display:flex;height:48px;padding:0px 8px;justify-content:center;align-items:center;color:", ";background:", ";border-radius:8px;p{font-size:20px;font-weight:800;line-height:24px;}}@media ", "{padding:0px 16px;p{font-size:24px;font-weight:800;line-height:29px;}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral700, Colors/* default */.Z.shades100, StyledMediaQuery/* default */.Z.S);
const PointsDiv = external_styled_components_default().div.withConfig({
  displayName: "DefaultReward__PointsDiv",
  componentId: "sc-o9okz5-5"
})(["@media ", "{display:flex;height:48px;align-items:center;gap:12px;color:", ";p{font-size:14px;font-weight:500;line-height:22px;}}@media ", "{p{font-size:20px;font-weight:500;line-height:24px;}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral700, StyledMediaQuery/* default */.Z.S);
const ActiveDiv = external_styled_components_default().div.withConfig({
  displayName: "DefaultReward__ActiveDiv",
  componentId: "sc-o9okz5-6"
})(["@media ", "{display:flex;}"], StyledMediaQuery/* default */.Z.XS); // ... Your RewardTableHead components here ...

const DefaultReward = ({
  defaultRewardName,
  defaultRewardValue,
  defaultRewardActive
}) => {
  const handleClick = () => {
    console.log('handle click');
  };

  const {
    0: isDefaultActive,
    1: setIsDefaultActive
  } = (0,external_react_.useState)(defaultRewardActive);

  const handleToggle = active => {
    setIsDefaultActive(active);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(TriggeredRewardContainer, {
    children: [/*#__PURE__*/jsx_runtime.jsx(Text/* default */.Z, {
      text: defaultRewardName
    }), /*#__PURE__*/jsx_runtime.jsx(RewardInfoPlusToggle, {
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
    })]
  });
};

/* harmony default export */ const molecules_DefaultReward = (DefaultReward);
;// CONCATENATED MODULE: ./src/components/organism/RewardSettings.tsx








const RewardSettingsContainer = external_styled_components_.styled.div.withConfig({
  displayName: "RewardSettings__RewardSettingsContainer",
  componentId: "sc-gwzfwe-0"
})(["@media ", "{display:flex;flex-direction:column;width:100%;gap:24px;}@media ", "{gap:32px;}"], StyledMediaQuery/* default */.Z.XS, StyledMediaQuery/* default */.Z.L);
const HeadingPlusSubheading = external_styled_components_.styled.div.withConfig({
  displayName: "RewardSettings__HeadingPlusSubheading",
  componentId: "sc-gwzfwe-1"
})(["@media ", "{display:flex;flex-direction:column;align-items:flex-start;gap:4px;align-self:stretch;h3{font-size:24px;font-weight:800;line-height:29px;color:", "}p{font-size:16px;font-weight:500;line-height:19px;color:", ";}}@media ", "{gap:8px;h3{font-size:32px;font-weight:800;line-height:39px;}p{font-size:20px;font-weight:500;line-height:24px;}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral600, Colors/* default */.Z.neutral400, StyledMediaQuery/* default */.Z.L);
const RewardSettingsList = external_styled_components_.styled.div.withConfig({
  displayName: "RewardSettings__RewardSettingsList",
  componentId: "sc-gwzfwe-2"
})(["@media ", "{display:flex;flex-direction:column;gap:24px;width:100%;}@media ", "{gap:32px;}"], StyledMediaQuery/* default */.Z.XS, StyledMediaQuery/* default */.Z.L);

const RewardSettings = ({
  defaultRewardsData
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
      children: defaultRewardsData.map(defaultReward => /*#__PURE__*/jsx_runtime.jsx(molecules_DefaultReward, {
        // Make sure to provide a unique key for each item
        // Pass the data to the RewardItem component as props
        defaultRewardName: defaultReward.rewardName,
        defaultRewardValue: defaultReward.rewardValue,
        defaultRewardActive: defaultReward.rewardActive // Add other props as needed

      }, defaultReward._id))
    })]
  });
};

/* harmony default export */ const organism_RewardSettings = (RewardSettings);

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
/* harmony import */ var _components_DataDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2294);
/* harmony import */ var _components_subatomic_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(711);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8338);
/* harmony import */ var _components_atoms_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6552);
/* harmony import */ var _components_organism_RewardSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8860);
/* harmony import */ var _components_organism_RewardOfferings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7575);
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2287);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_molecules_SlideoutModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8836);
/* harmony import */ var _GlobalStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7711);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8187);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_DataDisplay__WEBPACK_IMPORTED_MODULE_0__, _store_store__WEBPACK_IMPORTED_MODULE_11__]);
([_components_DataDisplay__WEBPACK_IMPORTED_MODULE_0__, _store_store__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











 // Import your store



const OfferingSettingsAndButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "rewards__OfferingSettingsAndButton",
  componentId: "sc-tgm17z-0"
})(["@media ", "{display:flex;flex-direction:column;gap:40px;width:100%;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS);
const FlexDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "rewards__FlexDiv",
  componentId: "sc-tgm17z-1"
})(["@media ", "{display:flex;gap:32px;flex-direction:column;padding:24px 16px;width:100vw;box-sizing:border-box;background:", ";}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.primary100);
const RewardsPageTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "rewards__RewardsPageTitle",
  componentId: "sc-tgm17z-2"
})(["@media ", "{display:flex;color:", ";p{font-size:32px;font-weight:800;line-height:39px;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.neutral700);
const RewardOfferingsAndSettings = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "rewards__RewardOfferingsAndSettings",
  componentId: "sc-tgm17z-3"
})(["@media ", "{display:flex;flex-direction:column;gap:64px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS);
async function getServerSideProps() {
  try {
    // Fetch rewards data
    const response1 = await fetch('http://localhost:5000/current-rewards');

    if (!response1.ok) {
      throw new Error('Network response was not ok');
    }

    const rewardsData = await response1.json(); // Fetch reward offerings data

    const response2 = await fetch('http://localhost:5000/current-outbound-rewards');

    if (!response2.ok) {
      throw new Error('Network response was not ok');
    }

    const defaultRewardsData = await response2.json(); // Return the fetched data as props

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
  rewardsData,
  defaultRewardsData
}) {
  const {
    0: isOverlayOpen,
    1: setIsOverlayOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
  const {
    data,
    fetchData
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_11__/* .useStore */ .o)();
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true);
  const {
    0: isLoading2,
    1: setIsLoading2
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true);

  const handleOverlayOpen = () => {
    setIsOverlayOpen(true);
  };

  const handleOverlayClose = () => {
    setIsOverlayOpen(false);
  };

  const handleClick = () => {
    console.log('clicked');
  }; // Initialize the store on the client side


  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    fetchData();
  }, []);
  const storeData = _store_store__WEBPACK_IMPORTED_MODULE_11__/* .useStore */ .o.getState(); // Get the current state of the store

  console.log('Store Data:', storeData); // Log the entire store data

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(FlexDiv, {
    children: [isOverlayOpen && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_molecules_SlideoutModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      onClose: handleOverlayClose
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_GlobalStyle__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_DataDisplay__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(RewardsPageTitle, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_subatomic_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        text: "Rewards"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(OfferingSettingsAndButton, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_atoms_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        typeVariant: "primary",
        sizeVariant: "large",
        label: "Add Reward",
        widthVariant: "fill",
        onClick: handleOverlayOpen
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(RewardOfferingsAndSettings, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_organism_RewardOfferings__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          rewardsData: rewardsData
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_organism_RewardSettings__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          defaultRewardsData: defaultRewardsData
        })]
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rewards);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1552:
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
/* harmony import */ var next_dist_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1249);
/* harmony import */ var next_dist_pages_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_pages_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8069);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__]);
private_next_pages_rewards_tsx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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
        App: (next_dist_pages_app__WEBPACK_IMPORTED_MODULE_4___default()),
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

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

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
var __webpack_exports__ = __webpack_require__.X(0, [492,249,855,893,294], () => (__webpack_exec__(1552)));
module.exports = __webpack_exports__;

})();