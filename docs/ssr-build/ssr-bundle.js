module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p=".",r(r.s="QfWi")}({HteQ:function(t,e){t.exports=require("preact")},MV5A:function(t,e,r){},QfWi:function(t,e,r){"use strict";r.r(e),function(t){r.d(e,"default",(function(){return a}));r("MV5A");var n=r("HteQ");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={0:[[1,2],[3,6],[4,8]],1:[[0,2],[4,7]],2:[[0,1],[6,4],[5,8]],3:[[0,6],[4,5]],4:[[1,7],[3,5],[0,8],[2,6]],5:[[2,8],[3,4]],6:[[0,3],[4,2],[7,8]],7:[[1,4],[6,8]],8:[[0,4],[6,7],[2,5]]},a=function(e){var r,n;function o(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).initialState={table:Array.from({length:9}),isNextCross:!0,isWin:!1},t.state=i({},t.initialState),t.onClick=function(e){var r=e.target.dataset.celIndex,n=t.state,o=n.table,i=n.isNextCross;if(!t.state.isWin&&!o[r]){var u=i?"×":"□",a=c[r].some((function(t){return t.every((function(t){return o[t]===u}))}));t.setState({table:o.map((function(t,e){return e===Number(r)?u:t})),isNextCross:!i,isWin:a})}},t.reset=function(){var e=setInterval((function(){t.setState({isWin:!1,table:Array.from({length:9},(function(){return Math.random().toString(36).slice(-1)}))})}));setTimeout((function(){clearInterval(e),t.setState(i({},t.initialState))}),1e3)},t}return n=e,(r=o).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n,o.prototype.render=function(){var e=this,r=this.state,n=r.table,o=r.isWin,i=r.isNextCross;return t("div",null,t("h1",null,"~tic tac toe~"),t("dialog",{open:o},"ПОБЕДИЛ ",i?"КВАДРАТ":"КРЕСТ","!",t("button",{onClick:this.reset},"ищё")),t("div",{class:"table"},n.map((function(r,n){return t("div",{class:"cell",onClick:e.onClick,"data-cel-index":n},r)})),t("br",null),t("button",{onClick:this.reset},"ищё")))},o}(n.Component)}.call(this,r("HteQ").h)}});
//# sourceMappingURL=ssr-bundle.js.map