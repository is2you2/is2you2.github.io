"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{8902:(M,E,c)=>{c.d(E,{o:()=>l});const l=(0,c(5083).F3)("SpeechRecognition",{web:()=>c.e(6852).then(c.bind(c,6852)).then(d=>new d.SpeechRecognitionWeb)})},7691:(M,E,c)=>{c.d(E,{i7:()=>o,LK:()=>s,ru:()=>d});var g=c(5083),l=c(467),d=function(f){return f.Prompt="PROMPT",f.Camera="CAMERA",f.Photos="PHOTOS",f}(d||{}),a=function(f){return f.Rear="REAR",f.Front="FRONT",f}(a||{}),s=function(f){return f.Uri="uri",f.Base64="base64",f.DataUrl="dataUrl",f}(s||{});class i extends g.E_{getPhoto(n){var e=this;return(0,l.A)(function*(){return new Promise(function(){var r=(0,l.A)(function*(u,v){if(n.webUseInput||n.source===d.Photos)e.fileInputExperience(n,u,v);else if(n.source===d.Prompt){let m=document.querySelector("pwa-action-sheet");m||(m=document.createElement("pwa-action-sheet"),document.body.appendChild(m)),m.header=n.promptLabelHeader||"Photo",m.cancelable=!1,m.options=[{title:n.promptLabelPhoto||"From Photos"},{title:n.promptLabelPicture||"Take Picture"}],m.addEventListener("onSelection",function(){var _=(0,l.A)(function*(h){0===h.detail?e.fileInputExperience(n,u,v):e.cameraExperience(n,u,v)});return function(h){return _.apply(this,arguments)}}())}else e.cameraExperience(n,u,v)});return function(u,v){return r.apply(this,arguments)}}())})()}pickImages(n){var e=this;return(0,l.A)(function*(){return new Promise(function(){var r=(0,l.A)(function*(u,v){e.multipleFileInputExperience(u,v)});return function(u,v){return r.apply(this,arguments)}}())})()}cameraExperience(n,e,r){var u=this;return(0,l.A)(function*(){if(customElements.get("pwa-camera-modal")){const v=document.createElement("pwa-camera-modal");v.facingMode=n.direction===a.Front?"user":"environment",document.body.appendChild(v);try{yield v.componentOnReady(),v.addEventListener("onPhoto",function(){var m=(0,l.A)(function*(_){const h=_.detail;null===h?r(new g.I9("User cancelled photos app")):h instanceof Error?r(h):e(yield u._getCameraPhoto(h,n)),v.dismiss(),document.body.removeChild(v)});return function(_){return m.apply(this,arguments)}}()),v.present()}catch{u.fileInputExperience(n,e,r)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),u.fileInputExperience(n,e,r)})()}fileInputExperience(n,e,r){let u=document.querySelector("#_capacitor-camera-input");const v=()=>{var m;null===(m=u.parentNode)||void 0===m||m.removeChild(u)};u||(u=document.createElement("input"),u.id="_capacitor-camera-input",u.type="file",u.hidden=!0,document.body.appendChild(u),u.addEventListener("change",m=>{const _=u.files[0];let h="jpeg";if("image/png"===_.type?h="png":"image/gif"===_.type&&(h="gif"),"dataUrl"===n.resultType||"base64"===n.resultType){const p=new FileReader;p.addEventListener("load",()=>{if("dataUrl"===n.resultType)e({dataUrl:p.result,format:h});else if("base64"===n.resultType){const y=p.result.split(",")[1];e({base64String:y,format:h})}v()}),p.readAsDataURL(_)}else e({webPath:URL.createObjectURL(_),format:h}),v()}),u.addEventListener("cancel",m=>{r(new g.I9("User cancelled photos app")),v()})),u.accept="image/*",u.capture=!0,n.source===d.Photos||n.source===d.Prompt?u.removeAttribute("capture"):n.direction===a.Front?u.capture="user":n.direction===a.Rear&&(u.capture="environment"),u.click()}multipleFileInputExperience(n,e){let r=document.querySelector("#_capacitor-camera-input-multiple");const u=()=>{var v;null===(v=r.parentNode)||void 0===v||v.removeChild(r)};r||(r=document.createElement("input"),r.id="_capacitor-camera-input-multiple",r.type="file",r.hidden=!0,r.multiple=!0,document.body.appendChild(r),r.addEventListener("change",v=>{const m=[];for(let _=0;_<r.files.length;_++){const h=r.files[_];let p="jpeg";"image/png"===h.type?p="png":"image/gif"===h.type&&(p="gif"),m.push({webPath:URL.createObjectURL(h),format:p})}n({photos:m}),u()}),r.addEventListener("cancel",v=>{e(new g.I9("User cancelled photos app")),u()})),r.accept="image/*",r.click()}_getCameraPhoto(n,e){return new Promise((r,u)=>{const v=new FileReader,m=n.type.split("/")[1];"uri"===e.resultType?r({webPath:URL.createObjectURL(n),format:m,saved:!1}):(v.readAsDataURL(n),v.onloadend=()=>{const _=v.result;r("dataUrl"===e.resultType?{dataUrl:_,format:m,saved:!1}:{base64String:_.split(",")[1],format:m,saved:!1})},v.onerror=_=>{u(_)})})}checkPermissions(){var n=this;return(0,l.A)(function*(){if(typeof navigator>"u"||!navigator.permissions)throw n.unavailable("Permissions API not available in this browser");try{return{camera:(yield window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch{throw n.unavailable("Camera permissions are not available in this browser")}})()}requestPermissions(){var n=this;return(0,l.A)(function*(){throw n.unimplemented("Not implemented on web.")})()}pickLimitedLibraryPhotos(){var n=this;return(0,l.A)(function*(){throw n.unavailable("Not implemented on web.")})()}getLimitedLibraryPhotos(){var n=this;return(0,l.A)(function*(){throw n.unavailable("Not implemented on web.")})()}}new i;const o=(0,g.F3)("Camera",{web:()=>new i})},2520:(M,E,c)=>{c.d(E,{c:()=>a});var g=c(8393),l=c(1086),d=c(8607);const a=(s,i)=>{let t,o;const f=(r,u,v)=>{if(typeof document>"u")return;const m=document.elementFromPoint(r,u);m&&i(m)&&!m.disabled?m!==t&&(e(),n(m,v)):e()},n=(r,u)=>{t=r,o||(o=t);const v=t;(0,g.w)(()=>v.classList.add("ion-activated")),u()},e=(r=!1)=>{if(!t)return;const u=t;(0,g.w)(()=>u.classList.remove("ion-activated")),r&&o!==t&&t.click(),t=void 0};return(0,d.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:r=>f(r.currentX,r.currentY,l.a),onMove:r=>f(r.currentX,r.currentY,l.b),onEnd:()=>{e(!0),(0,l.h)(),o=void 0}})}},8438:(M,E,c)=>{c.d(E,{g:()=>l});var g=c(8476);const l=()=>{if(void 0!==g.w)return g.w.Capacitor}},5572:(M,E,c)=>{c.d(E,{c:()=>g,i:()=>l});const g=(d,a,s)=>"function"==typeof s?s(d,a):"string"==typeof s?d[s]===a[s]:Array.isArray(a)?a.includes(d):d===a,l=(d,a,s)=>void 0!==d&&(Array.isArray(d)?d.some(i=>g(i,a,s)):g(d,a,s))},3351:(M,E,c)=>{c.d(E,{g:()=>g});const g=(i,t,o,f,n)=>d(i[1],t[1],o[1],f[1],n).map(e=>l(i[0],t[0],o[0],f[0],e)),l=(i,t,o,f,n)=>n*(3*t*Math.pow(n-1,2)+n*(-3*o*n+3*o+f*n))-i*Math.pow(n-1,3),d=(i,t,o,f,n)=>s((f-=n)-3*(o-=n)+3*(t-=n)-(i-=n),3*o-6*t+3*i,3*t-3*i,i).filter(r=>r>=0&&r<=1),s=(i,t,o,f)=>{if(0===i)return((i,t,o)=>{const f=t*t-4*i*o;return f<0?[]:[(-t+Math.sqrt(f))/(2*i),(-t-Math.sqrt(f))/(2*i)]})(t,o,f);const n=(3*(o/=i)-(t/=i)*t)/3,e=(2*t*t*t-9*t*o+27*(f/=i))/27;if(0===n)return[Math.pow(-e,1/3)];if(0===e)return[Math.sqrt(-n),-Math.sqrt(-n)];const r=Math.pow(e/2,2)+Math.pow(n/3,3);if(0===r)return[Math.pow(e/2,.5)-t/3];if(r>0)return[Math.pow(-e/2+Math.sqrt(r),1/3)-Math.pow(e/2+Math.sqrt(r),1/3)-t/3];const u=Math.sqrt(Math.pow(-n/3,3)),v=Math.acos(-e/(2*Math.sqrt(Math.pow(-n/3,3)))),m=2*Math.pow(u,1/3);return[m*Math.cos(v/3)-t/3,m*Math.cos((v+2*Math.PI)/3)-t/3,m*Math.cos((v+4*Math.PI)/3)-t/3]}},7464:(M,E,c)=>{c.d(E,{i:()=>g});const g=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(M,E,c)=>{c.r(E),c.d(E,{startFocusVisible:()=>a});const g="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],a=s=>{let i=[],t=!0;const o=s?s.shadowRoot:document,f=s||document.body,n=_=>{i.forEach(h=>h.classList.remove(g)),_.forEach(h=>h.classList.add(g)),i=_},e=()=>{t=!1,n([])},r=_=>{t=d.includes(_.key),t||n([])},u=_=>{if(t&&void 0!==_.composedPath){const h=_.composedPath().filter(p=>!!p.classList&&p.classList.contains("ion-focusable"));n(h)}},v=()=>{o.activeElement===f&&n([])};return o.addEventListener("keydown",r),o.addEventListener("focusin",u),o.addEventListener("focusout",v),o.addEventListener("touchstart",e,{passive:!0}),o.addEventListener("mousedown",e),{destroy:()=>{o.removeEventListener("keydown",r),o.removeEventListener("focusin",u),o.removeEventListener("focusout",v),o.removeEventListener("touchstart",e),o.removeEventListener("mousedown",e)},setFocus:n}}},1086:(M,E,c)=>{c.d(E,{I:()=>l,a:()=>t,b:()=>o,c:()=>i,d:()=>n,h:()=>f});var g=c(8438),l=function(e){return e.Heavy="HEAVY",e.Medium="MEDIUM",e.Light="LIGHT",e}(l||{});const a={getEngine(){const e=(0,g.g)();if(null!=e&&e.isPluginAvailable("Haptics"))return e.Plugins.Haptics},available(){if(!this.getEngine())return!1;const r=(0,g.g)();return"web"!==(null==r?void 0:r.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(e){const r=this.getEngine();r&&r.impact({style:e.style})},notification(e){const r=this.getEngine();r&&r.notification({type:e.type})},selection(){this.impact({style:l.Light})},selectionStart(){const e=this.getEngine();e&&e.selectionStart()},selectionChanged(){const e=this.getEngine();e&&e.selectionChanged()},selectionEnd(){const e=this.getEngine();e&&e.selectionEnd()}},s=()=>a.available(),i=()=>{s()&&a.selection()},t=()=>{s()&&a.selectionStart()},o=()=>{s()&&a.selectionChanged()},f=()=>{s()&&a.selectionEnd()},n=e=>{s()&&a.impact(e)}},909:(M,E,c)=>{c.d(E,{I:()=>i,a:()=>n,b:()=>s,c:()=>u,d:()=>m,f:()=>e,g:()=>f,i:()=>o,p:()=>v,r:()=>_,s:()=>r});var g=c(467),l=c(4920),d=c(4929);const s="ion-content",i=".ion-content-scroll-host",t=`${s}, ${i}`,o=h=>"ION-CONTENT"===h.tagName,f=function(){var h=(0,g.A)(function*(p){return o(p)?(yield new Promise(y=>(0,l.c)(p,y)),p.getScrollElement()):p});return function(y){return h.apply(this,arguments)}}(),n=h=>h.querySelector(i)||h.querySelector(t),e=h=>h.closest(t),r=(h,p)=>o(h)?h.scrollToTop(p):Promise.resolve(h.scrollTo({top:0,left:0,behavior:p>0?"smooth":"auto"})),u=(h,p,y,O)=>o(h)?h.scrollByPoint(p,y,O):Promise.resolve(h.scrollBy({top:y,left:p,behavior:O>0?"smooth":"auto"})),v=h=>(0,d.b)(h,s),m=h=>{if(o(h)){const y=h.scrollY;return h.scrollY=!1,y}return h.style.setProperty("overflow","hidden"),!0},_=(h,p)=>{o(h)?h.scrollY=p:h.style.removeProperty("overflow")}},3992:(M,E,c)=>{c.d(E,{a:()=>g,b:()=>u,c:()=>t,d:()=>v,e:()=>L,f:()=>i,g:()=>m,h:()=>d,i:()=>l,j:()=>w,k:()=>P,l:()=>o,m:()=>e,n:()=>_,o:()=>n,p:()=>s,q:()=>a,r:()=>b,s:()=>C,t:()=>r,u:()=>y,v:()=>O,w:()=>f,x:()=>h,y:()=>p});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(M,E,c)=>{c.d(E,{c:()=>a,g:()=>s});var g=c(8476),l=c(4920),d=c(4929);const a=(t,o,f)=>{let n,e;if(void 0!==g.w&&"MutationObserver"in g.w){const m=Array.isArray(o)?o:[o];n=new MutationObserver(_=>{for(const h of _)for(const p of h.addedNodes)if(p.nodeType===Node.ELEMENT_NODE&&m.includes(p.slot))return f(),void(0,l.r)(()=>r(p))}),n.observe(t,{childList:!0,subtree:!0})}const r=m=>{var _;e&&(e.disconnect(),e=void 0),e=new MutationObserver(h=>{f();for(const p of h)for(const y of p.removedNodes)y.nodeType===Node.ELEMENT_NODE&&y.slot===o&&v()}),e.observe(null!==(_=m.parentElement)&&void 0!==_?_:m,{subtree:!0,childList:!0})},v=()=>{e&&(e.disconnect(),e=void 0)};return{destroy:()=>{n&&(n.disconnect(),n=void 0),v()}}},s=(t,o,f)=>{const n=null==t?0:t.toString().length,e=i(n,o);if(void 0===f)return e;try{return f(n,o)}catch(r){return(0,d.a)("Exception in provided `counterFormatter`.",r),e}},i=(t,o)=>`${t} / ${o}`},1622:(M,E,c)=>{c.r(E),c.d(E,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>a,copyVisualViewport:()=>b,keyboardDidClose:()=>h,keyboardDidOpen:()=>m,keyboardDidResize:()=>_,resetKeyboardAssist:()=>n,setKeyboardClose:()=>v,setKeyboardOpen:()=>u,startKeyboardAssist:()=>e,trackViewportChanges:()=>O});var g=c(4379);c(8438),c(8476);const a="ionKeyboardDidShow",s="ionKeyboardDidHide";let t={},o={},f=!1;const n=()=>{t={},o={},f=!1},e=w=>{if(g.K.getEngine())r(w);else{if(!w.visualViewport)return;o=b(w.visualViewport),w.visualViewport.onresize=()=>{O(w),m()||_(w)?u(w):h(w)&&v(w)}}},r=w=>{w.addEventListener("keyboardDidShow",P=>u(w,P)),w.addEventListener("keyboardDidHide",()=>v(w))},u=(w,P)=>{p(w,P),f=!0},v=w=>{y(w),f=!1},m=()=>!f&&t.width===o.width&&(t.height-o.height)*o.scale>150,_=w=>f&&!h(w),h=w=>f&&o.height===w.innerHeight,p=(w,P)=>{const L=new CustomEvent(a,{detail:{keyboardHeight:P?P.keyboardHeight:w.innerHeight-o.height}});w.dispatchEvent(L)},y=w=>{const P=new CustomEvent(s);w.dispatchEvent(P)},O=w=>{t=Object.assign({},o),o=b(w.visualViewport)},b=w=>({width:Math.round(w.width),height:Math.round(w.height),offsetTop:w.offsetTop,offsetLeft:w.offsetLeft,pageTop:w.pageTop,pageLeft:w.pageLeft,scale:w.scale})},4379:(M,E,c)=>{c.d(E,{K:()=>a,a:()=>d});var g=c(8438),l=function(s){return s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE",s}(l||{}),d=function(s){return s.Body="body",s.Ionic="ionic",s.Native="native",s.None="none",s}(d||{});const a={getEngine(){const s=(0,g.g)();if(null!=s&&s.isPluginAvailable("Keyboard"))return s.Plugins.Keyboard},getResizeMode(){const s=this.getEngine();return null!=s&&s.getResizeMode?s.getResizeMode().catch(i=>{if(i.code!==l.Unimplemented)throw i}):Promise.resolve(void 0)}}},4731:(M,E,c)=>{c.d(E,{c:()=>i});var g=c(467),l=c(8476),d=c(4379);const a=t=>{if(void 0===l.d||t===d.a.None||void 0===t)return null;const o=l.d.querySelector("ion-app");return null!=o?o:l.d.body},s=t=>{const o=a(t);return null===o?0:o.clientHeight},i=function(){var t=(0,g.A)(function*(o){let f,n,e,r;const u=function(){var p=(0,g.A)(function*(){const y=yield d.K.getResizeMode(),O=void 0===y?void 0:y.mode;f=()=>{void 0===r&&(r=s(O)),e=!0,v(e,O)},n=()=>{e=!1,v(e,O)},null==l.w||l.w.addEventListener("keyboardWillShow",f),null==l.w||l.w.addEventListener("keyboardWillHide",n)});return function(){return p.apply(this,arguments)}}(),v=(p,y)=>{o&&o(p,m(y))},m=p=>{if(0===r||r===s(p))return;const y=a(p);return null!==y?new Promise(O=>{const w=new ResizeObserver(()=>{y.clientHeight===r&&(w.disconnect(),O())});w.observe(y)}):void 0};return yield u(),{init:u,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",f),null==l.w||l.w.removeEventListener("keyboardWillHide",n),f=n=void 0},isKeyboardVisible:()=>e}});return function(f){return t.apply(this,arguments)}}()},7838:(M,E,c)=>{c.d(E,{c:()=>l});var g=c(467);const l=()=>{let d;return{lock:function(){var s=(0,g.A)(function*(){const i=d;let t;return d=new Promise(o=>t=o),void 0!==i&&(yield i),t});return function(){return s.apply(this,arguments)}}()}}},9001:(M,E,c)=>{c.d(E,{c:()=>d});var g=c(8476),l=c(4920);const d=(a,s,i)=>{let t;const o=()=>!(void 0===s()||void 0!==a.label||null===i()),n=()=>{const r=s();if(void 0===r)return;if(!o())return void r.style.removeProperty("width");const u=i().scrollWidth;if(0===u&&null===r.offsetParent&&void 0!==g.w&&"IntersectionObserver"in g.w){if(void 0!==t)return;const v=t=new IntersectionObserver(m=>{1===m[0].intersectionRatio&&(n(),v.disconnect(),t=void 0)},{threshold:.01,root:a});v.observe(r)}else r.style.setProperty("width",.75*u+"px")};return{calculateNotchWidth:()=>{o()&&(0,l.r)(()=>{n()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7895:(M,E,c)=>{c.d(E,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(d,a,s)=>{const i=d*a/s-d+"ms",t=2*Math.PI*a/s;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(d,a,s)=>{const i=a/s,t=d*i-d+"ms",o=2*Math.PI*i;return{r:5,style:{top:32*Math.sin(o)+"%",left:32*Math.cos(o)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,a)=>({r:6,style:{left:32-32*a+"%","animation-delay":-110*a+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,a,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*a+(a<s/2?180:-180)}deg)`,"animation-delay":d*a/s-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,a,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*a+(a<s/2?180:-180)}deg)`,"animation-delay":d*a/s-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,a,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":d*a/s-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,a,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":d*a/s-d+"ms"}})}}},7166:(M,E,c)=>{c.r(E),c.d(E,{createSwipeBackGesture:()=>s});var g=c(4920),l=c(7464),d=c(8607);c(1970);const s=(i,t,o,f,n)=>{const e=i.ownerDocument.defaultView;let r=(0,l.i)(i);const v=y=>r?-y.deltaX:y.deltaX;return(0,d.createGesture)({el:i,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:y=>(r=(0,l.i)(i),(y=>{const{startX:b}=y;return r?b>=e.innerWidth-50:b<=50})(y)&&t()),onStart:o,onMove:y=>{const b=v(y)/e.innerWidth;f(b)},onEnd:y=>{const O=v(y),b=e.innerWidth,w=O/b,P=(y=>r?-y.velocityX:y.velocityX)(y),L=P>=0&&(P>.2||O>b/2),x=(L?1-w:w)*b;let D=0;if(x>5){const A=x/Math.abs(P);D=Math.min(A,540)}n(L,w<=0?.01:(0,g.j)(0,w,.9999),D)}})}},2935:(M,E,c)=>{c.d(E,{w:()=>g});const g=(a,s,i)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(o=>{i(l(o,s))});return t.observe(a,{childList:!0,subtree:!0}),t},l=(a,s)=>{let i;return a.forEach(t=>{for(let o=0;o<t.addedNodes.length;o++)i=d(t.addedNodes[o],s)||i}),i},d=(a,s)=>{if(1!==a.nodeType)return;const i=a;return(i.tagName===s.toUpperCase()?[i]:Array.from(i.querySelectorAll(s))).find(o=>o.value===i.value)}}}]);