// Function to register an email for membership
function registerEmail() {
    // Retrieve the value entered in the email input field
    var email = document.querySelector('input[type="email"]').value;

    // You can add your logic here to handle the email registration, such as sending it to a server for processing
    
    // Display an alert to confirm that the email has been registered
    alert("Thank you for joining our membership list with email: " + email);
}
