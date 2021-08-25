"use strict";(self.webpackChunksvelte_app=self.webpackChunksvelte_app||[]).push([[46405],{46405:(e,t,r)=>{r.r(t),r.d(t,{rux_tree_node:()=>a});var o=r(9908);let n=0;const a=class{constructor(e){(0,o.r)(this,e),this.ruxTreeNodeSelected=(0,o.c)(this,"rux-tree-node-selected",7),this.componentId="node-"+ ++n,this.children=[],this.expanded=!1,this.selected=!1}handleExpandedChange(e){this.setExpanded(e)}handleSelectedChange(e){this.setSelected(e)}handleKeyDown(e){if(e.target!==e.currentTarget)return!0;switch(e.key){case"ArrowUp":e.preventDefault(),this._focusNext(-1);break;case"ArrowRight":e.preventDefault(),this._expandNextNode();break;case"ArrowDown":e.preventDefault(),this._focusNext(1);break;case"ArrowLeft":e.preventDefault(),this._collapseParent();break;case"Enter":e.preventDefault(),this.setSelected(!0)}}connectedCallback(){this.handleSlotChange=this.handleSlotChange.bind(this)}componentWillLoad(){this.handleSlotChange()}get _hasChildren(){return this.children.length>0}async setExpanded(e){this.expanded=e}async setSelected(e){this.selected=e,e&&this.ruxTreeNodeSelected.emit(this.componentId)}handleSlotChange(){const e=Array.from(this.el.querySelectorAll('[slot="node"]'));this.children=e,this._setAriaLevel()}_setAriaLevel(){const e=this.el.getAttribute("aria-level");e&&this.children.map((t=>{t.setAttribute("aria-level",""+(+e+1))}))}_handleArrowClick(e){e.stopPropagation(),this.setExpanded(!this.expanded)}_handleTreeNodeClick(e){e.stopPropagation(),this.setSelected(!this.selected)}_expandNextNode(){!this.expanded&&this._hasChildren&&this.setExpanded(!0)}_focusItem(e){var t;const r=null===(t=null==e?void 0:e.shadowRoot)||void 0===t?void 0:t.querySelector(".parent");r&&r.focus()}_collapseParent(){if(this.expanded)this.setExpanded(!1);else if(this.el.parentElement){const e=this.el.parentElement.closest("[role='treeitem']");e&&this._focusItem(e)}}_focusNext(e){const t=this._getVisibleNodes(),r=t.indexOf(this.el);if(-1!==r){let o=t[r+e];if(void 0!==o)for(;o.hasAttribute("disabled")&&(o=t[r+e+(e>=0?1:-1)],o););o&&this._focusItem(o)}}_getVisibleNodes(){const e=this.el.closest("[role='tree']");return Array.from(e.querySelectorAll("rux-tree-node")).filter((e=>null!==e.offsetParent))}render(){const e=this._hasChildren&&{role:"group"};return(0,o.h)(o.H,{role:"treeitem","aria-expanded":this.expanded?"true":"false","aria-selected":this.selected?"true":"false",onClick:e=>this._handleTreeNodeClick(e)},(0,o.h)("div",{id:this.componentId,class:{"tree-node":!0,"tree-node--expanded":this.expanded,"tree-node--has-children":this._hasChildren,"tree-node--selected":this.selected}},(0,o.h)("div",{class:"parent",tabindex:"0"},this._hasChildren&&(0,o.h)("i",{onClick:e=>this._handleArrowClick(e),class:"arrow"}),(0,o.h)("slot",{onSlotchange:this.handleSlotChange})),(0,o.h)("div",Object.assign({},e,{class:"children"}),(0,o.h)("slot",{name:"node",onSlotchange:this.handleSlotChange}))))}get el(){return(0,o.g)(this)}static get watchers(){return{expanded:["handleExpandedChange"],selected:["handleSelectedChange"]}}};a.style=':host{--treeAccentColor:var(--primary);--treeHoverBackgroundColor:var(--primaryLight);--treeHoverTextColor:var(--primaryElementText);--treeSelectedBorderColor:var(--primaryDark);--treeSelectedAccentColor:var(--primary);--treeExpandedBorderColor:var(--backgroundColor);position:relative;box-sizing:border-box;width:100%;padding:0px;margin:0px;font-size:1rem;color:var(--treeTextColor);user-select:none;width:100%;display:block}:host([aria-expanded=true][aria-level="1"]:not([aria-selected=true])) .parent:after{border-bottom:solid 1px var(--treeExpandedBorderColor)}:host([aria-selected=true]) .parent:after{content:"";height:30px;width:100%;left:0px;z-index:0;position:absolute;transition:background-color 0.0967s ease-in 0s;border-top:1px solid var(--treeSelectedBorderColor);border-bottom:1px solid var(--treeSelectedBorderColor);box-shadow:inset 0.25rem 0 0 var(--treeSelectedAccentColor) !important}:host([aria-level="1"]) .parent{font-weight:bold;padding-left:0.5rem}:host([aria-level="1"]) .parent:after{content:"";height:31px;width:100%;left:0px;z-index:0;position:absolute;transition:background-color 0.0967s ease-in 0s}:host([aria-level="1"]) .tree-node:not(.tree-node--has-children) .parent{padding-left:2rem}:host([aria-level="2"]) .tree-node:not(.tree-node--has-children) .parent{padding-left:3.5rem}:host([aria-level="3"]) .tree-node:not(.tree-node--has-children) .parent{padding-left:5rem}:host([aria-level="3"]) .parent{padding-left:3.5rem}:host([aria-level="4"]) .tree-node:not(.tree-node--has-children) .parent{padding-left:6.5rem}:host([aria-level="4"]) .parent{padding-left:5rem}.parent{height:2rem;padding:0 0.5rem 0 2rem;display:flex;align-items:center}.parent:hover{color:var(--treeHoverTextColor);background:var(--treeHoverBackgroundColor)}.children{display:none}.tree-node--expanded>.children{display:block !important}.tree-node--expanded .arrow{transform:rotate(90deg)}.arrow{position:relative;cursor:pointer;width:0.35rem;margin-right:1rem;margin-left:0.15rem;background-color:transparent;transition:transform 0.167s ease-in-out 0s;z-index:11}.arrow::before{content:"";display:block;height:1.5rem;width:1.5rem;top:-0.15rem;left:-0.65rem;position:absolute}.arrow::after{content:"";width:0px;height:0px;border-style:solid;border-width:0.35rem 0px 0.35rem 0.35rem;border-color:transparent transparent transparent var(--treeAccentColor);display:inline-block}::slotted(rux-status){margin:0 0.625rem}::slotted(rux-tree-node){position:relative}::slotted(rux-tree-node)::before{content:"";order:1;position:absolute;top:0;cursor:pointer;width:20px;height:20px;margin-right:1rem;margin-left:0.15rem;left:-40px;background-color:transparent;transition:transform 0.167s ease-in-out 0s;z-index:11}'}}]);