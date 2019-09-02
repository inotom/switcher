/*! @inotom/switcher v1.4.0 inotom (https://www.serendip.ws/) | MIT */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("Switcher",[],n):"object"==typeof exports?exports.Switcher=n():t.Switcher=n()}(window,function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=37)}([function(t,n,r){(function(n){var r="object",e=function(t){return t&&t.Math==Math&&t};t.exports=e(typeof globalThis==r&&globalThis)||e(typeof window==r&&window)||e(typeof self==r&&self)||e(typeof n==r&&n)||Function("return this")()}).call(this,r(39))},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(0),o=r(10),i=r(29),u=r(56),c=e.Symbol,f=o("wks");t.exports=function(t){return f[t]||(f[t]=u&&c[t]||(u?c:i)("Symbol."+t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(6),o=r(8),i=r(9);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(7);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(3);t.exports=!e(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(6),o=r(24),i=r(5),u=r(14),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(0),o=r(15),i=r(16),u=e["__core-js_shared__"]||o("__core-js_shared__",{});(t.exports=function(t,n){return u[t]||(u[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:i?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports={}},function(t,n,r){var e=r(41),o=r(13);t.exports=function(t){return e(o(t))}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(7);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(0),o=r(4);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n){t.exports=!1},function(t,n,r){var e=r(10),o=r(29),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports={}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(0),o=r(22).f,i=r(4),u=r(26),c=r(15),f=r(43),a=r(50);t.exports=function(t,n){var r,s,p,l,v,y=t.target,h=t.global,d=t.stat;if(r=h?e:d?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(h?s:y+(d?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(r,s,l,t)}}},function(t,n,r){var e=r(6),o=r(40),i=r(9),u=r(12),c=r(14),f=r(1),a=r(24),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(6),o=r(3),i=r(25);t.exports=!e&&!o(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(0),o=r(7),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,r){var e=r(0),o=r(10),i=r(4),u=r(1),c=r(15),f=r(27),a=r(28),s=a.get,p=a.enforce,l=String(f).split("toString");o("inspectSource",function(t){return f.call(t)}),(t.exports=function(t,n,r,o){var f=!!o&&!!o.unsafe,a=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof r&&("string"!=typeof n||u(r,"name")||i(r,"name",n),p(r).source=l.join("string"==typeof n?n:"")),t!==e?(f?!s&&t[n]&&(a=!0):delete t[n],a?t[n]=r:i(t,n,r)):a?t[n]=r:c(n,r)})(Function.prototype,"toString",function(){return"function"==typeof this&&s(this).source||f.call(this)})},function(t,n,r){var e=r(10);t.exports=e("native-function-to-string",Function.toString)},function(t,n,r){var e,o,i,u=r(42),c=r(0),f=r(7),a=r(4),s=r(1),p=r(17),l=r(18),v=c.WeakMap;if(u){var y=new v,h=y.get,d=y.has,g=y.set;e=function(t,n){return g.call(y,t,n),n},o=function(t){return h.call(y,t)||{}},i=function(t){return d.call(y,t)}}else{var x=p("state");l[x]=!0,e=function(t,n){return a(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(45),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(1),o=r(12),i=r(47).indexOf,u=r(18);t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(u,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},function(t,n,r){var e=r(19),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(13);t.exports=function(t){return Object(e(t))}},function(t,n,r){"use strict";var e,o,i,u=r(35),c=r(4),f=r(1),a=r(2),s=r(16),p=a("iterator"),l=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(e=o):l=!0),null==e&&(e={}),s||f(e,p)||c(e,p,function(){return this}),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:l}},function(t,n,r){var e=r(1),o=r(33),i=r(17),u=r(65),c=i("IE_PROTO"),f=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),e(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?f:null}},function(t,n,r){var e=r(8).f,o=r(1),i=r(2)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){"use strict";r.r(n),r.d(n,"switcher",function(){return a});r(38),r(61);var e=function(t,n,r){r?n.setAttribute(t,""):n.removeAttribute(t)},o=function(t,n,r){e(t,n,!1),e(t,r,!1)},i=function(t,n,r){var o=!n.hasAttribute(t);e(t,n,o),e(t,r,o)},u=function(t,n){var r=t,e=n.dataset.switcherChangeHeight;return e&&(r="true"===e),r},c=function(t,n,r){u(n,r)&&(r.style.height="0px")},f=function(t,n,r,e){if(u(n,r)){var o=r.hasAttribute(t)?"".concat(e,"px"):"0px";r.style.height=o}},a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.changeHeight,r=void 0===n||n,e=t.activeAttribute,u=void 0===e?"is-active":e,a=document.querySelectorAll("[data-switcher-handle]");Array.from(a,function(t){var n=t.dataset.switcherHandle;if(n){var e=document.querySelector("[data-switcher-layer='".concat(n,"']"));if(e){var a=e.clientHeight;t.addEventListener("click",function(n){n.preventDefault(),i(u,t,e),f(u,r,e,a)});var s=document.querySelectorAll("[data-switcher-close='".concat(n,"']"));Array.from(s,function(n){n.addEventListener("click",function(n){n.preventDefault(),o(u,t,e),c(0,r,e)})}),f(u,r,e,a)}}})}},function(t,n,r){var e=r(21),o=r(51);e({target:"Array",stat:!0,forced:!r(60)(function(t){Array.from(t)})},{from:o})},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(3),o=r(23),i="".split;t.exports=e(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(0),o=r(27),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,r){var e=r(1),o=r(44),i=r(22),u=r(8);t.exports=function(t,n){for(var r=o(n),c=u.f,f=i.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},function(t,n,r){var e=r(30),o=r(46),i=r(49),u=r(5);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){t.exports=r(0)},function(t,n,r){var e=r(31),o=r(20).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(12),o=r(32),i=r(48),u=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,r){var e=r(19),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(3),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,r){"use strict";var e=r(52),o=r(33),i=r(54),u=r(55),c=r(32),f=r(57),a=r(58);t.exports=function(t){var n,r,s,p,l=o(t),v="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,d=void 0!==h,g=0,x=a(l);if(d&&(h=e(h,y>2?arguments[2]:void 0,2)),null==x||v==Array&&u(x))for(r=new v(n=c(l.length));n>g;g++)f(r,g,d?h(l[g],g):l[g]);else for(p=x.call(l),r=new v;!(s=p.next()).done;g++)f(r,g,d?i(p,h,[s.value,g],!0):s.value);return r.length=g,r}},function(t,n,r){var e=r(53);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(5);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(2),o=r(11),i=e("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||u[i]===t)}},function(t,n,r){var e=r(3);t.exports=!!Object.getOwnPropertySymbols&&!e(function(){return!String(Symbol())})},function(t,n,r){"use strict";var e=r(14),o=r(8),i=r(9);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},function(t,n,r){var e=r(59),o=r(11),i=r(2)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(23),o=r(2)("toStringTag"),i="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:i?e(n):"Object"==(u=e(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,r){var e=r(2)("iterator"),o=!1;try{var i=0,u={next:function(){return{done:!!i++}},return:function(){o=!0}};u[e]=function(){return this},Array.from(u,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i={};i[e]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,n,r){"use strict";var e=r(62).charAt,o=r(28),i=r(63),u=o.set,c=o.getterFor("String Iterator");i(String,"String",function(t){u(this,{type:"String Iterator",string:String(t),index:0})},function(){var t,n=c(this),r=n.string,o=n.index;return o>=r.length?{value:void 0,done:!0}:(t=e(r,o),n.index+=t.length,{value:t,done:!1})})},function(t,n,r){var e=r(19),o=r(13),i=function(t){return function(n,r){var i,u,c=String(o(n)),f=e(r),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f))<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,r){"use strict";var e=r(21),o=r(64),i=r(35),u=r(70),c=r(36),f=r(4),a=r(26),s=r(2),p=r(16),l=r(11),v=r(34),y=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,d=s("iterator"),g=function(){return this};t.exports=function(t,n,r,s,v,x,b){o(r,n,s);var m,O,w,S=function(t){if(t===v&&T)return T;if(!h&&t in A)return A[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},j=n+" Iterator",_=!1,A=t.prototype,P=A[d]||A["@@iterator"]||v&&A[v],T=!h&&P||S(v),E="Array"==n&&A.entries||P;if(E&&(m=i(E.call(new t)),y!==Object.prototype&&m.next&&(p||i(m)===y||(u?u(m,y):"function"!=typeof m[d]&&f(m,d,g)),c(m,j,!0,!0),p&&(l[j]=g))),"values"==v&&P&&"values"!==P.name&&(_=!0,T=function(){return P.call(this)}),p&&!b||A[d]===T||f(A,d,T),l[n]=T,v)if(O={values:S("values"),keys:x?T:S("keys"),entries:S("entries")},b)for(w in O)!h&&!_&&w in A||a(A,w,O[w]);else e({target:n,proto:!0,forced:h||_},O);return O}},function(t,n,r){"use strict";var e=r(34).IteratorPrototype,o=r(66),i=r(9),u=r(36),c=r(11),f=function(){return this};t.exports=function(t,n,r){var a=n+" Iterator";return t.prototype=o(e,{next:i(1,r)}),u(t,a,!1,!0),c[a]=f,t}},function(t,n,r){var e=r(3);t.exports=!e(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})},function(t,n,r){var e=r(5),o=r(67),i=r(20),u=r(18),c=r(69),f=r(25),a=r(17)("IE_PROTO"),s=function(){},p=function(){var t,n=f("iframe"),r=i.length;for(n.style.display="none",c.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),p=t.F;r--;)delete p.prototype[i[r]];return p()};t.exports=Object.create||function(t,n){var r;return null!==t?(s.prototype=e(t),r=new s,s.prototype=null,r[a]=t):r=p(),void 0===n?r:o(r,n)},u[a]=!0},function(t,n,r){var e=r(6),o=r(8),i=r(5),u=r(68);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=u(n),c=e.length,f=0;c>f;)o.f(t,r=e[f++],n[r]);return t}},function(t,n,r){var e=r(31),o=r(20);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(30);t.exports=e("document","documentElement")},function(t,n,r){var e=r(5),o=r(71);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,n,r){var e=r(7);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}}])});
//# sourceMappingURL=switcher.umd.js.map