$(".customer-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./images/arrow-left.svg"/></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><img src="./images/arrow-right.svg"/></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
});
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);
});
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove(activeClass);
  }
});
// Modal open
const modalSignin = document.querySelector(".js-modal-signin");
const modalSignup = document.querySelector(".js-modal-signup");
const modalService = document.querySelector(".js-modal-service-pack");

const modalSigninOpen = document.querySelectorAll(".js-signin");
const modalSignupOpen = document.querySelectorAll(".js-signup");
const modalServiceOpen = document.querySelectorAll(".js-service-pack");

const modalClose = document.querySelectorAll(".js-modal-close");

function showModalSignIn() {
  modalSignin.classList.add("open");
}

function showModalSignup() {
  modalSignup.classList.add("open");
}

function showModalServicePack() {
  modalService.classList.add("open");
}

function hidemodalSignIn() {
  modalSignin.classList.remove("open");
}

function hidemodalSignup() {
  modalSignup.classList.remove("open");
}

function hidemodalServicePack() {
  modalService.classList.remove("open");
}

for (const openBtn of modalSigninOpen) {
  openBtn.addEventListener("click", showModalSignIn);
}

for (const openBtn of modalSignupOpen) {
  openBtn.addEventListener("click", showModalSignup);
}

for (const openBtn of modalServiceOpen) {
  openBtn.addEventListener("click", showModalServicePack);
}

for (const closeBtn of modalClose) {
  closeBtn.addEventListener("click", hidemodalSignIn);
}

for (const closeBtn of modalClose) {
  closeBtn.addEventListener("click", hidemodalSignup);
}

for (const closeBtn of modalClose) {
  closeBtn.addEventListener("click", hidemodalServicePack);
}
