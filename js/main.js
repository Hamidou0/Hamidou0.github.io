const menuBtn = document.querySelector('.menu-btn');
const ham = document.querySelector('.menu-btn__burger');

const nav = document.querySelector('.nav');
const menu_nav = document.querySelector('.menu-nav');

let showMenu = false;

window.addEventListener('DOMContentLoaded', function() { 
    menuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {


        if(!showMenu){
            ham.classList.add('open');
            nav.classList.add('open');
            //menu_nav.classList.add('open');
            showMenu = true;
        }else{
            ham.classList.remove('open');
            nav.classList.remove('open');
            //menu_nav.classList.remove('open');
            showMenu = false;
        }
    }
});



var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("grid-items");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex += 2;
  if (slideIndex > x.length ) {slideIndex = 2}
  x[slideIndex-1].style.display = "block";
  x[slideIndex-2].style.display = "block";
    
  setTimeout(carousel, 2000); 
}