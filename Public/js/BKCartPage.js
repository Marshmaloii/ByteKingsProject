document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const backToShopButton = document.getElementById("back-to-shop-button");

    // Load items from local storage or from a variable representing the cart
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to update the cart UI
    function updateCart() {
        cartItemsContainer.innerHTML = ""; // Clear previous items
        let total = 0;

        cart.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");

            itemDiv.innerHTML = `
                <p>${item.name} - ₱${item.price.toFixed(2)}</p>
                <button class="remove-button" data-index="${index}">Remove</button>
            `;

            cartItemsContainer.appendChild(itemDiv);
            total += item.price;
        });

        cartTotal.textContent = `Total: ₱${total.toFixed(2)}`;

        // Update cart count in header
        const cartCount = document.querySelector(".cart-count");
        cartCount.textContent = cart.length;
    }

    // Event listener for removing an item
    cartItemsContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-button")) {
            const index = e.target.getAttribute("data-index");
            cart.splice(index, 1); // Remove the item from the cart
            localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart
            updateCart(); // Update UI
        }
    });

    // Event listener for the "Back to Shop" button
    backToShopButton.addEventListener("click", function () {
        window.location.href = "../pages/BKShopPage.html"; // Redirect to the shop page
    });

    // Initialize the cart
    updateCart();
});
