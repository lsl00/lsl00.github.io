import{a1 as M,a2 as R,P as O,M as P,a3 as V,J as k,a4 as b,i as Y,a5 as C,g as $,H as T,a6 as g,s as A,a as j,e as y,a7 as q,f as B,a8 as J,a9 as W,aa as z,ab as F,ac as G,c as K,h as E,v as Q,y as U,k as X}from"./runtime.D1P7FZUt.js";import{r as Z,a as x}from"./disclose-version.Cmcp12UT.js";const aa=["touchstart","touchmove"];function ra(a){return aa.includes(a)}const ea=new Set,D=new Set;function m(a){var N;var r=this,s=r.ownerDocument,c=a.type,o=((N=a.composedPath)==null?void 0:N.call(a))||[],e=o[0]||a.target,d=0,_=a.__root;if(_){var u=o.indexOf(_);if(u!==-1&&(r===document||r===window)){a.__root=r;return}var h=o.indexOf(r);if(h===-1)return;u<=h&&(d=u)}if(e=o[d]||a.target,e!==r){M(a,"currentTarget",{configurable:!0,get(){return e||s}});var w=V,i=k;R(null),O(null);try{for(var t,n=[];e!==null;){var f=e.assignedSlot||e.parentNode||e.host||null;try{var l=e["__"+c];if(l!==void 0&&!e.disabled)if(P(l)){var[I,...L]=l;I.apply(e,[a,...L])}else l.call(e,a)}catch(p){t?n.push(p):t=p}if(a.cancelBubble||f===r||f===null)break;e=f}if(t){for(let p of n)queueMicrotask(()=>{throw p});throw t}}finally{a.__root=r,delete a.currentTarget,R(w),O(i)}}}function ia(a,r){var s=r==null?"":typeof r=="object"?r+"":r;s!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=s,a.nodeValue=s==null?"":s+"")}function ta(a,r){return H(a,r)}function oa(a,r){b(),r.intro=r.intro??!1;const s=r.target,c=E,o=y;try{for(var e=Y(s);e&&(e.nodeType!==8||e.data!==C);)e=$(e);if(!e)throw T;g(!0),A(e),j();const d=H(a,{...r,anchor:e});if(y===null||y.nodeType!==8||y.data!==q)throw B(),T;return g(!1),d}catch(d){if(d===T)return r.recover===!1&&J(),b(),W(s),g(!1),ta(a,r);throw d}finally{g(c),A(o),Z()}}const v=new Map;function H(a,{target:r,anchor:s,props:c={},events:o,context:e,intro:d=!0}){b();var _=new Set,u=i=>{for(var t=0;t<i.length;t++){var n=i[t];if(!_.has(n)){_.add(n);var f=ra(n);r.addEventListener(n,m,{passive:f});var l=v.get(n);l===void 0?(document.addEventListener(n,m,{passive:f}),v.set(n,1)):v.set(n,l+1)}}};u(z(ea)),D.add(u);var h=void 0,w=F(()=>{var i=s??r.appendChild(G());return K(()=>{if(e){Q({});var t=X;t.c=e}o&&(c.$$events=o),E&&x(i,null),h=a(i,c)||{},E&&(k.nodes_end=y),e&&U()}),()=>{var f;for(var t of _){r.removeEventListener(t,m);var n=v.get(t);--n===0?(document.removeEventListener(t,m),v.delete(t)):v.set(t,n)}D.delete(u),i!==s&&((f=i.parentNode)==null||f.removeChild(i))}});return S.set(h,w),h}let S=new WeakMap;function fa(a,r){const s=S.get(a);return s?(S.delete(a),s(r)):Promise.resolve()}export{oa as h,ta as m,ia as s,fa as u};