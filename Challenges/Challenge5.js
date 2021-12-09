const cat = document.getElementById("catButton");
const modalContainer = document.querySelector(".modalContainer");

cat.onclick = () => {
    generateModal() 
}

function generateModal() {
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