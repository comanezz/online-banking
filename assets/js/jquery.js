$(document).ready(function () {
    // Shadow appearing at the bottom of the nav when scrolling down
    // Found how to do it on https://stackoverflow.com/questions/12558311/add-remove-class-with-jquery-based-on-vertical-scroll 
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > 0) {
            $('nav').addClass('shad');
        } else {
            $('nav').removeClass('shad');
        }
    });

    // Make sure that the Navbar and Footer appears properly when loading the page
    if ($(window).width() <= 991.98) {
        $('#mynavbar-toggle').append(`<button><img src="assets/images/menu-button.png" alt="menu-button"></button>`);
        $('#mynavbar-list').addClass('small-screen')
            .append(
                `<ul>
                    <li><a href="#">Our Offices</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Get Early Access</a></li>
                </ul>`
            );
    } else {
        $('#mynavbar-toggle').addClass('remove-it').append(`<button><img src="assets/images/menu-button.png" alt="menu-button"></button>`);
        $('#mynavbar-list')
            .append(
                `<ul>
                    <li><a href="#">Our Offices</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Get Early Access</a></li>
                </ul>`
            );
        $('#mynavbar-list ul').addClass('mynavbar-nav').children().addClass('list-space');
        $('footer #first-section').removeClass('first-section-small').addClass('first-section-large');
    };

    // When resizing the Navbar and Footer is responsize.
    $(window).resize(function () {

        if ($(window).width() <= 991.98) {
            $('#mynavbar-toggle').removeClass('remove-it');
            $('#mynavbar-list').addClass('small-screen').css('display','none');
            $('#mynavbar-list > ul').removeClass('mynavbar-nav').children().removeAttr('class');
            $('footer #first-section').removeClass('first-section-large').addClass('first-section-small');
        } else {
            $('#mynavbar-toggle').addClass('remove-it');
            $('#mynavbar-list').removeClass('small-screen').css('display','block').children().addClass('mynavbar-nav').children().addClass('list-space');
            $('footer #first-section').removeClass('first-section-small').addClass('first-section-large');
        };
    });

    // Dropdown menu when clicking on the button menu
    $("#mynavbar-toggle").on("click", function () {
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
});


