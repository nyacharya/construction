$(document).ready(function() {
    "use strict";

    // Home Slider
    $("#home-slider").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 700,
        autoPlay: 3000,
        pagination: true,
        paginationSpeed: 700,
        singleItem: true,
        transitionStyle: "fade"
    });

    // Counter
    $('.fact-count').counterUp({
        delay: 10,
        time: 1000
    });

    // Receipes
    $("#home-receipes").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 400,
        pagination: true,
        paginationSpeed: 400,
        singleItem: true
    });

    // Story
    $("#home-story").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 400,
        pagination: false,
        paginationSpeed: 400,
        singleItem: true
    });

    // Team
    $("#home-team").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 400,
        pagination: true,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "goDown"
    });

    // Special Words
    $("#home-spl-words").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 400,
        pagination: true,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "goDown"
    });

    // Recent Posts
    $("#home-rp").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 400,
        pagination: false,
        paginationSpeed: 400,
        singleItem: true
    });

    // Receipe Slider
    $("#rs-slide").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 400,
        pagination: false,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "fadeUp"
    });


    // Stellar
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 0,
        responsive: true

    });

    // Testimonial
    $(function () {
        $('#home-quotes').flexslider({
            animation: "fade",
            slideshow: false,
            directionNav: true,
            controlsContainer: ".home-quotes",
            controlNav: true,
            manualControls: ".quote-logo li"
        });

        $('.flex-prev').on('click', function() {
            $('#home-quotes').flexslider('prev')
            return false;
        })

        $('.flex-next').on('click', function() {
            $('#home-quotes').flexslider('next')
            return false;
        })
    });

    // HTML5 Video
    $('#playVid').on("click", function() {
        if ($("#player").get(0).paused) {
            $("#player").get(0).play();
        } else {
            $("#player").get(0).pause();
        }
    });

    $("#playVid").on("click", function() {
        $(".play-ico").toggleClass("ti-control-pause");
        $(".video_player").toggleClass("active");
    });

    // Prettyphoto
    $("a[class^='prettyPhoto']").prettyPhoto({
        theme: 'pp_default'
    });

    // Datepicker
    $('#datepicker-example1').Zebra_DatePicker({
        format: 'M d,Y'
    });

});

// Quantity
 $('.qtyplus').click(function(e) {
     e.preventDefault();
     fieldName = $(this).attr('data-field');
     var currentVal = parseInt($('input[name=' + fieldName + ']').val());
     if (!isNaN(currentVal)) {
         $('input[name=' + fieldName + ']').val(currentVal + 1);
     } else {
         $('input[name=' + fieldName + ']').val(1);
     }
 });

 $(".qtyminus").click(function(e) {
     e.preventDefault();
     fieldName = $(this).attr('data-field');
     var currentVal = parseInt($('input[name=' + fieldName + ']').val());
     if (!isNaN(currentVal) && currentVal > 1) {
         $('input[name=' + fieldName + ']').val(currentVal - 1);
     } else {
         $('input[name=' + fieldName + ']').val(1);
     }
 });


// Sticky Header
$(window).load(function(){
	$("header nav").sticky({ topSpacing: 0 });
});
