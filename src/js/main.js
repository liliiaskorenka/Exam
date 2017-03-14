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


    $(function() {
        $("#map").googleMap();
        $("#map").addWay({
            start: "30 1/2 Caroline St, Saratoga Springs, NY 12866", // Postal address for the start marker (obligatory)
            end:  [48.895651, 2.290569], // Postal Address or GPS coordinates for the end marker (obligatory)
            route : 'way', // Block's ID for the route display (optional)
            mapTypeId:google.maps.MapTypeId.HYBRID,
            langage : 'english', // language of the route detail (optional)
            step: [ // Array of steps (optional)
                [48.85837009999999, 2.2944813000000295], // Postal Address or GPS coordinates of the step
                "30 1/2 Caroline St, Saratoga Springs, NY 12866", // Postal Address or GPS coordinates of the step
            ]
        });
    });

$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": {
            "url": "data/arrays_custom_prop.txt",
            "dataSrc": "demo"
        }
    } );
} );

$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("header").removeClass("largeHeader").addClass("smallHeader");
    } else{
        $("header").removeClass("smallHeader").addClass("largeHeader");
    }
});
