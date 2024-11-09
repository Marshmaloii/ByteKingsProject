// JavaScript to handle product display
// Adding functionality to + Cart and - Cart buttons, updating cart and cart count
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

    // Event listeners for + Cart and - Cart buttons
    const productGrid = document.querySelectorAll('.product-item');
    productGrid.forEach(item => {
        const addButton = item.querySelector('.add-cart-button');
        const removeButton = item.querySelector('.remove-cart-button');

        addButton.addEventListener('click', () => {
            const productName = item.querySelector('h3').textContent;
            updateCart(productName, 'add');
        });

        removeButton.addEventListener('click', () => {
            const productName = item.querySelector('h3').textContent;
            updateCart(productName, 'remove');
        });
    });

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

    // Cart functionality
    function updateCart(productName, action) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let cartItemIndex = cart.findIndex(item => item.name === productName);

        if (action === 'add') {
            if (cartItemIndex === -1) {
                cart.push({ name: productName, quantity: 1 });
            } else {
                cart[cartItemIndex].quantity++;
            }
            showNotification(`${productName} has been added to your cart.`);
        } else if (action === 'remove') {
            if (cartItemIndex > -1) {
                cart[cartItemIndex].quantity--;
                if (cart[cartItemIndex].quantity === 0) {
                    cart.splice(cartItemIndex, 1);
                }
                showNotification(`${productName} has been removed from your cart.`);
            } else {
                showNotification(`Cannot remove ${productName}, it is not in your cart.`);
            }
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        document.querySelector('.cart-count').textContent = totalItems;
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Initialize cart count when the page loads
    updateCartCount();
});
