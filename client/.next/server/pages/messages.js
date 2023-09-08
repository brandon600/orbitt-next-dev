"use strict";
(() => {
var exports = {};
exports.id = 313;
exports.ids = [313,660];
exports.modules = {

/***/ 4485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ molecules_MessageCell)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/constants/Colors.ts
var Colors = __webpack_require__(2287);
// EXTERNAL MODULE: ./src/constants/StyledMediaQuery.ts
var StyledMediaQuery = __webpack_require__(8338);
// EXTERNAL MODULE: ./src/components/atoms/Button.tsx
var Button = __webpack_require__(6552);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/components/atoms/Textarea.tsx






const TextareaContainer = external_styled_components_default().div.withConfig({
  displayName: "Textarea__TextareaContainer",
  componentId: "sc-14wqn48-0"
})(["@media ", "{display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:8px;}"], StyledMediaQuery/* default */.Z.XS);
const TextareaLabel = external_styled_components_default().label.withConfig({
  displayName: "Textarea__TextareaLabel",
  componentId: "sc-14wqn48-1"
})(["@media ", "{display:flex;flex-direction:row;gap:4px;font-size:16px;font-weight:400;line-height:19px;color:", ";}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral700);
const RequiredAsterisk = external_styled_components_default().span.withConfig({
  displayName: "Textarea__RequiredAsterisk",
  componentId: "sc-14wqn48-2"
})(["@media ", "{color:", ";}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.error500);
const TextareaTextarea = external_styled_components_default().textarea.withConfig({
  displayName: "Textarea__TextareaTextarea",
  componentId: "sc-14wqn48-3"
})(["@media ", "{display:flex;height:100px;padding:12px;box-sizing:border-box;align-items:flex-start;align-self:stretch;border-radius:8px;background:", ";color:", ";border:none;outline:none;&:focus{border:1px solid ", ";color:", ";}&::placeholder{color:", ";}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral100, Colors/* default */.Z.neutral400, Colors/* default */.Z.primary400, Colors/* default */.Z.primary400, Colors/* default */.Z.neutral300);
const Textarea = /*#__PURE__*/external_react_default().forwardRef(({
  label,
  value,
  onChange,
  required,
  placeholder,
  disabled
}, ref) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(TextareaContainer, {
    children: [label &&
    /*#__PURE__*/
    // Conditionally render label only if it's provided
    (0,jsx_runtime.jsxs)(TextareaLabel, {
      children: [required && /*#__PURE__*/jsx_runtime.jsx(RequiredAsterisk, {
        children: "*"
      }), label]
    }), /*#__PURE__*/jsx_runtime.jsx(TextareaTextarea, {
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
/* harmony default export */ const atoms_Textarea = (Textarea);
// EXTERNAL MODULE: ./src/components/atoms/ToggleSwitch.tsx
var ToggleSwitch = __webpack_require__(5030);
;// CONCATENATED MODULE: ./src/components/molecules/MessageCell.tsx










const MessageCellContainer = external_styled_components_default().div.withConfig({
  displayName: "MessageCell__MessageCellContainer",
  componentId: "sc-1gn6bj9-0"
})(["@media ", "{display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:20px;}"], StyledMediaQuery/* default */.Z.XS);
const MessageTop = external_styled_components_default().div.withConfig({
  displayName: "MessageCell__MessageTop",
  componentId: "sc-1gn6bj9-1"
})(["@media ", "{display:flex;gap:24px;width:100%;}"], StyledMediaQuery/* default */.Z.XS);
const HeadingAndSubhead = external_styled_components_default().div.withConfig({
  displayName: "MessageCell__HeadingAndSubhead",
  componentId: "sc-1gn6bj9-2"
})(["@media ", "{display:flex;flex-direction:column;gap:8px;flex:1 0 0;h4{font-size:24px;font-weight:800;line-height:29px;color:", ";}p{font-size:16px;font-weight:500;line-height:19px;color:", ";}}@media ", "{h4{font-size:32px;font-weight:800;line-height:39px;color:", ";}p{font-size:20px;font-weight:500;line-height:24px;color:", ";}}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral600, Colors/* default */.Z.neutral400, StyledMediaQuery/* default */.Z.L, Colors/* default */.Z.neutral600, Colors/* default */.Z.neutral400);
const MessageContainer = external_styled_components_default().div.withConfig({
  displayName: "MessageCell__MessageContainer",
  componentId: "sc-1gn6bj9-3"
})(["@media ", "{display:flex;padding:16px;flex-direction:column;gap:16px;border-radius:16px;background:", ";width:100%;p{color:", ";font-size:16px;font-weight:500;line-height:26px;}}@media ", "{padding:20px;}"], StyledMediaQuery/* default */.Z.XS, Colors/* default */.Z.neutral200, Colors/* default */.Z.neutral700, StyledMediaQuery/* default */.Z.L);
const TextareaAndButtons = external_styled_components_default().div.withConfig({
  displayName: "MessageCell__TextareaAndButtons",
  componentId: "sc-1gn6bj9-4"
})(["@media ", "{display:flex;flex-direction:column;align-items:flex-start;gap:16px;align-self:stretch;flex:1 0 0;}"], StyledMediaQuery/* default */.Z.XS);
const BottomButtons = external_styled_components_default().div.withConfig({
  displayName: "MessageCell__BottomButtons",
  componentId: "sc-1gn6bj9-5"
})(["@media ", "{display:flex;flex-direction:column;gap:16px;width:100%;}@media ", "{flex-direction:row;gap:12px;width:auto;}"], StyledMediaQuery/* default */.Z.XS, StyledMediaQuery/* default */.Z.S);
const ButtonContainer = external_styled_components_default().div.withConfig({
  displayName: "MessageCell__ButtonContainer",
  componentId: "sc-1gn6bj9-6"
})(["@media ", "{display:flex;width:100%;}@media ", "{width:auto;}"], StyledMediaQuery/* default */.Z.XS, StyledMediaQuery/* default */.Z.S);

const handleClicked = () => {
  console.log('Clicked');
};

const MessageCell = ({
  messageNumberId: triggeredMessageNumberId,
  messageTitle: triggeredMessageTitle,
  messageSubtitle: triggeredMessageSubtitle,
  textMessageDefaultStart: triggeredMessageDefaultStart,
  textMessageCustomText: triggeredMessageCustomText,
  textMessageDefaultEnd1: triggeredMessageDefaultEnd1,
  textMessageDefaultEnd2: triggeredMessageDefaultEnd2,
  active: triggeredMessageActive,
  id
}) => {
  const textareaRef = (0,external_react_.useRef)(null);
  const {
    0: isEditing,
    1: setIsEditing
  } = (0,external_react_.useState)(false);
  const {
    0: originalMessage,
    1: setOriginalMessage
  } = (0,external_react_.useState)('Message Cell Value here');
  const {
    0: stagedMessage,
    1: setStagedMessage
  } = (0,external_react_.useState)(originalMessage);
  (0,external_react_.useEffect)(() => {
    if (isEditing) {
      textareaRef.current?.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setOriginalMessage(stagedMessage); // Save staged changes to original message

    setIsEditing(false);
  };

  const handleCancel = () => {
    setStagedMessage(originalMessage); // Revert staged changes to original message

    setIsEditing(false);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(MessageCellContainer, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(MessageTop, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(HeadingAndSubhead, {
        children: [/*#__PURE__*/jsx_runtime.jsx("h4", {
          children: triggeredMessageTitle
        }), /*#__PURE__*/jsx_runtime.jsx("p", {
          children: triggeredMessageSubtitle
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(ToggleSwitch/* default */.Z, {
        active: true,
        onChange: handleClicked
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(MessageContainer, {
      children: [/*#__PURE__*/jsx_runtime.jsx("p", {
        children: "Message Custom Text"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TextareaAndButtons, {
        children: [/*#__PURE__*/jsx_runtime.jsx(atoms_Textarea, {
          value: stagedMessage,
          onChange: value => setStagedMessage(value),
          disabled: !isEditing,
          ref: textareaRef
        }), isEditing ? /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(BottomButtons, {
            children: [/*#__PURE__*/jsx_runtime.jsx(ButtonContainer, {
              children: /*#__PURE__*/jsx_runtime.jsx(Button/* default */.Z, {
                buttonTypeVariant: "neutral",
                sizeVariant: "large",
                label: "Cancel",
                buttonWidthVariant: "fill",
                onClick: handleCancel
              })
            }), /*#__PURE__*/jsx_runtime.jsx(ButtonContainer, {
              children: /*#__PURE__*/jsx_runtime.jsx(Button/* default */.Z, {
                buttonTypeVariant: "primary",
                sizeVariant: "large",
                label: "Save",
                buttonWidthVariant: "fill",
                onClick: handleSave
              })
            })]
          })
        }) : /*#__PURE__*/jsx_runtime.jsx(ButtonContainer, {
          children: /*#__PURE__*/jsx_runtime.jsx(Button/* default */.Z, {
            buttonTypeVariant: "secondary",
            sizeVariant: "large",
            label: "Edit Custom Text",
            buttonWidthVariant: "fill",
            onClick: handleEdit
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const molecules_MessageCell = (MessageCell);

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
/* harmony import */ var _components_molecules_MessageCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4485);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_6__]);
_store_store__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






 // Import your store




const FlexDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "messages__FlexDiv",
  componentId: "sc-q8sudu-0"
})(["@media ", "{display:flex;gap:40px;flex-direction:column;padding:24px 16px;width:100vw;box-sizing:border-box;background:", ";}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.primary100);
const MessagesPageTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "messages__MessagesPageTitle",
  componentId: "sc-q8sudu-1"
})(["@media ", "{display:flex;color:", ";p{font-size:32px;line-height:39px;font-weight:800;}}@media ", "{color:", ";p{font-size:40px;line-height:48px;}}@media ", "{color:", ";p{font-size:48px;line-height:58px;}}"], _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.XS, _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.neutral700, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.S, _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.neutral700, _constants_StyledMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.L, _constants_Colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.neutral700);
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
  triggeredMessagesData
}) {
  const {
    0: isOverlayOpen,
    1: setIsOverlayOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    data,
    fetchData
  } = (0,_store_store__WEBPACK_IMPORTED_MODULE_6__/* .useStore */ .o)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    fetchData();
  }, []);
  const storeData = _store_store__WEBPACK_IMPORTED_MODULE_6__/* .useStore */ .o.getState(); // Get the current state of the store

  console.log('Store Data:', storeData); // Log the entire store data

  console.log(triggeredMessagesData);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(FlexDiv, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(MessagesPageTitle, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_subatomic_Text__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        text: "Messages"
      })
    }), triggeredMessagesData.map(({
      messageNumberId: triggeredMessageNumberId,
      messageTitle: triggeredMessageTitle,
      messageSubtitle: triggeredMessageSubtitle,
      textMessageDefaultStart: triggeredMessageDefaultStart,
      textMessageCustomText: triggeredMessageCustomText,
      textMessageDefaultEnd1: triggeredMessageDefaultEnd1,
      textMessageDefaultEnd2: triggeredMessageDefaultEnd2,
      active: triggeredMessageActive,
      id
    }, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_molecules_MessageCell__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      // Make sure to provide a unique key for each item
      // Pass the data to the RewardItem component as props
      index: index,
      id: id,
      messageNumberId: triggeredMessageNumberId,
      messageTitle: triggeredMessageTitle,
      messageSubtitle: triggeredMessageSubtitle,
      textMessageDefaultStart: triggeredMessageDefaultStart,
      textMessageCustomText: triggeredMessageCustomText,
      textMessageDefaultEnd1: triggeredMessageDefaultEnd1,
      textMessageDefaultEnd2: triggeredMessageDefaultEnd2,
      active: triggeredMessageActive // Add other props as needed

    }, id))]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Messages);
/*

export interface TriggeredMessageData {
    id: number; // Example ID property, adjust as needed
    messageNumberId: number;
    messageTitle: string;
    messagesubTitle: string;
    textMessageDefaultStart: string;
    textMessageCustomText: string;
    textMessageDefaultEnd1: string;
    textMessageDefaultEnd2: string;
    active: boolean;
    index: number;
    // Add other properties as needed
  }
  */
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
var __webpack_exports__ = __webpack_require__.X(0, [492,815,126,187,833], () => (__webpack_exec__(7538)));
module.exports = __webpack_exports__;

})();