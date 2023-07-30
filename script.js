import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";

const search = document.getElementById("search-btn");
const searchContainer = document.querySelector(".search-bar-container");
const btnLogin = document.getElementById("login-btn");
const loginContainer = document.querySelector(".login-form-container");
const btnCloseLogin = document.getElementById("form-close");
const menuBar = document.getElementById("menu-bar");
const navbar = document.querySelector(".navbar");
const videoControls = document.querySelectorAll(".vid-btn");
const videoSlider = document.getElementById("video-slider");
const sliderBtnRight = document.querySelector(".slider-right");
const sliderBtnLeft = document.querySelector(".slider-left");
const containerControls = document.querySelector(".controls");
const btnsSlider = [sliderBtnLeft, sliderBtnRight];
window.onscroll = (e) => {
  search.classList.remove("fa-times");
  searchContainer.classList.remove("show-clip");

  navbar.classList.remove("show-clip");
  menuBar.classList.remove("fa-times");
};
search.addEventListener("click", () => {
  search.classList.toggle("fa-times");
  searchContainer.classList.toggle("show-clip");
});

btnLogin.addEventListener("click", (e) => {
  loginContainer.classList.add("active");
});

btnCloseLogin.addEventListener("click", (e) => {
  loginContainer.classList.remove("active");
});

menuBar.addEventListener("click", (e) => {
  menuBar.classList.toggle("fa-times");
  navbar.classList.toggle("show-clip");
});

videoControls.forEach((el) => {
  el.addEventListener("click", (e) => {
    document.querySelector(".controls .active").classList.remove("active");
    el.classList.add("active");
    //videoSlider.setAttribute("src", el.dataset.src);
    videoSlider.src = el.dataset.src;
  });
});

btnsSlider.forEach((el) => {
  el.addEventListener("click", (e) => {
    let nowActive = document.querySelector(".controls .active");
    nowActive.classList.remove("active");
    if (el.classList.contains("slider-right")) {
      try {
        nowActive.nextElementSibling.classList.add("active");
      } catch (error) {
        const firstEl = containerControls.firstElementChild.classList.add("active");
      }
    } else {
      try {
        nowActive.previousElementSibling.classList.add("active");
      } catch (error) {
        const firstEl = containerControls.lastElementChild.classList.add("active");
      }
    }
    nowActive = document.querySelector(".controls .active");
    videoSlider.src = nowActive.dataset.src;
  });
});

// Swiper

const swiperReviewSlider = new Swiper(".review-slider", {
  // Optional parameters
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
const swiperBrandSlider = new Swiper(".brand-slider", {
  // Optional parameters
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
