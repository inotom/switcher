/*! @inotom/switcher v1.0.2 inotom (https://www.serendip.ws/) | MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Switcher",[],t):"object"==typeof exports?exports.Switcher=t():e.Switcher=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"switcher",function(){return i});var n=function(e,t){t?e.setAttribute("is-active",""):e.removeAttribute("is-active")},o=function(e,t){var r=e.hasAttribute("is-active")?"".concat(t,"px"):"0px";e.style.height=r},i=function(){var e=document.querySelectorAll("[data-switcher-handle]");Array.from(e,function(e){var t=e.dataset.switcherHandle;if(t){var r=document.querySelector("[data-switcher-layer='".concat(t,"']"));if(r){var i=r.clientHeight;e.addEventListener("click",function(t){t.preventDefault(),function(e,t){var r=!e.hasAttribute("is-active");n(e,r),n(t,r)}(e,r),o(r,i)}),o(r,i)}}})}}])});
//# sourceMappingURL=switcher.umd.js.map