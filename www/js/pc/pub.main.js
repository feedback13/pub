/*
 * Copyright (c) 2017. (주)사람인HR.
 * All rights reserved.
 */

/**
 * scrollY setting -
 */
$(window).on('scroll', function () {
    var scrollY;
    if (document.body.scrollTop == 0) {
        scrollY = document.documentElement.scrollTop;
    } else {
        scrollY = document.body.scrollTop;
    }

    /*scrollControll.init();*//* document 스크롤 시 컨트롤 부분 - 현재 미적용 */
});

$(document).ready(function(){
    var userAgent, ieReg, ie;
    userAgent = window.navigator.userAgent;
    ieReg = /msie|Trident.*rv[ :]*11\./gi;
    ie = ieReg.test(userAgent);

    /*if(ie) {
        $(".featured-image").each(function () {
            var $container = $(this),
                imgUrl = $container.prop("src");
            if (imgUrl) {
                $container.parent().css("backgroundImage", 'url(' + imgUrl + ')').addClass("custom-object-fit");
            }
        });
    }*/

    try {
        fnDomSelect();
    } catch(e) {
        console.log(e);
    }

    // document 클릭시 열려져 있는 메뉴 닫힘
    $(document).click(function(e){
        if (!$(e.target).is('.box_menu, .btn_menu')) {
            categoryMenu.closeMenu();
            $('.btn_menu').removeClass('active');
        }
        if (!$(e.target).is('.global_search, .auto_search_wrap')) {
            globalSearch.closeEvent();
        }
        if (!$(e.target).is('.notice_layer, ._noticeLayer')) {
            if ($('.notice_layer').is('._active')){
                noticeLayer.init();
            }
        }
    });

 /*   var tutorialDate = new Date(2018, 7-1, 26, 0, 0, 0);  // 2018년 7월 26일부터는 None
    if((new Date()).getTime() < tutorialDate.getTime()) {
        Tutorial.init(); // 메시지 튜토리얼
    }*/

    // category menu 높이값 자동
    if ($('.nav')){
        categoryHeight.init();
    }

    $('.btn_menu').on('click', function () {
        categoryMenu.init();
    });

    if ($('.global_search')){
        globalSearch.init();
    }

    if ($('.theme_nav_area')){
        themeNavArea.init();
    }

    if ( $('.scrollbar-inner').length ){
        ScrollBarPlugIn.init();
    }

    if ( $('.visual_tab').length ){
        visualTab.init();
    }

    if ($('.topBannerWrap')){
        try{
            topBanner.init();
        } catch(e) {
            console.error('top error');
        }
    }

    if($('.slide_banner_box').length) {
        // MainSlider.init();
        MainFade.init();
    }

    if($('.main_best_content').length) {
        MainCategorySlider.init();
    }

    var bannerEventBefore = new Date(2018,5-1,29,0,0,0); // 5월 29일부터
    var bannerEventAfter = new Date(2018,6-1,1,0,0,0);   // 6월 1일전까지
    var current = new Date();

    var bannerCookie = getCookieValue('event_banner_' + getCookieTodayKey());
    if(current >= bannerEventBefore && current < bannerEventAfter && bannerCookie != 'close') {
        $('#event_banner_main').css('display', '');
    }

    if($('#cycle-slideshow1').length > 0) {
        $('#cycle-slideshow1').cycle({
            timeout: 2500,
            speed: 500,
            fx: 'scrollHorz',
            slides: '> .realtime_content',
            next: '#realtime_best .ranking_page_next',
            prev: '#realtime_best .ranking_page_prev'
        });

        $('#cycle-slideshow1' ).on( 'cycle-after', function( event, opts ) {
            $('.ranking_page').html((opts.slideNum) + ' / '+ opts.slideCount);
        });
    }

    $('.coupon_closer').click(function(){
        $(this).parent('.common_tooltip').css('z-index', '0').hide();
    });

  /*  if($('.box_visual').length) {
        setTimeout(function() {$('.box_visual').css('opacity', '1');}, 500);
    }*/
    specialAds.init();
    stickyScroll.init();
});

var stickyScroll = {
    init: function() {
        if($('.main_sticky_nav').length) {
            stickyScroll.headerTop = 121;
            stickyScroll.initTop = $(".main_sticky_nav").offset().top;

            if($(window).scrollTop() > stickyScroll.headerTop) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }

            $(window).scroll(function() {

                if($(window).scrollTop() > stickyScroll.headerTop) {
                    $('header').addClass('fixed');
                } else {
                    $('header').removeClass('fixed');
                }

                var target = $('.main_sticky_nav');
                if(($(window).scrollTop() + 80) > stickyScroll.initTop) {
                    target.addClass('fixed');
                } else {
                    target.removeClass('fixed');
                }

                var trigger= $('.main_sticky_nav').children('li');
                $('.nav_content').each(function(idx) {
                    var thisTop = $(this).offset().top ;
                    if ( $(window).scrollTop() + 80 > thisTop ) {
                        trigger.removeClass('selected');
                        trigger.eq(idx).addClass('selected');
                    }
                });
            });

            $('.main_sticky_nav li').each(function(i) {
                $(this).find('a').click(function() {
                    var scrollTarget = $(this).attr('data-target');
                    $('html, body').stop().animate({
                        scrollTop : $('#'+ scrollTarget).offset().top - 60
                    }, 450);
                });
            })
        }
    },
    click: function(id) {
        if(id) {
            $('html, body').stop().animate({
                scrollTop : $('#' + id).offset().top
            }, 450);
        }
    }
}

var categoryHeight = {
    init : function () {
        var count = 0;
        this.target = $('.nav').find('.depth1');
        this.target.find('.depth2').each(function () {

            var length = $(this).children('li').length;

            if (length > count) {
                count = length;
            }
        })
        categoryHeight.heightEvent(count);
    },
    heightEvent : function (count) {
        var resizeHeight = (count * 27) + 37;
        this.target.css({height : resizeHeight + 'px'});
        this.target.find('.depth2').css({height : resizeHeight + 'px'});
        this.target.find('.depth3').css({height : resizeHeight + 'px'});
        this.target.find('.area_event').css({height : resizeHeight + 'px'});
    }
}

var topBanner = {
    init : function () {
        this.target = $('.topBannerWrap');

        if($('.topBannerWrap').has('on')){
            $(".topBannerWrap").css({top:0});
        }else{
            $(".topBannerWrap").css({top:-130});
        }

        if($('#topBanner').length > 0) {
            var backgroundSize = '1900px 130px';
            if($(window).width() > 1900) {
                backgroundSize = $(window).width() + 'px ' + (($(window).width() * 130) / 1900) + 'px';
            }
            $('#topBanner').css({
                //height: (($(window).width() * 130) / 1900) + 'px',
                backgroundSize: backgroundSize
            });

            $(window).resize(function() {
                if($('#topBanner').length > 0) {
                    if($(window).width() > 1900) {
                        $('#topBanner').css({
                            //height: (($(window).width() * 130) / 1900) + 'px',
                            backgroundSize: $(window).width() + 'px ' + (($(window).width() * 130) / 1900) + 'px'
                        });

                        /*$('#topBanner').find('img').parent().css({
                            width: ($(window).width() * (1004/1900)) + 'px'
                        });

                        // 1004 x 130
                        $('#topBanner').find('img').css({
                            height: ((($(window).width() * (1004/1900)) * 130) / 1004) + 'px',
                            backgroundSize: ($(window).width() * (1004/1900)) + 'px ' + ((($(window).width() * (1004/1900)) * 130) / 1004) + 'px'
                        });*/
                    }
                }
            });
        }
    },
    closeEvent : function () {
        this.target.removeClass('on').css({'display':'none'});
    }
}

var globalSearch = {
    init : function () {
        this.target = $('.global .global_search');
        this.targetInput = this.target.find('input');
        this.layerBox = $('.auto_search_wrap');

        this.target.on('click', function () {
            if(!$(this).hasClass('on')){
                $(this).addClass('on');
            }else {
                return;
            }
        })
    },
    closeEvent : function () {
        if(!this.targetInput.val()) {
            this.target.removeClass('on');
        }
        this.layerBox.hide();
    }
};

var ScrollBarPlugIn = {
    init: function () {
        $('.scrollbar-inner').scrollbar();
    }
};

var categoryMenu = {
    init : function () {
        var isActive = $('.btn_menu').hasClass('active');

        if(isActive) {
            categoryMenu.closeMenu();
            $('.btn_menu').removeClass('active');
        }else {
            categoryMenu.openMenu();
            $('.box_otwojob').addClass('on');
            $('.btn_menu').addClass('active');
        }

        if($('.box_orderjob').hasClass('active')) {
            $('.box_orderjob .depth2').show();
            if($('.orderjob_area_event').length < 1) {
                $('.box_menu').css({width : '236px'})
            } else {
                $('.box_menu').css({width : '472px'})
            }
        } else {
            $('.box_otwojob .depth2').show();
            if($('.otwojob_area_event').length < 1) {
                $('.box_menu').css({width : '236px'})
            } else {
                $('.box_menu').css({width : '472px'})
            }
        }

        // categoryMenu.resetDepth();
        $('.box_otwojob').on('mouseover', function () {
            $('.box_orderjob .depth2').hide();
            $('.box_otwojob .depth2').show();
            $('.box_orderjob > a').removeClass('bold');
            $(this).children('a').addClass('bold');
            $('.box_orderjob').removeClass('active');
            $(this).addClass('active');
            $('.orderjob_area_event').hide();

            var isDepth2 = false;
            $('.depth2').each(function() {
                if(!isDepth2 && $(this).is(':hover')) {
                     isDepth2 = $(this).is(':hover');
                }
            });
            if(!isDepth2) {
                $('.otwojob_area_event').show();

                if($('.otwojob_area_event').length < 1) {
                    $('.box_menu').css({width : '236px'})
                } else {
                    $('.box_menu').css({width : '472px'})
                }
            }


        });

        $('.box_orderjob').on('mouseover', function () {
            $('.box_otwojob .depth2').hide();
            $('.box_orderjob .depth2').show();
            $('.box_otwojob > a').removeClass('bold');
            $(this).children('a').addClass('bold');
            $('.box_otwojob').removeClass('active');
            $(this).addClass('active');
            $('.otwojob_area_event').hide();

            var isDepth2 = false;
            $('.depth2').each(function() {
                if(!isDepth2 && $(this).is(':hover')) {
                    isDepth2 = $(this).is(':hover');
                }
            });
            if(!isDepth2) {
                $('.orderjob_area_event').show();

                if($('.orderjob_area_event').length < 1) {
                    $('.box_menu').css({width : '236px'})
                } else {
                    $('.box_menu').css({width : '472px'})
                }
            }
        });

        $('.depth2 li').on('mouseover', function () {
            var _this = $(this);
            categoryMenu.overActive(_this);
            categoryMenu.openDepth(_this);

            $('.otwojob_area_event').hide();
            $('.orderjob_area_event').hide();
        });
        $('.depth2 li').on('mouseout', function () {
            var _this = $(this);
            categoryMenu.outActive(_this);
            categoryMenu.resetDepth(_this);
            if($('.box_orderjob').hasClass('active')) {
                if($('.orderjob_area_event').length < 1) {
                    $('.box_menu').css({width : '236px'})
                } else {
                    $('.orderjob_area_event').show();
                    $('.box_menu').css({width : '472px'})
                }
            } else {
                if($('.otwojob_area_event').length < 1) {
                    $('.box_menu').css({width : '236px'})
                } else {
                    $('.otwojob_area_event').show();
                    $('.box_menu').css({width : '472px'})
                }
            }
        });
    },
    openMenu : function() {
        $('.box_menu').css({display : 'block'})
    },
    closeMenu : function() {
        $('.box_menu').css({display : 'none'})
    },
    openDepth : function(target) {
        var $this = target;

        if ($this.children().is('ul') && $this.children().is('.area_event')) {
            $('.box_menu').css({width : '730px'})
        }else if($this.children().is('ul') && !$this.children().is('.area_event')){
            $('.box_menu').css({width : '496px'})
        }else {
            if($('.box_orderjob').hasClass('active')) {
                if($('.orderjob_area_event').length < 1) {
                    $('.box_menu').css({width : '236px'})
                } else {
                    $('.box_menu').css({width : '472px'})
                }
            } else {
                if($('.otwojob_area_event').length < 1) {
                    $('.box_menu').css({width : '236px'})
                } else {
                    $('.box_menu').css({width : '472px'})
                }
            }
        }
    },
    resetDepth : function() {
        if($('.box_orderjob').hasClass('active')) {
            if($('.orderjob_area_event').length < 1) {
                $('.box_menu').css({width : '236px'})
            } else {
                $('.box_menu').css({width : '472px'})
            }
        } else {
            if($('.otwojob_area_event').length < 1) {
                $('.box_menu').css({width : '236px'})
            } else {
                $('.box_menu').css({width : '472px'})
            }
        }
    },
    overActive : function(target) {
        var $this = target;
        $this.addClass('on');
        $this.children('a').addClass('bold');
        $this.parent().parent().addClass('on');
        $this.parent().parent().children('a').addClass('bold');
    },
    outActive : function(target) {
        var $this = target;
        $this.removeClass('on');
        $this.children('a').removeClass('bold');
        $this.parent().parent().removeClass('on');
        $this.parent().parent().children('a').removeClass('bold');
    }
};

var noticeLayer = {
    init: function () {
        this.target = $('.notice_layer');

        if(this.target.is('._active')){ // 레이어 닫기
            noticeLayer.closeEvent();
        }else{ // 레이어 열기
            noticeLayer.openEvent();
        }
    },
    openEvent: function () {
        this.target.addClass('_active');
        this.target.slideDown();
    },
    closeEvent: function () {
        this.target.removeClass('_active');
        this.target.slideUp();
    }
};

var visualTab = {
    init: function () {
        var target = $('.visual_tab').find('li');

        target.each(function(i) {
            $(this).on('click', function () {
                target.removeClass('on');
                $(this).addClass('on');

                $('.box_visual > div').hide();
                $('.box_visual .visual_type0' + (i+1)).show();
            })
        })
    }
};

var themeNavArea = {
    init: function () {
        this.target = $('.theme_nav_area ul');
        this.targetLi = this.target.find('li');
        targetNum = this.targetLi.length;
        this.ulWidth = 40;
        this.ulPositionX = 0;
        clkLiNum = 0;

        for(var i = 0; i < targetNum; i++){
            this.ulWidth += this.targetLi.eq(i).outerWidth(true);
        }

        this.target.css('width', this.ulWidth);
        this.ulEndPositionX = $('.theme_nav_area').width() - this.ulWidth;

        this.targetLi.each(function(i){
            $(this).on('click', function () {
                themeNavArea.liClk(i);
                clkLiNum = i;
            })
        });

        $('.control_prev').on('click', function(){
            var i = clkLiNum
            themeNavArea.controlPrev(i);
        })

        $('.control_next').on('click', function(){
            var i = clkLiNum
            themeNavArea.controlNext(i);
        })
    },
    controlPrev: function(liNum){
        var i = liNum - 1;
        if (i == -1) {
            themeNavArea.liClk(targetNum-1);
            clkLiNum = targetNum-1;
        }else {
            themeNavArea.liClk(i);
            clkLiNum = i;
        }
    },
    controlNext: function(liNum){
        var i = liNum + 1;
        if (i == targetNum) {
            themeNavArea.liClk(0);
            clkLiNum = 0;
        }else {
            themeNavArea.liClk(i);
            clkLiNum = i;
        }
    },
    liClk: function (num) {
        this.ulPositionX = 0;
        for(var i = 0; i < num; i++){
            this.ulPositionX += this.targetLi.eq(i).outerWidth(true);
        }
        if ($('.theme_nav_area').width() > this.ulWidth) {
            themeNavArea.slideAction(0);
            themeNavArea.onAction(num);
        }else{
            if (num <= 3) {
                themeNavArea.slideAction(0);
                themeNavArea.onAction(num);
            }else if(targetNum - 5  < num){
                themeNavArea.slideAction(-this.ulEndPositionX);
                themeNavArea.onAction(num);
            }else{
                themeNavArea.slideAction(this.ulPositionX-300);
                themeNavArea.onAction(num);
            }
        }
    },
    slideAction: function (posX) {
        var posX = -posX;
        this.target.animate({
                                left: posX + 'px'
                            }, 150);
    },
    onAction: function (num) {
        this.targetLi.removeClass('on');
        this.targetLi.eq(num).addClass('on');
    }
};


/* 구버전 */
$.fn.layerScript = function(o){
    o = $.extend({
                     divs : ''
                 }, o || {});

    var e = $(this),
        bg = $('<div id="layer_bg"></div>'),
        ly_w,
        ly_h,
        closeDiv = o.divs;

    $("body").attr("lyNums", lyNums)
    // 열기
    if(!$("body").hasClass("lyOn")){
        $("body").addClass("lyOn");
        bg.prependTo($("body"));
    }

    _resize();

    function _resize() {
        ly_w = e.width();
        ly_h = e.height();
        e.css({"margin-left":-(ly_w/2), "margin-top":-(ly_h/2)}).show();
    }

    e.show();

    addResizeListener(e.get(0), _resize);

    // 닫기
    $(this).find(".btn_close").off("click");
    $(this).find(".btn_close").on('click', function(){
        layerClose(closeDiv);
    });
    // dimmed 배경 클릭시 팝업 이벤트 닫힘
    bg.on('click', function(){
        layerClose(closeDiv);
    });

    //esc 클릭시 팝업 이벤트 닫힘
    $("body").keyup(function(escEvent) {
        if (escEvent.keyCode == 27) {
            layerClose(closeDiv);
        }
    });
}

var  lyNums = 0,
    lyOne = 0;

//layer popup 열기
function openLay(name){
    lyNums++;
    $(".popup_layer").each(function(index){
        if($(this).hasClass(name)){
            $(this).layerScript({divs : name});
            if(name == 'confirm_coupon') {
                $('#layer_bg').hide();
            }

            if(name == 'movie01') {
                $(".movie01").append("<iframe width=\"740\" height=\"416\" src=\"https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=523AC0EC16DA51AC5574D0D35E98EA296CC1&outKey=V12400d000be27c6a8d0eeebb4aeb6ebd501be19e2ff5cc224786eebb4aeb6ebd501b\" frameborder=\"no\" scrolling=\"no\" allow='autoplay; encrypted-media' allowfullscreen></iframe>").css({top:"50%", marginTop:"-200px"});
            }
            if(name == 'movie02') {
                $(".movie02").append("<iframe width=\"740\" height=\"416\" src=\"https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=7D1ABF22D9F4A5B414655508428F425CE66C&outKey=V1241a0057ecbc3803039e684c5be372c481d4dfc421309dfa1f1e684c5be372c481d\" frameborder=\"no\" scrolling=\"no\" allow='autoplay; encrypted-media' allowfullscreen></iframe>").css({top:"50%", marginTop:"-200px"});
            }
            if(name == 'movie03') {
                $(".movie03").append("<iframe width=\"740\" height=\"416\" src=\"https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=C967C0AB6B8CDC55B7661AAEB93B4C8FECEA&outKey=V128af2848b0b8876ec85b7b379177af63104b09d53226b83b3eab7b379177af63104\" frameborder=\"no\" scrolling=\"no\" allow='autoplay; encrypted-media' allowfullscreen></iframe>").css({top:"50%", marginTop:"-200px"});
            }
        }
    });
    /* OTWOJOB-566 */
    $(".event_layer").each(function(index){
        if($(this).hasClass(name)){
            $(this).layerScript({divs : name});
        }
    });
    /* //OTWOJOB-566 */
}
function openMovLay(name, url){
    exLyNums++;

    $(".movie").each(function(index){
        if($(this).hasClass(name)){
            $(this).layerScriptExtend({divs : name});
            $(".movie").append("<iframe width=\"740\" height=\"416\" src=\"" + url + "\" frameborder=\"no\" scrolling=\"no\" allow='autoplay; encrypted-media' allowfullscreen></iframe>").css({top:"50%", marginTop:"-200px"});
        };
    });
}
// layer popup 닫기
function layerClose(name){
    $(".popup_layer").each(function(index){
        if($(this).hasClass(name)){
            var e = $(this);

            e.hide().attr("style","display:none");
            $("#layer_bg").attr("style","display:none");

            lyNums --;
            if(lyNums == 0){
                $("body").removeClass("lyOn");
                $("#layer_bg").remove();
            }
        }
        $(".movie_area iframe").remove();
    });
    /* OTWOJOB-566 */
    $(".event_layer").each(function(index){
        if($(this).hasClass(name)){
            var e = $(this);

            e.hide().attr("style","display:none");
            $("#layer_bg").attr("style","display:none");

            lyNums --;
            if(lyNums == 0){
                $("body").removeClass("lyOn");
                $("#layer_bg").remove();
            }
        }
    });
    /* //OTWOJOB-566 */
}


function closeBanner(id) {
    $('#'+id).hide().attr("style","display:none");
}

function setTodayAutoClose(id) {
    setCookieValue('event_banner_'+getCookieTodayKey(), 'close', 1);
    closeBanner(id);
}

function getCookieTodayKey() {
    var today = new Date();
    return today.getFullYear() + '' + today.getMonth() + '' + today.getDate();
}

function getCookieValue(key) {
    var cookieName = key + "=";
    var x = 0;
    while ( x <= document.cookie.length ) {
        var y = (x+cookieName.length);
        if ( document.cookie.substring( x, y ) == cookieName) {
            if ((lastChrCookie=document.cookie.indexOf(";", y)) == -1)
                lastChrCookie = document.cookie.length;
            return decodeURI(document.cookie.substring(y, lastChrCookie));
        }
        x = document.cookie.indexOf(" ", x ) + 1;
        if ( x == 0 )
            break;
    }

    return "";
}

function setCookieValue(key, value, expire) {
    var today = new Date();
    today.setUTCHours(23);
    today.setMinutes(59);
    today.setSeconds(59);
    today.setMilliseconds(999);

    today.setDate(today.getDate() + expire*24*60*60*1000);
    document.cookie = key + '=' + encodeURI(value) + "; expires=" + today.toUTCString() + "; path=/;";
}

function fnDomSelect() {

    _changeOption($('select'));

    $('body').on('DOMNodeInserted', 'select', function (e) {
        var _this = $(this);

        if ( _this.prev('label').length ) {
            _changeOption(_this);
        }
    });

    $('body').on('change.uiFront', 'select', function() {
        var _this = $(this);
        _changeOption(_this);
    });

    function _changeOption(obj) {
        obj.each(function() {
            var _this = $(this);
            var label = _this.prev('label');
            if ( ! label.hasClass('fixed')) {
                if (_this.find('option:selected').length) {
                    _this.prev('label').html(_this.find('option:selected').html());
                } else {
                    _this.prev('label').html(_this.find('option').first().html());
                }
            }
        });
    }
}

var Tutorial = {
    init : function() {
        this.cookieName = 'msg_tutorial';
        var isTutorialView = getCookie(this.cookieName);

        if(isTutorialView != 'view') {
            var html = '';
            html += '<div class="tutorial_overlay" style="display: none;">&nbsp;</div>' +
                '<div class="tutorial_main" style="display: none;">' +
                '    <div>' +
                '        <button id="tutorial_arrow_left" onclick="Tutorial.pre(\'http://images.otwojob.com/image/pc/temp/message-tutorial\', 0, 5)"  style="display:none;"><img src="http://images.otwojob.com/image/pc/btn/btn-arrow-left.png"></button>' +
                '        <img id="tutorial_image" src="http://images.otwojob.com/image/pc/temp/message-tutorial-01.png">' +
                '        <button id="tutorial_close" onclick="Tutorial.close()" style="display: none;"><img src="http://images.otwojob.com/image/pc/btn/btn-close-white.png"></button>' +
                '        <button id="tutorial_arrow_right" onclick="Tutorial.next(\'http://images.otwojob.com/image/pc/temp/message-tutorial\', 2, 5)"><img src="http://images.otwojob.com/image/pc/btn/btn-arrow-right.png"></button>' +
                '    </div>' +
                '</div>';

            $('body').append(html);
            $('body').css({
                overflow: 'hidden',
                position: 'relative'
            });
        }
    },
    next : function(url, idx, max) {
        if(idx == max) {
            $('#tutorial_arrow_right').css('display', 'none');
            $('#tutorial_close').css('display', '');
        } else {
            $('#tutorial_arrow_right').css('display', '');
        }
        $('#tutorial_arrow_left').css('display', '');

        var fileIdx = idx;
        if(idx < 10) {
            fileIdx = '0'+idx;
        }
        $('#tutorial_image').attr('src', url+'-'+fileIdx+'.png');

        $('#tutorial_arrow_right').attr('onclick', 'Tutorial.next(\''+url+'\', '+(idx+1)+', '+max+')');
        $('#tutorial_arrow_left').attr('onclick', 'Tutorial.pre(\''+url+'\', '+(idx-1)+', '+max+')');
    },
    pre : function(url, idx, max) {
        if(idx == 1) {
            $('#tutorial_arrow_left').css('display', 'none');
        } else {
            $('#tutorial_arrow_left').css('display', '');
        }
        $('#tutorial_arrow_right').css('display', '');
        $('#tutorial_close').css('display', 'none');

        var fileIdx = idx;
        if(idx < 10) {
            fileIdx = '0'+idx;
        }
        $('#tutorial_image').attr('src', url+'-'+fileIdx+'.png');
        $('#tutorial_arrow_right').attr('onclick', 'Tutorial.next(\''+url+'\', '+(idx+1)+', '+max+')');
        $('#tutorial_arrow_left').attr('onclick', 'Tutorial.pre(\''+url+'\', '+(idx-1)+', '+max+')');
    },
    close: function() {
        $('body').css('overflow', '');
        $('.tutorial_overlay').hide();
        $('.tutorial_main').hide();

        setCookie(this.cookieName, 'view', 1);
    }
};

var MainSlider = {
    init: function() {
        var wrap = $('.slide_banner_box');
        var firstColor = wrap.find('a').eq(0).css('background-color');
        $('.big_banner').css('background-color', firstColor);

        if(wrap.children().length > 1) {
            var row = '';
            for(var i = 0 ; i < wrap.find('div').length ; i++) {
                if(i == 0) {
                    row  += '<button type="button" onclick="MainSlider.moveTo('+i+')" class="selected">&nbsp;</button>';
                } else {
                    row  += '<button type="button" onclick="MainSlider.moveTo('+i+')">&nbsp;</button>';
                }
            }

            $('.slide_page_btns').html(row);

            this.flicker = new eg.Flicking(".slide_banner_box", {
                circular: true,
                defaultIndex: 0,
                duration: parseInt(wrap.attr('flicking-speed'))
            }).on({
                beforeFlickStart: updateBackground,
                flickEnd: optionhandler
            });

            var flick = this.flicker;
            setInterval(function() {
                flick.next();
            }, parseInt(wrap.attr('flicking-timeout')));
        }
    },
    next: function() {
        this.isChanged = false;
        this.flicker.next();
    },
    prev: function() {
        this.isChanged = false;
        this.flicker.prev();
    },
    moveTo: function(idx) {
        this.updateBackground(idx);
        this.isChanged = true;
        this.flicker.moveTo(idx);
    },
    updateBackground: function (idx) {
        var selectedColor = $('.slide_banner_box').find('a').eq(idx).css('background-color');
        $('.big_banner').css('background-color', selectedColor);
    }
};

var MainFade = {
    init: function() {
        var wrap = $('.slide_banner_box');
        if(wrap.children().length > 1) {
            var row = '';
            for(var i = 0 ; i < wrap.find('div').length ; i++) {
                if(i == 0) {
                    row  += '<button type="button" onclick="MainFade.moveTo('+i+')" class="selected">&nbsp;</button>';
                } else {
                    row  += '<button type="button" onclick="MainFade.moveTo('+i+')">&nbsp;</button>';
                }
            }

            $('.slide_page_btns').html(row);
        }

        this.fader = wrap.bxSlider({
            auto: true,
            pause : parseInt(wrap.attr('flicking-timeout')),
            mode: 'fade',
            captions: true,
            pager: false,
            controls: false,
            onSlideBefore: function($slideElement, oldIndex, newIndex) {
                $('.slide_page_btns').children().removeClass('selected');
                $('.slide_page_btns').children().eq(newIndex).addClass('selected');
            }
        });

        var mainFader = this.fader;
        wrap.mouseover(function(){ mainFader.stopAuto();});
        wrap.mouseleave(function(){ mainFader.startAuto();});
    },
    moveTo: function(idx) {
        this.fader.goToSlide(idx);
        this.fader.stopAuto();
    }
}

function updateBackground(e) {
    if(MainSlider.isChanged) {
        return;
    }
    var idx = 0;
    if(e.direction == 4) {
        idx = e.no-1;
        if(0 == idx) {
            idx = 0;
        }
    } else if(e.direction == 2) {
        idx = e.no+1;
        if($('.slide_banner_box').find('a').length == idx) {
            idx = 0;
        }
    }

    var selectedColor = $('.slide_banner_box').find('a').eq(idx).css('background-color');
    $('.big_banner').css('background-color', selectedColor);
}

function optionhandler(e) {
    $('.slide_page_btns').find('button').removeClass('selected');
    $('.slide_page_btns').find('button').eq(e.no).addClass('selected');
}

var MainCategorySlider = {
    init: function() {
       var wrap = $('.main_best_content');
        if(wrap.children().length > 1) {
            this.cFlicker = new eg.Flicking(".main_best_content", {
                circular: true,
                defaultIndex: 0,
                duration: parseInt(wrap.attr('flicking-speed'))
            });

            $('.main_best_paging').css("display", 'inline-block');
        }

    },
    next: function() {
        this.cFlicker.next();
    },
    prev: function() {
        this.cFlicker.prev();
    }
}


function dataToolTip (obj) {

    var offset = $(obj).offset();
    var myWidth = $(obj).width();
    var myHeight = $(obj).height();
    var targetId = $(obj).attr('data-tooltip');
    var targetWidth = $(obj).attr('data-tooltip-width');
    var targetGap = $(obj).attr('data-tooltip-gap');
    var toolHeight = $('#'+ targetId).innerHeight();
    var PosX = offset.left - (targetWidth / 2 - myWidth / 2);
    var PosY = offset.top + myHeight - 110 ;
    $('.common_tooltip').css('z-index', '0').hide();

    if(targetGap) {
        PosY = PosY - targetGap;
    }

    $('#' + targetId).css({
        'width': targetWidth,
        'top': PosY + 'px',
        'left': PosX + 'px',
        'position': 'absolute',
        'z-index': '211'
    }).show();

    if (PosX < 0) {
        $('#' + targetId).css('left', '0px');
        $('#' + targetId + ' .tooltip_arr').css('left', offset.left + 5);
    } else {
        $('#' + targetId + ' .tooltip_arr').css('left', '50%');
    }
}

function dataToolTip_reverse (obj) {

    var offset = $(obj).offset();
    var myWidth =  $(obj).width();
    var myHeight =  $(obj).height();
    var targetId = $(obj).attr('data-tooltip');
    var targetWidth = $(obj).attr('data-tooltip-width');
    var toolHeight = $('#'+ targetId).innerHeight();
    var PosX = offset.left - (targetWidth/2 - myWidth/2);
    var PosY = offset.top + myHeight - 110;
    $('.common_tooltip').css('z-index', '0').hide();

    $('#'+ targetId).css({
        'width' : targetWidth,
        'top'       : PosY -(toolHeight + myHeight) + 'px',
        'left'      : PosX + 'px',
        'position'   : 'absolute',
        'z-index'   : '199'
    }).addClass('reverse').show()
    if (PosX < 0) {
        $('#' + targetId).css('left', '0px');
        $('#' + targetId + ' .tooltip_arr').css({
            'left': offset.left + 5,
            'top': toolHeight -1 + 'px'
        });
    }else{
        $('#' + targetId + ' .tooltip_arr').css({
            'left': '50%',
            'top': toolHeight -1 + 'px'
        });
    }
}

var exLyNums = 0;
//layer popup 열기
function openLayExtend(name){
    exLyNums++;
    $(".popup_layer").each(function(index){
        if($(this).hasClass(name)){
            $(this).layerScriptExtend({divs : name});

            if(name == 'confirm_coupon') {
                $('#layer_bg').hide();
            }

            if(name == 'movie01') {
                $(".movie01").append("<iframe width=\"740\" height=\"416\" src=\"https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=523AC0EC16DA51AC5574D0D35E98EA296CC1&outKey=V12400d000be27c6a8d0eeebb4aeb6ebd501be19e2ff5cc224786eebb4aeb6ebd501b\" frameborder=\"no\" scrolling=\"no\" allow='autoplay; encrypted-media' allowfullscreen></iframe>").css({top:"50%", marginTop:"-200px"});
            }
            if(name == 'movie02') {
                $(".movie02").append("<iframe width=\"740\" height=\"416\" src=\"https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=7D1ABF22D9F4A5B414655508428F425CE66C&outKey=V1241a0057ecbc3803039e684c5be372c481d4dfc421309dfa1f1e684c5be372c481d\" frameborder=\"no\" scrolling=\"no\" allow='autoplay; encrypted-media' allowfullscreen></iframe>").css({top:"50%", marginTop:"-200px"});
            }
            if(name == 'movie03') {
                $(".movie03").append("<iframe width=\"740\" height=\"416\" src=\"https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=C967C0AB6B8CDC55B7661AAEB93B4C8FECEA&outKey=V128af2848b0b8876ec85b7b379177af63104b09d53226b83b3eab7b379177af63104\" frameborder=\"no\" scrolling=\"no\" allow='autoplay; encrypted-media' allowfullscreen></iframe>").css({top:"50%", marginTop:"-200px"});
            }
        }
    });
}

$.fn.layerScriptExtend = function(o){
    o = $.extend({
        divs : ''
    }, o || {});

    var e = $(this),
        // bg = $('<div id="layer_bg" style="overflow-y: auto; opacity: 1; background-color: rgba(0,0,0,0.5);"></div>'),
        ly_w,
        ly_h,
        closeDiv = o.divs;

    $("body").attr("exLyNums", exLyNums)
    // 열기
    if(!$("body").hasClass("exLyOn")){
        $("body").addClass("exLyOn");
        // bg.prependTo($("body"));
    }

    _resize();

    function _resize() {
        ly_w = e.width();
        ly_h = e.height();
        e.css({"margin-left":-(ly_w/2)}).show();

        e.parent('.extend_layer_bg').show();
        e.show();

        if(e.outerHeight(true) > $(window).height()) {
            $('html').css('overflow-y', 'hidden');
        } else {
            $('html').css('overflow-y', '');
        }
    }

    //addResizeListener(e.get(0), _resize);


    // 닫기
    $('.popup_layer.'+o.divs).find(".btn_close").off("click");
    $('.popup_layer.'+o.divs).find(".btn_close").on('click', function(){
        layerCloseExtend(closeDiv);
    });
    // dimmed 배경 클릭시 팝업 이벤트 닫힘
    /*    bg.on('click', function(){
            layerClose(closeDiv);
        });*/

    //esc 클릭시 팝업 이벤트 닫힘
    $("body").keyup(function(escEvent) {
        if (escEvent.keyCode == 27) {
            layerCloseExtend(closeDiv);
        }
    });
}

// layer popup 닫기 (Extent)
function layerCloseExtend(name){
    $(".popup_layer").each(function(index){
        if($(this).hasClass(name)){
            var e = $(this);

            e.hide().hide();
            $(".extend_layer_bg").hide();

            exLyNums--;
            if(exLyNums == 0){
                $("body").removeClass("exLyOn");
                // $("#layer_bg").remove();
            }
            $("body").attr("exLyNums", exLyNums);
        }
        if($(".movie01")) {
            $(".movie_area iframe").remove();
        }
        if($(".movie02")) {
            $(".movie_area iframe").remove();
        }
        if($(".movie03")) {
            $(".movie_area iframe").remove();
        }

        $('html').css('overflow-y', 'auto');
    });

    /* OTWOJOB-566 */
    $(".event_layer").each(function(index){
        if($(this).hasClass(name)){
            var e = $(this);

            e.hide().attr("style","display:none");
            $(".extend_layer_bg").attr("style","display:none");

            exLyNums --;
            if(exLyNums == 0){
                $("body").removeClass("exLyOn");
            }
        }
    });
    /* //OTWOJOB-566 */
}

var specialAds = {
    init: function() {
        var target = $('.ad_list li');
        target.find('.info_icon').css('opacity', 0);
        target.each(function() {
            $(this).find('.fade_1').children().css('opacity', 0);
            $(this).find('.fade_2').children().css({
                opacity: 0,
                bottom: '-5px'
            });

            $(this).mouseenter(function(e){
                var _this = $(this);

                _this.find('.fade_1').children().animate({
                    opacity: 1
                }, 300);

                _this.find('.fade_2').children().animate({
                    opacity: 1,
                    bottom: '15px'
                }, 400);
            });

            $(this).mouseleave(function(e){
                var _this = $(this);
                _this.find('.fade_1').children().css('opacity', 0);
                _this.find('.fade_2').children().css({
                    opacity: 0,
                    bottom: '-5px'
                });

            });
        });
    }
}

var setCookie = function(name, value, exp) {
    var date = new Date();
    date.setUTCHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    date.setMilliseconds(999);

    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

var getCookie = function(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
};

(function(){
    var attachEvent = document.attachEvent;
    var isIE = navigator.userAgent.match(/Trident/);
    //console.log(isIE);
    var requestFrame = (function(){
        var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
                  function(fn){ return window.setTimeout(fn, 20); };
        return function(fn){ return raf(fn); };
    })();

    var cancelFrame = (function(){
        var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
                     window.clearTimeout;
        return function(id){ return cancel(id); };
    })();

    function resizeListener(e){
        var win = e.target || e.srcElement;
        if (win.__resizeRAF__) cancelFrame(win.__resizeRAF__);
        win.__resizeRAF__ = requestFrame(function(){
            var trigger = win.__resizeTrigger__;
            trigger.__resizeListeners__.forEach(function(fn){
                fn.call(trigger, e);
            });
        });
    }

    function objectLoad(e){
        this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__;
        this.contentDocument.defaultView.addEventListener('resize', resizeListener);
    }

    window.addResizeListener = function(element, fn){
        if (!element.__resizeListeners__) {
            element.__resizeListeners__ = [];
            if (attachEvent) {
                element.__resizeTrigger__ = element;
                element.attachEvent('onresize', resizeListener);
            }
            else {
                if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
                var obj = element.__resizeTrigger__ = document.createElement('object');
                obj.setAttribute('style', 'display: block; position: fixed; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden;  z-index: -1;');
                obj.__resizeElement__ = element;
                obj.onload = objectLoad;
                obj.type = 'text/html';
                if (isIE) element.appendChild(obj);
                obj.data = 'about:blank';
                if (!isIE) element.appendChild(obj);
            }
        }
        element.__resizeListeners__.push(fn);
    };

    window.removeResizeListener = function(element, fn){
        element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
        if (!element.__resizeListeners__.length) {
            if (attachEvent) element.detachEvent('onresize', resizeListener);
            else {
                element.__resizeTrigger__.contentDocument.defaultView.removeEventListener('resize', resizeListener);
                element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
            }
        }
    }
})();