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






















const MenuOpen = document.getElementById('menuBar');
const Menu = document.getElementById('menuSection');
const MenuClose = document.getElementById('menuClose');
const Body = document.getElementById('body');
const Main = document.getElementById('products');
const Main1 = document.getElementById('main1');

// Set initial styles and transitions
Menu.style.top = "-50vw";
Menu.style.opacity = "0";
Menu.style.display = "none";

Menu.style.transition = 'top 0.5s ease-in-out, opacity 0.5s ease-in-out';
Body.style.transition = 'filter 0.5s ease-in-out, background-color 0.5s ease-in-out';
Main.style.transition = 'filter 0.5s ease-in-out, background-color 0.5s ease-in-out';
Main1.style.transition = 'filter 0.5s ease-in-out, background-color 0.5s ease-in-out';

Body.style.filter = 'brightness(100%)';
Main.style.filter = 'brightness(100%)';
Main1.style.filter = 'brightness(100%)';

Body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
Main.style.backgroundColor = 'rgba(255, 255, 255, 1)';
Main1.style.backgroundColor = 'rgba(255, 255, 255, 1)';

// ===== OPEN MENU =====
MenuOpen.addEventListener('click', function () {
    Menu.style.display = "flex";

    // Force browser to register 'display: flex' before transitioning
    Menu.getBoundingClientRect();

    Menu.style.top = "0vw";
    Menu.style.opacity = "1";

    Body.style.height = '100vh';
    Body.style.overflow = 'hidden';

    Main.style.filter = 'brightness(90%)';
    Main1.style.filter = 'brightness(50%)';
    Main.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    Main1.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    Body.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
});

// ===== CLOSE MENU =====
MenuClose.addEventListener('click', function () {
    Menu.style.top = "-50vw";
    Menu.style.opacity = "0";

    Main.style.filter = 'brightness(100%)';
    Main1.style.filter = 'brightness(100%)';
    Main.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    Main1.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    Body.style.backgroundColor = 'rgba(255, 255, 255, 1)';

    // Wait for transition to complete before hiding menu
    setTimeout(() => {
        Menu.style.display = "none";
        Body.style.height = 'auto';
        Body.style.overflow = 'auto';
    }, 500); // match the transition duration
});





















 // List of all IDs that should redirect
    const redirectIDs1 = ['b1', 'b2', 'b3', 'b4', 'BN1', 'BN2', 'BN3'];

    // URL to redirect to
    const redirectURL1 = 'Pro.html';

    // Attach click event to each element
    redirectIDs1.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('click', () => {
          window.location.href = redirectURL1;
        });
      }
    });



    const redirectIDs2 = ['GI'];

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



    const redirectIDs5 = ['WTG1', 'WTG2', 'WTG3'];

    // URL to redirect to
    const redirectURL5 = 'Gallery.html';

    // Attach click event to each element
    redirectIDs5.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('click', () => {
          window.location.href = redirectURL5;
        });
      }
    });