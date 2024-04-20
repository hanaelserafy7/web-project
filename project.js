document.addEventListener("DOMContentLoaded", function() {
                const signUpBtn = document.querySelector(".signup-btn");
            
                signUpBtn.addEventListener("click", function() {
                    const fullNameInput = document.getElementById("fullname").value;
                    const emailInput = document.getElementById("email").value;
                    const passwordInput = document.getElementById("password").value;
            
                    console.log("Full Name:", fullNameInput);
                    console.log("Email:", emailInput);
                    console.log("Password:", passwordInput);
            
                   
                });
            });
