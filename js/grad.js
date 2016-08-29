/**
 * Created by zjy on 2016/08/11.
 */
$(function(){
    initHtml(); //获取图片
    imgCss(); //初始化图片位置

    //点击数量
    var a =0;
    var ids = [];
    $(document).on('click touchstart','#leafContainer div img',function(){
        $(this).parent().hide();
        var id = $(this).attr("data-id");
        if(ids.indexOf(id) == -1){
            ids.push(id);
            a++;
            $(".num").html(a).attr("data-ids",ids);
        }
    });
});

$("#leafContainer").html();
function initHtml(){
    var img = [{id:1,imgUrl:'images/pic/realLeaf1.png'},{id:2,imgUrl:'images/pic/realLeaf2.png'},{id:3,imgUrl:'images/pic/realLeaf3.png'},{id:4,imgUrl:'images/pic/realLeaf4.png'},{id:2,imgUrl:'images/pic/realLeaf2.png'},{id:4,imgUrl:'images/pic/realLeaf4.png'},{id:2,imgUrl:'images/pic/realLeaf2.png'},{id:4,imgUrl:'images/pic/realLeaf4.png'},{id:2,imgUrl:'images/pic/realLeaf2.png'},{id:4,imgUrl:'images/pic/realLeaf4.png'},{id:1,imgUrl:'images/pic/realLeaf1.png'},{id:2,imgUrl:'images/pic/realLeaf2.png'},{id:3,imgUrl:'images/pic/realLeaf3.png'},{id:4,imgUrl:'images/pic/realLeaf4.png'},{id:2,imgUrl:'images/pic/realLeaf2.png'},{id:4,imgUrl:'images/pic/realLeaf4.png'},{id:1,imgUrl:'images/pic/realLeaf1.png'},{id:2,imgUrl:'images/pic/realLeaf2.png'},{id:3,imgUrl:'images/pic/realLeaf3.png'},{id:4,imgUrl:'images/pic/realLeaf4.png'},{id:2,imgUrl:'images/pic/realLeaf2.png'},{id:4,imgUrl:'images/pic/realLeaf4.png'},{id:1,imgUrl:'images/pic/realLeaf1.png'},{id:2,imgUrl:'images/pic/realLeaf2.png'},{id:3,imgUrl:'images/pic/realLeaf3.png'},{id:4,imgUrl:'images/pic/realLeaf4.png'},{id:2,imgUrl:'images/pic/realLeaf2.png'},{id:4,imgUrl:'images/pic/realLeaf4.png'},{id:1,imgUrl:'images/pic/realLeaf1.png'},{id:2,imgUrl:'images/pic/realLeaf2.png'},{id:3,imgUrl:'images/pic/realLeaf3.png'},{id:4,imgUrl:'images/pic/realLeaf4.png'},{id:2,imgUrl:'images/pic/realLeaf2.png'},{id:4,imgUrl:'images/pic/realLeaf4.png'},{id:1,imgUrl:'images/pic/realLeaf1.png'},{id:2,imgUrl:'images/pic/realLeaf2.png'},{id:3,imgUrl:'images/pic/realLeaf3.png'},{id:4,imgUrl:'images/pic/realLeaf4.png'},{id:2,imgUrl:'images/pic/realLeaf2.png'},{id:4,imgUrl:'images/pic/realLeaf4.png'},{id:1,imgUrl:'images/pic/realLeaf1.png'},{id:2,imgUrl:'images/pic/realLeaf2.png'},{id:3,imgUrl:'images/pic/realLeaf3.png'},{id:4,imgUrl:'images/pic/realLeaf4.png'},{id:2,imgUrl:'images/pic/realLeaf2.png'},{id:4,imgUrl:'images/pic/realLeaf4.png'}];
    var qqImg = ["images/qq/1.png","images/qq/2.png","images/qq/3.png","images/qq/4.png","images/qq/6.png","images/qq/7.png","images/qq/8.png","images/qq/9.png","images/qq/10.png","images/qq/11.png","images/qq/12.png","images/qq/13.png","images/qq/14.png","images/qq/15.png","images/qq/16.png","images/qq/17.png","images/qq/18.png","images/qq/19.png","images/qq/20.png","images/qq/21.png","images/qq/22.png","images/qq/23.png","images/qq/24.png"];
    var new_img = getRandom({'arry':img,'range':36});
    var new_qqImg = getRandom({'arry':qqImg,'range':4});
    var html = "";
    for(var i=0; i< new_img.length;i++){
        if(i>5){
            html += "<div id='pic"+i+"' class='hide'><img id='img"+i+"' src='"+new_img[i].imgUrl+"' data-id='"+new_img[i].id+"'></div>";
        }else{
            html += "<div id='pic"+i+"'><img id='img"+i+"' src='"+new_img[i].imgUrl+"' data-id='"+new_img[i].id+"'></div>";
        }
    }
    $("#leafContainer").html(html);
    var qqHtml = "";
    for(var j=0; j< new_qqImg.length; j++){
        qqHtml += "<div id='pic"+(j+new_img.length)+"'><img id='img"+(j+new_img.length)+"' src='"+new_qqImg[j]+"'></div>";
    }
    $("#leafContainer div").eq(4).after(qqHtml);
}

//随机获取数组数据
function getRandom(opt) {
    var old_arry = opt.arry,range = opt.range;
    //防止超过数组的长度
    range = range > old_arry.length?old_arry.length:range;
    var newArray = [].concat(old_arry), //拷贝原数组进行操作就不会破坏原数组
        valArray = [];
    for (var n = 0; n < range; n++) {
        var r = Math.floor(Math.random() * (newArray.length));
        valArray.push(newArray[r]);
        //在原数组删掉，然后在下轮循环中就可以避免重复获取
        newArray.splice(r, 1);
    }
    return valArray;
}

//初始化图片位置
function imgCss(){
    $("#container").css("minHeight",$(window).height());
    var img = $("#leafContainer div");
    img.removeAttr("style");
    $(img).find("img").removeAttr("style");
    for(var i=0; i < img.length; i++){
        if(i%2==0){
            $(img[i]).css("top",i*70+"px").css("right",i*40+"px");
        }else if(i%3==0){
            $(img[i]).css("top",i*50+"px").css("left",i*20+"px");
        }else if(i%4==0){
            $(img[i]).css("top",i*50+"px").css("left",i*40+"px");
        }else{
            $(img[0]).css("top","20px").css("left","20px");
            $(img[i]).css("top","20px").css("right","20px");
        }
    }
}

//开始捡书
function gradBook(time){
    var clickNum = $.cookie("clickNum");
    if(clickNum == undefined){//一天一次
        clickNum = 0;
        $.cookie("clickNum",clickNum+1);
        $(".tips_b1,.black_bg").hide();
        $("#container").css("height",$(window).height());
        init();//初始化
        countTime(time);//倒计时
    }else{
        $(".tips_b2 p").html("每天只能捡书一次，<br/>明天再来吧。");
        $(".tips_b1").hide();
        $(".tips_b2,.black_bg").show();
    }
}

//倒计时
function countTime(time) {
    //if(time%5 == 0){
    //    $("#leafContainer div").show();
    //}
    if (time == 0) {
        imgCss();
        $(".tips_b2 p").html("游戏结束，<br/>下次再来吧。");
        $(".tips_b2,.black_bg").fadeIn();
        $(".countTime").html(time);
    }else {
        time--;
        $(".countTime").html(time);
        setTimeout(function() {
            countTime(time);
        },1000);
        for(var i=0; i<$("#leafContainer div").length; i++){
            if(time == 50){
                if(i>5 && i<=11){
                    $("#leafContainer div#pic"+i).show();
                }else if(i<=5){
                    $("#leafContainer div#pic"+i).hide();
                }
            }else if(time == 40){
                if(i>11 && i<=17){
                    $("#leafContainer div#pic"+i).show();
                }else if(i<=11){
                    $("#leafContainer div#pic"+i).hide();
                }
            }else if(time == 30){
                if(i>17 && i<=23){
                    $("#leafContainer div#pic"+i).show();
                }else if(i<=17){
                    $("#leafContainer div#pic"+i).hide();
                }
            }else if(time == 20){
                if(i>23 && i<=29){
                    $("#leafContainer div#pic"+i).show();
                }else if(i<=23){
                    $("#leafContainer div#pic"+i).hide();
                }
            }else if(time == 10){
                if(i>29 && i<=35){
                    $("#leafContainer div#pic"+i).show();
                }else if(i<=29){
                    $("#leafContainer div#pic"+i).hide();
                }
            }
        }
    }
}