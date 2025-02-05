const menuButton = document.querySelector('.button--menu');
const menu = document.querySelector('.mobile__menu');
const menuButtonClose = document.querySelector('.burger');

menuButton.addEventListener('click', () => {
    event.stopPropagation();
    menu.classList.toggle('open'); // Переключение класса "open" у меню
});

document.addEventListener('click', (event) => {
const isClickInsideMenu = menu.contains(event.target); // Проверяем, было ли нажатие внутри меню
const isClickOnButton = menuButtonClose.contains(event.target); // Или на кнопке

/*event — это объект, который содержит информацию о произошедшем событии (например, клик мыши, нажатие клавиши, перемещение курсора и т. д.).*/

/*event.type	Тип события (например, "click", "keydown")
event.target	Элемент, на котором произошло событие
event.clientX / event.clientY	Координаты курсора при событии
event.preventDefault()	Отменяет действие по умолчанию (например, отмена отправки формы)
event.stopPropagation()	Останавливает всплытие события вверх по DOM*/

if (!isClickInsideMenu && !isClickOnButton)  {
        menu.classList.remove('open'); // Закрываем меню, если клик был вне его
    }

    if (isClickOnButton) {
        menu.classList.remove('open'); // Закрываем меню, если клик был на кнопке "закрыть"
    }

});

const swiper = new Swiper('.swiper', {
    // цикличный слайдер
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});


// Получаем кнопку и контейнер слайдов 
const button = document.querySelector('.toggle-button'); //вызов через класс
const swiperWrapper = document.querySelector('.swiper-wrapper');
const image = document.querySelector('.expand');

        
// Добавляем обработчик клика
button.addEventListener('click', () => {
    // Переключаем класс expanded
    swiperWrapper.classList.toggle('expanded');

        
    // Меняем текст кнопки в зависимости от состояния
    if (swiperWrapper.classList.contains('expanded')) {
        button.textContent = 'Скрыть';
        image.src = './img/expand_.svg'; // Новый путь к рисунку
    } else {
        button.textContent = 'Показать все';
        image.src = './img/expand.svg'; // Старый путь
    }
});


// Получаем кнопку и контейнер текста
const buttonText = document.querySelector('.text__next'); //вызов через класс
const textContainer = document.querySelector('.main__text');
const imageText = document.querySelector('.expand');

// Добавляем обработчик клика для контейнера текста
buttonText.addEventListener('click', () => {
    // Переключаем класс expanded
    textContainer.classList.toggle('expanded');
    
            
    // Меняем текст кнопки в зависимости от состояния
    if (textContainer.classList.contains('expanded')) {
        buttonText.textContent = 'Скрыть';
        imageText.src = './img/expand_.svg'; // Новый путь к рисунку
    } else {
        buttonText.textContent = 'Читать далее';
        imageText.src = './img/expand.svg'; // Старый путь
    }
});




// Контейнер "Ремонт различных видов техники"
const buttonVid = document.querySelector('.toggle-button__vid'); 
const swiperWrapperVid = document.querySelector('.swiper-title');
const imageVid = document.querySelector('.expand');

        
// Добавляем обработчик клика
buttonVid.addEventListener('click', () => {
    // Переключаем класс expanded
    swiperWrapperVid.classList.toggle('expanded');

        
    // Меняем текст кнопки в зависимости от состояния
    if (swiperWrapperVid.classList.contains('expanded')) {
        buttonVid.textContent = 'Скрыть';
        imageVid.src = './img/expand_.svg'; // Новый путь к рисунку
    } else {
        buttonVid.textContent = 'Показать все';
        imageVid.src = './img/expand.svg'; // Старый путь
    }
});