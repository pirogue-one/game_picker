'use strict';

//переключение вопросов

const swiper = new Swiper('.swiper-answer', {

  direction: 'vertical',
  mousewheel: {
    enabled: false,
    thresholdDelta: 20
  },
  // loop: true,
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

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formAnswers = Object.fromEntries(formData);
  if (!formAnswers.genre) {
    swiper.slideToLoop(0);
    showModal();
    return;
  }

  if (!formAnswers.adult) {
    swiper.slideTo(1);
    showModal();
    return;
  }

  if (!formAnswers.pc && !formAnswers.playstation && !formAnswers.xbox && !formAnswers.switch && !formAnswers.mobile) {
    swiper.slideTo(2);
   showModal();
    return;
  }

  if (!formAnswers.price_range) {
    swiper.slideTo(3);
    showModal();
    return;
  }

  if (!formAnswers.singleplayer) {
    swiper.slideTo(4);
    showModal();
    return;
  }

  if (!formAnswers.multiplayer) {
    swiper.slideTo(5);
    showModal();
    return;
  }

  if (!formAnswers.is_new) {
    swiper.slideTo(6);
    showModal();
    return;
  }

  if (!formAnswers.fantasy) {
    swiper.slideTo(7);
    showModal();
    return;
  }

  if (!formAnswers.a5) {
    swiper.slideTo(8);
    showModal();
    return;
  }

  if (!formAnswers.a6) {
    swiper.slideTo(9);
    showModal();
    return;
  }

  if (!formAnswers.a7) {
    swiper.slideTo(10);
    showModal();
    return;
  }

  if (!formAnswers.a8) {
    swiper.slideTo(11);
    showModal();
    return;
  }

  if (!formAnswers.a12) {
    swiper.slideTo(12);
    showModal();
    return;
  }

  if (!formAnswers.a15) {
    swiper.slideTo(13);
    showModal();
    return;
  }

  if (!formAnswers.a16) {
    swiper.slideTo(14);
    showModal();
    return;
  }

  if (!formAnswers.a17) {
    swiper.slideTo(15);
    showModal();
    return;
  }

  if (!formAnswers.a18) {
    swiper.slideTo(16);
    showModal();
    return;
  }

  if (!formAnswers.a19) {
    swiper.slideTo(17);
    showModal();
    return;
  }

  if (!formAnswers.a20) {
    swiper.slideTo(18);
    showModal();
    return;
  }


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

  if (formAnswers.mobile && game.mobile === false) {
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
  
  if (formAnswers.is_new === 'true') {
    if (game.is_new === false) {
      return false;
    }
  }
  
  if (formAnswers.fantasy === 'true') {
    if (game.fantasy === false) {
      return false;
    }
  }

  return true;
}

const modalWindow = document.querySelector('.modal-window');
const modalBtn = modalWindow.querySelector('.btn');
modalBtn.addEventListener('click', hideModal);

function showModal() {
  modalWindow.classList.remove('hidden');
}

function hideModal() {
  modalWindow.classList.add('hidden');
}