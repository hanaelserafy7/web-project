<!DOCTYPE html>
<html lang="en">
<head>
    <title>Login</title>
</head>
<body>
    <div class="container">
        <form id="loginForm">
            <h2>Login</h2>
            <div class="form">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="form">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
    <style>
        .container {
            width: 400px;
            height:300px;
            margin: auto;
            padding: 50px;
            border: 1px solid grey;
            border-radius: 5px;
        }
        
        .form {
            margin-bottom: 25px;
        }
        
        label {
            display: block;
            font-weight: bold;
        }
        
        input[type="text"],
        input[type="password"] {
            width: 70%;
            padding: 4px;
            font-size: 16px;
        }
        
        button {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            background-color: black;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        
        button:hover {
            background-color: grey;
        }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('loginForm');

            form.addEventListener('submit', function(event) {
                event.preventDefault();

                const username = form.elements['username'].value;
                const password = form.elements['password'].value;

                if (!username || !password) {
                    alert('Please fill in username and password');
                    return;
                }

                
                console.log('Username:', username);
                console.log('Password:', password);

                // Reset the form
                form.reset();
            });
        });
    </script>
</body>
</html>
