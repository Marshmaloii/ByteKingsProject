const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
});

document.querySelectorAll('.sub-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Smooth scroll to the target element with offset
        const offset = 120; // Same as the scroll-padding-top in CSS
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});