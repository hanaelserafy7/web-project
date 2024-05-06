let iconCart = document.querySelector('.iconCart');
          let cart = document.querySelector('.cart');
           let container = document.querySelector('.container');
           let close = document.querySelector('.close');

           iconCart.addEventListener('click', function(){
           if(cart.style.right == '-100%'){
        cart.style.right = '0';
        container.style.transform = 'translateX(-400px)';
        }else{
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
        }
        })
        close.addEventListener('click', function (){
       cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
        }) 

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    

    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }


    slides[slideIndex].style.display = "block";  
}
