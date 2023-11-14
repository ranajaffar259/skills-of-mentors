// Select elements
const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const dropdowns = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const hero = document.querySelector('.hero-banner');
const dropdownLinks = document.querySelectorAll(".dropdown a");

// Function to set "aria-expanded" attribute to "false" for all dropdown buttons
function setAriaExpandedFalse() {
    dropdownBtns.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

// Function to close all dropdown menus
function closeDropdownMenu() {
    dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active");
        dropdown.addEventListener("click", (e) => e.stopPropagation());
    });
}

// Function to toggle the navigation menu and hero section
function toggleHamburger() {
    navMenu.classList.toggle("show");
    hero.classList.toggle("hidden");
}

// Event listener for each dropdown button
dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        const dropdownIndex = e.currentTarget.dataset.dropdown;
        const dropdownElement = document.getElementById(dropdownIndex);

        dropdownElement.classList.toggle("active");

        // Close other open dropdowns
        dropdowns.forEach((drop) => {
            if (drop.id !== btn.dataset["dropdown"]) {
                drop.classList.remove("active");
            }
        });

        e.stopPropagation();

        // Toggle the "aria-expanded" attribute
        btn.setAttribute(
            "aria-expanded",
            btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
        );
    });
});

// Event listener for dropdown links to close the menu
dropdownLinks.forEach((link) =>
    link.addEventListener("click", () => {
        closeDropdownMenu();
        setAriaExpandedFalse();
        toggleHamburger();
    })
);

// Event listener to close dropdown menu when clicking on the document body
document.documentElement.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
});

// Event listener to close dropdown menu when the "Escape" key is pressed
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeDropdownMenu();
        setAriaExpandedFalse();
    }
});

// Event listener for the hamburger button
hamburgerBtn.addEventListener("click", toggleHamburger);
