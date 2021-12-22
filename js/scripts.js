Marquee3k.init();

jQuery(function(){
    jQuery('.cover-images').slick({
        speed: 10000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    });
});

jQuery(document).ready(function() {
    jQuery('html, body, *').mousewheel(function(e, delta) {
        jQuery('.cover-images').scrollLeft -= (delta);
        e.preventDefault();
    });
});

jQuery(".archive-button").click(function() {
    jQuery("body").addClass("section-active");
});

jQuery(".back-button").click(function() {
    jQuery("body").removeClass("section-active");
});