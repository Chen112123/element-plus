import{p as _,r as n,q as c,o as d,t as m,c as i,a as s,y as u,M as f}from"./framework.DcRevfCx.js";const v=_({__name:"alpha",setup(p){const e=n("rgba(19, 206, 102, 0.8)");return(t,a)=>{const l=c("el-color-picker");return d(),m(l,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o),"show-alpha":""},null,8,["modelValue"])}}}),y=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),b=_({__name:"basic",setup(p){const e=n("#409EFF"),t=n();return(a,l)=>{const o=c("el-color-picker");return d(),i(f,null,[s("div",{class:"demo-color-block"},[s("span",{class:"demonstration"},"With default value"),u(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=r=>e.value=r)},null,8,["modelValue"])]),s("div",{class:"demo-color-block"},[s("span",{class:"demonstration"},"With no default value"),u(o,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=r=>t.value=r)},null,8,["modelValue"])])],64)}}}),j=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),V=_({__name:"predefined-color",setup(p){const e=n("rgba(255, 69, 0, 0.68)"),t=n(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]);return(a,l)=>{const o=c("el-color-picker");return d(),m(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=r=>e.value=r),"show-alpha":"",predefine:t.value},null,8,["modelValue","predefine"])}}}),z=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"})),g=_({__name:"sizes",setup(p){const e=n("409EFF");return(t,a)=>{const l=c("el-color-picker");return d(),i("div",{class:"demo-color-sizes"},[u(l,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value=o),size:"large"},null,8,["modelValue"]),u(l,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=o=>e.value=o)},null,8,["modelValue"]),u(l,{modelValue:e.value,"onUpdate:modelValue":a[2]||(a[2]=o=>e.value=o),size:"small"},null,8,["modelValue"])])}}}),O=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"}));export{y as _,j as a,z as b,O as c};