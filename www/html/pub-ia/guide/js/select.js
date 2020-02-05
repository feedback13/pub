jQuery(function($){
	
	// Common
	var select_root = $('div.select');
	var select_value = $('.myValue');
	var select_a = $('div.select ul>li>a');
	
	// Radio Default Value
	$('div.myValue').each(function(){
		var default_value = $(this).next('.iList').find('input[checked]').next('label').text();
		$(this).append(default_value);
	});
	
	// Line
	select_value.bind('focusin',function(){$(this).addClass('outLine');});
	select_value.bind('focusout',function(){$(this).removeClass('outLine');});
	
	// Show
	function show_option(){
		$(this).parents('div.select:first').toggleClass('open');
	}
	
	// Hover
	function i_hover(){
		$(this).parents('ul:first').children('li').removeClass('hover');
		$(this).parents('li:first').toggleClass('hover');
	}
	
	// Hide
	function hide_option(){
		var t = $(this);
		setTimeout(function(){
			t.parents('div.select:first').removeClass('open');
		}, 1);
	}
	
		
	// Set Anchor
	function set_anchor(){
		var v = $(this).parent().text();
		$(this).parents('.listWrap').prev('.myValue').text('').append(v);
		$(this).parents('.listWrap').prev('.myValue').addClass('selected');
	}

	// Anchor Focus Out
	$('*:not("div.select a")').focus(function(){
		$('.aList').parents('.select').removeClass('open');
	});
	
	select_value.click(show_option);
	//select_root.find('ul').css('position','absolute');
	select_root.removeClass('open');
	select_root.mouseleave(function(){$(this).removeClass('open');});
	select_a.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover);

	
	
});