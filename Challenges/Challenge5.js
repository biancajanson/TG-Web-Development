const catButton = document.getElementById("catButton");
const dogButton = document.getElementById("dogButton");
const parrotButton = document.getElementById("parrotButton");
const modalContainer = document.querySelector(".modalContainer");

catButton.onclick = showCat();
// dogButton.onclick = showDog();
// parrotButton.onclick = showParrot();

function generateModal() {
    const modal = document.createElement('div')
    modal.classList.add("modal");
    modalContainer.appendChild(modal)
    const modalImage = document.createElement('img')
    modalImage.classList.add('modalImage');
    modalImage.src = '';
    modal.appendChild(modalImage)
    const modalText = document.createElement('p')
    modalText.classList.add('modalText');
    modalText.innerText = '';
    modal.appendChild(modalText)
    const modalClose = document.createElement('span')
    modalClose.classList.add('spanClose');
    modalClose.innerText = 'X';
    modal.appendChild(modalClose)
    // modalClose.onclick = hideModalContainer;
    modalContainer.onclick = () => {
        modalContainer.innerHTML = ""
    }
}

function showCat() {
    generateModal();
    modalImage.src = 'cat.jpg';
    let catQuotes = [
        `What greater gift than the love of a cat.`,
        `In a cat's eye, all things belong to cats.`,
        `There are two means of refuge from the miseries of life: music and cats.`,
        `A lie is like a cat: you need to stop it before it gets out the door or it’s really hard to catch.`,
        `A cat will be your friend, but never your slave.`
    ]
    let catQuote = catQuotes[Math.floor(Math.random() * catQuotes.length)];
    modalText.innerText = catQuotes;
}