
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* =============== SWIPER JS =============== */
var swiper = new Swiper(".swiper__discover", {
    slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
  });

//   var swiper = new Swiper(".swiper-home", {
//     spaceBetween: 30,
//     effect: "fade",
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });