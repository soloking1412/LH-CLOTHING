(() => {
var lo=Object.defineProperty;var co=(O,g,W)=>g in O?lo(O,g,{enumerable:!0,configurable:!0,writable:!0,value:W}):O[g]=W;var Ie=(O,g,W)=>co(O,typeof g!="symbol"?g+"":g,W);(function(){"use strict";var O,g,W,F,Ae,Ve,ue,fe,pe,ge,We,Y={},Fe=[],Jt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ee=Array.isArray;function A(e,t){for(var n in t)e[n]=t[n];return e}function ze(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function v(e,t,n){var o,r,i,a={};for(i in t)i=="key"?o=t[i]:i=="ref"?r=t[i]:a[i]=t[i];if(arguments.length>2&&(a.children=arguments.length>3?O.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)a[i]===void 0&&(a[i]=e.defaultProps[i]);return te(e,a,o,r,null)}function te(e,t,n,o,r){var i={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++W,__i:-1,__u:0};return r==null&&g.vnode!=null&&g.vnode(i),i}function $(e){return e.children}function I(e,t){this.props=e,this.context=t}function j(e,t){if(t==null)return e.__?j(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?j(e):null}function Ue(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ue(e)}}function he(e){(!e.__d&&(e.__d=!0)&&F.push(e)&&!ne.__r++||Ae!==g.debounceRendering)&&((Ae=g.debounceRendering)||Ve)(ne)}function ne(){var e,t,n,o,r,i,a,l;for(F.sort(ue);e=F.shift();)e.__d&&(t=F.length,o=void 0,i=(r=(n=e).__v).__e,a=[],l=[],n.__P&&((o=A({},r)).__v=r.__v+1,g.vnode&&g.vnode(o),me(n.__P,o,r,n.__n,n.__P.namespaceURI,32&r.__u?[i]:null,a,i??j(r),!!(32&r.__u),l),o.__v=r.__v,o.__.__k[o.__i]=o,qe(a,o,l),o.__e!=i&&Ue(o)),F.length>t&&F.sort(ue));ne.__r=0}function Be(e,t,n,o,r,i,a,l,_,d,u){var s,p,f,C,S,h=o&&o.__k||Fe,b=t.length;for(n.__d=_,Qt(n,t,h),_=n.__d,s=0;s<b;s++)(f=n.__k[s])!=null&&(p=f.__i===-1?Y:h[f.__i]||Y,f.__i=s,me(e,f,p,r,i,a,l,_,d,u),C=f.__e,f.ref&&p.ref!=f.ref&&(p.ref&&ve(p.ref,null,f),u.push(f.ref,f.__c||C,f)),S==null&&C!=null&&(S=C),65536&f.__u||p.__k===f.__k?_=Ze(f,_,e):typeof f.type=="function"&&f.__d!==void 0?_=f.__d:C&&(_=C.nextSibling),f.__d=void 0,f.__u&=-196609);n.__d=_,n.__e=S}function Qt(e,t,n){var o,r,i,a,l,_=t.length,d=n.length,u=d,s=0;for(e.__k=[],o=0;o<_;o++)(r=t[o])!=null&&typeof r!="boolean"&&typeof r!="function"?(a=o+s,(r=e.__k[o]=typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?te(null,r,null,null,null):ee(r)?te($,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?te(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r).__=e,r.__b=e.__b+1,i=null,(l=r.__i=Kt(r,n,a,u))!==-1&&(u--,(i=n[l])&&(i.__u|=131072)),i==null||i.__v===null?(l==-1&&s--,typeof r.type!="function"&&(r.__u|=65536)):l!==a&&(l==a-1?s--:l==a+1?s++:(l>a?s--:s++,r.__u|=65536))):r=e.__k[o]=null;if(u)for(o=0;o<d;o++)(i=n[o])!=null&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=j(i)),Ye(i,i))}function Ze(e,t,n){var o,r;if(typeof e.type=="function"){for(o=e.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=e,t=Ze(o[r],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=j(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function oe(e,t){return t=t||[],e==null||typeof e=="boolean"||(ee(e)?e.some(function(n){oe(n,t)}):t.push(e)),t}function Kt(e,t,n,o){var r=e.key,i=e.type,a=n-1,l=n+1,_=t[n];if(_===null||_&&r==_.key&&i===_.type&&!(131072&_.__u))return n;if((typeof i!="function"||i===$||r)&&o>(_!=null&&!(131072&_.__u)?1:0))for(;a>=0||l<t.length;){if(a>=0){if((_=t[a])&&!(131072&_.__u)&&r==_.key&&i===_.type)return a;a--}if(l<t.length){if((_=t[l])&&!(131072&_.__u)&&r==_.key&&i===_.type)return l;l++}}return-1}function je(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Jt.test(t)?n:n+"px"}function re(e,t,n,o,r){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||je(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||je(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?o?n.u=o.u:(n.u=fe,e.addEventListener(t,i?ge:pe,i)):e.removeEventListener(t,i?ge:pe,i);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Ge(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=fe++;else if(t.t<n.u)return;return g.event&&(t=g.event(t)),"handleEvent"in n?n.handleEvent(t):n(t)}}}function me(e,t,n,o,r,i,a,l,_,d){var u,s,p,f,C,S,h,b,w,R,T,U,B,N,L,E,D=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(_=!!(32&n.__u),i=[l=t.__e=n.__e]),(u=g.__b)&&u(t);e:if(typeof D=="function")try{if(b=t.props,w="prototype"in D&&D.prototype.render,R=(u=D.contextType)&&o[u.__c],T=u?R?R.props.value:u.__:o,n.__c?h=(s=t.__c=n.__c).__=s.__E:(w?t.__c=s=new D(b,T):(t.__c=s=new I(b,T),s.constructor=D,s.render=en),R&&R.sub(s),s.props=b,s.state||(s.state={}),s.context=T,s.__n=o,p=s.__d=!0,s.__h=[],s._sb=[]),w&&s.__s==null&&(s.__s=s.state),w&&D.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=A({},s.__s)),A(s.__s,D.getDerivedStateFromProps(b,s.__s))),f=s.props,C=s.state,s.__v=t,p)w&&D.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),w&&s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(w&&D.getDerivedStateFromProps==null&&b!==f&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(b,T),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(b,s.__s,T)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(s.props=b,s.state=s.__s,s.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(Z){Z&&(Z.__=t)}),U=0;U<s._sb.length;U++)s.__h.push(s._sb[U]);s._sb=[],s.__h.length&&a.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(b,s.__s,T),w&&s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(f,C,S)})}if(s.context=T,s.props=b,s.__P=e,s.__e=!1,B=g.__r,N=0,w){for(s.state=s.__s,s.__d=!1,B&&B(t),u=s.render(s.props,s.state,s.context),L=0;L<s._sb.length;L++)s.__h.push(s._sb[L]);s._sb=[]}else do s.__d=!1,B&&B(t),u=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++N<25);s.state=s.__s,s.getChildContext!=null&&(o=A(A({},o),s.getChildContext())),w&&!p&&s.getSnapshotBeforeUpdate!=null&&(S=s.getSnapshotBeforeUpdate(f,C)),Be(e,ee(E=u!=null&&u.type===$&&u.key==null?u.props.children:u)?E:[E],t,n,o,r,i,a,l,_,d),s.base=t.__e,t.__u&=-161,s.__h.length&&a.push(s),h&&(s.__E=s.__=null)}catch(Z){if(t.__v=null,_||i!=null){for(t.__u|=_?160:128;l&&l.nodeType===8&&l.nextSibling;)l=l.nextSibling;i[i.indexOf(l)]=null,t.__e=l}else t.__e=n.__e,t.__k=n.__k;g.__e(Z,t,n)}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Xt(n.__e,t,n,o,r,i,a,_,d);(u=g.diffed)&&u(t)}function qe(e,t,n){t.__d=void 0;for(var o=0;o<n.length;o++)ve(n[o],n[++o],n[++o]);g.__c&&g.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(i){i.call(r)})}catch(i){g.__e(i,r.__v)}})}function Xt(e,t,n,o,r,i,a,l,_){var d,u,s,p,f,C,S,h=n.props,b=t.props,w=t.type;if(w==="svg"?r="http://www.w3.org/2000/svg":w==="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),i!=null){for(d=0;d<i.length;d++)if((f=i[d])&&"setAttribute"in f==!!w&&(w?f.localName===w:f.nodeType===3)){e=f,i[d]=null;break}}if(e==null){if(w===null)return document.createTextNode(b);e=document.createElementNS(r,w,b.is&&b),l&&(g.__m&&g.__m(t,i),l=!1),i=null}if(w===null)h===b||l&&e.data===b||(e.data=b);else{if(i=i&&O.call(e.childNodes),h=n.props||Y,!l&&i!=null)for(h={},d=0;d<e.attributes.length;d++)h[(f=e.attributes[d]).name]=f.value;for(d in h)if(f=h[d],d!="children"){if(d=="dangerouslySetInnerHTML")s=f;else if(!(d in b)){if(d=="value"&&"defaultValue"in b||d=="checked"&&"defaultChecked"in b)continue;re(e,d,null,f,r)}}for(d in b)f=b[d],d=="children"?p=f:d=="dangerouslySetInnerHTML"?u=f:d=="value"?C=f:d=="checked"?S=f:l&&typeof f!="function"||h[d]===f||re(e,d,f,h[d],r);if(u)l||s&&(u.__html===s.__html||u.__html===e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(s&&(e.innerHTML=""),Be(e,ee(p)?p:[p],t,n,o,w==="foreignObject"?"http://www.w3.org/1999/xhtml":r,i,a,i?i[0]:n.__k&&j(n,0),l,_),i!=null)for(d=i.length;d--;)ze(i[d]);l||(d="value",w==="progress"&&C==null?e.removeAttribute("value"):C!==void 0&&(C!==e[d]||w==="progress"&&!C||w==="option"&&C!==h[d])&&re(e,d,C,h[d],r),d="checked",S!==void 0&&S!==e[d]&&re(e,d,S,h[d],r))}return e}function ve(e,t,n){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(r){g.__e(r,n)}}function Ye(e,t,n){var o,r;if(g.unmount&&g.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||ve(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){g.__e(i,t)}o.base=o.__P=null}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&Ye(o[r],t,n||typeof e.type!="function");n||ze(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function en(e,t,n){return this.constructor(e,n)}function be(e,t,n){var o,r,i,a;g.__&&g.__(e,t),r=(o=typeof n=="function")?null:t.__k,i=[],a=[],me(t,e=(!o&&n||t).__k=v($,null,[e]),r||Y,Y,t.namespaceURI,!o&&n?[n]:r?null:t.firstChild?O.call(t.childNodes):null,i,!o&&n?n:r?r.__e:t.firstChild,o,a),qe(i,e,a)}function Je(e,t){var n={__c:t="__cC"+We++,__:e,Consumer:function(o,r){return o.children(r)},Provider:function(o){var r,i;return this.getChildContext||(r=new Set,(i={})[t]=this,this.getChildContext=function(){return i},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(a){this.props.value!==a.value&&r.forEach(function(l){l.__e=!0,he(l)})},this.sub=function(a){r.add(a);var l=a.componentWillUnmount;a.componentWillUnmount=function(){r&&r.delete(a),l&&l.call(a)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n}O=Fe.slice,g={__e:function(e,t,n,o){for(var r,i,a;t=t.__;)if((r=t.__c)&&!r.__)try{if((i=r.constructor)&&i.getDerivedStateFromError!=null&&(r.setState(i.getDerivedStateFromError(e)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,o||{}),a=r.__d),a)return r.__E=r}catch(l){e=l}throw e}},W=0,I.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=A({},this.state),typeof e=="function"&&(e=e(A({},n),this.props)),e&&A(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),he(this))},I.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),he(this))},I.prototype.render=$,F=[],Ve=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ue=function(e,t){return e.__v.__b-t.__v.__b},ne.__r=0,fe=0,pe=Ge(!1),ge=Ge(!0),We=0;var ye;function M(e,t){return g.__a&&g.__a(t),e}(ye=typeof globalThis<"u"?globalThis:typeof window<"u"?window:void 0)!=null&&ye.__PREACT_DEVTOOLS__&&ye.__PREACT_DEVTOOLS__.attachPreact("10.25.0",g,{Fragment:$,Component:I});var G,k,we,Qe,J=0,Ke=[],x=g,Xe=x.__b,et=x.__r,tt=x.diffed,nt=x.__c,ot=x.unmount,rt=x.__;function ie(e,t){x.__h&&x.__h(k,e,J||t),J=0;var n=k.__H||(k.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function V(e){return J=1,tn(ct,e)}function tn(e,t,n){var o=ie(G++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):ct(void 0,t),function(l){var _=o.__N?o.__N[0]:o.__[0],d=o.t(_,l);_!==d&&(o.__N=[d,o.__[1]],o.__c.setState({}))}],o.__c=k,!k.u)){var r=function(l,_,d){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(p){return!!p.__c});if(u.every(function(p){return!p.__N}))return!i||i.call(this,l,_,d);var s=o.__c.props!==l;return u.forEach(function(p){if(p.__N){var f=p.__[0];p.__=p.__N,p.__N=void 0,f!==p.__[0]&&(s=!0)}}),i&&i.call(this,l,_,d)||s};k.u=!0;var i=k.shouldComponentUpdate,a=k.componentWillUpdate;k.componentWillUpdate=function(l,_,d){if(this.__e){var u=i;i=void 0,r(l,_,d),i=u}a&&a.call(this,l,_,d)},k.shouldComponentUpdate=r}return o.__N||o.__}function Q(e,t){var n=ie(G++,3);!x.__s&&lt(n.__H,t)&&(n.__=e,n.i=t,k.__H.__h.push(n))}function it(e){return J=5,q(function(){return{current:e}},[])}function q(e,t){var n=ie(G++,7);return lt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function ae(e,t){return J=8,q(function(){return e},t)}function at(e){var t=k.context[e.__c],n=ie(G++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(k)),t.props.value):e.__}function nn(){for(var e;e=Ke.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(se),e.__H.__h.forEach(Ce),e.__H.__h=[]}catch(t){e.__H.__h=[],x.__e(t,e.__v)}}x.__b=function(e){k=null,Xe&&Xe(e)},x.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),rt&&rt(e,t)},x.__r=function(e){et&&et(e),G=0;var t=(k=e.__c).__H;t&&(we===k?(t.__h=[],k.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(se),t.__h.forEach(Ce),t.__h=[],G=0)),we=k},x.diffed=function(e){tt&&tt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ke.push(t)!==1&&Qe===x.requestAnimationFrame||((Qe=x.requestAnimationFrame)||on)(nn)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),we=k=null},x.__c=function(e,t){t.some(function(n){try{n.__h.forEach(se),n.__h=n.__h.filter(function(o){return!o.__||Ce(o)})}catch(o){t.some(function(r){r.__h&&(r.__h=[])}),t=[],x.__e(o,n.__v)}}),nt&&nt(e,t)},x.unmount=function(e){ot&&ot(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{se(o)}catch(r){t=r}}),n.__H=void 0,t&&x.__e(t,n.__v))};var st=typeof requestAnimationFrame=="function";function on(e){var t,n=function(){clearTimeout(o),st&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);st&&(t=requestAnimationFrame(n))}function se(e){var t=k,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),k=t}function Ce(e){var t=k;e.__c=e.__(),k=t}function lt(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function ct(e,t){return typeof t=="function"?t(e):t}const z=(e,{general:{font1:t,font2:n,font3:o}},r)=>{const i=e==="font1"?t:e==="font2"?n:e==="font3"?o:e;return r&&i==="inherit"?"Arial, sans-serif":i},rn=({mode:e,onEnd:t,date:n})=>`| mode: ${e},${e==="date"?` endDate: ${n},`:""} onEnd: ${t}`,$e=({widgetId:e,shouldShow:t,cause:n,timer:o})=>{console.log("%cGSC Countdown Timer App",`color: white; background: rgb(69,32,94);
        background: linear-gradient(111deg, rgba(69,32,94,1) 0%, rgba(177,39,39,1) 50%, rgba(252,176,69,1) 100%); font-size: 12px; font-weight: 600; border-radius: 6px; padding: 5px 10px;`,`ID: ${e??"N/A"} | show: ${t?"✅":"⛔"} | (${n}) ${o?rn(o):""}`)},ke="gsc-timer",_t=e=>e instanceof Date&&!Number.isNaN(e.getTime());class K{static loadData(t){const n={endDate:null,closeDate:null,hash:null};try{const o=localStorage.getItem(`${ke}-${t}`),r=JSON.parse(o??"{}"),i=new Date(r.endDate);_t(i)&&(n.endDate=i);const a=new Date(r.closeDate);_t(a)&&(n.closeDate=a),typeof r.hash=="string"&&(n.hash=r.hash)}catch{}return n}static saveData(t,n){try{const o=this.loadData(n);localStorage.setItem(`${ke}-${n}`,JSON.stringify({...o,endDate:t.endDate.toISOString(),hash:t.hash}))}catch{}}static setCloseDate(t,n){try{const o=this.loadData(n);o&&localStorage.setItem(`${ke}-${n}`,JSON.stringify({...o,closeDate:t.toISOString()}))}catch{}}}const dt=new Map().set("DM Sans, sans-serif","DM Sans").set("Space Grotesk, sans-serif","Space Grotesk").set("Inter, sans-serif","Inter").set("Eczar, serif","Eczar").set("Work Sans, sans-serif","Work Sans").set("Manrope, sans-serif","Manrope").set("Fira Sans, sans-serif","Fira Sans").set("PT Serif, serif","PT Serif, serif").set("Cardo, serif","Cardo").set("Lora, serif","Lora").set("Libre Franklin, sans-serif","Libre Franklin").set("Playfair Display, serif","Playfair Display").set("Roboto, sans-serif","Roboto").set("Roboto Mono, monospace","Roboto Mono").set("Anek Telugu, sans-serif","Anek Telugu").set("Quicksand, sans-serif","Quicksand").set("Cormorant, serif","Cormorant").set("Alegreya, serif","Alegreya").set("Poppins, sans-serif","Poppins").set("Oswald, sans-serif","Oswald").set("Raleway, sans-serif","Raleway").set("Lato, sans-serif","Lato").set("Fraunces, serif","Fraunces").set("Montserrat, sans-serif","Montserrat").set("Anton, sans-serif","Anton").set("Outfit, sans-serif","Outfit").set("Radley, sans-serif","Radley").set("Josefin Sans, sans-serif","Josefin Sans").set("Merriweather, serif","Merriweather").set("Lobster, sans-serif","Lobster").set("Dancing Script, cursive","Dancing Script").set("Pacifico, cursive","Pacifico").set("Italianno, cursive","Italianno").set("Old Standard TT, serif","Old Standard TT").set("Space Mono, monospace","Space Mono").set("Tenor Sans, sans-serif","Tenor Sans").set("Prata, serif","Prata").set("Sacramento, cursive","Sacramento").set("Chakra Petch, sans-serif","Chakra Petch").set("Pixelify Sans, sans-serif","Pixelify Sans").set("Satisfy, cursive","Satisfy").set("Amatic SC, cursive","Amatic SC").set("Alfa Slab One, cursive","Alfa Slab One").set("Righteous, cursive","Righteous").set("Yellowtail, cursive","Yellowtail").set("Bungee, cursive","Bungee").set("Silkscreen, cursive","Silkscreen").set("Rubik Bubbles, cursive","Rubik Bubbles").set("Luckiest Guy, cursive","Luckiest Guy").set("Squada One, cursive","Squada One").set("Special Elite, cursive","Special Elite").set("Matemasie, cursive","Matemasie").set("Fascinate Inline, cursive","Fascinate Inline").set("Honk, cursive","Honk").set("Nabla, cursive","Nabla").set("Rubic Dirt, system-ui","Rubic Dirt").set("Raleway Dots, sans-serif","Raleway Dots").set("Love Ya Like A Sister, cursive","Love Ya Like A Sister").set("Italiana, sans-serif","Italiana").set("Rye, serif","Rye").set("Tomorrow, sans-serif","Tomorrow").set("Chewy, system-ui","Chewy").set("Six Caps, sans-serif","Six Caps").set("Londrina Solid, sans-serif","Londrina Solid").set("Antonio, sans-serif","Antonio").set("Squada One, sans-serif","Squada One").set("Cabin Sketch, sans-serif","Cabin Sketch").set("Rubik Scribble, system-ui","Rubik Scribble").set("Freckle Face, system-ui","Freckle Face").set("Sancreek, serif","Sancreek").set("Stint Ultra Condensed, serif","Stint Ultra Condensed").set("Tourney, sans-serif","Tourney").set("Alumni Sans Inline One, sans-serif","Alumni Sans Inline One").set("Creepster, system-ui","Creepster").set("Eater, system-ui","Eater").set("Griffy, system-ui","Griffy").set("Mountains of Christmas, serif","Mountains of Christmas").set("Codystar, sans-serif","Codystar").set("Festive, cursive","Festive"),an=e=>{const t=[...new Set(e)].reduce((o,r)=>{if(dt.has(r)){const i=`${dt.get(r).replace(/ +/g,"+")}:400,500,600,700,800,900`;return[...o,i]}return o},[]);if(t.length===0)return null;const n=document.createElement("link");return n.rel="stylesheet",n.href=`https://fonts.googleapis.com/css?family=${t.join("|")}`,n},sn=()=>{const{settings:e}=P(),{font1:t,font2:n,font3:o}=e.general;Q(()=>{const r=an([t,n,o]);return r&&document.head.appendChild(r),()=>{r&&document.head.removeChild(r)}},[t,n,o])},ut="background: transparent",ft=(e,t)=>e&&parseInt(t)>0?`backdrop-filter: blur(${t}); -webkit-backdrop-filter: blur(${t});`:"",ln=({color:e,blur:t,enabled:n})=>{const o=ut;return n?{backgroundStyle:`
    background-color: ${e||"transparent"};
    ${ft(!0,t)}`,overlayStyle:o}:{backgroundStyle:"",overlayStyle:o}},cn=({enabled:e,source:t,src:n,bgColor:o,overlayColor:r,blur:i})=>{let a=ut;if(!e)return{backgroundStyle:"",overlayStyle:a};const l=t==="color",_=!!n;return a=`background: ${l?"transparent":r};`,{backgroundStyle:`
    background: ${l?o:_?`url(${n}) center / cover no-repeat`:"transparent"};
    ${ft(l,i)}`,overlayStyle:a}},_n=e=>"source"in e,le=e=>_n(e)?cn(e):ln(e),y=e=>`${(e==null?void 0:e.top)||"0"} ${(e==null?void 0:e.right)||"0"} ${(e==null?void 0:e.bottom)||"0"} ${(e==null?void 0:e.left)||"0"}`,pt=e=>({justify:e.endsWith("left")?"flex-start":e.endsWith("center")?"center":"flex-end",align:e.startsWith("top")?"flex-start":e.startsWith("center")?"center":"flex-end"}),gt=e=>{switch(e){case"left":return"flex-start";case"center":return"center";case"right":return"flex-end";default:return"initial"}},dn=(e,t)=>{const{general:n,content:o,section:r,type:i}=e,a=pt((r==null?void 0:r.contentDesktopPosition)||"center-center"),l=pt((r==null?void 0:r.contentMobilePosition)||"center-center");return`
    .gta-widget.${t} {
      --gta-font1: ${n.font1};
      --gta-font2: ${n.font2};
      --gta-font3: ${n.font3};
      --gta-banner-desktop-ratio: ${(r==null?void 0:r.desktopHeight)||"100%"};
      --gta-banner-mobile-ratio: ${(r==null?void 0:r.mobileHeight)||"100%"};

      --gta-banner-justify-content: ${a.justify};
      --gta-banner-align-items: ${a.align};

      --gta-content-direction: ${i==="bar"?"row":"column"};
      --gta-content-wrap: ${i==="bar"?"wrap":"nowrap"};
      --gta-content-desktop-width: ${o.desktopWidth};
      --gta-content-mobile-width: 100%;
      --gta-content-desktop-gap: ${o.desktopGap};
      --gta-content-mobile-gap: ${o.mobileGap};
    }

    @media screen and (max-width: ${n.breakpoint}) {
      .gta-widget.${t} {
        --gta-banner-justify-content: ${l.justify};
        --gta-banner-align-items: ${l.align};
      }
    }
  `};var un=0;function c(e,t,n,o,r,i){t||(t={});var a,l,_=t;"ref"in t&&(a=t.ref,delete t.ref);var d={type:e,props:_,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--un,__i:-1,__u:0,__source:r,__self:i};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)_[l]===void 0&&(_[l]=a[l]);return g.vnode&&g.vnode(d),d}const ht=({title:e,body:t})=>c("div",{className:"gta-block__error",children:[c("div",{className:"gta-block__error-title",children:e}),c("div",{className:"gta-block__error-body",children:t})]});function mt(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var o in t)if(o!=="__source"&&e[o]!==t[o])return!0;return!1}function vt(e,t){this.props=e,this.context=t}(vt.prototype=new I).isPureReactComponent=!0,vt.prototype.shouldComponentUpdate=function(e,t){return mt(this.props,e)||mt(this.state,t)};var bt=g.__b;g.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),bt&&bt(e)};var fn=g.__e;g.__e=function(e,t,n,o){if(e.then){for(var r,i=t;i=i.__;)if((r=i.__c)&&r.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}fn(e,t,n,o)};var yt=g.unmount;function wt(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),e.__c.__H=null),(e=function(o,r){for(var i in r)o[i]=r[i];return o}({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(o){return wt(o,t,n)})),e}function Ct(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(o){return Ct(o,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function xe(){this.__u=0,this.o=null,this.__b=null}function $t(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function ce(){this.i=null,this.l=null}g.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),yt&&yt(e)},(xe.prototype=new I).__c=function(e,t){var n=t.__c,o=this;o.o==null&&(o.o=[]),o.o.push(n);var r=$t(o.__v),i=!1,a=function(){i||(i=!0,n.__R=null,r?r(l):l())};n.__R=a;var l=function(){if(!--o.__u){if(o.state.__a){var _=o.state.__a;o.__v.__k[0]=Ct(_,_.__c.__P,_.__c.__O)}var d;for(o.setState({__a:o.__b=null});d=o.o.pop();)d.forceUpdate()}};o.__u++||32&t.__u||o.setState({__a:o.__b=o.__v.__k[0]}),e.then(a,a)},xe.prototype.componentWillUnmount=function(){this.o=[]},xe.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=wt(this.__b,n,o.__O=o.__P)}this.__b=null}var r=t.__a&&v($,null,e.fallback);return r&&(r.__u&=-33),[v($,null,t.__a?null:e.children),r]};var kt=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(ce.prototype=new I).__a=function(e){var t=this,n=$t(t.__v),o=t.l.get(e);return o[0]++,function(r){var i=function(){t.props.revealOrder?(o.push(r),kt(t,e,o)):r()};n?n(i):i()}},ce.prototype.render=function(e){this.i=null,this.l=new Map;var t=oe(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},ce.prototype.componentDidUpdate=ce.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){kt(e,n,t)})};var pn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,gn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,hn=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,mn=/[A-Z0-9]/g,vn=typeof document<"u",bn=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};I.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(I.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var xt=g.event;function yn(){}function wn(){return this.cancelBubble}function Cn(){return this.defaultPrevented}g.event=function(e){return xt&&(e=xt(e)),e.persist=yn,e.isPropagationStopped=wn,e.isDefaultPrevented=Cn,e.nativeEvent=e};var $n={enumerable:!1,configurable:!0,get:function(){return this.class}},St=g.vnode;g.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,o=t.type,r={},i=o.indexOf("-")===-1;for(var a in n){var l=n[a];if(!(a==="value"&&"defaultValue"in n&&l==null||vn&&a==="children"&&o==="noscript"||a==="class"||a==="className")){var _=a.toLowerCase();a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===!0?l="":_==="translate"&&l==="no"?l=!1:_[0]==="o"&&_[1]==="n"?_==="ondoubleclick"?a="ondblclick":_!=="onchange"||o!=="input"&&o!=="textarea"||bn(n.type)?_==="onfocus"?a="onfocusin":_==="onblur"?a="onfocusout":hn.test(a)&&(a=_):_=a="oninput":i&&gn.test(a)?a=a.replace(mn,"-$&").toLowerCase():l===null&&(l=void 0),_==="oninput"&&r[a=_]&&(a="oninputCapture"),r[a]=l}}o=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=oe(n.children).forEach(function(d){d.props.selected=r.value.indexOf(d.props.value)!=-1})),o=="select"&&r.defaultValue!=null&&(r.value=oe(n.children).forEach(function(d){d.props.selected=r.multiple?r.defaultValue.indexOf(d.props.value)!=-1:r.defaultValue==d.props.value})),n.class&&!n.className?(r.class=n.class,Object.defineProperty(r,"className",$n)):(n.className&&!n.class||n.class&&n.className)&&(r.class=r.className=n.className),t.props=r}(e),e.$$typeof=pn,St&&St(e)};var Lt=g.__r;g.__r=function(e){Lt&&Lt(e),e.__c};var Nt=g.diffed;g.diffed=function(e){Nt&&Nt(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value)};const kn=e=>{if(!/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return e;let t;return t=e.substring(1).split(""),t.length==3&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),t="0x"+t.join(""),"rgba("+[+t>>16&255,+t>>8&255,+t&255].join(",")+",1)"},Se=e=>{const t=/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+(\.\d+)?)\s*\)$/.exec(kn(e));if(!t)return null;const n=parseInt(t[1],10),o=parseInt(t[2],10),r=parseInt(t[3],10),i=parseFloat(t[4]);return{r:n,g:o,b:r,a:i,rgb:`rgb(${n}, ${o}, ${r})`}},xn=(e,t)=>{let n;return function(...o){const r=this;n&&clearTimeout(n),n=setTimeout(()=>{e.apply(r,o)},t)}},Le=e=>{if(!e||typeof e!="string")return null;const t=e.split("/");return t.length>1?t.pop():null},Mt=(e,t=window.location.origin)=>{if(e.includes(":")||e.startsWith("/")||e.startsWith("./"))return e;let n;try{n=new URL(e).toString()}catch{try{n=new URL(`//${e}`,t).toString(),n===`https://${e}`&&(n=new URL(e,t).toString())}catch{n="#"}}return n};var H=(e=>(e.Home="home",e.Collection="collection",e.Product="product",e.Cart="cart",e.Account="account",e.SearchResults="searchresults",e.Page="page",e.Article="article",e.Password="password",e))(H||{});const X=class X{};Ie(X,"apply",async({pages:{home:t,products:n,collections:o,password:r,cart:i,other:a}})=>{const l=X.getMetaPage(),{product_tags:_=[],product_collections:d=[]}=window.GSC_COUNTDOWN_META||{},{pageType:u,resourceId:s}=l;if(u===H.Home&&t)return[!0,"home"];if(u===H.Password&&r)return[!0,"password"];if(u===H.Cart&&i)return[!0,"cart"];if(u===H.Product){if(!n.enabled)return[!1,"products_disabled"];if(n.mode==="all")return[!0,"all_products"];if(n.mode==="tags"){const p=n.tags.map(f=>f.toLowerCase().trim());return[(_||[]).some(f=>p.includes(f.toLowerCase().trim())),"product_tags"]}if(n.mode==="specific")return[n.specificProducts.some(p=>Le(p.id)===(s==null?void 0:s.toString())),"specific_products"];if(n.mode==="productsInCollections"){const p=(d||[]).map(f=>f.id.toString());return[n.productsInCollections.some(f=>p.includes(Le(f.id))),"product_in_collections"]}}return o.enabled&&u===H.Collection?o.enabled?o.mode==="all"?[!0,"all_collections"]:[o.items.some(p=>Le(p.id)===(s==null?void 0:s.toString())),"specific_collection"]:[!1,"collections_disabled"]:a&&![H.Home,H.Password,H.Collection,H.Product,H.Cart].includes(u)?[!0,"other_page"]:[!1,"not_matched"]}),Ie(X,"getMetaPage",()=>{var n;const t=(n=window.ShopifyAnalytics)==null?void 0:n.meta.page;return t?(t.pageType||(window.document.location.pathname==="/cart"?t.pageType=H.Cart:window.document.location.pathname==="/account"&&(t.pageType=H.Account),t.pageType="page"),t):{pageType:"page"}});let Ne=X;const Tt=Je(void 0),P=()=>at(Tt),Dt=e=>{try{let t=e==null?void 0:e.settings;if(typeof(e==null?void 0:e.settings)=="string"&&(t=JSON.parse((e==null?void 0:e.settings)||"")),t&&typeof t=="object"&&"content"in t)return(e==null?void 0:e.platform)==="Preview"&&(t={...t,general:{...t.general,breakpoint:e.isMobilePreview?"9999px":"1px"}}),t}catch{}return null},Sn=({children:e,bootstrap:t})=>{var d,u,s;const[n,o]=M(V(Dt(t)),"settings"),[r,i]=M(V(!1),"show"),a=M(q(()=>(n==null?void 0:n.content.backgroundClick)||{enabled:!1,target:"_self",url:""},[n==null?void 0:n.content.backgroundClick]),"backgroundClick"),l=(t==null?void 0:t.platform)==="Preview"||!1,_=(d=window.Shopify)==null?void 0:d.designMode;return Q(()=>o(Dt(t)),[t]),Q(()=>{if(n){if(!l&&(n==null?void 0:n.enabled)===!1){i(!1),$e({widgetId:n.key,shouldShow:!1,cause:"widget_disabled"});return}if(l||_||!n.targeting){i(!0),$e({widgetId:n.key,shouldShow:!0,cause:l?"is_preview":_?"is_theme_editor":"no_targeting",timer:n.timer});return}Ne.apply(n.targeting).then(([p,f])=>{i(p),$e({widgetId:n.key,shouldShow:p,cause:`targeting: ${f}`,timer:n.timer})})}},[n,l,_]),(u=window.Shopify)!=null&&u.designMode&&!(t!=null&&t.widgetId)?c(ht,{title:"Paste the Widget ID for the timer to appear.",body:"Widget will be hidden on the storefront."}):(s=window.Shopify)!=null&&s.designMode&&n&&n.type!=="bar"&&n.enabled===!1?c(ht,{title:"Enable widget in App admin",body:"Widget will be hidden on the storefront."}):!n||!r?null:c(Tt.Provider,{value:{bootstrap:t||{},isPreview:(t==null?void 0:t.platform)==="Preview",settings:n,backgroundClick:a},children:e})},_e=864e5,Ht=["00","00","00","00","00"],Et=({hours:e,minutes:t,seconds:n})=>{const o=new Date;return o.setHours(o.getHours()+e),o.setMinutes(o.getMinutes()+t),o.setSeconds(o.getSeconds()+n),o},Ln=e=>e.map(t=>t.toString().padStart(2,"0")),Nn=(e,t="d:h:m:s")=>{const n=t.includes("d")?Math.floor(e%_e/36e5):Math.floor(e/36e5),o=t.includes("h")?Math.floor(e%(1e3*60*60)/(1e3*60)):Math.floor(e/(1e3*60));let r=Math.floor(e%(1e3*60)/1e3);const i=Math.floor(e%1e3/10);t==="s:ms"&&(r=Math.floor(e/1e3));const a=Ln([Math.floor(e/_e),n>999?999:n,o>999?999:o,r]);return a.push(i.toString().padStart(2,"0")),a},Pt=Je(void 0),Me=()=>at(Pt),Mn=({children:e})=>{const{isPreview:t,bootstrap:{widgetId:n},settings:{timer:o,type:r,content:{items:i}}}=P(),a=i.find(N=>N.type==="timer").unitFormat||"d:h:m:s",l=JSON.stringify(o),[_,d]=M(V(0),"timerDep"),u=ae(()=>{d(N=>N+1)},[]),s=M(it(),"timerRef"),p=M(it(null),"rafRef"),[f,C]=M(V(Ht),"labels"),[S,h]=M(V(!1),"show"),[b,w]=M(V(!1),"isClosed"),R=ae((N=!1)=>{const L=K.loadData(n);if(L.endDate&&(new Date().getTime()-L.endDate.getTime()>_e||!N)){const E=Et(o);K.saveData({endDate:E,hash:l},n),u()}},[n,o,l,u]),T=ae(()=>{clearInterval(s.current),p.current&&cancelAnimationFrame(p.current);const{mode:N,onEnd:L}=o;N==="evergreen"&&(["restart","wait_one_day"].includes(L)||t)&&R(L==="wait_one_day"&&!t),(L==="none"||L==="restart")&&h(!0),L==="hide"&&h(!1)},[o,t,R]);Q(()=>{let N=new Date(o.date),L=null;const E=K.loadData(n);E!=null&&E.closeDate&&(L=new Date(E.closeDate)),o.mode==="evergreen"&&(!E.endDate||E.hash!==l?(N=Et(o),K.saveData({endDate:N,hash:l},n)):N=E.endDate);const D=a.includes("ms");let Z=-1;const de=()=>{var qt;if(b)return;const Oe=N.getTime()-new Date().getTime();if(Oe>0){h(!0);const Yt=Math.floor(Oe%(1e3*60)/1e3);(D||Yt!==Z)&&(C(Nn(Oe,a)),Z=Yt),D&&p.current!==void 0&&(p.current=requestAnimationFrame(de));return}C(Ht),T(),((qt=window.Shopify)!=null&&qt.designMode||t)&&h(!0)};return(r!=="bar"||!L||new Date().getTime()-L.getTime()>_e)&&(D?p.current=requestAnimationFrame(de):(s.current=window.setInterval(de,500),de())),()=>{clearInterval(s.current),p.current&&(cancelAnimationFrame(p.current),p.current=null)}},[T,o,l,a,n,t,_,r,b]);const U=ae(()=>{K.setCloseDate(new Date,n),h(!1),w(!0)},[n]),B=M(q(()=>({show:S,labels:f,close:U}),[f,S,U]),"value");return c(Pt.Provider,{value:B,children:e})};function Rt(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=Rt(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function m(){for(var e,t,n=0,o="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=Rt(e))&&(o&&(o+=" "),o+=t);return o}const Ot="https://shopify-apps.getsitectrl.com/collect",It=async(e,t)=>{var a,l;let n=!1;const o=(a=window.Shopify)==null?void 0:a.shop,r=(l=window.Shopify)==null?void 0:l.designMode;if(!o||r)return;const i=JSON.stringify({app:"countdown",shop:o,metrics:[{widget:e,type:t,value:1}]});try{if(typeof window.navigator.sendBeacon=="function"){const _=new Blob([i],{type:"application/json"});n=window.navigator.sendBeacon(Ot,_)}n||await fetch(Ot,{method:"POST",headers:{"Content-Type":"application/json"},body:i})}catch(_){console.error("Failed to send metric:",_)}},Tn=xn(It,250),Dn=(e,t)=>{const[n,o]=M(V(!1),"shown");Q(()=>{t&&e&&!n&&(o(!0),Te(t,"view",!0))},[e,n,t])},Te=async(e,t,n=!1)=>{n?It(e,t):Tn(e,t)},Hn=({border:e,background:t,radius:n,padding:o,margin:r},i,a)=>{const{backgroundStyle:l,overlayStyle:_}=le(t);return`
  .gta-banner.${a} {
    border: ${e.enabled?`${e.size} solid ${e.color}`:"initial"};
    margin: ${y(r==null?void 0:r.desktop)};
    padding: ${y(o.desktop)};
    ${n.enabled?`border-radius: ${n.value};`:""}
    ${l}
  }

  div[id*="gsc_countdown_timer"]:has(.gta-banner) {
    width: 100%;
  }

  .gta-banner__overlay.${a} {
    ${_}
  }

  @media screen and (max-width: ${i}) {
    .gta-banner.${a} {
      margin: ${y(r==null?void 0:r.mobile)};
      padding: ${y(o.mobile)};
    }
  }
`},En=({children:e})=>{const{settings:{section:t,general:{breakpoint:n}},bootstrap:{blockId:o}}=P();return t?c($,{children:[c("style",{children:Hn(t,n,o)}),c("div",{className:`gta-banner ${o}`,children:[c("div",{className:`gta-banner__content-wrap ${o}`,children:e}),c("div",{className:`gta-banner__overlay ${o}`,children:[c("div",{})," "]})]})]}):null},Pn=(e,t,n)=>{const{background:o,border:r}=e;return`
  .gta-content__button-container.${e.id} {
    width: ${e.width==="full"?"100%":"auto"};
  }

  .gta-content__button.${e.id} {
    font-family: ${z(e.fontFamily,t,n)};
    font-size: ${e.desktopFontSize};
    font-weight: ${e.fontWeight};
    color: ${e.textColor};
    box-sizing: border-box;
    padding: ${y(e.padding.desktop)};
    margin: ${e.margin?y(e.margin.desktop):"unset"};
    background: ${o.enabled?o.color:"transparent"};
    border: ${r.enabled?`${r.size} solid ${r.color}`:"none"};
    width: ${e.width==="full"?"100%":"auto"};
    text-transform: ${e.textTransform};
    letter-spacing: ${e.desktopLetterSpacing};
    ${e.radius.enabled?`border-radius: ${e.radius.value};`:""}

    ${o.enabled&&parseInt(o.blur)>0?`backdrop-filter: blur(${o.blur}); -webkit-backdrop-filter: blur(${o.blur});`:""}
  }

  .gta-content__button.${e.id}:hover {
    color: ${e.textColor} !important;
    border: ${r.enabled&&`${r.size} solid ${r.color}`} !important;
  }

  @media screen and (max-width: ${t.general.breakpoint}) {
    .gta-content__button.${e.id} {
      font-size: ${e.mobileFontSize};
      letter-spacing: ${e.mobileLetterSpacing};
      padding: ${y(e.padding.mobile)};
      margin: ${e.margin?y(e.margin.mobile):"unset"};
    }
  }
`},De=e=>{const{settings:t,isPreview:n,bootstrap:{selectedItemId:o,onItemSelect:r}}=P();if(!e.label)return null;const i=()=>{n?r==null||r(e.id):Te(t.key,"openUrl",e.target!=="_blank")};return c("div",{className:m("gta-content__button-container",e.id,{"gta--selectable":n,"gta--selected":o===e.id}),children:[c("style",{children:Pn(e,t,n)}),c("a",{...!n&&{href:Mt(e.href)},onClick:i,target:e.target,className:m("gta-content__button",e.id),children:e.label})]})},Rn=({color:e,onClick:t})=>c("button",{onClick:t,className:"gta-content__close-btn","aria-label":"Close timer bar",children:c("svg",{viewBox:"0 0 16 16",fill:"none",children:[c("path",{d:"M14 2L2 14ZM14 14L2 2Z",fill:"black",style:"fill:black;fill-opacity:1;"}),c("path",{d:"M14 2L2 14M14 14L2 2",stroke:e,style:`stroke:${e};stroke-opacity:1;`,"stroke-width":"2"})]})}),At=e=>v("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v("path",{d:"M21.9019 8.35267C21.0685 7.46478 19.8121 6.94884 18.0705 6.76886V5.85696C18.0705 4.21316 17.349 2.62934 16.0802 1.52547C14.7989 0.397604 13.132 -0.130334 11.4029 0.0256473C8.42983 0.301615 5.92946 3.07329 5.92946 6.07294V6.76886C4.18792 6.94884 2.93151 7.46478 2.09806 8.35267C0.891415 9.64852 0.928734 11.3763 1.06557 12.5762L1.93634 19.2594C2.19758 21.5991 3.18031 23.9988 8.52934 23.9988H15.4707C20.8197 23.9988 21.8024 21.5991 22.0637 19.2714L22.9344 12.5642C23.0713 11.3763 23.0961 9.64852 21.9019 8.35267ZM11.5771 1.69345C12.821 1.58546 14.0028 1.95742 14.9233 2.76133C15.8314 3.55323 16.3414 4.6811 16.3414 5.85696V6.69687H7.65857V6.07294C7.65857 3.93719 9.48719 1.88543 11.5771 1.69345ZM7.54661 13.3801H7.53417C6.84999 13.3801 6.29021 12.8401 6.29021 12.1802C6.29021 11.5203 6.84999 10.9804 7.53417 10.9804C8.23079 10.9804 8.79058 11.5203 8.79058 12.1802C8.79058 12.8401 8.23079 13.3801 7.54661 13.3801ZM16.2543 13.3801H16.2419C15.5577 13.3801 14.9979 12.8401 14.9979 12.1802C14.9979 11.5203 15.5577 10.9804 16.2419 10.9804C16.9385 10.9804 17.4983 11.5203 17.4983 12.1802C17.4983 12.8401 16.9385 13.3801 16.2543 13.3801Z",fill:"currentColor"})),Vt=e=>v("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.208 4.29725H20.688C21.756 4.29725 24 4.29726 24 7.36888C24 9.38463 23.232 10.1045 22.224 10.3445C21.888 10.4165 21.54 10.4405 21.168 10.4405H2.832C2.472 10.4405 2.1 10.4285 1.752 10.3445C1.38 10.2605 1.032 10.1045 0.744 9.80458C0.24 9.30064 0 8.53274 0 7.36888C0 4.29726 2.244 4.29725 3.324 4.29725H3.804L7.848 0.24175C8.184 -0.0822108 8.712 -0.0822108 9.036 0.24175C9.36 0.577709 9.36 1.10564 9.036 1.4296L6.168 4.29725H17.832L14.964 1.4296C14.64 1.09365 14.64 0.56571 14.964 0.24175C15.3 -0.0822108 15.828 -0.0822108 16.152 0.24175L20.208 4.29725ZM3.44389 12.0002H20.4599C21.2159 12.0002 21.7799 12.6842 21.6359 13.4281L20.4239 19.7033C19.9919 21.971 19.2719 23.9988 15.2279 23.9988H8.49589C4.49989 23.9988 3.59989 21.6231 3.26389 19.5593L2.25589 13.3921C2.13589 12.6602 2.69989 12.0002 3.44389 12.0002ZM9.50389 20.5792C9.95989 20.5792 10.3319 20.2072 10.3319 19.7393V15.7798C10.3319 15.3238 9.95989 14.9399 9.50389 14.9399C9.03589 14.9399 8.66389 15.3238 8.66389 15.7798V19.7393C8.66389 20.2072 9.03589 20.5792 9.50389 20.5792ZM14.6279 20.5792C15.0959 20.5792 15.4679 20.2072 15.4679 19.7393V15.7798C15.4679 15.3238 15.0959 14.9399 14.6279 14.9399C14.1719 14.9399 13.7879 15.3238 13.7879 15.7798V19.7393C13.7879 20.2072 14.1719 20.5792 14.6279 20.5792Z",fill:"currentColor"})),Wt=e=>v("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v("path",{fill:"currentColor",fillRule:"evenodd",d:"M6 4a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-.5V9.5a5 5 0 0 0-5-5H6V4ZM4 6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4H4Z",clipRule:"evenodd"})),Ft=e=>v("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.38186 7.63636H6.92722C4.82612 7.63636 3.56819 8.0616 2.81488 8.81491C2.06158 9.56821 1.63635 10.8262 1.63635 12.9273V17.0727C1.63635 19.1738 2.06158 20.4318 2.81488 21.1851C3.56819 21.9384 4.82612 22.3636 6.92722 22.3636H11.0726C13.1738 22.3636 14.4317 21.9384 15.185 21.1851C15.9383 20.4318 16.3635 19.1738 16.3635 17.0727V14.6182H13.6909C12.3365 14.6182 11.1732 14.403 10.3851 13.6149C9.59703 12.8268 9.38186 11.6635 9.38186 10.3091V7.63636ZM17.9915 13.6824C17.9754 13.5706 17.9367 13.4661 17.8801 13.3736C17.8468 13.3191 17.8068 13.268 17.7603 13.2215L10.7786 6.23966C10.7428 6.20386 10.7042 6.1719 10.6635 6.1439C10.5317 6.05314 10.372 6 10.1999 6H10.1999C10.1999 6 10.1998 6 10.1998 6H6.92722C4.66472 6 2.86813 6.44749 1.65781 7.65782C0.447489 8.86815 0 10.6648 0 12.9273V17.0727C0 19.3352 0.447489 21.1318 1.65781 22.3422C2.86813 23.5525 4.66472 24 6.92722 24H11.0726C13.3351 24 15.1317 23.5525 16.3421 22.3422C17.5524 21.1318 17.9999 19.3352 17.9999 17.0727V13.8148C18.0007 13.7704 17.9978 13.7261 17.9915 13.6824ZM11.0182 10.3091V8.79347L15.2065 12.9818H13.6909C12.4272 12.9818 11.845 12.7607 11.5422 12.4578C11.2394 12.155 11.0182 11.5729 11.0182 10.3091Z",fill:"currentColor"}),v("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.8182 1.63636H12.9491L11.8365 1.63637L11.8326 1.63636H10.0909C8.73187 1.63636 7.63636 2.73187 7.63636 4.09091C7.63636 4.54278 7.27005 4.90909 6.81818 4.90909C6.36631 4.90909 6 4.54278 6 4.09091C6 1.82813 7.82813 1.18594e-09 10.0909 1.18594e-09H12.9491L12.9525 6.95586e-06L16.6117 1.18594e-09C16.6158 1.18594e-09 16.6199 3.0379e-05 16.624 9.09227e-05C16.8411 -0.00314692 17.0554 0.0801569 17.2149 0.239664L23.7603 6.78512C23.7961 6.82088 23.828 6.8594 23.856 6.90008C23.9528 7.0408 24.0024 7.20747 23.9999 7.37583V14.1164C23.9999 16.2591 22.2591 18 20.1163 18C19.6644 18 19.2981 17.6337 19.2981 17.1818C19.2981 16.7299 19.6644 16.3636 20.1163 16.3636C21.3553 16.3636 22.3636 15.3554 22.3636 14.1164V8.18184H19.9091C18.6365 8.18184 17.5277 7.9803 16.7737 7.22629C16.0197 6.47229 15.8182 5.36353 15.8182 4.09093V1.63636ZM17.4545 4.09093V2.79347L21.2065 6.54548H19.9091C18.7271 6.54548 18.1995 6.33793 17.9308 6.06921C17.6621 5.80049 17.4545 5.27288 17.4545 4.09093Z",fill:"currentColor"})),zt=e=>v("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v("path",{d:"M23.16 10.5747C23.628 10.5747 24 10.1941 24 9.71526V8.57345C24 3.53969 22.5 2.005 17.58 2.005H6.42C1.5 2.005 0 3.53969 0 8.57345V9.15049C0 9.62932 0.372 10.0099 0.84 10.0099C1.92 10.0099 2.796 10.9062 2.796 12.0111C2.796 13.1161 1.92 14.0001 0.84 14.0001C0.372 14.0001 0 14.3807 0 14.8595V15.4366C0 20.4703 1.5 22.005 6.42 22.005H17.58C22.5 22.005 24 20.4703 24 15.4366C24 14.9577 23.628 14.5771 23.16 14.5771C22.08 14.5771 21.204 13.6809 21.204 12.5759C21.204 11.4709 22.08 10.5747 23.16 10.5747ZM8.4 8.1683C9.06 8.1683 9.6 8.72078 9.6 9.39604C9.6 10.0713 9.072 10.6238 8.4 10.6238C7.74 10.6238 7.2 10.0713 7.2 9.39604C7.2 8.72078 7.728 8.1683 8.4 8.1683ZM15.6 16.7625C14.928 16.7625 14.388 16.21 14.388 15.5348C14.388 14.8595 14.928 14.307 15.588 14.307C16.248 14.307 16.788 14.8595 16.788 15.5348C16.788 16.21 16.272 16.7625 15.6 16.7625ZM16.68 8.90494L8.604 17.1677C8.424 17.3518 8.196 17.4378 7.968 17.4378C7.74 17.4378 7.512 17.3518 7.332 17.1677C6.984 16.8116 6.984 16.2223 7.332 15.8663L15.408 7.60353C15.756 7.24749 16.332 7.24749 16.68 7.60353C17.028 7.95958 17.028 8.5489 16.68 8.90494Z",fill:"currentColor"})),Ut=e=>v("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v("path",{d:"M23.4383 10.644L21.6138 8.81723C21.3017 8.50476 21.0497 7.89184 21.0497 7.45919V4.8633C21.0497 3.80571 20.1855 2.94042 19.1292 2.94042H16.5486C16.1164 2.94042 15.5043 2.68804 15.1922 2.37557L13.3678 0.548828C12.6236 -0.196289 11.3993 -0.196289 10.6551 0.548828L8.80663 2.37557C8.50655 2.68804 7.8944 2.94042 7.45029 2.94042H4.86965C3.81339 2.94042 2.94917 3.80571 2.94917 4.8633V7.44718C2.94917 7.87983 2.69711 8.49274 2.38503 8.80521L0.56058 10.632C-0.183605 11.3771 -0.183605 12.6029 0.56058 13.348L2.38503 15.1748C2.69711 15.4872 2.94917 16.1002 2.94917 16.5328V19.1167C2.94917 20.1743 3.81339 21.0396 4.86965 21.0396H7.45029C7.8824 21.0396 8.49455 21.2919 8.80663 21.6044L10.6311 23.4312C11.3753 24.1763 12.5996 24.1763 13.3438 23.4312L15.1682 21.6044C15.4803 21.2919 16.0924 21.0396 16.5245 21.0396H19.1052C20.1615 21.0396 21.0257 20.1743 21.0257 19.1167V16.5328C21.0257 16.1002 21.2777 15.4872 21.5898 15.1748L23.4143 13.348C24.1945 12.6149 24.1945 11.3891 23.4383 10.644ZM7.19823 8.3966C7.19823 7.73561 7.73836 7.1948 8.39853 7.1948C9.05869 7.1948 9.59883 7.73561 9.59883 8.3966C9.59883 9.05759 9.07069 9.5984 8.39853 9.5984C7.73836 9.5984 7.19823 9.05759 7.19823 8.3966ZM9.03469 16.2444C8.85464 16.4246 8.62659 16.5088 8.39853 16.5088C8.17047 16.5088 7.94241 16.4246 7.76237 16.2444C7.41428 15.8958 7.41428 15.319 7.76237 14.9705L14.9642 7.75964C15.3122 7.41112 15.8884 7.41112 16.2365 7.75964C16.5846 8.10817 16.5846 8.68503 16.2365 9.03356L9.03469 16.2444ZM15.6003 16.8092C14.9282 16.8092 14.388 16.2684 14.388 15.6074C14.388 14.9464 14.9282 14.4056 15.5883 14.4056C16.2485 14.4056 16.7886 14.9464 16.7886 15.6074C16.7886 16.2684 16.2605 16.8092 15.6003 16.8092Z",fill:"currentColor"})),Bt=e=>v("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v("path",{d:"M22.1763 7.70709L16.2892 1.81165C15.0546 0.575297 13.3521 -0.0884282 11.6107 0.00267132L5.11271 0.315013C2.51352 0.432141 0.447173 2.5014 0.317214 5.09123L0.00531148 11.5983C-0.072664 13.3422 0.577132 15.0471 1.81174 16.2835L7.69889 22.1789C10.1161 24.5995 14.0409 24.5995 16.4711 22.1789L22.1763 16.4657C24.6066 14.058 24.6066 10.1277 22.1763 7.70709ZM8.75156 12.4963C6.69821 12.4963 5.00874 10.8175 5.00874 8.74823C5.00874 6.67897 6.69821 5.00013 8.75156 5.00013C10.8049 5.00013 12.4944 6.67897 12.4944 8.74823C12.4944 10.8175 10.8049 12.4963 8.75156 12.4963ZM19.1873 13.993L13.9889 19.1986C13.794 19.3939 13.5471 19.485 13.3001 19.485C13.0532 19.485 12.8063 19.3939 12.6114 19.1986C12.2345 18.8212 12.2345 18.1966 12.6114 17.8191L17.8097 12.6135C18.1866 12.236 18.8104 12.236 19.1873 12.6135C19.5642 12.9909 19.5642 13.6155 19.1873 13.993Z",fill:"currentColor"})),On=()=>t=>fetch(`/discount/${encodeURI(t)}`,{redirect:"manual"}),In=()=>{const[e,t]=M(V(!1),"isCopying");return{isCopying:e,copyToClipboard:async({text:o,options:{waitForAnimations:r}})=>{if(t(!0),r){const i=()=>{Promise.all(r.getAnimations({subtree:!0}).map(a=>a.finished)).finally(()=>t(!1))};r.addEventListener("animationstart",i,{once:!0})}await(navigator==null?void 0:navigator.clipboard.writeText(o)),r||t(!1)}}},An=(e,t,n)=>{const{background:o,border:r}=e,i=t.content.background;let a;"source"in i?a=i.source==="color"?i.bgColor:"green":a=i.color;const l=Se(e.textColor),_=Se(o.color),d=Se(a),u=i.enabled&&(d==null?void 0:d.a)!==0,s=o.enabled&&(_==null?void 0:_.a)!==0;let p=u?a:"green";return s&&(l==null?void 0:l.rgb)!==(_==null?void 0:_.rgb)&&(p=o.color),`
  .gta-coupon.${e.id} {
    font-family: ${z(e.fontFamily,t,n)};
    font-size: ${e.desktopFontSize};
    font-weight: ${e.fontWeight};
    text-transform: ${e.textTransform};
    color: ${e.textColor};
    padding: ${y(e.padding.desktop)};
    margin: ${e.margin?y(e.margin.desktop):"unset"};
    background-color: ${o.enabled?o.color:"transparent"};
    border: ${r.enabled?`${r.size} dashed ${r.color}`:"none"};
    ${e.radius.enabled?`border-radius: ${e.radius.value};`:""}
    gap: .25em;
  }

  @media screen and (max-width: ${t.general.breakpoint}) {
    .gta-coupon.${e.id} {
      font-size: ${e.mobileFontSize};
      padding: ${y(e.padding.mobile)};
      margin: ${e.margin?y(e.margin.mobile):"unset"};
      gap: ${parseInt(e.mobileFontSize)*.25}px;
    }
  }

  .${e.id} .gta-coupon__checkmark-icon {
    stroke: ${p};
  }

  .${e.id} .gta-coupon__checkmark {
    background-color: ${e.textColor};
  }
`},Vn={copy:Wt,"copy-outlined":Ft,bag:At,basket:Vt,discount:zt,"discount-star":Ut,tag:Bt},He=e=>{const{settings:t,isPreview:n,bootstrap:{selectedItemId:o,onItemSelect:r}}=P(),i=On(),{isCopying:a,copyToClipboard:l}=In();if(!e.code)return null;const _=async d=>{const u=d.currentTarget;d.stopPropagation();try{await l({text:e.code,options:{waitForAnimations:u}}),await i(e.code),Te(t.key,"applyDiscount")}catch(s){console.log("Coupon code error",s)}};return c($,{children:[c("style",{children:An(e,t,n)}),c("button",{type:"button",onClick:n?()=>r==null?void 0:r(e.id):_,className:m("gta-content__coupon gta-coupon",e.id,{"gta--selectable":n,"gta--selected":o===e.id,"gta-coupon--animating":a}),children:[e.icon.enabled&&c("div",{className:"gta-coupon__icon",children:Vn[e.icon.type]()}),e.label?e.label:e.code,c("div",{className:"gta-coupon__checkmark"}),c("svg",{className:"gta-coupon__checkmark-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"10 11 32 32",children:c("path",{fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})})]})]})},Wn=(e,t,n)=>`
  .gta-content__text.${e.id} {
    width: ${t.type==="bar"?"auto":"100%"};
    text-align: ${t.content.align};
    font-family: ${z(e.fontFamily,t,n)};
    font-size: ${e.desktopFontSize};
    font-weight: ${e.fontWeight};
    line-height: ${e.desktopLineHeight??e.lineHeight};
    color: ${e.color};
    text-transform: ${e.textTransform};
    letter-spacing: ${e.desktopLetterSpacing};
    padding: ${y(e.padding.desktop)};
    box-sizing: border-box;
  }

  @media screen and (max-width: ${t.general.breakpoint}) {
    .gta-content__text.${e.id} {
      font-size: ${e.mobileFontSize};
      letter-spacing: ${e.mobileLetterSpacing};
      padding: ${y(e.padding.mobile)};
      line-height: ${e.mobileLineHeight??e.lineHeight};
      ${t.type==="bar"?"text-align: center;":""}
    }
  }
`,Ee=e=>{const{settings:t,isPreview:n,bootstrap:{selectedItemId:o,onItemSelect:r}}=P();return c($,{children:[c("style",{children:Wn(e,t,n)}),c("div",{...n&&{onClick:()=>r==null?void 0:r(e.id)},className:m("gta-content__text",e.id,{"gta--selectable":n,"gta--selected":o===e.id}),children:e.value})]})},Fn=({id:e,digits:t,labels:n,border:o,radius:r,background:i,layout:a,separator:l,desktopWidth:_,mobileWidth:d,padding:u,margin:s},p,f)=>`
  .gta-content__timer.${e} {
    display: inline-flex;
    vertical-align: middle;

    border: ${o.enabled&&a==="stacked"?`${o.size} solid ${o.color}`:"unset"};
    background: ${a==="stacked"&&i.enabled?i.color:"unset"};
    width: ${_};
    margin: ${y(s==null?void 0:s.desktop)};
    padding: ${y(u.desktop)};
    box-sizing: border-box;

    ${a==="stacked"&&r.enabled?`border-radius: ${r.value};`:""}
    ${i.enabled&&a==="stacked"&&parseInt(i.blur)>0?`backdrop-filter: blur(${i.blur});`:""}
    -webkit-backdrop-filter: none;
  }

  .gta-timer__wrapper.${e} {
    gap: ${l.enabled?"6px":"12px"};
  }

  .gta-timer__unit.${e} {
    border: ${o.enabled&&a==="separate"?`${o.size} solid ${o.color}`:"unset"};
    background: ${a==="separate"&&i.enabled?i.color:"unset"};

    ${i.enabled&&a==="separate"&&parseInt(i.blur)>0?`backdrop-filter: blur(${i.blur});`:""}
    -webkit-backdrop-filter: none;

    ${a==="separate"&&r.enabled?`border-radius: ${r.value};`:""}
  }

  .gta-timer__unit-value.${e} {
    color: ${t.color};
    font-size: ${t.fontSize};
    font-family: ${z(t.fontFamily,p,f)};
    font-weight: ${t.fontWeight};
  }

  .gta-timer__unit-label.${e} {
    color: ${n.color};
    font-size: ${n.fontSize};
    font-family: ${z(n.fontFamily,p,f)};
    font-weight: ${n.fontWeight};
    text-transform: ${n.textTransform};
  }

  .gta-timer__separator.${e} {
    color: ${l.color};
    padding-bottom: 5px;
  }

  @media screen and (max-width: ${p.general.breakpoint}) {
    .gta-content__timer.${e} {
      width: ${d};
      margin: ${y(s==null?void 0:s.mobile)};
      padding: ${y(u.mobile)};
    }
  }
`,zn=({id:e,fontSize:t,digits:n,padding:o},r,i)=>`
  .gta-content__timer-text.${e} {
    display: inline-block;
    white-space: nowrap;
    margin: 0;
    padding: ${y(o.desktop)};

    font-size: ${t.desktop};
    font-family: ${z(n.fontFamily,r,i)};
    font-weight: ${n.fontWeight}; 
    color: ${n.color};
  }

  .gta-timer-text__unit-value.${e} {   
    min-width: 2ch;
    text-align: center;
    font-variant-numeric: tabular-nums;
  }

  .gta-timer-text__separator.${e} {
    margin-inline: 0.15ch;
  }

  @media screen and (max-width: ${r.general.breakpoint}) {
    .gta-content__timer-text.${e} {
      font-size: ${t.mobile};
      margin: 0;
      padding: ${y(o.mobile)};
    }
  }
`,Un=e=>{switch(e.split(":").length){case 4:return 500;case 3:return 370;case 2:return 240;default:return 240}},Pe=e=>{const{settings:t,isPreview:n,bootstrap:{selectedItemId:o,onItemSelect:r}}=P(),{view:i="custom",labels:a,unitFormat:l="d:h:m:s"}=e,_=t.type==="embed",d=e.separator.enabled,u=_?!1:a.enabled,{labels:[s,p,f,C,S]}=Me(),h=l.includes("d"),b=l.includes("h"),w=l!=="s:ms",R=l.includes("ms"),T=a.enabled?a.milliseconds:"";return i==="text"?c($,{children:[c("style",{children:zn(e,t,n)}),c("p",{...n&&{onClick:()=>r==null?void 0:r(e.id)},className:m("gta-content__timer-text",e.id,{"gta--selectable":n,"gta--selected":o===e.id}),children:[h&&c($,{children:[c("span",{className:m("gta-timer-text__unit-value",e.id),"data-timer-days":!0,children:[s,a.enabled&&a.days]}),c("span",{className:m("gta-timer-text__separator",e.id),children:d&&":"})]}),b&&c($,{children:[c("span",{className:m("gta-timer-text__unit-value",e.id),"data-timer-hours":!0,children:[p,a.enabled&&a.hours]}),c("span",{className:m("gta-timer-text__separator",e.id),children:d&&":"})]}),w&&c($,{children:[c("span",{className:m("gta-timer-text__unit-value",e.id),"data-timer-minutes":!0,children:[f,a.enabled&&a.minutes]}),c("span",{className:m("gta-timer-text__separator",e.id),children:d&&":"})]}),c("span",{className:m("gta-timer-text__unit-value",e.id),"data-timer-seconds":!0,children:[C,a.enabled&&a.seconds]}),R&&c($,{children:[c("span",{className:m("gta-timer-text__separator",e.id),children:d&&":"}),c("span",{className:m("gta-timer-text__unit-value",e.id),"data-timer-milliseconds":!0,children:[S,a.enabled&&T]})]})]})]}):c($,{children:[c("style",{children:Fn(e,t,n)}),c("div",{...n&&{onClick:()=>r==null?void 0:r(e.id)},className:m("gta-content__timer",e.id,{"gta--selectable":n,"gta--selected":o===e.id}),children:c("svg",{class:"gta-timer__svg",height:"100%",viewBox:`0 0 ${Un(l)} ${d?108:118}`,preserveAspectRatio:"xMinYMin meet",children:c("foreignObject",{width:"99.9%",height:"100%",xmlns:"http://www.w3.org/1999/xhtml",children:c("div",{className:m("gta-timer__wrapper",e.id),children:[h&&c($,{children:[c("div",{className:m("gta-timer__unit",e.id),children:[c("h4",{className:m("gta-timer__unit-value",e.id),"data-timer-days":!0,children:s}),u&&c("div",{className:m("gta-timer__unit-label",e.id),children:a.days})]}),d&&c("div",{className:m("gta-timer__separator",e.id),children:":"})]}),b&&c($,{children:[c("div",{className:m("gta-timer__unit",e.id),children:[c("h4",{className:m("gta-timer__unit-value",e.id),"data-timer-hours":!0,children:p}),u&&c("div",{className:m("gta-timer__unit-label",e.id),children:a.hours})]}),d&&c("div",{className:m("gta-timer__separator",e.id),children:":"})]}),w&&c($,{children:[c("div",{className:m("gta-timer__unit",e.id),children:[c("h4",{className:m("gta-timer__unit-value",e.id),"data-timer-minutes":!0,children:f}),u&&c("div",{className:m("gta-timer__unit-label",e.id),children:a.minutes})]}),d&&c("div",{className:m("gta-timer__separator",e.id),children:":"})]}),c("div",{className:m("gta-timer__unit",e.id),children:[c("h4",{className:m("gta-timer__unit-value",e.id),"data-timer-seconds":!0,children:C}),u&&c("div",{className:m("gta-timer__unit-label",e.id),children:a.seconds})]}),R&&c($,{children:[d&&c("div",{className:m("gta-timer__separator",e.id),children:":"}),c("div",{className:m("gta-timer__unit",e.id),children:[c("h4",{className:m("gta-timer__unit-value",e.id),"data-timer-milliseconds":!0,children:S}),u&&c("div",{className:m("gta-timer__unit-label",e.id),children:T})]})]})]})})})})]})},Bn=({content:{background:e,padding:t,border:n,radius:o},general:{breakpoint:r},bar:i,key:a},l)=>{const{backgroundStyle:_,overlayStyle:d}=le(e);return`
  .gta-widget.gta-bar.${a} {
    position: ${i.sticky?"sticky":"relative"};
    top: ${i.position==="top"?"0":"unset"};
    bottom: ${i.position==="bottom"?"0":"unset"};
    right: 0;
    left: 0;
    z-index: 90;
    width: 100%;
  }

  .gta-content__container.${l} {
    display: grid;
    grid-template-columns: ${i.closeButton.enabled?"40px 1fr 40px":"1fr"};
    border: ${n.enabled?`${n.size} solid ${n.color}`:"initial"};
    ${o.enabled?`border-radius: ${o.value};`:""}
    ${_}
  }

  .gta-content__overlay.${l} {
    ${d}
  }

  .gta-bar__close-btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .gta-content.${l} {
    display: flex;
    padding: ${y(t.desktop)};
    justify-content: ${i.justify};
    align-items: center;
  }

  .gta-content__bar-texts.${l} {
    display: flex;
    flex-flow: column nowrap;
  }

  @media screen and (max-width: ${r}) {
    .gta-content__container.${l} {
      display: grid;
      grid-template-columns: ${i!=null&&i.closeButton.enabled?"28px 1fr 28px":"1fr"};
    }

    .gta-content.${l} {
      justify-content: center;
      align-items: center;
      padding: ${y(t.mobile)};
    }

    .gta-bar__close-btn-container {
      justify-content: flex-start;
      align-items: flex-start;
      padding: 8px 8px 0 0;
    }
  }
`},Zn=({onClick:e})=>{const{settings:t,bootstrap:{blockId:n,onItemSelect:o},isPreview:r,backgroundClick:i}=P(),{close:a}=Me(),{content:{items:l}}=t,_=l.filter(h=>h.enabled===void 0||h.enabled),d=t.bar.closeButton.enabled,u=_.filter(h=>h.type==="text"),s=_.find(h=>h.type==="timer"),p=_.find(h=>h.type==="button"),f=_.find(h=>h.type==="coupon"),C=[...new Set(_.map(h=>h.type))],S=h=>{if(h.stopPropagation(),r){o==null||o("close");return}a()};return c($,{children:[c("style",{children:Bn(t,n)}),c("div",{className:m("gta-content__container",n,{"gta--clickable":i.enabled&&!r}),onClick:e,children:[d&&c("div",{children:" "}),c("div",{className:m("gta-content",n),children:C.map(h=>h==="text"&&u.length>0?c("div",{className:m("gta-content__bar-texts",n),children:u.map(b=>c(Ee,{...b}))}):h==="timer"?s&&c(Pe,{...s}):h==="button"?p&&c(De,{...p}):f&&c(He,{...f}))}),t.content.background.enabled&&c("div",{className:`gta-content__overlay ${n}`,children:[c("div",{})," "]}),d&&c("div",{className:"gta-bar__close-btn-container",children:c(Rn,{onClick:S,color:t.bar.closeButton.color})})]})]})},jn=".gta-banner{display:flex;position:relative;box-sizing:border-box;overflow:hidden}.gta-banner__overlay,.gta-content__overlay{position:absolute;top:0;right:0;bottom:0;left:0}.gta-content__overlay{z-index:-1}.gta-banner__content-wrap{position:relative;display:flex;width:100%;justify-content:var(--gta-banner-justify-content);align-items:var(--gta-banner-align-items)}.gta-content__button{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;text-decoration:none!important;text-align:center;cursor:pointer;transition:color .2s ease,background-color .2s ease,opacity .2s ease}.gta-content__button:hover{text-decoration:none!important;opacity:.9}.gta-timer__wrapper{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;margin:0;padding:0;overflow:visible;direction:ltr}.gta-timer__svg{display:block;width:100%;height:auto;margin:0}.gta-timer__separator{font-family:serif;font-size:44px}.gta-timer__unit{display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;width:160px;max-width:160px;overflow:hidden;aspect-ratio:1}.gta-timer__unit-value{line-height:1.1;text-align:center;letter-spacing:0;margin-block-start:0;margin-block-end:0}.gta-timer__unit-label{line-height:2}.gta--selected{outline:1.7px dashed #005fd3;outline-offset:2px}.gta--selectable:hover{outline:1.7px dashed #005fd3;outline-offset:2px;cursor:pointer}.gta--clickable{cursor:pointer}.gta-content__close-btn{background-color:transparent;border:none;padding:0;cursor:pointer;width:16px;height:16px;line-height:0!important;transition:all .2s}.gta-content__close-btn>svg{width:16px;height:16px}.gta-content__close-btn:hover{transform:rotate(90deg);filter:opacity(.7)}.gta-coupon{box-sizing:border-box;width:fit-content;display:flex;align-items:center;gap:.25em;cursor:pointer;position:relative;overflow:hidden}.gta-coupon.gta-coupon--animating{pointer-events:none}.gta-coupon__icon svg{display:block;width:1em;height:1em}.gta-coupon__checkmark{display:none;border-radius:50%;width:1rem;height:1rem;position:absolute;left:50%;transform:translate(-50%);background-color:#fff}.gta-coupon__checkmark-icon{display:inline;width:1.2em;height:1.2em;stroke:green;stroke-width:2;position:absolute;left:50%;transform:translate(-50%)}.gta-coupon__checkmark-icon path{vector-effect:none;transform-origin:80% 80%;stroke-dasharray:48;stroke-dashoffset:48}.gta-coupon--animating .gta-coupon__checkmark{display:flex;align-items:center;justify-content:center;animation:gta-ripple 1.55s ease-out forwards}.gta-coupon--animating .gta-coupon__checkmark-icon path{animation:gta-stroke .3s cubic-bezier(.65,0,.45,1) .3s forwards,gta-scale .3s ease-in-out .4s both,gta-strokeOpacity .3s ease-in-out 1s forwards}@keyframes gta-ripple{0%{transform:translate(-50%);opacity:0}10%{opacity:1}40%{transform:translate(-50%) scale(50);opacity:1}70%{transform:translate(-50%) scale(50);opacity:1}to{transform:translate(-50%) scale(50);opacity:0}}@keyframes gta-stroke{to{stroke-dashoffset:0}}@keyframes gta-strokeOpacity{to{opacity:0}}@keyframes gta-scale{to{transform:none}50%{transform:scale(1.15)}}",Gn=({type:e,general:{breakpoint:t}},n)=>`
    .gta-banner.${n}::before {
      content: "";
      padding-bottom: var(--gta-banner-desktop-ratio);
    }

    @media screen and (max-width: ${t}) {
      .gta-banner.${n}::before {
        padding-bottom: var(--gta-banner-mobile-ratio);
      }
    }

    .gta-content__container.${n} {
      ${e==="banner"?"width: var(--gta-content-desktop-width);":""}
      max-width: 100%;
      box-sizing: border-box;
      position: relative;
      z-index: 1;
    }

    .gta-content.${n} {
      display: flex;
      flex-flow: var(--gta-content-direction) var(--gta-content-wrap);
      gap: var(--gta-content-desktop-gap);
      box-sizing: border-box;

      ${e==="block"?"width: var(--gta-content-desktop-width);":""}
      max-width: 100%;
    }

    @media screen and (max-width: ${t}) {
      .gta-content__container.${n} {
        ${e==="banner"?"width: var(--gta-content-mobile-width);":""}
        max-width: 100%;
        box-sizing: border-box;
        position: relative;
        z-index: 1;
      }

      .gta-content.${n} {
        ${e==="block"?"width: var(--gta-content-mobile-width);":""}
        gap: var(--gta-content-mobile-gap);
      }

      .gta-content__close-btn {
        top: 4px;
        right: 4px;
        transform: translate(0, 0);
      }

      .gta-content__close-btn:hover {
        transform: translate(0, 0) rotate(90deg);
      }
    }
  `,qn=()=>{const{settings:e,bootstrap:{blockId:t}}=P(),n=M(q(()=>dn(e,t),[e,t]),"configStyle");let o=e.userCss;try{o=atob(e.userCss)}catch{}return c($,{children:[c("style",{children:n}),c("style",{children:jn}),c("style",{children:Gn(e,t)}),c("style",{children:o})]})},Yn={button:De,text:Ee,timer:Pe,coupon:He},Jn=({type:e,content:{align:t,background:n,padding:o,margin:r,border:i,radius:a},general:{breakpoint:l}},_)=>{const{backgroundStyle:d,overlayStyle:u}=le(n);return`
  .gta-content__container.${_} {
    display: flex;
    overflow: hidden;
    padding: ${y(o.desktop)};
    margin: ${y(r==null?void 0:r.desktop)};
    ${e==="block"?`justify-content: ${gt(t)};`:""}
    border: ${i.enabled?`${i.size} solid ${i.color}`:"initial"};
    ${a.enabled?`border-radius: ${a.value};`:""}
    ${d}
  }

  .gta-content__overlay.${_} {
    ${u}
  }

  .gta-content.${_} {
    ${e==="banner"?"flex: 1;":""}
    align-items: ${gt(t)};
  }

  @media screen and (max-width: ${l}) {
    .gta-content__container.${_} {
      padding: ${y(o.mobile)};
      margin: ${y(r==null?void 0:r.mobile)};
  }
`},Zt=()=>{const{settings:e,bootstrap:{blockId:t}}=P();return c($,{children:[c("style",{children:Jn(e,t)}),c("div",{className:m("gta-content__container",t),children:[e.content.background.enabled&&c("div",{className:`gta-content__overlay ${t}`,children:[c("div",{})," "]}),c("div",{className:m("gta-content",t),children:e.content.items.filter(n=>n.enabled===void 0||n.enabled).map(n=>Yn[n.type](n))})]})]})},Qn=e=>v("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v("g",{clipPath:"url(#clip0_7776_94726)"},v("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 8H12.5872V13.2556L15 15.8113L13.8777 17L11 13.9519V8Z",fill:"currentColor"}),v("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.57925 1.67442H11.1448V2.26428C5.40443 2.69178 0.882604 7.38706 0.882604 13.1163C0.882604 15.5347 1.68832 17.7689 3.0513 19.5756L1.13308 21.4535L2.34249 22.6375L4.17294 20.8455C6.18203 22.7955 8.94733 24 12 24C15.0526 24 17.8179 22.7955 19.827 20.8455L21.6575 22.6375L22.8669 21.4535L20.9487 19.5756C22.3116 17.7689 23.1174 15.5347 23.1174 13.1163C23.1174 7.38706 18.5955 2.69178 12.8552 2.26428V1.67442H15.4207V0H8.57925V1.67442ZM0 4.70126L3.42073 1.43023L4.61585 2.62806L1.19511 5.89909L0 4.70126ZM22.8049 5.8991L19.3842 2.62807L20.5793 1.43024L24 4.70128L22.8049 5.8991ZM2.59297 13.1163C2.59297 8.03012 6.80463 3.90698 12 3.90698C17.1953 3.90698 21.407 8.03012 21.407 13.1163C21.407 18.2024 17.1953 22.3256 12 22.3256C6.80463 22.3256 2.59297 18.2024 2.59297 13.1163Z",fill:"currentColor"})),v("defs",null,v("clipPath",{id:"clip0_7776_94726"},v("rect",{width:24,height:24,fill:"white"})))),Kn=e=>v("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM1.67442 12C1.67442 6.29734 6.29734 1.67442 12 1.67442C17.7027 1.67442 22.3256 6.29734 22.3256 12C22.3256 17.7027 17.7027 22.3256 12 22.3256C6.29734 22.3256 1.67442 17.7027 1.67442 12ZM12.2791 4.74419H10.6047V12.9049L15.8731 18.1734L17.0571 16.9894L12.2791 12.2114V4.74419Z",fill:"currentColor"})),Xn=e=>v("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 0H0V24H24V0ZM1.67442 22.3256V1.67442H22.3256V22.3256H1.67442ZM12.2791 4.74419H10.6047V12.9049L16.9894 19.2897L18.1734 18.1057L12.2791 12.2114V4.74419Z",fill:"currentColor"})),eo=e=>v("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v("g",{clipPath:"url(#clip0_7776_94730)"},v("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 4.35963L3.36488 1L4.93235 2.64036L1.56747 5.99999L0 4.35963ZM22.4325 6L19.0676 2.64036L20.6351 1.00001L24 4.35964L22.4325 6Z",fill:"currentColor"}),v("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.60034 2.28571H10.8667V3.49135C5.76743 4.05985 1.8012 8.41994 1.8012 13.7143C1.8012 15.9358 2.49947 17.9927 3.68673 19.6741L1 22.3838L2.60257 24L5.20009 21.3803C7.00452 23.0094 9.38751 24 11.9999 24C14.6124 24 16.9954 23.0094 18.7999 21.3803L21.3974 24L23 22.3838L20.3132 19.674C21.5004 17.9926 22.1986 15.9357 22.1986 13.7143C22.1986 8.41994 18.2324 4.05985 13.1331 3.49135V2.28571H15.3995V0H8.60034V2.28571ZM12.8498 13.9306V8.57143H11.15V14.6408L14.232 17.7489L15.4338 16.5368L12.8498 13.9306Z",fill:"currentColor"})),v("defs",null,v("clipPath",{id:"clip0_7776_94730"},v("rect",{width:24,height:24,fill:"white"})))),to=e=>v("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12.2791 4.74419H10.6047V12.9049L16.4313 18.7315L17.6153 17.5475L12.2791 12.2114V4.74419Z",fill:"currentColor"})),no=e=>v("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 0H0V24H24V0ZM12.3 4.2H10.5V12.9728L17.3636 19.8364L18.6364 18.5636L12.3 12.2272V4.2Z",fill:"currentColor"})),jt={button:De,text:Ee,timer:Pe,coupon:He},oo={copy:Wt,"copy-outlined":Ft,bag:At,basket:Vt,discount:zt,"discount-star":Ut,tag:Bt,"timer-solid":eo,"timer-outline-5":Qn,"timer-solid-square":no,"timer-outline-square":Xn,"timer-solid-circle":to,"timer-outline-circle":Kn},ro=(e,t,n)=>{var u;const{content:{background:o,padding:r,margin:i,border:a,radius:l},general:{breakpoint:_}}=t,{backgroundStyle:d}=le(o);return`
  .gta-content__container.${e.id} {
    overflow: hidden;
    padding: ${y(r.desktop)};
    margin: ${y(i==null?void 0:i.desktop)};
    border: ${a.enabled?`${a.size} solid ${a.color}`:"initial"};
    ${l.enabled?`border-radius: ${l.value};`:""}
    ${d}
  }

  @media screen and (max-width: ${_}) {
    .gta-content__container.${e.id} {
      padding: ${y(r.mobile)};
      margin: ${y(i==null?void 0:i.mobile)};
    }
  }

  .gta-content__text.${e.id} {
    text-align: ${e.align};
    font-family: ${z(e.fontFamily,t,n)};
    font-size: ${e.desktopFontSize};
    font-weight: ${e.fontWeight};
    line-height: ${e.desktopLineHeight??e.lineHeight};
    color: ${e.color};
    text-transform: ${e.textTransform};
    letter-spacing: ${e.desktopLetterSpacing};
    box-sizing: border-box;
    
    display: inline-block;
    width: 100%;
  }
  
  .gta-content__text.${e.id} > * {
    vertical-align: middle;
  } 

  .gta-content__text.${e.id} > svg {
    color: ${(u=e.icon)==null?void 0:u.color};
    height: 1em;
    width: 1em;
    margin-right: .3em;
  } 


  .gta-content__text > .gta-content__coupon {
    display: inline-flex;
  }

  @media screen and (max-width: ${t.general.breakpoint}) {
    .gta-content__text.${e.id} {
      font-size: ${e.mobileFontSize};
      letter-spacing: ${e.mobileLetterSpacing};
      line-height: ${e.mobileLineHeight??e.lineHeight};
    }
  }
`},io=()=>{var a;const{settings:e,isPreview:t,bootstrap:{selectedItemId:n,onItemSelect:o}}=P(),r=M(q(()=>e.content.items.reduce((l,_)=>({...l,[_.type]:_}),{}),[e]),"ITEMS: Record<string, CountdownContentItem>"),i=r.text;return c("div",{className:m("gta-content__container",i.id),children:[c("style",{children:ro(i,e,t)}),c("div",{className:m("gta-content__text",i.id,{"gta--selectable":t,"gta--selected":n===i.id}),children:[((a=i.icon)==null?void 0:a.enabled)&&oo[i.icon.type](),i.value.split(/({{Timer}}|{{Coupon}})/gi).map(l=>{switch(l){case"{{Timer}}":return r.timer.enabled?jt.timer(r.timer):null;case"{{Coupon}}":return r.coupon.enabled?jt.coupon(r.coupon):null;default:return c("span",{...t&&{onClick:()=>o==null?void 0:o(i.id)},children:l})}})]})]})},ao=()=>{const{settings:{type:e,bar:t,key:n},bootstrap:{blockId:o,onItemSelect:r},backgroundClick:i,isPreview:a}=P(),{show:l}=Me();if(sn(),Dn(l,n),!l)return null;const _=d=>{var s;const u=d.target;if(a&&["gta-content","gta-content__overlay","gta-content__container","gta-banner__overlay"].some(p=>u.classList.contains(p))){r==null||r(null);return}a||(s=window.Shopify)!=null&&s.designMode||i.enabled&&!["button","a"].includes(u.tagName.toLowerCase())&&window.open(Mt(i.url),i.target)};return c($,{children:[c(qn,{}),e==="bar"&&t?c(Zn,{onClick:_}):c("div",{className:m("gta-widget",o,{"gta--clickable":i.enabled&&!a}),onClick:_,children:e==="block"?c(Zt,{}):e==="embed"?c(io,{}):c(En,{children:c(Zt,{})})})]})},Re=({bootstrap:e})=>c(Sn,{bootstrap:e,children:c(Mn,{children:c(ao,{})})}),so="GSC_COUNTDOWN_RUNTIME";window[so]=(e,t)=>{be(c(Re,{bootstrap:t}),e)},function(){window.GSC_COUNTDOWN_INITIAL_RENDERED||(Gt(),window.GSC_COUNTDOWN_INITIAL_RENDERED=!0),window.GSC_COUNTDOWN_RENDER_INTERVAL=setInterval(()=>{Gt()},1e3)}();function Gt(){Array.isArray(window.GSC_COUNTDOWN_WIDGETS)&&(window.GSC_COUNTDOWN_WIDGETS.forEach(e=>{var t,n;if(e.enabled){if(e.bar&&!window.GSC_COUNTDOWN_INITIAL_RENDERED)try{const o=document.createElement("div");o.className=`gta-widget gta-bar ${e.key}`,e.bar.position==="top"?(t=document.querySelector("body"))==null||t.prepend(o):(n=document.querySelector("body"))==null||n.append(o),be(c(Re,{bootstrap:{platform:"Runtime",blockId:e.key,widgetId:e.key,settings:e}}),o)}catch(o){console.log(o)}try{document.querySelectorAll(`.gta-block__root.${e.key}`).forEach(r=>{r.children.length>0||be(c(Re,{bootstrap:{platform:"Runtime",settings:e,blockId:e.key,widgetId:e.key}}),r)})}catch(o){console.log(o)}}}),window.GSC_COUNTDOWN_INITIAL_RENDERED=!0)}})();
})()