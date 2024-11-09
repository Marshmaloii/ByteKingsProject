document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

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

    // Login Form Validation
    const loginEmail = document.getElementById('login-email');
    const loginPassword = document.getElementById('login-password');
    const loginEmailError = document.getElementById('login-email-error');
    const loginPasswordError = document.getElementById('login-password-error');

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();  // Prevent form from submitting normally
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

        if (valid) {
            // Show success message and redirect to homepage
            alert("Successfully logged in!");
            window.location.href = '../index.html';
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
        e.preventDefault();  // Prevent form from submitting normally
        let valid = true;

        // Validate Name (no numbers or special characters)
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(registerName.value.trim())) {
            registerName.classList.add('error');
            registerNameError.style.display = 'block';
            registerNameError.textContent = 'Name must not contain numbers or special characters';
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

        // Validate Contact Number (numbers only, 10 digits)
        const contactRegex = /^\d{10}$/;
        if (!contactRegex.test(registerContact.value.trim())) {
            registerContact.classList.add('error');
            registerContactError.style.display = 'block';
            registerContactError.textContent = 'Contact number must be 10 digits';
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

        if (valid) {
            // Show success message and redirect to login page
            alert("Successfully registered!");
            window.location.hash = '#login';
            showFormBasedOnHash();
        }
    });
});
