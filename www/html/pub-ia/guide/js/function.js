$(document).ready(function(){
	// snb include
	//$("#header h1 span").load("inc_project.html");

	// snb include
	//$("#snb").load("inc_snb.html");

	//소스코드보기 버튼제어
	$("button.sourceView").click(function(){
			$(this).next("div").toggle();
	});

	//소스코드보기 열린창 닫기버튼
	$("button.svClose").click(function(){
		$(this).parent().hide();
	});

	$("a, button").focus(function(){
		$(this).blur();
	});

	$('.answer').hide();
	$('.question').each(function(){
		$(this).click(function(){
			$('.answer').hide();
			$(this).next('.answer').fadeIn();
		});
	});
	//$('.btn_table tr:nth-child(even)').css('background','#f6f6f6');
});