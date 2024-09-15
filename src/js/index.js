import '../css/styles.css'

let currentIndex = 0;
let currentIndexPage = 0;
const totalSlides = 6; 
let autoSlideInterval; 


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


const paragraph = document.getElementById("paragraph");
const imageSection = document.getElementById('imageSection');
const indexDisplay = document.getElementById('indexDisplay');
const initialView = document.getElementById('initialView');
const secondView = document.getElementById('secondView');

function changeSlideContent(n) {

  currentIndex = (currentIndex + n + paragraphs.length) % paragraphs.length;

  paragraph.classList.add('hidden');
  imageSection.classList.add('hidden');
  
  setTimeout(() => {
    paragraph.innerHTML = paragraphs[currentIndex] + '<a class="link" href="about:blank" target="_blank"> Read More... </a>';
    imageSection.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
    paragraph.classList.remove('hidden');
    imageSection.classList.remove('hidden');
  }, 200);
}

function changeSlide(n) {
  currentIndexPage = (currentIndexPage + n + totalSlides) % totalSlides;
  updateIndex();

  if (currentIndexPage === 0) {
    initialView.classList.remove('hidden');
    secondView.classList.add('hidden');
  } else {
    initialView.classList.add('hidden');
    secondView.classList.remove('hidden');   
  }
}

function updateIndex() { 
  indexDisplay.textContent = `${currentIndexPage} / ${totalSlides- 1}`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    changeSlideContent(1);  
    changeSlide(1);        
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}


document.querySelector(".prev").addEventListener('click', function() {
  stopAutoSlide(); 
  changeSlideContent(-1); 
  changeSlide(-1);     
});

document.querySelector(".next").addEventListener('click', function() {
  stopAutoSlide();  
  changeSlideContent(1);  
  changeSlide(1);        
});

window.onload = function() {
  updateIndex();
  startAutoSlide();
};
