(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[313],{7711:function(e,n,r){"use strict";var i=(0,r(508).vJ)(["body{display:flex;margin:0;font-family:Arial,sans-serif;background-color:#f0f0f0;color:#333;}h1,h2,h3,h4,h5,h6,p{margin-block-start:0px;margin-block-end:0px;margin-inline-start:0px;margin-inline-end:0px;}form{display:flex;flex-direction:column;margin-top:0em;}input{padding:0;font:inherit;font-size:16px;background-color:transparent;margin:0;text-align:left;appearance:none;cursor:text;outline:none;}select{background-color:pink;font:inherit;font-size:16px;font-family:inherit;background-color:transparent;border:none;border-color:padding:0.25rem;margin:0;box-sizing:border-box;width:100%;cursor:pointer;outline:none;}textarea{padding:0;font:inherit;font-size:16px;font-family:inherit;background-color:transparent;margin:0;text-align:left;appearance:none;cursor:text;outline:none;}"]);n.Z=i},6552:function(e,n,r){"use strict";var i=r(9499),t=r(4730);r(7294);var a=r(508),o=r(2287),s=r(5893),l=["label","onClick","buttonTypeVariant","sizeVariant","buttonWidthVariant"];function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,i)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(n){(0,i.Z)(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var p={primary:(0,a.iv)(["background-color:",";p{color:",";}border:none;color:",";"],o.Z.primary500,o.Z.shades100,o.Z.shades100),secondary:(0,a.iv)(["background-color:",";color:",";border:1px solid ",";"],o.Z.shades100,o.Z.primary500,o.Z.primary500),neutral:(0,a.iv)(["background-color:",";color:",";border:1px solid ",";"],o.Z.shades100,o.Z.neutral400,o.Z.neutral400),disabled:(0,a.iv)(["background-color:",";color:",";border:none;"],o.Z.neutral300,o.Z.shades100),error:(0,a.iv)(["background-color:",";color:",";border:none;"],o.Z.error600,o.Z.shades100),smsBlast:(0,a.iv)(["background-color:",";color:",";border:none;"],o.Z.success700,o.Z.shades100)},u={small:(0,a.iv)(["height:45px;padding:12px 20px;font-size:14px;font-size:16px;font-weight:800;p{font-size:16px;font-weight:800;}"]),large:(0,a.iv)(["height:56px;padding:0px 24px;font-size:16px;font-weight:800;p{font-size:16px;font-weight:800;}"])},g=a.ZP.button.withConfig({displayName:"Button__ButtonComponent",componentId:"sc-evl40u-0"})(["display:flex;align-items:center;justify-content:center;border-radius:6px;cursor:pointer;",";",";width:",";"],function(e){return p[e.buttonTypeVariant||"primary"]},function(e){return u[e.sizeVariant||"large"]},function(e){return"fill"===e.buttonWidthVariant?"100%":"auto"});n.Z=function(e){var n=e.label,r=e.onClick,i=e.buttonTypeVariant,a=e.sizeVariant,o=e.buttonWidthVariant,c=(0,t.Z)(e,l);return(0,s.jsx)(g,d(d({as:"button",onClick:r,buttonTypeVariant:void 0===i?"primary":i,sizeVariant:void 0===a?"large":a,buttonWidthVariant:void 0===o?"content":o},c),{},{children:n}))}},5030:function(e,n,r){"use strict";r(7294);var i=r(508),t=r(2287),a=r(5893),o=i.ZP.label.withConfig({displayName:"ToggleSwitch__ToggleContainer",componentId:"sc-1e3v1ch-0"})(["display:flex;width:64px;height:32px;cursor:pointer;border-radius:20px;background-color:",";transition:background-color 0.4s;"],function(e){return e.active?t.Z.success600:t.Z.neutral300}),s=i.ZP.input.withConfig({displayName:"ToggleSwitch__SwitchInput",componentId:"sc-1e3v1ch-1"})(["display:none;"]),l=i.ZP.div.withConfig({displayName:"ToggleSwitch__Slider",componentId:"sc-1e3v1ch-2"})(["flex:1;display:flex;align-items:center;transition:0.4s;"]),c=i.ZP.div.withConfig({displayName:"ToggleSwitch__SliderButton",componentId:"sc-1e3v1ch-3"})(["width:24px;height:24px;background-color:white;border-radius:50%;margin-left:",";transition:margin-left 0.2s ease-in-out;"],function(e){return e.active?"calc(100% - 28px)":"4px"});n.Z=function(e){var n=e.active,r=e.onChange;return(0,a.jsxs)(o,{active:n,children:[(0,a.jsx)(s,{type:"checkbox",checked:n,onChange:function(){r(!n)}}),(0,a.jsx)(l,{children:(0,a.jsx)(c,{active:n})})]})}},2287:function(e,n){"use strict";n.Z={primary100:"#FAFDFF",primary200:"#B8E0FF",primary300:"#7AC1FF",primary400:"#3D9EFF",primary500:"#0177FE",primary600:"#0064D6",primary700:"#004CA3",primary800:"#003E84",primary900:"#002B5C",secondary100:"#F5FFFE",secondary200:"#B8FFF8",secondary300:"#7AFFF6",secondary400:"#3DFFF9",secondary500:"#00FFFF",secondary600:"#00CFD6",secondary700:"#00A2AD",secondary800:"#007785",secondary900:"#00505C",tertiary100:"#FFF5F9",tertiary200:"#FFB8D9",tertiary300:"#FF0090",tertiary400:"#FF3DB1",tertiary500:"#FF0090",tertiary600:"#D60072",tertiary700:"#AD0057",tertiary800:"#85003E",tertiary900:"#5C0028",success100:"#F5FFF8",success200:"#B8FFCD",success300:"#7AFFA7",success400:"#3DFF84",success500:"#01FE66",success600:"#00D65D",success700:"#00AD51",success800:"#008542",success900:"#005C31",warning100:"#FFFAF5",warning200:"#FFE0B8",warning300:"#FFCA7A",warning400:"#FFB83D",warning500:"#FFAA01",warning600:"#D68800",warning700:"#AD6200",warning800:"#854200",warning900:"#5C2800",error100:"#FFF5F6",error200:"#FFB8C1",error300:"#FF7A8C",error400:"#FF3D57",error500:"#FF0022",error600:"#D60015",error700:"#AD000C",error800:"#850400",error900:"#5C0600",neutral100:"#F4F7FB",neutral200:"#E6EDF4",neutral300:"#BDCBDB",neutral400:"#8598AD",neutral500:"#597DA6",neutral600:"#3D638F",neutral700:"#364B63",neutral800:"#29323D",neutral900:"#17191C",shades100:"#FFFFFF",shades900:"#000000"}},8338:function(e,n){"use strict";n.Z={XS:"(min-width: ".concat("320px",")"),S:"(min-width: ".concat("720px",")"),M:"(min-width: ".concat("1040px",")"),L:"(min-width: ".concat("1280px",")"),XL:"(min-width: ".concat("1440px",")")}},3324:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return _}});var i=r(508),t=r(7294),a=r(7711),o=r(2287),s=r(8338),l=r(6552),c=r(5893),d=i.ZP.div.withConfig({displayName:"Textarea__TextareaContainer",componentId:"sc-14wqn48-0"})(["@media ","{display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:8px;}"],s.Z.XS),p=i.ZP.label.withConfig({displayName:"Textarea__TextareaLabel",componentId:"sc-14wqn48-1"})(["@media ","{display:flex;flex-direction:row;gap:4px;font-size:16px;font-weight:400;line-height:19px;color:",";}"],s.Z.XS,o.Z.neutral700),u=i.ZP.span.withConfig({displayName:"Textarea__RequiredAsterisk",componentId:"sc-14wqn48-2"})(["@media ","{color:",";}"],s.Z.XS,o.Z.error500),g=i.ZP.textarea.withConfig({displayName:"Textarea__TextareaTextarea",componentId:"sc-14wqn48-3"})(["@media ","{display:flex;height:100px;padding:12px;box-sizing:border-box;align-items:flex-start;align-self:stretch;border-radius:8px;background:",";color:",";border:none;outline:none;&:focus{border:1px solid ",";color:",";}&::placeholder{color:",";}}"],s.Z.XS,o.Z.neutral100,o.Z.neutral400,o.Z.primary400,o.Z.primary400,o.Z.neutral300),f=t.forwardRef(function(e,n){var r=e.label,i=e.value,t=e.onChange,a=e.required,o=e.placeholder,s=e.disabled;return(0,c.jsxs)(d,{children:[r&&(0,c.jsxs)(p,{children:[a&&(0,c.jsx)(u,{children:"*"}),r]}),(0,c.jsx)(g,{value:i,onChange:function(e){return t(e.target.value)},required:a,placeholder:o,disabled:s,ref:n})]})});f.displayName="Textarea";var h=r(5030),x=i.ZP.div.withConfig({displayName:"MessageCell__MessageCellContainer",componentId:"sc-1gn6bj9-0"})(["@media ","{display:flex;width:100%;flex-direction:column;align-items:flex-start;gap:20px;}"],s.Z.XS),m=i.ZP.div.withConfig({displayName:"MessageCell__MessageTop",componentId:"sc-1gn6bj9-1"})(["@media ","{display:flex;gap:24px;width:100%;}"],s.Z.XS),y=i.ZP.div.withConfig({displayName:"MessageCell__HeadingAndSubhead",componentId:"sc-1gn6bj9-2"})(["@media ","{display:flex;flex-direction:column;gap:8px;flex:1 0 0;h4{font-size:24px;font-weight:800;line-height:29px;color:",";}p{font-size:16px;font-weight:500;line-height:19px;color:",";}}@media ","{h4{font-size:32px;font-weight:800;line-height:39px;color:",";}p{font-size:20px;font-weight:500;line-height:24px;color:",";}}"],s.Z.XS,o.Z.neutral600,o.Z.neutral400,s.Z.L,o.Z.neutral600,o.Z.neutral400),b=i.ZP.div.withConfig({displayName:"MessageCell__MessageContainer",componentId:"sc-1gn6bj9-3"})(["@media ","{display:flex;padding:16px;flex-direction:column;gap:16px;border-radius:16px;background:",";width:100%;p{color:",";font-size:16px;font-weight:500;line-height:26px;}}@media ","{padding:20px;}"],s.Z.XS,o.Z.neutral200,o.Z.neutral700,s.Z.L),F=i.ZP.div.withConfig({displayName:"MessageCell__TextareaAndButtons",componentId:"sc-1gn6bj9-4"})(["@media ","{display:flex;flex-direction:column;align-items:flex-start;gap:16px;align-self:stretch;flex:1 0 0;}"],s.Z.XS),w=i.ZP.div.withConfig({displayName:"MessageCell__BottomButtons",componentId:"sc-1gn6bj9-5"})(["@media ","{display:flex;flex-direction:column;gap:16px;width:100%;}@media ","{flex-direction:row;gap:12px;width:auto;}"],s.Z.XS,s.Z.S),Z=i.ZP.div.withConfig({displayName:"MessageCell__ButtonContainer",componentId:"sc-1gn6bj9-6"})(["@media ","{display:flex;width:100%;}@media ","{width:auto;}"],s.Z.XS,s.Z.S),C=function(){console.log("Clicked")},v=function(e){var n=e.messageName,r=(0,t.useRef)(null),i=(0,t.useState)(!1),a=i[0],o=i[1],s=(0,t.useState)("Message Cell Value here"),d=s[0],p=s[1],u=(0,t.useState)(d),g=u[0],v=u[1];return(0,t.useEffect)(function(){if(a){var e;null===(e=r.current)||void 0===e||e.focus()}},[a]),(0,c.jsxs)(x,{children:[(0,c.jsxs)(m,{children:[(0,c.jsxs)(y,{children:[(0,c.jsx)("h4",{children:n}),(0,c.jsx)("p",{children:"Message"})]}),(0,c.jsx)(h.Z,{active:!0,onChange:C})]}),(0,c.jsxs)(b,{children:[(0,c.jsx)("p",{children:"Message Custom Text"}),(0,c.jsxs)(F,{children:[(0,c.jsx)(f,{value:g,onChange:function(e){return v(e)},disabled:!a,ref:r}),a?(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(w,{children:[(0,c.jsx)(Z,{children:(0,c.jsx)(l.Z,{buttonTypeVariant:"neutral",sizeVariant:"large",label:"Cancel",buttonWidthVariant:"fill",onClick:function(){v(d),o(!1)}})}),(0,c.jsx)(Z,{children:(0,c.jsx)(l.Z,{buttonTypeVariant:"primary",sizeVariant:"large",label:"Save",buttonWidthVariant:"fill",onClick:function(){p(g),o(!1)}})})]})}):(0,c.jsx)(Z,{children:(0,c.jsx)(l.Z,{buttonTypeVariant:"secondary",sizeVariant:"large",label:"Edit Custom Text",buttonWidthVariant:"fill",onClick:function(){o(!0)}})})]})]})]})},j=i.ZP.div.withConfig({displayName:"messages__FlexDiv",componentId:"sc-q8sudu-0"})(["display:flex;width:100vw;"]),_=function(){return(0,c.jsxs)(j,{children:[(0,c.jsx)(a.Z,{}),(0,c.jsx)(v,{messageName:"Message Name"})]})}},4755:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/messages",function(){return r(3324)}])}},function(e){e.O(0,[548,774,888,179],function(){return e(e.s=4755)}),_N_E=e.O()}]);