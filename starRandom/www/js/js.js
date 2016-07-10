$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		  $('#menu a').each(function(){
           $(this).removeClass('active');
           });
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 700);
	});

	 var $menu = $("#menu");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 400 && $menu.hasClass("default") ){
            	$menu.slideDown(800);
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 400 && $menu.hasClass("fixed")) {
                 $menu.slideUp(800);
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
     $(".randomField").fadeIn(2000);   
 
 
});