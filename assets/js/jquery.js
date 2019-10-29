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
    // Form validation - Allow me to control the data received
    $('#myform').validate({
        rules: {
            user_name: {
                required: true,
                minlength: 3
            },
            user_mail: {
                required: true,
                email: true
            }
        },
        messages: {
            user_name: {
                required: "Please enter a name",
                minlength: "Your name must consist of at least 3 characters"
            },
            user_mail: {
                required: "Please enter an email"
            }
        },
        submitHandler: function(form) {
            alert('valid form submitted');
        }
    });
});
