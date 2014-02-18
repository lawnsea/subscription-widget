/**
 * almond 0.2.5 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/**
 * @license RequireJS text 2.0.5+ Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

(function(){var e,t,i;(function(n){function r(e,t){return y.call(e,t)}function s(e,t){var i,n,r,s,a,o,l,u,c,f,b=t&&t.split("/"),p=h.map,d=p&&p["*"]||{};if(e&&"."===e.charAt(0))if(t){for(b=b.slice(0,b.length-1),e=b.concat(e.split("/")),u=0;e.length>u;u+=1)if(f=e[u],"."===f)e.splice(u,1),u-=1;else if(".."===f){if(1===u&&(".."===e[2]||".."===e[0]))break;u>0&&(e.splice(u-1,2),u-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((b||d)&&p){for(i=e.split("/"),u=i.length;u>0;u-=1){if(n=i.slice(0,u).join("/"),b)for(c=b.length;c>0;c-=1)if(r=p[b.slice(0,c).join("/")],r&&(r=r[n])){s=r,a=u;break}if(s)break;!o&&d&&d[n]&&(o=d[n],l=u)}!s&&o&&(s=o,a=l),s&&(i.splice(0,a,s),e=i.join("/"))}return e}function a(e,t){return function(){return p.apply(n,x.call(arguments,0).concat([e,t]))}}function o(e){return function(t){return s(t,e)}}function l(e){return function(t){w[e]=t}}function u(e){if(r(m,e)){var t=m[e];delete m[e],v[e]=!0,b.apply(n,t)}if(!r(w,e)&&!r(v,e))throw Error("No "+e);return w[e]}function c(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function f(e){return function(){return h&&h.config&&h.config[e]||{}}}var b,p,d,g,w={},m={},h={},v={},y=Object.prototype.hasOwnProperty,x=[].slice;d=function(e,t){var i,n=c(e),r=n[0];return e=n[1],r&&(r=s(r,t),i=u(r)),r?e=i&&i.normalize?i.normalize(e,o(t)):s(e,t):(e=s(e,t),n=c(e),r=n[0],e=n[1],r&&(i=u(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:i}},g={require:function(e){return a(e)},exports:function(e){var t=w[e];return t!==void 0?t:w[e]={}},module:function(e){return{id:e,uri:"",exports:w[e],config:f(e)}}},b=function(e,t,i,s){var o,c,f,b,p,h,y=[];if(s=s||e,"function"==typeof i){for(t=!t.length&&i.length?["require","exports","module"]:t,p=0;t.length>p;p+=1)if(b=d(t[p],s),c=b.f,"require"===c)y[p]=g.require(e);else if("exports"===c)y[p]=g.exports(e),h=!0;else if("module"===c)o=y[p]=g.module(e);else if(r(w,c)||r(m,c)||r(v,c))y[p]=u(c);else{if(!b.p)throw Error(e+" missing "+c);b.p.load(b.n,a(s,!0),l(c),{}),y[p]=w[c]}f=i.apply(w[e],y),e&&(o&&o.exports!==n&&o.exports!==w[e]?w[e]=o.exports:f===n&&h||(w[e]=f))}else e&&(w[e]=i)},e=t=p=function(e,t,i,r,s){return"string"==typeof e?g[e]?g[e](t):u(d(e,t).f):(e.splice||(h=e,t.splice?(e=t,t=i,i=null):e=n),t=t||function(){},"function"==typeof i&&(i=r,r=s),r?b(n,e,t,i):setTimeout(function(){b(n,e,t,i)},4),p)},p.config=function(e){return h=e,h.deps&&p(h.deps,h.callback),p},i=function(e,t,i){t.splice||(i=t,t=[]),r(w,e)||r(m,e)||(m[e]=[e,t,i])},i.amd={jQuery:!0}})(),i("almond",function(){}),i("waterfall-subscription-widget/console",[],function(){function e(e){return function(){var t=Array.prototype.join.call(arguments,"");return window.console[e]("waterfall-subscription-widget: "+t)}}for(var t,i=function(){},n={},r=["debug","log","error"],s=0;r.length>s;s++)t=r[s],n[t]=window.console?e(t):i;return n}),i("waterfall-subscription-widget/dom",["waterfall-subscription-widget/console"],function(e){function t(e,t){return"string"==typeof e&&(t=e,e=document),e.querySelector(t)}function i(e,t){return"string"==typeof e&&(t=e,e=document),e.querySelectorAll(t)}function n(e,t){var i=e.parentElement.querySelectorAll(t),n=0;do{if(i[n]===e)return!0;n++}while(i.length>n);return!1}function r(e,t){var i=e.parentElement;return i?n(i,t)?i:r(i,t):null}function s(t,i,n,r){return t?t.addEventListener?t.addEventListener(i,n,r):t.attachEvent?t.attachEvent(i,n):(e.error("el",t,"cannot listen to events"),!1):(e.error("cannot hook non-existent element"),!1)}function a(e,t){for(var i=e.className.split(" "),n=0;i.length>n;n++)if(i[n]===t)return!0;return!1}function o(e,t){var i=e.className.split(" ");a(e,t)||(i.push(t),e.className=i.join(" "))}function l(e,t){for(var i=e.className.split(" "),n=[],r=0;i.length>r;r++)i[r]!==t&&n.push(i[r]);e.className=n.join(" ")}return{qs:t,qsa:i,matches:n,closest:r,hook:s,hasClass:a,addClass:o,removeClass:l}}),i("hogan",[],function(){var e={};return function(e,t){function i(e){return(null===e||void 0===e?"":e)+""}function n(e){return e=i(e),u.test(e)?e.replace(r,"&amp;").replace(s,"&lt;").replace(a,"&gt;").replace(o,"&#39;").replace(l,"&quot;"):e}e.Template=function(e,i,n,r){this.r=e||this.r,this.c=n,this.options=r,this.text=i||"",this.buf=t?[]:""},e.Template.prototype={r:function(){return""},v:n,t:i,render:function(e,t,i){return this.ri([e],t||{},i)},ri:function(e,t,i){return this.r(e,t,i)},rp:function(e,t,i,n){var r=i[e];return r?(this.c&&"string"==typeof r&&(r=this.c.compile(r,this.options)),r.ri(t,i,n)):""},rs:function(e,t,i){var n=e[e.length-1];if(!c(n))return i(e,t,this),void 0;for(var r=0;n.length>r;r++)e.push(n[r]),i(e,t,this),e.pop()},s:function(e,t,i,n,r,s,a){var o;return c(e)&&0===e.length?!1:("function"==typeof e&&(e=this.ls(e,t,i,n,r,s,a)),o=""===e||!!e,!n&&o&&t&&t.push("object"==typeof e?e:t[t.length-1]),o)},d:function(e,t,i,n){var r=e.split("."),s=this.f(r[0],t,i,n),a=null;if("."===e&&c(t[t.length-2]))return t[t.length-1];for(var o=1;r.length>o;o++)s&&"object"==typeof s&&r[o]in s?(a=s,s=s[r[o]]):s="";return n&&!s?!1:(n||"function"!=typeof s||(t.push(a),s=this.lv(s,t,i),t.pop()),s)},f:function(e,t,i,n){for(var r=!1,s=null,a=!1,o=t.length-1;o>=0;o--)if(s=t[o],s&&"object"==typeof s&&e in s){r=s[e],a=!0;break}return a?(n||"function"!=typeof r||(r=this.lv(r,t,i)),r):n?!1:""},ho:function(e,t,i,n,r){var s=this.c,a=this.options;a.delimiters=r;var n=e.call(t,n);return n=null==n?n+"":""+n,this.b(s.compile(n,a).render(t,i)),!1},b:t?function(e){this.buf.push(e)}:function(e){this.buf+=e},fl:t?function(){var e=this.buf.join("");return this.buf=[],e}:function(){var e=this.buf;return this.buf="",e},ls:function(e,t,i,n,r,s,a){var o=t[t.length-1],l=null;if(!n&&this.c&&e.length>0)return this.ho(e,o,i,this.text.substring(r,s),a);if(l=e.call(o),"function"==typeof l){if(n)return!0;if(this.c)return this.ho(l,o,i,this.text.substring(r,s),a)}return l},lv:function(e,t,n){var r=t[t.length-1],s=e.call(r);return"function"==typeof s&&(s=i(s.call(r)),this.c&&~s.indexOf("{{"))?this.c.compile(s,this.options).render(r,n):i(s)}};var r=/&/g,s=/</g,a=/>/g,o=/\'/g,l=/\"/g,u=/[&<>\"\']/,c=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}}("undefined"!=typeof exports?exports:e),e}),i("templates/widget",["hogan"],function(e){var t={widget:new e.Template(function(e,t,i){var n=this;return n.b(i=i||""),n.b('<div class="'),n.b(n.v(n.f("classPrefix",e,t,0))),n.b('-root">'),n.b("\n"+i),n.b("  <fieldset>"),n.b("\n"+i),n.b("    <legend>"),n.b(n.t(n.f("mobileNumberLegend",e,t,0))),n.b("</legend>"),n.b("\n"+i),n.b('    <div class="'),n.b(n.v(n.f("classPrefix",e,t,0))),n.b('-mobile-number">'),n.b("\n"+i),n.b("      <label>"),n.b("\n"+i),n.b('        <span class="'),n.b(n.v(n.f("classPrefix",e,t,0))),n.b('-label">'),n.b("\n"+i),n.b("          "),n.b(n.t(n.f("areaCodeLabel",e,t,0))),n.b("\n"+i),n.b("        </span>"),n.b("\n"+i),n.b('        <input class="'),n.b(n.v(n.f("classPrefix",e,t,0))),n.b('-area-code" type=tel'),n.b("\n"+i),n.b('          placeholder="512"'),n.b("\n"+i),n.b("          maxlength=3"),n.b("\n"+i),n.b('          data-pattern="[0-9]{3}"'),n.b("\n"+i),n.b("          >"),n.b("\n"+i),n.b("      </label>"),n.b("\n"+i),n.b("      <label>"),n.b("\n"+i),n.b('        <span class="'),n.b(n.v(n.f("classPrefix",e,t,0))),n.b('-label">'),n.b("\n"+i),n.b("          "),n.b(n.t(n.f("prefixLabel",e,t,0))),n.b("\n"+i),n.b("        </span>"),n.b("\n"+i),n.b('      <input class="'),n.b(n.v(n.f("classPrefix",e,t,0))),n.b('-prefix" type=tel'),n.b("\n"+i),n.b('        placeholder="555"'),n.b("\n"+i),n.b("        maxlength=3"),n.b("\n"+i),n.b('        data-pattern="[0-9]{3}"'),n.b("\n"+i),n.b("        >"),n.b("\n"+i),n.b("      </label>"),n.b("\n"+i),n.b("      <label>"),n.b("\n"+i),n.b('        <span class="'),n.b(n.v(n.f("classPrefix",e,t,0))),n.b('-label">'),n.b("\n"+i),n.b("          "),n.b(n.t(n.f("lineNoLabel",e,t,0))),n.b("\n"+i),n.b("        </span>"),n.b("\n"+i),n.b('        <input class="'),n.b(n.v(n.f("classPrefix",e,t,0))),n.b('-line-no" type=tel'),n.b("\n"+i),n.b('          placeholder="1234"'),n.b("\n"+i),n.b("          maxlength=4"),n.b("\n"+i),n.b('          data-pattern="[0-9]{4}"'),n.b("\n"+i),n.b("          >"),n.b("\n"+i),n.b("      </label>"),n.b("\n"+i),n.b("      <button class='"),n.b(n.v(n.f("classPrefix",e,t,0))),n.b("-submit-btn' type=button>"),n.b("\n"+i),n.b("        "),n.b(n.v(n.f("signUpButtonLabel",e,t,0))),n.b("\n"+i),n.b("      </button>"),n.b("\n"+i),n.b("    </div>"),n.b("\n"+i),n.b("  </fieldset>"),n.b("\n"+i),n.b("  <p class='"),n.b(n.v(n.f("classPrefix",e,t,0))),n.b("-result'></p>"),n.b("\n"+i),n.b("  <p>"),n.b(n.t(n.f("ratesWarning",e,t,0))),n.b("</p>"),n.b("\n"+i),n.b("  <p>"),n.b(n.t(n.f("terms",e,t,0))),n.b("</p>"),n.b("\n"+i),n.b('  <iframe src="'),n.b(n.v(n.f("subscribeFrameUrl",e,t,0))),n.b("#"),n.b(n.v(n.f("widgetId",e,t,0))),n.b('"></iframe>'),n.b("\n"+i),n.b("</div>"),n.b("\n"),n.fl()})},i=function(e){var i=t[e];return function(e,n,r){return i.render(e,n||t,r)}};return{widget:i("widget")}}),i("waterfall-subscription-widget/default-content",{mobileNumberLegend:"Mobile Number",areaCodeLabel:"Area code",prefixLabel:"Prefix",lineNoLabel:"Line number",signUpButtonLabel:"Sign Up",ratesWarning:"Message and Data Rates May Apply",terms:"Service is compatible with most handsets. To unsubscribe at any time simply text&nbsp;<strong>STOP</strong>&nbsp;to 67463. For help, please send&nbsp;<strong>HELP</strong>&nbsp;to 67463 or contact us at support@msgme.com or 866-251-1200. Message frequency: No more than 30 message per month.",classPrefix:"waterfall-subscription-widget",subscribeFrameUrl:"//three.waterfallmobile.com/widget/subscribe-frame.html"}),i("text",["module"],function(e){var i,n,r,s,a=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],o=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,l=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,u="undefined"!=typeof location&&location.href,c=u&&location.protocol&&location.protocol.replace(/\:/,""),f=u&&location.hostname,b=u&&(location.port||void 0),p=[],d=e.config&&e.config()||{};return i={version:"2.0.5+",strip:function(e){if(e){e=e.replace(o,"");var t=e.match(l);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:d.createXhr||function(){var e,t,i;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(t=0;3>t;t+=1){i=a[t];try{e=new ActiveXObject(i)}catch(n){}if(e){a=[i];break}}return e},parseName:function(e){var t,i,n,r=!1,s=e.indexOf("."),a=0===e.indexOf("./")||0===e.indexOf("../");return-1!==s&&(!a||s>1)?(t=e.substring(0,s),i=e.substring(s+1,e.length)):t=e,n=i||t,s=n.indexOf("!"),-1!==s&&(r="strip"===n.substring(s+1),n=n.substring(0,s),i?i=n:t=n),{moduleName:t,ext:i,strip:r}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,t,n,r){var s,a,o,l=i.xdRegExp.exec(e);return l?(s=l[2],a=l[3],a=a.split(":"),o=a[1],a=a[0],!(s&&s!==t||a&&a.toLowerCase()!==n.toLowerCase()||(o||a)&&o!==r)):!0},finishLoad:function(e,t,n,r){n=t?i.strip(n):n,d.isBuild&&(p[e]=n),r(n)},load:function(e,t,n,r){if(r.isBuild&&!r.inlineText)return n(),void 0;d.isBuild=r.isBuild;var s=i.parseName(e),a=s.moduleName+(s.ext?"."+s.ext:""),o=t.toUrl(a),l=d.useXhr||i.useXhr;!u||l(o,c,f,b)?i.get(o,function(t){i.finishLoad(e,s.strip,t,n)},function(e){n.error&&n.error(e)}):t([a],function(e){i.finishLoad(s.moduleName+"."+s.ext,s.strip,e,n)})},write:function(e,t,n){if(p.hasOwnProperty(t)){var r=i.jsEscape(p[t]);n.asModule(e+"!"+t,"define(function () { return '"+r+"';});\n")}},writeFile:function(e,t,n,r,s){var a=i.parseName(t),o=a.ext?"."+a.ext:"",l=a.moduleName+o,u=n.toUrl(a.moduleName+o)+".js";i.load(l,n,function(){var t=function(e){return r(u,e)};t.asModule=function(e,t){return r.asModule(e,u,t)},i.write(e,l,t,s)},s)}},"node"===d.env||!d.env&&"undefined"!=typeof process&&process.versions&&process.versions.node?(n=t.nodeRequire("fs"),i.get=function(e,t){var i=n.readFileSync(e,"utf8");0===i.indexOf("﻿")&&(i=i.substring(1)),t(i)}):"xhr"===d.env||!d.env&&i.createXhr()?i.get=function(e,t,n,r){var s,a=i.createXhr();if(a.open("GET",e,!0),r)for(s in r)r.hasOwnProperty(s)&&a.setRequestHeader(s.toLowerCase(),r[s]);d.onXhr&&d.onXhr(a,e),a.onreadystatechange=function(){var i,r;4===a.readyState&&(i=a.status,i>399&&600>i?(r=Error(e+" HTTP status: "+i),r.xhr=a,n(r)):t(a.responseText))},a.send(null)}:"rhino"===d.env||!d.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?i.get=function(e,t){var i,n,r="utf-8",s=new java.io.File(e),a=java.lang.System.getProperty("line.separator"),o=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s),r)),l="";try{for(i=new java.lang.StringBuffer,n=o.readLine(),n&&n.length()&&65279===n.charAt(0)&&(n=n.substring(1)),i.append(n);null!==(n=o.readLine());)i.append(a),i.append(n);l=""+i+""}finally{o.close()}t(l)}:("xpconnect"===d.env||!d.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(r=Components.classes,s=Components.interfaces,Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),i.get=function(e,t){var i,n,a={},o=new FileUtils.File(e);try{i=r["@mozilla.org/network/file-input-stream;1"].createInstance(s.nsIFileInputStream),i.init(o,1,0,!1),n=r["@mozilla.org/intl/converter-input-stream;1"].createInstance(s.nsIConverterInputStream),n.init(i,"utf-8",i.available(),s.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),n.readString(i.available(),a),n.close(),i.close(),t(a.value)}catch(l){throw Error((o&&o.path||"")+": "+l)}}),i}),i("text!css/subscription-widget.css",[],function(){return'.waterfall-subscription-widget{/*! normalize.css v2.1.0 | MIT License | git.io/normalize */}.waterfall-subscription-widget article,.waterfall-subscription-widget aside,.waterfall-subscription-widget details,.waterfall-subscription-widget figcaption,.waterfall-subscription-widget figure,.waterfall-subscription-widget footer,.waterfall-subscription-widget header,.waterfall-subscription-widget hgroup,.waterfall-subscription-widget main,.waterfall-subscription-widget nav,.waterfall-subscription-widget section,.waterfall-subscription-widget summary{display:block}.waterfall-subscription-widget audio,.waterfall-subscription-widget canvas,.waterfall-subscription-widget video{display:inline-block}.waterfall-subscription-widget audio:not([controls]){display:none;height:0}.waterfall-subscription-widget [hidden]{display:none}.waterfall-subscription-widget html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}.waterfall-subscription-widget body{margin:0}.waterfall-subscription-widget a:focus{outline:thin dotted}.waterfall-subscription-widget a:active,.waterfall-subscription-widget a:hover{outline:0}.waterfall-subscription-widget h1{font-size:2em;margin:.67em 0}.waterfall-subscription-widget abbr[title]{border-bottom:1px dotted}.waterfall-subscription-widget b,.waterfall-subscription-widget strong{font-weight:bold}.waterfall-subscription-widget dfn{font-style:italic}.waterfall-subscription-widget hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}.waterfall-subscription-widget mark{background:#ff0;color:#000}.waterfall-subscription-widget code,.waterfall-subscription-widget kbd,.waterfall-subscription-widget pre,.waterfall-subscription-widget samp{font-family:monospace,serif;font-size:1em}.waterfall-subscription-widget pre{white-space:pre-wrap}.waterfall-subscription-widget q{quotes:"\\201C" "\\201D" "\\2018" "\\2019"}.waterfall-subscription-widget small{font-size:80%}.waterfall-subscription-widget sub,.waterfall-subscription-widget sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.waterfall-subscription-widget sup{top:-0.5em}.waterfall-subscription-widget sub{bottom:-0.25em}.waterfall-subscription-widget img{border:0}.waterfall-subscription-widget svg:not(:root){overflow:hidden}.waterfall-subscription-widget figure{margin:0}.waterfall-subscription-widget fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}.waterfall-subscription-widget legend{border:0;padding:0}.waterfall-subscription-widget button,.waterfall-subscription-widget input,.waterfall-subscription-widget select,.waterfall-subscription-widget textarea{font-family:inherit;font-size:100%;margin:0}.waterfall-subscription-widget button,.waterfall-subscription-widget input{line-height:normal}.waterfall-subscription-widget button,.waterfall-subscription-widget select{text-transform:none}.waterfall-subscription-widget button,.waterfall-subscription-widget html input[type="button"],.waterfall-subscription-widget input[type="reset"],.waterfall-subscription-widget input[type="submit"]{-webkit-appearance:button;cursor:pointer}.waterfall-subscription-widget button[disabled],.waterfall-subscription-widget html input[disabled]{cursor:default}.waterfall-subscription-widget input[type="checkbox"],.waterfall-subscription-widget input[type="radio"]{box-sizing:border-box;padding:0}.waterfall-subscription-widget input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}.waterfall-subscription-widget input[type="search"]::-webkit-search-cancel-button,.waterfall-subscription-widget input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}.waterfall-subscription-widget button::-moz-focus-inner,.waterfall-subscription-widget input::-moz-focus-inner{border:0;padding:0}.waterfall-subscription-widget textarea{overflow:auto;vertical-align:top}.waterfall-subscription-widget table{border-collapse:collapse;border-spacing:0}.waterfall-subscription-widget fieldset{border:0;padding:0;margin:0}.waterfall-subscription-widget label{display:inline-block;margin-right:.5em}.waterfall-subscription-widget label span.waterfall-subscription-widget-label{display:none}.waterfall-subscription-widget input.waterfall-subscription-widget-area-code,.waterfall-subscription-widget input.waterfall-subscription-widget-prefix{text-align:center;width:1.7999999999999998em}.waterfall-subscription-widget input.waterfall-subscription-widget-line-no{text-align:center;width:2.4em}.waterfall-subscription-widget iframe{width:0;height:0;display:none}.waterfall-subscription-widget .waterfall-subscription-widget-result{display:none}.waterfall-subscription-widget .waterfall-subscription-widget-result.waterfall-subscription-widget-success,.waterfall-subscription-widget .waterfall-subscription-widget-result.waterfall-subscription-widget-failure{display:block}'}),i("waterfall-subscription-widget/inject",["waterfall-subscription-widget/dom","templates/widget","waterfall-subscription-widget/default-content","text!css/subscription-widget.css"],function(e,t,i,n){function r(){var e=document.createElement("style");e.className="waterfall-subscription-widget-styles",e.innerHTML=n,document.querySelector("head").appendChild(e);var r,a,o,l,u=document.querySelectorAll(".waterfall-subscription-widget");for(r=0;u.length>r;r++){a=u[r],a.id="waterfall-subscription-widget-"+s,l={widgetId:a.id};for(var c in i)o="data-waterfall-"+c.replace(/([A-Z])/g,"-$1").toLowerCase(),l[c]=a.hasAttribute(o)?a.getAttribute(o):i[c];a.innerHTML=t.widget(l),s++}}var s=0;return r}),i("waterfall-subscription-widget",["waterfall-subscription-widget/console","waterfall-subscription-widget/dom","waterfall-subscription-widget/inject"],function(e,t,i){function n(e){return e?d+"-"+e:e}function r(e){return"."+d+e}function s(e){var t=e.getAttribute("data-pattern");return C[t]||(C[t]=RegExp(t)),C[t].test(e.value)}function a(e){if(t.matches(e,A)){var i=s(e);return i?t.removeClass(e,v):t.addClass(e,v),i}}function o(e){for(var i=t.qsa(e,A),n=null,r=0;i.length>r;r++)a(i[r])||null!==n||(n=r);return null!==n?(i[n].focus(),t.addClass(e,v)):t.removeClass(e,v),null===n}function l(e){var i=t.qs(e,r("-area-code")),n=t.qs(e,r("-prefix")),s=t.qs(e,r("-line-no"));return i.value+n.value+s.value}function u(e){var i=e.getAttribute(h),n=e.getAttribute(w),r=t.qs(e,"iframe");r.contentWindow.postMessage(JSON.stringify({type:"subscribe",widgetId:n,mobileNumber:i}),r.src),e.removeAttribute(h)}function c(i){var n,r;try{if(r=JSON.parse(i.data),!r.id)return e.error("Message with no id specified: "+i.data),void 0;n=t.qs("#"+r.id),k[r.type]?k[r.type](r,n):e.error('Unexpected message type "'+r.type+'": '+i.data)}catch(s){e.error('Failed to handle message "'+i.data+'": '+s.message)}}function f(e){var i=t.closest(e.target,q),r=t.qs(i,L),s=t.qs(i,j);t.removeClass(s,y),t.removeClass(s,x),o(i)&&(r.setAttribute("disabled",!0),t.addClass(i,n("busy")),i.setAttribute(h,l(i)),"true"===i.getAttribute(m)&&u(i))}function b(e){a(e.target)}function p(){var e;i(),e=t.qsa(q);for(var n=0;e.length>n;n++)t.hook(e[n],"blur",b,!0),t.hook(e[n],"change",b,!0),t.hook(t.qs(e[n],L),"click",f),t.hook(window,"message",c)}var d="waterfall-subscription-widget",g="data-waterfall-",w=g+"widgetid",m=g+"ready",h=g+"pending-mobile-number",v=n("invalid"),y=n("success"),x=n("failure"),q=r(""),L=r("-submit-btn"),j=r("-result"),A=r(" input"),C={},k={};if(k.ready=function(e,t){t.setAttribute(m,!0),t.hasAttribute(h)&&u(t)},k.result=function(e,i){var r,s,a=t.qs(i,j);if(t.removeClass(i,n("busy")),t.qs(i,L).removeAttribute("disabled"),a.innerHTML=e.message,e.success){for(r=t.qsa(i,A),s=0;r.length>s;s++)r[s].value="";t.addClass(a,y)}else t.addClass(a,x)},!document)return e.error("no `document` in scope"),void 0;var N=null,P=t.qs("script["+w+"]");return P?(N=P.getAttribute(w),P.removeAttribute(w),"complete"!==document.readyState?t.hook(window,"load",p):p(),void 0):(e.error(d+": could not find a script with a"+"`data-waterfall-widgetid` attribute"),void 0)}),t("waterfall-subscription-widget")})();