$(document).ready(function() {
    // Navbar and Footer
    // Shadow appearing at the bottom of the nav when scrolling down
    // Found how to do it on https://stackoverflow.com/questions/12558311/add-remove-class-with-jquery-based-on-vertical-scroll 
    var $window = $(window);
    
    $window.scroll(function() {
        var scroll = $window.scrollTop();

        if (scroll > 0) {
            $('nav').addClass('shad');
        } else {
            $('nav').removeClass('shad');
        }
        
    });

    // Dropdown menu when clicking on the button menu
    $("#mynavbar-toggle").on("click", function() {
        $("#mynavbar-list").slideToggle(200);
    });

    // Hover effect on the navbar bar
    $('#mynavbar-list ul').children().hover(function() {
        $(this).addClass('mouse-hover-head');
    }, function() {
        $(this).removeClass('mouse-hover-head');
    });

    // Hover effect in the footer
    $('footer ul').children().hover(function() {
        $(this).addClass('mouse-hover-footer');
    }, function() {
        $(this).removeClass('mouse-hover-footer');
    });

    // ------------------------------------------- Contact Page
    $('#myform').validate({
        rules: {
            user_name: {
                required: true,
                minlength: 3
            },
            user_mail: {
                required: true,
            }
        },
        messages: {
            user_name: {
                required: "Please enter a name",
                minlength: "Your name must consist of at least 2 characters"
            }
        },
        submitHandler: function(form) {
            alert('valid form submitted');
        }
    });
    
    // Section Part
    // Animation effect
    // Found how to animate elements when scrolling through this webpage. https://www.sitepoint.com/scroll-based-animations-jquery-css3/
    // var $animation_elements = $('.animation-element');
    
    // Handling Resizing
    // $window.on('scroll resize', check_if_in_view);
    
    /* In addition, we also use the jQuery trigger method to trigger a scroll event as soon as the DOM is ready. 
    We do this so that if any of the elements which should be animated are within the viewport,
    they will be detected as in view and the animation applied as if we had scrolled. */
    // $window.trigger('scroll');
    
    
    // function check_if_in_view() {
    //     var window_height = $window.height();
    //     var window_top_position = $window.scrollTop();
    //     var window_bottom_position = (window_top_position + window_height);
        
    //     // function can be used to iterate over any collection
    //     $.each($animation_elements, function() {
    //        var $element = $(this);
    //        var element_height = $element.outerHeight();
    //        var element_top_position = $element.offset().top;
    //        var element_bottom_position = (element_top_position + element_height);
           
    //        //check to see if this current container is within viewport
    //        if ((element_top_position <= window_bottom_position) && (element_bottom_position >= window_top_position)) {
    //            $element.addClass('in-view');
    //        } else {
    //            $element.removeClass('in-view');
    //        }
    //     });
    // };
});
