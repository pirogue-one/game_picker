'use strict';

//переключение вопросов

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

//ограничение выбора checkbox

const checks = document.querySelectorAll(".limited-checkbox-1");
let max = 3;
for (let i = 0; i < checks.length; i++)
  checks[i].onclick = selectiveCheck;
function selectiveCheck (event) {
  let checkedChecks = document.querySelectorAll(".limited-checkbox-1:checked");
  if (checkedChecks.length >= max + 1)
    return false;
}

const checksTwo = document.querySelectorAll(".limited-checkbox-2");
let maxTwo = 3;
for (let i = 0; i < checksTwo.length; i++)
  checksTwo[i].onclick = selectiveCheckTwo;
function selectiveCheckTwo (event) {
  let checkedChecks = document.querySelectorAll(".limited-checkbox-2:checked");
  if (checkedChecks.length >= maxTwo + 1)
    return false;
}