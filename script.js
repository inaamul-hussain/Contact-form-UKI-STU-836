document.getElementById("ContactUs").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
});

document.getElementById("send").addEventListener("click", function(event) {
    event.preventDefault();
    let valid = true;

    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("addressError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Validate name
    if (!name) {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    }

    // Validate address
    if (!address) {
        document.getElementById("addressError").textContent = "Address is required";
        valid = false;
    }

    // Validate phone number
    const phoneRegex = /^\+94\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
        document.getElementById("phoneError").textContent = "Invalid phone number. It should start with +94 and be followed by exactly 9 digits.";
        valid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email.";
        valid = false;
    }

    // Validate message length
    if (message.length < 10) {
        document.getElementById("messageError").textContent = "Message should be at least 10 characters long.";
        valid = false;
    }

    // If valid, store data in localStorage and close the modal
    if (valid) {
        const contactData = {
            name: name,
            address: address,
            phoneNumber: phoneNumber,
            email: email,
            message: message
        };
        localStorage.setItem("contactData", JSON.stringify(contactData));
        alert("Form submitted successfully!");
        document.querySelector(".popup").style.display = "none";
    }
});
