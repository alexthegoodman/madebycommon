(self.webpackChunkpayload_template_ts_blog=self.webpackChunkpayload_template_ts_blog||[]).push([[205,234],{28571:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(67294),a=n(26793),l=n(90546),o=n.n(l),i=n(48170),s=n(953),c=n(90666),u=n(77070),p=n(35193),m=n(28960);n(25786);const d=o()((e=>{const{name:t,path:n,required:l,validate:o=p.email,admin:{readOnly:d,style:f,className:h,width:v,placeholder:g,autoComplete:y,description:E,condition:b}={},label:C}=e,{i18n:Z}=(0,a.$)(),O=n||t,w=(0,r.useCallback)(((e,t)=>o(e,{...t,required:l})),[o,l]),k=(0,i.Z)({path:O,validate:w,condition:b}),{value:x,showError:j,setValue:V,errorMessage:H}=k,L=["field-type","email",h,j&&"error",d&&"read-only"].filter(Boolean).join(" ");return r.createElement("div",{className:L,style:{...f,width:v}},r.createElement(c.Z,{showError:j,message:H}),r.createElement(s.Z,{htmlFor:`field-${O.replace(/\./gi,"__")}`,label:C,required:l}),r.createElement("input",{id:`field-${O.replace(/\./gi,"__")}`,value:x||"",onChange:V,disabled:Boolean(d),placeholder:(0,m.i)(g,Z),type:"email",name:O,autoComplete:y}),r.createElement(u.Z,{value:x,description:E}))}))},76067:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(67294),a=n(48170),l=n(953),o=n(90666),i=n(90546),s=n.n(i),c=n(35193);n(8108);const u=s()((e=>{const{path:t,name:n,required:i,validate:s=c.password,style:u,className:p,width:m,autoComplete:d,label:f}=e,h=t||n,v=(0,r.useCallback)(((e,t)=>s(e,{...t,required:i})),[s,i]),{value:g,showError:y,formProcessing:E,setValue:b,errorMessage:C}=(0,a.Z)({path:h,validate:v}),Z=["field-type","password",p,y&&"error"].filter(Boolean).join(" ");return r.createElement("div",{className:Z,style:{...u,width:m}},r.createElement(o.Z,{showError:y,message:C}),r.createElement(l.Z,{htmlFor:`field-${h.replace(/\./gi,"__")}`,label:f,required:i}),r.createElement("input",{id:`field-${h.replace(/\./gi,"__")}`,value:g||"",onChange:b,disabled:E,type:"password",autoComplete:d,name:h}))}))},68874:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294),a=n(9980),l=n(2143);const o=()=>r.createElement("svg",{width:"180",height:"50",viewBox:"0 0 180 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"graphic-logo"},r.createElement("style",null,"\n  .graphic-logo path {\n    fill: var(--theme-elevation-1000);\n  }\n"),r.createElement("path",{d:"M65.922 13.8685C71.1075 13.8685 77.0257 14.6014 77.0257 22.2185C77.0257 28.6587 71.8736 30.2243 66.0664 30.2243H62.2689V39.0961H57.2944V13.8685H65.922ZM62.2689 17.7659V26.3602H66.3773C69.4752 26.3602 71.9069 25.594 71.9069 22.2518C71.9069 18.1101 68.7424 17.7659 66.022 17.7659H62.2689Z"}),r.createElement("path",{d:"M84.3209 39.5514C80.7344 39.5514 77.5698 37.4639 77.5698 34.0884C77.5698 29.6358 82.5443 28.3145 89.8949 27.4706V27.1264C89.8949 24.2394 88.3626 23.2623 86.3084 23.2623C84.2542 23.2623 82.7219 24.2394 82.622 26.2936H78.1361C78.4803 22.6072 81.7226 19.8867 86.4861 19.8867C91.1163 19.8867 94.7028 21.7633 94.7028 28.1035C94.7028 28.692 94.6362 31.2014 94.6362 32.9114C94.6362 35.865 94.8472 37.5416 95.1914 39.1073H90.7721C90.6278 38.5188 90.4945 37.6083 90.4279 36.7089C89.0844 38.6853 87.1412 39.5514 84.3209 39.5514ZM90.0282 30.5463C84.6651 31.1015 82.511 31.7344 82.511 33.8219C82.511 35.1766 83.588 36.298 85.7532 36.298C88.7512 36.298 90.0393 34.5547 90.0393 31.4901V30.5463H90.0282Z"}),r.createElement("path",{d:"M97.2899 45.1921V41.5057H99.0998C100.699 41.5057 101.432 41.539 102.231 39.5514L102.442 39.0295L95.269 20.3753H100.521L104.763 33.8774L109.115 20.3753H113.99L107.139 38.541C104.951 44.3593 103.974 45.1921 99.3108 45.1921H97.2899Z"}),r.createElement("path",{d:"M120.263 39.1073H115.456V13.8685H120.263V39.1073Z"}),r.createElement("path",{d:"M122.406 29.7801C122.406 23.2067 126.826 19.9645 131.7 19.9645C136.575 19.9645 140.994 23.2067 140.994 29.7801C140.994 36.3535 136.575 39.5625 131.7 39.5625C126.826 39.5514 122.406 36.3535 122.406 29.7801ZM127.281 29.7801C127.281 33.6775 128.913 35.7984 131.7 35.7984C134.487 35.7984 136.119 33.6775 136.119 29.7801C136.119 25.8494 134.487 23.7286 131.7 23.7286C128.913 23.7286 127.281 25.8383 127.281 29.7801Z"}),r.createElement("path",{d:"M149.167 39.5514C145.58 39.5514 142.416 37.4639 142.416 34.0884C142.416 29.6358 147.39 28.3145 154.741 27.4706V27.1264C154.741 24.2394 153.208 23.2623 151.154 23.2623C149.1 23.2623 147.568 24.2394 147.468 26.2936H142.982C143.326 22.6072 146.568 19.8867 151.332 19.8867C155.962 19.8867 159.549 21.7633 159.549 28.1035C159.549 28.692 159.482 31.2014 159.482 32.9114C159.482 35.865 159.693 37.5416 160.037 39.1073H155.618C155.473 38.5188 155.34 37.6083 155.274 36.7089C153.941 38.6853 151.987 39.5514 149.167 39.5514ZM154.874 30.5463C149.511 31.1015 147.357 31.7344 147.357 33.8219C147.357 35.1766 148.434 36.298 150.599 36.298C153.597 36.298 154.885 34.5547 154.885 31.4901V30.5463H154.874Z"}),r.createElement("path",{d:"M175.06 39.1073V36.7422C173.872 38.7964 171.618 39.5625 169.664 39.5625C165.067 39.5625 161.625 35.7317 161.625 29.7468C161.625 23.8619 165 19.9645 169.664 19.9645C172.029 19.9645 174.05 21.0415 175.06 22.7848V13.8796H179.868V39.1073H175.06ZM175.238 29.7357C175.238 25.9716 173.494 23.6398 170.852 23.6398C168.242 23.6398 166.677 26.1159 166.677 29.7691C166.677 33.4222 168.242 35.865 170.852 35.865C173.494 35.865 175.238 33.5665 175.238 29.7357Z"}),r.createElement("path",{d:"M19.1531 0L42.049 13.8019V39.9956L24.8049 50V23.8064L1.89795 10.0155L19.1531 0Z"}),r.createElement("path",{d:"M17.4097 48.5454V28.1035L0.132324 38.1301L17.4097 48.5454Z"})),i=()=>{const{admin:{components:{graphics:{Logo:e}={Logo:void 0}}={}}={}}=(0,a.Z)();return r.createElement(l.Z,{CustomComponent:e,DefaultComponent:o})}},99234:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>E});var r=n(67294),a=n(16550),l=n(73727),o=n(26793),i=n(89116),s=n(9980),c=n(28630),u=n(68874),p=n(39599),m=n(26644),d=n(28571),f=n(76067),h=n(46268),v=n(77329),g=n(37276);n(14889);const y="login",E=()=>{const e=(0,a.k6)(),{t}=(0,o.$)("authentication"),{user:n,setToken:E}=(0,c.a)(),b=(0,s.Z)(),{admin:{user:C,logoutRoute:Z,components:{beforeLogin:O,afterLogin:w,logout:k}={}},serverURL:x,routes:{admin:j,api:V},collections:H}=b,L=H.find((({slug:e})=>e===C));return n?r.createElement(p.Z,{className:y},r.createElement(g.Z,{title:t("login"),description:t("loginUser"),keywords:t("login")}),r.createElement("div",{className:`${y}__wrap`},r.createElement("h1",null,t("alreadyLoggedIn")),r.createElement("p",null,r.createElement(i.c,{i18nKey:"loggedIn",t},r.createElement(l.Link,{to:`${j}${Z}`},t("logOut")))),r.createElement("br",null),r.createElement(v.Z,{el:"link",buttonStyle:"secondary",to:j},t("general:backToDashboard")))):r.createElement(p.Z,{className:y},r.createElement(g.Z,{title:t("login"),description:t("loginUser"),keywords:t("login")}),r.createElement("div",{className:`${y}__brand`},r.createElement(u.Z,null)),Array.isArray(O)&&O.map(((e,t)=>r.createElement(e,{key:t}))),!L.auth.disableLocalStrategy&&r.createElement(m.Z,{disableSuccessStatus:!0,waitForAutocomplete:!0,onSuccess:t=>{t.token&&(E(t.token),e.push(j))},method:"post",action:`${x}${V}/${C}/login`},r.createElement(d.Z,{label:t("general:email"),name:"email",admin:{autoComplete:"email"},required:!0}),r.createElement(f.Z,{label:t("general:password"),name:"password",autoComplete:"off",required:!0}),r.createElement(l.Link,{to:`${j}/forgot`},t("forgotPasswordQuestion")),r.createElement(h.Z,null,t("login"))),Array.isArray(w)&&w.map(((e,t)=>r.createElement(e,{key:t}))))}},15205:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=n(67294),a=n(26793),l=n(16550),o=n(9980),i=n(28630),s=n(68874),c=n(39599),u=n(77329),p=n(37276),m=n(99234);n(85);const d="verify",f=({collection:e})=>{const{slug:t}=e,{user:n}=(0,i.a)(),{token:f}=(0,l.UO)(),{serverURL:h,routes:{admin:v},admin:{user:g}}=(0,o.Z)(),{t:y,i18n:E}=(0,a.$)("authentication"),b=t===g,[C,Z]=(0,r.useState)(null);if((0,r.useEffect)((()=>{!async function(){const e=await fetch(`${h}/api/${t}/verify/${f}`,{method:"POST",credentials:"include",headers:{"Accept-Language":E.language}});Z(e)}()}),[Z,t,h,f,E]),n)return r.createElement(m.default,null);return r.createElement(c.Z,{className:d},r.createElement(p.Z,{title:y("verify"),description:y("verifyUser"),keywords:y("verify")}),r.createElement("div",{className:`${d}__brand`},r.createElement(s.Z,null)),r.createElement("h2",null,200===(null==C?void 0:C.status)?y("verifiedSuccessfully"):202===(null==C?void 0:C.status)?y("alreadyActivated"):y("unableToVerify")),b&&200===(null==C?void 0:C.status)&&r.createElement(u.Z,{el:"link",buttonStyle:"secondary",to:`${v}/login`},y("login")))}},89116:(e,t,n)=>{"use strict";n.d(t,{c:()=>V});var r=n(45987),a=n(71002),l=n(4942),o=n(67294),i=n(71739),s=n.n(i),c=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function u(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(s()[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var a=new RegExp(c),l=null;null!==(l=a.exec(e));)if(l[0].trim())if(l[1]){var o=l[1].trim(),i=[o,""];o.indexOf("=")>-1&&(i=o.split("=")),t.attrs[i[0]]=i[1],a.lastIndex--}else l[2]&&(t.attrs[l[2]]=l[3].trim().substring(1,l[3].length-1));return t}var p=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,m=/^\s*$/,d=Object.create(null);function f(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(f,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var h={parse:function(e,t){t||(t={}),t.components||(t.components=d);var n,r=[],a=[],l=-1,o=!1;if(0!==e.indexOf("<")){var i=e.indexOf("<");r.push({type:"text",content:-1===i?e:e.substring(0,i)})}return e.replace(p,(function(i,s){if(o){if(i!=="</"+n.name+">")return;o=!1}var c,p="/"!==i.charAt(1),d=i.startsWith("\x3c!--"),f=s+i.length,h=e.charAt(f);if(d){var v=u(i);return l<0?(r.push(v),r):((c=a[l]).children.push(v),r)}if(p&&(l++,"tag"===(n=u(i)).type&&t.components[n.name]&&(n.type="component",o=!0),n.voidElement||o||!h||"<"===h||n.children.push({type:"text",content:e.slice(f,e.indexOf("<",f))}),0===l&&r.push(n),(c=a[l-1])&&c.children.push(n),a[l]=n),(!p||n.voidElement)&&(l>-1&&(n.voidElement||n.name===i.slice(2,-1))&&(l--,n=-1===l?r:a[l]),!o&&"<"!==h&&h)){c=-1===l?r:a[l].children;var g=e.indexOf("<",f),y=e.slice(f,-1===g?void 0:g);m.test(y)&&(y=" "),(g>-1&&l+c.length>=0||" "!==y)&&c.push({type:"text",content:y})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+f("",t)}),"")}};const v=h;var g=n(97031),y=n(58236),E=["format"],b=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function w(e){return e?e.props?e.props.children:e.children:[]}function k(e){return Array.isArray(e)?e:[e]}function x(e,t){if(!e)return"";var n="",l=k(e),i=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return l.forEach((function(e,l){if("string"==typeof e)n+="".concat(e);else if((0,o.isValidElement)(e)){var s=Object.keys(e.props).length,c=i.indexOf(e.type)>-1,u=e.props.children;if(!u&&c&&0===s)n+="<".concat(e.type,"/>");else if(u||c&&0===s)if(e.props.i18nIsDynamicList)n+="<".concat(l,"></").concat(l,">");else if(c&&1===s&&"string"==typeof u)n+="<".concat(e.type,">").concat(u,"</").concat(e.type,">");else{var p=x(u,t);n+="<".concat(l,">").concat(p,"</").concat(l,">")}else n+="<".concat(l,"></").concat(l,">")}else if(null===e)(0,y.ZK)("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,a.Z)(e)){var m=e.format,d=(0,r.Z)(e,E),f=Object.keys(d);if(1===f.length){var h=m?"".concat(f[0],", ").concat(m):f[0];n+="{{".concat(h,"}}")}else(0,y.ZK)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else(0,y.ZK)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function j(e,t,n,r,l,i){if(""===t)return[];var s=r.transKeepBasicHtmlNodesFor||[],c=t&&new RegExp(s.join("|")).test(t);if(!e&&!c)return[t];var u={};!function e(t){k(t).forEach((function(t){"string"!=typeof t&&(O(t)?e(w(t)):"object"!==(0,a.Z)(t)||(0,o.isValidElement)(t)||Object.assign(u,t))}))}(e);var p=v.parse("<0>".concat(t,"</0>")),m=Z(Z({},u),l);function d(e,t,n){var r=w(e),a=h(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return(0,o.isValidElement)(e)}))}(r)&&0===a.length?r:a}function f(e,t,n,r,a){e.dummy&&(e.children=t),n.push((0,o.cloneElement)(e,Z(Z({},e.props),{},{key:r}),a?void 0:t))}function h(t,l,u){var p=k(t);return k(l).reduce((function(t,l,v){var g,y,E,b=l.children&&l.children[0]&&l.children[0].content&&n.services.interpolator.interpolate(l.children[0].content,m,n.language);if("tag"===l.type){var C=p[parseInt(l.name,10)];!C&&1===u.length&&u[0][l.name]&&(C=u[0][l.name]),C||(C={});var w=0!==Object.keys(l.attrs).length?(g={props:l.attrs},(E=Z({},y=C)).props=Object.assign(g.props,y.props),E):C,k=(0,o.isValidElement)(w),x=k&&O(l,!0)&&!l.voidElement,j=c&&"object"===(0,a.Z)(w)&&w.dummy&&!k,V="object"===(0,a.Z)(e)&&null!==e&&Object.hasOwnProperty.call(e,l.name);if("string"==typeof w){var H=n.services.interpolator.interpolate(w,m,n.language);t.push(H)}else if(O(w)||x){f(w,d(w,l,u),t,v)}else if(j){var L=h(p,l.children,u);t.push((0,o.cloneElement)(w,Z(Z({},w.props),{},{key:v}),L))}else if(Number.isNaN(parseFloat(l.name))){if(V)f(w,d(w,l,u),t,v,l.voidElement);else if(r.transSupportBasicHtmlNodes&&s.indexOf(l.name)>-1)if(l.voidElement)t.push((0,o.createElement)(l.name,{key:"".concat(l.name,"-").concat(v)}));else{var N=h(p,l.children,u);t.push((0,o.createElement)(l.name,{key:"".concat(l.name,"-").concat(v)},N))}else if(l.voidElement)t.push("<".concat(l.name," />"));else{var $=h(p,l.children,u);t.push("<".concat(l.name,">").concat($,"</").concat(l.name,">"))}}else if("object"!==(0,a.Z)(w)||k)1===l.children.length&&b?t.push((0,o.cloneElement)(w,Z(Z({},w.props),{},{key:v}),b)):t.push((0,o.cloneElement)(w,Z(Z({},w.props),{},{key:v})));else{var _=l.children[0]?b:null;_&&t.push(_)}}else if("text"===l.type){var M=r.transWrapTextNodes,S=i?r.unescape(n.services.interpolator.interpolate(l.content,m,n.language)):n.services.interpolator.interpolate(l.content,m,n.language);M?t.push((0,o.createElement)(M,{key:"".concat(l.name,"-").concat(v)},S)):t.push(S)}return t}),[])}return w(h([{dummy:!0,children:e||[]}],p,k(e||[]))[0])}function V(e){var t=e.children,n=e.count,a=e.parent,l=e.i18nKey,i=e.context,s=e.tOptions,c=void 0===s?{}:s,u=e.values,p=e.defaults,m=e.components,d=e.ns,f=e.i18n,h=e.t,v=e.shouldUnescape,E=(0,r.Z)(e,b),C=(0,o.useContext)(g.OO)||{},O=C.i18n,w=C.defaultNS,k=f||O||(0,g.nI)();if(!k)return(0,y.O4)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var V=h||k.t.bind(k)||function(e){return e};i&&(c.context=i);var H=Z(Z({},(0,g.JP)()),k.options&&k.options.react),L=d||V.ns||w||k.options&&k.options.defaultNS;L="string"==typeof L?[L]:L||["translation"];var N=p||x(t,H)||H.transEmptyNodeValue||l,$=H.hashTransKey,_=l||($?$(N):N),M=u?c.interpolation:{interpolation:Z(Z({},c.interpolation),{},{prefix:"#$?",suffix:"?$#"})},S=Z(Z(Z(Z({},c),{},{count:n},u),M),{},{defaultValue:N,ns:L}),A=j(m||t,_?V(_,S):N,k,H,S,v),P=void 0!==a?a:H.defaultTransParent;return P?(0,o.createElement)(P,E,A):A}},71739:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);