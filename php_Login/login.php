<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
</head>
<body>
    <div class="wrapper">
        <form action="" method="POST">
            <h1>Login</h1>

            <div class="input-box">
                <input type="text" name="username" placeholder="Enter your username" required>
                <label for="username"><i class='bx bxs-user'></i></label>
            </div>

            <div class="input-box">
                <input type="password" name="password" placeholder="Enter your password" required>
                <label for="password"><i class='bx bxs-lock-alt'></i></label>
            </div>

            <!-- Password Strength Meter -->
            <div id="password-strength-message"></div>

            <div class="remember-forgot">
                <label><input type="checkbox" name="remember"> Remember me</label>
                <a href="#">Forgot Password</a>
            </div>

            <button type="submit" class="btn">Login</button>

            <div class="register-link">
                <p>Don't have an account? <a href="register.php">Signup</a></p>
            </div>
        </form>
    </div>

    <!-- Link to external JavaScript file -->
    <script src="script.js"></script>
</body>
</html>
