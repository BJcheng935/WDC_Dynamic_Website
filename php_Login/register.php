<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
</head>
<body>
    <div class="wrapper">
        <form action="register_handler.php" method="POST">
            <h1>Register</h1>

            <div class="input-box">
                <input type="text" name="username" placeholder="Create a username" required>
                <label for="username"><i class='bx bxs-user'></i></label>
            </div>

            <div class="input-box">
                <input type="password" name="password" placeholder="Create a password" required>
                <label for="password"><i class='bx bxs-lock-alt'></i></label>
            </div>

            <div class="remember-forgot">
                <label><input type="checkbox" required> I agree to the terms & conditions</label>
            </div>

            <button type="submit" class="btn">Register</button>

            <div class="register-link">
                <p>Already have an account? <a href="login.php">Login</a></p>
            </div>
        </form>
    </div>
</body>
</html>
