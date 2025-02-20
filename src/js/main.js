import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

// Получаем кнопку и контейнер слайдов 
const button = document.querySelector('.toggle-button'); //вызов через класс
const swiperWrapper = document.querySelector('.swiper-wrapper');
const image = document.querySelector('.expand');
        
// обработчик клика
button.addEventListener('click', () => {
    swiperWrapper.classList.toggle('expanded');

    if (swiperWrapper.classList.contains('expanded')) {
        button.textContent = 'Скрыть';
        image.src = './img/expand_.svg'; 
    } else {
        button.textContent = 'Показать все';
        image.src = './img/expand.svg'; 
    }
});

const buttonText = document.querySelector('.text__next'); 
const textContainer = document.querySelector('.main__text');
const imageText = document.querySelector('.expand');

buttonText.addEventListener('click', () => {
    textContainer.classList.toggle('expanded');
    
            
    if (textContainer.classList.contains('expanded')) {
        buttonText.textContent = 'Скрыть';
        imageText.src = './img/expand_.svg';
    } else {
        buttonText.textContent = 'Читать далее';
        imageText.src = './img/expand.svg'; 
    }
});

// Контейнер "Ремонт различных видов техники"
const buttonVid = document.querySelector('.toggle-button__vid'); 
const swiperWrapperVid = document.querySelector('.swiper-title');
const imageVid = document.querySelector('.expand');

        
buttonVid.addEventListener('click', () => {
    swiperWrapperVid.classList.toggle('expanded');

        
    if (swiperWrapperVid.classList.contains('expanded')) {
        buttonVid.textContent = 'Скрыть';
        imageVid.src = './img/expand_.svg'; 
    } else {
        buttonVid.textContent = 'Показать все';
        imageVid.src = './img/expand.svg'; 
    }
});


const menuButton = document.querySelector('.button--menu');
const menu = document.querySelector('.mobile__menu');
const menuButtonClose = document.querySelector('.burger');
const pageContentHeader = document.querySelector('header');
const pageContentMain = document.querySelector('main');

const menuButtonCall = document.querySelector(".contact__chat");
const menuFeedback = document.querySelector(".feedback__button");
const menuButtonCloseFeedback = document.querySelector('.feedback__burger');
const menuButtonCallHeader = document.querySelector(".button--chat");

const menuButtonOrderCall = document.querySelector(".contact__cel-phone");
const menuFeedbackOrderCall = document.querySelector(".feedback__button--order-call");
const menuButtonCloseFeedbackCall = document.querySelector('.feedback__burger--order-call');
const menuButtonOrderCallHeader = document.querySelector(".button--call");


menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    menu.classList.toggle('open'); 
    pageContentHeader.style.filter = 'blur(5px)'; //Размытость
    pageContentMain.style.filter = 'blur(5px)'; 
});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target); // Проверяем, было ли нажатие внутри меню
    const isClickOnButton = menuButtonClose.contains(event.target); // Или на кнопке

    const isClickInsideFeedback = menuFeedback.contains(event.target);
    const isClickInsideOrderCall = menuFeedbackOrderCall.contains(event.target);

    const isClickOnButtonCloseFeedback = menuButtonCloseFeedback.contains(event.target); 
    const isClickOnButtonCloseFeedbackCall = menuButtonCloseFeedbackCall.contains(event.target); 

    if (!isClickInsideMenu && !isClickInsideFeedback && !isClickInsideOrderCall && !isClickOnButton) {
            menu.classList.remove('open'); 
            pageContentHeader.style.filter = '';
            pageContentMain.style.filter = '';
        }

    if (isClickOnButton || isClickOnButtonCloseFeedback || isClickOnButtonCloseFeedbackCal) {
        menu.classList.remove('open'); 
        pageContentHeader.style.filter = '';
        pageContentMain.style.filter = '';
    }

});

menuButtonCall.addEventListener('click', (event) => {
    event.stopPropagation();
    menuFeedbackOrderCall.classList.remove("open");
    menuFeedback.classList.toggle('open'); // Переключение класса "open" у меню
    
    if (menuFeedback.classList.contains("open") || menuFeedbackOrderCall.classList.contains("open")) {
        pageContentHeader.style.filter = 'blur(5px)';
        pageContentMain.style.filter = 'blur(5px)'; 
    }
    else {
        pageContentHeader.style.filter = '';
        pageContentMain.style.filter = ''; 
    }
});


menuButtonCallHeader.addEventListener('click', (event) => {
    event.stopPropagation();
    menuFeedbackOrderCall.classList.remove("open");
    menuFeedback.classList.toggle('open'); 
    if (menuFeedback.classList.contains("open") || menuFeedbackOrderCall.classList.contains("open")) {
        pageContentHeader.style.filter = 'blur(5px)';
        pageContentMain.style.filter = 'blur(5px)'; 
    } 
    else {
        pageContentHeader.style.filter = '';
        pageContentMain.style.filter = ''; 
    }
});

menuButtonOrderCall.addEventListener('click', (event) => {
    event.stopPropagation();
    menuFeedbackOrderCall.classList.toggle('open'); 
    menuFeedback.classList.remove('open'); 
    if (menuFeedback.classList.contains("open") || menuFeedbackOrderCall.classList.contains("open")) {
        pageContentHeader.style.filter = 'blur(5px)';
        pageContentMain.style.filter = 'blur(5px)'; 
    } 
    else {
        pageContentHeader.style.filter = '';
        pageContentMain.style.filter = ''; 
    }
});


menuButtonOrderCallHeader.addEventListener('click', (event) => {
    event.stopPropagation();
    menuFeedbackOrderCall.classList.toggle('open'); 
    menuFeedback.classList.remove('open'); 
    if (menuFeedback.classList.contains("open") || menuFeedbackOrderCall.classList.contains("open")) {
        pageContentHeader.style.filter = 'blur(5px)';
        pageContentMain.style.filter = 'blur(5px)'; 
    } 
    else {
        pageContentHeader.style.filter = '';
        pageContentMain.style.filter = ''; 
    }
});


document.addEventListener('click', (event) => {
    const isClickInsideMenuFeedback = menuFeedback.contains(event.target); 
    const isClickInsideMenuFeedbackOrderCall = menuFeedbackOrderCall.contains(event.target); 

    const isClickOnButtonCloseFeedback = menuButtonCloseFeedback.contains(event.target); 
    const isClickOnButtonCloseFeedbackCall = menuButtonCloseFeedbackCall.contains(event.target); 

    const isClickOnFeedbackButton = event.target.closest('.feedback__button');
    const isClickOnOrderCallButton = event.target.closest('.feedback__button--order-call');

    if (!isClickInsideMenuFeedback && !isClickInsideMenuFeedbackOrderCall) {
        menuFeedback.classList.remove('open');
    }

    if (!isClickInsideMenuFeedbackOrderCall && !isClickInsideMenuFeedback) {
        menuFeedbackOrderCall.classList.remove('open');
    }

    if (isClickOnButtonCloseFeedback) {
        menuFeedback.classList.remove('open');
    } 
    if (isClickOnButtonCloseFeedbackCall) {
        menuFeedbackOrderCall.classList.remove('open');
    }

    if (!menuFeedback.classList.contains("open") && !menuFeedbackOrderCall.classList.contains("open")) {
        pageContentHeader.style.filter = '';
        pageContentMain.style.filter = '';
    }
    
});
