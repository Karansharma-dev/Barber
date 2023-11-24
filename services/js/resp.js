const burger = document.querySelector('.burger');
navbar = document.querySelector('.nav__container');
center = document.querySelector('.center');
right = document.querySelector('.right');
burgerimage = document.querySelector('.ri-menu-2-line')

burger.addEventListener('click',()=>{
     if(burgerimage.classList == "ri-menu-2-line"){

          burgerimage.classList = ("ri-close-line")
     }
     else{
          burgerimage.classList = "ri-menu-2-line"
     }
})

burger.addEventListener('click', ()=>{

center.classList.toggle('v-class-resp');
right.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');
})