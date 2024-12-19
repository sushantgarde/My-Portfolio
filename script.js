function handleSubmit() {
        alert("Form Submitted Successfully!");
    }

    // Function to reset the form
    function resetForm() {
        const userConfirmation = confirm("Are you sure you want to reset the form?");
        if (userConfirmation) {
            document.getElementById("contactForm").reset();
        }
    }