!function(t){var e={};function r(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}({6:function(t,e){Drupal.behaviors.collapse={attach:function(t){console.log("attached accordion js");var e=t.querySelectorAll('[data-toggle="collapse"]');Array.from(e).forEach((function(e){e.addEventListener("click",(function(e){console.log(e.target.getAttribute("aria-expanded")),console.log(t.getElementById(e.target.getAttribute("aria-controls"))),"true"===e.target.getAttribute("aria-expanded")?(t.getElementById(e.target.getAttribute("aria-controls")).classList.remove("in"),t.getElementById(e.target.getAttribute("aria-controls")).setAttribute("aria-expanded","false"),e.target.setAttribute("aria-expanded","false"),e.target.classList.add("collapsed")):(t.getElementById(e.target.getAttribute("aria-controls")).classList.add("in"),t.getElementById(e.target.getAttribute("aria-controls")).setAttribute("aria-expanded","true"),e.target.setAttribute("aria-expanded","true"),e.target.classList.remove("collapsed")),e.preventDefault()}))}))}}}});