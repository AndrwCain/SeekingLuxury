// Function to handle clicking on the email link
function sendEmail() {
    // Define variables for email address, subject, and body
    var emailAddress = "info@newveteranstherapy.com"; 
    var subject = "Inquiry about New Veterans Therapy Events"; 
    var body = "Hello,\n\nI am interested in learning more about the events offered by New Veterans Therapy.\n\nPlease provide me with additional information.\n\nThank you.";

    // Encode subject and body to ensure proper formatting in the email
    var encodedSubject = encodeURIComponent(subject);
    var encodedBody = encodeURIComponent(body);

    // Generate the mailto link with encoded subject and body
    var mailtoLink = "mailto:" + emailAddress + "?subject=" + encodedSubject + "&body=" + encodedBody;

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
}

// Attach the sendEmail function to the email link when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the email link element with the class 'big-link'
    var emailLink = document.querySelector('.big-link');
    
    // Add an event listener to the email link for the 'click' event, which triggers the sendEmail function
    emailLink.addEventListener('click', sendEmail);
});

