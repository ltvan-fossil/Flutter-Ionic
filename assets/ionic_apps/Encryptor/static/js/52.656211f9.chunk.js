(this.webpackJsonpDemoReactIonic=this.webpackJsonpDemoReactIonic||[]).push([[52],{118:function(t,e,n){"use strict";n.r(e),n.d(e,"KEYBOARD_DID_CLOSE",(function(){return o})),n.d(e,"KEYBOARD_DID_OPEN",(function(){return i})),n.d(e,"copyVisualViewport",(function(){return y})),n.d(e,"keyboardDidClose",(function(){return g})),n.d(e,"keyboardDidOpen",(function(){return p})),n.d(e,"keyboardDidResize",(function(){return b})),n.d(e,"resetKeyboardAssist",(function(){return a})),n.d(e,"setKeyboardClose",(function(){return h})),n.d(e,"setKeyboardOpen",(function(){return f})),n.d(e,"startKeyboardAssist",(function(){return c})),n.d(e,"trackViewportChanges",(function(){return v}));var i="ionKeyboardDidShow",o="ionKeyboardDidHide",r={},u={},d=!1,a=function(){r={},u={},d=!1},c=function(t){s(t),t.visualViewport&&(u=y(t.visualViewport),t.visualViewport.onresize=function(){v(t),p()||b(t)?f(t):g(t)&&h(t)})},s=function(t){t.addEventListener("keyboardDidShow",(function(e){return f(t,e)})),t.addEventListener("keyboardDidHide",(function(){return h(t)}))},f=function(t,e){w(t,e),d=!0},h=function(t){D(t),d=!1},p=function(){var t=(r.height-u.height)*u.scale;return!d&&r.width===u.width&&t>150},b=function(t){return d&&!g(t)},g=function(t){return d&&u.height===t.innerHeight},w=function(t,e){var n=e?e.keyboardHeight:t.innerHeight-u.height,o=new CustomEvent(i,{detail:{keyboardHeight:n}});t.dispatchEvent(o)},D=function(t){var e=new CustomEvent(o);t.dispatchEvent(e)},v=function(t){r=Object.assign({},u),u=y(t.visualViewport)},y=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}}}]);
//# sourceMappingURL=52.656211f9.chunk.js.map