function getUrlParam(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),a=window.location.search.substr(1).match(t);return null!=a?unescape(a[2]):null}function share(){var e=JSON.stringify(a);"ios"==getUrlParam("devicetype")?location.href="action.share://":"android"==getUrlParam("devicetype")&&window.action.exec("share",encodeURI(e))}function back(){"android"==getUrlParam("devicetype")?window.action.exec("back",""):"ios"==getUrlParam("devicetype")?location.href="http://back":history.go(-1)}function toNext(e){$.fn.fullpage.moveNext(!0)}function reset(){var e="/MemberAct/GetValidateCode?t="+(new Date).getTime();$("#codeimg").attr("src",e)}var a={shareWord:"中青旅遨游网123会员活动_会员特惠",subTitle:"遨游123周年庆 疯狂抄底价 满额送行李箱 100%抽大奖   限量预约进行中",imageUrl:"",redirectUrl:"http://mact.aoyou.com/hd/123/"},rand=function(){for(i=1;i<3;i++){var e=20*Math.random()-10,t=20*Math.random()-10;$(".icon0"+i).css("transform","translate("+e+"px,"+t+"px)")}};setInterval(function(){rand()},1700),$(".wp-inner").fullpage({change:function(e){},beforeChange:function(e){"1"==e.cur.toString()},afterChange:function(e){var t=parseInt(e.cur);(5==t||6==t)&&$(".page"+(t+1)+" .half").addClass("downpart")}}),Zepto(function($){var e,t;window.location.href.indexOf("from")>0?window.location.href="http://mact.aoyou.com/hd/123/index.html":(ayWeChatShare.share({title:"中青旅遨游网123会员活动_会员特惠",desc:"遨游123周年庆 疯狂抄底价 满额送行李箱 100%抽大奖   限量预约进行中",link:"http://mact.aoyou.com/hd/123/index.html",imgUrl:"http://images1.aoyou.com/productlist/201611/vdj6j814094944.jpg",success:function(e){}}),$.ajax({url:"http://wechatapi.aoyou.com/api/jsapi/shareoauth",data:{Param:"r9Z4mJjrnOpXYltyP72zKXJsP@zXuuVR4c81BKmnuExRfndSJTdr7KtuaCUXSXgY"},dataType:"json",type:"POST",success:function(e){ayWeChatShare.init({debug:!1,appId:e.AppId,timestamp:e.TimeStamp,nonceStr:e.NonceStr,signature:e.Signature})}})),"ios"!=getUrlParam("devicetype")&&"android"!=getUrlParam("devicetype")&&($(".iconback").hide(),$(".iconshare").hide()),"ios"==getUrlParam("devicetype")&&$(".mendian").hide(),$("#introduction").on("click",function(){$(".popup").show()}),$("#delintroduction").on("click",function(){$(".popup").hide()}),$(".page2 .part").on("click",function(){$.fn.fullpage.moveTo($(this).attr("pageindex"),!0)}),$("#btnmessage").on("click",function(){send()}),$(".btn-reset").on("click",function(){reset()}),$(".iconback").on("click",function(){back()}),$(".iconshare").on("click",function(){share()})});