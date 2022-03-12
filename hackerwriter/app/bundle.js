var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function u(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function m(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}let $;function g(t){$=t}const y=[],b=[],_=[],x=[],w=Promise.resolve();let k=!1;function v(t){_.push(t)}const E=new Set;let P=0;function T(){const t=$;do{for(;P<y.length;){const t=y[P];P++,g(t),j(t.$$)}for(g(null),y.length=0,P=0;b.length;)b.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];E.has(n)||(E.add(n),n())}_.length=0}while(y.length);for(;x.length;)x.pop()();k=!1,E.clear(),g(t)}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const A=new Set;function S(t,n){-1===t.$$.dirty[0]&&(y.push(t),k||(k=!0,w.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function C(c,s,u,i,a,f,d,p=[-1]){const h=$;g(c);const m=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(h?h.$$.context:[])),callbacks:e(),dirty:p,skip_bound:!1,root:s.target||h.$$.root};d&&d(m.root);let y=!1;if(m.ctx=u?u(c,s.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return m.ctx&&a(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),y&&S(c,t)),n})):[],m.update(),y=!0,o(m.before_update),m.fragment=!!i&&i(m.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);m.fragment&&m.fragment.l(t),t.forEach(l)}else m.fragment&&m.fragment.c();s.intro&&((b=c.$$.fragment)&&b.i&&(A.delete(b),b.i(_))),function(t,e,c,s){const{fragment:u,on_mount:i,on_destroy:l,after_update:a}=t.$$;u&&u.m(e,c),s||v((()=>{const e=i.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(v)}(c,s.target,s.anchor,s.customElement),T()}var b,_;g(h)}const H=[];function N(n,e=t){let o;const r=new Set;function s(t){if(c(n,t)&&(n=t,o)){const t=!H.length;for(const t of r)t[1](),H.push(t,n);if(t){for(let t=0;t<H.length;t+=2)H[t][0](H[t+1]);H.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,u=t){const i=[c,u];return r.add(i),1===r.size&&(o=e(s)||t),c(n),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}function O(t){let n,e,o,r,c,s,$;return{c(){n=a("pre"),e=a("code"),o=f(t[3]),r=d(),c=a("pre"),s=a("code"),$=f(t[3]),p(e,"id","code_element"),p(e,"class","cpp hljs"),m(e,"display","none"),p(s,"id","uglyHacks"),m(s,"display","none")},m(t,l){i(t,n,l),u(n,e),u(e,o),i(t,r,l),i(t,c,l),u(c,s),u(s,$)},p(t,n){8&n&&h(o,t[3]),8&n&&h($,t[3])},d(t){t&&l(n),t&&l(r),t&&l(c)}}}function z(t){let n,e,o,r,c;return{c(){n=f("Error: "),e=f(t[2]),o=f(" ("),r=f(t[0]),c=f(")")},m(t,s){i(t,n,s),i(t,e,s),i(t,o,s),i(t,r,s),i(t,c,s)},p(t,n){4&n&&h(e,t[2]),1&n&&h(r,t[0])},d(t){t&&l(n),t&&l(e),t&&l(o),t&&l(r),t&&l(c)}}}function L(t){let n,e,o,r,c;return{c(){n=f("Loading: "),e=f(t[1]),o=f(" ("),r=f(t[0]),c=f(")")},m(t,s){i(t,n,s),i(t,e,s),i(t,o,s),i(t,r,s),i(t,c,s)},p(t,n){2&n&&h(e,t[1]),1&n&&h(r,t[0])},d(t){t&&l(n),t&&l(e),t&&l(o),t&&l(r),t&&l(c)}}}function q(n){let e,o,r,c;function s(t,n){return t[1]?L:t[2]?z:O}let f=s(n),h=f(n);return{c(){e=a("main"),o=a("h2"),o.textContent="hackers go hack ",r=a("hr"),c=d(),h.c(),p(e,"class","svelte-rsxvd")},m(t,n){i(t,e,n),u(e,o),u(e,r),u(e,c),h.m(e,null)},p(t,[n]){f===(f=s(t))&&h?h.p(t,n):(h.d(1),h=f(t),h&&(h.c(),h.m(e,null)))},i:t,o:t,d(t){t&&l(e),h.d()}}}function B(t,n,e){let o,r,c,{statikos:u}=n;const[i,l,a,f]=function(t){const n=N(!1),e=N(!1),o=N({});async function r(){n.set(!0),e.set(!1);try{const n=await fetch(t);o.set(await n.text())}catch(t){e.set(t)}n.set(!1)}return r(),[o,n,e,r]}(u);s(t,i,(t=>e(3,c=t))),s(t,l,(t=>e(1,o=t))),s(t,a,(t=>e(2,r=t))),window.scrollTo(0,0);let d=0;return document.body.onkeypress=function(){let t=uglyHacks.innerText;if(d+=6,d>=0&&(code_element.style.removeProperty("display"),code_element.innerText=t.substring(0,d)),d>=302){const t=new URL(window.location.href);t.searchParams.set("w00t","r00t"),t.searchParams.delete("param2"),window.history.replaceState(null,null,t)}window.scrollTo(0,document.body.scrollHeight)},t.$$set=t=>{"statikos"in t&&e(0,u=t.statikos)},[u,o,r,c,i,l,a]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),C(this,t,B,q,c,{statikos:0})}}({target:document.body,props:{statikos:"lel.txt"}})}();
/* 
 * Nikto, is that you? 
 *
 * dP   dP   dP  88888888b dP         a88888b.  .88888.  8888ba.88ba   88888888b     888888ba   .d888888   a88888b. dP     dP       dP    dP  .88888.  888888ba   .d888888  
 * 88   88   88  88        88        d8'   `88 d8'   `8b 88  `8b  `8b  88            88    `8b d8'    88  d8'   `88 88   .d8'       Y8.  .8P d8'   `8b 88    `8b d8'    88  
 * 88  .8P  .8P a88aaaa    88        88        88     88 88   88   88 a88aaaa       a88aaaa8P' 88aaaaa88a 88        88aaa8P'         Y8aa8P  88     88 88     88 88aaaaa88a 
 * 88  d8'  d8'  88        88        88        88     88 88   88   88  88            88   `8b. 88     88  88        88   `8b.          88    88     88 88     88 88     88  
 * 88.d8P8.d8P   88        88        Y8.   .88 Y8.   .8P 88   88   88  88            88    .88 88     88  Y8.   .88 88     88          88    Y8.   .8P 88    .8P 88     88  
 * 8888' Y88'    88888888P 88888888P  Y88888P'  `8888P'  dP   dP   dP  88888888P     88888888P 88     88   Y88888P' dP     dP          dP     `8888P'  8888888P  88     88  
 * ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
*/ 

