const nav = document.querySelector('#nav');
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');    
  }
}

window.addEventListener('scroll', fixedNav);
/*Now for the JavaScript. We’ll use an event listener that is triggered when the window is scrolled 
calling a fixedNav() function. 
This function detects when the <nav> has reached the top of the browser and adds a fixed CSS class: */