﻿var T,baidu=T=baidu||{version:"1.5.2"};baidu.guid="$BAIDU$";baidu.$$=window[baidu.guid]=window[baidu.guid]||{global:{}};baidu.dom=baidu.dom||{};baidu.dom.g=function(b){if(!b){return null}if("string"==typeof b||b instanceof String){return document.getElementById(b)}else{if(b.nodeName&&(b.nodeType==1||b.nodeType==9)){return b}}return null};baidu.g=baidu.G=baidu.dom.g;baidu.url=baidu.url||{};baidu.string=baidu.string||{};baidu.string.escapeReg=function(b){return String(b).replace(new RegExp("([.*+?^=!:\x24{}()|[\\]/\\\\])","g"),"\\\x241")};(function(){var b=new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)","g");baidu.string.trim=function(a){return String(a).replace(b,"")}})();baidu.url.getQueryValue=function(e,h){var g=new RegExp("(^|&|\\?|#)"+baidu.string.escapeReg(h)+"=([^&#]*)(&|\x24|#)","");var f=e.match(g);if(f){return f[2]}return null};baidu.trim=baidu.string.trim;baidu.dom.addClass=function(k,j){k=baidu.dom.g(k);var h=j.split(/\s+/),i=k.className,l=" "+i+" ",m=0,n=h.length;for(;m<n;m++){if(l.indexOf(" "+h[m]+" ")<0){i+=(i?" ":"")+h[m]}}k.className=i;return k};baidu.addClass=baidu.dom.addClass;baidu.dom.removeClass=function(m,l){m=baidu.dom.g(m);var o=m.className.split(/\s+/),k=l.split(/\s+/),i,j=k.length,p,n=0;for(;n<j;++n){for(p=0,i=o.length;p<i;++p){if(o[p]==k[n]){o.splice(p,1);break}}}m.className=o.join(" ");return m};baidu.removeClass=baidu.dom.removeClass;baidu.event=baidu.event||{};baidu.event._listeners=baidu.event._listeners||[];baidu.lang=baidu.lang||{};baidu.lang.isString=function(b){return"[object String]"==Object.prototype.toString.call(b)};baidu.isString=baidu.lang.isString;baidu.dom._g=function(b){if(baidu.lang.isString(b)){return document.getElementById(b)}return b};baidu._g=baidu.dom._g;baidu.event.un=function(p,m,q){p=baidu.dom._g(p);m=m.replace(/^on/i,"").toLowerCase();var j=baidu.event._listeners,o=j.length,n=!q,k,l,r;while(o--){k=j[o];if(k[1]===m&&k[0]===p&&(n||k[2]===q)){l=k[4];r=k[3];if(p.removeEventListener){p.removeEventListener(l,r,false)}else{if(p.detachEvent){p.detachEvent("on"+l,r)}}j.splice(o,1)}}return p};baidu.un=baidu.event.un;window[baidu.guid]._instances=window[baidu.guid]._instances||{};baidu.lang.instance=function(b){return window[baidu.guid]._instances[b]||null};baidu.browser=baidu.browser||{};baidu.browser.ie=baidu.ie=/msie (\d+\.\d+)/i.test(navigator.userAgent)?(document.documentMode||+RegExp["\x241"]):undefined;baidu.object=baidu.object||{};baidu.extend=baidu.object.extend=function(f,e){for(var d in e){if(e.hasOwnProperty(d)){f[d]=e[d]}}return f};baidu.object.values=function(g){var f=[],h=0,e;for(e in g){if(g.hasOwnProperty(e)){f[h++]=g[e]}}return f};baidu.lang.isNumber=function(b){return"[object Number]"==Object.prototype.toString.call(b)&&isFinite(b)};(function(){var u=baidu.browser,n={keydown:1,keyup:1,keypress:1},x={click:1,dblclick:1,mousedown:1,mousemove:1,mouseup:1,mouseover:1,mouseout:1},q={abort:1,blur:1,change:1,error:1,focus:1,load:u.ie?0:1,reset:1,resize:1,scroll:1,select:1,submit:1,unload:u.ie?0:1},s={scroll:1,resize:1,reset:1,submit:1,change:1,select:1,error:1,abort:1},o={KeyEvents:["bubbles","cancelable","view","ctrlKey","altKey","shiftKey","metaKey","keyCode","charCode"],MouseEvents:["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget"],HTMLEvents:["bubbles","cancelable"],UIEvents:["bubbles","cancelable","view","detail"],Events:["bubbles","cancelable"]};baidu.object.extend(s,n);baidu.object.extend(s,x);function v(b,d){var e=0,a=b.length,c={};for(;e<a;e++){c[b[e]]=d[b[e]];delete d[b[e]]}return c}function t(d,e,a){a=baidu.object.extend({},a);var c=baidu.object.values(v(o[e],a)),b=document.createEvent(e);c.unshift(d);if("KeyEvents"==e){b.initKeyEvent.apply(b,c)}else{if("MouseEvents"==e){b.initMouseEvent.apply(b,c)}else{if("UIEvents"==e){b.initUIEvent.apply(b,c)}else{b.initEvent.apply(b,c)}}}baidu.object.extend(b,a);return b}function w(a){var b;if(document.createEventObject){b=document.createEventObject();baidu.object.extend(b,a)}return b}function r(c,a){a=v(o.KeyEvents,a);var b;if(document.createEvent){try{b=t(c,"KeyEvents",a)}catch(d){try{b=t(c,"Events",a)}catch(e){b=t(c,"UIEvents",a)}}}else{a.keyCode=a.charCode>0?a.charCode:a.keyCode;b=w(a)}return b}function m(c,a){a=v(o.MouseEvents,a);var b;if(document.createEvent){b=t(c,"MouseEvents",a);if(a.relatedTarget&&!b.relatedTarget){if("mouseout"==c.toLowerCase()){b.toElement=a.relatedTarget}else{if("mouseover"==c.toLowerCase()){b.fromElement=a.relatedTarget}}}}else{a.button=a.button==0?1:a.button==1?4:baidu.lang.isNumber(a.button)?a.button:0;b=w(a)}return b}function p(d,a){a.bubbles=s.hasOwnProperty(d);a=v(o.HTMLEvents,a);var b;if(document.createEvent){try{b=t(d,"HTMLEvents",a)}catch(c){try{b=t(d,"UIEvents",a)}catch(e){b=t(d,"Events",a)}}}else{b=w(a)}return b}baidu.event.fire=function(d,c,a){var b;c=c.replace(/^on/i,"");d=baidu.dom._g(d);a=baidu.object.extend({bubbles:true,cancelable:true,view:window,detail:1,screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:false,altKey:false,shiftKey:false,metaKey:false,keyCode:0,charCode:0,button:0,relatedTarget:null},a);if(n[c]){b=r(c,a)}else{if(x[c]){b=m(c,a)}else{if(q[c]){b=p(c,a)}else{throw (new Error(c+" is not support!"))}}}if(b){if(d.dispatchEvent){d.dispatchEvent(b)}else{if(d.fireEvent){d.fireEvent("on"+c,b)}}}}})();baidu.array=baidu.array||{};baidu.each=baidu.array.forEach=baidu.array.each=function(j,l,h){var m,k,n,i=j.length;if("function"==typeof l){for(n=0;n<i;n++){k=j[n];m=l.call(h||j,k,n);if(m===false){break}}}return j};(function(){var F=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,K="sizcache"+(Math.random()+"").replace(".",""),E=0,B=Object.prototype.toString,L=false,M=true,C=/\\/g,y=/\r\n/g,e=/\W/;[0,0].sort(function(){M=false;return 0});var O=function(c,f,r,q){r=r||[];f=f||document;var o=f;if(f.nodeType!==1&&f.nodeType!==9){return[]}if(!c||typeof c!=="string"){return r}var k,m,g,l,n,i,j,a,d=true,h=O.isXML(f),b=[],p=c;do{F.exec("");k=F.exec(p);if(k){p=k[3];b.push(k[1]);if(k[2]){l=k[3];break}}}while(k);if(b.length>1&&J.exec(c)){if(b.length===2&&I.relative[b[0]]){m=A(b[0]+b[1],f,q)}else{m=I.relative[b[0]]?[f]:O(b.shift(),f);while(b.length){c=b.shift();if(I.relative[c]){c+=b.shift()}m=A(c,m,q)}}}else{if(!q&&b.length>1&&f.nodeType===9&&!h&&I.match.ID.test(b[0])&&!I.match.ID.test(b[b.length-1])){n=O.find(b.shift(),f,h);f=n.expr?O.filter(n.expr,n.set)[0]:n.set[0]}if(f){n=q?{expr:b.pop(),set:H(q)}:O.find(b.pop(),b.length===1&&(b[0]==="~"||b[0]==="+")&&f.parentNode?f.parentNode:f,h);m=n.expr?O.filter(n.expr,n.set):n.set;if(b.length>0){g=H(m)}else{d=false}while(b.length){i=b.pop();j=i;if(!I.relative[i]){i=""}else{j=b.pop()}if(j==null){j=f}I.relative[i](g,j,h)}}else{g=b=[]}}if(!g){g=m}if(!g){O.error(i||c)}if(B.call(g)==="[object Array]"){if(!d){r.push.apply(r,g)}else{if(f&&f.nodeType===1){for(a=0;g[a]!=null;a++){if(g[a]&&(g[a]===true||g[a].nodeType===1&&O.contains(f,g[a]))){r.push(m[a])}}}else{for(a=0;g[a]!=null;a++){if(g[a]&&g[a].nodeType===1){r.push(m[a])}}}}}else{H(g,r)}if(l){O(l,o,r,q);O.uniqueSort(r)}return r};O.uniqueSort=function(a){if(D){L=M;a.sort(D);if(L){for(var b=1;b<a.length;b++){if(a[b]===a[b-1]){a.splice(b--,1)}}}}return a};O.matches=function(b,a){return O(b,null,null,a)};O.matchesSelector=function(b,a){return O(a,null,null,[b]).length>0};O.find=function(a,f,j){var b,h,d,g,c,i;if(!a){return[]}for(h=0,d=I.order.length;h<d;h++){c=I.order[h];if((g=I.leftMatch[c].exec(a))){i=g[1];g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(C,"");b=I.find[c](g,f,j);if(b!=null){a=a.replace(I.match[c],"");break}}}}if(!b){b=typeof f.getElementsByTagName!=="undefined"?f.getElementsByTagName("*"):[]}return{set:b,expr:a}};O.filter=function(o,p,k,d){var b,f,q,g,m,l,i,c,n,j=o,h=[],r=p,a=p&&p[0]&&O.isXML(p[0]);while(o&&p.length){for(q in I.filter){if((b=I.leftMatch[q].exec(o))!=null&&b[2]){l=I.filter[q];i=b[1];f=false;b.splice(1,1);if(i.substr(i.length-1)==="\\"){continue}if(r===h){h=[]}if(I.preFilter[q]){b=I.preFilter[q](b,r,k,h,d,a);if(!b){f=g=true}else{if(b===true){continue}}}if(b){for(c=0;(m=r[c])!=null;c++){if(m){g=l(m,b,c,r);n=d^g;if(k&&g!=null){if(n){f=true}else{r[c]=false}}else{if(n){h.push(m);f=true}}}}}if(g!==undefined){if(!k){r=h}o=o.replace(I.match[q],"");if(!f){return[]}break}}}if(o===j){if(f==null){O.error(o)}else{break}}j=o}return r};O.error=function(a){throw"Syntax error, unrecognized expression: "+a};var Q=O.getText=function(b){var f,d,c=b.nodeType,a="";if(c){if(c===1){if(typeof b.textContent==="string"){return b.textContent}else{if(typeof b.innerText==="string"){return b.innerText.replace(y,"")}else{for(b=b.firstChild;b;b=b.nextSibling){a+=Q(b)}}}}else{if(c===3||c===4){return b.nodeValue}}}else{for(f=0;(d=b[f]);f++){if(d.nodeType!==8){a+=Q(d)}}}return a};var I=O.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(g,b){var f=typeof b==="string",i=f&&!e.test(b),d=f&&!i;if(i){b=b.toLowerCase()}for(var h=0,c=g.length,a;h<c;h++){if((a=g[h])){while((a=a.previousSibling)&&a.nodeType!==1){}g[h]=d||a&&a.nodeName.toLowerCase()===b?a||false:a===b}}if(d){O.filter(b,g,true)}},">":function(f,b){var h,a=typeof b==="string",g=0,c=f.length;if(a&&!e.test(b)){b=b.toLowerCase();for(;g<c;g++){h=f[g];if(h){var d=h.parentNode;f[g]=d.nodeName.toLowerCase()===b?d:false}}}else{for(;g<c;g++){h=f[g];if(h){f[g]=a?h.parentNode:h.parentNode===b}}if(a){O.filter(b,f,true)}}},"":function(d,b,g){var a,f=E++,c=z;if(typeof b==="string"&&!e.test(b)){b=b.toLowerCase();a=b;c=R}c("parentNode",b,f,d,a,g)},"~":function(d,b,g){var a,f=E++,c=z;if(typeof b==="string"&&!e.test(b)){b=b.toLowerCase();a=b;c=R}c("previousSibling",b,f,d,a,g)}},find:{ID:function(a,d,c){if(typeof d.getElementById!=="undefined"&&!c){var b=d.getElementById(a[1]);return b&&b.parentNode?[b]:[]}},NAME:function(g,f){if(typeof f.getElementsByName!=="undefined"){var b=[],a=f.getElementsByName(g[1]);for(var d=0,c=a.length;d<c;d++){if(a[d].getAttribute("name")===g[1]){b.push(a[d])}}return b.length===0?null:b}},TAG:function(b,a){if(typeof a.getElementsByTagName!=="undefined"){return a.getElementsByTagName(b[1])}}},preFilter:{CLASS:function(g,b,i,d,f,c){g=" "+g[1].replace(C,"")+" ";if(c){return g}for(var a=0,h;(h=b[a])!=null;a++){if(h){if(f^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(g)>=0)){if(!i){d.push(h)}}else{if(i){b[a]=false}}}}return false},ID:function(a){return a[1].replace(C,"")},TAG:function(a,b){return a[1].replace(C,"").toLowerCase()},CHILD:function(b){if(b[1]==="nth"){if(!b[2]){O.error(b[0])}b[2]=b[2].replace(/^\+|\s*/g,"");var a=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(b[2]==="even"&&"2n"||b[2]==="odd"&&"2n+1"||!/\D/.test(b[2])&&"0n+"+b[2]||b[2]);b[2]=(a[1]+(a[2]||1))-0;b[3]=a[3]-0}else{if(b[2]){O.error(b[0])}}b[0]=E++;return b},ATTR:function(b,a,h,c,g,f){var d=b[1]=b[1].replace(C,"");if(!f&&I.attrMap[d]){b[1]=I.attrMap[d]}b[4]=(b[4]||b[5]||"").replace(C,"");if(b[2]==="~="){b[4]=" "+b[4]+" "}return b},PSEUDO:function(b,a,g,c,f){if(b[1]==="not"){if((F.exec(b[3])||"").length>1||/^\w/.test(b[3])){b[3]=O(b[3],null,null,a)}else{var d=O.filter(b[3],a,g,true^f);if(!g){c.push.apply(c,d)}return false}}else{if(I.match.POS.test(b[0])||I.match.CHILD.test(b[0])){return true}}return b},POS:function(a){a.unshift(true);return a}},filters:{enabled:function(a){return a.disabled===false&&a.type!=="hidden"},disabled:function(a){return a.disabled===true},checked:function(a){return a.checked===true},selected:function(a){if(a.parentNode){a.parentNode.selectedIndex}return a.selected===true},parent:function(a){return !!a.firstChild},empty:function(a){return !a.firstChild},has:function(c,a,b){return !!O(b[3],c).length},header:function(a){return(/h\d/i).test(a.nodeName)},text:function(c){var b=c.getAttribute("type"),a=c.type;return c.nodeName.toLowerCase()==="input"&&"text"===a&&(b===a||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return(/input|select|textarea|button/i).test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(d,a,b,c){return a===c.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(c,a,b){return a<b[3]-0},gt:function(c,a,b){return a>b[3]-0},nth:function(c,a,b){return b[3]-0===a},eq:function(c,a,b){return b[3]-0===a}},filter:{PSEUDO:function(h,a,b,j){var f=a[1],i=I.filters[f];if(i){return i(h,b,a,j)}else{if(f==="contains"){return(h.textContent||h.innerText||Q([h])||"").indexOf(a[3])>=0}else{if(f==="not"){var g=a[3];for(var c=0,d=g.length;c<d;c++){if(g[c]===h){return false}}return true}else{O.error(f)}}}},CHILD:function(h,d){var g,j,b,k,f,c,l,a=d[1],i=h;switch(a){case"only":case"first":while((i=i.previousSibling)){if(i.nodeType===1){return false}}if(a==="first"){return true}i=h;case"last":while((i=i.nextSibling)){if(i.nodeType===1){return false}}return true;case"nth":g=d[2];j=d[3];if(g===1&&j===0){return true}b=d[0];k=h.parentNode;if(k&&(k[K]!==b||!h.nodeIndex)){c=0;for(i=k.firstChild;i;i=i.nextSibling){if(i.nodeType===1){i.nodeIndex=++c}}k[K]=b}l=h.nodeIndex-j;if(g===0){return l===0}else{return(l%g===0&&l/g>=0)}}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return(b==="*"&&a.nodeType===1)||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(h,f){var g=f[1],c=O.attr?O.attr(h,g):I.attrHandle[g]?I.attrHandle[g](h):h[g]!=null?h[g]:h.getAttribute(g),d=c+"",b=f[2],a=f[4];return c==null?b==="!=":!b&&O.attr?c!=null:b==="="?d===a:b==="*="?d.indexOf(a)>=0:b==="~="?(" "+d+" ").indexOf(a)>=0:!a?d&&c!==false:b==="!="?d!==a:b==="^="?d.indexOf(a)===0:b==="$="?d.substr(d.length-a.length)===a:b==="|="?d===a||d.substr(0,a.length+1)===a+"-":false},POS:function(b,a,g,f){var c=a[2],d=I.setFilters[c];if(d){return d(b,g,a,f)}}}};var J=I.match.POS,P=function(a,b){return"\\"+(b-0+1)};for(var N in I.match){I.match[N]=new RegExp(I.match[N].source+(/(?![^\[]*\])(?![^\(]*\))/.source));I.leftMatch[N]=new RegExp(/(^(?:.|\r|\n)*?)/.source+I.match[N].source.replace(/\\(\d+)/g,P))}var H=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType}catch(x){H=function(b,d){var f=0,a=d||[];if(B.call(b)==="[object Array]"){Array.prototype.push.apply(a,b)}else{if(typeof b.length==="number"){for(var c=b.length;f<c;f++){a.push(b[f])}}else{for(;b[f];f++){a.push(b[f])}}}return a}}var D,G;if(document.documentElement.compareDocumentPosition){D=function(a,b){if(a===b){L=true;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1}return a.compareDocumentPosition(b)&4?-1:1}}else{D=function(k,a){if(k===a){L=true;return 0}else{if(k.sourceIndex&&a.sourceIndex){return k.sourceIndex-a.sourceIndex}}var c,i,h=[],f=[],d=k.parentNode,b=a.parentNode,j=d;if(d===b){return G(k,a)}else{if(!d){return -1}else{if(!b){return 1}}}while(j){h.unshift(j);j=j.parentNode}j=b;while(j){f.unshift(j);j=j.parentNode}c=h.length;i=f.length;for(var g=0;g<c&&g<i;g++){if(h[g]!==f[g]){return G(h[g],f[g])}}return g===c?G(k,f[g],-1):G(h[g],a,1)};G=function(a,b,d){if(a===b){return d}var c=a.nextSibling;while(c){if(c===b){return -1}c=c.nextSibling}return 1}}(function(){var a=document.createElement("div"),c="script"+(new Date()).getTime(),b=document.documentElement;a.innerHTML="<a name='"+c+"'/>";b.insertBefore(a,b.firstChild);if(document.getElementById(c)){I.find.ID=function(d,h,g){if(typeof h.getElementById!=="undefined"&&!g){var f=h.getElementById(d[1]);return f?f.id===d[1]||typeof f.getAttributeNode!=="undefined"&&f.getAttributeNode("id").nodeValue===d[1]?[f]:undefined:[]}};I.filter.ID=function(g,f){var d=typeof g.getAttributeNode!=="undefined"&&g.getAttributeNode("id");return g.nodeType===1&&d&&d.nodeValue===f}}b.removeChild(a);b=a=null})();(function(){var a=document.createElement("div");a.appendChild(document.createComment(""));if(a.getElementsByTagName("*").length>0){I.find.TAG=function(c,g){var b=g.getElementsByTagName(c[1]);if(c[1]==="*"){var d=[];for(var f=0;b[f];f++){if(b[f].nodeType===1){d.push(b[f])}}b=d}return b}}a.innerHTML="<a href='#'></a>";if(a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(b){return b.getAttribute("href",2)}}a=null})();if(document.querySelectorAll){(function(){var b=O,c=document.createElement("div"),d="__sizzle__";c.innerHTML="<p class='TEST'></p>";if(c.querySelectorAll&&c.querySelectorAll(".TEST").length===0){return}O=function(l,h,q,m){h=h||document;if(!m&&!O.isXML(h)){var n=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(l);if(n&&(h.nodeType===1||h.nodeType===9)){if(n[1]){return H(h.getElementsByTagName(l),q)}else{if(n[2]&&I.find.CLASS&&h.getElementsByClassName){return H(h.getElementsByClassName(n[2]),q)}}}if(h.nodeType===9){if(l==="body"&&h.body){return H([h.body],q)}else{if(n&&n[3]){var r=h.getElementById(n[3]);if(r&&r.parentNode){if(r.id===n[3]){return H([r],q)}}else{return H([],q)}}}try{return H(h.querySelectorAll(l),q)}catch(p){}}else{if(h.nodeType===1&&h.nodeName.toLowerCase()!=="object"){var g=h,f=h.getAttribute("id"),i=f||d,j=h.parentNode,k=/^\s*[+~]/.test(l);if(!f){h.setAttribute("id",i)}else{i=i.replace(/'/g,"\\$&")}if(k&&j){h=h.parentNode}try{if(!k||j){return H(h.querySelectorAll("[id='"+i+"'] "+l),q)}}catch(o){}finally{if(!f){g.removeAttribute("id")}}}}}return b(l,h,q,m)};for(var a in b){O[a]=b[a]}c=null})()}(function(){var c=document.documentElement,f=c.matchesSelector||c.mozMatchesSelector||c.webkitMatchesSelector||c.msMatchesSelector;if(f){var b=!f.call(document.createElement("div"),"div"),a=false;try{f.call(document.documentElement,"[test!='']:sizzle")}catch(d){a=true}O.matchesSelector=function(i,g){g=g.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!O.isXML(i)){try{if(a||!I.match.PSEUDO.test(g)&&!/!=/.test(g)){var j=f.call(i,g);if(j||!b||i.document&&i.document.nodeType!==11){return j}}}catch(h){}}return O(g,null,null,[i]).length>0}}})();(function(){var a=document.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!a.getElementsByClassName||a.getElementsByClassName("e").length===0){return}a.lastChild.className="e";if(a.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(b,d,c){if(typeof d.getElementsByClassName!=="undefined"&&!c){return d.getElementsByClassName(b[1])}};a=null})();function R(i,b,c,j,a,k){for(var g=0,h=j.length;g<h;g++){var f=j[g];if(f){var d=false;f=f[i];while(f){if(f[K]===c){d=j[f.sizset];break}if(f.nodeType===1&&!k){f[K]=c;f.sizset=g}if(f.nodeName.toLowerCase()===b){d=f;break}f=f[i]}j[g]=d}}}function z(i,b,c,j,a,k){for(var g=0,h=j.length;g<h;g++){var f=j[g];if(f){var d=false;f=f[i];while(f){if(f[K]===c){d=j[f.sizset];break}if(f.nodeType===1){if(!k){f[K]=c;f.sizset=g}if(typeof b!=="string"){if(f===b){d=true;break}}else{if(O.filter(b,[f]).length>0){d=f;break}}}f=f[i]}j[g]=d}}}if(document.documentElement.contains){O.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true)}}else{if(document.documentElement.compareDocumentPosition){O.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16)}}else{O.contains=function(){return false}}}O.isXML=function(b){var a=(b?b.ownerDocument||b:0).documentElement;return a?a.nodeName!=="HTML":false};var A=function(h,f,b){var c,a=[],d="",j=f.nodeType?[f]:f;while((c=I.match.PSEUDO.exec(h))){d+=c[0];h=h.replace(I.match.PSEUDO,"")}h=I.relative[h]?h+"*":h;for(var g=0,i=j.length;g<i;g++){O(h,j[g],a,b)}return O.filter(d,a)};baidu.dom.query=O})();baidu.lang.isArray=function(b){return"[object Array]"==Object.prototype.toString.call(b)};baidu.lang.isFunction=function(b){return"[object Function]"==Object.prototype.toString.call(b)};baidu.lang.toArray=function(d){if(d===null||d===undefined){return[]}if(baidu.lang.isArray(d)){return d}if(typeof d.length!=="number"||typeof d==="string"||baidu.lang.isFunction(d)){return[d]}if(d.item){var e=d.length,f=new Array(e);while(e--){f[e]=d[e]}return f}return[].slice.call(d)};baidu.fn=baidu.fn||{};baidu.fn.methodize=function(c,d){return function(){return c.apply(this,[(d?this[d]:this)].concat([].slice.call(arguments)))}};baidu.fn.wrapReturnValue=function(e,f,d){d=d|0;return function(){var a=e.apply(this,arguments);if(d>0){return new f(arguments[d-1])}if(!d){return new f(a)}return a}};baidu.fn.multize=function(g,e,f){var h=function(){var a=arguments[0],d=e?h:g,m=[],b=[].slice.call(arguments,0),i=0,n,c;if(a instanceof Array){for(n=a.length;i<n;i++){b[0]=a[i];c=d.apply(this,b);if(f){if(c){m=m.concat(c)}}else{m.push(c)}}return m}else{return g.apply(this,arguments)}};return h};baidu.element=function(c){var d=baidu._g(c);if(!d&&baidu.dom.query){d=baidu.dom.query(c)}return new baidu.element.Element(d)};baidu.e=baidu.element;baidu.element.Element=function(b){if(!baidu.element._init){baidu.element._makeChain();baidu.element._init=true}this._dom=(b.tagName||"").toLowerCase()=="select"?[b]:baidu.lang.toArray(b)};baidu.element.Element.prototype.each=function(b){baidu.array.each(this._dom,function(d,a){b.call(d,d,a)})};baidu.element._toChainFunction=function(f,d,e){return baidu.fn.methodize(baidu.fn.wrapReturnValue(baidu.fn.multize(f,0,1),baidu.element.Element,d),"_dom")};baidu.element._makeChain=function(){var d=baidu.element.Element.prototype,f=baidu.element._toChainFunction;baidu.each(("draggable droppable resizable fixable").split(" "),function(a){d[a]=f(baidu.dom[a],1)});baidu.each(("remove getText contains getAttr getPosition getStyle hasClass intersect hasAttr getComputedStyle").split(" "),function(a){d[a]=d[a.replace(/^get[A-Z]/g,e)]=f(baidu.dom[a],-1)});baidu.each(("addClass empty hide show insertAfter insertBefore insertHTML removeClass setAttr setAttrs setStyle setStyles show toggleClass toggle next first getAncestorByClass getAncestorBy getAncestorByTag getDocument getParent getWindow last next prev g removeStyle setBorderBoxSize setOuterWidth setOuterHeight setBorderBoxWidth setBorderBoxHeight setPosition children query").split(" "),function(a){d[a]=d[a.replace(/^get[A-Z]/g,e)]=f(baidu.dom[a],0)});d.q=d.Q=f(function(a,b){return baidu.dom.q.apply(this,[b,a].concat([].slice.call(arguments,2)))},0);baidu.each(("on un").split(" "),function(a){d[a]=f(baidu.event[a],0)});baidu.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error").split(" "),function(a){d[a]=function(b){return this.on(a,b)}});function e(a){return a.charAt(3).toLowerCase()}};baidu.object.each=function(h,j){var f,g,i;if("function"==typeof j){for(g in h){if(h.hasOwnProperty(g)){i=h[g];f=j.call(h,i,g);if(f===false){break}}}}return h};baidu.element.extend=function(d){var c=baidu.element;baidu.object.each(d,function(a,b){c.Element.prototype[b]=baidu.element._toChainFunction(a,-1)})};baidu.dom.getParent=function(b){b=baidu.dom._g(b);return b.parentElement||b.parentNode||null};baidu.lang.guid=function(){return"TANGRAM$"+baidu.$$._counter++};baidu.$$._counter=baidu.$$._counter||1;baidu.lang.Class=function(){this.guid=baidu.lang.guid();!this.__decontrolled&&(baidu.$$._instances[this.guid]=this)};baidu.$$._instances=baidu.$$._instances||{};baidu.lang.Class.prototype.dispose=function(){delete baidu.$$._instances[this.guid];for(var b in this){typeof this[b]!="function"&&delete this[b]}this.disposed=true};baidu.lang.Class.prototype.toString=function(){return"[object "+(this.__type||this._className||"Object")+"]"};window.baiduInstance=function(b){return baidu.$$._instances[b]};baidu.lang.Event=function(d,c){this.type=d;this.returnValue=true;this.target=c||null;this.currentTarget=null};baidu.lang.Class.prototype.fire=baidu.lang.Class.prototype.dispatchEvent=function(l,i){baidu.lang.isString(l)&&(l=new baidu.lang.Event(l));!this.__listeners&&(this.__listeners={});i=i||{};for(var n in i){l[n]=i[n]}var n,j,m=this,h=m.__listeners,k=l.type;l.target=l.target||(l.currentTarget=m);k.indexOf("on")&&(k="on"+k);typeof m[k]=="function"&&m[k].apply(m,arguments);if(typeof h[k]=="object"){for(n=0,j=h[k].length;n<j;n++){h[k][n]&&h[k][n].apply(m,arguments)}}return l.returnValue};baidu.lang.Class.prototype.on=baidu.lang.Class.prototype.addEventListener=function(h,i,j){if(typeof i!="function"){return}!this.__listeners&&(this.__listeners={});var f,g=this.__listeners;h.indexOf("on")&&(h="on"+h);typeof g[h]!="object"&&(g[h]=[]);for(f=g[h].length-1;f>=0;f--){if(g[h][f]===i){return i}}g[h].push(i);j&&typeof j=="string"&&(g[h][j]=i);return i};baidu.lang.Class.prototype.addEventListeners=function(j,i){if(typeof i=="undefined"){for(var f in j){this.addEventListener(f,j[f])}}else{j=j.split(",");var f=0,g=j.length,h;for(;f<g;f++){this.addEventListener(baidu.trim(j[f]),i)}}};baidu.lang.Class.prototype.un=baidu.lang.Class.prototype.removeEventListener=function(g,h){var e,f=this.__listeners;if(!f){return}if(typeof g=="undefined"){for(e in f){delete f[e]}return}g.indexOf("on")&&(g="on"+g);if(typeof h=="undefined"){delete f[g]}else{if(f[g]){typeof h=="string"&&(h=f[g][h])&&delete f[g][h];for(e=f[g].length-1;e>=0;e--){if(f[g][e]===h){f[g].splice(e,1)}}}}};baidu.event.on=function(i,n,l){n=n.replace(/^on/i,"");i=baidu.dom._g(i);var m=function(a){l.call(i,a)},j=baidu.event._listeners,o=baidu.event._eventFilter,k,p=n;n=n.toLowerCase();if(o&&o[n]){k=o[n](i,n,m);p=k.type;m=k.listener}if(i.addEventListener){i.addEventListener(p,m,false)}else{if(i.attachEvent){i.attachEvent("on"+p,m)}}j[j.length]=[i,n,l,m,p];return i};baidu.on=baidu.event.on;baidu.sio=baidu.sio||{};baidu.sio._createScriptTag=function(d,e,f){d.setAttribute("type","text/javascript");f&&d.setAttribute("charset",f);d.setAttribute("src",e);document.getElementsByTagName("head")[0].appendChild(d)};baidu.sio._removeScriptTag=function(c){if(c.clearAttributes){c.clearAttributes()}else{for(var d in c){if(c.hasOwnProperty(d)){delete c[d]}}}if(c&&c.parentNode){c.parentNode.removeChild(c)}c=null};baidu.sio.callByBrowser=function(t,n,l){var q=document.createElement("SCRIPT"),p=0,k=l||{},r=k.charset,m=n||function(){},o=k.timeOut||0,s;q.onload=q.onreadystatechange=function(){if(p){return}var a=q.readyState;if("undefined"==typeof a||a=="loaded"||a=="complete"){p=1;try{m();clearTimeout(s)}finally{q.onload=q.onreadystatechange=null;baidu.sio._removeScriptTag(q)}}};if(o){s=setTimeout(function(){q.onload=q.onreadystatechange=null;baidu.sio._removeScriptTag(q);k.onfailure&&k.onfailure()},o)}baidu.sio._createScriptTag(q,t,r)};baidu.event.getTarget=function(b){return b.target||b.srcElement};baidu.event.getEvent=function(a){if(window.event){return window.event}else{var b=arguments.callee;do{if(/Event/.test(b.arguments[0])){return b.arguments[0]}}while(b=b.caller);return null}};baidu.event.getKeyCode=function(a){return a.which||a.keyCode};(function(){var b=navigator.userAgent;baidu.browser.safari=/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(b)&&!/chrome/i.test(b)?+(RegExp["\x241"]||RegExp["\x242"]):undefined})();baidu.browser.opera=/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent)?+(RegExp["\x246"]||RegExp["\x242"]):undefined;(function(){var b=baidu.dom.ready=function(){var h=false,i=[],l;if(document.addEventListener){l=function(){document.removeEventListener("DOMContentLoaded",l,false);k()}}else{if(document.attachEvent){l=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",l);k()}}}}function k(){if(!k.isReady){k.isReady=true;for(var c=0,d=i.length;c<d;c++){i[c]()}}}function a(){try{document.documentElement.doScroll("left")}catch(c){setTimeout(a,1);return}k()}function j(){if(h){return}h=true;if(document.readyState==="complete"){k.isReady=true}else{if(document.addEventListener){document.addEventListener("DOMContentLoaded",l,false);window.addEventListener("load",k,false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",l);window.attachEvent("onload",k);var d=false;try{d=window.frameElement==null}catch(c){}if(document.documentElement.doScroll&&d){a()}}}}}j();return function(c){k.isReady?c():i.push(c)}}();b.isReady=false})();baidu.dom.insertHTML=function(i,g,j){i=baidu.dom.g(i);var f,h;if(i.insertAdjacentHTML&&!baidu.browser.opera){i.insertAdjacentHTML(g,j)}else{f=i.ownerDocument.createRange();g=g.toUpperCase();if(g=="AFTERBEGIN"||g=="BEFOREEND"){f.selectNodeContents(i);f.collapse(g=="AFTERBEGIN")}else{h=g=="BEFOREBEGIN";f[h?"setStartBefore":"setEndAfter"](i);f.collapse(h)}f.insertNode(f.createContextualFragment(j))}return i};baidu.insertHTML=baidu.dom.insertHTML;baidu.page=baidu.page||{};baidu.page.loadJsFile=function(c){var d=document.createElement("script");d.setAttribute("type","text/javascript");d.setAttribute("src",c);d.setAttribute("defer","defer");document.getElementsByTagName("head")[0].appendChild(d)};baidu.ajax=baidu.ajax||{};baidu.fn.blank=function(){};baidu.ajax.request=function(f,j){var d=j||{},q=d.data||"",g=!(d.async===false),e=d.username||"",a=d.password||"",c=(d.method||"GET").toUpperCase(),b=d.headers||{},i=d.timeout||0,k={},n,r,h;function m(){if(h.readyState==4){try{var t=h.status}catch(s){p("failure");return}p(t);if((t>=200&&t<300)||t==304||t==1223){p("success")}else{p("failure")}window.setTimeout(function(){h.onreadystatechange=baidu.fn.blank;if(g){h=null}},0)}}function l(){if(window.ActiveXObject){try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(s){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(s){}}}if(window.XMLHttpRequest){return new XMLHttpRequest()}}function p(u){u="on"+u;var t=k[u],v=baidu.ajax[u];if(t){if(n){clearTimeout(n)}if(u!="onsuccess"){t(h)}else{try{h.responseText}catch(s){return t(h)}t(h,h.responseText)}}else{if(v){if(u=="onsuccess"){return}v(h)}}}for(r in d){k[r]=d[r]}b["X-Requested-With"]="XMLHttpRequest";try{h=l();if(c=="GET"){if(q){f+=(f.indexOf("?")>=0?"&":"?")+q;q=null}if(d.noCache){f+=(f.indexOf("?")>=0?"&":"?")+"b"+(+new Date)+"=1"}}if(e){h.open(c,f,g,e,a)}else{h.open(c,f,g)}if(g){h.onreadystatechange=m}if(c=="POST"){h.setRequestHeader("Content-Type",(b["Content-Type"]||"application/x-www-form-urlencoded"))}for(r in b){if(b.hasOwnProperty(r)){h.setRequestHeader(r,b[r])}}p("beforerequest");if(i){n=setTimeout(function(){h.onreadystatechange=baidu.fn.blank;h.abort();p("timeout")},i)}h.send(q);if(!g){m()}}catch(o){p("failure")}return h};baidu.ajax.get=function(b,a){return baidu.ajax.request(b,{onsuccess:a})};baidu.json=baidu.json||{};baidu.json.parse=function(a){return(new Function("return ("+a+")"))()};baidu.json.decode=baidu.json.parse;T.undope=true;baidu.filterScripts=function(a){a=a||"";return a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;").replace(/<script(.|\n)*\/script\s*>/g,"").replace(/href\s*=\s*(.|\n)*script\s*:/g,"").replace(/<iframe(.|\n)*\/iframe\s*>/g,"").replace(/<frameset(.|\n)*\/frameset\s*>/g,"").replace(/expression\(/g,"")};
