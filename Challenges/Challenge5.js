const cat = document.getElementById("catButton");
const dog = document.getElementById("dogButton");
const parrot = document.getElementById("parrotButton");
const modalContainer = document.querySelector(".modalContainer");

cat.onclick = () => {
    generateModal1() 
}

function generateModal1() {
    const modal = document.createElement('div');
    modal.classList.add("modal");
    modalContainer.appendChild(modal);
    const modalImage = document.createElement('img');
    modalImage.classList.add('modalImage');
    modalImage.src = 'cat.jpg';
    modal.appendChild(modalImage);
    const modalText = document.createElement('p');
    modalText.classList.add('modalText');
    modal.appendChild(modalText);
    modalText.innerText = 'test';
    modalContainer.onclick = () => {
        modalContainer.innerHTML = ""
    }
} 

dog.onclick = () => {
    generateModal2() 
}

function generateModal2() {
    const modal = document.createElement('div');
    modal.classList.add("modal");
    modalContainer.appendChild(modal);
    const modalImage = document.createElement('img');
    modalImage.classList.add('modalImage');
    modalImage.src = 'dog.jpg';
    modal.appendChild(modalImage);
    const modalText = document.createElement('p');
    modalText.classList.add('modalText');
    modal.appendChild(modalText);
    modalText.innerText = 'test';
    modalContainer.onclick = () => {
        modalContainer.innerHTML = ""
    }
} 

parrot.onclick = () => {
    generateModal3() 
}

function generateModal3() {
    const modal = document.createElement('div');
    modal.classList.add("modal");
    modalContainer.appendChild(modal);
    const modalImage = document.createElement('img');
    modalImage.classList.add('modalImage');
    modalImage.src = 'parrot.jpg';
    modal.appendChild(modalImage);
    const modalText = document.createElement('p');
    modalText.classList.add('modalText');
    modal.appendChild(modalText);
    modalText.innerText = 'test';
    modalContainer.onclick = () => {
        modalContainer.innerHTML = ""
    }
} 