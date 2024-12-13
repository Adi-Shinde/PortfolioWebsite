// Select navigation elements
const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

// Preloader
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}

window.addEventListener("load", function () {
  setTimeout(hidePreloader, 1700);
});

// Hamburger menu
navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "img/icons/close.svg";
  } else {
    navBtnImg.src = "img/icons/open.svg";
  }
};

// Sticky header & "Go to Top" button
window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  const hero = document.querySelector("#home");
  let triggerHeight = hero.offsetHeight - 170;

  if (window.scrollY > triggerHeight) {
    header.classList.add("header-sticky");
    goToTop.classList.add("reveal");
  } else {
    header.classList.remove("header-sticky");
    goToTop.classList.remove("reveal");
  }
});

// AOS animations settings
AOS.init({
  once: true,
});

// Modal functionality
// Updated to use data-description for specific project text
document.addEventListener("DOMContentLoaded", () => {
  const projectBoxes = document.querySelectorAll(".project-box");
  const modal = document.getElementById("project-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text"); 
  const closeModal = document.querySelector(".close-modal");

  projectBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      const imgSrc = box.querySelector(".project-img").src;
      const caption = box.dataset.description; // Fetch the description
      const title = box.querySelector("h5").textContent; // Fetch the title
  
      modal.style.display = "block";
      modalImg.src = imgSrc;
      modalTitle.textContent = title;
      modalText.textContent = caption;
    });
  });
  

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});