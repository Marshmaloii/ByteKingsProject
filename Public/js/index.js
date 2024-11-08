// JavaScript to toggle the sidebar
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");

// Open and close sidebar on mobile/tablet
hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
});

// Toggle dropdowns within sidebar for mobile view only
document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
    toggle.addEventListener("click", (event) => {
        if (window.innerWidth < 769) {
            event.preventDefault();
            const subNav = toggle.nextElementSibling;

            // Close any other open sub-navs
            document.querySelectorAll(".sub-nav").forEach(nav => {
                if (nav !== subNav) nav.classList.remove("show-sub-nav");
            });

            // Toggle the current sub-nav
            subNav.classList.toggle("show-sub-nav");
        }
    });
});

// Close sidebar automatically on desktop view and reset sub-navs
const mediaQuery = window.matchMedia("(min-width: 769px)");

function handleScreenChange(e) {
    if (e.matches) {
        // Close sidebar if open
        sidebar.classList.remove("show-sidebar");

        // Remove all "show-sub-nav" classes to reset the sub-nav menus
        document.querySelectorAll(".sub-nav").forEach(nav => {
            nav.classList.remove("show-sub-nav");
        });
    }
}

// Attach listener for screen width changes
mediaQuery.addEventListener("change", handleScreenChange);

// Highlight active sidebar link based on current page
function highlightActiveSidebarLink() {
    const currentPage = window.location.pathname.split("/").pop();
    const pageLinks = {
        "index.html": "sidebar-home",
        "pages/BKShopPage.html": "sidebar-shop",
        "pages/BKAboutPage.html": "sidebar-about",
        "pages/BKMorePage.html": "sidebar-more"
    };

    // Remove active class from all links
    Object.values(pageLinks).forEach(id => {
        const element = document.getElementById(id);
        if (element) element.classList.remove("active");
    });

    // Add active class to the current page link in the sidebar
    if (pageLinks[currentPage]) {
        const currentElement = document.getElementById(pageLinks[currentPage]);
        if (currentElement) currentElement.classList.add("active");
    }
}

// Call the function to highlight the active link on page load
highlightActiveSidebarLink();

document.getElementById('cart-link').addEventListener('click', function() {
    // Your cart handling code here
    console.log('Cart link clicked');
});
