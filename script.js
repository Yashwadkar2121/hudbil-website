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
