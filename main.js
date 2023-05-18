(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"body{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n#boards-container{\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    padding: 10px;\n    gap: 40px;\n    \n}\n\n#boards-container > div{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n} \n\n#board1, #board2{\n    display: grid;\n    border: 1px solid blue;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    width: 100%;\n    height: 100%;\n    width: clamp(300px, 40vmin, 1200px);\n    height: clamp(300px, 40vmin, 1200px);\n}\n\n#board1 div, #board2 div{\n    border: 1px solid black; /* Add border to each cell */\n    height: 100%;\n    width: 100%;\n}\n\n#board2 div:hover{\n    background-color: rgb(129, 126, 126);\n    cursor: pointer;\n}\n\n#msg-board{\n    width: clamp(200px, 60vmin, 550px);\n    height: 80px;\n    border: 2px solid black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: clamp(20px, 4vmin, 550px);\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=o[s]||0,p="".concat(s," ").concat(d);o[s]=d+1;var u=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=a(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var l=r(e,a),s=0;s<o.length;s++){var d=t(o[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),l=t.n(c),s=t(216),d=t.n(s),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=10;function y(e){let n=function(){const e=Array(h).fill(null).map((()=>Array(h).fill(null)));return{getBoard:()=>e,placeShip:(n,t,r,a)=>{for(let o=0;o<n.length;o++){if(t<0||t>=h||r<0||r>=h)throw new Error("Invalid ship placement: coordinates are out of bounds.");if(e[t][r])throw new Error("Invalid ship placement: overlapping ships.");switch(e[t][r]=n,a){case"right":r++;break;case"left":r--;break;case"down":t++;break;case"up":t--}}},receiveAttack:(n,t)=>null!=e[n][t]&&"Missed"!==e[n][t]&&"Hit"!==e[n][t]?(e[n][t].hit(),e[n][t]="Hit",!0):null==e[n][t]&&(e[n][t]="Missed",!0),isAllSunk:()=>{for(let n=0;n<h;n++)for(let t=0;t<h;t++)if("Hit"!==e[n][t]&&"Missed"!==e[n][t]&&null!=e[n][t])return!1;return!0}}}();const t=(e,n,t)=>e.playerGameBoard.receiveAttack(n,t),r=()=>({x:Math.floor(10*Math.random()),y:Math.floor(10*Math.random())});return{id:e,playerGameBoard:n,attack:t,computerAttack:e=>{let n=r();for(;"Hit"==e.playerGameBoard.getBoard()[n.x][n.y]||"Missed"==e.playerGameBoard.getBoard()[n.x][n.y];)n=r();return t(e,n.x,n.y),n}}}function v(e,n){let t=0;return{type:e,length:n,hit:()=>{t++},isSunk:()=>t==n,getTakenDamage:()=>t}}const g=(()=>{const e=document.getElementById("board1"),n=document.getElementById("board2"),t=document.getElementById("msg-board");let r=null;function a(e,n){for(let t=0;t<100;t++){const r=document.createElement("div");n&&r.addEventListener("click",o.bind(null,t)),e.appendChild(r)}}function o(e){const{x:n,y:t}=function(e){return{x:Math.floor(e/10),y:e%10}}(e);r(n,t)}function i(e,n){return 10*e+n}return a(e,!1),a(n,!0),{renderShips:function(t,r){for(let a=0;a<t.length;a++)for(let o=0;o<t[0].length;o++){let c=i(a,o),l="player"==r?e:n;const s=Array.from(l.children);null!=t[a][o]&&"Missed"!=t[a][o]&&"Hit"!=t[a][o]&&(s[c].style="background-color: red;"),"Hit"==t[a][o]&&(s[c].style="background-color: green;"),"Missed"==t[a][o]&&(s[c].style="background-color: blue;")}},displayOnMsgBoard:function(e){t.innerHTML=e},setAttackCallback:function(e){r=e}}})(),b=y(),x=y();let k=!1;function B(e){const n=v("carrier",5),t=v("battleship",4),r=v("cruiser",3),a=v("submarine",3),o=v("destroyer",2);e.placeShip(n,0,0,"down"),e.placeShip(t,9,0,"right"),e.placeShip(r,2,2,"up"),e.placeShip(a,0,9,"down"),e.placeShip(o,9,9,"up")}B(b.playerGameBoard),B(x.playerGameBoard),g.renderShips(b.playerGameBoard.getBoard(),"player"),g.renderShips(x.playerGameBoard.getBoard(),"computer"),g.setAttackCallback((async function(e,n){if(k)return;let t=b.attack(x,e,n);g.renderShips(x.playerGameBoard.getBoard(),"computer"),console.log(t),t&&(g.displayOnMsgBoard("Computer is attacking."),await new Promise((e=>{setTimeout((()=>{x.computerAttack(b),e()}),100)})),g.displayOnMsgBoard("Your turn to attack"),g.renderShips(b.playerGameBoard.getBoard(),"player"),x.playerGameBoard.isAllSunk()&&(g.displayOnMsgBoard("Game finished"),console.log("hi"),k=!0))})),g.displayOnMsgBoard("Your turn to attack")})()})();