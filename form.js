function validateForm() {
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Simple validation (for demonstration purposes)
    if (email === 'abc12@gmail.com' && username === 'abcd' && password === '1234') {
        alert("Login Successful!");
        return true; // Proceed with login
    } else {
        errorMessage.style.display = 'block'; // Show error message
        return false; // Prevent form submission
    }
}