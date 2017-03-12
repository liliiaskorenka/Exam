$(".sectionIgredients").parallax({imageSrc: "Images/BgSection3.jpg"});

jQuery(function($) {
    $("body").scrollToTop({
        skin: "square"
    });
});
$.datetimepicker.setLocale('en');
jQuery('#datetimepicker').datetimepicker();

/*$.validate({
    modules : 'date, security'
});*/
$('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    auto: true,
    pause: 4000
});

$.validate({
    modules : 'date, security',
    onSuccess : function($form) {
        var msg = 'Thank you ' + $('#exampleInputName', $form).val() + '!';
        toastr.success(msg, 'Liliia Skorenka Restaurant', {timeOut: 3000});
        return false;
    }
});