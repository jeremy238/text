"use strict";(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["files-modal"],{76755:(e,t,l)=>{l.r(t),l.d(t,{default:()=>a});var i=l(70110);const n={name:"PublicFilesEditor",components:{NcModal:l.n(i)(),Editor:function(){return Promise.all([l.e("vendors"),l.e("editor")]).then(l.bind(l,45837))}},props:{fileId:{type:Number,default:null},relativePath:{type:String,default:null},active:{type:Boolean,default:!1},shareToken:{type:String,default:null},mimeType:{type:String,default:null}},computed:{fileName:function(){return this.relativePath.substring(this.relativePath.lastIndexOf("/")+1)}},methods:{close:function(){this.$emit("close")}}};const a=(0,l(51900).Z)(n,(function(){var e=this,t=e._self._c;return e.active?t("NcModal",{attrs:{title:e.fileName},on:{close:e.close}},[t("Editor",{attrs:{"file-id":e.fileId,"relative-path":e.relativePath,active:e.active,"share-token":e.shareToken,mime:e.mimeType}})],1):e._e()}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=files-modal.js.map?v=14a2a95cbf2ba813a70c