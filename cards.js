'use strict';

//генерация карточек подобранных игр

const firstCard = document.querySelector('.card');
console.log(firstCard);

const results = JSON.parse(window.localStorage.getItem('results'));

for (let index = 0; index < results.length - 1; index++) {
    const clone = firstCard.cloneNode(true);
    firstCard.after(clone);
}

const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    const cardName = card.querySelector('.card__name');
    const cardDescr = card.querySelector('.card__descr');
    const cardImage = card.querySelector('.card__img');
    const cardLink = card.querySelector('.card__link');
    const cardGenre = card.querySelector('.card__prop-genre');
    const cardPlatform = card.querySelector('.card__prop-platform');
    const cardMode = card.querySelector('.card__prop-mode');

    const game = results[index];
    cardName.innerHTML = game.name;
    cardDescr.innerHTML = game.description  + `${game.adult ? ' (18+)' : ''}`;
    cardImage.src = game.image_url;
    cardLink.href = game.link;
    cardGenre.innerHTML = game.genre;
    cardPlatform.innerHTML = getPlatforms(game);
    cardMode.innerHTML = getMode(game);

})

function getPlatforms(game) {
    let platforms = '';
    if (game.pc) {
        platforms += 'ПК, '
    } 
    if (game.playstation) {
        platforms += 'PlayStation, '
    }
    if (game.xbox) {
        platforms += 'Xbox, '
    }
    if (game.switch) {
        platforms += 'Nintendo Switch, '
    }
    if (game.mobile) {
        platforms += 'Мобильные устройства, '
    }

    return platforms.slice(0, -2);
}

function getMode(game) {
    let mode = '';
    if (game.singleplayer) {
        mode += 'Single, '
    }
    if (game.multiplayer) {
        mode += 'Multipleer, '
    }

    return mode.slice(0, -2);
}

