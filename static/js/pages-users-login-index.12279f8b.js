(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-login-index"],{"0397":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-wrapper"},[n("div",{staticClass:"shading"},[n("v-uni-image",{attrs:{src:"/static/images/logo2.png"}})],1),n("div",{staticClass:"whiteBg"},[1!==t.current?n("div",{staticClass:"list"},[n("v-uni-form",{on:{submit:function(e){e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"24rpx",height:"34rpx"},attrs:{src:"/static/images/phone_1.png"}}),n("v-uni-input",{staticClass:"texts",attrs:{type:"text",placeholder:"输入手机号码",required:!0},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1)]),n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"28rpx",height:"32rpx"},attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{staticClass:"texts",attrs:{type:"password",placeholder:"填写登录密码",required:!0},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)])])],1):t._e(),0!==t.current||t.appLoginStatus||t.appleLoginStatus?n("div",{staticClass:"list"},[n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"24rpx",height:"34rpx"},attrs:{src:"/static/images/phone_1.png"}}),n("v-uni-input",{staticClass:"texts",attrs:{type:"text",placeholder:"输入手机号码"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1)]),n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"28rpx",height:"32rpx"},attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{staticClass:"codeIput",attrs:{type:"text",placeholder:"填写验证码"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),n("v-uni-button",{staticClass:"code",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)]),t.isShowCode?n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"28rpx",height:"32rpx"},attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{staticClass:"codeIput",attrs:{type:"text",placeholder:"填写验证码"},model:{value:t.codeVal,callback:function(e){t.codeVal=e},expression:"codeVal"}})],1)]):t._e()]):t._e(),0!==t.current?n("div",{staticClass:"logon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loginMobile.apply(void 0,arguments)}}},[t._v("登录")]):t._e(),0===t.current?n("div",{staticClass:"logon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("登录")]):t._e(),n("div",{staticClass:"tips"},[0===t.current?n("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.current=1}}},[t._v("快速登录")]):t._e(),1===t.current?n("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.current=0}}},[t._v("账号登录")]):t._e()])]),n("div",{staticClass:"bottom"})])},a=[]},2010:function(t,e,n){var i=n("50a7");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("8cb2b6aa",i,!0,{sourceMap:!1,shadowMode:!1})},"307b":function(t,e,n){"use strict";n.r(e);var i=n("8e52"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"50a7":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-300ae30c]{background:#fff}body.?%PAGE?%[data-v-300ae30c]{background:#fff}.appLogin[data-v-300ae30c]{margin-top:%?60?%}.appLogin .hds[data-v-300ae30c]{display:flex;justify-content:center;align-items:center;font-size:%?24?%;color:#b4b4b4}.appLogin .hds .line[data-v-300ae30c]{width:%?68?%;height:%?1?%;background:#ccc}.appLogin .hds p[data-v-300ae30c]{margin:0 %?20?%}.appLogin .btn-wrapper[data-v-300ae30c]{display:flex;align-items:center;justify-content:center;margin-top:%?30?%}.appLogin .btn-wrapper .btn[data-v-300ae30c]{display:flex;align-items:center;justify-content:center;width:%?68?%;height:%?68?%;border-radius:50%}.appLogin .btn-wrapper .apple-btn[data-v-300ae30c]{display:flex;align-items:center;justify-content:center;margin-left:%?30?%;background:#000;border-radius:%?34?%;font-size:%?40?%}.appLogin .btn-wrapper .apple-btn .icon-s-pingguo[data-v-300ae30c]{color:#fff;font-size:%?40?%}.appLogin .btn-wrapper .iconfont[data-v-300ae30c]{font-size:%?40?%;color:#fff}.appLogin .btn-wrapper .wx[data-v-300ae30c]{margin-right:%?30?%;background-color:#61c64f}.appLogin .btn-wrapper .mima[data-v-300ae30c]{background-color:#28b3e9}.appLogin .btn-wrapper .yanzheng[data-v-300ae30c]{background-color:#f89c23}.code img[data-v-300ae30c]{width:100%;height:100%}.acea-row.row-middle uni-input[data-v-300ae30c]{margin-left:%?20?%;display:block}.login-wrapper[data-v-300ae30c]{padding:%?30?%}.login-wrapper .shading[data-v-300ae30c]{display:flex;align-items:center;justify-content:center;width:100%;margin-top:%?200?%}.login-wrapper .shading uni-image[data-v-300ae30c]{width:%?180?%;height:%?180?%}.login-wrapper .whiteBg[data-v-300ae30c]{margin-top:%?100?%}.login-wrapper .whiteBg .list[data-v-300ae30c]{border-radius:%?16?%;overflow:hidden}.login-wrapper .whiteBg .list .item[data-v-300ae30c]{border-bottom:1px solid #f0f0f0;background:#fff}.login-wrapper .whiteBg .list .item .row-middle[data-v-300ae30c]{position:relative;padding:%?16?% %?45?%}.login-wrapper .whiteBg .list .item .row-middle .texts[data-v-300ae30c]{flex:1;font-size:%?28?%;height:%?80?%;line-height:%?80?%;display:flex;justify-content:center;align-items:center}.login-wrapper .whiteBg .list .item .row-middle uni-input[data-v-300ae30c]{flex:1;font-size:%?28?%;height:%?80?%;line-height:%?80?%;display:flex;justify-content:center;align-items:center}.login-wrapper .whiteBg .list .item .row-middle .code[data-v-300ae30c]{position:absolute;right:%?30?%;top:50%;color:#e93323;font-size:%?26?%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.login-wrapper .whiteBg .logon[data-v-300ae30c]{display:flex;align-items:center;justify-content:center;width:100%;height:%?86?%;margin-top:%?80?%;background-color:#e93323;border-radius:%?120?%;color:#fff;font-size:%?30?%}.login-wrapper .whiteBg .tips[data-v-300ae30c]{margin:%?30?%;text-align:center;color:#999}',""]),t.exports=e},5680:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{disabled:!1,text:"获取验证码"}},methods:{sendCode:function(){var t=this;if(!this.disabled){this.disabled=!0;var e=60;this.text="剩余 "+e+"s";var n=setInterval((function(){e-=1,e<0&&clearInterval(n),t.text="剩余 "+e+"s",t.text<"剩余 0s"&&(t.disabled=!1,t.text="重新获取")}),1e3)}}}};e.default=i},"75f3":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.appAuth=function(t){return a.default.post("wechat/authorize/app/login",t,{noAuth:!0})},e.appleLogin=function(t){return a.default.post("ios/login",t,{noAuth:!0})},e.copyWords=function(){return a.default.get("copy_words",{},{noAuth:!0})},e.follow=function(){return a.default.get("wechat/follow",{},{noAuth:!0})},e.getLogo=function(){return a.default.get("wechat/getLogo",{},{noAuth:!0})},e.getShare=function(){return a.default.get("share",{},{noAuth:!0})},e.getUserPhone=function(t){return a.default.post("wechat/register/binding/phone",t,{noAuth:!0})},e.getWechatConfig=function(){return a.default.get("wechat/config",{url:encodeURIComponent(o.default.signLink())},{noAuth:!0})},e.imageBase64=function(t){return a.default.post("qrcode/base64",t,{noAuth:!0},1)},e.iosBinding=function(t){return a.default.post("ios/binding/phone",t,{noAuth:!0})},e.kefuConfig=function(){return a.default.get("config",{},{noAuth:!0})},e.login=function(t,e){return a.default.post("wechat/authorize/program/login?code="+t,e,{noAuth:!0})},e.wechatAuth=function(t,e){return e=/^[0-9]+.?[0-9]*$/.test(e)?e:0,a.default.get("wechat/authorize/login?code="+t+"&spread_spid="+e,{},{noAuth:!0})},n("ac1f"),n("00b4");var a=i(n("e145")),o=i(n("090c"));n("4844")},7730:function(t,e,n){"use strict";n.r(e);var i=n("0397"),a=n("307b");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("f5f6");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"300ae30c",null,!1,i["a"],void 0);e["default"]=s.exports},"8e52":function(t,e,n){"use strict";(function(t){n("7a82");var i=n("dbce").default,a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("00b4"),n("c975");var o=a(n("c7eb")),r=a(n("1da1")),s=a(n("5680")),c=i(n("31173")),u=i(n("f7ba")),d=n("75f3"),l=i(n("55bc")),p=(a(n("ef01")),{name:"Login",mixins:[s.default],data:function(){return{current:1,account:"",password:"",captcha:"",type:"login",codeVal:"",isShowCode:!1,platform:"",appLoginStatus:!1,appUserInfo:null,appleLoginStatus:!1,appleUserInfo:null,appleShow:!1}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(e){"ios"===e.platform.toLowerCase()&&e.system.split(" ")[1]>=13&&(t.appleShow=!0)}})},methods:{appleLogin:function(){var e=this;this.account="",this.captcha="",uni.showLoading({title:"登录中"}),uni.login({provider:"apple",timeout:1e4,success:function(t){uni.getUserInfo({provider:"apple",success:function(t){e.appleUserInfo=t.userInfo,e.appleLoginApi()},fail:function(){uni.hideLoading(),uni.showToast({title:"获取用户信息失败",icon:"none",duration:2e3})},complete:function(){uni.hideLoading()}})},fail:function(e){uni.hideLoading(),t.log(e)}})},appleLoginApi:function(){var e=this;(0,d.appleLogin)({openId:this.appleUserInfo.openId,email:void 0==this.appleUserInfo.email?"":this.appleUserInfo.email,identityToken:this.appleUserInfo.identityToken||""}).then((function(t){e.$store.commit("LOGIN",{token:t.data.token}),e.getUserInfo(t.data)})).catch((function(e){uni.hideLoading(),uni.showModal({title:"提示",content:"错误信息".concat(e),success:function(e){e.confirm?t.log("用户点击确定"):e.cancel&&t.log("用户点击取消")}})}))},wxLogin:function(){var t=this;this.account="",this.captcha="",uni.showLoading({title:"登录中"}),uni.login({provider:"weixin",success:function(e){uni.getUserInfo({provider:"weixin",success:function(e){uni.hideLoading(),t.appUserInfo=e.userInfo,t.appUserInfo.type="ios"===t.platform?"iosWx":"androidWx",t.wxLoginGo(t.appUserInfo)},fail:function(){uni.hideLoading(),uni.showToast({title:"获取用户信息失败",icon:"none",duration:2e3})},complete:function(){uni.hideLoading()}})},fail:function(){uni.hideLoading(),uni.showToast({title:"登录失败",icon:"none",duration:2e3})}})},wxLoginGo:function(t){var e=this;(0,d.appAuth)(t).then((function(t){"register"===t.data.type&&uni.navigateTo({url:"/pages/users/app_login/index?authKey="+t.data.key}),"login"===t.data.type&&(e.$store.commit("LOGIN",{token:t.data.token}),e.getUserInfo(t.data))})).catch((function(t){that.$util.Tips({title:t})}))},loginMobile:function(){var t=this;return(0,r.default)((0,o.default)().mark((function e(){return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.account){e.next=2;break}return e.abrupt("return",t.$util.Tips({title:"请填写手机号码"}));case 2:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(t.account)){e.next=4;break}return e.abrupt("return",t.$util.Tips({title:"请输入正确的手机号码"}));case 4:if(t.captcha){e.next=6;break}return e.abrupt("return",t.$util.Tips({title:"请填写验证码"}));case 6:if(/^[\w\d]+$/i.test(t.captcha)){e.next=8;break}return e.abrupt("return",t.$util.Tips({title:"请输入正确的验证码"}));case 8:void 0,void 0,void 0,c.smsLogin({mobile:t.account,code:t.captcha,socialType:void 0,socialCode:void 0,socialState:void 0}).then((function(e){var n=e.data;t.$store.commit("LOGIN",{token:e.data.accessToken}),t.getUserInfo(n),t.bindBrokerUser()})).catch((function(e){t.$util.Tips({title:e})}));case 12:case"end":return e.stop()}}),e)})))()},code:function(){var t=this;return(0,r.default)((0,o.default)().mark((function e(){return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.account){e.next=2;break}return e.abrupt("return",t.$util.Tips({title:"请填写手机号码"}));case 2:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(t.account)){e.next=4;break}return e.abrupt("return",t.$util.Tips({title:"请输入正确的手机号码"}));case 4:return e.next=6,c.sendSmsCode(t.account,1).then((function(e){t.$util.Tips({title:e.message}),t.sendCode()})).catch((function(e){return t.$util.Tips({title:e})}));case 6:case"end":return e.stop()}}),e)})))()},submit:function(){var t=this;return(0,r.default)((0,o.default)().mark((function e(){return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.account){e.next=2;break}return e.abrupt("return",t.$util.Tips({title:"请填写账号"}));case 2:if(/^[\w\d]{5,16}$/i.test(t.account)){e.next=4;break}return e.abrupt("return",t.$util.Tips({title:"请输入正确的账号"}));case 4:if(t.password){e.next=6;break}return e.abrupt("return",t.$util.Tips({title:"请填写密码"}));case 6:void 0,void 0,void 0,c.login({mobile:t.account,password:t.password,socialType:void 0,socialCode:void 0,socialState:void 0}).then((function(e){var n=e.data;t.$store.commit("LOGIN",{token:n.accessToken}),t.getUserInfo(n),t.bindBrokerUser()})).catch((function(e){t.$util.Tips({title:e})}));case 10:case"end":return e.stop()}}),e)})))()},getUserInfo:function(t){var e=this;this.$store.commit("SETUID",t.userId),this.$store.commit("OPENID",t.openid),u.getUserInfo().then((function(t){e.$store.commit("UPDATE_USERINFO",t.data);var n=e.$Cache.get("login_back_url")||"/pages/index/index";0!==n.indexOf("/")&&(n="/"+n),0===n.indexOf("/pages/users/login/index")&&(n="/pages/index/index"),uni.reLaunch({url:n})}))},bindBrokerUser:function(){var t=this.$Cache.get("spread");t>0&&l.bindBrokerageUser(t)}}});e.default=p}).call(this,n("5a52")["default"])},f5f6:function(t,e,n){"use strict";var i=n("2010"),a=n.n(i);a.a}}]);