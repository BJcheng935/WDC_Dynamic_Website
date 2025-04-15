document.addEventListener('DOMContentLoaded', function () {
    // Password Visibility Toggle
    const passwordField = document.querySelector('input[name="password"]');
    const togglePassword = document.querySelector('#toggle-password');

    if (togglePassword) {
        togglePassword.addEventListener('click', function () {
            // Toggle password visibility
            const type = passwordField.type === "password" ? "text" : "password";
            passwordField.type = type;
            togglePassword.textContent = type === "password" ? "Show Password" : "Hide Password";
        });
    }

    // Password Strength Meter
    const passwordStrengthMessage = document.querySelector('#password-strength-message');
    passwordField.addEventListener('input', function () {
        const password = passwordField.value;
        const strength = checkPasswordStrength(password);
        passwordStrengthMessage.textContent = strength.message;
        passwordStrengthMessage.style.color = strength.color;
    });

    // Form Validation
    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', function (e) {
        const username = document.querySelector('input[name="username"]');
        const password = document.querySelector('input[name="password"]');

        if (!username.value || !password.value) {
            alert('Please fill in both username and password!');
            e.preventDefault();  // Prevent form submission if validation fails
        }
    });

    // Check Password Strength (Basic Check)
    function checkPasswordStrength(password) {
        let strength = {
            message: 'Weak',
            color: 'red'
        };

        if (password.length > 8) {
            strength.message = 'Medium';
            strength.color = 'orange';
        }

        if (password.length > 12 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
            strength.message = 'Strong';
            strength.color = 'green';
        }

        return strength;
    }
});
