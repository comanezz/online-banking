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

    // Pop up 
    $('.sign-up').click(function() {
        $('pop-outer').fadeIn("slow");
    });
    $('.close').click(function() {
        $('.pop-outer').fadeOut('slow');
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

});
