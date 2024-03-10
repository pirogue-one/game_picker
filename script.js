'use strict';

//переключение вопросов

const swiper = new Swiper('.swiper-answer', {

  direction: 'vertical',
  mousewheel: {
    enabled: true,
    thresholdDelta: 20
  },
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

// const checks = document.querySelectorAll(".limited-checkbox-1");
// let max = 3;
// for (let i = 0; i < checks.length; i++)
//   checks[i].onclick = selectiveCheck;
// function selectiveCheck(event) {
//   let checkedChecks = document.querySelectorAll(".limited-checkbox-1:checked");
//   if (checkedChecks.length >= max + 1)
//     return false;
// }

const checksTwo = document.querySelectorAll(".limited-checkbox-2");
let maxTwo = 3;
for (let i = 0; i < checksTwo.length; i++)
  checksTwo[i].onclick = selectiveCheckTwo;
function selectiveCheckTwo(event) {
  let checkedChecks = document.querySelectorAll(".limited-checkbox-2:checked");
  if (checkedChecks.length >= maxTwo + 1)
    return false;
}

//форма
const games = JSON.parse(gamesJson);
console.log(games);
const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formAnswers = Object.fromEntries(formData);
  console.log(formAnswers);

  const results = games.filter((g) => checkGame(g, formAnswers));
  if (results.length === 0) { alert('По Вашим ответам ничего не нашлось :( Попробуйте изменить некоторые ответы.')}
}


function checkGame(game, formAnswers) {
  const genres = Array.from(document.querySelectorAll('input[name="genre"]:checked')).map((i) => i.value);
  
  if (!genres.includes(game.genre)) {
    return false;
  }

  if (!formAnswers.adult && game.adult === true) {
    return false;
  }

  if (formAnswers.pc && game.pc === false) {
    return false;
  }

  if (formAnswers.playstation && game.playstation === false) {
    return false;
  }

  if (formAnswers.xbox && game.xbox === false) {
    return false;
  }

  if (formAnswers.switch && game.switch === false) {
    return false;
  }

  if (formAnswers.price_range ?? 4 < game.price_range) {
    return false;
  }

  if (formAnswers.multiplayer) {
    if (game.multiplayer === false) {
      return false;
    }
  } else {
    if (game.singleplayer === false) {
      return false;
    }
  }

  if (formAnswers.is_new !== undefined) {
    return game.is_new === formAnswers.is_new;
  }

  return true;
}