// Code taken example from https://github.com/Code-Institute-Solutions/InteractiveFrontendDevelopment-Resume/blob/master/03-SendingEmailsUsingEmailJS/06-sending_emails/assets/js/sendEmail.js
function sendMail(contactForm) {
    // To avoid sending to much email
    $('.button > button').addClass('sent');
    alert('Form sent');

    emailjs.send("gmail", "myform", {
        "from_name": contactForm.user_name.value,
        "from_email": contactForm.user_mail.value,
        "message_request": contactForm.user_message.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
};
