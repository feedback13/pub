(function(){
    var attachEvent = document.attachEvent;
})();

var commonLayer = {
    open : function(name) {
        var target = $('.' + name);
        if(target.length) {
            if (!jQuery.browser.mobile) {
                this.openPC(name);
            } else {
                this.openMobile(name);
            }
        }
    },
    openPC : function(name) {

        lyNums1++;
        $(".popup_layer").each(function(index){
            if($(this).hasClass(name)){
                $(this).layerScript({divs : name});
            }
        });
        /* OTWOJOB-566 */
        $(".event_layer").each(function(index){
            if($(this).hasClass(name)){
                $(this).layerScript({divs : name});
            }
        });
    },
    openMobile : function(name) {
        $('header').hide();
        $('.content').hide();
        $('footer').hide();
        if($('aside').length) {
            $('aside').css('display', 'none');
        }
        $('html').css('overflow-y', 'hidden');

        var _this = this;
        $('.'+name).find(".btn_close").off("click");
        $('.'+name).find(".btn_close").on('click', function(){
            _this.layerCloseMobile();
        });

        $('.'+name).show();

    },
    layerCloseMobile: function() {
        $(".popup_layer").each(function(index){
            $(this).hide();
        });
        $(".event_layer").each(function(index){
            $(this).hide();
        });

        $('header').show();
        $('.content').show();
        $('footer').show();
        if($('aside').length) {
            $('aside').show();
        }
        $('html').css('overflow-y', 'auto');
    }
}

$.fn.layerScript = function(o){
    o = $.extend({
        divs : ''
    }, o || {});

    var e = $(this),
        bg = $('<div id="layer_bg"></div>'),
        ly_w,
        ly_h,
        closeDiv = o.divs;

    $("body").attr("lyNums", lyNums1);
    // 열기
    if(!$("body").hasClass("lyOn")){
        $("body").addClass("lyOn");
        bg.prependTo($("body"));
    }

    ly_w = e.width();
    ly_h = e.height();
    // e.css({"margin-left":(-(ly_w/2)) + 'px', "margin-top":(-(ly_h/2))  + 'px'}).show();
    e.show();

    // 닫기
    $(this).find(".btn_close").off("click");
    $(this).find(".btn_close").on('click', function(){
        layerClose(closeDiv);
    });
}

var  lyNums1 = 0,
    lyOne = 0;

// layer popup 닫기
function layerClose(name){
    $(".popup_layer").each(function(index){
        if($(this).hasClass(name)){
            var e = $(this);

            e.hide().attr("style","display:none");
            $("#layer_bg").attr("style","display:none");

/*            var html = $('#layer_bg').find('.popup_layer')[0].outerHTML;
            $('body').append(html);*/

            lyNums1 --;
            // if(lyNums1 == 0){
                $("body").removeClass("lyOn");
                $("#layer_bg").remove();
            // }

            $('html').css('overflow-y', 'auto');
        }
    });
}

window.addResizeListener = function(element, fn){
    if (!element.__resizeListeners__) {
        element.__resizeListeners__ = [];
        var attachEvent = document.attachEvent;
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
