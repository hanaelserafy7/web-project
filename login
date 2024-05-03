<!DOCTYPE html>
<html lang="en">
<head>
    <title>Login</title>
</head>
<body>
    <header>
        <!-- <div class="hamburger-menu">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div> -->
        <input type="checkbox" id="menu-toggle">
        <label for="menu-toggle" class="menu-icon">&#9776;</label>
        <div class="menu">
            <input type="text" class="Search" placeholder="Search" >
            <a href="signup.html" class="signup">Sign Up</a>
            <a href="login.html" class="login">Log In</a>
            <hr>
            <div class="categories">
                <p>Categories:</p>
                <ul>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Development</a></li>
                    <li><a href="#">Finance & Accounting</a></li>
                    <li><a href="#">IT & Software</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Markting</a></li>
                </ul>
            </div>
        </div>
        <a href="#" class="logo">LearnHub</a>
        <nav class="navigation">
            <a href="login.html">log in</a>
            <a href="signup.html">Sign up</a>
        
        </nav>
   </header>

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
        
        *{
         font-family: 'Poppins',sans-serif;
         margin: 0;
         padding: 0;
         box-sizing: border-box;
         scroll-behavior: smooth;
        }
        header {
          background-color: black;
          width: 100%;
          position: fixed;
          z-index: 999;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 5%;
          
        }
        
        .logo {
          text-decoration: none;
          color: white;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 1.8em;
          margin-left: 7%;
        }
        
        .menu-icon {
          display: block;
          cursor: pointer;
          color: white;
          text-decoration: none;
          font-size: 2em;
        }
        
        .menu {
          display: flex;
          display: none;
          flex-direction: column;
          align-items: flex-start;
          z-index: 1000;
          position: absolute;
          top:63px;
          left: 0;
          background-color:black !important;
          width: 25%;
          padding-left: 10px;
        
        }
        .menu a{
          transition: 1s ease;
        }
        .menu a:hover{
        background-color: #666;
        transform: scale(1.1);
        }
        .search{
          width: 100px;
          height: 40px;
          padding: 10px;
          font-size: 40px;
        }
        /* .menu input[type="text"] {
          width: 100%;
          margin-bottom: 10px;
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #ccc;
        } */
        input[type="checkbox"] {
          display: none;
        }
        
        input[type="checkbox"]:checked ~ .menu {
          display: block;
        }
        .menu a {
          text-decoration: none;
          color: white;
          margin-bottom: 10px;
          display: block;
          width: 70px;
        }
        
        .menu hr {
          width: 100%;
          border: none;
          border-top: 1px solid #ccc;
          margin: 10px 0;
        }
        
        .categories p {
          font-weight: bold;
          margin-bottom: 5px;
        }
        
        .categories ul {
          list-style-type: none;
          padding: 0;
        }
        
        .categories li {
          margin-bottom: 5px;
        }
        
        .categories li a {
          color: white;
          text-decoration: none;
        }
        
        .categories li a:hover {
          text-decoration: underline;
        }
        .navigation{
          display: flex;
        }
        .navigation a {
            color: white;
            text-decoration:none;
            font-size: 1.1em;
            font-weight: 500;
            /* padding-left: 30px; */
            margin-left: 20px;
        }
        .navigation a:hover{
            color:rgb(168, 165, 165);
        }
        
        .container {
            width: 400px;
            height:300px;
            margin-top:200px;
            margin:auto;
            padding: 50px;
            border: 1px solid grey;
            border-radius: 5px;
            align-items:center;
            justify-content:center;
                
                   
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
        body{
            align-items:center;
            justify-content: center;
        }
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
        if (username === 'admin' && password === 'adminpassword') {
                    console.log('Logged in as admin');
                    // Redirect or perform admin-specific actions
                } else {
                    console.log('Logged in as regular user');
                    // Redirect or perform regular user actions
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
