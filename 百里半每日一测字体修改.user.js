// ==UserScript==
// @icon            https://bailibancdn.oss-cn-huhehaote.aliyuncs.com/static/20190319/alpha_logo.png
// @name            百里半每日一测字体修改
// @namespace       http://tampermonkey.net/
// @author          苏墨
// @description     百里半每日一测修改字体大小及颜色
// @match           *://www.bailiban.com/*
// @require         http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// @version         0.0.1
// @grant           GM_addStyle
// ==/UserScript==
$(function(){
    setTimeout(function(){
        $('.examListType').css("font-size",'30px');

        $('.examListType').each(function(){
            if ($(this).text() == '[多选题]') {
                $(this).css('color', 'red');
                $(this).text('[这个是多选!!!]');
            } else {
                $(this).css('color', 'green');
            }
        })
    },1000)
})