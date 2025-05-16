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




function initializeImageUpload() {
    const displaySelectedImage = document.getElementById('ImagePreview');
    const addMore = document.getElementById('addMore');
    const imageUpload = document.getElementById('ImageUpload');
    
    if (displaySelectedImage && addMore && imageUpload) {
        addMore.addEventListener('click', () => imageUpload.click());
        displaySelectedImage.addEventListener('click', () => imageUpload.click());

        imageUpload.addEventListener('change', (event) => {
            const files = event.target.files;

            Array.from(files).forEach((file) => {
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const imgDiv = document.createElement('div');
                        imgDiv.classList.add('w-20', 'h-20', 'bg-gray-300', 'bg-cover', 'bg-center', 'bg-no-repeat', 'flex-wrap', 'relative', 'z-[20]', 'cursor-pointer', 'flex');
                        imgDiv.style.backgroundImage = `url(${e.target.result})`;

                        displaySelectedImage.appendChild(imgDiv);
                    };
                    reader.readAsDataURL(file);
                }
            });

            imageUpload.value = '';
        });
    } else {
        console.error('One or more elements are missing:', displaySelectedImage, addMore, imageUpload);
    }
}
initializeImageUpload();





function initializeDropdown1(dropdownBtnId, dropdownListId, selectedOptionId, hiddenInputId, dropdownIconId, customSelectWrapperId) {
    const dropdownBtn = document.getElementById(dropdownBtnId);
    const dropdownList = document.getElementById(dropdownListId);
    const selectedOption = document.getElementById(selectedOptionId);
    const hiddenInput = document.getElementById(hiddenInputId);
    const dropdownIcon = document.getElementById(dropdownIconId);
    const customSelectWrapper = document.getElementById(customSelectWrapperId);

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

    document.querySelectorAll(`#${dropdownListId} li`).forEach((item) => {
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
initializeDropdown1("dropdownBtn1", "dropdownList1", "selectedOption1", "hiddenModelInput1", "dropdownIcon1", "customSelectWrapper1");






function initializeDropdown2(dropdownBtnId, dropdownListId, selectedOptionId, hiddenInputId, dropdownIconId, customSelectWrapperId) {
    const dropdownBtn = document.getElementById(dropdownBtnId);
    const dropdownList = document.getElementById(dropdownListId);
    const selectedOption = document.getElementById(selectedOptionId);
    const hiddenInput = document.getElementById(hiddenInputId);
    const dropdownIcon = document.getElementById(dropdownIconId);
    const customSelectWrapper = document.getElementById(customSelectWrapperId);

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

    document.querySelectorAll(`#${dropdownListId} li`).forEach((item) => {
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
initializeDropdown2("dropdownBtn2", "dropdownList2", "selectedOption2", "hiddenModelInput2", "dropdownIcon2", "customSelectWrapper2");
    





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

// Initial styles
Menu.style.transition = 'top 0.5s ease-in-out, opacity 0.5s ease-in-out';
Menu.style.top = "-50vw";
Menu.style.opacity = "0";
Menu.style.display = "none";

Body.style.transition = 'filter 0.5s ease-in-out, background-color 0.5s ease-in-out';
Body.style.filter = 'brightness(100%)';
Body.style.backgroundColor = 'rgba(255, 255, 255, 1)';

Main.style.transition = 'filter 0.5s ease-in-out';
Main.style.filter = 'brightness(100%)';

// ===== OPEN MENU =====
MenuOpen.addEventListener('click', function () {
    Menu.style.display = "flex";

    // Trigger reflow to ensure transition applies
    Menu.getBoundingClientRect();

    Menu.style.top = "0vw";
    Menu.style.opacity = "1";

    Body.style.height = '100vh';
    Body.style.overflow = 'hidden';

    Main.style.filter = 'brightness(50%)';
    Body.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
});

// ===== CLOSE MENU =====
MenuClose.addEventListener('click', function () {
    Menu.style.top = "-50vw";
    Menu.style.opacity = "0";

    Main.style.filter = 'brightness(100%)';
    Body.style.backgroundColor = 'rgba(255, 255, 255, 1)';

    // Wait for transition to end before hiding menu
    setTimeout(() => {
        Menu.style.display = "none";
        Body.style.height = 'auto';
        Body.style.overflow = 'auto';
    }, 500); // matches 0.5s transition
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