"use strict";(self.webpackChunksvelte_app=self.webpackChunksvelte_app||[]).push([[10825],{10825:(e,t,i)=>{i.r(t),i.d(t,{rux_global_status_bar:()=>p});var s=i(9908);const a=({domain:e,name:t,version:i},a)=>(0,s.h)("div",{class:"app-meta"},(0,s.h)("div",{class:"app-info-wrapper"},e&&(0,s.h)("h1",{class:"app-domain"},e),t&&(0,s.h)("h1",{class:"app-name"},t),i&&(0,s.h)("span",{class:"app-version"},i)),a),p=class{constructor(e){(0,s.r)(this,e),this.includeIcon=!1,this.includeAppState=!1,this.includeUsername=!1,this.menuIcon="apps"}render(){var e,t;return(0,s.h)(s.H,null,(0,s.h)("header",null,(0,s.h)("slot",{name:"left-side"},this.includeIcon&&(0,s.h)("rux-icon",{icon:`${this.menuIcon}`,size:"small",class:this.includeAppState||this.includeUsername?"shifted-up":""})),(0,s.h)("slot",{name:"app-meta"},(this.appDomain||this.appName||this.appVersion)&&(0,s.h)(a,{domain:null===(e=this.appDomain)||void 0===e?void 0:e.toUpperCase(),name:null===(t=this.appName)||void 0===t?void 0:t.toUpperCase(),version:this.appVersion},(0,s.h)("div",{class:"app-state-wrapper"},this.includeAppState&&(0,s.h)("div",{class:"app-state"},"App state"),this.includeUsername&&(0,s.h)("div",{class:"username"},"Username")))),(0,s.h)("div",{class:"slotted-content"},(0,s.h)("slot",null)),(0,s.h)("slot",{name:"right-side"})))}};p.style=":host{display:block;position:sticky;top:0;left:0;height:100px;width:100%;padding:0 1.875rem;box-sizing:border-box;background-color:var(--globalAppHeader);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;contain:content;}header{display:flex;height:100%;width:100%;align-items:center;justify-content:space-between;box-sizing:border-box}slot[name=left-side]>*,::slotted(*[slot=left-side]){margin-right:10px}slot[name=left-side]>rux-icon,::slotted(rux-icon[slot=left-side]){height:34px}slot[name=left-side]>.shifted-up,::slotted(.shifted-up[slot=left-side]){height:54px}.app-meta,::slotted(*[slot=app-meta]){display:inline-flex;flex-wrap:wrap;padding:0;margin:0px auto 0px 0px;color:var(--inputBackground);white-space:nowrap}.app-info-wrapper{flex-basis:100%;display:flex;align-items:baseline;margin-bottom:6px;min-width:170px}.app-meta h1{letter-spacing:0.25px;margin-bottom:0px;margin-top:0px;height:32px;font-size:2.125rem}.app-domain{font-weight:700;margin-right:13px}.app-name{font-weight:400;margin-right:0.3em}.app-version{display:inline-block;font-size:1.1875rem;font-weight:300}.app-state-wrapper{display:flex}.app-state{box-sizing:border-box;color:var(--colorWhite);background-color:var(--colorTertiaryDarken4);border-radius:2px;font-size:14px;padding:2px 6px;text-align:center;height:22px;margin-right:6px;white-space:nowrap}.username{box-sizing:border-box;flex-basis:50%;font-size:14px;padding:2px 0px;height:22px}.slotted-content{display:inline-flex;justify-content:center;flex-basis:100%}"}}]);