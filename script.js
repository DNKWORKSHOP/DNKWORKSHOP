// script.js

// Get elements
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Toggle the mobile menu visibility
function toggleMenu() {
  mobileMenu.classList.toggle("show");
}

// Close menu when a link is clicked (optional, for better UX)
function closeMenuOnLinkClick() {
  if (mobileMenu.classList.contains("show")) {
    mobileMenu.classList.remove("show");
  }
}

// Attach toggle to hamburger icon
menuToggle.addEventListener("click", toggleMenu);

// Optional: Close menu when a link inside it is clicked
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach(link => {
  link.addEventListener("click", closeMenuOnLinkClick);
});
