const track = document.querySelector('.carrousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carrousel__button--right');
const prevButton = document.querySelector('.carrousel__button--left');
const dotsNav = document.querySelector('.carrousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

slides[0].style.left = 0;
slides[1].style.left = slideWidth + 'px';
slides[2].style.left = slideWidth * 2 + 'px';