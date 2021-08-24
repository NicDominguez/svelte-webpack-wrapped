"use strict";(self.webpackChunksvelte_app=self.webpackChunksvelte_app||[]).push([[18469],{71060:(s,t,r)=>{r.d(t,{M:()=>i,a:()=>a});var e=r(96867);const a=({notifications:s})=>(0,e.h)("div",{class:"rux-advanced-status__badge "+(s?"":"rux-advanced-status__hidden")},s&&(s=>{const t=Math.floor(s);if(t<=0)return null;const r=Math.floor(t/1e3%1e3),e=t/1e6%1e6,a=t/1e9%1e9,i=t/1e12%1e12;let o=t.toString();return i>=1?o="∞":a>=1?o=`${a.toFixed(1).toString()}B`:e>=1?o=`${e.toFixed(1).toString()}M`:r>=1&&(o=`${r}K`),o})(s)),i=({label:s,sublabel:t})=>(0,e.h)("div",{class:"rux-advanced-status__label"},s,(0,e.h)("span",{class:"rux-advanced-status__sublabel "+(t?"":"rux-advanced-status__hidden")},t))},18469:(s,t,r)=>{r.r(t),r.d(t,{rux_monitoring_progress_icon:()=>i});var e=r(96867),a=r(71060);const i=class{constructor(s){(0,e.r)(this,s),this._circumference=112*Math.PI,this._defaultRangeList=[{threshold:17,status:"off"},{threshold:33,status:"standby"},{threshold:49,status:"normal"},{threshold:65,status:"caution"},{threshold:81,status:"serious"},{threshold:100,status:"critical"}],this.min=0,this.max=100,this.progress=0,this._status="off",this._graphProgress=0}checkProgress(s,t){Number.isInteger(this.progress)?s!==t&&this.updateProgress():this.progress=0}componentWillLoad(){(!this.range||this.range.length<1)&&(this.range=this._defaultRangeList),Number.isInteger(this.progress)?(this.range=this.range.sort(((s,t)=>s.threshold>=t.threshold?1:-1)),this.updateProgress()):this.progress=0}get status(){return this._status}updateProgress(){this.progress>this.max&&(this.progress=this.max),this.progress<this.min&&(this.progress=this.min);const s=this.range.find((s=>this.progress<=s.threshold));this._status=s?s.status:this.range[0].status,this._graphProgress=this._circumference-(this.progress-this.min)/(this.max-this.min)*this._circumference}render(){return(0,e.h)("div",{id:"rux-advanced-status__icon",class:"rux-advanced-status",title:`${this.notifications} ${this.label} ${this.sublabel}`},(0,e.h)("div",{class:"rux-advanced-status__icon-group"},(0,e.h)("rux-status",{status:this._status}),(0,e.h)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",class:`rux-status--${this._status}`},(0,e.h)("g",{id:"progress"},(0,e.h)("circle",{cx:"60",cy:"60",r:"56",fill:"transparent",stroke:"rgba(40, 63, 88, 1)","stroke-width":"10",transform:"rotate(-90 61 60)"}),(0,e.h)("circle",{cx:"60",cy:"60",r:"56",fill:"transparent","stroke-dasharray":"351.8583772 351.8583772","stroke-dashoffset":this._graphProgress,"stroke-linecap":"round","stroke-width":"10",class:"progress-ring__circle",transform:"rotate(-90 61 60)"}))),(0,e.h)("div",{class:"rux-advanced-status__progress"},Math.ceil((this.progress-this.min)/(this.max-this.min)*100),"%"),(0,e.h)(a.a,{notifications:this.notifications})),(0,e.h)(a.M,{label:this.label,sublabel:this.sublabel}))}static get watchers(){return{progress:["checkProgress"]}}};i.style=':host{display:inline-block;padding:0}*[hidden]{display:none !important}*,*:before,*:after{box-sizing:border-box}.rux-advanced-status{display:flex;flex-direction:column;justify-content:flex-start;position:relative;margin:0;line-height:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rux-advanced-status__icon-group{display:flex;position:relative;margin:0 auto;width:4.5rem}.icon-template-wrapper{display:flex;position:relative;margin:0 auto;width:4.5rem}rux-status{position:absolute;top:-0.25rem;left:-0.25rem;margin:0}.rux-advanced-status__badge{display:block;z-index:2;order:3;position:absolute;bottom:-0.75rem;right:-0.4rem;border:1px solid rgba(255, 255, 255, 0.6);border-radius:3px;padding:0.65rem 0.25rem;color:#fff;font-size:0.775rem;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background-color:#000}.rux-advanced-status__label{color:var(--fontColor);font-size:0.875rem;text-align:center;text-overflow:ellipsis;white-space:nowrap;line-height:1.2;overflow:hidden;margin-top:1rem;width:100%;max-width:6.25rem}.rux-advanced-status__sublabel{font-size:0.65em;color:var(--fontColor);opacity:0.6;display:block}.rux-advanced-status__hidden{display:none}svg{margin:0 auto;width:3rem;height:3rem}svg.rux-status--off{stroke:var(--colorOff, #9ea7ad);fill:var(--colorOff, #9ea7ad)}svg.rux-status--standby{stroke:var(--colorStandby, #2dccff);fill:var(--colorStandby, #2dccff)}svg.rux-status--normal{stroke:var(--colorNormal, #56f000);fill:var(--colorNormal, #56f000)}svg.rux-status--caution{stroke:var(--colorCaution, #fce83a);fill:var(--colorCaution, #fce83a)}svg.rux-status--serious{stroke:var(--colorSerious, #ffb300);fill:var(--colorSerious, #ffb300)}svg.rux-status--critical{stroke:var(--colorCritical, #ff3838);fill:var(--colorCritical, #ff3838)}[data-progress] svg{transition:stroke-dashoffset 0.367s, stroke 0.367s;transform-origin:50% 50%}.rux-advanced-status__progress{font-family:var(--fontFamilyMono, "monospace");margin-top:-0.125rem;margin-left:-0.125rem;font-size:0.8rem;position:absolute;display:flex;justify-content:center;align-items:center;width:100%;height:100%;letter-spacing:-0.0625rem;text-align:center}'}}]);