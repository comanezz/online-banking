$(document).ready(function() {
    var waypoint = new Waypoint({
        element: $('#slide-action1'),
        handler:function() {
                $('#slide-action1').addClass('js-visible animated slideInLeft delay-0.5s');
                $('#slide2').addClass('js-visible animated slideInRight delay-0.5s');
        },
        offset: '60%'
    });

    var waypoint2 = new Waypoint({
        element: $('#slide-action2'),
        handler:function() {
                $('#slide-action2').addClass('js-visible animated slideInRight delay-0.5s');
                $('#slide3').addClass('js-visible animated slideInLeft delay-0.5s');
        },
        offset: '60%'
    });

        var waypoint3 = new Waypoint({
        element: $('#slide-action3'),
        handler:function() {
                $('#slide-action3').addClass('js-visible animated slideInLeft delay-0.5s');
                $('#slide4').addClass('js-visible animated slideInRight delay-0.5s');
        },
        offset: '60%'
    });

    // For Ipad view
    if($(window).width() >= 768 && $(window).width() <= 992) {
        var ipadWaypoint = new Waypoint({
            element: $('#slide-action1'),
            handler:function() {
                    $('#slide-action1').addClass('js-visible animated slideInLeft delay-0.5s');
                    $('#slide2').addClass('js-visible animated slideInRight delay-0.5s');
            },
            offset: '80%'
        });
    
        var ipadWaypoint2 = new Waypoint({
            element: $('#slide-action2'),
            handler:function() {
                    $('#slide-action2').addClass('js-visible animated slideInRight delay-0.5s');
                    $('#slide3').addClass('js-visible animated slideInLeft delay-0.5s');
            },
            offset: '80%'
        });
    
            var ipadWaypoint3 = new Waypoint({
            element: $('#slide-action3'),
            handler:function() {
                    $('#slide-action3').addClass('js-visible animated slideInLeft delay-0.5s');
                    $('#slide4').addClass('js-visible animated slideInRight delay-0.5s');
            },
            offset: '80%'
        });
    };
    // For Ipad Pro view
    if($(window).width() == 1024 && $(window).height() <= 1366) {
        var ipadWaypoint = new Waypoint({
            element: $('#slide-action1'),
            handler:function() {
                    $('#slide-action1').addClass('js-visible animated slideInLeft delay-0.5s');
                    $('#slide2').addClass('js-visible animated slideInRight delay-0.5s');
            },
            offset: '90%'
        });
    
        var ipadWaypoint2 = new Waypoint({
            element: $('#slide-action2'),
            handler:function() {
                    $('#slide-action2').addClass('js-visible animated slideInRight delay-0.5s');
                    $('#slide3').addClass('js-visible animated slideInLeft delay-0.5s');
            },
            offset: '90%'
        });
    
            var ipadWaypoint3 = new Waypoint({
            element: $('#slide-action3'),
            handler:function() {
                    $('#slide-action3').addClass('js-visible animated slideInLeft delay-0.5s');
                    $('#slide4').addClass('js-visible animated slideInRight delay-0.5s');
            },
            offset: '90%'
        });
    };
});