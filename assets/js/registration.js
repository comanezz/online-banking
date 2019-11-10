$(document).ready(function() {
    $("#register").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var cpassword = $('#cpassword').val();

        if(name == '' || email == '' || password == ''|| cpassword == '') {
            alert("Please fill all the fields !")
        } else if (isEmail(email) == false) {
            alert("Please insert a valid email")
        } else if (password.length < 8) {
            alert('Password should at least 8 characters in length')
        } else if (!password.match(cpassword)) {
            alert('Your password must match. Try again')
        } else {
            alert('You have successfully registered')
            $('form')[0].reset()
            $('#form-modal').hide();
        }
    });

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(email)) {
            return false;
        } else {
            return true;
        }
    }
});