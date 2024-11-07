(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[290],{6455:function(e){var t="function"==typeof Float32Array;function i(e,t,i){return(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e}function n(e,t,i){return 3*(1-3*i+3*t)*e*e+2*(3*i-6*t)*e+3*t}function s(e){return e}e.exports=function(e,r,a,l){if(!(0<=e&&e<=1&&0<=a&&a<=1))throw Error("bezier x values must be in [0, 1] range");if(e===r&&a===l)return s;for(var o=t?new Float32Array(11):Array(11),u=0;u<11;++u)o[u]=i(.1*u,e,a);return function(t){return 0===t?0:1===t?1:i(function(t){for(var s=0,r=1;10!==r&&o[r]<=t;++r)s+=.1;var l=s+(t-o[--r])/(o[r+1]-o[r])*.1,u=n(l,e,a);return u>=.001?function(e,t,s,r){for(var a=0;a<4;++a){var l=n(t,s,r);if(0===l)break;var o=i(t,s,r)-e;t-=o/l}return t}(t,l,e,a):0===u?l:function(e,t,n,s,r){var a,l,o=0;do(a=i(l=t+(n-t)/2,s,r)-e)>0?n=l:t=l;while(Math.abs(a)>1e-7&&++o<10);return l}(t,s,s+.1,e,a)}(t),r,l)}}},1196:function(e,t,i){"use strict";i.d(t,{UG:function(){return G},mU:function(){return F},Xu:function(){return K}});var n,s,r,a,l,o,u,h,c,d,p,f=i(6455),g=i.n(f),v=function(e){this.startX=e.startX,this.startY=e.startY,this.endX=e.endX,this.endY=e.endY,this.totalX=this.endX-this.startX,this.totalY=this.endY-this.startY,this.startMultiplierX=e.startMultiplierX||1,this.endMultiplierX=e.endMultiplierX||1,this.startMultiplierY=e.startMultiplierY||1,this.endMultiplierY=e.endMultiplierY||1};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}(n=o||(o={})).speed="speed",n.translateX="translateX",n.translateY="translateY",n.rotate="rotate",n.rotateX="rotateX",n.rotateY="rotateY",n.rotateZ="rotateZ",n.scale="scale",n.scaleX="scaleX",n.scaleY="scaleY",n.scaleZ="scaleZ",n.opacity="opacity",(s=u||(u={})).px="px",s["%"]="%",s.vh="vh",s.vw="vw",(r=h||(h={})).deg="deg",r.turn="turn",r.rad="rad",(c||(c={}))[""]="",(a=d||(d={})).vertical="vertical",a.horizontal="horizontal",(l=p||(p={})).ease="ease",l.easeIn="easeIn",l.easeOut="easeOut",l.easeInOut="easeInOut",l.easeInQuad="easeInQuad",l.easeInCubic="easeInCubic",l.easeInQuart="easeInQuart",l.easeInQuint="easeInQuint",l.easeInSine="easeInSine",l.easeInExpo="easeInExpo",l.easeInCirc="easeInCirc",l.easeOutQuad="easeOutQuad",l.easeOutCubic="easeOutCubic",l.easeOutQuart="easeOutQuart",l.easeOutQuint="easeOutQuint",l.easeOutSine="easeOutSine",l.easeOutExpo="easeOutExpo",l.easeOutCirc="easeOutCirc",l.easeInOutQuad="easeInOutQuad",l.easeInOutCubic="easeInOutCubic",l.easeInOutQuart="easeInOutQuart",l.easeInOutQuint="easeInOutQuint",l.easeInOutSine="easeInOutSine",l.easeInOutExpo="easeInOutExpo",l.easeInOutCirc="easeInOutCirc",l.easeInBack="easeInBack",l.easeOutBack="easeOutBack",l.easeInOutBack="easeInOutBack";var w=0,E=function(){function e(e){var t=e.el.getBoundingClientRect();if(e.view.scrollContainer){var i=e.view.scrollContainer.getBoundingClientRect();t=m({},t,{top:t.top-i.top,right:t.right-i.left,bottom:t.bottom-i.top,left:t.left-i.left})}this.height=e.el.offsetHeight,this.width=e.el.offsetWidth,this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,e.rootMargin&&this._setRectWithRootMargin(e.rootMargin)}return e.prototype._setRectWithRootMargin=function(e){var t=e.top+e.bottom,i=e.left+e.right;this.top-=e.top,this.right+=e.right,this.bottom+=e.bottom,this.left-=e.left,this.height+=t,this.width+=i},e}(),b=[c[""],u.px,u["%"],u.vh,u.vw,h.deg,h.turn,h.rad];function y(e,t){void 0===t&&(t=u["%"]);var i={value:0,unit:t};if(void 0===e)return i;if(!("number"==typeof e||"string"==typeof e))throw Error("Invalid value provided. Must provide a value as a string or number");if(e=String(e),i.value=parseFloat(e),i.unit=e.match(/[\d.\-+]*\s*(.*)/)[1]||t,!b.includes(i.unit))throw Error("Invalid unit provided.");return i}var C={ease:[.25,.1,.25,1],easeIn:[.42,0,1,1],easeOut:[0,0,.58,1],easeInOut:[.42,0,.58,1],easeInQuad:[.55,.085,.68,.53],easeInCubic:[.55,.055,.675,.19],easeInQuart:[.895,.03,.685,.22],easeInQuint:[.755,.05,.855,.06],easeInSine:[.47,0,.745,.715],easeInExpo:[.95,.05,.795,.035],easeInCirc:[.6,.04,.98,.335],easeOutQuad:[.25,.46,.45,.94],easeOutCubic:[.215,.61,.355,1],easeOutQuart:[.165,.84,.44,1],easeOutQuint:[.23,1,.32,1],easeOutSine:[.39,.575,.565,1],easeOutExpo:[.19,1,.22,1],easeOutCirc:[.075,.82,.165,1],easeInOutQuad:[.455,.03,.515,.955],easeInOutCubic:[.645,.045,.355,1],easeInOutQuart:[.77,0,.175,1],easeInOutQuint:[.86,0,.07,1],easeInOutSine:[.445,.05,.55,.95],easeInOutExpo:[1,0,0,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};function x(e){if(Array.isArray(e))return g()(e[0],e[1],e[2],e[3]);if("string"==typeof e&&void 0!==C[e]){var t=C[e];return g()(t[0],t[1],t[2],t[3])}}var _=Object.values(o),O={speed:"px",translateX:"%",translateY:"%",rotate:"deg",rotateX:"deg",rotateY:"deg",rotateZ:"deg",scale:"",scaleX:"",scaleY:"",scaleZ:"",opacity:""};function I(e,t){var i={};return _.forEach(function(n){var s=O[n];if("number"==typeof(null==e?void 0:e[n])){var r=null==e?void 0:e[n],a=y(10*(r||0)+"px"),l=y(-10*(r||0)+"px"),o={start:a.value,end:l.value,unit:a.unit};t===d.vertical&&(i.translateY=o),t===d.horizontal&&(i.translateX=o)}if(Array.isArray(null==e?void 0:e[n])){var u=null==e?void 0:e[n];if(void 0!==u[0]&&void 0!==u[1]){var h=y(null==u?void 0:u[0],s),c=y(null==u?void 0:u[1],s),p=x(null==u?void 0:u[2]);if(i[n]={start:h.value,end:c.value,unit:h.unit,easing:p},h.unit!==c.unit)throw Error("Must provide matching units for the min and max offset values of each axis.")}}}),i}function S(e,t,i,n){var s=(i-e)/t;return n&&(s=n(s)),s}function P(e,t){var i,n;return{value:(i="function"==typeof e.easing?e.easing(t):t,n=(null==e?void 0:e.start)||0,(((null==e?void 0:e.end)||0)-n)*(i-0)/1+n),unit:null==e?void 0:e.unit}}var Y=Object.values(o).filter(function(e){return"opacity"!==e});function X(e){var t=e.el;t&&(t.style.transform="",t.style.opacity="")}function A(e,t,i){return Math.max(i/(i+(Math.abs(e)+Math.abs(t))*(t>e?-1:1)),1)}function M(e,t){var i=e.start,n=e.end,s=e.unit;if("%"===s){var r=t/100;i*=r,n*=r}if("vw"===s){var a=i/100,l=n/100;i=window.innerWidth*a,n=window.innerWidth*l}if("vh"===s){var o=i/100,u=n/100;i=window.innerHeight*o,n=window.innerHeight*u}return{start:i,end:n}}var k={start:0,end:0,unit:""},z=function(e,t,i){return Math.min(Math.max(e,t),i)},H=function(){function e(e){var t,i;this.el=e.el,this.props=e.props,this.scrollAxis=e.scrollAxis,this.disabledParallaxController=e.disabledParallaxController||!1,this.id=++w,this.effects=I(this.props,this.scrollAxis),this.isInView=null,this.progress=0,this._setElementEasing(e.props.easing),t=e.el,i=Object.keys(this.effects).includes("opacity"),t.style.willChange="transform"+(i?",opacity":"")}var t=e.prototype;return t.updateProps=function(e){return this.props=m({},this.props,e),this.effects=I(e,this.scrollAxis),this._setElementEasing(e.easing),this},t.setCachedAttributes=function(e,t){X(this),this.rect=new E({el:this.props.targetElement||this.el,rootMargin:this.props.rootMargin,view:e});var i,n,s,r,a,l,o,u,h,c,p,f,g=(i=this.props,n=this.effects,s=this.scrollAxis,!i.rootMargin&&!i.targetElement&&!i.shouldDisableScalingTranslations&&(!!n.translateX&&s===d.horizontal||!!n.translateY&&s===d.vertical));return"number"==typeof this.props.startScroll&&"number"==typeof this.props.endScroll?this.limits=new v({startX:this.props.startScroll,startY:this.props.startScroll,endX:this.props.endScroll,endY:this.props.endScroll}):g?(this.limits=function(e,t,i,n,s,r){var a=i.translateX||k,l=i.translateY||k,o=M(a,e.width),u=o.start,h=o.end,c=M(l,e.height),p=c.start,f=c.end,g=e.top-t.height,m=e.left-t.width,w=e.bottom,E=e.right,b=1,y=1;s===d.vertical&&(y=b=A(p,f,t.height+e.height));var C=1,x=1;if(s===d.horizontal&&(x=C=A(u,h,t.width+e.width)),p<0&&(g+=p*b),f>0&&(w+=f*y),u<0&&(m+=u*C),h>0&&(E+=h*x),m+=n.x,E+=n.x,g+=n.y,w+=n.y,r){var _=n.y+e.top<t.height,O=n.x+e.left<t.width,I=n.y+e.bottom>t.scrollHeight-t.height,S=n.x+e.right>t.scrollWidth-t.height;_&&I&&(b=1,y=1,g=0,w=t.scrollHeight-t.height),O&&S&&(C=1,x=1,m=0,E=t.scrollWidth-t.width),!_&&I&&(g=e.top-t.height+n.y,b=A(p,f,(w=t.scrollHeight-t.height)-g),y=1,p<0&&(g+=p*b)),!O&&S&&(m=e.left-t.width+n.x,C=A(u,h,(E=t.scrollWidth-t.width)-m),x=1,u<0&&(m+=u*C)),_&&!I&&(g=0,b=1,y=A(p,f,(w=e.bottom+n.y)-g),f>0&&(w+=f*y)),O&&!S&&(m=0,C=1,x=A(u,h,(E=e.right+n.x)-m),h>0&&(E+=h*x))}return new v({startX:m,startY:g,endX:E,endY:w,startMultiplierX:C,endMultiplierX:x,startMultiplierY:b,endMultiplierY:y})}(this.rect,e,this.effects,t,this.scrollAxis,this.props.shouldAlwaysCompleteAnimation),this.scaledEffects=(r=this.effects,a=this.limits,(l=m({},r)).translateX&&(l.translateX=m({},r.translateX,{start:l.translateX.start*a.startMultiplierX,end:l.translateX.end*a.endMultiplierX})),l.translateY&&(l.translateY=m({},r.translateY,{start:l.translateY.start*a.startMultiplierY,end:l.translateY.end*a.endMultiplierY})),l)):this.limits=(o=this.rect,u=this.props.shouldAlwaysCompleteAnimation,h=o.top-e.height,c=o.left-e.width,p=o.bottom,f=o.right,c+=t.x,f+=t.x,h+=t.y,p+=t.y,u&&(t.y+o.top<e.height&&(h=0),t.x+o.left<e.width&&(c=0),p>e.scrollHeight-e.height&&(p=e.scrollHeight-e.height),f>e.scrollWidth-e.width&&(f=e.scrollWidth-e.width)),new v({startX:c,startY:h,endX:f,endY:p})),this._setElementStyles(),this},t._updateElementIsInView=function(e){var t=null===this.isInView;e!==this.isInView&&(e?this.props.onEnter&&this.props.onEnter(this):!t&&(this._setFinalProgress(),this._setElementStyles(),this.props.onExit&&this.props.onExit(this))),this.isInView=e},t._setFinalProgress=function(){var e=z(Math.round(this.progress),0,1);this._updateElementProgress(e)},t._setElementStyles=function(){this.props.disabled||this.disabledParallaxController||function(e,t,i){if(i){var n,s=Y.reduce(function(i,n){var s=e[n]&&P(e[n],t);return void 0===s||void 0===s.value||void 0===s.unit?i:i+(n+"("+s.value)+s.unit+")"},""),r=void 0===(n=e.opacity&&P(e.opacity,t))||void 0===n.value||void 0===n.unit?"":""+n.value;i.style.transform=s,i.style.opacity=r}}(this.scaledEffects||this.effects,this.progress,this.el)},t._updateElementProgress=function(e){this.progress=e,this.props.onProgressChange&&this.props.onProgressChange(this.progress),this.props.onChange&&this.props.onChange(this)},t._setElementEasing=function(e){this.easing=x(e)},t.updateElementOptions=function(e){this.scrollAxis=e.scrollAxis,this.disabledParallaxController=e.disabledParallaxController||!1},t.updatePosition=function(e){if(!this.limits)return this;var t=this.scrollAxis===d.vertical,i=null===this.isInView,n=t?this.limits.startY:this.limits.startX,s=t?this.limits.endY:this.limits.endX,r=t?this.limits.totalY:this.limits.totalX,a=t?e.y:e.x,l=a>=n&&a<=s;if(this._updateElementIsInView(l),l){var o=S(n,r,a,this.easing);this._updateElementProgress(o),this._setElementStyles()}else i&&(this.progress=z(Math.round(S(n,r,a,this.easing)),0,1),this._setElementStyles());return this},e}(),L=function(){function e(e){this.scrollContainer=e.scrollContainer,this.width=e.width,this.height=e.height,this.scrollHeight=e.scrollHeight,this.scrollWidth=e.scrollWidth}var t=e.prototype;return t.hasChanged=function(e){return e.width!==this.width||e.height!==this.height||e.scrollWidth!==this.scrollWidth||e.scrollHeight!==this.scrollHeight},t.setSize=function(e){return this.width=e.width,this.height=e.height,this.scrollHeight=e.scrollHeight,this.scrollWidth=e.scrollWidth,this},e}(),Q=function(){function e(e,t){this.x=e,this.y=t,this.dx=0,this.dy=0}return e.prototype.setScroll=function(e,t){return this.dx=e-this.x,this.dy=t-this.y,this.x=e,this.y=t,this},e}(),W=function(){function e(e){var t=e.scrollAxis,i=void 0===t?d.vertical:t,n=e.scrollContainer,s=e.disabled;this.disabled=void 0!==s&&s,this.scrollAxis=i,this.elements=[],this._hasScrollContainer=!!n,this.viewEl=null!=n?n:window;var r=this._getScrollPosition(),a=r[0],l=r[1];this.scroll=new Q(a,l),this.view=new L({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:this._hasScrollContainer?n:void 0}),this._ticking=!1,this._supportsPassive=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){return e=!0,!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}return e}(),this._bindAllMethods(),this.disabled||(this._addListeners(this.viewEl),this._addResizeObserver(),this._setViewSize())}e.init=function(t){if(!("undefined"!=typeof window))throw Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");return new e(t)};var t=e.prototype;return t._bindAllMethods=function(){var e=this;["_addListeners","_removeListeners","_getScrollPosition","_handleScroll","_handleUpdateCache","_updateAllElements","_updateElementPosition","_setViewSize","_addResizeObserver","_checkIfViewHasChanged","_getViewParams","getElements","createElement","removeElementById","resetElementStyles","updateElementPropsById","update","updateScrollContainer","destroy"].forEach(function(t){e[t]=e[t].bind(e)})},t._addListeners=function(e){e.addEventListener("scroll",this._handleScroll,!!this._supportsPassive&&{passive:!0}),window.addEventListener("resize",this._handleUpdateCache,!1),window.addEventListener("blur",this._handleUpdateCache,!1),window.addEventListener("focus",this._handleUpdateCache,!1),window.addEventListener("load",this._handleUpdateCache,!1)},t._removeListeners=function(e){var t;e.removeEventListener("scroll",this._handleScroll,!1),window.removeEventListener("resize",this._handleUpdateCache,!1),window.removeEventListener("blur",this._handleUpdateCache,!1),window.removeEventListener("focus",this._handleUpdateCache,!1),window.removeEventListener("load",this._handleUpdateCache,!1),null==(t=this._resizeObserver)||t.disconnect()},t._addResizeObserver=function(){var e=this;try{var t=this._hasScrollContainer?this.viewEl:document.documentElement;this._resizeObserver=new ResizeObserver(function(){return e.update()}),this._resizeObserver.observe(t)}catch(e){console.warn("Failed to create the resize observer in the ParallaxContoller")}},t._getScrollPosition=function(){return[this._hasScrollContainer?this.viewEl.scrollLeft:window.pageXOffset,this._hasScrollContainer?this.viewEl.scrollTop:window.pageYOffset]},t._handleScroll=function(){var e,t=this._getScrollPosition(),i=t[0],n=t[1];this.scroll.setScroll(i,n),!this._ticking&&(null==(e=this.elements)?void 0:e.length)>0&&(this._ticking=!0,window.requestAnimationFrame(this._updateAllElements))},t._handleUpdateCache=function(){this._setViewSize(),this._updateAllElements({updateCache:!0})},t._updateAllElements=function(e){var t=this,i=(void 0===e?{}:e).updateCache;this.elements&&this.elements.forEach(function(e){i&&e.setCachedAttributes(t.view,t.scroll),t._updateElementPosition(e)}),this._ticking=!1},t._updateElementPosition=function(e){e.props.disabled||this.disabled||e.updatePosition(this.scroll)},t._getViewParams=function(){if(this._hasScrollContainer){var e=this.viewEl.offsetWidth,t=this.viewEl.offsetHeight,i=this.viewEl.scrollHeight,n=this.viewEl.scrollWidth;return this.view.setSize({width:e,height:t,scrollHeight:i,scrollWidth:n})}var s=document.documentElement;return{width:window.innerWidth||s.clientWidth,height:window.innerHeight||s.clientHeight,scrollHeight:s.scrollHeight,scrollWidth:s.scrollWidth}},t._setViewSize=function(){return this.view.setSize(this._getViewParams())},t._checkIfViewHasChanged=function(){return this.view.hasChanged(this._getViewParams())},t.getElements=function(){return this.elements},t.createElement=function(e){var t=new H(m({},e,{scrollAxis:this.scrollAxis,disabledParallaxController:this.disabled}));return t.setCachedAttributes(this.view,this.scroll),this.elements=this.elements?[].concat(this.elements,[t]):[t],this._updateElementPosition(t),this._checkIfViewHasChanged()&&this.update(),t},t.removeElementById=function(e){this.elements&&(this.elements=this.elements.filter(function(t){return t.id!==e}))},t.updateElementPropsById=function(e,t){this.elements&&(this.elements=this.elements.map(function(i){return i.id===e?i.updateProps(t):i})),this.update()},t.resetElementStyles=function(e){X(e)},t.update=function(){var e=this._getScrollPosition(),t=e[0],i=e[1];this.scroll.setScroll(t,i),this._setViewSize(),this._updateAllElements({updateCache:!0})},t.updateScrollContainer=function(e){this._removeListeners(this.viewEl),this.viewEl=e,this._hasScrollContainer=!!e,this.view=new L({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:e}),this._setViewSize(),this._addListeners(this.viewEl),this._updateAllElements({updateCache:!0})},t.disableParallaxController=function(){this.disabled=!0,this._removeListeners(this.viewEl),this.elements&&this.elements.forEach(function(e){return X(e)})},t.enableParallaxController=function(){var e=this;this.disabled=!1,this.elements&&this.elements.forEach(function(t){return t.updateElementOptions({disabledParallaxController:!1,scrollAxis:e.scrollAxis})}),this._addListeners(this.viewEl),this._addResizeObserver(),this._setViewSize()},t.disableAllElements=function(){console.warn("deprecated: use disableParallaxController() instead"),this.elements&&(this.elements=this.elements.map(function(e){return e.updateProps({disabled:!0})})),this.update()},t.enableAllElements=function(){console.warn("deprecated: use enableParallaxController() instead"),this.elements&&(this.elements=this.elements.map(function(e){return e.updateProps({disabled:!1})})),this.update()},t.destroy=function(){this._removeListeners(this.viewEl),this.elements&&this.elements.forEach(function(e){return X(e)}),this.elements=void 0},e}(),V=i(4664);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var i,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}var R=["disabled","easing","endScroll","onChange","onEnter","onExit","onProgressChange","opacity","rootMargin","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","shouldAlwaysCompleteAnimation","shouldDisableScalingTranslations","speed","startScroll","targetElement","translateX","translateY"];function j(e){var t,i=e.disabled,n=e.easing,s=e.endScroll,r=e.onChange,a=e.onEnter,l=e.onExit,o=e.onProgressChange,u=e.opacity,h=e.rootMargin,c=e.rotate,d=e.rotateX,p=e.rotateY,f=e.rotateZ,g=e.scale,v=e.scaleX,m=e.scaleY,w=e.scaleZ,E=e.shouldAlwaysCompleteAnimation,b=e.shouldDisableScalingTranslations,y=e.speed,C=e.startScroll,x=e.targetElement,_=e.translateX,O=e.translateY,I=N(e,R);return{parallaxProps:(Object.keys(t={disabled:i,easing:n,endScroll:s,onChange:r,onEnter:a,onExit:l,onProgressChange:o,opacity:u,rootMargin:h,rotate:c,rotateX:d,rotateY:p,rotateZ:f,scale:g,scaleX:v,scaleY:m,scaleZ:w,shouldAlwaysCompleteAnimation:E,shouldDisableScalingTranslations:b,speed:y,startScroll:C,targetElement:x,translateX:_,translateY:O}).forEach(function(e){return void 0===t[e]&&delete t[e]}),t),rest:I}}var T=V.createContext(null),U={height:0},Z=["children","disabled","style","expanded","image","testId"],D={position:"absolute",top:0,left:0,right:0,bottom:0},F=function(e){var t,i,n,s,r,a,l,o=j(e),u=o.parallaxProps,h=o.rest,c=h.style,d=h.expanded,p=h.testId,f=N(h,Z),g=e.image?{backgroundImage:"url("+e.image+")",backgroundPosition:"center",backgroundSize:"cover"}:{},v=void 0===d||d?function(e){if(Array.isArray(e.translateY)){var t=y(e.translateY[0]),i=y(e.translateY[1]);if("px"===t.unit&&"px"===i.unit)return{top:-1*Math.abs(i.value)+"px",bottom:-1*Math.abs(t.value)+"px"};if("%"===t.unit&&"%"===i.unit){var n,s,r=null!=(n=null==(s=e.targetElement)?void 0:s.getBoundingClientRect())?n:U;return{top:-1*Math.abs(.01*r.height*i.value)+"px",bottom:-1*Math.abs(.01*r.height*t.value)+"px"}}}if(e.speed){var a=-10*Math.abs(e.speed||0);return{top:a+"px",bottom:a+"px"}}return{}}(e):{},m=(t=B({targetElement:e.targetElement,shouldDisableScalingTranslations:!0},u),i=function(){var e=(0,V.useContext)(T);if("undefined"==typeof window)return null;if(!e)throw Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");return e}(),n=(0,V.useRef)(null),s=j(t).parallaxProps,(0,V.useEffect)(function(){var e=i instanceof W;if("undefined"!=typeof window&&!i&&!e)throw Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.")},[i]),a=(r=(0,V.useState)())[0],l=r[1],(0,V.useEffect)(function(){var e;if(n.current instanceof HTMLElement){var t={el:n.current,props:s};l(e=null==i?void 0:i.createElement(t))}else throw Error("You must assign the ref returned by the useParallax() hook to an HTML Element.");return function(){e&&(null==i||i.removeElementById(e.id))}},[]),(0,V.useEffect)(function(){a&&(t.disabled&&(null==i||i.resetElementStyles(a)),null==i||i.updateElementPropsById(a.id,s))},[t.disabled,t.easing,t.endScroll,t.onChange,t.onEnter,t.onExit,t.onProgressChange,t.opacity,t.rootMargin,t.rotate,t.rotateX,t.rotateY,t.rotateZ,t.scale,t.scaleX,t.scaleY,t.scaleZ,t.shouldAlwaysCompleteAnimation,t.shouldDisableScalingTranslations,t.speed,t.startScroll,t.targetElement,t.translateX,t.translateY]),{ref:n,controller:i,element:a});return V.createElement("div",Object.assign({"data-testid":p,ref:m.ref,style:B({},g,D,v,c)},f),h.children)},$=["disabled","style","layers"],q={position:"relative",overflow:"hidden",width:"100%"},G=function(e){var t=(0,V.useState)(null),i=t[0],n=t[1],s=(0,V.useRef)(null);(0,V.useEffect)(function(){n(s.current)},[]);var r=e.style,a=e.layers,l=void 0===a?[]:a,o=N(e,$);return V.createElement("div",Object.assign({ref:s,style:B({},q,r)},o),i&&l&&l.length>0?l.map(function(e,t){return V.createElement(F,Object.assign({},e,{targetElement:i,key:"layer-"+t,testId:"layer-"+t}))}):null,i?V.Children.map(e.children,function(e){return(null==e?void 0:e.type)===F?V.cloneElement(e,{targetElement:i}):e}):null)};function K(e){var t,i=(0,V.useRef)(null);return i.current||(i.current=(t={scrollAxis:e.scrollAxis||d.vertical,scrollContainer:e.scrollContainer,disabled:e.isDisabled},"undefined"!=typeof window?W.init(t):null)),(0,V.useEffect)(function(){e.scrollContainer&&i.current&&i.current.updateScrollContainer(e.scrollContainer)},[e.scrollContainer,i.current]),(0,V.useEffect)(function(){e.isDisabled&&i.current&&i.current.disableParallaxController(),!e.isDisabled&&i.current&&i.current.enableParallaxController()},[e.isDisabled,i.current]),(0,V.useEffect)(function(){return function(){(null==i?void 0:i.current)&&(null==i||i.current.destroy())}},[]),V.createElement(T.Provider,{value:i.current},e.children)}},4593:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},1139:function(e,t,i){"use strict";let n;i.d(t,{Db:function(){return C},$G:function(){return P}});var s=i(4664);i(4593),Object.create(null);let r=(...e)=>{console?.warn&&(d(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e))},a={},l=(...e)=>{d(e[0])&&a[e[0]]||(d(e[0])&&(a[e[0]]=new Date),r(...e))},o=(e,t)=>()=>{if(e.isInitialized)t();else{let i=()=>{setTimeout(()=>{e.off("initialized",i)},0),t()};e.on("initialized",i)}},u=(e,t,i)=>{e.loadNamespaces(t,o(e,i))},h=(e,t,i,n)=>{d(i)&&(i=[i]),i.forEach(t=>{0>e.options.ns.indexOf(t)&&e.options.ns.push(t)}),e.loadLanguages(t,o(e,n))},c=(e,t,i={})=>t.languages&&t.languages.length?t.hasLoadedNamespace(e,{lng:i.lng,precheck:(t,n)=>{if(i.bindI18n?.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!n(t.isLanguageChangingTo,e))return!1}}):(l("i18n.languages were undefined or empty",t.languages),!0),d=e=>"string"==typeof e,p=e=>"object"==typeof e&&null!==e,f=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,g={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},v=e=>g[e],m={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(f,v)},w=(e={})=>{m={...m,...e}},E=()=>m,b=e=>{n=e},y=()=>n,C={type:"3rdParty",init(e){w(e.options.react),b(e)}},x=(0,s.createContext)();class _{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]??=!0})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}let O=(e,t)=>{let i=(0,s.useRef)();return(0,s.useEffect)(()=>{i.current=t?i.current:e},[e,t]),i.current},I=(e,t,i,n)=>e.getFixedT(t,i,n),S=(e,t,i,n)=>(0,s.useCallback)(I(e,t,i,n),[e,t,i,n]),P=(e,t={})=>{let{i18n:i}=t,{i18n:n,defaultNS:r}=(0,s.useContext)(x)||{},a=i||n||y();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new _),!a){l("You will need to pass in an i18next instance by using initReactI18next");let e=(e,t)=>d(t)?t:p(t)&&d(t.defaultValue)?t.defaultValue:Array.isArray(e)?e[e.length-1]:e,t=[e,{},!1];return t.t=e,t.i18n={},t.ready=!1,t}a.options.react?.wait&&l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");let o={...E(),...a.options.react,...t},{useSuspense:f,keyPrefix:g}=o,v=e||r||a.options?.defaultNS;v=d(v)?[v]:v||["translation"],a.reportNamespaces.addUsedNamespaces?.(v);let m=(a.isInitialized||a.initializedStoreOnce)&&v.every(e=>c(e,a,o)),w=S(a,t.lng||null,"fallback"===o.nsMode?v:v[0],g),b=()=>w,C=()=>I(a,t.lng||null,"fallback"===o.nsMode?v:v[0],g),[P,Y]=(0,s.useState)(b),X=v.join();t.lng&&(X=`${t.lng}${X}`);let A=O(X),M=(0,s.useRef)(!0);(0,s.useEffect)(()=>{let{bindI18n:e,bindI18nStore:i}=o;M.current=!0,m||f||(t.lng?h(a,t.lng,v,()=>{M.current&&Y(C)}):u(a,v,()=>{M.current&&Y(C)})),m&&A&&A!==X&&M.current&&Y(C);let n=()=>{M.current&&Y(C)};return e&&a?.on(e,n),i&&a?.store.on(i,n),()=>{M.current=!1,a&&e?.split(" ").forEach(e=>a.off(e,n)),i&&a&&i.split(" ").forEach(e=>a.store.off(e,n))}},[a,X]),(0,s.useEffect)(()=>{M.current&&m&&Y(b)},[a,g,m]);let k=[P,a,m];if(k.t=P,k.i18n=a,k.ready=m,m||!m&&!f)return k;throw new Promise(e=>{t.lng?h(a,t.lng,v,()=>e()):u(a,v,()=>e())})}}}]);