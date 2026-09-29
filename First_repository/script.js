

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});




const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});



const learnBtn = document.getElementById("learnBtn");

learnBtn.addEventListener("click", function () {

    alert(
        "Nova is a modern website built with HTML, CSS and JavaScript. 🚀"
    );

});




const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {


    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thanks, " + name + "! Your message has been received. 🎉"
    );


    contactForm.reset();

});
