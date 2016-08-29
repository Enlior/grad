/**
 * Created by zjy on 2016/08/17.
 */
$(function(){
    //去除weixin_、qq_等字符
    $(".list li .username span").each(function(){
        var username = $(this).html();
        username = username.replace("weixin_","").replace("qq_","").replace("sina_","");
        $(this).html(username);
    })
});