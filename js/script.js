let menu = document.querySelector('.burger');
let navigationLinks = document.querySelector('.nav__links');
let menuActive = document.querySelector('.nav-link--active');
let loginBtn = document.querySelector('.login-btn');


menu.addEventListener('click', function(){
    
    
        
    navigationLinks.classList.toggle('nav-link--active');
    loginBtn.classList.toggle('nav-link--active');
})



