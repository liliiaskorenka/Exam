$(".sectionIgredients").parallax({imageSrc: "Images/BgSection3.jpg"});

jQuery(function($) {
    $("body").scrollToTop({
        skin: "square"
    });
});
$.datetimepicker.setLocale("en");
jQuery("#datetimepicker").datetimepicker();

/*$.validate({
    modules : "date, security"
});*/
$(".bxslider").bxSlider({
    mode: "fade",
    captions: true,
    auto: true,
    pause: 4000
});

$.validate({
    modules : "date, security",
    onSuccess : function($form) {
        $.post( "/reservations", $form.serialize() );
        var msg = "Thank you " + $("#exampleInputName", $form).val() + "!";
        toastr.success(msg, "Liliia Skorenka Restaurant", {timeOut: 3000});
        return false;
    }
});

/*onSuccess : function($form) {
    $.post( "/reservations", $form.serialize() ).done(function( data ) {
        var msg = 'Thank you ' + $('#exampleInputName', $form).val() + '!';
        toastr.success(msg, 'Liliia Skorenka Restaurant', {timeOut: 3000});
    });
    return false;
}*/


$(function() {
    var restaurant_coords_arr = [34.081199, -118.385253];
    var restaurant_coords_obj = {lat: 34.081199, lng: -118.385253};
    $("#map").googleMap({zoom: 16, coords: restaurant_coords_arr});
    var map = $("#map").data("googleMap");
    var marker = new google.maps.Marker({
        position: restaurant_coords_obj,
        map: map
    });
});


$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("header").removeClass("largeHeader").addClass("smallHeader");
    } else{
        $("header").removeClass("smallHeader").addClass("largeHeader");
    }
});

$("#pagination-demo").twbsPagination({
    totalPages: 35,
    visiblePages: 5
});



$("#input-248").rating({
    step: 1,
    starCaptions: {1: "Very Poor", 2: "Poor", 3: "Ok", 4: "Good", 5: "Very Good"},
    starCaptionClasses: {1: "text-danger", 2: "text-warning", 3: "text-info", 4: "text-primary", 5: "text-success"}
});


$("#tableSectionMenu").DataTable({
    ajax: {
        url: "/json/descriptionMenu.json",
    dataSrc: ""
    },
    columns: [
        { data: "Dish" },
        { data: "Ingredients" },
        { data: "Portion" },
        { data: "Calories" },
        { data: "Price" }
]
});

/*$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('nav ul li a').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
    });
}*/