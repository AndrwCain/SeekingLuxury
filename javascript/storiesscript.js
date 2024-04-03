// Function to handle clicking on the story section
function visitWoundedWarriorProject() {
    // Redirect the user to the Wounded Warrior Project website
    window.location.href = "https://www.woundedwarriorproject.org";
}

// Attach the visitWoundedWarriorProject function to the main story section when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the main story section element
    var storySection = document.querySelector('.main-section');
    
    // Add an event listener to the main story section for the 'click' event, which triggers the visitWoundedWarriorProject function
    storySection.addEventListener('click', visitWoundedWarriorProject);
});
