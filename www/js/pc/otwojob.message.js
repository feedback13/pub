
$(document).ready(function () {
    if ($('.message_box')){
        messageInfo.init();
    }
    /*if ($('.btn_option')){
         optionControll.init();
    }*/
    if ($('.btn_search')){
        searchControll.init();
    }

    // pc 에만 적용 : resizeContent.init();
    resizeContent.init();
    numberInput.init();

    if($('textarea').length) {
        $("textarea").on('keydown keyup', function () {
            if(!$(this).hasClass('textarea_edit')) {
                $(this).height(1).height( $(this).prop('scrollHeight'));
                if($(this).prop('scrollHeight') > 35) {
                    // $('.message_foot').css('bottom', ($('.message_input').outerHeight(true) - 44) + 'px');
                    $('.message_write').css('height',  ($('.message_input').outerHeight(true) + 1) + 'px');
                    if($('.content').hasClass('type02')) {
                        $('.content > div').css('max-height', 'calc(100vh - '+(50 + $('.message_write').outerHeight(true))+'px)');
                        $('.content > div').find('.scrollbar-inner').css('max-height', 'calc(100vh - '+(50 + $('.message_write').outerHeight(true))+'px)');
                    } else {
                        $('.content > div').css('max-height', 'calc(100vh - '+(110 + $('.message_write').outerHeight(true))+'px)');
                        $('.content > div').find('.scrollbar-inner').css('max-height', 'calc(100vh - '+(110 + $('.message_write').outerHeight(true))+'px)');
                    }
                }
            }

        });
    }

/*    if($(".sticker_btn").length) {
        $(".sticker_btn").on('click', function() {
            var _this = $(this);
            if(_this.hasClass('on')) {
                $('.message_wrap').css('padding-bottom', '');
                $(".sticker_list").css('display', '');
                $(".sticker_box").css('display', 'none');
                _this.removeClass('on');
            } else {
                $('.message_wrap').css('padding-bottom', '410px');
                $(".sticker_list").css('display', 'inline-block');
                _this.addClass('on');
            }
        });
    }*/

    if($('.option_paging').length) {
        optionBoxPaging.init();
    }
    fnSelectbox();
    floating.init();
    try {
        //input 달력 포커스 시 달력폼 노출
        if ( $('.input_calendar').length ) fnCalendalFocus();
    } catch(e) {
        console.log('calendar publishing...');
    }

    $('.coupon_closer').click(function(){
        $(this).parent('.common_tooltip').css('z-index', '0').hide();
    });

});

var stickerBox = {
    openList: function() {
        $('.floating_main').hide();
        if($('.content').hasClass("type02")) {
            $('.content > div').css('max-height', '593px');
            $('.content > div > div').css('max-height', '593px');
        } else {
            $('.content > div').css('max-height', '533px');
            $('.content > div > div').css('max-height', '533px');
        }

        $('.bottom_box').addClass('on');
        $(".sticker_list").css('display', 'inline-block');
        $(".sticker_btn").addClass('on');
        $('.empty_field').addClass('on');
    },
    closeList: function() {
        $('.floating_main').css('display', 'inline-block');
        if($('.content').hasClass("type02")) {
            $('.content > div').css('max-height', ($(window).height() - 115) + 'px');
            $('.content > div > div').css('max-height', ($(window).height() - 115) + 'px');
        } else {
            $('.content > div').css('max-height', ($(window).height() - 175) + 'px');
            $('.content > div > div').css('max-height', ($(window).height() - 175) + 'px');
        }
        $('.bottom_box').removeClass('on');
        $('.sticker_list > .scrollbar-inner > div').scrollTop(0);
        $(".sticker_list").css('display', '');
        $(".sticker_box").css('display', 'none');
        $(".sticker_btn").removeClass('on');
        $('.empty_field').removeClass('on');
    },
    openBox: function() {
        $('.sticker_box').css("display", 'inline-block');
    },
    closeBox: function() {
        $('.sticker_box').hide();
    }
}

var optionBoxPaging = {
    init : function () {
        /*this.f1 =  new eg.Flicking(".option_paging").on({
            flickEnd: optionhandler
        });*/
        $('.option_box').hide();
        $('.option_box').css('opacity', '1');
    },
    moveTo : function(idx) {
        // this.f1.moveTo(idx);
    }
}

function optionhandler(e) {
    $('.option_paging_btn').removeAttr('disabled');
    $('#option_pagin_btn_'+e.no).attr('disabled', 'disabled');

}

// pc 에만 적용 : resizeContent
var resizeContent = {
    init : function () {
        var winH = $(window).height(),
            msgH = winH;

        $('.scrollbar-inner').scrollbar({
            "onScroll": function(y, x) {
                // 스크롤이 맨밑이 아닐경우 밑으로 가기 버튼 보이기
                if (y.scroll != y.maxScroll && $('.bottom_box').css('display') == 'none') {
                    $('.bottom_box').css('display', 'inline-block');
                }

                // 스크롤이 맨밑일경우 밑으로 가기 버튼 감추기
                if (y.scroll == y.maxScroll && $('.bottom_box').css('display') != 'none') {
                    $('.bottom_box').css('display', 'none');
                }

                $('.common_tooltip').hide();
            }
        });

        if($('.content').hasClass('type02')) {
            $('.content').css('height', (msgH + 60) + 'px');
            $('.content > div').css('max-height', (msgH - 115) + 'px');

            $('.bottom_box').addClass('type02');
        } else {
            $('.content').css('height', msgH + 'px');
            $('.content > div').css('max-height', (msgH - 175) + 'px');
        }
        $('html, body').css("overflow-y", 'hidden');


        // 바로 실행하면 동시 실행문제인지 동작을 안하여 1초 딜레이후 스크롤 이동 이벤트 진행
        //setTimeout(function() {  scrollToTarget('move_target2') }, 1000);

        // 바로 실행하면 동시 실행문제인지 동작을 안하여 1초 딜레이후 스크롤 이동 이벤트 진행
        //setTimeout(function() {  scrollToTarget('move_target2') }, 1000);

        $( window ).resize(function() {
            resizeContent.browserResize();
        });
    },
    browserResize : function () {
        var winH = $(window).height(),
            msgH = winH;
        if($('.content').hasClass('type02')) {
            $('.content').css('height', (msgH + 60) + 'px');
            $('.content > div').css('max-height', (msgH - 108) + 'px');
        } else {
            $('.content').css('height', msgH + 'px');
            $('.content > div').css('max-height', (msgH - 158) + 'px');
        }


        $('.scrollbar-inner').scrollbar();
    }
}

var messageInfo = {
    init : function () {
        this.target = $('.message_box');

        this.target.each(function () {
            if($(this).find('.txt_info')){
                this.parentTarget = $(this).parent();
                this.txtBox = $(this).find('.txt');
                this.infoBox =  $(this).find('.txt_info');
                this.txtBoxWidth =  this.txtBox.outerWidth(true);

                messageInfo.posInfoBox(this.txtBoxWidth, this.infoBox, this.parentTarget);
            }
        })
    },
    posInfoBox : function (txtBoxWidth, infoBox, parentTarget) {
        var parentTarget = parentTarget;
        var txtBoxWidth = txtBoxWidth;
        var infoBox = infoBox;

        if (parentTarget.is('.recipient')){
            infoBox.css({
                             display : 'block',
                             left : (txtBoxWidth + 8) + 'px'
                         })
        }else{
            infoBox.css({
                             display : 'block',
                             right : (txtBoxWidth + 8) + 'px'
                         })
        }

    }
};


/*var optionControll = {
    init : function () {
        this.target = $('.btn_option');
        this.targetBtn = this.target.find('button');
        this.active = false;

        this.targetBtn.on('click', function () {
            optionControll.clickEvent();
        })
    },
    clickEvent : function () {
        var value = this.active;
        this.target = $('.option_box');

        var optionBox = $('.option_box ul li');
        var target = optionBox.find('div');

        target.css({
            left: '33px',
            width: '48px',
            height: '48px',
            zIndex: '3'
        });

        if (value == false){
            $('.floating_main').hide();
            this.targetBtn.addClass('on');
            this.target.show();
            this.active = true;
        }else {
            $('.floating_main').css('display', 'inline-block');
            this.targetBtn.removeClass('on');
            this.target.hide();
            this.active = false;
        }
    },
    changeInactive: function() {
        this.active = false;
    }
};*/


var searchControll = {
    init : function () {
        this.openButton = $('.header').find('.btn_search');
        this.closeButton = $('.header').find('.btn_close');
        this.defaltHeader = $('.defalt_area');
        this.searchHeader = $('.search_area');

        this.openButton.on('click', function () {
           searchControll.openSearchHeader();
        });
        this.closeButton.on('click', function () {
           searchControll.closeSearchHeader();
        });
    },
    openSearchHeader : function () {
        this.defaltHeader.hide();
        this.searchHeader.show();
        $('.message_foot').hide();
        $('.message_search_controll').show();
        $('.search_area').find('input').focus();
    },
    closeSearchHeader : function () {
        this.defaltHeader.show();
        this.searchHeader.hide();
        $('.message_foot').show();
        $('.message_search_controll').hide();
    }
};

var layerPop = {
    init : function (layerName, op) {
        this.targetLayer = $('.' + layerName);
        this.dim = '<div class="dim"></div>';
        var op = op;

        if (op == '') {
            layerPop.openLayer();
        }else if (op == 'full') {
            layerPop.openFullLayer();
        }else {
            return false;
        }
    },
    openLayer : function () {
        var top = ( $(window).scrollTop() + ( $(window).height() - this.targetLayer.height()) / 2 );
        this.targetLayer.css({'top' : top});

        $('body').append(this.dim);
        $('html, body').css('overflow-y', 'hidden');
        this.targetLayer.show();
    },
    closeLayer : function (target) {
        var target = $('.' + target);
        $('.dim').remove();
        // $('html, body').css('overflow-y', 'auto');
        target.hide();
    },
    openFullLayer : function () {
        $('.header').hide();
        //$('.content').hide();
        $('.footer').hide();
        this.targetLayer.show();

        // pc 에만 적용
        var winH = $(window).height(),
            headerH = this.targetLayer.find('.tit_area').outerHeight(true),
            msgH = winH - headerH;

        if(this.targetLayer.find('.tab_area').length) {
            msgH = msgH - this.targetLayer.find('.tab_area').outerHeight(true);
        }

        $('.scrollbar-inner').scrollbar();
        $('.full_layer_pop .cont_area').css('height', msgH + 'px');
        // if(!$('.full_layer_pop .cont_area > div').hasClass('footer_area')) {
            $('.full_layer_pop .cont_area > div').css('max-height', msgH + 'px');
        // }
        $('.full_layer_pop .cont_area .entering_box').css('max-height', (msgH - 80) + 'px');


        $( window ).resize(function() {
            layerPop.browserResize();
        });
    },
    closeFullLayer : function (target) {
        $('.floating_main').css('display', 'inline-block');
        $('.common_tooltip ').hide();

        var target = $('.' + target);
        $('.header').show();
        $('.content').show();
        $('.footer').show();

        target.hide();
    },
    // pc 에만 적용 : browserResize
    browserResize : function () {
        var winH = $(window).height(),
            headerH = this.targetLayer.find('.tit_area').outerHeight(true),
            msgH = winH - headerH;

        $('.scrollbar-inner').scrollbar();
        $('.full_layer_pop .cont_area').css('height', msgH + 'px');
        $('.full_layer_pop .cont_area > div').css('max-height', msgH + 'px');
    }
};

var floating = {
    init: function() {
        if($('.floating_main').length) {
            var floating = $('.floating_main');
            var inform = floating.html();
            if($.trim(inform) == '') {
                floating.addClass('hide');
                $('.bottom_box').addClass('type03');
            }
        }

    }
}

function scrollToTarget(targetId, isNew) {
    try {
        var targetTop = document.getElementById(targetId).offsetTop - 5;
        if(isNew) {
            $('.scrollbar-inner').scrollTop(targetTop + 50);
        } else {
            $('.scrollbar-inner').scrollTop(targetTop);
        }
    } catch(e) {
        console.log('targetid not found, ' + targetId);
    }
}

// 타겟ID, Bounce 횟수, Bounce 높이, Bounce 주기
function bounceMessage(targetId, times, distance, speed) {
    for(i = 0; i < times; i++) {
        $('#'+targetId).animate({top: '-='+distance + 'px'},speed)
            .animate({top: '+='+ distance + 'px'},speed);
    }
}

function toggleLayer(layer) {
    var target = $(layer).next();
    $('.common_tooltip').hide();
    if(target.css('display') == 'none') {
        $('.option_input_box.border_b').each(function() {
            $(this).css('display', 'none');
        });
        target.slideDown("slow");;
    } else {
        target.slideUp('slow');
    }
}

function toggleMessage(_this) {
    var target = $(_this).parent();
    if(target.hasClass('full')) {
        target.removeClass('full');
    } else {
        target.addClass("full");
    }
}

function moveToBottomScroll() {
    $('.content').find('.scrollbar-inner').scrollTop($('.message_wrap').height());

    if($('.recent_box').css('display') != 'none') {
        $('.recent_box').css('display', 'none');
    }

    if($('.bottom_box').css('display') != 'none') {
        $('.bottom_box').css('display', 'none');
    }
}

function inViewport(targetId) {
    var $ele = $('#'+targetId);
    if($ele) {
        var lBound = $('.scrollbar-inner.scroll-content').scrollTop(),
            uBound = lBound + $('.scrollbar-inner.scroll-content').height(),
            top = $ele[0].offsetTop,
            bottom = top + $ele.outerHeight(true);

        return (top > lBound && top < uBound)
            || (bottom > lBound && bottom < uBound)
            || (lBound >= top && lBound <= bottom)
            || (uBound >= top && uBound <= bottom);
    } else {
        return false;
    }
}

function closeOptionControl() {

    var target = $('.option_box');
    var targetBtn = $('.btn_option').find('button');

    targetBtn.removeClass('on');
    target.hide();
    // optionControll.changeInactive();
    resetMessageInput();
}

function resetMessageInput() {
    $('textarea').css('height', '40px');
    $('.message_write').css('height',  '67px');
    if($('.content').hasClass('type02')) {
        $('.content > div').css('max-height', 'calc(100vh - 117px)');
        $('.content > div').find('.scrollbar-inner').css('max-height', 'calc(100vh - 117px)');
    } else {
        $('.content > div').css('max-height', 'calc(100vh - 177px)');
        $('.content > div').find('.scrollbar-inner').css('max-height', 'calc(100vh - 177px)');
    }
}

function setSticker(target) {
    var src = $(target).children('img').attr('src');
    $('.sticker_box img').attr('src', src);
    $('.sticker_box').css("display", 'inline-block');
}

function fnSelectbox() {
    $('body').on('change', '.selectbox select', function () {
        var select_name = $(this).children('option:selected').text();
        $(this).siblings('label').text(select_name);
    });
}

function fnCalendalFocus() {
    var datepicker = $('.input_calendar');
    var minDate;
    datepicker.prop('readOnly', true);
    if(datepicker.hasClass('only_after')) {
        minDate = new Date();
    } else {
        minDate = new Date(1970, 0, 1, 0, 0, 0);
    }

    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
    });

    datepicker.datepicker({
        minDate: minDate,
        onClose: function(e) {
            var date = new Date(datepicker.datepicker({ dateFormat: 'yy-mm-dd' }).val()),
                week = new Array('일', '월', '화', '수', '목', '금', '토');
            if (week[date.getDay()]!= undefined) {
                datepicker.val(datepicker.val() + ' (' + week[date.getDay()] + ')');
            }
        }
    });
}

var numberInput = {
    init: function() {
/*        $('input[type=number]').each(function() {
            $(this).focus(function() {
                var val = $(this).val();
                var _this = this;
                $(this).val('');
                $(this).val(val);
                $(this).focus().val($(this).val());
            });

            $(this).keyup(function(e) {
                var target = $(this).next();
                var unit = '';
                var value1 = '';
                if(target.hasClass('date')) {
                    unit = '일';
                    value1 = $(this).val();
                } else if(target.hasClass('price')) {
                    unit = '원';
                    value1 = UTIL.comma($(this).val());
                }

                if($(this).val()) {
                    $(this).addClass("transparent");
                    target.html(value1 + '' + unit);
                } else {
                    $(this).removeClass("transparent");
                    target.html('');
                }
            });
        })*/
    }
}

function setToggle(_this) {
    var target = $(_this);
    if(target.hasClass('on')) {
        target.removeClass("on");
    } else {
        target.addClass("on");
    }
}

function dataToolTip_nonPosition(obj) {
    var offset = $(obj).offset();
    var myWidth = $(obj).width();
    var myHeight = $(obj).height();
    var targetId = $(obj).attr('data-tooltip');
    var targetWidth = $(obj).attr('data-tooltip-width');
    var toolHeight = $('#'+ targetId).innerHeight();
    var PosX = offset.left - (targetWidth / 2 - myWidth / 2);
    var PosY = offset.top + myHeight - 110 ;
    $('.common_tooltip').css('z-index', '0').hide();

    $('#' + targetId).css({
        'width': targetWidth,
        'z-index': '199'
    }).show();
}

function dataToolTip (obj) {

    var offset = $(obj).offset();
    var myWidth = $(obj).width();
    var myHeight = $(obj).height();
    var targetId = $(obj).attr('data-tooltip');
    var targetWidth = $(obj).attr('data-tooltip-width');
    var toolHeight = $('#'+ targetId).innerHeight();
    var PosX = offset.left - (targetWidth / 2 - myWidth / 2);
    var PosY = offset.top + myHeight + 10 ;
    $('.common_tooltip').css('z-index', '0').hide();

    $('#' + targetId).css({
        'width': targetWidth,
        'top':PosY+ 'px',
        'left': PosX + 'px',
        'position': 'absolute',
        'z-index': '1199'
    }).show();

    if (PosX < 0) {
        $('#' + targetId).css('left', '10px');
        $('#' + targetId + ' .tooltip_arr').css('left', offset.left - 5);
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

var UTIL = {
    comma: function(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}