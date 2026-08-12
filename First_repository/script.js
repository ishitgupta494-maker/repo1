// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu when a link is clicked

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ================================
// LEARN MORE BUTTON
// ================================

const learnBtn = document.getElementById("learnBtn");

learnBtn.addEventListener("click", function () {

    alert(
        "Nova is a modern website built with HTML, CSS and JavaScript. 🚀"
    );

});


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thanks, " + name + "! Your message has been received. 🎉"
    );

    // Clear the form
    contactForm.reset();

});