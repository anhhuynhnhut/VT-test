function createUnityInstance(r,n,l){function d(e,r){if(!d.aborted&&n.showBanner)return"error"==r&&(d.aborted=!0),n.showBanner(e,r);switch(r){case"error":console.error(e);break;case"warning":console.warn(e);break;default:console.log(e)}}function t(e){var r=e.reason||e.error,n=r?r.toString():e.message||e.reason||"",t=r&&r.stack?r.stack.toString():"";(n+="\n"+(t=t.startsWith(n)?t.substring(n.length):t).trim())&&p.stackTraceRegExp&&p.stackTraceRegExp.test(n)&&h(n,e.filename||r&&(r.fileName||r.sourceURL)||"",e.lineno||r&&(r.lineNumber||r.line)||0)}function e(e,r,n){var t=e[r];void 0!==t&&t||(console.warn('Config option "'+r+'" is missing or empty. Falling back to default value: "'+n+'". Consider updating your WebGL template to include the missing config option.'),e[r]=n)}l=l||function(){};var o,p={canvas:r,webglContextAttributes:{preserveDrawingBuffer:!1,powerPreference:0},wasmFileSize:26647614,streamingAssetsUrl:"StreamingAssets",downloadProgress:{},deinitializers:[],intervals:{},setInterval:function(e,r){e=window.setInterval(e,r);return this.intervals[e]=!0,e},clearInterval:function(e){delete this.intervals[e],window.clearInterval(e)},preRun:[],postRun:[],print:function(e){console.log(e)},printErr:function(e){console.error(e),"string"==typeof e&&-1!=e.indexOf("wasm streaming compile failed")&&(-1!=e.toLowerCase().indexOf("mime")?d('HTTP Response Header "Content-Type" configured incorrectly on the server for file '+p.codeUrl+' , should be "application/wasm". Startup time performance will suffer.',"warning"):d('WebAssembly streaming compilation failed! This can happen for example if "Content-Encoding" HTTP header is incorrectly enabled on the server for file '+p.codeUrl+", but the file is not pre-compressed on disk (or vice versa). Check the Network tab in browser Devtools to debug server header configuration.","warning"))},locateFile:function(e){return e},disabledCanvasEvents:["contextmenu","dragstart"]};for(o in e(n,"companyName","Unity"),e(n,"productName","WebGL Player"),e(n,"productVersion","1.0"),n)p[o]=n[o];p.streamingAssetsUrl=new URL(p.streamingAssetsUrl,document.URL).href;var a=p.disabledCanvasEvents.slice();function i(e){e.preventDefault()}a.forEach(function(e){r.addEventListener(e,i)}),window.addEventListener("error",t),window.addEventListener("unhandledrejection",t);var s="",u="";function c(e){document.webkitCurrentFullScreenElement===r?r.style.width&&(s=r.style.width,u=r.style.height,r.style.width="100%",r.style.height="100%"):s&&(r.style.width=s,r.style.height=u,u=s="")}document.addEventListener("webkitfullscreenchange",c),p.deinitializers.push(function(){for(var e in p.disableAccessToMediaDevices(),a.forEach(function(e){r.removeEventListener(e,i)}),window.removeEventListener("error",t),window.removeEventListener("unhandledrejection",t),document.removeEventListener("webkitfullscreenchange",c),p.intervals)window.clearInterval(e);p.intervals={}}),p.QuitCleanup=function(){for(var e=0;e<p.deinitializers.length;e++)p.deinitializers[e]();p.deinitializers=[],"function"==typeof p.onQuit&&p.onQuit()};var f={Module:p,SetFullscreen:function(){if(p.SetFullscreen)return p.SetFullscreen.apply(p,arguments);p.print("Failed to set Fullscreen mode: Player not loaded yet.")},SendMessage:function(){if(p.SendMessage)return p.SendMessage.apply(p,arguments);p.print("Failed to execute SendMessage: Player not loaded yet.")},Quit:function(){return new Promise(function(e,r){p.shouldQuit=!0,p.onQuit=e})},GetMetricsInfo:function(){var e=p._getMetricsInfo(),r=e+4,n=r+4,t=n+8,o=t+8,a=o+4,i=a+4,s=i+8,l=s+8,d=l+4,u=d+4,c=u+4;return{totalWASMHeapSize:p.HEAPU32[e>>2],usedWASMHeapSize:p.HEAPU32[r>>2],totalJSHeapSize:p.HEAPF64[n>>3],usedJSHeapSize:p.HEAPF64[t>>3],pageLoadTime:p.HEAPU32[o>>2],pageLoadTimeToFrame1:p.HEAPU32[a>>2],fps:p.HEAPF64[i>>3],movingAverageFps:p.HEAPF64[s>>3],assetLoadTime:p.HEAPU32[l>>2],webAssemblyStartupTime:p.HEAPU32[d>>2]-(p.webAssemblyTimeStart||0),codeDownloadTime:p.HEAPU32[u>>2],gameStartupTime:p.HEAPU32[c>>2],numJankedFrames:p.HEAPU32[c+4>>2]}}};function h(e,r,n){-1==e.indexOf("fullscreen error")&&(p.startupErrorHandler?p.startupErrorHandler(e,r,n):p.errorHandler&&p.errorHandler(e,r,n)||(console.log("Invoking error handler due to\n"+e),"function"==typeof dump&&dump("Invoking error handler due to\n"+e),h.didShowErrorMessage||(-1!=(e="An error occurred running the Unity content on this page. See your browser JavaScript console for more info. The error was:\n"+e).indexOf("DISABLE_EXCEPTION_CATCHING")?e="An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace.":-1!=e.indexOf("Cannot enlarge memory arrays")?e="Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings.":-1==e.indexOf("Invalid array buffer length")&&-1==e.indexOf("Invalid typed array length")&&-1==e.indexOf("out of memory")&&-1==e.indexOf("could not allocate memory")||(e="The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings."),alert(e),h.didShowErrorMessage=!0)))}function g(e,r){if("symbolsUrl"!=e){var n=p.downloadProgress[e],t=(n=n||(p.downloadProgress[e]={started:!1,finished:!1,lengthComputable:!1,total:0,loaded:0}),"object"!=typeof r||"progress"!=r.type&&"load"!=r.type||(n.started||(n.started=!0,n.lengthComputable=r.lengthComputable),n.total=r.total,n.loaded=r.loaded,"load"==r.type&&(n.finished=!0)),0),o=0,a=0,i=0,s=0;for(e in p.downloadProgress){if(!(n=p.downloadProgress[e]).started)return;a++,n.lengthComputable?(t+=n.loaded,o+=n.total,i++):n.finished||s++}l(.9*(a?(a-s-(o?i*(o-t)/o:0))/a:0))}}p.SystemInfo=function(){var e,r,n,t,o=navigator.userAgent+" ",a=[["Firefox","Firefox"],["OPR","Opera"],["Edg","Edge"],["SamsungBrowser","Samsung Browser"],["Trident","Internet Explorer"],["MSIE","Internet Explorer"],["Chrome","Chrome"],["CriOS","Chrome on iOS Safari"],["FxiOS","Firefox on iOS Safari"],["Safari","Safari"]];function i(e,r,n){return(e=RegExp(e,"i").exec(r))&&e[n]}for(var s=0;s<a.length;++s)if(r=i(a[s][0]+"[/ ](.*?)[ \\)]",o,1)){e=a[s][1];break}"Safari"==e&&(r=i("Version/(.*?) ",o,1)),"Internet Explorer"==e&&(r=i("rv:(.*?)\\)? ",o,1)||r);for(var l=[["Windows (.*?)[;)]","Windows"],["Android ([0-9_.]+)","Android"],["iPhone OS ([0-9_.]+)","iPhoneOS"],["iPad.*? OS ([0-9_.]+)","iPadOS"],["FreeBSD( )","FreeBSD"],["OpenBSD( )","OpenBSD"],["Linux|X11()","Linux"],["Mac OS X ([0-9_\\.]+)","MacOS"],["bot|google|baidu|bing|msn|teoma|slurp|yandex","Search Bot"]],d=0;d<l.length;++d)if(u=i(l[d][0],o,1)){n=l[d][1],u=u.replace(/_/g,".");break}var u={"NT 5.0":"2000","NT 5.1":"XP","NT 5.2":"Server 2003","NT 6.0":"Vista","NT 6.1":"7","NT 6.2":"8","NT 6.3":"8.1","NT 10.0":"10"}[u]||u,c=(webgpuVersion=0,(c=document.createElement("canvas"))&&(gl=c.getContext("webgl2"),glVersion=gl?2:0,gl||(gl=c&&c.getContext("webgl"))&&(glVersion=1),gl&&(t=gl.getExtension("WEBGL_debug_renderer_info")&&gl.getParameter(37446)||gl.getParameter(7937))),"undefined"!=typeof SharedArrayBuffer),f="object"==typeof WebAssembly&&"function"==typeof WebAssembly.compile;return{width:screen.width,height:screen.height,userAgent:o.trim(),browser:e||"Unknown browser",browserVersion:r||"Unknown version",mobile:/Mobile|Android|iP(ad|hone)/.test(navigator.appVersion),os:n||"Unknown OS",osVersion:u||"Unknown OS Version",gpu:t||"Unknown GPU",language:navigator.userLanguage||navigator.language,hasWebGL:glVersion,hasWebGPU:webgpuVersion,hasCursorLock:!!document.body.requestPointerLock,hasFullscreen:!!document.body.requestFullscreen||!!document.body.webkitRequestFullscreen,hasThreads:c,hasWasm:f,hasWasmThreads:!1}}(),p.abortHandler=function(e){return h(e,"",0),!0},Error.stackTraceLimit=Math.max(Error.stackTraceLimit||0,50),p.readBodyWithProgress=function(a,i,s){var e=a.body?a.body.getReader():void 0,l=void 0!==a.headers.get("Content-Length"),d=function(e,r){if(!r)return 0;var r=e.headers.get("Content-Encoding"),n=parseInt(e.headers.get("Content-Length"));switch(r){case"br":return Math.round(5*n);case"gzip":return Math.round(4*n);default:return n}}(a,l),u=new Uint8Array(d),c=[],f=0,h=0;return l||console.warn("[UnityCache] Response is served without Content-Length header. Please reconfigure server to include valid Content-Length for better download performance."),function o(){return void 0===e?a.arrayBuffer().then(function(e){var r=new Uint8Array(e);return i({type:"progress",response:a,total:e.length,loaded:0,lengthComputable:l,chunk:s?r:null}),r}):e.read().then(function(e){if(e.done){if(f===d)return u;if(f<d)return u.slice(0,f);for(var r=new Uint8Array(f),n=(r.set(u,0),h),t=0;t<c.length;++t)r.set(c[t],n),n+=c[t].length;return r}return f+e.value.length<=u.length?(u.set(e.value,f),h=f+e.value.length):c.push(e.value),f+=e.value.length,i({type:"progress",response:a,total:Math.max(d,f),loaded:f,lengthComputable:l,chunk:s?e.value:null}),o()})}().then(function(e){return i({type:"load",response:a,total:e.length,loaded:e.length,lengthComputable:l,chunk:null}),a.parsedBody=e,a})},p.fetchWithProgress=function(e,r){var n=function(){};return r&&r.onProgress&&(n=r.onProgress),fetch(e,r).then(function(e){return p.readBodyWithProgress(e,n,r.enableStreamingDownload)})};var m={gzip:{hasUnityMarker:function(e){var r=10,n="UnityWeb Compressed Content (gzip)";if(r>e.length||31!=e[0]||139!=e[1])return!1;var t=e[3];if(4&t){if(r+2>e.length)return!1;if((r+=2+e[r]+(e[r+1]<<8))>e.length)return!1}if(8&t){for(;r<e.length&&e[r];)r++;if(r+1>e.length)return!1;r++}return 16&t&&String.fromCharCode.apply(null,e.subarray(r,r+n.length+1))==n+"\0"}},br:{hasUnityMarker:function(e){var r="UnityWeb Compressed Content (brotli)";if(!e.length)return!1;var n=1&e[0]?14&e[0]?4:7:1,t=e[0]&(1<<n)-1,o=1+(Math.log(r.length-1)/Math.log(2)>>3);if(commentOffset=1+n+2+1+2+(o<<3)+7>>3,17==t||commentOffset>e.length)return!1;for(var a=t+(6+(o<<4)+(r.length-1<<6)<<n),i=0;i<commentOffset;i++,a>>>=8)if(e[i]!=(255&a))return!1;return String.fromCharCode.apply(null,e.subarray(commentOffset,commentOffset+r.length))==r}}};function b(r){g(r);var e=p.fetchWithProgress,n=p[r],t=/file:\/\//.exec(n)?"same-origin":void 0;return e(p[r],{method:"GET",companyName:p.companyName,productName:p.productName,productVersion:p.productVersion,control:"no-store",mode:t,onProgress:function(e){g(r,e)}}).then(function(e){return i=e.parsedBody,s=p[r],new Promise(function(e,r){try{for(var n in m){var t,o,a;if(m[n].hasUnityMarker(i))return s&&console.log('You can reduce startup time if you configure your web server to add "Content-Encoding: '+n+'" response header when serving "'+s+'" file.'),(t=m[n]).worker||(o=URL.createObjectURL(new Blob(["this.require = ",t.require.toString(),"; this.decompress = ",t.decompress.toString(),"; this.onmessage = ",function(e){e={id:e.data.id,decompressed:this.decompress(e.data.compressed)};postMessage(e,e.decompressed?[e.decompressed.buffer]:[])}.toString(),"; postMessage({ ready: true });"],{type:"application/javascript"})),t.worker=new Worker(o),t.worker.onmessage=function(e){e.data.ready?URL.revokeObjectURL(o):(this.callbacks[e.data.id](e.data.decompressed),delete this.callbacks[e.data.id])},t.worker.callbacks={},t.worker.nextCallbackId=0),a=t.worker.nextCallbackId++,t.worker.callbacks[a]=e,void t.worker.postMessage({id:a,compressed:i},[i.buffer])}e(i)}catch(e){r(e)}});var i,s}).catch(function(e){var r="Failed to download file "+n;"file:"==location.protocol?d(r+". Loading web pages via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host Unity content, or use the Unity Build and Run option.","error"):console.error(r)})}function w(){var r=performance.now(),g=(Promise.all([b("frameworkUrl").then(function(e){var s=URL.createObjectURL(new Blob([e],{type:"application/javascript"}));return new Promise(function(a,e){var i=document.createElement("script");i.src=s,i.onload=function(){if("undefined"==typeof unityFramework||!unityFramework){var e,r=[["br","br"],["gz","gzip"]];for(e in r){var n,t=r[e];if(p.frameworkUrl.endsWith("."+t[0]))return n="Unable to parse "+p.frameworkUrl+"!","file:"==location.protocol?void d(n+" Loading pre-compressed (brotli or gzip) content via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host compressed Unity content, or use the Unity Build and Run option.","error"):(n+=' This can happen if build compression was enabled but web server hosting the content was misconfigured to not serve the file with HTTP Response Header "Content-Encoding: '+t[1]+'" present. Check browser Console and Devtools Network tab to debug.',"br"==t[0]&&"http:"==location.protocol&&(t=-1!=["localhost","127.0.0.1"].indexOf(location.hostname)?"":"Migrate your server to use HTTPS.",n=/Firefox/.test(navigator.userAgent)?"Unable to parse "+p.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported in Firefox over HTTP connections. '+t+' See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1670675">https://bugzilla.mozilla.org/show_bug.cgi?id=1670675</a> for more information.':"Unable to parse "+p.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported over HTTP connections. Migrate your server to use HTTPS.'),void d(n,"error"))}d("Unable to parse "+p.frameworkUrl+"! The file is corrupt, or compression was misconfigured? (check Content-Encoding HTTP Response Header on web server)","error")}var o=unityFramework;unityFramework=null,i.onload=null,URL.revokeObjectURL(s),a(o)},i.onerror=function(e){d("Unable to load file "+p.frameworkUrl+"! Check that the file exists on the remote server. (also check browser Console and Devtools Network tab to debug)","error")},document.body.appendChild(i),p.deinitializers.push(function(){document.body.removeChild(i)})})}),b("codeUrl")]).then(function(e){p.wasmBinary=e[1],e[0](p),p.codeDownloadTimeEnd=performance.now()-r}),performance.now()),e=b("dataUrl");p.preRun.push(function(){p.addRunDependency("dataUrl"),e.then(function(r){var e=new TextDecoder("utf-8"),n=0;function t(){var e=(r[n]|r[n+1]<<8|r[n+2]<<16|r[n+3]<<24)>>>0;return n+=4,e}function o(e){if(m.gzip.hasUnityMarker(r))throw e+'. Failed to parse binary data file, because it is still gzip-compressed and should have been uncompressed by the browser. Web server has likely provided gzip-compressed data without specifying the HTTP Response Header "Content-Encoding: gzip" with it to instruct the browser to decompress it. Please verify your web server hosting configuration.';if(m.br.hasUnityMarker(r))throw e+'. Failed to parse binary data file, because it is still brotli-compressed and should have been uncompressed by the browser. Web server has likely provided brotli-compressed data without specifying the HTTP Response Header "Content-Encoding: br" with it to instruct the browser to decompress it. Please verify your web server hosting configuration.';throw e}var a="UnityWebData1.0\0",i=e.decode(r.subarray(0,a.length)),s=(i!=a&&o('Unknown data format (id="'+i+'")'),n+=a.length,t());for(n+s>r.length&&o("Invalid binary data file header! (pos="+n+", headerSize="+s+", file length="+r.length+")");n<s;){var l=t(),d=t(),u=(l+d>r.length&&o("Invalid binary data file size! (offset="+l+", size="+d+", file length="+r.length+")"),t()),c=(n+u>r.length&&o("Invalid binary data file path name! (pos="+n+", length="+u+", file length="+r.length+")"),e.decode(r.subarray(n,n+u)));n+=u;for(var f=0,h=c.indexOf("/",f)+1;0<h;f=h,h=c.indexOf("/",f)+1)p.FS_createPath(c.substring(0,f),c.substring(f,h-1),!0,!0);p.FS_createDataFile(c,null,r.subarray(l,l+d),!0,!0,!0)}p.removeRunDependency("dataUrl"),p.dataUrlLoadEndTime=performance.now()-g})})}return new Promise(function(e,r){var n;p.SystemInfo.hasWebGL?1==p.SystemInfo.hasWebGL?(n='Your browser does not support graphics API "WebGL 2" which is required for this content.',"Safari"==p.SystemInfo.browser&&parseInt(p.SystemInfo.browserVersion)<15&&(p.SystemInfo.mobile||1<navigator.maxTouchPoints?n+="\nUpgrade to iOS 15 or later.":n+="\nUpgrade to Safari 15 or later."),r(n)):p.SystemInfo.hasWasm?(p.startupErrorHandler=r,l(0),p.postRun.push(function(){l(1),delete p.startupErrorHandler,e(f),p.pageStartupTime=performance.now()}),w()):r("Your browser does not support WebAssembly."):r("Your browser does not support WebGL.")})}