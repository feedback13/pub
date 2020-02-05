/*
 * Copyright (c) 2017. (주)사람인HR.
 * All rights reserved.
 */

/**
 * scrollY setting
 */
$(window).on('scroll', function () {
    var scrollY;
    if (document.body.scrollTop == 0) {
        scrollY = document.documentElement.scrollTop;
    } else {
        scrollY = document.body.scrollTop;
    }
});

/**
* @preserve HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
;(function(window,document){var version='3.6.2';var options=window.html5||{};var reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var supportsHtml5Styles;var expando='_html5shiv';var expanID=0;var expandoData={};var supportsUnknownElements;(function(){try{var a=document.createElement('a');a.innerHTML='<xyz></xyz>';supportsHtml5Styles=('hidden'in a);supportsUnknownElements=a.childNodes.length==1||(function(){(document.createElement)('a');var frag=document.createDocumentFragment();return(typeof frag.cloneNode=='undefined'||typeof frag.createDocumentFragment=='undefined'||typeof frag.createElement=='undefined')}())}catch(e){supportsHtml5Styles=true;supportsUnknownElements=true}}());function addStyleSheet(ownerDocument,cssText){var p=ownerDocument.createElement('p'),parent=ownerDocument.getElementsByTagName('head')[0]||ownerDocument.documentElement;p.innerHTML='x<style>'+cssText+'</style>';return parent.insertBefore(p.lastChild,parent.firstChild)}function getElements(){var elements=html5.elements;return typeof elements=='string'?elements.split(' '):elements}function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];if(!data){data={};expanID++;ownerDocument[expando]=expanID;expandoData[expanID]=data}return data}function createElement(nodeName,ownerDocument,data){if(!ownerDocument){ownerDocument=document}if(supportsUnknownElements){return ownerDocument.createElement(nodeName)}if(!data){data=getExpandoData(ownerDocument)}var node;if(data.cache[nodeName]){node=data.cache[nodeName].cloneNode()}else if(saveClones.test(nodeName)){node=(data.cache[nodeName]=data.createElem(nodeName)).cloneNode()}else{node=data.createElem(nodeName)}return node.canHaveChildren&&!reSkip.test(nodeName)?data.frag.appendChild(node):node}function createDocumentFragment(ownerDocument,data){if(!ownerDocument){ownerDocument=document}if(supportsUnknownElements){return ownerDocument.createDocumentFragment()}data=data||getExpandoData(ownerDocument);var clone=data.frag.cloneNode(),i=0,elems=getElements(),l=elems.length;for(;i<l;i++){clone.createElement(elems[i])}return clone}function shivMethods(ownerDocument,data){if(!data.cache){data.cache={};data.createElem=ownerDocument.createElement;data.createFrag=ownerDocument.createDocumentFragment;data.frag=data.createFrag()}ownerDocument.createElement=function(nodeName){if(!html5.shivMethods){return data.createElem(nodeName)}return createElement(nodeName,ownerDocument,data)};ownerDocument.createDocumentFragment=Function('h,f','return function(){'+'var n=f.cloneNode(),c=n.createElement;'+'h.shivMethods&&('+getElements().join().replace(/\w+/g,function(nodeName){data.createElem(nodeName);data.frag.createElement(nodeName);return'c("'+nodeName+'")'})+');return n}')(html5,data.frag)}function shivDocument(ownerDocument){if(!ownerDocument){ownerDocument=document}var data=getExpandoData(ownerDocument);if(html5.shivCSS&&!supportsHtml5Styles&&!data.hasCSS){data.hasCSS=!!addStyleSheet(ownerDocument,'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}'+'mark{background:#FF0;color:#000}'+'template{display:none}')}if(!supportsUnknownElements){shivMethods(ownerDocument,data)}return ownerDocument}var html5={'elements':options.elements||'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video','version':version,'shivCSS':(options.shivCSS!==false),'supportsUnknownElements':supportsUnknownElements,'shivMethods':(options.shivMethods!==false),'type':'default','shivDocument':shivDocument,createElement:createElement,createDocumentFragment:createDocumentFragment};window.html5=html5;shivDocument(document);var reMedia=/^$|\b(?:all|print)\b/;var shivNamespace='html5shiv';var supportsShivableSheets=!supportsUnknownElements&&(function(){var docEl=document.documentElement;return!(typeof document.namespaces=='undefined'||typeof document.parentWindow=='undefined'||typeof docEl.applyElement=='undefined'||typeof docEl.removeNode=='undefined'||typeof window.attachEvent=='undefined')}());function addWrappers(ownerDocument){var node,nodes=ownerDocument.getElementsByTagName('*'),index=nodes.length,reElements=RegExp('^(?:'+getElements().join('|')+')$','i'),result=[];while(index--){node=nodes[index];if(reElements.test(node.nodeName)){result.push(node.applyElement(createWrapper(node)))}}return result}function createWrapper(element){var node,nodes=element.attributes,index=nodes.length,wrapper=element.ownerDocument.createElement(shivNamespace+':'+element.nodeName);while(index--){node=nodes[index];node.specified&&wrapper.setAttribute(node.nodeName,node.nodeValue)}wrapper.style.cssText=element.style.cssText;return wrapper}function shivCssText(cssText){var pair,parts=cssText.split('{'),index=parts.length,reElements=RegExp('(^|[\\s,>+~])('+getElements().join('|')+')(?=[[\\s,>+~#.:]|$)','gi'),replacement='$1'+shivNamespace+'\\:$2';while(index--){pair=parts[index]=parts[index].split('}');pair[pair.length-1]=pair[pair.length-1].replace(reElements,replacement);parts[index]=pair.join('}')}return parts.join('{')}function removeWrappers(wrappers){var index=wrappers.length;while(index--){wrappers[index].removeNode()}}function shivPrint(ownerDocument){var shivedSheet,wrappers,data=getExpandoData(ownerDocument),namespaces=ownerDocument.namespaces,ownerWindow=ownerDocument.parentWindow;if(!supportsShivableSheets||ownerDocument.printShived){return ownerDocument}if(typeof namespaces[shivNamespace]=='undefined'){namespaces.add(shivNamespace)}function removeSheet(){clearTimeout(data._removeSheetTimer);if(shivedSheet){shivedSheet.removeNode(true)}shivedSheet=null}ownerWindow.attachEvent('onbeforeprint',function(){removeSheet();var imports,length,sheet,collection=ownerDocument.styleSheets,cssText=[],index=collection.length,sheets=Array(index);while(index--){sheets[index]=collection[index]}while((sheet=sheets.pop())){if(!sheet.disabled&&reMedia.test(sheet.media)){try{imports=sheet.imports;length=imports.length}catch(er){length=0}for(index=0;index<length;index++){sheets.push(imports[index])}try{cssText.push(sheet.cssText)}catch(er){}}}cssText=shivCssText(cssText.reverse().join(''));wrappers=addWrappers(ownerDocument);shivedSheet=addStyleSheet(ownerDocument,cssText)});ownerWindow.attachEvent('onafterprint',function(){removeWrappers(wrappers);clearTimeout(data._removeSheetTimer);data._removeSheetTimer=setTimeout(removeSheet,500)});ownerDocument.printShived=true;return ownerDocument}html5.type+=' print';html5.shivPrint=shivPrint;shivPrint(document)}(this,document));

/*
 CSS Browser Selector js v0.5.3 (July 2, 2013)

 -- original --
 Rafael Lima (http://rafael.adm.br)
 http://rafael.adm.br/css_browser_selector
 License: http://creativecommons.org/licenses/by/2.5/
 Contributors: http://rafael.adm.br/css_browser_selector#contributors
 -- /original --

 Fork project: http://code.google.com/p/css-browser-selector/
 Song Hyo-Jin (shj at xenosi.de)
 */
function css_browser_selector(n){var b=n.toLowerCase(),f=function(c){return b.indexOf(c)>-1},h="gecko",k="webkit",p="safari",j="chrome",d="opera",e="mobile",l=0,a=window.devicePixelRatio?(window.devicePixelRatio+"").replace(".","_"):"1";var i=[(!(/opera|webtv/.test(b))&&/msie\s(\d+)/.test(b)&&(l=RegExp.$1*1))?("ie ie"+l+((l==6||l==7)?" ie67 ie678 ie6789":(l==8)?" ie678 ie6789":(l==9)?" ie6789 ie9m":(l>9)?" ie9m":"")):(/trident\/\d+.*?;\s*rv:(\d+)\.(\d+)\)/.test(b)&&(l=[RegExp.$1,RegExp.$2]))?"ie ie"+l[0]+" ie"+l[0]+"_"+l[1]+" ie9m":(/firefox\/(\d+)\.(\d+)/.test(b)&&(re=RegExp))?h+" ff ff"+re.$1+" ff"+re.$1+"_"+re.$2:f("gecko/")?h:f(d)?d+(/version\/(\d+)/.test(b)?" "+d+RegExp.$1:(/opera(\s|\/)(\d+)/.test(b)?" "+d+RegExp.$2:"")):f("konqueror")?"konqueror":f("blackberry")?e+" blackberry":(f(j)||f("crios"))?k+" "+j:f("iron")?k+" iron":!f("cpu os")&&f("applewebkit/")?k+" "+p:f("mozilla/")?h:"",f("android")?e+" android":"",f("tablet")?"tablet":"",f("j2me")?e+" j2me":f("ipad; u; cpu os")?e+" chrome android tablet":f("ipad;u;cpu os")?e+" chromedef android tablet":f("iphone")?e+" ios iphone":f("ipod")?e+" ios ipod":f("ipad")?e+" ios ipad tablet":f("mac")?"mac":f("darwin")?"mac":f("webtv")?"webtv":f("win")?"win"+(f("windows nt 6.0")?" vista":""):f("freebsd")?"freebsd":(f("x11")||f("linux"))?"linux":"",(a!="1")?" retina ratio"+a:"","js portrait"].join(" ");if(window.jQuery&&!window.jQuery.browser){window.jQuery.browser=l?{msie:1,version:l}:{}}return i}(function(j,b){var c=css_browser_selector(navigator.userAgent);var g=j.documentElement;g.className+=" "+c;var a=c.replace(/^\s*|\s*$/g,"").split(/ +/);b.CSSBS=1;for(var f=0;f<a.length;f++){b["CSSBS_"+a[f]]=1}var e=function(d){return j.documentElement[d]||j.body[d]};if(b.jQuery){(function(q){var h="portrait",k="landscape";var i="smartnarrow",u="smartwide",x="tabletnarrow",r="tabletwide",w=i+" "+u+" "+x+" "+r+" pc";var v=q(g);var s=0,o=0;function d(){if(s!=0){return}try{var l=e("clientWidth"),p=e("clientHeight");if(l>p){v.removeClass(h).addClass(k)}else{v.removeClass(k).addClass(h)}if(l==o){return}o=l}catch(m){}s=setTimeout(n,100)}function n(){try{v.removeClass(w);v.addClass((o<=360)?i:(o<=640)?u:(o<=768)?x:(o<=1024)?r:"pc")}catch(l){}s=0}if(b.CSSBS_ie){setInterval(d,1000)}else{q(b).on("resize orientationchange",d).trigger("resize")}})(b.jQuery)}})(document,window);

(function(){
  var attachEvent = document.attachEvent;
  var isIE = navigator.userAgent.match(/Trident/);
  //console.log(isIE);
  var requestFrame = (function(){
    var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
        function(fn){ return window.setTimeout(fn, 20); };
    return function(fn){ return raf(fn); };
  })();

  var cancelFrame = (function(){
    var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
           window.clearTimeout;
    return function(id){ return cancel(id); };
  })();

  function resizeListener(e){
    var win = e.target || e.srcElement;
    if (win.__resizeRAF__) cancelFrame(win.__resizeRAF__);
    win.__resizeRAF__ = requestFrame(function(){
      var trigger = win.__resizeTrigger__;
      trigger.__resizeListeners__.forEach(function(fn){
        fn.call(trigger, e);
      });
    });
  }

  function objectLoad(e){
    this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__;
    this.contentDocument.defaultView.addEventListener('resize', resizeListener);
  }

  window.addResizeListener = function(element, fn){
    if (!element.__resizeListeners__) {
      element.__resizeListeners__ = [];
      if (attachEvent) {
        element.__resizeTrigger__ = element;
        element.attachEvent('onresize', resizeListener);
      }
      else {
        if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
        var obj = element.__resizeTrigger__ = document.createElement('object');
        obj.setAttribute('style', 'display: block; position: fixed; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden;  z-index: -1;');
        obj.__resizeElement__ = element;
        obj.onload = objectLoad;
        obj.type = 'text/html';
        if (isIE) element.appendChild(obj);
        obj.data = 'about:blank';
        if (!isIE) element.appendChild(obj);
      }
    }
    element.__resizeListeners__.push(fn);
  };

  window.removeResizeListener = function(element, fn){
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
    if (!element.__resizeListeners__.length) {
      if (attachEvent) element.detachEvent('onresize', resizeListener);
      else {
        element.__resizeTrigger__.contentDocument.defaultView.removeEventListener('resize', resizeListener);
        element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
      }
    }
  }
})();

/* flexSlider */
(function(b){var oa=0,X=0,ga=0,T=0,Da="ontouchstart"in window||0<navigator.msMaxTouchPoints,Ea="onorientationchange"in window,ca=!1,da=!1,Y=!1,pa=!1,ia=!1,ea="pointer",va="pointer",ja=[],N=[],wa=[],R=[],B=[],aa=[],y=[],n=[],t=[],qa=[],fa=[],f={showScrollbar:function(e,c){e.scrollbarHide&&b("."+c).css({opacity:e.scrollbarOpacity,filter:"alpha(opacity:"+100*e.scrollbarOpacity+")"})},hideScrollbar:function(b,c,a,v,g,d,n,t,y,B){if(b.scrollbar&&b.scrollbarHide)for(var w=a;w<a+25;w++)c[c.length]=f.hideScrollbarIntervalTimer(10* w,v[a],(a+24-w)/24,g,d,n,t,y,B,b)},hideScrollbarInterval:function(e,c,a,v,g,d,n,y,B){T=-1*e/t[y]*(g-d-n-v);f.setSliderOffset("."+a,T);b("."+a).css({opacity:B.scrollbarOpacity*c,filter:"alpha(opacity:"+B.scrollbarOpacity*c*100+")"})},slowScrollHorizontalInterval:function(e,c,a,v,g,d,I,O,J,K,w,x,A,r,u,m,D,k,l){if(l.infiniteSlider){if(a<=-1*t[m]||a<=-1*qa[m]){var q=b(e).width();if(a<=-1*qa[m]){var s=-1*w[0];b(c).each(function(a){f.setSliderOffset(b(c)[a],s+D);a<x.length&&(x[a]=-1*s);s+=u[a]});a+=-1* x[0];n[m]=-1*x[0]+D;t[m]=n[m]+q-d;y[m]=0}for(;a<=-1*t[m];){var h=0,C=f.getSliderOffset(b(c[0]),"x");b(c).each(function(a){f.getSliderOffset(this,"x")<C&&(C=f.getSliderOffset(this,"x"),h=a)});A=n[m]+q;f.setSliderOffset(b(c)[h],A);n[m]=-1*x[1]+D;t[m]=n[m]+q-d;x.splice(0,1);x.splice(x.length,0,-1*A+D);y[m]++}}if(a>=-1*n[m]||0<=a){q=b(e).width();if(0<a)for(s=-1*w[0],b(c).each(function(a){f.setSliderOffset(b(c)[a],s+D);a<x.length&&(x[a]=-1*s);s+=u[a]}),a-=-1*x[0],n[m]=-1*x[0]+D,t[m]=n[m]+q-d,y[m]=r;0< -1*x[0]-q+D;){var z=0,L=f.getSliderOffset(b(c[0]),"x");b(c).each(function(a){f.getSliderOffset(this,"x")>L&&(L=f.getSliderOffset(this,"x"),z=a)});A=n[m]-u[z];f.setSliderOffset(b(c)[z],A);x.splice(0,0,-1*A+D);x.splice(x.length-1,1);n[m]=-1*x[0]+D;t[m]=n[m]+q-d;y[m]--;B[m]++}for(;a>-1*n[m];)z=0,L=f.getSliderOffset(b(c[0]),"x"),b(c).each(function(a){f.getSliderOffset(this,"x")>L&&(L=f.getSliderOffset(this,"x"),z=a)}),A=n[m]-u[z],f.setSliderOffset(b(c)[z],A),x.splice(0,0,-1*A+D),x.splice(x.length-1,1), n[m]=-1*x[0]+D,t[m]=n[m]+q-d,y[m]--}}w=!1;d=f.calcActiveOffset(l,a,x,d,y[m],r,K,m);A=(d+y[m]+r)%r;l.infiniteSlider?A!=aa[m]&&(w=!0):d!=B[m]&&(w=!0);if(w&&(r=new f.args("change",l,e,b(e).children(":eq("+A+")"),A,k),b(e).parent().data("args",r),""!=l.onSlideChange))l.onSlideChange(r);B[m]=d;aa[m]=A;a=Math.floor(a);if(m!=b(e).parent().data("args").data.sliderNumber)return!0;f.setSliderOffset(e,a);l.scrollbar&&(T=Math.floor((-1*a-n[m]+D)/(t[m]-n[m]+D)*(I-O-g)),e=g-J,a>=-1*n[m]+D?(e=g-J- -1*T,f.setSliderOffset(b("."+ v),0)):(a<=-1*t[m]+1&&(e=I-O-J-T),f.setSliderOffset(b("."+v),T)),b("."+v).css({width:e+"px"}))},slowScrollHorizontal:function(e,c,a,v,g,d,I,O,J,K,w,x,A,r,u,m,D,k,l,q,s){var h=f.getSliderOffset(e,"x");d=[];var C=0,z=25/1024*O;frictionCoefficient=s.frictionCoefficient;elasticFrictionCoefficient=s.elasticFrictionCoefficient;snapFrictionCoefficient=s.snapFrictionCoefficient;g>s.snapVelocityThreshold&&s.snapToChildren&&!l?C=1:g<-1*s.snapVelocityThreshold&&s.snapToChildren&&!l&&(C=-1);g<-1*z?g=-1*z:g>z&& (g=z);b(e)[0]!==b(k)[0]&&(C*=-1,g*=-2);k=y[u];if(s.infiniteSlider)var L=n[u],p=t[u];l=[];for(var z=[],G=0;G<A.length;G++)l[G]=A[G],G<c.length&&(z[G]=f.getSliderOffset(b(c[G]),"x"));for(;1<g||-1>g;){g*=frictionCoefficient;h+=g;(h>-1*n[u]||h<-1*t[u])&&!s.infiniteSlider&&(g*=elasticFrictionCoefficient,h+=g);if(s.infiniteSlider){if(h<=-1*p){for(var p=b(e).width(),N=0,P=z[0],G=0;G<z.length;G++)z[G]<P&&(P=z[G],N=G);G=L+p;z[N]=G;L=-1*l[1]+q;p=L+p-O;l.splice(0,1);l.splice(l.length,0,-1*G+q);k++}if(h>=-1* L){p=b(e).width();N=0;P=z[0];for(G=0;G<z.length;G++)z[G]>P&&(P=z[G],N=G);G=L-r[N];z[N]=G;l.splice(0,0,-1*G+q);l.splice(l.length-1,1);L=-1*l[0]+q;p=L+p-O;k--}}d[d.length]=h}z=!1;g=f.calcActiveOffset(s,h,l,O,k,D,B[u],u);L=(g+k+D)%D;s.snapToChildren&&(s.infiniteSlider?L!=aa[u]&&(z=!0):g!=B[u]&&(z=!0),0>C&&!z?(g++,g>=A.length&&!s.infiniteSlider&&(g=A.length-1)):0<C&&!z&&(g--,0>g&&!s.infiniteSlider&&(g=0)));if(s.snapToChildren||(h>-1*n[u]||h<-1*t[u])&&!s.infiniteSlider){(h>-1*n[u]||h<-1*t[u])&&!s.infiniteSlider? d.splice(0,d.length):(d.splice(.1*d.length,d.length),h=0<d.length?d[d.length-1]:h);for(;h<l[g]-.5||h>l[g]+.5;)h=(h-l[g])*snapFrictionCoefficient+l[g],d[d.length]=h;d[d.length]=l[g]}C=1;0!=d.length%2&&(C=0);for(h=0;h<a.length;h++)clearTimeout(a[h]);k=(g+k+D)%D;L=0;for(h=C;h<d.length;h+=2)if(h==C||1<Math.abs(d[h]-L)||h>=d.length-2)L=d[h],a[a.length]=f.slowScrollHorizontalIntervalTimer(10*h,e,c,d[h],v,I,O,J,K,w,g,x,A,m,D,r,u,q,k,s);L=(g+y[u]+D)%D;""!=s.onSlideComplete&&1<d.length&&(a[a.length]=f.onSlideCompleteTimer(10* (h+1),s,e,b(e).children(":eq("+L+")"),k,u));a[a.length]=f.updateBackfaceVisibilityTimer(10*(h+1),c,u,D,s);R[u]=a;f.hideScrollbar(s,a,h,d,v,I,O,K,w,u)},onSlideComplete:function(e,c,a,v,g){a=new f.args("complete",e,b(c),a,v,v);b(c).parent().data("args",a);if(""!=e.onSlideComplete)e.onSlideComplete(a)},getSliderOffset:function(e,c){var a=0;c="x"==c?4:5;if(!ca||da||Y)a=parseInt(b(e).css("left"),10);else{for(var a=["-webkit-transform","-moz-transform","transform"],f,g=0;g<a.length;g++)if(void 0!=b(e).css(a[g])&& 0<b(e).css(a[g]).length){f=b(e).css(a[g]).split(",");break}a=void 0==f[c]?0:parseInt(f[c],10)}return a},setSliderOffset:function(e,c){c=parseInt(c,10);!ca||da||Y?b(e).css({left:c+"px"}):b(e).css({msTransform:"matrix(1,0,0,1,"+c+",0)",webkitTransform:"matrix(1,0,0,1,"+c+",0)",MozTransform:"matrix(1,0,0,1,"+c+",0)",transform:"matrix(1,0,0,1,"+c+",0)"})},setBrowserInfo:function(){null!=navigator.userAgent.match("WebKit")?(ea="-webkit-grab",va="-webkit-grabbing"):null!=navigator.userAgent.match("Gecko")? (ia=!0,ea="move",va="-moz-grabbing"):null!=navigator.userAgent.match("MSIE 7")?pa=da=!0:null!=navigator.userAgent.match("MSIE 8")?pa=Y=!0:null!=navigator.userAgent.match("MSIE 9")&&(pa=!0)},has3DTransform:function(){var e=!1,c=b("<div />").css({msTransform:"matrix(1,1,1,1,1,1)",webkitTransform:"matrix(1,1,1,1,1,1)",MozTransform:"matrix(1,1,1,1,1,1)",transform:"matrix(1,1,1,1,1,1)"});""==c.attr("style")?e=!1:ia&&21<=parseInt(navigator.userAgent.split("/")[3],10)?e=!1:void 0!=c.attr("style")&&(e=!0); return e},getSlideNumber:function(b,c,a){return(b-y[c]+a)%a},calcActiveOffset:function(b,c,a,f,g,d,n,t){g=!1;b=[];var y;c>a[0]&&(y=0);c<a[a.length-1]&&(y=d-1);for(d=0;d<a.length;d++)a[d]<=c&&a[d]>c-f&&(g||a[d]==c||(b[b.length]=a[d-1]),b[b.length]=a[d],g=!0);0==b.length&&(b[0]=a[a.length-1]);for(d=g=0;d<b.length;d++)n=Math.abs(c-b[d]),n<f&&(g=b[d],f=n);for(d=0;d<a.length;d++)g==a[d]&&(y=d);return y},changeSlide:function(e,c,a,v,g,d,n,t,J,K,w,x,A,r,u,m,D,k){f.autoSlidePause(r);for(var l=0;l<v.length;l++)clearTimeout(v[l]); var q=Math.ceil(k.autoSlideTransTimer/10)+1,s=f.getSliderOffset(c,"x"),h=x[e],h=h-s,C=e-(B[r]+y[r]+m)%m;if(k.infiniteSlider){e=(e-y[r]+2*m)%m;l=!1;0==e&&2==m&&(e=m,x[e]=x[e-1]-b(a).eq(0).outerWidth(!0),l=!0);var h=x[e],h=h-s,z=[x[e]-b(c).width(),x[e]+b(c).width()];l&&x.splice(x.length-1,1);for(l=0;l<z.length;l++)Math.abs(z[l]-s)<Math.abs(h)&&(h=z[l]-s)}0>h&&-1==C?h+=b(c).width():0<h&&1==C&&(h-=b(c).width());C=[];f.showScrollbar(k,g);for(l=0;l<=q;l++)z=l,z/=q,z--,z=s+h*(Math.pow(z,5)+1),C[C.length]= z;q=(e+y[r]+m)%m;for(l=s=0;l<C.length;l++){if(0==l||1<Math.abs(C[l]-s)||l>=C.length-2)s=C[l],v[l]=f.slowScrollHorizontalIntervalTimer(10*(l+1),c,a,C[l],g,d,n,t,J,K,e,w,x,u,m,A,r,D,q,k);0==l&&""!=k.onSlideStart&&(h=(B[r]+y[r]+m)%m,k.onSlideStart(new f.args("start",k,c,b(c).children(":eq("+h+")"),h,e)))}s=!1;k.infiniteSlider?q!=aa[r]&&(s=!0):e!=B[r]&&(s=!0);s&&""!=k.onSlideComplete&&(v[v.length]=f.onSlideCompleteTimer(10*(l+1),k,c,b(c).children(":eq("+q+")"),q,r));R[r]=v;f.hideScrollbar(k,v,l,C,g,d, n,J,K,r);f.autoSlide(c,a,v,g,d,n,t,J,K,w,x,A,r,u,m,D,k)},changeOffset:function(e,c,a,v,g,d,I,O,J,K,w,x,A,r,u,m,D,k){f.autoSlidePause(r);for(var l=0;l<v.length;l++)clearTimeout(v[l]);k.infiniteSlider||(e=e>-1*n[r]+D?-1*n[r]+D:e,e=e<-1*t[r]?-1*t[r]:e);var q=Math.ceil(k.autoSlideTransTimer/10)+1,s=f.getSliderOffset(c,"x"),l=(f.calcActiveOffset(k,e,x,I,y,m,B[r],r)+y[r]+m)%m,h=x.slice();if(k.snapToChildren&&!k.infiniteSlider)e=x[l];else if(k.infiniteSlider&&k.snapToChildren){for(;e>=h[0];)h.splice(0,0, h[m-1]+b(c).width()),h.splice(m,1);for(;e<=h[m-1];)h.splice(m,0,h[0]-b(c).width()),h.splice(0,1);l=f.calcActiveOffset(k,e,h,I,y,m,B[r],r);e=h[l]}var C=e-s;e=[];var z;f.showScrollbar(k,g);for(h=0;h<=q;h++)z=h,z/=q,z--,z=s+C*(Math.pow(z,5)+1),e[e.length]=z;q=(l+y[r]+m)%m;for(h=s=0;h<e.length;h++){if(0==h||1<Math.abs(e[h]-s)||h>=e.length-2)s=e[h],v[h]=f.slowScrollHorizontalIntervalTimer(10*(h+1),c,a,e[h],g,d,I,O,J,K,l,w,x,u,m,A,r,D,q,k);0==h&&""!=k.onSlideStart&&(q=(B[r]+y[r]+m)%m,k.onSlideStart(new f.args("start", k,c,b(c).children(":eq("+q+")"),q,l)))}s=!1;k.infiniteSlider?q!=aa[r]&&(s=!0):l!=B[r]&&(s=!0);s&&""!=k.onSlideComplete&&(v[v.length]=f.onSlideCompleteTimer(10*(h+1),k,c,b(c).children(":eq("+q+")"),q,r));R[r]=v;f.hideScrollbar(k,v,h,e,g,d,I,J,K,r);f.autoSlide(c,a,v,g,d,I,O,J,K,w,x,A,r,u,m,D,k)},autoSlide:function(b,c,a,v,g,d,n,t,J,K,w,x,A,r,u,m,D){if(!N[A].autoSlide)return!1;f.autoSlidePause(A);ja[A]=setTimeout(function(){!D.infiniteSlider&&B[A]>w.length-1&&(B[A]-=u);f.changeSlide(B[A]+y[A]+1,b,c, a,v,g,d,n,t,J,K,w,x,A,r,u,m,D);f.autoSlide(b,c,a,v,g,d,n,t,J,K,w,x,A,r,u,m,D)},D.autoSlideTimer+D.autoSlideTransTimer)},autoSlidePause:function(b){clearTimeout(ja[b])},isUnselectable:function(e,c){return""!=c.unselectableSelector&&1==b(e).closest(c.unselectableSelector).length?!0:!1},slowScrollHorizontalIntervalTimer:function(b,c,a,v,g,d,n,t,y,B,w,x,A,r,u,m,D,k,l,q){return setTimeout(function(){f.slowScrollHorizontalInterval(c,a,v,g,d,n,t,y,B,w,x,A,r,u,m,D,k,l,q)},b)},onSlideCompleteTimer:function(b, c,a,v,g,d){return setTimeout(function(){f.onSlideComplete(c,a,v,g,d)},b)},hideScrollbarIntervalTimer:function(b,c,a,v,g,d,n,t,y,B){return setTimeout(function(){f.hideScrollbarInterval(c,a,v,g,d,n,t,y,B)},b)},updateBackfaceVisibilityTimer:function(b,c,a,v,g){return setTimeout(function(){f.updateBackfaceVisibility(c,a,v,g)},b)},updateBackfaceVisibility:function(e,c,a,v){c=(B[c]+y[c]+a)%a;for(var g=[],d=0;d<2*v.hardwareAccelBuffer;d++){var n=f.mod(c+d-v.hardwareAccelBuffer,a);if("visible"==b(e).eq(n).css("-webkit-backface-visibility")){g[g.length]= n;var t=f.mod(n+2*v.hardwareAccelBuffer,a),J=f.mod(n-2*v.hardwareAccelBuffer,a);b(e).eq(n).css("-webkit-backface-visibility","hidden");-1==g.indexOf(J)&&b(e).eq(J).css("-webkit-backface-visibility","");-1==g.indexOf(t)&&b(e).eq(t).css("-webkit-backface-visibility","")}}},mod:function(b,c){var a=b%c;return 0>a?a+c:a},args:function(e,c,a,v,g,d){this.prevSlideNumber=void 0==b(a).parent().data("args")?void 0:b(a).parent().data("args").prevSlideNumber;this.prevSlideObject=void 0==b(a).parent().data("args")? void 0:b(a).parent().data("args").prevSlideObject;this.targetSlideNumber=d+1;this.targetSlideObject=b(a).children(":eq("+d+")");this.slideChanged=!1;"load"==e?this.targetSlideObject=this.targetSlideNumber=void 0:"start"==e?this.targetSlideObject=this.targetSlideNumber=void 0:"change"==e?(this.slideChanged=!0,this.prevSlideNumber=void 0==b(a).parent().data("args")?c.startAtSlide:b(a).parent().data("args").currentSlideNumber,this.prevSlideObject=b(a).children(":eq("+this.prevSlideNumber+")")):"complete"== e&&(this.slideChanged=b(a).parent().data("args").slideChanged);this.settings=c;this.data=b(a).parent().data("flexSlider");this.sliderObject=a;this.sliderContainerObject=b(a).parent();this.currentSlideObject=v;this.currentSlideNumber=g+1;this.currentSliderOffset=-1*f.getSliderOffset(a,"x")},preventDrag:function(b){b.preventDefault()},preventClick:function(b){b.stopImmediatePropagation();return!1},enableClick:function(){return!0}};f.setBrowserInfo();var $={init:function(e,c){ca=f.has3DTransform();var a= b.extend(!0,{elasticPullResistance:.6,frictionCoefficient:.92,elasticFrictionCoefficient:.6,snapFrictionCoefficient:.92,snapToChildren:!1,snapSlideCenter:!1,startAtSlide:1,scrollbar:!1,scrollbarDrag:!1,scrollbarHide:!0,scrollbarPaging:!1,scrollbarLocation:"top",scrollbarContainer:"",scrollbarOpacity:.4,scrollbarHeight:"4px",scrollbarBorder:"0",scrollbarMargin:"5px",scrollbarBackground:"#000",scrollbarBorderRadius:"100px",scrollbarShadow:"0 0 0 #000",scrollbarElasticPullResistance:.9,desktopClickDrag:!1, keyboardControls:!1,tabToAdvance:!1,responsiveSlideContainer:!0,responsiveSlides:!0,navSlideSelector:"",navPrevSelector:"",navNextSelector:"",autoSlideToggleSelector:"",autoSlide:!1,autoSlideTimer:5E3,autoSlideTransTimer:750,autoSlideHoverPause:!0,infiniteSlider:!1,snapVelocityThreshold:5,slideStartVelocityThreshold:0,horizontalSlideLockThreshold:5,verticalSlideLockThreshold:3,hardwareAccelBuffer:5,stageCSS:{position:"relative",top:"0",left:"0",overflow:"hidden",zIndex:1},unselectableSelector:"", onSliderLoaded:"",onSliderUpdate:"",onSliderResize:"",onSlideStart:"",onSlideChange:"",onSlideComplete:""},e);void 0==c&&(c=this);return b(c).each(function(c){function e(){f.autoSlidePause(d);xa=b(F).find("a");Ba=b(F).find("[onclick]");ra=b(F).find("*");b(l).css("width","");b(l).css("height","");b(F).css("width","");E=b(F).children().not("script").get();ha=[];M=[];a.responsiveSlides&&b(E).css("width","");t[d]=0;p=[];m=b(l).parent().width();q=b(l).outerWidth(!0);a.responsiveSlideContainer&&(q=b(l).outerWidth(!0)> m?m:b(l).width());b(l).css({position:a.stageCSS.position,top:a.stageCSS.top,left:a.stageCSS.left,overflow:a.stageCSS.overflow,zIndex:a.stageCSS.zIndex,webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",msTouchAction:"pan-y",width:q});b(a.unselectableSelector).css({cursor:"default"});for(var c=0;c<E.length;c++){ha[c]=b(E[c]).width();M[c]=b(E[c]).outerWidth(!0);var v=M[c];a.responsiveSlides&&(M[c]>q?(v=q+-1*(M[c]-ha[c]),ha[c]=v,M[c]=q):v=ha[c],b(E[c]).css({width:v}));b(E[c]).css({overflow:"hidden", position:"absolute"});p[c]=-1*t[d];t[d]=t[d]+v+(M[c]-ha[c])}a.snapSlideCenter&&(k=.5*(q-M[0]),a.responsiveSlides&&M[0]>q&&(k=0));qa[d]=2*t[d];for(c=0;c<E.length;c++)f.setSliderOffset(b(E[c]),-1*p[c]+t[d]+k),p[c]-=t[d];if(!a.infiniteSlider&&!a.snapSlideCenter){for(c=0;c<p.length&&!(p[c]<=-1*(2*t[d]-q));c++)ja=c;p.splice(ja+1,p.length);p[p.length]=-1*(2*t[d]-q)}for(c=0;c<p.length;c++)G[c]=p[c];L&&(N[d].startAtSlide=N[d].startAtSlide>p.length?p.length:N[d].startAtSlide,a.infiniteSlider?(N[d].startAtSlide= (N[d].startAtSlide-1+H)%H,B[d]=N[d].startAtSlide):(N[d].startAtSlide=0>N[d].startAtSlide-1?p.length-1:N[d].startAtSlide,B[d]=N[d].startAtSlide-1),aa[d]=B[d]);n[d]=t[d]+k;b(F).css({position:"relative",cursor:ea,webkitPerspective:"0",webkitBackfaceVisibility:"hidden",width:t[d]+"px"});U=t[d];t[d]=2*t[d]-q+2*k;(V=U+k<q||0==q?!0:!1)&&b(F).css({cursor:"default"});D=b(l).parent().outerHeight(!0);s=b(l).height();a.responsiveSlideContainer&&(s=s>D?D:s);b(l).css({height:s});f.setSliderOffset(F,p[B[d]]);if(a.infiniteSlider&& !V){c=f.getSliderOffset(b(F),"x");for(v=(y[d]+H)%H*-1;0>v;){var g=0,z=f.getSliderOffset(b(E[0]),"x");b(E).each(function(a){f.getSliderOffset(this,"x")<z&&(z=f.getSliderOffset(this,"x"),g=a)});var J=n[d]+U;f.setSliderOffset(b(E)[g],J);n[d]=-1*p[1]+k;t[d]=n[d]+U-q;p.splice(0,1);p.splice(p.length,0,-1*J+k);v++}for(;0<-1*p[0]-U+k&&a.snapSlideCenter&&L;){var O=0,P=f.getSliderOffset(b(E[0]),"x");b(E).each(function(a){f.getSliderOffset(this,"x")>P&&(P=f.getSliderOffset(this,"x"),O=a)});J=n[d]-M[O];f.setSliderOffset(b(E)[O], J);p.splice(0,0,-1*J+k);p.splice(p.length-1,1);n[d]=-1*p[0]+k;t[d]=n[d]+U-q;y[d]--;B[d]++}for(;c<=-1*t[d];)g=0,z=f.getSliderOffset(b(E[0]),"x"),b(E).each(function(a){f.getSliderOffset(this,"x")<z&&(z=f.getSliderOffset(this,"x"),g=a)}),J=n[d]+U,f.setSliderOffset(b(E)[g],J),n[d]=-1*p[1]+k,t[d]=n[d]+U-q,p.splice(0,1),p.splice(p.length,0,-1*J+k),y[d]++,B[d]--}f.setSliderOffset(F,p[B[d]]);f.updateBackfaceVisibility(E,d,H,a);a.desktopClickDrag||b(F).css({cursor:"default"});a.scrollbar&&(b("."+K).css({margin:a.scrollbarMargin, overflow:"hidden",display:"none"}),b("."+K+" ."+w).css({border:a.scrollbarBorder}),h=parseInt(b("."+K).css("marginLeft"))+parseInt(b("."+K).css("marginRight")),C=parseInt(b("."+K+" ."+w).css("borderLeftWidth"),10)+parseInt(b("."+K+" ."+w).css("borderRightWidth"),10),r=""!=a.scrollbarContainer?b(a.scrollbarContainer).width():q,u=q/U*(r-h),a.scrollbarHide||(ca=a.scrollbarOpacity),b("."+K).css({position:"absolute",left:0,width:r-h+"px",margin:a.scrollbarMargin}),"top"==a.scrollbarLocation?b("."+K).css("top", "0"):b("."+K).css("bottom","0"),b("."+K+" ."+w).css({borderRadius:a.scrollbarBorderRadius,background:a.scrollbarBackground,height:a.scrollbarHeight,width:u-C+"px",minWidth:a.scrollbarHeight,border:a.scrollbarBorder,webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",position:"relative",opacity:ca,filter:"alpha(opacity:"+100*ca+")",boxShadow:a.scrollbarShadow}),f.setSliderOffset(b("."+K+" ."+w),Math.floor((-1*p[B[d]]-n[d]+k)/(t[d]-n[d]+k)*(r-h-u))),b("."+K).css({display:"block"}),x=b("."+K+" ."+ w),A=b("."+K));a.scrollbarDrag&&!V&&b("."+K+" ."+w).css({cursor:ea});a.infiniteSlider&&(S=(t[d]+q)/3);""!=a.navSlideSelector&&b(a.navSlideSelector).each(function(c){b(this).css({cursor:"pointer"});b(this).unbind(Q).bind(Q,function(e){"touchstart"==e.type?b(this).unbind("click.flexSliderEvent"):b(this).unbind("touchstart.flexSliderEvent");Q=e.type+".flexSliderEvent";f.changeSlide(c,F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)})});""!=a.navPrevSelector&&(b(a.navPrevSelector).css({cursor:"pointer"}),b(a.navPrevSelector).unbind(Q).bind(Q, function(c){"touchstart"==c.type?b(this).unbind("click.flexSliderEvent"):b(this).unbind("touchstart.flexSliderEvent");Q=c.type+".flexSliderEvent";c=(B[d]+y[d]+H)%H;(0<c||a.infiniteSlider)&&f.changeSlide(c-1,F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)}));""!=a.navNextSelector&&(b(a.navNextSelector).css({cursor:"pointer"}),b(a.navNextSelector).unbind(Q).bind(Q,function(c){"touchstart"==c.type?b(this).unbind("click.flexSliderEvent"):b(this).unbind("touchstart.flexSliderEvent");Q=c.type+".flexSliderEvent";c=(B[d]+y[d]+ H)%H;(c<p.length-1||a.infiniteSlider)&&f.changeSlide(c+1,F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)}));a.autoSlide&&!V&&""!=a.autoSlideToggleSelector&&(b(a.autoSlideToggleSelector).css({cursor:"pointer"}),b(a.autoSlideToggleSelector).unbind(Q).bind(Q,function(c){"touchstart"==c.type?b(this).unbind("click.flexSliderEvent"):b(this).unbind("touchstart.flexSliderEvent");Q=c.type+".flexSliderEvent";ka?(f.autoSlide(F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a),ka=!1,b(a.autoSlideToggleSelector).removeClass("on")):(f.autoSlidePause(d), ka=!0,b(a.autoSlideToggleSelector).addClass("on"))}));f.autoSlide(F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a);b(l).bind("mouseleave.flexSliderEvent",function(){if(ka)return!0;f.autoSlide(F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)});b(l).bind("touchend.flexSliderEvent",function(){if(ka)return!0;f.autoSlide(F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)});a.autoSlideHoverPause&&b(l).bind("mouseenter.flexSliderEvent",function(){f.autoSlidePause(d)});b(l).data("flexSlider",{obj:Ca,settings:a,scrollerNode:F,slideNodes:E,numberOfSlides:H, centeredSlideOffset:k,sliderNumber:d,originalOffsets:G,childrenOffsets:p,sliderMax:t[d],scrollbarClass:w,scrollbarWidth:u,scrollbarStageWidth:r,stageWidth:q,scrollMargin:h,scrollBorder:C,infiniteSliderOffset:y[d],infiniteSliderWidth:S,slideNodeOuterWidths:M,shortContent:V});L=!1;return!0}oa++;var d=oa,I=[];N[d]=b.extend({},a);n[d]=0;t[d]=0;var O=[0,0],J=[0,0],K="scrollbarBlock"+oa,w="scrollbar"+oa,x,A,r,u,m,D,k=0,l=b(this),q,s,h,C,z,L=!0;c=-1;var p,G=[],ca=0,P=0,ia=0,F=b(this).children(":first-child"), E,ha,M,H=b(F).children().not("script").length,W=!1,ja=0,ya=!1,sa=void 0,S;y[d]=0;var V=!1,ka=!1;wa[d]=!1;var Z,ta=!1,la=!1,Q="touchstart.flexSliderEvent click.flexSliderEvent",U,xa,Ba,ra;fa[d]=!1;R[d]=[];a.scrollbarDrag&&(a.scrollbar=!0,a.scrollbarHide=!1);var Ca=b(this);if(void 0!=Ca.data("flexSlider"))return!0;var ma="demo version".split(""),na=Math.floor(12317*Math.random());b(F).parent().append("<i class = 'i"+na+"'></i>").append("<i class = 'i"+na+"'></i>");b(".i"+na).css({position:"absolute",right:"10px", bottom:"10px",zIndex:1E3,fontStyle:"normal",background:"#fff",opacity:.2}).eq(1).css({bottom:"auto",right:"auto",top:"10px",left:"10px"});for(c=0;c<ma.length;c++)b(".i"+na).html(b(".i"+na).html()+ma[c]);14.2<=parseInt(b().jquery.split(".").join(""),10)?b(this).delegate("img","dragstart.flexSliderEvent",function(a){a.preventDefault()}):b(this).find("img").bind("dragstart.flexSliderEvent",function(a){a.preventDefault()});a.infiniteSlider&&(a.scrollbar=!1);a.infiniteSlider&&1==H&&(a.infiniteSlider=!1); a.scrollbar&&(""!=a.scrollbarContainer?b(a.scrollbarContainer).append("<div class = '"+K+"'><div class = '"+w+"'></div></div>"):b(F).parent().append("<div class = '"+K+"'><div class = '"+w+"'></div></div>"));if(!e())return!0;b(this).find("a").bind("mousedown",f.preventDrag);b(this).find("[onclick]").bind("click",f.preventDrag).each(function(){b(this).data("onclick",this.onclick)});c=f.calcActiveOffset(a,f.getSliderOffset(b(F),"x"),p,q,y[d],H,void 0,d);c=(c+y[d]+H)%H;c=new f.args("load",a,F,b(F).children(":eq("+ c+")"),c,c);b(l).data("args",c);if(""!=a.onSliderLoaded)a.onSliderLoaded(c);a.scrollbarPaging&&a.scrollbar&&!V&&(b(A).css("cursor","pointer"),b(A).bind("click.flexSliderEvent",function(a){this==a.target&&(a.pageX>b(x).offset().left?$.nextPage(l):$.prevPage(l))}));if(N[d].responsiveSlides||N[d].responsiveSlideContainer)c=Ea?"orientationchange":"resize",b(window).bind(c+".flexSliderEvent-"+d,function(){if(!e())return!0;var c=b(l).data("args");if(""!=a.onSliderResize)a.onSliderResize(c)});!a.keyboardControls&& !a.tabToAdvance||V||b(document).bind("keydown.flexSliderEvent",function(b){da||Y||(b=b.originalEvent);if("INPUT"==b.target.nodeName||fa[d])return!0;if(37==b.keyCode&&a.keyboardControls)b.preventDefault(),b=(B[d]+y[d]+H)%H,(0<b||a.infiniteSlider)&&f.changeSlide(b-1,F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a);else if(39==b.keyCode&&a.keyboardControls||9==b.keyCode&&a.tabToAdvance)b.preventDefault(),b=(B[d]+y[d]+H)%H,(b<p.length-1||a.infiniteSlider)&&f.changeSlide(b+1,F,E,I,w,u,q,r,h,C,G,p,M,d,S,H,k,a)});if(Da|| a.desktopClickDrag){var ba=!1,za=!1;c=b(F);var ua=b(F),Aa=!1;a.scrollbarDrag&&(c=c.add(x),ua=ua.add(A));b(c).bind("mousedown.flexSliderEvent touchstart.flexSliderEvent",function(c){b(window).one("scroll.flexSliderEvent",function(a){ba=!1});if(ba)return!0;ba=!0;za=!1;"touchstart"==c.type?b(ua).unbind("mousedown.flexSliderEvent"):b(ua).unbind("touchstart.flexSliderEvent");if(fa[d]||V||(Aa=f.isUnselectable(c.target,a)))return W=ba=!1,!0;Z=b(this)[0]===b(x)[0]?x:F;da||Y||(c=c.originalEvent);f.autoSlidePause(d); ra.unbind(".disableClick");if("touchstart"==c.type)eventX=c.touches[0].pageX,eventY=c.touches[0].pageY;else{if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(Y)try{document.selection.empty()}catch(e){}else document.selection.empty();eventX=c.pageX;eventY=c.pageY;ya=!0;sa=F;b(this).css({cursor:va})}O=[0,0];J=[0,0];X=0;W=!1;for(c=0;c<I.length;c++)clearTimeout(I[c]); c=f.getSliderOffset(F,"x");c>-1*n[d]+k+U?(c=-1*n[d]+k+U,f.setSliderOffset(b("."+w),c),b("."+w).css({width:u-C+"px"})):c<-1*t[d]&&(c=-1*t[d],f.setSliderOffset(b("."+w),r-h-u),b("."+w).css({width:u-C+"px"}));c=b(this)[0]===b(x)[0]?n[d]:0;P=-1*(f.getSliderOffset(this,"x")-eventX-c);f.getSliderOffset(this,"y");O[1]=eventX;J[1]=eventY;la=!1});b(document).bind("touchmove.flexSliderEvent mousemove.flexSliderEvent",function(c){da||Y||(c=c.originalEvent);if(fa[d]||V||Aa||!ba)return!0;var e=0;if("touchmove"== c.type)eventX=c.touches[0].pageX,eventY=c.touches[0].pageY;else{if(window.getSelection)window.getSelection().empty||window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(Y)try{document.selection.empty()}catch(v){}else document.selection.empty();eventX=c.pageX;eventY=c.pageY;if(!ya||!pa&&("undefined"!=typeof c.webkitMovementX||"undefined"!=typeof c.webkitMovementY)&&0===c.webkitMovementY&&0===c.webkitMovementX)return!0}O[0]=O[1];O[1]=eventX;X= (O[1]-O[0])/2;J[0]=J[1];J[1]=eventY;ga=(J[1]-J[0])/2;if(!W){var g=(B[d]+y[d]+H)%H,g=new f.args("start",a,F,b(F).children(":eq("+g+")"),g,void 0);b(l).data("args",g);if(""!=a.onSlideStart)a.onSlideStart(g)}(ga>a.verticalSlideLockThreshold||ga<-1*a.verticalSlideLockThreshold)&&"touchmove"==c.type&&!W&&(ta=!0);(X>a.horizontalSlideLockThreshold||X<-1*a.horizontalSlideLockThreshold)&&"touchmove"==c.type&&c.preventDefault();if(X>a.slideStartVelocityThreshold||X<-1*a.slideStartVelocityThreshold)W=!0;if(W&& !ta){var g=f.getSliderOffset(F,"x"),m=b(Z)[0]===b(x)[0]?n[d]:k,s=b(Z)[0]===b(x)[0]?(n[d]-t[d]-k)/(r-h-u):1,A=b(Z)[0]===b(x)[0]?a.scrollbarElasticPullResistance:a.elasticPullResistance,D=a.snapSlideCenter&&b(Z)[0]===b(x)[0]?0:k,K=a.snapSlideCenter&&b(Z)[0]===b(x)[0]?k:0;"touchmove"==c.type&&(ia!=c.touches.length&&(P=-1*g+eventX),ia=c.touches.length);if(a.infiniteSlider){if(g<=-1*t[d]){var I=b(F).width();if(g<=-1*qa[d]){var L=-1*G[0];b(E).each(function(a){f.setSliderOffset(b(E)[a],L+k);a<p.length&& (p[a]=-1*L);L+=M[a]});P-=-1*p[0];n[d]=-1*p[0]+k;t[d]=n[d]+I-q;y[d]=0}else{var N=0,S=f.getSliderOffset(b(E[0]),"x");b(E).each(function(a){f.getSliderOffset(this,"x")<S&&(S=f.getSliderOffset(this,"x"),N=a)});A=n[d]+I;f.setSliderOffset(b(E)[N],A);n[d]=-1*p[1]+k;t[d]=n[d]+I-q;p.splice(0,1);p.splice(p.length,0,-1*A+k);y[d]++}}if(g>=-1*n[d]||0<=g)if(I=b(F).width(),0<=g)for(L=-1*G[0],b(E).each(function(a){f.setSliderOffset(b(E)[a],L+k);a<p.length&&(p[a]=-1*L);L+=M[a]}),P+=-1*p[0],n[d]=-1*p[0]+k,t[d]=n[d]+ I-q,y[d]=H;0<-1*p[0]-I+k;){var Q=0,R=f.getSliderOffset(b(E[0]),"x");b(E).each(function(a){f.getSliderOffset(this,"x")>R&&(R=f.getSliderOffset(this,"x"),Q=a)});A=n[d]-M[Q];f.setSliderOffset(b(E)[Q],A);p.splice(0,0,-1*A+k);p.splice(p.length-1,1);n[d]=-1*p[0]+k;t[d]=n[d]+I-q;y[d]--;B[d]++}else Q=0,R=f.getSliderOffset(b(E[0]),"x"),b(E).each(function(a){f.getSliderOffset(this,"x")>R&&(R=f.getSliderOffset(this,"x"),Q=a)}),A=n[d]-M[Q],f.setSliderOffset(b(E)[Q],A),p.splice(0,0,-1*A+k),p.splice(p.length-1, 1),n[d]=-1*p[0]+k,t[d]=n[d]+I-q,y[d]--}else I=b(F).width(),g>-1*n[d]+k&&(e=(n[d]+-1*(P-m-eventX+D)*s-m)*A*-1/s),g<-1*t[d]&&(e=(t[d]+K+-1*(P-m-eventX)*s-m)*A*-1/s);f.setSliderOffset(F,-1*(P-m-eventX-e)*s-m+K);a.scrollbar&&(f.showScrollbar(a,w),T=Math.floor((P-eventX-e-n[d]+D)/(t[d]-n[d]+k)*(r-h-u)*s),g=u,0>=T?(g=u-C- -1*T,f.setSliderOffset(b("."+w),0),b("."+w).css({width:g+"px"})):T>=r-h-C-u?(g=r-h-C-T,f.setSliderOffset(b("."+w),T),b("."+w).css({width:g+"px"})):f.setSliderOffset(b("."+w),T));"touchmove"== c.type&&(z=c.touches[0].pageX);c=!1;e=f.calcActiveOffset(a,-1*(P-eventX-e),p,q,y[d],H,void 0,d);g=(e+y[d]+H)%H;a.infiniteSlider?g!=aa[d]&&(c=!0):e!=B[d]&&(c=!0);if(c){B[d]=e;aa[d]=g;la=!0;g=new f.args("change",a,F,b(F).children(":eq("+g+")"),g,g);b(l).data("args",g);if(""!=a.onSlideChange)a.onSlideChange(g);f.updateBackfaceVisibility(E,d,H,a)}}});ma=b(window);if(Y||da)ma=b(document);b(c).bind("touchcancel.flexSliderEvent touchend.flexSliderEvent",function(b){b=b.originalEvent;if(za)return!1;za=!0;if(fa[d]|| V||Aa)return!0;if(0!=b.touches.length)for(var c=0;c<b.touches.length;c++)b.touches[c].pageX==z&&f.slowScrollHorizontal(F,E,I,w,X,ga,u,q,r,h,C,G,p,M,d,S,H,Z,la,k,a);else f.slowScrollHorizontal(F,E,I,w,X,ga,u,q,r,h,C,G,p,M,d,S,H,Z,la,k,a);ba=ta=!1;return!0});b(ma).bind("mouseup.flexSliderEvent-"+d,function(c){W?xa.unbind("click.disableClick").bind("click.disableClick",f.preventClick):xa.unbind("click.disableClick").bind("click.disableClick",f.enableClick);Ba.each(function(){this.onclick=function(a){if(W)return!1; b(this).data("onclick")&&b(this).data("onclick").call(this,a||window.event)};this.onclick=b(this).data("onclick")});1.8<=parseFloat(b().jquery)?ra.each(function(){var a=b._data(this,"events");if(void 0!=a&&void 0!=a.click&&"flexSliderEvent"!=a.click[0].namespace){if(!W)return!1;b(this).one("click.disableClick",f.preventClick);var a=b._data(this,"events").click,c=a.pop();a.splice(0,0,c)}}):1.6<=parseFloat(b().jquery)&&ra.each(function(){var a=b(this).data("events");if(void 0!=a&&void 0!=a.click&&"flexSliderEvent"!= a.click[0].namespace){if(!W)return!1;b(this).one("click.disableClick",f.preventClick);var a=b(this).data("events").click,c=a.pop();a.splice(0,0,c)}});if(!wa[d]){if(V)return!0;a.desktopClickDrag&&b(F).css({cursor:ea});a.scrollbarDrag&&b(x).css({cursor:ea});ya=!1;if(void 0==sa)return!0;f.slowScrollHorizontal(sa,E,I,w,X,ga,u,q,r,h,C,G,p,M,d,S,H,Z,la,k,a);sa=void 0}ba=ta=!1})}})},destroy:function(e,c){void 0==c&&(c=this);return b(c).each(function(){var a=b(this),c=a.data("flexSlider");if(void 0==c)return!1; void 0==e&&(e=!0);f.autoSlidePause(c.sliderNumber);wa[c.sliderNumber]=!0;b(window).unbind(".flexSliderEvent-"+c.sliderNumber);b(document).unbind(".flexSliderEvent-"+c.sliderNumber);b(document).unbind("keydown.flexSliderEvent");b(this).unbind(".flexSliderEvent");b(this).children(":first-child").unbind(".flexSliderEvent");b(this).children(":first-child").children().unbind(".flexSliderEvent");b(c.settings.scrollbarBlockNode).unbind(".flexSliderEvent");e&&(b(this).attr("style",""),b(this).children(":first-child").attr("style", ""),b(this).children(":first-child").children().attr("style",""),b(c.settings.navSlideSelector).attr("style",""),b(c.settings.navPrevSelector).attr("style",""),b(c.settings.navNextSelector).attr("style",""),b(c.settings.autoSlideToggleSelector).attr("style",""),b(c.settings.unselectableSelector).attr("style",""));c.settings.scrollbar&&b(".scrollbarBlock"+c.sliderNumber).remove();for(var c=R[c.sliderNumber],g=0;g<c.length;g++)clearTimeout(c[g]);a.removeData("flexSlider");a.removeData("args")})},update:function(e){void 0== e&&(e=this);return b(e).each(function(){var c=b(this),a=c.data("flexSlider");if(void 0==a)return!1;a.settings.startAtSlide=c.data("args").currentSlideNumber;$.destroy(!1,this);1!=a.numberOfSlides&&a.settings.infiniteSlider&&(a.settings.startAtSlide=(B[a.sliderNumber]+1+y[a.sliderNumber]+a.numberOfSlides)%a.numberOfSlides);$.init(a.settings,this);c=new f.args("update",a.settings,a.scrollerNode,b(a.scrollerNode).children(":eq("+(a.settings.startAtSlide-1)+")"),a.settings.startAtSlide-1,a.settings.startAtSlide- 1);b(a.stageNode).data("args",c);if(""!=a.settings.onSliderUpdate)a.settings.onSliderUpdate(c)})},addSlide:function(e,c){return this.each(function(){var a=b(this),f=a.data("flexSlider");if(void 0==f)return!1;0==b(f.scrollerNode).children().length?(b(f.scrollerNode).append(e),a.data("args").currentSlideNumber=1):f.settings.infiniteSlider?(1==c?b(f.scrollerNode).children(":eq(0)").before(e):b(f.scrollerNode).children(":eq("+(c-2)+")").after(e),-1>y[f.sliderNumber]&&B[f.sliderNumber]--,a.data("args").currentSlideNumber>= c&&B[f.sliderNumber]++):(c<=f.numberOfSlides?b(f.scrollerNode).children(":eq("+(c-1)+")").before(e):b(f.scrollerNode).children(":eq("+(c-2)+")").after(e),a.data("args").currentSlideNumber>=c&&a.data("args").currentSlideNumber++);a.data("flexSlider").numberOfSlides++;$.update(this)})},removeSlide:function(e){return this.each(function(){var c=b(this),a=c.data("flexSlider");if(void 0==a)return!1;b(a.scrollerNode).children(":eq("+(e-1)+")").remove();B[a.sliderNumber]>e-1&&B[a.sliderNumber]--;c.data("flexSlider").numberOfSlides--; $.update(this)})},goToSlide:function(e,c,a){void 0==a&&(a=this);return b(a).each(function(){var a=b(this).data("flexSlider");if(void 0==a||a.shortContent)return!1;e=e>a.childrenOffsets.length?a.childrenOffsets.length-1:e-1;void 0!=c&&(a.settings.autoSlideTransTimer=c);f.changeSlide(e,b(a.scrollerNode),b(a.slideNodes),R[a.sliderNumber],a.scrollbarClass,a.scrollbarWidth,a.stageWidth,a.scrollbarStageWidth,a.scrollMargin,a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber, a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset,a.settings)})},prevSlide:function(e){return this.each(function(){var c=b(this).data("flexSlider");if(void 0==c||c.shortContent)return!1;var a=(B[c.sliderNumber]+y[c.sliderNumber]+c.numberOfSlides)%c.numberOfSlides;void 0!=e&&(c.settings.autoSlideTransTimer=e);(0<a||c.settings.infiniteSlider)&&f.changeSlide(a-1,b(c.scrollerNode),b(c.slideNodes),R[c.sliderNumber],c.scrollbarClass,c.scrollbarWidth,c.stageWidth,c.scrollbarStageWidth,c.scrollMargin, c.scrollBorder,c.originalOffsets,c.childrenOffsets,c.slideNodeOuterWidths,c.sliderNumber,c.infiniteSliderWidth,c.numberOfSlides,c.centeredSlideOffset,c.settings);B[c.sliderNumber]=a})},nextSlide:function(e){return this.each(function(){var c=b(this).data("flexSlider");if(void 0==c||c.shortContent)return!1;var a=(B[c.sliderNumber]+y[c.sliderNumber]+c.numberOfSlides)%c.numberOfSlides;void 0!=e&&(c.settings.autoSlideTransTimer=e);(a<c.childrenOffsets.length-1||c.settings.infiniteSlider)&&f.changeSlide(a+ 1,b(c.scrollerNode),b(c.slideNodes),R[c.sliderNumber],c.scrollbarClass,c.scrollbarWidth,c.stageWidth,c.scrollbarStageWidth,c.scrollMargin,c.scrollBorder,c.originalOffsets,c.childrenOffsets,c.slideNodeOuterWidths,c.sliderNumber,c.infiniteSliderWidth,c.numberOfSlides,c.centeredSlideOffset,c.settings);B[c.sliderNumber]=a})},prevPage:function(e,c){void 0==c&&(c=this);return b(c).each(function(){var a=b(this).data("flexSlider");if(void 0==a)return!1;var c=f.getSliderOffset(a.scrollerNode,"x")+a.stageWidth; void 0!=e&&(a.settings.autoSlideTransTimer=e);f.changeOffset(c,b(a.scrollerNode),b(a.slideNodes),R[a.sliderNumber],a.scrollbarClass,a.scrollbarWidth,a.stageWidth,a.scrollbarStageWidth,a.scrollMargin,a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber,a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset,a.settings)})},nextPage:function(e,c){void 0==c&&(c=this);return b(c).each(function(){var a=b(this).data("flexSlider");if(void 0==a)return!1;var c=f.getSliderOffset(a.scrollerNode, "x")-a.stageWidth;void 0!=e&&(a.settings.autoSlideTransTimer=e);f.changeOffset(c,b(a.scrollerNode),b(a.slideNodes),R[a.sliderNumber],a.scrollbarClass,a.scrollbarWidth,a.stageWidth,a.scrollbarStageWidth,a.scrollMargin,a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber,a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset,a.settings)})},lock:function(){return this.each(function(){var e=b(this).data("flexSlider");if(void 0==e||e.shortContent)return!1;b(e.scrollerNode).css({cursor:"default"}); fa[e.sliderNumber]=!0})},unlock:function(){return this.each(function(){var e=b(this).data("flexSlider");if(void 0==e||e.shortContent)return!1;b(e.scrollerNode).css({cursor:ea});fa[e.sliderNumber]=!1})},getData:function(){return this.each(function(){var e=b(this).data("flexSlider");return void 0==e||e.shortContent?!1:e})},autoSlidePause:function(){return this.each(function(){var e=b(this).data("flexSlider");if(void 0==e||e.shortContent)return!1;N[e.sliderNumber].autoSlide=!1;f.autoSlidePause(e.sliderNumber); return e})},autoSlidePlay:function(){return this.each(function(){var e=b(this).data("flexSlider");if(void 0==e||e.shortContent)return!1;N[e.sliderNumber].autoSlide=!0;f.autoSlide(b(e.scrollerNode),b(e.slideNodes),R[e.sliderNumber],e.scrollbarClass,e.scrollbarWidth,e.stageWidth,e.scrollbarStageWidth,e.scrollMargin,e.scrollBorder,e.originalOffsets,e.childrenOffsets,e.slideNodeOuterWidths,e.sliderNumber,e.infiniteSliderWidth,e.numberOfSlides,e.centeredSlideOffset,e.settings);return e})}};b.fn.flexSlider= function(e){if($[e])return $[e].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof e&&e)b.error("invalid method call!");else return $.init.apply(this,arguments)}})(jQuery);

$.fn.layerScript = function(o){
    o = $.extend({
        divs : ''
    }, o || {});

    var e = $(this),
          bg = $('<div id="layer_bg"></div>'),
          ly_w,
          ly_h,
          closeDiv = o.divs;

    $("body").attr("lyNums", lyNums)
    // 열기
    if(!$("body").hasClass("lyOn")){
        $("body").addClass("lyOn");
        bg.prependTo($("body"));
    }

   // _resize();

    function _resize() {
        ly_w = e.width();
        ly_h = e.height();
        // e.css({"margin-left":-(ly_w/2), "margin-top":-(ly_h/2)}).show();
        e.show();
    }

    e.show();

    addResizeListener(e.get(0), _resize);

    // 닫기
    $(this).find(".btn_close").off("click");
    $(this).find(".btn_close").on('click', function(){
        layerClose(closeDiv);
    });
    // dimmed 배경 클릭시 팝업 이벤트 닫힘
    bg.on('click', function(){
        layerClose(closeDiv);
    });

    customPopopLayer.resize();

    //esc 클릭시 팝업 이벤트 닫힘
    $("body").keyup(function(escEvent) {
         if (escEvent.keyCode == 27) {
             layerClose(closeDiv);
        }
    });
}

$.fn.layerScriptExtend = function(o){
    o = $.extend({
        divs : ''
    }, o || {});

    var e = $(this),
        // bg = $('<div id="layer_bg" style="overflow-y: auto; opacity: 1; background-color: rgba(0,0,0,0.5);"></div>'),
        ly_w,
        ly_h,
        closeDiv = o.divs;

    $("body").attr("exLyNums", exLyNums)
    // 열기
    if(!$("body").hasClass("exLyOn")){
        $("body").addClass("exLyOn");
        // bg.prependTo($("body"));
    }

    _resize();

    function _resize() {
        ly_w = e.width();
        ly_h = e.height();
        e.css({"margin-left":-(ly_w/2)}).show();

        e.parent('.extend_layer_bg').show();
        e.show();

        if(e.outerHeight(true) > $(window).height()) {
            $('html').css('overflow-y', 'hidden');
        } else {
            $('html').css('overflow-y', '');
        }
    }

    //addResizeListener(e.get(0), _resize);


    // 닫기
    $('.popup_layer.'+o.divs).find(".btn_close").off("click");
    $('.popup_layer.'+o.divs).find(".btn_close").on('click', function(){
        layerCloseExtend(closeDiv);
    });
    // dimmed 배경 클릭시 팝업 이벤트 닫힘
/*    bg.on('click', function(){
        layerClose(closeDiv);
    });*/

    //esc 클릭시 팝업 이벤트 닫힘
    $("body").keyup(function(escEvent) {
        if (escEvent.keyCode == 27) {
            layerCloseExtend(closeDiv);
        }
    });
}

var  lyNums = 0,
      lyOne = 0;

var exLyNums = 0;

// document ready
$(function(){

    // layout 컨트롤
    //fnLayoutControl();

  // topBanner 컨트롤
  if ( $('.top_banner').length ) topBanner();

    // header 컨트롤
    fnHeaderControll();

    //skip menu 동작
    fnSkipMenu();

    //Sticky 검색영역
    fnSearchSticky();

    //Sticky 검색영역2
    //fnSearchSticky02();

    //GNB 슬라이딩메뉴
    window.onload = function(){
        fnGnbSlide();
    }

    //Lnb
    fnLnb();

    //FAQ
    fnFaq();

    //selectbox 스타일
    fnSelectbox();

    //퀵메뉴 슬라이딩
    fnQuickMenu();

    //새로운 메세지박스 닫기
    fnCloseMsg(); 

    //회원가입 회원설별 버튼
    fnSexType();

    //광고등록
    fnHoverImage();

    //textarea 안내글 여부
    fnTextareaText();

    //기본 탭
    fnTab();
    fnTabBtn();
    fnTab2();

    //거래메세지 탭
    fnMessageTab();

    //faq 탭
    // fnFaqTab();

    //카테고리 리스트
    fnCategoryList();

    //판매자스케쥴 달력보여주기
    fnSellerSchd();

    //판매자소개 팝업
    fnSellerInfoPop();

    //답글달기
    fnReplyWrite();

    //카테고리 박스 토글
    fnBoxCategory();

    //재능상세 팁
    //fnTalentTip();

    //구매관리 상세페이지 토글
    fnTalentInfo();

    //제안하기 샘플 토글
    fnRecommentSample();

    //구매자 프로필 수정 열고 닫기
    fnBrefUser();

    try {
        //input 달력 포커스 시 달력폼 노출
        if ( $('.input_calendar').length ) fnCalendalFocus();
    } catch(e) {
        console.log('calendar publishing...');
    }

    // 셀렉트 이벤트
    fnSelectEvent();

    // 셀렉트 이벤트
    fnDomSelect();

    //정보 더보기 액션
    // fnOrderInfoBox();

    //메인 스페셜 재능 슬라이드이벤트
    fnSpecialSlide();

    //판매관리 거래메세지 이벤트
    fnMsgTab();

    //재능상세 스크롤 탭 이벤트
    if ( $('.tab_sticky').length ) fnTabMove();

    //O캐시 결제방식 탭
    // if ( $('.pay_type').length ) fnChargeMethod();           // onclick 이벤트 막아놈(20200109 럭키요청)

  //ellipsis
  if ( $('.ellipsis').length ) ellipsis();

  //msg_writing
  msg_writing();

  //msgBoxResize 초기 사이즈 제어
    msgBoxResize();

  if ($('.nav')){
      categoryHeight.init();
  }

    ImageCheckbox.init();

});

function fnChargeMethod() {
    var tabBtn = $('.pay_type')
        , trigger = tabBtn.find('button');

    trigger.each(function() {
        $(this).on({
            click : function() {
                $(this).addClass("on");
                trigger.not($(this)).removeClass("on");
            }
        });
    });
}

function fnLayoutControl() {

    var container_wrap = $('#content_container')
        , container = $('#content_container > .inner_container')
        , subMenu = $('.sub_menu')
        , content = $('.content_wrapper');

    _resize();

    if ( !subMenu.length ) {
        container_wrap.addClass('wide');
    }

    $(window).on({
        'resize.otwojob' : function() {
            _resize();
        }
    });

    function _resize() {
        content.width(container.width() - subMenu.width());
    }

}

function fnSpecialSlide() {

    var wrap = $('.spcial_slide_area')
        , slider = wrap.find('.flexSlider')
        , slide = slider.find('.slide')
        , btnPrev = wrap.find('.ctrl_btn.go_prev')
        , btnNext = wrap.find('.ctrl_btn.go_next');

    //wrap.height(wrap.height() + 335);
    wrap.height(737);

    slider.flexSlider({
        snapToChildren: true,
        desktopClickDrag: true,
        infiniteSlider : true,
        keyboardControls: false,
        navPrevSelector : btnPrev,
        navNextSelector : btnNext,
        onSlideChange: slideChange,
        onSlideComplete : slideComplete
    });

    slider.find('i').remove();

    function slideChange(args) {
    }

    function slideComplete() {
    }

}

function fnDomSelect() {

    _changeOption($('select'));

    $('body').on('DOMNodeInserted', 'select', function (e) {
        var _this = $(this);

        if ( _this.prev('label').length ) {
            _changeOption(_this);
        }
    });

    $('body').on('change.uiFront', 'select', function() {
        var _this = $(this);
        _changeOption(_this);
    });

    function _changeOption(obj) {
        obj.each(function() {
        var _this = $(this);
        var label = _this.prev('label');
            if ( ! label.hasClass('fixed')) {
                if (_this.find('option:selected').length) {
                    _this.prev('label').html(_this.find('option:selected').html());
                } else {
                    _this.prev('label').html(_this.find('option').first().html());
                }
            }
        });
    }
}


var categoryHeight = {
    init : function () {
        var count = 0;
        this.target = $('.nav').find('.depth1');
        this.target.find('.depth2').each(function () {

            var length = $(this).children('li').length;

            if (length > count) {
                count = length;
            }
        })
        categoryHeight.heightEvent(count);
    },
    heightEvent : function (count) {
        var resizeHeight = (count * 27) + 37;
        this.target.css({height : resizeHeight + 'px'});
        this.target.find('.depth2').css({height : resizeHeight + 'px'});
        this.target.find('.depth3').css({height : resizeHeight + 'px'});
        this.target.find('.area_event').css({height : resizeHeight + 'px'});
        this.target.find('.otwojob_area_event').css({height : resizeHeight + 'px'});
        this.target.find('.orderjob_area_event').css({height : resizeHeight + 'px'});
    }
}

function topBanner() {
    var topBannerH = $('.top_banner').height();
    if($('.top_banner').hasClass('on')){
        $(".top_banner").animate({top:0}, 'fast');
        $("#header").animate({top:topBannerH}, 'fast');
        $(".gnb_wrap").animate({top:62+topBannerH}, 'fast');
        $(".notice_layer").css({top:185});
    }else{
        $("#header").animate({top:0}, 'fast');
        $(".gnb_wrap").animate({top:62}, 'fast');
        $(".notice_layer").css({top:185});
    }
}

function topBannerClose() {
    var topBannerH = $('.top_banner').height();
    $(".top_banner").removeClass('on').css({'display':'none'});
    $("#header").stop().animate({top:0}, 'fast');
    $(".gnb_wrap").stop().animate({top:62}, 'fast');
    $(".notice_layer").css({top:185 -topBannerH});
}

function fnHeaderControll() {
  // JavaScript Document
  $(window).on("scroll.header", function(){
        $(".gnb_wrap").css('height','44px');
        var h=$(window).scrollTop();
        var topBannerH = $('.top_banner').height();

        if($("body").children().hasClass('top_banner') == true){
            if($(".top_banner").hasClass('on') == false) {//없을때
                $("#header").animate({top:0}, 'fast');
                $(".gnb_wrap").animate({top:62}, 'fast');
                $(".notice_layer").css({top:55});
            }else {//있을때
                if(h > 1) {
                    $(".top_banner").css({display:'none'});
                    $("#header").css({top:0});
                    $(".gnb_wrap").css({top:62});
                    $(".notice_layer").css({top:55});
                }else if(0 == h){
                    $(".top_banner").css({display:'block'});
                    $("#header").css({top:topBannerH});
                    $(".gnb_wrap").css({top:62+topBannerH});
                    $(".notice_layer").css({top:185});
                }
            }
        }else{
            $("#header").animate({top:0}, 'fast');
            $(".gnb_wrap").animate({top:62}, 'fast');
            if($('.notice_layer').hasClass('orderjob_layer')) {
                $(".notice_layer").css({top:75});
            } else {
                var sibling = $('.notice_layer').siblings().eq(0);
                if(sibling.hasClass('orderjob')) {
                    $(".notice_layer").css({top:75});
                } else {
                    $(".notice_layer").css({top:55});
                }
            }
        }

        if(h > 1110){
            $(".sticky02_wrap").css({position:"fixed",top:"0"});
        }else{
            $(".sticky02_wrap").css({position:"absolute",left:0,top:"40px"});
        }
  });
}

function fnSkipMenu() {
    $(".skip ul li a").on("focusin",function(){
        $(this).addClass("on");
    });

    $(".skip ul li a").on("focusout",function(){
        $(this).removeClass("on");
    });
}

function fnSearchSticky() {

  if ( $('.search_wrap').length ) _init();
    if ( $('.odj').length ) _init();

    function _init() {

        $(".search_sticky").hide();
        $(".srch_show").click(function(){
            $(".search_sticky").show();
        });
        $("body").on("click",".search_wrap .select_option .select_data",function(){
            $(this).toggleClass("on");
            $(this).siblings(".list").toggleClass("on");
        });

        $(".search_wrap .select_option .list li").on("click", function(){
          $(this).parent().siblings(".select_data").text($(this).text());
          $(this).parent().removeClass('on');
        });
    }
}

function fnSearchSticky02() {
        var count = 0;
        
        $(".search_sticky").on("focusin keyup",function(){
            $(".search_sticky").addClass("on");
            count = $(".search_sticky input").val().length;
            $(".search_sticky .select_option .select_data").removeClass("on");
            $(".search_sticky .select_option .list").removeClass("on");
        });

        $(".search_sticky").on("focusout",function(){
            $(".search_sticky").removeClass("on");
        });

        $(".search_sticky .select_option .select_data").on("click", function(){
            $(this).addClass("on");
            $(this).siblings(".list").addClass("on");
            $(".search_sticky").addClass("on");
        });

        $(".search_sticky .select_option .list li").on("click", function(){
            $(this).parent().siblings(".select_data").text($(this).text());
            $(this).parent().removeClass('on');
        });

        $(".search_sticky .select_option .list").on("mouseleave", function(){
            $(this).removeClass("on");
            $(".select_data").removeClass("on");
        });
}


function fnGnbSlide() {
    $(".gnb_main>a").on("mouseover focus",function(){
        var index = $(this).parent().parent().index();
        var gnbsub_h = $(this).parent().next().height();
        var active_h = (gnbsub_h+119) + "px";
        /* 644 */
        if ($(this).parent().parent().hasClass("free_product")){
            $(".gnb_wrap").stop().css({height:225});
        }else{
            $(".gnb_wrap").stop().css({height:active_h});
        }
        /* //644 */
        $(".gnb_sub").css("display","none");
        $(".gnb>ul>li").eq(index).find(".gnb_sub").css("display","block");
        $(this).parent().parent().find(".total").find("a").addClass("on");
    });

    $(".gnb_wrap").on("mouseleave",function(){
        $(".gnb_wrap").css({height:"44px"});
    });

    $(".gnb a:last").on("blur", function(){   // blur() : 포커스가 다른 메뉴로 가거나 사라질경우 발생
        $(".gnb").trigger("mouseleave");   // trigger() : 억지로 이벤트를 발생시켜야 할 때
    });

    $(".gnb_sub li a").on("mouseover", function(){
        $(".gnb_sub li a").removeClass("on");
        $(this).addClass("on");
    });

    $(".gnb_main a").on("mouseover", function(){
        $(".gnb_main a").removeClass("on");
        $(this).addClass("on");
    });
}

function fnLnb() {
    $('.sub_menu .list > li').has('>ul').each(function(){
        $(this).addClass('arrow');
        $(this).find('>a').click(function(){
            if($(this).parent().hasClass('on')){
                $(this).parent().removeClass('on');
            }else{
                $(this).parent().addClass('on');   
            }
        });        
    });


    //faq lnb
    $.each($('.buy_faq_content .list > li').has('>ul'),function(){
        $(this).addClass('arrow');
        $(this).find('>a').click(function(){
            $(this).parent().toggleClass('on');
        });
    });
}

function fnFaq() {
    $.each($('.faq_list > li').has('>ul'),function(){
        $(this).addClass('arrow');//.arrow추가
        $(this).find('>a').click(function(){
            $(this).parent().toggleClass('on');
        });
    });

    $.each($('.faq_list .list > li').has('>ul'),function(){
        $(this).addClass('arrow');//.arrow추가
        $(this).find('>a').click(function(){
            $(this).parent().toggleClass('on');
        });
    });
}

function fnSelectbox() {
    $('body').on('change', '.selectbox select', function () {
        var select_name = $(this).children('option:selected').text();
        $(this).siblings('label').removeClass('placeholder');
        $(this).siblings('label').text(select_name);
    });
}

function fnQuickMenu() {
    var flag = false;

    if(!flag){
        $(".qmenu .btn_close").click(function(){
            $(".qmenu").stop().animate({right:"-130px"}, 500, function(){
                $(".qmenu .btn_close").css("display","none");
                $(".qmenu .btn_open").css("display","block");
            })
        });
        $(".qmenu .btn_open").click(function(){
            $(".qmenu").stop().animate({right:0}, 500, function(){
                $(".qmenu .btn_close").css("display","block");
                $(".qmenu .btn_open").css("display","none");
            })
        });
        flag = false;
    }else{
        $(".qmenu .btn_close").click(function(){
            $(".qmenu").stop().animate({right:"-130px"}, 500, function(){
                $(".qmenu .btn_close").css("display","none");
                $(".qmenv .btn_open").css("display","block");
            })
        });
        $(".qmenu .btn_open").click(function(){
            $(".qmenu").stop().animate({right:0}, 500, function(){
                $(".qmenu .btn_close").css("display","block");
                $(".qmenu .btn_open").css("display","none");
            })
        });
        flag = true;
    }
}

function fnCloseMsg() {
    var msgWrap = $('.new_msgbox')
        , trigger = $('.btn_close')

    trigger.on({
        click : function() {
            msgWrap.stop().animate({right:"-326px"}, 300)
        }
    });
}

function fnSexType() {
    $(".sex_type button").on("click",function(){
        $(".sex_type button").each(function(){
            $(this).removeClass("on");
        });
        $(this).addClass("on");
    })
    $(".sex_type button").on("click",function(){
        $(".sex_type button").each(function(){
            $(this).removeClass("on");
        });
        $(this).addClass("on");
    });
}

function fnHoverImage() {
    $(".hover_image").on("mouseover",function(){
        $('.footerWrap').css('z-index', 'initial');
        $(this).find('img').attr('src',$(this).find('img').attr('src').replace('_off','_on'));
        $(this).addClass("on");
    });

    $(".hover_image").on("mouseout",function(){
        $('.footerWrap').css('z-index', '');
        $(this).find('img').attr('src',$(this).find('img').attr('src').replace('_on','_off'));
        $(this).removeClass("on");
    });
}

function fnTextareaText() {
    $("body").on("click", ".textarea_wrap", function(){
        $(this).find(".notice").hide();
        $(this).find("textarea").focus();
    });
    $(".textarea_wrap textarea").on("focusin", function(){
        $(this).parent().find(".notice").hide();
    }).on("focusout", function(){
        $notice = $(this).parent().find(".notice");
        if($(this).val() == '' || $(this).val().length == 0){
            $notice.show();
        }
    });
}

function fnMsgTab(){
    $("body").on("click",".info_layer_wrap .info_layer .btn_event",function(){
        $(this).parents('.info_layer').toggleClass('on');
    });
}

function fnTab() {
    var wrap = $('.tab_type01').not('.not_fn');

    wrap.find('a').click(function (event) {
        event.preventDefault();
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        var tab = $(this).attr("href");
        $(".tab_content").not(tab).hide();
        $(tab).show();
    });
}

function fnTabBtn() {
    var wrap = $('.tab_type01').not('.not_fn');

    wrap.find('button').click(function (event) {
        event.preventDefault();
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        var tab = $(this).attr("data-href");
        $(".tab_content").not(tab).hide();
        $(tab).show();
    });
}

function fnTab2() {
    var wrap = $('.tab_type02').not('.not_fn');

    wrap.find('a').click(function (event) {
        event.preventDefault();
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    });
}

function fnMessageTab() {
    $(".message_tab a").click(function (event) {
        event.preventDefault();
        $(this).parent().addClass("on");
        $(this).parent().siblings().removeClass("on");
        var tab = $(this).attr("href");
        $(".tab_content").not(tab).hide();
        $(tab).show();
    });
}

function fnMessageTab() {
    $(".rating_tab a").click(function (event) {
        event.preventDefault();
        $(this).parent().addClass("on");
        $(this).parent().siblings().removeClass("on");
        var tab = $(this).attr("href");
        $(".tab_rating").not(tab).hide();
        $(tab).show();
    });
}

// function fnFaqTab() {
//   $(".lnb_faq_tabs a").click(function (event) {
//        event.preventDefault();
//        $(this).addClass("on");
//        $(this).siblings().removeClass("on");
//        var tab = $(this).attr("href");
//        $(".faq_tab_content").not(tab).hide();
//        $(tab).show();
//    });
// }

function fnCategoryList() {

    if($('.best_ranking_header').length > 0) {
        return;
    }

    var listWrap = $('.category_list')
        , list = listWrap.find('dl')
        , opener = $('.btn_all_view')
        , numCategory = 3

    list.each(function() {
        var _this = $(this)
            , item = $(this).find('dd li')
            , more = $(this).find('.more');

        _close(_this);
        _this.css('height', 'auto');

        more.on({
            click : function() {
                if ( $(this).hasClass('on') ) {
                    $(this).removeClass('on');
                    _close(_this);
                } else {
                    $(this).addClass('on');
                    _open(_this);
                }
            }
        });
    });

    listWrap.css('height', 'auto');
    opener.addClass('on');
    _allClose();

    opener.on({
        click : function() {
            if ( $(this).hasClass('on') ) {
                $(this).removeClass('on');
                _allOpen();
            } else {
                $(this).addClass('on');
                _allClose();
            }
        }
    });

    function _allOpen() {
        list.show();
    }

    function _allClose() {
        list.show();
        list.each(function(j) {
            if ( j > numCategory-1 ) {
                $(this).hide();
            }
        });
    }

    function _open(obj) {
        obj.find('dd li').show();
    }

    function _close(obj) {
        obj.find('dd').find('li').show();
        obj.find('dd').find('li').each(function(i) {
            if ( i > 3 ) {
                $(this).hide();
            }
        });
    }
}

function fnSellerSchd() {
    $(".seller_schedule").on("click",function(){
        $(".calendar_event").css("display","block");
    });

    $(".btn_calendar_close").on("click",function(){
        $(".calendar_event").css("display","none");
    });
}

function fnSellerInfoPop() {
    $(".all_view").css("display","none");

    $(".sller_info .more").on("click",function(){
        $(".all_view").css("display","block");
    });

    $(".sller_info .btn_close").on("click",function(){
        $(".all_view").css("display","none");
    });
}

function fnReplyWrite() {
    $(".review_wrap .btn_reply_write").on("click",function(){
        $(".reply_write").toggle();
        $(this).toggleClass("on");
    });
}

function fnBoxCategory() {
    $(".btn_search_wrap").on("click",function(){
        $(".box_category").toggle().css("border-bottom" , "1px solid #dbdbdb");
        $(this).toggleClass("on");
    });
}

function fnTalentTip() {
    $(".talent_write_tip dt").on("click",function(){
        $(".talent_write_tip dd").toggle();
        $(this).toggleClass("on");
    });
}

function fnTalentInfo() {
    $(".updown_detail .talent_info .btn_updown").on("click",function(){
        if(!$(this).hasClass("on")){
            $(this).addClass("on");
            $(this).parent().siblings(".over_content").addClass("show");
        }else{
            $(this).removeClass("on");
            $(this).parent().siblings(".over_content").removeClass("show");
        }
    })
}

function fnRecommentSample() {
    $(".recomment_write_info .talent_info .btn_updown").on("click",function(){
        $(this).siblings(".recomment_write_info .talent_info .cont_txt_box").toggleClass("show");
        $(this).toggleClass("on");
    });
}

function fnBrefUser() {
    $(".brief_user .desc_wrap .line .modify").on("click",function(){
        $(this).siblings(".brief_user .desc_wrap .line .profile_over").show();
    });

    $(".brief_user .desc_wrap .line .profile_over .btn_close").on("click",function(){
        $(this).parents(".brief_user .desc_wrap .line .profile_over").hide();
    });

    $(".person_info .upload_profile .photo_file").on("click",function(){
        $(this).siblings(".person_info .upload_profile .profile_over").css({'top':'10px','left':'70px'}).show();
    });
    $(".person_info .upload_profile .profile_over .btn_close").on("click",function(){
        $(this).parents(".person_info .upload_profile .profile_over").hide();
    });
}

function fnCalendalFocus() {
    var datepicker = $('.input_calendar');
    var minDate;
    datepicker.prop('readOnly', true);

    //yy. mm. d DD
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
    });

    datepicker.each(function() {
       var _this = $(this);

        if(_this.hasClass('only_after')) {
            minDate = new Date();
        } else {
            minDate = new Date(1970, 0, 1, 0, 0, 0);
        }

        var dateFormat = 'yy-mm-dd';
        if(_this.hasClass('with_week')) {
            dateFormat = 'yy-mm-dd (DD)';
        }

        _this.datepicker({
            minDate: minDate,
            dateFormat: dateFormat
            /*onClose: function(e) {
                if(_this.hasClass('with_week')) {
                    var date = new Date(datepicker.datepicker({ dateFormat: 'yy-mm-dd' }).val()),
                        week = new Array('일', '월', '화', '수', '목', '금', '토');
                    console.log(date +  " ::: " + week[date.getDay()]);
                    if (week[date.getDay()]!= undefined) {
                        _this.val(datepicker.val() + ' (' + week[date.getDay()] + ')');
                    }
                }
            }*/
        });
    });

}


function fnLayerPopup() {

}

//layer popup 열기
function openLayExtend(name){
    exLyNums++;
    $(".popup_layer").each(function(index){
        if($(this).hasClass(name)){
            $(this).layerScriptExtend({divs : name});

            if(name == 'confirm_coupon') {
                $('#layer_bg').hide();
            }

            if(name == 'movie01') {
                $(".movie01").append("<iframe width=\"740\" height=\"416\" src=\"https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=523AC0EC16DA51AC5574D0D35E98EA296CC1&outKey=V12400d000be27c6a8d0eeebb4aeb6ebd501be19e2ff5cc224786eebb4aeb6ebd501b\" frameborder=\"no\" scrolling=\"no\" allow='autoplay; encrypted-media' allowfullscreen></iframe>").css({top:"50%", marginTop:"-200px"});
            }
            if(name == 'movie02') {
                $(".movie02").append("<iframe width=\"740\" height=\"416\" src=\"https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=7D1ABF22D9F4A5B414655508428F425CE66C&outKey=V1241a0057ecbc3803039e684c5be372c481d4dfc421309dfa1f1e684c5be372c481d\" frameborder=\"no\" scrolling=\"no\" allow='autoplay; encrypted-media' allowfullscreen></iframe>").css({top:"50%", marginTop:"-200px"});
            }
            if(name == 'movie03') {
                $(".movie03").append("<iframe width=\"740\" height=\"416\" src=\"https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=C967C0AB6B8CDC55B7661AAEB93B4C8FECEA&outKey=V128af2848b0b8876ec85b7b379177af63104b09d53226b83b3eab7b379177af63104\" frameborder=\"no\" scrolling=\"no\" allow='autoplay; encrypted-media' allowfullscreen></iframe>").css({top:"50%", marginTop:"-200px"});
            }
        }
    });
}

//layer popup 열기 (이전버전: 백업)
function openLay(name){
    lyNums++;
    $(".popup_layer").each(function(index){
        if($(this).hasClass(name)){
            $(this).layerScript({divs : name});
            if(name == 'confirm_coupon') {
                $('#layer_bg').hide();
            }

            if(name == 'movie01') {
                $(".movie01").append("<iframe width=\"740\" height=\"416\" src=\"https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=523AC0EC16DA51AC5574D0D35E98EA296CC1&outKey=V12400d000be27c6a8d0eeebb4aeb6ebd501be19e2ff5cc224786eebb4aeb6ebd501b\" frameborder=\"no\" scrolling=\"no\" allow='autoplay; encrypted-media' allowfullscreen></iframe>").css({top:"50%", marginTop:"-200px"});
            }
            if(name == 'movie02') {
                $(".movie02").append("<iframe width=\"740\" height=\"416\" src=\"https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=7D1ABF22D9F4A5B414655508428F425CE66C&outKey=V1241a0057ecbc3803039e684c5be372c481d4dfc421309dfa1f1e684c5be372c481d\" frameborder=\"no\" scrolling=\"no\" allow='autoplay; encrypted-media' allowfullscreen></iframe>").css({top:"50%", marginTop:"-200px"});
            }
            if(name == 'movie03') {
                $(".movie03").append("<iframe width=\"740\" height=\"416\" src=\"https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=C967C0AB6B8CDC55B7661AAEB93B4C8FECEA&outKey=V128af2848b0b8876ec85b7b379177af63104b09d53226b83b3eab7b379177af63104\" frameborder=\"no\" scrolling=\"no\" allow='autoplay; encrypted-media' allowfullscreen></iframe>").css({top:"50%", marginTop:"-200px"});
            }
        }
    });
    /* OTWOJOB-566 */
    $(".event_layer").each(function(index){
        if($(this).hasClass(name)){
            $(this).layerScript({divs : name});
        }
    });
    /* //OTWOJOB-566 */
}

function openTopLay(name) {
    var popup = $('.' + name);
    var width = popup.width();
    popup.css({
       marginLeft: '-' + (width/2) + 'px'
    });

    $('html').css('overflow', 'hidden');
    popup.parent().find('.btn_close').attr('onclick', 'topLayerClose("'+name+'")');

/*
    var ly_w = popup.width();
    var ly_h = popup.height();
    popup.css({"margin-left":(-(ly_w/2)) + 'px !important', "margin-top":(-(ly_h/2))  + 'px !important'}).show();
*/

    popup.parent().show();
    popup.parent().animate({
        opacity: 1
    }, 250);

    popup.parent().click(function(e) {
        if(e.target && (e.target.className).indexOf('popup_overlay') > -1) {
            topLayerClose(name);
        }
    });
}

function topLayerClose(name) {
    var popup = $('.' + name);
    popup.parent().animate({
        opacity: 0
    }, 250, function() {
        popup.parent().hide();
    });
    // popup.parent().hide();

    $('html').css('overflow', 'auto');
}

// layer popup 닫기
function layerClose(name){
    $(".popup_layer").each(function(index){
        if($(this).hasClass(name)){
            var e = $(this);

            e.hide().attr("style","display:none");
            $("#layer_bg").attr("style","display:none");

            lyNums --;
            if(lyNums == 0){
                $("body").removeClass("lyOn");
                $("#layer_bg").remove();
            }
        }
        if($(".movie01")) {
            $(".movie_area iframe").remove();
        }
        if($(".movie02")) {
            $(".movie_area iframe").remove();
        }
        if($(".movie03")) {
            $(".movie_area iframe").remove();
        }

        $('html').css('overflow-y', 'auto');
    });

    $(".popup_layer").each(function(index){
        if($(this).hasClass(name)){
            var e = $(this);

            e.hide().attr("style","display:none");
            $("#layer_bg").attr("style","display:none");

            lyNums --;
            if(lyNums == 0){
                $("body").removeClass("lyOn");
                $("#layer_bg").remove();
            }
        }
        if($(".movie01")) {
            $(".movie_area iframe").remove();
        }
        if($(".movie02")) {
            $(".movie_area iframe").remove();
        }
        if($(".movie03")) {
            $(".movie_area iframe").remove();
        }

        $('html').css('overflow-y', 'auto');
    });
    /* OTWOJOB-566 */
    $(".event_layer").each(function(index){
        if($(this).hasClass(name)){
            var e = $(this);

            e.hide().attr("style","display:none");
            $("#layer_bg").attr("style","display:none");

            lyNums --;
            if(lyNums == 0){
                $("body").removeClass("lyOn");
                $("#layer_bg").remove();
            }
        }
    });
    /* //OTWOJOB-566 */
}



// layer popup 닫기 (Extent)
function layerCloseExtend(name){
    $(".popup_layer").each(function(index){
        if($(this).hasClass(name)){
            var e = $(this);

            e.hide().hide();
            $(".extend_layer_bg").hide();

            exLyNums--;
            if(exLyNums == 0){
                $("body").removeClass("exLyOn");
                // $("#layer_bg").remove();
            }
            $("body").attr("exLyNums", exLyNums);
        }
        if($(".movie01")) {
            $(".movie_area iframe").remove();
        }
        if($(".movie02")) {
            $(".movie_area iframe").remove();
        }
        if($(".movie03")) {
            $(".movie_area iframe").remove();
        }

        $('html').css('overflow-y', 'auto');
    });

    /* OTWOJOB-566 */
    $(".event_layer").each(function(index){
        if($(this).hasClass(name)){
            var e = $(this);

            e.hide().attr("style","display:none");
            $(".extend_layer_bg").attr("style","display:none");

            exLyNums --;
            if(exLyNums == 0){
                $("body").removeClass("exLyOn");
            }
        }
    });
    /* //OTWOJOB-566 */
}
// 셀렉트 이벤트
function fnSelectEvent() {
}

function fnOpenPopup(opts) {

    /*
        opts = {
            url : url
            , title : title
            , width : width
            , height : height
            , scrollbar : 'yes' or 'no'
        }
    */

    var left = (screen.width/2) - (opts.width/2)
        , top = (screen.height/2) - (opts.height/2);

    if ( opts.width === 'full' ) {
        opts.width = screen.width*0.9;
    }

    if ( opts.height === 'full' ) {
        opts.height = screen.height*0.9;
        top = 0;
    }

    if ( opts.height > screen.height ) opts.height = screen.height - 600;

    window.open(opts.url, opts.title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=' + opts.scrollbar + ', resizable=no, copyhistory=no, width='+ opts.width+', height='+opts.height+', top='+top+', left='+left);

}

function fnOrderInfoBox(idx) {

    if(idx == undefined || idx == null) idx = 0;

    for(var i = idx, j = $('.updown_detail.order_info li'); j.length - 1  >= i; i++){
        if(j.eq(i).find('.cont_txt_box').height() > 40){
            j.eq(i).find('.cont_txt_box').css('max-height','40px');
            j.eq(i).find('.btn_updown02').css('display','block');
        }else{
            j.eq(i).find('.cont_txt_box').css('max-height','auto');
            j.eq(i).find('.btn_updown02').css('display','none');
        }
    }

}
$(window).load(function(){
    fnOrderInfoBox()
});


// fnOpenPopup
function fnOpenPopup(opts) {

    /*
    fnOpenPopup({
        url : '/doopedia/master/master.do?_method=pop_imagelink&MAS_IDX='+MAS_IDX
        , title : '이미지 바로 연결'
        , width : '1100'
        , height : '700'
        , scrollbar : 'yes'
    });
    */


    /*
        opts = {
            url : url
            , title : title
            , width : width
            , height : height
            , scrollbar : 'yes' or 'no'
        }
    */

    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = (width/2) - (opts.width/2)
        , top = (height/2) - (opts.height/2) - 60;

    if ( opts.width === 'full' ) {
        opts.width = screen.width*0.9;
    }

    if ( opts.height === 'full' ) {
        opts.height = screen.height*0.9;
        top = 0;
    }

    if ( opts.height > screen.height ) opts.height = screen.height - 600;

    window.open(opts.url, opts.title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=' + opts.scrollbar + ', resizable=no, copyhistory=no, width='+ opts.width+', height='+opts.height+', top='+top+', left='+left);

    function getBrowserWith() {
        if(($.browser.msie == true && $.browser.version == '9.0') || $.browser.webkit == true || $.browser.mozilla == true)
            return window.innerWidth;
        else if(($.browser.msie == true) && ($.browser.version == '7.0' || $.browser.version == '8.0'))
            return document.documentElement.clientWidth;
        else
            return screen.width;
    }

}

// fnTabMove
function fnTabMove() {

    var tabWrap = $('.tab_sticky')
        , trigger = tabWrap.find('a')
        , TOP = tabWrap.offset().top
        , tab_content = $('.tab_content')
        , currentScrollTop = $(window).scrollTop()

    _tabFix();
    _checkTab();
    _bind();

    $(window).on({
        'scroll.fnTabMove' : function() {
            currentScrollTop = $(window).scrollTop();
            _tabFix();
        }
    });

    function _tabFix() {
        if ( currentScrollTop > TOP ) {
            if ( !$('nav').hasClass('stick') ) {
                $('nav').addClass('stick');
            }
            _checkTab();
        } else {
            if ( $('nav').hasClass('stick') ) {
                $('nav').removeClass('stick');
            }
        }
    }

    function _bind() {
        trigger.each(function(i) {
            $(this).on({
                click : function() {
                    $('html, body').stop().animate({
                        scrollTop : tab_content.eq(i).offset().top - $('.gnb_wrap').outerHeight(true) - $('.sticky_wrap').outerHeight(true)
                    }, 450);

                    $(this).addClass("on");
                    trigger.not($(this)).removeClass("on");

                    return false;
                }
            });
        });
    }

    function _checkTab() {
        tab_content.each(function(i) {
            var thisTop = $(this).offset().top ;
            if ( currentScrollTop + 120 > thisTop ) {
                trigger.removeClass('on');
                trigger.eq(i).addClass('on');
            }
        });
    }
}

function moveTarget(target) {
    var target = $('#'+ target);
    var moveTarget = target.offset().top - $('.gnb_wrap').outerHeight(true) - $('.sticky_wrap').outerHeight(true);
    $('html, body').stop().animate({scrollTop : moveTarget}, '500');
}

function ellipsis() {
    $('.ellipsis').each(function(){
        var length = 160;

        $(this).each(function(){
            if($(this).text().length >= length){
                $(this).text($(this).text().substr(0, length) + '...');
            }
        });
    });
}


function msg_writing() {
    $('body').on('keydown keyup','.msg_entry_form textarea', function(){
        $(this).height(18).height( $(this).prop('scrollHeight') ).css('margin-top',-($(this).height()/2) + 'px');  
        
        if($(this).val().length >= 1){
            $('.send_msg').css('border-top', '1px solid #f9530b');
            $('.send_msg input').css('background-color', '#f9530b');
        }else{
            $('.send_msg').css('border-top', '1px solid #878d96');
            $('.send_msg input').css('background-color', '#878d96');
        }   
    });
    $('body').on('keyup click','.send_msg input', function(){
        $('.msg_entry_form textarea').height(18).css('margin-top','-9px');
    });
}

// loadingOpen
function loadingOpen() {
  $('.loading').show();
}
// loadingClose
function loadingClose() {
  $('.loading').hide();
}

// msgBoxResize
function msgBoxResize () {
    var winH = $(window).height(),
        winW = $(window).width(),
        msgH = winH - 159 + 'px';
    $('.messaging_content').css('height', msgH);
    $('.messaging_footer').css('width', winW);
}

// ProgressBarOpen
function progressMove() {
    $(".bar_color").show();
    var elem = document.getElementById("progressBar"),
        width = 0,
        id = setInterval(frame, width);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            progressHide();
        } else {
            width++; // [dev] 증감 계산값만 width에 추가하면 됩니다.
            elem.style.width = width + '%';
            document.getElementById("per_num").innerHTML = width * 1  + '%';
        }
    }
}
// ProgressBarHide
function progressHide() {
    $(".bar_color").hide();
    $("#per_num").hide();
}

/* tool-tip */
$( document ).ready(function() {
    $('.tool-tip').mouseenter(function(e){
        var offset = $(this).offset();
        var myWidth =  $(this).width();
        var myHeight =  $(this).height();
        var targetId = $(this).attr('data-tooltip');
        var targetWidth = $(this).attr('data-tooltip-width');
        var targetGap = $(this).attr('data-tooltip-gap');
        var PosX = offset.left - (targetWidth/2 - myWidth/2);
        var PosY = offset.top -90;

        var marginTop = '';
        if(targetGap) {
            marginTop = targetGap + 'px';
        }

        $('#'+ targetId).css({
            'width' : targetWidth,
            'top'       : PosY + 'px',
            'left'      : PosX + 'px',
            'position'   : 'absolute',
            'z-index'   : '199',
            'margin-top': marginTop
        }).show()

        if (PosX < 0) {
            $('#' + targetId).css('left', '0px');
            $('#' + targetId + ' .tooltip_arr').css('left', offset.left + 5);
        }else{
            $('#' + targetId + ' .tooltip_arr').css('left', '50%');
        }
    });
    $('.tool-tip-reverse-open').each(function() {
        var offset = $(this).offset();
        var myWidth =  $(this).width();
        var myHeight =  $(this).height();
        var targetId = $(this).attr('data-tooltip');
        var targetWidth = $(this).attr('data-tooltip-width');
        var toolHeight = $('#'+ targetId).innerHeight();
        var PosX = offset.left - (targetWidth/2 - myWidth/2);
        var PosY = offset.top + myHeight - 90;

        $('#'+ targetId).css({
                                 'width' : targetWidth,
                                 'top'       : PosY -(toolHeight + myHeight + 30) + 'px',
                                 'left'      : PosX + 'px',
                                 'position'   : 'absolute',
                                 'z-index'   : '199'
                             }).addClass('reverse')
        if (PosX < 0) {
            $('#' + targetId).css('left', '0px');
            $('#' + targetId + ' .tooltip_arr').css('left', offset.left + 5);
        }else{
            $('#' + targetId + ' .tooltip_arr').css({
                                                        'left': '50%',
                                                        'top': toolHeight -1 + 'px'
                                                    });
        }
    });
    $('.closer').click(function(){
        $(this).parent('.common_tool_tip').css('z-index', '0').hide();
    });
    $('.closer2').click(function(){
        $(this).parent('.common_tooltip2').css('z-index', '0').hide();
    });
    $('.coupon_closer').click(function(){
        $(this).parent('.common_tooltip').css('z-index', '0').hide();
    });
    $('.tool-tip').mouseleave(function(){
        $('.common_tooltip').css('z-index', '0').hide();
    });

    // 통합형 간편회원가입용
    if($(this).find(':checkbox').is(':checked')){
        $('label.member').addClass('on')
    }else{
        $('label.member').removeClass('on')
    }
    $('label.member').click(function(){
        if($(this).children(':checkbox').is(':checked')){
            $(this).addClass('on');
        }else{
            $(this).removeClass('on')
        }
    });

    // 구매평 작성
    $('.assessment_layer .icon_check').find('button').click(function (index) {
        $('.assessment_layer .icon_check').find('button').removeClass('on');
        $(this).addClass('on');
    })

    $('.assessment_layer .star_grade_m').each(function () {
        $(this).find('button').each(function (index) {
            $(this).click(function() {
                var per = (index+1) * 20;
                var target = $(this).parent().find('.percent');

                target.animate({
                                   width: per  + '%',
                               }, 300);
                target.attr('point', per);
            });
        });
    });
    $('#assessment_detail span').click(function () {
        if ($(this).hasClass('on') === true) {
            $(this).removeClass('on');
        } else {
            $(this).addClass('on');
        }
    });
    // 상세 구매자 리뷰 애니메이션
    $(window).load(function(){
        if ($('.review_total .percent').attr('average')) {
            var totalBoxY = $('.review_total').offset().top;
            var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            if ((totalBoxY - 675) <= scrollY) {
                $('.review_total .percent').each(function () {
                    if ($(this).attr('average')) {
                        $(this).addClass('_average_comp');
                        var _width =  $(this).attr('average');
                        $(this).animate({
                                            width: _width  + '%',
                                        }, 300);
                    }
                })
            }
            $(document).bind('scroll', function(){
                var totalBoxY = $('.review_total').offset().top;
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                if ((totalBoxY - 675) <= scrollY && !$('.review_total .percent').hasClass('_average_comp')) {
                    $('.review_total .percent').each(function () {
                        if ($(this).attr('average')) {
                            $(this).addClass('_average_comp');
                            var _width =  $(this).attr('average');
                            $(this).animate({
                                                width: _width  + '%',
                                            }, 300);
                        }
                    })
                }
            })
        }
    });

    // 프로필 판매량 애니메이션
    $(window).load(function(){
        if ($('.row_graph_box dd span em').attr('average')) {
            var totalBoxY = $('.sales_wrap').offset().top;
            var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            if ((totalBoxY - 675) <= scrollY) {
                $('.row_graph_box dd span em').each(function () {
                    if ($(this).attr('average')) {
                        $(this).addClass('_average_comp');
                        var _height =  $(this).attr('average');
                        $(this).animate({
                                            height: _height  + '%',
                                        }, 300);
                    }
                })
            }
            $(document).bind('scroll', function(){
                var totalBoxY = $('.sales_wrap').offset().top;
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                if ((totalBoxY - 675) <= scrollY && !$('.review_total .percent').hasClass('_average_comp')) {
                    $('.row_graph_box dd span em').each(function () {
                        if ($(this).attr('average')) {
                            $(this).addClass('_average_comp');
                            var _height =  $(this).attr('average');
                            $(this).animate({
                                                height: _height  + '%',
                                            }, 300);
                        }
                    })
                }
            })
        }
    });

    $('.common_tooltip').each(function() {
        var offset = $(this).offset();
        var myWidth =  $(this).width();
        var myHeight =  $(this).height();
        var targetId = $(this).attr('data-tooltip');
        var targetWidth = $(this).attr('data-tooltip-width');
        var targetGap = $(this).attr('data-tooltip-gap');
        var toolHeight = $('#'+ targetId).innerHeight();
        var PosX = offset.left - (targetWidth/2 - myWidth/2);
        var PosY = offset.top + myHeight - 110;
        $('.common_tooltip').css('z-index', '0').hide();

        var marginTop = '';
        if(targetGap) {
            marginTop = targetGap + 'px';
        }

        $('#'+ targetId).css({
                                 'width' : targetWidth,
                                 'top'       : PosY -(toolHeight + myHeight) + 'px',
                                 'left'      : PosX + 'px',
                                 'position'   : 'absolute',
                                'margin-top': marginTop,
                                 'z-index'   : '199'
                             }).addClass('reverse').show()
        if (PosX < 0) {
            $('#' + targetId).css('left', '0px');
            $('#' + targetId + ' .tooltip_arr').css({
                                                        'left': offset.left + 5,
                                                        'top': toolHeight -1 + 'px'
                                                    });
        }else{
            $('#' + targetId + ' .tooltip_arr').css({
                                                        'left': '50%',
                                                        'top': toolHeight -1 + 'px'
                                                    });
        }
    });

    recommandPopupLayer.init();
    // extraMenu.init();
    customSelectBox.init();
    profileSlider.init();
    // monthCalendar.init();
    portFolioSlider.init();
    brandBlock.init();
    profileSet.init();
    paymentTooltip.profile();
    gradientAnimation.rollBg();
    if($('.image_slider').length) {
        ImageFade.init();
    }
    if($('.view_profile .profile_header').length) {
        if(navigator.userAgent.indexOf('9.0') > -1) {
            $('.view_profile .profile_header').css('background', '#586DF3');
        }
    }
    if($(".anchor_top ").length) {
        window.onscroll = function() {
            var scrollTop = $(window).scrollTop();
            if (600 < scrollTop) {
                $('.anchor_top').show()
            } else {
                $('.anchor_top').hide()
            }
        }
    }

    if($('.trading_state').length) {
        var strWidth = $('.trading_state').outerWidth(true) + (window.outerWidth - window.innerWidth);
        var strHeight = $('.trading_state').outerHeight(true) + (window.outerHeight - window.innerHeight);
        window.resizeTo( strWidth, strHeight );

    }

    slideTab.init();
});

// 재능상세 댓글 펼침
function reviewOn(t) {
    var _this = t;
    var activeOn = $(_this).parent().parent( );
    if (!activeOn.hasClass('on')){
        activeOn.addClass('on');
    }else {
        activeOn.removeClass('on');
    }
}

function dataToolTip_nonPosition(obj) {
    var offset = $(obj).offset();
    var myWidth = $(obj).width();
    var myHeight = $(obj).height();
    var targetId = $(obj).attr('data-tooltip');
    var targetWidth = $(obj).attr('data-tooltip-width');
    var toolHeight = $('#'+ targetId).innerHeight();
    var PosX = offset.left - (targetWidth / 2 - myWidth / 2);
    var PosY = offset.top + myHeight - 110 ;
    $('.common_tooltip').css('z-index', '0').hide();

    $('#' + targetId).css({
        'width': targetWidth,
        'z-index': '199'
    }).show();
}

function dataToolTip (obj) {

    var offset = $(obj).offset();
    var myWidth = $(obj).width();
    var myHeight = $(obj).height();
    var targetId = $(obj).attr('data-tooltip');
    var targetWidth = $(obj).attr('data-tooltip-width');
    var toolHeight = $('#'+ targetId).innerHeight();
    var PosX = offset.left - (targetWidth / 2 - myWidth / 2);
    var PosY = offset.top + myHeight - 110 ;
    $('.common_tooltip').css('z-index', '0').hide();

    $('#' + targetId).css({
                              'width': targetWidth,
                              'top': PosY + 'px',
                              'left': PosX + 'px',
                              'position': 'absolute',
                              'z-index': '199'
                          }).show();

    if (PosX < 0) {
        $('#' + targetId).css('left', '0px');
        $('#' + targetId + ' .tooltip_arr').css('left', offset.left + 5);
    } else {
        $('#' + targetId + ' .tooltip_arr').css('left', '50%');
    }
}

function dataToolTip_reverse (obj) {

    var offset = $(obj).offset();
    var myWidth =  $(obj).width();
    var myHeight =  $(obj).height();
    var targetId = $(obj).attr('data-tooltip');
    var targetWidth = $(obj).attr('data-tooltip-width');
    var toolHeight = $('#'+ targetId).innerHeight();
    var PosX = offset.left - (targetWidth/2 - myWidth/2);
    var PosY = offset.top + myHeight - 110;
    $('.common_tooltip').css('z-index', '0').hide();

    $('#'+ targetId).css({
                             'width' : targetWidth,
                             'top'       : PosY -(toolHeight + myHeight) + 'px',
                             'left'      : PosX + 'px',
                             'position'   : 'absolute',
                             'z-index'   : '199'
                         }).addClass('reverse').show()
    if (PosX < 0) {
        $('#' + targetId).css('left', '0px');
        $('#' + targetId + ' .tooltip_arr').css({
                                                    'left': offset.left + 5,
                                                    'top': toolHeight -1 + 'px'
                                                });
    }else{
        $('#' + targetId + ' .tooltip_arr').css({
                                                    'left': '50%',
                                                    'top': toolHeight -1 + 'px'
                                                });
    }
}
/* 모바일 레이어 대응 */
function memberDivOpen(id) {
    var nId = id;
    $('#' + nId).fadeIn();
}
function memberDivClose(id) {
    var nId = id;
    $('#' + nId).hide();
}

function onlyNumber(event){
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 )
        return;
    else
        return false;
}
function removeChar(event) {
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 )
        return;
    else
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
}

function showDCGuide() {
    $('body').css('overflow-y', 'hidden');
    $('body').css('padding-right', '17px');

    $('#guide_popup').show();
    $('#guide_popup').children('.guide_popup_main').css('top', $(window).scrollTop() +'px');

}

function closeDCGuide() {
    $('body').css('overflow-y', 'auto');
    $('body').css('padding-right', '0px');

    $('#guide_popup').hide();
}

function changeCategory(key) {
    $('.category_list').hide();
    $('.ranking_category').children('button').removeClass('on');
    $('.category_btn').each(function() {
        var id = $(this).attr('id');
        $(this).children('img').attr('src', '/image/pc/ico/ic-category-'+id.replace('_btn', '')+'.png');
    });

    if(key == 'right') {
        $('#right_btn').prop("disabled",true);
        $('#right_btn').children('img').attr('src', '/image/pc/common/arrow-right-off.png');
        $('#left_btn').prop("disabled",false);
        $('#left_btn').children('img').attr('src', '/image/pc/common/arrow-left-on.png');

        $('button[name=first]').css('display', 'none');
        $('button[name=second]').css('display', 'inline-block');
    } else if(key == 'left') {
        $('#left_btn').prop("disabled",true);
        $('#left_btn').children('img').attr('src', '/image/pc/common/arrow-left-off.png');
        $('#right_btn').prop("disabled",false);
        $('#right_btn').children('img').attr('src', '/image/pc/common/arrow-right-on.png');

        $('button[name=first]').css('display', 'inline-block');
        $('button[name=second]').css('display', 'none');
    } else {
        if(key != 'all') {
            $('#category_'+key).css('display', 'inline-block');
            $('#'+key+'_btn').children('img').attr('src', '/image/pc/ico/ic-category-'+key+'-on.png');
        }
        $('#'+key+'_btn').addClass('on');
    }
}

function getCurrentPageName() {
    var currentFileName = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.lastIndexOf("/") + 30);
    if(currentFileName.indexOf('?') > -1) {
        currentFileName = currentFileName.split('?')[0]
    }

    return currentFileName;
}

function scrollToElement(target) {
    $('#' + target + '_countdown').parent().parent().parent().addClass('focused')
    $(window).scrollTop($('#'+target+'_countdown').offset().top - 32);
}

function closeCircleBanner() {
    if($('#banner_hide').is(':checked')) {
        var key = "logo_banner_" + (new Date()).getDate();
        setCookie(key, 'view', 1);
    }

    $('.img_pop_banner').hide();
}

function closeEventBanner(name) {
    var key = name + "_" + (new Date()).getDate();
    setCookie(key, 'view', 1);

    $('.' + name).hide();
}

function openTodayPopup(name) {
    if($("." + name).length ) {
        var key = name + "_" + (new Date()).getDate();
        var cookie = getCookie(key);
        if(cookie != 'view') {
            openLay(name);
        }
    }
}

function closeTodayPopup(target) {
    var cookieKey = target + "_" + (new Date()).getDate();
    setCookie(cookieKey, 'view', 1);

    layerClose(target);
}

function closeTodayBanner(target) {
    var cookieKey = target + "_" + (new Date()).getDate();
    setCookie(cookieKey, 'view', 1);

    $('.' + target).hide();
}

function openTodayFloatingBanner(name) {
    if($("." + name).length ) {
        var key = name + "_" + (new Date()).getDate();
        var cookie = getCookie(key);
        if(cookie != 'view') {
            $('.'+ name).find('img').load(function() {
                $('.'+ name).css('display', 'inline-block');

                var e= $("." + name).find('.layer_box');
                var ly_w = e.outerWidth(true);
                var ly_h = e.outerHeight(true);
                e.css({"margin-left":(-(ly_w/2)) + 'px', "margin-top":(-(ly_h/2))  + 'px'});
            });
        }
    }
}

function setFoucsRequired(selector) {
    var target = $(selector);
    if(target.length) {
        target.parent().addClass('required');
        target.focus();
    }
}

function toggleMessage(target) {
    var parent = $(target).parent();
    if(parent.hasClass('on')) {
        parent.removeClass('on');
    } else {
        parent.addClass('on');
    }
}


/* 알림센터 레이어 제어 */
$(document).ready(function(){
    $('.notice_layer').hide();
});
/*
function noticeLayer () {
    if($('.notice_layer').is('._active')){ // 레이어 닫기
        $('.notice_layer').removeClass('_active');
        $('.notice_layer').slideUp();
    }else{ // 레이어 열기
        $('.notice_layer').addClass('_active');
        $('.notice_layer').slideDown();
    }
}*/



/* 신규 헤더 / 푸터 */
$(document).ready(function(){
    var userAgent, ieReg, ie;
    userAgent = window.navigator.userAgent;
    ieReg = /msie|Trident.*rv[ :]*11\./gi;
    ie = ieReg.test(userAgent);

    /*if(ie) {
        $(".category_list01 .photo").each(function () {
            var $container = $(this),
                imgUrl = $container.find("img").prop("src");
            if (imgUrl) {
                $container.css("backgroundImage", 'url(' + imgUrl + ')').addClass("custom-object-fit");
            }
        });
    }*/

    // document 클릭시 열려져 있는 메뉴 닫힘
    $(document).click(function(e){
        if (!$(e.target).is('.box_menu, .btn_menu')) {
            categoryMenu.closeMenu();
            $('.btn_menu').removeClass('active');
        }
        if (!$(e.target).is('.global_search, .auto_search_wrap')) {
            globalSearch.closeEvent();
        }
        if (!$(e.target).is('.notice_layer, ._noticeLayer')) {
            if ($('.notice_layer').is('._active')){
                noticeLayer.init();
            }
        }
        if (!$(e.target).is('.menu_list_btn') && !$(e.target).is('.ex_menu button img')) {
            if ($('.ex_menu').hasClass('on')){
                extraMenu.hide();
            }
        }
    });

    $('.btn_menu').on('click', function () {
        categoryMenu.init();
    });

    if ($('.global_search')){
        globalSearch.init();
    }

    if ( $('.scrollbar-inner').length ){
        ScrollBarPlugIn.init();
    }

    if($('.hotdealzone').length > 0) {
        if($(window).width() > 1920) {
            $('.hotdealzone').children('.visual').css({
                backgroundSize: 'calc(100vw) auto'
            });
        } else {
            $('.hotdealzone').children('.visual').css({
                backgroundSize: '1920px 160px'
            });
        }

        $(window).resize(function() {
            if($(window).width() > 1920) {
                $('.hotdealzone').children('.visual').css({
                    backgroundSize: 'calc(100vw) auto'
                });
            } else {
                $('.hotdealzone').children('.visual').css({
                    backgroundSize: '1920px 160px'
                });
            }
        });
    }

    if($('#exhibit').length > 0 || $('.brand_site').length > 0) {
        if($(window).width() > 1920) {
            // $('#exhibit, #brand_info, .brand_site').children('.visual').css('background-size', 'calc(100vw) auto');
            $('#exhibit, #brand_info, .brand_site').children('.visual').each(function() {
                $(this).css('background-position', 'center top');
               if($(this).parent().attr('id') == 'brand_info') {
                   $(this).css('background-size', 'calc(100vw) 100%');
               }  else {
                   $(this).css('background-size', 'calc(100vw) auto');
               }
            });
        } else {
            // $('#exhibit, #brand_info, .brand_site').children('.visual').css('background-size', '1920px auto');
            $('#exhibit, #brand_info, .brand_site').children('.visual').each(function() {
                $(this).css('background-position', 'center top');
                if($(this).parent().attr('id') == 'brand_info') {
                    $(this).css('background-size', '100vw 100%');
                }  else {
                    $(this).css('background-size', '1920px auto');
                }
            });
        }

        $(window).resize(function() {
            if($(window).width() > 1920) {
                // $('#exhibit, #brand_info, .brand_site').children('.visual').css('background-size', 'calc(100vw) auto');
                $('#exhibit, #brand_info, .brand_site').children('.visual').each(function() {
                    $(this).css('background-position', 'center top');
                    if($(this).parent().attr('id') == 'brand_info') {
                        $(this).css('background-size', 'calc(100vw) 100%');
                    }  else {
                        $(this).css('background-size', 'calc(100vw) auto');
                    }
                });
            } else {
                // $('#exhibit, #brand_info, .brand_site').children('.visual').css('background-size', '1920px auto');
                $('#exhibit, #brand_info, .brand_site').children('.visual').each(function() {
                    $(this).css('background-position', 'center top');
                    if($(this).parent().attr('id') == 'brand_info') {
                        $(this).css('background-size', '100vw 100%');
                    }  else {
                        $(this).css('background-size', '1920px auto');
                    }
                });
            }
        });
    }

    if($('.logozone').length > 0) {
        if($(window).width() > 1920) {
            $('.logozone').children('.visual').css('background-size', 'calc(100vw) auto');
        } else {
            $('.logozone').children('.visual').css('background-size', '1920px auto');
        }

        $(window).resize(function() {
            if($(window).width() > 1920) {
                $('.logozone').children('.visual').css('background-size', 'calc(100vw) auto');
            } else {
                $('.logozone').children('.visual').css('background-size', '1920px auto');
            }
        });
    }

    if($('.content_chk').length) {
        $('.content_chk').each(function() {
            if(this.checked) {
                $('div[title='+this.id+']').css('display', 'block');
            }
        });


        $('.content_chk').change(function() {
            var target = $('div[title='+this.id+']');
            if(this.checked) {
                target.css('display', 'block');
            } else {
                target.css('display', 'none');
            }
        });
    }

    if($('#guide_popup').length) {
        $(window).click(function(e) {
            if(e.target.id == 'guide_popup') {
                closeDCGuide();
            }
        });

        $(document).keyup(function(e) {
            if (e.keyCode == 27) { // escape key maps to keycode `27`
                closeDCGuide();
            }
        });
    }

    $('.close_image_alert').click(function() {
        $('.image_alert_overlay').hide();
    });


    if($('.category_body').length) {
        $('header').find('.inner').addClass('wide');
        $('footer').find('.footer_inner').addClass('wide');

        categoryBox.setting();

        $('.result_contents').load(function() {
            // console.log($(this).children());
        });
    }

    if($('.left_sub_categories').length) {
        leftCategory.init();
    }

    if($('.last_etc').length) {
        lastSubOption.init();
    }

    openTodayPopup('buy_promotion');
    openTodayFloatingBanner('open_msg_reservation');

    sortingBox.init();
    detailContentUtil.init();
    buyOptionBox.init();
    floatingRightBanner.init();
    floatingSharebox.init();
});


var categoryBox = {
    init: function() {
        $('.category_list01  > li').each(function() {
            var onclick1 = $(this).children('.type_img').find('a').attr('onclick');
            if(onclick1) {
                $(this).children('.mid_wrap').attr('onclick', onclick1);
                $(this).children('.mid_wrap').find('a').removeAttr('onclick');
            }

            var onclick2 = $(this).find('.seller_info .name a').attr('onclick');
            if(onclick2) {
                $(this).children('.state').attr("onclick", onclick2);
                $(this).find('.seller_info .name a').attr('onclick', '');
            }
        });

        $('.category_list01 > .realtime_content').each(function() {
            var onclick1 = $(this).children('.type_img').find('a').attr('onclick');
            if(onclick1) {
                $(this).children('.mid_wrap').attr('onclick', onclick1);
                $(this).children('.mid_wrap').find('a').removeAttr('onclick');
            }
        });
    },
    setting: function() {
        $('.category_list01.wide > li').each(function() {
            var target = $(this);
            $(this).children('.type_img').mouseenter(function() {
                categoryBox.mouseIn(target);
            }).mouseleave(function() {
                categoryBox.mouseOut(target);
            });

            $(this).children('.mid_wrap').mouseenter(function() {
                categoryBox.mouseIn(target);
            }).mouseleave(function() {
                categoryBox.mouseOut(target);
            });
        });

        categoryBox.init();
    },
    mouseIn: function(target) {
        if(target.parent().hasClass('wide')) {
            target.children('.type_img').css({
                border: '1px solid #ff6916',
                borderRight: '1px solid transparent'
            });
            target.children('.state').css({
                border: '1px solid #eaeaea',
                borderLeft: '1px solid #ff6916'
            });
        }

    },
    mouseOut: function(target) {
        if(target.parent().hasClass('wide')) {
            target.children('.type_img').css({
                border: '',
                borderRight: ''
            });
            target.children('.state').css({
                border: '',
                borderLeft: ''
            });
        }
    }
}

var ImageCheckbox = {
    init : function () {
        this.allChk = false;
        var _this = this;
        $('input:checkbox[name="img_chk"]').change(function() {
            if(this.checked) {
                $(this).parent().parent().parent().addClass('selected');
            } else {
                $(this).parent().parent().parent().removeClass('selected');

                _this.allChk = false;
            }
        });
    },
    allCheckToggle : function () {
        if(this.allChk) {
            $('input:checkbox[name="img_chk"]').prop('checked', false);
            $('.card').children('.info').removeClass('selected');

            this.allChk = false;
        } else {
            $('input:checkbox[name="img_chk"]').prop('checked', true);
            $('.card').children('.info').addClass('selected');

            this.allChk = true;
        }
    }
}

var globalSearch = {
    init : function () {
        this.target = $('.global .global_search');
        this.targetInput = this.target.find('input');
        this.layerBox = $('.auto_search_wrap');

        this.target.on('click', function () {
            if(!$(this).hasClass('on')){
                $(this).addClass('on');
            }else {
                return;
            }
        })
    },
    closeEvent : function () {
        if(!this.targetInput.val()) {
            this.target.removeClass('on');
        }
        this.layerBox.hide();
    }
};

// ScrollBar PlugIn JS
var ScrollBarPlugIn = {
    init: function () {
        if($(".career .dot").length) {
            this.careerScrollBar();
        }
        $('.scrollbar-inner').scrollbar();
    },
    careerScrollBar: function() {
        var target = $(".career .dot li");
        if(target.height() < target.children('pre').height()) {
            target.css({
                width: '270px',
            });
        }
    }
};

var categoryMenu = {
    init : function () {
        var isActive = $('.btn_menu').hasClass('active');

        if(isActive) {
            categoryMenu.closeMenu();
            $('.btn_menu').removeClass('active');
        }else {
            categoryMenu.openMenu();
            $('.box_otwojob').addClass('on');
            $('.btn_menu').addClass('active');
        }

        if($('.box_orderjob').hasClass('active')) {
            $('.box_orderjob .depth2').show();
            if($('.orderjob_area_event').length < 1) {
                $('.box_menu').css({width : '236px'})
            } else {
                $('.box_menu').css({width : '472px'})
            }
        } else {
            $('.box_otwojob .depth2').show();
            if($('.otwojob_area_event').length < 1) {
                $('.box_menu').css({width : '236px'})
            } else {
                $('.box_menu').css({width : '472px'})
            }
        }

        // categoryMenu.resetDepth();
        $('.box_otwojob').on('mouseover', function () {
            $('.box_orderjob .depth2').hide();
            $('.box_otwojob .depth2').show();
            $('.box_orderjob > a').removeClass('bold');
            $(this).children('a').addClass('bold');
            $('.box_orderjob').removeClass('active');
            $(this).addClass('active');
            $('.orderjob_area_event').hide();

            var isDepth2 = false;
            $('.depth2').each(function() {
                if(!isDepth2 && $(this).is(':hover')) {
                    isDepth2 = $(this).is(':hover');
                }
            });
            if(!isDepth2) {
                $('.otwojob_area_event').show();

                if($('.otwojob_area_event').length < 1) {
                    $('.box_menu').css({width : '236px'})
                } else {
                    $('.box_menu').css({width : '472px'})
                }
            }


        });

        $('.box_orderjob').on('mouseover', function () {
            $('.box_otwojob .depth2').hide();
            $('.box_orderjob .depth2').show();
            $('.box_otwojob > a').removeClass('bold');
            $(this).children('a').addClass('bold');
            $('.box_otwojob').removeClass('active');
            $(this).addClass('active');
            $('.otwojob_area_event').hide();

            var isDepth2 = false;
            $('.depth2').each(function() {
                if(!isDepth2 && $(this).is(':hover')) {
                    isDepth2 = $(this).is(':hover');
                }
            });
            if(!isDepth2) {
                $('.orderjob_area_event').show();

                if($('.orderjob_area_event').length < 1) {
                    $('.box_menu').css({width : '236px'})
                } else {
                    $('.box_menu').css({width : '472px'})
                }
            }
        });

        $('.depth2 li').on('mouseover', function () {
            var _this = $(this);
            categoryMenu.overActive(_this);
            categoryMenu.openDepth(_this);

            $('.otwojob_area_event').hide();
            $('.orderjob_area_event').hide();
        });
        $('.depth2 li').on('mouseout', function () {
            var _this = $(this);
            categoryMenu.outActive(_this);
            categoryMenu.resetDepth(_this);
            if($('.box_orderjob').hasClass('active')) {
                $('.orderjob_area_event').show();
            } else {
                $('.otwojob_area_event').show();
            }
        });
    },
    openMenu : function() {
        $('.box_menu').css({display : 'block'})
    },
    closeMenu : function() {
        $('.box_menu').css({display : 'none'})
    },
    openDepth : function(target) {
        var $this = target;

        if ($this.children().is('ul') && $this.children().is('.area_event')) {
            $('.box_menu').css({width : '730px'})
        }else if($this.children().is('ul') && !$this.children().is('.area_event')){
            $('.box_menu').css({width : '496px'})
        }else {
            if($('.box_orderjob').hasClass('active')) {
                if($('.orderjob_area_event').length < 1) {
                    $('.box_menu').css({width : '236px'})
                } else {
                    $('.box_menu').css({width : '472px'})
                }
            } else {
                if($('.otwojob_area_event').length < 1) {
                    $('.box_menu').css({width : '236px'})
                } else {
                    $('.box_menu').css({width : '472px'})
                }
            }
        }
    },
    resetDepth : function() {
        if($('.box_orderjob').hasClass('active')) {
            if($('.orderjob_area_event').length < 1) {
                $('.box_menu').css({width : '236px'})
            } else {
                $('.box_menu').css({width : '472px'})
            }
        } else {
            if($('.otwojob_area_event').length < 1) {
                $('.box_menu').css({width : '236px'})
            } else {
                $('.box_menu').css({width : '472px'})
            }
        }
    },
    overActive : function(target) {
        var $this = target;
        $this.addClass('on');
        $this.children('a').addClass('bold');
        $this.parent().parent().addClass('on');
        $this.parent().parent().children('a').addClass('bold');
    },
    outActive : function(target) {
        var $this = target;
        $this.removeClass('on');
        $this.children('a').removeClass('bold');
        $this.parent().parent().removeClass('on');
        $this.parent().parent().children('a').removeClass('bold');
    }
};

var sortingBox = {
    init : function() {
        if($('.select_field').length) {
            $('.select_field').each(function() {
                var field = $(this);
                field.children('.selected_text').click(function() {
                    if($(this).hasClass('selected')) {
                        field.children('.nav').animate({
                            height: 0
                        }, 200, function() {
                            field.children('.nav').css('border', 'none');
                        });

                        $(this).removeClass('selected');
                    } else {
                        field.children('.nav').css('border', '1px solid #999');
                        field.children('.nav').animate({
                            height: 217
                        }, 200);
                        $(this).addClass('selected');
                    }

                });
            })
        }
    },
    close: function(idx) {
        var field = $('.select_field');
        field.children('.nav').animate({
            height: 0
        }, 200, function() {
            field.children('.nav').css('border', 'none');
        });

        if(idx > -1) {
            field.children('.nav').find('li').removeClass('selected');
            var target = field.children('.nav').find('li').eq(idx);
            field.children('.selected_text').html(target.text());
            target.addClass('selected');
        }

        field.children('.selected_text').removeClass('selected');
    }
}

var noticeLayer = {
    init: function () {
        this.target = $('.notice_layer');

        if(this.target.is('._active')){ // 레이어 닫기
            noticeLayer.closeEvent();
        }else{ // 레이어 열기
            noticeLayer.openEvent();
        }
    },
    openEvent: function () {
        this.target.css('left', $("._noticeLayer").offset().left - $('.global').children('.inner').offset().left - 160 - 258);
        this.target.addClass('_active');
        this.target.slideDown();
    },
    closeEvent: function () {
        this.target.removeClass('_active');
        this.target.slideUp();
    }
};

var logoPopup = {
    checkEmpty: function() {
        $('.popup_wrap.logozone').find('input[type=text]').each(function() {

        });
    }
}

var customPopopLayer = {
    resize: function() {
        var target = $('.popup_layer');
        target.each(function(t) {
            var _this = $(this);
            if(_this.css('display') != 'none') {
               var userAgent, ieReg, ie;
               userAgent = window.navigator.userAgent;
               ieReg = /msie|Trident.*rv[ :]*11\./gi;
               ie = ieReg.test(userAgent);

               /*if(!ie) {
                   _this.css({
                       top: 'calc(50vh - '+(_this.height()/2)+'px)',
                       left: 'calc(50vw - '+(_this.width()/2)+'px)',
                       marginTop: '0',
                       marginLeft: '0'
                   });
               } else {
                   _this.css({
                       top: '50%',
                       left: '50%',
                       marginTop: '-'+ (_this.height()/2) + 'px' ,
                       marginLeft: '-' + (_this.width()/2) + 'px'
                   });
               }*/
            }
        });
    }
}


var setCookie = function(name, value, exp) {
    var date = new Date();
    date.setUTCHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    date.setMilliseconds(999);
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

var getCookie = function(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
};

var recommandPopupLayer = {
    init: function() {
        if($('.recommand_order_popup').length) {
            var key = "recommand_order_" + (new Date()).getDate();
            var cookie = getCookie(key);

            if(cookie != 'view') {
                recommandPopupLayer.showPopup();
            }
        }
    },
    showPopup: function() {
        $('.recommand_order_popup').css('display', 'inline-block');
    },
    closePopup: function() {
        $('.recommand_order_popup').css('display', 'none');

        var key = "recommand_order_" + (new Date()).getDate();
        setCookie(key, 'view', 1);
    }
}

var optionSearchBox = {
    toggleBox : function() {
        if($('.options_search').hasClass('selected')) {
            $('.options_list').hide();
            $('.options_search').removeClass('selected');
        } else {
            $('.options_list').css('display', 'inline-block');
            $('.options_search').addClass('selected');
        }
    }
}

var leftCategory = {
    init: function() {
        var html = $(".left_sub_categories")[0].outerHTML;
        $(".left_sub_categories").remove();
        $('#header .nav .inner').append(html);

        $('.global_search input').focus(function() {
            $('#header.fixed .global .global_search').addClass('focused');
        });

        $('.global_search input').focusout(function() {
            $('#header.fixed .global .global_search').removeClass('focused');
        });


        var standard = 111;
        leftCategory.headerTop = 121;
        leftCategory.top = 139;
        if($('.category_banner').length) {
            standard = standard + 100;
            leftCategory.headerTop = leftCategory.headerTop + 100;
            leftCategory.top = 239;
            $('.left_sub_categories').addClass("type02");
        }
        $(".left_sub_categories").show();

        if($(window).scrollTop() > leftCategory.headerTop) {
            $('header').addClass('fixed');
            if($('.category_banner').length) {
                $('.left_sub_categories').removeClass('type02');
            }
        } else {
            $('header').removeClass('fixed');
            if($('.category_banner').length) {
                $('.left_sub_categories').addClass('type02');
            }
        }

        $(window).scroll(function(){
            if(($('footer').offset().top - $(window).scrollTop()) <  $('.left_sub_categories').outerHeight() + 130) {
                var gap = $('footer').offset().top - $(window).scrollTop();
                var move =  gap - $('.left_sub_categories').outerHeight(true) - 115;
                if(move < 0) {
                    $('.left_sub_categories').css({transform: 'translateY('+move+'px)'});
                } else {
                    $('.left_sub_categories').css({transform: ''});
                }
            } else {
                $('.left_sub_categories').css({transform: ''});
            }

            if($(window).scrollTop() > leftCategory.headerTop) {
                $('header').addClass('fixed');
                if($('.category_banner').length) {
                    $('.left_sub_categories').removeClass('type02');
                }
            } else {
                $('header').removeClass('fixed');
                if($('.category_banner').length) {
                    $('.left_sub_categories').addClass('type02');
                }
            }
        });
    },
    topLevelUp: function() {
        leftCategory.headerTop = leftCategory.headerTop + 100;

        if($(window).scrollTop() > leftCategory.headerTop) {
            $('header').addClass('fixed');
            $('.left_sub_categories').removeClass('type02');
        } else {
            $('header').removeClass('fixed');
            $('.left_sub_categories').addClass('type02');
        }
    }

}

var bestRankingSlider = {
    init: function() {
        if($('.bestranking').length > 0) {
            if($('#cycle-slideshow1').length) {
                $('#cycle-slideshow1').cycle({
                    timeout: 2500,
                    speed: 500,
                    fx: 'scrollHorz',
                    slides: '> .realtime_content',
                    next: '#realtime_best .ranking_page_next',
                    prev: '#realtime_best .ranking_page_prev'
                });

                $('#cycle-slideshow1' ).on( 'cycle-after', function( event, opts ) {
                    $('.ranking_page').html((opts.slideNum) + ' / '+ opts.slideCount);
                });
            }

            $('.bestranking').find('.state_inner').show();
        }
    }
}

var detailContentUtil = {
    init: function()  {
        if($('.side_view').length) {
            this.sideLeft = $('.side_view').offset().left;
            var detailPosition = $("#detail_info").offset().top;
            if($(".orange_btn").length && ($(".orange_btn").html()).indexOf('톡톡') > -1) {
                if($(window).scrollTop() > detailPosition) {
                    $('.orange_btn ').removeClass('talk_bubble');
                } else {
                    if(!$(".orange_btn").hasClass('talk_bubble')) {
                        $('.orange_btn ').addClass('talk_bubble');
                    }
                }
            }

            if($('#deliveryFee').length) {
                var elem = $('#deliveryFee').html();
                var row = '<li id="deliveryFee" style="display:none;" optpricestd="0">' + elem + '</li>';

                $('#deliveryFee').remove();
                $("ul.option_list").prepend(row)

            }

            $(window).resize(function() {
                detailContentUtil.sideLeft = $('.detail_view').offset().left + 900;
                if( $(".side_view").hasClass('fixed')) {
                    if($(window).width() < 1220) {
                        $('.side_view').css({
                            left: (detailContentUtil.sideLeft - $(window).scrollLeft()) + 'px'
                        });
                    } else {
                        $('.side_view').css({
                            left: detailContentUtil.sideLeft + 'px'
                        });
                    }

                }
            });

            var telIconDate = new Date(2019, 7 - 1, 28, 0, 0, 0);
            if(telIconDate > (new Date()) && $('.submit_btns').children('.orange_btn').length && $('.call_guide').length) {
                $('.submit_btns').children('.orange_btn').addClass("new");
            }

            if(!$('.side_footer').find("a").length) {
                $('.submit_btns').addClass("type02");
            } else {
                $('.submit_btns').removeClass("type02");
            }

            if($(".profile_infos").length) {
                var isOne = false;
                $(".profile_infos").find(".seller_history").each(function() {
                    if($(this).hasClass("none") || $(this).css("display") == 'none') {
                        isOne = true;
                    }
                });

                $(".profile_infos").find(".seller_history").each(function() {
                    if(!$(this).hasClass("none") && $(this).css("display") != 'none' && isOne) {
                        $(this).css("width", '100%');
                    }
                });
            }

            detailContentUtil.scroll();
            detailContentUtil.tabClick();

            detailContentUtil.setPosition(true);
        }
        if($('.brand_site').length && $('.nav_tab').length) {
            $('#content_container').addClass("type02");
            $('.footer_inner').addClass('wide');
            detailContentUtil.tabClick();
            detailContentUtil.standardScroll();
            if($('.brand_site').children('.visual').eq(0)) {
                $('.brand_site').children('.visual').eq(0).find('img').load(function() {
                    detailContentUtil.setTabPosition();
                });
            }
        }
    },
    scroll: function() {
        var detailPosition = $("#detail_info").offset().top;
        $(window).scroll(function() {
            detailContentUtil.setPosition(false);

            /*if($(".orange_btn").length && ($(".orange_btn").html()).indexOf('톡톡') > -1) {
                if($(window).scrollTop() > detailPosition) {
                    $('.orange_btn ').removeClass('talk_bubble');
                } else {
                    if(!$(".orange_btn").hasClass('talk_bubble')) {
                        $('.orange_btn ').addClass('talk_bubble');
                    }

                }
            }*/
        });
    },
    standardScroll: function() {
        var tabPosition = $(".nav_tab").offset().top;
        this.tabPosition = tabPosition;
        var tabTarget = $(".nav_tab");
        $(window).scroll(function() {
            if($(window).scrollTop() >detailContentUtil.tabPosition) {
                tabTarget.parent().parent().addClass('fixed');
            } else {
                tabTarget.parent().parent().removeClass('fixed');
            }

            if(!$(".nav_tab").hasClass('transform')) {
                var trigger= $('.nav_tab').children('a');
                $('.detail_tab_content').each(function(i) {
                    var thisTop = $(this).offset().top ;
                    if ( $(window).scrollTop() +60> thisTop ) {
                        trigger.removeClass('on');
                        trigger.eq(i).addClass('on');
                    }
                });
            }
        });
    },

    setTabPosition: function() {
        var tabPosition = $(".nav_tab").offset().top;
        this.tabPosition = tabPosition;
    },
    setPosition: function(initial) {
        var sideBottom = $(".side_view").offset().top + $(".side_view ").outerHeight(true);
        var maxSize = 24 + $('.option_result').outerHeight(true) + $(".view_box").children('.submit_btns').outerHeight(true) + $(".right_banner").outerHeight(true);
        if($('.buy_option').length) {
            maxSize += $('.buy_option').outerHeight(true);
        }

        if($('.side_footer').css('display') != 'none') {
            maxSize += $('.side_footer').outerHeight(true);
        }

        if($(window).scrollTop() > 195) {
            var scrollBottom = $(window).scrollTop() + $(".side_view ").outerHeight(true) + 10;
            if(scrollBottom >= ($(".footer_comment").offset().top) ) {
                $('.side_view').css({
                    top: '-' + (scrollBottom - $(".footer_comment").offset().top)+ 'px',
                });
            } else {
                $('.side_view').addClass('fixed');
                $('.side_view').removeClass('absolute');
                if($(window).width() < 1220) {
                    $('.side_view').css({
                        top: '0px',
                        left: (this.sideLeft - $(window).scrollLeft()) + 'px'
                    });
                } else {
                    $('.side_view').css({
                        top: '0px',
                        left: this.sideLeft + 'px'
                    });
                }
                $('.side_view .option_list').css({
                    maxHeight: ''
                });
            }

            $('.side_view .option_list').css({
                maxHeight: 'calc(100vh - '+(maxSize)+'px)'
            });
        } else {
            var gap = 195 - $(window).scrollTop();
            $('.side_view').css({
                top: '',
                left: '',
            });
            if(gap > 0) {
                $('.side_view .option_list').css({
                    maxHeight: 'calc(100vh - '+(maxSize + gap)+'px)'
                });
            } else {
                $('.side_view .option_list').css({
                    maxHeight: 'calc(100vh - '+(maxSize)+'px)'
                });
            }
            $('.side_view').removeClass('absolute');
            $('.side_view').removeClass('fixed');
        }

        if($(window).scrollTop() > (630)) {
            var standard = 0;
            if($('#buyer_review').length) {
                standard = ($('#buyer_review').offset().top + $('#buyer_review').outerHeight(true));
            } else {
                standard = ($('.footer_comment').offset().top - 60);
            }
            if($(window).scrollTop() > standard) {
                $('.nav_tab').removeClass('fixed');
                $(".nav_tab").addClass('absolute');
                $('.nav_tab').css('top', $('.sale_law').offset().top - 59);
            } else {
                $('.nav_tab').addClass("fixed");
                $(".nav_tab").removeClass('absolute');
                $('.main_detail_image').css('margin-top', '59px');
                $('.nav_tab').css('top', '');

                $('.side_top').addClass('on');
            }
        } else {
            $(".nav_tab").removeClass('absolute');
            $('.nav_tab').removeClass("fixed");
            $('.main_detail_image').css('margin-top', '')
            $('.nav_tab').css('top', '');

            $('.side_top').removeClass('on');
        }

        var trigger= $('.nav_tab').children('a');
        $('.detail_tab_content').each(function(i) {
            var thisTop = $(this).offset().top ;
            if ( $(window).scrollTop() + 80 > thisTop ) {
                trigger.removeClass('on');
                trigger.eq(i).addClass('on');
            }
        });
    },
    transform: function(idx) {
        var tab_content = $('.transform_tab');
        tab_content.each(function() {
            $(this).removeClass('on');
        });
        tab_content.eq(idx).addClass('on');

        if(tab_content.eq(idx).offset()) {
            var trigger= $('.nav_tab').children('a');
            //$(this).addClass("on");
            trigger.not($(this)).removeClass("on");
            trigger.eq(idx).addClass("on");

            var tab_offset = $('.brand_site').children('.visual').eq(0).offset().top + $('.brand_site').children('.visual').eq(0).outerHeight(true);
            $('html, body').stop().animate({
                scrollTop : tab_offset
            }, 450);

        }
    },

    tabClick: function() {
        var trigger= $('.nav_tab').children('a');
        if(!$('.nav_tab').hasClass('transform')) {
            var tab_content = $('.detail_tab_content');
            trigger.each(function(i) {
                $(this).on({
                    click : function() {
                        if(tab_content.eq(i).offset()) {
                            $('html, body').stop().animate({
                                scrollTop : tab_content.eq(i).offset().top - $('.nav_tab').outerHeight(true)
                            }, 450);

                            //$(this).addClass("on");
                            trigger.not($(this)).removeClass("on");

                            return false;
                        }
                    }
                });
            });
        } else {
            var tab_content = $('.transform_tab');
            trigger.each(function(i) {
                $(this).on({
                    click : function() {
                        tab_content.each(function() {
                           $(this).removeClass('on');
                        });
                        tab_content.eq(i).addClass('on');

                        if(tab_content.eq(i).offset()) {
                            //$(this).addClass("on");
                            trigger.not($(this)).removeClass("on");
                            trigger.eq(i).addClass("on");

                            var tab_offset = $('.brand_site').children('.visual').eq(0).offset().top + $('.brand_site').children('.visual').eq(0).outerHeight(true);
                            $('html, body').stop().animate({
                                scrollTop : tab_offset
                            }, 450);

                            return false;
                        }
                    }
                });
            });
        }

    },
    resizeSelector: function() {
        var target = $('ul.option_list').find("li:visible");
        var height = 0;
        target.each(function() {
           height += ($(this).outerHeight(true));
        });

        height += 25;
        $('.option_list').css('height', height + 'px');
    }
}

var buyOptionBox = {
    init: function() {
        if($('.buy_option').length) {
            $('.buy_option').each(function() {
                $('.buy_option').children('button').click(function() {
                   buyOptionBox.click($(this));
                });
            });
        }
    },
    click: function(target) {
        var parent = target.parent();
        if(parent.hasClass('on')) {
            parent.removeClass('on');
            target.next().css('position', 'absolute');
            target.next().animate({
                height: 0
            }, 200, function() {
                target.next().hide();
            });

        } else {
            parent.addClass('on');
            target.next().css('height', 'auto');
            target.next().slideDown(200);
            target.next().css("display", 'inline-block');
        }
    },
    close: function(_target) {
        var target = $(_target);
        var parent = target.parent();
        parent.removeClass('on');
        target.next().css('position', 'absolute');
        target.next().animate({
            height: 0
        }, 200, function() {
            target.next().hide();
        });
    },
    foldBox: function() {
        $('.buy_option ').removeClass('on');
        $('.buy_option ul').css('display', '');
    },
    addOption: function(idx) {
        var target = $('.additional_option_list').children('li').eq(idx);
        var optionName = '';
        target.find('span').each(function() {
            optionName += $(this).text() + '<br>';
        });
        optionName = optionName.substring(0, optionName.length - 4);

        var optionPrice =  target.find('b').text();

        var row = '<li>' +
            '<a href="javascript:void(0)" class="remove_opt" ><img src="https://images.otwojob.com/image/pc/ico/btn_close.png"></a>' +
            '<span class="option_name">'+optionName+'</span>' +
            '<div class="option_size">' +
            '<button class="minus"><img src="/image/pc/btn/btn-m-minus-defualt.png"></button>' +
            '<p>1</p>' +
            '<button class="plus"><img src="/image/pc/btn/btn-m-plus-defualt.png"></button>' +
            '</div>' +
            '<span class="account">'+optionPrice+'</span>' +
            '</li>';

        $('.option_list').append(row);
    },
    removeOption: function(id) {
        $('#' + id).remove();
    }
}

var popupUtil = {
    setYPosition: function() {
        $('.popup_layer').each(function() {
           if($(this).css('display') != 'none') {
               $(this).css({
                   marginTop: '-' + ($(this).outerHeight(true) / 2) + 'px'
               })
           }
        });
    }
}


var ImageFade = {
    init: function() {
        var wrap = $('.image_slider');
        wrap.width($(window).width());
        wrap.height($(window).height());
        if(wrap.children().length > 1) {
            this.fader = wrap.bxSlider({
                auto: false,
                slideWidth: 1900,
                // pause : parseInt(wrap.attr('flicking-timeout')),
                mode: 'fade',
                // captions: true,
                pager: false,
                controls: false
            });
        }
    },
    goToNext: function() {
        this.fader.goToNextSlide();
    },
    goToPrev: function() {
        this.fader.goToPrevSlide();
    }
}


var detailChart = {
    init: function() {
        google.charts.load('current', {'packages':['corechart']});
    },
    drawChart: function(data, target, multiAxis) {
        google.charts.setOnLoadCallback(function() {
            var series = new google.visualization.arrayToDataTable(data);
            var options = {
                chartArea:{left:40,right:10, top:20, bottom: 20,width:"90%",height:"100%"},
                legend:{
                    position: 'bottom',
                    alignment: 'end',
                    textStyle: {color: '#999', fontSize: 12}
                },
                title: '',
                width: 852,
                height: 324,
                seriesType: 'bars',
                vAxes:
                    {
                        0: {
                            minValue:0,
                            textStyle: {fontSize: 12, color: '#999'},
                            gridlines: {color: '#eaeaea', count: 2}
                        }
                    }
                ,
                hAxis: {
                    textStyle: {fontSize: 12, color: '#666'}
                },
                bar: {
                    groupWidth: 48
                },
                animation:{
                    duration: 500,
                    easing: 'out',
                    startup: true
                },
                // series: {1: {type: "bars",targetAxisIndex:1}},
                colors: ['#94bce4', '#d7e2ed']
            };

            if(multiAxis) {
                options.chartArea = {left:40,right:70, top:20, bottom: 20,width:"90%",height:"100%"},
                    options.vAxes = {
                        0: {
                            minValue:0,
                            textStyle: {fontSize: 12, color: '#999'},
                            gridlines: {color: '#eaeaea', count: 2}
                        },
                        1: {
                            minValue:0,
                            textStyle: {fontSize: 12, color: '#999'},
                            gridlines: {color: '#eaeaea', count: 0}
                        }
                    }
                options.series = {1: {type: "bars",targetAxisIndex:1}};
                options.legend= 'none';
                options.bar = {
                    groupWidth: 96
                };
            } else {
                options.legend= 'none'
            }

            var chart = new google.visualization.ComboChart($(target)[0]);
            chart.draw(series, options);
        });
    }
}


var extraMenu = {
    init: function() {
        if($('.ex_menu').length) {
            $('.ex_menu').children('button').click(function() {
                var parent = $(this).parent();
                if(parent.hasClass('on')) {
                    parent.removeClass('on');
                } else {
                    $('.ex_menu').removeClass("on");

                    parent.addClass('on');
                }
            });
        }
    },
    click: function(target) {
        var parent = $(target).parent();
        if(parent.hasClass('on')) {
            parent.removeClass('on');
        } else {
            $('.ex_menu').removeClass("on");

            setTimeout(function() {
                parent.addClass('on');
            }, 50);
        }
    },
    hide: function() {
        $('.ex_menu').removeClass('on');
    }
}

var customSelectBox = {
    init: function() {
        if($(".custom_selectbox").length) {
            $('.custom_selectbox > button').each(function() {
                $(this).click(function() {
                    var parent = $(this).parent();
                    if(!parent.hasClass('on')) {
                        parent.addClass('on');
                    } else {
                        parent.removeClass('on');
                    }
                });
            });
        }
    },
    clear: function() {
      $('.custom_selectbox').find('li').each(function() {
          $(this).removeClass('selected');
      });
    },
    close: function(target) {
        var parent = target.parent();
        parent.removeClass('on');
    },
    changeMode: function() {
        if($('.additional_opts.selectbox').css('display') == 'none') {
            $('.additional_opts.searchbox').hide();
            $('.additional_opts.searchbox').children('input[type=text]').val('');
            $('.additional_opts.selectbox').css('display', 'inline-block');
        } else if($('.additional_opts.searchbox').css('display') == 'none') {
            $('.additional_opts.selectbox').hide();
            $('.additional_opts.searchbox').css('display', 'inline-block');
        }
    }
}

var floatingRightBanner = {
    init: function() {
        if($('.floating_banner_right').length) {
            var targetOffset = $('.floating_banner_right').offset().top;
            if(targetOffset <= ($(window).scrollTop() + 20)) {
                $('.floating_banner_right').addClass('fixed');
            } else {
                $('.floating_banner_right').removeClass('fixed');
            }

            $(window).scroll(function() {
                if(targetOffset <= ($(window).scrollTop() + 20)) {
                    $('.floating_banner_right').addClass('fixed');
                } else {
                    $('.floating_banner_right').removeClass('fixed');
                }
            });
        }
    }
}

var sellerCalendar = {
    init: function(disabledDay, holidayArr, saturdayEnabled, sundayEnabled) {
        if($(".seller_schedule_calendar").length) {
            var minDate = new Date();

            $.datepicker.setDefaults({
                dateFormat: 'yyyy년 mm월',
                prevText: '이전 달',
                nextText: '다음 달',
                monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                dayNames: ['일', '월', '화', '수', '목', '금', '토'],
                dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
                dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
                showMonthAfterYear: true,
                yearSuffix: '년'
            });

            $('.seller_schedule_calendar').css({
                width: '100%',
                height: '262px'
            });
            $('.seller_schedule_calendar').datepicker({
                inline: true,
                altField: '#d',
                minDate: minDate,
                onSelect: function(dateText, inst) { return false; },
                beforeShowDay: function(date){
                    var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
                    var dayOfWeek = date.getDay();

                    if(holidayArr.indexOf(string) > -1) {
                        return [true, "holiday"];
                    }

                    var result = (disabledDay.indexOf(string) == -1);
                    if(!saturdayEnabled) {
                        result = (result && (dayOfWeek != 6));
                    }
                    if(!sundayEnabled) {
                        result = (result && (dayOfWeek != 0));
                    }

                    return [result];
                }
            });
        }
    }
}

var monthCalendar = {
    init: function() {
        if($('.calendar_month').length) {
            var year = (new Date()).getFullYear();

            $('.calendar_month').each(function() {
                $(this).monthpicker( {
                    // month/year format
                    inline: true,
                    pattern: 'yyyy.mm',
                    selectedMonth: null,
                    selectedMonthName: '',
                    selectedYear: year,
                    // localization
                    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                    id: "monthpicker_" + (Math.random() * Math.random()).toString().replace('.', ''),
// display the month/year picker when focused
                    openOnFocus: true,
// an array of disabled months
                    disabledMonths: []
                });
            });
        }
    },
    set: function(targetId) {
        if($('#' + targetId).length) {
            var year = (new Date()).getFullYear();

            $('#' + targetId).each(function() {
                $(this).monthpicker( {
                    // month/year format
                    inline: true,
                    pattern: 'yyyy.mm',
                    selectedMonth: null,
                    selectedMonthName: '',
                    selectedYear: year,
                    // localization
                    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                    id: "monthpicker_" + targetId + "_"+ (Math.random() * Math.random()).toString().replace('.', ''),
// display the month/year picker when focused
                    openOnFocus: true,
// an array of disabled months
                    disabledMonths: []
                });
            });
        } else {
            console.error('cannot find target #' + targetId);
        }
    }
}

var inputEnabledChk = {
    chk: function(target, isReverse) {
        var t = $(target);
        var toggle = $(target).is(':checked');
        if(isReverse) {toggle = !toggle;}

        var id = t.attr('id');
        var toggleTarget = $('div[data-target="'+id+'"]');

        toggleTarget.find('input').each(function() {
            if(toggle) {
                $(this).prop('disabled', false);
            } else {
                $(this).val('');
                $(this).prop("checked", false); /* by ID */
                $(this).prop('disabled', true);
            }
        });

        toggleTarget.find('.selectbox').each(function() {
            if(toggle) {
                $(this).children('select').prop('disabled', false);;
                $(this).removeClass('disabled');
            } else {
                $(this).children('select').each(function() {
                    var id = $(this).attr('id');
                    $("#" + id + " option:eq(0)").attr('selected', 'selected');
                    var text = $("#" + id + " option:eq(0)").text();
                    $(this).siblings('label').html(text);
                });
                $(this).children('select').prop('disabled', true);;
                $(this).addClass('disabled');
            }
        });

    }
}

var portFolioSlider = {
    init: function() {
        if($('.portfolio_list').length) {
            $('.portfolio_list').slick({
                autoplay: false, //자동슬라이드 x
                slidesToScroll: 1,
                slidesToShow: 6,
                arrows: true,
                fade: false,
                vertical: true,
                prevArrow: $('.slick_prev'),
                nextArrow: $('.slick_next')
            });
        }
    }
}

var lastSubOption = {
    init: function() {
        var optionSize = $('.last_etc').find('option').length;
        var targetId = $('.last_etc').find('select').attr('id');
        var subText = $('#' + targetId + '_sub_option');
        if((optionSize - 1) == $('.last_etc option').index($('.last_etc option:selected'))) {
            subText.show();
        } else {
            subText.hide();
        }

        $('.last_etc').change(function() {
            if((optionSize - 1) == $('.last_etc option').index($('.last_etc option:selected'))) {
                subText.show();
            } else {
                subText.hide();
            }
        });
    }
}


var profileSlider = {
    init: function() {
        if($('.profile_list.type01, .table_list').length) {
            var options = {
                draggable: true,
                infinite: true,
                autoplay: false, //자동슬라이드 x,
                slidesToScroll: 1,
                arrows: true,
                fade: false,
                prevArrow: '.slick-prev.type01, .page_prev', //prev 버튼
                nextArrow: '.slick-next.type01, .page_next', //netx 버튼,
                variableWidth: true
            };
            if($('.table_list').length) {
                if($('.table_list li').length < 6) {
                    $('.slide_tab1 > button').hide();
                    $('.slide_tab1').addClass('full');
                    var width = 1200 / $('.table_list li').length;
                    $('.table_list li').css({width: width+ 'px'});
                    return;
                } else {
                    options.infinite = false;
                    options.draggable = false;
                    options.slidesToShow = 5;
                }
            }
            $('.profile_list.type01, .table_list').slick(options);
        }
        if($('.profile_list.type02').length) {
            $('.profile_list.type02').slick({
                autoplay: false, //자동슬라이드 x
                slidesToScroll: 1,
                arrows: true,
                fade: false,
                prevArrow: '.slick-prev.type02', //prev 버튼
                nextArrow: '.slick-next.type02', //netx 버튼,
            });
        }
    }
}

var floatingSharebox = {
    init: function() {
        if($('.floating_share_box').length) {
            floatingSharebox.setPosition();
            $(window).scroll(function() {
                floatingSharebox.setPosition();
            });
        }
    },
    setPosition: function() {
        var target = $('.floating_share_box');
        var header = $("header").height();
        var firstBanner = $('.brand_site').children().eq(0);
        if($('.nav_tab').length) {
            if(($('.nav_tab').offset().top) > ($(window).scrollTop() + 460)) {
                var top = $('.brand_site').children().eq(0).outerHeight(true) + 70;
                target.removeClass('fixed');
                target.addClass('top');
                target.css('top', top + 'px');
            } else{
                target.removeClass('top');
                target.addClass('fixed');
                target.css('top', '');
            }
        } else {
            target.removeClass('top');
            target.addClass('fixed');
            target.css('top', '');
        }

    }
}

function printDoc() {
    var btns = $('.btn_wrap');
    btns.hide();
    $('.popup_footer').css('margin-top', '30px');

    window.print();

    btns.css('display', 'inline-block');
    $('.popup_footer').css('margin-top', '');
}

function getImageConvertBase64Str(targetId, func) {
    html2canvas(document.querySelector("#" + targetId)).then(function(canvas) {
        func(canvas.toDataURL());
    });
}

function makePdf(targetId, filename) {


    html2canvas(document.querySelector("#" + targetId),{ letterRendering: 1 }).then(function(canvas) {

        // jsPDF 객체 생성 생성자에는 가로, 세로 설정, 페이지 크기 등등 설정할 수 있다. 자세한건 문서 참고. // 현재 파라미터는 기본값이다 굳이 쓰지 않아도 되는데 저것이 기본값이라고 보여준다.
        var doc = new jsPDF({
            unit: 'px',
            format: 'a4'
        });

        var width = doc.internal.pageSize.getWidth();
        var height = doc.internal.pageSize.getHeight();

        // html2canvas의 canvas를 png로 바꿔준다.
        var imgData = canvas.toDataURL('image/png'); //Image 코드로 뽑아내기
        var fixedHeight = ($('#'+ targetId).height() * width) / $('#'+ targetId).width();

        // image 추가
        doc.addImage(imgData, 'PNG', 0, 0, width, height);


        if(filename == undefined) {
            var date = new Date();
            var fullDateStr = (date.getFullYear()).toString() + (UTIL.pad((date.getMonth() + 1), 2)).toString() + (UTIL.pad(date.getDate(), 2)).toString() + (UTIL.pad(date.getHours(), 2)).toString() + (UTIL.pad(date.getMinutes(), 2)).toString();

            filename = '오투잡_판매활동확인서_' + fullDateStr;
        }
        //오투잡_판매활동확인서_201902151112

        // pdf로 저장
        doc.save(filename + '.pdf');

        // $('#activity_confirmation').css('border', '');
    });
}

function getMailContent(targetId, func) {
    html2canvas(document.querySelector("#" + targetId)).then(function(canvas) {
        var base64 = canvas.toDataURL();   //Image 코드로 뽑아내기
        func(base64);
    });
}

var UTIL = {
    pad : function(n, width) {
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
    },
    goToTop: function() {
        $('html, body').animate({'scrollTop' : 0});
    }
}

var commmLayer = {
    show: function(name) {
        var overlay = '<div id="layer_bg"></div>';
        $('body').prepend(overlay);

        $('html').css('overflow-y', 'hidden');

        var e = $('.' + name);
        var ly_w = e.outerWidth(true);
        var ly_h = e.outerHeight(true);
        // e.css({"margin-left":(-(ly_w/2)) + 'px', "margin-top":(-(ly_h/2))  + 'px'}).show();
        e.show();
        // $('.' + name).show();
    },
    close: function(name) {
        $('html').css('overflow-y', 'auto');
        $('.' + name).hide();
        $('#layer_bg').remove();
    },
    tabMove: function(idx, target) {
        $('.msg_reservation .cont_area').hide();
        $('.msg_reservation button').removeClass('selected');
        $(target).addClass('selected');
        $('.msg_reservation .layer_box > .cont_area').eq(idx).css('display', 'block');
        $('.msg_reservation .layer_box > .cont_area').eq(idx).children().show();
    }
}

var slideTab = {
    init: function() {
        if($(".slide_tab").length) {
            var tab = $('.slide_tab');
            this.flicking0 = new eg.Flicking(".slide_tab", {
                circular: true,
                defaultIndex: 0
            });
        }
    },
    next: function() {
        slideTab.flicking0.next();
    },
    prev: function() {
        slideTab.flicking0.prev();
    }
}

var brandBlock = {
    init: function() {
        if($('.main_brand_set').length) {
            $('.main_brand_set').each(function() {
                var imageTarget = $(this).find('.logo_img').children('img');
                if(imageTarget.width() < 1 || imageTarget.height() < 1) {
                    imageTarget.css({
                        transform: 'translate(-50%, -50%)'
                    });
                } else {
                    imageTarget.css({
                        marginTop: '-'+ (imageTarget.height()/2) + 'px' ,
                        marginLeft: '-' + (imageTarget.width()/2) + 'px'
                    });
                }

                imageTarget.show();
            });
        }
    }
}

var protectionBlock = {
    tab : function(idx) {
        var target = $('.faq_list').eq(idx);

        $('.left_tab').children('button').removeClass('selected');
        $('.left_tab').children('button').eq(idx).addClass('selected');

        $('.faq_list').each(function() {
            $(this).removeClass('on');
        });
        target.addClass('on');
    }
}

var profileSet = {
    init: function() {
        if($('.career_list').length) {
            var height = $('.career_list').outerHeight() + 110;
            $('.view_profile').css('min-height', height + 'px');
        }
    }
}

var detailImageToggle = {
    click: function(_this) {
        var target = $(_this);
        var parent = target.parent();
        if(target.hasClass('on')) {
            target.removeClass("on");
            parent.css({
                height: 'auto',
                background: 'none'
            });
        } else {
            target.addClass("on");
            parent.css({
                height: '',
                background: ''
            });
        }

        var tabPosition = $(".nav_tab").offset().top;
        detailContentUtil.tabPosition = tabPosition;
    }
}

var paymentTooltip = {
    init: function() {
        var target = $('.view_review');
        if(target.length) {
            var markOn = false;
            target.find('.item').each(function() {
                var _this = $(this);
                var row = '';
                var gap = '';
                if(!$('.detail_content').length) {
                    gap = 'data-tooltip-gap="120"';
                }

                if(_this.hasClass('payment')) {
                    row = '<span class="payment_mark tool-tip" data-tooltip="tooltip_payment" data-tooltip-width="197" '+gap+'></span>';
                } else if(_this.hasClass('direct')) {
                    row = '<span class="direct_mark tool-tip" data-tooltip="tooltip_direct" data-tooltip-width="197" '+gap+'></span>';
                }

                if(row != '') {
                    markOn = true;
                }

                _this.find('.assessment_list').append(row);
            });

            if(markOn) {
                paymentTooltip.hover(target);
            }
        }
    },
    profile: function() {
        var target = $('.body_inform .review_wrap');
        if(target.length) {
            var markOn = false;
            target.find('.item').each(function() {
                var _this = $(this);
                var row = '';
                var gap = '';
                if(!$('.detail_content').length) {
                    gap = 'data-tooltip-gap="120"';
                }

                if(_this.hasClass('payment')) {
                    row = '<span class="mark tool-tip" data-tooltip="tooltip_payment" data-tooltip-width="197" '+gap+'></span>';
                } else if(_this.hasClass('direct')) {
                    row = '<span class="mark tool-tip" data-tooltip="tooltip_direct" data-tooltip-width="197" '+gap+'></span>';
                }

                if(row != '') {
                    markOn = true;
                }

                _this.append(row);
            });

            if(markOn) {
                paymentTooltip.hover(target);
            }
        }
    },
    hover: function(target) {
        target.find('.tool-tip').mouseenter(function(e){
            var offset = $(this).offset();
            var myWidth =  $(this).width();
            var myHeight =  $(this).height();
            var targetId = $(this).attr('data-tooltip');
            var targetWidth = $(this).attr('data-tooltip-width');
            var targetGap = $(this).attr('data-tooltip-gap');
            var PosX = offset.left - (targetWidth/2 - myWidth/2);
            var PosY = offset.top -90;

            var marginTop = '';
            if(targetGap) {
                marginTop = targetGap + 'px';
            }

            $('#'+ targetId).css({
                'width' : targetWidth,
                'top'       : PosY + 'px',
                'left'      : PosX + 'px',
                'position'   : 'absolute',
                'z-index'   : '199',
                'margin-top': marginTop
            }).show()

            if (PosX < 0) {
                $('#' + targetId).css('left', '0px');
                $('#' + targetId + ' .tooltip_arr').css('left', offset.left + 5);
            }else{
                $('#' + targetId + ' .tooltip_arr').css('left', '50%');
            }
        });

        target.find('.tool-tip').mouseleave(function(){
            $('.common_tooltip').css('z-index', '0').hide();
        });
    }
}

var gradientAnimation = {
    rollBg: function() {
        if($(".advertisement_manager").length) {
            gradientAnimation.idx = 1;
            var colorList = ['#ffd77a', '#455dff', '#ff8181'];
            var color = 'radial-gradient(circle at 1% 0%, #14c5d4 20%, '+colorList[gradientAnimation.idx]+')';
            $('.background_board.hidden').css('background', color);
            $('.background_board').toggleClass('hidden');

            setInterval(function() {
                gradientAnimation.idx = gradientAnimation.idx + 1;
                if(colorList.length <= gradientAnimation.idx) {
                    gradientAnimation.idx = 0;
                }
                var color = 'radial-gradient(circle at 1% 0%, #14c5d4 20%, '+colorList[gradientAnimation.idx]+')';
                $('.background_board.hidden').css('background', color);
                $('.background_board').toggleClass('hidden');
            }, 5000);
        }
    }
}

function moveToElement(target, gap) {
    var offsetTop = $(target).offset().top;
    if(gap) {
        offsetTop = offsetTop + gap;
    }

    $(window).scrollTop(offsetTop);
}

function toggleDataTable(elem, btn) {
    $('.two_button button').removeClass('selected');
    $(btn).addClass('selected');

    var target = $('.' + elem);
    $(".daily_table, .month_table").hide();

    target.show();
}