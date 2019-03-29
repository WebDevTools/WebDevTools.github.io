$(document).ready(function() {

	//Preloader
	$(window).load(function(){
    $('.preloader').fadeOut(800);    
	});


	//Плавный скрол при клике на меню
	$("#js_nav a").on("click",function(e) {
		e.preventDefault();

		var currentBlock = $(this).attr("href");
		var currentBlockOffset = $(currentBlock).offset().top;

		$("html, body").animate({
			scrollTop: currentBlockOffset - 15
		}, 500);
	});


	//-----------------------------------------------------------------
	//Добавляем кнопку наверх
	$("body").append('<button class="btn_up">');

	//Показываем кнопку при скроле на 450px
	$(window).on("scroll", function() {
		if($(window).scrollTop() > 450) {
			$(".btn_up").addClass("active");
		}
		else{
			$(".btn_up").removeClass("active");
		}
	});

	//Скролим вверх
	$(".btn_up").on("click",function(e) {
		e.preventDefault();

		$("html, body").animate({
			scrollTop: 0
		}, 500);
	});

});