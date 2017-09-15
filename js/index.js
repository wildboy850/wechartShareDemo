
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

//android
var a = {
    "shareWord": "【送千元旅游券】十一8天8道菜，遨游餐厅上菜啦！",
    "subTitle": "年轻人的菜 VS 年轻人的家庭旅行",
    "imageUrl": "",
    "redirectUrl": "http://mact.aoyou.com/hd/8dish"
};

var rand=function(){
    for(i=1;i<3;i++){
        var x=Math.random()*20-10;
        var y=Math.random()*20-10;
        $('.icon0'+i).css('transform','translate('+x+'px,'+y+'px)');
    }
};
setInterval(function(){
    rand();
},1700);

function share() {
    var aToStr = JSON.stringify(a);
    if (getUrlParam("devicetype") == 'ios') {
        location.href = "action.share://";
    } else if (getUrlParam("devicetype") == 'android') {
        //window.action.exec("share", aToStr);
        window.action.exec("share", encodeURI(aToStr));
    }
}
function back() {
    if (getUrlParam("devicetype") == 'android') {
        window.action.exec("back", "")
    }else if(getUrlParam("devicetype") == 'ios'){
        location.href = "http://back";
    }
    else{
        history.go(-1);
    }
}

function toNext(num){
    $.fn.fullpage["moveNext"](true)
}

function reset() {
    //重置密码
    var srcCode = "/MemberAct/GetValidateCode?t=" + new Date().getTime();
    $('#codeimg').attr('src',srcCode)
}

$('.wp-inner').fullpage({
    change: function (e) {

    },
    beforeChange:function(e){
        if(e.cur.toString() == '1'){
            //alert(123)
        }
    },
    afterChange: function (e) {
        var _temindex = parseInt(e.cur);
        if (_temindex == 1) {
            $('.part1 img').addClass('designer')
            $('.part3 img').addClass('shehuika')
            $('.part4 img').addClass('wangzhe')
            $('.part5 img').addClass('wanghong')
            $('.part6 img').addClass('freestyle')
            $('.part8 img').addClass('rongyao')
        }
        if (_temindex == 2) {
            $('.page3 .img1').addClass('animateimg31')
            $('.page3 .img2').addClass('animateimg32')
            $('.page3 .img3').addClass('animateimg33')
            $('.page3 .img4').addClass('animateimg34')
        }
        if (_temindex == 3) {
            $('.page4 .img1').addClass('animateimg41')
            $('.page4 .img2').addClass('animateimg42')
            $('.page4 .img3').addClass('animateimg43')
            $('.page4 .img4').addClass('animateimg44')
        }
        if (_temindex == 4){
            $('.page5 .img1').addClass('animateimg51')
            $('.page5 .img2').addClass('animateimg52')
            $('.page5 .img3').addClass('animateimg53')
        }
        if (_temindex == 5){
            $('.page6 .half').css('height',(screen.height/2-30)+'px')
            $('.page6 .half').addClass('downpart')
            $('.page6 .img1').addClass('animateimg61')
            setTimeout(function () {
                $('.page6 .img2').addClass('animateimg62').show()
            },450)

        }
        if (_temindex == 6){
            $('.page7 .half').css('height',(screen.height/2-30)+'px')
            $('.page7 .half').addClass('downpart')
            $('.page7 .img1').addClass('animateimg71')
            setTimeout(function () {
                $('.page7 .img2').addClass('animateimg72').show()
                $('.page7 .img3').addClass('animateimg73').show()
            },450)
        }
        if(_temindex == 7){
            $('.page8 .img4').addClass('animateimg81')
            $('.page8 .img1').addClass('animateimg82')
            $('.page8 .img2').addClass('animateimg82')
            $('.page8 .img3').addClass('animateimg82')
        }
        if(_temindex == 8){
            $('.page9 .img1').addClass('animateimg92')
            $('.page9 .img2').addClass('animateimg92')
        }
    }
});


Zepto(function ($) {
    //判断是否是微信浏览器打开 是——隐藏头
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        $(".header").hide();
        $('.banner').css('padding-top', 0)
    }
    $('.right').hide();

    if (api.IsIOSClient() || api.IsAndroidClient()) {
        $(".header .left").show();
        $(".header .right").show();
        $("#tab1").hide();
    }
    else {
        $(".header .right").hide();
        $("#tab1").show();
    }
    $(".left").click(function () {
        if (api.IsIOSClient() || api.IsAndroidClient()) {
            api.pageBack();
        }
        else {
            window.location.href = "http://m.aoyou.com";
        }
    });
    $(".header .right").click(function () {
        api.openShareDialog("【送千元旅游券】十一8天8道菜，遨游餐厅上菜啦！ ", "年轻人的菜 VS 年轻人的家庭旅行", "http://mact.aoyou.com/hd/8dish/index.html", "");
    });


    //微信分享
    if(window.location.href.indexOf("from") > 0){
        window.location.href = "http://mact.aoyou.com/hd/8dish/index.html";
    }else{
        ayWeChatShare.share({
            title: '【送千元旅游券】十一8天8道菜，遨游餐厅上菜啦！ ',
            desc: '年轻人的菜 VS 年轻人的家庭旅行',
            link: "http://mact.aoyou.com/hd/8dish/index.html",
            imgUrl: 'http://mact.aoyou.com/hd/aoyoubadaocai/images/share.png',
            success: function (res) { }
        });


        $.ajax({
            url: 'http://wechatapi.aoyou.com/api/jsapi/shareoauth',
            data: { "Param": "r9Z4mJjrnOpXYltyP72zKdh2@KUOIv1VSinG7m41djYIz2oLXloSGj07RMeAGlLL" },
            dataType: 'json',
            type: 'POST',
            success: function (data) {
                ayWeChatShare.init({
                    debug: false,
                    appId: data.AppId,
                    timestamp: data.TimeStamp,
                    nonceStr: data.NonceStr,
                    signature: data.Signature
                });
            }
        });
    }

    if (!(getUrlParam("devicetype") == 'ios' || getUrlParam("devicetype") == 'android')) {
        $('.iconback').hide()
        $('.iconshare').hide()
    }


    if(getUrlParam("devicetype") == 'ios'){
        $('.mendian').hide();
    }


    $('#introduction').on('click',function () {
        $(".popup").show()
    })
    $('#delintroduction').on('click',function () {
        $(".popup").hide()
    })
    $('.page2 .part').on('click',function () {
        $.fn.fullpage["moveTo"](parseInt($(this).attr('pageindex')),true)
    })

    $('#btnmessage').on('click',function () {
        send()
    })

    $('.btn-reset').on('click',function () {
        reset()
    })

    $('.iconback').on('click',function () {
        back()
    })

    $('.iconshare').on('click',function () {
        share()
    })
});


