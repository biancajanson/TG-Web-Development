const track = document.querySelector('.carrousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carrousel__button--right');
const prevButton = document.querySelector('.carrousel__button--left');
const dotsNav = document.querySelector('.carrousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth);

// arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// when I click left, move slides to the left


// when I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    // move to the slide
    track.style.transform = 'translateX(-' + amountToMove + ')';
})


// when I click the nav indicators, move to that slide

