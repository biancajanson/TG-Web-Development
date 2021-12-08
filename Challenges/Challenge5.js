const cat = document.getElementById("catButton");
const modalContainer = document.querySelector(".modalContainer");
cat.onclick = () => {
    generateModal() 
}

function generateModal() {
    const modal = document.createElement('div')
    modal.classList.add("modal");
    modalContainer.appendChild(modal)
    const modalImage = document.createElement('div')
    modalImage.classList.add('modalImage');
    modalImage.innerText = 'Hello World';
    modal.appendChild(modalImage)


    modalContainer.onclick = () => {
        modalContainer.innerHTML = ""
    }
}