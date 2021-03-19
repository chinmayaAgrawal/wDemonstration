// select DOM 
const menuBtn = document.querySelector('.menu-btn');

const menu = document.querySelector('.menu'); 

const menuNav = document.querySelector('.menu-nav');

const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

//Setting Initial State of menu
// overlay for showing menu by default it is false
let showMenu = false;
//adding event listener
menuBtn.addEventListener('click', toggleMenu);


//toggleMenu defination

function toggleMenu(){
    if (!showMenu) {

        //will show menu if not shown otherwise vice versa
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        //for nav-items higher order array function is used as select all is used
        navItems.forEach(item => item.classList.add('show'));
    
        // Set Menu State
        showMenu = true;
      } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
    
        // Set Menu State
        showMenu = false;
      }
}