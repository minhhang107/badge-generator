(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["generic"],{"1cf6":function(e,t,l){"use strict";var o=l("7a23");function n(e,t,l,n,a,c){return Object(o["q"])(),Object(o["d"])("pre",null,[Object(o["h"])("code",{ref:"codeBlock",class:"markdown"},Object(o["z"])(e.code),513)])}var a=l("1487"),c=l.n(a),s=Object(o["i"])({name:"Code",props:{code:{type:String,required:!0}},methods:{highlight(){const e=this.$refs.codeBlock;c.a.highlightBlock(e)}},mounted(){this.highlight()},updated(){this.highlight()}});s.render=n;t["a"]=s},2156:function(e,t,l){"use strict";l("bdd2")},"446e":function(e,t,l){"use strict";var o=l("7a23");const n=Object(o["G"])("data-v-de2a2f90");Object(o["t"])("data-v-de2a2f90");const a={key:0,class:"required"},c={key:0,class:"note"};Object(o["r"])();const s=n((e,t,l,n,s,r)=>{const u=Object(o["x"])("Markdown");return Object(o["q"])(),Object(o["d"])("div",null,[Object(o["h"])("label",{for:e.slug},[Object(o["g"])(Object(o["z"])(e.label),1),e.isRequired?(Object(o["q"])(),Object(o["d"])("span",a,"*")):Object(o["e"])("",!0)],8,["for"]),Object(o["h"])("input",{id:e.slug,type:"text",value:e.modelValue,placeholder:e.placeholder,required:e.isRequired,disabled:e.disabled,onInput:t[1]||(t[1]=t=>e.$emit("update:modelValue",t.target.value))},null,40,["id","value","placeholder","required","disabled"]),e.note?(Object(o["q"])(),Object(o["d"])("small",c,[Object(o["h"])(u,{content:e.note},null,8,["content"])])):Object(o["e"])("",!0)])});var r=l("84f8"),u=l("e6e0"),i=Object(o["i"])({name:"TextInput",components:{Markdown:u["a"]},props:{label:{type:String,required:!0},modelValue:{type:String,required:!0},placeholder:{type:String,required:!1},isRequired:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return Object(r["a"])("text",this.label,this.modelValue)}}});l("2156");i.render=s,i.__scopeId="data-v-de2a2f90";t["a"]=i},7737:function(e,t,l){"use strict";var o=l("7a23");const n={key:0,class:"note"};function a(e,t,l,a,c,s){const r=Object(o["x"])("Markdown");return Object(o["q"])(),Object(o["d"])("div",null,[Object(o["h"])("label",{for:e.slug},Object(o["z"])(e.label),9,["for"]),Object(o["h"])("input",{id:e.slug,type:"checkbox",checked:e.modelValue,onChange:t[1]||(t[1]=t=>e.$emit("update:modelValue",t.target.checked))},null,40,["id","checked"]),e.note?(Object(o["q"])(),Object(o["d"])("small",n,[Object(o["h"])(r,{content:e.note},null,8,["content"])])):Object(o["e"])("",!0)])}var c=l("e6e0"),s=l("84f8"),r=Object(o["i"])({name:"Checkbox",components:{Markdown:c["a"]},props:{label:{type:String,required:!0},modelValue:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return Object(s["a"])("box",this.label)}}});r.render=a;t["a"]=r},8169:function(e,t,l){"use strict";var o=l("7a23");const n={class:"app-results"},a=Object(o["h"])("h2",null,"Output values",-1),c=Object(o["h"])("h3",null,"Preview",-1),s=Object(o["h"])("h3",null,"Code",-1);function r(e,t,l,r,u,i){const d=Object(o["x"])("Markdown"),b=Object(o["x"])("Code");return Object(o["q"])(),Object(o["d"])("div",n,[a,Object(o["h"])("div",null,[c,Object(o["h"])(d,{content:e.result},null,8,["content"])]),Object(o["h"])("div",null,[s,Object(o["h"])(b,{code:e.result},null,8,["code"])])])}var u=l("1cf6"),i=l("e6e0"),d=Object(o["i"])({name:"Results",components:{Markdown:i["a"],Code:u["a"]},props:{result:String}});d.render=r;t["a"]=d},"84f8":function(e,t,l){"use strict";function o(e){return e.replace(/^\/+/,"")}function n(...e){const t=e.join("-");return t.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}l.d(t,"b",(function(){return o})),l.d(t,"a",(function(){return n}))},bdd2:function(e,t,l){},ca2c:function(e,t,l){"use strict";var o=l("7a23");const n={class:"app-notes"},a=Object(o["h"])("h2",null,"Notes",-1);function c(e,t,l,c,s,r){const u=Object(o["x"])("Markdown");return Object(o["q"])(),Object(o["d"])("div",n,[a,Object(o["h"])("p",null,[Object(o["h"])(u,{content:e.message},null,8,["content"])])])}var s=l("e6e0"),r=Object(o["i"])({name:"Help",components:{Markdown:s["a"]},props:{message:String}});r.render=c;t["a"]=r},f3c2:function(e,t,l){"use strict";l.r(t);var o=l("7a23");const n={class:"badges container-lg"},a=Object(o["h"])("div",{class:"row"},[Object(o["h"])("div",{class:"col-12"},[Object(o["h"])("h1",null,"Generic badges")])],-1),c={class:"row"},s={class:"col-6"},r={class:"app-input"},u=Object(o["h"])("h2",null,"Input values",-1),i={name:"text"},d=Object(o["h"])("legend",null,"Text",-1),b=Object(o["h"])("br",null,null,-1),h=Object(o["h"])("br",null,null,-1),p=Object(o["h"])("br",null,null,-1),g={name:"appearance"},j=Object(o["h"])("legend",null,"Appearance",-1),O=Object(o["h"])("br",null,null,-1),m=Object(o["h"])("br",null,null,-1),f={name:"links"},v=Object(o["h"])("legend",null,"Links",-1),k=Object(o["h"])("br",null,null,-1),y=Object(o["h"])("input",{class:"btn",type:"submit",value:"Submit"},null,-1),V={class:"col-6"},q={class:"row"},w={class:"col-12"};function x(e,t,l,x,C,L){const S=Object(o["x"])("TextInput"),R=Object(o["x"])("Checkbox"),U=Object(o["x"])("Results"),M=Object(o["x"])("Help");return Object(o["q"])(),Object(o["d"])("div",n,[a,Object(o["h"])("div",c,[Object(o["h"])("div",s,[Object(o["h"])("div",r,[u,Object(o["h"])("form",{onSubmit:t[8]||(t[8]=Object(o["F"])((...t)=>e.submit&&e.submit(...t),["prevent"]))},[Object(o["h"])("fieldset",i,[d,Object(o["h"])(S,{label:"Label",modelValue:e.label,"onUpdate:modelValue":t[1]||(t[1]=t=>e.label=t)},null,8,["modelValue"]),b,Object(o["h"])(S,{label:"Message",modelValue:e.message,"onUpdate:modelValue":t[2]||(t[2]=t=>e.message=t),isRequired:""},null,8,["modelValue"]),h]),p,Object(o["h"])("fieldset",g,[j,Object(o["h"])(S,{label:"Color",modelValue:e.color,"onUpdate:modelValue":t[3]||(t[3]=t=>e.color=t),note:"Hints: `brightgreen`, `green`, `yellowgreen`, `yellow`, `orange`, `red`, `blue`, `lightgrey`, `success`, `important`, `critical`, `informational`, `inactive`, `blueviolet`, `ff69b4`, `9cf`",isRequired:""},null,8,["modelValue"]),Object(o["h"])(R,{label:"Large",modelValue:e.isLarge,"onUpdate:modelValue":t[4]||(t[4]=t=>e.isLarge=t)},null,8,["modelValue"]),O,Object(o["h"])(S,{label:"Logo",modelValue:e.logo,"onUpdate:modelValue":t[5]||(t[5]=t=>e.logo=t),note:"Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`"},null,8,["modelValue"]),Object(o["h"])(S,{label:"Logo color",modelValue:e.logoColor,"onUpdate:modelValue":t[6]||(t[6]=t=>e.logoColor=t),disabled:""===e.logo,note:"The badge's own color will be used unless you specify an override. Using `white` is great for readability against the dark label background."},null,8,["modelValue","disabled"])]),m,Object(o["h"])("fieldset",f,[v,Object(o["h"])(S,{label:"Click target",modelValue:e.target,"onUpdate:modelValue":t[7]||(t[7]=t=>e.target=t),placeholder:"e.g. https://example.com",note:"URL or a local path like `/docs/`. This doesn't have to be set, but a button without a click destination is not so useful."},null,8,["modelValue"])]),k,y],32)])]),Object(o["h"])("div",V,[Object(o["h"])(U,{result:e.result},null,8,["result"])])]),Object(o["h"])("div",q,[Object(o["h"])("div",w,[Object(o["h"])(M,{message:e.note},null,8,["message"])])])])}var C=l("7737"),L=l("ca2c"),S=l("8169"),R=l("446e"),U=l("5167"),M=l("17a3");const B="\nThis form lets you create a fixed badge using arbitrary text and a link.\n\nFor example, describe a tools or platforms your repo is built on or built for running. This form takes care of encoding characters so they are safe for the badge URL.\n";var T=Object(o["i"])({name:"GenericBadges",components:{Checkbox:C["a"],Help:L["a"],Results:S["a"],TextInput:R["a"]},data(){return{label:"Foo",message:"Bar",color:M["a"].Green,isLarge:!1,target:"https://",logo:"",logoColor:"",result:"_Your output will appear here_",note:B}},methods:{submit(){console.debug("Process inputs and render results");const e=[this.label,this.message,this.color,this.isLarge,this.target,this.logo,this.logoColor];console.debug(e);const t=Object(U["a"])(this.label,this.message,this.color,this.isLarge,this.target,this.logo,this.logoColor,!1),l=Object(U["a"])(this.label,this.message,this.color,this.isLarge,this.target,this.logo,this.logoColor,!0);this.result=`_Dash badge_\n\n${t}\n\n_Query parameter badge_\n\n${l}\n      `}}});T.render=x;t["default"]=T}}]);
//# sourceMappingURL=generic.5c6cee3f.js.map