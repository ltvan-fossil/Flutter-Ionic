(this.webpackJsonpDemoReactIonic=this.webpackJsonpDemoReactIonic||[]).push([[13],{110:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return c}));var n=r(1),i=function(e,t){return null!==t.closest(e)},s=function(e,t){var r;return"string"===typeof e&&e.length>0?Object.assign(((r={"ion-color":!0})["ion-color-"+e]=!0,r),t):t},a=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},o=/^[a-z][a-z0-9+\-.]*:/,c=function(e,t,r,i){return Object(n.a)(void 0,void 0,void 0,(function(){var s;return Object(n.c)(this,(function(n){return null!=e&&"#"!==e[0]&&!o.test(e)&&(s=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,s.push(e,r,i)]):[2,!1]}))}))}},114:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={bubbles:{dur:1e3,circles:9,fn:function(e,t,r){var n=e*t/r-e+"ms",i=2*Math.PI*t/r;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:function(e,t,r){var n=t/r,i=e*n-e+"ms",s=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,t){return{r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(e,t,r){return{y1:17,y2:29,style:{transform:"rotate("+(30*t+(t<6?180:-180))+"deg)","animation-delay":e*t/r-e+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,t,r){return{y1:12,y2:20,style:{transform:"rotate("+(30*t+(t<6?180:-180))+"deg)","animation-delay":e*t/r-e+"ms"}}}}}},99:function(e,t,r){"use strict";r.r(t),r.d(t,"ion_spinner",(function(){return o}));var n=r(14),i=r(15),s=r(110),a=r(114),o=function(){function e(e){Object(n.o)(this,e),this.paused=!1}return e.prototype.getName=function(){var e=this.name||i.c.get("spinner"),t=Object(i.b)(this);return e||("ios"===t?"lines":"circular")},e.prototype.render=function(){var e,t=this,r=Object(i.b)(t),o=t.getName(),f=a.a[o]||a.a.lines,u="number"===typeof t.duration&&t.duration>10?t.duration:f.dur,p=[];if(void 0!==f.circles)for(var m=0;m<f.circles;m++)p.push(c(f,u,m,f.circles));else if(void 0!==f.lines)for(m=0;m<f.lines;m++)p.push(l(f,u,m,f.lines));return Object(n.j)(n.c,{class:Object(s.a)(t.color,(e={},e[r]=!0,e["spinner-"+o]=!0,e["spinner-paused"]=!!t.paused||i.c.getBoolean("_testing"),e)),role:"progressbar",style:f.elmDuration?{animationDuration:u+"ms"}:{}},p)},e}(),c=function(e,t,r,i){var s=e.fn(t,r,i);return s.style["animation-duration"]=t+"ms",Object(n.j)("svg",{viewBox:s.viewBox||"0 0 64 64",style:s.style},Object(n.j)("circle",{transform:s.transform||"translate(32,32)",cx:s.cx,cy:s.cy,r:s.r,style:e.elmDuration?{animationDuration:t+"ms"}:{}}))},l=function(e,t,r,i){var s=e.fn(t,r,i);return s.style["animation-duration"]=t+"ms",Object(n.j)("svg",{viewBox:s.viewBox||"0 0 64 64",style:s.style},Object(n.j)("line",{transform:"translate(32,32)",y1:s.y1,y2:s.y2}))};o.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{left:unset;right:unset;right:0}[dir=rtl] svg,:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"}}]);
//# sourceMappingURL=13.41b6fd4b.chunk.js.map