"use strict";(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["editor-rich"],{67499:(e,n,i)=>{if(i.d(n,{h0:()=>$,Lz:()=>T,YZ:()=>O,tH:()=>L}),"public"==i.j)var o=i(79954);var r=i(74411);if(!/^(text|viewer)$/.test(i.j))var a=i(42397);var s=i(26937),A=i(79753),c=i(62610),l=i(52029),d=!!document.getElementById("isPublic"),u=(0,A.generateOcsUrl)("apps/text"+(d?"/public":"")+"/workspace",2);const p={name:"RichWorkspace",components:{Editor:function(){return Promise.all([i.e("vendors"),i.e("editor")]).then(i.bind(i,85373))}},props:{path:{type:String,required:!0}},data:function(){return{focus:!1,folder:null,file:null,loaded:!1,ready:!1,autofocus:!1,autohide:!0,darkTheme:OCA.Accessibility&&"dark"===OCA.Accessibility.theme,enabled:OCA.Text.RichWorkspaceEnabled}},computed:{shareToken:function(){var t;return null===(t=document.getElementById("sharingToken"))||void 0===t?void 0:t.value},canCreate:function(){return!!(this.folder&&this.folder.permissions&OC.PERMISSION_CREATE)},showEmptyWorkspace:function(){return(!this.file||this.autofocus&&!this.ready)&&this.canCreate}},watch:{path:function(){this.getFileInfo()},focus:function(t){t||document.querySelector("#rich-workspace .text-editor__main").scrollTo(0,0)}},mounted:function(){this.enabled&&this.getFileInfo(),(0,c.Ld)("Text::showRichWorkspace",this.showRichWorkspace),(0,c.Ld)("Text::hideRichWorkspace",this.hideRichWorkspace),this.listenKeydownEvents()},beforeDestroy:function(){(0,c.r1)("Text::showRichWorkspace",this.showRichWorkspace),(0,c.r1)("Text::hideRichWorkspace",this.hideRichWorkspace),this.unlistenKeydownEvents()},methods:{onBlur:function(){this.listenKeydownEvents()},onFocus:function(){this.focus=!0,this.unlistenKeydownEvents()},reset:function(){var t=this;this.file=null,this.focus=!1,this.$nextTick((function(){t.creating=!1,t.getFileInfo()}))},getFileInfo:function(){var t=this;this.loaded=!1,this.autofocus=!1,this.ready=!1;var e={path:this.path};return d&&(e.shareToken=this.shareToken),s.Z.get(u,{params:e}).then((function(e){var n=e.data.ocs.data;return t.folder=n.folder||null,t.file=n.file,t.editing=!0,t.loaded=!0,!0})).catch((function(e){return e.response.data.ocs&&e.response.data.ocs.data.folder?t.folder=e.response.data.ocs.data.folder:t.folder=null,t.file=null,t.loaded=!0,t.ready=!0,t.creating=!1,!1}))},createNew:function(){var t=this;this.creating||(this.creating=!0,this.getFileInfo().then((function(e){if(!e)return window.FileList.createFile("Readme.md",{scrollTo:!1,animate:!1}).then((function(e,n){return t.getFileInfo()}))})).then((function(){t.autofocus=!0})).catch((function(t){l.k.warn("Create readme failed",{error:t})})))},showRichWorkspace:function(){this.enabled=!0,this.getFileInfo()},hideRichWorkspace:function(){this.enabled=!1},listenKeydownEvents:function(){window.addEventListener("keydown",this.onKeydown)},unlistenKeydownEvents:function(){clearInterval(this.$_timeoutAutohide),window.removeEventListener("keydown",this.onKeydown)},onTimeoutAutohide:function(){this.autohide=!0},onKeydown:function(t){"Tab"===t.key&&(clearInterval(this.$_timeoutAutohide),this.autohide=!1,this.$_timeoutAutohide=setTimeout(this.onTimeoutAutohide,7e3))}}};var h=i(93379),C=i.n(h),m=i(7795),f=i.n(m),b=i(90569),v=i.n(b),k=i(3565),g=i.n(k),w=i(19216),x=i.n(w),_=i(44589),y=i.n(_),D=i(32265),E={};E.styleTagTransform=y(),E.setAttributes=g(),E.insert=v().bind(null,"head"),E.domAPI=f(),E.insertStyleElement=x();C()(D.Z,E);D.Z&&D.Z.locals&&D.Z.locals;const I=(0,i(51900).Z)(p,(function(){var t=this,e=t._self._c;return t.enabled?e("div",{class:{"icon-loading":!t.loaded||!t.ready,focus:t.focus,dark:t.darkTheme,creatable:t.canCreate,empty:t.showEmptyWorkspace},attrs:{id:"rich-workspace"}},[t.showEmptyWorkspace?e("a",{staticClass:"empty-workspace",attrs:{tabindex:"0"},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createNew.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?null:t.createNew.apply(null,arguments)}],click:t.createNew}},[e("p",{staticClass:"placeholder"},[t._v("\n\t\t\t"+t._s(t.t("text","Add notes, lists or links …"))+"\n\t\t")])]):t._e(),t._v(" "),t.file?e("Editor",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],key:t.file.path,attrs:{"file-id":t.file.id,"relative-path":t.file.path,"share-token":t.shareToken,mime:t.file.mimetype,autofocus:t.autofocus,autohide:t.autohide,active:"","rich-workspace":""},on:{ready:function(e){t.ready=!0},focus:t.onFocus,blur:t.onBlur,error:t.reset}}):t._e()],1):t._e()}),[],!1,null,"4ae0b033",null).exports;var B=i(25030),F="Edit with text app",T=function(t,e){var n=t.split("/"),i=e.split("/");for(n.pop();n[0]===i[0];)n.shift(),i.shift();var o=n.fill("..").concat(i),r=e.split("/");return o.length<r.length?o.join("/"):e},L=function(){var e={attach:function(e){var n=e.fileList;"files"!==n.id&&"files.public"!==n.id||e.addMenuEntry({id:"file",displayName:t("text","New text file"),templateName:t("text","New text file")+"."+(0,o.j)("text","default_file_extension"),iconClass:"icon-filetype-text",fileType:"file",actionHandler:function(t){n.createFile(t).then((function(t,e){var i=new OCA.Files.FileInfoModel(e);void 0!==OCA.Viewer?OCA.Files.fileActions.triggerAction("view",i,n):void 0===OCA.Viewer&&OCA.Files.fileActions.triggerAction(F,i,n)}))}})}};OC.Plugins.register("OCA.Files.NewFileMenu",e)},O=function(){var e=(0,a.a)(),n=document.querySelector("#preview table.files-filestable");if(!e||!n){var o=document.createElement("div");o.id="text-viewer-fallback",document.body.appendChild(o);for(var s=function(n){return OCA.Files.fileActions.register(n,F,OC.PERMISSION_UPDATE|OC.PERMISSION_READ,(0,A.imagePath)("core","actions/rename"),(function(t){var n=window.FileList.findFile(t);Promise.all([Promise.resolve().then(i.bind(i,20144)),Promise.all([i.e("vendors"),i.e("files-modal")]).then(i.bind(i,7827))]).then((function(i){var r=window.FileList.getCurrentDirectory()+"/"+t,a=i[0].default;a.prototype.t=window.t,a.prototype.n=window.n,a.prototype.OCA=window.OCA;var s=i[1].default;new a({render:function(t){var i=this;return t(s,{props:{fileId:n?n.id:null,active:!0,shareToken:e,relativePath:r,mimeType:n.mimetype},on:{close:function(){i.$destroy()}}})}}).$mount(o)}))}),t("text","Edit"))},c=0;c<r.SP.length;c++)s(r.SP[c]),OCA.Files.fileActions.setDefault(r.SP[c],F)}},$={el:null,attach:function(t){"files"!==t.id&&"files.public"!==t.id||(this.el=document.createElement("div"),t.registerHeader({id:"workspace",el:this.el,render:this.render.bind(this),priority:10}))},render:function(t){var e=this;"files"!==t.id&&"files.public"!==t.id||Promise.resolve().then(i.bind(i,20144)).then((function(n){var i=n.default;e.el.id="files-workspace-wrapper",i.prototype.t=window.t,i.prototype.n=window.n,i.prototype.OCA=window.OCA;var o=new(i.extend(I))({propsData:{path:t.getCurrentDirectory()},store:B.Z}).$mount(e.el);t.$el.on("urlChanged",(function(t){o.path=t.dir.toString()})),t.$el.on("changeDirectory",(function(t){o.path=t.dir.toString()}))}))}}},42397:(t,e,n)=>{n.d(e,{a:()=>i});var i=function(){return document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null}},31043:(t,e,n)=>{n.d(e,{Z:()=>s});var i=n(87537),o=n.n(i),r=n(23645),a=n.n(r)()(o());a.push([t.id,".menububble[data-v-424d9d98]{display:flex;z-index:10020;background:var(--color-main-background-translucent);box-shadow:0 1px 5px var(--color-box-shadow);border-radius:var(--border-radius-large);overflow:hidden;padding:0;margin-left:10px;height:44px}.menububble__button[data-v-424d9d98]{flex-grow:1;border:0;padding:.9rem .7rem;margin:0;border-radius:0;cursor:pointer;background-color:var(--color-main-background);border-right:1px solid var(--color-border);display:flex;align-items:center}.menububble__button[data-v-424d9d98]:focus,.menububble__button[data-v-424d9d98]:hover{background-color:var(--color-background-hover);border:0;border-right:1px solid var(--color-border) !important}.menububble__button[data-v-424d9d98]:last-child{border:0 !important}.menububble__buttontext[data-v-424d9d98]{padding:.4rem;padding-right:0}.menububble__form[data-v-424d9d98]{display:flex;align-items:center}.menububble__input[data-v-424d9d98]{font:inherit;border:none;background:rgba(0,0,0,0);min-width:250px;margin:0 .5em 0 1em}","",{version:3,sources:["webpack://./src/components/MenuBubble.vue"],names:[],mappings:"AACA,6BACC,YAAA,CACA,aAAA,CACA,mDAAA,CACA,4CAAA,CACA,wCAAA,CACA,eAAA,CACA,SAAA,CACA,gBAAA,CACA,WAAA,CAEA,qCACC,WAAA,CACA,QAAA,CACA,mBAAA,CACA,QAAA,CACA,eAAA,CACA,cAAA,CACA,6CAAA,CACA,0CAAA,CACA,YAAA,CACA,kBAAA,CAEA,sFAEC,8CAAA,CACA,QAAA,CACA,qDAAA,CAGD,gDACC,mBAAA,CAIF,yCACC,aAAA,CACA,eAAA,CAGD,mCACC,YAAA,CACA,kBAAA,CAGD,oCACC,YAAA,CACA,WAAA,CACA,wBAAA,CACA,eAAA,CACA,mBAAA",sourcesContent:["\n.menububble {\n\tdisplay: flex;\n\tz-index: 10020;\n\tbackground: var(--color-main-background-translucent);\n\tbox-shadow: 0 1px 5px var(--color-box-shadow);\n\tborder-radius: var(--border-radius-large);\n\toverflow: hidden;\n\tpadding: 0;\n\tmargin-left: 10px;\n\theight: 44px;\n\n\t&__button {\n\t\tflex-grow: 1;\n\t\tborder: 0;\n\t\tpadding: 0.9rem 0.7rem;\n\t\tmargin: 0;\n\t\tborder-radius: 0;\n\t\tcursor: pointer;\n\t\tbackground-color: var(--color-main-background);\n\t\tborder-right: 1px solid var(--color-border);\n\t\tdisplay: flex;\n\t\talign-items: center;\n\n\t\t&:focus,\n\t\t&:hover {\n\t\t\tbackground-color: var(--color-background-hover);\n\t\t\tborder: 0;\n\t\t\tborder-right: 1px solid var(--color-border) !important;\n\t\t}\n\n\t\t&:last-child {\n\t\t\tborder: 0 !important;\n\t\t}\n\t}\n\n\t&__buttontext {\n\t\tpadding: 0.4rem;\n\t\tpadding-right: 0;\n\t}\n\n\t&__form {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t&__input {\n\t\tfont: inherit;\n\t\tborder: none;\n\t\tbackground: transparent;\n\t\tmin-width: 250px;\n\t\tmargin: 0 0.5em 0 1em;\n\t}\n}\n"],sourceRoot:""}]);const s=a},32265:(t,e,n)=>{n.d(e,{Z:()=>s});var i=n(87537),o=n.n(i),r=n(23645),a=n.n(r)()(o());a.push([t.id,'#rich-workspace[data-v-4ae0b033]{padding:0 50px;margin-bottom:-24px;text-align:left;max-height:0;transition:max-height .5s cubic-bezier(0, 1, 0, 1);z-index:61;position:relative}#rich-workspace.creatable[data-v-4ae0b033]{min-height:90px}#rich-workspace[data-v-4ae0b033]:only-child{margin-bottom:0}.empty-workspace[data-v-4ae0b033]{cursor:pointer;display:block;padding-top:43px;color:var(--color-text-maxcontrast)}#rich-workspace[data-v-4ae0b033] div[contenteditable=false]{width:100%;padding:0px;background-color:var(--color-main-background);opacity:1;border:none}#rich-workspace[data-v-4ae0b033] .text-editor{height:100%;position:unset !important;top:auto !important}#rich-workspace[data-v-4ae0b033] .text-editor__wrapper{position:unset !important;overflow:visible}#rich-workspace[data-v-4ae0b033] .text-editor__main{overflow:visible !important}#rich-workspace[data-v-4ae0b033] .content-wrapper{overflow:scroll !important;max-height:calc(40vh - 50px);padding-left:10px;padding-bottom:60px}#rich-workspace[data-v-4ae0b033] .text-editor__wrapper .ProseMirror{padding:0px;margin:0}#rich-workspace[data-v-4ae0b033] .editor__content{margin:0}#rich-workspace.focus[data-v-4ae0b033]{max-height:50vh}#rich-workspace[data-v-4ae0b033]:not(.focus){max-height:30vh;position:relative;overflow:hidden}#rich-workspace[data-v-4ae0b033]:not(.focus):not(.icon-loading):not(.empty):after{content:"";position:absolute;z-index:1;bottom:0;left:0;pointer-events:none;background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-main-background));width:100%;height:4em}#rich-workspace.dark[data-v-4ae0b033]:not(.focus):not(.icon-loading):after{background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-main-background))}@media only screen and (max-width: 1024px){#rich-workspace[data-v-4ae0b033]:not(.focus){max-height:30vh}}html.ie #rich-workspace[data-v-4ae0b033]  .text-editor{position:initial}html.ie #rich-workspace[data-v-4ae0b033]  .text-editor__wrapper{position:relative !important;top:auto !important}html.ie #rich-workspace[data-v-4ae0b033]  .text-editor__main{display:flex;flex-direction:column;overflow:hidden !important}html.ie #rich-workspace[data-v-4ae0b033]  .menubar{position:relative;overflow:hidden;flex-shrink:0;height:44px;top:auto}html.ie #rich-workspace[data-v-4ae0b033]  .text-editor__main>div:nth-child(2){min-height:44px;overflow-x:hidden;overflow-y:auto;flex-shrink:1}',"",{version:3,sources:["webpack://./src/views/RichWorkspace.vue"],names:[],mappings:"AACA,iCACC,cAAA,CAEA,mBAAA,CACA,eAAA,CACA,YAAA,CACA,kDAAA,CACA,UAAA,CACA,iBAAA,CACA,2CACC,eAAA,CAKF,4CACC,eAAA,CAGD,kCACC,cAAA,CACA,aAAA,CACA,gBAAA,CACA,mCAAA,CAGD,4DACC,UAAA,CACA,WAAA,CACA,6CAAA,CACA,SAAA,CACA,WAAA,CAGD,8CACC,WAAA,CACA,yBAAA,CACA,mBAAA,CAGD,uDACC,yBAAA,CACA,gBAAA,CAGD,oDACC,2BAAA,CAGD,kDACC,0BAAA,CACA,4BAAA,CACA,iBAAA,CACA,mBAAA,CAGD,oEACC,WAAA,CACA,QAAA,CAGD,kDACC,QAAA,CAGD,uCACC,eAAA,CAGD,6CACC,eAAA,CACA,iBAAA,CACA,eAAA,CAGD,kFACC,UAAA,CACA,iBAAA,CACA,SAAA,CACA,QAAA,CACA,MAAA,CACA,mBAAA,CACA,iGAAA,CACA,UAAA,CACA,UAAA,CAGD,2EACC,2FAAA,CAGD,2CACC,6CACC,eAAA,CAAA,CAMA,uDACC,gBAAA,CAGD,gEACC,4BAAA,CACA,mBAAA,CAGD,6DACC,YAAA,CACA,qBAAA,CACA,0BAAA,CAGD,mDACC,iBAAA,CACA,eAAA,CACA,aAAA,CACA,WAAA,CACA,QAAA,CAGD,8EACC,eAAA,CACA,iBAAA,CACA,eAAA,CACA,aAAA",sourcesContent:["\n#rich-workspace {\n\tpadding: 0 50px;\n\t/* Slightly reduce vertical space */\n\tmargin-bottom: -24px;\n\ttext-align: left;\n\tmax-height: 0;\n\ttransition: max-height 0.5s cubic-bezier(0, 1, 0, 1);\n\tz-index: 61;\n\tposition: relative;\n\t&.creatable {\n\t\tmin-height: 90px;\n\t}\n}\n\n/* For subfolders, where there are no Recommendations */\n#rich-workspace:only-child {\n\tmargin-bottom: 0;\n}\n\n.empty-workspace {\n\tcursor: pointer;\n\tdisplay: block;\n\tpadding-top: 43px;\n\tcolor: var(--color-text-maxcontrast);\n}\n\n#rich-workspace:deep(div[contenteditable=false]){\n\twidth: 100%;\n\tpadding: 0px;\n\tbackground-color: var(--color-main-background);\n\topacity: 1;\n\tborder: none;\n}\n\n#rich-workspace:deep(.text-editor) {\n\theight: 100%;\n\tposition: unset !important;\n\ttop: auto !important;\n}\n\n#rich-workspace:deep(.text-editor__wrapper) {\n\tposition: unset !important;\n\toverflow: visible;\n}\n\n#rich-workspace:deep(.text-editor__main) {\n\toverflow: visible !important;\n}\n\n#rich-workspace:deep(.content-wrapper) {\n\toverflow: scroll !important;\n\tmax-height: calc(40vh - 50px);\n\tpadding-left: 10px;\n\tpadding-bottom: 60px; /* ensure menububble fits below */\n}\n\n#rich-workspace:deep(.text-editor__wrapper .ProseMirror) {\n\tpadding: 0px;\n\tmargin: 0;\n}\n\n#rich-workspace:deep(.editor__content) {\n\tmargin: 0;\n}\n\n#rich-workspace.focus {\n\tmax-height: 50vh;\n}\n\n#rich-workspace:not(.focus) {\n\tmax-height: 30vh;\n\tposition: relative;\n\toverflow: hidden;\n}\n\n#rich-workspace:not(.focus):not(.icon-loading):not(.empty):after {\n\tcontent: '';\n\tposition: absolute;\n\tz-index: 1;\n\tbottom: 0;\n\tleft: 0;\n\tpointer-events: none;\n\tbackground-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-main-background));\n\twidth: 100%;\n\theight: 4em;\n}\n\n#rich-workspace.dark:not(.focus):not(.icon-loading):after {\n\tbackground-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-main-background));\n}\n\n@media only screen and (max-width: 1024px) {\n\t#rich-workspace:not(.focus) {\n\t\tmax-height: 30vh;\n\t}\n}\n\nhtml.ie {\n\t#rich-workspace:deep() {\n\t\t.text-editor {\n\t\t\tposition: initial;\n\t\t}\n\n\t\t.text-editor__wrapper {\n\t\t\tposition: relative !important;\n\t\t\ttop: auto !important;\n\t\t}\n\n\t\t.text-editor__main {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\toverflow: hidden !important;\n\t\t}\n\n\t\t.menubar {\n\t\t\tposition: relative;\n\t\t\toverflow: hidden;\n\t\t\tflex-shrink: 0;\n\t\t\theight: 44px;\n\t\t\ttop: auto;\n\t\t}\n\n\t\t.text-editor__main > div:nth-child(2) {\n\t\t\tmin-height: 44px;\n\t\t\toverflow-x: hidden;\n\t\t\toverflow-y: auto;\n\t\t\tflex-shrink: 1;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const s=a},34009:(e,n,i)=>{i.r(n),i.d(n,{default:()=>B});var o=i(20296),r=i.n(o),a=i(7049),s=i(19958),A=i(45994),c=i(79954),l=i(15961),d=i(67499),u=i(31728),p=i(32318);const h={name:"MenuBubble",components:{BubbleMenu:a.NM,LinkIcon:p.xP,Document:p.BB,Delete:p.HG,Check:p.Jr},directives:{tooltip:l.u},mixins:[u.Cy],props:{contentWrapper:{type:HTMLDivElement,required:!1,default:null},filePath:{type:String,required:!1,default:""}},data:function(){return{isActive:!1,linkUrl:null,linkMenuIsActive:!1,isUsingDirectEditing:null!==(0,c.j)("text","directEditingToken",null)}},mounted:function(){this.$_updateIsActive=r()(this.updateIsActive.bind(this),50),this.$editor.on("update",this.$_updateIsActive),this.$editor.on("selectionUpdate",this.$_updateIsActive)},beforeDestroy:function(){this.$editor.off("update",this.$_updateIsActive),this.$editor.off("selectionUpdate",this.$_updateIsActive)},methods:{showLinkMenu:function(){var t=this,e=(0,s.Jo)(this.$editor.state,"link");this.linkUrl=e.href,this.linkMenuIsActive=!0,this.$nextTick((function(){t.$refs.linkInput.focus()}))},hideLinkMenu:function(){this.linkUrl=null,this.linkMenuIsActive=!1},selectFile:function(){var e=this;if((0,A.ts)()){var n=this.filePath.split("/").slice(0,-1).join("/");OC.dialogs.filepicker(t("text","Select file to link to"),(function(t){OC.Files.getClient().getFileInfo(t).then((function(t,n){var i=(0,d.Lz)(e.filePath,"".concat(n.path,"/").concat(n.name)).split("/").map(encodeURIComponent).join("/"),o="".concat(i,"?fileId=").concat(n.id);e.$editor.chain().setLink({href:o}).focus().run(),e.hideLinkMenu()}))}),!1,[],!0,void 0,n)}},setLinkUrl:function(){var t=this.linkUrl;t&&![/^[a-zA-Z]+:/,/^\//,/\?fileId=/,/^\.\.?\//,/^[^.]*[/$]/,/^#/].find((function(e){return t.match(e)}))&&(t="https://"+t);var e=t.replaceAll(" ","%20");this.$editor.chain().setLink({href:e}).focus().run(),this.hideLinkMenu()},removeLinkUrl:function(){this.$editor.chain().unsetLink().focus().run()},updateIsActive:function(){this.isActive=this.$editor.isActive("link")}}};var C=i(93379),m=i.n(C),f=i(7795),b=i.n(f),v=i(90569),k=i.n(v),g=i(3565),w=i.n(g),x=i(19216),_=i.n(x),y=i(44589),D=i.n(y),E=i(31043),I={};I.styleTagTransform=D(),I.setAttributes=w(),I.insert=k().bind(null,"head"),I.domAPI=b(),I.insertStyleElement=_();m()(E.Z,I);E.Z&&E.Z.locals&&E.Z.locals;const B=(0,i(51900).Z)(h,(function(){var t=this,e=t._self._c;return e("BubbleMenu",{staticClass:"menububble",attrs:{editor:t.$editor,"tippy-options":{onHide:t.hideLinkMenu,duration:200,placement:"bottom"},"data-text-el":"menu-bubble"}},[t.linkMenuIsActive?e("form",{staticClass:"menububble__form",on:{submit:function(e){return e.preventDefault(),t.setLinkUrl()}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.linkUrl,expression:"linkUrl"}],ref:"linkInput",staticClass:"menububble__input",attrs:{type:"text",placeholder:"https://"},domProps:{value:t.linkUrl},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.hideLinkMenu.apply(null,arguments)},input:function(e){e.target.composing||(t.linkUrl=e.target.value)}}}),t._v(" "),e("button",{staticClass:"menububble__button",attrs:{"data-text-bubble-action":"confirm",type:"button",tabindex:"0"},on:{click:function(e){return t.setLinkUrl()}}},[e("Check")],1)]):[e("button",{staticClass:"menububble__button",class:{"is-active":t.isActive},attrs:{"data-text-bubble-action":"add-link"},on:{click:function(e){return t.showLinkMenu()}}},[e("LinkIcon"),t._v(" "),e("span",{staticClass:"menububble__buttontext"},[t._v("\n\t\t\t\t"+t._s(t.isActive?t.t("text","Update Link"):t.t("text","Add Link"))+"\n\t\t\t")])],1),t._v(" "),t.isUsingDirectEditing?t._e():e("button",{staticClass:"menububble__button",class:{"is-active":t.isActive},attrs:{"data-text-bubble-action":"add-file"},on:{click:function(e){return t.selectFile()}}},[e("Document"),t._v(" "),e("span",{staticClass:"menububble__buttontext"},[t._v(t._s(t.t("text","Link file")))])],1),t._v(" "),t.isActive?e("button",{staticClass:"menububble__button",class:{"is-active":t.isActive},attrs:{"data-text-bubble-action":"remove-link"},on:{click:function(e){return t.removeLinkUrl()}}},[e("Delete"),t._v(" "),e("span",{staticClass:"menububble__buttontext"},[t._v("\n\t\t\t\t"+t._s(t.t("text","Remove Link"))+"\n\t\t\t")])],1):t._e()]],2)}),[],!1,null,"424d9d98",null).exports}}]);
//# sourceMappingURL=editor-rich.js.map?v=9775698966aa87c770fe