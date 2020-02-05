var  lyNums = 0,
	  lyOne = 0;
// JavaScript Document
$(window).on("scroll", function(){ 
	var h=$(window).scrollTop();	
	if(h > 1){
		$(".header_wrap").css("visibility","hidden");
		$(".sticky_wrap").css("visibility","visible");
		$(".gnb_wrap").css({position:"fixed",left:0,top:"43px"});
		
	}else{
		$(".header_wrap").css("visibility","visible");
		$(".sticky_wrap").css("visibility","hidden");
		$(".search_sticky").css("display","none");
		$(".gnb_wrap").css({position:"absolute",left:0,top:"62px"});
	}
	if(h > 1110){
		$(".sticky02_wrap").css({position:"fixed",top:"87px"});
	}else{
		$(".sticky02_wrap").css({position:"absolute",left:0,top:"40px"});
	}
});
  
$(function(){
	
	//skip menu 동작
	$(".skip ul li a").on("focusin",function(){
		$(this).addClass("on");
	});
	
	$(".skip ul li a").on("focusout",function(){
		$(this).removeClass("on");
	});
	
	//Sticky 검색영역
	$(".search_sticky").hide();
	$(".srch_show").click(function(){
		$(".search_sticky").show();
	});
	
	//포커스 시 검색영역
	$(".search_wrap input").on("focusin",function(){
		$(".search_wrap").css("border","1px solid #ff5a12");
		$(".search_wrap .selectbox label").css("color","#ff5a12");
		$(".search_wrap .srch1").attr("src", "../../image/ui/ico/srch_icon_on.png");

	});
	
	$(".search_wrap input").on("focusout",function(){
		$(".search_wrap").css("border","1px solid #c7c7c7");
		$(".search_wrap .selectbox label").css("color","#666");
		$(".search_wrap .srch1").attr("src", "../../image/ui/ico/srch_icon.png");

	});
	
	
	//gnb메뉴 슬라이딩
	$(".gnb_main>a").on("mouseover focus",function(){
		var index = $(this).parent().parent().index();
		var gnbsub_h = $(this).parent().next().height();
		var active_h = (gnbsub_h+119) + "px";
		
		$(".gnb_wrap").stop().animate({height:active_h}, 300);
		$(".gnb_sub").css("display","none");
		$(".gnb>ul>li").eq(index).find(".gnb_sub").css("display","block");
		$(this).parent().parent().find(".total").find("a").addClass("on");
		
	});
	
	$(".gnb_wrap").on("mouseleave",function(){	
		$(".gnb_wrap").stop().animate({height:"44px"}, 300);
	});

	$(".gnb a:last").on("blur", function(){   // blur() : 포커스가 다른 메뉴로 가거나 사라질경우 발생
		$(".gnb").trigger("mouseleave");   // trigger() : 억지로 이벤트를 발생시켜야 할 때
	});	
	
	$(".gnb_sub li a").on("mouseover", function(){
		$(".gnb_sub li a").removeClass("on");
		$(this).addClass("on");
	});

	$(".gnb_main a").on("mouseover", function(){
		$(".gnb_main a").removeClass("on");
		$(this).addClass("on");
	});

	
	//lnb
	$.each($('.sub_menu .list > li').has('>ul'),function(){
		$(this).addClass('arrow');//하위메뉴가 있다면 .arrow추가
		$(this).find('>a').click(function(){
			$(this).parent().toggleClass('on');
		});
	});	
	
	
	//lnb_faq
	$.each($('.buy_faq_content .list > li').has('>ul'),function(){
		$(this).addClass('arrow');//하위메뉴가 있다면 .arrow추가
		$(this).find('>a').click(function(){
			$(this).parent().toggleClass('on');
		});
	});
	
	
	//faq list top
	$.each($('.faq_list > li').has('>ul'),function(){
		$(this).addClass('arrow');//.arrow추가
		$(this).find('>a').click(function(){
			$(this).parent().toggleClass('on');
		});
	});
	//faq list bottom
	$.each($('.faq_list .list > li').has('>ul'),function(){
		$(this).addClass('arrow');//.arrow추가
		$(this).find('>a').click(function(){
			$(this).parent().toggleClass('on');
		});
	});	
	

    //selectbox 
    var selectTarget = $('.selectbox select');

    selectTarget.change(function(){
        var select_name = $(this).children('option:selected').text();
        $(this).siblings('label').text(select_name);
    });
	
	// 퀵메뉴 슬라이딩
	var flag = false;
	$(".qmenu").css({position:"fixed",top:0, right:0});

	if(!flag){
		$(".qmenu .btn_close").click(function(){
			$(".qmenu").stop().animate({right:"-130px"}, 500, function(){
				$(".qmenu .btn_close").css("display","none");
				$(".qmenu .btn_open").css("display","block");
			})
		});	
		$(".qmenu .btn_open").click(function(){
			$(".qmenu").stop().animate({right:0}, 500, function(){
				$(".qmenu .btn_close").css("display","block");
				$(".qmenu .btn_open").css("display","none");
			})
		});
		flag = false;
	}else{
		$(".qmenu .btn_close").click(function(){
			$(".qmenu").stop().animate({right:"-130px"}, 500, function(){
				$(".qmenu .btn_close").css("display","none");
				$(".qmenv .btn_open").css("display","block");
			})
		});	
		$(".qmenu .btn_open").click(function(){
			$(".qmenu").stop().animate({right:0}, 500, function(){
				$(".qmenu .btn_close").css("display","block");
				$(".qmenu .btn_open").css("display","none");
			})
		});
		flag = true;
	}

		// 회원성별
	$(".sex_type button").on("click",function(){
		$(".sex_type button").each(function(){
			$(this).removeClass("on");
		});
		$(this).addClass("on");
	})
	$(".sex_type button").on("click",function(){
		$(".sex_type button").each(function(){
			$(this).removeClass("on");
		});
		$(this).addClass("on");
	});


	// 광고등록
	$(".hover_image").on("mouseover",function(){
		$(this).find('img').attr('src',$(this).find('img').attr('src').replace('_off','_on'));
		$(this).addClass("on");
	});
	
	$(".hover_image").on("mouseout",function(){
		$(this).find('img').attr('src',$(this).find('img').attr('src').replace('_on','_off'));
		$(this).removeClass("on");
	});

		// textarea notice
	$(function(){
		$(".textarea_wrap textarea").on("focusin", function(){
			$(this).parent().find(".notice").hide();
		}).on("focusout", function(){
			$notice = $(this).parent().find(".notice");
			if($(this).val() == '' || $(this).val().length == 0){
				$notice.show();
			}
		});;
	});

	//탭 스크립트
    $(".tab_type01 a").click(function (event) {
        event.preventDefault();
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        var tab = $(this).attr("href");
        $(".tab_content").not(tab).hide();
        $(tab).show();
    });

	// 거래메세지 탭
    $(".message_tab a").click(function (event) {
        event.preventDefault();
        $(this).parent().addClass("on");
        $(this).parent().siblings().removeClass("on");
        var tab = $(this).attr("href");
        $(".tab_content").not(tab).hide();
        $(tab).show();
    });
    

    
    //FAQ 탭 스크립트
      $(".lnb_faq_tabs a").click(function (event) {
          event.preventDefault();
          $(this).addClass("on");
          $(this).siblings().removeClass("on");
          var tab = $(this).attr("href");
          $(".faq_tab_content").not(tab).hide();
          $(tab).show();
      });
      

	// 카테고리 리스트
		$(".category_list .more").on("click",function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(this).parent().parent().css("height" , "auto");
			$('.category_list').css("height" , "auto");
		}else{
			$(this).removeClass("on");
			$(this).parent().parent().css("height" , "50px");
		}
	})

		$(".category_wrap .btn_all_view").on("click",function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$('.category_list').css("height" , "auto");
		}else{
			$(this).removeClass("on");
			$('.category_list').css("height" , "162px");
		}
	})

	// 판매자스케쥴 달력보여주기
	$(function(){
	
		$(".calendar_area").css("display","none");
		
		$(".seller_schedule").on("click",function(){
			$(".calendar_area").css("display","block");	
		});
		
		$(".btn_calendar_close").on("click",function(){
			$(".calendar_area").css("display","none");
		});
		
	});

	// 판매자소개 팝업
	$(function(){
	
		$(".all_view").css("display","none");
		
		$(".sller_info .more").on("click",function(){
			$(".all_view").css("display","block");	
		});
		
		$(".sller_info .btn_close").on("click",function(){
			$(".all_view").css("display","none");
		});
		
	});

	//토글
	$(function(){
		$(".review_wrap .btn_reply_write").on("click",function(){
			$(".reply_write").toggle();
			$(this).toggleClass("on");
		});
	});

	//토글
	$(function(){
		$(".btn_search_wrap").on("click",function(){
			$(".box_category").toggle().css("border-bottom" , "1px solid #dbdbdb");
			$(this).toggleClass("on");
		});
	});

	//토글
	$(function(){
		$(".talent_write_tip dt").on("click",function(){
			$(".talent_write_tip dd").toggle();
			$(this).toggleClass("on");
		});
	});

	//구매관리 상세페이지 토글
	$(".updown_detail .talent_info .btn_updown").on("click",function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(this).siblings(".over_content").addClass("show");
		}else{
			$(this).removeClass("on");
			$(this).siblings(".over_content").removeClass("show");
		}
	})

	// 오더정보 리스트 토글
	$(function(){
		$(".order_info>li>.talent_info .btn_updown02").on("click",function(){
			$(this).siblings(".order_info>li>.talent_info .cont_txt_box").toggleClass("show");
			$(this).toggleClass("on");
		});
	});
	
	//제안하기 샘플 토글
	$(function(){
		$(".recomment_write_info .talent_info .btn_updown").on("click",function(){
			$(this).siblings(".recomment_write_info .talent_info .cont_txt_box").toggleClass("show");
			$(this).toggleClass("on");
		});
	});

	//구매자 프로필 수정 열고 닫기
	$(function(){
		$(".brief_user .desc_wrap .line .modify").on("click",function(){
			$(this).siblings(".brief_user .desc_wrap .line .profile_over").addClass("show");
		});

		$(".brief_user .desc_wrap .line .profile_over .btn_close").on("click",function(){
			$(this).parents(".brief_user .desc_wrap .line .profile_over").removeClass("show");
		});
	});

	//input 달력 포커스 시 달력폼 노출
	$(function(){
		$(".cal_wrap .input_calendal").on("focusin",function(){
			$(this).siblings(".carlendar").addClass("on");
		});
		$(".cal_wrap .input_calendal").on("focusout",function(){
			$(this).siblings(".carlendar").removeClass("on");
		});
	});

});



//layer popup 열기
function openLay(name){
	lyNums++;
	$(".popup_layer").each(function(index){
		if($(this).hasClass(name)){
			$(this).layerScript({divs : name});
		}
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
	});
}

// layer popup Plugin
jQuery(function($){
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

		ly_w = e.width();
		ly_h = e.height();
		e.css({"margin-left":-(ly_w/2), "margin-top":-(ly_h/2)}).show();

		// 닫기
		$(this).find(".tit>.btn_close").off("click");
		$(this).find(".tit>.btn_close").on('click', function(){
			layerClose(closeDiv);
		});
	}
});


 

