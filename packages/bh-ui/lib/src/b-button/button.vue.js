"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("vue");require("./style/index.css");const s=require("../hooks/use-namespace/index.js"),l=n.defineComponent({name:"b-button",__name:"button",props:{type:{},size:{},plain:{},round:{},disabled:{},circle:{},loading:{type:Boolean},icon:{}},setup(o){const t=o,e=s.useNamespace("button"),u=n.computed(()=>[e.b(),e.m(t.type),e.m(t.size),e.m(t.plain),e.m(t.round),e.m(t.circle),e.m(t.disabled)]);return(r,a)=>(n.openBlock(),n.createElementBlock("button",{class:n.normalizeClass(["b-button",u.value])},[n.renderSlot(r.$slots,"default")],2))}});exports.default=l;
