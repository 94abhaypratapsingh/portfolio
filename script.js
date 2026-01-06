const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const yearSpan = document.getElementById("year");

navToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
