(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order_details-index"],{"144e":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"payment",class:e.pay_close?"on":""},[i("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[e._v("选择付款方式"),i("v-uni-text",{staticClass:"iconfont icon-guanbi",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}})],1),e._l(e.payMode,(function(t,a){return i("v-uni-view",{key:a,staticClass:"item acea-row row-between-wrapper",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.goPay(t.number||0,t.value)}}},[i("v-uni-view",{staticClass:"left acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"iconfont",class:t.icon}),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"name"},[e._v(e._s(t.name))]),t.number?i("v-uni-view",{staticClass:"info"},[e._v(e._s(t.title)),i("span",{staticClass:"money"},[e._v("￥"+e._s(t.number))])]):i("v-uni-view",{staticClass:"info"},[e._v(e._s(t.title))])],1)],1),i("v-uni-view",{staticClass:"iconfont icon-xiangyou"})],1)}))],2),e.pay_close?i("v-uni-view",{staticClass:"mask",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}}):e._e()],1)},n=[]},"1e29":function(e,t,i){"use strict";i.r(t);var a=i("144e"),n=i("bd50");for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("26ef");var o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"609b1e56",null,!1,a["a"],void 0);t["default"]=s.exports},"26ef":function(e,t,i){"use strict";var a=i("5c7e"),n=i.n(a);n.a},"2c4d":function(e,t,i){"use strict";i.r(t);var a=i("ce50"),n=i("e96f");for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("fb09"),i("cddf");var o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"bbff0936",null,!1,a["a"],void 0);t["default"]=s.exports},"5c36":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.payment[data-v-609b1e56]{position:fixed;bottom:0;left:0;width:100%;border-radius:%?16?% %?16?% 0 0;background-color:#fff;padding-bottom:%?60?%;z-index:99;transition:all .3s cubic-bezier(.25,.5,.5,.9);-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.payment.on[data-v-609b1e56]{-webkit-transform:translateZ(0);transform:translateZ(0)}.payment .title[data-v-609b1e56]{text-align:center;height:%?123?%;font-size:%?32?%;color:#282828;font-weight:700;padding-right:%?30?%;margin-left:%?30?%;position:relative;border-bottom:%?1?% solid #eee}.payment .title .iconfont[data-v-609b1e56]{position:absolute;right:%?30?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:%?43?%;color:#8a8a8a;font-weight:400}.payment .item[data-v-609b1e56]{border-bottom:%?1?% solid #eee;height:%?130?%;margin-left:%?30?%;padding-right:%?30?%}.payment .item .left[data-v-609b1e56]{width:%?610?%}.payment .item .left .text[data-v-609b1e56]{width:%?540?%}.payment .item .left .text .name[data-v-609b1e56]{font-size:%?32?%;color:#282828}.payment .item .left .text .info[data-v-609b1e56]{font-size:%?24?%;color:#999}.payment .item .left .text .info .money[data-v-609b1e56]{color:#f90}.payment .item .left .iconfont[data-v-609b1e56]{font-size:%?45?%;color:#09bb07}.payment .item .left .iconfont.icon-zhifubao[data-v-609b1e56]{color:#00aaea}.payment .item .left .iconfont.icon-yuezhifu[data-v-609b1e56]{color:#f90}.payment .item .left .iconfont.icon-yuezhifu1[data-v-609b1e56]{color:#eb6623}.payment .item .iconfont[data-v-609b1e56]{font-size:%?0.3?%;color:#999}',""]),e.exports=t},"5c7e":function(e,t,i){var a=i("5c36");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("1ab7ecd3",a,!0,{sourceMap:!1,shadowMode:!1})},"797a":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".qs-btn[data-v-bbff0936]{width:auto;height:%?60?%;text-align:center;line-height:%?60?%;border-radius:%?50?%;color:#fff;font-size:%?27?%;padding:0 3%;color:#aaa;border:1px solid #ddd;margin-right:%?20?%}",""]),e.exports=t},"8fc5":function(e,t,i){var a=i("e435");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("0302548a",a,!0,{sourceMap:!1,shadowMode:!1})},b96f:function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("acd8"),i("ac1f"),i("5319");var a=i("ecf1"),n=i("26cb"),r={props:{payMode:{type:Array,default:function(){return[]}},pay_close:{type:Boolean,default:!1},order_id:{type:String,default:""},totalPrice:{type:String,default:"0"}},data:function(){return{}},computed:(0,n.mapGetters)(["systemPlatform"]),methods:{close:function(){this.$emit("onChangeFun",{action:"payClose"})},goPay:function(e,t){var i=this,n="/pages/order_pay_status/index?order_id="+i.order_id;return i.order_id?"yue"==t&&parseFloat(e)<parseFloat(i.totalPrice)?i.$util.Tips({title:"余额不足！"}):(uni.showLoading({title:"支付中"}),void(0,a.wechatOrderPay)({orderNo:i.order_id,payChannel:i.$wechat.isWeixin()?"public":"weixinh5",payType:t}).then((function(e){var t=e.data.jsConfig;switch(i.order_id=e.data.orderNo,e.data.payType){case"weixin":var r={timestamp:t.timeStamp,nonceStr:t.nonceStr,package:t.packages,signType:t.signType,paySign:t.paySign};i.$wechat.pay(r).then((function(e){if("chooseWXPay:cancel"==e.errMsg)return uni.hideLoading(),i.$util.Tips({title:"支付失败"});(0,a.wechatQueryPayResult)(i.order_id).then((function(e){return uni.hideLoading(),i.$util.Tips({title:"支付成功",icon:"success"},(function(){i.$emit("onChangeFun",{action:"pay_complete"})}))})).cache((function(e){return uni.hideLoading(),i.$util.Tips({title:e})}))})).cache((function(e){return uni.hideLoading(),i.$util.Tips({title:e})}));break;case"yue":return uni.hideLoading(),i.$util.Tips({title:"余额支付成功",icon:"success"},(function(){i.$emit("onChangeFun",{action:"pay_complete"})}));case"weixinh5":return uni.hideLoading(),location.replace(t.mwebUrl+"&redirect_url="+window.location.protocol+"//"+window.location.host+n+"&status=1"),i.$util.Tips({title:"支付中",icon:"success"},(function(){i.$emit("onChangeFun",{action:"pay_complete"})}))}})).catch((function(e){return uni.hideLoading(),i.$util.Tips({title:e},(function(){i.$emit("onChangeFun",{action:"pay_fail"})}))}))):i.$util.Tips({title:"请选择要支付的订单"})}}};t.default=r},b986:function(e,t,i){"use strict";i("7a82");var a=i("4ea4").default,n=i("dbce").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("caad"),i("99af");var r=n(i("03a9")),o=n(i("c44b")),s=i("d2ac"),d=a(i("c985")),c=a(i("1e29")),f=a(i("84c4")),u=a(i("089d")),l=i("4844"),v=i("26cb"),p=a(i("7ae6")),b=n(i("5b92")),w=a(i("b8c9")),g={components:{payment:c.default,home:d.default,orderGoods:f.default},data:function(){return{order_id:"",type:"normal",orderInfo:{systemStore:{}},cartInfo:[],evaluate:0,afterSale:!1,system_store:{},qrcodeSize:145}},computed:(0,v.mapGetters)(["isLogin","chatUrl","userInfo"]),onLoad:function(e){if(this.type=e.type?e.type:"normal",!e.order_id)return this.$util.Tips({title:"缺少参数"},{tab:3,url:1});this.$set(this,"order_id",e.order_id)},onShow:function(){this.isLogin?this.getOrderInfo():(0,l.toLogin)()},onReady:function(){var e=this;this.$nextTick((function(){var t=new u.default(".copy-data");t.on("success",(function(){e.$util.Tips({title:"复制成功"})}))}))},methods:{getOrderInfo:function(){var e=this;uni.showLoading({title:"正在加载中"}),r.getOrderDetail(this.order_id).then((function(t){t.data?(uni.hideLoading(),e.$set(e,"orderInfo",t.data),e.$set(e,"cartInfo",t.data.items),e.$set(e,"evaluate",30!==t.data.status||t.data.commentStatus?0:2),[10,20,30].includes(t.data.status)&&e.$set(e,"afterSale",!0),t.data.pickUpStoreId&&o.getDeliveryPickUpStore(t.data.pickUpStoreId).then((function(t){e.system_store=t.data||{}})),2===e.orderInfo.deliveryType&&e.orderInfo.payStatus&&e.markCode(t.data.pickUpVerifyCode)):e.$util.Tips({title:"订单信息不存在"},"/pages/users/order_list/index")})).catch((function(t){uni.hideLoading(),e.$util.Tips({title:t},"/pages/users/order_list/index")}))},goPay:function(){var e=encodeURIComponent("/pages/order_pay_status/index?order_id="+this.orderInfo.id);uni.navigateTo({url:"/pages/goods/cashier/index?order_id=".concat(this.orderInfo.payOrderId,"&returnUrl=").concat(e)})},confirmOrder:function(){var e=this;uni.showModal({title:"确认收货",content:"为保障权益，请收到货确认无误后，再确认收货",success:function(t){t.confirm&&r.receiveOrder(e.orderInfo.id).then((function(t){return e.$util.Tips({title:"收货成功",icon:"success"},(function(){e.getOrderInfo()}))})).catch((function(t){return e.$util.Tips({title:t})}))}})},cancelOrder:function(){var e=this;uni.showModal({title:"提示",content:"确认取消该订单?",success:function(t){t.confirm&&r.cancelOrder(e.orderInfo.id).then((function(){e.$util.Tips({title:"取消成功"}),e.getOrderInfo()})).catch((function(t){e.$util.Tips({title:t}),e.getOrderInfo()}))}})},delOrder:function(){var e=this;uni.showModal({title:"提示",content:"确认删除该订单?",success:function(t){t.confirm&&r.deleteOrder(e.orderInfo.id).then((function(){e.$util.Tips({title:"删除成功"},{tab:3,url:"/pages/users/order_list/index"})})).catch((function(t){e.$util.Tips({title:t}),e.getOrderInfo()}))}})},markCode:function(e){var t=this;w.default.make({canvasId:"qrcode",text:e,size:this.qrcodeSize,margin:10,fail:function(e){t.$util.Tips({title:"核销二维码生成失败！"})}})},goJoinPink:function(){uni.navigateTo({url:"/pages/activity/goods_combination_status/index?id="+this.orderInfo.pinkId})},goOrderConfirm:function(){this.$Order.getPreOrder("again",[{orderNo:this.order_id}])},kefuClick:function(){location.href=this.chatUrl},openSubcribe:function(e){uni.showLoading({title:"正在加载"}),(0,s.openOrderRefundSubscribe)().then((function(t){uni.hideLoading(),uni.navigateTo({url:e})})).catch((function(){uni.hideLoading()}))},makePhone:function(){uni.makePhoneCall({phoneNumber:this.system_store.phone})},showMaoLocation:function(){if(!this.system_store.latitude||!this.system_store.longitude)return this.$util.Tips({title:"缺少经纬度信息无法查看地图！"});uni.openLocation({latitude:this.system_store.latitude,longitude:this.system_store.longitude,scale:8,name:this.system_store.name,address:this.system_store.areaName+this.system_store.detailAddress})},fen2yuan:function(e){return b.fen2yuan(e)},formatDate:function(e){return(0,p.default)(e).format("YYYY-MM-DD HH:mm:ss")}}};t.default=g},bd50:function(e,t,i){"use strict";i.r(t);var a=i("b96f"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},c44b:function(e,t,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.getDeliveryConfig=function(){return n.default.get("app-api/trade/delivery/config/get",{})},t.getDeliveryExpressList=function(){return n.default.get("app-api/trade/delivery/express/list")},t.getDeliveryPickUpStore=function(e){return n.default.get("app-api/trade/delivery/pick-up-store/get",{id:e})},t.getDeliveryPickUpStoreList=function(e){return n.default.get("app-api/trade/delivery/pick-up-store/list",e)};var n=a(i("e145"))},cad3:function(e,t,i){e.exports=i.p+"static/img/writeOff.8f98ab77.jpg"},cddf:function(e,t,i){"use strict";var a=i("f0ef"),n=i.n(a);n.a},ce50:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"order-details"},[a("v-uni-view",{staticClass:"header bg-color"},[a("v-uni-view",{staticClass:"picTxt acea-row row-middle"},[a("v-uni-view",{staticClass:"pictrue"},[0===e.orderInfo.status?a("v-uni-image",{attrs:{src:"http://test.yudao.iocoder.cn/order/status_0.gif"}}):e._e(),10===e.orderInfo.status?a("v-uni-image",{attrs:{src:"http://test.yudao.iocoder.cn/order/status_10.gif"}}):e._e(),20===e.orderInfo.status?a("v-uni-image",{attrs:{src:"http://test.yudao.iocoder.cn/order/status_20.gif"}}):e._e(),30!==e.orderInfo.status||e.orderInfo.commentStatus?e._e():a("v-uni-image",{attrs:{src:"http://test.yudao.iocoder.cn/order/status_30a.gif"}}),30===e.orderInfo.status&&e.orderInfo.commentStatus?a("v-uni-image",{attrs:{src:"http://test.yudao.iocoder.cn/order/status_30b.gif"}}):e._e(),40===e.orderInfo.status?a("v-uni-image",{attrs:{src:"http://test.yudao.iocoder.cn/order/status_40.gif"}}):e._e()],1),a("v-uni-view",{staticClass:"data"},[0===e.orderInfo.status?a("v-uni-view",{staticClass:"state"},[e._v("请在 "+e._s(e.formatDate(e.orderInfo.payExpireTime))+" 前完成支付")]):e._e(),10===e.orderInfo.status?a("v-uni-view",{staticClass:"state"},[e._v("商家未发货，请耐心等待")]):e._e(),20===e.orderInfo.status?a("v-uni-view",{staticClass:"state"},[e._v("商家已发货，请耐心等待")]):e._e(),30!==e.orderInfo.status||e.orderInfo.commentStatus?e._e():a("v-uni-view",{staticClass:"state"},[e._v("已收货，快去评价一下吧")]),30===e.orderInfo.status&&e.orderInfo.commentStatus?a("v-uni-view",{staticClass:"state"},[e._v("交易完成，感谢您的支持")]):e._e(),40===e.orderInfo.status?a("v-uni-view",{staticClass:"state"},[e._v("交易关闭")]):e._e(),a("v-uni-view",[e._v(e._s(e.formatDate(e.orderInfo.createTime)))])],1)],1)],1),40!==e.orderInfo.status?a("v-uni-view",[a("v-uni-view",{staticClass:"nav"},[a("v-uni-view",{staticClass:"navCon acea-row row-between-wrapper"},[a("v-uni-view",{class:0===e.orderInfo.status?"on":""},[e._v("待付款")]),a("v-uni-view",{class:10===e.orderInfo.status?"on":""},[e._v(e._s(1===e.orderInfo.deliveryType?"待发货":"待核销"))]),1===e.orderInfo.deliveryType?a("v-uni-view",{class:20===e.orderInfo.status?"on":""},[e._v("待收货")]):e._e(),a("v-uni-view",{class:30!==e.orderInfo.status||e.orderInfo.commentStatus?"":"on"},[e._v("待评价")]),a("v-uni-view",{class:30===e.orderInfo.status&&e.orderInfo.commentStatus?"on":""},[e._v("已完成")])],1),a("v-uni-view",{staticClass:"progress acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"iconfont",class:(0===e.orderInfo.status?"icon-webicon318":"icon-yuandianxiao")+" "+(e.orderInfo.status>=0?"font-num":"")}),a("v-uni-view",{staticClass:"line",class:e.orderInfo.status>0?"bg-color":""}),a("v-uni-view",{staticClass:"iconfont",class:(10===e.orderInfo.status?"icon-webicon318":"icon-yuandianxiao")+" "+(e.orderInfo.status>=10?"font-num":"")}),a("v-uni-view",{staticClass:"line",class:e.orderInfo.status>10?"bg-color":""}),1===e.orderInfo.deliveryType?a("v-uni-view",{staticClass:"iconfont",class:(20===e.orderInfo.status?"icon-webicon318":"icon-yuandianxiao")+" "+(e.orderInfo.status>=20?"font-num":"")}):e._e(),1===e.orderInfo.deliveryType?a("v-uni-view",{staticClass:"line",class:e.orderInfo.status>20?"bg-color":""}):e._e(),a("v-uni-view",{staticClass:"iconfont",class:(30!==e.orderInfo.status||e.orderInfo.commentStatus?"icon-yuandianxiao":"icon-webicon318")+" "+(30===e.orderInfo.status?"font-num":"")}),a("v-uni-view",{staticClass:"line",class:e.orderInfo.status>=30&&e.orderInfo.commentStatus?"bg-color":""}),a("v-uni-view",{staticClass:"iconfont",class:(30===e.orderInfo.status&&e.orderInfo.commentStatus?"icon-webicon318":"icon-yuandianxiao")+" "+(30===e.orderInfo.status&&e.orderInfo.commentStatus?"font-num":"")})],1)],1),2===e.orderInfo.deliveryType&&e.orderInfo.payStatus?a("v-uni-view",{staticClass:"writeOff borRadius14"},[a("v-uni-view",{staticClass:"title"},[e._v("核销信息")]),a("v-uni-view",{staticClass:"grayBg"},[a("v-uni-view",{staticClass:"pictrue"},[a("div",{ref:"qrcode",staticClass:"qrcode"}),a("v-uni-canvas",{style:{width:e.qrcodeSize+"px",height:e.qrcodeSize+"px"},attrs:{"canvas-id":"qrcode"}})],1)],1),a("v-uni-view",{staticClass:"gear"},[a("v-uni-image",{attrs:{src:i("cad3")}})],1),a("v-uni-view",{staticClass:"num"},[e._v(e._s(e.orderInfo.pickUpVerifyCode))]),e.system_store.id?a("v-uni-view",{staticClass:"rules"},[a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"rulesTitle acea-row row-middle"},[a("v-uni-text",{staticClass:"iconfont icon-shijian"}),e._v("核销时间")],1),a("v-uni-view",{staticClass:"info"},[e._v("每日："),a("v-uni-text",{staticClass:"time"},[e._v(e._s(e.orderInfo.systemStore.dayTime.replace(",","-")))])],1)],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"rulesTitle acea-row row-middle"},[a("v-uni-text",{staticClass:"iconfont icon-shuoming1"}),e._v("使用说明")],1),a("v-uni-view",{staticClass:"info"},[e._v("可将二维码出示给店员扫描或提供数字核销码")])],1)],1):e._e()],1):e._e(),2===e.orderInfo.deliveryType?a("v-uni-view",{staticClass:"map acea-row row-between-wrapper borRadius14"},[a("v-uni-view",[e._v("自提地址信息")]),a("v-uni-view",{staticClass:"place cart-color acea-row row-center-wrapper",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showMaoLocation.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"iconfont icon-weizhi"}),e._v("查看位置")],1)],1):e._e(),e.orderInfo.pickUpStoreId>0?a("v-uni-view",{staticClass:"address",staticStyle:{"margin-top":"15rpx"}},[a("v-uni-view",{staticClass:"name",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.makePhone.apply(void 0,arguments)}}},[e._v(e._s(e.system_store.name)),a("v-uni-text",{staticClass:"phone"},[e._v(e._s(e.system_store.phone))]),a("v-uni-text",{staticClass:"iconfont icon-tonghua font-color"})],1),a("v-uni-view",[e._v(e._s(e.system_store.areaName)+" "+e._s(e.system_store.detailAddress))])],1):a("v-uni-view",{staticClass:"address borRadius14"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.orderInfo.receiverName)),a("v-uni-text",{staticClass:"phone"},[e._v(e._s(e.orderInfo.receiverMobile))])],1),a("v-uni-view",[e._v(e._s(e.orderInfo.receiverAreaName)+" "+e._s(e.orderInfo.receiverDetailAddress))])],1),a("orderGoods",{attrs:{evaluate:e.evaluate,afterSale:e.afterSale,productType:e.orderInfo.type,orderId:e.order_id,cartInfo:e.cartInfo,jump:!0}}),a("div",{staticClass:"goodCall borRadius14",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.kefuClick.apply(void 0,arguments)}}},[a("span",{staticClass:"iconfont icon-kefu"}),a("span",[e._v("联系客服")])])],1):e._e(),a("v-uni-view",[a("v-uni-view",{staticClass:"wrapper borRadius14"},[a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("订单编号：")]),a("v-uni-view",{staticClass:"conter acea-row row-middle row-right"},[e._v(e._s(e.orderInfo.no)),a("v-uni-text",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":e.orderInfo.no}},[e._v("复制")])],1)],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("下单时间：")]),a("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.formatDate(e.orderInfo.createTime)))])],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("支付状态：")]),e.orderInfo.payStatus?a("v-uni-view",{staticClass:"conter"},[e._v("已支付")]):a("v-uni-view",{staticClass:"conter"},[e._v("未支付")])],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("支付方式：")]),a("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.payChannelName))])],1),e.orderInfo.userRemark?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("买家留言：")]),a("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.userRemark))])],1):e._e()],1),void 0!==e.orderInfo.logisticsId?a("v-uni-view",[e.orderInfo.logisticsId>0?a("v-uni-view",{staticClass:"wrapper borRadius14"},[a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("配送方式：")]),a("v-uni-view",{staticClass:"conter"},[e._v("发货")])],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("快递公司：")]),a("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.logisticsName||""))])],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("快递号：")]),a("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.logisticsNo||""))])],1)],1):0===e.orderInfo.deliveryType?a("v-uni-view",{staticClass:"wrapper borRadius14"},[a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("虚拟发货：")]),a("v-uni-view",{staticClass:"conter"},[e._v("已发货，请注意查收")])],1)],1):e._e()],1):e._e(),a("v-uni-view",{staticClass:"wrapper borRadius14"},[a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("商品总价：")]),a("v-uni-view",{staticClass:"conter"},[e._v("￥"+e._s(e.fen2yuan(e.orderInfo.totalPrice)))])],1),e.orderInfo.deliveryPrice>0?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("运费：")]),a("v-uni-view",{staticClass:"conter"},[e._v("￥"+e._s(e.fen2yuan(e.orderInfo.deliveryPrice)))])],1):e._e(),e.orderInfo.couponId?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("优惠券抵扣：")]),a("v-uni-view",{staticClass:"conter"},[e._v("-￥"+e._s(e.fen2yuan(e.orderInfo.couponPrice)))])],1):e._e(),e.orderInfo.pointPrice>0?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("积分抵扣：")]),a("v-uni-view",{staticClass:"conter"},[e._v("-￥"+e._s(e.fen2yuan(e.orderInfo.deductionPrice)))])],1):e._e(),a("v-uni-view",{staticClass:"actualPay acea-row row-right"},[e._v("实付款："),a("v-uni-text",{staticClass:"money font-color"},[e._v("￥"+e._s(e.fen2yuan(e.orderInfo.payPrice)))])],1)],1),a("v-uni-view",{staticStyle:{height:"120rpx"}}),a("v-uni-view",{staticClass:"footer acea-row row-right row-middle"},[0===e.orderInfo.status?a("v-uni-view",{staticClass:"qs-btn",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.cancelOrder.apply(void 0,arguments)}}},[e._v("取消订单")]):e._e(),0===e.orderInfo.status?a("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPay.apply(void 0,arguments)}}},[e._v("立即付款")]):e._e(),e.orderInfo.combinationId>0?a("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goJoinPink.apply(void 0,arguments)}}},[e._v("查看拼团")]):e._e(),e.orderInfo.logisticsId>0?a("v-uni-navigator",{staticClass:"bnt cancel",attrs:{"hover-class":"none",url:"/pages/users/goods_logistics/index?orderId="+e.orderInfo.orderId}},[e._v("查看物流")]):e._e(),20===e.orderInfo.status?a("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmOrder.apply(void 0,arguments)}}},[e._v("确认收货")]):e._e(),40===e.orderInfo.status?a("v-uni-view",{staticClass:"bnt cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delOrder.apply(void 0,arguments)}}},[e._v("删除订单")]):e._e(),3==e.orderInfo.status&&1!==e.orderInfo.type?a("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goOrderConfirm.apply(void 0,arguments)}}},[e._v("再次购买")]):e._e()],1)],1)],1),a("home")],1)},n=[]},d2ac:function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.openBargainSubscribe=function(){var e=uni.getStorageSync("tempID"+a[4]);return n(e)},t.openOrderRefundSubscribe=function(){var e=uni.getStorageSync("tempID"+a[2]);return n(e)},t.openOrderSubscribe=function(){var e=uni.getStorageSync("tempID"+a[1]);return n(e)},t.openPaySubscribe=function(){var e=uni.getStorageSync("tempID"+a[0]);return n(e)},t.openPinkSubscribe=function(){var e=uni.getStorageSync("tempID"+a[5]);return n(e)},t.openRechargeSubscribe=function(){var e=uni.getStorageSync("tempID"+a[3]);return n(e)},t.subscribe=n,i("d3b7");var a=["beforePay","afterPay","refundApply","beforeRecharge","createBargain","pink"];function n(e){var t=wx;return new Promise((function(i,a){t.requestSubscribeMessage({tmplIds:e,success:function(e){return i(e)},fail:function(e){return i(e)}})}))}},e435:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.shuoming[data-v-bbff0936]{width:%?32?%;height:%?32?%}.goodCall[data-v-bbff0936]{color:#e93323;text-align:center;width:100%;height:%?86?%;padding:0 %?30?%;border-bottom:%?1?% solid #eee;font-size:%?30?%;line-height:%?86?%;background:#fff}.goodCall .icon-kefu[data-v-bbff0936]{font-size:%?36?%;margin-right:%?15?%}.order-details .header[data-v-bbff0936]{height:%?250?%;padding:0 %?30?%}.order-details .header.on[data-v-bbff0936]{background-color:#666!important}.order-details .header .pictrue[data-v-bbff0936]{width:%?110?%;height:%?110?%}.order-details .header .pictrue uni-image[data-v-bbff0936]{width:100%;height:100%}.order-details .header .data[data-v-bbff0936]{color:hsla(0,0%,100%,.8);font-size:%?24?%;margin-left:%?27?%}.order-details .header .data.on[data-v-bbff0936]{margin-left:0}.order-details .header .data .state[data-v-bbff0936]{font-size:%?30?%;font-weight:700;color:#fff;margin-bottom:%?7?%}.order-details .header .data .time[data-v-bbff0936]{margin-left:%?20?%}.picTxt[data-v-bbff0936]{height:%?150?%}.order-details .nav[data-v-bbff0936]{background-color:#fff;font-size:%?26?%;color:#282828;padding:%?27?% 0;width:100%;border-radius:%?14?%;margin:%?-100?% auto 0 auto}.order-details .nav .navCon[data-v-bbff0936]{padding:0 %?40?%}.order-details .nav .on[data-v-bbff0936]{color:#e93323}.order-details .nav .progress[data-v-bbff0936]{padding:0 %?65?%;margin-top:%?10?%}.order-details .nav .progress .line[data-v-bbff0936]{width:%?100?%;height:%?2?%;background-color:#939390}.order-details .nav .progress .iconfont[data-v-bbff0936]{font-size:%?25?%;color:#939390;margin-top:%?-2?%}.order-details .address[data-v-bbff0936]{font-size:%?26?%;color:#868686;background-color:#fff;margin-top:%?15?%;padding:%?30?% %?24?%}.order-details .address .name[data-v-bbff0936]{font-size:%?30?%;color:#282828;margin-bottom:%?15?%}.order-details .address .name .phone[data-v-bbff0936]{margin-left:%?40?%}.order-details .line[data-v-bbff0936]{width:100%;height:%?3?%}.order-details .line uni-image[data-v-bbff0936]{width:100%;height:100%;display:block}.order-details .wrapper[data-v-bbff0936]{background-color:#fff;margin-top:%?12?%;padding:%?30?% %?24?%}.order-details .wrapper .item[data-v-bbff0936]{font-size:%?28?%;color:#282828}.order-details .wrapper .item ~ .item[data-v-bbff0936]{margin-top:%?20?%}.order-details .wrapper .item .conter[data-v-bbff0936]{color:#868686;text-align:right}.order-details .wrapper .item .conter .copy[data-v-bbff0936]{font-size:%?20?%;color:#333;border-radius:%?20?%;border:%?1?% solid #666;padding:%?3?% %?15?%;margin-left:%?24?%}.order-details .wrapper .actualPay[data-v-bbff0936]{border-top:%?1?% solid #eee;margin-top:%?30?%;padding-top:%?30?%}.order-details .wrapper .actualPay .money[data-v-bbff0936]{font-weight:700;font-size:%?30?%}.order-details .footer[data-v-bbff0936]{width:100%;height:%?100?%;position:fixed;bottom:0;left:0;background-color:#fff;padding:0 %?30?%;box-sizing:border-box}.order-details .footer .bnt[data-v-bbff0936]{width:%?158?%;height:%?54?%;text-align:center;line-height:%?54?%;border-radius:%?50?%;color:#fff;font-size:%?27?%}.order-details .footer .bnt.cancel[data-v-bbff0936]{color:#aaa;border:%?1?% solid #ddd}.order-details .footer .bnt ~ .bnt[data-v-bbff0936]{margin-left:%?18?%}.order-details .writeOff[data-v-bbff0936]{background-color:#fff;margin-top:%?15?%;padding-bottom:%?50?%}.order-details .writeOff .title[data-v-bbff0936]{font-size:%?30?%;color:#282828;height:%?87?%;border-bottom:1px solid #f0f0f0;padding:0 %?24?%;line-height:%?87?%}.order-details .writeOff .grayBg[data-v-bbff0936]{background-color:#f2f5f7;width:%?590?%;height:%?384?%;border-radius:%?20?% %?20?% 0 0;margin:%?50?% auto 0 auto;padding-top:%?55?%}.order-details .writeOff .grayBg .pictrue[data-v-bbff0936]{width:%?290?%;height:%?290?%;margin:0 auto}.order-details .writeOff .grayBg .pictrue uni-image[data-v-bbff0936]{width:100%;height:100%;display:block}.order-details .writeOff .gear[data-v-bbff0936]{width:%?590?%;height:%?30?%;margin:0 auto}.order-details .writeOff .gear uni-image[data-v-bbff0936]{width:100%;height:100%;display:block}.order-details .writeOff .num[data-v-bbff0936]{background-color:#f0c34c;width:%?590?%;height:%?84?%;color:#282828;font-size:%?48?%;margin:0 auto;border-radius:0 0 %?20?% %?20?%;text-align:center;padding-top:%?4?%}.order-details .writeOff .rules[data-v-bbff0936]{margin:%?46?% %?30?% 0 %?30?%;border-top:1px solid #f0f0f0;padding-top:%?10?%}.order-details .writeOff .rules .item[data-v-bbff0936]{margin-top:%?20?%}.order-details .writeOff .rules .item .rulesTitle[data-v-bbff0936]{font-size:%?28?%;color:#282828}.order-details .writeOff .rules .item .rulesTitle .iconfont[data-v-bbff0936]{font-size:%?30?%;color:#333;margin-right:%?8?%;margin-top:%?5?%}.order-details .writeOff .rules .item .info[data-v-bbff0936]{font-size:%?28?%;color:#999;margin-top:%?7?%}.order-details .writeOff .rules .item .info .time[data-v-bbff0936]{margin-left:%?20?%}.order-details .map[data-v-bbff0936]{height:%?86?%;font-size:%?30?%;color:#282828;line-height:%?86?%;border-bottom:1px solid #f0f0f0;margin-top:%?15?%;background-color:#fff;padding:0 %?24?%}.order-details .map .place[data-v-bbff0936]{font-size:%?26?%;width:%?176?%;height:%?50?%;border-radius:%?25?%;line-height:%?50?%;text-align:center}.order-details .map .place .iconfont[data-v-bbff0936]{font-size:%?27?%;height:%?27?%;line-height:%?27?%;margin:%?2?% %?3?% 0 0}.order-details .address .name .iconfont[data-v-bbff0936]{font-size:%?34?%;margin-left:%?10?%}.refund[data-v-bbff0936]{padding:0!important;margin-top:%?15?%;background-color:#fff}.refund .title[data-v-bbff0936]{display:flex;align-items:center;font-size:%?30?%;color:#333;height:%?86?%;border-bottom:1px solid #f5f5f5;font-weight:400;padding:0 %?24?%}.refund .title uni-image[data-v-bbff0936]{width:%?32?%;height:%?32?%;margin-right:%?10?%}.refund .con[data-v-bbff0936]{font-size:%?25?%;color:#666;padding:%?30?% %?24?%}',""]),e.exports=t},e96f:function(e,t,i){"use strict";i.r(t);var a=i("b986"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},f0ef:function(e,t,i){var a=i("797a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("a7e14598",a,!0,{sourceMap:!1,shadowMode:!1})},fb09:function(e,t,i){"use strict";var a=i("8fc5"),n=i.n(a);n.a}}]);