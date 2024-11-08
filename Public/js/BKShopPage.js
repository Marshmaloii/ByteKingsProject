// JavaScript to handle product display
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const brand = urlParams.get('brand');
    const category = urlParams.get('category');

    // Simulate fetching and displaying products based on brand or category
    if (brand) {
        displayProductsByBrand(brand);
    } else if (category) {
        displayProductsByCategory(category);
    }
});

function displayProductsByBrand(brand) {
    // Logic to fetch and display products by brand
    const productsDiv = document.getElementById('product-list');
    productsDiv.innerHTML = `<h2>Products for brand: ${brand}</h2>`;
    // Example: Dynamically add product HTML here based on the selected brand
}

function displayProductsByCategory(category) {
    // Logic to fetch and display products by category
    const productsDiv = document.getElementById('product-list');
    productsDiv.innerHTML = `<h2>Products for category: ${category}</h2>`;
    // Example: Dynamically add product HTML here based on the selected category
}

// Toggle menu on hamburger icon click
document.getElementById("hamburger").addEventListener("click", function() {
    const navList = document.getElementById("nav-list");
    navList.classList.toggle("show");
    this.classList.toggle("active"); // Change hamburger color when active
});

// Update the price range display
function updatePriceRange(value) {
    document.getElementById("price-range-label").textContent = `Price: ₱0 — ₱${value}`;
}