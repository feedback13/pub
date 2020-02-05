function getItem(template, options) {
    return template.replace(/\$\{([^\}]*)\}/g, function () {
        var replaceTarget = arguments[1];

        return options[replaceTarget];
    });
}

function fnSelectbox() {
    $('body').on('change', '.selectbox select', function () {
        var select_name = $(this).children('option:selected').text();
        $(this).siblings('label').text(select_name);
    });
}

var imageMenu = {
    init: function() {
        var wrap = $('.img_menu');
        if(wrap.css('display') == 'none') {
            $('.img_menu').show();
            $('.img_menu').animate({
                height: 'auto',
                minHeight: '366px'
            }, 10);

            $('.depth1 li').on('mouseover', function () {
                var _this = $(this);
                _this.addClass('active');
                _this.find('.depth2').show();
            });
            $('.depth1 li').on('mouseout', function () {
                var _this = $(this);
                _this.removeClass('active');
                _this.find('.depth2').hide();
            });

            $('.depth2 li').on('mouseover', function () {
                var _this = $(this);
                _this.addClass('active');
                _this.find('.depth3').show();
            });
            $('.depth2 li').on('mouseout', function () {
                var _this = $(this);
                _this.removeClass('active');
                _this.find('.depth3').hide();
            });

        } else {
            $('.img_menu').animate({
                height: '0',
                minHeight: '0'
            }, 10, function() {
                $('.img_menu').hide();
            });
        }
    },
    closeMenu: function() {
        $('.img_menu').animate({
            height: '0',
            minHeight: '0'
        }, 10, function() {
            $('.img_menu').hide();
        });
    }
}

$(window).ready(function() {
    if($('.freeimg_footer_banner').length) {
        if($(window).width() > 1600) {
            $('.freeimg_footer_banner').css({
                backgroundSize: '100%'
            });
        } else {
            $('.freeimg_footer_banner').css({
                backgroundSize: '1600px 165px'
            });
        }

        $(window).resize(function() {
            if($(window).width() > 1600) {
                $('.freeimg_footer_banner').css({
                   backgroundSize: '100%'
                });
            } else {
                $('.freeimg_footer_banner').css({
                    backgroundSize: '1600px 165px'
                });
            }
        });
    }

    if($('.notice_detail').length) {
        $('.notice_detail').height(455 - $('.keyword').children('div').outerHeight(true));
    }

    //selectbox 스타일
    fnSelectbox();
});