// JS for Background Shape moving

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getRandomBorderRadius() {
    return `${getRandom(30, 60)}% ${getRandom(30, 60)}% ${getRandom(30, 60)}% ${getRandom(30, 60)}% / 
            ${getRandom(30, 60)}% ${getRandom(30, 60)}% ${getRandom(30, 60)}% ${getRandom(30, 60)}%`;
  }

  class Particle {
    constructor(element, containerWidth, containerHeight) {
      this.el = element;
      this.containerWidth = containerWidth;
      this.containerHeight = containerHeight;

      this.size = getRandom(12, 18);
      this.x = (containerWidth - this.size) / 2;
      this.y = (containerHeight - this.size) / 2;

      this.vx = getRandom(-0.01, 0.01);
      this.vy = getRandom(-0.01, 0.01);

      this.targetSize = getRandom(10, 20);
      this.borderRadius = getRandomBorderRadius();
      this.nextBorderRadius = getRandomBorderRadius();
      this.borderLerp = 0;

      this.updateStyle();
    }

    update(delta) {
      delta = Math.min(delta, 50); // protect against tab switch issues

      const margin = 5; // buffer to avoid container edges (in vw)

      // Move particle
      this.x += this.vx * delta;
      this.y += this.vy * delta;

      // Constrain motion to avoid corners
      const maxX = this.containerWidth - this.size - margin;
      const maxY = this.containerHeight - this.size - margin;

      if (this.x < margin || this.x > maxX) this.vx *= -1;
      if (this.y < margin || this.y > maxY) this.vy *= -1;

      // Smooth size change
      this.size += (this.targetSize - this.size) * 0.005 * delta;
      if (Math.abs(this.size - this.targetSize) < 0.1) {
        this.targetSize = getRandom(10, 20);
      }

      // Smooth morphing of border-radius
      this.borderLerp += 0.001 * delta;
      if (this.borderLerp >= 1) {
        this.borderLerp = 0;
        this.borderRadius = this.nextBorderRadius;
        this.nextBorderRadius = getRandomBorderRadius();
      }

      this.updateStyle();
    }

    updateStyle() {
      this.el.style.transform = `translate(${this.x}vw, ${this.y}vw)`;
      this.el.style.width = `${this.size}vw`;
      this.el.style.height = `${this.size}vw`;
      this.el.style.borderRadius = this.lerpBorderRadius(this.borderRadius, this.nextBorderRadius, this.borderLerp);
    }

    lerpBorderRadius(from, to, t) {
      const fromValues = from.match(/[\d.]+/g).map(Number);
      const toValues = to.match(/[\d.]+/g).map(Number);
      const lerped = fromValues.map((v, i) => v + (toValues[i] - v) * t);
      return `${lerped[0]}% ${lerped[1]}% ${lerped[2]}% ${lerped[3]}% / 
              ${lerped[4]}% ${lerped[5]}% ${lerped[6]}% ${lerped[7]}%`;
    }
  }

  function startParticles() {
    const containerWidth = 50;
    const containerHeight = 60;

    const p1 = new Particle(document.getElementById('circle1'), containerWidth, containerHeight);
    const p2 = new Particle(document.getElementById('circle2'), containerWidth, containerHeight);

    let lastTime = performance.now();

    function animate(time) {
      let delta = time - lastTime;
      delta = Math.min(delta, 50);
      lastTime = time;

      p1.update(delta);
      p2.update(delta);

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  window.onload = startParticles;





// JS for Bike SlideIn

const BikeName = document.getElementById('text2-sec2');
const BikeImg = document.getElementById('bikeImg');
const slider1 = document.getElementById('sl1');
const slider2 = document.getElementById('sl2');
const slider3 = document.getElementById('sl3');
const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const value3 = document.getElementById('value3');
const value4 = document.getElementById('value4');

let currentBike = 1;

function updateBike() {
    BikeImg.classList.remove("animate-slide-in");
    void BikeImg.offsetWidth;

    if (currentBike === 1) {
        updateTextColor(slider1);
        BikeImg.src = "images/EBikewBG1.png";
        BikeImg.style.width = '35vw';
        BikeImg.style.marginTop = `${window.innerWidth >= 1536 ? 0 : window.innerWidth >= 1280 ? 1 : window.innerWidth >= 1024 ? -2 : window.innerWidth >= 884 ? 6 : window.innerWidth >= 768 ? 10 : window.innerWidth >= 640 ? 10 : -4}vw`;
        BikeImg.style.marginLeft = `${                               window.innerWidth >= 1280 ? 32 : window.innerWidth >= 1024 ? 40 : window.innerWidth >= 884 ? 40 : window.innerWidth >= 768 ? 36 : window.innerWidth >= 640 ? 20 : 10}vw`;
        BikeName.innerHTML = "EVO 10";
        value1.innerHTML = "117 kmph";
        value2.innerHTML = "176 km";
        value3.innerHTML = "4";
        value4.innerHTML = "4.5";
        currentBike = 2;
    } else if (currentBike === 2) {
        updateTextColor(slider2);
        BikeImg.src = "images/EBikewBG2.png";
        BikeImg.style.width = '30vw';
        BikeImg.style.marginTop = `${window.innerWidth >= 1536 ? 10 : window.innerWidth >= 1280 ? 3.5 : window.innerWidth >= 1024 ? 0.5 : window.innerWidth >= 884 ? 8 : window.innerWidth >= 768 ? 12 : window.innerWidth >= 640 ? 10 : -4}vw`;
        BikeImg.style.marginLeft = `${                                window.innerWidth >= 1280 ? 35 : window.innerWidth >= 1024 ? 40 : window.innerWidth >= 884 ? 40 : window.innerWidth >= 768 ? 40 : window.innerWidth >= 640 ? 30 : 10}vw`;
        BikeName.innerHTML = "EVO 20A";
        value1.innerHTML = "180 kmph";
        value2.innerHTML = "200 km";
        value3.innerHTML = "7.3";
        value4.innerHTML = "7";
        currentBike = 3;
    } else {
        updateTextColor(slider3);
        BikeImg.src = "images/EBikewBG3.png";
        BikeImg.style.width = '32.5vw';
        BikeImg.style.marginTop = `${window.innerWidth >= 1536 ? 0 : window.innerWidth >= 1280 ? 0 : window.innerWidth >= 1024 ? -3 : window.innerWidth >= 884 ? 5 : window.innerWidth >= 768 ? 9 : window.innerWidth >= 640 ? 10 : -4}vw`;
        BikeImg.style.marginLeft = `${                               window.innerWidth >= 1280 ? 35 : window.innerWidth >= 1024 ? 40 : window.innerWidth >= 884 ? 40 : window.innerWidth >= 768 ? 40 : window.innerWidth >= 640 ? 30 : 10}vw`;
        BikeName.innerHTML = "EVO 50NX";
        value1.innerHTML = "112 kmph";
        value2.innerHTML = "186 km";
        value3.innerHTML = "5.3";
        value4.innerHTML = "7";
        currentBike = 1;
    }

    BikeImg.classList.add("animate-slide-in");
}

function updateTextColor(activeSlider) {
    [slider1, slider2, slider3].forEach(slider => {
        slider.style.color = (slider === activeSlider) ? "black" : "rgb(175,175,175)";
    });
}


setInterval(updateBike, 5000);

updateBike();





//JS for Product Viewing 

const wrapper = document.getElementById("products-wrapper");
const leftBtn = document.getElementById("scrl-left");
const rightBtn = document.getElementById("scrl-right");

const Pro1 = document.getElementById("product1");
const Pro2 = document.getElementById("product2");
const Pro3 = document.getElementById("product3");
const Pro4 = document.getElementById("product4");
const Pro5 = document.getElementById("product5");

let currentIndex = 0;
const scrollAmount = 365;

// Set initial states
const products = [Pro1, Pro2, Pro3, Pro4, Pro5];
products.forEach((pro, index) => {
    pro.style.opacity = index < 3 ? "1" : "0";
    pro.style.transition = "opacity 0.25s ease-in-out";
});

leftBtn.style.stroke = "#B2B3B7FF";
rightBtn.style.stroke = "#000";

// Function to update product visibility and button state
function updateView(index) {
    currentIndex = index;

    products.forEach((pro, i) => {
        pro.style.opacity = (i >= index && i < index + 3) ? "1" : "0";
    });

    leftBtn.style.stroke = currentIndex === 0 ? "#B2B3B7FF" : "#000";
    rightBtn.style.stroke = currentIndex === 2 ? "#B2B3B7FF" : "#000";
}

// Scroll & slide animation
function slideWrapper(direction) {
    const offset = direction === "right" ? -20 : 20;
    const scrollOffset = direction === "right" ? scrollAmount : -scrollAmount;

    wrapper.scrollBy({ left: scrollOffset, behavior: "smooth" });
    wrapper.style.transition = "transform 0.4s cubic-bezier(0, 2, 1, 1.25)";
    wrapper.style.transform = `translateX(${offset}px)`;

    setTimeout(() => {
        wrapper.style.transform = "translateX(0)";
    }, 400);
}

// Button click handlers
rightBtn.addEventListener("click", function () {
    if (currentIndex < 2) {
        updateView(currentIndex + 1);
        slideWrapper("right");
    }
});

leftBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
        updateView(currentIndex - 1);
        slideWrapper("left");
    }
});






// JS for Special Features

const SF1 = document.getElementById("SF1");
const SF2 = document.getElementById("SF2");
const SF3 = document.getElementById("SF3");
const h41 = document.getElementById("SF1h4");
const h42 = document.getElementById("SF2h4");
const h43 = document.getElementById("SF3h4");

let intervalId;
let currentIndex1 = 0;

SF1.classList.add("flex-[5]");
SF2.classList.add("flex-[2]", "filtered-bg");
SF3.classList.add("flex-[2]", "filtered-bg");
h41.classList.remove("hidden");
h42.classList.add("hidden");
h43.classList.add("hidden");

function resetFlex() {
    SF1.classList.remove("flex-[5]", "filtered-bg");
    SF2.classList.remove("flex-[5]", "filtered-bg");
    SF3.classList.remove("flex-[5]", "filtered-bg");

    SF1.classList.add("flex-[2]", "filtered-bg");
    SF2.classList.add("flex-[2]", "filtered-bg");
    SF3.classList.add("flex-[2]", "filtered-bg");

    h41.classList.add("hidden");
    h42.classList.add("hidden");
    h43.classList.add("hidden");
}

function applyActiveFlex(index) {
    resetFlex();
    
    if (index === 0) {
        SF1.classList.replace("flex-[2]", "flex-[5]");
        SF1.classList.remove("filtered-bg");
        h41.classList.remove("hidden");
    } else if (index === 1) {
        SF2.classList.replace("flex-[2]", "flex-[5]");
        SF2.classList.remove("filtered-bg");
        h42.classList.remove("hidden");
    } else if (index === 2) {
        SF3.classList.replace("flex-[2]", "flex-[5]");
        SF3.classList.remove("filtered-bg");
        h43.classList.remove("hidden");
    }
}

function updateFlex() {
    applyActiveFlex(currentIndex1);
    currentIndex1 = (currentIndex1 + 1) % 3;
}

function handleClick(index) {
    clearInterval(intervalId);
    applyActiveFlex(index);

    setTimeout(() => {
        intervalId = setInterval(updateFlex, 5000);
    }, 5000);
}

SF1.addEventListener("click", () => handleClick(0));
SF2.addEventListener("click", () => handleClick(1));
SF3.addEventListener("click", () => handleClick(2));

intervalId = setInterval(updateFlex, 5000);





// JS for Sliders

const slides = document.querySelectorAll("#ssCon > div");
const dot1 = document.getElementById("sssl1");
const dot2 = document.getElementById("sssl2");
const dot3 = document.getElementById("sssl3");
const dot4 = document.getElementById("sssl4");

const dots = [dot1, dot2, dot3, dot4];
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    currentSlide = index;

    slides.forEach((slide, i) => {
        slide.style.opacity = i === currentSlide ? "1" : "0";
        slide.style.transform = i === currentSlide ? "translateX(0)" : "translateX(100%)";
    });

    dots.forEach((dot, i) => {
        dot.style.color = i === currentSlide ? "black" : "rgba(199, 199, 199, 1)";
    });

    resetInterval();
}

function startInterval() {
    slideInterval = setInterval(() => {
        showSlide((currentSlide + 1) % slides.length);
    }, 5000);
}

function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
}

dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));

showSlide(0);

startInterval();


let HOME_Page = document.getElementById('HOME');
HOME_Page.addEventListener('click', function() {
    window.location.href = 'index.html';
});

let PRODUCT_Page = document.getElementById('PRODUCT');
PRODUCT_Page.addEventListener('click', function() {
    window.location.href = 'Pages/Products.html';
});

let GALLERY_Page = document.getElementById('GALLERY');
GALLERY_Page.addEventListener('click', function() {
    window.location.href = 'Pages/Gallery.html';
});

let CONTACT_Page = document.getElementById('CONTACT');
CONTACT_Page.addEventListener('click', function() {
    window.location.href = 'Pages/General-Enquiry.html';
});


















const MenuOpen = document.getElementById('menuBar');
const Menu = document.getElementById('menuSection');
const MenuClose = document.getElementById('menuClose');
const Body = document.getElementById('body');
const Main = document.getElementById('main1');
const Main1 = document.getElementById('main2');

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
Main1.style.transition = 'filter 0.5s ease-in-out';
Main1.style.filter = 'brightness(100%)';

// OPEN MENU
MenuOpen.addEventListener('click', () => {
    Menu.style.display = "flex";
    Menu.getBoundingClientRect(); // Force reflow to enable transition
    Menu.style.top = "0vw";
    Menu.style.opacity = "1";

    Body.style.height = '100vh';
    Body.style.overflow = 'hidden';

    Main.style.filter = 'brightness(50%)';
    Main1.style.filter = 'brightness(50%)';
    Body.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
});

// CLOSE MENU
MenuClose.addEventListener('click', () => {
    Menu.style.top = "-50vw";
    Menu.style.opacity = "0";

    Main.style.filter = 'brightness(100%)';
    Main1.style.filter = 'brightness(100%)';
    Body.style.backgroundColor = 'rgba(255, 255, 255, 1)';

    setTimeout(() => {
        Menu.style.display = "none";
        Body.style.height = 'auto';
        Body.style.overflow = 'auto';
    }, 500); // Wait for transition to complete
});
















//Color Pallet
const colorPallet1 = document.getElementById('color1');
const colorPallet2 = document.getElementById('color2');
const colorPallet3 = document.getElementById('color3');
const Varient = document.getElementById('Varient');

colorPallet1.addEventListener('click', function() {
    Varient.src = "images/EBikewBG2.2.png";
    colorPallet1.classList.add('w-12', 'h-12');
    colorPallet2.classList.add('w-10', 'h-10');
    colorPallet3.classList.add('w-10', 'h-10');
    colorPallet2.classList.remove('w-12', 'h-12');
    colorPallet3.classList.remove('w-12', 'h-12');
});
colorPallet2.addEventListener('click', function() {
    Varient.src = "images/EBikewBG2.0.png";
    colorPallet1.classList.add('w-10', 'h-10');
    colorPallet2.classList.add('w-12', 'h-12');
    colorPallet3.classList.add('w-10', 'h-10');
    colorPallet1.classList.remove('w-12', 'h-12');
    colorPallet3.classList.remove('w-12', 'h-12');
});
colorPallet3.addEventListener('click', function() {
    Varient.src = "images/EBikewBG2.1.png";
    colorPallet1.classList.add('w-10', 'h-10');
    colorPallet2.classList.add('w-10', 'h-10');
    colorPallet3.classList.add('w-12', 'h-12');
    colorPallet1.classList.remove('w-12', 'h-12');
    colorPallet2.classList.remove('w-12', 'h-12');
});












 // List of all IDs that should redirect
    const redirectIDs = ['b1', 'b2', 'b3', 'b4'];

    // URL to redirect to
    const redirectURL = 'Pages/Pro.html';

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
        const redirectURL2 = 'Pages/General-Enquiry.html';
    
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
        const redirectURL3 = 'Pages/S-Enquiry.html';
    
        // Attach click event to each element
        redirectIDs3.forEach(id => {
          const element = document.getElementById(id);
          if (element) {
            element.addEventListener('click', () => {
              window.location.href = redirectURL3;
            });
          }
        });
    
    
    
        const redirectIDs4 = ['CS','NBS'];
    
        // URL to redirect to
        const redirectURL4 = 'Pages/Customer-Support.html';
    
        // Attach click event to each element
        redirectIDs4.forEach(id => {
          const element = document.getElementById(id);
          if (element) {
            element.addEventListener('click', () => {
              window.location.href = redirectURL4;
            });
          }
        });











    