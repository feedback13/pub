$(document).ready(function() {

//왼쪽메뉴 on off
$('#lnb ul ul').hide();
$('#lnb ul>li').bind('mouseenter keyup', function() {
		if($(this).has('ul')) {
			$(this).find('ul:first').show();
		} 
});

$('#lnb ul>li').bind('mouseleave keydown', function() {
	if($(this).has('ul')) {
		$(this).find('ul').hide();
	}
});


//왼쪽메뉴 이미지 롤오버
$("#lnb ul img").hover(function() {
	$(this).attr("src", $(this).attr("src").split("_off.jpg").join("_on.jpg"))
  }, function() {
	$(this).attr("src", $(this).attr("src").split("_on.jpg").join("_off.jpg"))
});

//브랜드사이트 레이어닫기
$('.footerSite button').click(function(){
	$('.footerSite').hide();							   
})

//댓글 얼굴아이콘 바꾸기
$('#face').click(function(event) {
	$(this).parent().css('width','300px');
	$('#faceList').toggle();
	event.preventDefault();
});

$('#faceList li').click(function() {
	var imgName = $(this).find('img').attr('src');
	$('#face').find('img').attr('src', imgName);
	$(this).parent().hide();
	$(this).parent().parent().css('width','29px');
});


});
// EOD : document ready

//푸터 브랜드, 관계사이트 링크
function brand() {
	$('#brand').show();
	$('#connecting').hide();
}
function connect() {
	$('#connecting').show();
	$('#brand').hide();
}
