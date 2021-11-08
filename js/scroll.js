$(function(){
	$('a[href^="#"]').click(function(){
		var speed=500;
		var href=$(this).attr("href");
		var target=$(href=="#"||href==""?'html':href);
		var position=target.offset().top;

		$('body,html').animate({scrollTop:position},speed,'swing');
		return false;
	});
});

$(document).ready(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) { // 100pxスクロールしていたら上に戻るボタンを表示
            $(".to_top").fadeIn(); 
        } else {
            $(".to_top").fadeOut();
        }
    });
    $(".to_top").click(function() {
        $("body,html").animate({scrollTop:0},800); // 800msかけて上に戻る
    });
});