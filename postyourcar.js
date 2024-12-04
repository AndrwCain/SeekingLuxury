document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        let isValid = true;

        // Validate Name
        const nameInput = document.getElementById("name");
        if (!nameInput.value.trim()) {
            alert("Name is required.");
            isValid = false;
        }

        // Validate Phone
        const phoneInput = document.getElementById("phone");
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phoneInput.value.trim())) {
            alert("Please enter a valid 10-digit phone number.");
            isValid = false;
        }

        // Validate Car Make
        const makeSelect = document.getElementById("make");
        if (!makeSelect.value) {
            alert("Please select a luxury car make.");
            isValid = false;
        }

        // Validate Car Type
        const typeSelect = document.getElementById("type");
        if (!typeSelect.value) {
            alert("Please select a car type.");
            isValid = false;
        }

        // Validate Year
        const yearInput = document.getElementById("year");
        const currentYear = new Date().getFullYear();
        if (yearInput.value < 1900 || yearInput.value > currentYear) {
            alert(`Please enter a year between 1900 and ${currentYear}.`);
            isValid = false;
        }

        // Validate Mileage
        const mileageInput = document.getElementById("mileage");
        if (mileageInput.value < 0) {
            alert("Mileage cannot be negative.");
            isValid = false;
        }

        // Validate Condition (at least one checkbox)
        const conditionUsed = document.getElementById("used");
        const conditionNew = document.getElementById("new");
        if (!conditionUsed.checked && !conditionNew.checked) {
            alert("Please select at least one condition: Used or New.");
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});
