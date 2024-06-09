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

// Define the data for each slide
const slides = [
  {
    brandLogo: "Brands logo/Brand 1.svg",
    brandPhoto: "Brand img/Brand img 1.svg",
    listItems: [
      "CUMMUNICATION DESIGN",
      "WEBSITE DESIGN",
      "WIREFRAME DESIGN",
      "UI/UX DESIGN",
      "WIBESITE DEVELOPMENT",
      "APP DEVELOPMENT",
      "WEB DEVELOPMENT",
      "CHAT-BOT DEVLOPMENT",
    ],
    heading:
      "Whether you need to design or development your first MVP to get funding, redesign your product to improve business metrics, or get a remote design/branding team to grow faster - our product engineers are here to help you.",
  },
  {
    brandLogo: "Brands logo/Brand 2.svg",
    brandPhoto: "Brand img/Brand img 2.svg",
    listItems: [
      "CUMMUNICATION DESIGN",
      "WEBSITE DESIGN",
      "WIREFRAME DESIGN",
      "UI DISIGN",
      "WORDPRESS DEVLOPMENT",
      "UX DISIGN",
    ],
    heading:
      "More than just a digital agency,aside from  beautiful websites and application, we love solving thorny problems with smart.",
  },
  {
    brandLogo: "Brands logo/Brand 3.svg",
    brandPhoto: "Brand img/Brand img 3.svg",
    listItems: [
      "CUMMUNICATION DESIGN",
      "WEBSITE DESIGN",
      "WIREFRAME DESIGN",
      "UI DISIGN",
      "WORDPRESS DEVLOPMENT",
      "UX DISIGN",
    ],
    heading:
      "More than just a digital agency,aside from  beautiful websites and application, we love solving thorny problems with smart.",
  },
  {
    brandLogo: "Brands logo/Brand 4.svg",
    brandPhoto: "Brand img/Brand img 4.svg",
    listItems: [
      "CUMMUNICATION DESIGN",
      "WEBSITE DESIGN",
      "WIREFRAME DESIGN",
      "UI DISIGN",
      "WORDPRESS DEVLOPMENT",
      "UX DISIGN",
    ],
    heading:
      "More than just a digital agency,aside from  beautiful websites and application, we love solving thorny problems with smart.",
  },
  {
    brandLogo: "Brands logo/Brand 5.svg",
    brandPhoto: "Brand img/Brand img 5.svg",
    listItems: [
      "CUMMUNICATION DESIGN",
      "WEBSITE DESIGN",
      "WIREFRAME DESIGN",
      "UI DISIGN",
      "WORDPRESS DEVLOPMENT",
      "UX DISIGN",
    ],
    heading:
      "More than just a digital agency,aside from  beautiful websites and application, we love solving thorny problems with smart.",
  },
];

// Define the current slide index
let currentSlide = 0;

// display default values
updateSlides();

// Add event listeners to the buttons
document.getElementById("right-btn").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
});

document.getElementById("left-btn").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlides();
});

// Function to update the slides
function updateSlides() {
  const currentSlideData = slides[currentSlide];

  // Update the brand logos
  document.getElementById("brand-logo-1").src = currentSlideData.brandLogo;

  // Update the brand photos
  document.getElementById("brand-photo-1").src = currentSlideData.brandPhoto;

  // Update the list items
  const list1 = document.getElementById("list-1");

  // Update the headings
  document.getElementById("heading-1").textContent = currentSlideData.heading;

  list1.innerHTML = "";

  currentSlideData.listItems.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list1.appendChild(listItem);
  });
}

// Customer Love
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
