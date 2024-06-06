const site_wide_cursor = document.querySelector(".custom-cursor.site-wide");

document.addEventListener("mouseenter", () => {
  site_wide_cursor.style.display = "block";
});

document.addEventListener("mouseleave", () => {
  site_wide_cursor.style.display = "none";
});

document.addEventListener("mousemove", TrackCursor);

document.addEventListener("mousedown", () =>
  site_wide_cursor.classList.add("active")
);
document.addEventListener("mouseup", () =>
  site_wide_cursor.classList.remove("active")
);

function TrackCursor(evt) {
  const w = site_wide_cursor.clientWidth;
  const h = site_wide_cursor.clientHeight;
  site_wide_cursor.style.transform = `translate(${evt.clientX - w / 2}px, ${
    evt.clientY - h / 2
  }px)`;
}

//Navbar - on Click
document.addEventListener("DOMContentLoaded", function () {
  const navOpenButton = document.getElementById("nav-open");
  const navCloseButton = document.getElementById("nav-close");
  const navigationMenu = document.getElementById("navigation-menu");
  const body = document.body;

  navOpenButton.addEventListener("click", function () {
    navigationMenu.classList.remove("hidden");
    navOpenButton.classList.add("hidden");
    navCloseButton.classList.remove("hidden");
    body.classList.add("noscroll");
  });

  navCloseButton.addEventListener("click", function () {
    navigationMenu.classList.add("hidden");
    navOpenButton.classList.remove("hidden");
    navCloseButton.classList.add("hidden");
    body.classList.remove("noscroll");
  });
});

// Our Brand Section
const brandImages = [
  { bg: "Brand img/Brand img 1.svg", logo: "Brands logo/Brand 1.svg" },
  { bg: "Brand img/Brand img 2.svg", logo: "Brands logo/Brand 2.svg" },
  { bg: "Brand img/Brand img 3.svg", logo: "Brands logo/Brand 3.svg" },
  { bg: "Brand img/Brand img 4.svg", logo: "Brands logo/Brand 4.svg" },
  { bg: "Brand img/Brand img 5.svg", logo: "Brands logo/Brand 5.svg" },
];

let currentIndex = 0;

const brandPhoto = document.querySelector(".brand-photo");
const brandLogo = document.getElementById("brand-logo");

function updateBrand() {
  brandPhoto.style.backgroundImage = `url("${brandImages[currentIndex].bg}")`;
  brandLogo.src = brandImages[currentIndex].logo;
}

document.getElementById("left-arrow").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + brandImages.length) % brandImages.length;
  updateBrand();
});

document.getElementById("right-arrow").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % brandImages.length;
  updateBrand();
});

updateBrand();

const customerGrid = document.getElementById("customer-grid");
const leftArrowButton = document.getElementById("left-arrow-customer");
const rightArrowButton = document.getElementById("right-arrow-customer");

const customerData = [
  {
    img: "/customer love section/01.svg",
    h3: "Expectations. The Collins dictionary defines them as “your strong hopes or beliefs that something will happen or that you will get something that you want.” In creating a fresh, uncompromised web platform and…",
    h6_1: "Todd & Jackie Scott",
    h6_2: "Owners of the National Business Review",
  },
  {
    img: "/customer love section/02.svg",
    h3: "Sunglass Style arrived a little late to the digital age. We understood how critical our and every business's online presence was, but the project's scale was daunting. However, after meeting with Nero Motion early on in o…",
    h6_1: "Sven Ericson",
    h6_2: "OWNER",
  },
  {
    img: "/customer love section/03.svg",
    h3: "Over the years, Nero Motion have worked with us on an extensive list of successful outputs ranging from websites, digital advertising, video, design, marketing collateral and more. The team provide effective",
    h6_1: "Debbie Chin & Marketing team",
    h6_2: "Senior Marketing Manager",
  },
];

let currentCustomerIndex = 0;

function generateGridColumns() {
  const gridColumnHTML = customerData
    .slice(currentCustomerIndex, currentCustomerIndex + 3)
    .map((customer, index) => {
      return `
      <div class="mt-5">
        <img src="${customer.img}" alt="" srcset="">
        <h3 class="mt-10">${customer.h3}</h3>
        <h6 class="mt-10">${customer.h6_1}</h6>
        <h6>${customer.h6_2}</h6>
      </div>
    `;
    })
    .join("");
  customerGrid.innerHTML = gridColumnHTML;
}

generateGridColumns();

leftArrowButton.addEventListener("click", () => {
  currentCustomerIndex--;
  if (currentCustomerIndex < 0) {
    currentCustomerIndex = customerData.length - 3;
  }
  generateGridColumns();
});

rightArrowButton.addEventListener("click", () => {
  currentCustomerIndex++;
  if (currentCustomerIndex >= customerData.length - 2) {
    currentCustomerIndex = 0;
  }
  generateGridColumns();
});
