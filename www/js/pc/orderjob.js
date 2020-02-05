
var orderjobAnimation = {
    init: function() {
        if($('.base_category').length) {
            this.setSectionAnimation('.base_category', 95);
            this.setSectionAnimation('.best_keyword', 80);
            this.setSectionAnimation('.orderjob_guide', 80);
            this.setSectionAnimation('.seller_slide_area', 75);
            // this.setSectionAnimation('.total_category', 50);
        }

        if($('.order_regist_banner').length) {
            $('.order_regist_banner').find(".collor_field").css({
                opacity : 0
            });
            $('.order_regist_banner').find(".banner_text").children('img').css({opacity: '0', animationDelay: '0.2s'})
            $('.order_regist_banner').find(".banner_text").children('div').css({opacity: '0', animationDelay: '0.7s'})

            $('.order_regist_banner').find(".collor_field").waypoint(function() {
                $('.order_regist_banner').find(".collor_field").addClass('fadeInLeft');
                $('.order_regist_banner').find(".banner_text").children('img').addClass('fadeInRight');
                $('.order_regist_banner').find(".banner_text").children('div').addClass('fadeInUp');
            }, {
                offset: '65%'
            });
        }

        if($('.seller_regist_banner').length) {
            $('.seller_regist_banner').find(".collor_field").css({
                opacity : 0, animationDelay: '0.2s'
            });
            $('.seller_regist_banner').find(".banner_text").children('img').css({opacity: '0'})
            $('.seller_regist_banner').find(".banner_text").children('div').css({opacity: '0', animationDelay: '0.7s'})

            $('.seller_regist_banner').find(".collor_field").waypoint(function() {
                $('.seller_regist_banner').find(".collor_field").addClass('fadeInLeft');
                $('.seller_regist_banner').find(".banner_text").children('img').addClass('fadeInRight');
                $('.seller_regist_banner').find(".banner_text").children('div').addClass('fadeInUp');
            }, {
                offset: '65%'
            });
        }

    },
    setSectionAnimation: function(selector, offset) {
        if($(selector).length) {
            $(selector).children('label').each(function() {
                $(this).css({
                    opacity : 0
                });
                $(selector).children('div').css({opacity: '0', animationDelay: '0.5s'});
                if($(selector).children('ul').length) {
                    $(selector).children('ul').css({opacity: '0', animationDelay: '0.5s'});
                }
                var _this = $(this);
                $(this).waypoint(function() {
                    _this.addClass('fadeInUp');
                    $(selector).children('div').addClass('fadeInUp');
                    if($(selector).children('ul').length) {
                        $(selector).children('ul').addClass('fadeInUp');
                    }
                }, {
                    offset: offset + '%'
                });
            });
        }
    }
}

var StatisticCounter = {
    init: function(id, value) {
        var options = {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
        };

        var count = new CountUp(id, 0, value, 0, 1.5, options);

        if (!count.error) {
            count.start();
        } else {
            // console.error(count.error);
        }
    }
}

var orderHistoryLayer = {
    init: function () {
        this.target = $('.order_history_layer');

        if(this.target.is('._active')){ // 레이어 닫기
            orderHistoryLayer.closeEvent();
        }else{ // 레이어 열기
            orderHistoryLayer.openEvent();
        }
    },
    openEvent: function () {
        var btn = $("._orderHistoryLayer");
        this.target.css('left', btn.offset().left - $('.global').children('.inner').offset().left - 160);

        this.target.addClass('_active');
        this.target.slideDown();
        //this.target.show();
    },
    closeEvent: function () {
        this.target.removeClass('_active');
         this.target.slideUp();
        //this.target.hide();
    }
};

var arraySetField = {
    init : function() {
        if($('.array_sets').length) {
            $('.array_sets').click(function() {
                $('.array_sets').children('.array_input').focus();
            });
        }
    },
    fieldClick: function() {
        $('.array_sets').children('.array_input').focus();;
    },
    removeArray: function(target, uuid) {
        var sets = $(target).parent();
        $(target).remove();

        sets.find('input[type=hidden]').val(JSON.stringify(this.getArrayList(sets)));
    },
    keydownEvent: function(target, event) {
        var keyID = (event.which) ? event.which : event.keyCode;
        if(keyID == 32 || keyID == 188) {
            if(!UTIL.isBlank($(target).val())) {
                var arr = this.getArrayList($(target).parent());
                arr.push($(target).val());
                $(target).parent().find('input[type=hidden]').val(JSON.stringify(arr));

                $(target).before(this.setArrayBlock($(target).val()));
                event.target.value = '';
            }

            return false;
        } else if(keyID == 13) {
            return false;
        }
    },
    keyupEvent: function(target, event) {
        var keyID = (event.which) ? event.which : event.keyCode;
        if(keyID == 13 || keyID == 32 || keyID == 188) {
            event.target.value = '';
        }
    },
    getArrayList: function(sets) {
        var arr = [];
        if(sets.find('span').length) {
            sets.find('span').each(function() {
                arr.push($(this).text());
            });
        }

        return arr;
    },
    setArrayBlock: function(url) {
        var uuid = UTIL.guid();
        var row = '<span id="'+uuid+'">'+url+'<button type="button" onclick="arraySetField.removeArray(this.parentElement, \''+uuid+'\')"><img src="https://images.otwojob.com/image/pc/orderjob/btn-close-black-16-px.png"></button></span>';
        return row;
    }
}

$(document).ready(function() {
    var agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf("msie") < 0) {
        orderjobAnimation.init();
    } else {
        var ieNum = navigator.userAgent.match(/Trident\/(\d.\d)/i)[1];
        console.log('ie : ' + ieNum);
        if(parseInt(ieNum) < 6) {
            $('.total_category').hide();
        }
    }

    try {
        var accumulateCount = ($('#accumulate_count').text()).replaceAll(',', '');
        var accumulateOrderAccount = ($('#accumulate_order_account').text()).replaceAll(',', '');
        var accumulateOrderCount = ( $('#accumulate_order_count').text()).replaceAll(',', '');

        StatisticCounter.init('accumulate_count', accumulateCount);
        StatisticCounter.init('accumulate_order_account', accumulateOrderAccount);
        StatisticCounter.init('accumulate_order_count', accumulateOrderCount);
    } catch(e) {    }

/*    try {
        //input 달력 포커스 시 달력폼 노출
        if ( $('.input_calendar').length ) fnCalendalFocus();
    }catch(e) {
        console.log('calendar...');
    }*/

    if($('.promotion_banner').length) {
        $('#content_container').addClass('main');
    }
});

$(document).click(function(e){
    if (!$(e.target).is('._orderHistoryLayer') && !$(e.target).is('.tab_type_two a')) {
        if ($('.order_history_layer').is('._active')){
            orderHistoryLayer.init();
        }
    }
});


function fnCalendalFocus() {
    var datepicker = $('.input_calendar');
    var dateToday = new Date();
    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 60);

    datepicker.prop('readOnly', true);

    $.datepicker.setDefaults({
        dateFormat: 'yy년 mm월 dd일',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        minDate: dateToday,
        maxDate: maxDate
    });

    datepicker.datepicker();
}

var UTIL = {
    isBlank : function(str) {
        return (!str || /^\s*$/.test(str));
    },
    guid : function() {
        function s4() {
            return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    },
    viewKorean: function (num_value) {
        if (isNaN(num_value) == true)
            return "";

        // 1 ~ 9 한글 표시
        var arrNumberWord = new Array("", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구");
        // 10, 100, 100 자리수 한글 표시
        var arrDigitWord = new Array("", "십", "백", "천");
        // 만단위 한글 표시
        var arrManWord = new Array("", "만", "억", "조");

        var num_length = num_value.length;

        var han_value = "";
        var man_count = 0;      // 만단위 0이 아닌 금액 카운트.

        for (var i = 0; i < num_value.length; i++) {
            // 1단위의 문자로 표시.. (0은 제외)
            var strTextWord = arrNumberWord[num_value.charAt(i)];

            // 0이 아닌경우만, 십/백/천 표시
            if (strTextWord != "") {
                man_count++;
                strTextWord += arrDigitWord[(num_length - (i + 1)) % 4];
            }
            // 만단위마다 표시 (0인경우에도 만단위는 표시한다)
            if (man_count != 0 && (num_length - (i + 1)) % 4 == 0) {
                man_count = 0;
                strTextWord = strTextWord + arrManWord[(num_length - (i + 1)) / 4];
            }
            han_value += strTextWord;
        }

        return han_value;
    },
    getInternetExplorerVersion: function() {
        var rv = -1; // Return value assumes failure.
        if (navigator.appName == 'Microsoft Internet Explorer') {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat(RegExp.$1);
        }
        return rv;
    }
}

//replaceAll prototype 선언
String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}