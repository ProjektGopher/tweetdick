import{e as r,s,z as a,o as c,b as d}from"./vendor.099de951.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const i=r({emits:["update:checked"],props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},computed:{proxyChecked:{get(){return this.checked},set(e){this.$emit("update:checked",e)}}}}),p=["value"];function u(e,o,l,f,h,k){return s((c(),d("input",{type:"checkbox",value:e.value,"onUpdate:modelValue":o[0]||(o[0]=t=>e.proxyChecked=t),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,p)),[[a,e.proxyChecked]])}var y=n(i,[["render",u]]);export{y as J};
