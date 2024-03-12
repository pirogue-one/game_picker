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
// console.log(games);
const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formAnswers = Object.fromEntries(formData);
  console.log(formAnswers);

  let results = games.filter((g) => checkGame(g, formAnswers));
  // if (results.length === 0) {
  //   alert('В нашей базе нет игры с такими парамертами:( Попрбуйте поменять некоторые ответы.')
  //   let index = Math.floor(Math.random() * 59);
  //   results.push(games[index]);
  // } 
    window.localStorage.setItem('results', JSON.stringify(results));
    window.location.href = "./card.html"
}


function checkGame(game, formAnswers) {
  const genres = Array.from(document.querySelectorAll('input[name="genre"]:checked')).map((i) => i.value);

  if (!genres.includes(game.genre)) {
    return false;
  }
  const isAdult = formAnswers.adult === 'true';
  if (!isAdult && game.adult === true) {
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

  const priceRange = +(formAnswers.price_range) ?? 2;
  if (priceRange < game.price_range) {
    return false;
  }
  
  if (formAnswers.singleplayer === 'true')  {
    if (game.singleplayer === false) {
      return false;
    }
  }

  if (formAnswers.multiplayer === 'true') {
    if (game.multiplayer === false) {
      return false;
    }
  } 
  
  if (formAnswers.is_new !== undefined) {
    const isNew = formAnswers.is_new === 'true';
    return game.is_new === isNew;
  }
  
  if (formAnswers.fantasy && game.fantasy === false) {
    return false;
  }

  return true;
}