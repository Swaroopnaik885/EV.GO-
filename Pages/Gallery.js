const MenuOpen = document.getElementById('menuBar');
const Menu = document.getElementById('menuSection');
const MenuClose = document.getElementById('menuClose');
const Body = document.getElementById('body');
const Main = document.getElementById('main2');
const Main1 = document.getElementById('main1');

// Initial Styles
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

Main.style.backgroundColor = 'rgba(255, 255, 255, 1)';
Body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
Main1.style.backgroundColor = 'rgba(255, 255, 255, 1)';

// ===== MENU OPEN =====
MenuOpen.addEventListener('click', function () {
    Menu.style.display = "flex";
    Menu.getBoundingClientRect(); // Force reflow to trigger transition

    // Start transitions at the same time
    Menu.style.top = "0vw";
    Menu.style.opacity = "1";

    Body.style.height = '100vh';
    Body.style.overflow = 'hidden';

    Main.style.filter = 'brightness(50%)';
    Main1.style.filter = 'brightness(50%)';
    Main.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    Main1.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    Body.style.backgroundColor = 'rgba(102, 98, 98, 0.8)';
});

// ===== MENU CLOSE =====
MenuClose.addEventListener('click', function () {
    Menu.style.top = "-50vw";
    Menu.style.opacity = "0";

    Body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    Main.style.filter = 'brightness(100%)';
    Main1.style.filter = 'brightness(100%)';
    Main.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    Main1.style.backgroundColor = 'rgba(255, 255, 255, 1)';

    // After animation ends, hide menu and restore scroll
    setTimeout(() => {
        Menu.style.display = "none";
        Body.style.overflow = 'auto';
        Body.style.height = 'auto';
    }, 500); // match transition duration
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