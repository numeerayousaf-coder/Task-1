// Get elements
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const contactForm = document.getElementById("contactForm");

// Open modal
openModal.addEventListener("click", function () {
    modal.classList.add("show");
});

// Close modal using X button
closeModal.addEventListener("click", function () {
    modal.classList.remove("show");
});

// Close modal by clicking overlay
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

// Close modal using Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modal.classList.remove("show");
    }
});

// Handle form submission
contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    alert("Your message has been submitted successfully!");

    // Reset form
    contactForm.reset();

    // Close modal
    modal.classList.remove("show");
});