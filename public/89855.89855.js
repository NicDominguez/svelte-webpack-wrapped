"use strict";(self.webpackChunksvelte_app=self.webpackChunksvelte_app||[]).push([[89855],{89855:(e,t,i)=>{i.r(t),i.d(t,{rux_pop_up_menu:()=>o});var n=i(9908);const o=class{constructor(e){(0,n.r)(this,e),this.ruxMenuWillOpen=(0,n.c)(this,"rux-menu-will-open",7),this.ruxMenuWillClose=(0,n.c)(this,"rux-menu-will-close",7),this.ruxMenuDidOpen=(0,n.c)(this,"rux-menu-did-open",7),this.ruxMenuDidClose=(0,n.c)(this,"rux-menu-did-close",7),this.open=!1}tieElements(){this._bindElements()}openMenu(){this._toggleOpenClose()}componentDidRender(){this.open&&this._setMenuPosition()}connectedCallback(){this._handleClick=this._handleClick.bind(this),this._handleOutsideClick=this._handleOutsideClick.bind(this),this._bindElements(),this._toggleOpenClose()}disconnectedCallback(){this.triggerEl&&this.triggerEl.removeEventListener("mousedown",this._handleClick)}async isOpen(){return this.open}async show(){return!this.open&&(this.open=!0,!0)}async close(){return!!this.open&&(this.open=!1,!0)}async toggle(){return this.open=!this.open,this.open}handleListen(){this.open=!1}_bindElements(){if(this.triggerEl)this.triggerEl.addEventListener("mousedown",this._handleClick);else{const e=document.querySelector(`[aria-controls="${this.el.id}"]`);e&&(this.triggerEl=e,this.triggerEl.addEventListener("mousedown",this._handleClick))}!this.anchorEl&&this.triggerEl?(this.anchorEl=this.triggerEl,this.anchorBounds=this.anchorEl.getBoundingClientRect()):this.anchorEl&&(this.anchorBounds=this.anchorEl.getBoundingClientRect()),this.menuBounds=this.el.getBoundingClientRect()}_setMenuPosition(){if(this.anchorEl&&this.anchorBounds&&this.menuBounds){let{anchorBounds:e,menuBounds:t}=this;e=this.anchorEl.getBoundingClientRect(),t=this.el.getBoundingClientRect();const i=parseInt(getComputedStyle(this.el,":after").height);let n,o,s;const r=8;t.width+e.left-r>window.innerWidth?(o=e.right-t.width,s=t.width-25):e.left-r>0?(o=e.left-r,s=10):(o=r,s=10),n=e.bottom+r/2+9.5,t.height+e.bottom+r>window.innerHeight?(n=e.top-t.height-i,this.el.classList.add("from-top")):this.el.classList.remove("from-top"),this.el.style.left=`${o}px`,this.el.style.top=`${n}px`,this.el.style.setProperty("--caretLeft",`${s}px`)}}_handleClick(e){e.preventDefault(),this.open=!0}_handleOutsideClick(e){e.composedPath().includes(this.el)||(this.open=!1)}_toggleOpenClose(){var e,t;if(this.open){if(!this.anchorEl)return this.open=!1,void console.error("Unable to open pop up menu without an anchor element. See documentation");this.ruxMenuWillOpen.emit();const t=setTimeout((()=>{window.addEventListener("resize",(()=>this._setMenuPosition())),window.addEventListener("mousedown",this._handleOutsideClick),clearTimeout(t)}),10);null===(e=this.triggerEl)||void 0===e||e.removeEventListener("mousedown",this._handleClick),this.ruxMenuDidOpen.emit()}else this.ruxMenuWillClose.emit(),window.removeEventListener("mousedown",this._handleOutsideClick),window.removeEventListener("resize",this._setMenuPosition),null===(t=this.triggerEl)||void 0===t||t.addEventListener("mousedown",this._handleClick),this.ruxMenuDidClose.emit()}render(){return(0,n.h)(n.H,{"aria-hidden":this.open?"false":"true"},(0,n.h)("ul",{role:"menu","aria-expanded":`${this.open}`},(0,n.h)("slot",null)),(0,n.h)("slot",{name:"menu-end"}))}get el(){return(0,n.g)(this)}static get watchers(){return{triggerEl:["tieElements"],anchorEl:["tieElements"],open:["openMenu"]}}};o.style=':host{display:block;--caretLeft:2px;--caretSize:1.875rem;--transitionSpeed:0.1667s;opacity:0;font-size:1rem;margin:0;padding:0;position:absolute;pointer-events:none;color:var(--popupMenuTextColor);background-color:var(--popupMenuBorderColor);border:1px solid var(--popupMenuBorderColor);border-top-width:4px;z-index:10000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:3px;top:-9999rem;left:-9999rem;transition:opacity 0.1667s ease-out;filter:drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))}:host([open]){pointer-events:auto;opacity:1;transition:opacity 0.1667s ease-in}:host::after{content:"";display:block;position:absolute;z-index:1;border:8px solid transparent;border-bottom:11px solid var(--popupCaretBackgroundColor);left:var(--caretLeft, 2px);top:-1.4375rem}ul{position:relative;list-style:none;padding:0;margin:0;background-color:var(--popupMenuBackgroundColor);z-index:2;border-radius:2px}li:last-of-type{border:none;border-radius:0 0 2px 2px}li:first-of-type{border:none;border-radius:2px 2px 0 0}:host(.from-top){border-top-width:1px;border-bottom-width:4px}:host(.from-top)::after{top:unset;bottom:-23px;transform:rotate(180deg)}'}}]);