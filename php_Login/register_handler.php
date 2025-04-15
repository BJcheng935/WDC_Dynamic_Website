<?php
// register_handler.php

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve username and password from form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Simulate saving user info (e.g., in a file or database)
    // For this example, we'll just check for non-empty fields
    if (!empty($username) && !empty($password)) {
        // User registration success
        // You can store user details in a database or a file here
        
        // Redirect to index.html after successful registration
        header("Location: index.html");
        exit();
    } else {
        // Registration failed, maybe display an error message
        echo "Please fill out all fields.";
    }
}
?>
