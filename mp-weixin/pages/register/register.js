(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"172c":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement;t._self._c},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}))},"2f41":function(t,i,e){"use strict";var n=e("5668"),a=e.n(n);a.a},"510a":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,i,e,n,a,r,u){try{var s=t[r](u),o=s.value}catch(h){return void e(h)}s.done?i(o):Promise.resolve(o).then(n,a)}function u(t){return function(){var i=this,e=arguments;return new Promise((function(n,a){var u=t.apply(i,e);function s(t){r(u,n,a,s,o,"next",t)}function o(t){r(u,n,a,s,o,"throw",t)}s(void 0)}))}}var s={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,maijiaxingbieOptions:[],maijiaxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var i=u(n.default.mark((function i(){var e;return n.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:[],e=t.getStorageSync("loginTable"),this.tableName=e,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yonghuxingbieOptions[0]),"maijia"==this.tableName&&(this.maijiaxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.maijiaxingbieOptions[0]),this.styleChange();case 6:case"end":return i.stop()}}),i,this)})));function e(){return i.apply(this,arguments)}return e}(),methods:{yonghuxingbieChange:function(t){this.yonghuxingbieIndex=t.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},maijiaxingbieChange:function(t){this.maijiaxingbieIndex=t.target.value,this.ruleForm.xingbie=this.maijiaxingbieOptions[this.maijiaxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var t=u(n.default.mark((function t(){return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.yonghuming||"yonghu"!=this.tableName){t.next=3;break}return this.$utils.msg("用户名不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(this.ruleForm.xingming||"yonghu"!=this.tableName){t.next=9;break}return this.$utils.msg("姓名不能为空"),t.abrupt("return");case 9:if("yonghu"!=this.tableName||!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){t.next=12;break}return this.$utils.msg("联系电话应输入手机格式"),t.abrupt("return");case 12:if(this.ruleForm.maijiazhanghao||"maijia"!=this.tableName){t.next=15;break}return this.$utils.msg("卖家账号不能为空"),t.abrupt("return");case 15:if(this.ruleForm.mima||"maijia"!=this.tableName){t.next=18;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 18:if(this.ruleForm.maijiaxingming||"maijia"!=this.tableName){t.next=21;break}return this.$utils.msg("卖家姓名不能为空"),t.abrupt("return");case 21:if("maijia"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){t.next=24;break}return this.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 24:return t.next=26,this.$api.register("".concat(this.tableName),this.ruleForm);case 26:this.$utils.msgBack("注册成功");case 28:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}()}};i.default=s}).call(this,e("543d")["default"])},5668:function(t,i,e){},"7e73":function(t,i,e){"use strict";e.r(i);var n=e("172c"),a=e("c7db");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("2f41");var u,s=e("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"2d566685",null,!1,n["a"],u);i["default"]=o.exports},c7db:function(t,i,e){"use strict";e.r(i);var n=e("510a"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},f04b:function(t,i,e){"use strict";(function(t){e("c6d3"),e("921b");n(e("66fd"));var i=n(e("7e73"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("543d")["createPage"])}},[["f04b","common/runtime","common/vendor"]]]);