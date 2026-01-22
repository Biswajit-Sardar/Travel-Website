// Mobile menu toggle
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector(".nav-list");

menuIcon.addEventListener("click", () => {
    navList.classList.toggle("show");
});


// Search form validation
const searchBtn = document.querySelector(".Search_btn");

searchBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const destination = document.querySelector("#destination").value;
    const checkIn = document.querySelector("#checkin").value;
    const checkOut = document.querySelector("#checkout").value;
    const adults = document.querySelector("#adults").value;

    if (!destination || !checkIn || !checkOut || !adults) {
        alert("Please fill all required fields");
    } else {
        alert("Searching your best tour...");
    }
});

// Card hover effect
const cards = document.querySelectorAll(".destination-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
        card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "none";
    });
});
