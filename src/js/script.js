// "use strict"

// let currentIndex = 0;  // Індекс для тексту починається з 1
// let currentBackgroundIndex = 0;  // Індекс для фону починається з 1
// let currentIndexPage = 0;  // Індекс для слайдів починається з 1
// const totalSlides = 6;  // Всього 5 слайдів
// let autoSlideInterval;  // Змінна для зберігання інтервалу

// // Массиви з текстами і фонами
// const paragraphs = [
//   "The first time I used the Samsung Bespoke Jet™, I cried. I’m not being sensational; I really did. Of course, this vacuum worked great. But that’s not all.",
//   "“If you’re an over-cleaner, like myself, you’ll nerd out on all of the functions. If you avoid this chore at all costs, you’ll appreciate how simple Samsung makes it.” ",
//   "Both the floor and pet hair attachments are cleverly designed to eliminate the dreaded hair wrap. (In other words, you’ll never have to tackle hair tangles with a pair of scissors again.)” ",
//   "“When I learned the Samsung Bespoke Vac cleaned itself with amazing technology, that’s when I cried. No more scraping spider legs and hair out of the crevices with my hands. Its suction power is so strong, the canister is left perfectly clean after every use. It’s like a vacuum for your vacuum.”",
//   "“Because it’s so nice-looking, it can live right in the kitchen. No more hauling a vacuum up and down the basement stairs on the daily”"
// ];

// const backgrounds = [
//   './image/Bespoke1.png',
//   './image/Bespoke2.png',
//   './image/Bespoke3.png',
//   './image/Bespoke4.png',
//   './image/Bespoke5.png',
// ];

// // const ne = [
// //   {
// //     id: 1,
// //     image: './image/Bespoke1.png',
// //     text: "The first time I used the Samsung Bespoke Jet™, I cried. I’m not being sensational; I really did. Of course, this vacuum worked great. But that’s not all.",
// //   },
// //   {
// //     id: 2,
// //     image: './image/Bespoke2.png',
// //     text:"“If you’re an over-cleaner, like myself, you’ll nerd out on all of the functions. If you avoid this chore at all costs, you’ll appreciate how simple Samsung makes it.” ",
// //   },

// //   {
// //     id: 3,
// //     image: './image/Bespoke3.png',
// //     text:  "Both the floor and pet hair attachments are cleverly designed to eliminate the dreaded hair wrap. (In other words, you’ll never have to tackle hair tangles with a pair of scissors again.)” ",
// //   },

// //   {
// //     id: 4,
// //     image: './image/Bespoke4.png',
// //     text: "The first time I used the Samsung Bespoke Jet™, I cried. I’m not being sensational; I really did. Of course, this vacuum worked great. But that’s not all.",
// //   },

// //   {
// //     id: 5,
// //     image: './image/Bespoke5.png',
// //     text: "The first time I used the Samsung Bespoke Jet™, I cried. I’m not being sensational; I really did. Of course, this vacuum worked great. But that’s not all.",
// //   },
// // ]

// // Отримуємо елементи для зміни
// const paragraph = document.getElementById("paragraph");
// const imageSection = document.getElementById('imageSection');
// const indexDisplay = document.getElementById('indexDisplay');
// const initialView = document.getElementById('initialView');
// const secondView = document.getElementById('secondView');

// // Функція для плавної зміни параграфа
// function changeParagraph(n) {
//   paragraph.classList.add('hidden');
//   setTimeout(() => {
//     currentIndex = (currentIndex + n - 1 + paragraphs.length) % paragraphs.length + 1;
//     paragraph.innerHTML = paragraphs[currentIndex - 2] + '<a class="link" href="about:blank" target="_blank">Read More...</a>';
//     paragraph.classList.remove('hidden');
//   }, 300);
// }

// // Функція для плавної зміни фону
// function changeBackground(n) {
//   imageSection.classList.add('hidden');
//   setTimeout(() => {
//     currentBackgroundIndex = (currentBackgroundIndex + n - 1 + backgrounds.length) % backgrounds.length + 1;
//     imageSection.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex - 2]})`;
//     imageSection.classList.remove('hidden');
//   }, 500);
// }

// // Функція для перемикання слайдів
// function changeSlide(n) {
//   updateIndex();

//   if (currentIndex === 0) {
//     initialView.classList.remove('hidden');
//     secondView.classList.add('hidden');
//   } else {
//     initialView.classList.add('hidden');
//     secondView.classList.remove('hidden');   
//   }
// }

// // Функція для оновлення тексту індексу
// function updateIndex() { 
//   indexDisplay.textContent = `${currentIndex} / 5`;
// }

// // Автоматичне перемикання слайдів кожні 3 секунди
// function startAutoSlide() {
//   autoSlideInterval = setInterval(() => {
//     changeParagraph(1);
//     changeBackground(1);
//     changeSlide(1);
//   }, 3000);
// }

// // Зупинка автоматичного перемикання при взаємодії з кнопками
// function stopAutoSlide() {
//   clearInterval(autoSlideInterval);
// }

// // Обробники для кнопок "prev" та "next"
// document.querySelector(".prev").addEventListener('click', function() {
//   stopAutoSlide();  // Зупиняємо автоматичне перемикання
//   changeParagraph(-1);
//   changeBackground(-1);
//   changeSlide(-1);
// });

// document.querySelector(".next").addEventListener('click', function() {
//   stopAutoSlide();  // Зупиняємо автоматичне перемикання
//   changeParagraph(1);
//   changeBackground(1);
//   changeSlide(1);
// });

// // Ініціалізація індексу та запуск авто-перемикання при завантаженні сторінки
// window.onload = function() {
//   console.log(currentBackgroundIndex, currentIndex);
//   updateIndex();
//   startAutoSlide();  // Запуск автоматичної зміни слайдів
// };

// "use strict";

let currentIndex = 0;  // Індекс для тексту починається з 0
let currentBackgroundIndex = 0;  // Індекс для фону починається з 0
let currentIndexPage = 0;  // Індекс для слайдів починається з 0
const totalSlides = 6;  // Всього 6 слайдів
let autoSlideInterval;  // Змінна для зберігання інтервалу

// Массиви з текстами і фонами
const paragraphs = [
  '',
  "The first time I used the Samsung Bespoke Jet™, I cried. I’m not being sensational; I really did. Of course, this vacuum worked great. But that’s not all.",
  "“If you’re an over-cleaner, like myself, you’ll nerd out on all of the functions. If you avoid this chore at all costs, you’ll appreciate how simple Samsung makes it.” ",
  "Both the floor and pet hair attachments are cleverly designed to eliminate the dreaded hair wrap. (In other words, you’ll never have to tackle hair tangles with a pair of scissors again.)” ",
  "“When I learned the Samsung Bespoke Vac cleaned itself with amazing technology, that’s when I cried. No more scraping spider legs and hair out of the crevices with my hands. Its suction power is so strong, the canister is left perfectly clean after every use. It’s like a vacuum for your vacuum.”",
  "“Because it’s so nice-looking, it can live right in the kitchen. No more hauling a vacuum up and down the basement stairs on the daily”",
  
];

const backgrounds = [
  "",
  './image/Bespoke1.png',
  './image/Bespoke2.png',
  './image/Bespoke3.png',
  './image/Bespoke4.png',
  './image/Bespoke5.png',
];

// Отримуємо елементи для зміни
const paragraph = document.getElementById("paragraph");
const imageSection = document.getElementById('imageSection');
const indexDisplay = document.getElementById('indexDisplay');
const initialView = document.getElementById('initialView');
const secondView = document.getElementById('secondView');

// Функція для плавної зміни параграфа
// function changeParagraph(n) {
//   paragraph.classList.add('hidden');
//   setTimeout(() => {
//     currentIndex = (currentIndex + n + paragraphs.length) % paragraphs.length;  // Циклічний індекс
//     paragraph.innerHTML = paragraphs[currentIndex] + '<a class="link" href="about:blank" target="_blank"> Read More... </a>';
//     paragraph.classList.remove('hidden');
//   }, 300);
// }

// // Функція для плавної зміни фону
// function changeBackground(n) {
//   imageSection.classList.add('hidden');
//   setTimeout(() => {
//     currentIndex = (currentIndex + n + backgrounds.length) % backgrounds.length;  //
//     imageSection.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
//     imageSection.classList.remove('hidden');
//   }, 500);
// }



// Функція для зміни тексту і фону
function changeSlideContent(n) {
  // Оновлюємо індекс для циклічної зміни тексту і фону
  currentIndex = (currentIndex + n + paragraphs.length) % paragraphs.length;

  // Ховаємо текст і фон перед зміною
  paragraph.classList.add('hidden');
  imageSection.classList.add('hidden');
  
  setTimeout(() => {
    // Змінюємо текст і фон
    paragraph.innerHTML = paragraphs[currentIndex] + '<a class="link" href="about:blank" target="_blank"> Read More... </a>';
    imageSection.style.backgroundImage = `url(${backgrounds[currentIndex]})`;

    // Показуємо оновлені елементи
    paragraph.classList.remove('hidden');
    imageSection.classList.remove('hidden');
  }, 300);  // Затримка для плавної зміни
}

// Функція для перемикання слайдів
function changeSlide(n) {
  currentIndexPage = (currentIndexPage + n + totalSlides) % totalSlides;  // Циклічний індекс
  updateIndex();

  if (currentIndexPage === 0) {
    initialView.classList.remove('hidden');
    secondView.classList.add('hidden');
  } else {
    initialView.classList.add('hidden');
    secondView.classList.remove('hidden');   
  }
}

// Функція для оновлення тексту індексу
function updateIndex() { 
  indexDisplay.textContent = `${currentIndexPage} / ${totalSlides- 1}`;
}

// Автоматичне перемикання слайдів кожні 3 секунди
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    changeSlideContent(1);  // Оновлюємо контент
    changeSlide(1);         // Оновлюємо слайд
  }, 3000);
}

// Зупинка автоматичного перемикання при взаємодії з кнопками
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Обробники для кнопок "prev" та "next"
document.querySelector(".prev").addEventListener('click', function() {
  stopAutoSlide();  // Зупиняємо автоматичне перемикання
  changeSlideContent(-1);  // Оновлюємо контент назад
  changeSlide(-1);         // Оновлюємо слайд назад
});

document.querySelector(".next").addEventListener('click', function() {
  stopAutoSlide();  // Зупиняємо автоматичне перемикання
  changeSlideContent(1);   // Оновлюємо контент вперед
  changeSlide(1);          // Оновлюємо слайд вперед
});

// Ініціалізація індексу та запуск авто-перемикання при завантаженні сторінки
window.onload = function() {
  updateIndex();
  startAutoSlide();  // Запуск автоматичної зміни слайдів
};
