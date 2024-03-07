'use strict';

const swiper = new Swiper('.swiper-answer', {

    direction: 'vertical',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },

      
});