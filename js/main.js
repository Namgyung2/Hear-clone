// Swiper

new Swiper('.visual .swiper-container', {
  // Optional parameters
  loop: true,
  autoplay: {
    deplay: 3000
  },
  
  // If we need pagination
  pagination: {
    el: '.visual .swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  },
});


// new Swiper('.main #tab1 .swiper-container', {

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

new Swiper('.main #tab1 .swiper-container', {
  slidesPerView: 'auto',
  slidesPerView: 3,
  freeMode: true,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  mousewheel: true,
});