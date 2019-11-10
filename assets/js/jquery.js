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


    // Modal form pop-up hide and show 
    var btn = $('.sign-up');
    var modal = $('#form-modal');
    var close = $('.close');

    btn.click(function() {
        modal.show();
    });

    close.click(function() {
        modal.hide();
    });

    // Close the dropdown menu when clicking the sign up button in the nav
    if ($(window).width() <= 992) {
        $('#btn-list').click(function() {
            $("#mynavbar-list").slideUp(200);
        });
    };

    $(window).resize(function() {
        if ($(window).width() <= 992) {
            $('#btn-list').click(function() {
                $("#mynavbar-list").slideUp(200);
            });
        };
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
