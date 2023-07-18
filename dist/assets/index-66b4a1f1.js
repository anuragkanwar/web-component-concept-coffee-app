(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();const Wi={menus:null,cart:{}},Ui=new Proxy(Wi,{set(t,e,r){return t[e]=r,e==="menus"?window.dispatchEvent(new Event("ck-menu-change")):e==="cart"&&(window.dispatchEvent(new Event("ck-cart-change")),Object.keys(t[e]).length===0&&window.dispatchEvent(new Event("ck-cart-empty"))),!0}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St=window,mr=St.ShadowRoot&&(St.ShadyCSS===void 0||St.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,hr=Symbol(),Tr=new WeakMap;let si=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==hr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(mr&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=Tr.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Tr.set(r,e))}return e}toString(){return this.cssText}};const Gi=t=>new si(typeof t=="string"?t:t+"",void 0,hr),$=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,a,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+t[s+1],t[0]);return new si(r,t,hr)},Fi=(t,e)=>{mr?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{const i=document.createElement("style"),a=St.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=r.cssText,t.appendChild(i)})},$r=mr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return Gi(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kt;const Bt=window,Er=Bt.trustedTypes,Xi=Er?Er.emptyScript:"",Ir=Bt.reactiveElementPolyfillSupport,nr={toAttribute(t,e){switch(e){case Boolean:t=t?Xi:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},oi=(t,e)=>e!==t&&(e==e||t==t),Yt={attribute:!0,type:String,converter:nr,reflect:!1,hasChanged:oi},cr="finalized";let Re=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((r,i)=>{const a=this._$Ep(i,r);a!==void 0&&(this._$Ev.set(a,i),e.push(a))}),e}static createProperty(e,r=Yt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,a=this.getPropertyDescriptor(e,i,r);a!==void 0&&Object.defineProperty(this.prototype,e,a)}}static getPropertyDescriptor(e,r,i){return{get(){return this[r]},set(a){const s=this[e];this[r]=a,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Yt}static finalize(){if(this.hasOwnProperty(cr))return!1;this[cr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,i=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const a of i)this.createProperty(a,r[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const a of i)r.unshift($r(a))}else e!==void 0&&r.push($r(e));return r}static _$Ep(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,i;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;const r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Fi(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var i;return(i=r.hostConnected)===null||i===void 0?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var i;return(i=r.hostDisconnected)===null||i===void 0?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EO(e,r,i=Yt){var a;const s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){const o=(((a=i.converter)===null||a===void 0?void 0:a.toAttribute)!==void 0?i.converter:nr).toAttribute(r,i.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,r){var i;const a=this.constructor,s=a._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=a.getPropertyOptions(s),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:nr;this._$El=s,this[s]=d.fromAttribute(r,o.type),this._$El=null}}requestUpdate(e,r,i){let a=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||oi)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):a=!1),!this.isUpdatePending&&a&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((a,s)=>this[s]=a),this._$Ei=void 0);let r=!1;const i=this._$AL;try{r=this.shouldUpdate(i),r?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(a=>{var s;return(s=a.hostUpdate)===null||s===void 0?void 0:s.call(a)}),this.update(i)):this._$Ek()}catch(a){throw r=!1,this._$Ek(),a}r&&this._$AE(i)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)===null||r===void 0||r.forEach(i=>{var a;return(a=i.hostUpdated)===null||a===void 0?void 0:a.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((r,i)=>this._$EO(i,this[i],r)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Re[cr]=!0,Re.elementProperties=new Map,Re.elementStyles=[],Re.shadowRootOptions={mode:"open"},Ir==null||Ir({ReactiveElement:Re}),((Kt=Bt.reactiveElementVersions)!==null&&Kt!==void 0?Kt:Bt.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Jt;const _t=window,He=_t.trustedTypes,Sr=He?He.createPolicy("lit-html",{createHTML:t=>t}):void 0,Pt="$lit$",fe=`lit$${(Math.random()+"").slice(9)}$`,vr="?"+fe,qi=`<${vr}>`,Ee=document,ot=()=>Ee.createComment(""),nt=t=>t===null||typeof t!="object"&&typeof t!="function",ni=Array.isArray,ci=t=>ni(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Qt=`[ 	
\f\r]`,et=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jr=/-->/g,Br=/>/g,xe=RegExp(`>|${Qt}(?:([^\\s"'>=/]+)(${Qt}*=${Qt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_r=/'/g,Pr=/"/g,di=/^(?:script|style|textarea|title)$/i,Ki=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),L=Ki(1),Ie=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),Lr=new WeakMap,Te=Ee.createTreeWalker(Ee,129,null,!1),li=(t,e)=>{const r=t.length-1,i=[];let a,s=e===2?"<svg>":"",o=et;for(let n=0;n<r;n++){const p=t[n];let u,h,m=-1,f=0;for(;f<p.length&&(o.lastIndex=f,h=o.exec(p),h!==null);)f=o.lastIndex,o===et?h[1]==="!--"?o=jr:h[1]!==void 0?o=Br:h[2]!==void 0?(di.test(h[2])&&(a=RegExp("</"+h[2],"g")),o=xe):h[3]!==void 0&&(o=xe):o===xe?h[0]===">"?(o=a??et,m=-1):h[1]===void 0?m=-2:(m=o.lastIndex-h[2].length,u=h[1],o=h[3]===void 0?xe:h[3]==='"'?Pr:_r):o===Pr||o===_r?o=xe:o===jr||o===Br?o=et:(o=xe,a=void 0);const b=o===xe&&t[n+1].startsWith("/>")?" ":"";s+=o===et?p+qi:m>=0?(i.push(u),p.slice(0,m)+Pt+p.slice(m)+fe+b):p+fe+(m===-2?(i.push(void 0),n):b)}const d=s+(t[r]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Sr!==void 0?Sr.createHTML(d):d,i]};class ct{constructor({strings:e,_$litType$:r},i){let a;this.parts=[];let s=0,o=0;const d=e.length-1,n=this.parts,[p,u]=li(e,r);if(this.el=ct.createElement(p,i),Te.currentNode=this.el.content,r===2){const h=this.el.content,m=h.firstChild;m.remove(),h.append(...m.childNodes)}for(;(a=Te.nextNode())!==null&&n.length<d;){if(a.nodeType===1){if(a.hasAttributes()){const h=[];for(const m of a.getAttributeNames())if(m.endsWith(Pt)||m.startsWith(fe)){const f=u[o++];if(h.push(m),f!==void 0){const b=a.getAttribute(f.toLowerCase()+Pt).split(fe),y=/([.?@])?(.*)/.exec(f);n.push({type:1,index:s,name:y[2],strings:b,ctor:y[1]==="."?ui:y[1]==="?"?fi:y[1]==="@"?mi:ft})}else n.push({type:6,index:s})}for(const m of h)a.removeAttribute(m)}if(di.test(a.tagName)){const h=a.textContent.split(fe),m=h.length-1;if(m>0){a.textContent=He?He.emptyScript:"";for(let f=0;f<m;f++)a.append(h[f],ot()),Te.nextNode(),n.push({type:2,index:++s});a.append(h[m],ot())}}}else if(a.nodeType===8)if(a.data===vr)n.push({type:2,index:s});else{let h=-1;for(;(h=a.data.indexOf(fe,h+1))!==-1;)n.push({type:7,index:s}),h+=fe.length-1}s++}}static createElement(e,r){const i=Ee.createElement("template");return i.innerHTML=e,i}}function Se(t,e,r=t,i){var a,s,o,d;if(e===Ie)return e;let n=i!==void 0?(a=r._$Co)===null||a===void 0?void 0:a[i]:r._$Cl;const p=nt(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==p&&((s=n==null?void 0:n._$AO)===null||s===void 0||s.call(n,!1),p===void 0?n=void 0:(n=new p(t),n._$AT(t,r,i)),i!==void 0?((o=(d=r)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=n:r._$Cl=n),n!==void 0&&(e=Se(t,n._$AS(t,e.values),n,i)),e}class pi{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var r;const{el:{content:i},parts:a}=this._$AD,s=((r=e==null?void 0:e.creationScope)!==null&&r!==void 0?r:Ee).importNode(i,!0);Te.currentNode=s;let o=Te.nextNode(),d=0,n=0,p=a[0];for(;p!==void 0;){if(d===p.index){let u;p.type===2?u=new qe(o,o.nextSibling,this,e):p.type===1?u=new p.ctor(o,p.name,p.strings,this,e):p.type===6&&(u=new hi(o,this,e)),this._$AV.push(u),p=a[++n]}d!==(p==null?void 0:p.index)&&(o=Te.nextNode(),d++)}return Te.currentNode=Ee,s}v(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}}class qe{constructor(e,r,i,a){var s;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=a,this._$Cp=(s=a==null?void 0:a.isConnected)===null||s===void 0||s}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Se(this,e,r),nt(e)?e===D||e==null||e===""?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==Ie&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ci(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==D&&nt(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ee.createTextNode(e)),this._$AH=e}g(e){var r;const{values:i,_$litType$:a}=e,s=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=ct.createElement(a.h,this.options)),a);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.v(i);else{const o=new pi(s,this),d=o.u(this.options);o.v(i),this.$(d),this._$AH=o}}_$AC(e){let r=Lr.get(e.strings);return r===void 0&&Lr.set(e.strings,r=new ct(e)),r}T(e){ni(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,a=0;for(const s of e)a===r.length?r.push(i=new qe(this.k(ot()),this.k(ot()),this,this.options)):i=r[a],i._$AI(s),a++;a<r.length&&(this._$AR(i&&i._$AB.nextSibling,a),r.length=a)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,r);e&&e!==this._$AB;){const a=e.nextSibling;e.remove(),e=a}}setConnected(e){var r;this._$AM===void 0&&(this._$Cp=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}}class ft{constructor(e,r,i,a,s){this.type=1,this._$AH=D,this._$AN=void 0,this.element=e,this.name=r,this._$AM=a,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,i,a){const s=this.strings;let o=!1;if(s===void 0)e=Se(this,e,r,0),o=!nt(e)||e!==this._$AH&&e!==Ie,o&&(this._$AH=e);else{const d=e;let n,p;for(e=s[0],n=0;n<s.length-1;n++)p=Se(this,d[i+n],r,n),p===Ie&&(p=this._$AH[n]),o||(o=!nt(p)||p!==this._$AH[n]),p===D?e=D:e!==D&&(e+=(p??"")+s[n+1]),this._$AH[n]=p}o&&!a&&this.j(e)}j(e){e===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ui extends ft{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===D?void 0:e}}const Yi=He?He.emptyScript:"";class fi extends ft{constructor(){super(...arguments),this.type=4}j(e){e&&e!==D?this.element.setAttribute(this.name,Yi):this.element.removeAttribute(this.name)}}class mi extends ft{constructor(e,r,i,a,s){super(e,r,i,a,s),this.type=5}_$AI(e,r=this){var i;if((e=(i=Se(this,e,r,0))!==null&&i!==void 0?i:D)===Ie)return;const a=this._$AH,s=e===D&&a!==D||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,o=e!==D&&(a===D||s);s&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,i;typeof this._$AH=="function"?this._$AH.call((i=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class hi{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Se(this,e)}}const Ji={O:Pt,P:fe,A:vr,C:1,M:li,L:pi,D:ci,R:Se,I:qe,V:ft,H:fi,N:mi,U:ui,F:hi},Dr=_t.litHtmlPolyfillSupport;Dr==null||Dr(ct,qe),((Jt=_t.litHtmlVersions)!==null&&Jt!==void 0?Jt:_t.litHtmlVersions=[]).push("2.7.4");const Qi=(t,e,r)=>{var i,a;const s=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:e;let o=s._$litPart$;if(o===void 0){const d=(a=r==null?void 0:r.renderBefore)!==null&&a!==void 0?a:null;s._$litPart$=o=new qe(e.insertBefore(ot(),d),d,void 0,r??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Zt,er;let H=class extends Re{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,r;const i=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=i.firstChild),i}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qi(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Ie}};H.finalized=!0,H._$litElement$=!0,(Zt=globalThis.litElementHydrateSupport)===null||Zt===void 0||Zt.call(globalThis,{LitElement:H});const Nr=globalThis.litElementPolyfillSupport;Nr==null||Nr({LitElement:H});((er=globalThis.litElementVersions)!==null&&er!==void 0?er:globalThis.litElementVersions=[]).push("3.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=t=>e=>typeof e=="function"?((r,i)=>(customElements.define(r,i),i))(t,e):((r,i)=>{const{kind:a,elements:s}=i;return{kind:a,elements:s,finisher(o){customElements.define(r,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zi=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}},ea=(t,e,r)=>{e.constructor.createProperty(r,t)};function Q(t){return(e,r)=>r!==void 0?ea(t,e,r):Zi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mt(t){return Q({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ta=({finisher:t,descriptor:e})=>(r,i)=>{var a;if(i===void 0){const s=(a=r.originalKey)!==null&&a!==void 0?a:r.key,o=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(r.key)}:{...r,key:s};return t!=null&&(o.finisher=function(d){t(d,s)}),o}{const s=r.constructor;e!==void 0&&Object.defineProperty(r,i,e(i)),t==null||t(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ht(t,e){return ta({descriptor:r=>{const i={get(){var a,s;return(s=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const a=typeof r=="symbol"?Symbol():"__"+r;i.get=function(){var s,o;return this[a]===void 0&&(this[a]=(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&o!==void 0?o:null),this[a]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tr;((tr=window.HTMLSlotElement)===null||tr===void 0?void 0:tr.prototype.assignedElements)!=null;const ra="/assets/couvee-left-hand3-7694b699.png",ia="/assets/couvee-right-hand2-7f18eb6e.png";var aa=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,oa=(t,e,r,i)=>{for(var a=i>1?void 0:i?sa(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=(i?o(e,r,a):o(a))||a);return i&&a&&aa(e,r,a),a};let Lt=class extends H{handleMainClick(t){t.preventDefault(),se.go("/catalog","/")}render(){return L`
        <section class="showcase">
            <div class="wrapper">
                <div class="content">
                    <h2>WE BELIEVE</h2>
                    <h1>COFFEE</h1>
                    <h2>IS THE SIMPLEST</h2>
                    <h1>PLEASURE</h1>
                    <ck-s-button @click=${this.handleMainClick}>
                        <span slot="content">Choose Coffee</span>
                        <span slot="suffix">→</span>
                    </ck-s-button>
                </div>

                <div class="hero-img-container">
                    <div class="svg-wrappper">
                        <svg width="585" height="685" viewBox="0 0 585 685" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M518.901 109.139C568.931 170.687 545.899 253.877 550.103 333.046C555.865 441.58 627.427 569.477 547.242 642.946C464.486 718.771 328.063 678.379 227.341 628.774C144.165 587.809 113.718 496.514 77.1076 411.405C37.6717 319.728 -29.6657 223.378 14.446 133.851C60.438 40.5081 175.624 5.4274 279.652 0.331273C371.733 -4.17956 460.79 37.6491 518.901 109.139Z"
                                  fill="#CFA669"/>
                        </svg>
                    </div>
                    <div class="svg-wrappper">
                        <svg width="591" height="597" viewBox="0 0 591 597" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M508.482 28.8541C608.652 100.111 604.133 240.715 565.648 357.451C526.177 477.174 447.246 592.54 321.236 596.811C179.25 601.623 39.5653 514.215 4.94804 376.455C-25.6434 254.717 91.4828 164.958 194.795 93.6388C291.932 26.5825 412.301 -39.5661 508.482 28.8541Z"
                                  fill="#E66A8F" fill-opacity="0.4"/>
                        </svg>
                    </div>
                    <div class="img-container img-l">
                        <img src=${ra} alt="">
                    </div>
                    <div class="img-container img-r">
                        <img src=${ia} alt="">
                    </div>
                </div>
            </div>
        </section>
    `}};Lt.styles=[$`
      html {
        box-sizing: border-box;
      }

      *, *::after, *::before {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: inherit;
        box-sizing: inherit;
      }

      ul, ol {
        list-style: none;
      }

      a {
        text-decoration: none;
        color: inherit
      }

      a:hover {
        border-bottom: 2px solid;
      }

      path, i, svg {
        pointer-events: none;
      }

      button, select {
        padding: 0.2em 1em;
        border: 2px solid black;
        cursor: pointer;
        border-radius: 5px;
      }

      body {
        font-family: 'Alegreya Sans', sans-serif;

      }

    `,$`
      .showcase {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        min-height: 100vh;
        //padding: 5rem;
        margin-top: 86px;
      }

      .showcase video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
      }

      .vod-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #1e1e1e;
        mix-blend-mode: overlay;
      }

      .wrapper {
        display: flex;
        justify-content: center;
        gap: 4rem;
        height: 100%;
      }

      .content {
        position: relative;
        z-index: 10;
        font-size: 3rem;
        padding: 2rem 3rem;
        flex-basis: 50%;
        text-align: center;
      }

      .content h1 {
        font-weight: 500;
        font-size: 5rem;
      }

      .content h2 {
        font-weight: 400;
        background: linear-gradient(to right,
        rgb(207, 166, 105),
        #E66A8F,
        rgb(207, 166, 105));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
        background-size: 200%;
        animation: background-pan 3s linear infinite;
      }

      .hero-img-container {
        position: relative;
        flex-basis: 50%;
      }

      .hero-img-container > * {
        position: absolute;
        top: 0;
        right: 0;
      }

      .svg-wrappper {
        right: 30%;
      }

      .img-container {
        width: 100%;
      }

      .img-container svg {
        position: absolute;
        right: 0;
        width: 100%;
        transform: scale(0.3);
      }

      .img-container > img {
        object-fit: cover;
      }

      @keyframes background-pan {
        from {
          background-position: 0% center;
        }
        to {
          background-position: -200% center;

        }
      }

    `];Lt=oa([ce("ck-home-page")],Lt);var na=Object.defineProperty,ca=Object.getOwnPropertyDescriptor,da=(t,e,r,i)=>{for(var a=i>1?void 0:i?ca(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=(i?o(e,r,a):o(a))||a);return i&&a&&na(e,r,a),a};let Dt=class extends H{render(){return L`
        <section class="catalog">
            <ck-side-menu></ck-side-menu>
            <ck-catalog-content></ck-catalog-content>
        </section>
    `}};Dt.styles=[$`
      html {
        box-sizing: border-box;
      }

      *, *::after, *::before {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: inherit;
        box-sizing: inherit;
      }

      ul, ol {
        list-style: none;
      }

      a {
        text-decoration: none;
        color: inherit
      }

      a:hover {
        border-bottom: 2px solid;
      }

      path, i, svg {
        pointer-events: none;
      }

      button, select {
        padding: 0.2em 1em;
        border: 2px solid black;
        cursor: pointer;
        border-radius: 5px;
      }

      body {
        font-family: 'Alegreya Sans', sans-serif;
      }
    `,$`

      :host {
        display: block;
        height: calc(100vh - 83.200px);
      }

      .catalog {
        display: flex;
        width: 100%;
        height: 100%;
        padding: 0 2rem;
      }

      ck-catalog-content {
        flex-grow: 1;
        overflow-y: scroll;
      }
    `,$`
      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
      ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
      }
      ::-webkit-scrollbar-thumb {
        background: #1f3933;
        border: 1px solid #ffffff;
        border-radius: 0px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #000000;
      }
      ::-webkit-scrollbar-thumb:active {
        background: #1f3933;
      }
      ::-webkit-scrollbar-track {
        background: #f6eee1;
        border: 0px none #ffffff;
        border-radius: 43px;
      }
      ::-webkit-scrollbar-track:hover {
        background: #f6eee1;
      }
      ::-webkit-scrollbar-track:active {
        background: #f6eee1;
      }
      ::-webkit-scrollbar-corner {
        background: transparent;
      }
    `];Dt=da([ce("ck-catalog")],Dt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const la={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},pa=t=>(...e)=>({_$litDirective$:t,values:e});class ua{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:fa}=Ji,Mr=()=>document.createComment(""),tt=(t,e,r)=>{var i;const a=t._$AA.parentNode,s=e===void 0?t._$AB:e._$AA;if(r===void 0){const o=a.insertBefore(Mr(),s),d=a.insertBefore(Mr(),s);r=new fa(o,d,t,t.options)}else{const o=r._$AB.nextSibling,d=r._$AM,n=d!==t;if(n){let p;(i=r._$AQ)===null||i===void 0||i.call(r,t),r._$AM=t,r._$AP!==void 0&&(p=t._$AU)!==d._$AU&&r._$AP(p)}if(o!==s||n){let p=r._$AA;for(;p!==o;){const u=p.nextSibling;a.insertBefore(p,s),p=u}}}return r},ze=(t,e,r=t)=>(t._$AI(e,r),t),ma={},ha=(t,e=ma)=>t._$AH=e,va=t=>t._$AH,rr=t=>{var e;(e=t._$AP)===null||e===void 0||e.call(t,!1,!0);let r=t._$AA;const i=t._$AB.nextSibling;for(;r!==i;){const a=r.nextSibling;r.remove(),r=a}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rr=(t,e,r)=>{const i=new Map;for(let a=e;a<=r;a++)i.set(t[a],a);return i},Wt=pa(class extends ua{constructor(t){if(super(t),t.type!==la.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let i;r===void 0?r=e:e!==void 0&&(i=e);const a=[],s=[];let o=0;for(const d of t)a[o]=i?i(d,o):o,s[o]=r(d,o),o++;return{values:s,keys:a}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,i]){var a;const s=va(t),{values:o,keys:d}=this.dt(e,r,i);if(!Array.isArray(s))return this.ht=d,o;const n=(a=this.ht)!==null&&a!==void 0?a:this.ht=[],p=[];let u,h,m=0,f=s.length-1,b=0,y=o.length-1;for(;m<=f&&b<=y;)if(s[m]===null)m++;else if(s[f]===null)f--;else if(n[m]===d[b])p[b]=ze(s[m],o[b]),m++,b++;else if(n[f]===d[y])p[y]=ze(s[f],o[y]),f--,y--;else if(n[m]===d[y])p[y]=ze(s[m],o[y]),tt(t,p[y+1],s[m]),m++,y--;else if(n[f]===d[b])p[b]=ze(s[f],o[b]),tt(t,s[m],s[f]),f--,b++;else if(u===void 0&&(u=Rr(d,b,y),h=Rr(n,m,f)),u.has(n[m]))if(u.has(n[f])){const C=h.get(d[b]),k=C!==void 0?s[C]:null;if(k===null){const z=tt(t,s[m]);ze(z,o[b]),p[b]=z}else p[b]=ze(k,o[b]),tt(t,s[m],k),s[C]=null;b++}else rr(s[f]),f--;else rr(s[m]),m++;for(;b<=y;){const C=tt(t,p[y+1]);ze(C,o[b]),p[b++]=C}for(;m<=f;){const C=s[m++];C!==null&&rr(C)}return this.ht=d,ha(t,p),Ie}});var ba=Object.defineProperty,ga=Object.getOwnPropertyDescriptor,vi=(t,e,r,i)=>{for(var a=i>1?void 0:i?ga(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=(i?o(e,r,a):o(a))||a);return i&&a&&ba(e,r,a),a};let dt=class extends H{connectedCallback(){super.connectedCallback(),window.addEventListener("ck-cart-change",()=>{this.requestUpdate()}),window.addEventListener("ck-cart-toggle",()=>{this.classList.toggle("show")}),window.addEventListener("ck-cart-empty",()=>{this.classList.remove("show")})}trash(t){const e=t.target.getAttribute("key");delete window.app.store.cart[e],window.app.store.cart={...window.app.store.cart}}willUpdate(t){super.willUpdate(t),this.data=window.app.store.cart}increment(t){const e=t.target.getAttribute("key");Object.keys(window.app.store.cart).includes(e)?window.app.store.cart={...window.app.store.cart,[e]:window.app.store.cart[e]+1}:window.app.store.cart={...window.app.store.cart,[e]:1}}decrement(t){const e=t.target.getAttribute("key");Object.keys(window.app.store.cart).includes(e)?window.app.store.cart={...window.app.store.cart,[e]:window.app.store.cart[e]-1}:window.app.store.cart={...window.app.store.cart,[e]:1},window.app.store.cart[e]===0&&(delete window.app.store.cart[e],window.app.store.cart={...window.app.store.cart})}goToMenu(t){t.preventDefault(),se.go("/catalog","/cart")}render(){const t=window.app.store.menus,e=window.app.store.cart,r=Object.keys(e),i=s=>t[0].children[s[0]].children[s[1]].products[s[2]],a=r.reduce((s,o)=>(s+=i(o).price*e[o],s),0);return L`
        <section class="checkout">
            <div class="intro">
                <h2 class="title">Check out</h2>
                <a @click=${this.goToMenu} class="back" href="/catalog">Back to menu</a>
            </div>
            <div class="content">
                <div class="delivery-data">
                    <h4 class="subtitle">Shipping Details</h4>
                    <form class="form" action="">
                        <div class="width-2">
                            <input class="input" placeholder="First Name" name="name" type="text"/>
                            <input class="input" placeholder="Last Name" name="name" type="text"/>
                        </div>
                        <input class="input" placeholder="Address Line-1" type="text"/>
                        <input class="input" placeholder="Address Line-2" type="text"/>
                        <input class="input" placeholder="Address Line-3" type="text"/>
                        <input class="input" placeholder="Phone Number" type="tel"/>
                        <div class="checkout-btn order-btn">PLACE ORDER</div>
                    </form>

                    <div class="subtitle">Info will be shared to you by Whatsapp / Call</div>
                </div>
                <div class="cart">
                    <h2 class="cart-heading">CART</h2>
                    <div class="cart-main">

                        ${Wt(r,s=>s,s=>L`
                                <div class="cart-item">
                                    <div class="cart-img">
                                        <img src=${i(s).assets.masterImage.uri}
                                             alt="">
                                    </div>
                                    <div class="cart-content">
                                        <div class="cart-l-data">
                                            <span class="item-name">${i(s).name}</span>
                                            <div class="counter">
                                                <div key=${s} @click=${this.decrement} class="counter-btn">
                                                    <ion-icon name="remove-circle-outline"></ion-icon>
                                                </div>
                                                <div class="counter-count">${e[s]}</div>
                                                <div key=${s} @click=${this.increment} class="counter-btn">
                                                    <ion-icon name="add-circle-outline"></ion-icon>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cart-r-data">
                                            <div key=${s} @click=${this.trash} class="trash">
                                                <ion-icon name="trash-outline"></ion-icon>
                                            </div>
                                            <div class="sub-price">${e[s]*i(s).price}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `)}
                    </div>
                    <div class="cart-bottom">
                        <div class="checkout-btn btn">TOTAL <span><ion-icon
                                name="card-outline"></ion-icon></span></div>
                        <div class="checkout-price">${a}</div>
                    </div>

                </div>
            </div>
        </section>
    `}};dt.styles=[$`
      html {
        box-sizing: border-box;
      }

      *, *::after, *::before {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: inherit;
        box-sizing: inherit;
      }

      ul, ol {
        list-style: none;
      }

      a {
        text-decoration: none;
        color: inherit
      }

      a:hover {
        border-bottom: 2px solid;
      }

      path, i, svg {
        pointer-events: none;
      }

      button, select {
        padding: 0.2em 1em;
        border: 2px solid black;
        cursor: pointer;
        border-radius: 5px;
      }

      body {
        font-family: 'Alegreya Sans', sans-serif;
      }
    `,$`
      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
      }

      ::-webkit-scrollbar-thumb {
        background: #1f3933;
        border: 1px solid #ffffff;
        border-radius: 0px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #000000;
      }

      ::-webkit-scrollbar-thumb:active {
        background: #1f3933;
      }

      ::-webkit-scrollbar-track {
        background: #f6eee1;
        border: 0px none #ffffff;
        border-radius: 43px;
      }

      ::-webkit-scrollbar-track:hover {
        background: #f6eee1;
      }

      ::-webkit-scrollbar-track:active {
        background: #f6eee1;
      }

      ::-webkit-scrollbar-corner {
        background: transparent;
      }
    `,$`
      .cart {
        background: #f6f6f6;
        flex-shrink: 0;
        padding: 1rem;
        width: 30vw;
        display: flex;
        flex-direction: column;
        gap: 1em;
        border-radius: 2rem;
        margin-top: 1rem;
      }

      .cart-main {
        overflow-x: hidden;
        overflow-y: scroll;
        max-height: 50vh;
      }

      .cart-heading {
        font-size: 2rem;
        flex-basis: 5%;
      }

      .item-name {
        font-weight: 500;
      }

      .cart-item {
        display: flex;
        justify-content: center;
        padding: 0.5rem 0;
      }

      .cart-img {
        width: 100px;
        aspect-ratio: 1 / 1;
        flex-shrink: 0;
      }

      .cart-img img {
        height: 100%;
        width: 100%;
        display: block;
        object-fit: cover;
      }

      .cart-content {
        display: flex;
        flex-grow: 1;
        justify-content: left;
        margin: 0 1rem;
        padding: 0.625rem 0;
      }

      .counter {
        display: flex;
        align-items: center;
        gap: 1em;
        text-align: center;
      }

      .counter > div {
        font-size: 1.625rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      ion-icon {
        pointer-events: none;
      }

      .cart-l-data, .cart-r-data {
        flex-basis: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .cart-r-data {
        flex-basis: 40%;
        align-items: flex-end;
        font-size: 1.625rem;
      }

      .cart-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
      }

      .checkout-btn {
        display: inline-flex;
        padding: 0.625rem 2.5rem;
        background: var(--my-red);
        font-size: 1rem;
        align-items: center;
        flex-basis: 10%;
        cursor: pointer;
        transform: scale(1);
        will-change: transform;
        transition: all 0.2s ease-in-out;
      }

      .checkout-btn:hover {
        transform: scale(1.05);
      }

      .checkout-btn:active {
        transform: scale(1);
      }

      .checkout-btn span {
        display: inline-grid;
        place-items: center;
        font-size: 1rem;
        margin-left: 0.625rem;
      }

      .checkout-price {
        font-size: 2rem;
        color: var(--my-blush);
        font-weight: bolder;
        vertical-align: center;
      }
    `,$`

      .content, .intro {
        width: 80%;
        margin: 0 auto;
      }

      .content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 2rem;
      }

      .delivery-data {
        flex-basis: 45%;
      }

      .title {
        font-size: 2rem;
      }

      .form {
        display: flex;
        flex-direction: column;
      }


      input {
        width: 100%;
        padding: 0.625rem 1.25rem;
        margin: 8px 0;
        box-sizing: border-box;
        font-size: 1.25rem;
        border-radius: 0.625rem;
        background: transparent;
        border: 1px solid var(--my-selected-orange);
      }

      .order-btn {
        margin-top: 2rem;
        text-align: center;
        padding: 1rem 1.5rem;
        font-size: 1.250rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }

      .subtitle {
        margin-top: 0.5rem;
      }

      .width-2 {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    `];vi([mt()],dt.prototype,"data",2);dt=vi([ce("ck-checkout")],dt);const se={init:()=>{document.querySelectorAll(".nlink").forEach(e=>{e.addEventListener("click",r=>{r.preventDefault(),se.go(e.pathname,location.pathname)})}),window.addEventListener("popstate",e=>{se.go(e.state.route,location.pathname,!1)}),se.go("/","")},go:(t,e,r=!0)=>{r&&history.pushState({route:t},"",t);let i;switch(t){case"/":i=new Lt;break;case"/catalog":i=new Dt;break;case"/cart":i=document.createElement("h1"),i.textContent="Order";break;case"/user":i=document.createElement("h1"),i.textContent="User";break;case"/about":i=document.createElement("h1"),i.textContent="About";break;case"/checkout":i=document.createElement("h1"),i=new dt;break;default:if(/^\/product/.test(t)){i=document.createElement("h1");const s=t.substring(t.lastIndexOf("/")+1);i.textContent=`Details for ${s}`,i.dataset.id=s;break}i=document.createElement("h1"),i.textContent="Error"}let a=document.querySelector("#coffee-app");if(a&&e!==t){a.innerHTML="",a.appendChild(i),window.scrollTo({top:0,left:0});const s=document.querySelector("ck-nav-menu");if(s){s.setAttribute("activepage",t);let o;if(s.shadowRoot&&(o=s.shadowRoot.querySelector("header")),o){const d=o.querySelectorAll("a");d.forEach(n=>{n.classList.contains("active")&&n.classList.remove("active")}),d.forEach(n=>{n.pathname===t&&n.classList.add("active")})}}}}};var ya=Object.defineProperty,Ca=Object.getOwnPropertyDescriptor,bi=(t,e,r,i)=>{for(var a=i>1?void 0:i?Ca(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=(i?o(e,r,a):o(a))||a);return i&&a&&ya(e,r,a),a};let Nt=class extends H{constructor(){super(...arguments),this.type=""}render(){return L`
        <button class=${this.type}>
            <slot class="prefix" name="prefix"></slot>
            <slot class="content" name="content"></slot>
            <slot class="suffix" name="suffix"></slot>
        </button>
    `}};Nt.styles=[$`
      html {
        box-sizing: border-box;
      }

      *, *::after, *::before {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: inherit;
        box-sizing: inherit;
      }

      ul, ol {
        list-style: none;
      }

      a {
        text-decoration: none;
        color: inherit
      }

      a:hover {
        border-bottom: 2px solid;
      }

      path, i, svg {
        pointer-events: none;
      }

      button, select {
        padding: 0.2em 1em;
        border: 2px solid black;
        cursor: pointer;
        border-radius: 5px;
      }

      body {
        font-family: 'Inter', sans-serif;
      }
    `,$`
      button {
        background: none;
        border: 2px solid white;
        cursor: pointer;
        display: inline-flex;
        padding: 1.5rem 3rem;
        align-items: center;
        gap: 1rem;
        color: var(--white, #FFFCF7);
        text-align: center;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%;
        border-radius: 6.25rem;
        background: var(--grad-2, linear-gradient(270deg, #E66A8F 0%, #7E76DB 100%));
        margin-top: 4rem;
      }

      button > * {
        pointer-events: none;
      }
    `];bi([Q({reflect:!0})],Nt.prototype,"type",2);Nt=bi([ce("ck-s-button")],Nt);const wa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABMCAYAAAAx3tSzAAAAAXNSR0IArs4c6QAADNZJREFUeAHtm71W20waxyVBj8kNRHw0WyHKt4opt8K5gjhX8DpXEFNuFafbDlFuFXMFMd1uhSn3HMBK+TZBVLsFWPv7jzXKWPhDxoaXPYc5x8zXM8/3PPOMJHzviUpIWfO8d34QRF6WRYaM79fHyGVZr+j7fs8bDvt3nneWJElajK+44a8S324Y1rMg+ICAdd/3Q+qzzPf7meclAcJMosVciFLCLMtC5rXuLev6Hgq4Gw6/Inwyad1jx5YWGEPWAs/7AKMtmNyEkdgfDruXSdJ7DFPCh2fUwdXQz8+ycxTQAd/pY/CV1ywl8O729mcs0wLJBXXnKkm6ZQLL9I0yg6CJ0C3wZAjehsbJMjgfJbBxXd8/ZvEtTLQea81FGN8JQ1m8A83BXZZ9XLWrT+UFq37Z2d5Ot7e3pfVnLbI49Nv8MnnXY4hXtjDEwnXf/wYRHw03nk3DE6SClQheYqZu4OU9vKQTwCYOEW/mFxFY8/1zIu7Z5WAQ/ZnCilvo9xG0ToT/geDf4a82X4qKEBJ2Z2vrhj3UrLjkWcHgLRZ/4nNpwi9dWCugjJEL/XhLI2z4ki1rhbW1LL27tXUO2zOFnrqH8wB1yrkXW6Qvub4aDJra02tBcDyLz4kCc+x0WHQrJLMWv7S5+yxTkrKlo6syb0oqdM7KpSsvekGAsB3pnJ7G/3qZV46eY1yjvejRA4EayPZYay4D+c3nh46QMo2n7IseBvvKlpRrH5RpjSUexhVIKnTWlgGn9ZXycXH4nbSvTpp5AVyqGxKuFVHranjDfHx5fX00Dceqx6V89nKC0pvl/L4Q2AD5/gBG31fJjXOkxwi0z69973ldtJuWmTcKCYJvUsZzZmg6qjDCZ+LQlstTEbSCgFsJt56qwirDQYhbAkWkSD5JWBEyGpbluWSwpitFuQw8VTs/XXwp3KVRCIxlf+eKF7uT09pinL16oSjuCoowEWfh9wkXi1SKBH/bKGoa4hWPayth5aaL1gisyMzEZq4Vd/5B27iK59WwbKs8uR4EDYQ6kfLcOe1laRoG2lj6kzv3lG2emMTQPMQQoaVjBOaxTANGunZwZg3TspRrWQsvAihOuI7smKmzLPWCoK6Ev8qWGVu7RAceE3g9ZbuOubVHWjYwVp6DXFYCNpkD9mD6ufbtA8IMyLoqxRxtc1AXAzMaylfzLGwG1MueWueBmc7Ksyps+sBmw2G7CmwVGGmeZOXtJFhcvxJPk9bOGltnb0UA9GYBFXO+v0ew6hf9JRs8VGiDQvRTB1WNOLBHEoQdsoS2nlf3OOdPJ8UNZ12lps8x0htyzFxfX3dmrTDWCIIBGROGXrzoqCJC1ljfrrIaekpVozygNlizoWOGwHi0jOAmSk97SO4yBvHQ7S/aFg0s9rsEsWtpR1Kk7bu1hFJEv7q+bnHeh8oAMfk+XjHYDsOxY89dN68d4DLv5gEV86Ncuegu0hDzuMYFZ3XLrtO5TSLyzVWCnSvXWk+OX5fgvKk4IngeV1lXxmMsXB6c1ie72rBz5hpZStvs3NSa89u1stwbnHMv7S4+CX4/HMrisvbMbeius+3KAvOSK2UPhXYhjIb0C2vZ8Vm1mGX+zGXUXtplsVlr3Tm5u5IYXLzrjk9rm/whN05lgSHSdxESNfsLbYd8sQRkXcMmOjnzeoe0v4ibap25mLhMldqKD8rtOYlia5zKAltcDqN6K3hr+3Z+Xi1GdU8lv9beDQXPWCKLIfQW1j9fFGeZJusPUd43YsQA5Z6JnoUJcAtd2qsVYOXKBTAuBePNol+xYSzj+yduwJIiTFBinKOoyzn8BX3UKqL0pDwJqcc78PRVAZIjbMvECV7HWjyysEns7cDMmvNa7mhhsIi5LCzCmF2r4wblXei66K4XgwSliOAmaw8Q4LOEsetm1QjZwJoHOsaER54jeISsoQSzJXUs9UAeamJeQWMSuG7hzFFD5uUeNXauSq37tISWGyNTZNeIUea0r99LcLmmsR6u6irHwqvWGnnrmAfmAOCIGE/UDciNEzQTqjOvgLMP0jS/Extw9l6LhqxQMDwPjzsvocF5hFDn5YRCCtW8XBMeL+SqwN1IeMGyV9+5uMgYR9dTd3DU3rPJlQ+joTQI0k0ESh/Cjo8YYUvPinC7Nlr8QATer4JjHOOoJ4Xh3jGW2EABn6ZFYMFxv1WAq8vbUERH7isszFlZtuAjcceAATQvuuPqrLL9ebXgy49xGKv0qmMubh6+GX64o8uKyFCbt8ad193A5U0GAl/XwihoeWhqLBjZyWk12m2yUFE0sjDuflzmWMGyMbhCuTln54FcGCHOFbV13Lg0LW23xtPiAG8rxgiybIWe7RszCwmB4zsuKVdI7eSs2rh2EHQUUa37CD6/FX3BNWPmPlXFN40WvOnzJ+u+Icb5tW9HV9Vf/OYBFdq3nAI1rc23a+HihV/LjdCqPhqJpxEvj8uNQbBH4PqIYH07bwiNAsg7CZ5/1bOSr3BEw+CnsvTcmhRY+k80lseWCI9pWJhfAuPraO/Bg2sLOK02SD2vpWymHGjEGG8AWihSBDcgpnS0NxwOU7aEPkL7YZmbhn+ZcQyiFwsf8xzeoCoEVo9wr7SvtYiVzTopC/em/T1340TjbkH2UXTFMjARaU77bVFaLs5ZbRkCAnVlb1PhtP+klakAMyYQqCYXh1CG4o6XCVwzyFSaynm5mcTDmIWFjYgot+vas60SBQcIYiM39rwmGr6RC2sP5+7bd0CfrInCO/KiSdZ9KLDeQgTBdxIRJRFLMWjO9iCwScKeJMSNE4gmahPsFMWXoiE8bpFVdfkonx4W5oHAmsj9/xCGDmAotcDL1rK++2wMq/dXjL+mvFwp6LyHkg9kkWtrLz6YeMEDSlAUR2axyOkwuWDdOv538P8idM6nT/LUmizRaJQkZnJJ0/S/G7VaL/D9v21ubPznJk3/NRnyzx+VsASpfRlp6S3CtotAmL5US4sv3DiBz1oV1U8MWuWFEpqMqce4EgulkSsLZGVaVfsSUE9LgNfHrpUtO3UPu4QRsI+gypA2y08nXLjnauvoMdGY1HQRYR/FHy7UUTbFT085KrnRowhNWCR60F3qe+1KFnZp6+GbkhIi+HtpmeTigzv/VG09DIDeALr7SioWPmdzxirt4WlCmDvx6JUnCVTWGXreySr3t9mnQaCPbZrw4COsLjbdafxUGV9KYEtAgpsn+7zXzfheixtX9370/0eJhalaI6T5fyfS2wbM6XuRM35t94pXFdckuJUIbBEbZrn/EtzqXBr2lDdT9yHSt3dgC2trvELXxhqK0pcIEYoLJaTeWbNGH7slFnYV9UoFdhky7ighuDwgeAihMJ+vSRkIZT5T1Bi5r5Siu3hvVZbMab1Wrxp41cCrBl418KqBl6yBieewOUPX1/cuLy/P5jEvWGBqboLAWMSYhtJ8Xp20jIu5kPFE4zncGB5n3APMrBfcOrxpzi13d3cXFWB+8EztVwFZBLJjRsSwt7u7q6oDsiOLTAMqzCmhODaZEf2dnZ2Ufpv+rdJM1tQFB76Wakrb/M3/mHdQo8966xrSF/n8dBHZV9+WtbW1GHx9+m2NqU91qLZboHNEv62xnOZntd3C2pN1O5ALe07/CGbN00qEMB91A7jFeMPCahzhYgl4f38fSxk5bAxMyvqorCC71tZKJ21bNWlkzJh5I8laCejJmgh7CL62+ir0te4I72urP6OcAVMvzxfXQ7QSM2kQWWavrq66shRCtUsLBdvSFc3C0hcjPRh6C66I9kJFeFDgKcpt2oWyOm25qlGAHV+mNhaWJkGyJ+HKyHKBCoK5K3soI7awWLdJu85Yg3YXoev0e/wWLTELtKVaWiiBZXm1S+UdfBQuC99fHcUbUJT3dhKMEdhapLyoRMQikpsN3Dk8oM/aOB9L3LlF2vIoFBZre4BTePYmCYwwW/DgO7hPaKdOX81NfgfOmF7X9o3A+HoPbWjPhDCeOEAPmmJECgJUEdUQoS48AD4UzDruQvqR25/Tjplv4toJ604tDXcNNOJ5exiY/sw9DPKvCHIsQVzkcmF+bTuWC3cGQ3K9saLIC54QpXTtBO6mdh28oR3L64buu6Uxj7WKyorC+j2YL8Mv2i/cQoIicA+GzYfY1AnI6hBv0v7o7lkxj8AKUDfA6KKe0q7Tlgs15ZrURZGb0jkEpiPYPBj5WCAqgJwG8AndGnhqzrBponzxOABX7M6h2B8YI9FYbiAprKW+LYIp3jzoTcPPnz//vrm5KSX8BsLfqHWmfioLAGy6sbERM8+0/1d+f6H9b6zTHAwG/6Q9Vm5ubrpv3rz5A7j3gkXofwDbEs0xwLwDbAJcAj+98nyNgsLEm5Rb/IBPodMXPDKEouPOq8262v8AJEPQ5vbE6GgAAAAASUVORK5CYII=";var W="top",Y="bottom",J="right",U="left",br="auto",ht=[W,Y,J,U],We="start",lt="end",ka="clippingParents",gi="viewport",rt="popper",Aa="reference",Vr=ht.reduce(function(t,e){return t.concat([e+"-"+We,e+"-"+lt])},[]),yi=[].concat(ht,[br]).reduce(function(t,e){return t.concat([e,e+"-"+We,e+"-"+lt])},[]),xa="beforeRead",za="read",Oa="afterRead",Ta="beforeMain",$a="main",Ea="afterMain",Ia="beforeWrite",Sa="write",ja="afterWrite",Ba=[xa,za,Oa,Ta,$a,Ea,Ia,Sa,ja];function ne(t){return t?(t.nodeName||"").toLowerCase():null}function X(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function je(t){var e=X(t).Element;return t instanceof e||t instanceof Element}function K(t){var e=X(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function gr(t){if(typeof ShadowRoot>"u")return!1;var e=X(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function _a(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var i=e.styles[r]||{},a=e.attributes[r]||{},s=e.elements[r];!K(s)||!ne(s)||(Object.assign(s.style,i),Object.keys(a).forEach(function(o){var d=a[o];d===!1?s.removeAttribute(o):s.setAttribute(o,d===!0?"":d)}))})}function Pa(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(i){var a=e.elements[i],s=e.attributes[i]||{},o=Object.keys(e.styles.hasOwnProperty(i)?e.styles[i]:r[i]),d=o.reduce(function(n,p){return n[p]="",n},{});!K(a)||!ne(a)||(Object.assign(a.style,d),Object.keys(s).forEach(function(n){a.removeAttribute(n)}))})}}const Ci={name:"applyStyles",enabled:!0,phase:"write",fn:_a,effect:Pa,requires:["computeStyles"]};function oe(t){return t.split("-")[0]}var $e=Math.max,Mt=Math.min,Ue=Math.round;function dr(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function wi(){return!/^((?!chrome|android).)*safari/i.test(dr())}function Ge(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var i=t.getBoundingClientRect(),a=1,s=1;e&&K(t)&&(a=t.offsetWidth>0&&Ue(i.width)/t.offsetWidth||1,s=t.offsetHeight>0&&Ue(i.height)/t.offsetHeight||1);var o=je(t)?X(t):window,d=o.visualViewport,n=!wi()&&r,p=(i.left+(n&&d?d.offsetLeft:0))/a,u=(i.top+(n&&d?d.offsetTop:0))/s,h=i.width/a,m=i.height/s;return{width:h,height:m,top:u,right:p+h,bottom:u+m,left:p,x:p,y:u}}function yr(t){var e=Ge(t),r=t.offsetWidth,i=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:i}}function ki(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&gr(r)){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function me(t){return X(t).getComputedStyle(t)}function La(t){return["table","td","th"].indexOf(ne(t))>=0}function ye(t){return((je(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ut(t){return ne(t)==="html"?t:t.assignedSlot||t.parentNode||(gr(t)?t.host:null)||ye(t)}function Hr(t){return!K(t)||me(t).position==="fixed"?null:t.offsetParent}function Da(t){var e=/firefox/i.test(dr()),r=/Trident/i.test(dr());if(r&&K(t)){var i=me(t);if(i.position==="fixed")return null}var a=Ut(t);for(gr(a)&&(a=a.host);K(a)&&["html","body"].indexOf(ne(a))<0;){var s=me(a);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return a;a=a.parentNode}return null}function vt(t){for(var e=X(t),r=Hr(t);r&&La(r)&&me(r).position==="static";)r=Hr(r);return r&&(ne(r)==="html"||ne(r)==="body"&&me(r).position==="static")?e:r||Da(t)||e}function Cr(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function it(t,e,r){return $e(t,Mt(e,r))}function Na(t,e,r){var i=it(t,e,r);return i>r?r:i}function Ai(){return{top:0,right:0,bottom:0,left:0}}function xi(t){return Object.assign({},Ai(),t)}function zi(t,e){return e.reduce(function(r,i){return r[i]=t,r},{})}var Ma=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,xi(typeof e!="number"?e:zi(e,ht))};function Ra(t){var e,r=t.state,i=t.name,a=t.options,s=r.elements.arrow,o=r.modifiersData.popperOffsets,d=oe(r.placement),n=Cr(d),p=[U,J].indexOf(d)>=0,u=p?"height":"width";if(!(!s||!o)){var h=Ma(a.padding,r),m=yr(s),f=n==="y"?W:U,b=n==="y"?Y:J,y=r.rects.reference[u]+r.rects.reference[n]-o[n]-r.rects.popper[u],C=o[n]-r.rects.reference[n],k=vt(s),z=k?n==="y"?k.clientHeight||0:k.clientWidth||0:0,E=y/2-C/2,c=h[f],x=z-m[u]-h[b],g=z/2-m[u]/2+E,T=it(c,g,x),_=n;r.modifiersData[i]=(e={},e[_]=T,e.centerOffset=T-g,e)}}function Va(t){var e=t.state,r=t.options,i=r.element,a=i===void 0?"[data-popper-arrow]":i;a!=null&&(typeof a=="string"&&(a=e.elements.popper.querySelector(a),!a)||ki(e.elements.popper,a)&&(e.elements.arrow=a))}const Ha={name:"arrow",enabled:!0,phase:"main",fn:Ra,effect:Va,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Fe(t){return t.split("-")[1]}var Wa={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ua(t,e){var r=t.x,i=t.y,a=e.devicePixelRatio||1;return{x:Ue(r*a)/a||0,y:Ue(i*a)/a||0}}function Wr(t){var e,r=t.popper,i=t.popperRect,a=t.placement,s=t.variation,o=t.offsets,d=t.position,n=t.gpuAcceleration,p=t.adaptive,u=t.roundOffsets,h=t.isFixed,m=o.x,f=m===void 0?0:m,b=o.y,y=b===void 0?0:b,C=typeof u=="function"?u({x:f,y}):{x:f,y};f=C.x,y=C.y;var k=o.hasOwnProperty("x"),z=o.hasOwnProperty("y"),E=U,c=W,x=window;if(p){var g=vt(r),T="clientHeight",_="clientWidth";if(g===X(r)&&(g=ye(r),me(g).position!=="static"&&d==="absolute"&&(T="scrollHeight",_="scrollWidth")),g=g,a===W||(a===U||a===J)&&s===lt){c=Y;var B=h&&g===x&&x.visualViewport?x.visualViewport.height:g[T];y-=B-i.height,y*=n?1:-1}if(a===U||(a===W||a===Y)&&s===lt){E=J;var S=h&&g===x&&x.visualViewport?x.visualViewport.width:g[_];f-=S-i.width,f*=n?1:-1}}var P=Object.assign({position:d},p&&Wa),j=u===!0?Ua({x:f,y},X(r)):{x:f,y};if(f=j.x,y=j.y,n){var I;return Object.assign({},P,(I={},I[c]=z?"0":"",I[E]=k?"0":"",I.transform=(x.devicePixelRatio||1)<=1?"translate("+f+"px, "+y+"px)":"translate3d("+f+"px, "+y+"px, 0)",I))}return Object.assign({},P,(e={},e[c]=z?y+"px":"",e[E]=k?f+"px":"",e.transform="",e))}function Ga(t){var e=t.state,r=t.options,i=r.gpuAcceleration,a=i===void 0?!0:i,s=r.adaptive,o=s===void 0?!0:s,d=r.roundOffsets,n=d===void 0?!0:d,p={placement:oe(e.placement),variation:Fe(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:a,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Wr(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:n})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Wr(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:n})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Fa={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ga,data:{}};var Et={passive:!0};function Xa(t){var e=t.state,r=t.instance,i=t.options,a=i.scroll,s=a===void 0?!0:a,o=i.resize,d=o===void 0?!0:o,n=X(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&p.forEach(function(u){u.addEventListener("scroll",r.update,Et)}),d&&n.addEventListener("resize",r.update,Et),function(){s&&p.forEach(function(u){u.removeEventListener("scroll",r.update,Et)}),d&&n.removeEventListener("resize",r.update,Et)}}const qa={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Xa,data:{}};var Ka={left:"right",right:"left",bottom:"top",top:"bottom"};function jt(t){return t.replace(/left|right|bottom|top/g,function(e){return Ka[e]})}var Ya={start:"end",end:"start"};function Ur(t){return t.replace(/start|end/g,function(e){return Ya[e]})}function wr(t){var e=X(t),r=e.pageXOffset,i=e.pageYOffset;return{scrollLeft:r,scrollTop:i}}function kr(t){return Ge(ye(t)).left+wr(t).scrollLeft}function Ja(t,e){var r=X(t),i=ye(t),a=r.visualViewport,s=i.clientWidth,o=i.clientHeight,d=0,n=0;if(a){s=a.width,o=a.height;var p=wi();(p||!p&&e==="fixed")&&(d=a.offsetLeft,n=a.offsetTop)}return{width:s,height:o,x:d+kr(t),y:n}}function Qa(t){var e,r=ye(t),i=wr(t),a=(e=t.ownerDocument)==null?void 0:e.body,s=$e(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),o=$e(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),d=-i.scrollLeft+kr(t),n=-i.scrollTop;return me(a||r).direction==="rtl"&&(d+=$e(r.clientWidth,a?a.clientWidth:0)-s),{width:s,height:o,x:d,y:n}}function Ar(t){var e=me(t),r=e.overflow,i=e.overflowX,a=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+i)}function Oi(t){return["html","body","#document"].indexOf(ne(t))>=0?t.ownerDocument.body:K(t)&&Ar(t)?t:Oi(Ut(t))}function at(t,e){var r;e===void 0&&(e=[]);var i=Oi(t),a=i===((r=t.ownerDocument)==null?void 0:r.body),s=X(i),o=a?[s].concat(s.visualViewport||[],Ar(i)?i:[]):i,d=e.concat(o);return a?d:d.concat(at(Ut(o)))}function lr(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Za(t,e){var r=Ge(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function Gr(t,e,r){return e===gi?lr(Ja(t,r)):je(e)?Za(e,r):lr(Qa(ye(t)))}function es(t){var e=at(Ut(t)),r=["absolute","fixed"].indexOf(me(t).position)>=0,i=r&&K(t)?vt(t):t;return je(i)?e.filter(function(a){return je(a)&&ki(a,i)&&ne(a)!=="body"}):[]}function ts(t,e,r,i){var a=e==="clippingParents"?es(t):[].concat(e),s=[].concat(a,[r]),o=s[0],d=s.reduce(function(n,p){var u=Gr(t,p,i);return n.top=$e(u.top,n.top),n.right=Mt(u.right,n.right),n.bottom=Mt(u.bottom,n.bottom),n.left=$e(u.left,n.left),n},Gr(t,o,i));return d.width=d.right-d.left,d.height=d.bottom-d.top,d.x=d.left,d.y=d.top,d}function Ti(t){var e=t.reference,r=t.element,i=t.placement,a=i?oe(i):null,s=i?Fe(i):null,o=e.x+e.width/2-r.width/2,d=e.y+e.height/2-r.height/2,n;switch(a){case W:n={x:o,y:e.y-r.height};break;case Y:n={x:o,y:e.y+e.height};break;case J:n={x:e.x+e.width,y:d};break;case U:n={x:e.x-r.width,y:d};break;default:n={x:e.x,y:e.y}}var p=a?Cr(a):null;if(p!=null){var u=p==="y"?"height":"width";switch(s){case We:n[p]=n[p]-(e[u]/2-r[u]/2);break;case lt:n[p]=n[p]+(e[u]/2-r[u]/2);break}}return n}function pt(t,e){e===void 0&&(e={});var r=e,i=r.placement,a=i===void 0?t.placement:i,s=r.strategy,o=s===void 0?t.strategy:s,d=r.boundary,n=d===void 0?ka:d,p=r.rootBoundary,u=p===void 0?gi:p,h=r.elementContext,m=h===void 0?rt:h,f=r.altBoundary,b=f===void 0?!1:f,y=r.padding,C=y===void 0?0:y,k=xi(typeof C!="number"?C:zi(C,ht)),z=m===rt?Aa:rt,E=t.rects.popper,c=t.elements[b?z:m],x=ts(je(c)?c:c.contextElement||ye(t.elements.popper),n,u,o),g=Ge(t.elements.reference),T=Ti({reference:g,element:E,strategy:"absolute",placement:a}),_=lr(Object.assign({},E,T)),B=m===rt?_:g,S={top:x.top-B.top+k.top,bottom:B.bottom-x.bottom+k.bottom,left:x.left-B.left+k.left,right:B.right-x.right+k.right},P=t.modifiersData.offset;if(m===rt&&P){var j=P[a];Object.keys(S).forEach(function(I){var G=[J,Y].indexOf(I)>=0?1:-1,F=[W,Y].indexOf(I)>=0?"y":"x";S[I]+=j[F]*G})}return S}function rs(t,e){e===void 0&&(e={});var r=e,i=r.placement,a=r.boundary,s=r.rootBoundary,o=r.padding,d=r.flipVariations,n=r.allowedAutoPlacements,p=n===void 0?yi:n,u=Fe(i),h=u?d?Vr:Vr.filter(function(b){return Fe(b)===u}):ht,m=h.filter(function(b){return p.indexOf(b)>=0});m.length===0&&(m=h);var f=m.reduce(function(b,y){return b[y]=pt(t,{placement:y,boundary:a,rootBoundary:s,padding:o})[oe(y)],b},{});return Object.keys(f).sort(function(b,y){return f[b]-f[y]})}function is(t){if(oe(t)===br)return[];var e=jt(t);return[Ur(t),e,Ur(e)]}function as(t){var e=t.state,r=t.options,i=t.name;if(!e.modifiersData[i]._skip){for(var a=r.mainAxis,s=a===void 0?!0:a,o=r.altAxis,d=o===void 0?!0:o,n=r.fallbackPlacements,p=r.padding,u=r.boundary,h=r.rootBoundary,m=r.altBoundary,f=r.flipVariations,b=f===void 0?!0:f,y=r.allowedAutoPlacements,C=e.options.placement,k=oe(C),z=k===C,E=n||(z||!b?[jt(C)]:is(C)),c=[C].concat(E).reduce(function(de,Z){return de.concat(oe(Z)===br?rs(e,{placement:Z,boundary:u,rootBoundary:h,padding:p,flipVariations:b,allowedAutoPlacements:y}):Z)},[]),x=e.rects.reference,g=e.rects.popper,T=new Map,_=!0,B=c[0],S=0;S<c.length;S++){var P=c[S],j=oe(P),I=Fe(P)===We,G=[W,Y].indexOf(j)>=0,F=G?"width":"height",M=pt(e,{placement:P,boundary:u,rootBoundary:h,altBoundary:m,padding:p}),R=G?I?J:U:I?Y:W;x[F]>g[F]&&(R=jt(R));var N=jt(R),te=[];if(s&&te.push(M[j]<=0),d&&te.push(M[R]<=0,M[N]<=0),te.every(function(de){return de})){B=P,_=!1;break}T.set(P,te)}if(_)for(var re=b?3:1,Ce=function(Z){var le=c.find(function(Pe){var pe=T.get(Pe);if(pe)return pe.slice(0,Z).every(function(Le){return Le})});if(le)return B=le,"break"},ie=re;ie>0;ie--){var we=Ce(ie);if(we==="break")break}e.placement!==B&&(e.modifiersData[i]._skip=!0,e.placement=B,e.reset=!0)}}const ss={name:"flip",enabled:!0,phase:"main",fn:as,requiresIfExists:["offset"],data:{_skip:!1}};function Fr(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function Xr(t){return[W,J,Y,U].some(function(e){return t[e]>=0})}function os(t){var e=t.state,r=t.name,i=e.rects.reference,a=e.rects.popper,s=e.modifiersData.preventOverflow,o=pt(e,{elementContext:"reference"}),d=pt(e,{altBoundary:!0}),n=Fr(o,i),p=Fr(d,a,s),u=Xr(n),h=Xr(p);e.modifiersData[r]={referenceClippingOffsets:n,popperEscapeOffsets:p,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const ns={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:os};function cs(t,e,r){var i=oe(t),a=[U,W].indexOf(i)>=0?-1:1,s=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,o=s[0],d=s[1];return o=o||0,d=(d||0)*a,[U,J].indexOf(i)>=0?{x:d,y:o}:{x:o,y:d}}function ds(t){var e=t.state,r=t.options,i=t.name,a=r.offset,s=a===void 0?[0,0]:a,o=yi.reduce(function(u,h){return u[h]=cs(h,e.rects,s),u},{}),d=o[e.placement],n=d.x,p=d.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=n,e.modifiersData.popperOffsets.y+=p),e.modifiersData[i]=o}const ls={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ds};function ps(t){var e=t.state,r=t.name;e.modifiersData[r]=Ti({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const us={name:"popperOffsets",enabled:!0,phase:"read",fn:ps,data:{}};function fs(t){return t==="x"?"y":"x"}function ms(t){var e=t.state,r=t.options,i=t.name,a=r.mainAxis,s=a===void 0?!0:a,o=r.altAxis,d=o===void 0?!1:o,n=r.boundary,p=r.rootBoundary,u=r.altBoundary,h=r.padding,m=r.tether,f=m===void 0?!0:m,b=r.tetherOffset,y=b===void 0?0:b,C=pt(e,{boundary:n,rootBoundary:p,padding:h,altBoundary:u}),k=oe(e.placement),z=Fe(e.placement),E=!z,c=Cr(k),x=fs(c),g=e.modifiersData.popperOffsets,T=e.rects.reference,_=e.rects.popper,B=typeof y=="function"?y(Object.assign({},e.rects,{placement:e.placement})):y,S=typeof B=="number"?{mainAxis:B,altAxis:B}:Object.assign({mainAxis:0,altAxis:0},B),P=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,j={x:0,y:0};if(g){if(s){var I,G=c==="y"?W:U,F=c==="y"?Y:J,M=c==="y"?"height":"width",R=g[c],N=R+C[G],te=R-C[F],re=f?-_[M]/2:0,Ce=z===We?T[M]:_[M],ie=z===We?-_[M]:-T[M],we=e.elements.arrow,de=f&&we?yr(we):{width:0,height:0},Z=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ai(),le=Z[G],Pe=Z[F],pe=it(0,T[M],de[M]),Le=E?T[M]/2-re-pe-le-S.mainAxis:Ce-pe-le-S.mainAxis,be=E?-T[M]/2+re+pe+Pe+S.mainAxis:ie+pe+Pe+S.mainAxis,De=e.elements.arrow&&vt(e.elements.arrow),gt=De?c==="y"?De.clientTop||0:De.clientLeft||0:0,Ke=(I=P==null?void 0:P[c])!=null?I:0,yt=R+Le-Ke-gt,Ct=R+be-Ke,Ye=it(f?Mt(N,yt):N,R,f?$e(te,Ct):te);g[c]=Ye,j[c]=Ye-R}if(d){var Je,wt=c==="x"?W:U,kt=c==="x"?Y:J,ue=g[x],ge=x==="y"?"height":"width",Qe=ue+C[wt],ke=ue-C[kt],Ze=[W,U].indexOf(k)!==-1,At=(Je=P==null?void 0:P[x])!=null?Je:0,xt=Ze?Qe:ue-T[ge]-_[ge]-At+S.altAxis,zt=Ze?ue+T[ge]+_[ge]-At-S.altAxis:ke,Ot=f&&Ze?Na(xt,ue,zt):it(f?xt:Qe,ue,f?zt:ke);g[x]=Ot,j[x]=Ot-ue}e.modifiersData[i]=j}}const hs={name:"preventOverflow",enabled:!0,phase:"main",fn:ms,requiresIfExists:["offset"]};function vs(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function bs(t){return t===X(t)||!K(t)?wr(t):vs(t)}function gs(t){var e=t.getBoundingClientRect(),r=Ue(e.width)/t.offsetWidth||1,i=Ue(e.height)/t.offsetHeight||1;return r!==1||i!==1}function ys(t,e,r){r===void 0&&(r=!1);var i=K(e),a=K(e)&&gs(e),s=ye(e),o=Ge(t,a,r),d={scrollLeft:0,scrollTop:0},n={x:0,y:0};return(i||!i&&!r)&&((ne(e)!=="body"||Ar(s))&&(d=bs(e)),K(e)?(n=Ge(e,!0),n.x+=e.clientLeft,n.y+=e.clientTop):s&&(n.x=kr(s))),{x:o.left+d.scrollLeft-n.x,y:o.top+d.scrollTop-n.y,width:o.width,height:o.height}}function Cs(t){var e=new Map,r=new Set,i=[];t.forEach(function(s){e.set(s.name,s)});function a(s){r.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(d){if(!r.has(d)){var n=e.get(d);n&&a(n)}}),i.push(s)}return t.forEach(function(s){r.has(s.name)||a(s)}),i}function ws(t){var e=Cs(t);return Ba.reduce(function(r,i){return r.concat(e.filter(function(a){return a.phase===i}))},[])}function ks(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function As(t){var e=t.reduce(function(r,i){var a=r[i.name];return r[i.name]=a?Object.assign({},a,i,{options:Object.assign({},a.options,i.options),data:Object.assign({},a.data,i.data)}):i,r},{});return Object.keys(e).map(function(r){return e[r]})}var qr={placement:"bottom",modifiers:[],strategy:"absolute"};function Kr(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function xs(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,i=r===void 0?[]:r,a=e.defaultOptions,s=a===void 0?qr:a;return function(d,n,p){p===void 0&&(p=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},qr,s),modifiersData:{},elements:{reference:d,popper:n},attributes:{},styles:{}},h=[],m=!1,f={state:u,setOptions:function(k){var z=typeof k=="function"?k(u.options):k;y(),u.options=Object.assign({},s,u.options,z),u.scrollParents={reference:je(d)?at(d):d.contextElement?at(d.contextElement):[],popper:at(n)};var E=ws(As([].concat(i,u.options.modifiers)));return u.orderedModifiers=E.filter(function(c){return c.enabled}),b(),f.update()},forceUpdate:function(){if(!m){var k=u.elements,z=k.reference,E=k.popper;if(Kr(z,E)){u.rects={reference:ys(z,vt(E),u.options.strategy==="fixed"),popper:yr(E)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(S){return u.modifiersData[S.name]=Object.assign({},S.data)});for(var c=0;c<u.orderedModifiers.length;c++){if(u.reset===!0){u.reset=!1,c=-1;continue}var x=u.orderedModifiers[c],g=x.fn,T=x.options,_=T===void 0?{}:T,B=x.name;typeof g=="function"&&(u=g({state:u,options:_,name:B,instance:f})||u)}}}},update:ks(function(){return new Promise(function(C){f.forceUpdate(),C(u)})}),destroy:function(){y(),m=!0}};if(!Kr(d,n))return f;f.setOptions(p).then(function(C){!m&&p.onFirstUpdate&&p.onFirstUpdate(C)});function b(){u.orderedModifiers.forEach(function(C){var k=C.name,z=C.options,E=z===void 0?{}:z,c=C.effect;if(typeof c=="function"){var x=c({state:u,name:k,instance:f,options:E}),g=function(){};h.push(x||g)}})}function y(){h.forEach(function(C){return C()}),h=[]}return f}}var zs=[qa,us,Fa,Ci,ls,ss,hs,Ha,ns],Os=xs({defaultModifiers:zs}),Ts="tippy-box",$i="tippy-content",$s="tippy-backdrop",Ei="tippy-arrow",Ii="tippy-svg-arrow",Oe={passive:!0,capture:!0},Si=function(){return document.body};function ir(t,e,r){if(Array.isArray(t)){var i=t[e];return i??(Array.isArray(r)?r[e]:r)}return t}function xr(t,e){var r={}.toString.call(t);return r.indexOf("[object")===0&&r.indexOf(e+"]")>-1}function ji(t,e){return typeof t=="function"?t.apply(void 0,e):t}function Yr(t,e){if(e===0)return t;var r;return function(i){clearTimeout(r),r=setTimeout(function(){t(i)},e)}}function Es(t){return t.split(/\s+/).filter(Boolean)}function Ve(t){return[].concat(t)}function Jr(t,e){t.indexOf(e)===-1&&t.push(e)}function Is(t){return t.filter(function(e,r){return t.indexOf(e)===r})}function Ss(t){return t.split("-")[0]}function Rt(t){return[].slice.call(t)}function Qr(t){return Object.keys(t).reduce(function(e,r){return t[r]!==void 0&&(e[r]=t[r]),e},{})}function st(){return document.createElement("div")}function Gt(t){return["Element","Fragment"].some(function(e){return xr(t,e)})}function js(t){return xr(t,"NodeList")}function Bs(t){return xr(t,"MouseEvent")}function _s(t){return!!(t&&t._tippy&&t._tippy.reference===t)}function Ps(t){return Gt(t)?[t]:js(t)?Rt(t):Array.isArray(t)?t:Rt(document.querySelectorAll(t))}function ar(t,e){t.forEach(function(r){r&&(r.style.transitionDuration=e+"ms")})}function Zr(t,e){t.forEach(function(r){r&&r.setAttribute("data-state",e)})}function Ls(t){var e,r=Ve(t),i=r[0];return i!=null&&(e=i.ownerDocument)!=null&&e.body?i.ownerDocument:document}function Ds(t,e){var r=e.clientX,i=e.clientY;return t.every(function(a){var s=a.popperRect,o=a.popperState,d=a.props,n=d.interactiveBorder,p=Ss(o.placement),u=o.modifiersData.offset;if(!u)return!0;var h=p==="bottom"?u.top.y:0,m=p==="top"?u.bottom.y:0,f=p==="right"?u.left.x:0,b=p==="left"?u.right.x:0,y=s.top-i+h>n,C=i-s.bottom-m>n,k=s.left-r+f>n,z=r-s.right-b>n;return y||C||k||z})}function sr(t,e,r){var i=e+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(a){t[i](a,r)})}function ei(t,e){for(var r=e;r;){var i;if(t.contains(r))return!0;r=r.getRootNode==null||(i=r.getRootNode())==null?void 0:i.host}return!1}var ae={isTouch:!1},ti=0;function Ns(){ae.isTouch||(ae.isTouch=!0,window.performance&&document.addEventListener("mousemove",Bi))}function Bi(){var t=performance.now();t-ti<20&&(ae.isTouch=!1,document.removeEventListener("mousemove",Bi)),ti=t}function Ms(){var t=document.activeElement;if(_s(t)){var e=t._tippy;t.blur&&!e.state.isVisible&&t.blur()}}function Rs(){document.addEventListener("touchstart",Ns,Oe),window.addEventListener("blur",Ms)}var Vs=typeof window<"u"&&typeof document<"u",Hs=Vs?!!window.msCrypto:!1,Ws={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Us={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},ee=Object.assign({appendTo:Si,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Ws,Us),Gs=Object.keys(ee),Fs=function(e){var r=Object.keys(e);r.forEach(function(i){ee[i]=e[i]})};function _i(t){var e=t.plugins||[],r=e.reduce(function(i,a){var s=a.name,o=a.defaultValue;if(s){var d;i[s]=t[s]!==void 0?t[s]:(d=ee[s])!=null?d:o}return i},{});return Object.assign({},t,r)}function Xs(t,e){var r=e?Object.keys(_i(Object.assign({},ee,{plugins:e}))):Gs,i=r.reduce(function(a,s){var o=(t.getAttribute("data-tippy-"+s)||"").trim();if(!o)return a;if(s==="content")a[s]=o;else try{a[s]=JSON.parse(o)}catch{a[s]=o}return a},{});return i}function ri(t,e){var r=Object.assign({},e,{content:ji(e.content,[t])},e.ignoreAttributes?{}:Xs(t,e.plugins));return r.aria=Object.assign({},ee.aria,r.aria),r.aria={expanded:r.aria.expanded==="auto"?e.interactive:r.aria.expanded,content:r.aria.content==="auto"?e.interactive?null:"describedby":r.aria.content},r}var qs=function(){return"innerHTML"};function pr(t,e){t[qs()]=e}function ii(t){var e=st();return t===!0?e.className=Ei:(e.className=Ii,Gt(t)?e.appendChild(t):pr(e,t)),e}function ai(t,e){Gt(e.content)?(pr(t,""),t.appendChild(e.content)):typeof e.content!="function"&&(e.allowHTML?pr(t,e.content):t.textContent=e.content)}function ur(t){var e=t.firstElementChild,r=Rt(e.children);return{box:e,content:r.find(function(i){return i.classList.contains($i)}),arrow:r.find(function(i){return i.classList.contains(Ei)||i.classList.contains(Ii)}),backdrop:r.find(function(i){return i.classList.contains($s)})}}function Pi(t){var e=st(),r=st();r.className=Ts,r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1");var i=st();i.className=$i,i.setAttribute("data-state","hidden"),ai(i,t.props),e.appendChild(r),r.appendChild(i),a(t.props,t.props);function a(s,o){var d=ur(e),n=d.box,p=d.content,u=d.arrow;o.theme?n.setAttribute("data-theme",o.theme):n.removeAttribute("data-theme"),typeof o.animation=="string"?n.setAttribute("data-animation",o.animation):n.removeAttribute("data-animation"),o.inertia?n.setAttribute("data-inertia",""):n.removeAttribute("data-inertia"),n.style.maxWidth=typeof o.maxWidth=="number"?o.maxWidth+"px":o.maxWidth,o.role?n.setAttribute("role",o.role):n.removeAttribute("role"),(s.content!==o.content||s.allowHTML!==o.allowHTML)&&ai(p,t.props),o.arrow?u?s.arrow!==o.arrow&&(n.removeChild(u),n.appendChild(ii(o.arrow))):n.appendChild(ii(o.arrow)):u&&n.removeChild(u)}return{popper:e,onUpdate:a}}Pi.$$tippy=!0;var Ks=1,It=[],or=[];function Ys(t,e){var r=ri(t,Object.assign({},ee,_i(Qr(e)))),i,a,s,o=!1,d=!1,n=!1,p=!1,u,h,m,f=[],b=Yr(yt,r.interactiveDebounce),y,C=Ks++,k=null,z=Is(r.plugins),E={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},c={id:C,reference:t,popper:st(),popperInstance:k,props:r,state:E,plugins:z,clearDelayTimeouts:xt,setProps:zt,setContent:Ot,show:Di,hide:Ni,hideWithInteractivity:Mi,enable:Ze,disable:At,unmount:Ri,destroy:Vi};if(!r.render)return c;var x=r.render(c),g=x.popper,T=x.onUpdate;g.setAttribute("data-tippy-root",""),g.id="tippy-"+c.id,c.popper=g,t._tippy=c,g._tippy=c;var _=z.map(function(l){return l.fn(c)}),B=t.hasAttribute("aria-expanded");return De(),re(),R(),N("onCreate",[c]),r.showOnCreate&&Qe(),g.addEventListener("mouseenter",function(){c.props.interactive&&c.state.isVisible&&c.clearDelayTimeouts()}),g.addEventListener("mouseleave",function(){c.props.interactive&&c.props.trigger.indexOf("mouseenter")>=0&&G().addEventListener("mousemove",b)}),c;function S(){var l=c.props.touch;return Array.isArray(l)?l:[l,0]}function P(){return S()[0]==="hold"}function j(){var l;return!!((l=c.props.render)!=null&&l.$$tippy)}function I(){return y||t}function G(){var l=I().parentNode;return l?Ls(l):document}function F(){return ur(g)}function M(l){return c.state.isMounted&&!c.state.isVisible||ae.isTouch||u&&u.type==="focus"?0:ir(c.props.delay,l?0:1,ee.delay)}function R(l){l===void 0&&(l=!1),g.style.pointerEvents=c.props.interactive&&!l?"":"none",g.style.zIndex=""+c.props.zIndex}function N(l,v,w){if(w===void 0&&(w=!0),_.forEach(function(A){A[l]&&A[l].apply(A,v)}),w){var O;(O=c.props)[l].apply(O,v)}}function te(){var l=c.props.aria;if(l.content){var v="aria-"+l.content,w=g.id,O=Ve(c.props.triggerTarget||t);O.forEach(function(A){var V=A.getAttribute(v);if(c.state.isVisible)A.setAttribute(v,V?V+" "+w:w);else{var q=V&&V.replace(w,"").trim();q?A.setAttribute(v,q):A.removeAttribute(v)}})}}function re(){if(!(B||!c.props.aria.expanded)){var l=Ve(c.props.triggerTarget||t);l.forEach(function(v){c.props.interactive?v.setAttribute("aria-expanded",c.state.isVisible&&v===I()?"true":"false"):v.removeAttribute("aria-expanded")})}}function Ce(){G().removeEventListener("mousemove",b),It=It.filter(function(l){return l!==b})}function ie(l){if(!(ae.isTouch&&(n||l.type==="mousedown"))){var v=l.composedPath&&l.composedPath()[0]||l.target;if(!(c.props.interactive&&ei(g,v))){if(Ve(c.props.triggerTarget||t).some(function(w){return ei(w,v)})){if(ae.isTouch||c.state.isVisible&&c.props.trigger.indexOf("click")>=0)return}else N("onClickOutside",[c,l]);c.props.hideOnClick===!0&&(c.clearDelayTimeouts(),c.hide(),d=!0,setTimeout(function(){d=!1}),c.state.isMounted||le())}}}function we(){n=!0}function de(){n=!1}function Z(){var l=G();l.addEventListener("mousedown",ie,!0),l.addEventListener("touchend",ie,Oe),l.addEventListener("touchstart",de,Oe),l.addEventListener("touchmove",we,Oe)}function le(){var l=G();l.removeEventListener("mousedown",ie,!0),l.removeEventListener("touchend",ie,Oe),l.removeEventListener("touchstart",de,Oe),l.removeEventListener("touchmove",we,Oe)}function Pe(l,v){Le(l,function(){!c.state.isVisible&&g.parentNode&&g.parentNode.contains(g)&&v()})}function pe(l,v){Le(l,v)}function Le(l,v){var w=F().box;function O(A){A.target===w&&(sr(w,"remove",O),v())}if(l===0)return v();sr(w,"remove",h),sr(w,"add",O),h=O}function be(l,v,w){w===void 0&&(w=!1);var O=Ve(c.props.triggerTarget||t);O.forEach(function(A){A.addEventListener(l,v,w),f.push({node:A,eventType:l,handler:v,options:w})})}function De(){P()&&(be("touchstart",Ke,{passive:!0}),be("touchend",Ct,{passive:!0})),Es(c.props.trigger).forEach(function(l){if(l!=="manual")switch(be(l,Ke),l){case"mouseenter":be("mouseleave",Ct);break;case"focus":be(Hs?"focusout":"blur",Ye);break;case"focusin":be("focusout",Ye);break}})}function gt(){f.forEach(function(l){var v=l.node,w=l.eventType,O=l.handler,A=l.options;v.removeEventListener(w,O,A)}),f=[]}function Ke(l){var v,w=!1;if(!(!c.state.isEnabled||Je(l)||d)){var O=((v=u)==null?void 0:v.type)==="focus";u=l,y=l.currentTarget,re(),!c.state.isVisible&&Bs(l)&&It.forEach(function(A){return A(l)}),l.type==="click"&&(c.props.trigger.indexOf("mouseenter")<0||o)&&c.props.hideOnClick!==!1&&c.state.isVisible?w=!0:Qe(l),l.type==="click"&&(o=!w),w&&!O&&ke(l)}}function yt(l){var v=l.target,w=I().contains(v)||g.contains(v);if(!(l.type==="mousemove"&&w)){var O=ge().concat(g).map(function(A){var V,q=A._tippy,Ne=(V=q.popperInstance)==null?void 0:V.state;return Ne?{popperRect:A.getBoundingClientRect(),popperState:Ne,props:r}:null}).filter(Boolean);Ds(O,l)&&(Ce(),ke(l))}}function Ct(l){var v=Je(l)||c.props.trigger.indexOf("click")>=0&&o;if(!v){if(c.props.interactive){c.hideWithInteractivity(l);return}ke(l)}}function Ye(l){c.props.trigger.indexOf("focusin")<0&&l.target!==I()||c.props.interactive&&l.relatedTarget&&g.contains(l.relatedTarget)||ke(l)}function Je(l){return ae.isTouch?P()!==l.type.indexOf("touch")>=0:!1}function wt(){kt();var l=c.props,v=l.popperOptions,w=l.placement,O=l.offset,A=l.getReferenceClientRect,V=l.moveTransition,q=j()?ur(g).arrow:null,Ne=A?{getBoundingClientRect:A,contextElement:A.contextElement||I()}:t,Or={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(Tt){var Me=Tt.state;if(j()){var Hi=F(),qt=Hi.box;["placement","reference-hidden","escaped"].forEach(function($t){$t==="placement"?qt.setAttribute("data-placement",Me.placement):Me.attributes.popper["data-popper-"+$t]?qt.setAttribute("data-"+$t,""):qt.removeAttribute("data-"+$t)}),Me.attributes.popper={}}}},Ae=[{name:"offset",options:{offset:O}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!V}},Or];j()&&q&&Ae.push({name:"arrow",options:{element:q,padding:3}}),Ae.push.apply(Ae,(v==null?void 0:v.modifiers)||[]),c.popperInstance=Os(Ne,g,Object.assign({},v,{placement:w,onFirstUpdate:m,modifiers:Ae}))}function kt(){c.popperInstance&&(c.popperInstance.destroy(),c.popperInstance=null)}function ue(){var l=c.props.appendTo,v,w=I();c.props.interactive&&l===Si||l==="parent"?v=w.parentNode:v=ji(l,[w]),v.contains(g)||v.appendChild(g),c.state.isMounted=!0,wt()}function ge(){return Rt(g.querySelectorAll("[data-tippy-root]"))}function Qe(l){c.clearDelayTimeouts(),l&&N("onTrigger",[c,l]),Z();var v=M(!0),w=S(),O=w[0],A=w[1];ae.isTouch&&O==="hold"&&A&&(v=A),v?i=setTimeout(function(){c.show()},v):c.show()}function ke(l){if(c.clearDelayTimeouts(),N("onUntrigger",[c,l]),!c.state.isVisible){le();return}if(!(c.props.trigger.indexOf("mouseenter")>=0&&c.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(l.type)>=0&&o)){var v=M(!1);v?a=setTimeout(function(){c.state.isVisible&&c.hide()},v):s=requestAnimationFrame(function(){c.hide()})}}function Ze(){c.state.isEnabled=!0}function At(){c.hide(),c.state.isEnabled=!1}function xt(){clearTimeout(i),clearTimeout(a),cancelAnimationFrame(s)}function zt(l){if(!c.state.isDestroyed){N("onBeforeUpdate",[c,l]),gt();var v=c.props,w=ri(t,Object.assign({},v,Qr(l),{ignoreAttributes:!0}));c.props=w,De(),v.interactiveDebounce!==w.interactiveDebounce&&(Ce(),b=Yr(yt,w.interactiveDebounce)),v.triggerTarget&&!w.triggerTarget?Ve(v.triggerTarget).forEach(function(O){O.removeAttribute("aria-expanded")}):w.triggerTarget&&t.removeAttribute("aria-expanded"),re(),R(),T&&T(v,w),c.popperInstance&&(wt(),ge().forEach(function(O){requestAnimationFrame(O._tippy.popperInstance.forceUpdate)})),N("onAfterUpdate",[c,l])}}function Ot(l){c.setProps({content:l})}function Di(){var l=c.state.isVisible,v=c.state.isDestroyed,w=!c.state.isEnabled,O=ae.isTouch&&!c.props.touch,A=ir(c.props.duration,0,ee.duration);if(!(l||v||w||O)&&!I().hasAttribute("disabled")&&(N("onShow",[c],!1),c.props.onShow(c)!==!1)){if(c.state.isVisible=!0,j()&&(g.style.visibility="visible"),R(),Z(),c.state.isMounted||(g.style.transition="none"),j()){var V=F(),q=V.box,Ne=V.content;ar([q,Ne],0)}m=function(){var Ae;if(!(!c.state.isVisible||p)){if(p=!0,g.offsetHeight,g.style.transition=c.props.moveTransition,j()&&c.props.animation){var Xt=F(),Tt=Xt.box,Me=Xt.content;ar([Tt,Me],A),Zr([Tt,Me],"visible")}te(),re(),Jr(or,c),(Ae=c.popperInstance)==null||Ae.forceUpdate(),N("onMount",[c]),c.props.animation&&j()&&pe(A,function(){c.state.isShown=!0,N("onShown",[c])})}},ue()}}function Ni(){var l=!c.state.isVisible,v=c.state.isDestroyed,w=!c.state.isEnabled,O=ir(c.props.duration,1,ee.duration);if(!(l||v||w)&&(N("onHide",[c],!1),c.props.onHide(c)!==!1)){if(c.state.isVisible=!1,c.state.isShown=!1,p=!1,o=!1,j()&&(g.style.visibility="hidden"),Ce(),le(),R(!0),j()){var A=F(),V=A.box,q=A.content;c.props.animation&&(ar([V,q],O),Zr([V,q],"hidden"))}te(),re(),c.props.animation?j()&&Pe(O,c.unmount):c.unmount()}}function Mi(l){G().addEventListener("mousemove",b),Jr(It,b),b(l)}function Ri(){c.state.isVisible&&c.hide(),c.state.isMounted&&(kt(),ge().forEach(function(l){l._tippy.unmount()}),g.parentNode&&g.parentNode.removeChild(g),or=or.filter(function(l){return l!==c}),c.state.isMounted=!1,N("onHidden",[c]))}function Vi(){c.state.isDestroyed||(c.clearDelayTimeouts(),c.unmount(),gt(),delete t._tippy,c.state.isDestroyed=!0,N("onDestroy",[c]))}}function bt(t,e){e===void 0&&(e={});var r=ee.plugins.concat(e.plugins||[]);Rs();var i=Object.assign({},e,{plugins:r}),a=Ps(t),s=a.reduce(function(o,d){var n=d&&Ys(d,i);return n&&o.push(n),o},[]);return Gt(t)?s[0]:s}bt.defaultProps=ee;bt.setDefaultProps=Fs;bt.currentInput=ae;Object.assign({},Ci,{effect:function(e){var r=e.state,i={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(r.elements.popper.style,i.popper),r.styles=i,r.elements.arrow&&Object.assign(r.elements.arrow.style,i.arrow)}});bt.setDefaultProps({render:Pi});var Js=Object.defineProperty,Qs=Object.getOwnPropertyDescriptor,Be=(t,e,r,i)=>{for(var a=i>1?void 0:i?Qs(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=(i?o(e,r,a):o(a))||a);return i&&a&&Js(e,r,a),a};let he=class extends H{constructor(){super(...arguments),this.activePage="/",this.isNavOpen=!1}_handleRoute(t){t.preventDefault(),t.target&&se.go(t.target.pathname,location.pathname)}connectedCallback(){super.connectedCallback(),window.addEventListener("ck-cart-change",()=>{let t=0;for(let e in window.app.store.cart)t+=window.app.store.cart[e];t>0?(this.cartCount.innerText=t,this.cartCount.classList.remove("hidden")):this.cartCount.classList.add("hidden")})}handleNavToggle(){const t=this.primaryNav,e=this.navToggle;if(!t||!e)return;t.dataset.visible==="false"?(t.dataset.visible="true",this.isNavOpen=!0,e.setAttribute("aria-expanded","true")):(t.dataset.visible="false",this.isNavOpen=!1,e.setAttribute("aria-expanded","false"))}handleSpecialRoute(t){t.target&&(t.target.classList.contains("ck-cart")?Object.keys(window.app.store.cart).length>0&&window.dispatchEvent(new Event("ck-cart-toggle")):t.target.classList.contains("ck-user")?se.go("/user",location.pathname):(t.preventDefault(),se.go("/",location.pathname)))}handleTooltip(t){t.target&&bt(t.target,{content:"Frontend Concept Only",arrow:!0})}render(){return L`
        <header class="header flex color-white">
            <div class="logo">
                <a class="no-border" href="/">
                    <img class="logo-img"
                         src=${wa}
                         alt="LOGO">
                </a>
            </div>
            <div @click=${this.handleNavToggle} class="mobile-nav-toggle" aria-expanded="false"
                 aria-controls="primary-navigation">
                ${this.isNavOpen?L`
                    <ion-icon name="close-outline"></ion-icon>`:L`
                    <ion-icon name="menu-outline"></ion-icon>`}
                <span class="sr-only">Menu</span>
            </div>
            <nav>
                <div data-visible="false" class="flex">
                    <ul id="primary-navigation" class="primary-navigation flex">
                        <li><a @click=${this._handleRoute} class="nlink" href="/">Home</a></li>
                        <li><a @click=${this._handleRoute} class="nlink" href="/catalog">Catalog</a></li>
                    </ul>
                    <ul class="user-actions flex">
                        <li @mouseover=${this.handleTooltip} class="ck-user">
                            <ion-icon name="person-outline"></ion-icon>
                        </li>
                        <li @click=${this.handleSpecialRoute} class="ck-cart">
                            <span class="ck-cart-count"></span>
                            <ion-icon name="cart-outline"></ion-icon>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    `}};he.styles=[$`
        html {
          box-sizing: border-box;
        }

        *, *::after, *::before {
          margin: 0;
          padding: 0;
          border: 0;
          font-family: inherit;
          box-sizing: inherit;
        }

        ul, ol {
          list-style: none;
        }

        a {
          text-decoration: none;
          color: inherit
        }

        a:hover {
          border-bottom: 2px solid;
        }

        path, i, svg {
          pointer-events: none;
        }

        button, select {
          padding: 0.2em 1em;
          border: 2px solid black;
          cursor: pointer;
          border-radius: 5px;
        }

        body {
          font-family: 'Alegreya Sans', sans-serif;

        }

        header {
          align-items: center;
          justify-content: space-between;
          position: fixed;
          width: 100%;
          z-index: 1000;
          height: 86px;
          padding: 0 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }

        .logo {
          margin: 1rem;
          width: 2rem;
        }

        .logo-img {
          width: 100%;
          object-fit: cover;
        }

        .primary-navigation {
          flex-grow: 1;
          padding-block: 2rem;
          padding-inline: clamp(3rem, 8vw, 10rem);
          height: 86px;
        }


        .user-actions {
          flex-grow: 0.2;
          font-size: 1.5rem /* 24/16 */;
          //background: hsl(0, 0%, 100%, 0.1);
          //backdrop-filter: blur(1rem);
          align-items: center;
        }


        .user-actions > li {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .flex {
          display: flex;
          gap: 1rem;
        }

        nav {
          flex-grow: 1;
        }

        .nlink {
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 400;
          font-size: 1rem;
        }

        .nlink > span {
          font-weight: 400;
          margin-inline-end: 0.5em;
        }

        .mobile-nav-toggle {
          display: none;
        }


        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }

        ion-icon {
          pointer-events: none;
        }


        @media (max-width: 37em) {
          .primary-navigation {
            position: fixed;
            inset: 0 0 0 100%;
            gap: 2em;
            width: 14rem;
            flex-direction: column;
            padding: min(20vh, 10rem) 2rem;
            z-index: 1000;
            transition: all ease-in-out 0.3s;
            background: hsl(0, 0%, 100%, 0.1);
            backdrop-filter: blur(1rem);
          }

          .primary-navigation[data-visible='true'] {
            transform: translateX(-100%);
          }

          .mobile-nav-toggle {
            display: block;
            z-index: 9999;
            position: absolute;
            font-size: 1.5rem;
            padding: 0;
            top: 2rem;
            right: 2rem;
            border: none;
            cursor: pointer;
          }
        }

        .active {
          color: var(--my-selected-orange);
          border-bottom: 2px solid;
        }

        .no-border, .no-border:hover {
          border: none;
        }

        .color-black {
          color: black;
        }
      `,$`

        .ck-cart {
          position: relative;
        }

        .ck-cart-count {
          position: absolute;
          top: -10px;
          left: 15px;
          background: var(--my-red);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
          height: 20px;
          width: 20px;
          z-index: 10;
          font-size: 1rem;
          pointer-events: none;
        }

        .hidden {
          display: none;
        }

      `];Be([Ht(".header")],he.prototype,"header",2);Be([Ht("#primary-navigation")],he.prototype,"primaryNav",2);Be([Ht(".mobile-nav-toggle")],he.prototype,"navToggle",2);Be([Ht(".ck-cart-count")],he.prototype,"cartCount",2);Be([Q({reflect:!0,attribute:"activepage"})],he.prototype,"activePage",2);Be([mt()],he.prototype,"isNavOpen",2);he=Be([ce("ck-nav-menu")],he);var Zs=Object.defineProperty,eo=Object.getOwnPropertyDescriptor,Li=(t,e,r,i)=>{for(var a=i>1?void 0:i?eo(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=(i?o(e,r,a):o(a))||a);return i&&a&&Zs(e,r,a),a};let Vt=class extends H{connectedCallback(){super.connectedCallback(),window.addEventListener("ck-cart-change",()=>{this.requestUpdate()}),window.addEventListener("ck-cart-toggle",()=>{this.classList.toggle("show")}),window.addEventListener("ck-cart-empty",()=>{this.classList.remove("show")})}willUpdate(t){super.willUpdate(t),this.data=window.app.store.cart}increment(t){const e=t.target.getAttribute("key");Object.keys(window.app.store.cart).includes(e)?window.app.store.cart={...window.app.store.cart,[e]:window.app.store.cart[e]+1}:window.app.store.cart={...window.app.store.cart,[e]:1}}checkout(){this.classList.toggle("show"),se.go("/checkout",location.pathname)}decrement(t){const e=t.target.getAttribute("key");Object.keys(window.app.store.cart).includes(e)?window.app.store.cart={...window.app.store.cart,[e]:window.app.store.cart[e]-1}:window.app.store.cart={...window.app.store.cart,[e]:1},window.app.store.cart[e]===0&&(delete window.app.store.cart[e],window.app.store.cart={...window.app.store.cart})}closeCart(){this.classList.toggle("show")}trash(t){const e=t.target.getAttribute("key");delete window.app.store.cart[e],window.app.store.cart={...window.app.store.cart}}render(){const t=window.app.store.menus,e=window.app.store.cart,r=Object.keys(e),i=s=>t[0].children[s[0]].children[s[1]].products[s[2]],a=r.reduce((s,o)=>(s+=i(o).price*e[o],s),0);return L`
        <div @click=${this.closeCart} class="cart-overlay"></div>
        <div class="cart">
            <h2 class="cart-heading">CART</h2>
            <div class="cart-main">

                ${Wt(r,s=>s,s=>L`
                        <div class="cart-item">
                            <div class="cart-img">
                                <img src=${i(s).assets.masterImage.uri}
                                     alt="">
                            </div>
                            <div class="cart-content">
                                <div class="cart-l-data">
                                    <span class="item-name">${i(s).name}</span>
                                    <div class="counter">
                                        <button key=${s} @click=${this.decrement} class="counter-btn">
                                            <ion-icon name="remove-circle-outline"></ion-icon>
                                        </button>
                                        <div class="counter-count">${e[s]}</div>
                                        <button key=${s} @click=${this.increment} class="counter-btn">
                                            <ion-icon name="add-circle-outline"></ion-icon>
                                        </button>
                                    </div>
                                </div>
                                <div class="cart-r-data">
                                    <div key=${s} @click=${this.trash} class="trash">
                                        <ion-icon name="trash-outline"></ion-icon>
                                    </div>
                                    <div class="sub-price">${e[s]*i(s).price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `)}
            </div>
            <div class="cart-bottom">
                <div @click=${this.checkout} class="checkout-btn btn">CHECKOUT <span><ion-icon
                        name="card-outline"></ion-icon></span></div>
                <div class="checkout-price">${a}</div>
            </div>

        </div>
    `}};Vt.styles=[$`
      html {
        box-sizing: border-box;
      }

      *, *::after, *::before {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: inherit;
        box-sizing: inherit;
      }

      ul, ol {
        list-style: none;
      }

      a {
        text-decoration: none;
        color: inherit
      }

      a:hover {
        border-bottom: 2px solid;
      }

      path, i, svg {
        pointer-events: none;
      }
      

      body {
        font-family: 'Alegreya Sans', sans-serif;
      }
    `,$`
      :host {
        position: absolute;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100%;
        z-index: 9999;
        display: flex;
        transition: transform 0.4s ease-in-out;
      }

      :host(.show) {
        transform: translateX(-100%);
      }

      .cart-overlay {
        flex-grow: 1;
        background: #f6f6f6;
        opacity: 0.4;
      }

      .cart {
        background: #f6f6f6;
        flex-shrink: 0;
        padding: 1rem;
        width: 30vw;
        display: flex;
        flex-direction: column;
        gap: 1em;
      }

      .cart-main {
        overflow-x: hidden;
        overflow-y: scroll;
        max-height: 85%;
      }

      .cart-heading {
        font-size: 2rem;
        flex-basis: 5%;
      }

      .item-name {
        font-weight: 500;
      }

      .cart-item {
        display: flex;
        justify-content: center;
        padding: 0.5rem 0;
      }

      .cart-img {
        width: 100px;
        aspect-ratio: 1 / 1;
        flex-shrink: 0;
      }

      .cart-img img {
        height: 100%;
        width: 100%;
        display: block;
        object-fit: cover;
      }

      .cart-content {
        display: flex;
        flex-grow: 1;
        justify-content: left;
        margin: 0 1rem;
        padding: 0.625rem 0;
      }

      .counter {
        display: flex;
        align-items: center;
        gap: 1em;
        text-align: center;
      }

      .counter > button {
        border-radius: 100%;
        background: transparent;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      .counter > div {
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      ion-icon {
        pointer-events: none;
      }

      .cart-l-data, .cart-r-data {
        flex-basis: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .cart-r-data {
        flex-basis: 40%;
        align-items: flex-end;
        font-size: 1.625rem;
      }

      .cart-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
      }

      .checkout-btn {
        display: inline-flex;
        padding: 0.625rem 2.5rem;
        background: var(--my-red);
        font-size: 1rem;
        align-items: center;
        flex-basis: 10%;
        cursor: pointer;
        transform: scale(1);
        will-change: transform;
        transition: all 0.2s ease-in-out;
      }

      .checkout-btn:hover {
        transform: scale(1.05);
      }

      .checkout-btn:active {
        transform: scale(1);
      }

      .checkout-btn span {
        display: inline-grid;
        place-items: center;
        font-size: 1rem;
        margin-left: 0.625rem;
      }

      .checkout-price {
        font-size: 2rem;
        color: var(--my-blush);
        font-weight: bolder;
        vertical-align: center;
      }


    `,$`
      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
      }

      ::-webkit-scrollbar-thumb {
        background: #1f3933;
        border: 1px solid #ffffff;
        border-radius: 0px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #000000;
      }

      ::-webkit-scrollbar-thumb:active {
        background: #1f3933;
      }

      ::-webkit-scrollbar-track {
        background: #f6eee1;
        border: 0px none #ffffff;
        border-radius: 43px;
      }

      ::-webkit-scrollbar-track:hover {
        background: #f6eee1;
      }

      ::-webkit-scrollbar-track:active {
        background: #f6eee1;
      }

      ::-webkit-scrollbar-corner {
        background: transparent;
      }
    `];Li([mt()],Vt.prototype,"data",2);Vt=Li([ce("ck-cart")],Vt);var to=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,io=(t,e,r,i)=>{for(var a=i>1?void 0:i?ro(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=(i?o(e,r,a):o(a))||a);return i&&a&&to(e,r,a),a};let fr=class extends H{render(){return L`
        <aside class="side-menu">
            <ul>
                ${Wt(window.app.store.menus[0].children,t=>t.id,(t,e)=>L`
                        <ck-side-menu-category cat-id=${e}></ck-side-menu-category>
                    `)}
            </ul>
        </aside>
    `}};fr.styles=[$`
      html {
        box-sizing: border-box;
        scroll-behavior: smooth;
      }

      *, *::after, *::before {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: inherit;
        box-sizing: inherit;
      }

      ul, ol {
        list-style: none;
      }

      a {
        text-decoration: none;
        color: inherit
      }

      a:hover {
        border-bottom: 2px solid;
      }

      path, i, svg {
        pointer-events: none;
      }

      button, select {
        padding: 0.2em 1em;
        border: 2px solid black;
        cursor: pointer;
        border-radius: 5px;
      }

      body {
        font-family: 'Alegreya Sans', sans-serif;
      }
    `,$`
      :host {
        flex-basis: 20%;
        flex-shrink: 0;
      }

      ul {
        padding-top: 2rem;
        font-size: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1em;
      }

      .side-menu {
        overflow-y: scroll;
        //height: calc(100vh - 83.200px);
        height: 100%;
      }
    `,$`
      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
      ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
      }
      ::-webkit-scrollbar-thumb {
        background: #1f3933;
        border: 1px solid #ffffff;
        border-radius: 0px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #000000;
      }
      ::-webkit-scrollbar-thumb:active {
        background: #1f3933;
      }
      ::-webkit-scrollbar-track {
        background: #f6eee1;
        border: 0px none #ffffff;
        border-radius: 43px;
      }
      ::-webkit-scrollbar-track:hover {
        background: #f6eee1;
      }
      ::-webkit-scrollbar-track:active {
        background: #f6eee1;
      }
      ::-webkit-scrollbar-corner {
        background: transparent;
      }
    `];fr=io([ce("ck-side-menu")],fr);var ao=Object.defineProperty,so=Object.getOwnPropertyDescriptor,Ft=(t,e,r,i)=>{for(var a=i>1?void 0:i?so(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=(i?o(e,r,a):o(a))||a);return i&&a&&ao(e,r,a),a};let Xe=class extends H{constructor(){super(...arguments),this.isOpen=!1}toggleCategory(){this.isOpen=!this.isOpen}connectedCallback(){super.connectedCallback(),this.isOpen=this.catId==="0"}handleSubCatClick(t){t.stopPropagation();const e=document.querySelector("ck-catalog");if(!e||!e.shadowRoot)return;const r=e.shadowRoot.querySelector("ck-catalog-content");if(!r)return;const i=e.shadowRoot.querySelector("ck-side-menu");if(!i)return;r.setAttribute("cat-id",this.catId),r.setAttribute("sub-cat-id",t.target.getAttribute("cat-sub-id")),i.shadowRoot.querySelectorAll("ck-side-menu-category").forEach(s=>{s.shadowRoot.querySelectorAll(".category-sub-cat li").forEach(d=>{d.classList.remove("active")})}),t.target.classList.add("active")}render(){const t=window.app.store.menus[0].children[this.catId];return L`
        <li class="category-name">
            <div class="name-content">
                <span @click=${this.toggleCategory}>${t.name}</span>
                <span class="toggle-icon">
                ${this.isOpen?L`
                    <ion-icon name="chevron-down-outline"></ion-icon>`:L`
                    <ion-icon name='chevron-forward-outline'></ion-icon>`}
            </span>
            </div>
            <ul class="category-sub-cat ${this.isOpen?"":"hidden"}">
                ${t.children.map((e,r)=>L`
                        <li class=${this.catId==="0"&&r===0?"active":""}
                            @click=${this.handleSubCatClick} cat-id=${this.catId} cat-sub-id=${r}><span
                                class="sub-text">${e.name}</span>
                        </li>
                    `)}
            </ul>
        </li>
    `}};Xe.styles=[$`
      html {
        box-sizing: border-box;
        scroll-behavior: smooth;
      }

      *, *::after, *::before {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: inherit;
        box-sizing: inherit;
      }

      ul, ol {
        list-style: none;
      }

      a {
        text-decoration: none;
        color: inherit
      }

      a:hover {
        border-bottom: 2px solid;
      }

      path, i, svg {
        pointer-events: none;
      }

      button, select {
        padding: 0.2em 1em;
        border: 2px solid black;
        cursor: pointer;
        border-radius: 5px;
      }

      body {
        font-family: 'Alegreya Sans', sans-serif;
      }
    `,$`
      .category-sub-cat {
        padding-left: 1rem;
        font-size: 1.3rem;
      }

      .category-sub-cat li.active {
        color: var(--my-selected-orange);
      }

      .name-content {
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }

      .category-name div span:hover {
        cursor: pointer;
      }

      .category-sub-cat li:hover {
        cursor: pointer;
      }


      .sub-text {
        pointer-events: none;
      }

      .hidden {
        display: none;
      }

      .toggle-icon, ion-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
    `];Ft([Q({reflect:!0,attribute:"cat-id"})],Xe.prototype,"catId",2);Ft([Q({reflect:!0,attribute:"cat-sub-id"})],Xe.prototype,"catSubId",2);Ft([mt()],Xe.prototype,"isOpen",2);Xe=Ft([ce("ck-side-menu-category")],Xe);var oo=Object.defineProperty,no=Object.getOwnPropertyDescriptor,zr=(t,e,r,i)=>{for(var a=i>1?void 0:i?no(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=(i?o(e,r,a):o(a))||a);return i&&a&&oo(e,r,a),a};let ut=class extends H{constructor(){super(...arguments),this.catId="0",this.subCatId="0"}render(){const t=window.app.store.menus[0].children[this.catId].children[this.subCatId];return L`
        <div class="catalog-content">
            ${Wt(t.products,e=>e.productNumber,(e,r)=>L`
                    <ck-content-card catid=${this.catId} id=${e.productNumber} subcatid=${this.subCatId}
                                     productid=${r}></ck-content-card>
                `)}
        </div>
    `}};ut.styles=[$`
      html {
        box-sizing: border-box;
        scroll-behavior: smooth;
      }

      *, *::after, *::before {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: inherit;
        box-sizing: inherit;
      }

      ul, ol {
        list-style: none;
      }

      a {
        text-decoration: none;
        color: inherit
      }

      a:hover {
        border-bottom: 2px solid;
      }

      path, i, svg {
        pointer-events: none;
      }

      button, select {
        padding: 0.2em 1em;
        border: 2px solid black;
        cursor: pointer;
        border-radius: 5px;
      }

      body {
        font-family: 'Inter', sans-serif;
      }

    `,$`
      .catalog-content {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;
        padding: 1em;
      }

      @media only screen and (max-width: 1000px) {
        .catalog-content {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media only screen and (max-width: 700px) {
        .catalog-content {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    `];zr([Q({reflect:!0,attribute:"cat-id"})],ut.prototype,"catId",2);zr([Q({reflect:!0,attribute:"sub-cat-id"})],ut.prototype,"subCatId",2);ut=zr([ce("ck-catalog-content")],ut);var co=Object.defineProperty,lo=Object.getOwnPropertyDescriptor,_e=(t,e,r,i)=>{for(var a=i>1?void 0:i?lo(e,r):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=(i?o(e,r,a):o(a))||a);return i&&a&&co(e,r,a),a};let ve=class extends H{constructor(){super(...arguments),this._count=0}giveKey(t){if(!t.target)return;const e=t.target.getAttribute("catid"),r=t.target.getAttribute("subcatid"),i=t.target.getAttribute("productId");return""+e+r+i}increment(t){if(!t.target)return;this._count=this._count+1;let e=this.giveKey(t);e&&(Object.keys(window.app.store.cart).includes(e)?window.app.store.cart={...window.app.store.cart,[e]:window.app.store.cart[e]+1}:window.app.store.cart={...window.app.store.cart,[e]:1})}decrement(t){let e=this.giveKey(t);e&&this._count>0&&(this._count=this._count-1,Object.keys(window.app.store.cart).includes(e)?window.app.store.cart={...window.app.store.cart,[e]:window.app.store.cart[e]-1}:window.app.store.cart={...window.app.store.cart,[e]:1},window.app.store.cart[e]===0&&(delete window.app.store.cart[e],window.app.store.cart={...window.app.store.cart}))}connectedCallback(){super.connectedCallback(),window.addEventListener("ck-cart-change",()=>{this.requestUpdate(),this._count=Object.keys(window.app.store.cart).includes(""+this.catId+this.subCatId+this.productId)?window.app.store.cart[""+this.catId+this.subCatId+this.productId]:0}),this._count=Object.keys(window.app.store.cart).includes(""+this.catId+this.subCatId+this.productId)?window.app.store.cart[""+this.catId+this.subCatId+this.productId]:0}willUpdate(t){super.willUpdate(t),this.data=window.app.store.menus[0].children[this.catId].children[this.subCatId].products[this.productId]}render(){return L`
        <div class="card">
            <div class="img-circle"></div>
            <div class="img-wrapper">
                <div class="img-wrapper-inner">
                    <img src=${this.data.assets.masterImage.uri} alt="">
                </div>
            </div>
            <div class="card-content">
                <div class="card-info">
                    <h2 class="product-name">${this.data.name}</h2>
                    <h2 class="product-price">₹ ${this.data.price}</h2>
                </div>
                <div class="counter">
                    <button
                            catid=${this.catId} subcatid=${this.subCatId} productId=${this.productId}
                            @click=${this.decrement} class="counter-btn">
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <!--                        +-->
                    </button>
                    <div class="counter-count">${this._count}</div>
                    <button
                            catid=${this.catId} subcatid=${this.subCatId} productId=${this.productId}
                            @click=${this.increment} class="counter-btn">
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </button>
                    <div>
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    `}};ve.styles=[$`
      html {
        scroll-behavior: smooth;
        box-sizing: border-box;
      }

      *, *::after, *::before {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: inherit;
        box-sizing: inherit;
      }

      ul, ol {
        list-style: none;
      }

      a {
        text-decoration: none;
        color: inherit
      }

      a:hover {
        border-bottom: 2px solid;
      }

      path, i, svg {
        pointer-events: none;
      }


      body {
        font-family: 'Inter', sans-serif;
      }

    `,$`
      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 500px;
        color: black;
        background: white;
        border-radius: 1rem;
        position: relative;
        overflow: hidden;
        max-width: 370px;
        margin: 0 auto;

      }

      .img-circle {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 500px;
        aspect-ratio: 1 / 1;
        background: var(--my-dark-slate-grey);
        border-radius: 100%;
      }

      .img-wrapper {
        border-radius: 1rem 1rem 0 0;
        width: 100%;
        flex-basis: 50%;
        position: relative;
      }

      .img-wrapper-inner {
        overflow: hidden;
        width: 70%;
        position: absolute;
        background-image: url("/public/placeholder.webp");
        top: -10%;
        left: -10%;
        clip-path: circle(50%);
      }

      .img-wrapper.active {
        clip-path: circle(40%);
      }

      img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        object-position: center;
      }

      .card-content {
        flex-basis: 50%;
        //flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem;
      }

      .card-info {
        display: flex;
        gap: 1rem;
        width: 100%;
      }

      .product-name {
        flex-basis: 50%;
        flex-shrink: 0;
        text-align: left;
      }

      .product-price {
        flex-basis: 40%;
        flex-shrink: 0;
        text-align: right;
        color: var(--my-selected-orange);
      }

      .counter {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
      }

      .counter > button {
        border-radius: 100%;
        background: transparent;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      .counter > div {
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      ion-icon {
        pointer-events: none;
      }
    `];_e([Q({reflect:!0})],ve.prototype,"id",2);_e([Q({reflect:!0})],ve.prototype,"productId",2);_e([Q({reflect:!0})],ve.prototype,"catId",2);_e([Q({reflect:!0})],ve.prototype,"subCatId",2);_e([Q({reflect:!0,attribute:"count"})],ve.prototype,"_count",2);_e([mt()],ve.prototype,"data",2);ve=_e([ce("ck-content-card")],ve);const po={menus:[{displayOrder:1,name:"Drinks",products:[],children:[{displayOrder:0,name:"Hot Coffees",products:[],children:[{displayOrder:-1,name:"Americanos",products:[{name:"Caffè Americano",formCode:"Hot",displayOrder:1,productNumber:406,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/406/hot",price:280}],children:[],id:"americanos",uri:"/drinks/hot-coffees/americanos"},{displayOrder:0,name:"Brewed Coffees",products:[{name:"Green Apron Blend™",formCode:"Hot",displayOrder:1,productNumber:873068625,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/2c8f40a3b37648539d74e271479b3f9a.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/873068625/hot",price:300},{name:"Featured Medium Roast - Pike Place® Roast",formCode:"Hot",displayOrder:3,productNumber:480,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/bffaf0f27e124801abcabe09f05b0fb2.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/480/hot",price:245},{name:"Featured Starbucks® Dark Roast Coffee",formCode:"Hot",displayOrder:4,productNumber:479,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/0279f9c5fa5941d2a65dd183d7a0b386.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/479/hot",price:230},{name:"Decaf Pike Place® Roast",formCode:"Hot",displayOrder:5,productNumber:481,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/51bf549cd8e9434da941fec33b820d39.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/481/hot",price:300},{name:"Clover® Starbucks Reserve® Rwanda Sholi",formCode:"Hot",displayOrder:6,productNumber:2123757,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/3B8287229F4F4CBE96FEC155E50A1330.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2123757/hot",price:230},{name:"Clover® Starbucks Reserve® Papua New Guinea Moanti",formCode:"Hot",displayOrder:7,productNumber:2123616,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/F53720F6E2AE412DBD5F1797BB60D84B.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2123616/hot",price:245},{name:"Clover® Starbucks Reserve® Costa Rica Naranjo",formCode:"Hot",displayOrder:8,productNumber:2123277,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/48f8877dfbc841dfa2cdec27508786fa.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2123277/hot",price:245},{name:"Clover® Starbucks Reserve® Ecuador Loja",formCode:"Hot",displayOrder:8,productNumber:2123429,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/f7f88e7cfc6243d39f2259e75c486d1a.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2123429/hot",price:265},{name:"Caffè Misto",formCode:"Hot",displayOrder:9,productNumber:478,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/d668acbc691b47249548a3eeac449916.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/478/hot",price:260}],children:[],id:"brewed-coffees",uri:"/drinks/hot-coffees/brewed-coffees"},{displayOrder:0,name:"Cappuccinos",products:[{name:"Cappuccino",formCode:"Hot",displayOrder:1,productNumber:409,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/409/hot",price:265}],children:[],id:"cappuccinos",uri:"/drinks/hot-coffees/cappuccinos"},{displayOrder:0,name:"Espresso Shots",products:[{name:"Espresso",formCode:"Hot",displayOrder:2,productNumber:410,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg"}},sizes:[{sizeCode:"Single"},{sizeCode:"Double"},{sizeCode:"Triple"},{sizeCode:"Quad"}],uri:"/product/410/hot",price:230},{name:"Espresso Con Panna",formCode:"Hot",displayOrder:3,productNumber:411,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/e9330b18ae524e69bdcbe97460d6f5bb.jpg"}},sizes:[{sizeCode:"Single"},{sizeCode:"Double"},{sizeCode:"Triple"},{sizeCode:"Quad"}],uri:"/product/411/hot",price:235}],children:[],id:"espresso-shots",uri:"/drinks/hot-coffees/espresso-shots"},{displayOrder:0,name:"Flat Whites",products:[{name:"Flat White",formCode:"Hot",displayOrder:1,productNumber:565,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/fedee22e49724cd09fbcc7ee2e567377.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/565/hot",price:200},{name:"Honey Almondmilk Flat White",formCode:"Hot",displayOrder:4,productNumber:2123158,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/77801559b72b469583f4d484adc1bfa7.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2123158/hot",price:265}],children:[],id:"flat-whites",uri:"/drinks/hot-coffees/flat-whites"},{displayOrder:1,name:"Lattes",products:[{name:"Caffè Latte",formCode:"Hot",displayOrder:37,productNumber:407,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/407/hot",price:230},{name:"Cinnamon Dolce Latte",formCode:"Hot",displayOrder:41,productNumber:414,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/284e1571faa748f2889d0b566b71d578.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/414/hot",price:235},{name:"Starbucks Reserve® Latte",formCode:"Hot",displayOrder:41,productNumber:2122614,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/55083489399e435e81cf41d899051a5a.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2122614/hot",price:300},{name:"Starbucks Reserve® Hazelnut Bianco Latte",formCode:"Hot",displayOrder:42,productNumber:2122617,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/049d23aac19047f4b3a40532cc24b510.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2122617/hot",price:235},{name:"Starbucks® Blonde Vanilla Latte",formCode:"Hot",displayOrder:46,productNumber:2122164,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2122164/hot",price:265}],children:[],id:"lattes",uri:"/drinks/hot-coffees/lattes"},{displayOrder:2,name:"Macchiatos",products:[{name:"Caramel Macchiato",formCode:"Hot",displayOrder:8,productNumber:413,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/58db701349cb48738069e8c912e2b3ac.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/413/hot",price:275},{name:"Espresso Macchiato",formCode:"Hot",displayOrder:11,productNumber:412,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/26495f2a8b644fe8960dd74e1891b7b7.jpg"}},sizes:[{sizeCode:"Single"},{sizeCode:"Double"},{sizeCode:"Triple"},{sizeCode:"Quad"}],uri:"/product/412/hot",price:230}],children:[],id:"macchiatos",uri:"/drinks/hot-coffees/macchiatos"},{displayOrder:3,name:"Mochas",products:[{name:"Caffè Mocha",formCode:"Hot",displayOrder:16,productNumber:408,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/915736da018842e788147f7eab73db73.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/408/hot",price:280},{name:"Starbucks Reserve® Dark Chocolate Mocha",formCode:"Hot",displayOrder:22,productNumber:2122615,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/ce6342b5aeea4607a0e866057e3b5a4c.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2122615/hot",price:235},{name:"White Chocolate Mocha",formCode:"Hot",displayOrder:22,productNumber:420,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/3eab25199e994b689fa5c047fc31f217.jpg"}},sizes:[{sizeCode:"Short"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/420/hot",price:200}],children:[],id:"mochas",uri:"/drinks/hot-coffees/mochas"},{displayOrder:6,name:"Coffee Travelers",products:[{name:"Coffee Traveler - Veranda Blend®",formCode:"Hot",displayOrder:1,productNumber:873068654,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/0992e70336d7446093fe8d50cb3377f2.jpg"}},sizes:[{sizeCode:"Short"}],uri:"/product/873068654/hot",price:275},{name:"Coffee Traveler - Dark Roast",formCode:"Hot",displayOrder:2,productNumber:873068656,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/9d5739c00da14ea8acc0497989b08016.jpg"}},sizes:[{sizeCode:"Short"}],uri:"/product/873068656/hot",price:260},{name:"Coffee Traveler - Pike Place® Roast",formCode:"Hot",displayOrder:3,productNumber:873068655,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/9d5739c00da14ea8acc0497989b08016.jpg"}},sizes:[{sizeCode:"Short"}],uri:"/product/873068655/hot",price:275},{name:"Coffee Traveler - Decaf Pike Place® Roast",formCode:"Hot",displayOrder:4,productNumber:873068657,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/9d5739c00da14ea8acc0497989b08016.jpg"}},sizes:[{sizeCode:"Short"}],uri:"/product/873068657/hot",price:260}],children:[],id:"coffee-travelers",uri:"/drinks/hot-coffees/coffee-travelers"}],id:"hot-coffees",uri:"/drinks/hot-coffees"},{displayOrder:1,name:"Cold Coffees",products:[],children:[{displayOrder:0,name:"Cold Brews",products:[{name:"White Chocolate Macadamia Cream Cold Brew",formCode:"Iced",displayOrder:2,productNumber:2123758,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/706A80A7DEF041438BB2CD6583C72709.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"},{sizeCode:"Trenta"}],uri:"/product/2123758/iced",price:265},{name:"Cinnamon Caramel Cream Cold Brew",formCode:"Iced",displayOrder:3,productNumber:2123736,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/65C29F9028C94BA18AD26D24DE449CEA.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"},{sizeCode:"Trenta"}],uri:"/product/2123736/iced",price:250},{name:"Chocolate Cream Cold Brew",formCode:"Iced",displayOrder:6,productNumber:2123644,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/ff03ead58dde47c485049baa5f736793.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"},{sizeCode:"Trenta"}],uri:"/product/2123644/iced",price:300},{name:"Salted Caramel Cream Cold Brew",formCode:"Iced",displayOrder:9,productNumber:2122795,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/64da774b521447f690c20290cd4cb29d.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"},{sizeCode:"Trenta"}],uri:"/product/2122795/iced",price:245},{name:"Starbucks® Cold Brew Coffee",formCode:"Iced",displayOrder:42,productNumber:2121255,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/103b2b745f4848f884b793696a4573b6.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"},{sizeCode:"Trenta"}],uri:"/product/2121255/iced",price:245},{name:"Vanilla Sweet Cream Cold Brew",formCode:"Iced",displayOrder:43,productNumber:2121859,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/07951b9a7d7d47a2892dfa7a707fd318.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"},{sizeCode:"Trenta"}],uri:"/product/2121859/iced",price:280},{name:"Starbucks® Cold Brew Coffee with Milk",formCode:"Iced",displayOrder:44,productNumber:2121343,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/bcf41cb5ff8f455fa945428c8d05c3f2.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"},{sizeCode:"Trenta"}],uri:"/product/2121343/iced",price:260}],children:[],id:"cold-brews",uri:"/drinks/cold-coffees/cold-brews"},{displayOrder:2,name:"Nitro Cold Brews",products:[{name:"Cinnamon Caramel Cream Nitro Cold Brew",formCode:"Iced",displayOrder:1,productNumber:2123734,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/E4C356F04F8A479A9469564EDE74ACFC.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"}],uri:"/product/2123734/iced",price:230},{name:"Nitro Cold Brew",formCode:"Iced",displayOrder:12,productNumber:2121912,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/8c5dcfa053504f85b3e7af2fa451346d.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"}],uri:"/product/2121912/iced",price:265},{name:"Vanilla Sweet Cream Nitro Cold Brew",formCode:"Iced",displayOrder:13,productNumber:2122237,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/30b4049d49f64f8a8085e6d7808b4ae4.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"}],uri:"/product/2122237/iced",price:265}],children:[],id:"nitro-cold-brews",uri:"/drinks/cold-coffees/nitro-cold-brews"},{displayOrder:3,name:"Iced Americano",products:[{name:"Iced Caffè Americano",formCode:"Iced",displayOrder:1,productNumber:406,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/921a409e6f55407da52eee4c8ad13ada.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/406/iced",price:240}],children:[],id:"iced-americano",uri:"/drinks/cold-coffees/iced-americano"},{displayOrder:5,name:"Iced Coffees",products:[{name:"Iced Coffee",formCode:"Iced",displayOrder:1,productNumber:422,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/c44960d6621844c99fa896a83278f122.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"},{sizeCode:"Trenta"}],uri:"/product/422/iced",price:250},{name:"Iced Coffee with Milk",formCode:"Iced",displayOrder:2,productNumber:482,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/062aac2b949a40e188e832c868803b58.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"},{sizeCode:"Trenta"}],uri:"/product/482/iced",price:235},{name:"Iced Espresso",formCode:"Iced",displayOrder:4,productNumber:410,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/7e0863732426489d81f0167e5a3fdaf2.jpg"}},sizes:[{sizeCode:"Single"},{sizeCode:"Double"},{sizeCode:"Triple"},{sizeCode:"Quad"}],uri:"/product/410/iced",price:245}],children:[],id:"iced-coffees",uri:"/drinks/cold-coffees/iced-coffees"},{displayOrder:7,name:"Iced Shaken Espresso",products:[{name:"Iced Toasted Vanilla Oatmilk Shaken Espresso",formCode:"Iced",displayOrder:2,productNumber:2123632,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/9a51e00fff1c42e8acb62fcbfcef8838.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2123632/iced",price:300},{name:"Iced Brown Sugar Oatmilk Shaken Espresso",formCode:"Iced",displayOrder:4,productNumber:2123431,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/5bfe4972905a400c97717ce4176ebe92.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2123431/iced",price:235},{name:"Iced Chocolate Almondmilk Shaken Espresso",formCode:"Iced",displayOrder:5,productNumber:2123430,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/b0f45bda44464780a601e51cb404f780.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2123430/iced",price:250},{name:"Iced Shaken Espresso",formCode:"Iced",displayOrder:5,productNumber:2123425,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/ce4ff582482446d08d56ab49fe54bc40.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2123425/iced",price:230}],children:[],id:"iced-shaken-espresso",uri:"/drinks/cold-coffees/iced-shaken-espresso"},{displayOrder:8,name:"Iced Flat Whites",products:[{name:"Iced Flat White",formCode:"Iced",displayOrder:2,productNumber:565,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/a1d7c679325f4c32ab5441f051aa0767.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/565/iced",price:200},{name:"Iced Honey Almondmilk Flat White",formCode:"Iced",displayOrder:5,productNumber:2123158,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/a651497f08314edd9a213950c2865e8c.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2123158/iced",price:275}],children:[],id:"iced-flat-whites",uri:"/drinks/cold-coffees/iced-flat-whites"},{displayOrder:9,name:"Iced Lattes",products:[{name:"Starbucks Reserve® Iced Latte",formCode:"Iced",displayOrder:32,productNumber:2122614,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/5d1720adf5e7485a9d36d508b7b1be06.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2122614/iced",price:250},{name:"Starbucks Reserve® Iced Hazelnut Bianco Latte",formCode:"Iced",displayOrder:33,productNumber:2122617,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/196709c5870249dd9c2408469dd70df1.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2122617/iced",price:245},{name:"Iced Caffè Latte",formCode:"Iced",displayOrder:37,productNumber:407,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/f4fd128c834643fa8c74f4ae9f579013.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/407/iced",price:200},{name:"Iced Cinnamon Dolce Latte",formCode:"Iced",displayOrder:40,productNumber:414,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/b5ee0554cdd64959a86530922cea7991.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/414/iced",price:280},{name:"Iced Starbucks® Blonde Vanilla Latte",formCode:"Iced",displayOrder:45,productNumber:2122164,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/1b317a079984402895bb5cf4d2894940.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2122164/iced",price:265}],children:[],id:"iced-lattes",uri:"/drinks/cold-coffees/iced-lattes"},{displayOrder:10,name:"Iced Macchiatos",products:[{name:"Iced Caramel Macchiato",formCode:"Iced",displayOrder:10,productNumber:413,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/363835b1db024636adeb4089ebb96291.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/413/iced",price:200}],children:[],id:"iced-macchiatos",uri:"/drinks/cold-coffees/iced-macchiatos"},{displayOrder:11,name:"Iced Mochas",products:[{name:"Iced White Chocolate Mocha",formCode:"Iced",displayOrder:4,productNumber:420,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/b80d893714854b5c946ee6c7f0d369d7.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/420/iced",price:250},{name:"Iced Caffè Mocha",formCode:"Iced",displayOrder:17,productNumber:408,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/0360378c6e774cc3a38d870fc75d5462.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/408/iced",price:230},{name:"Starbucks Reserve® Iced Dark Chocolate Mocha",formCode:"Iced",displayOrder:21,productNumber:2122615,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/a3368f72724f4b70950ac39fb23b5836.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2122615/iced",price:200}],children:[],id:"iced-mochas",uri:"/drinks/cold-coffees/iced-mochas"},{displayOrder:12,name:"Iced Clover® Brewed Coffees",products:[{name:"Iced Clover® Starbucks Reserve® Rwanda Sholi",formCode:"Iced",displayOrder:1,productNumber:2123756,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/3B8287229F4F4CBE96FEC155E50A1330.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2123756/iced",price:275},{name:"Iced Clover® Starbucks Reserve® Papua New Guinea Moanti",formCode:"Iced",displayOrder:2,productNumber:2123616,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/F53720F6E2AE412DBD5F1797BB60D84B.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2123616/iced",price:235},{name:"Iced Clover® Starbucks Reserve® Ecuador Loja",formCode:"Iced",displayOrder:3,productNumber:2123429,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/f7f88e7cfc6243d39f2259e75c486d1a.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2123429/iced",price:240},{name:"Iced Clover® Starbucks Reserve® Costa Rica Naranjo",formCode:"Iced",displayOrder:7,productNumber:2123277,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/48f8877dfbc841dfa2cdec27508786fa.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2123277/iced",price:245},{name:"Iced Organic Yukon Blend® Clover®",formCode:"Iced",displayOrder:9,productNumber:2121631,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/db7e8ec840df4ffc9e559104f15674c8.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2121631/iced",price:240},{name:"Iced Pike Place® Roast Clover®",formCode:"Iced",displayOrder:10,productNumber:2121629,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/3596444d20f54635a16bd8cc88d90da1.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2121629/iced",price:245},{name:"Iced Caffé Verona® Clover®",formCode:"Iced",displayOrder:11,productNumber:2121636,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/e01bbab763c240fd82c793a7c37d0b87.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2121636/iced",price:230},{name:"Iced Espresso Roast Clover®",formCode:"Iced",displayOrder:12,productNumber:2121582,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/0e0b53c4fc97498f84258a6b5431cdc9.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2121582/iced",price:235},{name:"Iced Clover Brewed® Italian Roast",formCode:"Iced",displayOrder:13,productNumber:2121587,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/3b6b98a6271b4aba8838e7b2e2ab3dc8.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2121587/iced",price:275},{name:"Iced Komodo Dragon Clover®",formCode:"Iced",displayOrder:14,productNumber:2122377,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/9382f65cacc044a3ad341fcd239ebc76.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2122377/iced",price:260},{name:"Iced Sumatra Clover®",formCode:"Iced",displayOrder:15,productNumber:2121630,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/6bf82aafb31641df88afd70fc03af950.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2121630/iced",price:250},{name:"Iced Veranda Blend® Clover®",formCode:"Iced",displayOrder:15,productNumber:2121635,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/9fab574d1586424da56c6858979ccb69.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2121635/iced",price:245},{name:"Iced Clover Brewed® Decaf Pike Place® Roast",formCode:"Iced",displayOrder:16,productNumber:2121748,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/313b9e0184ae4eafa15a2a3afd2a07e2.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2121748/iced",price:275},{name:"Iced Decaf Sumatra Clover®",formCode:"Iced",displayOrder:16,productNumber:2121633,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/701b4e00090645d399fb2bb839e0eaea.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2121633/iced",price:260},{name:"Iced Clover Brewed® Decaf Espresso Roast",formCode:"Iced",displayOrder:17,productNumber:2121632,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/8e641c4645fc42bd9547f8b8a1e8ed5e.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/2121632/iced",price:200}],children:[],id:"iced-clover-brewed-coffees",uri:"/drinks/cold-coffees/iced-clover-brewed-coffees"}],id:"cold-coffees",uri:"/drinks/cold-coffees"},{displayOrder:2,name:"Cold Drinks",products:[],children:[{displayOrder:4,name:"Juice",products:[{name:"Starbucks BAYA™ Energy Mango Guava",formCode:"Packaged",displayOrder:2,productNumber:2123631,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/a907648a21784d748b11cbf132c56772.jpg"}},sizes:[{sizeCode:"12-Packaged"}],uri:"/product/2123631/packaged",price:275},{name:"Evolution Fresh® Organic Vital Berry",formCode:"Packaged",displayOrder:3,productNumber:2123185,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/e707826e061046d79b26cc165ec190a6.jpg"}},sizes:[{sizeCode:"11-Packaged"}],uri:"/product/2123185/packaged",price:265},{name:"Evolution Fresh® Organic Defense Up®",formCode:"Packaged",displayOrder:5,productNumber:2122702,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/3ef9580206174cbb9ca3e74cc9834f54.jpg"}},sizes:[{sizeCode:"11-Packaged"}],uri:"/product/2122702/packaged",price:240},{name:"Evolution Fresh® Orange",formCode:"Packaged",displayOrder:6,productNumber:2122701,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/e07696c46d774fb3b971773b433bab0b.jpg"}},sizes:[{sizeCode:"11-Packaged"}],uri:"/product/2122701/packaged",price:260},{name:"Evolution Fresh® Organic Super Fruit Greens",formCode:"Packaged",displayOrder:8,productNumber:2122699,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/3f7604be154a4f6790defa0a27c9ad20.jpg"}},sizes:[{sizeCode:"11-Packaged"}],uri:"/product/2122699/packaged",price:265},{name:"Evolution Fresh® Mighty Watermelon",formCode:"Packaged",displayOrder:10,productNumber:2122704,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/24f36ed0145d4511840bd543506c7da0.jpg"}},sizes:[{sizeCode:"11-Packaged"}],uri:"/product/2122704/packaged",price:235},{name:"Tree Top Apple Juice Box",formCode:"Packaged",displayOrder:12,productNumber:873068637,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/307222bd6ea446758f6a190861bf8b24.jpg"}},sizes:[{sizeCode:"8-Packaged"}],uri:"/product/873068637/packaged",price:245},{name:"Starbucks™ Baya Energy Raspberry Lime",formCode:"Packaged",displayOrder:14,productNumber:2123633,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/bf2959cba06c42f0a1fc41c11da5f44c.jpg"}},sizes:[{sizeCode:"12-Packaged"}],uri:"/product/2123633/packaged",price:280},{name:"Lemonade",formCode:"Iced",displayOrder:20,productNumber:873068639,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/b5d9c74a812a4b46b2a100baed559f84.jpg"}},sizes:[{sizeCode:"Kids"},{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"},{sizeCode:"Trenta"}],uri:"/product/873068639/iced",price:240},{name:"Blended Strawberry Lemonade",formCode:"Iced",displayOrder:22,productNumber:873068641,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/381ddaee19154b759eeea816c1890aec.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/873068641/iced",price:200}],children:[],id:"juice",uri:"/drinks/cold-drinks/juice"},{displayOrder:5,name:"Milk",products:[{name:"Horizon® Chocolate Organic Milk",formCode:"Packaged",displayOrder:1,productNumber:2121286,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/d5d9e3b1e7794fa6bba08c269c4f59a6.jpg"}},sizes:[{sizeCode:"8-Packaged"}],uri:"/product/2121286/packaged",price:245},{name:"Horizon® Organic Lowfat Milk Box",formCode:"Packaged",displayOrder:2,productNumber:2121281,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/b8ee8032716f46f48167c1227577eddf.jpg"}},sizes:[{sizeCode:"8-Packaged"}],uri:"/product/2121281/packaged",price:235},{name:"Cold Milk",formCode:"Iced",displayOrder:3,productNumber:490,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/22957ce7f042474892b8fe1e75d76ebe.jpg"}},sizes:[{sizeCode:"Tall"},{sizeCode:"Grande"},{sizeCode:"Venti"}],uri:"/product/490/iced",price:275},{name:"Horizon® Organic Vanilla Milk Box",formCode:"Packaged",displayOrder:4,productNumber:2122581,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/c9a4d94f65fc49f2810084402a729d90.jpg"}},sizes:[{sizeCode:"8-Packaged"}],uri:"/product/2122581/packaged",price:260}],children:[],id:"milk",uri:"/drinks/cold-drinks/milk"},{displayOrder:6,name:"Sparkling Water",products:[{name:"Galvanina Sparkling Water",formCode:"Packaged",displayOrder:1,productNumber:2122832,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/f0ce895c1080458eab6d026890f26de3.jpg"}},sizes:[{sizeCode:"16.9-Packaged"}],uri:"/product/2122832/packaged",price:240},{name:"Spindrift® Grapefruit Sparkling Water",formCode:"Packaged",displayOrder:5,productNumber:2122640,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/16aadeddc3cf4f87a9a2cb0730b1b997.jpg"}},sizes:[{sizeCode:"12-Packaged"}],uri:"/product/2122640/packaged",price:235},{name:"Spindrift® Raspberry Lime Sparkling Water",formCode:"Packaged",displayOrder:6,productNumber:2122638,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/959fee492e90447b8d17fbf511b36819.jpg"}},sizes:[{sizeCode:"12-Packaged"}],uri:"/product/2122638/packaged",price:235},{name:"Galvanina Sparkling Water - Lime",formCode:"Packaged",displayOrder:7,productNumber:2122833,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/fc7cf27aec2f4487a743af97d9057cfd.jpg"}},sizes:[{sizeCode:"16.9-Packaged"}],uri:"/product/2122833/packaged",price:240}],children:[],id:"sparkling-water",uri:"/drinks/cold-drinks/sparkling-water"},{displayOrder:7,name:"Water",products:[{name:"DASANI Bottled Water",formCode:"Packaged",displayOrder:1,productNumber:2123597,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/fe3ff74bbc4442d9bd1874f0e2f8c285.jpg"}},sizes:[{sizeCode:"20-Packaged"}],uri:"/product/2123597/packaged",price:250},{name:"Ethos® Bottled Water",formCode:"Packaged",displayOrder:2,productNumber:873068636,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/db9386b255ed440b893861e87f368934.jpg"}},sizes:[{sizeCode:"23.7-Packaged"}],uri:"/product/873068636/packaged",price:300},{name:"Hawai'i Volcanic Water",formCode:"Packaged",displayOrder:3,productNumber:2123023,productType:"Beverage",availability:"Available",assets:{masterImage:{uri:"https://globalassets.starbucks.com/assets/ae65fe747ff242789a426bce82b47b9e.jpg"}},sizes:[{sizeCode:"600-Packaged"}],uri:"/product/2123023/packaged",price:200}],children:[],id:"water",uri:"/drinks/cold-drinks/water"}],id:"cold-drinks",uri:"/drinks/cold-drinks"}],id:"drinks",uri:"/drinks"}]};window.app={};window.app.store=Ui;window.app.router=se;async function uo(){window.app.store.menus=po.menus,window.app.store.cart={},window.app.router.init()}window.addEventListener("DOMContentLoaded",uo);
