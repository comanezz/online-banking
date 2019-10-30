$(document).ready(function() {
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