import{S as D,C as K,D as Z,E as P,F as $,G as g,U as v,I as T,m as b,J as C,K as j,L as V,M as z,N as H,O as J,R as Q,P as M,t as W,Q as X,T as k,V as p,W as ee,p as U,X as re,Y as ne,Z as te,l as Y,_ as ae,$ as ie,a0 as fe}from"./runtime.D1P7FZUt.js";function E(a,u=null,y){if(typeof a!="object"||a===null||D in a)return a;const o=V(a);if(o!==K&&o!==Z)return a;var f=new Map,c=z(a),I=P(0);c&&f.set("length",P(a.length));var m;return new Proxy(a,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&$();var t=f.get(e);return t===void 0?(t=P(r.value),f.set(e,t)):g(t,E(r.value,m)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,P(v));else{if(c&&typeof e=="string"){var t=f.get("length"),n=Number(e);Number.isInteger(n)&&n<t.v&&g(t,n)}g(r,v),q(I)}return!0},get(i,e,r){var _;if(e===D)return a;var t=f.get(e),n=e in i;if(t===void 0&&(!n||(_=T(i,e))!=null&&_.writable)&&(t=P(E(n?i[e]:v,m)),f.set(e,t)),t!==void 0){var s=b(t);return s===v?void 0:s}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var t=f.get(e);t&&(r.value=b(t))}else if(r===void 0){var n=f.get(e),s=n==null?void 0:n.v;if(n!==void 0&&s!==v)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(i,e){var s;if(e===D)return!0;var r=f.get(e),t=r!==void 0&&r.v!==v||Reflect.has(i,e);if(r!==void 0||C!==null&&(!t||(s=T(i,e))!=null&&s.writable)){r===void 0&&(r=P(t?E(i[e],m):v),f.set(e,r));var n=b(r);if(n===v)return!1}return t},set(i,e,r,t){var R;var n=f.get(e),s=e in i;if(c&&e==="length")for(var _=r;_<n.v;_+=1){var w=f.get(_+"");w!==void 0?g(w,v):_ in i&&(w=P(v),f.set(_+"",w))}n===void 0?(!s||(R=T(i,e))!=null&&R.writable)&&(n=P(void 0),g(n,E(r,m)),f.set(e,n)):(s=n.v!==v,g(n,E(r,m)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(t,r),!s){if(c&&typeof e=="string"){var O=f.get("length"),S=Number(e);Number.isInteger(S)&&S>=O.v&&g(O,S+1)}q(I)}return!0},ownKeys(i){b(I);var e=Reflect.ownKeys(i).filter(n=>{var s=f.get(n);return s===void 0||s.v!==v});for(var[r,t]of f)t.v!==v&&!(r in i)&&e.push(r);return e},setPrototypeOf(){j()}})}function q(a,u=1){g(a,a.v+u)}let A=!1;function se(a){var u=A;try{return A=!1,[a(),A]}finally{A=u}}function G(a){for(var u=C,y=C;u!==null&&!(u.f&(J|Q));)u=u.parent;try{return M(u),a()}finally{M(y)}}function le(a,u,y,o){var F;var f=(y&ae)!==0,c=!W||(y&X)!==0,I=(y&k)!==0,m=(y&fe)!==0,i=!1,e;I?[e,i]=se(()=>a[u]):e=a[u];var r=D in a||p in a,t=((F=T(a,u))==null?void 0:F.set)??(r&&I&&u in a?l=>a[u]=l:void 0),n=o,s=!0,_=!1,w=()=>(_=!0,s&&(s=!1,m?n=Y(o):n=o),n);e===void 0&&o!==void 0&&(t&&c&&ee(),e=w(),t&&t(e));var d;if(c)d=()=>{var l=a[u];return l===void 0?w():(s=!0,_=!1,l)};else{var O=G(()=>(f?U:re)(()=>a[u]));O.f|=H,d=()=>{var l=b(O);return l!==void 0&&(n=void 0),l===void 0?n:l}}if(!(y&ne))return d;if(t){var S=a.$$legacy;return function(l,h){return arguments.length>0?((!c||!h||S||i)&&t(h?d():l),l):d()}}var R=!1,B=!1,L=ie(e),N=G(()=>U(()=>{var l=d(),h=b(L);return R?(R=!1,B=!0,h):(B=!1,L.v=l)}));return f||(N.equals=te),function(l,h){if(arguments.length>0){const x=h?b(N):c&&I?E(l):l;return N.equals(x)||(R=!0,g(L,x),_&&n!==void 0&&(n=x),Y(()=>b(N))),l}return b(N)}}export{E as a,le as p};