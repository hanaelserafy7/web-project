document.addEventListener("DOMContentLoaded", function() {
    const signUpForm = document.getElementById("signup-form");
    
    signUpForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        const fullNameInput = document.getElementById("fullname").value;
        const emailInput = document.getElementById("email").value;
        const passwordInput = document.getElementById("password").value;
        
       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput)) {
            alert("Please enter a valid email address.");
            return;
        }
        
       
        if (passwordInput.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }
        
        
        alert("Successfully signed up!");
        window.location.href = "newheader.html"; 
    });
});