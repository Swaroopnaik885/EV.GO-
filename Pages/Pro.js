const MenuOpen = document.getElementById('menuBar');
const Menu = document.getElementById('menuSection');
const MenuClose = document.getElementById('menuClose');
const Body = document.getElementById('body');
const Main1 = document.getElementById('main2');

// ===== INITIAL SETUP =====
// Apply required styles via JavaScript (you can also do this in CSS)
Menu.style.position = 'fixed';
Menu.style.top = '-50vw';
Menu.style.left = '0';
Menu.style.right = '0';
Menu.style.zIndex = '50';
Menu.style.opacity = '0';
Menu.style.display = 'none';
Menu.style.transition = 'top 0.5s ease-in-out, opacity 0.5s ease-in-out';

Body.style.transition = 'filter 0.5s ease-in-out, background-color 0.5s ease-in-out';
Main1.style.transition = 'filter 0.5s ease-in-out, background-color 0.5s ease-in-out';

Body.style.filter = 'brightness(100%)';
Main1.style.filter = 'brightness(100%)';
Body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
Main1.style.backgroundColor = 'rgba(255, 255, 255, 1)';

// ===== MENU OPEN =====
MenuOpen.addEventListener('click', function () {
    Menu.style.display = "flex";
    Menu.getBoundingClientRect(); // Force reflow before animation
    Menu.style.top = "0vw";
    Menu.style.opacity = "1";

    Body.style.height = '100vh';
    Body.style.overflow = 'hidden';

    Body.style.backgroundColor = 'rgba(102, 98, 98, 0.8)';
    Main1.style.filter = 'brightness(50%)';
    Main1.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
});

// ===== MENU CLOSE =====
MenuClose.addEventListener('click', function () {
    Menu.style.top = "-50vw";
    Menu.style.opacity = "0";

    Body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    Main1.style.filter = 'brightness(100%)';
    Main1.style.backgroundColor = 'rgba(255, 255, 255, 1)';

    // Restore scroll after animation ends
    setTimeout(() => {
        Menu.style.display = "none";
        Body.style.overflow = 'auto';
        Body.style.height = 'auto';
    }, 500); // Match the transition duration
});






















let HOME_Page = document.getElementById('HOME');
HOME_Page.addEventListener('click', function() {
    window.location.href = '../index.html';
});

let PRODUCT_Page = document.getElementById('PRODUCT');
PRODUCT_Page.addEventListener('click', function() {
    window.location.href = 'Products.html';
});

let GALLERY_Page = document.getElementById('GALLERY');
GALLERY_Page.addEventListener('click', function() {
    window.location.href = 'Gallery.html';
});

let CONTACT_Page = document.getElementById('CONTACT');
CONTACT_Page.addEventListener('click', function() {
    window.location.href = 'General-Enquiry.html';
});

let BackBTN = document.getElementById('BackBTN');
BackBTN.addEventListener('click', function() {
    window.location.href = 'Products.html';
});












const MainIMG = document.getElementById('MainPro');
const PRO1 = document.getElementById('Pro1');
const PRO2 = document.getElementById('Pro2');
const PRO3 = document.getElementById('Pro3');
const PRO4 = document.getElementById('Pro4');
const PRO5 = document.getElementById('Pro5'); 
PRO1.classList.add( 'border-2', 'border-teal-500');


PRO1.addEventListener('mouseenter', function() {
    MainIMG.src = "../images/EBikewBG4.png";
    PRO1.classList.add( 'border-2', 'border-teal-500');
    PRO2.classList.remove( 'border-2', 'border-teal-500');
    PRO3.classList.remove( 'border-2', 'border-teal-500');
    PRO4.classList.remove( 'border-2', 'border-teal-500');
    PRO5.classList.remove( 'border-2', 'border-teal-500');
});
PRO2.addEventListener('mouseenter', function() {
    MainIMG.src = "../images/EBikew-With-BG1.png";
    PRO1.classList.remove( 'border-2', 'border-teal-500');
    PRO2.classList.add( 'border-2', 'border-teal-500');
    PRO3.classList.remove( 'border-2', 'border-teal-500');
    PRO4.classList.remove( 'border-2', 'border-teal-500');
    PRO5.classList.remove( 'border-2', 'border-teal-500');
});
PRO3.addEventListener('mouseenter', function() {
    MainIMG.src = "../images/EBikew-With-BG2.png";
    PRO1.classList.remove( 'border-2', 'border-teal-500');
    PRO2.classList.remove( 'border-2', 'border-teal-500');
    PRO3.classList.add( 'border-2', 'border-teal-500');
    PRO4.classList.remove( 'border-2', 'border-teal-500');
    PRO5.classList.remove( 'border-2', 'border-teal-500');
});
PRO4.addEventListener('mouseenter', function() {
    MainIMG.src = "../images/EBikew-With-BG3.png";
    PRO1.classList.remove( 'border-2', 'border-teal-500');
    PRO2.classList.remove( 'border-2', 'border-teal-500');
    PRO3.classList.remove( 'border-2', 'border-teal-500');
    PRO4.classList.add( 'border-2', 'border-teal-500');
    PRO5.classList.remove( 'border-2', 'border-teal-500');
});
PRO5.addEventListener('mouseenter', function() {
    MainIMG.src = "../images/EBikew-With-BG4.png";
    PRO1.classList.remove( 'border-2', 'border-teal-500');
    PRO2.classList.remove( 'border-2', 'border-teal-500');
    PRO3.classList.remove( 'border-2', 'border-teal-500');
    PRO4.classList.remove( 'border-2', 'border-teal-500');
    PRO5.classList.add( 'border-2', 'border-teal-500');
});













const Var1 = document.getElementById('var1');
const Var2 = document.getElementById('var2');

Var1.classList.add('border-4', 'border-[rgb(0,175,184)]');

Var1.addEventListener('click', function() {
    Var1.classList.add('border-4', 'border-[rgb(0,175,184)]');
    Var2.classList.remove('border-4', 'border-[rgb(0,175,184)]');
});
Var2.addEventListener('click', function() {
    Var1.classList.remove('border-4', 'border-[rgb(0,175,184)]');
    Var2.classList.add('border-4', 'border-[rgb(0,175,184)]');
});













const Color1 = document.getElementById('color1');
const Color2 = document.getElementById('color2');
const Color3 = document.getElementById('color3');

Color1.classList.add('border-4', 'border-[rgb(0,175,184)]');

Color1.addEventListener('click', function() {
    Color1.classList.add('border-4', 'border-[rgb(0,175,184)]');
    Color2.classList.remove('border-4', 'border-[rgb(0,175,184)]');
    Color3.classList.remove('border-4', 'border-[rgb(0,175,184)]');
});
Color2.addEventListener('click', function() {
    Color2.classList.add('border-4', 'border-[rgb(0,175,184)]');
    Color1.classList.remove('border-4', 'border-[rgb(0,175,184)]');
    Color3.classList.remove('border-4', 'border-[rgb(0,175,184)]');
});
Color3.addEventListener('click', function() {
    Color3.classList.add('border-4', 'border-[rgb(0,175,184)]');
    Color1.classList.remove('border-4', 'border-[rgb(0,175,184)]');
    Color2.classList.remove('border-4', 'border-[rgb(0,175,184)]');
});


















 // List of all IDs that should redirect
    const redirectIDs = ['b1', 'b2', 'b3', 'b4'];

    // URL to redirect to
    const redirectURL = 'Pro.html';

    // Attach click event to each element
    redirectIDs.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('click', () => {
          window.location.href = redirectURL;
        });
      }
    });













        const redirectIDs2 = ['GI', 'GI1'];

    // URL to redirect to
    const redirectURL2 = 'General-Enquiry.html';

    // Attach click event to each element
    redirectIDs2.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('click', () => {
          window.location.href = redirectURL2;
        });
      }
    });



    const redirectIDs3 = ['SI'];

    // URL to redirect to
    const redirectURL3 = 'S-Enquiry.html';

    // Attach click event to each element
    redirectIDs3.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('click', () => {
          window.location.href = redirectURL3;
        });
      }
    });



    const redirectIDs4 = ['CS'];

    // URL to redirect to
    const redirectURL4 = 'Customer-Support.html';

    // Attach click event to each element
    redirectIDs4.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('click', () => {
          window.location.href = redirectURL4;
        });
      }
    });