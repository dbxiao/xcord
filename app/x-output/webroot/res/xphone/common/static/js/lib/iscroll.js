!function(h,a,c){function g(h,c){this.wrapper="string"==typeof h?a.querySelector(h):h,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0};for(var i in c)this.options[i]=c[i];this.translateZ=this.options.HWCompositing&&T.hasPerspective?" translateZ(0)":"",this.options.useTransition=T.hasTransition&&this.options.useTransition,this.options.useTransform=T.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"==this.options.eventPassthrough?!1:this.options.scrollY,this.options.scrollX="horizontal"==this.options.eventPassthrough?!1:this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?T.ease[this.options.bounceEasing]||T.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function v(h,c,g){var v=a.createElement("div"),y=a.createElement("div");return g===!0&&(v.style.cssText="position:absolute;z-index:9999",y.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),y.className="iScrollIndicator","h"==h?(g===!0&&(v.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",y.style.height="100%"),v.className="iScrollHorizontalScrollbar"):(g===!0&&(v.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",y.style.width="100%"),v.className="iScrollVerticalScrollbar"),v.style.cssText+=";overflow:hidden",c||(v.style.pointerEvents="none"),v.appendChild(y),v}function y(c,g){this.wrapper="string"==typeof g.el?a.querySelector(g.el):g.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=c,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0};for(var i in g)this.options[i]=g[i];this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(T.addEvent(this.indicator,"touchstart",this),T.addEvent(h,"touchend",this)),this.options.disablePointer||(T.addEvent(this.indicator,T.prefixPointerEvent("pointerdown"),this),T.addEvent(h,T.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(T.addEvent(this.indicator,"mousedown",this),T.addEvent(h,"mouseup",this))),this.options.fade&&(this.wrapperStyle[T.style.transform]=this.scroller.translateZ,this.wrapperStyle[T.style.transitionDuration]=T.isBadAndroid?"0.001s":"0ms",this.wrapperStyle.opacity="0")}var S=h.requestAnimationFrame||h.webkitRequestAnimationFrame||h.mozRequestAnimationFrame||h.oRequestAnimationFrame||h.msRequestAnimationFrame||function(a){h.setTimeout(a,1e3/60)},T=function(){function g(h){return S===!1?!1:""===S?h:S+h.charAt(0).toUpperCase()+h.substr(1)}var v={},y=a.createElement("div").style,S=function(){for(var h,a=["t","webkitT","MozT","msT","OT"],i=0,l=a.length;l>i;i++)if(h=a[i]+"ransform",h in y)return a[i].substr(0,a[i].length-1);return!1}();v.getTime=Date.now||function(){return(new Date).getTime()},v.extend=function(h,a){for(var i in a)h[i]=a[i]},v.addEvent=function(h,a,c,g){h.addEventListener(a,c,!!g)},v.removeEvent=function(h,a,c,g){h.removeEventListener(a,c,!!g)},v.prefixPointerEvent=function(a){return h.MSPointerEvent?"MSPointer"+a.charAt(9).toUpperCase()+a.substr(10):a},v.momentum=function(h,a,g,v,y,S){var T,b,w=h-a,E=c.abs(w)/g;return S=void 0===S?6e-4:S,T=h+E*E/(2*S)*(0>w?-1:1),b=E/S,v>T?(T=y?v-y/2.5*(E/8):v,w=c.abs(T-h),b=w/E):T>0&&(T=y?y/2.5*(E/8):0,w=c.abs(h)+T,b=w/E),{destination:c.round(T),duration:b}};var T=g("transform");return v.extend(v,{hasTransform:T!==!1,hasPerspective:g("perspective")in y,hasTouch:"ontouchstart"in h,hasPointer:h.PointerEvent||h.MSPointerEvent,hasTransition:g("transition")in y}),v.isBadAndroid=/Android /.test(h.navigator.appVersion)&&!/Chrome\/\d/.test(h.navigator.appVersion),v.extend(v.style={},{transform:T,transitionTimingFunction:g("transitionTimingFunction"),transitionDuration:g("transitionDuration"),transitionDelay:g("transitionDelay"),transformOrigin:g("transformOrigin")}),v.hasClass=function(e,h){var re=new RegExp("(^|\\s)"+h+"(\\s|$)");return re.test(e.className)},v.addClass=function(e,h){if(!v.hasClass(e,h)){var a=e.className.split(" ");a.push(h),e.className=a.join(" ")}},v.removeClass=function(e,h){if(v.hasClass(e,h)){var re=new RegExp("(^|\\s)"+h+"(\\s|$)","g");e.className=e.className.replace(re," ")}},v.offset=function(h){for(var a=-h.offsetLeft,c=-h.offsetTop;h=h.offsetParent;)a-=h.offsetLeft,c-=h.offsetTop;return{left:a,top:c}},v.preventDefaultException=function(h,a){for(var i in a)if(a[i].test(h[i]))return!0;return!1},v.extend(v.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),v.extend(v.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(h){return h*(2-h)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(h){return c.sqrt(1- --h*h)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(h){var a=4;return(h-=1)*h*((a+1)*h+a)+1}},bounce:{style:"",fn:function(h){return(h/=1)<1/2.75?7.5625*h*h:2/2.75>h?7.5625*(h-=1.5/2.75)*h+.75:2.5/2.75>h?7.5625*(h-=2.25/2.75)*h+.9375:7.5625*(h-=2.625/2.75)*h+.984375}},elastic:{style:"",fn:function(h){var f=.22,e=.4;return 0===h?0:1==h?1:e*c.pow(2,-10*h)*c.sin(2*(h-f/4)*c.PI/f)+1}}}),v.tap=function(e,h){var c=a.createEvent("Event");c.initEvent(h,!0,!0),c.pageX=e.pageX,c.pageY=e.pageY,e.target.dispatchEvent(c)},v.click=function(e){var h,c=e.target;/(SELECT|INPUT|TEXTAREA)/i.test(c.tagName)||(h=a.createEvent("MouseEvents"),h.initMouseEvent("click",!0,!0,e.view,1,c.screenX,c.screenY,c.clientX,c.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),h._constructed=!0,c.dispatchEvent(h))},v}();g.prototype={version:"5.1.3",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),this._execEvent("destroy")},_transitionEnd:function(e){e.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(e){if(!(1!=T.eventType[e.type]&&0!==e.button||!this.enabled||this.initiated&&T.eventType[e.type]!==this.initiated)){!this.options.preventDefault||T.isBadAndroid||T.preventDefaultException(e.target,this.options.preventDefaultException)||e.preventDefault();var h,a=e.touches?e.touches[0]:e;this.initiated=T.eventType[e.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=T.getTime(),this.options.useTransition&&this.isInTransition?(this.isInTransition=!1,h=this.getComputedPosition(),this._translate(c.round(h.x),c.round(h.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=a.pageX,this.pointY=a.pageY,this._execEvent("beforeScrollStart")}},_move:function(e){if(this.enabled&&T.eventType[e.type]===this.initiated){this.options.preventDefault&&e.preventDefault();var h,a,g,v,y=e.touches?e.touches[0]:e,S=y.pageX-this.pointX,b=y.pageY-this.pointY,w=T.getTime();if(this.pointX=y.pageX,this.pointY=y.pageY,this.distX+=S,this.distY+=b,g=c.abs(this.distX),v=c.abs(this.distY),!(w-this.endTime>300&&10>g&&10>v)){if(this.directionLocked||this.options.freeScroll||(this.directionLocked=g>v+this.options.directionLockThreshold?"h":v>=g+this.options.directionLockThreshold?"v":"n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)e.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);b=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)e.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);S=0}S=this.hasHorizontalScroll?S:0,b=this.hasVerticalScroll?b:0,h=this.x+S,a=this.y+b,(h>0||h<this.maxScrollX)&&(h=this.options.bounce?this.x+S/3:h>0?0:this.maxScrollX),(a>0||a<this.maxScrollY)&&(a=this.options.bounce?this.y+b/3:a>0?0:this.maxScrollY),this.directionX=S>0?-1:0>S?1:0,this.directionY=b>0?-1:0>b?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(h,a),w-this.startTime>300&&(this.startTime=w,this.startX=this.x,this.startY=this.y)}}},_end:function(e){if(this.enabled&&T.eventType[e.type]===this.initiated){this.options.preventDefault&&!T.preventDefaultException(e.target,this.options.preventDefaultException)&&e.preventDefault();var h,a,g=(e.changedTouches?e.changedTouches[0]:e,T.getTime()-this.startTime),v=c.round(this.x),y=c.round(this.y),S=c.abs(v-this.startX),b=c.abs(y-this.startY),w=0,E="";if(this.isInTransition=0,this.initiated=0,this.endTime=T.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(v,y),!this.moved)return this.options.tap&&T.tap(e,this.options.tap),this.options.click&&T.click(e),void this._execEvent("scrollCancel");if(this._events.flick&&200>g&&100>S&&100>b)return void this._execEvent("flick");if(this.options.momentum&&300>g&&(h=this.hasHorizontalScroll?T.momentum(this.x,this.startX,g,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:v,duration:0},a=this.hasVerticalScroll?T.momentum(this.y,this.startY,g,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:y,duration:0},v=h.destination,y=a.destination,w=c.max(h.duration,a.duration),this.isInTransition=1),this.options.snap){var P=this._nearestSnap(v,y);this.currentPage=P,w=this.options.snapSpeed||c.max(c.max(c.min(c.abs(v-P.x),1e3),c.min(c.abs(y-P.y),1e3)),300),v=P.x,y=P.y,this.directionX=0,this.directionY=0,E=this.options.bounceEasing}return v!=this.x||y!=this.y?((v>0||v<this.maxScrollX||y>0||y<this.maxScrollY)&&(E=T.ease.quadratic),void this.scrollTo(v,y,w,E)):void this._execEvent("scrollEnd")}}},_resize:function(){var h=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){h.refresh()},this.options.resizePolling)},resetPosition:function(h){var x=this.x,a=this.y;return h=h||0,!this.hasHorizontalScroll||this.x>0?x=0:this.x<this.maxScrollX&&(x=this.maxScrollX),!this.hasVerticalScroll||this.y>0?a=0:this.y<this.maxScrollY&&(a=this.maxScrollY),x==this.x&&a==this.y?!1:(this.scrollTo(x,a,h,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=T.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(h,a){this._events[h]||(this._events[h]=[]),this._events[h].push(a)},off:function(h,a){if(this._events[h]){var c=this._events[h].indexOf(a);c>-1&&this._events[h].splice(c,1)}},_execEvent:function(h){if(this._events[h]){var i=0,l=this._events[h].length;if(l)for(;l>i;i++)this._events[h][i].apply(this,[].slice.call(arguments,1))}},scrollBy:function(x,h,a,c){x=this.x+x,h=this.y+h,a=a||0,this.scrollTo(x,h,a,c)},scrollTo:function(x,h,a,c){c=c||T.ease.circular,this.isInTransition=this.options.useTransition&&a>0,!a||this.options.useTransition&&c.style?(this._transitionTimingFunction(c.style),this._transitionTime(a),this._translate(x,h)):this._animate(x,h,a,c.fn)},scrollToElement:function(h,a,g,v,y){if(h=h.nodeType?h:this.scroller.querySelector(h)){var S=T.offset(h);S.left-=this.wrapperOffset.left,S.top-=this.wrapperOffset.top,g===!0&&(g=c.round(h.offsetWidth/2-this.wrapper.offsetWidth/2)),v===!0&&(v=c.round(h.offsetHeight/2-this.wrapper.offsetHeight/2)),S.left-=g||0,S.top-=v||0,S.left=S.left>0?0:S.left<this.maxScrollX?this.maxScrollX:S.left,S.top=S.top>0?0:S.top<this.maxScrollY?this.maxScrollY:S.top,a=void 0===a||null===a||"auto"===a?c.max(c.abs(this.x-S.left),c.abs(this.y-S.top)):a,this.scrollTo(S.left,S.top,a,y)}},_transitionTime:function(h){if(h=h||0,this.scrollerStyle[T.style.transitionDuration]=h+"ms",!h&&T.isBadAndroid&&(this.scrollerStyle[T.style.transitionDuration]="0.001s"),this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTime(h)},_transitionTimingFunction:function(h){if(this.scrollerStyle[T.style.transitionTimingFunction]=h,this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTimingFunction(h)},_translate:function(x,h){if(this.options.useTransform?this.scrollerStyle[T.style.transform]="translate("+x+"px,"+h+"px)"+this.translateZ:(x=c.round(x),h=c.round(h),this.scrollerStyle.left=x+"px",this.scrollerStyle.top=h+"px"),this.x=x,this.y=h,this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].updatePosition()},_initEvents:function(a){var c=a?T.removeEvent:T.addEvent,g=this.options.bindToWrapper?this.wrapper:h;c(h,"orientationchange",this),c(h,"resize",this),this.options.click&&c(this.wrapper,"click",this,!0),this.options.disableMouse||(c(this.wrapper,"mousedown",this),c(g,"mousemove",this),c(g,"mousecancel",this),c(g,"mouseup",this)),T.hasPointer&&!this.options.disablePointer&&(c(this.wrapper,T.prefixPointerEvent("pointerdown"),this),c(g,T.prefixPointerEvent("pointermove"),this),c(g,T.prefixPointerEvent("pointercancel"),this),c(g,T.prefixPointerEvent("pointerup"),this)),T.hasTouch&&!this.options.disableTouch&&(c(this.wrapper,"touchstart",this),c(g,"touchmove",this),c(g,"touchcancel",this),c(g,"touchend",this)),c(this.scroller,"transitionend",this),c(this.scroller,"webkitTransitionEnd",this),c(this.scroller,"oTransitionEnd",this),c(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var x,a,c=h.getComputedStyle(this.scroller,null);return this.options.useTransform?(c=c[T.style.transform].split(")")[0].split(", "),x=+(c[12]||c[4]),a=+(c[13]||c[5])):(x=+c.left.replace(/[^-\d.]/g,""),a=+c.top.replace(/[^-\d.]/g,"")),{x:x,y:a}},_initIndicators:function(){function h(h){for(var i=T.indicators.length;i--;)h.call(T.indicators[i])}var a,c=this.options.interactiveScrollbars,g="string"!=typeof this.options.scrollbars,S=[],T=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(a={el:v("v",c,this.options.scrollbars),interactive:c,defaultScrollbars:!0,customStyle:g,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(a.el),S.push(a)),this.options.scrollX&&(a={el:v("h",c,this.options.scrollbars),interactive:c,defaultScrollbars:!0,customStyle:g,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(a.el),S.push(a))),this.options.indicators&&(S=S.concat(this.options.indicators));for(var i=S.length;i--;)this.indicators.push(new y(this,S[i]));this.options.fadeScrollbars&&(this.on("scrollEnd",function(){h(function(){this.fade()})}),this.on("scrollCancel",function(){h(function(){this.fade()})}),this.on("scrollStart",function(){h(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){h(function(){this.fade(1,!0)})})),this.on("refresh",function(){h(function(){this.refresh()})}),this.on("destroy",function(){h(function(){this.destroy()}),delete this.indicators})},_initWheel:function(){T.addEvent(this.wrapper,"wheel",this),T.addEvent(this.wrapper,"mousewheel",this),T.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){T.removeEvent(this.wrapper,"wheel",this),T.removeEvent(this.wrapper,"mousewheel",this),T.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(e){if(this.enabled){e.preventDefault(),e.stopPropagation();var h,a,g,v,y=this;if(void 0===this.wheelTimeout&&y._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){y._execEvent("scrollEnd"),y.wheelTimeout=void 0},400),"deltaX"in e)1===e.deltaMode?(h=-e.deltaX*this.options.mouseWheelSpeed,a=-e.deltaY*this.options.mouseWheelSpeed):(h=-e.deltaX,a=-e.deltaY);else if("wheelDeltaX"in e)h=e.wheelDeltaX/120*this.options.mouseWheelSpeed,a=e.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in e)h=a=e.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in e))return;h=a=-e.detail/3*this.options.mouseWheelSpeed}if(h*=this.options.invertWheelDirection,a*=this.options.invertWheelDirection,this.hasVerticalScroll||(h=a,a=0),this.options.snap)return g=this.currentPage.pageX,v=this.currentPage.pageY,h>0?g--:0>h&&g++,a>0?v--:0>a&&v++,void this.goToPage(g,v);g=this.x+c.round(this.hasHorizontalScroll?h:0),v=this.y+c.round(this.hasVerticalScroll?a:0),g>0?g=0:g<this.maxScrollX&&(g=this.maxScrollX),v>0?v=0:v<this.maxScrollY&&(v=this.maxScrollY),this.scrollTo(g,v,0)}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var l,n,h,a,g,v,i=0,m=0,x=0,y=this.options.snapStepX||this.wrapperWidth,S=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(this.options.snap===!0)for(h=c.round(y/2),a=c.round(S/2);x>-this.scrollerWidth;){for(this.pages[i]=[],l=0,g=0;g>-this.scrollerHeight;)this.pages[i][l]={x:c.max(x,this.maxScrollX),y:c.max(g,this.maxScrollY),width:y,height:S,cx:x-h,cy:g-a},g-=S,l++;x-=y,i++}else for(v=this.options.snap,l=v.length,n=-1;l>i;i++)(0===i||v[i].offsetLeft<=v[i-1].offsetLeft)&&(m=0,n++),this.pages[m]||(this.pages[m]=[]),x=c.max(-v[i].offsetLeft,this.maxScrollX),g=c.max(-v[i].offsetTop,this.maxScrollY),h=x-c.round(v[i].offsetWidth/2),a=g-c.round(v[i].offsetHeight/2),this.pages[m][n]={x:x,y:g,width:v[i].offsetWidth,height:v[i].offsetHeight,cx:h,cy:a},x>this.maxScrollX&&m++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1===0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=c.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=c.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var h=this.options.snapSpeed||c.max(c.max(c.min(c.abs(this.x-this.startX),1e3),c.min(c.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,h)})},_nearestSnap:function(x,h){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var i=0,l=this.pages.length,m=0;if(c.abs(x-this.absStartX)<this.snapThresholdX&&c.abs(h-this.absStartY)<this.snapThresholdY)return this.currentPage;for(x>0?x=0:x<this.maxScrollX&&(x=this.maxScrollX),h>0?h=0:h<this.maxScrollY&&(h=this.maxScrollY);l>i;i++)if(x>=this.pages[i][0].cx){x=this.pages[i][0].x;break}for(l=this.pages[i].length;l>m;m++)if(h>=this.pages[0][m].cy){h=this.pages[0][m].y;break}return i==this.currentPage.pageX&&(i+=this.directionX,0>i?i=0:i>=this.pages.length&&(i=this.pages.length-1),x=this.pages[i][0].x),m==this.currentPage.pageY&&(m+=this.directionY,0>m?m=0:m>=this.pages[0].length&&(m=this.pages[0].length-1),h=this.pages[0][m].y),{x:x,y:h,pageX:i,pageY:m}},goToPage:function(x,h,a,g){g=g||this.options.bounceEasing,x>=this.pages.length?x=this.pages.length-1:0>x&&(x=0),h>=this.pages[x].length?h=this.pages[x].length-1:0>h&&(h=0);var v=this.pages[x][h].x,y=this.pages[x][h].y;a=void 0===a?this.options.snapSpeed||c.max(c.max(c.min(c.abs(v-this.x),1e3),c.min(c.abs(y-this.y),1e3)),300):a,this.currentPage={x:v,y:y,pageX:x,pageY:h},this.scrollTo(v,y,a,g)},next:function(h,a){var x=this.currentPage.pageX,c=this.currentPage.pageY;x++,x>=this.pages.length&&this.hasVerticalScroll&&(x=0,c++),this.goToPage(x,c,h,a)},prev:function(h,a){var x=this.currentPage.pageX,c=this.currentPage.pageY;x--,0>x&&this.hasVerticalScroll&&(x=0,c--),this.goToPage(x,c,h,a)},_initKeys:function(){var i,a={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};if("object"==typeof this.options.keyBindings)for(i in this.options.keyBindings)"string"==typeof this.options.keyBindings[i]&&(this.options.keyBindings[i]=this.options.keyBindings[i].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(i in a)this.options.keyBindings[i]=this.options.keyBindings[i]||a[i];T.addEvent(h,"keydown",this),this.on("destroy",function(){T.removeEvent(h,"keydown",this)})},_key:function(e){if(this.enabled){var h,a=this.options.snap,g=a?this.currentPage.pageX:this.x,v=a?this.currentPage.pageY:this.y,y=T.getTime(),S=this.keyTime||0,b=.25;switch(this.options.useTransition&&this.isInTransition&&(h=this.getComputedPosition(),this._translate(c.round(h.x),c.round(h.y)),this.isInTransition=!1),this.keyAcceleration=200>y-S?c.min(this.keyAcceleration+b,50):0,e.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?g+=a?1:this.wrapperWidth:v+=a?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?g-=a?1:this.wrapperWidth:v-=a?1:this.wrapperHeight;break;case this.options.keyBindings.end:g=a?this.pages.length-1:this.maxScrollX,v=a?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:g=0,v=0;break;case this.options.keyBindings.left:g+=a?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:v+=a?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:g-=a?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:v-=a?1:5+this.keyAcceleration>>0;break;default:return}if(a)return void this.goToPage(g,v);g>0?(g=0,this.keyAcceleration=0):g<this.maxScrollX&&(g=this.maxScrollX,this.keyAcceleration=0),v>0?(v=0,this.keyAcceleration=0):v<this.maxScrollY&&(v=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(g,v,0),this.keyTime=y}},_animate:function(h,a,c,g){function v(){var X,Y,k,_=T.getTime();return _>=P?(y.isAnimating=!1,y._translate(h,a),void(y.resetPosition(y.options.bounceTime)||y._execEvent("scrollEnd"))):(_=(_-E)/c,k=g(_),X=(h-b)*k+b,Y=(a-w)*k+w,y._translate(X,Y),void(y.isAnimating&&S(v)))}var y=this,b=this.x,w=this.y,E=T.getTime(),P=E+c;this.isAnimating=!0,v()},handleEvent:function(e){switch(e.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(e);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(e);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(e);break;case"keydown":this._key(e);break;case"click":e._constructed||(e.preventDefault(),e.stopPropagation())}}},y.prototype={handleEvent:function(e){switch(e.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(e)}},destroy:function(){this.options.interactive&&(T.removeEvent(this.indicator,"touchstart",this),T.removeEvent(this.indicator,T.prefixPointerEvent("pointerdown"),this),T.removeEvent(this.indicator,"mousedown",this),T.removeEvent(h,"touchmove",this),T.removeEvent(h,T.prefixPointerEvent("pointermove"),this),T.removeEvent(h,"mousemove",this),T.removeEvent(h,"touchend",this),T.removeEvent(h,T.prefixPointerEvent("pointerup"),this),T.removeEvent(h,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(e){var a=e.touches?e.touches[0]:e;e.preventDefault(),e.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=a.pageX,this.lastPointY=a.pageY,this.startTime=T.getTime(),this.options.disableTouch||T.addEvent(h,"touchmove",this),this.options.disablePointer||T.addEvent(h,T.prefixPointerEvent("pointermove"),this),this.options.disableMouse||T.addEvent(h,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(e){{var h,a,c,g,v=e.touches?e.touches[0]:e;T.getTime()}this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,h=v.pageX-this.lastPointX,this.lastPointX=v.pageX,a=v.pageY-this.lastPointY,this.lastPointY=v.pageY,c=this.x+h,g=this.y+a,this._pos(c,g),e.preventDefault(),e.stopPropagation()},_end:function(e){if(this.initiated){if(this.initiated=!1,e.preventDefault(),e.stopPropagation(),T.removeEvent(h,"touchmove",this),T.removeEvent(h,T.prefixPointerEvent("pointermove"),this),T.removeEvent(h,"mousemove",this),this.scroller.options.snap){var a=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),g=this.options.snapSpeed||c.max(c.max(c.min(c.abs(this.scroller.x-a.x),1e3),c.min(c.abs(this.scroller.y-a.y),1e3)),300);(this.scroller.x!=a.x||this.scroller.y!=a.y)&&(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=a,this.scroller.scrollTo(a.x,a.y,g,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(h){h=h||0,this.indicatorStyle[T.style.transitionDuration]=h+"ms",!h&&T.isBadAndroid&&(this.indicatorStyle[T.style.transitionDuration]="0.001s")},transitionTimingFunction:function(h){this.indicatorStyle[T.style.transitionTimingFunction]=h},refresh:function(){this.transitionTime(),this.indicatorStyle.display=this.options.listenX&&!this.options.listenY?this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.scroller.hasVerticalScroll?"block":"none":this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(T.addClass(this.wrapper,"iScrollBothScrollbars"),T.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(T.removeClass(this.wrapper,"iScrollBothScrollbars"),T.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));this.wrapper.offsetHeight;this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=c.max(c.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=-this.indicatorWidth+8,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=c.max(c.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=-this.indicatorHeight+8,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var x=this.options.listenX&&c.round(this.sizeRatioX*this.scroller.x)||0,h=this.options.listenY&&c.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(x<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=c.max(this.indicatorWidth+x,8),this.indicatorStyle.width=this.width+"px"),x=this.minBoundaryX):x>this.maxBoundaryX?"scale"==this.options.shrink?(this.width=c.max(this.indicatorWidth-(x-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",x=this.maxPosX+this.indicatorWidth-this.width):x=this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),h<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=c.max(this.indicatorHeight+3*h,8),this.indicatorStyle.height=this.height+"px"),h=this.minBoundaryY):h>this.maxBoundaryY?"scale"==this.options.shrink?(this.height=c.max(this.indicatorHeight-3*(h-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",h=this.maxPosY+this.indicatorHeight-this.height):h=this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=x,this.y=h,this.scroller.options.useTransform?this.indicatorStyle[T.style.transform]="translate("+x+"px,"+h+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=x+"px",this.indicatorStyle.top=h+"px")},_pos:function(x,h){0>x?x=0:x>this.maxPosX&&(x=this.maxPosX),0>h?h=0:h>this.maxPosY&&(h=this.maxPosY),x=this.options.listenX?c.round(x/this.sizeRatioX):this.scroller.x,h=this.options.listenY?c.round(h/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(x,h)},fade:function(h,a){if(!a||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var c=h?250:500,g=h?0:300;h=h?"1":"0",this.wrapperStyle[T.style.transitionDuration]=c+"ms",this.fadeTimeout=setTimeout(function(h){this.wrapperStyle.opacity=h,this.visible=+h}.bind(this,h),g)}}},g.utils=T,"undefined"!=typeof module&&module.exports?module.exports=g:h.IScroll=g}(window,document,Math);