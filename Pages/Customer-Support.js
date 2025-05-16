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




























// Initialize map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// User location marker
var userMarker = L.marker([51.505, -0.09]).addTo(map)
  .bindPopup('You are here').openPopup();

// Track user location
navigator.geolocation.watchPosition(
  function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    userMarker.setLatLng([lat, lon]);
    map.setView([lat, lon], 14);
  },
  function(error) {
    alert('Error getting location: ' + error.message);
  },
  {
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 10000
  }
);

// Custom icon for showrooms
var imageIcon1 = L.icon({
  iconUrl: '../images/Location-Logo.png',
  iconSize: [45, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

// Showroom markers
L.marker([19.236540172746263, 73.13053372769332], { icon: imageIcon1 })
  .addTo(map)
  .bindPopup('Kalyan Showroom');

L.marker([19.2972289241795, 73.06333664676654], { icon: imageIcon1 })
  .addTo(map)
  .bindPopup('Bhiwandi Showroom');

L.marker([19.22387779093676, 73.09949366717157], { icon: imageIcon1 })
  .addTo(map)
  .bindPopup('Dombivli Showroom');

L.marker([19.247869023561798, 73.10635758352211], { icon: imageIcon1 })
  .addTo(map)
  .bindPopup('Kongaon Showroom');

// Remove Leaflet attribution prefix (optional)
L.control.attribution({ prefix: false }).addTo(map);














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
const Main1 = document.getElementById('main2');
const Main2 = document.getElementById('main3');
const Main3 = document.getElementById('main4');

// Initial Styles
Menu.style.top = "-50vw";
Menu.style.opacity = "0";
Menu.style.display = "none";

Menu.style.transition = 'top 0.5s ease-in-out, opacity 0.5s ease-in-out';
Body.style.transition = 'filter 0.5s ease-in-out, background-color 0.5s ease-in-out';
Main.style.transition = 'filter 0.5s ease-in-out, background-color 0.5s ease-in-out';
Main1.style.transition = 'filter 0.5s ease-in-out, background-color 0.5s ease-in-out';
Main2.style.transition = 'filter 0.5s ease-in-out, background-color 0.5s ease-in-out';
Main3.style.transition = 'filter 0.5s ease-in-out, background-color 0.5s ease-in-out';

Body.style.filter = 'brightness(100%)';
Main.style.filter = 'brightness(100%)';
Main1.style.filter = 'brightness(100%)';
Main2.style.filter = 'brightness(100%)';
Main3.style.filter = 'brightness(100%)';

Main.style.backgroundColor = 'rgba(255, 255, 255, 1)';
Body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
Main1.style.backgroundColor = 'rgba(255, 255, 255, 1)';
Main2.style.backgroundColor = 'rgba(255, 255, 255, 1)';
Main3.style.backgroundColor = 'rgba(255, 255, 255, 1)';

// ===== MENU OPEN =====
MenuOpen.addEventListener('click', function () {
    Menu.style.display = "flex";
    Menu.getBoundingClientRect(); // Force reflow

    // Trigger transitions together
    Menu.style.top = "0vw";
    Menu.style.opacity = "1";

    Body.style.height = '100vh';
    Body.style.overflow = 'hidden';

    Body.style.backgroundColor = 'rgba(102, 98, 98, 0.8)';
    Main.style.filter = 'brightness(50%)';
    Main1.style.filter = 'brightness(50%)';
    Main2.style.filter = 'brightness(50%)';
    Main3.style.filter = 'brightness(50%)';

    Main.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    Main1.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    Main2.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    Main3.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
});

// ===== MENU CLOSE =====
MenuClose.addEventListener('click', function () {
    // Trigger transitions
    Menu.style.top = "-50vw";
    Menu.style.opacity = "0";

    Body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    Main.style.filter = 'brightness(100%)';
    Main1.style.filter = 'brightness(100%)';
    Main2.style.filter = 'brightness(100%)';
    Main3.style.filter = 'brightness(100%)';


    Main.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    Main1.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    Main2.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    Main3.style.backgroundColor = 'rgba(255, 255, 255, 1)';

    // Restore scroll after animation ends
    setTimeout(() => {
        Menu.style.display = "none";
        Body.style.overflow = 'auto';
        Body.style.height = 'auto';
    }, 500); // Match the transition duration
});

















//Customer Support Ai

//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
//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


const arrow = document.getElementById("arrow-up");
const input = document.getElementById("Search-Bar");
const chatBox = document.getElementById("chat");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `max-w-[70%] px-4 py-2 rounded-[1vw] text-base font-['Mohave'] break-words ${
    sender === "user"
      ? "bg-cyan-500 text-white self-end text-right"
      : "bg-gray-200 text-black self-start text-left"
  }`;
  msg.innerText = text;
  chatBox.prepend(msg); // Add at top because of flex-col-reverse
}

arrow.addEventListener("click", async () => {
  const question = input.value.trim();
  if (!question) return;

  addMessage(question, "user");
  input.value = "";

  const loading = document.createElement("div");
  loading.className = "text-sm text-gray-500 italic self-start";
  loading.innerText = "Support is typing...";
  chatBox.prepend(loading);

  try {
    const res = await fetch("http://localhost:5005/webhooks/rest/webhook", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: "user", // you can also generate a unique ID here
        message: question,
      }),
    });

    const data = await res.json();
    loading.remove();

    if (!data.length) {
      addMessage("❌ No response from server", "bot");
      return;
    }

    data.forEach((msg) => {
      if (msg.text) {
        addMessage(msg.text, "bot");
      }
    });

  } catch (err) {
    loading.remove();
    addMessage("⚠️ Error contacting the server", "bot");
    console.error(err);
  }
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