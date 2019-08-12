//Добавляем стрелку вниз
    $("header").append('<div class="arrow-up"></div>');


//Скрываем стрелку при скроле на 20px
$(window).on("scroll", function() {
    if($(window).scrollTop() > 20) {
        $(".arrow-up").addClass("arrow-none");
    }
    else{
        $(".arrow-up").removeClass("arrow-none");
    }
});


//Modal

$(".js-show-modal").on("click", function(e) {

    e.preventDefault();
    $(".js-modal, #js-overlay").fadeIn(500);
    // $("body").addClass("open-modal");

});


$("#js-overlay, .js-modal-close").on("click", function(e) {

    e.preventDefault();
    $(".js-modal, #js-overlay").fadeOut(300);
    // $("body").removeClass("open-modal");

});


//Slick

$('#multiple-items').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
});


//Stellar

$.stellar({
    responsive: true
});


// Slider

window.addEventListener("load", () => {
    var carousels = document.querySelectorAll(".carousel-3d");
    for (var i = 0; i < carousels.length; i++) {
        carousel(carousels[i]);
    }
});
function carousel(root) {
    var figure = root.querySelector("figure"),
    nav = root.querySelector("nav"),
    images = figure.children,
    n = images.length,
    gap = root.dataset.gap || 0,
    bfc = "bfc" in root.dataset,
    theta = 2 * Math.PI / n,
    currImage = 0;
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener("resize", () => {
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });
    setupNavigation();
    function setupCarousel(n, s) {
        var apothem = s / (2 * Math.tan(Math.PI / n));
        figure.style.transformOrigin = `50% 50% ${-apothem}px`;
        for (var i = 0; i < n; i++) images[i].style.padding = `0 ${gap}px`;
        for (i = 0; i < n; i++) {
            images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
            images[i].style.transform = `rotateY(${i * theta}rad)`;
        }
        if (bfc)
        for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
        rotateCarousel(currImage);
    }
    function setupNavigation() {
        nav.addEventListener("click", onClick, true);
        function onClick(e) {
            e.stopPropagation();
            var t = e.target;
            if (t.tagName.toUpperCase() != "BUTTON") return;
            if (t.classList.contains("next")) {
                currImage++;
                } else {
                currImage--;
            }
            rotateCarousel(currImage);
        }
    }
    function rotateCarousel(imageIndex) {
        figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }
}