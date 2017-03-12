$(".sectionIgredients").parallax({imageSrc: "Images/BgSection3.jpg"});

jQuery(function($) {
    $("body").scrollToTop({
        skin: "square"
    });
});
$.datetimepicker.setLocale('en');
jQuery('#datetimepicker').datetimepicker();

$.validate({
    modules : 'date, security'
});
$('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    auto: true,
    pause: 4000
});

