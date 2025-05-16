function initializeContactPageTabs() {
    const contactPages = [
        {
            element: document.getElementById('ContactPage1'),
            url: 'General-Enquiry.html'
        },
        {
            element: document.getElementById('ContactPage2'),
            url: 'S-Enquiry.html'
        },
        {
            element: document.getElementById('ContactPage3'),
            url: 'Customer-Support.html'
        }
    ];

    contactPages.forEach((pageObj, index) => {
        pageObj.element.addEventListener('click', (e) => {
            contactPages.forEach((p, i) => {});

            if (pageObj.url) {
                setTimeout(() => {
                    window.location.href = pageObj.url;
                }, 100);
            }
        });
    });

   
}

window.onload = () => {
    initializeContactPageTabs();
};









function initializeDropdown(dropdownBtnId, dropdownListId, selectedOptionId, hiddenInputId, dropdownIconId, customSelectWrapperId) {
    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownList = document.getElementById("dropdownList");
    const selectedOption = document.getElementById("selectedOption");
    const hiddenInput = document.getElementById("hiddenModelInput");
    const dropdownIcon = document.getElementById("dropdownIcon");
    const customSelectWrapper = document.getElementById("customSelectWrapper");

    function triggerAnimation(el, className) {
        el.classList.remove(className);
        void el.offsetWidth;
        el.classList.add(className);
    }

    dropdownBtn.addEventListener("click", () => {
    dropdownList.classList.toggle("opacity-0");
    dropdownList.classList.toggle("scale-95");
    dropdownList.classList.toggle("scale-y-0");
    dropdownList.classList.toggle("scale-y-100");
    dropdownList.classList.toggle("pointer-events-none");
    dropdownIcon.classList.toggle("rotate-180");

    triggerAnimation(dropdownList, "bounce-in");
    triggerAnimation(customSelectWrapper, "bounce-in-wrapper");
  });

    document.querySelectorAll("#dropdownList li").forEach((item) => {
        item.addEventListener("click", () => {
            selectedOption.textContent = item.textContent;
            selectedOption.classList.remove("text-neutral-400");
            selectedOption.classList.add("text-black");
            hiddenInput.value = item.dataset.value;

            dropdownList.classList.add("opacity-0", "scale-95", "scale-y-0", "pointer-events-none");
            dropdownIcon.classList.remove("rotate-180");

            triggerAnimation(dropdownList, "bounce-in");
            triggerAnimation(customSelectWrapper, "bounce-in-wrapper");
        });
    });

    document.addEventListener("click", (e) => {
        if (!customSelectWrapper.contains(e.target)) {
            dropdownList.classList.add("opacity-0", "scale-95", "scale-y-0", "pointer-events-none");
            dropdownIcon.classList.remove("rotate-180");
        }
    });
}
initializeDropdown();




function initializePhoneInput() {
    const phoneInput = document.getElementById('Phone');
    const NOne = document.getElementById('NineOne');
  
    phoneInput.addEventListener('input', (event) => {
        phoneInput.value = phoneInput.value.replace(/\D/g, '');
        NOne.classList.add('text-black');
        
        if (phoneInput.value.length > 10) {
            phoneInput.value = phoneInput.value.slice(0, 10);
        }
    });
  
    phoneInput.addEventListener('input', () => {
        if (phoneInput.value.trim() !== '') {
            NOne.classList.remove('text-neutral-400');
            NOne.classList.add('text-black');
        } else {
            NOne.classList.remove('text-black');
            NOne.classList.add('text-neutral-400');
        }
    });
}
initializePhoneInput();






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
const Main = document.getElementById('main1');

// Initial transition settings
Menu.style.transition = 'top 0.5s ease-in-out, opacity 0.5s ease-in-out';
Body.style.transition = 'filter 0.5s ease-in-out, background-color 0.5s ease-in-out';
Main.style.transition = 'filter 0.5s ease-in-out';

// Initial states
Menu.style.top = "-50vw";
Menu.style.opacity = "0";
Menu.style.display = "none";
Body.style.filter = 'brightness(100%)';
Body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
Main.style.filter = 'brightness(100%)';

// ===== MENU OPEN =====
MenuOpen.addEventListener('click', function () {
    Menu.style.display = "flex";
    Menu.getBoundingClientRect(); // Force reflow to trigger transition

    // Start all transitions together
    Menu.style.top = "0vw";
    Menu.style.opacity = "1";

    Body.style.height = '100vh';
    Body.style.overflow = 'hidden';
    Body.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    Body.style.filter = 'brightness(100%)'; // Keep body filter unchanged
    Main.style.filter = 'brightness(50%)';  // Dim main section only
});

// ===== MENU CLOSE =====
MenuClose.addEventListener('click', function () {
    // Start all transitions together
    Menu.style.top = "-50vw";
    Menu.style.opacity = "0";
    Body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    Main.style.filter = 'brightness(100%)';

    // Hide menu after transition ends
    setTimeout(() => {
        Menu.style.display = "none";
        Body.style.overflow = 'auto';
        Body.style.height = 'auto';
    }, 500); // Wait for menu transition to complete
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