// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the form element
    var therapyForm = document.getElementById("therapy-form");
    
    // Add event listener for form submission
    therapyForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form input values
        var fullName = document.getElementById("full-name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var meetingType = document.getElementById("meeting-type").value;
        
        // Validate form input
        if (fullName.trim() === "" || email.trim() === "" || phone.trim() === "" || address.trim() === "") {
            alert("Please fill out all required fields.");
            return;
        }
        
        // Perform form submission
        console.log("Form submitted:");
        console.log("Full Name:", fullName);
        console.log("Email:", email);
        console.log("Phone Number:", phone);
        console.log("Address:", address);
        console.log("Meeting Type:", meetingType);
        
        // Optionally, you can reset the form after submission
        therapyForm.reset();
    });
});
