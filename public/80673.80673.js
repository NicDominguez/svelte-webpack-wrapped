"use strict";(self.webpackChunksvelte_app=self.webpackChunksvelte_app||[]).push([[80673],{80673:(r,o,e)=>{e.r(o),e.d(o,{rux_radio:()=>a});var i=e(96867);let t=0;const a=class{constructor(r){(0,i.r)(this,r),this.ruxChange=(0,i.c)(this,"rux-change",7),this.radioId="rux-radio-"+ ++t,this.radioGroup=null,this.name="",this.value="",this.checked=!1,this.disabled=!1}connectedCallback(){this.onChange=this.onChange.bind(this),this.radioGroup=this.el.closest("rux-radio-group"),this.syncFromGroup=this.syncFromGroup.bind(this),this.radioGroup&&(this.syncFromGroup(),this.radioGroup.addEventListener("rux-change",this.syncFromGroup))}disconnectedCallback(){this.radioGroup&&this.radioGroup.removeEventListener("rux-change",this.syncFromGroup)}syncFromGroup(){this.radioGroup&&this.radioGroup.value&&(this.checked=this.radioGroup.value===this.value)}onChange(r){const o=r.target;this.checked=o.checked,this.ruxChange.emit(this.checked)}render(){const{radioId:r,checked:o,disabled:e,name:t,value:a}=this;return(0,i.h)("div",{class:"rux-form-field"},(0,i.h)("div",{class:"rux-radio"},(0,i.h)("input",{type:"radio",name:t,id:r,disabled:e,checked:o,value:a,onChange:this.onChange}),(0,i.h)("label",{htmlFor:r},(0,i.h)("slot",null))))}get el(){return(0,i.g)(this)}};a.style=':host{box-sizing:border-box;--controlLabelColor:var(--defaultText);--controlOutlineBackgroundColor:var(--backgroundColor);--controlBorderColor:var(--colorSecondaryDarken2);--controlHoverBorderColor:var(--primaryLight);--controlTextColor:var(--colorSecondary500);--controlSelectedOutlineBorderColor:var(--primary)}:host *,:host *:before,:host *:after{box-sizing:inherit}.rux-form-field{display:flex;flex-direction:column;font-family:var(--fontFamily);font-size:var(--fontSize);color:var(--fontColor)}.rux-radio{display:flex;position:relative;line-height:1.2}.rux-radio input[type=radio]{-webkit-appearance:none;display:none}.rux-radio input[type=radio]+label{position:relative;display:flex;align-items:center;justify-content:flex-start;color:var(--controlLabelColor);letter-spacing:0.5px;cursor:pointer}.rux-radio input[type=radio]+label:before{box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:0;content:"";align-self:start;height:var(--controlOptionSize);width:var(--controlOptionSize);margin:0 0.625rem 0 0;border:1px solid var(--controlSelectedBorderColor);border-radius:100%;background-color:var(--controlOutlineBackgroundColor)}.rux-radio input[type=radio]+label:after{position:absolute;top:5px;display:flex;content:""}.rux-radio input[type=radio]:checked+label::before{background-color:var(--controlSelectedOutlineBackgroundColor);border-color:var(--controlSelectedBorderColor)}.rux-radio input[type=radio]:checked+label::after{position:absolute;top:5px;display:flex;content:"";left:5px;height:8px;width:8px;border-radius:100%;background-color:var(--primary)}.rux-radio input[type=radio]:disabled+label{cursor:var(--disabledCursor);opacity:var(--disabledOpacity)}.rux-radio input[type=radio]:not(:disabled):hover+label::before,.rux-radio input[type=radio]:not(:disabled):checked:hover+label::before{border-color:var(--controlHoverBorderColor)}.rux-radio input[type=radio]:not(:disabled):checked:hover+label::after{background-color:var(--controlBackgroundColor)}'}}]);