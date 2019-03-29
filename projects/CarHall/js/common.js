$(document).ready(function() {

	$(".mc_toggle").click(function() {
		if($(this).parent().children("ul").is(":visible")) {
			$(this).parent().children("ul").slideUp();
			$(this).parent().children(".mc_item_wrap_af").slideUp();
		}  else {
			$(".mc_item_wrap ul").after("<div class='mc_item_wrap_af'></div>");
			$("body .mc_wrap .mc_item_wrap > ul, .mc_item_wrap_af").hide();
			$(this).parent().children("ul").slideDown();
			$(this).parent().children(".mc_item_wrap_af").slideDown();
		}
	});

	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".hi_item, .sb_contant > div"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();
	
});