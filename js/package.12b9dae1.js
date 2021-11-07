(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package"],{1092:function(e,t,l){"use strict";l.d(t,"b",(function(){return o})),l.d(t,"a",(function(){return n})),l.d(t,"d",(function(){return a})),l.d(t,"c",(function(){return c}));const o="_Your output will appear here_",n="Color keyword or hex code. Hints: `brightgreen`, `green`, `yellowgreen`, `yellow`, `orange`, `red`, `blue`, `lightgrey`, `success`, `important`, `critical`, `informational`, `inactive`, `blueviolet`, `ff69b4`, `9cf`, `2ea44f` (GitHub's green). The Shields.io API will use `blue` as a default if no color is provided.",a="Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`",c="Color keyword or hex code. The badge's own color will be used unless you specify an override. Using `white` is great for readability against the dark label background."},"1cf6":function(e,t,l){"use strict";var o=l("7a23");const n=Object(o["f"])("br",null,null,-1);function a(e,t,l,a,c,d){const r=Object(o["z"])("Checkbox");return Object(o["s"])(),Object(o["e"])("div",null,[Object(o["i"])(r,{label:"Show HTML",modelValue:e.asHtml,"onUpdate:modelValue":t[0]||(t[0]=t=>e.asHtml=t)},null,8,["modelValue"]),n,Object(o["f"])("pre",null,[Object(o["f"])("code",{ref:"codeBlock",class:"markdown"},Object(o["B"])(e.outputCode),513)])])}var c=l("1487"),d=l.n(c),r=l("7cba"),s=l("7737"),u=Object(o["j"])({name:"Code",components:{Checkbox:s["a"]},props:{code:{type:String,required:!0}},data(){return{asHtml:!1}},computed:{outputCode(){if(this.asHtml){const e=Object(r["d"])(this.code);return Object(r["a"])(e)}return this.code}},methods:{highlight(){const e=this.$refs.codeBlock;d.a.highlightElement(e)}},mounted(){this.highlight()},updated(){this.highlight()}}),i=l("6b0d"),b=l.n(i);const p=b()(u,[["render",a]]);t["a"]=p},2156:function(e,t,l){"use strict";l("bdd2")},"3a0b":function(e,t,l){"use strict";var o=l("a5a3"),n=l("7a23");const a={debug:!0,state:Object(n["w"])({repoUsername:o["b"].username,repoName:o["b"].repoName}),setRepoUsername(e){this.debug&&console.debug("Storing repo username: "+e),this.state.repoUsername=e},setRepoName(e){this.debug&&console.debug("Storing repo name: "+e),this.state.repoName=e}};t["a"]=a},"446e":function(e,t,l){"use strict";var o=l("7a23");const n=["for"],a={key:0,class:"required"},c=["id","value","placeholder","required","disabled"],d={key:0,class:"note"};function r(e,t,l,r,s,u){const i=Object(o["z"])("Markdown");return Object(o["s"])(),Object(o["e"])("div",null,[Object(o["f"])("label",{for:e.slug},[Object(o["h"])(Object(o["B"])(e.label),1),e.isRequired?(Object(o["s"])(),Object(o["e"])("span",a,"*")):Object(o["d"])("",!0)],8,n),Object(o["f"])("input",{id:e.slug,type:"text",value:e.modelValue,placeholder:e.placeholder,required:e.isRequired,disabled:e.disabled,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},null,40,c),e.note?(Object(o["s"])(),Object(o["e"])("small",d,[Object(o["i"])(i,{content:e.note},null,8,["content"])])):Object(o["d"])("",!0)])}var s=l("84f8"),u=l("e6e0"),i=Object(o["j"])({name:"TextInput",components:{Markdown:u["a"]},props:{label:{type:String,required:!0},modelValue:{type:String,required:!0},placeholder:{type:String,required:!1},isRequired:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return Object(s["a"])("text",this.label,this.modelValue)}}}),b=(l("2156"),l("6b0d")),p=l.n(b);const j=p()(i,[["render",r],["__scopeId","data-v-de2a2f90"]]);t["a"]=j},7737:function(e,t,l){"use strict";var o=l("7a23");const n=["for"],a=["id","checked"],c={key:0,class:"note"};function d(e,t,l,d,r,s){const u=Object(o["z"])("Markdown");return Object(o["s"])(),Object(o["e"])("div",null,[Object(o["f"])("label",{for:e.slug},Object(o["B"])(e.label),9,n),Object(o["f"])("input",{id:e.slug,type:"checkbox",checked:e.modelValue,onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.checked))},null,40,a),e.note?(Object(o["s"])(),Object(o["e"])("small",c,[Object(o["i"])(u,{content:e.note},null,8,["content"])])):Object(o["d"])("",!0)])}var r=l("e6e0"),s=l("84f8"),u=Object(o["j"])({name:"Checkbox",components:{Markdown:r["a"]},props:{label:{type:String,required:!0},modelValue:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return Object(s["a"])("box",this.label)}}}),i=l("6b0d"),b=l.n(i);const p=b()(u,[["render",d]]);t["a"]=p},8169:function(e,t,l){"use strict";var o=l("7a23");const n=e=>(Object(o["v"])("data-v-58367787"),e=e(),Object(o["t"])(),e),a={class:"app-results"},c=n(()=>Object(o["f"])("h2",null,"Output values",-1)),d=n(()=>Object(o["f"])("h3",null,"Preview",-1)),r=n(()=>Object(o["f"])("br",null,null,-1)),s=n(()=>Object(o["f"])("h3",null,"Code",-1));function u(e,t,l,n,u,i){const b=Object(o["z"])("Markdown"),p=Object(o["z"])("Code");return Object(o["s"])(),Object(o["e"])("div",a,[c,Object(o["f"])("div",null,[d,Object(o["i"])(b,{class:"markdown-preview",content:e.result},null,8,["content"])]),r,Object(o["f"])("div",null,[s,Object(o["i"])(p,{code:e.result},null,8,["code"])])])}var i=l("1cf6"),b=l("e6e0"),p=Object(o["j"])({name:"Results",components:{Markdown:b["a"],Code:i["a"]},props:{result:{type:String,required:!0}}}),j=(l("aa3a"),l("6b0d")),g=l.n(j);const O=g()(p,[["render",u],["__scopeId","data-v-58367787"]]);t["a"]=O},"84f8":function(e,t,l){"use strict";function o(e){return e.replace(/^\/+/,"")}function n(...e){const t=e.join("-");return t.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}l.d(t,"b",(function(){return o})),l.d(t,"a",(function(){return n}))},"97c7":function(e,t,l){},aa3a:function(e,t,l){"use strict";l("97c7")},b086:function(e,t,l){"use strict";l.r(t);var o=l("7a23");const n={class:"badges container-lg"},a=Object(o["f"])("div",{class:"row"},[Object(o["f"])("div",{class:"col-12"},[Object(o["f"])("h1",null,"Package badges"),Object(o["f"])("p",null," Show your project's dependencies as badges in your docs, including an external link to the package in a registry. ")])],-1),c={class:"row"},d={class:"col-6"},r={class:"app-input"},s=Object(o["f"])("h2",null,"Input values",-1),u={name:"package"},i=Object(o["f"])("legend",null,"Package metadata",-1),b=Object(o["f"])("br",null,null,-1),p=Object(o["f"])("span",null,"Type: ",-1),j=Object(o["f"])("label",{for:"python"},"Python (PyPI)",-1),g=Object(o["f"])("label",{for:"node"},"Node (NPM)",-1),O=Object(o["f"])("label",{for:"ruby"},"Ruby (RubyGems)",-1),f=Object(o["f"])("label",{for:"go"},"Go",-1),m=Object(o["f"])("br",null,null,-1),h=Object(o["f"])("span",null,"Environment: ",-1),v=["value","disabled"],y={for:"env-prod"},k=["value","disabled"],w={for:"env-dev"},V=Object(o["f"])("br",null,null,-1),C={name:"ghRepo"},T=Object(o["f"])("legend",null,"GitHub repo",-1),N=Object(o["f"])("br",null,null,-1),S=Object(o["f"])("br",null,null,-1),U={name:"display-options"},q=Object(o["f"])("legend",null,"Display options",-1),B=Object(o["f"])("br",null,null,-1),H=Object(o["f"])("input",{class:"btn",type:"submit",value:"Submit"},null,-1),R={class:"col-6"},x={class:"row"},P={class:"col-12"};function G(e,t,l,G,I,E){const M=Object(o["z"])("TextInput"),z=Object(o["z"])("Results"),D=Object(o["z"])("Help");return Object(o["s"])(),Object(o["e"])("div",n,[a,Object(o["f"])("div",c,[Object(o["f"])("div",d,[Object(o["f"])("div",r,[s,Object(o["f"])("form",{onSubmit:t[12]||(t[12]=Object(o["H"])((...t)=>e.submit&&e.submit(...t),["prevent"]))},[Object(o["f"])("fieldset",u,[i,Object(o["i"])(M,{label:"Name",modelValue:e.pkgName,"onUpdate:modelValue":t[0]||(t[0]=t=>e.pkgName=t),placeholder:"e.g. vue",isRequired:""},null,8,["modelValue"]),b,Object(o["f"])("div",null,[p,Object(o["f"])("div",null,[Object(o["G"])(Object(o["f"])("input",{type:"radio",id:"python",name:"package-type",value:"Python","onUpdate:modelValue":t[1]||(t[1]=t=>e.pkgType=t),checked:""},null,512),[[o["D"],e.pkgType]]),j]),Object(o["f"])("div",null,[Object(o["G"])(Object(o["f"])("input",{type:"radio",id:"node",name:"package-type",value:"Node","onUpdate:modelValue":t[2]||(t[2]=t=>e.pkgType=t)},null,512),[[o["D"],e.pkgType]]),g]),Object(o["f"])("div",null,[Object(o["G"])(Object(o["f"])("input",{type:"radio",id:"ruby",name:"package-type",value:"Ruby","onUpdate:modelValue":t[3]||(t[3]=t=>e.pkgType=t)},null,512),[[o["D"],e.pkgType]]),O]),Object(o["f"])("div",null,[Object(o["G"])(Object(o["f"])("input",{type:"radio",id:"go",name:"package-type",value:"Go","onUpdate:modelValue":t[4]||(t[4]=t=>e.pkgType=t)},null,512),[[o["D"],e.pkgType]]),f])]),m,Object(o["f"])("div",{class:Object(o["o"])(e.dynamicBadgeEnabled?"":e.disabledClass)},[h,Object(o["f"])("span",null,[Object(o["G"])(Object(o["f"])("input",{type:"radio",id:"env-prod",name:"env-type",value:e.prodOption,disabled:!e.dynamicBadgeEnabled,"onUpdate:modelValue":t[5]||(t[5]=t=>e.envType=t),checked:""},null,8,v),[[o["D"],e.envType]]),Object(o["f"])("label",y,Object(o["B"])(e.prodOption),1)]),Object(o["f"])("span",null,[Object(o["G"])(Object(o["f"])("input",{type:"radio",id:"env-dev",name:"env-type",value:e.devOption,disabled:!e.dynamicBadgeEnabled,"onUpdate:modelValue":t[6]||(t[6]=t=>e.envType=t)},null,8,k),[[o["D"],e.envType]]),Object(o["f"])("label",w,Object(o["B"])(e.devOption),1)])],2)]),V,Object(o["f"])("fieldset",C,[T,Object(o["i"])(M,{label:"Username",modelValue:e.username,"onUpdate:modelValue":t[7]||(t[7]=t=>e.username=t),disabled:!e.dynamicBadgeEnabled},null,8,["modelValue","disabled"]),N,Object(o["i"])(M,{label:"Repo name",modelValue:e.repoName,"onUpdate:modelValue":t[8]||(t[8]=t=>e.repoName=t),disabled:!e.dynamicBadgeEnabled},null,8,["modelValue","disabled"])]),S,Object(o["f"])("fieldset",U,[q,Object(o["i"])(M,{label:"Color",modelValue:e.badgeColor,"onUpdate:modelValue":t[9]||(t[9]=t=>e.badgeColor=t),placeholder:"e.g. blue",note:e.colorHelp},null,8,["modelValue","note"]),Object(o["i"])(M,{label:"Logo",modelValue:e.logo,"onUpdate:modelValue":t[10]||(t[10]=t=>e.logo=t),placeholder:"e.g. vue.js",note:e.logoHelp},null,8,["modelValue","note"]),Object(o["i"])(M,{label:"Logo color",modelValue:e.logoColor,"onUpdate:modelValue":t[11]||(t[11]=t=>e.logoColor=t),disabled:""===e.logo||!e.dynamicBadgeEnabled,class:Object(o["o"])(""===e.logo?e.disabledClass:""),placeholder:"e.g. white or #fff or #ffffff",note:e.logoColorHelp},null,8,["modelValue","disabled","class","note"])]),B,H],32)])]),Object(o["f"])("div",R,[Object(o["i"])(z,{result:e.result},null,8,["result"])])]),Object(o["f"])("div",x,[Object(o["f"])("div",P,[Object(o["i"])(D,{message:e.note},null,8,["message"])])])])}var I=l("17a3"),E=l("1092"),M=l("ca2c"),z=l("8169"),D=l("446e"),$=l("0356"),L=l("a5a3"),_=l("b8e9"),A=l("5167"),F=l("7cba"),J=l("8dd6");function Y(e,t,l,o){const n=`${t}/${e}`;return Object(A["a"])(L["h"].label,e,o||L["h"].color,L["h"].isLarge,n,l.logo,l.logoColor)}function K(e,t,l,o,n){const a="Package - "+t;l.isLarge=L["g"].IS_LARGE;const c=Object(J["d"])(e,t,o),d=Object(J["c"])(l);n&&(d.color=n);const r=Object(_["a"])(c,d),s=`${$["e"].Node}/${t}`;return Object(F["b"])({altText:a,imageTarget:r,linkTarget:s})}var Q=l("2eda"),W=l("3a0b");const X="\n- For NPM, the badge is dynamic - whatever package name you set, the version of that package in your repo will be used, without having to update the badge code. The Environent setting is for prod vs dev dependencies.\n- For the rest, the badge is just static - it does not care about your repo. If you put a version number in your badge, you'll have to remember to update it manually.\n- Sample name values for Go: 'http' (redirects to 'net/http') or 'encoding/json'.\n";var Z=Object(o["j"])({name:"PackageBadges",components:{Help:M["a"],Results:z["a"],TextInput:D["a"]},data(){return{pkgName:"vue",pkgType:"Node",devOption:J["a"][J["a"].Dev],prodOption:J["a"][J["a"].Prod],envType:J["a"][J["a"].Prod],username:W["a"].state.repoUsername,repoName:W["a"].state.repoName,badgeColor:I["b"].Default,logo:"",logoColor:I["b"].LogoDefault,result:E["b"],note:X,colorHelp:E["a"],logoHelp:E["d"],logoColorHelp:E["c"],disabledClass:"disabled-text"}},computed:{dynamicBadgeEnabled(){return"Node"===this.pkgType}},methods:{submit(){console.debug("Process inputs and render results");const e={logo:this.logo,logoColor:this.logoColor},t=this.pkgType,l=$["e"][t],o=l?Y(this.pkgName,l,e,this.badgeColor):"";W["a"].setRepoUsername(this.username),W["a"].setRepoName(this.repoName);const n=new Q["a"](this.username,this.repoName),a=this.envType,c=J["a"][a],d=l===$["e"].Node?K(n,this.pkgName,e,c,this.badgeColor):"";this.result=`${o}\n\n${d}\n        `}}}),ee=l("6b0d"),te=l.n(ee);const le=te()(Z,[["render",G]]);t["default"]=le},bdd2:function(e,t,l){},ca2c:function(e,t,l){"use strict";var o=l("7a23");const n={class:"app-notes"},a=Object(o["f"])("h2",null,"Notes",-1);function c(e,t,l,c,d,r){const s=Object(o["z"])("Markdown");return Object(o["s"])(),Object(o["e"])("div",n,[a,Object(o["f"])("p",null,[Object(o["i"])(s,{content:e.message},null,8,["content"])])])}var d=l("e6e0"),r=Object(o["j"])({name:"Help",components:{Markdown:d["a"]},props:{message:{type:String,required:!0}}}),s=l("6b0d"),u=l.n(s);const i=u()(r,[["render",c]]);t["a"]=i}}]);
//# sourceMappingURL=package.12b9dae1.js.map