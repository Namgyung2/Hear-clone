<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

var swiper = new Swiper('.swiper-container', {
  
  direction: 'vertical',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
    scrollbar: {
      el: '.swiper-scrollbar',
  }
});