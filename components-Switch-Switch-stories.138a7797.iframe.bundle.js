(self.webpackChunk_vtiwari763_alivecor_ui_demo=self.webpackChunk_vtiwari763_alivecor_ui_demo||[]).push([[857],{"./src/components/Switch/Switch.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Switch_stories});var dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/colorManipulator.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),rootShouldForwardProp=__webpack_require__("./node_modules/@mui/material/styles/rootShouldForwardProp.js");const utils_useControlled=function useControlled({controlled,default:defaultProp,name,state="value"}){const{current:isControlled}=react.useRef(void 0!==controlled),[valueState,setValue]=react.useState(defaultProp);return[isControlled?controlled:valueState,react.useCallback((newValue=>{isControlled||setValue(newValue)}),[])]};const FormControl_FormControlContext=react.createContext(void 0);var ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getSwitchBaseUtilityClass(slot){return(0,generateUtilityClass.Ay)("PrivateSwitchBase",slot)}(0,generateUtilityClasses.A)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],SwitchBaseRoot=(0,styled.Ay)(ButtonBase.A)((({ownerState})=>(0,esm_extends.A)({padding:9,borderRadius:"50%"},"start"===ownerState.edge&&{marginLeft:"small"===ownerState.size?-3:-12},"end"===ownerState.edge&&{marginRight:"small"===ownerState.size?-3:-12}))),SwitchBaseInput=(0,styled.Ay)("input",{shouldForwardProp:rootShouldForwardProp.A})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),internal_SwitchBase=react.forwardRef((function SwitchBase(props,ref){const{autoFocus,checked:checkedProp,checkedIcon,className,defaultChecked,disabled:disabledProp,disableFocusRipple=!1,edge=!1,icon,id,inputProps,inputRef,name,onBlur,onChange,onFocus,readOnly,required=!1,tabIndex,type,value}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),[checked,setCheckedState]=utils_useControlled({controlled:checkedProp,default:Boolean(defaultChecked),name:"SwitchBase",state:"checked"}),muiFormControl=function useFormControl(){return react.useContext(FormControl_FormControlContext)}();let disabled=disabledProp;muiFormControl&&void 0===disabled&&(disabled=muiFormControl.disabled);const hasLabelFor="checkbox"===type||"radio"===type,ownerState=(0,esm_extends.A)({},props,{checked,disabled,disableFocusRipple,edge}),classes=(ownerState=>{const{classes,checked,disabled,edge}=ownerState,slots={root:["root",checked&&"checked",disabled&&"disabled",edge&&`edge${(0,capitalize.A)(edge)}`],input:["input"]};return(0,composeClasses.A)(slots,getSwitchBaseUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SwitchBaseRoot,(0,esm_extends.A)({component:"span",className:(0,clsx.A)(classes.root,className),centerRipple:!0,focusRipple:!disableFocusRipple,disabled,tabIndex:null,role:void 0,onFocus:event=>{onFocus&&onFocus(event),muiFormControl&&muiFormControl.onFocus&&muiFormControl.onFocus(event)},onBlur:event=>{onBlur&&onBlur(event),muiFormControl&&muiFormControl.onBlur&&muiFormControl.onBlur(event)},ownerState,ref},other,{children:[(0,jsx_runtime.jsx)(SwitchBaseInput,(0,esm_extends.A)({autoFocus,checked:checkedProp,defaultChecked,className:classes.input,disabled,id:hasLabelFor?id:void 0,name,onChange:event=>{if(event.nativeEvent.defaultPrevented)return;const newChecked=event.target.checked;setCheckedState(newChecked),onChange&&onChange(event,newChecked)},readOnly,ref:inputRef,required,ownerState,tabIndex,type},"checkbox"===type&&void 0===value?{}:{value},inputProps)),checked?checkedIcon:icon]}))}));var DefaultPropsProvider=__webpack_require__("./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js");function getSwitchUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiSwitch",slot)}const Switch_switchClasses=(0,generateUtilityClasses.A)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),Switch_excluded=["className","color","edge","size","sx"],SwitchRoot=(0,styled.Ay)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.edge&&styles[`edge${(0,capitalize.A)(ownerState.edge)}`],styles[`size${(0,capitalize.A)(ownerState.size)}`]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${Switch_switchClasses.thumb}`]:{width:16,height:16},[`& .${Switch_switchClasses.switchBase}`]:{padding:4,[`&.${Switch_switchClasses.checked}`]:{transform:"translateX(16px)"}}}}]}),SwitchSwitchBase=(0,styled.Ay)(internal_SwitchBase,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.switchBase,{[`& .${Switch_switchClasses.input}`]:styles.input},"default"!==ownerState.color&&styles[`color${(0,capitalize.A)(ownerState.color)}`]]}})((({theme})=>({position:"absolute",top:0,left:0,zIndex:1,color:theme.vars?theme.vars.palette.Switch.defaultColor:`${"light"===theme.palette.mode?theme.palette.common.white:theme.palette.grey[300]}`,transition:theme.transitions.create(["left","transform"],{duration:theme.transitions.duration.shortest}),[`&.${Switch_switchClasses.checked}`]:{transform:"translateX(20px)"},[`&.${Switch_switchClasses.disabled}`]:{color:theme.vars?theme.vars.palette.Switch.defaultDisabledColor:`${"light"===theme.palette.mode?theme.palette.grey[100]:theme.palette.grey[600]}`},[`&.${Switch_switchClasses.checked} + .${Switch_switchClasses.track}`]:{opacity:.5},[`&.${Switch_switchClasses.disabled} + .${Switch_switchClasses.track}`]:{opacity:theme.vars?theme.vars.opacity.switchTrackDisabled:""+("light"===theme.palette.mode?.12:.2)},[`& .${Switch_switchClasses.input}`]:{left:"-100%",width:"300%"}})),(({theme})=>({"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.X4)(theme.palette.action.active,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(theme.palette).filter((([,value])=>value.main&&value.light)).map((([color])=>({props:{color},style:{[`&.${Switch_switchClasses.checked}`]:{color:(theme.vars||theme).palette[color].main,"&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.X4)(theme.palette[color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Switch_switchClasses.disabled}`]:{color:theme.vars?theme.vars.palette.Switch[`${color}DisabledColor`]:`${"light"===theme.palette.mode?(0,colorManipulator.a)(theme.palette[color].main,.62):(0,colorManipulator.e$)(theme.palette[color].main,.55)}`}},[`&.${Switch_switchClasses.checked} + .${Switch_switchClasses.track}`]:{backgroundColor:(theme.vars||theme).palette[color].main}}})))]}))),SwitchTrack=(0,styled.Ay)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(props,styles)=>styles.track})((({theme})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:theme.transitions.create(["opacity","background-color"],{duration:theme.transitions.duration.shortest}),backgroundColor:theme.vars?theme.vars.palette.common.onBackground:`${"light"===theme.palette.mode?theme.palette.common.black:theme.palette.common.white}`,opacity:theme.vars?theme.vars.opacity.switchTrack:""+("light"===theme.palette.mode?.38:.3)}))),SwitchThumb=(0,styled.Ay)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(props,styles)=>styles.thumb})((({theme})=>({boxShadow:(theme.vars||theme).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),Switch_Switch=react.forwardRef((function Switch(inProps,ref){const props=(0,DefaultPropsProvider.b)({props:inProps,name:"MuiSwitch"}),{className,color="primary",edge=!1,size="medium",sx}=props,other=(0,objectWithoutPropertiesLoose.A)(props,Switch_excluded),ownerState=(0,esm_extends.A)({},props,{color,edge,size}),classes=(ownerState=>{const{classes,edge,size,color,checked,disabled}=ownerState,slots={root:["root",edge&&`edge${(0,capitalize.A)(edge)}`,`size${(0,capitalize.A)(size)}`],switchBase:["switchBase",`color${(0,capitalize.A)(color)}`,checked&&"checked",disabled&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},composedClasses=(0,composeClasses.A)(slots,getSwitchUtilityClass,classes);return(0,esm_extends.A)({},classes,composedClasses)})(ownerState),icon=(0,jsx_runtime.jsx)(SwitchThumb,{className:classes.thumb,ownerState});return(0,jsx_runtime.jsxs)(SwitchRoot,{className:(0,clsx.A)(classes.root,className),sx,ownerState,children:[(0,jsx_runtime.jsx)(SwitchSwitchBase,(0,esm_extends.A)({type:"checkbox",icon,checkedIcon:icon,ref,ownerState},other,{classes:(0,esm_extends.A)({},classes,{root:classes.switchBase})})),(0,jsx_runtime.jsx)(SwitchTrack,{className:classes.track,ownerState})]})}));function Switch_Switch_Switch(){return react.createElement(Switch_Switch,{defaultChecked:!0})}Switch_Switch_Switch.__docgenInfo={description:"",methods:[],displayName:"Switch"};const Switch_stories={title:"Example/Switch",component:Switch_Switch_Switch,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onClick:(0,dist.fn)()}};var Primary={args:{label:"Switch"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Switch"\n  }\n}',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext}}]);