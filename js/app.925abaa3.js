(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-47dd8c64":"8a26a5fd","chunk-570d513b":"107b2517","chunk-604d5ed8":"72ce4ddd","chunk-91ba40a6":"e85ea7f6","chunk-ed793346":"a6b96cb9"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-47dd8c64":1,"chunk-570d513b":1,"chunk-604d5ed8":1,"chunk-91ba40a6":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-47dd8c64":"d9c7211d","chunk-570d513b":"d9c7211d","chunk-604d5ed8":"d9c7211d","chunk-91ba40a6":"d9c7211d","chunk-ed793346":"31d6cfe0"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],h.parentNode.removeChild(h),n(c)},h.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/badge-generator/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var h=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";n("85ec")},"0356":function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"g",(function(){return l}));var r,a="https://img.shields.io",o={DASH:"".concat(a,"/badge"),PARAM:"".concat(a,"/static/v1"),GH:"".concat(a,"/github"),PACKAGE:"".concat(a,"/github/package-json/dependency-version")};(function(e){e["Python"]="https://pypi.org/project",e["Node"]="https://www.npmjs.com/package",e["Ruby"]="https://rubygems.org/gems"})(r||(r={}));var c="https://github.com",u="github.io",i="master",s="/LICENSE",l={include_prereleases:"",sort:"semver"}},"17a3":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var r,a="Magically generate custom badges that you can paste in your docs",o={FOR_THE_BADGE:"for-the-badge",SOCIAL:"social"};(function(e){e["Default"]="blue",e["Green"]="2ea44f",e["LogoDefault"]="white"})(r||(r={}))},"2eda":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n("99af");var r=n("d4ec"),a=n("bee2"),o=n("17a3"),c=n("a5a3"),u=n("0356"),i=n("b8e9"),s=n("5167"),l=n("7cba"),d=function(){function e(t,n,a){if(Object(r["a"])(this,e),this.username=t,this.repoName=n,this.licenseType=a,!t)throw new Error("`username` cannot be empty");if(!n)throw new Error("`repoName` cannot be empty")}return Object(a["a"])(e,[{key:"ghURL",value:function(){return"".concat(u["b"],"/").concat(this.username,"/").concat(this.repoName)}},{key:"ghPagesURL",value:function(){var e="".concat(this.username,".").concat(u["c"]),t="https://".concat(e.toLowerCase());return this.repoName===e?t:"".concat(t,"/").concat(this.repoName,"/")}},{key:"ghPagesBadge",value:function(){var e=this.ghPagesURL();return Object(s["a"])(c["b"].LABEL,c["b"].MESSAGE,c["b"].COLOR,c["b"].IS_LARGE,e)}},{key:"_templateURL",value:function(){return"".concat(this.ghURL(),"/generate")}},{key:"useThisTemplateBadge",value:function(){var e=this._templateURL();return Object(s["a"])(c["e"].LABEL,c["e"].MESSAGE,c["e"].COLOR,c["e"].IS_LARGE,e,c["e"].LOGO)}},{key:"_tagBadgeUrl",value:function(e){var t="".concat(u["f"].GH,"/").concat(e,"/").concat(this.username,"/").concat(this.repoName);return Object(i["a"])(t,u["g"])}},{key:"tagBadge",value:function(e){var t="GitHub ".concat(e),n=this._tagBadgeUrl(e),r="".concat(this.ghURL(),"/releases/");return Object(l["a"])(t,n,r)}},{key:"_licenseTarget",value:function(e){if(e)return"#license";var t=this.ghURL();return"".concat(t,"/blob/").concat(u["a"],"/LICENSE")}},{key:"licenseBadge",value:function(e){return this.licenseType?Object(s["a"])(c["c"].LABEL,this.licenseType,c["c"].COLOR,c["c"].IS_LARGE,this._licenseTarget(e)):""}},{key:"licenseMessage",value:function(){if(!this.licenseType)return"";var e=Object(l["b"])(this.licenseType,u["d"]),t=Object(l["b"])("@".concat(this.username),"".concat(u["b"],"/").concat(this.username));return"## License\n\nReleased under ".concat(e," by ").concat(t,".\n")}},{key:"gh",value:function(){var e=this.username,t=this.repoName,n=this.ghURL(),r=!0;return Object(s["a"])(e,t,c["a"].COLOR,c["a"].IS_LARGE,n,c["a"].LOGO,c["a"].LOGO_COLOR,r)}},{key:"_ghSocialShield",value:function(e){return"".concat(u["f"].GH,"/").concat(e,"/").concat(this.username,"/").concat(this.repoName,"?style=").concat(o["c"].SOCIAL)}},{key:"ghSocial",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return"";if("stars"!==e&&"forks"!==e)throw new Error("Invalid type - must stars or forks. Got: ".concat(e));var n=t?"".concat(this.username,"/").concat(this.repoName," "):"",r=this._ghSocialShield(e),a=this.ghURL();return"[".concat(n,"![").concat(e," - ").concat(this.repoName,"](").concat(r,")](").concat(a,")")}}]),e}()},5167:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("b8e9"),a=n("7cba"),o=n("8dd6");function c(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]&&arguments[3],u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",l=arguments.length>7&&void 0!==arguments[7]&&arguments[7];if(!t)throw new Error("`message` may not be empty");if(!n)throw new Error("`color` may not be empty");var d=Object(r["b"])(e,t),h={label:e,message:t,color:n},f=Object(o["b"])(c,i,s),p=l?Object(o["a"])(h,f):Object(o["c"])(h,f);return Object(a["a"])(d,p,u)}},"7cba":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));n("99af");function r(e,t){return"[".concat(e,"](").concat(t,")")}function a(e,t,n){return n&&(t="".concat(t,' "').concat(n,'"')),"![".concat(e,"](").concat(t,")")}function o(e,t,n,o){var c=a(e,t,o);return n?r(c,n):c}},"85ec":function(e,t,n){},"8dd6":function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return f}));n("99af"),n("a15b"),n("ac1f"),n("5319");var r=n("5530"),a=n("17a3"),o=n("0356"),c=n("b8e9");function u(e,t){return e=e.replace(/-/g,"--").replace(/_/g,"__"),t&&(e=e.replace(/ /g,"_")),e}function i(e){return e.replace(/%3E/g,">").replace(/%3C/g,"<")}function s(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e=u(e,t);var n=encodeURIComponent(e);return i(n)}function l(e){var t=s(e.message),n=e.label,r=[t,e.color];return n&&(n=s(n),r.unshift(n)),r.join("-")}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r={};return e&&(r.style=a["c"].FOR_THE_BADGE),t&&(r.logo=t,n&&(r.logoColor=n)),r}function h(e,t){var n=Object(r["a"])({label:e.label,message:e.message,color:e.color},t);return Object(c["a"])(o["f"].PARAM,n)}function f(e,t){var n=l(e),r="".concat(o["f"].DASH,"/").concat(n);return Object(c["a"])(r,t)}},a5a3:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return i}));var r=n("17a3"),a={LABEL:"dependency",COLOR:r["a"].Default,IS_LARGE:!1},o={LABEL:"License",COLOR:r["a"].Default,IS_LARGE:!1},c={COLOR:r["a"].Default,IS_LARGE:!1,LOGO:"github",LOGO_COLOR:""},u={LABEL:"View site",MESSAGE:"GH Pages",COLOR:r["a"].Green,IS_LARGE:!0},i={LABEL:"",MESSAGE:"Use this template",COLOR:r["a"].Green,IS_LARGE:!0,LOGO:"github"}},b8e9:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));n("a15b"),n("4fad"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d");var r=n("3835");function a(e,t){for(var n=new URL(e),a=0,o=Object.entries(t);a<o.length;a++){var c=Object(r["a"])(o[a],2),u=c[0],i=c[1];n.searchParams.append(u,i)}return decodeURI(n.href)}function o(e,t){return e?[e,t].join(" - "):t}},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container-lg"},[n("a",{attrs:{id:"logo",href:e.baseUrl}},[e._v("Badge Generator")]),n("div",{attrs:{id:"nav"}},e._l(e.routes,(function(t,r){return n("span",{key:t.path},[n("span",[e._v(e._s(0!==r?" | ":""))]),n("router-link",{attrs:{to:t.path}},[e._v(e._s(t.name))])],1)})),0)]),n("router-view")],1)},o=[],c=(n("d3b7"),n("8c4f")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home container-lg"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("h1",[e._v("Home")]),n("div",{staticClass:"hero"},[n("img",{attrs:{alt:"Logo",src:e.baseUrl+"hero.jpeg",width:"100%",height:"auto"}}),n("br"),e._m(0),n("Markdown",{attrs:{content:e.repoBadge}}),n("p",[n("i",[e._v(e._s(e.description))])])],1)])]),e._m(1)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("small",{staticClass:"note"},[n("span",[e._v(" Photo by "),n("a",{attrs:{href:"https://unsplash.com/@luarte_raw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[e._v("Kevin Luarte")]),e._v(" on "),n("a",{attrs:{href:"https://unsplash.com/s/photos/badges?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[e._v("Unsplash")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("p",[e._v(' This is an online tool which generates badges (or "shield") based on your inputs. You can preview the badges on the tool and then copy the markdown/HTML to your GitHub repo\'s '),n("b",[e._v("README.md")]),e._v(" file. Those badges can help people learn about your repo at a glance and make it look professional. ")]),n("p",[e._v(" This tool adds "),n("b",[e._v("convenience")]),e._v(" and "),n("b",[e._v("productivity")]),e._v(" to your life so you can make badges quickly and easily and get on with the coding. ")]),n("p",[e._v(" The power here is in narrowing the choices and putting less burden on your to figure out rules and syntax or read long URLs. For badges that you need to create regularly, there's no need to look at "),n("i",[e._v("shields.io")]),e._v(" to figure out how it works or to write the markdown by hand (and do all the tedious things like escaping characters and learning the syntax for each badge. ")]),n("p",[e._v(" I use this tool regularly for myself - I hope you will too. If you want to contribute, issues and PRs are welcome. ")]),n("p",[e._v("PS. This site works best on a desktop screen size.")])])])}],s=n("e6e0"),l=n("17a3"),d=n("2eda"),h=r["a"].extend({name:"Home",components:{Markdown:s["a"]},data:function(){var e=new d["a"]("MichaelCurrin","badge-generator");return{repoBadge:e.gh(),description:l["b"],baseUrl:"/badge-generator/"}}}),f=h,p=n("2877"),g=Object(p["a"])(f,u,i,!1,null,null,null),b=g.exports;r["a"].use(c["a"]);var v=[{path:"/",name:"Home",component:b},{path:"/repo",name:"Repo",component:function(){return n.e("chunk-570d513b").then(n.bind(null,"7b65"))}},{path:"/generic",name:"Generic",component:function(){return n.e("chunk-91ba40a6").then(n.bind(null,"f3c2"))}},{path:"/package",name:"Package",component:function(){return n.e("chunk-604d5ed8").then(n.bind(null,"b086"))}},{path:"/image",name:"Image",component:function(){return n.e("chunk-47dd8c64").then(n.bind(null,"feec"))}},{path:"/catalogue",name:"Catalogue",component:function(){return n.e("chunk-ed793346").then(n.bind(null,"afe0"))}}],m=new c["a"]({routes:v}),y=m,_=r["a"].extend({data:function(){return{routes:v,baseUrl:"/badge-generator/"}}}),O=_,L=(n("034f"),Object(p["a"])(O,a,o,!1,null,null,null)),k=L.exports;r["a"].config.productionTip=!1,new r["a"]({router:y,render:function(e){return e(k)}}).$mount("#app")},e6e0:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{domProps:{innerHTML:e._s(e.toHTML(e.content))}})},a=[],o=n("2b0e"),c=n("d4cd"),u=n.n(c),i=new u.a({html:!0}),s=o["a"].extend({name:"Markdown",props:{content:String},methods:{toHTML:function(e){return i.render(e)}}}),l=s,d=n("2877"),h=Object(d["a"])(l,r,a,!1,null,null,null);t["a"]=h.exports}});
//# sourceMappingURL=app.925abaa3.js.map