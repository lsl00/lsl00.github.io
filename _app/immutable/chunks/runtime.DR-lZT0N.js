var In=Array.isArray,On=Array.from,Nn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Gt=Object.getOwnPropertyDescriptors,Cn=Object.prototype,Pn=Array.prototype,Kt=Object.getPrototypeOf;const bn=()=>{};function Fn(t){return t()}function Zt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,dt=4,Z=8,lt=16,T=32,z=64,tt=128,k=256,V=512,E=1024,R=2048,Y=4096,N=8192,P=16384,zt=32768,Et=65536,qn=1<<17,Wt=1<<19,yt=1<<20,ct=Symbol("$state"),Mn=Symbol("legacy props");function wt(t){return t===this.v}function Xt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!Xt(t,this.v)}function Jt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function nn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ln(){throw new Error("https://svelte.dev/e/hydration_failed")}function Yn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Hn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let W=!1;function Un(){W=!0}const Bn=1,Vn=2,$n=16,Gn=1,Kn=2,Zn=4,zn=8,Wn=16,Xn=1,Jn=2,sn="[",ln="[!",an="]",mt={},Qn=Symbol();function at(t,n){var r={f:0,v:t,reactions:null,equals:wt,version:0};return r}function tr(t){return un(at(t))}function nr(t,n=!1){var e;const r=at(t);return n||(r.equals=Tt),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function un(t){return o!==null&&o.f&y&&(w===null?mn([t]):w.push(t)),t}function rr(t,n){return o!==null&&it()&&o.f&(y|lt)&&(w===null||!w.includes(t))&&en(),on(t,n)}function on(t,n){return t.equals(n)||(t.v=n,t.version=jt(),At(t,R),it()&&u!==null&&u.f&E&&!(u.f&T)&&(h!==null&&h.includes(t)?(A(u,R),Q(u)):g===null?An([t]):g.push(t))),n}function At(t,n){var r=t.reactions;if(r!==null)for(var e=it(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&R||!e&&a===u||(A(a,n),i&(E|k)&&(i&y?At(a,Y):Q(a)))}}function gt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let C=!1;function er(t){C=t}let m;function F(t){if(t===null)throw gt(),mt;return m=t}function sr(){return F(b(m))}function lr(t){if(C){if(b(m)!==null)throw gt(),mt;m=t}}function ar(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===an){if(t===0)return n;t-=1}else(r===sn||r===ln)&&(t+=1)}var e=b(n);n.remove(),n=e}}var vt,fn,Rt,xt;function ur(){if(vt===void 0){vt=window,fn=document;var t=Element.prototype,n=Node.prototype;Rt=_t(n,"firstChild").get,xt=_t(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return Rt.call(t)}function b(t){return xt.call(t)}function or(t,n){if(!C)return rt(t);var r=rt(m);if(r===null)r=m.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),F(e),e}return F(r),r}function ir(t,n){if(!C){var r=rt(t);return r instanceof Comment&&r.data===""?b(r):r}return m}function fr(t,n=1,r=!1){let e=C?m:t;for(var s;n--;)s=e,e=b(e);if(!C)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=nt();return e===null?s==null||s.after(a):e.before(a),F(a),a}return F(e),e}function _r(t){t.textContent=""}function _n(t){var n=y|R;u===null?n|=k:u.f|=yt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:wt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function cr(t){const n=_n(t);return n.equals=Tt,n}function St(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ut(e):D(e)}}}function cn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Dt(t){var n,r=u;K(cn(t));try{St(t),n=Ht(t)}finally{K(r)}return n}function kt(t){var n=Dt(t),r=(S||t.f&k)&&t.deps!==null?Y:E;A(t,r),t.equals(n)||(t.v=n,t.version=jt())}function ut(t){St(t),L(t,0),A(t,P),t.v=t.children=t.deps=t.ctx=t.reactions=null}function It(t){u===null&&o===null&&tn(),o!==null&&o.f&k&&Qt(),ot&&Jt()}function vn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function j(t,n,r,e=!0){var s=(t&z)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=I;try{pt(!0),J(a),a.f|=zt}catch(c){throw D(a),c}finally{pt(i)}}else n!==null&&Q(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&yt)===0;if(!_&&!s&&e&&(l!==null&&vn(a,l),o!==null&&o.f&y)){var p=o;(p.children??(p.children=[])).push(a)}return a}function vr(t){It();var n=u!==null&&(u.f&T)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Ot(t);return e}}function pr(t){return It(),pn(t)}function hr(t){const n=j(z,t,!0);return(r={})=>new Promise(e=>{r.outro?En(n,()=>{D(n),e(void 0)}):(D(n),e(void 0))})}function Ot(t){return j(dt,t,!1)}function pn(t){return j(Z,t,!0)}function dr(t){return hn(t)}function hn(t,n=0){return j(Z|lt|n,t,!0)}function Er(t,n=!0){return j(Z|T,t,!0,n)}function Nt(t){var n=t.teardown;if(n!==null){const r=ot,e=o;ht(!0),G(null);try{n.call(null)}finally{ht(r),G(e)}}}function Ct(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ut(n[r])}}function Pt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;D(r,n),r=e}}function dn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&T||D(n),n=r}}function D(t,n=!0){var r=!1;if((n||t.f&Wt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:b(e);e.remove(),e=l}r=!0}Pt(t,n&&!r),Ct(t),L(t,0),A(t,P);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Nt(t);var i=t.parent;i!==null&&i.first!==null&&bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function En(t,n){var r=[];Ft(t,r,!0),yn(r,()=>{D(t),n&&n()})}function yn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ft(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&Et)!==0||(e.f&T)!==0;Ft(e,n,l?r:!1),e=s}}}function yr(t){qt(t,!0)}function qt(t,n){if(t.f&N){H(t)&&J(t),t.f^=N;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&Et)!==0||(r.f&T)!==0;qt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let $=!1,et=[];function Mt(){$=!1;const t=et.slice();et=[],Zt(t)}function wr(t){$||($=!0,queueMicrotask(Mt)),et.push(t)}function wn(){$&&Mt()}const Lt=0,Tn=1;let U=!1,B=Lt,q=!1,M=null,I=!1,ot=!1;function pt(t){I=t}function ht(t){ot=t}let x=[],O=0;let o=null;function G(t){o=t}let u=null;function K(t){u=t}let w=null;function mn(t){w=t}let h=null,d=0,g=null;function An(t){g=t}let Yt=1,S=!1,f=null;function jt(){return++Yt}function it(){return!W||f!==null&&f.l===null}function H(t){var p;var n=t.f;if(n&R)return!0;if(n&Y){var r=t.deps,e=(n&k)!==0;if(r!==null){var s,l,a=(n&V)!==0,i=e&&u!==null&&!S,_=r.length;if(a||i){for(s=0;s<_;s++)l=r[s],(p=l==null?void 0:l.reactions)!=null&&p.includes(t)||(l.reactions??(l.reactions=[])).push(t);a&&(t.f^=V)}for(s=0;s<_;s++)if(l=r[s],H(l)&&kt(l),l.version>t.version)return!0}(!e||u!==null&&!S)&&A(t,E)}return!1}function gn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw U=!1,t}function Rn(t){return(t.f&P)===0&&(t.parent===null||(t.parent.f&tt)===0)}function X(t,n,r,e){if(U){if(r===null&&(U=!1),Rn(n))throw t;return}r!==null&&(U=!0);{gn(t,n);return}}function Ht(t){var ft;var n=h,r=d,e=g,s=o,l=S,a=w,i=f,_=t.f;h=null,d=0,g=null,o=_&(T|z)?null:t,S=!I&&(_&k)!==0,w=null,f=t.ctx;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(L(t,d),c!==null&&d>0)for(c.length=d+h.length,v=0;v<h.length;v++)c[d+v]=h[v];else t.deps=c=h;if(!S)for(v=d;v<c.length;v++)((ft=c[v]).reactions??(ft.reactions=[])).push(t)}else c!==null&&d<c.length&&(L(t,d),c.length=d);return p}finally{h=n,d=r,g=e,o=s,S=l,w=a,f=i}}function xn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(A(n,Y),n.f&(k|V)||(n.f^=V),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)xn(t,r[e])}function J(t){var n=t.f;if(!(n&P)){A(t,E);var r=u,e=f;u=t;try{n&lt?dn(t):Pt(t),Ct(t),Nt(t);var s=Ht(t);t.teardown=typeof s=="function"?s:null,t.version=Yt}catch(l){X(l,t,r,e||t.ctx)}finally{u=r}}}function Ut(){if(O>1e3){O=0;try{nn()}catch(t){if(M!==null)X(t,M,null);else throw t}}O++}function Bt(t){var n=t.length;if(n!==0){Ut();var r=I;I=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&E||(s.f^=E);var l=[];Vt(s,l),Sn(l)}}finally{I=r}}}function Sn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(P|N)))try{H(e)&&(J(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?bt(e):e.fn=null))}catch(s){X(s,e,null,e.ctx)}}}function Dn(){if(q=!1,O>1001)return;const t=x;x=[],Bt(t),q||(O=0,M=null)}function Q(t){B===Lt&&(q||(q=!0,queueMicrotask(Dn))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|T)){if(!(r&E))return;n.f^=E}}x.push(n)}function Vt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&T)!==0,a=l&&(s&E)!==0,i=r.next;if(!a&&!(s&N))if(s&Z){if(l)r.f^=E;else try{H(r)&&J(r)}catch(v){X(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else s&dt&&e.push(r);if(i===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=i}for(var c=0;c<e.length;c++)_=e[c],n.push(_),Vt(_,n)}function $t(t){var n=B,r=x;try{Ut();const s=[];B=Tn,x=s,q=!1,Bt(r);var e=t==null?void 0:t();return wn(),(x.length>0||s.length>0)&&$t(),O=0,M=null,e}finally{B=n,x=r}}async function Tr(){await Promise.resolve(),$t()}function mr(t){var c;var n=t.f,r=(n&y)!==0;if(r&&n&P){var e=Dt(t);return ut(t),e}if(o!==null){w!==null&&w.includes(t)&&rn();var s=o.deps;h===null&&s!==null&&s[d]===t?d++:h===null?h=[t]:h.push(t),g!==null&&u!==null&&u.f&E&&!(u.f&T)&&g.includes(t)&&(A(u,R),Q(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,i=l;a!==null;)if(a.f&y){var _=a;i=_,a=_.parent}else{var p=a;(c=p.deriveds)!=null&&c.includes(i)||(p.deriveds??(p.deriveds=[])).push(i);break}return r&&(l=t,H(l)&&kt(l)),t.v}function Ar(t){const n=o;try{return o=null,t()}finally{o=n}}const kn=~(R|Y|E);function A(t,n){t.f=t.f&kn|n}function gr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},W&&!n&&(f.l={s:null,u:null,r1:[],r2:at(!1)})}function Rr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];K(l.effect),G(l.reaction),Ot(l.fn)}}finally{K(r),G(e)}}f=n.p,n.m=!0}return{}}function xr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=Kt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Gt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{cr as $,lr as A,sr as B,Er as C,D,gt as E,mt as F,Cn as G,Wt as H,Pn as I,at as J,jn as K,rr as L,_t as M,u as N,Hn as O,Kt as P,In as Q,qn as R,ct as S,T,Qn as U,z as V,K as W,Kn as X,zn as Y,Mn as Z,Yn as _,vr as a,Zn as a0,Tt as a1,Gn as a2,nr as a3,Wn as a4,Nn as a5,G as a6,o as a7,ur as a8,an as a9,bn as aA,Xt as aB,Ln as aa,_r as ab,On as ac,hr as ad,Xn as ae,Jn as af,ln as ag,ar as ah,N as ai,yr as aj,En as ak,on as al,Ft as am,yn as an,Vn as ao,Bn as ap,$n as aq,Gt as ar,fn as as,Et as at,Ot as au,pn as av,wr as aw,$t as ax,Tr as ay,tr as az,Ar as b,f as c,Fn as d,xr as e,_n as f,mr as g,nt as h,hn as i,C as j,sn as k,b as l,F as m,m as n,rt as o,Un as p,W as q,Zt as r,er as s,gr as t,pr as u,ir as v,dr as w,Rr as x,fr as y,or as z};