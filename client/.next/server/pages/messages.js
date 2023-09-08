"use strict";
(() => {
var exports = {};
exports.id = 313;
exports.ids = [313,660];
exports.modules = {

/***/ 7652:
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






const TextareaContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Textarea__TextareaContainer",
  componentId: "sc-14wqn48-0"
})(["@media ", "{display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:8px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS);
const TextareaLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default().label.withConfig({
  displayName: "Textarea__TextareaLabel",
  componentId: "sc-14wqn48-1"
})(["@media ", "{display:flex;flex-direction:row;gap:4px;font-size:16px;font-weight:400;line-height:19px;color:", ";}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral700);
const RequiredAsterisk = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "Textarea__RequiredAsterisk",
  componentId: "sc-14wqn48-2"
})(["@media ", "{color:", ";}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.error500);
const TextareaTextarea = styled_components__WEBPACK_IMPORTED_MODULE_1___default().textarea.withConfig({
  displayName: "Textarea__TextareaTextarea",
  componentId: "sc-14wqn48-3"
})(["@media ", "{display:flex;height:100px;padding:12px;box-sizing:border-box;align-items:flex-start;align-self:stretch;border-radius:8px;background:", ";color:", ";border:none;outline:none;&:focus{border:1px solid ", ";color:", ";}&::placeholder{color:", ";}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral100, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral400, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.primary400, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.primary400, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral300);
const Textarea = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(({
  label,
  value,
  onChange,
  required,
  placeholder,
  disabled
}, ref) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(TextareaContainer, {
    children: [label &&
    /*#__PURE__*/
    // Conditionally render label only if it's provided
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(TextareaLabel, {
      children: [required && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(RequiredAsterisk, {
        children: "*"
      }), label]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(TextareaTextarea, {
      value: value,
      onChange: e => onChange(e.target.value),
      required: required // Add the 'required' attribute conditionally
      ,
      placeholder: placeholder // Pass the 'placeholder' prop
      ,
      disabled: disabled,
      ref: ref
    })]
  });
});
Textarea.displayName = 'Textarea';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);

/***/ }),

/***/ 8058:
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
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6552);
/* harmony import */ var _atoms_Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7652);
/* harmony import */ var _subatomic_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(711);
/* harmony import */ var _atoms_ToggleSwitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5030);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8187);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_8__]);
_store_store__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








 // Import your store




const MessageCellContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "MessageCell__MessageCellContainer",
  componentId: "sc-1gn6bj9-0"
})(["@media ", "{display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:20px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS);
const MessageTop = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "MessageCell__MessageTop",
  componentId: "sc-1gn6bj9-1"
})(["@media ", "{display:flex;gap:24px;width:100%;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS);
const HeadingAndSubhead = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "MessageCell__HeadingAndSubhead",
  componentId: "sc-1gn6bj9-2"
})(["@media ", "{display:flex;flex-direction:column;gap:8px;flex:1 0 0;h4{font-size:24px;font-weight:800;line-height:29px;color:", ";}p{font-size:16px;font-weight:500;line-height:19px;color:", ";}}@media ", "{h4{font-size:32px;font-weight:800;line-height:39px;color:", ";}p{font-size:20px;font-weight:500;line-height:24px;color:", ";}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral600, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral400, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.L, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral600, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral400);
const MessageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "MessageCell__MessageContainer",
  componentId: "sc-1gn6bj9-3"
})(["@media ", "{display:flex;padding:16px;flex-direction:column;gap:16px;border-radius:16px;background:", ";width:100%;box-sizing:border-box;}@media ", "{padding:20px;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral200, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.L);
const TextareaAndButtons = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "MessageCell__TextareaAndButtons",
  componentId: "sc-1gn6bj9-4"
})(["@media ", "{display:flex;flex-direction:column;align-items:flex-start;gap:16px;align-self:stretch;flex:1 0 0;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS);
const BottomButtons = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "MessageCell__BottomButtons",
  componentId: "sc-1gn6bj9-5"
})(["@media ", "{display:flex;flex-direction:column;gap:16px;width:100%;}@media ", "{flex-direction:row;gap:12px;width:auto;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.S);
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "MessageCell__ButtonContainer",
  componentId: "sc-1gn6bj9-6"
})(["@media ", "{display:flex;width:100%;}@media ", "{width:auto;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.S);
const TextMessageTop = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "MessageCell__TextMessageTop",
  componentId: "sc-1gn6bj9-7"
})(["@media ", "{display:flex;padding:0;margin:0;p{color:", ";font-size:16px;font-weight:500;line-height:26px;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral700);
const TextMessageBottom = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "MessageCell__TextMessageBottom",
  componentId: "sc-1gn6bj9-8"
})(["@media ", "{display:flex;flex-direction:column;padding:0;margin:0;p{color:", ";font-size:16px;font-weight:500;line-height:26px;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.neutral700);

const handleClicked = () => {
  console.log('Clicked');
};

const MessageCell = ({
  messageNumberId: triggeredMessageNumberId,
  messageTitle: triggeredMessageTitle,
  messageSubtitle: triggeredMessageSubtitle,
  textMessageDefaultTextStart: triggeredMessageDefaultStart,
  textMessageCustomText: triggeredMessageCustomText,
  textMessageDefaultTextEnd1: triggeredMessageDefaultEnd1,
  textMessageDefaultTextEnd2: triggeredMessageDefaultEnd2,
  active: triggeredMessageActive,
  onTriggeredMessageToggleChange,
  originalTriggeredMessageValue,
  hasPendingMessageChanges,
  editingIndex,
  setEditingIndex,
  index
}) => {
  const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: isEditing,
    1: setIsEditing
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: originalMessage,
    1: setOriginalMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(triggeredMessageCustomText);
  const {
    0: stagedMessage,
    1: setStagedMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(originalMessage);
  const {
    0: isActive,
    1: setIsActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(triggeredMessageActive);
  const {
    0: isDisabled,
    1: setIsDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    showToast
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_8__/* .useStore */ .o)(state => ({
    showToast: state.showToast
  }));
  /*
  useEffect(() => {
  setIsDisabled(editingIndex !== null && editingIndex !== index);
  }, [editingIndex, index]);
  */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsDisabled(editingIndex !== null);
  }, [editingIndex]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsActive(triggeredMessageActive);
  }, [triggeredMessageActive]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsActive(originalTriggeredMessageValue);
    console.log("isActive state reset to:", originalTriggeredMessageValue);
  }, [originalTriggeredMessageValue]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isEditing) {
      textareaRef.current?.focus();
    }
  }, [isEditing]);

  const handleToggle = newValue => {
    setIsActive(newValue);
    onTriggeredMessageToggleChange(index, newValue);
  };

  const handleEdit = () => {
    if (!hasPendingMessageChanges) {
      setIsEditing(true);
      setEditingIndex(index);
    }
  };

  const handleSave = () => {
    setOriginalMessage(stagedMessage); // Save staged changes to original message

    setIsEditing(false);
    handleSaveMessage();
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setStagedMessage(originalMessage); // Revert staged changes to original message

    setIsEditing(false);
    setEditingIndex(null);
  };

  const handleSaveMessage = async () => {
    // Use the global state to get user or any other required data
    const {
      data
    } = _store_store__WEBPACK_IMPORTED_MODULE_8__/* .useStore */ .o.getState();
    const payload = {
      triggeredMessageDetails: {
        customText: stagedMessage,
        // This seems to be the custom message you want to update
        triggeredMessageId: triggeredMessageNumberId // Assuming `id` is the identifier of the message you're updating
        // Add any other necessary details here

      },
      user: data // If you need user data, otherwise you can omit this

    };

    try {
      const response = await fetch('http://localhost:5000/update-triggered-message-content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const updatedMessage = await response.json();
        showToast('Message updated successfully!', 'success'); // Set the original message to the staged message since it's now saved

        setOriginalMessage(stagedMessage); // You can reset isEditing state here to show the saved message without editing capabilities

        setIsEditing(false); // Additional logic here (e.g., maybe refresh a list of messages if you have one)
      } else {
        showToast('Failed to update message.', 'error');
      }
    } catch (error) {
      showToast('Error: Something went wrong!', 'error');
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(MessageCellContainer, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(MessageTop, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(HeadingAndSubhead, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("h4", {
          children: triggeredMessageTitle
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_subatomic_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          text: triggeredMessageSubtitle
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_atoms_ToggleSwitch__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        active: isActive,
        onChange: handleToggle,
        disabled: isDisabled
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(MessageContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(TextMessageTop, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_subatomic_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          text: triggeredMessageDefaultStart
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(TextareaAndButtons, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_atoms_Textarea__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          value: stagedMessage,
          onChange: value => setStagedMessage(value),
          disabled: !isEditing,
          ref: textareaRef
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(TextMessageBottom, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_subatomic_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            text: triggeredMessageDefaultEnd1
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_subatomic_Text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            text: triggeredMessageDefaultEnd2
          })]
        }), isEditing ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(BottomButtons, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ButtonContainer, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                buttonTypeVariant: "neutral",
                sizeVariant: "large",
                label: "Cancel",
                buttonWidthVariant: "fill",
                onClick: handleCancel
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ButtonContainer, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                buttonTypeVariant: "primary",
                sizeVariant: "large",
                label: "Save",
                buttonWidthVariant: "fill",
                onClick: handleSave
              })
            })]
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ButtonContainer, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            buttonTypeVariant: isDisabled || hasPendingMessageChanges ? "disabled" : "secondary",
            sizeVariant: "large",
            label: "Edit Custom Text",
            buttonWidthVariant: "fill",
            onClick: handleEdit,
            disabled: isDisabled || hasPendingMessageChanges
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageCell);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3493:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _components_subatomic_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(711);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8338);
/* harmony import */ var _constants_Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2287);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7711);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8187);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6197);
/* harmony import */ var _components_atoms_Toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9418);
/* harmony import */ var _components_molecules_BottomSaveNotice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7517);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4612);
/* harmony import */ var _components_molecules_MessageCell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_6__, framer_motion__WEBPACK_IMPORTED_MODULE_7__, _components_atoms_Toast__WEBPACK_IMPORTED_MODULE_8__, _components_molecules_BottomSaveNotice__WEBPACK_IMPORTED_MODULE_9__, socket_io_client__WEBPACK_IMPORTED_MODULE_10__, _components_molecules_MessageCell__WEBPACK_IMPORTED_MODULE_11__]);
([_store_store__WEBPACK_IMPORTED_MODULE_6__, framer_motion__WEBPACK_IMPORTED_MODULE_7__, _components_atoms_Toast__WEBPACK_IMPORTED_MODULE_8__, _components_molecules_BottomSaveNotice__WEBPACK_IMPORTED_MODULE_9__, socket_io_client__WEBPACK_IMPORTED_MODULE_10__, _components_molecules_MessageCell__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // Import your store








const FlexDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "messages__FlexDiv2",
  componentId: "sc-q8sudu-0"
})(["@media ", "{display:flex;gap:40px;flex-direction:column;padding:24px 16px;width:100vw;box-sizing:border-box;background:", ";}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.primary100);
const MessagesPageTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "messages__MessagesPageTitle",
  componentId: "sc-q8sudu-1"
})(["@media ", "{display:flex;color:", ";p{font-size:32px;line-height:39px;font-weight:800;}}@media ", "{color:", ";p{font-size:40px;line-height:48px;}}@media ", "{color:", ";p{font-size:48px;line-height:58px;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.neutral700, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.S, _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.neutral700, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.L, _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.neutral700);
const MessageCellsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "messages__MessageCellsContainer",
  componentId: "sc-q8sudu-2"
})(["@media ", "{display:flex;flex-direction:column;gap:64px;width:100%;}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.XS);
async function getServerSideProps() {
  try {
    // Fetch rewards data
    const response = await fetch('http://localhost:5000/triggered-messages');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const triggeredMessagesData = await response.json();
    console.log(triggeredMessagesData); // Return the fetched data as props

    return {
      props: {
        triggeredMessagesData
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        triggeredMessagesData: []
      }
    };
  }
}

function Messages({
  triggeredMessagesData: initialTriggeredMessagesData
}) {
  const {
    data,
    fetchData,
    toast,
    showToast,
    hideToast
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_6__/* .useStore */ .o)();
  const {
    0: hasPendingMessageChanges,
    1: setHasPendingMessageChanges
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: originalTriggeredMessageToggles,
    1: setOriginalTriggeredMessageToggles
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const {
    0: currentTriggeredMessageToggles,
    1: setCurrentTriggeredMessageToggles
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const {
    0: triggeredMessagesData,
    1: setTriggeredMessagesData
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(initialTriggeredMessagesData);
  const {
    0: editingIndex,
    1: setEditingIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    console.log("Setting up socket connection.");
    const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_10__["default"])("http://localhost:5000"); // Listen for 'reward-updated' events

    socket.on("triggered-message-updated", updatedTriggeredMessage => {
      // Update the rewardsData state here
      console.log(updatedTriggeredMessage);
      const updatedTriggeredMessagesData = triggeredMessagesData.map(triggeredMessage => {
        if (triggeredMessage.messageNumberId === updatedTriggeredMessage.messageNumberId) {
          return updatedTriggeredMessage;
        }

        return triggeredMessage;
      });
      setTriggeredMessagesData(updatedTriggeredMessagesData);
    });
    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    });
    return () => {
      // Cleanup: Disconnect socket when component is unmounted
      socket.disconnect();
    };
  }, [triggeredMessagesData]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    fetchData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setOriginalTriggeredMessageToggles(triggeredMessagesData.map(triggeredMessage => triggeredMessage.active));
    setCurrentTriggeredMessageToggles(triggeredMessagesData.map(triggeredMessage => triggeredMessage.active));
  }, [triggeredMessagesData]);

  const handleTriggeredMessagePendingChange = (index, newValue) => {
    const newCurrentTriggeredMessageToggles = [...currentTriggeredMessageToggles];
    newCurrentTriggeredMessageToggles[index] = newValue;
    setCurrentTriggeredMessageToggles(newCurrentTriggeredMessageToggles);
    setHasPendingMessageChanges(!originalTriggeredMessageToggles.every((val, i) => val === newCurrentTriggeredMessageToggles[i]));
  };

  async function handleSaveMessageChanges() {
    const updatedTriggeredMessagesData = triggeredMessagesData.map((triggeredMessage, index) => _objectSpread(_objectSpread({}, triggeredMessage), {}, {
      active: currentTriggeredMessageToggles[index]
    }));
    const payload = {
      updatedTriggeredMessages: updatedTriggeredMessagesData
    };
    console.log(`Sending updated data: ${JSON.stringify(payload)}`);

    try {
      const response = await fetch('http://localhost:5000/update-triggered-messages', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        console.log('Successfully updated messages!');
        showToast('Successfully updated messages!', 'success'); // Added toast message

        setOriginalTriggeredMessageToggles(currentTriggeredMessageToggles);
        setHasPendingMessageChanges(false);
      } else {
        console.log('Failed to update messages.');
        showToast('Failed to update messages.', 'error');
      }
    } catch (error) {
      console.error('Error updating messages:', error);
      showToast('Error updating messages.', 'error');
    }
  }

  const handleCancelMessageChanges = () => {
    // Step 1: Reset Message Toggles
    setCurrentTriggeredMessageToggles([...originalTriggeredMessageToggles]); // Step 2: Reset the hasPendingMessageChanges flag

    setHasPendingMessageChanges(false);
  };

  const storeData = _store_store__WEBPACK_IMPORTED_MODULE_6__/* .useStore */ .o.getState(); // Get the current state of the store

  console.log('Store Data:', storeData); // Log the entire store data

  console.log(triggeredMessagesData);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(FlexDiv2, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {
      children: hasPendingMessageChanges && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_molecules_BottomSaveNotice__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        onSave: handleSaveMessageChanges,
        onCancel: handleCancelMessageChanges
      }, "bottom-save-notice")
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {
      children: toast.visible && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_atoms_Toast__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}, "toast")
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(MessagesPageTitle, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_subatomic_Text__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        text: "Messages"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(MessageCellsContainer, {
      children: triggeredMessagesData.map(({
        messageNumberId: triggeredMessageNumberId,
        messageTitle: triggeredMessageTitle,
        messageSubtitle: triggeredMessageSubtitle,
        textMessageDefaultTextStart: triggeredMessageDefaultStart,
        textMessageCustomText: triggeredMessageCustomText,
        textMessageDefaultTextEnd1: triggeredMessageDefaultEnd1,
        textMessageDefaultTextEnd2: triggeredMessageDefaultEnd2,
        active: triggeredMessageActive
      }, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_molecules_MessageCell__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        // Make sure to provide a unique key for each item
        // Pass the data to the RewardItem component as props
        index: index,
        messageNumberId: triggeredMessageNumberId,
        messageTitle: triggeredMessageTitle,
        messageSubtitle: triggeredMessageSubtitle,
        textMessageDefaultTextStart: triggeredMessageDefaultStart,
        textMessageCustomText: triggeredMessageCustomText,
        textMessageDefaultTextEnd1: triggeredMessageDefaultEnd1,
        textMessageDefaultTextEnd2: triggeredMessageDefaultEnd2,
        active: currentTriggeredMessageToggles[index],
        onTriggeredMessageToggleChange: handleTriggeredMessagePendingChange,
        originalTriggeredMessageValue: originalTriggeredMessageToggles[index],
        editingIndex: editingIndex,
        setEditingIndex: setEditingIndex,
        hasPendingMessageChanges: hasPendingMessageChanges // Add other props as needed

      }, triggeredMessageNumberId))
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Messages);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7538:
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
/* harmony import */ var private_next_pages_messages_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3493);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_messages_tsx__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_messages_tsx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_messages_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_messages_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_messages_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_messages_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_messages_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_messages_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_messages_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_messages_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_messages_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_messages_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_messages_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/messages",
        pathname: "/messages",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_messages_tsx__WEBPACK_IMPORTED_MODULE_5__
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
var __webpack_exports__ = __webpack_require__.X(0, [492,815,126,187,631], () => (__webpack_exec__(7538)));
module.exports = __webpack_exports__;

})();