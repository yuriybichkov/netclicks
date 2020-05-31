const leftMenu = document.querySelector('.left-menu');
const hamburger = document.querySelector('.hamburger');
const tvShowsList = document.querySelector('.tv-shows__list');
const modal = document.querySelector('.modal');

hamburger.addEventListener('click', () => {
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.left-menu')) {
        leftMenu.classList.remove('openMenu');
        hamburger.classList.remove('open');
    }
});

leftMenu.addEventListener('click', (event) => {
    const target = event.target;
    const dropdown = target.closest('.dropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
        leftMenu.classList.add('openMenu');
        hamburger.classList.add('open');
    }
});
/*

//моя смена карточки

const tvShows = document.querySelector('.tv-shows');
tvShows.addEventListener('mouseover', event => {
    const tvCardImg = event.target.closest('.tv-card__img');
    if (tvCardImg) {
        const backdrop = tvCardImg.getAttribute('data-backdrop');
        const src = tvCardImg.getAttribute('src');
        tvCardImg.setAttribute('src', backdrop);
        tvShows.addEventListener('mouseout', event => {
            tvCardImg.setAttribute('src', src);
        })
    }
});
*/

/*//смена карточки с урока

const changeImage = (event) => {
    const cardTarget = event.target.closest('.tv-shows__item');
    if (cardTarget) {
        const img = cardTarget.querySelector('.tv-card__img');
        const backdrop = img.dataset.backdrop;
        if (backdrop){
            img.dataset.backdrop=img.src;
            img.src=backdrop;
        }
    }
};
tvShowsList.addEventListener('mouseover', changeImage);
tvShowsList.addEventListener('mouseout', changeImage);*/

//смена карточки (деструктуризация)
const changeImage = (event) => {
    const cardTarget = event.target.closest('.tv-shows__item');
    if (cardTarget) {
        const img = cardTarget.querySelector('.tv-card__img');
        if (img.dataset.backdrop) {
            [img.src, img.dataset.backdrop] = [img.dataset.backdrop, img.src]//деструктуризация, меняем местами
        }
    }
};
tvShowsList.addEventListener('mouseover', changeImage);
tvShowsList.addEventListener('mouseout', changeImage);


tvShowsList.addEventListener('click', event => {
    const target = event.target;
    const card = target.closest('.tv-card');
    if (card) {
        document.body.style.overflow = 'hidden';
        modal.classList.remove('hide');
    }
});

modal.addEventListener('click', event => {
    if (event.target.closest('.cross') ||
        event.target.classList.contains('modal')) {
        document.body.style.overflow = '';
        modal.classList.add('hide');
    }
});