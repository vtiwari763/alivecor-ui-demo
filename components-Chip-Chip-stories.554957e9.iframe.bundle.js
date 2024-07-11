"use strict";(self.webpackChunk_vtiwari763_alivecor_ui_demo=self.webpackChunk_vtiwari763_alivecor_ui_demo||[]).push([[837],{"./node_modules/@mui/base/utils/appendOwnerState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>appendOwnerState});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_isHostComponent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/base/utils/isHostComponent.js");function appendOwnerState(elementType,otherProps,ownerState){return void 0===elementType||(0,_isHostComponent__WEBPACK_IMPORTED_MODULE_0__.g)(elementType)?otherProps:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.A)({},otherProps,{ownerState:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.A)({},otherProps.ownerState,ownerState)})}},"./node_modules/@mui/base/utils/extractEventHandlers.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function extractEventHandlers(object,excludeKeys=[]){if(void 0===object)return{};const result={};return Object.keys(object).filter((prop=>prop.match(/^on[A-Z]/)&&"function"==typeof object[prop]&&!excludeKeys.includes(prop))).forEach((prop=>{result[prop]=object[prop]})),result}__webpack_require__.d(__webpack_exports__,{h:()=>extractEventHandlers})},"./node_modules/@mui/base/utils/isHostComponent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isHostComponent(element){return"string"==typeof element}__webpack_require__.d(__webpack_exports__,{g:()=>isHostComponent})},"./node_modules/@mui/base/utils/mergeSlotProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>mergeSlotProps});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),extractEventHandlers=__webpack_require__("./node_modules/@mui/base/utils/extractEventHandlers.js");function omitEventHandlers(object){if(void 0===object)return{};const result={};return Object.keys(object).filter((prop=>!(prop.match(/^on[A-Z]/)&&"function"==typeof object[prop]))).forEach((prop=>{result[prop]=object[prop]})),result}function mergeSlotProps(parameters){const{getSlotProps,additionalProps,externalSlotProps,externalForwardedProps,className}=parameters;if(!getSlotProps){const joinedClasses=(0,clsx.A)(null==additionalProps?void 0:additionalProps.className,className,null==externalForwardedProps?void 0:externalForwardedProps.className,null==externalSlotProps?void 0:externalSlotProps.className),mergedStyle=(0,esm_extends.A)({},null==additionalProps?void 0:additionalProps.style,null==externalForwardedProps?void 0:externalForwardedProps.style,null==externalSlotProps?void 0:externalSlotProps.style),props=(0,esm_extends.A)({},additionalProps,externalForwardedProps,externalSlotProps);return joinedClasses.length>0&&(props.className=joinedClasses),Object.keys(mergedStyle).length>0&&(props.style=mergedStyle),{props,internalRef:void 0}}const eventHandlers=(0,extractEventHandlers.h)((0,esm_extends.A)({},externalForwardedProps,externalSlotProps)),componentsPropsWithoutEventHandlers=omitEventHandlers(externalSlotProps),otherPropsWithoutEventHandlers=omitEventHandlers(externalForwardedProps),internalSlotProps=getSlotProps(eventHandlers),joinedClasses=(0,clsx.A)(null==internalSlotProps?void 0:internalSlotProps.className,null==additionalProps?void 0:additionalProps.className,className,null==externalForwardedProps?void 0:externalForwardedProps.className,null==externalSlotProps?void 0:externalSlotProps.className),mergedStyle=(0,esm_extends.A)({},null==internalSlotProps?void 0:internalSlotProps.style,null==additionalProps?void 0:additionalProps.style,null==externalForwardedProps?void 0:externalForwardedProps.style,null==externalSlotProps?void 0:externalSlotProps.style),props=(0,esm_extends.A)({},internalSlotProps,additionalProps,otherPropsWithoutEventHandlers,componentsPropsWithoutEventHandlers);return joinedClasses.length>0&&(props.className=joinedClasses),Object.keys(mergedStyle).length>0&&(props.style=mergedStyle),{props,internalRef:internalSlotProps.ref}}},"./node_modules/@mui/base/utils/resolveComponentProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function resolveComponentProps(componentProps,ownerState,slotState){return"function"==typeof componentProps?componentProps(ownerState,slotState):componentProps}__webpack_require__.d(__webpack_exports__,{Y:()=>resolveComponentProps})},"./node_modules/@mui/material/utils/createSvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createSvgIcon});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getSvgIconUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiSvgIcon",slot)}(0,generateUtilityClasses.A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],SvgIconRoot=(0,styled.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"inherit"!==ownerState.color&&styles[`color${(0,capitalize.A)(ownerState.color)}`],styles[`fontSize${(0,capitalize.A)(ownerState.fontSize)}`]]}})((({theme,ownerState})=>{var _theme$transitions,_theme$transitions$cr,_theme$transitions2,_theme$typography,_theme$typography$pxT,_theme$typography2,_theme$typography2$px,_theme$typography3,_theme$typography3$px,_palette$ownerState$c,_palette,_palette2,_palette3;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:ownerState.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(_theme$transitions=theme.transitions)||null==(_theme$transitions$cr=_theme$transitions.create)?void 0:_theme$transitions$cr.call(_theme$transitions,"fill",{duration:null==(_theme$transitions2=theme.transitions)||null==(_theme$transitions2=_theme$transitions2.duration)?void 0:_theme$transitions2.shorter}),fontSize:{inherit:"inherit",small:(null==(_theme$typography=theme.typography)||null==(_theme$typography$pxT=_theme$typography.pxToRem)?void 0:_theme$typography$pxT.call(_theme$typography,20))||"1.25rem",medium:(null==(_theme$typography2=theme.typography)||null==(_theme$typography2$px=_theme$typography2.pxToRem)?void 0:_theme$typography2$px.call(_theme$typography2,24))||"1.5rem",large:(null==(_theme$typography3=theme.typography)||null==(_theme$typography3$px=_theme$typography3.pxToRem)?void 0:_theme$typography3$px.call(_theme$typography3,35))||"2.1875rem"}[ownerState.fontSize],color:null!=(_palette$ownerState$c=null==(_palette=(theme.vars||theme).palette)||null==(_palette=_palette[ownerState.color])?void 0:_palette.main)?_palette$ownerState$c:{action:null==(_palette2=(theme.vars||theme).palette)||null==(_palette2=_palette2.action)?void 0:_palette2.active,disabled:null==(_palette3=(theme.vars||theme).palette)||null==(_palette3=_palette3.action)?void 0:_palette3.disabled,inherit:void 0}[ownerState.color]}})),SvgIcon=react.forwardRef((function SvgIcon(inProps,ref){const props=(0,DefaultPropsProvider.b)({props:inProps,name:"MuiSvgIcon"}),{children,className,color="inherit",component="svg",fontSize="medium",htmlColor,inheritViewBox=!1,titleAccess,viewBox="0 0 24 24"}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),hasSvgAsChild=react.isValidElement(children)&&"svg"===children.type,ownerState=(0,esm_extends.A)({},props,{color,component,fontSize,instanceFontSize:inProps.fontSize,inheritViewBox,viewBox,hasSvgAsChild}),more={};inheritViewBox||(more.viewBox=viewBox);const classes=(ownerState=>{const{color,fontSize,classes}=ownerState,slots={root:["root","inherit"!==color&&`color${(0,capitalize.A)(color)}`,`fontSize${(0,capitalize.A)(fontSize)}`]};return(0,composeClasses.A)(slots,getSvgIconUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SvgIconRoot,(0,esm_extends.A)({as:component,className:(0,clsx.A)(classes.root,className),focusable:"false",color:htmlColor,"aria-hidden":!titleAccess||void 0,role:titleAccess?"img":void 0,ref},more,other,hasSvgAsChild&&children.props,{ownerState,children:[hasSvgAsChild?children.props.children:children,titleAccess?(0,jsx_runtime.jsx)("title",{children:titleAccess}):null]}))}));SvgIcon.muiName="SvgIcon";const SvgIcon_SvgIcon=SvgIcon;function createSvgIcon(path,displayName){function Component(props,ref){return(0,jsx_runtime.jsx)(SvgIcon_SvgIcon,(0,esm_extends.A)({"data-testid":`${displayName}Icon`,ref},props,{children:path}))}return Component.muiName=SvgIcon_SvgIcon.muiName,react.memo(react.forwardRef(Component))}},"./src/components/Chip/Chip.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Outlined:()=>Outlined,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Chip_stories});var react=__webpack_require__("./node_modules/react/index.js"),Chip=__webpack_require__("./node_modules/@mui/material/Chip/Chip.js"),emotion_element_43c6fea0_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js"),theme=__webpack_require__("./src/utils/theme.ts"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Person=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getAvatarUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiAvatar",slot)}(0,generateUtilityClasses.A)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var useForkRef=__webpack_require__("./node_modules/@mui/utils/useForkRef/useForkRef.js"),resolveComponentProps=__webpack_require__("./node_modules/@mui/base/utils/resolveComponentProps.js"),mergeSlotProps=__webpack_require__("./node_modules/@mui/base/utils/mergeSlotProps.js"),appendOwnerState=__webpack_require__("./node_modules/@mui/base/utils/appendOwnerState.js");const _excluded=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],_excluded2=["component","slots","slotProps"],_excluded3=["component"];const Avatar_excluded=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],AvatarRoot=(0,styled.Ay)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],ownerState.colorDefault&&styles.colorDefault]}})((({theme})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:theme.typography.fontFamily,fontSize:theme.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(theme.vars||theme).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,esm_extends.A)({color:(theme.vars||theme).palette.background.default},theme.vars?{backgroundColor:theme.vars.palette.Avatar.defaultBg}:(0,esm_extends.A)({backgroundColor:theme.palette.grey[400]},theme.applyStyles("dark",{backgroundColor:theme.palette.grey[600]})))}]}))),AvatarImg=(0,styled.Ay)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(props,styles)=>styles.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),AvatarFallback=(0,styled.Ay)(Person,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(props,styles)=>styles.fallback})({width:"75%",height:"75%"});const Avatar_Avatar=react.forwardRef((function Avatar(inProps,ref){const props=(0,DefaultPropsProvider.b)({props:inProps,name:"MuiAvatar"}),{alt,children:childrenProp,className,component="div",slots={},slotProps={},imgProps,sizes,src,srcSet,variant="circular"}=props,other=(0,objectWithoutPropertiesLoose.A)(props,Avatar_excluded);let children=null;const loaded=function useLoaded({crossOrigin,referrerPolicy,src,srcSet}){const[loaded,setLoaded]=react.useState(!1);return react.useEffect((()=>{if(!src&&!srcSet)return;setLoaded(!1);let active=!0;const image=new Image;return image.onload=()=>{active&&setLoaded("loaded")},image.onerror=()=>{active&&setLoaded("error")},image.crossOrigin=crossOrigin,image.referrerPolicy=referrerPolicy,image.src=src,srcSet&&(image.srcset=srcSet),()=>{active=!1}}),[crossOrigin,referrerPolicy,src,srcSet]),loaded}((0,esm_extends.A)({},imgProps,{src,srcSet})),hasImg=src||srcSet,hasImgNotFailing=hasImg&&"error"!==loaded,ownerState=(0,esm_extends.A)({},props,{colorDefault:!hasImgNotFailing,component,variant}),classes=(ownerState=>{const{classes,variant,colorDefault}=ownerState,slots={root:["root",variant,colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,composeClasses.A)(slots,getAvatarUtilityClass,classes)})(ownerState),[ImgSlot,imgSlotProps]=function useSlot(name,parameters){const{className,elementType:initialElementType,ownerState,externalForwardedProps,getSlotOwnerState,internalForwardedProps}=parameters,useSlotPropsParams=(0,objectWithoutPropertiesLoose.A)(parameters,_excluded),{component:rootComponent,slots={[name]:void 0},slotProps={[name]:void 0}}=externalForwardedProps,other=(0,objectWithoutPropertiesLoose.A)(externalForwardedProps,_excluded2),elementType=slots[name]||initialElementType,resolvedComponentsProps=(0,resolveComponentProps.Y)(slotProps[name],ownerState),_mergeSlotProps=(0,mergeSlotProps.p)((0,esm_extends.A)({className},useSlotPropsParams,{externalForwardedProps:"root"===name?other:void 0,externalSlotProps:resolvedComponentsProps})),{props:{component:slotComponent},internalRef}=_mergeSlotProps,mergedProps=(0,objectWithoutPropertiesLoose.A)(_mergeSlotProps.props,_excluded3),ref=(0,useForkRef.A)(internalRef,null==resolvedComponentsProps?void 0:resolvedComponentsProps.ref,parameters.ref),slotOwnerState=getSlotOwnerState?getSlotOwnerState(mergedProps):{},finalOwnerState=(0,esm_extends.A)({},ownerState,slotOwnerState),LeafComponent="root"===name?slotComponent||rootComponent:slotComponent,props=(0,appendOwnerState.X)(elementType,(0,esm_extends.A)({},"root"===name&&!rootComponent&&!slots[name]&&internalForwardedProps,"root"!==name&&!slots[name]&&internalForwardedProps,mergedProps,LeafComponent&&{as:LeafComponent},{ref}),finalOwnerState);return Object.keys(slotOwnerState).forEach((propName=>{delete props[propName]})),[elementType,props]}("img",{className:classes.img,elementType:AvatarImg,externalForwardedProps:{slots,slotProps:{img:(0,esm_extends.A)({},imgProps,slotProps.img)}},additionalProps:{alt,src,srcSet,sizes},ownerState});return children=hasImgNotFailing?(0,jsx_runtime.jsx)(ImgSlot,(0,esm_extends.A)({},imgSlotProps)):childrenProp||0===childrenProp?childrenProp:hasImg&&alt?alt[0]:(0,jsx_runtime.jsx)(AvatarFallback,{ownerState,className:classes.fallback}),(0,jsx_runtime.jsx)(AvatarRoot,(0,esm_extends.A)({as:component,ownerState,className:(0,clsx.A)(classes.root,className),ref},other,{children}))})),Chip_Chip=({avatar,...props})=>react.createElement(emotion_element_43c6fea0_browser_esm.a,{theme:theme.V},react.createElement(Chip.A,{avatar:avatar&&react.createElement(Avatar_Avatar,null,avatar),...props,sx:{".MuiChip-root":{bgcolor:"#067F6F",borderColor:"#067F6F"}}}));Chip_Chip.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!0,tsType:{name:"string"},description:""},avatar:{required:!1,tsType:{name:"any"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "error" | "info" | "success" | "warning"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"filled" | "outlined"',elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"outlined"'}]},description:""}}};const Chip_stories={title:"Chips",component:Chip_Chip,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},Outlined={args:{label:"New",avatar:"12",size:"medium"}},__namedExportsOrder=["Outlined"];Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "New",\n    avatar: "12",\n    size: "medium"\n  }\n}',...Outlined.parameters?.docs?.source}}}},"./src/utils/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>aliveCorTheme});var _mui_material__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/material/styles/responsiveFontSizes.js"),_mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js");const aliveCorTheme=(0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.A)((0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.A)({palette:{primary:{main:"#6387C5"},secondary:{main:"#F5F5F5"}}}))}}]);