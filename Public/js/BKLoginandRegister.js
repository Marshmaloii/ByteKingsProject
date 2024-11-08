document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');

    // Toggle between login and register forms
    showRegister.addEventListener('click', () => {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    showLogin.addEventListener('click', () => {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Show login or register form based on the URL fragment
    function showFormBasedOnHash() {
        const hash = window.location.hash;
        if (hash === '#register') {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        } else {
            // Default to login form if hash is #login or none
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        }
    }

    // Call the function when the page loads
    showFormBasedOnHash();

    // Listen for changes to the URL hash
    window.addEventListener('hashchange', showFormBasedOnHash);

    // Attach click event listeners to ensure the correct form is displayed when the links are clicked
    if (loginLink) {
        loginLink.addEventListener('click', function () {
            window.location.hash = '#login';
            showFormBasedOnHash();
        });
    }

    if (registerLink) {
        registerLink.addEventListener('click', function () {
            window.location.hash = '#register';
            showFormBasedOnHash();
        });
    }

    // Login Form Validation
    const loginEmail = document.getElementById('login-email');
    const loginPassword = document.getElementById('login-password');
    const loginEmailError = document.getElementById('login-email-error');
    const loginPasswordError = document.getElementById('login-password-error');

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        let valid = true;

        // Validate Email
        if (!loginEmail.checkValidity()) {
            loginEmail.classList.add('error');
            loginEmailError.style.display = 'block';
            valid = false;
        } else {
            loginEmail.classList.remove('error');
            loginEmailError.style.display = 'none';
        }

        // Validate Password
        if (loginPassword.value.trim() === '') {
            loginPassword.classList.add('error');
            loginPasswordError.style.display = 'block';
            valid = false;
        } else {
            loginPassword.classList.remove('error');
            loginPasswordError.style.display = 'none';
        }

        if (!valid) {
            e.preventDefault();
        }
    });

    // Register Form Validation
    const registerName = document.getElementById('register-name');
    const registerEmail = document.getElementById('register-email');
    const registerPassword = document.getElementById('register-password');
    const registerContact = document.getElementById('register-contact');
    const registerAddress = document.getElementById('register-address');

    const registerNameError = document.getElementById('register-name-error');
    const registerEmailError = document.getElementById('register-email-error');
    const registerPasswordError = document.getElementById('register-password-error');
    const registerContactError = document.getElementById('register-contact-error');
    const registerAddressError = document.getElementById('register-address-error');

    document.getElementById('registerForm').addEventListener('submit', function(e) {
        let valid = true;

        // Validate Name
        if (registerName.value.trim() === '') {
            registerName.classList.add('error');
            registerNameError.style.display = 'block';
            valid = false;
        } else {
            registerName.classList.remove('error');
            registerNameError.style.display = 'none';
        }

        // Validate Email
        if (!registerEmail.checkValidity()) {
            registerEmail.classList.add('error');
            registerEmailError.style.display = 'block';
            valid = false;
        } else {
            registerEmail.classList.remove('error');
            registerEmailError.style.display = 'none';
        }

        // Validate Password
        if (registerPassword.value.trim() === '') {
            registerPassword.classList.add('error');
            registerPasswordError.style.display = 'block';
            valid = false;
        } else {
            registerPassword.classList.remove('error');
            registerPasswordError.style.display = 'none';
        }

        // Validate Contact Number
        if (registerContact.value.trim() === '') {
            registerContact.classList.add('error');
            registerContactError.style.display = 'block';
            valid = false;
        } else {
            registerContact.classList.remove('error');
            registerContactError.style.display = 'none';
        }

        // Validate Address
        if (registerAddress.value.trim() === '') {
            registerAddress.classList.add('error');
            registerAddressError.style.display = 'block';
            valid = false;
        } else {
            registerAddress.classList.remove('error');
            registerAddressError.style.display = 'none';
        }

        if (!valid) {
            e.preventDefault();
        }
    });

    // Redirect to login/register based on cart-login links
    const loginCartLink = document.querySelector('.cart-login a[href*="BKLoginandRegister.html"][href*="#login"]');
    const registerCartLink = document.querySelector('.cart-login a[href*="BKLoginandRegister.html"][href*="#register"]');

    if (loginCartLink) {
        loginCartLink.addEventListener('click', function () {
            window.location.hash = '#login';
            showFormBasedOnHash();
        });
    }

    if (registerCartLink) {
        registerCartLink.addEventListener('click', function () {
            window.location.hash = '#register';
            showFormBasedOnHash();
        });
    }

    // Move buttons side-by-side
    const loginButton = document.querySelector('button[type="submit"]#loginButton');
    const registerButton = document.querySelector('button[type="submit"]#registerButton');
    const backButton = document.querySelector('.back-button');

    if (loginButton && backButton) {
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        loginForm.appendChild(buttonContainer);
        buttonContainer.appendChild(loginButton);
        buttonContainer.appendChild(backButton);
    }

    if (registerButton && backButton) {
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        registerForm.appendChild(buttonContainer);
        buttonContainer.appendChild(registerButton);
        buttonContainer.appendChild(backButton);
    }
});
