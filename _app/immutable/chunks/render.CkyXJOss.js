import{a5 as C,a6 as R,W as O,Q as H,a7 as M,N as k,a8 as E,o as P,k as Y,l as j,F as b,s as g,m as A,B,n as v,a9 as W,E as $,aa as q,ab as F,ac as Q,ad as z,h as G,C as J,j as T,t as K,x as U,c as X}from"./runtime.DR-lZT0N.js";import{r as Z}from"./svelte-head.CJfxMok8.js";import{b as x}from"./disclose-version.CAHwJd9Z.js";const rr=["touchstart","touchmove"];function ar(r){return rr.includes(r)}const er=new Set,D=new Set;function m(r){var S;var a=this,s=a.ownerDocument,c=r.type,i=((S=r.composedPath)==null?void 0:S.call(r))||[],e=i[0]||r.target,f=0,_=r.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(a===document||a===window)){r.__root=a;return}var h=i.indexOf(a);if(h===-1)return;u<=h&&(f=u)}if(e=i[f]||r.target,e!==a){C(r,"currentTarget",{configurable:!0,get(){return e||s}});var w=M,o=k;R(null),O(null);try{for(var t,n=[];e!==null;){var d=e.assignedSlot||e.parentNode||e.host||null;try{var l=e["__"+c];if(l!==void 0&&!e.disabled)if(H(l)){var[L,...V]=l;L.apply(e,[r,...V])}else l.call(e,r)}catch(y){t?n.push(y):t=y}if(r.cancelBubble||d===a||d===null)break;e=d}if(t){for(let y of n)queueMicrotask(()=>{throw y});throw t}}finally{r.__root=a,delete r.currentTarget,R(w),O(o)}}}function ir(r,a){var s=a==null?"":typeof a=="object"?a+"":a;s!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=s,r.nodeValue=s==null?"":s+"")}function tr(r,a){return I(r,a)}function dr(r,a){E(),a.intro=a.intro??!1;const s=a.target,c=T,i=v;try{for(var e=P(s);e&&(e.nodeType!==8||e.data!==Y);)e=j(e);if(!e)throw b;g(!0),A(e),B();const f=I(r,{...a,anchor:e});if(v===null||v.nodeType!==8||v.data!==W)throw $(),b;return g(!1),f}catch(f){if(f===b)return a.recover===!1&&q(),E(),F(s),g(!1),tr(r,a);throw f}finally{g(c),A(i),Z()}}const p=new Map;function I(r,{target:a,anchor:s,props:c={},events:i,context:e,intro:f=!0}){E();var _=new Set,u=o=>{for(var t=0;t<o.length;t++){var n=o[t];if(!_.has(n)){_.add(n);var d=ar(n);a.addEventListener(n,m,{passive:d});var l=p.get(n);l===void 0?(document.addEventListener(n,m,{passive:d}),p.set(n,1)):p.set(n,l+1)}}};u(Q(er)),D.add(u);var h=void 0,w=z(()=>{var o=s??a.appendChild(G());return J(()=>{if(e){K({});var t=X;t.c=e}i&&(c.$$events=i),T&&x(o,null),h=r(o,c)||{},T&&(k.nodes_end=v),e&&U()}),()=>{var d;for(var t of _){a.removeEventListener(t,m);var n=p.get(t);--n===0?(document.removeEventListener(t,m),p.delete(t)):p.set(t,n)}D.delete(u),o!==s&&((d=o.parentNode)==null||d.removeChild(o))}});return N.set(h,w),h}let N=new WeakMap;function fr(r,a){const s=N.get(r);return s?(N.delete(r),s(a)):Promise.resolve()}export{dr as h,tr as m,ir as s,fr as u};